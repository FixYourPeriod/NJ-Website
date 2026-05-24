import { auth, currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { getRecentAdminCommits, revertToBeforeCommit } from "@/lib/admin/github-client"
import { logAudit } from "@/lib/admin/audit-log"

export async function POST(req: Request) {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const user = await currentUser()
  const email = user?.emailAddresses[0]?.emailAddress ?? "unknown"
  const { sessionId } = await req.json()

  try {
    const adminCommits = await getRecentAdminCommits(20)

    if (adminCommits.length === 0) {
      return NextResponse.json({ error: "No admin commits found to undo." }, { status: 404 })
    }

    // Find the most recent commit from this session, or fall back to most recent admin commit
    const target =
      adminCommits.find((c) => c.message.includes(sessionId?.slice(0, 8) ?? "")) ??
      adminCommits[0]

    const newSha = await revertToBeforeCommit(target.sha)

    logAudit({
      type: "undo",
      userId,
      email,
      sessionId: sessionId ?? "unknown",
      revertedSha: target.sha,
      newSha,
    })

    return NextResponse.json({
      success: true,
      revertedSha: target.sha,
      newSha,
      message: target.message,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    logAudit({ type: "error", userId, email, sessionId: sessionId ?? "unknown", message })
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
