import type { Request, Response } from "express";
import crypto from "crypto";
import { sendEmail } from "../../utils/email.utils.js";
import { inboundWebhookSchema } from "./email-inbound.validation.js";

const FORWARD_TO = process.env["INBOUND_FORWARD_TO"] || "mrsachinchaurasiya@gmail.com";
const WEBHOOK_SECRET = process.env["RESEND_WEBHOOK_SECRET"] || "";

function verifySignature(payload: string, signature: string): boolean {
  if (!WEBHOOK_SECRET) return true; // skip verification if no secret configured
  const expected = crypto
    .createHmac("sha256", WEBHOOK_SECRET)
    .update(payload)
    .digest("base64");
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected),
  );
}

export async function handleInboundEmail(req: Request, res: Response): Promise<void> {
  try {
    const signature = req.headers["resend-signature"] as string | undefined;
    const rawBody = JSON.stringify(req.body);

    if (WEBHOOK_SECRET && (!signature || !verifySignature(rawBody, signature))) {
      console.warn("[Inbound] Invalid webhook signature");
      res.status(401).json({ error: "Invalid signature" });
      return;
    }

    const parsed = inboundWebhookSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Invalid webhook payload" });
      return;
    }
    const { type, data } = parsed.data;

    if (type !== "email.received") {
      res.json({ ok: true, skipped: true });
      return;
    }

    const from = data?.from ?? "Unknown sender";
    const subject = data?.subject ?? "(no subject)";
    const textBody = data?.text ?? "";
    const htmlBody = data?.html ?? "";
    const to = Array.isArray(data?.to) ? data.to.join(", ") : (data?.to ?? "");
    const cc = Array.isArray(data?.cc) ? data.cc.join(", ") : (data?.cc ?? "");

    console.log(`[Inbound] Received email from ${from}, subject: "${subject}"`);

    const forwardHtml = `<!DOCTYPE html>
<html><body style="margin:0;padding:0;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
  <tr>
    <td style="background-color:#0a0a0a;padding:16px 20px;text-align:center;">
      <p style="margin:0;font-size:13px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">InternHack, Forwarded Reply</p>
    </td>
  </tr>
  <tr>
    <td style="padding:20px;background-color:#ffffff;">
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;border:1px solid #e4e4e7;border-radius:8px;overflow:hidden;">
        <tr><td style="padding:8px 12px;background-color:#fafafa;border-bottom:1px solid #e4e4e7;">
          <p style="margin:0;font-size:12px;color:#71717a;">From</p>
          <p style="margin:2px 0 0;font-size:14px;font-weight:600;color:#18181b;">${escapeHtml(from)}</p>
        </td></tr>
        <tr><td style="padding:8px 12px;background-color:#fafafa;border-bottom:1px solid #e4e4e7;">
          <p style="margin:0;font-size:12px;color:#71717a;">To</p>
          <p style="margin:2px 0 0;font-size:14px;color:#18181b;">${escapeHtml(to)}</p>
        </td></tr>
        ${cc ? `<tr><td style="padding:8px 12px;background-color:#fafafa;border-bottom:1px solid #e4e4e7;">
          <p style="margin:0;font-size:12px;color:#71717a;">CC</p>
          <p style="margin:2px 0 0;font-size:14px;color:#18181b;">${escapeHtml(cc)}</p>
        </td></tr>` : ""}
        <tr><td style="padding:8px 12px;background-color:#fafafa;">
          <p style="margin:0;font-size:12px;color:#71717a;">Subject</p>
          <p style="margin:2px 0 0;font-size:14px;font-weight:600;color:#18181b;">${escapeHtml(subject)}</p>
        </td></tr>
      </table>
      <div style="font-size:14px;line-height:1.6;color:#3f3f46;">
        ${htmlBody || `<pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(textBody)}</pre>`}
      </div>
    </td>
  </tr>
  <tr>
    <td style="padding:12px 20px;background-color:#fafafa;text-align:center;">
      <p style="margin:0;font-size:11px;color:#a1a1aa;">Forwarded by InternHack inbound webhook</p>
    </td>
  </tr>
</table>
</body></html>`;

    await sendEmail({
      to: FORWARD_TO,
      subject: `[Reply] ${subject}`,
      html: forwardHtml,
    });

    console.log(`[Inbound] Forwarded to ${FORWARD_TO}`);
    res.json({ ok: true });
  } catch (err) {
    console.error("[Inbound] Error processing webhook:", err);
    res.status(500).json({ error: "Failed to process inbound email" });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
