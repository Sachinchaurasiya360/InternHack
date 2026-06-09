import { prisma } from "../../database/db.js";
import { invalidateRecommendations } from "../recommendation/recommendation.service.js";
import type { Prisma } from "@prisma/client";
import type { EnrollInput } from "./roadmap.validation.js";

interface WeeklyPlanWeek {
  week: number;
  startDate: string;
  endDate: string;
  topicSlugs: string[];
  totalHours: number;
}
export async function findDuplicateRoadmap(
  goalDescription: string,
  userId: number,
) {
  const normalizedGoal = goalDescription.toLowerCase().trim();
  if (!normalizedGoal) return null;

  // Simple keyword-based similarity: extract significant words
  const keywords = normalizedGoal
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !["want", "learn", "how", "for", "the", "and"].includes(w));

  if (keywords.length === 0) return null;

  // We'll search for roadmaps where the title contains at least one of the major keywords
  // and then we can do a secondary check if needed, or just let the user Decide.
  // For now, let's find the most recent one that matches.
  return prisma.roadmap.findFirst({
    where: {
      ownerUserId: userId,
      isAiGenerated: true,
      slug: {
        startsWith: "ai-",
      },
      title: {
        contains: normalizedGoal.slice(0, 30),
        mode: "insensitive",
      },
      OR: keywords.map(kw => ({
        title: { contains: kw, mode: 'insensitive' }
      }))
    },
    orderBy: { updatedAt: 'desc' }
  });
}
export interface EnrolledRoadmap {
  enrollment: Prisma.roadmapEnrollmentGetPayload<{
    include: {
      roadmap: true;
      topicProgress: true;
    };
  }>;
  weeklyPlan: WeeklyPlanWeek[];
}

const MS_PER_DAY = 24 * 60 * 60 * 1000;

/**
 * Greedy weekly plan, walks topics in section/order and packs each week up to
 * the user's hoursPerWeek budget. Returns weeks with start/end dates.
 */
export function buildWeeklyPlan(
  topics: {
    slug: string;
    estimatedHours: number;
    sectionOrder: number;
    topicOrder: number;
  }[],
  hoursPerWeek: number,
  startDate: Date,
): { plan: WeeklyPlanWeek[]; targetEndDate: Date } {
  const sorted = [...topics].sort(
    (a, b) => a.sectionOrder - b.sectionOrder || a.topicOrder - b.topicOrder,
  );

  const plan: WeeklyPlanWeek[] = [];
  let weekIndex = 0;
  let weekHours = 0;
  let current: WeeklyPlanWeek | null = null;

  const startWeek = (idx: number): WeeklyPlanWeek => {
    const start = new Date(startDate.getTime() + idx * 7 * MS_PER_DAY);
    const end = new Date(start.getTime() + 6 * MS_PER_DAY);
    return {
      week: idx + 1,
      startDate: start.toISOString(),
      endDate: end.toISOString(),
      topicSlugs: [],
      totalHours: 0,
    };
  };

  current = startWeek(weekIndex);

  for (const t of sorted) {
    if (
      weekHours + t.estimatedHours > hoursPerWeek &&
      current.topicSlugs.length > 0
    ) {
      plan.push(current);
      weekIndex += 1;
      current = startWeek(weekIndex);
      weekHours = 0;
    }
    current.topicSlugs.push(t.slug);
    current.totalHours += t.estimatedHours;
    weekHours += t.estimatedHours;
  }

  if (current.topicSlugs.length > 0) plan.push(current);

  const lastWeek = plan[plan.length - 1];
  const targetEndDate = lastWeek
    ? new Date(lastWeek.endDate)
    : new Date(startDate.getTime() + 7 * MS_PER_DAY);

  return { plan, targetEndDate };
}

