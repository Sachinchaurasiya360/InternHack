import cron from "node-cron";
import { jobIndexService } from "../module/job-index/job-index.service.js";
import { JobMatchingService } from "../module/job-index/job-matching.service.js";
import { prisma } from "../database/db.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";

const cronJobs: cron.ScheduledTask[] = [];

/**
 * Run the full AI pipeline once, in dependency order. This folds the three
 * scheduled passes (sync/enrich/embed, match generation, daily maintenance)
 * into a single sequential run so the Vercel daily cron can invoke it once.
 *
 * Throws on failure so the caller (the cron callback's try/catch on EC2, or the
 * daily cron endpoint on Vercel) can record/report it.
 */
export async function runAiPipelineDaily(): Promise<void> {
  // ── 1. Sync + Enrich + Embed ──
  console.log("[AI Pipeline] Starting sync...");
  const synced = await jobIndexService.syncAllNewJobs();
  console.log(`[AI Pipeline] Synced ${synced} new jobs`);

  const enriched = await jobIndexService.enrichUnenrichedJobs(50);
  console.log(`[AI Pipeline] Enriched ${enriched} jobs`);

  const embedded = await jobIndexService.generateJobEmbeddings(100);
  console.log(`[AI Pipeline] Generated ${embedded} job embeddings`);

  await jobIndexService.deactivateExpired();
  console.log("[AI Pipeline] Deactivated expired jobs");

  // ── 2. Generate user↔job matches ──
  console.log("[AI Pipeline] Generating matches...");
  const matchingService = new JobMatchingService();
  const matches = await matchingService.generateMatches(6);
  console.log(`[AI Pipeline] Generated ${matches} new matches`);

  // ── 3. Maintenance (re-embed users, clean old data) ──
  console.log("[AI Pipeline] Daily maintenance...");
  const userEmbeddings = await jobIndexService.generateAllUserEmbeddings();
  console.log(`[AI Pipeline] Updated ${userEmbeddings} user embeddings`);

  await prisma.jobMatch.deleteMany({
    where: {
      dismissed: true,
      createdAt: { lt: new Date(Date.now() - 30 * 24 * 3600000) },
    },
  });

  await prisma.jobAgentConversation.deleteMany({
    where: {
      isActive: false,
      updatedAt: { lt: new Date(Date.now() - 7 * 24 * 3600000) },
    },
  });

  console.log("[AI Pipeline] Maintenance complete");
}

/**
 * AI Pipeline cron jobs:
 * 1. Every 6h (offset 30min after scraper): Sync → Enrich → Embed
 * 2. Every hour: Generate user↔job matches
 * 3. Daily 3 AM: Maintenance (re-embed users, clean old data)
 */
export function startAIPipelineCrons() {
  // ── Every 6 hours at :30, Sync + Enrich + Embed ──
  cronJobs.push(cron.schedule("30 */6 * * *", () => {
    void withAdvisoryLock("internhack-ai-sync", async () => {
      try {
        console.log("[AI Pipeline] Starting sync...");
        const synced = await jobIndexService.syncAllNewJobs();
        console.log(`[AI Pipeline] Synced ${synced} new jobs`);

        const enriched = await jobIndexService.enrichUnenrichedJobs(50);
        console.log(`[AI Pipeline] Enriched ${enriched} jobs`);

        const embedded = await jobIndexService.generateJobEmbeddings(100);
        console.log(`[AI Pipeline] Generated ${embedded} job embeddings`);

        await jobIndexService.deactivateExpired();
        console.log("[AI Pipeline] Deactivated expired jobs");
      } catch (err) {
        console.error("[AI Pipeline] Sync cron failed:", err);
      }
    });
  }));

  // ── Every hour, Generate matches ──
  cronJobs.push(cron.schedule("0 * * * *", () => {
    void withAdvisoryLock("internhack-ai-match", async () => {
      try {
        console.log("[AI Pipeline] Generating matches...");
        const matchingService = new JobMatchingService();
        const matches = await matchingService.generateMatches(6);
        console.log(`[AI Pipeline] Generated ${matches} new matches`);
      } catch (err) {
        console.error("[AI Pipeline] Match cron failed:", err);
      }
    });
  }));

  // ── Daily at 3 AM, Maintenance ──
  cronJobs.push(cron.schedule("0 3 * * *", () => {
    void withAdvisoryLock("internhack-ai-maintenance", async () => {
      try {
        console.log("[AI Pipeline] Daily maintenance...");

        const userEmbeddings = await jobIndexService.generateAllUserEmbeddings();
        console.log(`[AI Pipeline] Updated ${userEmbeddings} user embeddings`);

        await prisma.jobMatch.deleteMany({
          where: {
            dismissed: true,
            createdAt: { lt: new Date(Date.now() - 30 * 24 * 3600000) },
          },
        });

        await prisma.jobAgentConversation.deleteMany({
          where: {
            isActive: false,
            updatedAt: { lt: new Date(Date.now() - 7 * 24 * 3600000) },
          },
        });

        console.log("[AI Pipeline] Maintenance complete");
      } catch (err) {
        console.error("[AI Pipeline] Maintenance cron failed:", err);
      }
    });
  }));

  console.log("[AI Pipeline] Cron jobs scheduled");
}

/** Stop all AI pipeline cron jobs (used during graceful shutdown). */
export function stopAIPipelineCrons(): void {
  for (const job of cronJobs) {
    job.stop();
  }
  cronJobs.length = 0;
  console.log("[AI Pipeline] Cron jobs stopped");
}
