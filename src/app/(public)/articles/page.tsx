import type { Metadata } from "next"
import { articles } from "@/content/articles/index"
import { ArticleCard } from "@/components/article-card"

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Evidence-informed articles on menstrual cycles, hormones, perimenopause, and women's hormonal health by Nicole Jardim.",
}

const sections = [
  {
    title: "Cycle Basics & Education",
    key: "Cycle Basics & Education",
    description:
      "Foundational guides to understanding your cycle, ovulation, and what healthy looks like across every phase.",
  },
  {
    title: "Conditions & Symptoms",
    key: "Conditions & Symptoms",
    description:
      "Deep dives into the most common hormonal conditions and cycle symptoms — root causes, diagnosis, and natural support.",
  },
  {
    title: "Hormones & Imbalances",
    key: "Hormones & Imbalances",
    description:
      "Progesterone, estrogen, cortisol, and the interconnected systems that drive or disrupt hormonal balance.",
  },
  {
    title: "Birth Control",
    key: "Birth Control",
    description:
      "Evidence-based guides to hormonal and non-hormonal contraception — what they do, what they don't, and how to transition off them.",
  },
  {
    title: "Nutrition, Supplements & Gut Health",
    key: "Nutrition, Supplements & Gut Health",
    description:
      "How what you eat, the supplements you take, and the health of your gut directly shape your hormonal landscape.",
  },
  {
    title: "Lifestyle, Tools & Health",
    key: "Lifestyle, Tools & Health",
    description:
      "Sleep, stress, cycle tracking tools, and the environmental and lifestyle factors most women overlook.",
  },
]

export default function ArticlesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ivory)",
          padding: "104px 40px 88px",
          textAlign: "center",
          borderBottom: "1px solid rgba(92,45,79,0.07)",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {/* Centered eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 28,
            }}
          >
            <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.7 }} />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--terra)",
              }}
            >
              In-Depth Guides
            </span>
            <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.7 }} />
          </div>

          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(44px, 6vw, 70px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.05,
              color: "var(--plum)",
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}
          >
            Articles
          </h1>

          <div
            style={{
              width: 40,
              height: 1.5,
              background: "var(--gold)",
              margin: "0 auto 28px",
              opacity: 0.6,
            }}
          />

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 21,
              lineHeight: 1.75,
              color: "var(--charcoal)",
              opacity: 0.8,
            }}
          >
            Evidence-informed guides on the most common menstrual health conditions
            and hormonal issues — written by Nicole Jardim and grounded in current research.
          </p>
        </div>
      </section>

      {/* ── ARTICLE SECTIONS ──────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "80px 40px 112px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          {sections.map((section, sectionIndex) => {
            const sectionArticles = articles.filter((a) => a.section === section.key)
            if (sectionArticles.length === 0) return null
            return (
              <div
                key={section.key}
                style={{ marginBottom: sectionIndex < sections.length - 1 ? 80 : 0 }}
              >
                {/* Section header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: 40,
                    marginBottom: 36,
                    paddingBottom: 20,
                    borderBottom: "1px solid rgba(92,45,79,0.1)",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 10,
                      }}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 1,
                          background: "var(--gold)",
                          opacity: 0.6,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--terra)",
                        }}
                      >
                        {section.title}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        lineHeight: 1.65,
                        color: "var(--charcoal)",
                        opacity: 0.55,
                        maxWidth: 540,
                        margin: 0,
                      }}
                    >
                      {section.description}
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: 48,
                      fontWeight: 300,
                      color: "var(--plum)",
                      opacity: 0.12,
                      lineHeight: 1,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {sectionArticles.length}
                  </span>
                </div>

                {/* Article grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: 16,
                  }}
                >
                  {sectionArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── CLOSING CTA ───────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--plum)",
          padding: "104px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 60% 50%, rgba(181,90,58,0.18) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 28,
            }}
          >
            <div style={{ width: 28, height: 1, background: "rgba(196,152,74,0.5)" }} />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(196,152,74,0.8)",
              }}
            >
              Ready to go beyond the article
            </span>
            <div style={{ width: 28, height: 1, background: "rgba(196,152,74,0.5)" }} />
          </div>

          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--ivory)",
              marginBottom: 20,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Get a personalized protocol for your symptoms
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 20,
              lineHeight: 1.75,
              color: "var(--ivory)",
              opacity: 0.75,
              marginBottom: 44,
            }}
          >
            Take the free Hormone Health Assessment to get a personalized roadmap based
            on your specific symptoms — supplements, nutrition, and lifestyle guidance
            built for your body.
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
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "16px 44px",
              background: "var(--ivory)",
              color: "var(--plum)",
              borderRadius: 40,
              textDecoration: "none",
            }}
          >
            Take the Free Assessment &rarr;
          </a>
        </div>
      </section>
    </>
  )
}
