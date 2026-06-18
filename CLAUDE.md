# NJ Website — Claude Code Instructions

## CRITICAL: Git / Deploy Rules

**Never push directly to `main` on the remote.** The remote `main` branch is the old static HTML site (nicolejardim.app on Railway) and must not be touched.

The Next.js app lives on the `nextjs` branch. The only correct push command is:

```
git push origin main:nextjs
```

This pushes your local `main` to the remote `nextjs` branch, which triggers the GitHub Actions workflow (`.github/workflows/deploy-production.yml`). That workflow calls the Vercel API to build and promote the site to production. Changes are live within 2–3 minutes.

If the remote has new commits, sync first:
```
git fetch origin nextjs && git rebase origin/nextjs && git push origin main:nextjs
```

## Project Structure

- **Framework**: Next.js 15 App Router (`src/app/`)
- **Articles**: `src/content/articles/` — each article is a `.tsx` file returning HTML as a string
- **Styles**: `src/app/globals.css` — brand palette and article prose classes
- **Admin tool**: `src/app/api/admin-agent/` — Claude-powered content editor (Clerk-authenticated)

## Brand Palette

| Token | Hex |
|---|---|
| `--plum` | `#5C2D4F` |
| `--terra` | `#B55A3A` |
| `--ivory` | `#FAF5EF` |
| `--sand` | `#EAE0D5` |
| `--gold` | `#C4984A` |
| `--sage` | `#7A9B7E` |
| `--charcoal` | `#2C2520` |

Fonts: Fraunces (display), Cormorant Garamond (serif), DM Sans (sans).

## Environment Variables

Required in `.env.local` (never commit this file):
- `GITHUB_TOKEN` — fine-grained PAT, Contents read+write on FixYourPeriod/nj-website
- `GITHUB_BRANCH` — must be `nextjs`
- `ANTHROPIC_API_KEY`, `RESEND_API_KEY`, `CLERK_SECRET_KEY`, `CLOUDINARY_*`
