import { currentUser } from "@clerk/nextjs/server"
import { AdminChat } from "@/components/admin/admin-chat"

export const metadata = {
  title: "Admin — Nicole Jardim",
  robots: { index: false, follow: false },
}

export default async function AdminPage() {
  const user = await currentUser()
  const firstName = user?.firstName ?? null
  const fullName =
    user?.fullName ??
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
    null
  const email = user?.primaryEmailAddress?.emailAddress ?? null

  return (
    <div className="flex-1 flex flex-col">
      <AdminChat
        userId={user?.id ?? ""}
        firstName={firstName}
        fullName={fullName}
        email={email}
      />
    </div>
  )
}
