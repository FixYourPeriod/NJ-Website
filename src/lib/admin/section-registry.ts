export type RegisteredFile = {
  label: string
  description: string
  path: string
}

// Pages whose TSX files can be read and edited
export const PAGE_REGISTRY: Record<string, RegisteredFile> = {
  home: {
    label: "Home page",
    description: "Hero headline, intro copy, featured sections",
    path: "src/app/(public)/page.tsx",
  },
  about: {
    label: "About page",
    description: "Bio, credentials, certifications, speaking section",
    path: "src/app/(public)/about/page.tsx",
  },
  book: {
    label: "Book page",
    description: "Book description, chapter previews, testimonials",
    path: "src/app/(public)/book/page.tsx",
  },
  resources: {
    label: "Resources page",
    description: "Section headers, descriptions, featured links",
    path: "src/app/(public)/resources/page.tsx",
  },
  podcast: {
    label: "Podcast page",
    description: "Show description, topics list, host bio, episode archive header",
    path: "src/app/(public)/podcast/page.tsx",
  },
  contact: {
    label: "Contact page",
    description: "Hero copy, contact detail links, response-time note",
    path: "src/app/(public)/contact/page.tsx",
  },
  "start-here": {
    label: "Start Here page",
    description: "Intro copy, quiz CTA, recommended starting points",
    path: "src/app/(public)/start-here/page.tsx",
  },
  "fix-your-period": {
    label: "Fix Your Period page",
    description: "Program description, features, CTA copy",
    path: "src/app/(public)/fix-your-period/page.tsx",
  },
  imh: {
    label: "IMH page",
    description: "Institute for Menstrual Health partnership page copy",
    path: "src/app/(public)/imh/page.tsx",
  },
}

export const ARTICLE_DIR = "src/content/articles"
export const ARTICLE_INDEX = `${ARTICLE_DIR}/index.ts`

// Returns true when the path is within the allowed edit scope
export function isAllowedPath(path: string): boolean {
  // Article content files
  if (path.startsWith(ARTICLE_DIR + "/") && path.endsWith(".tsx")) return true
  // Article index
  if (path === ARTICLE_INDEX) return true
  // Registered pages
  if (Object.values(PAGE_REGISTRY).some((f) => f.path === path)) return true
  return false
}

export function pageList(): string {
  return Object.entries(PAGE_REGISTRY)
    .map(([key, f]) => `• ${key} — ${f.description}`)
    .join("\n")
}
