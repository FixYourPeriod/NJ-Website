import Anthropic from "@anthropic-ai/sdk"
import { auth, currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { getFile, commitFiles, getRecentAdminCommits } from "@/lib/admin/github-client"
import { isAllowedPath, ARTICLE_DIR, ARTICLE_INDEX, pageList } from "@/lib/admin/section-registry"
import { logAudit } from "@/lib/admin/audit-log"

export const maxDuration = 120

const SYSTEM_PROMPT = `You are the Nicole Jardim website admin assistant. You make content edits to nicolejardim.app.

## Deployment
This site deploys via **Vercel**, triggered by a GitHub Actions workflow on the \`nextjs\` branch. When a commit is pushed to \`nextjs\`, the workflow calls the Vercel API to start a build, polls until it's ready, then promotes it to production. Changes typically go live within 2–3 minutes. If a deploy fails, the cause is almost always an expired \`VERCEL_TOKEN\` secret in the GitHub repo — not a code problem.

## What you can edit

### Articles
Files at \`${ARTICLE_DIR}/{slug}.tsx\`. Each has:
- \`meta\` — slug, title, description, category, publishedAt, readingTime
- \`faqs\` — array of { q, a } shown below the article
- \`html\` — template literal with the article body as HTML

### Pages
${pageList()}

## How to respond
- **Be brief.** After a successful commit: one sentence saying what changed + "SHA: [sha]. Live in ~60s." Nothing else.
- **Never restate the user's request** back to them.
- **Never speculate** about deployment infrastructure, pipelines, or causes of failures you cannot verify.
- **If a tool returns an error**, quote the exact error text and ask what to do. Do not add interpretation or suggest fixes you cannot perform.
- **If asked to verify a change**, use check_recent_commits to confirm it was committed.

## Editing workflow
**User provides exact text:** → replace_in_file directly → commit_changes
**Open-ended edit:** → read_file → replace_in_file or write_file → commit_changes

## Rules
- Only edit articles and registered pages — never navigation, layout, or CSS files
- Keep all TypeScript/JSX valid
- Preserve all inline styles exactly (CSS variables, no hardcoded colors)
- Prefer replace_in_file over write_file for all targeted edits
- When editing HTML in article bodies, keep existing tag structure intact`

const tools: Anthropic.Tool[] = [
  {
    name: "read_file",
    description: "Read the current content of a file from the GitHub repo. Use this before editing.",
    input_schema: {
      type: "object" as const,
      properties: {
        path: {
          type: "string",
          description: "Repo-relative path, e.g. src/content/articles/pcos.tsx",
        },
      },
      required: ["path"],
    },
  },
  {
    name: "write_file",
    description: "Stage a file change. Call commit_changes when ready to publish.",
    input_schema: {
      type: "object" as const,
      properties: {
        path: {
          type: "string",
          description: "Repo-relative path of the file to write",
        },
        content: {
          type: "string",
          description: "Complete new file content",
        },
      },
      required: ["path", "content"],
    },
  },
  {
    name: "commit_changes",
    description: "Commit all staged file changes to GitHub. Triggers a Vercel deploy (~60s to go live).",
    input_schema: {
      type: "object" as const,
      properties: {
        message: {
          type: "string",
          description: "Short commit message describing what was changed",
        },
      },
      required: ["message"],
    },
  },
  {
    name: "replace_in_file",
    description:
      "Replace an exact string in a file. Use this for targeted edits (word changes, sentence rewrites, adding/removing a paragraph). Much cheaper than write_file — prefer this whenever possible. The old_str must match exactly including whitespace. If the string appears more than once, add surrounding context to make it unique. Use write_file only for new articles or large structural rewrites.",
    input_schema: {
      type: "object" as const,
      properties: {
        path: {
          type: "string",
          description: "Repo-relative path of the file to edit",
        },
        old_str: {
          type: "string",
          description: "Exact string to find (must be unique in the file)",
        },
        new_str: {
          type: "string",
          description: "Replacement string (can be empty string to delete)",
        },
      },
      required: ["path", "old_str", "new_str"],
    },
  },
  {
    name: "check_recent_commits",
    description: "List the most recent admin commits on the live branch. Use this to verify a change was committed, or to answer questions about what was recently changed.",
    input_schema: {
      type: "object" as const,
      properties: {},
      required: [],
    },
  },
  {
    name: "list_articles",
    description: "List all article slugs and titles from the article index.",
    input_schema: {
      type: "object" as const,
      properties: {},
      required: [],
    },
  },
]

type ImageBlock = {
  type: "base64"
  mediaType: "image/jpeg" | "image/png" | "image/gif" | "image/webp"
  data: string
}

type IncomingMessage = {
  role: "user" | "assistant"
  content: string | Array<{ type: string; text?: string; source?: ImageBlock }>
}

function toolCallSummary(toolUse: Anthropic.ToolUseBlock): string {
  const input = toolUse.input as Record<string, unknown>
  switch (toolUse.name) {
    case "read_file":       return `Reading ${input.path}`
    case "write_file":      return `Writing ${input.path}`
    case "replace_in_file":       return `Editing ${input.path}`
    case "commit_changes":        return `Committing: ${input.message}`
    case "check_recent_commits":  return "Checking recent commits"
    case "list_articles":         return "Listing articles"
    default: return toolUse.name
  }
}

export async function POST(req: Request) {
  // Auth check
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const user = await currentUser()
  const email = user?.emailAddresses[0]?.emailAddress ?? "unknown"

  const { messages, sessionId } = (await req.json()) as {
    messages: IncomingMessage[]
    sessionId: string
  }

  logAudit({ type: "agent_request", userId, email, sessionId, messageCount: messages.length })

  // Staged changes accumulate here during the agent loop
  const pendingFiles: Record<string, string> = {}

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    async start(controller) {
      function send(obj: object) {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(obj)}\n\n`))
      }

      try {
        const history: Anthropic.MessageParam[] = messages.map((m) => ({
          role: m.role,
          content: m.content as Anthropic.MessageParam["content"],
        }))

        // Agent loop — runs until model stops calling tools
        while (true) {
          const response = await client.messages.stream({
            model: "claude-opus-4-5",
            max_tokens: 32000,
            system: SYSTEM_PROMPT,
            tools,
            messages: history,
          }).finalMessage()

          // Stream text blocks
          for (const block of response.content) {
            if (block.type === "text" && block.text) {
              send({ type: "text", content: block.text })
            }
          }

          if (response.stop_reason === "end_turn") break

          if (response.stop_reason === "max_tokens") {
            send({ type: "error", message: "Response was cut off — the file may be too large. Try a smaller edit or ask for a specific section to be changed." })
            break
          }

          if (response.stop_reason !== "tool_use") break

          // Process tool calls
          const toolUseBlocks = response.content.filter(
            (b): b is Anthropic.ToolUseBlock => b.type === "tool_use"
          )

          // Emit tool_call events so the UI can show progress chips
          for (const toolUse of toolUseBlocks) {
            send({ type: "tool_call", name: toolUse.name, summary: toolCallSummary(toolUse) })
          }

          const toolResults: Anthropic.ToolResultBlockParam[] = []

          for (const toolUse of toolUseBlocks) {
            let result = ""

            try {
              if (toolUse.name === "read_file") {
                const { path } = toolUse.input as { path: string }
                if (!isAllowedPath(path)) {
                  result = `Error: "${path}" is outside the allowed edit scope.`
                } else {
                  // Check pending first (already staged in this session)
                  if (pendingFiles[path]) {
                    result = pendingFiles[path]
                  } else {
                    const { content } = await getFile(path)
                    result = content
                  }
                }
              } else if (toolUse.name === "replace_in_file") {
                const { path, old_str, new_str } = toolUse.input as {
                  path: string
                  old_str: string
                  new_str: string
                }
                if (!isAllowedPath(path)) {
                  result = `Error: "${path}" is outside the allowed edit scope.`
                } else {
                  const current = pendingFiles[path] ?? (await getFile(path)).content
                  const occurrences = current.split(old_str).length - 1
                  if (occurrences === 0) {
                    result = `Error: Could not find that exact string in ${path}. Check whitespace and surrounding context.`
                  } else if (occurrences > 1) {
                    result = `Error: Found ${occurrences} occurrences — add more surrounding context to old_str to make it unique.`
                  } else {
                    pendingFiles[path] = current.replace(old_str, new_str)
                    result = `Staged: replaced 1 occurrence in ${path}`
                  }
                }
              } else if (toolUse.name === "write_file") {
                const { path, content } = toolUse.input as { path: string; content: string }
                if (!isAllowedPath(path)) {
                  result = `Error: "${path}" is outside the allowed edit scope.`
                } else {
                  pendingFiles[path] = content
                  result = `Staged: ${path}`
                }
              } else if (toolUse.name === "commit_changes") {
                const { message } = toolUse.input as { message: string }
                if (Object.keys(pendingFiles).length === 0) {
                  result = "Nothing staged — no files have been written yet."
                } else {
                  const commitMessage = `admin: ${sessionId.slice(0, 8)}: ${message}`
                  const sha = await commitFiles(pendingFiles, commitMessage)
                  const changedPaths = Object.keys(pendingFiles)

                  logAudit({
                    type: "commit",
                    userId,
                    email,
                    sessionId,
                    sha,
                    files: changedPaths,
                    summary: message,
                  })

                  // Clear staged files after commit
                  for (const k of changedPaths) delete pendingFiles[k]

                  send({ type: "committed", sha, files: changedPaths })
                  result = `Committed ${changedPaths.length} file(s). SHA: ${sha.slice(0, 7)}. Vercel will deploy in ~60 seconds.`
                }
              } else if (toolUse.name === "check_recent_commits") {
                const commits = await getRecentAdminCommits(10)
                if (commits.length === 0) {
                  result = "No recent admin commits found."
                } else {
                  result = commits
                    .map((c) => `${c.sha.slice(0, 7)} — ${c.message}`)
                    .join("\n")
                }
              } else if (toolUse.name === "list_articles") {
                const { content } = await getFile(ARTICLE_INDEX)
                // Extract slug and title lines from the index
                const slugMatches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)]
                const titleMatches = [...content.matchAll(/title:\s*["']([^"']+)["']/g)]
                const articles = slugMatches.map((m, i) => `${m[1]} — ${titleMatches[i]?.[1] ?? ""}`)
                result = articles.join("\n") || "No articles found."
              }
            } catch (err) {
              result = `Tool error: ${err instanceof Error ? err.message : String(err)}`
            }

            toolResults.push({
              type: "tool_result",
              tool_use_id: toolUse.id,
              content: result,
            })
          }

          // Add assistant turn + tool results to history and continue loop
          history.push({ role: "assistant", content: response.content })
          history.push({ role: "user", content: toolResults })
        }

        send({ type: "done" })
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err)
        logAudit({ type: "error", userId, email, sessionId, message })
        send({ type: "error", message })
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  })
}
