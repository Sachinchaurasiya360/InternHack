import cron from "node-cron";
import { prisma } from "../database/db.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";
import { GithubSyncService } from "../module/opensource/github-sync.service.js";

const service = new GithubSyncService();
let cronJob: cron.ScheduledTask | null = null;

/**
 * Runs the daily sync for all connected GitHub accounts.
 */
async function syncAllConnections(): Promise<void> {
  // Find all connections that have a valid accessToken (or aren't disabled)
  const connections = await prisma.githubConnection.findMany({
    where: {
      NOT: {
        accessToken: "",
      },
    },
    select: { userId: true, githubUsername: true },
  });

  if (connections.length === 0) {
    console.log("[Cron] No connected GitHub accounts to sync.");
    return;
  }

  console.log(`[Cron] Starting GitHub sync for ${connections.length} account(s)...`);

  for (const conn of connections) {
    try {
      console.log(`[Cron] Syncing contributions for GitHub user @${conn.githubUsername} (userId: ${conn.userId})...`);
      await service.syncUserGithubContributions(conn.userId);
    } catch (err) {
      console.error(`[Cron] Failed to sync contributions for userId ${conn.userId} (@${conn.githubUsername}):`, err);
    }
  }

  console.log("[Cron] Daily GitHub contribution sync completed.");
}

/**
 * Starts the daily GitHub sync cron job (scheduled for daily at midnight).
 */
export function startGithubSyncCron(): void {
  if (cronJob) return;

  // Runs daily at midnight
  cronJob = cron.schedule("0 0 * * *", () => {
    void withAdvisoryLock("github-sync", async () => {
      try {
        await syncAllConnections();
      } catch (err) {
        console.error("[Cron] GitHub sync cron runner error:", err);
      }
    });
  });

  console.log("[Cron] GitHub connection sync cron started (daily at midnight)");
}

/**
 * Stops the GitHub sync cron job (used during graceful shutdown).
 */
export function stopGithubSyncCron(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    console.log("[Cron] GitHub connection sync cron stopped");
  }
}
