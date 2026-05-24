"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { useUser } from "@clerk/nextjs"

type MessageRole = "user" | "assistant"

type CommitInfo = {
  sha: string
  files: string[]
}

type Message = {
  id: string
  role: MessageRole
  content: string
  commit?: CommitInfo
  isStreaming?: boolean
}

const SUGGESTED_PROMPTS = [
  "Update the hero headline on the home page",
  "Edit the PCOS article introduction",
  "Add a new FAQ to the Fix Your Period page",
  "Create a new article about progesterone",
  "Update Nicole's bio on the About page",
]

function uid() {
  return Math.random().toString(36).slice(2)
}

export function AdminChat() {
  const { user } = useUser()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [sessionId] = useState(uid)
  const [isLoading, setIsLoading] = useState(false)
  const [undoState, setUndoState] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [lastCommit, setLastCommit] = useState<CommitInfo | null>(null)
  const [images, setImages] = useState<Array<{ dataUrl: string; mediaType: string }>>([])
  const bottomRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const autoResize = useCallback(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = "auto"
    el.style.height = Math.min(el.scrollHeight, 200) + "px"
  }, [])

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMsg: Message = { id: uid(), role: "user", content: trimmed }
    const assistantMsg: Message = { id: uid(), role: "assistant", content: "", isStreaming: true }

    setMessages((prev) => [...prev, userMsg, assistantMsg])
    setInput("")
    setImages([])
    setIsLoading(true)
    if (textareaRef.current) textareaRef.current.style.height = "auto"

    // Build message history for API
    const history = [
      ...messages.map((m) => ({ role: m.role, content: m.content })),
      { role: "user" as const, content: trimmed },
    ]

    try {
      const res = await fetch("/api/admin-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history, sessionId }),
      })

      if (!res.ok || !res.body) {
        throw new Error(`Request failed: ${res.status}`)
      }

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
                  m.id === assistantMsg.id
                    ? { ...m, content: m.content + event.content }
                    : m
                )
              )
            } else if (event.type === "committed") {
              const commit: CommitInfo = { sha: event.sha, files: event.files }
              setLastCommit(commit)
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantMsg.id ? { ...m, commit } : m
                )
              )
            } else if (event.type === "error") {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantMsg.id
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
        prev.map((m) =>
          m.id === assistantMsg.id ? { ...m, content: message } : m
        )
      )
    } finally {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantMsg.id ? { ...m, isStreaming: false } : m
        )
      )
      setIsLoading(false)
    }
  }

  async function handleUndo() {
    if (undoState === "loading") return
    setUndoState("loading")
    try {
      const res = await fetch("/api/admin-agent/undo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? "Undo failed")
      }
      setUndoState("done")
      setLastCommit(null)
      const system: Message = {
        id: uid(),
        role: "assistant",
        content: "✓ Last publish reverted. The site will restore to its previous state in ~60 seconds.",
      }
      setMessages((prev) => [...prev, system])
    } catch (err) {
      setUndoState("error")
      const system: Message = {
        id: uid(),
        role: "assistant",
        content: `Undo failed: ${err instanceof Error ? err.message : String(err)}`,
      }
      setMessages((prev) => [...prev, system])
    }
  }

  function handleImageFiles(files: FileList | File[]) {
    const arr = Array.from(files).slice(0, 4 - images.length)
    arr.forEach((file) => {
      if (!file.type.startsWith("image/")) return
      const reader = new FileReader()
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string
        setImages((prev) => [...prev, { dataUrl, mediaType: file.type }])
      }
      reader.readAsDataURL(file)
    })
  }

  function handlePaste(e: React.ClipboardEvent) {
    const items = Array.from(e.clipboardData.items).filter((i) =>
      i.type.startsWith("image/")
    )
    if (items.length === 0) return
    e.preventDefault()
    handleImageFiles(items.map((i) => i.getAsFile()!).filter(Boolean) as File[])
  }

  const showWelcome = messages.length === 0

  return (
    <>
      <style>{`
        .admin-chat-root {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background: #FAF5EF;
          font-family: 'DM Sans', sans-serif;
        }
        .admin-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 28px;
          height: 56px;
          background: #5C2D4F;
          flex-shrink: 0;
          gap: 16px;
        }
        .admin-header-title {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 17px;
          font-weight: 300;
          font-style: italic;
          color: rgba(250,245,239,0.9);
          letter-spacing: -0.01em;
        }
        .admin-header-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .undo-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 7px 16px;
          background: rgba(250,245,239,0.1);
          color: rgba(250,245,239,0.75);
          border: 1px solid rgba(250,245,239,0.2);
          border-radius: 20px;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
        }
        .undo-btn:hover:not(:disabled) {
          background: rgba(250,245,239,0.18);
          color: rgba(250,245,239,0.95);
        }
        .undo-btn:disabled { opacity: 0.4; cursor: default; }
        .admin-messages {
          flex: 1;
          overflow-y: auto;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .welcome-card {
          max-width: 560px;
          margin: 0 auto;
          text-align: center;
          padding: 48px 32px 40px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 1px 4px rgba(92,45,79,0.06);
        }
        .welcome-title {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 24px;
          font-weight: 300;
          font-style: italic;
          color: #5C2D4F;
          margin-bottom: 10px;
        }
        .welcome-sub {
          font-size: 14.5px;
          color: rgba(44,37,32,0.55);
          line-height: 1.65;
          margin-bottom: 32px;
        }
        .prompt-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
        }
        .prompt-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          color: #5C2D4F;
          background: #FAF5EF;
          border: 1px solid rgba(92,45,79,0.12);
          border-radius: 8px;
          padding: 10px 14px;
          text-align: left;
          cursor: pointer;
          transition: background 0.12s, border-color 0.12s;
        }
        .prompt-btn:hover {
          background: rgba(92,45,79,0.05);
          border-color: rgba(92,45,79,0.25);
        }
        .msg-row {
          display: flex;
          gap: 12px;
          max-width: 780px;
          width: 100%;
        }
        .msg-row.user { margin-left: auto; flex-direction: row-reverse; }
        .msg-avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          margin-top: 2px;
        }
        .msg-avatar.user { background: #5C2D4F; color: #FAF5EF; }
        .msg-avatar.assistant {
          background: rgba(196,152,74,0.15);
          color: #B55A3A;
          font-style: italic;
          font-family: 'Fraunces', serif;
        }
        .msg-bubble {
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 14.5px;
          line-height: 1.7;
          white-space: pre-wrap;
          word-break: break-word;
          max-width: calc(100% - 42px);
        }
        .msg-bubble.user {
          background: #5C2D4F;
          color: rgba(250,245,239,0.92);
          border-bottom-right-radius: 4px;
        }
        .msg-bubble.assistant {
          background: white;
          color: #2C2520;
          border-bottom-left-radius: 4px;
          box-shadow: 0 1px 3px rgba(92,45,79,0.06);
        }
        .commit-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          padding: 5px 10px;
          background: rgba(100,160,90,0.1);
          border: 1px solid rgba(100,160,90,0.25);
          border-radius: 20px;
          font-size: 11.5px;
          color: #3a7a30;
          font-weight: 500;
        }
        .streaming-cursor::after {
          content: "▌";
          opacity: 0.5;
          animation: blink 0.8s step-end infinite;
        }
        @keyframes blink { 0%,100%{opacity:0.5} 50%{opacity:0} }
        .admin-composer {
          padding: 16px 28px 24px;
          background: white;
          border-top: 1px solid rgba(92,45,79,0.07);
          flex-shrink: 0;
        }
        .image-previews {
          display: flex;
          gap: 8px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }
        .image-preview-wrap {
          position: relative;
        }
        .image-preview-wrap img {
          width: 56px;
          height: 56px;
          object-fit: cover;
          border-radius: 6px;
          border: 1px solid rgba(92,45,79,0.12);
        }
        .image-remove-btn {
          position: absolute;
          top: -6px;
          right: -6px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #5C2D4F;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
        .composer-row {
          display: flex;
          gap: 10px;
          align-items: flex-end;
        }
        .composer-textarea {
          flex: 1;
          resize: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 14.5px;
          line-height: 1.6;
          color: #2C2520;
          background: #FAF5EF;
          border: 1.5px solid rgba(92,45,79,0.15);
          border-radius: 10px;
          padding: 10px 14px;
          outline: none;
          transition: border-color 0.15s;
          min-height: 44px;
          max-height: 200px;
          overflow-y: auto;
        }
        .composer-textarea::placeholder { color: rgba(44,37,32,0.35); }
        .composer-textarea:focus { border-color: rgba(92,45,79,0.45); }
        .composer-actions {
          display: flex;
          gap: 8px;
          align-items: flex-end;
        }
        .attach-btn {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #FAF5EF;
          border: 1.5px solid rgba(92,45,79,0.15);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(92,45,79,0.5);
          transition: background 0.12s, border-color 0.12s;
          flex-shrink: 0;
        }
        .attach-btn:hover { background: rgba(92,45,79,0.05); border-color: rgba(92,45,79,0.3); }
        .send-btn {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #5C2D4F;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: background 0.12s, opacity 0.12s;
          flex-shrink: 0;
        }
        .send-btn:hover:not(:disabled) { background: #4a2440; }
        .send-btn:disabled { opacity: 0.4; cursor: default; }
        .composer-hint {
          margin-top: 8px;
          font-size: 11.5px;
          color: rgba(44,37,32,0.35);
        }
      `}</style>

      <div className="admin-chat-root">
        {/* Header */}
        <header className="admin-header">
          <span className="admin-header-title">Nicole Jardim — Admin</span>
          <div className="admin-header-right">
            {lastCommit && (
              <button
                className="undo-btn"
                onClick={handleUndo}
                disabled={undoState === "loading"}
                title={`Undo last publish (${lastCommit.sha.slice(0, 7)})`}
              >
                {undoState === "loading" ? "Undoing…" : "↩ Undo Last Publish"}
              </button>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 12, color: "rgba(250,245,239,0.5)" }}>
                {user?.emailAddresses[0]?.emailAddress}
              </span>
            </div>
          </div>
        </header>

        {/* Messages */}
        <div className="admin-messages">
          {showWelcome ? (
            <div className="welcome-card">
              <div className="welcome-title">What would you like to update?</div>
              <p className="welcome-sub">
                Describe a change in plain English. I&apos;ll read the relevant file,
                make the edit, and publish it — live on nicolejardim.app in ~60 seconds.
              </p>
              <div className="prompt-grid">
                {SUGGESTED_PROMPTS.map((p) => (
                  <button
                    key={p}
                    className="prompt-btn"
                    onClick={() => {
                      setInput(p)
                      textareaRef.current?.focus()
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className={`msg-row ${msg.role}`}>
                <div className={`msg-avatar ${msg.role}`}>
                  {msg.role === "user"
                    ? (user?.firstName?.[0] ?? "U")
                    : "N"}
                </div>
                <div>
                  <div
                    className={`msg-bubble ${msg.role}${msg.isStreaming && !msg.content ? " streaming-cursor" : ""}`}
                  >
                    {msg.content || (msg.isStreaming ? "" : "—")}
                    {msg.isStreaming && msg.content && (
                      <span className="streaming-cursor" />
                    )}
                  </div>
                  {msg.commit && (
                    <div className="commit-badge">
                      <span>✓</span>
                      <span>
                        Published · {msg.commit.files.length} file
                        {msg.commit.files.length !== 1 ? "s" : ""} ·{" "}
                        <code style={{ fontFamily: "monospace" }}>
                          {msg.commit.sha.slice(0, 7)}
                        </code>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
          <div ref={bottomRef} />
        </div>

        {/* Composer */}
        <div className="admin-composer">
          {images.length > 0 && (
            <div className="image-previews">
              {images.map((img, i) => (
                <div key={i} className="image-preview-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.dataUrl} alt="" />
                  <button
                    className="image-remove-btn"
                    onClick={() => setImages((prev) => prev.filter((_, j) => j !== i))}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="composer-row">
              <textarea
                ref={textareaRef}
                className="composer-textarea"
                placeholder="Describe a change — e.g. 'Update the book description to…'"
                value={input}
                onChange={(e) => { setInput(e.target.value); autoResize() }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit()
                  }
                }}
                onPaste={handlePaste}
                rows={1}
                disabled={isLoading}
              />
              <div className="composer-actions">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  style={{ display: "none" }}
                  onChange={(e) => e.target.files && handleImageFiles(e.target.files)}
                />
                <button
                  type="button"
                  className="attach-btn"
                  onClick={() => fileInputRef.current?.click()}
                  title="Attach image (or paste)"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 10.5L5.5 7L8 9.5L10.5 6.5L14 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="5.5" cy="5" r="1" fill="currentColor" />
                  </svg>
                </button>
                <button
                  type="submit"
                  className="send-btn"
                  disabled={!input.trim() || isLoading}
                  title="Send (Enter)"
                >
                  {isLoading ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                      <path d="M8 2a6 6 0 0 1 6 6" stroke="white" strokeWidth="2" strokeLinecap="round">
                        <animateTransform attributeName="transform" type="rotate" from="0 8 8" to="360 8 8" dur="0.8s" repeatCount="indefinite" />
                      </path>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 8L2.5 3L5 8L2.5 13L13.5 8Z" fill="white" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <p className="composer-hint">Enter to send · Shift+Enter for new line · Paste images for context</p>
          </form>
        </div>
      </div>
    </>
  )
}