export async function listPublishedRoadmaps(opts: {
  page: number;
  limit: number;
  level?: string | undefined;
  search?: string | undefined;
  tag?: string | undefined;
  category?: string | undefined;
  userId?: number | undefined;
}) {
  // Build the visibility condition: public roadmaps + caller's own unpublished ones
  const visibilityCondition: Prisma.roadmapWhereInput = opts.userId
    ? { OR: [{ isPublished: true }, { isPublished: false, ownerUserId: opts.userId }] }
    : { isPublished: true };

  // Build additional AND filters
  const andConditions: Prisma.roadmapWhereInput[] = [];

  if (opts.level && opts.level !== "ALL_LEVELS") {
    andConditions.push({
      level: opts.level as "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "ALL_LEVELS",
    });
  }

  const tagFilters: string[] = [];
  if (opts.tag) tagFilters.push(opts.tag.toLowerCase());
  if (opts.category) tagFilters.push(opts.category.toLowerCase());
  if (tagFilters.length > 0) {
    andConditions.push({ tags: { hasSome: tagFilters } });
  }

  if (opts.search) {
    const s = opts.search.trim();
    if (s) {
      andConditions.push({
        OR: [
          { title: { contains: s, mode: "insensitive" } },
          { shortDescription: { contains: s, mode: "insensitive" } },
          { tags: { has: s } },
        ],
      });
    }
  }

  const where: Prisma.roadmapWhereInput =
    andConditions.length > 0
      ? { AND: [visibilityCondition, ...andConditions] }
      : visibilityCondition;

  const [roadmaps, total] = await Promise.all([
    prisma.roadmap.findMany({
      where,
      orderBy: { updatedAt: "desc" },
      skip: (opts.page - 1) * opts.limit,
      take: opts.limit,
      select: {
        id: true,
        slug: true,
        title: true,
        shortDescription: true,
        level: true,
        estimatedHours: true,
        coverImage: true,
        ogImage: true,
        topicCount: true,
        enrolledCount: true,
        tags: true,
        updatedAt: true,
        isAiGenerated: true,
        ownerUserId: true,
      },
    }),
    prisma.roadmap.count({ where }),
  ]);

  return {
    roadmaps,
    pagination: {
      page: opts.page,
      limit: opts.limit,
      total,
      totalPages: Math.ceil(total / opts.limit),
    },
  };
}

export async function listCommunityRoadmaps(limit = 24) {
  const rows = await prisma.roadmap.findMany({
    where: { isPubliclyShared: true, isAiGenerated: true },
    orderBy: { updatedAt: "desc" },
    take: limit,
    select: {
      id: true,
      slug: true,
      title: true,
      shortDescription: true,
      level: true,
      estimatedHours: true,
      coverImage: true,
      ogImage: true,
      topicCount: true,
      enrolledCount: true,
      tags: true,
      updatedAt: true,
      isAiGenerated: true,
      ownerUserId: true,
      owner: { select: { name: true } },
    },
  });
  return rows.map(({ owner, ...r }) => ({
    ...r,
    creatorName: owner?.name ?? null,
  }));
}

export async function getRoadmapBySlug(slug: string) {
  return prisma.roadmap.findUnique({
    where: { slug },
    include: {
      sections: {
        orderBy: { orderIndex: "asc" },
        include: {
          topics: {
            orderBy: { orderIndex: "asc" },
            include: { resources: { orderBy: { orderIndex: "asc" } } },
          },
        },
      },
    },
  });
}

export async function getTopicBySlug(roadmapSlug: string, topicSlug: string) {
  return prisma.roadmapTopic.findFirst({
    where: {
      slug: topicSlug,
      section: { roadmap: { slug: roadmapSlug } },
    },
    include: {
      resources: { orderBy: { orderIndex: "asc" } },
      section: {
        select: {
          slug: true,
          title: true,
          orderIndex: true,
          roadmap: {
            select: {
              slug: true,
              title: true,
              isPublished: true,
              ownerUserId: true,
            },
          },
        },
      },
    },
  });
}

