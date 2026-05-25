"use client"

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ClipboardEvent,
  type DragEvent,
} from "react"
import {
  CheckCircle2,
  ExternalLink,
  ImageIcon,
  Paperclip,
  RotateCcw,
  Send,
  Sparkles,
  Undo2,
  Wrench,
  X,
} from "lucide-react"

// --- Types -------------------------------------------------------------------

type ToolCall = { name: string; summary: string }
type Commit = { sha: string; files: string[] } | null

type Attachment = {
  id: string
  kind: "image"
  mediaType: "image/png" | "image/jpeg" | "image/webp" | "image/gif"
  data: string
  fileName: string
  previewUrl: string
}

type UndoCandidate = {
  sha: string
  subject: string
  url: string
  filesChanged: string[]
}

type UndoResult = {
  revertedSha: string
  revertedSubject: string
  newSha: string
}

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  attachments?: Attachment[]
  toolCalls?: ToolCall[]
  commit?: Commit
  undo?: UndoResult
  isStreaming?: boolean
}

const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024
const MAX_ATTACHMENTS = 4
const ACCEPTED_MIME = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
] as const
type AcceptedMime = (typeof ACCEPTED_MIME)[number]

function uid() {
  return Math.random().toString(36).slice(2)
}

// --- Main component ----------------------------------------------------------

