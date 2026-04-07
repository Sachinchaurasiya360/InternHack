import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = () => process.env.EMAIL_FROM || "InternHack <onboarding@resend.dev>";

export async function sendEmail(options: {
  to: string;
  subject: string;
  html: string;
}): Promise<void> {
  console.log(`[Email] Sending "${options.subject}" to ${options.to}`);
  try {
    const result = await resend.emails.send({ from: FROM(), ...options });
    console.log("[Email] Sent successfully:", JSON.stringify(result));
  } catch (err) {
    console.error("[Email] Failed to send:", err);
    throw err;
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Send up to 100 emails in a single Resend API call.
 * Resend's free/default rate limit is ~2 requests/sec, so callers should throttle.
 * Retries the whole batch on 429 with exponential backoff.
 */
export async function sendEmailBatch(
  emails: { to: string; subject: string; html: string }[],
  opts: { maxRetries?: number } = {},
): Promise<{ sent: number; failed: number; errors: string[] }> {
  if (emails.length === 0) return { sent: 0, failed: 0, errors: [] };
  if (emails.length > 100) throw new Error("Resend batch supports max 100 emails per call");

  const payload = emails.map((e) => ({ from: FROM(), to: e.to, subject: e.subject, html: e.html }));
  const maxRetries = opts.maxRetries ?? 4;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const result = await resend.batch.send(payload);
      if (result.error) {
        const status = (result.error as { statusCode?: number }).statusCode;
        if (status === 429 && attempt < maxRetries) {
          const wait = Math.min(1000 * 2 ** attempt, 8000);
          console.warn(`[Email] batch 429, retrying in ${wait}ms (attempt ${attempt + 1})`);
          await sleep(wait);
          continue;
        }
        return { sent: 0, failed: emails.length, errors: [JSON.stringify(result.error)] };
      }
      const created = result.data?.data?.length ?? emails.length;
      return { sent: created, failed: emails.length - created, errors: [] };
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      const is429 = /429|rate.?limit/i.test(msg);
      if (is429 && attempt < maxRetries) {
        const wait = Math.min(1000 * 2 ** attempt, 8000);
        console.warn(`[Email] batch threw 429, retrying in ${wait}ms`);
        await sleep(wait);
        continue;
      }
      return { sent: 0, failed: emails.length, errors: [msg] };
    }
  }
  return { sent: 0, failed: emails.length, errors: ["max retries exceeded"] };
}

export const emailSleep = sleep;
