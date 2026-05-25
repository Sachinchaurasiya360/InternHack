import cron from "node-cron";
import axios from "axios";
import { prisma } from "../database/db.js";

let cronJob: cron.ScheduledTask | null = null;

export function startOpensourceSyncCron(): void {
  if (cronJob) return;

  // Run every 12 hours
  const schedule = process.env["OPENSOURCE_SYNC_CRON"] || "0 */12 * * *";

  cronJob = cron.schedule(schedule, async () => {
    console.log("[Cron] Starting OpenSource Repo sync...");
    try {
      const repos = await prisma.opensourceRepo.findMany({
        select: { id: true, owner: true, name: true },
      });

      console.log(`[Cron] Found ${repos.length} repos to sync.`);

      const token = process.env["GITHUB_TOKEN"];
      const headers: Record<string, string> = {
        "User-Agent": "InternHack-Sync",
      };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      let successCount = 0;
      let errorCount = 0;

      for (const repo of repos) {
        try {
          const res = await axios.get(
            `https://api.github.com/repos/${repo.owner}/${repo.name}`,
            { headers }
          );

          await prisma.opensourceRepo.update({
            where: { id: repo.id },
            data: {
              stars: res.data.stargazers_count || 0,
              forks: res.data.forks_count || 0,
              openIssues: res.data.open_issues_count || 0,
              lastUpdated: new Date(),
            },
          });

          successCount++;
        } catch (err: any) {
          console.error(`[Cron] Failed to sync ${repo.owner}/${repo.name}:`, err.message);
          errorCount++;
        }

        // Add a small delay to avoid hitting rate limits too aggressively
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      console.log(`[Cron] OpenSource sync completed. Success: ${successCount}, Errors: ${errorCount}`);
    } catch (err) {
      console.error("[Cron] OpenSource sync failed:", err);
    }
  });

  console.log(`[Cron] Scheduled OpenSource sync: ${schedule}`);
}
