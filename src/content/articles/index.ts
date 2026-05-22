/**
 * Articles registry.
 *
 * Each article lives at src/content/articles/{slug}.tsx and exports a default
 * ArticleContent component plus a named `meta` export with the article metadata.
 *
 * This index re-exports the metadata for all articles so the articles listing
 * page and dynamic route can load them without importing the full content.
 */

export interface ArticleMeta {
  slug: string
  title: string
  description: string
  /** e.g. "Perimenopause", "Hormones", "Period Health" */
  category: string
  /** ISO date string, e.g. "2024-03-15" */
  publishedAt: string
  /** Relative path to cover image in /public, e.g. "/images/articles/..." */
  coverImage?: string
  /** Estimated reading time in minutes */
  readingTime?: number
}

// Import metadata from each article file
import { meta as periodsInPerimenopauseMeta } from "./periods-in-perimenopause"

export const articles: ArticleMeta[] = [
  periodsInPerimenopauseMeta,
  // Add new articles here as you migrate them
]

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return articles.find((a) => a.slug === slug)
}
