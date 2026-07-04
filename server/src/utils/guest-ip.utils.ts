import { createHash } from "crypto";
import type { Request } from "express";

const GUEST_IP_SALT = process.env.GUEST_IP_SALT || "internhack-guest-salt";

export function getClientIp(req: Request): string {
  // req.ip already respects the app.set("trust proxy", 1) in index.ts,
  // returning the leftmost untrusted address from X-Forwarded-For.
  // Do NOT re-parse the header manually — that bypasses trust-proxy and lets
  // clients forge their identity.
  return req.ip || "unknown";
}

export function hashGuestIp(req: Request): string {
  const ip = getClientIp(req);
  return createHash("sha256")
    .update(`${GUEST_IP_SALT}:${ip}`)
    .digest("hex")
    .slice(0, 16);
}

export function guestResumeKeyPrefix(ipHash: string): string {
  return `guest-resumes/${ipHash}/`;
}
