import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions about Nicole's work, media inquiries, or just want to reach the team? Use the form below and we'll get back to you within 2–3 business days.",
}

const contactDetails = [
  {
    label: "Email",
    value: "support@nicolejardim.com",
    href: "mailto:support@nicolejardim.com",
  },
  {
    label: "Fix Your Period App",
    value: "fixyourperiod.app",
    href: "https://fixyourperiod.app",
  },
  {
    label: "Professional Training",
    value: "instituteformenstrualhealth.com",
    href: "https://instituteformenstrualhealth.com",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ivory)",
          padding: "104px 40px 88px",
          borderBottom: "1px solid rgba(92,45,79,0.07)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
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
            <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.7 }} />
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
              Get in Touch
            </span>
            <div style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.7 }} />
          </div>

          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(44px, 6vw, 70px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.05,
              color: "var(--plum)",
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}
          >
            Contact
          </h1>

          <div
            style={{
              width: 40,
              height: 1.5,
              background: "var(--gold)",
              margin: "0 auto 28px",
              opacity: 0.6,
            }}
          />

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 21,
              lineHeight: 1.75,
              color: "var(--charcoal)",
              opacity: 0.8,
            }}
          >
            Questions about Nicole&apos;s work, media inquiries, or just want to
            reach the team? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ──────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "96px 40px 112px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 96,
            alignItems: "start",
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {/* Left — info */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div
                style={{ width: 20, height: 1, background: "var(--gold)", opacity: 0.6 }}
              />
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
                How can we help
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--plum)",
                lineHeight: 1.15,
                marginBottom: 20,
                letterSpacing: "-0.01em",
              }}
            >
              We&apos;re happy to help with whatever you need
            </h2>

            <div
              style={{
                width: 32,
                height: 1.5,
                background: "var(--gold)",
                marginBottom: 24,
                opacity: 0.5,
              }}
            />

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15.5,
                lineHeight: 1.8,
                color: "var(--charcoal)",
                opacity: 0.7,
                marginBottom: 12,
              }}
            >
              Whether you have a question about Nicole&apos;s book, programs, or
              content — or you&apos;re reaching out about a media or speaking
              opportunity — we&apos;d love to hear from you.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15.5,
                lineHeight: 1.8,
                color: "var(--charcoal)",
                opacity: 0.7,
                marginBottom: 40,
              }}
            >
              We do our best to respond to all messages within 2–3 business days.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {contactDetails.map((item) => (
                <div key={item.label}>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--terra)",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 15,
                      color: "var(--plum)",
                      opacity: 0.75,
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(92,45,79,0.2)",
                      paddingBottom: 1,
                    }}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </section>
    </>
  )
}