export async function enrollUser(args: {
  userId: number;
  roadmapSlug: string;
  input: EnrollInput;
}): Promise<EnrolledRoadmap> {
  const roadmap = await prisma.roadmap.findFirst({
    where: { slug: args.roadmapSlug, 
      OR: [{ isPublished: true }, { ownerUserId:args.userId }],
     },
    include: {
      sections: {
        orderBy: { orderIndex: "asc" },
        include: { topics: { orderBy: { orderIndex: "asc" } } },
      },
    },
  });
  if (!roadmap)
    throw Object.assign(new Error("Roadmap not found"), { status: 404 });

  const flatTopics = roadmap.sections.flatMap((section) =>
    section.topics.map((t) => ({
      slug: t.slug,
      estimatedHours: t.estimatedHours,
      sectionOrder: section.orderIndex,
      topicOrder: t.orderIndex,
    })),
  );

  const startDate = new Date();
  const { plan, targetEndDate } = buildWeeklyPlan(
    flatTopics,
    args.input.hoursPerWeek,
    startDate,
  );

  const enrollment = await prisma.$transaction(async (tx) => {
    const existing = await tx.roadmapEnrollment.findUnique({
      where: {
        userId_roadmapId: { userId: args.userId, roadmapId: roadmap.id },
      },
    });
    if (existing) {
      throw Object.assign(new Error("Already enrolled in this roadmap"), {
        status: 409,
      });
    }

    const created = await tx.roadmapEnrollment.create({
      data: {
        userId: args.userId,
        roadmapId: roadmap.id,
        hoursPerWeek: args.input.hoursPerWeek,
        preferredDays: args.input.preferredDays,
        experienceLevel: args.input.experienceLevel,
        goal: args.input.goal,
        startDate,
        targetEndDate,
        weeklyPlan: plan as unknown as Prisma.InputJsonValue,
      },
      include: {
        roadmap: true,
        topicProgress: true,
      },
    });

    await tx.roadmap.update({
      where: { id: roadmap.id },
      data: { enrolledCount: { increment: 1 } },
    });

    return created;
  });

  return { enrollment, weeklyPlan: plan };
}

export async function getEnrollmentForUser(args: {
  userId: number;
  enrollmentId: number;
}) {
  const enrollment = await prisma.roadmapEnrollment.findFirst({
    where: { id: args.enrollmentId, userId: args.userId },
    include: {
      roadmap: {
        include: {
          sections: {
            orderBy: { orderIndex: "asc" },
            include: {
              topics: {
                orderBy: { orderIndex: "asc" },
                include: { resources: { orderBy: { orderIndex: "asc" } } },
              },
            },
          },
        },
      },
      topicProgress: true,
    },
  });
  return enrollment;
}

export async function getEnrollmentByRoadmapSlugForUser(args: {
  userId: number;
  slug: string;
}) {
  return prisma.roadmapEnrollment.findFirst({
    where: {
      userId: args.userId,
      roadmap: {
        slug: args.slug,
      },
    },
    select: {
      id: true,
      status: true,
      roadmap: {
        select: {
          id: true,
          slug: true,
        },
      },
    },
  });
}

export async function deleteEnrollment(args: {
  userId: number;
  enrollmentId: number;
}) {
  const enrollment = await prisma.roadmapEnrollment.findFirst({
    where: { id: args.enrollmentId, userId: args.userId },
  });
  if (!enrollment)
    throw Object.assign(new Error("Enrollment not found"), { status: 404 });

  await prisma.$transaction(async (tx) => {
    await tx.roadmapTopicProgress.deleteMany({
      where: { enrollmentId: enrollment.id },
    });
    await tx.roadmapEnrollment.delete({ where: { id: enrollment.id } });
    await tx.roadmap.update({
      where: { id: enrollment.roadmapId },
      data: { enrolledCount: { decrement: 1 } },
    });
  });
}

export async function listEnrollmentsForUser(userId: number) {
  return prisma.roadmapEnrollment.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: {
      roadmap: {
        select: {
          id: true,
          slug: true,
          title: true,
          shortDescription: true,
          coverImage: true,
          topicCount: true,
          estimatedHours: true,
          ownerUserId: true,
        },
      },
      topicProgress: true,
    },
  });
}

type TopicStatusValue = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "SKIPPED";

async function updateEnrollmentStreak(enrollmentId: number) {
  const completedTopics = await prisma.roadmapTopicProgress.findMany({
    where: {
      enrollmentId,
      status: "COMPLETED",
      completedAt: { not: null },
    },
    select: { completedAt: true },
    orderBy: { completedAt: "asc" },
  });

  const completedDayKeys = getCompletedUtcDays(
    completedTopics.map((topic) => ({
      completedAt: topic.completedAt!,
    })),
  );

  const { currentStreak, longestStreak } = calculateStreaks(completedDayKeys);
  const lastCompletedAt = completedTopics.at(-1)?.completedAt ?? null;

  await prisma.roadmapEnrollment.update({
    where: { id: enrollmentId },
    data: {
      currentStreak,
      bestStreak: longestStreak,
      lastStreakDate: lastCompletedAt,
      weeklyStreak: currentStreak >= 7 ? Math.floor(currentStreak / 7) : 0,
      lastWeeklyStreakAt: currentStreak >= 7 ? lastCompletedAt : null,
    },
  });
}

