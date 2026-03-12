import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(options: {
  to: string;
  subject: string;
  html: string;
}): Promise<void> {
  await resend.emails.send({
    from: process.env.EMAIL_FROM || "InternHack <onboarding@resend.dev>",
    ...options,
  });
}
