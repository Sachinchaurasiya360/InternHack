import crypto from "crypto";
import { prisma } from "../database/db.js";

/**
 * Acquires a session-level PostgreSQL advisory lock, runs the function, and
 * releases it explicitly when done. Prevents concurrent executions across
 * scaled instances. Safe because the finally block always unlocks.
 *
 * Note: transaction-level advisory locks (pg_try_advisory_xact_lock) require
 * interactive transactions which are not supported by the PrismaPg driver adapter.
 */
export async function withAdvisoryLock<T = void>(jobName: string, fn: () => Promise<T>): Promise<T | null> {
  const hash = crypto.createHash("sha256").update(jobName).digest();
  const lockId = hash.readBigInt64BE(0);

  let locked = false;
  try {
    const res = await prisma.$queryRaw<{ locked: boolean }[]>`SELECT pg_try_advisory_lock(${lockId}) as "locked"`;
    locked = res[0]?.locked ?? false;

    if (!locked) {
      console.log(`[CronLock] Job "${jobName}" is currently locked/running on another instance. Skipping.`);
      return null;
    }

    return await fn();
  } catch (err) {
    console.error(`[CronLock] Error acquiring lock or executing job "${jobName}":`, err);
    return null;
  } finally {
    if (locked) {
      await prisma.$queryRaw`SELECT pg_advisory_unlock(${lockId})`.catch((e) =>
        console.error(`[CronLock] Failed to release lock for "${jobName}":`, e),
      );
    }
  }
}
