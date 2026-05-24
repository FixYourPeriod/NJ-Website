import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Nicole Jardim",
  description:
    "Women's health educator, author, and founder — focused on helping women understand their cycles, support their hormones, and make informed decisions about their health.",
}

const principles = [
  "The menstrual cycle is a vital sign of overall health — not an inconvenience to manage.",
  "Symptoms are signals that deserve to be understood, not suppressed.",
  "Education and body literacy are essential for lasting, sustainable change.",
]

const training = [
  "Institute for Integrative Nutrition (IIN)",
  "Integrative Women's Health Institute",
  "The Gottfried Institute (Dr. Sara Gottfried)",
  "The Kresser Institute for Functional and Evolutionary Medicine",
  "Advanced training in hormonal health, menstrual cycle function, and nutrition",
]

const workAreas = [
  {
    num: "01",
    title: "Education",
    body: "Articles, podcast, and the book Fix Your Period — free, accessible education for every stage of the journey.",
    cta: "Explore Resources",
    href: "/resources",
    external: false,
  },
  {
    num: "02",
    title: "Guided Support",
    body: "The Fix Your Period App — take the free Hormone Health Assessment for a personalized protocol based on your symptoms, plus access Nicole's foundational Period Pillars course.",
    cta: "Take the Free Assessment",
    href: "https://fixyourperiod.app/quiz",
    external: true,
  },
  {
    num: "03",
    title: "Professional Training",
    body: "The Institute for Menstrual Health — clinical-level certification for practitioners building expertise in women's health.",
    cta: "Visit the Institute",
    href: "https://instituteformenstrualhealth.com/",
    external: true,
  },
]

// ─── Shared eyebrow (centered variant) ───────────────────────────────────────
function EyebrowCenter({ label, light = false }: { label: string; light?: boolean }) {
  return (
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
          background: light ? "rgba(196,152,74,0.55)" : "var(--gold)",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase" as const,
          color: light ? "rgba(196,152,74,0.75)" : "var(--terra)",
        }}
      >
        {label}
      </span>
      <div
        style={{
          width: 28,
          height: 1,
          background: light ? "rgba(196,152,74,0.55)" : "var(--gold)",
          flexShrink: 0,
        }}
      />
    </div>
  )
}

