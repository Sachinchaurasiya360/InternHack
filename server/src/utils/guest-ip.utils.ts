import { createHash } from "crypto";
import type { Request } from "express";

const GUEST_IP_SALT = process.env.GUEST_IP_SALT || "internhack-guest-salt";

export function getClientIp(req: Request): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0]!.trim();
  }
  return req.ip || req.socket.remoteAddress || "unknown";
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
