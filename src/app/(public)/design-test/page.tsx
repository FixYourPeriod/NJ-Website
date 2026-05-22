import Image from "next/image"
import Link from "next/link"

/**
 * Design exploration page — three hero directions for review.
 * Visit /design-test to compare.
 */

// ─── OPTION A: "The Invitation" ──────────────────────────────────────────────
// Warm, editorial. Nicole's photo bleeds edge-to-edge on the right.
// Left column is a personal letter, not a pitch. Generous space.
function HeroA() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
      {/* Left: warm ivory column */}
      <div
        style={{
          background: "var(--ivory)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 64px 80px 8vw",
          zIndex: 1,
        }}
      >
        {/* Personal eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 36,
          }}
        >
          <div style={{ width: 28, height: 1, background: "var(--gold)" }} />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--terra)",
            }}
          >
            A message from Nicole
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: "clamp(44px, 4.5vw, 72px)",
            fontWeight: 300,
            lineHeight: 1.08,
            color: "var(--plum)",
            marginBottom: 32,
            letterSpacing: "-0.02em",
          }}
        >
          Your symptoms<br />
          are telling you<br />
          <em style={{ fontStyle: "italic", color: "var(--terra)" }}>something real.</em>
        </h1>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 20,
            lineHeight: 1.7,
            color: "var(--charcoal)",
            marginBottom: 12,
            maxWidth: 400,
          }}
        >
          I spent years being told my period problems were &ldquo;normal.&rdquo; They weren&apos;t.
          What I learned changed everything — and it&apos;s what drives everything I do today.
        </p>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            lineHeight: 1.75,
            color: "var(--charcoal)",
            opacity: 0.6,
            marginBottom: 48,
            maxWidth: 380,
          }}
        >
          Evidence-informed education to help you understand your hormones,
          your cycle, and what your body has been trying to tell you.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <Link
            href="/start-here"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "16px 40px",
              background: "var(--plum)",
              color: "var(--ivory)",
              borderRadius: 40,
            }}
          >
            Start Here
          </Link>
          <Link
            href="/about"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--terra)",
              borderBottom: "1px solid var(--terra)",
              paddingBottom: 2,
            }}
          >
            Read Nicole&apos;s story →
          </Link>
        </div>
      </div>

      {/* Right: full-bleed photo */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Warm tint overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(250,245,239,0.15) 0%, transparent 30%)",
            zIndex: 1,
          }}
        />
        <Image
          src="/images/nicole-5.jpg"
          alt="Nicole Jardim"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
      </div>
    </section>
  )
}

