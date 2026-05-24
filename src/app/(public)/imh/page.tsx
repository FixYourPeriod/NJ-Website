import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Institute for Menstrual Health",
  description:
    "Comprehensive, practitioner-level training through the Institute for Menstrual Health — designed to help you understand, apply, and confidently support women's hormonal health.",
}

const credentials = [
  { num: "12", label: "In-Depth Modules" },
  { num: "100+", label: "Research Studies" },
  { num: "36", label: "CE Credits (NBHWC)" },
  { num: "Global", label: "International Recognition" },
]

const whoCards = [
  { title: "Health Coaches", body: "Expand your practice into specialized hormonal health support." },
  { title: "Nutritionists & Dietitians", body: "Deepen your clinical understanding of how nutrition affects the cycle." },
  { title: "Midwives, Doulas & PTs", body: "Add menstrual health expertise to complement your existing care." },
  { title: "Healthcare Providers", body: "Acupuncturists, therapists, and practitioners in diverse care settings." },
  { title: "Those Building a Practice", body: "Anyone looking to specialize in or build a business centered on menstrual health." },
]

const modules = [
  "Foundations of hormonal health & the endocrine system",
  "The menstrual cycle across all stages of life",
  "PCOS — types, root causes, and protocols",
  "Endometriosis — evidence and clinical approaches",
  "Perimenopause, menopause & HRT/BHRT",
  "Fertility awareness & cycle tracking",
  "Blood sugar, insulin resistance & hormones",
  "Gut health, liver function & detoxification",
  "Thyroid health & its connection to the cycle",
  "Stress, cortisol & nervous system regulation",
  "Nutrition, lifestyle & environmental factors",
  "Practice-building & working with clients",
]

const programFeatures = [
  {
    num: "01",
    title: "Structured Modules",
    body: "12 in-depth training modules with recorded teaching sessions and case study reviews — designed to build systematically, so you never feel like you've missed a step.",
  },
  {
    num: "02",
    title: "Practical Protocols",
    body: "Client-ready resources, practical protocols, and frameworks you can immediately integrate into your work — not just theory, but applied education.",
  },
  {
    num: "03",
    title: "Practice Building",
    body: "Business and practice-building guidance helps you take your new expertise and translate it into a real, sustainable professional offering.",
  },
  {
    num: "04",
    title: "Assessment & Certification",
    body: "Module tests, a comprehensive final exam, and a two-day virtual practitioner training workshop culminate in your certification — open book, with an 80%+ pass threshold.",
  },
  {
    num: "05",
    title: "Expert Collaborations",
    body: "Guest presentations from leading practitioners in menstrual health, functional medicine, and adjacent specialties to broaden your perspective.",
  },
  {
    num: "06",
    title: "Continuing Education",
    body: "36 CE credits recognized through NBHWC — supporting your ongoing professional development and credentialing requirements.",
  },
]

const outcomes = [
  "Understand and explain key hormonal patterns and imbalances to clients in accessible, actionable language.",
  "Recognize symptoms and connect them to their underlying root causes across multiple body systems.",
  "Support clients with evidence-informed education and strategies that integrate nutrition, lifestyle, and environment.",
  "Identify when medical referral is appropriate and approach women's health with clarity, structure, and confidence.",
]

const certPoints = [
  "Demonstrates advanced training in menstrual and hormonal health",
  "Supports your credibility as a practitioner or coach",
  "Integrates into your existing qualifications",
  "Recognized internationally across the wellness and coaching space",
  "36 CE credits through NBHWC",
  "$2,997 USD — payment plans available (3, 6, 9, or 12 months)",
]

