"use client"

import { useState, useMemo } from "react"
import type { ArticleMeta } from "@/content/articles/index"
import { ArticleCard } from "@/components/article-card"

type Section = {
  title: string
  key: string
  description: string
}

interface Props {
  articles: ArticleMeta[]
  sections: Section[]
}

export function ArticlesSearch({ articles, sections }: Props) {
  const [query, setQuery] = useState("")
  const trimmed = query.trim().toLowerCase()

  const filtered = useMemo(() => {
    if (!trimmed) return []
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(trimmed) ||
        a.description.toLowerCase().includes(trimmed) ||
        a.category.toLowerCase().includes(trimmed) ||
        (a.section ?? "").toLowerCase().includes(trimmed)
    )
  }, [trimmed, articles])

  return (
    <>
      {/* ── SEARCH BAR ──────────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--ivory)",
          padding: "0 40px 64px",
        }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              position: "relative",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            {/* Search icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{
                position: "absolute",
                left: 18,
                top: "50%",
                transform: "translateY(-50%)",
                opacity: 0.35,
                pointerEvents: "none",
              }}
            >
              <circle cx="6.5" cy="6.5" r="5" stroke="var(--plum)" strokeWidth="1.5" />
              <path d="M10.5 10.5L14 14" stroke="var(--plum)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              style={{
                width: "100%",
                padding: "14px 20px 14px 44px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                color: "var(--charcoal)",
                background: "var(--ivory)",
                border: "1.5px solid rgba(92,45,79,0.18)",
                borderRadius: 40,
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.15s, box-shadow 0.15s",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "rgba(92,45,79,0.45)"
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(92,45,79,0.07)"
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(92,45,79,0.18)"
                e.currentTarget.style.boxShadow = "none"
              }}
            />

            {/* Clear button */}
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                style={{
                  position: "absolute",
                  right: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 4,
                  color: "var(--charcoal)",
                  opacity: 0.35,
                  fontSize: 16,
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── RESULTS / SECTIONS ──────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "0 40px 112px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>

          {/* ── SEARCH RESULTS ── */}
          {trimmed && (
            <>
              {/* Result count */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 36,
                  paddingBottom: 20,
                  borderBottom: "1px solid rgba(92,45,79,0.1)",
                }}
              >
                <div style={{ width: 20, height: 1, background: "var(--gold)", opacity: 0.6 }} />
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "var(--charcoal)",
                    opacity: 0.6,
                  }}
                >
                  {filtered.length === 0
                    ? `No results for "${query}"`
                    : `${filtered.length} article${filtered.length === 1 ? "" : "s"} for "${query}"`}
                </span>
              </div>

              {filtered.length > 0 ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: 16,
                  }}
                >
                  {filtered.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 22,
                      color: "var(--plum)",
                      opacity: 0.5,
                      marginBottom: 8,
                    }}
                  >
                    No articles found
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: "var(--charcoal)",
                      opacity: 0.45,
                    }}
                  >
                    Try a different keyword — condition, symptom, or topic.
                  </p>
                </div>
              )}
            </>
          )}

          {/* ── DEFAULT SECTIONED VIEW ── */}
          {!trimmed &&
            sections.map((section, sectionIndex) => {
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
    </>
  )
}
