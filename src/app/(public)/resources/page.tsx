import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Resources",
  description:
    "The book and article library Nicole has built to help you understand your hormones, decode your symptoms, and take action with confidence.",
}

const topics = [
  "PCOS",
  "PMS & PMDD",
  "Endometriosis",
  "Perimenopause",
  "Hormonal Acne",
  "Heavy Periods",
  "Fatigue",
  "Thyroid",
  "Fibroids",
  "Low Progesterone",
]

const S = {
  label: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
  },
  body: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 16,
    lineHeight: 1.8,
    color: "var(--charcoal)" as string,
    opacity: 0.8,
    marginBottom: 16,
  },
}

export default function ResourcesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ivory)",
          padding: "100px 40px 80px",
          borderBottom: "1px solid rgba(92,45,79,0.07)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 20 }}>
            Learn
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
            Resources
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--charcoal)",
              opacity: 0.7,
            }}
          >
            The book and article library Nicole has built to help you understand your hormones, decode your symptoms, and take action with confidence.
          </p>
        </div>
      </section>

      {/* ── THE BOOK ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "96px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 96,
            alignItems: "center",
            maxWidth: 1060,
            margin: "0 auto",
          }}
        >
          {/* Book visual */}
          <div
            style={{
              background: "var(--sand)",
              borderRadius: 12,
              padding: "52px 44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 12px 40px rgba(92,45,79,0.12)",
            }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: 280, aspectRatio: "3/4" }}>
              <Image
                src="/images/book-front.jpg"
                alt="Fix Your Period by Nicole Jardim"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 18 }}>
              The Book
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 300,
                color: "var(--plum)",
                lineHeight: 1.12,
                marginBottom: 20,
              }}
            >
              Fix Your Period
            </h2>
            <p style={S.body}>
              A practical, evidence-informed guide to understanding your cycle, identifying root causes, and improving your hormonal health — step by step.
            </p>
            <p style={S.body}>
              Whether you&apos;re brand new to hormonal health or have been searching for answers for years, the book gives you the context, the framework, and a clear plan to follow. It covers nutrition, stress, gut health, liver function, and more — in a way that&apos;s actually readable.
            </p>
            <Link
              href="/book"
              style={{
                display: "inline-block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "14px 32px",
                background: "var(--plum)",
                color: "var(--ivory)",
                borderRadius: 40,
                textDecoration: "none",
              }}
            >
              Explore the Book →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ARTICLES ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "96px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 96,
            alignItems: "center",
            maxWidth: 1060,
            margin: "0 auto",
          }}
        >
          <div>
            <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 18 }}>
              Articles
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 300,
                color: "var(--plum)",
                lineHeight: 1.12,
                marginBottom: 20,
              }}
            >
              In-depth guides on the conditions and symptoms that matter most
            </h2>
            <p style={S.body}>
              The article library covers the most common hormonal conditions and cycle symptoms — each written by Nicole and grounded in current research. Whether you&apos;re trying to understand a diagnosis or decode what your body is doing, there&apos;s a guide for it.
            </p>
            <Link
              href="/articles"
              style={{
                display: "inline-block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "14px 32px",
                background: "var(--plum)",
                color: "var(--ivory)",
                borderRadius: 40,
                textDecoration: "none",
              }}
            >
              Browse All Articles →
            </Link>
          </div>

          {/* Articles visual */}
          <div
            style={{
              background: "var(--ivory)",
              borderRadius: 12,
              padding: 36,
              border: "1px solid rgba(92,45,79,0.08)",
            }}
          >
            <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 20 }}>
              Topics covered
            </span>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              {topics.map((topic) => (
                <span
                  key={topic}
                  style={{
                    background: "var(--sand)",
                    borderTop: "2px solid var(--gold)",
                    borderRadius: 3,
                    padding: "12px 14px",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--plum)",
                    lineHeight: 1.2,
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--plum) 0%, var(--terra) 100%)",
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 300,
              color: "var(--ivory)",
              marginBottom: 16,
            }}
          >
            Not sure where to start?
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              lineHeight: 1.75,
              color: "var(--ivory)",
              opacity: 0.7,
              marginBottom: 36,
            }}
          >
            Find the right entry point for your journey.
          </p>
          <Link
            href="/start-here"
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
              textDecoration: "none",
            }}
          >
            Start Here →
          </Link>
        </div>
      </section>
    </>
  )
}
