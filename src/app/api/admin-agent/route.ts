import Anthropic from "@anthropic-ai/sdk"
import { auth, currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { getFile, commitFiles } from "@/lib/admin/github-client"
import { isAllowedPath, ARTICLE_DIR, ARTICLE_INDEX, pageList } from "@/lib/admin/section-registry"
import { logAudit } from "@/lib/admin/audit-log"

export const maxDuration = 120

const SYSTEM_PROMPT = `You are the Nicole Jardim website admin assistant. You help the NJ team make content updates to nicolejardim.app — a women's hormonal health website built in Next.js.

## What you can do

### Articles (${ARTICLE_DIR}/)
Each article is a .tsx file with three exports:
- \`meta\` — ArticleMeta object (slug, title, description, category, publishedAt, readingTime, section)
- \`faqs\` — array of { q, a } objects shown below the article
- \`html\` — template literal containing the article body as HTML

You can:
- **Read** any article file
- **Edit** article content (body, FAQs, meta fields like description or title)
- **Create** new articles (write the .tsx file AND update the index)

### Pages
You can read and edit the text content in these page files:

${pageList()}

### Rules
- Only read/write files in the allowed scope (articles and registered pages)
- Never edit navigation, footer, or layout files
- Keep all TypeScript/JSX valid — the site auto-deploys on commit
- Preserve all inline styles exactly — the design system uses CSS variables
- When editing HTML in article bodies, keep existing <h2>, <p>, <a> structure intact
- Always confirm what you changed after committing

## Workflow
1. Read the relevant file first to understand current content
2. Make the requested changes
3. Write the updated file
4. Commit — changes go live on nicolejardim.app within ~60 seconds via Vercel

Be concise and direct. Confirm what was changed after each commit.`

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
          const response = await client.messages.create({
            model: "claude-opus-4-5",
            max_tokens: 8096,
            system: SYSTEM_PROMPT,
            tools,
            messages: history,
          })

          // Stream text blocks
          for (const block of response.content) {
            if (block.type === "text" && block.text) {
              send({ type: "text", content: block.text })
            }
          }

          if (response.stop_reason === "end_turn") break

          if (response.stop_reason !== "tool_use") break

          // Process tool calls
          const toolUseBlocks = response.content.filter(
            (b): b is Anthropic.ToolUseBlock => b.type === "tool_use"
          )

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
