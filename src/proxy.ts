import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

/**
 * Clerk proxy (the Next.js 16 successor to `middleware.ts`).
 *
 * Runs on every request and is responsible for two things:
 *   1. Attaching Clerk's auth context to the request so server components and
 *      route handlers can call `auth()` / `currentUser()`.
 *   2. Gating the admin surface — any route under `/admin/**` and the admin
 *      agent API redirect unauthenticated users to the sign-in flow.
 *
 * Public marketing pages and article routes are NOT protected here —
 * they remain fully public.
 */

// Protected routes — anything under /admin and the admin agent API.
const isAdminRoute = createRouteMatcher([
  "/admin(.*)",
  "/api/admin-agent(.*)",
])

// Exclude the sign-in flow itself so unauthenticated users can actually
// reach it. Without this, /admin/sign-in is gated, causing a redirect loop.
const isAdminAuthRoute = createRouteMatcher([
  "/admin/sign-in(.*)",
])

export default clerkMiddleware(async (auth, req) => {
  if (isAdminRoute(req) && !isAdminAuthRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next internals + static assets, but run on every other path so
    // Clerk can populate the auth context.
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for Clerk's auto-proxy path
    "/__clerk/(.*)",
    "/(api|trpc)(.*)",
  ],
}
