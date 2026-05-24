import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Nicole Jardim — Women's Hormonal Health",
  description:
    "Straight talk, evidence-informed education to help you understand your hormones, your period, and what your body's been trying to tell you.",
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const mediaLogos = ["The Guardian", "Well+Good", "mindbodygreen", "Healthline", "Shape", "Bustle"]

const beliefs = [
  "Your cycle is a vital sign, not an inconvenience",
  "Symptoms are signals worth understanding, not suppressing",
  "There is no one-size-fits-all solution",
  "Education and body literacy are foundational to lasting change",
]

const pathways = [
  {
    num: "01",
    title: "Learn & Understand",
    body: "Foundational education about menstrual cycles, hormones, and common symptoms.",
    cta: "Explore articles & resources →",
    href: "/articles",
    style: "light" as const,
  },
  {
    num: "02",
    title: "Get Personalized Guidance",
    body: "Understand what your symptoms may be pointing to and where to begin.",
    cta: "Start with the Period Quiz →",
    href: "https://fixyourperiod.app/quiz",
    external: true,
    style: "terra" as const,
  },
  {
    num: "03",
    title: "Educate & Specialize",
    body: "Professional training and continuing education in menstrual and hormonal health through the Institute for Menstrual Health.",
    cta: "Visit the Institute →",
    href: "https://instituteformenstrualhealth.com/",
    external: true,
    style: "plum" as const,
  },
]

const testimonials = [
  {
    text: "This book changed how I think about my body entirely. For the first time, my symptoms made sense — and I actually had a plan for addressing them.",
    name: "Rachel T.",
    location: "Verified Reader",
  },
  {
    text: "Nicole explains complex hormonal concepts in a way that's clear, practical, and never overwhelming. I've recommended her work to every woman I know.",
    name: "Megan S.",
    location: "Verified Reader",
  },
  {
    text: "I wish I'd found Nicole's work years ago. It's become my go-to reference — I return to it again and again as my health evolves.",
    name: "Amara L.",
    location: "Verified Reader",
  },
]

