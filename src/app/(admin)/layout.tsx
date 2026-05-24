import { ClerkProvider, UserButton } from "@clerk/nextjs"
import Link from "next/link"

export const metadata = {
  robots: { index: false, follow: false, nocache: true },
  title: "NJ Admin",
}

/**
 * Admin shell layout.
 *
 * Wraps every /admin/** route with a minimal header (NJ wordmark + UserButton)
 * and an ivory workspace background. ClerkProvider lives here — intentionally
 * NOT in the root layout — so public pages never depend on Clerk keys.
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <div className="min-h-screen bg-[#FAF5EF] flex flex-col">
        <header className="border-b border-[rgba(92,45,79,0.1)] bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            <Link
              href="/admin"
              className="flex items-center gap-2 text-[#2C2520] font-semibold tracking-tight"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span
                className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#5C2D4F] text-white text-xs font-bold"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: "italic" }}
              >
                NJ
              </span>
              <span>Admin</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-xs text-[rgba(44,37,32,0.5)] hover:text-[#5C2D4F] transition-colors uppercase tracking-widest"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                ← Public site
              </Link>
              <UserButton />
            </div>
          </div>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
      </div>
    </ClerkProvider>
  )
}
