import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Fix Your Period — The Book",
  description:
    "A practical, evidence-informed guide to understanding your cycle, identifying root causes, and improving your hormonal health — step by step.",
}

const learnItems = [
  {
    num: "01",
    title: "Your Period as a Vital Sign",
    body: "How to understand your period as a key indicator of overall health — and what it can tell you about what's happening across your entire body.",
  },
  {
    num: "02",
    title: "Decoding Your Symptoms",
    body: "What common symptoms may be signaling beneath the surface — and how to start connecting them to their underlying causes.",
  },
  {
    num: "03",
    title: "The Root Cause Framework",
    body: "The role of nutrition, stress, gut health, and lifestyle in hormone balance, and how to begin addressing root causes rather than just symptoms.",
  },
  {
    num: "04",
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
    quote:
      "This book changed how I think about my body entirely. For the first time, my symptoms made sense — and I actually had a plan for addressing them.",
    name: "Rachel T.",
    label: "Verified Reader",
  },
  {
    quote:
      "Nicole explains complex hormonal concepts in a way that's clear, practical, and never overwhelming. I've recommended this to every woman I know.",
    name: "Megan S.",
    label: "Verified Reader",
  },
  {
    quote:
      "I wish I'd had this book years ago. It's become my go-to reference — I return to it again and again as my health evolves.",
    name: "Amara L.",
    label: "Verified Reader",
  },
]