export async function updateTopicProgress(args: {
  userId: number;
  enrollmentId: number;
  topicId: number;
  status?: TopicStatusValue | undefined;
  bookmarked?: boolean | undefined;
  notes?: string | undefined;
}) {
  const enrollment = await prisma.roadmapEnrollment.findFirst({
    where: { id: args.enrollmentId, userId: args.userId },
    select: { id: true, roadmapId: true },
  });
  if (!enrollment)
    throw Object.assign(new Error("Enrollment not found"), { status: 404 });

  const topic = await prisma.roadmapTopic.findFirst({
    where: { id: args.topicId, section: { roadmapId: enrollment.roadmapId } },
    select: { id: true },
  });
  if (!topic)
    throw Object.assign(new Error("Topic not in this roadmap"), {
      status: 400,
    });

  const data: Prisma.roadmapTopicProgressUncheckedUpdateInput = {};
  const create: Prisma.roadmapTopicProgressUncheckedCreateInput = {
    enrollmentId: enrollment.id,
    topicId: topic.id,
  };

  if (args.status) {
    data.status = args.status;
    create.status = args.status;
    if (args.status === "COMPLETED") {
      data.completedAt = new Date();
      create.completedAt = new Date();
    } else if (args.status === "NOT_STARTED" || args.status === "IN_PROGRESS" || args.status === "SKIPPED") {
      data.completedAt = null;
    }
  }
  if (args.bookmarked !== undefined) {
    data.bookmarked = args.bookmarked;
    create.bookmarked = args.bookmarked;
  }
  if (args.notes !== undefined) {
    data.notes = args.notes;
    create.notes = args.notes;
  }

  const progress = await prisma.roadmapTopicProgress.upsert({
    where: {
      enrollmentId_topicId: { enrollmentId: enrollment.id, topicId: topic.id },
    },
    update: data,
    create,
  });

  if (args.status === "COMPLETED") {
  await updateEnrollmentStreak(enrollment.id);
}

  // Check if all topics are now complete
  let roadmapCompleted = false;
  if (args.status === "COMPLETED" || args.status === "SKIPPED") {
    const fullEnrollment = await getEnrollmentForUser({
      userId: args.userId,
      enrollmentId: args.enrollmentId,
    });
    if (fullEnrollment) {
      const summary = summarizeProgress(fullEnrollment);
      roadmapCompleted = summary.percentComplete === 100;
    }
  }
  void invalidateRecommendations(args.userId).catch((error) => {
    console.warn("[RoadmapService] Recommendation invalidation failed", {
      userId: args.userId,
      error,
    });
  });

  return { progress, roadmapCompleted };
}

export async function recomputePace(args: {
  userId: number;
  enrollmentId: number;
  hoursPerWeek: number;
}) {
  const enrollment = await prisma.roadmapEnrollment.findFirst({
    where: { id: args.enrollmentId, userId: args.userId },
    include: {
      roadmap: {
        include: {
          sections: {
            orderBy: { orderIndex: "asc" },
            include: { topics: { orderBy: { orderIndex: "asc" } } },
          },
        },
      },
    },
  });
  if (!enrollment)
    throw Object.assign(new Error("Enrollment not found"), { status: 404 });

  const flatTopics = enrollment.roadmap.sections.flatMap((s) =>
    s.topics.map((t) => ({
      slug: t.slug,
      estimatedHours: t.estimatedHours,
      sectionOrder: s.orderIndex,
      topicOrder: t.orderIndex,
    })),
  );

  const { plan, targetEndDate } = buildWeeklyPlan(
    flatTopics,
    args.hoursPerWeek,
    enrollment.startDate,
  );

  return prisma.roadmapEnrollment.update({
    where: { id: enrollment.id },
    data: {
      hoursPerWeek: args.hoursPerWeek,
      targetEndDate,
      weeklyPlan: plan as unknown as Prisma.InputJsonValue,
    },
  });
}

export interface ProgressSummary {
  totalTopics: number;
  completedTopics: number;
  inProgressTopics: number;
  bookmarkedTopics: number;
  percentComplete: number;
  hoursDone: number;
  hoursTotal: number;
}

