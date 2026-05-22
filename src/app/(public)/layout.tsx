import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

/**
 * Public-site layout — wraps every marketing/content page with the standard
 * site chrome (Nav, Footer).
 *
 * The (public) folder is a Next.js route group: its name in parentheses is
 * stripped from the URL, so `(public)/page.tsx` serves `/`.  The grouping
 * keeps /admin out from under the marketing chrome.
 */
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