export function AdminChat({
  userId,
  firstName,
  fullName,
  email,
}: {
  userId: string
  firstName: string | null
  fullName: string | null
  email: string | null
}) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [sessionId] = useState(uid)
  const [busy, setBusy] = useState(false)
  const [pendingAttachments, setPendingAttachments] = useState<Attachment[]>([])
  const [dragActive, setDragActive] = useState(false)
  const [attachError, setAttachError] = useState<string | null>(null)
  const [undoable, setUndoable] = useState<UndoCandidate | null>(null)
  const [undoBusy, setUndoBusy] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const dragDepthRef = useRef(0)

  const refreshUndoable = useCallback(async () => {
    try {
      const res = await fetch("/api/admin-agent/undo", { method: "GET" })
      if (!res.ok) { setUndoable(null); return }
      const data = (await res.json()) as { undoable: UndoCandidate | null }
      setUndoable(data.undoable ?? null)
    } catch {
      setUndoable(null)
    }
  }, [])

  useEffect(() => { void refreshUndoable() }, [refreshUndoable])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, busy])

  useEffect(() => {
    if (!attachError) return
    const t = setTimeout(() => setAttachError(null), 4000)
    return () => clearTimeout(t)
  }, [attachError])

  function removePendingAttachment(id: string) {
    setPendingAttachments((prev) => prev.filter((a) => a.id !== id))
  }

  async function attachFiles(files: FileList | File[]) {
    const items = Array.from(files)
    const accepted: Attachment[] = []
    for (const file of items) {
      if (pendingAttachments.length + accepted.length >= MAX_ATTACHMENTS) {
        setAttachError(`Max ${MAX_ATTACHMENTS} images per message.`)
        break
      }
      if (!ACCEPTED_MIME.includes(file.type as AcceptedMime)) {
        setAttachError(`Unsupported type: ${file.type || file.name}`)
        continue
      }
      if (file.size > MAX_ATTACHMENT_BYTES) {
        setAttachError(`${file.name} is too large (max 4 MB).`)
        continue
      }
      try {
        const { base64, dataUrl } = await readFileAsBase64(file)
        accepted.push({
          id: uid(),
          kind: "image",
          mediaType: file.type as AcceptedMime,
          data: base64,
          fileName: file.name || "screenshot",
          previewUrl: dataUrl,
        })
      } catch {
        setAttachError(`Couldn't read ${file.name}.`)
      }
    }
    if (accepted.length > 0) setPendingAttachments((prev) => [...prev, ...accepted])
  }

  async function send(text: string) {
    const trimmed = text.trim()
    if ((!trimmed && pendingAttachments.length === 0) || busy) return

    const assistantId = uid()
    const userMsg: Message = {
      id: uid(),
      role: "user",
      content: trimmed,
      attachments: pendingAttachments.length > 0 ? [...pendingAttachments] : undefined,
    }
    const assistantMsg: Message = {
      id: assistantId,
      role: "assistant",
      content: "",
      isStreaming: true,
      toolCalls: [],
    }

    setMessages((prev) => [...prev, userMsg, assistantMsg])
    setInput("")
    setPendingAttachments([])
    setBusy(true)

    const allMessages = [...messages, userMsg]
    const history = allMessages.map((m) => {
      if (m.attachments && m.attachments.length > 0) {
        const blocks: object[] = m.attachments.map((a) => ({
          type: "image",
          source: { type: "base64", media_type: a.mediaType, data: a.data },
        }))
        if (m.content) blocks.push({ type: "text", text: m.content })
        return { role: m.role, content: blocks }
      }
      return { role: m.role, content: m.content }
    })

    try {
      const res = await fetch("/api/admin-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history, sessionId }),
      })

      if (!res.ok || !res.body) throw new Error(`Request failed: ${res.status}`)

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split("\n")
        buffer = lines.pop() ?? ""

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue
          const raw = line.slice(6).trim()
          if (!raw) continue
          try {
            const event = JSON.parse(raw)
            if (event.type === "text") {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, content: m.content + event.content } : m
                )
              )
            } else if (event.type === "tool_call") {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId
                    ? { ...m, toolCalls: [...(m.toolCalls ?? []), { name: event.name, summary: event.summary }] }
                    : m
                )
              )
            } else if (event.type === "committed") {
              const commit: Commit = { sha: event.sha, files: event.files }
              setMessages((prev) =>
                prev.map((m) => (m.id === assistantId ? { ...m, commit } : m))
              )
              void refreshUndoable()
            } else if (event.type === "error") {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId
                    ? { ...m, content: m.content || `Error: ${event.message}` }
                    : m
                )
              )
            }
          } catch {
            // ignore malformed SSE lines
          }
        }
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong."
      setMessages((prev) =>
        prev.map((m) => (m.id === assistantId ? { ...m, content: message } : m))
      )
    } finally {
      setMessages((prev) =>
        prev.map((m) => (m.id === assistantId ? { ...m, isStreaming: false } : m))
      )
      setBusy(false)
    }
  }

  async function performUndo() {
    if (!undoable || undoBusy) return
    const ok = window.confirm(
      `Undo "${undoable.subject}"?\n\nThis reverts the changed files to their pre-edit state and publishes a new revert commit. Continue?`
    )
    if (!ok) return

    const target = undoable
    setUndoBusy(true)
    try {
      const res = await fetch("/api/admin-agent/undo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error((data as { error?: string }).error ?? `Undo failed (${res.status})`)
      }
      const data = (await res.json()) as {
        success: boolean
        revertedSha: string
        newSha: string
        message: string
      }
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: "assistant",
          content: `Reverted "${target.subject}".`,
          undo: { revertedSha: data.revertedSha, revertedSubject: target.subject, newSha: data.newSha },
        },
      ])
      await refreshUndoable()
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: "assistant",
          content: err instanceof Error ? `Couldn't undo: ${err.message}` : "Couldn't undo.",
        },
      ])
    } finally {
      setUndoBusy(false)
    }
  }

  function handlePaste(e: ClipboardEvent<HTMLTextAreaElement>) {
    const files: File[] = []
    for (const item of Array.from(e.clipboardData?.items ?? [])) {
      if (item.kind === "file" && item.type.startsWith("image/")) {
        const f = item.getAsFile()
        if (f) files.push(f)
      }
    }
    if (files.length > 0) {
      e.preventDefault()
      void attachFiles(files)
    }
  }

  function handleDragEnter(e: DragEvent<HTMLDivElement>) {
    if (!hasImageInDataTransfer(e.dataTransfer)) return
    e.preventDefault()
    dragDepthRef.current += 1
    setDragActive(true)
  }

  function handleDragLeave(e: DragEvent<HTMLDivElement>) {
    if (!hasImageInDataTransfer(e.dataTransfer)) return
    e.preventDefault()
    dragDepthRef.current = Math.max(0, dragDepthRef.current - 1)
    if (dragDepthRef.current === 0) setDragActive(false)
  }

  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    if (hasImageInDataTransfer(e.dataTransfer)) e.preventDefault()
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    if (!hasImageInDataTransfer(e.dataTransfer)) return
    e.preventDefault()
    dragDepthRef.current = 0
    setDragActive(false)
    if (e.dataTransfer.files.length > 0) void attachFiles(e.dataTransfer.files)
  }

  const showWelcome = messages.length === 0
  const who = fullName ?? email ?? userId

  return (
    <div
      className="flex-1 flex flex-col max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 relative"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* Drag overlay */}
      {dragActive && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#5C2D4F]/10 border-2 border-dashed border-[#5C2D4F] rounded-2xl pointer-events-none">
          <div className="flex flex-col items-center gap-2 text-[#5C2D4F]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <ImageIcon className="w-10 h-10" />
            <p className="text-sm font-semibold">Drop image to attach</p>
          </div>
        </div>
      )}

      {/* Undo banner */}
      {undoable && <UndoBanner candidate={undoable} busy={undoBusy} onClick={performUndo} />}

      {showWelcome ? (
        // Empty state — welcome heading + composer card sit together, vertically centered
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl">
            <WelcomeCard firstName={firstName} email={email} />
            <Composer
              input={input}
              setInput={setInput}
              busy={busy}
              pendingAttachments={pendingAttachments}
              onRemovePending={removePendingAttachment}
              attachError={attachError}
              fileInputRef={fileInputRef}
              onAttachFiles={attachFiles}
              onSubmit={() => send(input)}
              onPaste={handlePaste}
            />
            <FooterLine who={who} />
          </div>
        </div>
      ) : (
        // Active state — message log fills the workspace, composer docks at bottom
        <>
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto pr-1"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <ul className="space-y-5 pb-6">
              {messages.map((m) => (
                <li key={m.id} className="space-y-2">
                  <MessageBubble
                    role={m.role}
                    content={m.content}
                    attachments={m.attachments}
                    isStreaming={m.isStreaming}
                    initials={initialsFor(fullName, email)}
                  />
                  {m.role === "assistant" && m.toolCalls && m.toolCalls.length > 0 && (
                    <ToolCallStrip toolCalls={m.toolCalls} />
                  )}
                  {m.role === "assistant" && m.commit && <CommitCard commit={m.commit} />}
                  {m.role === "assistant" && m.undo && <UndoCard undo={m.undo} />}
                </li>
              ))}
              {busy && (
                <li><ThinkingBubble /></li>
              )}
            </ul>
          </div>
          <div className="mt-3">
            <Composer
              input={input}
              setInput={setInput}
              busy={busy}
              pendingAttachments={pendingAttachments}
              onRemovePending={removePendingAttachment}
              attachError={attachError}
              fileInputRef={fileInputRef}
              onAttachFiles={attachFiles}
              onSubmit={() => send(input)}
              onPaste={handlePaste}
            />
            <FooterLine who={who} />
          </div>
        </>
      )}
    </div>
  )
}

