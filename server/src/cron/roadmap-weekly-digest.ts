import cron from "node-cron";
import { prisma } from "../database/db.js";
import { sendEmail } from "../utils/email.utils.js";
import { roadmapWeeklyDigestEmailHtml } from "../utils/email-templates.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";

let cronJob: cron.ScheduledTask | null = null;

interface DigestBuddyData {
  name: string;
  completedThisWeek: number;
  percentComplete: number;
  completedTotal: number;
  difference: number;
  bothMadeProgress: boolean;
}

type DigestRoadmap = {
  title: string;
  slug: string;
  percentComplete: number;
  completedThisWeek: number;
  nextTopicTitle: string | null;
  nextTopicSlug: string | null;
  buddy: DigestBuddyData | null;
};

type DigestEnrollment = {
  userId: number;
  roadmapId: number;
  user: { id: number; name: string; email: string };
  topicProgress: { topicId: number; status: string; completedAt: Date | null }[];
  roadmap: {
    title: string;
    slug: string;
    sections: {
      topics: {
        id: number;
        slug: string;
        title: string;
        orderIndex: number;
        section: { orderIndex: number };
      }[];
    }[];
  };
};

function buildDigestRoadmap(
  enrollment: DigestEnrollment,
  buddyProgress?: { name: string; topicProgress: { status: string; completedAt: Date | null }[]; totalTopics: number } | null
): DigestRoadmap | null {
  const topics = enrollment.roadmap.sections
    .flatMap((section) => section.topics)
    .sort((a, b) => a.section.orderIndex - b.section.orderIndex || a.orderIndex - b.orderIndex);
  const totalTopics = topics.length;
  if (totalTopics === 0) return null;

  const progressByTopicId = new Map(enrollment.topicProgress.map((progress) => [progress.topicId, progress]));
  const completed = topics.filter((topic) => progressByTopicId.get(topic.id)?.status === "COMPLETED");
  if (completed.length >= totalTopics) return null;

  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const completedThisWeek = enrollment.topicProgress.filter(
    (progress) => progress.status === "COMPLETED" && progress.completedAt && progress.completedAt >= weekAgo,
  ).length;
  const nextTopic = topics.find((topic) => progressByTopicId.get(topic.id)?.status !== "COMPLETED") ?? null;

  let buddyData: DigestBuddyData | null = null;
  if (buddyProgress) {
    const buddyCompleted = buddyProgress.topicProgress.filter((p) => p.status === "COMPLETED").length;
    const buddyPct = buddyProgress.totalTopics === 0 ? 0 : Math.round((buddyCompleted / buddyProgress.totalTopics) * 100);
    const buddyCompletedThisWeek = buddyProgress.topicProgress.filter(
      (p) => p.status === "COMPLETED" && p.completedAt && p.completedAt >= weekAgo
    ).length;

    buddyData = {
      name: buddyProgress.name,
      completedThisWeek: buddyCompletedThisWeek,
      percentComplete: buddyPct,
      completedTotal: buddyCompleted,
      difference: buddyCompleted - completed.length,
      bothMadeProgress: completedThisWeek > 0 && buddyCompletedThisWeek > 0,
    };
  }

  return {
    title: enrollment.roadmap.title,
    slug: enrollment.roadmap.slug,
    percentComplete: Math.round((completed.length / totalTopics) * 100),
    completedThisWeek,
    nextTopicTitle: nextTopic?.title ?? null,
    nextTopicSlug: nextTopic?.slug ?? null,
    buddy: buddyData,
  };
}

async function getActiveDigestEnrollments(): Promise<DigestEnrollment[]> {
  const enrollments = await prisma.roadmapEnrollment.findMany({
    where: {
      status: "ACTIVE",
      user: {
        isActive: true,
        unsubscribeDigest: false,
      },
    },
    include: {
      user: { select: { id: true, name: true, email: true } },
      topicProgress: true,
      roadmap: {
        include: {
          sections: {
            include: {
              topics: {
                select: {
                  id: true,
                  slug: true,
                  title: true,
                  orderIndex: true,
                  section: { select: { orderIndex: true } },
                },
              },
            },
          },
        },
      },
    },
  });
  return enrollments as unknown as DigestEnrollment[];
}

