import type { Metadata } from "next"
import { articles } from "@/content/articles/index"
import { ArticleCard } from "@/components/article-card"

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Evidence-informed articles on menstrual cycles, hormones, perimenopause, and women's hormonal health by Nicole Jardim.",
}

export default function ArticlesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ivory)",
          padding: "100px 40px 80px",
          borderBottom: "1px solid rgba(92,45,79,0.07)",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--terra)",
              display: "block",
              marginBottom: 20,
            }}
          >
            Resources
          </span>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 300,
              lineHeight: 1.08,
              color: "var(--plum)",
              marginBottom: 20,
            }}
          >
            Articles &amp; <em style={{ fontStyle: "italic" }}>Education</em>
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--charcoal)",
              opacity: 0.7,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Deep dives on menstrual cycles, hormonal health, and everything
            your body has been trying to tell you.
          </p>
        </div>
      </section>

      {/* ── ARTICLE GRID ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "72px 40px 96px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {articles.length === 0 && (
            <p
              style={{
                textAlign: "center",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                color: "var(--charcoal)",
                opacity: 0.5,
                padding: "40px 0",
              }}
            >
              Articles coming soon.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
