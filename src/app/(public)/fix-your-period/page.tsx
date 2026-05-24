import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Fix Your Period App",
  description:
    "The Fix Your Period App uses Nicole's proven methodology to give you a personalized protocol built around your specific cycle, symptoms, and lifestyle.",
}

const howSteps = [
  {
    num: "01",
    title: "Take the Free Assessment",
    body: "Answer 30 targeted questions about your cycle, symptoms, mood, energy, skin, and lifestyle. Takes about five minutes.",
  },
  {
    num: "02",
    title: "Get Your Protocol",
    body: "Receive a personalized hormonal health score and a tailored action plan covering nutrition, supplements, and lifestyle adjustments — built for your body, not a template.",
  },
  {
    num: "03",
    title: "Track, Learn & Improve",
    body: "Use the cycle tracker and NicoleNow to deepen your understanding and adapt your protocol as your body changes over time.",
  },
]

const features = [
  {
    num: "01",
    title: "Hormone Health Assessment",
    body: "Answer 30 questions about your symptoms and cycle. Your responses generate a personalized protocol — not a generic plan, but one built around exactly what your body is doing.",
  },
  {
    num: "02",
    title: "Root-Cause Protocols",
    body: "Personalized recommendations for nutrition, supplements, lifestyle changes, and lab testing — designed to address underlying imbalances, not suppress symptoms.",
  },
  {
    num: "03",
    title: "NicoleNow",
    body: "An AI trained on Nicole's complete methodology. Ask questions, get guidance, and work through your symptoms — grounded in real expertise, not generic health advice.",
  },
  {
    num: "04",
    title: "Cycle Tracker",
    body: "Log your period, symptoms, mood, and energy levels. Over time, you'll start to see the patterns your body has been trying to show you all along.",
  },
  {
    num: "05",
    title: "Article Library",
    body: "30 in-depth guides covering every major hormonal condition — PCOS, endometriosis, PMS, perimenopause, thyroid, and more — all written by Nicole.",
  },
  {
    num: "06",
    title: "The Period Party Podcast",
    body: "Over 270 episodes with leading experts in women's hormonal health. All available inside the app, organized by topic so you can go deep on what matters most to you.",
  },
]

const isForItems = [
  "You're dealing with period pain, heavy bleeding, irregular cycles, PMS, or PCOS",
  "You want a clearer, more structured approach to your hormonal health",
  "You've tried generic advice and it hasn't worked — you're ready for something personalized",
  "You want to understand what's actually going on in your body, not just manage symptoms",
  "You're navigating perimenopause, thyroid issues, or post-pill recovery",
  `You're tired of being told everything is "normal" when it clearly isn't`,
]

