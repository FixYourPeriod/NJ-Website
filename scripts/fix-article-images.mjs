/**
 * fix-article-images.mjs
 *
 * 1. Removes title-card images (img-01) from article body HTML — these are
 *    Instagram/social graphics designed as article covers, not inline content.
 * 2. Removes sitewide promo images (Better relationships blog, Perimenopause GLP1,
 *    Periods in perimenopause) that were scraped from sidebars/footers.
 * 3. Builds a thumbnail map (slug → Cloudinary URL) for use in article cards.
 *
 * Run: node scripts/fix-article-images.mjs
 */

import { readFileSync, writeFileSync, existsSync } from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const ARTICLES_DIR = path.join(ROOT, "src/content/articles")
const ORIGINAL_JSON = path.join(__dirname, "original-content.json")
const CLOUD = "dgmg40akd"

// ─── Promo images that appear as sidebar/footer widgets on every article ──────
const PROMO_ALTS = new Set([
  "Better relationships blog",
  "Perimenopause GLP1",
  "Periods in perimenopause",
])

/** Remove every <figure class="article-image">…</figure> that matches a predicate */
function removeFigures(html, predicate) {
  // Match the entire figure block (potentially multi-line)
  return html.replace(/<figure class="article-image">[\s\S]*?<\/figure>/g, (block) => {
    // Extract the src and alt from the img tag inside
    const srcMatch  = block.match(/src="([^"]+)"/)
    const altMatch  = block.match(/alt="([^"]*)"/)
    const src = srcMatch ? srcMatch[1] : ""
    const alt = altMatch ? altMatch[1] : ""
    return predicate(src, alt) ? "" : block
  })
}

/** Build Cloudinary URL for a given publicId */
function cloudUrl(publicId, w = 600) {
  return `https://res.cloudinary.com/${CLOUD}/image/upload/w_${w},f_auto,q_auto/${publicId}`
}

// ─── Main ──────────────────────────────────────────────────────────────────────

const scrapedData = JSON.parse(readFileSync(ORIGINAL_JSON, "utf8"))

// Build slug → thumbnail URL map (img-01 for each article)
const thumbnailMap = {}
for (const article of scrapedData) {
  const imgs = article.uploadedImages || []
  const titleCard = imgs.find(img =>
    img.cloudinaryId && img.cloudinaryId.endsWith("/img-01")
  )
  if (titleCard) {
    thumbnailMap[article.slug] = cloudUrl(titleCard.cloudinaryId)
  }
}

// Write thumbnail map for consumption by the UI
const thumbnailMapPath = path.join(__dirname, "thumbnail-map.json")
writeFileSync(thumbnailMapPath, JSON.stringify(thumbnailMap, null, 2))
console.log(`\nBuilt thumbnail map: ${Object.keys(thumbnailMap).length} articles\n`)

// ─── Process each article TSX file ────────────────────────────────────────────

const slugs = scrapedData.map(a => a.slug)
let fixed = 0, unchanged = 0

for (const slug of slugs) {
  const tsxPath = path.join(ARTICLES_DIR, `${slug}.tsx`)
  if (!existsSync(tsxPath)) continue

  const original = readFileSync(tsxPath, "utf8")

  const cleaned = removeFigures(original, (src, alt) => {
    // Rule 1: title card — src ends with /img-01
    if (src.match(/nj-articles-original\/[^/]+\/img-01"/)) return true
    // Actually match without the trailing quote issue:
    if (/nj-articles-original\/[^/]+\/img-01/.test(src)) return true

    // Rule 2: sitewide promo images by alt text
    if (PROMO_ALTS.has(alt)) return true

    return false
  })

  if (cleaned !== original) {
    writeFileSync(tsxPath, cleaned, "utf8")
    console.log(`✅ ${slug} — removed bad images`)
    fixed++
  } else {
    unchanged++
  }
}

console.log(`\nDone — fixed: ${fixed}, unchanged: ${unchanged}`)
console.log(`Thumbnail map written to: ${thumbnailMapPath}`)
