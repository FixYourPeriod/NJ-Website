import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "Find the right starting point for your journey — whether you're learning about hormonal health, seeking personalized support, or pursuing professional training.",
}

const phases = [
  {
    num: "Phase 1",
    name: "Learn",
    sub: "Building foundational knowledge",
    intro:
      "This is where most women begin — whether dealing with symptoms for the first time, seeking answers after years of confusion, or simply wanting to understand how cycles and hormones actually work.",
    items: [
      {
        title: "The Book: Fix Your Period",
        body: "An evidence-informed protocol covering hormone function, common menstrual conditions, and natural approaches for lasting hormonal health. It serves as both an introductory guide and ongoing reference.",
      },
      {
        title: "The Blog",
        body: "Hundreds of articles covering menstrual and hormonal health topics — from decoding common period problems to navigating birth control decisions and advocating for care.",
      },
      {
        title: "The Podcast: The Period Party",
        body: "A top-rated podcast breaking down complex hormonal health topics, featuring expert interviews and answering real questions from women navigating their cycles.",
      },
    ],
    cta: "Explore Resources →",
    ctaHref: "/resources",
    external: false,
  },
  {
    num: "Phase 2",
    name: "Heal",
    sub: "Addressing root causes with personalized support",
    intro:
      "Once the foundation is built, many women are ready for structured, personalized guidance to address their specific symptoms and conditions.",
    items: [
      {
        title: "The Fix Your Period App",
        body: "For women experiencing period problems — painful cramps, heavy bleeding, irregular cycles, PMS, PCOS, missing periods, or other hormonal symptoms — the Fix Your Period app delivers a personalized, science-based protocol in just five minutes. Start with the free Hormone Health Assessment — 30 questions about your cycle, symptoms, and lifestyle.",
      },
    ],
    bullets: [
      "Cycle regularity, length, and period characteristics",
      "Cramping, pelvic pain, and mood patterns",
      "Energy, sleep, skin, and hair health",
      "Stress, lifestyle, and birth control effects",
    ],
    bulletNote:
      "You'll receive targeted recommendations — supplements, nutrition, and lifestyle adjustments — designed to address root causes, not just mask symptoms.",
    cta: "Take the Free Assessment →",
    ctaHref: "https://fixyourperiod.app/quiz",
    external: true,
    ctaStyle: "terra",
  },
  {
    num: "Phase 3",
    name: "Lead",
    sub: "Becoming an expert in menstrual health",
    intro:
      "The advanced phase is for those called to support others — whether expanding an existing practice, transitioning into hormonal health work, or building a business centered on menstrual education.",
    items: [
      {
        title: "The Institute for Menstrual Health",
        body: "For health practitioners, coaches, nutritionists, physical therapists, healthcare providers and those building businesses in the menstrual health space, the Institute offers comprehensive, evidence-based professional training.",
      },
    ],
    bullets: [
      "Understand menstrual cycle physiology and hormone function in depth",
      "Identify and address root causes of common conditions",
      "Support clients with PCOS, endometriosis, perimenopause, and more",
      "Build or expand a menstrual health practice",
    ],
    cta: "Visit the Institute for Menstrual Health →",
    ctaHref: "https://instituteformenstrualhealth.com/",
    external: true,
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

export default function StartHerePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ivory)",
          padding: "100px 40px 80px",
          borderBottom: "1px solid rgba(92,45,79,0.07)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 20 }}>
            Where to Begin
          </span>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 300,
              lineHeight: 1.08,
              color: "var(--plum)",
              marginBottom: 28,
            }}
          >
            How Nicole&apos;s Work Can Support You
          </h1>
          {[
            "Many women arrive here after years of being dismissed, told their symptoms are “normal,” or handed prescriptions without explanation. Others come seeking answers to questions their doctors didn’t take the time to address. Some are simply curious about how their bodies actually work.",
            "Nicole's work is built on a foundational principle: the menstrual cycle is a vital sign, not an inconvenience. Your symptoms aren't random occurrences to accept or suppress. They're signals worth understanding.",
          ].map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                opacity: 0.75,
                maxWidth: 640,
                margin: "0 auto 16px",
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ── PHASE CARDS ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--ivory)", padding: "72px 40px 96px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 300,
                color: "var(--plum)",
                marginBottom: 16,
              }}
            >
              Where Are You in Your Journey?
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--charcoal)",
                opacity: 0.65,
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              Whether your goal is to address personal period problems, deepen knowledge for professional practice, or build expertise in menstrual health education — you&apos;re in the right place.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {phases.map((phase) => (
              <div
                key={phase.num}
                style={{
                  background: "var(--sand)",
                  borderRadius: 6,
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "280px 1fr",
                  borderLeft: "3px solid var(--gold)",
                }}
              >
                <div
                  style={{
                    background: "var(--plum)",
                    padding: "52px 44px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: 12,
                    }}
                  >
                    {phase.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: 36,
                      fontWeight: 300,
                      color: "var(--ivory)",
                      marginBottom: 8,
                    }}
                  >
                    {phase.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: "var(--ivory)",
                      opacity: 0.6,
                      lineHeight: 1.5,
                    }}
                  >
                    {phase.sub}
                  </p>
                </div>

                <div style={{ padding: "48px 52px" }}>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 16,
                      lineHeight: 1.75,
                      color: "var(--charcoal)",
                      opacity: 0.8,
                      marginBottom: 28,
                    }}
                  >
                    {phase.intro}
                  </p>

                  {phase.items.map((item) => (
                    <div key={item.title} style={{ marginBottom: 20 }}>
                      <h4
                        style={{
                          fontFamily: "'Fraunces', Georgia, serif",
                          fontSize: 18,
                          fontWeight: 600,
                          color: "var(--plum)",
                          marginBottom: 8,
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 15,
                          lineHeight: 1.7,
                          color: "var(--charcoal)",
                          opacity: 0.8,
                        }}
                      >
                        {item.body}
                      </p>
                    </div>
                  ))}

                  {"bullets" in phase && phase.bullets && (
                    <ul
                      style={{
                        margin: "16px 0",
                        paddingLeft: 0,
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      {phase.bullets.map((b) => (
                        <li
                          key={b}
                          style={{
                            display: "flex",
                            gap: 12,
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 15,
                            lineHeight: 1.6,
                            color: "var(--charcoal)",
                            opacity: 0.8,
                          }}
                        >
                          <span style={{ color: "var(--terra)", flexShrink: 0 }}>→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {"bulletNote" in phase && phase.bulletNote && (
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "var(--charcoal)",
                        opacity: 0.8,
                        marginBottom: 24,
                        marginTop: 12,
                      }}
                    >
                      {phase.bulletNote}
                    </p>
                  )}

                  <div style={{ marginTop: 24 }}>
                    {phase.external ? (
                      <a
                        href={phase.ctaHref}
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
                          background: "ctaStyle" in phase && phase.ctaStyle === "terra" ? "var(--terra)" : "transparent",
                          color: "ctaStyle" in phase && phase.ctaStyle === "terra" ? "var(--ivory)" : "var(--plum)",
                          border: "ctaStyle" in phase && phase.ctaStyle === "terra" ? "none" : "1.5px solid rgba(92,45,79,0.3)",
                          borderRadius: 40,
                          textDecoration: "none",
                        }}
                      >
                        {phase.cta}
                      </a>
                    ) : (
                      <Link
                        href={phase.ctaHref}
                        style={{
                          display: "inline-block",
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
                        {phase.cta}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DON'T NEED IT ALL FIGURED OUT ────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 300,
              color: "var(--plum)",
              marginBottom: 24,
            }}
          >
            You Don&apos;t Need to Have It All Figured Out
          </h2>
          {[
            "Most women don't move through these phases in a straight line. Some will begin with the Fix Your Period App and then dive into educational resources. Practitioners often start with personal healing before pursuing professional training.",
            "You don't need to map out your whole journey. Start where you are. Clarity comes as you go.",
          ].map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 18,
                lineHeight: 1.8,
                color: "var(--charcoal)",
                opacity: 0.8,
                maxWidth: 620,
                margin: "0 auto 24px",
              }}
            >
              {p}
            </p>
          ))}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
            <Link
              href="/resources"
              style={{
                display: "inline-block",
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
              Learn
            </Link>
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
                background: "var(--plum)",
                color: "var(--ivory)",
                borderRadius: 40,
                textDecoration: "none",
              }}
            >
              Heal
            </a>
            <Link
              href="/imh"
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
              Lead
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUSTED ──────────────────────────────────────────────────── */}
      <section style={{ background: "var(--plum)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--ivory)",
              marginBottom: 24,
            }}
          >
            Trusted by Tens of Thousands Worldwide
          </h2>
          {[
            "Nicole's work has supported women across the globe in understanding their cycles, addressing period problems, and approaching their health with clarity and confidence.",
            "Health professionals trained through the Institute are now supporting clients in their own practices, building specialized menstrual health businesses, and integrating this work into diverse care settings.",
          ].map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.8,
                color: "var(--ivory)",
                opacity: 0.7,
                maxWidth: 620,
                margin: "0 auto 20px",
              }}
            >
              {p}
            </p>
          ))}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 22,
              fontStyle: "italic",
              color: "var(--gold)",
              marginTop: 12,
            }}
          >
            Let&apos;s begin.
          </p>
        </div>
      </section>
    </>
  )
}