export default function FixYourPeriodPage() {
  return (
    <>
      {/* ── BRAND STRIP ──────────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--ivory)",
          padding: "28px 40px",
          borderBottom: "1px solid rgba(181,90,58,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <Image
          src="/images/fyp-logo.png"
          alt="Fix Your Period"
          width={48}
          height={48}
          style={{ borderRadius: "50%" }}
        />
        <span
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 26,
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--terra)",
            letterSpacing: "-0.01em",
          }}
        >
          Fix Your Period
        </span>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--terra)",
          padding: "96px 40px 88px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle warm vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 30%, rgba(92,45,79,0.15) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
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
            <div style={{ width: 28, height: 1, background: "rgba(250,245,239,0.4)" }} />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(250,245,239,0.65)",
              }}
            >
              Evidence-Based · Root-Cause · Personalised
            </span>
            <div style={{ width: 28, height: 1, background: "rgba(250,245,239,0.4)" }} />
          </div>

          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(40px, 5.5vw, 66px)",
              fontWeight: 300,
              lineHeight: 1.08,
              color: "var(--ivory)",
              marginBottom: 28,
              letterSpacing: "-0.02em",
            }}
          >
            Finally Fix Your Period Problems —{" "}
            <em style={{ fontStyle: "italic" }}>for Good.</em>
          </h1>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 21,
              lineHeight: 1.75,
              color: "var(--ivory)",
              opacity: 0.85,
              maxWidth: 580,
              margin: "0 auto 40px",
            }}
          >
            You&apos;ve been told your symptoms are &ldquo;normal.&rdquo; They&apos;re
            not. The Fix Your Period App uses Nicole&apos;s proven methodology to give
            you a personalized protocol built around your specific cycle, symptoms, and
            lifestyle.
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
              padding: "16px 44px",
              background: "var(--ivory)",
              color: "var(--terra)",
              borderRadius: 40,
              textDecoration: "none",
            }}
          >
            Take the Free Assessment &rarr;
          </a>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              color: "rgba(250,245,239,0.5)",
              marginTop: 16,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Free &middot; Takes 5 minutes &middot; No account required
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "104px 40px" }}>
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
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 300,
                color: "var(--plum)",
                marginBottom: 16,
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              Three steps to a clearer picture of your health
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                opacity: 0.6,
                maxWidth: 500,
                margin: "0 auto",
              }}
            >
              No guesswork. No generic advice. A structured, evidence-based path from
              symptoms to solutions.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
            {howSteps.map((step) => (
              <div
                key={step.num}
                style={{
                  background: "var(--sand)",
                  padding: "52px 44px",
                  borderTop: "2px solid rgba(196,152,74,0.4)",
                }}
              >
                {/* Step number */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 20,
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
                      color: "var(--gold)",
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: "clamp(20px, 1.8vw, 24px)",
                    fontWeight: 300,
                    color: "var(--plum)",
                    marginBottom: 14,
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 18,
                    lineHeight: 1.75,
                    color: "var(--charcoal)",
                    opacity: 0.85,
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP SCREENS ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "72px 40px", overflow: "hidden" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              gap: 24,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {[
              { src: "/images/fyp-screen-1.png", alt: "Fix Your Period App dashboard", w: 270 },
              { src: "/images/fyp-screen-2.png", alt: "Hormone Health Assessment", w: 306 },
              { src: "/images/fyp-screen-3.png", alt: "Personalized protocol", w: 270 },
            ].map((s) => (
              <Image
                key={s.src}
                src={s.src}
                alt={s.alt}
                width={s.w}
                height={Math.round(s.w * 1.9)}
                style={{ display: "block", maxWidth: "33%", height: "auto" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── EVERYTHING IN ONE PLACE ───────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "104px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
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
                What&apos;s Inside
              </span>
              <div style={{ width: 28, height: 1, background: "var(--gold)" }} />
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 300,
                color: "var(--plum)",
                marginBottom: 16,
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              Everything you need in one place
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                opacity: 0.6,
                maxWidth: 540,
                margin: "0 auto",
              }}
            >
              The Fix Your Period App isn&apos;t a period tracker. It&apos;s a complete
              hormonal health platform built around Nicole&apos;s two decades of clinical
              methodology.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {features.map((f) => (
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 18,
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

      {/* ── IS IT FOR YOU ────────────────────────────────────────────── */}
      <section style={{ background: "var(--plum)", padding: "104px 40px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
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
                  color: "rgba(196,152,74,0.75)",
                }}
              >
                This app is for you if
              </span>
              <div style={{ width: 28, height: 1, background: "rgba(196,152,74,0.55)" }} />
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 300,
                color: "var(--ivory)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Is the Fix Your Period App Right for You?
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20,
                lineHeight: 1.7,
                color: "var(--ivory)",
                opacity: 0.65,
                marginTop: 16,
              }}
            >
              This app was built for women who are done guessing.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {isForItems.map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  padding: "24px 28px",
                  borderRadius: 4,
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  borderLeft: "2px solid rgba(196,152,74,0.4)",
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
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 18,
                    lineHeight: 1.6,
                    color: "var(--ivory)",
                    opacity: 0.9,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASSESSMENT CTA ───────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--sand)",
          padding: "96px 40px",
        }}
      >
        <div
          style={{
            background: "var(--terra)",
            borderRadius: 4,
            padding: "80px 80px",
            textAlign: "center",
            maxWidth: 860,
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at 50% 0%, rgba(92,45,79,0.2) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative" }}>
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
                Start today
              </span>
              <div style={{ width: 28, height: 1, background: "rgba(250,245,239,0.4)" }} />
            </div>

            <h3
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: 300,
                color: "var(--ivory)",
                marginBottom: 20,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Your hormones don&apos;t have to run your life.
            </h3>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20,
                lineHeight: 1.75,
                color: "var(--ivory)",
                opacity: 0.8,
                marginBottom: 44,
                maxWidth: 560,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              The Hormone Health Assessment takes five minutes and gives you a personalized
              picture of your hormonal patterns — and a clear place to start.
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
                padding: "16px 44px",
                background: "var(--ivory)",
                color: "var(--terra)",
                borderRadius: 40,
                textDecoration: "none",
              }}
            >
              Take the Free Assessment &rarr;
            </a>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: "rgba(250,245,239,0.5)",
                marginTop: 16,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Free &middot; Takes 5 minutes &middot; No account required
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
