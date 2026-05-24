const BASE = "https://api.github.com"

function cfg() {
  const owner = process.env.GITHUB_OWNER
  const repo = process.env.GITHUB_REPO
  // GITHUB_BRANCH should be "nextjs" — the Vercel production branch
  const branch = process.env.GITHUB_BRANCH ?? "nextjs"
  const token = process.env.GITHUB_TOKEN
  if (!owner || !repo || !token) throw new Error("Missing GitHub env vars")
  return { owner, repo, branch, token }
}

function headers(token: string) {
  return {
    Authorization: `token ${token}`,
    Accept: "application/vnd.github.v3+json",
    "Content-Type": "application/json",
    "User-Agent": "nj-admin/1.0",
  }
}

export async function getFile(path: string): Promise<{ content: string; sha: string }> {
  const { owner, repo, branch, token } = cfg()
  const res = await fetch(
    `${BASE}/repos/${owner}/${repo}/contents/${path}?ref=${branch}`,
    { headers: headers(token), cache: "no-store" }
  )
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(`GitHub read failed (${res.status}): ${path} — ${JSON.stringify(err)}`)
  }
  const data = await res.json()
  const content = Buffer.from(data.content, "base64").toString("utf-8")
  return { content, sha: data.sha }
}

/** Read a file at an arbitrary commit ref (used during revert to get the pre-change version). */
async function getFileAtRef(
  path: string,
  ref: string,
  owner: string,
  repo: string,
  token: string
): Promise<{ content: string }> {
  const res = await fetch(
    `${BASE}/repos/${owner}/${repo}/contents/${path}?ref=${ref}`,
    { headers: headers(token), cache: "no-store" }
  )
  if (!res.ok) throw new Error(`Could not read ${path} at ${ref}: ${res.status}`)
  const data = await res.json()
  return { content: Buffer.from(data.content, "base64").toString("utf-8") }
}

