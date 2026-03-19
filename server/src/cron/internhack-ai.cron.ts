import cron from "node-cron";
import { jobIndexService } from "../module/job-index/job-index.service.js";
import { JobMatchingService } from "../module/job-index/job-matching.service.js";
import { prisma } from "../database/db.js";

/**
 * AI Pipeline cron jobs:
 * 1. Every 6h (offset 30min after scraper): Sync → Enrich → Embed
 * 2. Every hour: Generate user↔job matches
 * 3. Daily 3 AM: Maintenance (re-embed users, clean old data)
 */
export function startAIPipelineCrons() {
  // ── Every 6 hours at :30 — Sync + Enrich + Embed ──
  cron.schedule("30 */6 * * *", async () => {
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

  // ── Every hour — Generate matches ──
  cron.schedule("0 * * * *", async () => {
    try {
      console.log("[AI Pipeline] Generating matches...");
      const matchingService = new JobMatchingService();
      const matches = await matchingService.generateMatches(6);
      console.log(`[AI Pipeline] Generated ${matches} new matches`);
    } catch (err) {
      console.error("[AI Pipeline] Match cron failed:", err);
    }
  });

  // ── Daily at 3 AM — Maintenance ──
  cron.schedule("0 3 * * *", async () => {
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

  console.log("[AI Pipeline] Cron jobs scheduled");
}
