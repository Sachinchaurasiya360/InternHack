import crypto from "crypto";

/**
 * Stateless, signed unsubscribe tokens. The token authenticates the user for
 * the one purpose of flipping their email preference, so unsubscribe links in
 * emails work without a login session.
 *
 * Format: "<userId>.<base64url hmac>"
 */

function getSecret(): string {
  const secret = process.env["UNSUBSCRIBE_SECRET"] || process.env["JWT_SECRET"];
  if (!secret) throw new Error("JWT_SECRET (or UNSUBSCRIBE_SECRET) is required to sign unsubscribe tokens");
  return secret;
}

function sign(userId: number): string {
  return crypto.createHmac("sha256", getSecret()).update(`unsubscribe:${userId}`).digest("base64url");
}

export function buildUnsubscribeToken(userId: number): string {
  return `${userId}.${sign(userId)}`;
}

/** Returns the userId the token was issued for, or null if invalid. */
export function verifyUnsubscribeToken(token: string): number | null {
  const dot = token.indexOf(".");
  if (dot <= 0) return null;
  const rawId = token.slice(0, dot);
  const signature = token.slice(dot + 1);
  const userId = Number(rawId);
  if (!Number.isInteger(userId) || userId <= 0 || !signature) return null;

  const expected = Buffer.from(sign(userId));
  const provided = Buffer.from(signature);
  if (provided.length !== expected.length) return null;
  if (!crypto.timingSafeEqual(provided, expected)) return null;
  return userId;
}

function getApiBaseUrl(): string {
  if (process.env["API_URL"]) return process.env["API_URL"].replace(/\/$/, "");
  if (process.env["SERVER_URL"]) return `${process.env["SERVER_URL"].replace(/\/$/, "")}/api`;
  if (process.env["NODE_ENV"] === "production") return "https://api.internhack.xyz/api";
  return "http://localhost:3000/api";
}

export function buildUnsubscribeUrl(userId: number): string {
  return `${getApiBaseUrl()}/email/unsubscribe?token=${encodeURIComponent(buildUnsubscribeToken(userId))}`;
}

/**
 * Appends an email-safe unsubscribe footer to an html email body.
 * Inserted before </body> when present so it renders inside the document.
 */
export function withUnsubscribeFooter(html: string, unsubscribeUrl: string): string {
  const footer = `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;">
  <tr>
    <td style="padding:16px 24px;text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#8a8a86;">
      You are receiving this because you have an InternHack account.<br/>
      <a href="${unsubscribeUrl}" style="color:#8a8a86;text-decoration:underline;">Unsubscribe from these emails</a>
    </td>
  </tr>
</table>`;
  const idx = html.toLowerCase().lastIndexOf("</body>");
  if (idx >= 0) return html.slice(0, idx) + footer + html.slice(idx);
  return html + footer;
}
