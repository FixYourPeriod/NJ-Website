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
    title: "Structured Modules",
    body: "12 in-depth training modules with recorded teaching sessions and case study reviews — designed to build systematically, so you never feel like you've missed a step.",
  },
  {
    title: "Practical Protocols",
    body: "Client-ready resources, practical protocols, and frameworks you can immediately integrate into your work — not just theory, but applied education.",
  },
  {
    title: "Practice Building",
    body: "Business and practice-building guidance helps you take your new expertise and translate it into a real, sustainable professional offering.",
  },
  {
    title: "Assessment & Certification",
    body: "Module tests, a comprehensive final exam, and a two-day virtual practitioner training workshop culminate in your certification — open book, with an 80%+ pass threshold.",
  },
  {
    title: "Expert Collaborations",
    body: "Guest presentations from leading practitioners in menstrual health, functional medicine, and adjacent specialties to broaden your perspective.",
  },
  {
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

const S = {
  label: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
  },
}

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
          padding: "96px 40px 80px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <span style={{ ...S.label, color: "var(--gold)", display: "block", marginBottom: 20 }}>
            Professional Training
          </span>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--ivory)",
              marginBottom: 24,
            }}
          >
            Study Menstrual and Hormonal Health at a Professional Level
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--ivory)",
              opacity: 0.75,
              maxWidth: 640,
              margin: "0 auto 36px",
            }}
          >
            Comprehensive, practitioner-level training through the Institute for Menstrual Health — designed to help you understand, apply, and confidently support women&apos;s hormonal health in real-world settings.
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
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "14px 36px",
              background: "var(--terra)",
              color: "var(--ivory)",
              borderRadius: 40,
              textDecoration: "none",
            }}
          >
            Explore the Certification Program →
          </a>
        </div>
      </section>

      {/* ── CREDENTIAL STRIP ─────────────────────────────────────────── */}
      <div style={{ background: "var(--charcoal)", padding: "40px" }}>
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
                  fontSize: 36,
                  fontWeight: 300,
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
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--ivory)",
                  opacity: 0.6,
                  letterSpacing: "0.04em",
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
      <section style={{ background: "var(--ivory)", padding: "96px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "start",
            maxWidth: 1040,
            margin: "0 auto",
          }}
        >
          <div style={{ position: "relative", borderRadius: 4, overflow: "hidden", aspectRatio: "4/5" }}>
            <Image
              src="/images/nicole-3.jpg"
              alt="Women's health coaches"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ background: "var(--sand)" }}
            />
          </div>

          <div style={{ paddingTop: 8 }}>
            <span style={{ ...S.label, color: "var(--gold)", display: "block", marginBottom: 18 }}>
              The Institute for Menstrual Health
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
              Where foundational knowledge meets real-world application
            </h2>
            {[
              "The Institute for Menstrual Health is Nicole Jardim's professional education platform, created to train practitioners, coaches, and health professionals in menstrual and hormonal health.",
              "At its core is the Women's Hormone Health Certification Program — an in-depth training designed to bridge the gap between foundational knowledge and real-world application. This work goes beyond theory. It's about understanding how the body functions, recognizing patterns and root causes, and knowing how to support clients in a way that is informed, practical, and grounded in evidence.",
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "var(--charcoal)",
                  opacity: 0.8,
                  marginBottom: 16,
                }}
              >
                {p}
              </p>
            ))}

            <div style={{ marginTop: 32 }}>
              <span style={{ ...S.label, color: "var(--gold)", display: "block", marginBottom: 14 }}>
                Who This Training Is For
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {whoCards.map((card) => (
                  <div
                    key={card.title}
                    style={{
                      background: "var(--sand)",
                      borderRadius: 4,
                      padding: "20px 24px",
                      borderTop: "3px solid var(--gold)",
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontSize: 18,
                        fontWeight: 600,
                        color: "var(--plum)",
                        marginBottom: 4,
                      }}
                    >
                      {card.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: "var(--charcoal)",
                        opacity: 0.75,
                      }}
                    >
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CERTIFICATION ────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ ...S.label, color: "var(--gold)", display: "block", marginBottom: 16 }}>
              The Program
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: 300,
                color: "var(--plum)",
                marginBottom: 16,
              }}
            >
              The Women&apos;s Hormone Health Certification
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                opacity: 0.65,
                maxWidth: 580,
                margin: "0 auto",
              }}
            >
              A comprehensive training designed to help you become a more knowledgeable, confident, and effective practitioner in women&apos;s hormonal health.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {modules.map((mod) => (
              <div
                key={mod}
                style={{
                  background: "var(--ivory)",
                  borderRadius: 4,
                  padding: "22px 28px",
                  borderLeft: "3px solid var(--gold)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--plum)",
                  lineHeight: 1.4,
                }}
              >
                {mod}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: 300,
                color: "var(--plum)",
                marginBottom: 16,
              }}
            >
              How the Self-Study Program Works
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                opacity: 0.65,
                maxWidth: 580,
                margin: "0 auto",
              }}
            >
              Move through the material at your own pace while still following a clear, structured framework — from foundational concepts into deeper, applied understanding.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {programFeatures.map((f) => (
              <div
                key={f.title}
                style={{
                  background: "var(--sand)",
                  borderRadius: 4,
                  padding: "40px 36px",
                  borderTop: "3px solid var(--gold)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--plum)",
                    marginBottom: 12,
                  }}
                >
                  {f.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "var(--charcoal)",
                    opacity: 0.78,
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
      <section style={{ background: "var(--plum)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: 300,
                color: "var(--ivory)",
                marginBottom: 16,
              }}
            >
              What This Program Allows You to Do
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--ivory)",
                opacity: 0.65,
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              By the end of the program, you&apos;ll be equipped to support women&apos;s health with confidence, clarity, and clinical depth.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
            {outcomes.map((o) => (
              <div
                key={o}
                style={{ background: "var(--plum-mid)", padding: "44px 48px" }}
              >
                <div
                  style={{ width: 36, height: 2, background: "var(--gold)", marginBottom: 20 }}
                />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 21,
                    fontWeight: 400,
                    fontStyle: "italic",
                    lineHeight: 1.45,
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
      <section style={{ background: "var(--sand)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              background: "var(--ivory)",
              borderRadius: 6,
              padding: "72px 80px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
              border: "1px solid rgba(92,45,79,0.12)",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: "clamp(32px, 3.5vw, 44px)",
                  fontWeight: 300,
                  color: "var(--plum)",
                  lineHeight: 1.15,
                  marginBottom: 20,
                }}
              >
                Certification &amp; Professional Recognition
              </h2>
              {[
                "Upon completion, you'll be certified in Women's Hormone Health through the Institute for Menstrual Health.",
                "Graduates go on to build practices, expand existing work, and support clients with greater depth and confidence.",
              ].map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 16,
                    color: "var(--charcoal)",
                    opacity: 0.75,
                    lineHeight: 1.75,
                    marginBottom: 16,
                  }}
                >
                  {p}
                </p>
              ))}
              <a
                href="https://instituteformenstrualhealth.com/womens-hormone-health-certification-program/curriculum/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 8,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  background: "transparent",
                  color: "var(--plum)",
                  border: "1.5px solid rgba(92,45,79,0.3)",
                  borderRadius: 40,
                  textDecoration: "none",
                }}
              >
                View Full Program Details →
              </a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {certPoints.map((point, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "rgba(196,152,74,0.15)",
                      border: "1px solid var(--gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "var(--terra)",
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    {i === certPoints.length - 1 ? "$" : "✓"}
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 15,
                      color: "var(--charcoal)",
                      opacity: 0.85,
                      lineHeight: 1.6,
                      paddingTop: 4,
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
      <section style={{ background: "var(--ivory)", padding: "96px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "420px 1fr",
            gap: 80,
            alignItems: "center",
            maxWidth: 1040,
            margin: "0 auto",
          }}
        >
          <div style={{ position: "relative", borderRadius: 4, overflow: "hidden", aspectRatio: "3/4" }}>
            <Image
              src="/images/Nicole_7.jpg"
              alt="Nicole Jardim"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>
          <div>
            <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 18 }}>
              About Nicole Jardim
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
              The expertise behind the curriculum
            </h2>
            {[
              "Nicole Jardim is a women's health educator, author, and the leading voice in menstrual and hormonal health education. For over two decades, her work has helped tens of thousands of women understand their cycles and the practitioners who support them do the same.",
              "She is the author of Fix Your Period, the creator of the Fix Your Period App, and the founder of the Institute for Menstrual Health. The methodology at the heart of the Women's Hormone Health Certification is drawn directly from her clinical work, research, and years of teaching at the intersection of evidence and real-world practice.",
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "var(--charcoal)",
                  opacity: 0.8,
                  marginBottom: 16,
                }}
              >
                {p}
              </p>
            ))}
            <Link
              href="/about"
              style={{
                display: "inline-block",
                marginTop: 8,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "14px 32px",
                background: "transparent",
                color: "var(--plum)",
                border: "1.5px solid rgba(92,45,79,0.3)",
                borderRadius: 40,
                textDecoration: "none",
              }}
            >
              Read Nicole&apos;s Full Story →
            </Link>
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
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 300,
              color: "var(--ivory)",
              marginBottom: 20,
            }}
          >
            Ready to specialize in women&apos;s hormonal health?
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
            Explore the full curriculum, enrollment details, and everything included in the Women&apos;s Hormone Health Certification at the Institute for Menstrual Health.
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
            Visit the Institute for Menstrual Health →
          </a>
        </div>
      </section>
    </>
  )
}
