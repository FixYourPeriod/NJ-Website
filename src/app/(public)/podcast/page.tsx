import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "The Period Party Podcast",
  description:
    "The Period Party — Nicole Jardim's long-running podcast exploring every dimension of menstrual and hormonal health with leading experts, researchers, and practitioners.",
}

const platforms = [
  {
    label: "Listen on Spotify",
    href: "https://open.spotify.com/show/0LWZpLDcMNXHlqcYBqfHaA",
  },
  {
    label: "Listen on Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/the-period-party/id1076463201",
  },
  {
    label: "Watch on YouTube",
    href: "https://www.youtube.com/c/NicoleJardimWomensHealth",
  },
]

const topics = [
  "PCOS",
  "Endometriosis",
  "Perimenopause",
  "PMS & PMDD",
  "Gut Health",
  "Thyroid",
  "Stress & Cortisol",
  "Fertility",
  "Birth Control",
  "Progesterone",
  "Nutrition",
  "Sleep",
]

export default function PodcastPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--charcoal)",
          padding: "104px 40px",
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
              "radial-gradient(ellipse at 65% 40%, rgba(181,90,58,0.14) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1060,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 80,
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Left — text */}
          <div style={{ paddingBottom: 104 }}>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 1,
                  background: "rgba(196,152,74,0.6)",
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(196,152,74,0.9)",
                }}
              >
                The Podcast
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(48px, 6vw, 78px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.0,
                color: "var(--ivory)",
                marginBottom: 20,
                letterSpacing: "-0.025em",
              }}
            >
              The Period Party
            </h1>

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
                fontSize: 22,
                lineHeight: 1.75,
                color: "var(--ivory)",
                opacity: 0.8,
                marginBottom: 16,
                maxWidth: 540,
              }}
            >
              Nicole&apos;s long-running podcast exploring every dimension of
              menstrual and hormonal health — with leading experts, researchers,
              and practitioners.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15.5,
                lineHeight: 1.85,
                color: "var(--ivory)",
                opacity: 0.5,
                marginBottom: 48,
                maxWidth: 520,
              }}
            >
              Each episode goes deep on a specific topic — from PCOS and
              endometriosis to gut health, stress, and beyond. Equal parts
              education and conversation, it&apos;s the kind of information your
              doctor probably never gave you.
            </p>

            {/* Platform links */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginBottom: 48,
              }}
            >
              {platforms.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    borderBottom: "1px solid rgba(250,245,239,0.22)",
                    paddingBottom: 4,
                    width: "fit-content",
                  }}
                >
                  {p.label} &rarr;
                </a>
              ))}
            </div>

            {/* Primary CTA */}
            <a
              href="https://site.fixyourperiod.app/podcasts"
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
                color: "var(--charcoal)",
                borderRadius: 40,
                textDecoration: "none",
              }}
            >
              Browse All Episodes &rarr;
            </a>
          </div>

          {/* Right — podcast cover art */}
          <div
            style={{
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: "relative",
                width: 320,
                height: 320,
                borderRadius: 12,
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 -16px 60px rgba(0,0,0,0.4)",
              }}
            >
              <Image
                src="/images/podcast-logo.png"
                alt="The Period Party Podcast"
                fill
                sizes="320px"
                style={{ objectFit: "contain", padding: "12px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL HEAR ─────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          {/* Section header */}
          <div style={{ maxWidth: 600, marginBottom: 56 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 1,
                  background: "var(--gold)",
                  opacity: 0.7,
                }}
              />
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
                Topics Covered
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--plum)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
              }}
            >
              Deep dives on the conditions and questions that matter most
            </h2>
          </div>

          {/* Topic grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 8,
              marginBottom: 56,
            }}
          >
            {topics.map((topic) => (
              <div
                key={topic}
                style={{
                  padding: "14px 18px",
                  background: "var(--ivory)",
                  borderRadius: 4,
                  borderLeft: "2px solid rgba(196,152,74,0.5)",
                  border: "1px solid rgba(92,45,79,0.07)",
                  borderLeftWidth: 2,
                  borderLeftColor: "rgba(196,152,74,0.5)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--plum)",
                  }}
                >
                  {topic}
                </span>
              </div>
            ))}
          </div>

          {/* Browse CTA */}
          <a
            href="https://site.fixyourperiod.app/podcasts"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "15px 40px",
              background: "var(--plum)",
              color: "var(--ivory)",
              borderRadius: 40,
              textDecoration: "none",
            }}
          >
            Browse All Episodes &rarr;
          </a>
        </div>
      </section>

      {/* ── ABOUT THE HOST ───────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "96px 40px" }}>
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 28,
                height: 1,
                background: "var(--gold)",
                opacity: 0.7,
              }}
            />
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
              Your Host
            </span>
            <div
              style={{
                width: 28,
                height: 1,
                background: "var(--gold)",
                opacity: 0.7,
              }}
            />
          </div>

          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--plum)",
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: "-0.015em",
            }}
          >
            Nicole Jardim
          </h2>

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
              lineHeight: 1.8,
              color: "var(--charcoal)",
              opacity: 0.85,
              marginBottom: 20,
            }}
          >
            Nicole is a Certified Women&apos;s Health Coach and one of the
            leading voices in period and hormonal health education. She&apos;s
            spent over a decade helping women understand their cycles — and The
            Period Party is where she brings the world&apos;s best experts
            directly to you.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15.5,
              lineHeight: 1.85,
              color: "var(--charcoal)",
              opacity: 0.6,
            }}
          >
            Each guest is chosen for their depth of knowledge and their
            willingness to go beyond surface-level advice — the kind of
            conversations that actually change how you think about your health.
          </p>
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
            <div
              style={{ width: 28, height: 1, background: "rgba(196,152,74,0.5)" }}
            />
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
              Start Listening
            </span>
            <div
              style={{ width: 28, height: 1, background: "rgba(196,152,74,0.5)" }}
            />
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
            Hundreds of episodes. One search away.
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
            Search by symptom, condition, or topic and find exactly what you
            need — or browse the full archive and let curiosity lead.
          </p>
          <a
            href="https://site.fixyourperiod.app/podcasts"
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
            Browse All Episodes &rarr;
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
            Free · Available on Spotify, Apple Podcasts &amp; YouTube
          </p>
        </div>
      </section>
    </>
  )
}
