"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinksLeft = [
  { label: "Fix Your Period", href: "/fix-your-period" },
  { label: "Professional Training", href: "/imh" },
  // Resources dropdown comes next — handled inline below
]

const navLinksRight = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

// Combined for mobile
const navLinks = [
  { label: "Fix Your Period", href: "/fix-your-period" },
  { label: "Professional Training", href: "/imh" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const resourcesLinks = [
  { label: "The Book", href: "/book" },
  { label: "Articles", href: "/articles" },
]

export function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  const isResourcesActive = resourcesLinks.some((l) => isActive(l.href))

  return (
    <header
      className="sticky top-0 z-[100] border-b"
      style={{
        background: "var(--ivory)",
        borderColor: "rgba(92,45,79,0.1)",
        padding: "0 40px",
      }}
    >
      <div
        className="flex items-center justify-between mx-auto"
        style={{ maxWidth: 1160, height: 72 }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold whitespace-nowrap"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 22,
            color: "var(--plum)",
            letterSpacing: "0.01em",
          }}
        >
          Nicole Jardim
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinksLeft.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-150"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13.5,
                fontWeight: isActive(link.href) ? 600 : 500,
                color: isActive(link.href) ? "var(--plum)" : "var(--charcoal)",
                letterSpacing: "0.02em",
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Resources dropdown */}
          <div
            style={{ position: "relative", display: "flex", alignItems: "center" }}
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13.5,
                fontWeight: isResourcesActive ? 600 : 500,
                color: isResourcesActive ? "var(--plum)" : "var(--charcoal)",
                letterSpacing: "0.02em",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
            >
              Resources
              <span style={{ fontSize: 10, opacity: 0.55 }}>▾</span>
            </button>

            {/* Invisible bridge fills the gap between button and menu so
                onMouseLeave doesn't fire when moving the cursor downward */}
            {resourcesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  height: 20,
                }}
              />
            )}

            {/* Dropdown menu — pure inline styles, no Tailwind position classes */}
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 16px)",
                left: "50%",
                transform: `translateX(-50%) translateY(${resourcesOpen ? "0" : "-6px"})`,
                background: "var(--ivory)",
                border: "1px solid rgba(92,45,79,0.12)",
                borderRadius: 6,
                boxShadow: "0 8px 28px rgba(44,37,32,0.13)",
                minWidth: 160,
                padding: "8px 0",
                opacity: resourcesOpen ? 1 : 0,
                visibility: resourcesOpen ? "visible" : "hidden",
                transition: "opacity 0.18s ease, visibility 0.18s ease, transform 0.18s ease",
                pointerEvents: resourcesOpen ? "auto" : "none",
                zIndex: 200,
              }}
            >
              {resourcesLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    display: "block",
                    fontFamily: "'DM Sans', sans-serif",
                    padding: "10px 20px",
                    fontSize: 13.5,
                    fontWeight: isActive(l.href) ? 600 : 500,
                    color: isActive(l.href) ? "var(--plum)" : "var(--charcoal)",
                    whiteSpace: "nowrap",
                    transition: "color 0.15s, background 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--plum)"
                    e.currentTarget.style.background = "rgba(92,45,79,0.04)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive(l.href) ? "var(--plum)" : "var(--charcoal)"
                    e.currentTarget.style.background = "transparent"
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinksRight.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-150"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13.5,
                fontWeight: isActive(link.href) ? 600 : 500,
                color: isActive(link.href) ? "var(--plum)" : "var(--charcoal)",
                letterSpacing: "0.02em",
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/start-here"
            className="whitespace-nowrap transition-colors duration-200"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "10px 22px",
              background: "var(--plum)",
              color: "var(--ivory)",
              borderRadius: 40,
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background =
                "var(--plum-dark)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background =
                "var(--plum)")
            }
          >
            Start Here
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{ background: "var(--charcoal)" }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{ background: "var(--charcoal)" }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{ background: "var(--charcoal)" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t pb-4"
          style={{ borderColor: "rgba(92,45,79,0.08)" }}
        >
          <nav className="flex flex-col pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 transition-colors duration-150"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: isActive(link.href) ? 600 : 500,
                  color: isActive(link.href) ? "var(--plum)" : "var(--charcoal)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {resourcesLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-3 px-4 pl-8 transition-colors duration-150"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: isActive(l.href) ? "var(--plum)" : "var(--charcoal)",
                  opacity: 0.75,
                }}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/start-here"
              className="mx-4 mt-3 text-center py-3 rounded-full transition-colors duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                background: "var(--plum)",
                color: "var(--ivory)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              Start Here
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