// ─── Left-aligned eyebrow ─────────────────────────────────────────────────────
function Eyebrow({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
      <div
        style={{
          width: 28,
          height: 1,
          background: light ? "rgba(196,152,74,0.55)" : "var(--gold)",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase" as const,
          color: light ? "rgba(196,152,74,0.75)" : "var(--terra)",
        }}
      >
        {label}
      </span>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "96px 40px 88px" }}>
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 96,
            alignItems: "center",
          }}
        >
          {/* Photo */}
          <div
            style={{
              position: "relative",
              height: 640,
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/nicole-1.jpg"
              alt="Nicole Jardim"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>

          {/* Text */}
          <div>
            <Eyebrow label="About Nicole" />

            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(40px, 4.5vw, 62px)",
                fontWeight: 300,
                lineHeight: 1.08,
                color: "var(--plum)",
                marginBottom: 20,
                letterSpacing: "-0.02em",
              }}
            >
              About<br />
              <em style={{ fontStyle: "italic", color: "var(--terra)" }}>Nicole Jardim</em>
            </h1>

            {/* Gold rule */}
            <div
              style={{
                width: 40,
                height: 1.5,
                background: "var(--gold)",
                marginBottom: 28,
              }}
            />

            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 21,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                marginBottom: 18,
              }}
            >
              Women&apos;s health educator, author, and founder — focused on helping women
              understand their cycles, support their hormones, and make informed decisions
              about their health.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                lineHeight: 1.85,
                color: "var(--charcoal)",
                opacity: 0.75,
                marginBottom: 16,
              }}
            >
              Nicole Jardim is a women&apos;s health educator, writer, and speaker
              specializing in menstrual and hormonal health. She is the author of{" "}
              <em>Fix Your Period</em>, the founder of the Fix Your Period App, and the
              creator of the Institute for Menstrual Health.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                lineHeight: 1.85,
                color: "var(--charcoal)",
                opacity: 0.75,
              }}
            >
              Over the past decade, she has supported tens of thousands of women worldwide
              through her programs, education, and writing. She is known for translating
              complex hormonal concepts into clear, practical guidance that women can apply
              in their everyday lives.
            </p>
          </div>
        </div>
      </section>

      {/* ── AS SEEN IN ───────────────────────────────────────────────── */}
      <div style={{ background: "var(--charcoal)", padding: "22px 40px" }}>
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(250,245,239,0.35)",
              whiteSpace: "nowrap",
            }}
          >
            As seen in
          </span>
          <div style={{ display: "flex", gap: 40, alignItems: "center", flexWrap: "wrap" }}>
            {["The Guardian", "Well+Good", "mindbodygreen", "Healthline", "Shape", "Bustle"].map((name) => (
              <span
                key={name}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "var(--ivory)",
                  opacity: 0.4,
                  letterSpacing: "0.02em",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── DIFFERENT APPROACH ──────────────────────────────────────── */}
      <section style={{ background: "var(--plum)", padding: "104px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <EyebrowCenter label="The philosophy" light />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(32px, 4vw, 50px)",
                fontWeight: 300,
                color: "var(--ivory)",
                marginBottom: 20,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              A Different Approach to Women&apos;s Health
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20,
                lineHeight: 1.75,
                color: "var(--ivory)",
                opacity: 0.7,
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              Nicole&apos;s work combines evidence-informed education with real-world
              application — helping women move from confusion to clarity, and from
              reactive care to informed decision-making.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
            {principles.map((p) => (
              <div
                key={p}
                style={{
                  background: "rgba(255,255,255,0.055)",
                  padding: "52px 44px",
                  borderTop: "2px solid rgba(196,152,74,0.5)",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 1.5,
                    background: "var(--gold)",
                    marginBottom: 22,
                    opacity: 0.7,
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 22,
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "var(--ivory)",
                    lineHeight: 1.5,
                  }}
                >
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORIGIN STORY ────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "104px 40px" }}>
        <div
          style={{
            maxWidth: 1040,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 96,
            alignItems: "start",
          }}
        >
          {/* Left: heading */}
          <div style={{ position: "sticky", top: 120 }}>
            <Eyebrow label="How Nicole's work began" />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--plum)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              A personal journey that became a professional mission
            </h2>

            {/* Gold rule */}
            <div
              style={{
                width: 40,
                height: 1.5,
                background: "var(--gold)",
                marginTop: 28,
                opacity: 0.6,
              }}
            />
          </div>

          {/* Right: paragraphs */}
          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20,
                lineHeight: 1.85,
                color: "var(--charcoal)",
                marginBottom: 22,
              }}
            >
              Nicole&apos;s interest in hormonal health began with her own experience. As
              a teenager, she struggled with irregular, painful periods and was prescribed
              the birth control pill — a solution that only introduced more worrying
              symptoms.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                lineHeight: 1.85,
                color: "var(--charcoal)",
                opacity: 0.8,
                marginBottom: 22,
              }}
            >
              Over time, she began experiencing a range of ongoing health issues that were
              never fully explained, despite extensive medical testing. Eventually, this
              led her to explore alternative approaches, including nutrition, lifestyle
              changes, and integrative health practices. For the first time, she began to
              understand what was happening in her body and how to support it.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                lineHeight: 1.85,
                color: "var(--charcoal)",
                opacity: 0.8,
              }}
            >
              What she learned through her own process — and what she later trained
              extensively to deeply realize — is that many women are navigating symptoms
              without clear explanations or practical guidance. Nicole&apos;s work today
              exists to change that.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRAINING ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "104px 40px" }}>
        <div
          style={{
            maxWidth: 1040,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 96,
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div style={{ position: "sticky", top: 120 }}>
            <Eyebrow label="Training &amp; Background" />
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--plum)",
                lineHeight: 1.15,
                marginBottom: 20,
                letterSpacing: "-0.01em",
              }}
            >
              Evidence-informed education, formally trained
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 19,
                lineHeight: 1.8,
                color: "var(--charcoal)",
                opacity: 0.8,
              }}
            >
              Nicole trained as a women&apos;s health and nutrition practitioner through
              some of the leading institutions in integrative and functional health.
            </p>
          </div>

          {/* Right: training list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 8 }}>
            {training.map((item) => (
              <div
                key={item}
                style={{
                  background: "var(--ivory)",
                  borderRadius: 4,
                  padding: "22px 28px",
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  borderLeft: "2px solid rgba(196,152,74,0.5)",
                }}
              >
                <span
                  style={{
                    color: "var(--gold)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  —
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15.5,
                    fontWeight: 500,
                    color: "var(--charcoal)",
                    lineHeight: 1.45,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK TODAY ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "104px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <EyebrowCenter label="What Nicole does today" />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "var(--plum)",
                marginBottom: 14,
                lineHeight: 1.15,
              }}
            >
              Three ways to work with Nicole&apos;s education
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                opacity: 0.6,
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              Each pathway is designed to meet women at a different stage of their journey.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {workAreas.map((area) => {
              const content = (
                <div
                  style={{
                    background: "var(--sand)",
                    borderRadius: 4,
                    padding: "44px 36px 40px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderTop: "2px solid rgba(196,152,74,0.4)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase" as const,
                      color: "var(--gold)",
                      display: "block",
                      marginBottom: 16,
                    }}
                  >
                    {area.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: "clamp(20px, 1.8vw, 26px)",
                      fontWeight: 300,
                      color: "var(--plum)",
                      marginBottom: 14,
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {area.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: "var(--charcoal)",
                      opacity: 0.75,
                      flexGrow: 1,
                      marginBottom: 28,
                    }}
                  >
                    {area.body}
                  </p>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.01em",
                      color: "var(--terra)",
                    }}
                  >
                    {area.cta} &rarr;
                  </span>
                </div>
              )

              return area.external ? (
                <a
                  key={area.num}
                  href={area.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  {content}
                </a>
              ) : (
                <Link key={area.num} href={area.href} style={{ textDecoration: "none", display: "block" }}>
                  {content}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── QUOTE FROM NICOLE ───────────────────────────────────────── */}
      <section style={{ background: "var(--plum)", padding: "104px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          {/* Large decorative quote mark */}
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 100,
              fontWeight: 300,
              lineHeight: 0.75,
              color: "var(--gold)",
              display: "block",
              marginBottom: 28,
              opacity: 0.5,
            }}
          >
            &ldquo;
          </span>

          <blockquote
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(24px, 3vw, 38px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--ivory)",
              lineHeight: 1.35,
              marginBottom: 32,
              letterSpacing: "-0.01em",
            }}
          >
            Women should be active participants in their health — not passive recipients
            of care.
          </blockquote>

          <div
            style={{
              width: 40,
              height: 1.5,
              background: "var(--gold)",
              margin: "0 auto 20px",
              opacity: 0.6,
            }}
          />

          <cite
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(196,152,74,0.8)",
              fontStyle: "normal",
              display: "block",
              marginBottom: 32,
            }}
          >
            — Nicole Jardim
          </cite>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 20,
              lineHeight: 1.8,
              color: "var(--ivory)",
              opacity: 0.7,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            This work is dedicated to helping women understand their bodies, ask better
            questions, and make decisions that feel informed, grounded, and aligned with
            their lives.
          </p>
        </div>
      </section>

      {/* ── CLOSING CTA ─────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--terra)",
          padding: "96px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 40% 50%, rgba(92,45,79,0.2) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div style={{ width: 28, height: 1, background: "rgba(250,245,239,0.4)" }} />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(250,245,239,0.6)",
              }}
            >
              Ready to begin
            </span>
            <div style={{ width: 28, height: 1, background: "rgba(250,245,239,0.4)" }} />
          </div>

          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--ivory)",
              marginBottom: 16,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            Ready to begin?
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 20,
              lineHeight: 1.75,
              color: "var(--ivory)",
              opacity: 0.8,
              marginBottom: 40,
            }}
          >
            Find the right starting point for where you are right now.
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
              color: "var(--terra)",
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
