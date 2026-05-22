import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"

/**
 * Root layout — kept intentionally minimal.
 *
 * Wraps the entire app in <ClerkProvider> so any route (public or admin) can
 * read the current auth session. The public-site chrome (Nav, Footer) lives
 * in the (public) route group layout so /admin doesn't inherit it.
 */

export const metadata: Metadata = {
  title: {
    default: "Nicole Jardim — Women's Hormonal Health",
    template: "%s | Nicole Jardim",
  },
  description:
    "Straight talk, evidence-informed education to help you understand your hormones, your period, and what your body's been trying to tell you.",
  metadataBase: new URL("https://nicolejardim.com"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">{children}</body>
      </html>
    </ClerkProvider>
  )
}