export type RoadmapTrackStatus = "AHEAD" | "ON_TRACK" | "BEHIND";

export interface RoadmapProgressTrendPoint {
  date: string;
  completed: number;
  cumulative: number;
}

export interface RoadmapEnrollmentAnalytics {
  enrollmentId: number;
  currentStreak: number;
  longestStreak: number;
  onTrackStatus: RoadmapTrackStatus;
  paceDeviation: number;
  expectedTopicsCompleted: number;
  actualTopicsCompleted: number;
  topicsCompletedThisWeek: number;
  weeklyTarget: number;
  estimatedCompletionDate: string;
  targetEndDate: string;
  progressTrend: RoadmapProgressTrendPoint[];
}

type AnalyticsRow = {
  enrollmentId: number;
  startDate: Date;
  targetEndDate: Date;
  weeklyPlan: Prisma.JsonValue;
  totalTopics: number;
  actualCompletedTopics: number;
  completedEvents: { completedAt: string | Date }[];
  progressTrend: RoadmapProgressTrendPoint[];
};

const toUtcDayKey = (date: Date): string => date.toISOString().slice(0, 10);

const utcDateFromDayKey = (dayKey: string): Date =>
  new Date(`${dayKey}T00:00:00.000Z`);

const addUtcDays = (date: Date, days: number): Date =>
  new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate() + days,
    ),
  );

const startOfUtcWeek = (date: Date): Date => {
  const start = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()),
  );
  const day = start.getUTCDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  start.setUTCDate(start.getUTCDate() + mondayOffset);
  return start;
};

function getActivePlanWeek(
  weeklyPlan: WeeklyPlanWeek[],
  now: Date,
): WeeklyPlanWeek | null {
  for (const week of weeklyPlan) {
    const startDate = new Date(week.startDate);
    const endDate = new Date(week.endDate);

    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
      continue;
    }

    if (now >= startDate && now <= endDate) {
      return week;
    }
  }

  return null;
}

function getCompletedUtcDays(
  completedEvents: { completedAt: string | Date }[],
): string[] {
  return Array.from(
    new Set(
      completedEvents.map((event) =>
        toUtcDayKey(
          event.completedAt instanceof Date
            ? event.completedAt
            : new Date(event.completedAt),
        ),
      ),
    ),
  ).sort();
}

function calculateStreaks(completedDayKeys: string[]): {
  currentStreak: number;
  longestStreak: number;
} {
  if (completedDayKeys.length === 0) {
    return { currentStreak: 0, longestStreak: 0 };
  }

  const completedDays = new Set(completedDayKeys);
  let longestStreak = 0;
  let runningStreak = 0;
  let previousDay: Date | null = null;

  for (const dayKey of completedDayKeys) {
    const day = utcDateFromDayKey(dayKey);
    if (previousDay && day.getTime() - previousDay.getTime() === MS_PER_DAY) {
      runningStreak += 1;
    } else {
      runningStreak = 1;
    }
    longestStreak = Math.max(longestStreak, runningStreak);
    previousDay = day;
  }

  const today = new Date();
  const todayKey = toUtcDayKey(today);
  const yesterdayKey = toUtcDayKey(addUtcDays(today, -1));
  const currentAnchor = completedDays.has(todayKey)
    ? today
    : completedDays.has(yesterdayKey)
      ? addUtcDays(today, -1)
      : null;

  if (!currentAnchor) {
    return { currentStreak: 0, longestStreak };
  }

  let currentStreak = 0;
  let cursor = currentAnchor;
  while (completedDays.has(toUtcDayKey(cursor))) {
    currentStreak += 1;
    cursor = addUtcDays(cursor, -1);
  }

  return { currentStreak, longestStreak };
}

function parseWeeklyPlan(value: Prisma.JsonValue): WeeklyPlanWeek[] {
  if (!Array.isArray(value)) return [];
  const weeks: WeeklyPlanWeek[] = [];
  for (const week of value) {
    if (!week || typeof week !== "object" || Array.isArray(week)) continue;
    const maybeWeek = week as Partial<WeeklyPlanWeek>;
    if (
      typeof maybeWeek.week === "number" &&
      typeof maybeWeek.startDate === "string" &&
      typeof maybeWeek.endDate === "string" &&
      Array.isArray(maybeWeek.topicSlugs)
    ) {
      weeks.push({
        week: maybeWeek.week,
        startDate: maybeWeek.startDate,
        endDate: maybeWeek.endDate,
        topicSlugs: maybeWeek.topicSlugs.filter(
          (slug): slug is string => typeof slug === "string",
        ),
        totalHours:
          typeof maybeWeek.totalHours === "number" ? maybeWeek.totalHours : 0,
      });
    }
  }
  return weeks;
}

