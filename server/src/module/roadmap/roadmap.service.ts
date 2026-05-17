import { prisma } from "../../database/db.js";
import type { Prisma } from "@prisma/client";
import type { EnrollInput } from "./roadmap.validation.js";

interface WeeklyPlanWeek {
  week: number;
  startDate: string;
  endDate: string;
  topicSlugs: string[];
  totalHours: number;
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
  topics: { slug: string; estimatedHours: number; sectionOrder: number; topicOrder: number }[],
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
    if (weekHours + t.estimatedHours > hoursPerWeek && current.topicSlugs.length > 0) {
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
}) {
  const where: Prisma.roadmapWhereInput = { isPublished: true };
  const andConditions: Prisma.roadmapWhereInput[] = [];

  if (opts.level && opts.level !== "ALL_LEVELS") {
    where.level = opts.level as "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "ALL_LEVELS";
  }
  if (opts.tag) {
    andConditions.push({ tags: { has: opts.tag } });
  }
  if (opts.category) {
    andConditions.push({ tags: { has: opts.category } });
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

  if (andConditions.length > 0) {
    where.AND = andConditions;
  }

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
          roadmap: { select: { slug: true, title: true, isPublished: true, ownerUserId: true } },
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
    where: { slug: args.roadmapSlug, isPublished: true },
    include: {
      sections: {
        orderBy: { orderIndex: "asc" },
        include: { topics: { orderBy: { orderIndex: "asc" } } },
      },
    },
  });
  if (!roadmap) throw Object.assign(new Error("Roadmap not found"), { status: 404 });

  const flatTopics = roadmap.sections.flatMap((section) =>
    section.topics.map((t) => ({
      slug: t.slug,
      estimatedHours: t.estimatedHours,
      sectionOrder: section.orderIndex,
      topicOrder: t.orderIndex,
    })),
  );

  const startDate = new Date();
  const { plan, targetEndDate } = buildWeeklyPlan(flatTopics, args.input.hoursPerWeek, startDate);

  const enrollment = await prisma.$transaction(async (tx) => {
    const existing = await tx.roadmapEnrollment.findUnique({
      where: { userId_roadmapId: { userId: args.userId, roadmapId: roadmap.id } },
    });
    if (existing) {
      throw Object.assign(new Error("Already enrolled in this roadmap"), { status: 409 });
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

export async function getEnrollmentForUser(args: { userId: number; enrollmentId: number }) {
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
        },
      },
      topicProgress: true,
    },
  });
}

type TopicStatusValue = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "SKIPPED";

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
  if (!enrollment) throw Object.assign(new Error("Enrollment not found"), { status: 404 });

  const topic = await prisma.roadmapTopic.findFirst({
    where: { id: args.topicId, section: { roadmapId: enrollment.roadmapId } },
    select: { id: true },
  });
  if (!topic) throw Object.assign(new Error("Topic not in this roadmap"), { status: 400 });

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
    } else if (args.status === "NOT_STARTED" || args.status === "IN_PROGRESS") {
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
    where: { enrollmentId_topicId: { enrollmentId: enrollment.id, topicId: topic.id } },
    update: data,
    create,
  });

  // Check if all topics are now complete
  let roadmapCompleted = false;
  if (args.status === "COMPLETED") {
    const fullEnrollment = await getEnrollmentForUser({
      userId: args.userId,
      enrollmentId: args.enrollmentId,
    });
    if (fullEnrollment) {
      const summary = summarizeProgress(fullEnrollment);
      roadmapCompleted = summary.percentComplete === 100;
    }
  }

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
  if (!enrollment) throw Object.assign(new Error("Enrollment not found"), { status: 404 });

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

export function summarizeProgress(
  enrollment: NonNullable<Awaited<ReturnType<typeof getEnrollmentForUser>>>,
): ProgressSummary {
  const allTopics = enrollment.roadmap.sections.flatMap((s) => s.topics);
  const totalTopics = allTopics.length;
  const hoursTotal = allTopics.reduce((sum, t) => sum + t.estimatedHours, 0);

  const progressByTopicId = new Map(enrollment.topicProgress.map((p) => [p.topicId, p]));
  let completedTopics = 0;
  let inProgressTopics = 0;
  let bookmarkedTopics = 0;
  let hoursDone = 0;

  for (const t of allTopics) {
    const p = progressByTopicId.get(t.id);
    if (!p) continue;
    if (p.bookmarked) bookmarkedTopics += 1;
    if (p.status === "COMPLETED") {
      completedTopics += 1;
      hoursDone += t.estimatedHours;
    } else if (p.status === "IN_PROGRESS") {
      inProgressTopics += 1;
    }
  }

  return {
    totalTopics,
    completedTopics,
    inProgressTopics,
    bookmarkedTopics,
    percentComplete: totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100),
    hoursDone,
    hoursTotal,
  };
}
