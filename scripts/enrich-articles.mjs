/**
 * enrich-articles.mjs
 *
 * For each article tsx file:
 *  1. Reads the current `const html` content
 *  2. Loads the scraped images + links from original-content.json
 *  3. Asks Claude to decide: which images to place (and where), which links to insert
 *  4. Applies those changes to the HTML in the tsx file
 *
 * Run one article:   node --env-file=.env.local scripts/enrich-articles.mjs endometriosis
 * Run all articles:  node --env-file=.env.local scripts/enrich-articles.mjs --all
 */

import Anthropic from "@anthropic-ai/sdk"
import { readFileSync, writeFileSync, existsSync } from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const ARTICLES_DIR = path.join(ROOT, "src/content/articles")
const ORIGINAL_JSON = path.join(__dirname, "original-content.json")
const PROGRESS_FILE = path.join(__dirname, ".enrich-progress.json")
const CLOUD = process.env.CLOUDINARY_CLOUD_NAME || "dgmg40akd"

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// ─── Helpers ──────────────────────────────────────────────────────────────────

function loadProgress() {
  return existsSync(PROGRESS_FILE) ? JSON.parse(readFileSync(PROGRESS_FILE, "utf8")) : {}
}
function saveProgress(p) {
  writeFileSync(PROGRESS_FILE, JSON.stringify(p, null, 2))
}

/** Extract the html template literal from a tsx file */
function extractHtml(tsxContent) {
  const match = tsxContent.match(/const html = `([\s\S]*?)`\s*\nexport default/)
  return match ? match[1] : null
}

/** Replace the html content in a tsx file */
function replaceHtml(tsxContent, newHtml) {
  // Use a function replacement to prevent String.replace() from interpreting
  // dollar signs in newHtml as capture group back-references ($1, $5, etc.)
  return tsxContent.replace(
    /(const html = `)([\s\S]*?)(`\s*\nexport default)/,
    (_match, p1, _p2, p3) => `${p1}${newHtml}${p3}`
  )
}

/** Returns true if file has already been enriched */
function isAlreadyEnriched(tsxContent) {
  return tsxContent.includes('article-image') || tsxContent.includes('class="article-link"')
}

/** Strip HTML tags for Claude context (keep structure visible) */
function htmlToText(html) {
  return html
    .replace(/<h2[^>]*>/gi, "\n\n## ")
    .replace(/<h3[^>]*>/gi, "\n### ")
    .replace(/<\/h[23]>/gi, "\n")
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<\/li>/gi, "")
    .replace(/<p[^>]*>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ").replace(/&#\d+;/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

/** Build a Cloudinary URL for an image */
function cloudinaryUrl(publicId, w = 760) {
  return `https://res.cloudinary.com/${CLOUD}/image/upload/w_${w},f_auto,q_auto/${publicId}`
}

/** Filter scraped images to quality candidates only */
function selectCandidateImages(uploadedImages) {
  return uploadedImages
    .filter(img => {
      if (!img.cloudinaryId || !img.cloudinaryUrl) return false
      // Skip very small images (icons, thumbnails)
      if (img.width < 300 || img.height < 150) return false
      // Skip portrait-only images that are too narrow (likely icons)
      if (img.width < 200) return false
      return true
    })
    .map(img => ({
      id: img.cloudinaryId,
      url: cloudinaryUrl(img.cloudinaryId),
      alt: img.alt || "",
      width: img.width,
      height: img.height,
      aspectRatio: img.width / img.height,
    }))
}

/** Filter scraped links to monetisable candidates */
function selectCandidateLinks(links) {
  return links
    .filter(l => ["amazon-affiliate", "affiliate", "supplement-affiliate"].includes(l.type))
    .filter(l => l.href && l.text && l.text.length > 2)
    .map(l => ({ href: l.href, text: l.text.slice(0, 100) }))
}

/** Extract H2 headings from HTML */
function extractH2s(html) {
  const h2s = []
  const re = /<h2[^>]*>([\s\S]*?)<\/h2>/gi
  let m
  while ((m = re.exec(html)) !== null) {
    h2s.push({ heading: m[1].replace(/<[^>]+>/g, "").trim(), index: m.index })
  }
  return h2s
}

// ─── Claude: decide what to insert ───────────────────────────────────────────

async function askClaude(slug, articleText, h2s, candidateImages, candidateLinks) {
  const prompt = `You are enriching a women's health article with images and affiliate links.

ARTICLE SLUG: ${slug}

ARTICLE CONTENT (text only):
${articleText.slice(0, 6000)}

H2 SECTION HEADINGS (in order):
${h2s.map((h, i) => `${i}. "${h.heading}"`).join("\n")}

AVAILABLE IMAGES (from original article, now on Cloudinary):
${candidateImages.slice(0, 20).map((img, i) =>
  `${i}. id="${img.id}" size=${img.width}×${img.height} alt="${img.alt.slice(0, 60)}"`
).join("\n")}

AVAILABLE AFFILIATE LINKS (Fullscript supplements + Amazon products):
${candidateLinks.slice(0, 30).map((l, i) =>
  `${i}. anchorText="${l.text}" href="${l.href.slice(0, 80)}"`
).join("\n")}

TASK:
1. IMAGE PLACEMENT: Choose which images to use (only good ones that fit the content) and where to place them. Place images AFTER an H2 section heading — specify the H2 index (0-based). Use at most one image per H2 section. Skip images that look like navigation elements, headers, or don't relate to the content. Prefer landscape/wider images for article flow.

2. LINK INSERTION: For each affiliate link, extract the CORE PRODUCT NAME from the anchor text (e.g. "curcumin supplement like this one" → "curcumin"; "Berkey Countertop Filter" → "Berkey Countertop Filter"; "silicone food storage containers" → "silicone food storage"). Then search the article for that product name or a close variant. Find the EXACT TEXT as it appears in the article to wrap in a link (e.g. "curcumin" or "NAC" or "omega-3 fatty acids"). Fullscript plan links are appropriate to attach to any specific supplement recommendation. Amazon product links should match the specific product type.

Return ONLY valid JSON in this exact format:
{
  "imageInsertions": [
    { "afterH2Index": 0, "imageIndex": 2, "caption": "optional short caption or null" }
  ],
  "linkInsertions": [
    { "linkIndex": 0, "searchText": "exact text from article to wrap in link" }
  ]
}

Rules:
- imageInsertions: max one image per H2 section, skip images that don't genuinely fit the content
- linkInsertions: match on the product/concept name — first occurrence only — never link text already inside an <a> tag — supplement plan links (Fullscript) can attach to specific supplement names like "NAC", "curcumin", "magnesium" etc.
- If nothing fits, return empty arrays — do not force insertions`

  const message = await client.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  })

  const text = message.content[0].text.trim()
  // Extract JSON from response (handle markdown code blocks)
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error(`No JSON in Claude response: ${text.slice(0, 200)}`)
  return JSON.parse(jsonMatch[0])
}