function getPlanStats(weeklyPlan: WeeklyPlanWeek[], now: Date) {
  let expectedTopicsCompleted = 0;
  let weeklyTarget = 0;

  for (const week of weeklyPlan) {
    const startDate = new Date(week.startDate);
    const endDate = new Date(week.endDate);
    const topicCount = week.topicSlugs.length;

    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
      continue;
    }

    if (now >= startDate && now <= endDate) {
      weeklyTarget = topicCount;
      expectedTopicsCompleted += topicCount;
    } else if (endDate < now) {
      expectedTopicsCompleted += topicCount;
    }
  }

  return { expectedTopicsCompleted, weeklyTarget };
}

function getOnTrackStatus(
  actualCompletedTopics: number,
  expectedTopicsCompleted: number,
): {
  paceDeviation: number;
  onTrackStatus: RoadmapTrackStatus;
} {
  if (expectedTopicsCompleted <= 0) {
    return {
      paceDeviation: 0,
      onTrackStatus: actualCompletedTopics > 0 ? "AHEAD" : "ON_TRACK",
    };
  }

  const paceDeviation =
    (expectedTopicsCompleted - actualCompletedTopics) / expectedTopicsCompleted;

  if (actualCompletedTopics > expectedTopicsCompleted) {
    return { paceDeviation, onTrackStatus: "AHEAD" };
  }

  if (paceDeviation > 0.15) {
    return { paceDeviation, onTrackStatus: "BEHIND" };
  }

  return { paceDeviation, onTrackStatus: "ON_TRACK" };
}

function getEstimatedCompletionDate(args: {
  startDate: Date;
  targetEndDate: Date;
  totalTopics: number;
  actualCompletedTopics: number;
  now: Date;
}): string {
  if (args.totalTopics <= args.actualCompletedTopics) {
    return args.now.toISOString();
  }

  if (args.actualCompletedTopics <= 0) {
    return args.targetEndDate.toISOString();
  }

  const elapsedDays = Math.max(
    1,
    Math.ceil((args.now.getTime() - args.startDate.getTime()) / MS_PER_DAY),
  );
  const topicsPerDay = args.actualCompletedTopics / elapsedDays;
  if (topicsPerDay <= 0) {
    return args.targetEndDate.toISOString();
  }

  const remainingTopics = Math.max(
    0,
    args.totalTopics - args.actualCompletedTopics,
  );
  const daysRemaining = Math.ceil(remainingTopics / topicsPerDay);
  return addUtcDays(args.now, daysRemaining).toISOString();
}

