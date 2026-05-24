import { auth, currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { getRecentAdminCommits, revertToBeforeCommit, getCommitDetails } from "@/lib/admin/github-client"
import { logAudit } from "@/lib/admin/audit-log"

/** GET — returns the most recent undoable admin commit, or null. */
export async function GET(_req: Request) {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  try {
    const adminCommits = await getRecentAdminCommits(5)
    if (adminCommits.length === 0) {
      return NextResponse.json({ undoable: null })
    }
    const latest = adminCommits[0]
    const details = await getCommitDetails(latest.sha)

    // Strip the "admin: <sessionid>: " prefix so the banner shows a clean subject
    const subject = latest.message.replace(/^admin:[a-z0-9]+:\s*/i, "Admin: ")

    return NextResponse.json({
      undoable: {
        sha: latest.sha,
        subject,
        url: `https://github.com/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/commit/${latest.sha}`,
        filesChanged: details.filesChanged,
      },
    })
  } catch {
    return NextResponse.json({ undoable: null })
  }
}

/** POST — performs the revert. */
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
