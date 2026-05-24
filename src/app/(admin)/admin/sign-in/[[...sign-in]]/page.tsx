import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FAF5EF",
        flexDirection: "column",
        gap: 32,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#B55A3A",
            marginBottom: 10,
          }}
        >
          Nicole Jardim
        </p>
        <h1
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 28,
            fontWeight: 300,
            fontStyle: "italic",
            color: "#5C2D4F",
            lineHeight: 1.1,
          }}
        >
          Admin
        </h1>
      </div>
      <SignIn />
    </div>
  )
}