export async function getEnrollmentAnalyticsForUser(args: {
  userId: number;
  enrollmentId: number;
}): Promise<RoadmapEnrollmentAnalytics | null> {
  const rows = await prisma.$queryRaw<AnalyticsRow[]>`
    WITH enrollment AS (
      SELECT
        e.id AS "enrollmentId",
        e."startDate" AS "startDate",
        e."targetEndDate" AS "targetEndDate",
        e."weeklyPlan" AS "weeklyPlan",
        r."topicCount" AS "totalTopics"
      FROM "roadmapEnrollment" e
      INNER JOIN "roadmap" r ON r.id = e."roadmapId"
      WHERE e.id = ${args.enrollmentId}
        AND e."userId" = ${args.userId}
      LIMIT 1
    ),
    completed AS (
      SELECT
        p."completedAt" AS "completedAt",
        (p."completedAt" AT TIME ZONE 'UTC')::date AS day
      FROM "roadmapTopicProgress" p
      INNER JOIN enrollment e ON e."enrollmentId" = p."enrollmentId"
      WHERE p.status = 'COMPLETED'
        AND p."completedAt" IS NOT NULL
    ),
    daily AS (
      SELECT
        day,
        COUNT(*)::int AS completed
      FROM completed
      GROUP BY day
    ),
    trend AS (
      SELECT
        day,
        completed,
        SUM(completed) OVER (ORDER BY day)::int AS cumulative
      FROM daily
    )
    SELECT
      e."enrollmentId",
      e."startDate",
      e."targetEndDate",
      e."weeklyPlan",
      e."totalTopics",
      COALESCE((SELECT COUNT(*)::int FROM completed), 0) AS "actualCompletedTopics",
      COALESCE(
        (
          SELECT jsonb_agg(jsonb_build_object('completedAt', c."completedAt") ORDER BY c."completedAt")
          FROM completed c
        ),
        '[]'::jsonb
      ) AS "completedEvents",
      COALESCE(
        (
          SELECT jsonb_agg(
            jsonb_build_object(
              'date', t.day::text,
              'completed', t.completed,
              'cumulative', t.cumulative
            )
            ORDER BY t.day
          )
          FROM trend t
        ),
        '[]'::jsonb
      ) AS "progressTrend"
    FROM enrollment e
  `;

  const row = rows[0];
  if (!row) return null;

  const now = new Date();
  const completedDayKeys = getCompletedUtcDays(row.completedEvents);
  const { currentStreak, longestStreak } = calculateStreaks(completedDayKeys);
  const weeklyPlan = parseWeeklyPlan(row.weeklyPlan);
  const { expectedTopicsCompleted, weeklyTarget } = getPlanStats(
    weeklyPlan,
    now,
  );
  const { paceDeviation, onTrackStatus } = getOnTrackStatus(
    row.actualCompletedTopics,
    expectedTopicsCompleted,
  );
  const activePlanWeek = getActivePlanWeek(weeklyPlan, now);
  const topicsCompletedThisWeek = activePlanWeek
    ? row.completedEvents.filter((event) => {
        const completedAt =
          event.completedAt instanceof Date
            ? event.completedAt
            : new Date(event.completedAt);
        const weekStart = new Date(activePlanWeek.startDate);
        const weekEnd = new Date(activePlanWeek.endDate);
        return (
          completedAt >= weekStart &&
          completedAt <= weekEnd &&
          completedAt <= now
        );
      }).length
    : 0;

  return {
    enrollmentId: row.enrollmentId,
    currentStreak,
    longestStreak,
    onTrackStatus,
    paceDeviation,
    expectedTopicsCompleted,
    actualTopicsCompleted: row.actualCompletedTopics,
    topicsCompletedThisWeek,
    weeklyTarget,
    estimatedCompletionDate: getEstimatedCompletionDate({
      startDate: row.startDate,
      targetEndDate: row.targetEndDate,
      totalTopics: row.totalTopics,
      actualCompletedTopics: row.actualCompletedTopics,
      now,
    }),
    targetEndDate: row.targetEndDate.toISOString(),
    progressTrend: row.progressTrend,
  };
}

export function summarizeProgress(
  enrollment: NonNullable<Awaited<ReturnType<typeof getEnrollmentForUser>>>,
): ProgressSummary {
  const allTopics = enrollment.roadmap.sections.flatMap((s) => s.topics);
  const progressByTopicId = new Map(
    enrollment.topicProgress.map((p) => [p.topicId, p]),
  );
  let completedTopics = 0;
  let inProgressTopics = 0;
  let bookmarkedTopics = 0;
  let skippedTopics = 0;
  let hoursDone = 0;
  let skippedHours = 0;

  for (const t of allTopics) {
    const p = progressByTopicId.get(t.id);
    if (!p) continue;
    if (p.bookmarked) bookmarkedTopics += 1;
    if (p.status === "COMPLETED") {
      completedTopics += 1;
      hoursDone += t.estimatedHours;
    } else if (p.status === "IN_PROGRESS") {
      inProgressTopics += 1;
    } else if (p.status === "SKIPPED") {
      skippedTopics += 1;
      skippedHours += t.estimatedHours;
    }
  }

  const totalTopics = allTopics.length - skippedTopics;
  const hoursTotal = allTopics.reduce((sum, t) => sum + t.estimatedHours, 0) - skippedHours;

  return {
    totalTopics,
    completedTopics,
    inProgressTopics,
    bookmarkedTopics,
    percentComplete:
      totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100),
    hoursDone,
    hoursTotal,
  };
}