export async function commitFiles(
  files: Record<string, string>,
  message: string
): Promise<string> {
  const { owner, repo, branch, token } = cfg()
  const h = headers(token)

  // 1. Get HEAD SHA
  const refRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/git/ref/heads/${branch}`,
    { headers: h, cache: "no-store" }
  )
  if (!refRes.ok) throw new Error(`Could not get ref: ${refRes.status}`)
  const { object: { sha: headSha } } = await refRes.json()

  // 2. Get base tree SHA from HEAD commit
  const headCommitRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/git/commits/${headSha}`,
    { headers: h, cache: "no-store" }
  )
  const { tree: { sha: baseTreeSha } } = await headCommitRes.json()

  // 3. Create a blob for each changed file
  const treeItems = await Promise.all(
    Object.entries(files).map(async ([filePath, content]) => {
      const blobRes = await fetch(
        `${BASE}/repos/${owner}/${repo}/git/blobs`,
        {
          method: "POST",
          headers: h,
          body: JSON.stringify({ content, encoding: "utf-8" }),
        }
      )
      const blob = await blobRes.json()
      return { path: filePath, mode: "100644" as const, type: "blob" as const, sha: blob.sha }
    })
  )

  // 4. Create new tree
  const treeRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/git/trees`,
    {
      method: "POST",
      headers: h,
      body: JSON.stringify({ base_tree: baseTreeSha, tree: treeItems }),
    }
  )
  const { sha: newTreeSha } = await treeRes.json()

  // 5. Create commit
  const commitRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/git/commits`,
    {
      method: "POST",
      headers: h,
      body: JSON.stringify({ message, tree: newTreeSha, parents: [headSha] }),
    }
  )
  const { sha: newCommitSha } = await commitRes.json()

  // 6. Fast-forward the branch ref
  const updateRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/git/refs/heads/${branch}`,
    {
      method: "PATCH",
      headers: h,
      body: JSON.stringify({ sha: newCommitSha }),
    }
  )
  if (!updateRes.ok) throw new Error(`Could not update ref: ${updateRes.status}`)

  return newCommitSha
}

export async function getRecentAdminCommits(
  limit = 20
): Promise<Array<{ sha: string; message: string }>> {
  const { owner, repo, branch, token } = cfg()
  const res = await fetch(
    `${BASE}/repos/${owner}/${repo}/commits?sha=${branch}&per_page=${limit}`,
    { headers: headers(token), cache: "no-store" }
  )
  if (!res.ok) return []
  const commits: Array<{ sha: string; commit: { message: string } }> = await res.json()
  return commits
    .filter((c) => c.commit.message.startsWith("admin:"))
    .map((c) => ({ sha: c.sha, message: c.commit.message }))
}

export async function getCommitDetails(sha: string): Promise<{
  filesChanged: string[]
  authoredAt: string
}> {
  const { owner, repo, token } = cfg()
  const res = await fetch(
    `${BASE}/repos/${owner}/${repo}/commits/${sha}`,
    { headers: headers(token), cache: "no-store" }
  )
  if (!res.ok) throw new Error(`Could not get commit details: ${res.status}`)
  const data = await res.json()
  return {
    filesChanged: (data.files ?? []).map((f: { filename: string }) => f.filename),
    authoredAt: data.commit?.author?.date ?? new Date().toISOString(),
  }
}

/**
 * Reverts only the files changed by a specific commit back to their pre-commit state,
 * leaving all other files (and all commits after the target) intact.
 *
 * Uses the GitHub Commits API (not git/commits) to get the file diff, then creates a
 * new commit on top of HEAD that restores just those files.
 */
export async function revertToBeforeCommit(sha: string): Promise<string> {
  const { owner, repo, branch, token } = cfg()
  const h = headers(token)

  // 1. Get the full commit details including the list of changed files
  const commitDetailsRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/commits/${sha}`,
    { headers: h, cache: "no-store" }
  )
  if (!commitDetailsRes.ok) {
    const err = await commitDetailsRes.json().catch(() => ({}))
    throw new Error(
      `Could not fetch commit ${sha.slice(0, 7)}: ${commitDetailsRes.status} — ${JSON.stringify(err)}`
    )
  }
  const commitDetails = await commitDetailsRes.json()

  const parentSha: string | undefined = commitDetails.parents?.[0]?.sha
  if (!parentSha) throw new Error("Cannot revert: no parent commit found")

  const changedFiles: Array<{ filename: string; status: string }> = commitDetails.files ?? []
  if (changedFiles.length === 0) throw new Error("No files changed in that commit")

  // 2. For each file the admin commit changed, get its pre-commit (parent) state
  //    or mark it for deletion if the admin commit added it.
  const revertBlobs: Array<{
    path: string
    mode: "100644"
    type: "blob"
    sha: string | null
  }> = []

  for (const file of changedFiles) {
    if (file.status === "added") {
      // File was added by the admin commit → delete it in the revert
      revertBlobs.push({ path: file.filename, mode: "100644", type: "blob", sha: null })
    } else {
      // File was modified or deleted → restore from the parent commit
      const { content } = await getFileAtRef(file.filename, parentSha, owner, repo, token)
      const blobRes = await fetch(
        `${BASE}/repos/${owner}/${repo}/git/blobs`,
        {
          method: "POST",
          headers: h,
          body: JSON.stringify({ content, encoding: "utf-8" }),
        }
      )
      if (!blobRes.ok) {
        throw new Error(`Could not create blob for ${file.filename}: ${blobRes.status}`)
      }
      const blob = await blobRes.json()
      if (!blob.sha) throw new Error(`Blob creation for ${file.filename} returned no SHA`)
      revertBlobs.push({ path: file.filename, mode: "100644", type: "blob", sha: blob.sha })
    }
  }

  // 3. Get current HEAD (may be ahead of the target commit due to later commits)
  const refRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/git/ref/heads/${branch}`,
    { headers: h, cache: "no-store" }
  )
  if (!refRes.ok) {
    const err = await refRes.json().catch(() => ({}))
    throw new Error(`Could not get branch ref: ${refRes.status} — ${JSON.stringify(err)}`)
  }
  const { object: { sha: headSha } } = await refRes.json()

  // 4. Get HEAD's tree to use as the base for our revert tree
  const headCommitRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/git/commits/${headSha}`,
    { headers: h, cache: "no-store" }
  )
  if (!headCommitRes.ok) {
    throw new Error(`Could not fetch HEAD commit: ${headCommitRes.status}`)
  }
  const { tree: { sha: headTreeSha } } = await headCommitRes.json()

  // 5. Create a new tree: HEAD's tree with only the changed files swapped back
  const newTreeRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/git/trees`,
    {
      method: "POST",
      headers: h,
      body: JSON.stringify({ base_tree: headTreeSha, tree: revertBlobs }),
    }
  )
  if (!newTreeRes.ok) {
    const err = await newTreeRes.json().catch(() => ({}))
    throw new Error(`Could not create revert tree: ${newTreeRes.status} — ${JSON.stringify(err)}`)
  }
  const { sha: newTreeSha } = await newTreeRes.json()

  // 6. Create the revert commit on top of HEAD
  const revertRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/git/commits`,
    {
      method: "POST",
      headers: h,
      body: JSON.stringify({
        message: `revert: undo admin changes (reverts ${sha.slice(0, 7)})`,
        tree: newTreeSha,
        parents: [headSha],
      }),
    }
  )
  if (!revertRes.ok) {
    const err = await revertRes.json().catch(() => ({}))
    throw new Error(
      `Could not create revert commit: ${revertRes.status} — ${JSON.stringify(err)}`
    )
  }
  const revert = await revertRes.json()
  if (!revert.sha) {
    throw new Error(`Revert commit returned no SHA — response: ${JSON.stringify(revert)}`)
  }

  // 7. Advance the branch ref to the new revert commit
  const updateRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/git/refs/heads/${branch}`,
    {
      method: "PATCH",
      headers: h,
      body: JSON.stringify({ sha: revert.sha }),
    }
  )
  if (!updateRes.ok) {
    const err = await updateRes.json().catch(() => ({}))
    throw new Error(
      `Could not update branch ref: ${updateRes.status} — ${JSON.stringify(err)}`
    )
  }

  return revert.sha
}
