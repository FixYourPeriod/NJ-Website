import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions about Nicole's work, media inquiries, or just want to reach the team? Use the form below and we'll get back to you.",
}

const S = {
  label: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
  },
}

export default function ContactPage() {
  return (
    <>
      <style>{`
        .contact-input,
        .contact-select,
        .contact-textarea {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: var(--charcoal);
          background: var(--sand);
          border: 1.5px solid transparent;
          border-radius: 4px;
          padding: 13px 16px;
          transition: border-color 0.15s, background 0.15s;
          outline: none;
          width: 100%;
        }
        .contact-input:focus,
        .contact-select:focus,
        .contact-textarea:focus {
          border-color: var(--plum);
          background: var(--ivory);
        }
        .contact-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235C2D4F' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          background-color: var(--sand);
          padding-right: 36px;
          cursor: pointer;
        }
        .contact-textarea {
          resize: vertical;
          min-height: 140px;
          line-height: 1.6;
        }
        .contact-submit-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 14px 32px;
          background: var(--plum);
          color: var(--ivory);
          border: none;
          border-radius: 40px;
          cursor: pointer;
          width: 100%;
          transition: opacity 0.15s;
        }
        .contact-submit-btn:hover { opacity: 0.85; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ivory)",
          padding: "100px 40px 80px",
          borderBottom: "1px solid rgba(92,45,79,0.07)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <span style={{ ...S.label, color: "var(--terra)", display: "block", marginBottom: 20 }}>
            Get in Touch
          </span>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 300,
              lineHeight: 1.08,
              color: "var(--plum)",
              marginBottom: 20,
            }}
          >
            Contact
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--charcoal)",
              opacity: 0.7,
            }}
          >
            Questions about Nicole&apos;s work, media inquiries, or just want to reach the team? Use the form below and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ──────────────────────────────────────────── */}
      <section style={{ background: "var(--sand)", padding: "96px 40px" }}>
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
          {/* Left: contact info */}
          <div>
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
              How can we help?
            </h2>
            {[
              "Whether you have a question about Nicole's book, programs, or content — or you're reaching out about a media or speaking opportunity — we'd love to hear from you.",
              "We do our best to respond to all messages within 2–3 business days.",
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: "var(--charcoal)",
                  opacity: 0.75,
                  marginBottom: 16,
                }}
              >
                {p}
              </p>
            ))}
            <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Email", value: "support@nicolejardim.com" },
                {
                  label: "For the Fix Your Period App",
                  value: "Visit fixyourperiod.app",
                  href: "https://fixyourperiod.app",
                },
                {
                  label: "For Professional Training",
                  value: "Visit instituteformenstrualhealth.com",
                  href: "https://instituteformenstrualhealth.com",
                },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <span style={{ ...S.label, color: "var(--terra)" }}>{item.label}</span>
                  {"href" in item ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 15,
                        color: "var(--plum)",
                        opacity: 0.8,
                        textDecoration: "underline",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 15,
                        color: "var(--charcoal)",
                        opacity: 0.8,
                      }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div
            style={{
              background: "var(--ivory)",
              borderRadius: 6,
              padding: "52px 48px",
              border: "1px solid rgba(92,45,79,0.08)",
            }}
          >
            {/* Replace YOUR_FORM_ID with actual Formspree form ID */}
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label
                    htmlFor="first-name"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--charcoal)",
                      opacity: 0.7,
                    }}
                  >
                    First Name <span style={{ color: "var(--terra)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first_name"
                    required
                    placeholder="Jane"
                    className="contact-input"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label
                    htmlFor="last-name"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--charcoal)",
                      opacity: 0.7,
                    }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last_name"
                    placeholder="Smith"
                    className="contact-input"
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                <label
                  htmlFor="email"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--charcoal)",
                    opacity: 0.7,
                  }}
                >
                  Email Address <span style={{ color: "var(--terra)" }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  className="contact-input"
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                <label
                  htmlFor="subject"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--charcoal)",
                    opacity: 0.7,
                  }}
                >
                  What is this regarding?
                </label>
                <select id="subject" name="subject" className="contact-select">
                  <option value="" disabled>Select a topic</option>
                  <option value="General Question">General Question</option>
                  <option value="Fix Your Period App">Fix Your Period App</option>
                  <option value="The Book">The Book</option>
                  <option value="Professional Training / IMH">Professional Training / IMH</option>
                  <option value="Media or Speaking Inquiry">Media or Speaking Inquiry</option>
                  <option value="Partnership or Collaboration">Partnership or Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                <label
                  htmlFor="message"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--charcoal)",
                    opacity: 0.7,
                  }}
                >
                  Message <span style={{ color: "var(--terra)" }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="How can we help?"
                  className="contact-textarea"
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message →
              </button>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "var(--charcoal)",
                  opacity: 0.45,
                  marginTop: 16,
                  lineHeight: 1.5,
                }}
              >
                Your information will only be used to respond to your message and will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
