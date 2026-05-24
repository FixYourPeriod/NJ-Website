"use client"

import { useState } from "react"

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setErrorMsg("")

    const fd = new FormData(e.currentTarget)
    const payload = {
      firstName: fd.get("first_name") as string,
      lastName: fd.get("last_name") as string,
      email: fd.get("email") as string,
      subject: fd.get("subject") as string,
      message: fd.get("message") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStatus("success")
      } else {
        const data = await res.json()
        setErrorMsg(data.error ?? "Something went wrong. Please try again.")
        setStatus("error")
      }
    } catch {
      setErrorMsg("Network error. Please try again.")
      setStatus("error")
    }
  }

  /* ── SUCCESS STATE ─────────────────────────────────────────────── */
  if (status === "success") {
    return (
      <div
        style={{
          background: "var(--ivory)",
          borderRadius: 6,
          padding: "52px 48px",
          border: "1px solid rgba(92,45,79,0.08)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "rgba(92,45,79,0.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 11l5 5 9-9" stroke="var(--plum)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 28,
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--plum)",
            marginBottom: 12,
          }}
        >
          Message received
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            lineHeight: 1.75,
            color: "var(--charcoal)",
            opacity: 0.65,
            maxWidth: 360,
            margin: "0 auto",
          }}
        >
          Thank you for reaching out. We&apos;ll get back to you within 2–3 business days.
        </p>
      </div>
    )
  }

  /* ── FORM ──────────────────────────────────────────────────────── */
  const isSubmitting = status === "submitting"

  return (
    <div
      style={{
        background: "var(--ivory)",
        borderRadius: 6,
        padding: "52px 48px",
        border: "1px solid rgba(92,45,79,0.08)",
      }}
    >
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
          box-sizing: border-box;
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
        .contact-submit-btn:hover:not(:disabled) { opacity: 0.85; }
        .contact-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
      `}</style>

      <form onSubmit={handleSubmit} noValidate>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 20,
          }}
        >
          <FieldWrap label="First Name" required>
            <input
              type="text"
              name="first_name"
              required
              placeholder="Jane"
              className="contact-input"
              disabled={isSubmitting}
            />
          </FieldWrap>
          <FieldWrap label="Last Name">
            <input
              type="text"
              name="last_name"
              placeholder="Smith"
              className="contact-input"
              disabled={isSubmitting}
            />
          </FieldWrap>
        </div>

        <FieldWrap label="Email Address" required style={{ marginBottom: 20 }}>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@example.com"
            className="contact-input"
            disabled={isSubmitting}
          />
        </FieldWrap>

        <FieldWrap label="What is this regarding?" style={{ marginBottom: 20 }}>
          <select name="subject" className="contact-select" disabled={isSubmitting} defaultValue="">
            <option value="" disabled>Select a topic</option>
            <option value="General Question">General Question</option>
            <option value="Fix Your Period App">Fix Your Period App</option>
            <option value="The Book">The Book</option>
            <option value="Professional Training / IMH">Professional Training / IMH</option>
            <option value="Media or Speaking Inquiry">Media or Speaking Inquiry</option>
            <option value="Partnership or Collaboration">Partnership or Collaboration</option>
            <option value="Other">Other</option>
          </select>
        </FieldWrap>

        <FieldWrap label="Message" required style={{ marginBottom: 24 }}>
          <textarea
            name="message"
            required
            placeholder="How can we help?"
            className="contact-textarea"
            disabled={isSubmitting}
          />
        </FieldWrap>

        {/* Error banner */}
        {status === "error" && (
          <div
            style={{
              background: "rgba(181,90,58,0.08)",
              border: "1px solid rgba(181,90,58,0.25)",
              borderRadius: 4,
              padding: "12px 16px",
              marginBottom: 20,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: "var(--terra)",
              lineHeight: 1.5,
            }}
          >
            {errorMsg}
          </div>
        )}

        <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send Message →"}
        </button>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: "var(--charcoal)",
            opacity: 0.4,
            marginTop: 16,
            lineHeight: 1.5,
          }}
        >
          Your information will only be used to respond to your message and will never be shared with third parties.
        </p>
      </form>
    </div>
  )
}

/* ── tiny helper ─────────────────────────────────────────────────── */
function FieldWrap({
  label,
  required,
  style,
  children,
}: {
  label: string
  required?: boolean
  style?: React.CSSProperties
  children: React.ReactNode
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, ...style }}>
      <label
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
        {label}{" "}
        {required && <span style={{ color: "var(--terra)" }}>*</span>}
      </label>
      {children}
    </div>
  )
}
