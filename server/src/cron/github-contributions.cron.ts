import cron from "node-cron";
import { GithubService } from "../module/github/github.service.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";
import { createLogger } from "../utils/logger.js";

const logger = createLogger("GithubContributionsCron");
const githubService = new GithubService();
let cronJob: cron.ScheduledTask | null = null;

export async function runGithubContributionsSync() {
  logger.info("Starting GitHub contributions sync...");
  const result = await githubService.syncStaleConnections();
  logger.info("GitHub contributions sync finished:", result);
}

export function startGithubContributionsCron(schedule = "0 2 * * *"): void {
  if (cronJob) return;

  cronJob = cron.schedule(
    schedule,
    () => {
      withAdvisoryLock("github-contributions-sync", async () => {
        try {
          await runGithubContributionsSync();
        } catch (err) {
          logger.error("GitHub contributions sync failed:", err);
        }
      }).catch((err) => {
        logger.error("Advisory lock for GitHub contributions failed:", err);
      });
    },
    { timezone: "Etc/UTC" },
  );

  logger.info(`GitHub contributions cron scheduled: ${schedule}`);
}

export function stopGithubContributionsCron(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    logger.info("GitHub contributions cron stopped");
  }
}
