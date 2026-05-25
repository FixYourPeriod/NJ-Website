import { Resend } from "resend"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()
    const { firstName, lastName, email, subject, message } = body

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: "Nicole Jardim Website <noreply@nicolejardim.com>",
      to: "support@nicolejardim.com",
      replyTo: email,
      subject: subject
        ? `[Contact Form] ${subject} — from ${firstName} ${lastName ?? ""}`.trim()
        : `[Contact Form] Message from ${firstName} ${lastName ?? ""}`.trim(),
      text: `Name: ${firstName} ${lastName ?? ""}\nEmail: ${email}\nSubject: ${subject ?? "—"}\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2C2520;">
          <h2 style="color: #5C2D4F; margin-bottom: 24px;">New contact form submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; width: 120px; vertical-align: top; color: #5C2D4F;">Name</td>
              <td style="padding: 8px 0;">${firstName} ${lastName ?? ""}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; vertical-align: top; color: #5C2D4F;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #B55A3A;">${email}</a></td>
            </tr>
            ${subject ? `<tr><td style="padding: 8px 0; font-weight: 600; vertical-align: top; color: #5C2D4F;">Topic</td><td style="padding: 8px 0;">${subject}</td></tr>` : ""}
          </table>
          <div style="background: #F5F0EA; border-left: 3px solid #5C2D4F; padding: 20px 24px; border-radius: 2px;">
            <p style="margin: 0; line-height: 1.7; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>
          <p style="margin-top: 24px; font-size: 13px; color: #888; border-top: 1px solid #eee; padding-top: 16px;">
            Sent via the contact form at nicolejardim.com — reply directly to this email to respond to ${firstName}.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact route error:", err)
    return NextResponse.json({ error: "Server error." }, { status: 500 })
  }
}
