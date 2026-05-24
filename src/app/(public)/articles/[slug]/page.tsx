import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { articles } from "@/content/articles/index"

// ─── STATIC PARAMS ───────────────────────────────────────────────────────────
// Tell Next.js which slugs to pre-render at build time.

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

// ─── METADATA ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
  }
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const meta = articles.find((a) => a.slug === slug)
  if (!meta) notFound()

  // Dynamically import the article module (body + optional faqs)
  const articleModule = await import(`@/content/articles/${slug}`)
  const ArticleBody = articleModule.default as React.ComponentType
  const faqs = articleModule.faqs as
    | Array<{ q: string; a: string }>
    | undefined

  const formattedDate = new Date(meta.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      {/* ── ARTICLE HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ivory)",
          padding: "80px 40px 60px",
          borderBottom: "1px solid rgba(92,45,79,0.07)",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--terra)",
              }}
            >
              {meta.category}
            </span>
            {meta.readingTime && (
              <>
                <span style={{ color: "var(--charcoal)", opacity: 0.2 }}>·</span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "var(--charcoal)",
                    opacity: 0.5,
                  }}
                >
                  {meta.readingTime} min read
                </span>
              </>
            )}
            <span style={{ color: "var(--charcoal)", opacity: 0.2 }}>·</span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "var(--charcoal)",
                opacity: 0.5,
              }}
            >
              {formattedDate}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 600,
              color: "var(--plum)",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            {meta.title}
          </h1>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--charcoal)",
              opacity: 0.8,
            }}
          >
            {meta.description}
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────── */}
      <article style={{ padding: "72px 40px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }} className="article-prose">
          <ArticleBody />
        </div>
      </article>

      {/* ── CTA BANNER ────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--plum)",
          padding: "72px 40px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(26px, 4vw, 38px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--ivory)",
              marginBottom: 20,
            }}
          >
            Perimenopause doesn&apos;t have to feel this way.
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--ivory)",
              opacity: 0.7,
              marginBottom: 32,
            }}
          >
            The Fix Your Period App builds a personalized hormonal health protocol around your
            specific symptoms — whether you&apos;re navigating erratic cycles, sleep changes, or
            shifting moods.
          </p>
          <a
            href="https://fixyourperiod.app/quiz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "14px 36px",
              background: "transparent",
              color: "var(--ivory)",
              border: "1.5px solid rgba(250,245,239,0.5)",
              borderRadius: 40,
            }}
          >
            Take the Free Hormone Health Assessment &rarr;
          </a>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "var(--ivory)",
              opacity: 0.4,
              marginTop: 14,
              letterSpacing: "0.04em",
            }}
          >
            Free · 5 minutes · No account required
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      {faqs && faqs.length > 0 && (
        <section
          style={{
            background: "var(--sand)",
            padding: "72px 40px",
          }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(26px, 3.5vw, 36px)",
                fontWeight: 400,
                color: "var(--plum)",
                marginBottom: 40,
              }}
            >
              Frequently Asked Questions
            </h2>
            <div>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: "1px solid rgba(92,45,79,0.12)",
                    padding: "24px 0",
                    ...(i === faqs.length - 1
                      ? { borderBottom: "1px solid rgba(92,45,79,0.12)" }
                      : {}),
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 19,
                      fontWeight: 600,
                      color: "var(--plum)",
                      marginBottom: 12,
                      lineHeight: 1.3,
                    }}
                  >
                    {faq.q}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 16,
                      lineHeight: 1.75,
                      color: "var(--charcoal)",
                      opacity: 0.85,
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BACK TO ARTICLES ──────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--ivory)",
          padding: "40px",
          borderTop: "1px solid rgba(92,45,79,0.07)",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Link
            href="/articles"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13.5,
              fontWeight: 600,
              color: "var(--terra)",
              letterSpacing: "0.02em",
            }}
          >
            &larr; All Articles
          </Link>
        </div>
      </div>
    </>
  )
}