// ─── OPTION B: "The Story" ───────────────────────────────────────────────────
// Full-bleed photo background, dark plum overlay, intimate quote-style headline.
// Feels like an opening scene. Very emotional, personal.
function HeroB() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background photo */}
      <Image
        src="/images/nicole-5.jpg"
        alt="Nicole Jardim"
        fill
        style={{ objectFit: "cover", objectPosition: "center top" }}
        priority
      />

      {/* Warm dark overlay — left half darker, right lighter so face shows */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, rgba(44,37,32,0.88) 0%, rgba(44,37,32,0.72) 45%, rgba(44,37,32,0.35) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 700,
          padding: "0 48px",
          marginRight: "auto",
          marginLeft: "8vw",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 32,
          }}
        >
          Nicole Jardim — Women&apos;s Hormonal Health
        </p>

        <h1
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(40px, 5.5vw, 78px)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "var(--ivory)",
            marginBottom: 32,
            letterSpacing: "-0.02em",
          }}
        >
          &ldquo;I&apos;ve been where<br />you are.&rdquo;
        </h1>

        <div
          style={{
            width: 48,
            height: 1,
            background: "var(--gold)",
            marginBottom: 28,
          }}
        />

        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 22,
            lineHeight: 1.65,
            color: "rgba(250,245,239,0.85)",
            marginBottom: 48,
            maxWidth: 560,
          }}
        >
          Straight talk, evidence-informed education to help you understand
          your hormones, your period, and what your body has been trying
          to tell you.
        </p>

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <Link
            href="/start-here"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "16px 40px",
              background: "var(--ivory)",
              color: "var(--plum)",
              borderRadius: 40,
            }}
          >
            Start Here
          </Link>
          <Link
            href="/about"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "16px 40px",
              background: "transparent",
              color: "var(--ivory)",
              border: "1px solid rgba(250,245,239,0.35)",
              borderRadius: 40,
            }}
          >
            About Nicole
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── OPTION C: "The Warmth" ──────────────────────────────────────────────────
// Asymmetric. Photo is warm and close. Text is casual and stacked.
// Large gold italic word breaks the grid. Stats baked into hero.
function HeroC() {
  const stats = [
    { num: "270+", label: "podcast episodes" },
    { num: "10K+", label: "women supported" },
    { num: "20 yrs", label: "in practice" },
  ]

  return (
    <section
      style={{
        background: "var(--sand)",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "5fr 4fr",
        overflow: "hidden",
      }}
    >
      {/* Left: photo with warm bottom gradient */}
      <div style={{ position: "relative" }}>
        <Image
          src="/images/nicole-5.jpg"
          alt="Nicole Jardim"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
        {/* Bottom gradient fades into sand for stats */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 220,
            background: "linear-gradient(to bottom, transparent, var(--sand))",
            zIndex: 1,
          }}
        />
        {/* Stats floating at bottom of photo */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            display: "flex",
            gap: 0,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                flex: 1,
                padding: "24px 28px",
                borderRight: i < stats.length - 1 ? "1px solid rgba(92,45,79,0.1)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 32,
                  fontWeight: 300,
                  color: "var(--plum)",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--charcoal)",
                  opacity: 0.55,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: text content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 56px 80px 48px",
          background: "var(--sand)",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--terra)",
            display: "block",
            marginBottom: 28,
          }}
        >
          Women&apos;s Hormonal Health
        </span>

        <h1
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: "clamp(40px, 4vw, 60px)",
            fontWeight: 300,
            lineHeight: 1.12,
            color: "var(--plum)",
            marginBottom: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Make sense
        </h1>
        <h1
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(52px, 5.5vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.0,
            color: "var(--gold)",
            marginBottom: 0,
            letterSpacing: "-0.02em",
          }}
        >
          of your body.
        </h1>

        <div
          style={{
            width: 40,
            height: 1.5,
            background: "var(--terra)",
            margin: "28px 0",
          }}
        />

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16,
            lineHeight: 1.8,
            color: "var(--charcoal)",
            opacity: 0.75,
            marginBottom: 40,
          }}
        >
          Evidence-informed education to help you understand your hormones,
          your period, and what your body&apos;s been trying to tell you.
        </p>

        <Link
          href="/start-here"
          style={{
            alignSelf: "flex-start",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "16px 40px",
            background: "var(--terra)",
            color: "var(--ivory)",
            borderRadius: 40,
          }}
        >
          Start Here →
        </Link>
      </div>
    </section>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function DesignTestPage() {
  const options = [
    {
      id: "A",
      name: "The Invitation",
      desc: "Personal letter energy. Ivory left column with Nicole's voice front and center. Photo bleeds to the edge on the right. Warm but editorial.",
      Component: HeroA,
    },
    {
      id: "B",
      name: "The Story",
      desc: "Full-screen photo with a dark warm overlay. Opens like a film. The first thing you read is Nicole's personal quote. Emotional and immersive.",
      Component: HeroB,
    },
    {
      id: "C",
      name: "The Warmth",
      desc: "Asymmetric sand background. Photo on the left with stats at the bottom. Right column is relaxed and conversational. Feels lived-in.",
      Component: HeroC,
    },
  ]

  return (
    <div>
      {/* Page header */}
      <div
        style={{
          background: "var(--charcoal)",
          padding: "20px 40px",
          position: "sticky",
          top: 72,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--gold)",
          }}
        >
          Design exploration — Homepage Hero
        </span>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: "rgba(250,245,239,0.45)",
          }}
        >
          Scroll to compare three directions. Each is fully built and interactive.
        </span>
      </div>

      {options.map(({ id, name, desc, Component }) => (
        <div key={id}>
          {/* Section label */}
          <div
            style={{
              background: "var(--plum)",
              padding: "20px 40px",
              display: "flex",
              alignItems: "baseline",
              gap: 20,
            }}
          >
            <span
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontStyle: "italic",
                fontSize: 28,
                fontWeight: 300,
                color: "var(--gold)",
              }}
            >
              {id}
            </span>
            <span
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 18,
                fontWeight: 400,
                color: "var(--ivory)",
              }}
            >
              {name}
            </span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: "rgba(250,245,239,0.55)",
                maxWidth: 560,
              }}
            >
              — {desc}
            </span>
          </div>
          <Component />
        </div>
      ))}
    </div>
  )
}
