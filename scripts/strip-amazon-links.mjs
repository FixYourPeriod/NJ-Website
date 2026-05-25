/**
 * strip-amazon-links.mjs
 *
 * Removes Amazon affiliate links from all article TSX files, replacing each
 * <a href="https://amazon...">text</a> with just the link text.
 * Only targets <a> tags with Amazon hrefs — Fullscript and other links are untouched.
 *
 * Run: node scripts/strip-amazon-links.mjs
 */

import { readFileSync, writeFileSync, readdirSync } from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ARTICLES_DIR = path.resolve(__dirname, "../src/content/articles")

const AMAZON_RE = /<a\s+href="https?:\/\/(?:www\.)?(?:amzn\.to|amazon\.com)[^"]*"[^>]*>([\s\S]*?)<\/a>/g

let fixed = 0, unchanged = 0

for (const file of readdirSync(ARTICLES_DIR)) {
  if (!file.endsWith(".tsx")) continue
  const filePath = path.join(ARTICLES_DIR, file)
  const original = readFileSync(filePath, "utf8")

  const cleaned = original.replace(AMAZON_RE, (_match, linkText) => linkText)

  if (cleaned !== original) {
    writeFileSync(filePath, cleaned, "utf8")
    const count = (original.match(AMAZON_RE) || []).length
    console.log(`✅ ${file.replace(".tsx", "")} — removed ${count} Amazon link(s)`)
    fixed++
  } else {
    unchanged++
  }
}

console.log(`\nDone — fixed: ${fixed}, unchanged: ${unchanged}`)
