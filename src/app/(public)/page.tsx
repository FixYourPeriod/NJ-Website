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
          background: "var(--ivory)",
          minHeight: 580,
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "80px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 48,
          }}
        >
          {/* Left: text */}
          <div style={{ maxWidth: 560, zIndex: 1 }}>
            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(52px, 7vw, 88px)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: "var(--plum)",
                marginBottom: 28,
              }}
            >
              Make Sense<br />
              <em style={{ fontStyle: "italic" }}>of Your Cycle.</em>
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--charcoal)",
                opacity: 0.75,
                marginBottom: 40,
                maxWidth: 480,
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
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "16px 38px",
                background: "var(--plum)",
                color: "var(--ivory)",
                borderRadius: 40,
                transition: "background 0.2s",
              }}
            >
              Start Here &rarr;
            </Link>
          </div>

          {/* Right: photo */}
          <div
            className="hidden md:block"
            style={{
              position: "relative",
              width: 420,
              height: 540,
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/nicole-5.jpg"
              alt="Nicole Jardim"
              fill
              sizes="420px"
              className="object-cover rounded-sm"
              style={{ objectPosition: "center top" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── AS SEEN IN ──────────────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--sand)",
          borderTop: "1px solid rgba(92,45,79,0.07)",
          borderBottom: "1px solid rgba(92,45,79,0.07)",
          padding: "20px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 32,
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
              color: "var(--terra)",
              whiteSpace: "nowrap",
            }}
          >
            As seen in
          </span>
          <div style={{ display: "flex", gap: 36, alignItems: "center", flexWrap: "wrap" }}>
            {mediaLogos.map((logo) => (
              <span
                key={logo}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--charcoal)",
                  opacity: 0.45,
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
      <section style={{ background: "var(--ivory)", padding: "112px 40px" }}>
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative", height: 560 }}>
            <Image
              src="/images/nicole-smoothie-crop.jpg"
              alt="Nicole Jardim"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-sm"
              style={{ objectPosition: "center top" }}
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
              "She is the author of Fix Your Period, the creator of the Fix Your Period App, and the founder of the Institute for Menstrual Health — a global education platform training practitioners and health professionals in menstrual and hormonal health.",
              "Nicole's work has reached tens of thousands of women worldwide and has been featured across major media and cultural platforms. Her approach blends evidence-informed education with body literacy, nuance, and real-life context.",
            ].map((para, i) => (
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
                {para}
              </p>
            ))}

            <Link
              href="/about"
              style={{
                display: "inline-block",
                marginTop: 8,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13.5,
                fontWeight: 600,
                color: "var(--terra)",
                letterSpacing: "0.02em",
                borderBottom: "1.5px solid var(--terra)",
                paddingBottom: 2,
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
          padding: "96px 40px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--ivory)",
              marginBottom: 24,
            }}
          >
            A Different Way of Thinking<br />About Menstrual Health
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 20,
              lineHeight: 1.6,
              color: "var(--ivory)",
              opacity: 0.65,
              marginBottom: 56,
            }}
          >
            Menstrual and hormonal symptoms aren&apos;t random, and they&apos;re not
            something you&apos;re meant to &ldquo;just live with.&rdquo;
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
              marginBottom: 56,
            }}
          >
            {beliefs.map((belief) => (
              <div
                key={belief}
                style={{
                  background: "rgba(250,245,239,0.07)",
                  border: "1px solid rgba(250,245,239,0.12)",
                  borderRadius: 8,
                  padding: "32px 36px",
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
                    fontSize: 22,
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
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--ivory)",
              opacity: 0.55,
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
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(32px, 4vw, 50px)",
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
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: 26,
                      fontWeight: 400,
                      color: textColor,
                      marginBottom: 12,
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
      <section style={{ background: "var(--sand)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--terra)",
                display: "block",
                marginBottom: 16,
              }}
            >
              Women&apos;s voices
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 400,
                lineHeight: 1.15,
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
                  background: "var(--ivory)",
                  borderRadius: 8,
                  padding: "40px 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 48,
                    lineHeight: 1,
                    color: "var(--rose)",
                    opacity: 0.5,
                  }}
                >
                  &ldquo;
                </span>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: 18,
                    lineHeight: 1.6,
                    color: "var(--charcoal)",
                    flexGrow: 1,
                  }}
                >
                  {t.text}
                </p>
                <div>
                  <div
                    style={{
                      width: 28,
                      height: 1.5,
                      background: "var(--gold)",
                      marginBottom: 10,
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--charcoal)",
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
                      marginTop: 2,
                    }}
                  >
                    {t.location}
                  </div>
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
          padding: "96px 40px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(32px, 4vw, 50px)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--ivory)",
              marginBottom: 20,
            }}
          >
            You don&apos;t need to have everything
            <br />figured out <em>to begin.</em>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--ivory)",
              opacity: 0.65,
              marginBottom: 40,
              maxWidth: 540,
              margin: "0 auto 40px",
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
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "16px 40px",
              background: "var(--ivory)",
              color: "var(--plum)",
              borderRadius: 40,
              transition: "opacity 0.2s",
            }}
          >
            Start Here &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