// ─── Apply insertions to HTML ─────────────────────────────────────────────────

function applyInsertions(html, h2s, candidateImages, candidateLinks, insertions) {
  const { imageInsertions = [], linkInsertions = [] } = insertions

  // --- Apply link insertions first (text-based, easier) ---
  let enrichedHtml = html
  for (const li of linkInsertions) {
    const link = candidateLinks[li.linkIndex]
    if (!link) continue
    const searchText = li.searchText?.trim()
    if (!searchText) continue

    // Try exact match first, then case-insensitive
    let matchedText = null
    if (enrichedHtml.includes(searchText)) {
      matchedText = searchText
    } else {
      // Try to find it case-insensitively and use the actual casing from the article
      const lowerHtml = enrichedHtml.toLowerCase()
      const lowerSearch = searchText.toLowerCase()
      const idx = lowerHtml.indexOf(lowerSearch)
      if (idx !== -1) {
        matchedText = enrichedHtml.slice(idx, idx + searchText.length)
      }
    }

    if (!matchedText) {
      // searchText not found in article
      continue
    }

    // Make sure it's not already inside an anchor tag
    const pos = enrichedHtml.indexOf(matchedText)
    const contextBefore = enrichedHtml.slice(Math.max(0, pos - 100), pos)
    const openAnchorCount = (contextBefore.match(/<a /g) || []).length
    const closeAnchorCount = (contextBefore.match(/<\/a>/g) || []).length
    if (openAnchorCount > closeAnchorCount) continue // inside a link already

    // Replace first occurrence only
    enrichedHtml = enrichedHtml.replace(
      matchedText,
      `<a href="${link.href}" target="_blank" rel="noopener noreferrer" class="article-link">${matchedText}</a>`
    )
  }

  // --- Apply image insertions (after H2 tags) ---
  // Sort by H2 index descending so we can splice without shifting positions
  const sortedImgInsertions = [...imageInsertions].sort((a, b) => b.afterH2Index - a.afterH2Index)

  for (const ii of sortedImgInsertions) {
    const img = candidateImages[ii.imageIndex]
    if (!img) continue
    const h2 = h2s[ii.afterH2Index]
    if (!h2) continue

    // Find the closing </h2> after this H2's position
    const h2CloseTag = "</h2>"
    const h2End = enrichedHtml.indexOf(h2CloseTag, h2.index)
    if (h2End === -1) continue
    const insertAt = h2End + h2CloseTag.length

    // Build image HTML
    const displayW = img.aspectRatio >= 1 ? 760 : 400
    const displayH = Math.round(displayW / img.aspectRatio)
    const imgUrl = cloudinaryUrl(img.id, displayW)
    const altText = img.alt || ""
    const captionHtml = ii.caption
      ? `\n  <figcaption class="article-image-caption">${ii.caption}</figcaption>`
      : ""

    const imgHtml = `\n<figure class="article-image">\n  <img src="${imgUrl}" alt="${altText}" width="${displayW}" height="${displayH}" loading="lazy" />${captionHtml}\n</figure>\n`

    enrichedHtml = enrichedHtml.slice(0, insertAt) + imgHtml + enrichedHtml.slice(insertAt)
  }

  return enrichedHtml
}

