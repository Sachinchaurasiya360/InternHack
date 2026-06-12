import cron from "node-cron";
import { prisma } from "../database/db.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";
import { LeaderboardService } from "../module/opensource/leaderboard.service.js";

let cronJob: cron.ScheduledTask | null = null;
const leaderboardService = new LeaderboardService();

/**
 * Update global, weekly, and monthly ranks for all leaderboard entries.
 *
 * Each ranking dimension is computed with a single
 * `UPDATE … SET rank = ROW_NUMBER() OVER (ORDER BY …)` query so the total
 * number of statements stays constant regardless of user count.
 */
async function updateLeaderboardRanks(): Promise<void> {
  console.log("[Leaderboard] Starting rank update...");
  const start = Date.now();

  try {
    // Update all scores first (serialized, batched)
    const updatedCount = await leaderboardService.updateAllActiveUsers();
    console.log(`[Leaderboard] Updated scores for ${updatedCount} users`);

    // Each rank pass is a single SQL statement ── no N+1 queries
    await updateGlobalRanks();
    await updateWeeklyRanks();
    await updateMonthlyRanks();
    await updateUniversityRanks();
    await updateDomainRanks();

    // Update lastRankUpdate timestamp (already a single updateMany)
    await prisma.opensourceLeaderboard.updateMany({
      data: { lastRankUpdate: new Date() },
    });

    const duration = Date.now() - start;
    console.log(`[Leaderboard] Rank update complete in ${duration}ms`);
  } catch (err) {
    console.error("[Leaderboard] Rank update failed:", err);
    throw err;
  }
}

/**
 * Global ranks — single UPDATE with ROW_NUMBER() ordered by totalScore DESC
 */
async function updateGlobalRanks(): Promise<void> {
  const affected = await prisma.$executeRawUnsafe(`
    UPDATE "opensourceLeaderboard" AS lb
    SET "globalRank" = sub.rn
    FROM (
      SELECT id, ROW_NUMBER() OVER (ORDER BY "totalScore" DESC, id ASC) AS rn
      FROM "opensourceLeaderboard"
    ) AS sub
    WHERE lb.id = sub.id
  `);
  console.log(`[Leaderboard] Updated ${affected} global ranks`);
}

/**
 * Weekly ranks — single UPDATE with ROW_NUMBER() ordered by weeklyScore DESC
 */
async function updateWeeklyRanks(): Promise<void> {
  const affected = await prisma.$executeRawUnsafe(`
    UPDATE "opensourceLeaderboard" AS lb
    SET "weeklyRank" = sub.rn
    FROM (
      SELECT id, ROW_NUMBER() OVER (ORDER BY "weeklyScore" DESC, id ASC) AS rn
      FROM "opensourceLeaderboard"
    ) AS sub
    WHERE lb.id = sub.id
  `);
  console.log(`[Leaderboard] Updated ${affected} weekly ranks`);
}

/**
 * Monthly ranks — single UPDATE with ROW_NUMBER() ordered by monthlyScore DESC
 */
async function updateMonthlyRanks(): Promise<void> {
  const affected = await prisma.$executeRawUnsafe(`
    UPDATE "opensourceLeaderboard" AS lb
    SET "monthlyRank" = sub.rn
    FROM (
      SELECT id, ROW_NUMBER() OVER (ORDER BY "monthlyScore" DESC, id ASC) AS rn
      FROM "opensourceLeaderboard"
    ) AS sub
    WHERE lb.id = sub.id
  `);
  console.log(`[Leaderboard] Updated ${affected} monthly ranks`);
}

/**
 * University ranks — single UPDATE with ROW_NUMBER() partitioned by college
 */