export async function sendWeeklyRoadmapDigests(): Promise<void> {
  const enrollments = await getActiveDigestEnrollments();

  // 1. Fetch active buddy pairings
  const activePairs = await prisma.roadmapStudyBuddyPair.findMany({
    where: { active: true },
  });

  const pairMap = new Map<string, { buddyId: number }>();
  const activePairRoadmapIds = new Set<number>();
  for (const pair of activePairs) {
    pairMap.set(`${pair.studentAId}_${pair.roadmapId}`, { buddyId: pair.studentBId });
    pairMap.set(`${pair.studentBId}_${pair.roadmapId}`, { buddyId: pair.studentAId });
    activePairRoadmapIds.add(pair.roadmapId);
  }

  // 2. Fetch progress info for paired buddies
  const buddyIds = Array.from(new Set(activePairs.flatMap((p) => [p.studentAId, p.studentBId])));
  
  const buddyEnrollments = await prisma.roadmapEnrollment.findMany({
    where: {
      userId: { in: buddyIds },
      roadmapId: { in: Array.from(activePairRoadmapIds) },
      status: "ACTIVE",
    },
    include: {
      user: { select: { id: true, name: true } },
      topicProgress: true,
      roadmap: {
        include: {
          sections: {
            include: {
              topics: {
                select: { id: true },
              },
            },
          },
        },
      },
    },
  });

  const progressMap = new Map<string, { name: string; topicProgress: { status: string; completedAt: Date | null }[]; totalTopics: number }>();
  for (const e of buddyEnrollments) {
    const totalTopics = e.roadmap.sections.flatMap((s) => s.topics).length;
    progressMap.set(`${e.userId}_${e.roadmapId}`, {
      name: e.user.name,
      topicProgress: e.topicProgress,
      totalTopics,
    });
  }

  const byUser = new Map<number, { user: { id: number; name: string; email: string }; roadmaps: DigestRoadmap[] }>();

  for (const enrollment of enrollments) {
    // Resolve study buddy details if they have an active pair on this roadmap
    const pair = pairMap.get(`${enrollment.userId}_${enrollment.roadmapId}`);
    const buddyProgress = pair ? progressMap.get(`${pair.buddyId}_${enrollment.roadmapId}`) : null;

    const digestRoadmap = buildDigestRoadmap(enrollment, buddyProgress);
    if (!digestRoadmap) continue;

    const current = byUser.get(enrollment.userId) ?? { user: enrollment.user, roadmaps: [] };
    current.roadmaps.push(digestRoadmap);
    byUser.set(enrollment.userId, current);
  }

  for (const digest of byUser.values()) {
    if (digest.roadmaps.length === 0) continue;

    try {
      await sendEmail({
        to: digest.user.email,
        subject: `${digest.user.name.split(" ")[0] || "Student"}, your weekly roadmap progress`,
        html: roadmapWeeklyDigestEmailHtml({
          name: digest.user.name,
          roadmaps: digest.roadmaps,
        }),
      });
    } catch (err) {
      console.error(`[RoadmapDigest] Failed to send digest to user ${digest.user.id}:`, err);
    }
  }
}

export function startWeeklyRoadmapDigestCron(schedule = "0 9 * * 1"): void {
  if (cronJob) return;
  cronJob = cron.schedule(
    schedule,
    () => {
      void withAdvisoryLock("roadmap-weekly-digest", async () => {
        try {
          await sendWeeklyRoadmapDigests();
        } catch (err) {
          console.error("[RoadmapDigest] Weekly digest failed:", err);
        }
      });
    },
    { timezone: "Etc/UTC" },
  );
  console.log(`[RoadmapDigest] Weekly digest scheduled with cron "${schedule}"`);
}

/** Stop the weekly roadmap digest cron (used during graceful shutdown). */
export function stopWeeklyRoadmapDigestCron(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    console.log("[RoadmapDigest] Weekly digest cron stopped");
  }
}
