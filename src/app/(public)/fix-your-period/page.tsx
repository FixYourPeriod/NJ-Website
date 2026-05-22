import type { Metadata } from "next"

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
    icon: "📋",
    title: "Hormone Health Assessment",
    body: "Answer 30 questions about your symptoms and cycle. Your responses generate a personalized protocol — not a generic plan, but one built around exactly what your body is doing.",
  },
  {
    icon: "🌿",
    title: "Root-Cause Protocols",
    body: "Personalized recommendations for nutrition, supplements, lifestyle changes, and lab testing — designed to address underlying imbalances, not suppress symptoms.",
  },
  {
    icon: "💬",
    title: "NicoleNow",
    body: "An AI trained on Nicole's complete methodology. Ask questions, get guidance, and work through your symptoms — grounded in real expertise, not generic health advice.",
  },
  {
    icon: "📅",
    title: "Cycle Tracker",
    body: "Log your period, symptoms, mood, and energy levels. Over time, you'll start to see the patterns your body has been trying to show you all along.",
  },
  {
    icon: "📚",
    title: "Article Library",
    body: "30 in-depth guides covering every major hormonal condition — PCOS, endometriosis, PMS, perimenopause, thyroid, and more — all written by Nicole.",
  },
  {
    icon: "🎙",
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
  "You’re tired of being told everything is “normal” when it clearly isn’t",
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

export default function FixYourPeriodPage() {
  return (
    <>
      {/* ── BRAND STRIP ──────────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--ivory)",
          padding: "32px 40px 28px",
          borderBottom: "1px solid rgba(181,90,58,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 28,
            fontWeight: 400,
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
          padding: "96px 40px 80px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span
            style={{
              ...S.label,
              color: "rgba(250,245,239,0.65)",
              display: "block",
              marginBottom: 20,
            }}
          >
            Evidence-Based · Root-Cause · Personalised
          </span>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 300,
              lineHeight: 1.08,
              color: "var(--ivory)",
              marginBottom: 24,
            }}
          >
            Finally Fix Your Period Problems — for Good.
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--ivory)",
              opacity: 0.78,
              maxWidth: 600,
              margin: "0 auto 36px",
            }}
          >
            You&apos;ve been told your symptoms are &ldquo;normal.&rdquo; They&apos;re not. The Fix Your Period App uses Nicole&apos;s proven methodology to give you a personalized protocol built around your specific cycle, symptoms, and lifestyle.
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
            Take the Free Assessment →
          </a>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(250,245,239,0.5)",
              marginTop: 16,
              letterSpacing: "0.04em",
            }}
          >
            Free · Takes 5 minutes · No account required
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 16 }}>
              How It Works
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
              Three steps to a clearer picture of your health
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                opacity: 0.65,
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              No guesswork. No generic advice. A structured, evidence-based path from symptoms to solutions.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {howSteps.map((step) => (
              <div
                key={step.num}
                style={{ background: "var(--sand)", padding: "52px 44px" }}
              >
                <div
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: 64,
                    fontWeight: 300,
                    color: "var(--terra)",
                    opacity: 0.18,
                    lineHeight: 1,
                    marginBottom: 20,
                  }}
                >
                  {step.num}
                </div>
                <h4
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: "var(--plum)",
                    marginBottom: 12,
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--charcoal)",
                    opacity: 0.78,
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVERYTHING IN ONE PLACE ───────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 16 }}>
              What&apos;s Inside
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
              Everything you need in one place
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                opacity: 0.65,
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              The Fix Your Period App isn&apos;t a period tracker. It&apos;s a complete hormonal health platform built around Nicole&apos;s two decades of clinical methodology.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  background: "var(--ivory)",
                  borderRadius: 4,
                  padding: "40px 36px",
                  borderTop: "3px solid var(--terra)",
                }}
              >
                <span style={{ fontSize: 26, marginBottom: 16, display: "block" }}>{f.icon}</span>
                <h4
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--plum)",
                    marginBottom: 10,
                    lineHeight: 1.2,
                  }}
                >
                  {f.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14.5,
                    lineHeight: 1.65,
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
      <section style={{ background: "var(--ivory)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 300,
                color: "var(--plum)",
                marginBottom: 16,
              }}
            >
              Is the Fix Your Period App Right for You?
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                opacity: 0.65,
              }}
            >
              This app was built for women who are done guessing.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {isForItems.map((item) => (
              <div
                key={item}
                style={{
                  background: "var(--sand)",
                  padding: "26px 30px",
                  borderRadius: 4,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--charcoal)",
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "var(--terra)",
                    fontWeight: 700,
                    fontSize: 15,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASSESSMENT CTA ───────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "96px 40px" }}>
        <div
          style={{
            background: "var(--terra)",
            borderRadius: 6,
            padding: "72px 80px",
            textAlign: "center",
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          <h3
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(32px, 4vw, 44px)",
              fontWeight: 300,
              color: "var(--ivory)",
              marginBottom: 16,
              lineHeight: 1.12,
            }}
          >
            Your hormones don&apos;t have to run your life.
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              color: "var(--ivory)",
              opacity: 0.75,
              marginBottom: 40,
              lineHeight: 1.65,
              maxWidth: 580,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            The Hormone Health Assessment takes five minutes and gives you a personalized picture of your hormonal patterns — and a clear place to start.
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
            Take the Free Assessment →
          </a>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "var(--ivory)",
              opacity: 0.55,
              marginTop: 16,
              letterSpacing: "0.04em",
            }}
          >
            Free · Takes 5 minutes · No account required
          </p>
        </div>
      </section>
    </>
  )
}
