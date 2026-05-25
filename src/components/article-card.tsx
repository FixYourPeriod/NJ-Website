"use client"

import { useState } from "react"
import Link from "next/link"
import type { ArticleMeta } from "@/content/articles/index"

const CLOUD = "dgmg40akd"

/** Derives the article's title-card thumbnail from Cloudinary */
function thumbnailUrl(slug: string, coverImage?: string): string {
  if (coverImage) return coverImage
  return `https://res.cloudinary.com/${CLOUD}/image/upload/w_600,f_auto,q_auto/nj-articles-original/${slug}/img-01`
}

export function ArticleCard({ article }: { article: ArticleMeta }) {
  const href = `/articles/${article.slug}`
  const [imgFailed, setImgFailed] = useState(false)
  const imgSrc = thumbnailUrl(article.slug, article.coverImage)

  return (
    <Link
      href={href}
      style={{ textDecoration: "none", display: "block", height: "100%" }}
    >
      <article
        style={{
          background: "var(--ivory)",
          border: "1px solid rgba(92,45,79,0.1)",
          borderRadius: 8,
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = "translateY(-4px)"
          el.style.boxShadow = "0 12px 36px rgba(44,37,32,0.1)"
          el.style.borderColor = "rgba(92,45,79,0.25)"
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = "translateY(0)"
          el.style.boxShadow = "none"
          el.style.borderColor = "rgba(92,45,79,0.1)"
        }}
      >
        {/* ── Thumbnail ── */}
        {!imgFailed && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imgSrc}
            alt=""
            onError={() => setImgFailed(true)}
            style={{
              width: "100%",
              height: 190,
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              flexShrink: 0,
            }}
          />
        )}

        {/* ── Text content ── */}
        <div
          style={{
            padding: "28px 28px 32px",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--terra)",
              }}
            >
              {article.category}
            </span>
            {article.readingTime && (
              <>
                <span style={{ color: "var(--charcoal)", opacity: 0.2, fontSize: 12 }}>·</span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    color: "var(--charcoal)",
                    opacity: 0.45,
                  }}
                >
                  {article.readingTime} min
                </span>
              </>
            )}
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 21,
              fontWeight: 600,
              lineHeight: 1.25,
              color: "var(--plum)",
              marginBottom: 10,
              flexGrow: 1,
            }}
          >
            {article.title}
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              lineHeight: 1.65,
              color: "var(--charcoal)",
              opacity: 0.7,
              marginBottom: 20,
            }}
          >
            {article.description}
          </p>

          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--terra)",
              letterSpacing: "0.02em",
            }}
          >
            Read article →
          </span>
        </div>
      </article>
    </Link>
  )
}
