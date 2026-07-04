import type { Request, Response, NextFunction } from "express";
import { prisma } from "../database/db.js";
import { hashGuestIp } from "../utils/guest-ip.utils.js";

const GUEST_DAILY_LIMIT = 2;

/**
 * Postgres-backed daily usage limiter for unauthenticated guest endpoints that
 * trigger billed AI-provider calls.  Unlike express-rate-limit's in-memory
 * store, the counter survives Vercel cold starts and is shared across all
 * serverless instances.
 *
 * Uses a single Prisma upsert (Postgres INSERT … ON CONFLICT … UPDATE) per
 * request — no transaction needed for a best-effort limiter.
 */
export function guestUsageLimit() {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const ipHash = hashGuestIp(req);
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    try {
      const row = await prisma.guestUsage.upsert({
        where: { ipHash_date: { ipHash, date: today } },
        update: { count: { increment: 1 } },
        create: { ipHash, date: today, count: 1 },
      });

      if (row.count > GUEST_DAILY_LIMIT) {
        res.status(429).json({
          message:
            "Daily guest limit reached. Create a free account for more ATS scores.",
        });
        return;
      }

      next();
    } catch (err) {
      next(err);
    }
  };
}
