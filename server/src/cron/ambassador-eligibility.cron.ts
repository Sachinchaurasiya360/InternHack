import cron from "node-cron";
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

async function checkAndEnrollAmbassadors(): Promise<void> {
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

  const now = Date.now();
  let enrolled = 0;

  for (const user of users) {
    const accountAgeDays = Math.floor(
      (now - user.createdAt.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (accountAgeDays < 30) continue;

    const certCount = await prisma.guideCertificate.count({
      where: { userId: user.id, guideName: { in: GUIDE_NAMES } },
    });

    if (certCount < 6) continue;

    const github = await prisma.githubConnection.findUnique({
      where: { userId: user.id },
      select: { reposContributed: true },
    });
    const githubRepoCount = github?.reposContributed ?? 0;

    const approvedRepos = await prisma.repoRequest.count({
      where: { userId: user.id, status: "APPROVED" },
    });
    const reposContributed = githubRepoCount + approvedRepos;

    if (reposContributed < 3) continue;

    // Single SQL statement — avoids scanning all rows per user in the loop.
    const rankRows = await prisma.$queryRaw<{ rank: bigint }[]>`
      SELECT rank
      FROM (
        SELECT "userId",
               ROW_NUMBER() OVER (ORDER BY "reposContributed" DESC) AS rank
        FROM   "githubConnection"
        WHERE  "reposContributed" > 0
      ) ranked
      WHERE "userId" = ${user.id}
    `;
    const leaderboardRank = rankRows.length > 0 ? Number(rankRows[0]!.rank) : null;
    const inTop100 = leaderboardRank !== null && leaderboardRank <= 100;

    if (!inTop100) continue;

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
          subscriptionPlan: "MONTHLY",
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
        .catch(() => {});

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
        await checkAndEnrollAmbassadors();
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