// ─── Process one article ──────────────────────────────────────────────────────

async function enrichArticle(slug, scrapedData, verbose = true) {
  const tsxPath = path.join(ARTICLES_DIR, `${slug}.tsx`)
  if (!existsSync(tsxPath)) {
    if (verbose) console.log(`  ⚠ No tsx file: ${slug}`)
    return false
  }

  const tsxContent = readFileSync(tsxPath, "utf8")

  const force = process.argv.includes("--force")
  // Skip if already enriched (idempotency guard)
  if (isAlreadyEnriched(tsxContent) && !force) {
    if (verbose) console.log(`  ⚠ Already enriched — use --force to re-run`)
    return false
  }

  const currentHtml = extractHtml(tsxContent)
  if (!currentHtml) {
    if (verbose) console.log(`  ⚠ No html template found in ${slug}.tsx`)
    return false
  }

  const article = scrapedData.find(a => a.slug === slug)
  if (!article) {
    if (verbose) console.log(`  ⚠ No scraped data for ${slug}`)
    return false
  }

  const candidateImages = selectCandidateImages(article.uploadedImages || [])
  const candidateLinks = selectCandidateLinks(article.links || [])

  if (candidateImages.length === 0 && candidateLinks.length === 0) {
    if (verbose) console.log(`  ⚠ No usable assets for ${slug}, skipping`)
    return false
  }

  const h2s = extractH2s(currentHtml)
  const articleText = htmlToText(currentHtml)

  if (verbose) {
    console.log(`  Images: ${candidateImages.length} candidates, Links: ${candidateLinks.length} candidates, H2s: ${h2s.length}`)
  }

  // Ask Claude
  const insertions = await askClaude(slug, articleText, h2s, candidateImages, candidateLinks)

  if (verbose) {
    const imgs = insertions.imageInsertions ?? []
    const lnks = insertions.linkInsertions ?? []
    console.log(`  → ${imgs.length} images, ${lnks.length} links`)
    imgs.forEach(ii => console.log(`     img: after H2[${ii.afterH2Index}] "${h2s[ii.afterH2Index]?.heading.slice(0,40)}" — img[${ii.imageIndex}]`))
    lnks.forEach(li => console.log(`     lnk: [${li.linkIndex}] searchText="${li.searchText?.slice(0,50)}"`))
  }

  if (
    (insertions.imageInsertions?.length ?? 0) === 0 &&
    (insertions.linkInsertions?.length ?? 0) === 0
  ) {
    if (verbose) console.log(`  (no insertions made)`)
    return false
  }

  // Apply changes
  const enrichedHtml = applyInsertions(currentHtml, h2s, candidateImages, candidateLinks, insertions)

  // Write back to tsx file
  const updatedTsx = replaceHtml(tsxContent, enrichedHtml)
  writeFileSync(tsxPath, updatedTsx, "utf8")

  return true
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function main() {
  const args = process.argv.slice(2)
  const runAll = args.includes("--all")
  const specificSlug = args.find(a => !a.startsWith("--"))
  const dryRun = args.includes("--dry-run")

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("Missing ANTHROPIC_API_KEY")
    process.exit(1)
  }

  const scrapedData = JSON.parse(readFileSync(ORIGINAL_JSON, "utf8"))
  const progress = loadProgress()

  // Determine which slugs to process
  const allSlugs = scrapedData.map(a => a.slug).filter(s => {
    const tsxPath = path.join(ARTICLES_DIR, `${s}.tsx`)
    if (!existsSync(tsxPath)) return false
    const content = readFileSync(tsxPath, "utf8")
    return content.includes("const html")
  })

  const slugsToProcess = specificSlug
    ? [specificSlug]
    : runAll
      ? allSlugs.filter(s => !progress[s])
      : [allSlugs[0]] // default: first article only

  console.log(`\n✨  Article Enricher${dryRun ? " (DRY RUN)" : ""}`)
  console.log(`   Processing: ${slugsToProcess.length} article(s)\n`)

  let enriched = 0, skipped = 0, failed = 0

  for (let i = 0; i < slugsToProcess.length; i++) {
    const slug = slugsToProcess[i]
    const idx = `[${String(i + 1).padStart(2, "0")}/${slugsToProcess.length}]`
    console.log(`${idx} ${slug}`)

    if (progress[slug] && !specificSlug) {
      console.log(`  ✓ already enriched, skipping`)
      skipped++
      continue
    }

    try {
      const changed = dryRun ? false : await enrichArticle(slug, scrapedData)
      if (changed) {
        console.log(`  ✅ enriched`)
        progress[slug] = { enrichedAt: new Date().toISOString() }
        saveProgress(progress)
        enriched++
      } else {
        skipped++
      }
      // Polite pause between Claude API calls
      if (i < slugsToProcess.length - 1) await sleep(1000)
    } catch (err) {
      console.error(`  ❌ ${err.message}`)
      failed++
      await sleep(2000)
    }
  }

  console.log(`\n✅  Done — enriched: ${enriched}, skipped: ${skipped}, failed: ${failed}\n`)
}

main().catch(err => { console.error("Fatal:", err); process.exit(1) })