// --- Sub-components ----------------------------------------------------------

function WelcomeCard({
  firstName,
  email,
}: {
  firstName: string | null
  email: string | null
}) {
  const raw = firstName ?? email?.split("@")[0] ?? "there"
  const greeting = raw.charAt(0).toUpperCase() + raw.slice(1)
  return (
    <div className="text-center mb-6">
      <h1
        className="text-3xl sm:text-4xl text-[#2C2520] font-light leading-tight mb-3"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        Hi {greeting} — what would you like to change today?
      </h1>
      <p
        className="text-[rgba(44,37,32,0.6)] text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Tell me what you want to do in plain English. I can edit articles, draft
        new ones, change page copy, and update the site. Attach a screenshot when
        it&rsquo;s easier to show than describe.
      </p>
    </div>
  )
}

/**
 * Composer card — textarea with paperclip + send button tucked into the
 * bottom corners. Used in both the empty state and docked at the bottom
 * of the active message view.
 */
function Composer({
  input,
  setInput,
  busy,
  pendingAttachments,
  onRemovePending,
  attachError,
  fileInputRef,
  onAttachFiles,
  onSubmit,
  onPaste,
}: {
  input: string
  setInput: (s: string) => void
  busy: boolean
  pendingAttachments: Attachment[]
  onRemovePending: (id: string) => void
  attachError: string | null
  fileInputRef: React.RefObject<HTMLInputElement | null>
  onAttachFiles: (files: FileList | File[]) => void | Promise<void>
  onSubmit: () => void
  onPaste: (e: ClipboardEvent<HTMLTextAreaElement>) => void
}) {
  const canAttachMore = pendingAttachments.length < MAX_ATTACHMENTS
  const canSubmit = !busy && (input.trim().length > 0 || pendingAttachments.length > 0)

  return (
    <div>
      {pendingAttachments.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {pendingAttachments.map((a) => (
            <div
              key={a.id}
              className="relative rounded-lg overflow-hidden border border-[rgba(92,45,79,0.15)] bg-white shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.previewUrl} alt={a.fileName} className="h-16 w-auto max-w-[120px] object-cover block" />
              <button
                type="button"
                onClick={() => onRemovePending(a.id)}
                className="absolute top-1 right-1 flex items-center justify-center w-5 h-5 rounded-full bg-black/60 hover:bg-black/80 text-white"
                aria-label={`Remove ${a.fileName}`}
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      {attachError && (
        <p className="mb-2 text-xs text-[#B55A3A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {attachError}
        </p>
      )}

      <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} className="relative">
        <div className="relative rounded-2xl border border-[rgba(92,45,79,0.15)] bg-white shadow-sm focus-within:border-[#5C2D4F]/40 focus-within:shadow-md transition-all">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                onSubmit()
              }
            }}
            onPaste={onPaste}
            rows={3}
            placeholder="What would you like to change? Edits, new articles, page copy, screenshots — anything goes."
            className="block w-full resize-none rounded-2xl bg-transparent px-5 pt-4 pb-14 text-base leading-relaxed text-[#2C2520] placeholder:text-[rgba(44,37,32,0.35)] focus:outline-none"
            style={{ fontFamily: "'DM Sans', sans-serif", maxHeight: 280 }}
            disabled={busy}
          />

          {/* Action row inset at the bottom of the card */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 pb-3 pointer-events-none">
            <div className="pointer-events-auto">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={busy || !canAttachMore}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full text-[rgba(92,45,79,0.45)] hover:text-[#5C2D4F] hover:bg-[#5C2D4F]/8 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Attach screenshot"
                title="Attach screenshot (or paste / drag-and-drop)"
              >
                <Paperclip className="w-4 h-4" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept={ACCEPTED_MIME.join(",")}
                multiple
                className="hidden"
                onChange={(e) => {
                  if (e.target.files) void onAttachFiles(e.target.files)
                  e.target.value = ""
                }}
              />
            </div>

            <div className="pointer-events-auto">
              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#5C2D4F] hover:bg-[#4a2440] text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow"
                aria-label="Send"
                title="Send (or press Enter)"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

function FooterLine({ who }: { who: string }) {
  return (
    <p
      className="mt-3 text-center text-[11px] text-[rgba(44,37,32,0.4)]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      Signed in as {who}. Every edit auto-publishes — use Undo if you change your mind.
    </p>
  )
}

function MessageBubble({
  role,
  content,
  attachments,
  isStreaming,
  initials,
}: {
  role: "user" | "assistant"
  content: string
  attachments?: Attachment[]
  isStreaming?: boolean
  initials: string
}) {
  if (role === "user") {
    return (
      <div className="flex items-start gap-3 justify-end">
        <div className="max-w-[80%] flex flex-col items-end gap-2">
          {attachments && attachments.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-end">
              {attachments.map((a) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={a.id}
                  src={a.previewUrl}
                  alt={a.fileName}
                  className="max-w-[220px] max-h-[220px] rounded-xl border border-[rgba(92,45,79,0.12)] object-cover bg-white"
                />
              ))}
            </div>
          )}
          {content && (
            <div
              className="bg-[#5C2D4F] text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {content}
            </div>
          )}
        </div>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2C2520] text-white text-xs font-semibold flex items-center justify-center">
          {initials}
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#5C2D4F] to-[#3a1a33] text-white flex items-center justify-center">
        <Sparkles className="w-4 h-4" />
      </div>
      <div
        className="max-w-[80%] bg-white border border-[rgba(92,45,79,0.1)] text-[#2C2520] rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {content || (isStreaming && (
          <span className="inline-flex gap-1 items-center py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5C2D4F] animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#5C2D4F] animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#5C2D4F] animate-bounce" />
          </span>
        ))}
      </div>
    </div>
  )
}

