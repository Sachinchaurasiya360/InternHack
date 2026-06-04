import cron from "node-cron";
import { prisma } from "../database/db.js";
import { sendEmail } from "../utils/email.utils.js";
import { roadmapWeeklyDigestEmailHtml } from "../utils/email-templates.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";

let cronJob: cron.ScheduledTask | null = null;

type DigestRoadmap = {
  title: string;
  slug: string;
  percentComplete: number;
  completedThisWeek: number;
  nextTopicTitle: string | null;
  nextTopicSlug: string | null;
};

type DigestEnrollment = {
  userId: number;
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

function buildDigestRoadmap(enrollment: DigestEnrollment): DigestRoadmap | null {
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

  return {
    title: enrollment.roadmap.title,
    slug: enrollment.roadmap.slug,
    percentComplete: Math.round((completed.length / totalTopics) * 100),
    completedThisWeek,
    nextTopicTitle: nextTopic?.title ?? null,
    nextTopicSlug: nextTopic?.slug ?? null,
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
  const byUser = new Map<number, { user: { id: number; name: string; email: string }; roadmaps: DigestRoadmap[] }>();

  for (const enrollment of enrollments) {
    const digestRoadmap = buildDigestRoadmap(enrollment);
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