async function updateUniversityRanks(): Promise<void> {
  const affected = await prisma.$executeRawUnsafe(`
    UPDATE "opensourceLeaderboard" AS lb
    SET "universityRank" = sub.rn
    FROM (
      SELECT ol.id,
             ROW_NUMBER() OVER (
               PARTITION BY COALESCE(u.college, 'Unknown')
               ORDER BY ol."totalScore" DESC, ol.id ASC
             ) AS rn
      FROM "opensourceLeaderboard" ol
      JOIN "user" u ON u.id = ol."userId"
    ) AS sub
    WHERE lb.id = sub.id
  `);
  console.log(`[Leaderboard] Updated ${affected} university ranks`);
}

/**
 * Domain ranks — kept in JS because domain data is derived from repoRequest
 * rows, not from the leaderboard table itself. However, we batch the writes
 * inside a single Prisma transaction with chunks of 10 to stay within the
 * connection pool budget.
 */
async function updateDomainRanks(): Promise<void> {
  // Fetch all leaderboard entries with repo request domain data
  const entries = await prisma.opensourceLeaderboard.findMany({
    include: {
      user: {
        select: {
          id: true,
          repoRequests: {
            where: { status: "APPROVED" },
            select: { domain: true },
          },
        },
      },
    },
    orderBy: { totalScore: "desc" },
  });

  // Group users by domain participation
  const byDomain = new Map<string, Array<{ id: number; totalScore: number }>>();

  for (const entry of entries) {
    const userDomains = new Set(entry.user.repoRequests.map((r: { domain: string }) => r.domain));

    for (const domain of userDomains) {
      if (!byDomain.has(domain)) {
        byDomain.set(domain, []);
      }
      byDomain.get(domain)!.push({ id: entry.id, totalScore: entry.totalScore });
    }
  }

  // Calculate ranks per domain and build JSON object for each user
  const domainRanksByUser = new Map<number, Record<string, number>>();

  for (const [domain, users] of byDomain) {
    users.sort((a, b) => b.totalScore - a.totalScore);

    for (let i = 0; i < users.length; i++) {
      const leaderboardId = users[i].id;
      if (!domainRanksByUser.has(leaderboardId)) {
        domainRanksByUser.set(leaderboardId, {});
      }
      domainRanksByUser.get(leaderboardId)![domain] = i + 1;
    }
  }

  // Batch updates inside a transaction, chunked to limit concurrency
  const allUpdates = Array.from(domainRanksByUser.entries());
  const CHUNK_SIZE = 10;

  for (let i = 0; i < allUpdates.length; i += CHUNK_SIZE) {
    const chunk = allUpdates.slice(i, i + CHUNK_SIZE);
    await prisma.$transaction(
      chunk.map(([id, ranks]) =>
        prisma.opensourceLeaderboard.update({
          where: { id },
          data: { domainRank: ranks },
        }),
      ),
    );
  }

  console.log(`[Leaderboard] Updated domain ranks for ${byDomain.size} domains`);
}

/**
 * Start the leaderboard rank update cron
 * Default: Every day at 2 AM UTC (after subscription expiry at midnight)
 */
export function startLeaderboardRanksCron(schedule = "0 2 * * *"): void {
  if (cronJob) return;

  cronJob = cron.schedule(
    schedule,
    () => {
      void withAdvisoryLock("leaderboard-ranks", async () => {
        try {
          await updateLeaderboardRanks();
        } catch (err) {
          console.error("[Leaderboard] Rank update failed:", err);
        }
      });
    },
    { timezone: "Etc/UTC" },
  );

  console.log(`[Leaderboard] Rank update cron scheduled with: "${schedule}"`);
}

/**
 * Stop the leaderboard rank update cron (used during graceful shutdown)
 */
export function stopLeaderboardRanksCron(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    console.log("[Leaderboard] Rank update cron stopped");
  }
}

/**
 * Manual trigger for rank updates (useful for testing or admin actions)
 */
export async function triggerManualRankUpdate(): Promise<void> {
  await withAdvisoryLock("leaderboard-ranks-manual", async () => {
    await updateLeaderboardRanks();
  });
}
