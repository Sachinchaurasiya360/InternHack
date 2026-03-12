import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(options: {
  to: string;
  subject: string;
  html: string;
}): Promise<void> {
  const from = process.env.EMAIL_FROM || "InternHack <onboarding@resend.dev>";
  console.log(`[Email] Sending "${options.subject}" to ${options.to} from ${from}`);
  try {
    const result = await resend.emails.send({ from, ...options });
    console.log("[Email] Sent successfully:", JSON.stringify(result));
  } catch (err) {
    console.error("[Email] Failed to send:", err);
    throw err;
  }
}