// ─── EYEBROW helper ─────────────────────────────────────────────────────────
// Reusable eyebrow pattern: gold dash + uppercase label
function Eyebrow({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
      <div
        style={{
          width: 28,
          height: 1,
          background: light ? "rgba(196,152,74,0.6)" : "var(--gold)",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: light ? "rgba(250,245,239,0.6)" : "var(--terra)",
        }}
      >
        {label}
      </span>
    </div>
  )
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          overflow: "hidden",
        }}
      >
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
          <Eyebrow label="Women's Hormonal Health" />

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
            Make Sense<br />
            of Your<br />
            <em style={{ fontStyle: "italic", color: "var(--terra)" }}>Cycle.</em>
          </h1>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 21,
              lineHeight: 1.7,
              color: "var(--charcoal)",
              marginBottom: 8,
              maxWidth: 400,
            }}
          >
            Straight talk, evidence-informed education to help you understand
            your hormones, your period, and what your body&apos;s been trying
            to tell you.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 32, marginTop: 40 }}>
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
              About Nicole &rarr;
            </Link>
          </div>
        </div>

        {/* Right: full-bleed photo */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* Warm edge blend */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(250,245,239,0.18) 0%, transparent 28%)",
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

      {/* ── AS SEEN IN ──────────────────────────────────────────────────── */}
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
            {mediaLogos.map((logo) => (
              <span
                key={logo}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "var(--ivory)",
                  opacity: 0.4,
                  letterSpacing: "0.02em",
                }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── MEET NICOLE ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "120px 40px" }}>
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 96,
            alignItems: "center",
          }}
        >
          {/* Photo with warm frame */}
          <div
            style={{
              position: "relative",
              height: 660,
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/nicole-smoothie-crop.jpg"
              alt="Nicole Jardim"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          <div>
            <Eyebrow label="Meet Nicole Jardim" />

            <blockquote
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(32px, 3.5vw, 46px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--plum)",
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              &ldquo;I&apos;ve been where you are.&rdquo;
            </blockquote>

            {/* Gold rule below quote */}
            <div
              style={{
                width: 40,
                height: 1.5,
                background: "var(--gold)",
                marginBottom: 28,
              }}
            />

            {[
              "Nicole Jardim is a women's health educator, writer, and speaker focused on menstrual and hormonal health. Her work centers on helping women understand how their bodies actually function, so they can make informed, empowered decisions about their health.",
              <>She is the author of <em>Fix Your Period</em>, the creator of the Fix Your Period App, and the founder of the Institute for Menstrual Health — a global education platform training practitioners and health professionals in menstrual and hormonal health.</>,
              "Nicole's work has reached tens of thousands of women worldwide and has been featured across major media and cultural platforms. Her approach blends evidence-informed education with body literacy, nuance, and real-life context.",
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: 16.5,
                  lineHeight: 1.85,
                  color: "var(--charcoal)",
                  opacity: 0.85,
                  marginBottom: 16,
                }}
              >
                {para}
              </p>
            ))}

            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                marginTop: 16,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--terra)",
                borderBottom: "1.5px solid var(--terra)",
                paddingBottom: 3,
              }}
            >
              Read Nicole&apos;s Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ──────────────────────────────────────────────────── */}
      <section style={{ background: "var(--plum)", padding: "112px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>

          {/* Centered eyebrow + heading */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                marginBottom: 28,
              }}
            >
              <div style={{ width: 28, height: 1, background: "rgba(196,152,74,0.6)" }} />
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
                The philosophy
              </span>
              <div style={{ width: 28, height: 1, background: "rgba(196,152,74,0.6)" }} />
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(38px, 4.5vw, 60px)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--ivory)",
                marginBottom: 20,
                letterSpacing: "-0.01em",
              }}
            >
              A Different Way of Thinking<br />About Menstrual Health
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 21,
                lineHeight: 1.7,
                color: "var(--ivory)",
                opacity: 0.7,
                maxWidth: 580,
                margin: "0 auto",
              }}
            >
              Menstrual and hormonal symptoms aren&apos;t random, and they&apos;re not
              something you&apos;re meant to &ldquo;just live with.&rdquo;
            </p>
          </div>

          {/* Belief cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 3,
              marginBottom: 56,
            }}
          >
            {beliefs.map((belief) => (
              <div
                key={belief}
                style={{
                  background: "rgba(255,255,255,0.055)",
                  padding: "48px 52px",
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
                    fontStyle: "italic",
                    fontSize: 23,
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: "var(--ivory)",
                  }}
                >
                  {belief}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--ivory)",
              opacity: 0.55,
              maxWidth: 580,
              margin: "0 auto",
            }}
          >
            Nicole&apos;s work is here to help you make sense of what your body is
            communicating — and to support you in choosing what comes next.
          </p>
        </div>
      </section>

      {/* ── HOW CAN I HELP YOU ───────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "112px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <Eyebrow label="Where to begin" />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(34px, 4vw, 52px)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "var(--plum)",
                marginBottom: 14,
              }}
            >
              How Can I Help You Right Now?
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                opacity: 0.6,
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              Whether you&apos;re just beginning to ask questions or looking for
              deeper support, there&apos;s a clear place to start.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 14,
            }}
          >
            {pathways.map((p) => {
              const isLight = p.style === "light"
              const bg = isLight ? "var(--ivory)" : p.style === "terra" ? "var(--terra)" : "var(--plum)"
              const textColor = isLight ? "var(--plum)" : "var(--ivory)"
              const bodyColor = isLight ? "var(--charcoal)" : "rgba(250,245,239,0.75)"
              const linkColor = isLight ? "var(--terra)" : "rgba(250,245,239,0.7)"
              const topBorder = isLight ? "2px solid var(--gold)" : "2px solid rgba(250,245,239,0.25)"

              const content = (
                <div
                  style={{
                    borderRadius: 4,
                    padding: "44px 36px 40px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    background: bg,
                    border: isLight ? "1px solid rgba(196,152,74,0.2)" : undefined,
                    borderTop: topBorder,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: isLight ? "var(--gold)" : "rgba(250,245,239,0.45)",
                      display: "block",
                      marginBottom: 18,
                    }}
                  >
                    {p.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: "clamp(20px, 1.8vw, 26px)",
                      fontWeight: 300,
                      color: textColor,
                      marginBottom: 14,
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: bodyColor,
                      opacity: isLight ? 0.75 : 1,
                      flexGrow: 1,
                      marginBottom: 28,
                    }}
                  >
                    {p.body}
                  </p>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: linkColor,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {p.cta}
                  </span>
                </div>
              )

              return p.external ? (
                <a
                  key={p.num}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  {content}
                </a>
              ) : (
                <Link key={p.num} href={p.href} style={{ textDecoration: "none", display: "block" }}>
                  {content}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--terra)", padding: "96px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
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
              Reach &amp; Impact
            </span>
            <div style={{ width: 28, height: 1, background: "rgba(250,245,239,0.4)" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(34px, 4vw, 54px)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--ivory)",
              marginBottom: 24,
              letterSpacing: "-0.01em",
            }}
          >
            Trusted by Tens of Thousands Worldwide
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 21,
              lineHeight: 1.75,
              color: "var(--ivory)",
              opacity: 0.85,
            }}
          >
            Nicole&apos;s work has supported women across the globe in understanding their
            cycles, advocating for themselves, and approaching their health with more
            clarity and confidence.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "112px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <Eyebrow label="Women's voices" />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(30px, 3.5vw, 46px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.2,
                color: "var(--plum)",
              }}
            >
              Here&apos;s What Women Are Saying<br />About Working With Nicole
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "var(--sand)",
                  borderRadius: 4,
                  padding: "48px 40px 44px",
                  display: "flex",
                  flexDirection: "column",
                  borderTop: "2px solid rgba(196,152,74,0.35)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 88,
                    fontWeight: 300,
                    lineHeight: 0.75,
                    color: "var(--gold)",
                    marginBottom: 24,
                    display: "block",
                    flexShrink: 0,
                    opacity: 0.7,
                  }}
                >
                  &ldquo;
                </span>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 19,
                    lineHeight: 1.75,
                    color: "var(--charcoal)",
                    fontStyle: "italic",
                    flexGrow: 1,
                    marginBottom: 36,
                  }}
                >
                  {t.text}
                </p>
                <div>
                  <span
                    style={{
                      display: "block",
                      width: 28,
                      height: 1.5,
                      background: "var(--gold)",
                      marginBottom: 12,
                      opacity: 0.6,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--plum)",
                      letterSpacing: "0.02em",
                      display: "block",
                    }}
                  >
                    {t.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: "var(--charcoal)",
                      opacity: 0.4,
                      display: "block",
                      marginTop: 3,
                    }}
                  >
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--plum)",
          padding: "136px 40px",
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
            background: "radial-gradient(ellipse at 60% 50%, rgba(181,90,58,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 32,
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
                color: "rgba(196,152,74,0.7)",
              }}
            >
              Ready to begin
            </span>
            <div style={{ width: 28, height: 1, background: "rgba(196,152,74,0.5)" }} />
          </div>

          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(44px, 6vw, 74px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--ivory)",
              letterSpacing: "-0.015em",
              marginBottom: 24,
            }}
          >
            You don&apos;t need to have everything
            <br />figured out <em style={{ fontStyle: "italic", color: "rgba(250,245,239,0.75)" }}>to begin.</em>
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 21,
              lineHeight: 1.75,
              color: "var(--ivory)",
              opacity: 0.7,
              maxWidth: 540,
              margin: "0 auto 52px",
            }}
          >
            Whether you&apos;re just starting to pay attention to your cycle or
            you&apos;ve been searching for real answers for years — there&apos;s a
            clear place to start.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24 }}>
            <Link
              href="/start-here"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "16px 44px",
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
                fontSize: 14,
                fontWeight: 500,
                color: "var(--ivory)",
                borderBottom: "1px solid rgba(250,245,239,0.4)",
                paddingBottom: 2,
                opacity: 0.8,
              }}
            >
              About Nicole &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