export default function IMHPage() {
  return (
    <>
      {/* ── BRAND STRIP ──────────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--ivory)",
          padding: "28px 40px",
          borderBottom: "1px solid rgba(92,45,79,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/images/imh-logo.png"
          alt="The Institute for Menstrual Health"
          height={44}
          width={200}
          style={{ height: 44, width: "auto" }}
        />
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--plum)",
          padding: "96px 40px 88px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 30%, rgba(181,90,58,0.12) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 28,
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
                color: "rgba(196,152,74,0.8)",
              }}
            >
              Professional Training
            </span>
            <div style={{ width: 28, height: 1, background: "rgba(196,152,74,0.55)" }} />
          </div>

          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(36px, 5vw, 62px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.08,
              color: "var(--ivory)",
              marginBottom: 28,
              letterSpacing: "-0.02em",
            }}
          >
            Study Menstrual and Hormonal Health<br />at a Professional Level
          </h1>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 21,
              lineHeight: 1.75,
              color: "var(--ivory)",
              opacity: 0.8,
              maxWidth: 620,
              margin: "0 auto 40px",
            }}
          >
            Comprehensive, practitioner-level training through the Institute for Menstrual
            Health — designed to help you understand, apply, and confidently support
            women&apos;s hormonal health in real-world settings.
          </p>

          <a
            href="https://instituteformenstrualhealth.com/"
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
              background: "var(--terra)",
              color: "var(--ivory)",
              borderRadius: 40,
              textDecoration: "none",
            }}
          >
            Explore the Certification Program &rarr;
          </a>
        </div>
      </section>

      {/* ── CREDENTIAL STRIP ─────────────────────────────────────────── */}
      <div style={{ background: "var(--charcoal)", padding: "44px 40px" }}>
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: 80,
            flexWrap: "wrap",
          }}
        >
          {credentials.map((c) => (
            <div key={c.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 38,
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {c.num}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--ivory)",
                  opacity: 0.45,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT IMH ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "104px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
            maxWidth: 1040,
            margin: "0 auto",
          }}
        >
          {/* Photo */}
          <div
            style={{
              position: "relative",
              borderRadius: 4,
              overflow: "hidden",
              aspectRatio: "4/5",
            }}
          >
            <Image
              src="/images/nicole-3.jpg"
              alt="Women's health coaches"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", background: "var(--sand)" }}
            />
          </div>

          {/* Text */}
          <div style={{ paddingTop: 8 }}>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
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
                The Institute for Menstrual Health
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--plum)",
                lineHeight: 1.15,
                marginBottom: 20,
                letterSpacing: "-0.01em",
              }}
            >
              Where foundational knowledge meets real-world application
            </h2>

            <div style={{ width: 40, height: 1.5, background: "var(--gold)", marginBottom: 28, opacity: 0.6 }} />

            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20,
                lineHeight: 1.8,
                color: "var(--charcoal)",
                marginBottom: 18,
              }}
            >
              The Institute for Menstrual Health is Nicole Jardim&apos;s professional
              education platform, created to train practitioners, coaches, and health
              professionals in menstrual and hormonal health.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15.5,
                lineHeight: 1.85,
                color: "var(--charcoal)",
                opacity: 0.75,
                marginBottom: 32,
              }}
            >
              At its core is the Women&apos;s Hormone Health Certification Program — an
              in-depth training designed to bridge the gap between foundational knowledge
              and real-world application. This work goes beyond theory. It&apos;s about
              understanding how the body functions, recognizing patterns and root causes,
              and knowing how to support clients in a way that is informed, practical, and
              grounded in evidence.
            </p>

            {/* Who it's for */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.6 }} />
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
                Who this training is for
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {whoCards.map((card) => (
                <div
                  key={card.title}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    paddingBottom: 14,
                    borderBottom: "1px solid rgba(92,45,79,0.07)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--gold)",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      flexShrink: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    —
                  </span>
                  <div>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--plum)",
                        display: "block",
                        marginBottom: 2,
                        letterSpacing: "0.01em",
                      }}
                    >
                      {card.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13.5,
                        lineHeight: 1.6,
                        color: "var(--charcoal)",
                        opacity: 0.65,
                      }}
                    >
                      {card.body}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CERTIFICATION ────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "104px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
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
              <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.6 }} />
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
                The Program
              </span>
              <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.6 }} />
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 300,
                color: "var(--plum)",
                marginBottom: 16,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              The Women&apos;s Hormone Health Certification
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                opacity: 0.75,
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              A comprehensive training designed to help you become a more knowledgeable,
              confident, and effective practitioner in women&apos;s hormonal health.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {modules.map((mod) => (
              <div
                key={mod}
                style={{
                  background: "var(--ivory)",
                  borderRadius: 4,
                  padding: "20px 24px",
                  borderLeft: "2px solid rgba(196,152,74,0.5)",
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "var(--gold)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    flexShrink: 0,
                    lineHeight: 1.5,
                  }}
                >
                  —
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "var(--plum)",
                    lineHeight: 1.45,
                  }}
                >
                  {mod}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "104px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                marginBottom: 28,
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
                How it works
              </span>
              <div style={{ width: 28, height: 1, background: "var(--gold)" }} />
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(28px, 4vw, 46px)",
                fontWeight: 300,
                color: "var(--plum)",
                marginBottom: 16,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              How the Self-Study Program Works
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                opacity: 0.6,
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              Move through the material at your own pace while still following a clear,
              structured framework — from foundational concepts into deeper, applied
              understanding.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {programFeatures.map((f) => (
              <div
                key={f.title}
                style={{
                  background: "var(--sand)",
                  borderRadius: 4,
                  padding: "40px 36px",
                  borderTop: "2px solid rgba(196,152,74,0.4)",
                }}
              >
                {/* Number label */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                  <div style={{ width: 20, height: 1, background: "var(--gold)", opacity: 0.6 }} />
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    {f.num}
                  </span>
                </div>
                <h4
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: "clamp(18px, 1.6vw, 22px)",
                    fontWeight: 300,
                    color: "var(--plum)",
                    marginBottom: 12,
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14.5,
                    lineHeight: 1.75,
                    color: "var(--charcoal)",
                    opacity: 0.75,
                  }}
                >
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--plum)", padding: "104px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                marginBottom: 28,
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
                  color: "rgba(196,152,74,0.8)",
                }}
              >
                Program outcomes
              </span>
              <div style={{ width: 28, height: 1, background: "rgba(196,152,74,0.55)" }} />
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(28px, 4vw, 46px)",
                fontWeight: 300,
                color: "var(--ivory)",
                marginBottom: 16,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              What This Program Allows You to Do
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20,
                lineHeight: 1.75,
                color: "var(--ivory)",
                opacity: 0.65,
                maxWidth: 540,
                margin: "0 auto",
              }}
            >
              By the end of the program, you&apos;ll be equipped to support women&apos;s
              health with confidence, clarity, and clinical depth.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 3 }}>
            {outcomes.map((o) => (
              <div
                key={o}
                style={{
                  background: "rgba(255,255,255,0.055)",
                  padding: "44px 48px",
                  borderTop: "2px solid rgba(196,152,74,0.45)",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 1.5,
                    background: "var(--gold)",
                    marginBottom: 20,
                    opacity: 0.7,
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 21,
                    fontWeight: 400,
                    fontStyle: "italic",
                    lineHeight: 1.5,
                    color: "var(--ivory)",
                  }}
                >
                  {o}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATION BOX ────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "104px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              background: "var(--ivory)",
              borderRadius: 4,
              padding: "72px 80px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 72,
              alignItems: "start",
              borderTop: "2px solid rgba(196,152,74,0.4)",
            }}
          >
            <div>
              {/* Eyebrow */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.6 }} />
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
                  Certification
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 300,
                  color: "var(--plum)",
                  lineHeight: 1.15,
                  marginBottom: 20,
                  letterSpacing: "-0.01em",
                }}
              >
                Certification &amp; Professional Recognition
              </h2>

              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 20,
                  lineHeight: 1.8,
                  color: "var(--charcoal)",
                  marginBottom: 16,
                }}
              >
                Upon completion, you&apos;ll be certified in Women&apos;s Hormone Health
                through the Institute for Menstrual Health.
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15.5,
                  lineHeight: 1.8,
                  color: "var(--charcoal)",
                  opacity: 0.7,
                  marginBottom: 32,
                }}
              >
                Graduates go on to build practices, expand existing work, and support
                clients with greater depth and confidence.
              </p>

              <a
                href="https://instituteformenstrualhealth.com/womens-hormone-health-certification-program/curriculum/"
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
                  background: "var(--plum)",
                  color: "var(--ivory)",
                  borderRadius: 40,
                  textDecoration: "none",
                }}
              >
                View Full Program Details &rarr;
              </a>
            </div>

            {/* Cert points */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 4 }}>
              {certPoints.map((point) => (
                <div
                  key={point}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "var(--gold)",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      flexShrink: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    —
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 15,
                      color: "var(--charcoal)",
                      opacity: 0.85,
                      lineHeight: 1.65,
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT NICOLE ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "104px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "400px 1fr",
            gap: 80,
            alignItems: "center",
            maxWidth: 1040,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 4,
              overflow: "hidden",
              aspectRatio: "3/4",
            }}
          >
            <Image
              src="/images/Nicole_7.jpg"
              alt="Nicole Jardim"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
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
                About Nicole Jardim
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 300,
                color: "var(--plum)",
                lineHeight: 1.15,
                marginBottom: 20,
                letterSpacing: "-0.01em",
              }}
            >
              The expertise behind the curriculum
            </h2>

            <div style={{ width: 40, height: 1.5, background: "var(--gold)", marginBottom: 28, opacity: 0.6 }} />

            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20,
                lineHeight: 1.8,
                color: "var(--charcoal)",
                marginBottom: 18,
              }}
            >
              Nicole Jardim is a women&apos;s health educator, author, and the leading
              voice in menstrual and hormonal health education. For over two decades, her
              work has helped tens of thousands of women understand their cycles and the
              practitioners who support them do the same.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15.5,
                lineHeight: 1.85,
                color: "var(--charcoal)",
                opacity: 0.75,
                marginBottom: 32,
              }}
            >
              She is the author of <em>Fix Your Period</em>, the creator of the Fix Your
              Period App, and the founder of the Institute for Menstrual Health. The
              methodology at the heart of the Women&apos;s Hormone Health Certification is
              drawn directly from her clinical work, research, and years of teaching at
              the intersection of evidence and real-world practice.
            </p>

            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--terra)",
                borderBottom: "1.5px solid var(--terra)",
                paddingBottom: 3,
                textDecoration: "none",
              }}
            >
              Read Nicole&apos;s Full Story &rarr;
            </Link>
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
            background: "radial-gradient(ellipse at 60% 50%, rgba(181,90,58,0.18) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          {/* Eyebrow */}
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
                color: "rgba(196,152,74,0.75)",
              }}
            >
              Ready to specialize
            </span>
            <div style={{ width: 28, height: 1, background: "rgba(196,152,74,0.5)" }} />
          </div>

          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 300,
              color: "var(--ivory)",
              marginBottom: 20,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Ready to specialize in women&apos;s hormonal health?
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 20,
              lineHeight: 1.75,
              color: "var(--ivory)",
              opacity: 0.75,
              marginBottom: 44,
              maxWidth: 560,
              margin: "0 auto 44px",
            }}
          >
            Explore the full curriculum, enrollment details, and everything included in
            the Women&apos;s Hormone Health Certification at the Institute for Menstrual
            Health.
          </p>
          <a
            href="https://instituteformenstrualhealth.com/"
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
            Visit the Institute for Menstrual Health &rarr;
          </a>
        </div>
      </section>
    </>
  )
}
