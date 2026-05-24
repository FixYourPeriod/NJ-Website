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

export async function revertToBeforeCommit(sha: string): Promise<string> {
  const { owner, repo, branch, token } = cfg()
  const h = headers(token)

  // Get the commit to revert — we want to restore its parent's tree
  const commitRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/git/commits/${sha}`,
    { headers: h, cache: "no-store" }
  )
  const commit = await commitRes.json()
  const parentSha: string | undefined = commit.parents?.[0]?.sha
  if (!parentSha) throw new Error("Cannot revert: no parent commit found")

  // Get parent's tree
  const parentRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/git/commits/${parentSha}`,
    { headers: h, cache: "no-store" }
  )
  const parent = await parentRes.json()

  // Get current HEAD for the new commit's parent
  const refRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/git/ref/heads/${branch}`,
    { headers: h, cache: "no-store" }
  )
  const { object: { sha: headSha } } = await refRes.json()

  // Create revert commit pointing to parent's tree
  const revertRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/git/commits`,
    {
      method: "POST",
      headers: h,
      body: JSON.stringify({
        message: `revert: undo admin changes (reverts ${sha.slice(0, 7)})`,
        tree: parent.tree.sha,
        parents: [headSha],
      }),
    }
  )
  const revert = await revertRes.json()

  await fetch(
    `${BASE}/repos/${owner}/${repo}/git/refs/heads/${branch}`,
    {
      method: "PATCH",
      headers: h,
      body: JSON.stringify({ sha: revert.sha }),
    }
  )

  return revert.sha
}
