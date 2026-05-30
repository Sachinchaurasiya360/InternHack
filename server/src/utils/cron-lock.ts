import crypto from "crypto";
import { prisma } from "../database/db.js";

/**
 * Acquires a transaction-level PostgreSQL advisory lock, runs the function, and releases it automatically
 * when the transaction commits or rolls back. Prevents concurrent executions across scaled instances.
 * 
 * @param jobName A unique identifier for the cron job (e.g. "internhack-ai-sync").
 * @param fn The async function to execute if the lock is acquired.
 */
export async function withAdvisoryLock(jobName: string, fn: () => Promise<void>): Promise<void> {
  const hash = crypto.createHash("sha256").update(jobName).digest();
  // We use a single 64-bit BigInt for the advisory lock ID
  const lockId = hash.readBigInt64BE(0);

  try {
    await prisma.$transaction(async (tx) => {
      // Try to acquire the transaction-level lock
      const res = await tx.$queryRaw<{ locked: boolean }[]>`SELECT pg_try_advisory_xact_lock(${lockId}) as "locked"`;
      
      const locked = res[0]?.locked;

      if (!locked) {
        console.log(`[CronLock] Job "${jobName}" is currently locked/running on another instance. Skipping.`);
        return;
      }

      // Execute the job if the lock was acquired
      await fn();
    }, {
      // Allow the transaction to run for up to 10 minutes to accommodate long cron jobs
      timeout: 10 * 60 * 1000,
    });
  } catch (err) {
    console.error(`[CronLock] Error acquiring lock or executing job "${jobName}":`, err);
  }
}