function ThinkingBubble() {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#5C2D4F] to-[#3a1a33] text-white flex items-center justify-center">
        <Sparkles className="w-4 h-4" />
      </div>
      <div className="bg-white border border-[rgba(92,45,79,0.1)] rounded-2xl rounded-tl-sm px-4 py-3">
        <span className="inline-flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5C2D4F] animate-bounce [animation-delay:-0.3s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#5C2D4F] animate-bounce [animation-delay:-0.15s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#5C2D4F] animate-bounce" />
        </span>
      </div>
    </div>
  )
}

function ToolCallStrip({ toolCalls }: { toolCalls: ToolCall[] }) {
  return (
    <div className="ml-11 flex flex-wrap gap-1.5">
      {toolCalls.map((tc, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#5C2D4F]/5 border border-[#5C2D4F]/15 text-[11px] text-[#5C2D4F]/70"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <Wrench className="w-3 h-3" />
          {tc.summary}
        </span>
      ))}
    </div>
  )
}

function CommitCard({ commit }: { commit: { sha: string; files: string[] } }) {
  const url = `https://github.com/FixYourPeriod/nj-website/commit/${commit.sha}`
  return (
    <div className="ml-11 inline-flex items-start gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 max-w-full">
      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
      <div className="min-w-0 flex-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-sm font-semibold text-emerald-900">Published to production</span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 underline"
          >
            {commit.sha.slice(0, 7)}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <div className="mt-1 text-xs text-emerald-800/90 break-all">{commit.files.join(", ")}</div>
        <div className="mt-1 text-[11px] text-emerald-700/80">Vercel will redeploy in ~60 seconds.</div>
      </div>
    </div>
  )
}

