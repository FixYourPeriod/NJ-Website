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

export default function ResourcesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ivory)",
          padding: "104px 40px 88px",
          textAlign: "center",
          borderBottom: "1px solid rgba(92,45,79,0.07)",
        }}
      >
        <div style={{ maxWidth: 660, margin: "0 auto" }}>
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
              Learn
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
            Resources
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
            The book and article library Nicole has built to help you understand your
            hormones, decode your symptoms, and take action with confidence.
          </p>
        </div>
      </section>

      {/* ── THE BOOK ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "104px 40px" }}>
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
          {/* Book visual — plum bg for editorial contrast */}
          <div
            style={{
              background: "var(--plum)",
              borderRadius: 4,
              padding: "60px 48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle radial vignette */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 30% 70%, rgba(181,90,58,0.18) 0%, transparent 65%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 260,
                aspectRatio: "3/4",
              }}
            >
              <Image
                src="/images/book-front.jpg"
                alt="Fix Your Period by Nicole Jardim"
                fill
                sizes="(max-width: 768px) 100vw, 260px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Text */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 24,
              }}
            >
              <div style={{ width: 28, height: 1, background: "var(--gold)" }} />
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
                The Book
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(32px, 4vw, 50px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--plum)",
                lineHeight: 1.08,
                marginBottom: 20,
                letterSpacing: "-0.02em",
              }}
            >
              Fix Your Period
            </h2>

            <div
              style={{
                width: 40,
                height: 1.5,
                background: "var(--gold)",
                marginBottom: 28,
                opacity: 0.6,
              }}
            />

            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20,
                lineHeight: 1.8,
                color: "var(--charcoal)",
                marginBottom: 16,
              }}
            >
              A practical, evidence-informed guide to understanding your cycle,
              identifying root causes, and improving your hormonal health — step by step.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15.5,
                lineHeight: 1.85,
                color: "var(--charcoal)",
                opacity: 0.75,
                marginBottom: 36,
              }}
            >
              Whether you&apos;re brand new to hormonal health or have been searching for
              answers for years, the book gives you the context, the framework, and a
              clear plan to follow. It covers nutrition, stress, gut health, liver
              function, and more — in a way that&apos;s actually readable.
            </p>
            <Link
              href="/book"
              style={{
                display: "inline-block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "15px 36px",
                background: "var(--plum)",
                color: "var(--ivory)",
                borderRadius: 40,
                textDecoration: "none",
              }}
            >
              Explore the Book &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── ARTICLES ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "104px 40px" }}>
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
          {/* Text */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 24,
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
                Articles
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--plum)",
                lineHeight: 1.12,
                marginBottom: 20,
                letterSpacing: "-0.015em",
              }}
            >
              In-depth guides on the conditions and symptoms that matter most
            </h2>

            <div
              style={{
                width: 40,
                height: 1.5,
                background: "var(--gold)",
                marginBottom: 28,
                opacity: 0.6,
              }}
            />

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15.5,
                lineHeight: 1.85,
                color: "var(--charcoal)",
                opacity: 0.75,
                marginBottom: 36,
              }}
            >
              The article library covers the most common hormonal conditions and cycle
              symptoms — each written by Nicole and grounded in current research. Whether
              you&apos;re trying to understand a diagnosis or decode what your body is
              doing, there&apos;s a guide for it.
            </p>
            <Link
              href="/articles"
              style={{
                display: "inline-block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "15px 36px",
                background: "var(--plum)",
                color: "var(--ivory)",
                borderRadius: 40,
                textDecoration: "none",
              }}
            >
              Browse All Articles &rarr;
            </Link>
          </div>

          {/* Topics visual */}
          <div
            style={{
              background: "var(--ivory)",
              borderRadius: 4,
              padding: "40px 36px",
              border: "1px solid rgba(92,45,79,0.07)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 24,
              }}
            >
              <div style={{ width: 20, height: 1, background: "var(--gold)", opacity: 0.6 }} />
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
                Topics covered
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 6,
              }}
            >
              {topics.map((topic) => (
                <div
                  key={topic}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "11px 14px",
                    background: "var(--sand)",
                    borderRadius: 3,
                    borderLeft: "2px solid rgba(196,152,74,0.5)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13.5,
                      fontWeight: 500,
                      color: "var(--plum)",
                      lineHeight: 1.2,
                    }}
                  >
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PODCAST ──────────────────────────────────────────────────── */}
      <section style={{ background: "var(--charcoal)", padding: "104px 40px" }}>
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
          {/* Text */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 24,
              }}
            >
              <div style={{ width: 28, height: 1, background: "rgba(196,152,74,0.55)" }} />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(196,152,74,0.85)",
                }}
              >
                The Podcast
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--ivory)",
                lineHeight: 1.1,
                marginBottom: 20,
                letterSpacing: "-0.015em",
              }}
            >
              The Period Party
            </h2>

            <div
              style={{
                width: 40,
                height: 1.5,
                background: "rgba(196,152,74,0.5)",
                marginBottom: 28,
              }}
            />

            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20,
                lineHeight: 1.8,
                color: "var(--ivory)",
                opacity: 0.75,
                marginBottom: 16,
              }}
            >
              Nicole&apos;s long-running podcast exploring every dimension of menstrual
              and hormonal health — with leading experts, researchers, and practitioners.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                lineHeight: 1.85,
                color: "var(--ivory)",
                opacity: 0.5,
                marginBottom: 40,
              }}
            >
              Each episode goes deep on a specific topic — from PCOS and endometriosis to
              gut health, stress, and beyond. Equal parts education and conversation,
              it&apos;s the kind of information your doctor probably never gave you.
            </p>

            {/* Platform links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--ivory)",
                  opacity: 0.65,
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(250,245,239,0.25)",
                  paddingBottom: 3,
                  width: "fit-content",
                }}
              >
                Listen on Spotify &rarr;
              </a>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--ivory)",
                  opacity: 0.65,
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(250,245,239,0.25)",
                  paddingBottom: 3,
                  width: "fit-content",
                }}
              >
                Listen on Apple Podcasts &rarr;
              </a>
            </div>

            <a
              href="https://nicolejardim.com/podcast/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "15px 36px",
                background: "var(--ivory)",
                color: "var(--charcoal)",
                borderRadius: 40,
                textDecoration: "none",
              }}
            >
              Browse All Episodes &rarr;
            </a>
          </div>

          {/* Podcast cover art */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 340,
                aspectRatio: "1/1",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
              }}
            >
              <Image
                src="/images/podcast-logo.png"
                alt="The Period Party Podcast"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────────────── */}
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
        <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
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
              Not sure where to start
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
            Find the right entry point for your journey
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
            Answer a few quick questions and we&apos;ll point you to the resource,
            program, or next step that fits exactly where you are right now.
          </p>
          <Link
            href="/start-here"
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
            Start Here &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