export default function BookPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--plum)",
          padding: "96px 40px 88px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(181,90,58,0.16) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 1060,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 96,
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Book cover */}
          <div
            style={{
              background: "var(--sand)",
              borderRadius: 4,
              padding: "56px 48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 300,
                aspectRatio: "3/4",
              }}
            >
              <Image
                src="/images/book-front.jpg"
                alt="Fix Your Period by Nicole Jardim"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                style={{ objectFit: "contain" }}
                priority
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
                  color: "rgba(196,152,74,0.85)",
                }}
              >
                The Book
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(40px, 5vw, 62px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.05,
                color: "var(--ivory)",
                marginBottom: 20,
                letterSpacing: "-0.02em",
              }}
            >
              Fix Your Period
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
                fontSize: 21,
                lineHeight: 1.75,
                color: "var(--ivory)",
                opacity: 0.85,
                marginBottom: 18,
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
                color: "var(--ivory)",
                opacity: 0.6,
                marginBottom: 36,
              }}
            >
              If you&apos;re dealing with period symptoms that feel confusing, frustrating,
              or dismissed by your doctor, this is where to begin. This book was written
              to help you understand what your body is communicating — and what you can
              do next.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <a
                href="https://amzn.to/4dk5HFm"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "16px 40px",
                  background: "var(--terra)",
                  color: "var(--ivory)",
                  borderRadius: 40,
                  textDecoration: "none",
                }}
              >
                Order the Book &rarr;
              </a>
              <a
                href="https://fixyourperiod.app/quiz"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--ivory)",
                  opacity: 0.7,
                  borderBottom: "1.5px solid rgba(250,245,239,0.4)",
                  paddingBottom: 3,
                  textDecoration: "none",
                }}
              >
                Take the Free Assessment &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN ────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "104px 40px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          {/* Centered eyebrow */}
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
                Inside the Book
              </span>
              <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.6 }} />
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--plum)",
                marginBottom: 16,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              What You&apos;ll Learn
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
              A structured, step-by-step approach to improving your cycle — building
              understanding first, so your next steps actually make sense to you.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            {learnItems.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--ivory)",
                  borderRadius: 4,
                  padding: "40px 36px",
                  borderTop: "2px solid rgba(196,152,74,0.4)",
                }}
              >
                {/* Number eyebrow */}
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
                    {item.num}
                  </span>
                </div>
                <h4
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: "clamp(18px, 1.6vw, 22px)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "var(--plum)",
                    marginBottom: 12,
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
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
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "104px 40px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
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
                Who It&apos;s For
              </span>
              <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.6 }} />
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--plum)",
                marginBottom: 16,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Who This Book Is For
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--charcoal)",
                opacity: 0.65,
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              This book is for you if you&apos;re experiencing any of the following — or
              if you&apos;ve been told everything is &ldquo;normal&rdquo; but it
              definitely doesn&apos;t feel that way.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
            }}
          >
            {forYouItems.map((item) => (
              <div
                key={item}
                style={{
                  background: "var(--sand)",
                  borderRadius: 4,
                  padding: "22px 24px",
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
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
                    lineHeight: 1.55,
                  }}
                >
                  —
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "var(--plum)",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────────────────── */}
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
              "radial-gradient(ellipse at 40% 60%, rgba(181,90,58,0.15) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
          {/* Centered eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 36,
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
              A Different Way to Think About Your Period
            </span>
            <div style={{ width: 28, height: 1, background: "rgba(196,152,74,0.5)" }} />
          </div>

          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--ivory)",
              lineHeight: 1.15,
              marginBottom: 28,
              letterSpacing: "-0.015em",
            }}
          >
            Your period is not something to ignore or push through
          </h2>

          <div
            style={{
              width: 40,
              height: 1.5,
              background: "rgba(196,152,74,0.5)",
              margin: "0 auto 28px",
            }}
          />

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 21,
              lineHeight: 1.75,
              color: "var(--ivory)",
              opacity: 0.75,
            }}
          >
            It&apos;s a vital sign — one that reflects what&apos;s happening across your
            entire body. When you understand how to read those signals, you can begin to
            make decisions that support your health in a more informed, sustainable way.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "104px 40px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
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
                Reader Reviews
              </span>
              <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.6 }} />
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--plum)",
                letterSpacing: "-0.01em",
              }}
            >
              What readers are saying
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "var(--ivory)",
                  borderRadius: 4,
                  padding: "44px 36px",
                  display: "flex",
                  flexDirection: "column",
                  borderTop: "2px solid rgba(196,152,74,0.35)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 56,
                    fontWeight: 300,
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: 16,
                    opacity: 0.7,
                  }}
                >
                  &ldquo;
                </span>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 19,
                    fontStyle: "italic",
                    lineHeight: 1.65,
                    color: "var(--charcoal)",
                    flexGrow: 1,
                    marginBottom: 28,
                  }}
                >
                  {t.quote}
                </p>
                <div style={{ borderTop: "1px solid rgba(92,45,79,0.08)", paddingTop: 16 }}>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--plum)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      color: "var(--charcoal)",
                      opacity: 0.4,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginTop: 3,
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
      <section style={{ background: "var(--ivory)", padding: "104px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
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
                What Comes Next
              </span>
            </div>

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
              Ready to go deeper?
            </h2>

            <div style={{ width: 40, height: 1.5, background: "var(--gold)", marginBottom: 28, opacity: 0.6 }} />

            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20,
                lineHeight: 1.8,
                color: "var(--charcoal)",
                marginBottom: 16,
              }}
            >
              The book is designed to give you a strong foundation. If you want more
              personalized guidance and a protocol tailored to your specific symptoms,
              the next step is the Fix Your Period app.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15.5,
                lineHeight: 1.85,
                color: "var(--charcoal)",
                opacity: 0.7,
                marginBottom: 36,
              }}
            >
              Start with the free Assessment — your answers generate a personalized
              roadmap built around your cycle, symptoms, and lifestyle.
            </p>
            <a
              href="https://fixyourperiod.app/quiz"
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
              Take the Free Assessment &rarr;
            </a>
          </div>

          {/* Also Available card */}
          <div
            style={{
              background: "var(--sand)",
              borderRadius: 4,
              padding: "44px 40px",
              borderTop: "2px solid rgba(196,152,74,0.4)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
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
                Also Available
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <div style={{ paddingBottom: 24, marginBottom: 24, borderBottom: "1px solid rgba(92,45,79,0.08)" }}>
                <h4
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: 18,
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "var(--plum)",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  The Articles
                </h4>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14.5,
                    lineHeight: 1.7,
                    color: "var(--charcoal)",
                    opacity: 0.75,
                  }}
                >
                  Hundreds of articles covering menstrual and hormonal health —
                  organized by topic, condition, and life stage.
                </p>
              </div>

              <div>
                <h4
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: 18,
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "var(--plum)",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  The Period Party Podcast
                </h4>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14.5,
                    lineHeight: 1.7,
                    color: "var(--charcoal)",
                    opacity: 0.75,
                  }}
                >
                  A top-rated podcast with expert interviews and real answers to your
                  most pressing hormonal health questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