function UndoBanner({
  candidate,
  busy,
  onClick,
}: {
  candidate: UndoCandidate
  busy: boolean
  onClick: () => void
}) {
  return (
    <div
      className="mb-3 flex items-start gap-3 p-3 rounded-xl bg-[rgba(92,45,79,0.05)] border border-[rgba(92,45,79,0.12)]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <RotateCcw className="w-4 h-4 text-[#5C2D4F] flex-shrink-0 mt-0.5" />
      <div className="min-w-0 flex-1">
        <div className="text-[11px] uppercase tracking-widest text-[#5C2D4F] font-semibold mb-0.5">
          Most recent publish
        </div>
        <div className="text-sm text-[#2C2520] truncate" title={candidate.subject}>
          {candidate.subject}
        </div>
        <div className="mt-1 text-[11px] text-[rgba(44,37,32,0.55)]">
          {candidate.filesChanged.length} file{candidate.filesChanged.length === 1 ? "" : "s"} changed ·{" "}
          <a href={candidate.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#5C2D4F]">
            {candidate.sha.slice(0, 7)}
          </a>
        </div>
      </div>
      <button
        type="button"
        onClick={onClick}
        disabled={busy}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-[#5C2D4F]/40 text-[#5C2D4F] hover:bg-[#5C2D4F] hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <Undo2 className="w-3.5 h-3.5" />
        {busy ? "Undoing…" : "Undo last publish"}
      </button>
    </div>
  )
}

function UndoCard({ undo }: { undo: UndoResult }) {
  const url = `https://github.com/FixYourPeriod/nj-website/commit/${undo.newSha}`
  return (
    <div className="ml-11 inline-flex items-start gap-3 p-3 rounded-xl bg-amber-50 border border-amber-200 max-w-full">
      <Undo2 className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
      <div className="min-w-0 flex-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-sm font-semibold text-amber-900">Reverted to pre-edit state</span>
          {undo.newSha && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-800 hover:text-amber-900 inline-flex items-center gap-1 underline"
            >
              {undo.newSha.slice(0, 7)}
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
        <div className="mt-1 text-[11px] text-amber-700/80">Vercel will redeploy in ~60 seconds.</div>
      </div>
    </div>
  )
}

// --- Helpers -----------------------------------------------------------------

function initialsFor(fullName: string | null, email: string | null): string {
  if (fullName) {
    const parts = fullName.trim().split(/\s+/)
    return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase() || "?"
  }
  if (email) return email[0]?.toUpperCase() ?? "?"
  return "?"
}

function readFileAsBase64(file: File): Promise<{ base64: string; dataUrl: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(reader.error)
    reader.onload = () => {
      const dataUrl = String(reader.result || "")
      const commaIdx = dataUrl.indexOf(",")
      const base64 = commaIdx >= 0 ? dataUrl.slice(commaIdx + 1) : dataUrl
      resolve({ base64, dataUrl })
    }
    reader.readAsDataURL(file)
  })
}

function hasImageInDataTransfer(dt: DataTransfer | null): boolean {
  if (!dt) return false
  return Array.from(dt.types ?? []).includes("Files")
}
