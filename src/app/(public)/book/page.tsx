import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Fix Your Period — The Book",
  description:
    "A practical, evidence-informed guide to understanding your cycle, identifying root causes, and improving your hormonal health — step by step.",
}

const learnItems = [
  {
    title: "Your Period as a Vital Sign",
    body: "How to understand your period as a key indicator of overall health — and what it can tell you about what's happening across your entire body.",
  },
  {
    title: "Decoding Your Symptoms",
    body: "What common symptoms may be signaling beneath the surface — and how to start connecting them to their underlying causes.",
  },
  {
    title: "The Root Cause Framework",
    body: "The role of nutrition, stress, gut health, and lifestyle in hormone balance, and how to begin addressing root causes rather than just symptoms.",
  },
  {
    title: "A 6-Week Protocol",
    body: "A clear, practical protocol to support meaningful hormonal change over six weeks — evidence-informed and designed for real life.",
  },
]

const forYouItems = [
  "PMS or PMDD",
  "Painful, heavy, or irregular periods",
  "Missing periods",
  "Hormonal acne, mood changes, or fatigue",
  "PCOS, endometriosis, or fibroids",
  "A general sense that something isn't right",
]

const testimonials = [
  {
    quote: "This book changed how I think about my body entirely. For the first time, my symptoms made sense — and I actually had a plan for addressing them.",
    name: "Rachel T.",
    label: "Verified Reader",
  },
  {
    quote: "Nicole explains complex hormonal concepts in a way that's clear, practical, and never overwhelming. I've recommended this to every woman I know.",
    name: "Megan S.",
    label: "Verified Reader",
  },
  {
    quote: "I wish I'd had this book years ago. It's become my go-to reference — I return to it again and again as my health evolves.",
    name: "Amara L.",
    label: "Verified Reader",
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
}

export default function BookPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--plum)", padding: "96px 40px 80px" }}>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--sand)",
              borderRadius: 12,
              padding: "48px 40px",
              boxShadow: "0 12px 40px rgba(92,45,79,0.15)",
            }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: 340, aspectRatio: "3/4" }}>
              <Image
                src="/images/book-front.jpg"
                alt="Fix Your Period by Nicole Jardim"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div style={{ maxWidth: 520 }}>
            <span style={{ ...S.label, color: "var(--gold)", display: "block", marginBottom: 18 }}>
              The Book
            </span>
            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(40px, 5vw, 60px)",
                fontWeight: 300,
                lineHeight: 1.08,
                color: "var(--ivory)",
                marginBottom: 20,
              }}
            >
              Fix Your Period
            </h1>
            {[
              "A practical, evidence-informed guide to understanding your cycle, identifying root causes, and improving your hormonal health — step by step.",
              "If you're dealing with period symptoms that feel confusing, frustrating, or dismissed by your doctor, this is where to begin. This book was written to help you understand what your body is communicating — and what you can do next.",
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "rgba(250,245,239,0.78)",
                  marginBottom: 20,
                }}
              >
                {p}
              </p>
            ))}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="https://amzn.to/4dk5HFm"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  background: "var(--terra)",
                  color: "var(--ivory)",
                  borderRadius: 40,
                  textDecoration: "none",
                }}
              >
                Order the Book →
              </a>
              <a
                href="https://fixyourperiod.app/quiz"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  background: "transparent",
                  color: "var(--ivory)",
                  border: "1.5px solid rgba(250,245,239,0.4)",
                  borderRadius: 40,
                  textDecoration: "none",
                }}
              >
                Take the Hormone Health Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN ────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 16 }}>
              Inside the Book
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 300,
                color: "var(--plum)",
                marginBottom: 16,
              }}
            >
              What You&apos;ll Learn
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                opacity: 0.7,
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              A structured, step-by-step approach to improving your cycle — building understanding first, so your next steps actually make sense to you.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {learnItems.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--ivory)",
                  borderRadius: 4,
                  padding: "36px 32px",
                  borderTop: "3px solid var(--gold)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--plum)",
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "var(--charcoal)",
                    opacity: 0.8,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 300,
                color: "var(--plum)",
                marginBottom: 16,
              }}
            >
              Who This Book Is For
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                opacity: 0.7,
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              This book is for you if you&apos;re experiencing any of the following — or if you&apos;ve been told everything is &ldquo;normal&rdquo; but it definitely doesn&apos;t feel that way.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, maxWidth: 960, margin: "0 auto" }}>
            {forYouItems.map((item) => (
              <div
                key={item}
                style={{
                  background: "var(--sand)",
                  borderRadius: 4,
                  padding: "24px 28px",
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "var(--charcoal)",
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <span style={{ color: "var(--gold)", fontWeight: 700, flexShrink: 0 }}>—</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VITAL SIGN ───────────────────────────────────────────────── */}
      <section style={{ background: "var(--plum)", padding: "96px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: 300,
              color: "var(--ivory)",
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            A Different Way to Think About Your Period
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              color: "var(--ivory)",
              opacity: 0.7,
              lineHeight: 1.75,
            }}
          >
            Your period is not something to ignore or push through. It&apos;s a vital sign — one that reflects what&apos;s happening across your entire body. When you understand how to read those signals, you can begin to make decisions that support your health in a more informed, sustainable way.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 16 }}>
              Reader Reviews
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--plum)",
              }}
            >
              What readers are saying
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "var(--ivory)",
                  borderRadius: 6,
                  padding: "44px 36px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 48,
                    fontWeight: 300,
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  &ldquo;
                </span>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: "var(--charcoal)",
                    opacity: 0.85,
                    flexGrow: 1,
                    marginBottom: 24,
                  }}
                >
                  {t.quote}
                </p>
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--plum)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: "var(--charcoal)",
                      opacity: 0.45,
                    }}
                  >
                    {t.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT COMES NEXT ──────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "96px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          <div>
            <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 18 }}>
              What Comes Next
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
              Ready to go deeper?
            </h2>
            {[
              "The book is designed to give you a strong foundation. If you want more personalized guidance and a protocol tailored to your specific symptoms, the next step is the Fix Your Period app.",
              "Start with the free Assessment — your answers generate a personalized roadmap built around your cycle, symptoms, and lifestyle.",
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
            <a
              href="https://fixyourperiod.app/quiz"
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
                background: "var(--terra)",
                color: "var(--ivory)",
                borderRadius: 40,
                textDecoration: "none",
              }}
            >
              Take the Free Assessment →
            </a>
          </div>

          <div style={{ background: "var(--sand)", borderRadius: 6, padding: "48px 44px" }}>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 26,
                fontWeight: 600,
                color: "var(--plum)",
                marginBottom: 20,
              }}
            >
              Also Available
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <div style={{ ...S.label, color: "var(--terra)", marginBottom: 8 }}>The Blog</div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "var(--charcoal)",
                    opacity: 0.8,
                  }}
                >
                  Hundreds of articles covering menstrual and hormonal health — organized by topic, condition, and life stage.
                </p>
              </div>
              <div style={{ height: 1, background: "rgba(92,45,79,0.1)" }} />
              <div>
                <div style={{ ...S.label, color: "var(--terra)", marginBottom: 8 }}>
                  The Period Party Podcast
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "var(--charcoal)",
                    opacity: 0.8,
                  }}
                >
                  A top-rated podcast with expert interviews and real answers to your most pressing hormonal health questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
