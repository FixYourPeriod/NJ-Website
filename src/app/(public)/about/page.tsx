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
    cta: "Explore Resources →",
    href: "/resources",
    external: false,
  },
  {
    num: "02",
    title: "Guided Support",
    body: "The Fix Your Period App — take the free Hormone Health Assessment for a personalized protocol based on your symptoms, plus access Nicole's foundational Period Pillars course.",
    cta: "Take the Free Assessment →",
    href: "https://fixyourperiod.app/quiz",
    external: true,
  },
  {
    num: "03",
    title: "Professional Training",
    body: "The Institute for Menstrual Health — clinical-level certification for practitioners building expertise in women's health.",
    cta: "Visit the Institute →",
    href: "https://instituteformenstrualhealth.com/",
    external: true,
  },
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
    fontSize: 17,
    lineHeight: 1.8,
    color: "var(--charcoal)",
  },
}

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ivory)",
          padding: "96px 40px 80px",
          borderBottom: "1px solid rgba(92,45,79,0.07)",
        }}
      >
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
          <div style={{ position: "relative", height: 640, borderRadius: 6, overflow: "hidden" }}>
            <Image
              src="/images/nicole-1.jpg"
              alt="Nicole Jardim"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "center top" }}
              priority
            />
          </div>
          <div>
            <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 20 }}>
              About Nicole
            </span>
            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(42px, 5vw, 64px)",
                fontWeight: 300,
                lineHeight: 1.08,
                color: "var(--plum)",
                marginBottom: 28,
              }}
            >
              About Nicole Jardim
            </h1>
            {[
              "Women's health educator, author, and founder — focused on helping women understand their cycles, support their hormones, and make informed decisions about their health.",
              "Nicole Jardim is a women's health educator, writer, and speaker specializing in menstrual and hormonal health. She is the author of Fix Your Period, the founder of the Fix Your Period App, and the creator of the Institute for Menstrual Health.",
              "Over the past decade, she has supported tens of thousands of women worldwide through her programs, education, and writing. She is known for translating complex hormonal concepts into clear, practical guidance that women can apply in their everyday lives.",
            ].map((p, i) => (
              <p key={i} style={{ ...S.body, opacity: 0.78, marginBottom: 20 }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── AS SEEN IN ───────────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--sand)",
          padding: "36px 40px",
          borderTop: "1px solid rgba(92,45,79,0.07)",
          borderBottom: "1px solid rgba(92,45,79,0.07)",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <span style={{ ...S.label, color: "var(--terra)" }}>As Seen In</span>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 56, flexWrap: "wrap" }}>
            {["The Guardian", "Well+Good", "mindbodygreen", "Healthline", "Shape", "Bustle"].map((name) => (
              <span
                key={name}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--charcoal)",
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
      <section style={{ background: "var(--plum)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 300,
                color: "var(--ivory)",
                marginBottom: 16,
              }}
            >
              A Different Approach to Women&apos;s Health
            </h2>
            <p style={{ ...S.body, color: "var(--ivory)", opacity: 0.65, maxWidth: 560, margin: "0 auto" }}>
              Nicole&apos;s work combines evidence-informed education with real-world application — helping women move from confusion to clarity, and from reactive care to informed decision-making.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {principles.map((p) => (
              <div
                key={p}
                style={{
                  background: "var(--plum-mid)",
                  padding: "52px 44px",
                }}
              >
                <div style={{ width: 36, height: 2, background: "var(--gold)", marginBottom: 20 }} />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 22,
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "var(--ivory)",
                    lineHeight: 1.4,
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
      <section style={{ background: "var(--ivory)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "start" }}>
          <div>
            <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 20 }}>
              How Nicole&apos;s Work Began
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 400,
                color: "var(--plum)",
                lineHeight: 1.2,
              }}
            >
              A personal journey that became a professional mission
            </h2>
          </div>
          <div>
            {[
              "Nicole's interest in hormonal health began with her own experience. As a teenager, she struggled with irregular, painful periods and was prescribed the birth control pill — a solution that only introduced more worrying symptoms.",
              "Over time, she began experiencing a range of ongoing health issues that were never fully explained, despite extensive medical testing. Eventually, this led her to explore alternative approaches, including nutrition, lifestyle changes, and integrative health practices. For the first time, she began to understand what was happening in her body and how to support it.",
              "What she learned through her own process — and what she later trained extensively to deeply realize — is that many women are navigating symptoms without clear explanations or practical guidance. Nicole's work today exists to change that.",
            ].map((p, i) => (
              <p key={i} style={{ ...S.body, opacity: 0.85, marginBottom: 20 }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAINING ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "start" }}>
          <div>
            <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 20 }}>
              Training &amp; Background
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 400,
                color: "var(--plum)",
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              Evidence-informed education, formally trained
            </h2>
            <p style={{ ...S.body, fontSize: 16, opacity: 0.8 }}>
              Nicole trained as a women&apos;s health and nutrition practitioner through some of the leading institutions in integrative and functional health.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {training.map((item) => (
              <div
                key={item}
                style={{
                  background: "var(--ivory)",
                  borderRadius: 4,
                  padding: "24px 32px",
                  display: "flex",
                  gap: 20,
                  alignItems: "center",
                  borderLeft: "3px solid var(--gold)",
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, color: "var(--charcoal)", lineHeight: 1.4 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK TODAY ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 16 }}>
              What Nicole Does Today
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: 400,
                color: "var(--plum)",
                marginBottom: 14,
              }}
            >
              Three ways to work with Nicole&apos;s education
            </h2>
            <p style={{ ...S.body, fontSize: 17, opacity: 0.6, maxWidth: 520, margin: "0 auto" }}>
              Each pathway is designed to meet women at a different stage of their journey.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {workAreas.map((area) => (
              <div
                key={area.num}
                style={{
                  background: "var(--sand)",
                  borderRadius: 4,
                  padding: "44px 36px",
                  textAlign: "center",
                  borderTop: "3px solid var(--gold)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 48,
                    fontWeight: 300,
                    color: "var(--plum)",
                    opacity: 0.25,
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {area.num}
                </div>
                <h4
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: "var(--plum)",
                    marginBottom: 10,
                  }}
                >
                  {area.title}
                </h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.65, color: "var(--charcoal)", opacity: 0.75, marginBottom: 20 }}>
                  {area.body}
                </p>
                {area.external ? (
                  <a
                    href={area.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--terra)" }}
                  >
                    {area.cta}
                  </a>
                ) : (
                  <Link href={area.href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--terra)" }}>
                    {area.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTE FROM NICOLE ────────────────────────────────────────── */}
      <section style={{ background: "var(--plum)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <blockquote
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--ivory)",
              lineHeight: 1.4,
              marginBottom: 28,
            }}
          >
            &ldquo;Women should be active participants in their health — not passive recipients of care.&rdquo;
          </blockquote>
          <cite
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontStyle: "normal",
            }}
          >
            — Nicole Jardim
          </cite>
          <p style={{ ...S.body, fontSize: 17, color: "var(--ivory)", opacity: 0.65, lineHeight: 1.75, marginTop: 28 }}>
            This work is dedicated to helping women understand their bodies, ask better questions, and make decisions that feel informed, grounded, and aligned with their lives.
          </p>
        </div>
      </section>

      {/* ── CLOSING CTA ─────────────────────────────────────────────── */}
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
            Ready to begin?
          </h2>
          <p style={{ ...S.body, color: "var(--ivory)", opacity: 0.7, marginBottom: 36 }}>
            Find the right starting point for where you are right now.
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
            }}
          >
            Start Here →
          </Link>
        </div>
      </section>
    </>
  )
}
