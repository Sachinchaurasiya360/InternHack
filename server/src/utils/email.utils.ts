import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const FROM = () => process.env.EMAIL_FROM || "InternHack <onboarding@resend.dev>";

export interface EmailAttachment {
  filename: string;
  content: Buffer;
  contentType?: string;
}

export async function sendEmail(options: {
  to: string;
  subject: string;
  html: string;
  attachments?: EmailAttachment[];
}): Promise<void> {
  if (!resend) {
    console.warn(`[Email] RESEND_API_KEY not set — skipping email "${options.subject}" to ${options.to}`);
    return;
  }
  console.log(`[Email] Sending "${options.subject}" to ${options.to}`);
  try {
    const payload: Parameters<typeof resend.emails.send>[0] = {
      from: FROM(),
      to: options.to,
      subject: options.subject,
      html: options.html,
    };
    if (options.attachments && options.attachments.length > 0) {
      payload.attachments = options.attachments.map((a) => ({
        filename: a.filename,
        content: a.content,
        ...(a.contentType ? { contentType: a.contentType } : {}),
      }));
    }
    const result = await resend.emails.send(payload);
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
  if (!resend) {
    console.warn("[Email] RESEND_API_KEY not set — skipping batch send");
    return { sent: 0, failed: 0, errors: [] };
  }
  if (emails.length > 100) throw new Error("Resend batch supports max 100 emails per call");

  const payload = emails.map((e) => ({ from: FROM(), to: e.to, subject: e.subject, html: e.html }));
  const maxRetries = opts.maxRetries ?? 4;

  const parseRetryAfter = (err: unknown): number | null => {
    if (!err || typeof err !== "object") return null;
    const headers = (err as { headers?: Record<string, string> }).headers;
    const raw = headers?.["retry-after"] ?? headers?.["Retry-After"];
    if (!raw) return null;
    const seconds = Number(raw);
    if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);
    const date = Date.parse(raw);
    if (Number.isFinite(date)) return Math.max(0, date - Date.now());
    return null;
  };

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const result = await resend.batch.send(payload);
      if (result.error) {
        const status = (result.error as { statusCode?: number }).statusCode;
        if (status === 429 && attempt < maxRetries) {
          const retryAfter = parseRetryAfter(result.error);
          const wait = retryAfter ?? Math.min(1000 * 2 ** attempt, 8000);
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
        const retryAfter = parseRetryAfter(err);
        const wait = retryAfter ?? Math.min(1000 * 2 ** attempt, 8000);
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
