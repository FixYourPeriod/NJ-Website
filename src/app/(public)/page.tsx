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

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "50% 50%",
          overflow: "hidden",
        }}
      >
        {/* Left: terra bg + text */}
        <div
          style={{
            background: "var(--terra)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "120px 60px 80px 8vw",
          }}
        >
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(52px, 5.5vw, 84px)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--ivory)",
              letterSpacing: "-0.01em",
              marginBottom: 28,
            }}
          >
            Make Sense<br />
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 700,
                color: "var(--gold)",
                display: "block",
              }}
            >
              of Your Cycle.
            </em>
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.75,
              color: "rgba(250,245,239,0.85)",
              maxWidth: 420,
              marginBottom: 48,
            }}
          >
            Straight talk, evidence-informed education to help you understand
            your hormones, your period, and what your body&apos;s been trying
            to tell you.
          </p>
          <Link
            href="/start-here"
            style={{
              display: "inline-block",
              alignSelf: "flex-start",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "18px 40px",
              background: "var(--ivory)",
              color: "var(--terra)",
              borderRadius: 40,
              transition: "background 0.2s ease, color 0.2s ease",
            }}
          >
            Start Here &rarr;
          </Link>
        </div>

        {/* Right: full-bleed photo */}
        <div style={{ overflow: "hidden" }}>
          <Image
            src="/images/nicole-5.jpg"
            alt="Nicole Jardim"
            width={800}
            height={1000}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
            priority
          />
        </div>
      </section>

      {/* ── AS SEEN IN ──────────────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--charcoal)",
          padding: "22px 40px",
        }}
      >
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
      <section style={{ background: "var(--ivory)", padding: "120px 40px" }}>
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 96,
            alignItems: "center",
          }}
        >
          <div style={{ height: 660, borderRadius: 6, overflow: "hidden" }}>
            <Image
              src="/images/nicole-smoothie-crop.jpg"
              alt="Nicole Jardim"
              width={600}
              height={660}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </div>

          <div>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--terra)",
                display: "block",
                marginBottom: 20,
              }}
            >
              Meet Nicole Jardim
            </span>

            <blockquote
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(32px, 4vw, 44px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--plum)",
                lineHeight: 1.15,
                marginBottom: 28,
              }}
            >
              &ldquo;I&apos;ve been where you are.&rdquo;
            </blockquote>

            {[
              "Nicole Jardim is a women's health educator, writer, and speaker focused on menstrual and hormonal health. Her work centers on helping women understand how their bodies actually function, so they can make informed, empowered decisions about their health.",
              <>She is the author of <em>Fix Your Period</em>, the creator of the Fix Your Period App, and the founder of the Institute for Menstrual Health — a global education platform training practitioners and health professionals in menstrual and hormonal health.</>,
              "Nicole's work has reached tens of thousands of women worldwide and has been featured across major media and cultural platforms. Her approach blends evidence-informed education with body literacy, nuance, and real-life context.",
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: 17,
                  lineHeight: 1.8,
                  color: "var(--charcoal)",
                  opacity: 0.85,
                  marginBottom: 18,
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
                marginTop: 12,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--plum)",
                borderBottom: "1.5px solid rgba(92,45,79,0.3)",
                paddingBottom: 3,
              }}
            >
              Read Nicole&apos;s Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ──────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--plum)",
          padding: "112px 40px",
        }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(40px, 5vw, 62px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--ivory)",
              textAlign: "center",
              marginBottom: 24,
              letterSpacing: "-0.01em",
            }}
          >
            A Different Way of Thinking<br />About Menstrual Health
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: 18,
              lineHeight: 1.75,
              color: "var(--ivory)",
              opacity: 0.7,
              maxWidth: 640,
              margin: "0 auto 64px",
            }}
          >
            Menstrual and hormonal symptoms aren&apos;t random, and they&apos;re not
            something you&apos;re meant to &ldquo;just live with.&rdquo;
          </p>

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
                  background: "rgba(255,255,255,0.06)",
                  padding: "48px 52px",
                  borderTop: "3px solid var(--gold)",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 2,
                    background: "var(--gold)",
                    marginBottom: 20,
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: 24,
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
              fontSize: 17,
              lineHeight: 1.75,
              color: "var(--ivory)",
              opacity: 0.65,
              maxWidth: 600,
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
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(36px, 4vw, 54px)",
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
                fontSize: 17,
                color: "var(--charcoal)",
                opacity: 0.6,
              }}
            >
              Whether you&apos;re just beginning to ask questions or looking for deeper support, there&apos;s a clear place to start.
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
              const linkColor = isLight ? "var(--terra)" : "rgba(250,245,239,0.65)"

              const content = (
                <div
                  style={{
                    borderRadius: 4,
                    padding: "44px 36px 40px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    background: bg,
                    border: isLight
                      ? "1.5px solid rgba(196,152,74,0.3)"
                      : undefined,
                    borderTop: isLight
                      ? "4px solid var(--gold)"
                      : "4px solid rgba(250,245,239,0.35)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: isLight ? "var(--gold)" : textColor,
                      opacity: isLight ? 1 : 0.6,
                      marginBottom: 18,
                    }}
                  >
                    {p.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "clamp(22px, 2vw, 28px)",
                      fontWeight: 600,
                      color: textColor,
                      marginBottom: 16,
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: bodyColor,
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
                      letterSpacing: "0.02em",
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
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(250,245,239,0.6)",
              display: "block",
              marginBottom: 20,
            }}
          >
            Reach &amp; Impact
          </span>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(36px, 4.5vw, 58px)",
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
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 18,
              lineHeight: 1.8,
              color: "var(--ivory)",
              opacity: 0.8,
            }}
          >
            Nicole&apos;s work has supported women across the globe in understanding their cycles, advocating for themselves, and approaching their health with more clarity and confidence.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "112px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--terra)",
                display: "block",
                marginBottom: 14,
              }}
            >
              Women&apos;s voices
            </span>
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
              gap: 24,
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
                  }}
                >
                  &ldquo;
                </span>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: "var(--charcoal)",
                    opacity: 0.85,
                    fontStyle: "italic",
                    flexGrow: 1,
                    marginBottom: 32,
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
                      marginBottom: 10,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
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
                      fontSize: 13,
                      color: "var(--charcoal)",
                      opacity: 0.45,
                      display: "block",
                      marginTop: 2,
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
          background: "linear-gradient(135deg, var(--plum) 0%, var(--terra) 100%)",
          padding: "136px 40px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(44px, 6vw, 76px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--ivory)",
              letterSpacing: "-0.015em",
              marginBottom: 24,
            }}
          >
            You don&apos;t need to have everything
            <br />figured out <em>to begin.</em>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 18,
              lineHeight: 1.75,
              color: "var(--ivory)",
              opacity: 0.75,
              maxWidth: 560,
              margin: "0 auto 52px",
            }}
          >
            Whether you&apos;re just starting to pay attention to your cycle or
            you&apos;ve been searching for real answers for years — there&apos;s a
            clear place to start.
          </p>
          <Link
            href="/start-here"
            style={{
              display: "inline-block",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              padding: "17px 44px",
              background: "transparent",
              color: "var(--ivory)",
              border: "1.5px solid rgba(250,245,239,0.55)",
              borderRadius: 40,
              transition: "background 0.2s ease, border-color 0.2s ease, color 0.2s ease",
            }}
          >
            Start Here &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
