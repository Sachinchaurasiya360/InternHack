import cron from "node-cron";
import { Prisma } from "@prisma/client";
import { prisma } from "../database/db.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";

const GUIDE_NAMES = [
  "Open Source Guide",
  "Hackathon Guide",
  "GSoC Proposal Guide",
  "Codebase Guide",
  "CI/CD Guide",
  "First PR Guide",
];

let cronJob: cron.ScheduledTask | null = null;

export async function runAmbassadorEligibility(): Promise<void> {
  // Get all existing ambassador userIds to exclude them
  const existingAmbassadorIds = (
    await prisma.ambassador.findMany({ select: { userId: true } })
  ).map((a) => a.userId);

  const users = await prisma.user.findMany({
    where: {
      role: "STUDENT",
      isActive: true,
      id: existingAmbassadorIds.length > 0 ? { notIn: existingAmbassadorIds } : undefined,
    },
    select: { id: true, createdAt: true },
  });

  if (users.length === 0) return;

  const now = Date.now();

  // ── Step 1 — Account-age filter (in-memory) ────────────────────
  const ageFiltered = users.filter((u) => {
    const age = Math.floor((now - u.createdAt.getTime()) / (1000 * 60 * 60 * 24));
    return age >= 30;
  });
  if (ageFiltered.length === 0) return;
  const ageFilteredIds = ageFiltered.map((u) => u.id);

  // ── Step 2 — Guide-certificate counts via single groupBy ───────
  const certAgg = await prisma.guideCertificate.groupBy({
    by: ["userId"],
    where: { userId: { in: ageFilteredIds }, guideName: { in: GUIDE_NAMES } },
    _count: { _all: true },
  });
  const certMap = new Map(certAgg.map((r) => [r.userId, r._count._all]));

  const certFiltered = ageFiltered.filter((u) => (certMap.get(u.id) ?? 0) >= 6);
  if (certFiltered.length === 0) return;
  const certFilteredIds = certFiltered.map((u) => u.id);

  // ── Step 3 — Batch github repos + approved repo-requests ──────
  const [githubRows, approvedAgg] = await Promise.all([
    prisma.githubConnection.findMany({
      where: { userId: { in: certFilteredIds } },
      select: { userId: true, reposContributed: true },
    }),
    prisma.repoRequest.groupBy({
      by: ["userId"],
      where: { userId: { in: certFilteredIds }, status: "APPROVED" },
      _count: { _all: true },
    }),
  ]);

  const githubMap = new Map(githubRows.map((r) => [r.userId, r.reposContributed]));
  const approvedMap = new Map(approvedAgg.map((r) => [r.userId, r._count._all]));

  const reposTotalMap = new Map<number, number>();
  for (const id of certFilteredIds) {
    reposTotalMap.set(id, (githubMap.get(id) ?? 0) + (approvedMap.get(id) ?? 0));
  }

  const repoFiltered = certFiltered.filter((u) => (reposTotalMap.get(u.id) ?? 0) >= 3);
  if (repoFiltered.length === 0) return;
  const repoFilteredIds = repoFiltered.map((u) => u.id);

  // ── Step 4 — Single-pass window function for all leaderboard ranks ──
  const rankRows = await prisma.$queryRaw<{ userId: number; rank: bigint }[]>`
    SELECT "userId", rank
    FROM (
      SELECT "userId",
             ROW_NUMBER() OVER (ORDER BY "reposContributed" DESC) AS rank
      FROM   "githubConnection"
      WHERE  "reposContributed" > 0
    ) ranked
    WHERE "userId" IN (${Prisma.join(repoFilteredIds)})
  `;
  const rankMap = new Map(rankRows.map((r) => [r.userId, Number(r.rank)]));

  // ── Step 5 — Enroll qualifying users (no DB reads inside loop) ─
  let enrolled = 0;

  for (const user of repoFiltered) {
    const leaderboardRank = rankMap.get(user.id) ?? null;
    const inTop100 = leaderboardRank !== null && leaderboardRank <= 100;
    if (!inTop100) continue;

    const accountAgeDays = Math.floor(
      (now - user.createdAt.getTime()) / (1000 * 60 * 60 * 24),
    );
    const certCount = certMap.get(user.id) ?? 0;
    const reposContributed = reposTotalMap.get(user.id) ?? 0;

    await prisma.$transaction(async (tx) => {
      const ambassador = await tx.ambassador.create({
        data: {
          userId: user.id,
          status: "APPROVED",
          guidesCompleted: certCount,
          reposContributed,
          leaderboardRank,
          accountAgeDays,
          premiumGranted: true,
          premiumGrantedAt: new Date(),
          appliedAt: new Date(),
        },
      });

      await tx.user.update({
        where: { id: user.id },
        data: {
          subscriptionPlan: "YEARLY",
          subscriptionStatus: "ACTIVE",
          subscriptionStartDate: new Date(),
          subscriptionEndDate: new Date(now + 365 * 24 * 60 * 60 * 1000),
        },
      });

      const badge = await tx.badge.upsert({
        where: { slug: "oss-ambassador" },
        create: {
          name: "OSS Ambassador",
          slug: "oss-ambassador",
          description:
            "Awarded to students who complete all 6 guides, contribute to 3+ repos, and rank in the top 100.",
          category: "CONTRIBUTION",
          criteria: { type: "ambassador_auto" },
          isActive: true,
        },
        update: {},
      });

      await tx.studentBadge
        .create({
          data: { studentId: user.id, badgeId: badge.id },
        })
        .catch((err: { code?: string }) => {
          // P2002 = badge already awarded; anything else is worth surfacing.
          if (err?.code !== "P2002") {
            console.error("[Ambassador Cron] Failed to award badge:", err);
          }
        });

      const raw = `ambassador-${user.id}-${Math.random().toString(36).slice(2, 8)}`;
      const code = raw.replace(/[^a-z0-9-]/g, "-").slice(0, 40);
      const baseUrl = process.env["CLIENT_URL"] || "http://localhost:5173";

      await tx.referralLink.create({
        data: {
          ambassadorId: ambassador.id,
          code,
          url: `${baseUrl}/register?ref=${code}`,
          label: "Auto-generated",
        },
      });
    });

    enrolled++;
  }

  if (enrolled > 0) {
    console.log(`[Ambassador Cron] Auto-enrolled ${enrolled} new ambassador(s)`);
  }
}

export function startAmbassadorEligibilityCron(): void {
  if (cronJob) return;

  cronJob = cron.schedule("0 6 * * *", () => {
    void withAdvisoryLock("ambassador-eligibility", async () => {
      try {
        await runAmbassadorEligibility();
      } catch (err) {
        console.error("[Ambassador Cron] Error:", err);
      }
    });
  });

  console.log("[Ambassador Cron] Started (daily at 6 AM)");
}

export function stopAmbassadorEligibilityCron(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    console.log("[Ambassador Cron] Stopped");
  }
}
