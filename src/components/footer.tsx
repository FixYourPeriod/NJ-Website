import Link from "next/link"

const footerLinks = {
  "Fix Your Period": [
    { label: "Take the Hormone Health Assessment", href: "https://fixyourperiod.app/quiz", external: true },
    { label: "Fix Your Period (Book)", href: "/book" },
  ],
  "Professional Training": [
    { label: "The Institute for Menstrual Health", href: "/imh" },
  ],
  "Resources": [
    { label: "Articles", href: "/articles" },
    { label: "The Period Party Podcast", href: "#" },
    { label: "About Nicole", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}

const socialLinks = [
  { label: "Instagram", short: "Ig", href: "#" },
  { label: "TikTok", short: "Tk", href: "#" },
  { label: "YouTube", short: "Yt", href: "#" },
  { label: "Podcast", short: "♪", href: "#" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{ background: "var(--charcoal)", padding: "72px 40px 40px" }}
    >
      <style>{`
        .footer-link { opacity: 0.65; transition: opacity 0.15s; }
        .footer-link:hover { opacity: 1; }
        .footer-social { opacity: 0.55; transition: opacity 0.15s; }
        .footer-social:hover { opacity: 1; }
        .footer-legal-link { opacity: 0.3; transition: opacity 0.15s; }
        .footer-legal-link:hover { opacity: 0.65; }
      `}</style>

      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Top row: brand + columns */}
        <div
          className="flex flex-col md:flex-row gap-12 md:gap-16"
          style={{ borderBottom: "1px solid rgba(250,245,239,0.08)", paddingBottom: 64, marginBottom: 40 }}
        >
          {/* Brand */}
          <div style={{ minWidth: 220 }}>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 24,
                fontWeight: 600,
                color: "var(--ivory)",
                marginBottom: 12,
              }}
            >
              Nicole Jardim
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontSize: 15,
                lineHeight: 1.65,
                color: "var(--ivory)",
                opacity: 0.5,
                marginBottom: 24,
              }}
            >
              Your cycle is a vital sign.<br />Let&apos;s learn to read it.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  className="footer-social flex items-center justify-center rounded-full"
                  style={{
                    width: 34,
                    height: 34,
                    border: "1px solid rgba(250,245,239,0.15)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--ivory)",
                    textDecoration: "none",
                  }}
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-12 flex-1">
            {Object.entries(footerLinks).map(([colTitle, links]) => (
              <div key={colTitle} style={{ minWidth: 160 }}>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--ivory)",
                    opacity: 0.35,
                    marginBottom: 20,
                  }}
                >
                  {colTitle}
                </div>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer-link"
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 14.5,
                            fontWeight: 400,
                            color: "var(--ivory)",
                          }}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="footer-link"
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 14.5,
                            fontWeight: 400,
                            color: "var(--ivory)",
                          }}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "var(--ivory)",
              opacity: 0.3,
            }}
          >
            &copy; {year} Nicole Jardim. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Use", href: "/terms" },
              { label: "Disclaimer", href: "/disclaimer" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="footer-legal-link"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "var(--ivory)",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
