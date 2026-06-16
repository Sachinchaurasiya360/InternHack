import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  buildWeeklyPlan,
  summarizeProgress,
  enrollUser,
  updateTopicProgress,
  recomputePace,
} from "../module/roadmap/roadmap.service.js";
import { prisma } from "../database/db.js";
import { invalidateRecommendations } from "../module/recommendation/recommendation.service.js";
import type { EnrollInput } from "../module/roadmap/roadmap.validation.js";

// ─── Module mocks (Vitest hoists these before imports) ────────────────────────

// A single prisma double covers every model method the service touches. The
// `$transaction` impl is wired in beforeEach to run its callback with `prisma`
// itself standing in for the transactional client (tx), so calls like
// `tx.roadmapEnrollment.create` resolve against the same configurable mocks.
vi.mock("../database/db.js", () => ({
  prisma: {
    roadmap: { findFirst: vi.fn(), update: vi.fn() },
    roadmapEnrollment: {
      findFirst: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
    roadmapTopic: { findFirst: vi.fn() },
    roadmapTopicProgress: {
      upsert: vi.fn(),
      findMany: vi.fn(),
      update: vi.fn(),
    },
    $transaction: vi.fn(),
  },
}));

vi.mock("../module/recommendation/recommendation.service.js", () => ({
  invalidateRecommendations: vi.fn(),
}));

// ─── Fixtures & helpers ───────────────────────────────────────────────────────

const USER_ID = 7;
const ROADMAP_ID = 10;
const ENROLLMENT_ID = 100;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

// A Monday, so week math is easy to reason about.
const START_DATE = new Date("2026-01-05T00:00:00.000Z");

type PlanTopic = {
  slug: string;
  estimatedHours: number;
  sectionOrder: number;
  topicOrder: number;
};

function topic(
  slug: string,
  estimatedHours: number,
  sectionOrder = 0,
  topicOrder = 0,
): PlanTopic {
  return { slug, estimatedHours, sectionOrder, topicOrder };
}

const ENROLL_INPUT: EnrollInput = {
  hoursPerWeek: 10,
  preferredDays: ["MON", "WED", "FRI"],
  experienceLevel: "SOME",
  goal: "JOB_READY",
};

// Build a roadmap row (as returned by prisma.roadmap.findFirst with the
// sections/topics include) from a flat list of [slug, hours] pairs.
function makeRoadmap(topics: [string, number][]) {
  return {
    id: ROADMAP_ID,
    slug: "react-roadmap",
    isPublished: true,
    ownerUserId: null,
    sections: [
      {
        orderIndex: 0,
        topics: topics.map(([slug, estimatedHours], i) => ({
          slug,
          estimatedHours,
          orderIndex: i,
        })),
      },
    ],
  };
}

// Build an enrollment shaped like getEnrollmentForUser's payload, used by
// summarizeProgress and by updateTopicProgress's completion check.
function makeEnrollment(
  topics: { id: number; estimatedHours: number }[],
  progress: {
    topicId: number;
    status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "SKIPPED";
    bookmarked?: boolean;
  }[],
) {
  return {
    id: ENROLLMENT_ID,
    userId: USER_ID,
    roadmapId: ROADMAP_ID,
    roadmap: {
      sections: [
        {
          topics: topics.map((t) => ({
            id: t.id,
            estimatedHours: t.estimatedHours,
          })),
        },
      ],
    },
    topicProgress: progress.map((p) => ({
      topicId: p.topicId,
      status: p.status,
      bookmarked: p.bookmarked ?? false,
    })),
  } as any;
}

beforeEach(() => {
  vi.clearAllMocks();
  // Run the transaction callback with the prisma mock acting as `tx`.
  vi.mocked(prisma.$transaction).mockImplementation((cb: any) => cb(prisma));
  // invalidateRecommendations is fire-and-forget with .catch(); it must resolve.
  vi.mocked(invalidateRecommendations).mockResolvedValue(undefined);
});

// ══════════════════════════════════════════════════════════════════════════════
// buildWeeklyPlan — pure unit (NO DB)
// ══════════════════════════════════════════════════════════════════════════════

describe("buildWeeklyPlan", () => {
  it("evenly distributes topics that exactly fill the weekly budget", () => {
    const topics = [
      topic("a", 5, 0, 0),
      topic("b", 5, 0, 1),
      topic("c", 5, 0, 2),
      topic("d", 5, 0, 3),
    ];

    const { plan } = buildWeeklyPlan(topics, 10, START_DATE);

    expect(plan).toHaveLength(2);
    expect(plan[0].topicSlugs).toEqual(["a", "b"]);
    expect(plan[1].topicSlugs).toEqual(["c", "d"]);
    expect(plan[0].totalHours).toBe(10);
    expect(plan[1].totalHours).toBe(10);
    expect(plan[0].week).toBe(1);
    expect(plan[1].week).toBe(2);
  });

  it("overflows a topic to the next week when it exceeds the remaining budget", () => {
    const topics = [
      topic("a", 6, 0, 0),
      topic("b", 6, 0, 1),
      topic("c", 6, 0, 2),
    ];

    const { plan } = buildWeeklyPlan(topics, 10, START_DATE);

    // 6 + 6 > 10, so each 6h topic lands in its own week.
    expect(plan).toHaveLength(3);
    expect(plan.map((w) => w.topicSlugs)).toEqual([["a"], ["b"], ["c"]]);
  });

  it("keeps an oversized single topic in one week (budget guard)", () => {
    const { plan } = buildWeeklyPlan([topic("huge", 40, 0, 0)], 10, START_DATE);

    expect(plan).toHaveLength(1);
    expect(plan[0].topicSlugs).toEqual(["huge"]);
    expect(plan[0].totalHours).toBe(40);
  });

  it("sorts topics by sectionOrder then topicOrder before packing", () => {
    const topics = [
      topic("s1-t1", 2, 1, 0),
      topic("s0-t1", 2, 0, 1),
      topic("s0-t0", 2, 0, 0),
    ];

    const { plan } = buildWeeklyPlan(topics, 100, START_DATE);

    expect(plan).toHaveLength(1);
    expect(plan[0].topicSlugs).toEqual(["s0-t0", "s0-t1", "s1-t1"]);
  });

  describe("zero hours edge cases", () => {
    it("packs all zero-hour topics into a single week", () => {
      const topics = [
        topic("a", 0, 0, 0),
        topic("b", 0, 0, 1),
        topic("c", 0, 0, 2),
      ];

      const { plan } = buildWeeklyPlan(topics, 10, START_DATE);

      expect(plan).toHaveLength(1);
      expect(plan[0].topicSlugs).toEqual(["a", "b", "c"]);
      expect(plan[0].totalHours).toBe(0);
    });

    it("gives each positive-hour topic its own week when hoursPerWeek is 0", () => {
      const topics = [topic("a", 2, 0, 0), topic("b", 2, 0, 1)];

      const { plan } = buildWeeklyPlan(topics, 0, START_DATE);

      expect(plan).toHaveLength(2);
      expect(plan.map((w) => w.topicSlugs)).toEqual([["a"], ["b"]]);
    });
  });

  it("computes week start/end dates and targetEndDate from startDate", () => {
    const topics = [
      topic("a", 5, 0, 0),
      topic("b", 5, 0, 1),
      topic("c", 5, 0, 2),
    ];

    const { plan, targetEndDate } = buildWeeklyPlan(topics, 10, START_DATE);

    expect(plan).toHaveLength(2);
    // Week 1 begins on the start date; week 1 ends 6 days later.
    expect(plan[0].startDate).toBe(START_DATE.toISOString());
    expect(plan[0].endDate).toBe(
      new Date(START_DATE.getTime() + 6 * MS_PER_DAY).toISOString(),
    );
    // Week 2 begins exactly 7 days after the start date.
    expect(plan[1].startDate).toBe(
      new Date(START_DATE.getTime() + 7 * MS_PER_DAY).toISOString(),
    );
    // targetEndDate equals the final week's end date.
    expect(targetEndDate.toISOString()).toBe(plan[1].endDate);
  });

  it("returns an empty plan and a one-week fallback target for no topics", () => {
    const { plan, targetEndDate } = buildWeeklyPlan([], 10, START_DATE);

    expect(plan).toEqual([]);
    expect(targetEndDate.toISOString()).toBe(
      new Date(START_DATE.getTime() + 7 * MS_PER_DAY).toISOString(),
    );
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// summarizeProgress — pure unit (NO DB)
// ══════════════════════════════════════════════════════════════════════════════

describe("summarizeProgress", () => {
  it("reports 0% when no topics are completed", () => {
    const enrollment = makeEnrollment(
      [
        { id: 1, estimatedHours: 2 },
        { id: 2, estimatedHours: 2 },
      ],
      [{ topicId: 1, status: "NOT_STARTED" }],
    );

    const summary = summarizeProgress(enrollment);

    expect(summary.totalTopics).toBe(2);
    expect(summary.completedTopics).toBe(0);
    expect(summary.percentComplete).toBe(0);
    expect(summary.hoursDone).toBe(0);
    expect(summary.hoursTotal).toBe(4);
  });

  it("reports 50% when half the topics are completed", () => {
    const enrollment = makeEnrollment(
      [
        { id: 1, estimatedHours: 3 },
        { id: 2, estimatedHours: 3 },
        { id: 3, estimatedHours: 3 },
        { id: 4, estimatedHours: 3 },
      ],
      [
        { topicId: 1, status: "COMPLETED" },
        { topicId: 2, status: "COMPLETED" },
      ],
    );

    const summary = summarizeProgress(enrollment);

    expect(summary.completedTopics).toBe(2);
    expect(summary.totalTopics).toBe(4);
    expect(summary.percentComplete).toBe(50);
    expect(summary.hoursDone).toBe(6);
  });

  it("reports 100% when all topics are completed", () => {
    const enrollment = makeEnrollment(
      [
        { id: 1, estimatedHours: 4 },
        { id: 2, estimatedHours: 6 },
      ],
      [
        { topicId: 1, status: "COMPLETED" },
        { topicId: 2, status: "COMPLETED" },
      ],
    );

    const summary = summarizeProgress(enrollment);

    expect(summary.percentComplete).toBe(100);
    expect(summary.completedTopics).toBe(2);
    expect(summary.hoursDone).toBe(10);
    expect(summary.hoursTotal).toBe(10);
  });

  it("handles mixed statuses and excludes skipped topics from totals", () => {
    const enrollment = makeEnrollment(
      [
        { id: 1, estimatedHours: 2 },
        { id: 2, estimatedHours: 2 },
        { id: 3, estimatedHours: 2 },
        { id: 4, estimatedHours: 2 },
        { id: 5, estimatedHours: 2 },
      ],
      [
        { topicId: 1, status: "COMPLETED", bookmarked: true },
        { topicId: 2, status: "COMPLETED" },
        { topicId: 3, status: "IN_PROGRESS" },
        { topicId: 4, status: "SKIPPED" },
        { topicId: 5, status: "NOT_STARTED" },
      ],
    );

    const summary = summarizeProgress(enrollment);

    expect(summary.completedTopics).toBe(2);
    expect(summary.inProgressTopics).toBe(1);
    expect(summary.bookmarkedTopics).toBe(1);
    // Skipped topic is removed from the denominator and from total hours.
    expect(summary.totalTopics).toBe(4);
    expect(summary.hoursTotal).toBe(8);
    expect(summary.hoursDone).toBe(4);
    expect(summary.percentComplete).toBe(50);
  });

  it("returns a zeroed summary for an empty topic list", () => {
    const enrollment = makeEnrollment([], []);

    const summary = summarizeProgress(enrollment);

    expect(summary.totalTopics).toBe(0);
    expect(summary.completedTopics).toBe(0);
    expect(summary.percentComplete).toBe(0);
    expect(summary.hoursTotal).toBe(0);
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// enrollUser — Prisma mock
// ══════════════════════════════════════════════════════════════════════════════

describe("enrollUser", () => {
  it("throws 404 when the roadmap is not found or not visible", async () => {
    vi.mocked(prisma.roadmap.findFirst).mockResolvedValue(null);

    await expect(
      enrollUser({
        userId: USER_ID,
        roadmapSlug: "missing",
        input: ENROLL_INPUT,
      }),
    ).rejects.toMatchObject({ message: "Roadmap not found", status: 404 });

    expect(prisma.$transaction).not.toHaveBeenCalled();
  });

  it("guards against duplicate enrollment with a 409", async () => {
    vi.mocked(prisma.roadmap.findFirst).mockResolvedValue(
      makeRoadmap([["a", 5]]) as any,
    );
    vi.mocked(prisma.roadmapEnrollment.findUnique).mockResolvedValue({
      id: 999,
    } as any);

    await expect(
      enrollUser({
        userId: USER_ID,
        roadmapSlug: "react-roadmap",
        input: ENROLL_INPUT,
      }),
    ).rejects.toMatchObject({
      message: "Already enrolled in this roadmap",
      status: 409,
    });

    expect(prisma.roadmapEnrollment.create).not.toHaveBeenCalled();
    expect(prisma.roadmap.update).not.toHaveBeenCalled();
  });

  it("generates a weekly plan, creates the enrollment, and bumps enrolledCount", async () => {
    vi.mocked(prisma.roadmap.findFirst).mockResolvedValue(
      makeRoadmap([
        ["a", 5],
        ["b", 5],
      ]) as any,
    );
    vi.mocked(prisma.roadmapEnrollment.findUnique).mockResolvedValue(null);
    const createdEnrollment = {
      id: ENROLLMENT_ID,
      roadmap: {},
      topicProgress: [],
    };
    vi.mocked(prisma.roadmapEnrollment.create).mockResolvedValue(
      createdEnrollment as any,
    );
    vi.mocked(prisma.roadmap.update).mockResolvedValue({} as any);

    const result = await enrollUser({
      userId: USER_ID,
      roadmapSlug: "react-roadmap",
      input: ENROLL_INPUT,
    });

    // Weekly plan was built from the roadmap topics (both fit in one 10h week).
    expect(result.weeklyPlan).toHaveLength(1);
    expect(result.weeklyPlan[0].topicSlugs).toEqual(["a", "b"]);
    expect(result.enrollment).toBe(createdEnrollment);

    // Enrollment persisted with the user/roadmap link and the generated plan.
    const createArg = vi.mocked(prisma.roadmapEnrollment.create).mock
      .calls[0][0];
    expect(createArg.data).toMatchObject({
      userId: USER_ID,
      roadmapId: ROADMAP_ID,
      hoursPerWeek: ENROLL_INPUT.hoursPerWeek,
      goal: ENROLL_INPUT.goal,
      experienceLevel: ENROLL_INPUT.experienceLevel,
    });
    expect((createArg.data as any).weeklyPlan).toHaveLength(1);

    // enrolledCount incremented for the roadmap.
    expect(prisma.roadmap.update).toHaveBeenCalledWith({
      where: { id: ROADMAP_ID },
      data: { enrolledCount: { increment: 1 } },
    });
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// updateTopicProgress — Prisma mock
// ══════════════════════════════════════════════════════════════════════════════

describe("updateTopicProgress", () => {
  // Wire the enrollment lookup + topic lookup that every happy path needs.
  function primeLookups() {
    vi.mocked(prisma.roadmapEnrollment.findFirst).mockResolvedValueOnce({
      id: ENROLLMENT_ID,
      roadmapId: ROADMAP_ID,
    } as any);
    vi.mocked(prisma.roadmapTopic.findFirst).mockResolvedValue({
      id: 5,
    } as any);
  }

  it("throws 404 when the enrollment does not belong to the user", async () => {
    vi.mocked(prisma.roadmapEnrollment.findFirst).mockResolvedValue(null);

    await expect(
      updateTopicProgress({
        userId: USER_ID,
        enrollmentId: ENROLLMENT_ID,
        topicId: 5,
        status: "IN_PROGRESS",
      }),
    ).rejects.toMatchObject({ message: "Enrollment not found", status: 404 });
  });

  it("throws 400 when the topic is not part of the enrolled roadmap", async () => {
    vi.mocked(prisma.roadmapEnrollment.findFirst).mockResolvedValue({
      id: ENROLLMENT_ID,
      roadmapId: ROADMAP_ID,
    } as any);
    vi.mocked(prisma.roadmapTopic.findFirst).mockResolvedValue(null);

    await expect(
      updateTopicProgress({
        userId: USER_ID,
        enrollmentId: ENROLLMENT_ID,
        topicId: 999,
        status: "IN_PROGRESS",
      }),
    ).rejects.toMatchObject({
      message: "Topic not in this roadmap",
      status: 400,
    });
  });

  it("transitions a topic to IN_PROGRESS and clears completedAt", async () => {
    primeLookups();
    vi.mocked(prisma.roadmapTopicProgress.upsert).mockResolvedValue({
      id: 1,
      status: "IN_PROGRESS",
    } as any);

    const result = await updateTopicProgress({
      userId: USER_ID,
      enrollmentId: ENROLLMENT_ID,
      topicId: 5,
      status: "IN_PROGRESS",
    });

    const upsertArg = vi.mocked(prisma.roadmapTopicProgress.upsert).mock
      .calls[0][0];
    expect(upsertArg.where).toEqual({
      enrollmentId_topicId: { enrollmentId: ENROLLMENT_ID, topicId: 5 },
    });
    expect((upsertArg.update as any).status).toBe("IN_PROGRESS");
    expect((upsertArg.update as any).completedAt).toBeNull();

    // Non-completing transition: no streak recompute, no completion check.
    expect(prisma.roadmapTopicProgress.findMany).not.toHaveBeenCalled();
    expect(result.roadmapCompleted).toBe(false);
    expect(invalidateRecommendations).toHaveBeenCalledWith(USER_ID);
  });

  it("toggles a bookmark without touching status", async () => {
    primeLookups();
    vi.mocked(prisma.roadmapTopicProgress.upsert).mockResolvedValue({
      id: 1,
      bookmarked: true,
    } as any);

    const result = await updateTopicProgress({
      userId: USER_ID,
      enrollmentId: ENROLLMENT_ID,
      topicId: 5,
      bookmarked: true,
    });

    const upsertArg = vi.mocked(prisma.roadmapTopicProgress.upsert).mock
      .calls[0][0];
    expect((upsertArg.update as any).bookmarked).toBe(true);
    expect((upsertArg.create as any).bookmarked).toBe(true);
    expect((upsertArg.update as any).status).toBeUndefined();
    expect(result.roadmapCompleted).toBe(false);
  });

  it("sets completedAt, recomputes the streak, and detects 100% completion", async () => {
    // 1st findFirst: ownership lookup. 2nd findFirst: getEnrollmentForUser (all done).
    vi.mocked(prisma.roadmapEnrollment.findFirst)
      .mockResolvedValueOnce({
        id: ENROLLMENT_ID,
        roadmapId: ROADMAP_ID,
      } as any)
      .mockResolvedValueOnce(
        makeEnrollment(
          [{ id: 5, estimatedHours: 2 }],
          [{ topicId: 5, status: "COMPLETED" }],
        ),
      );
    vi.mocked(prisma.roadmapTopic.findFirst).mockResolvedValue({
      id: 5,
    } as any);
    vi.mocked(prisma.roadmapTopicProgress.upsert).mockResolvedValue({
      id: 1,
      status: "COMPLETED",
    } as any);
    vi.mocked(prisma.roadmapTopicProgress.findMany).mockResolvedValue([
      { completedAt: new Date() },
    ] as any);
    vi.mocked(prisma.roadmapEnrollment.update).mockResolvedValue({} as any);

    const result = await updateTopicProgress({
      userId: USER_ID,
      enrollmentId: ENROLLMENT_ID,
      topicId: 5,
      status: "COMPLETED",
    });

    const upsertArg = vi.mocked(prisma.roadmapTopicProgress.upsert).mock
      .calls[0][0];
    expect((upsertArg.update as any).status).toBe("COMPLETED");
    expect((upsertArg.update as any).completedAt).toBeInstanceOf(Date);

    // Streak recompute ran for the completion.
    expect(prisma.roadmapTopicProgress.findMany).toHaveBeenCalled();
    expect(prisma.roadmapEnrollment.update).toHaveBeenCalled();

    // All topics done → roadmap flagged complete.
    expect(result.roadmapCompleted).toBe(true);
  });

  it("does not flag completion when topics remain unfinished", async () => {
    vi.mocked(prisma.roadmapEnrollment.findFirst)
      .mockResolvedValueOnce({
        id: ENROLLMENT_ID,
        roadmapId: ROADMAP_ID,
      } as any)
      .mockResolvedValueOnce(
        makeEnrollment(
          [
            { id: 5, estimatedHours: 2 },
            { id: 6, estimatedHours: 2 },
          ],
          [{ topicId: 5, status: "COMPLETED" }],
        ),
      );
    vi.mocked(prisma.roadmapTopic.findFirst).mockResolvedValue({
      id: 5,
    } as any);
    vi.mocked(prisma.roadmapTopicProgress.upsert).mockResolvedValue({
      id: 1,
      status: "COMPLETED",
    } as any);
    vi.mocked(prisma.roadmapTopicProgress.findMany).mockResolvedValue([
      { completedAt: new Date() },
    ] as any);
    vi.mocked(prisma.roadmapEnrollment.update).mockResolvedValue({} as any);

    const result = await updateTopicProgress({
      userId: USER_ID,
      enrollmentId: ENROLLMENT_ID,
      topicId: 5,
      status: "COMPLETED",
    });

    expect(result.roadmapCompleted).toBe(false);
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// recomputePace — Prisma mock
// ══════════════════════════════════════════════════════════════════════════════

describe("recomputePace", () => {
  function primeEnrollment(topics: [string, number][]) {
    vi.mocked(prisma.roadmapEnrollment.findFirst).mockResolvedValue({
      id: ENROLLMENT_ID,
      userId: USER_ID,
      roadmapId: ROADMAP_ID,
      startDate: START_DATE,
      roadmap: makeRoadmap(topics),
    } as any);
    (vi.mocked(prisma.roadmapEnrollment.update) as any).mockImplementation(
      async (args: any) => args,
    );
  }

  it("throws 404 when the enrollment is not found", async () => {
    vi.mocked(prisma.roadmapEnrollment.findFirst).mockResolvedValue(null);

    await expect(
      recomputePace({
        userId: USER_ID,
        enrollmentId: ENROLLMENT_ID,
        hoursPerWeek: 10,
      }),
    ).rejects.toMatchObject({ message: "Enrollment not found", status: 404 });
  });

  it("produces fewer weeks when hoursPerWeek increases", async () => {
    primeEnrollment([
      ["a", 5],
      ["b", 5],
      ["c", 5],
      ["d", 5],
    ]);

    await recomputePace({
      userId: USER_ID,
      enrollmentId: ENROLLMENT_ID,
      hoursPerWeek: 20,
    });

    const updateArg = vi.mocked(prisma.roadmapEnrollment.update).mock
      .calls[0][0];
    expect(updateArg.where).toEqual({ id: ENROLLMENT_ID });
    expect((updateArg.data as any).hoursPerWeek).toBe(20);
    // 20h budget fits all four 5h topics in a single week.
    expect((updateArg.data as any).weeklyPlan).toHaveLength(1);
    expect((updateArg.data as any).targetEndDate).toBeInstanceOf(Date);
  });

  it("produces more weeks when hoursPerWeek decreases", async () => {
    primeEnrollment([
      ["a", 5],
      ["b", 5],
      ["c", 5],
      ["d", 5],
    ]);

    await recomputePace({
      userId: USER_ID,
      enrollmentId: ENROLLMENT_ID,
      hoursPerWeek: 5,
    });

    const updateArg = vi.mocked(prisma.roadmapEnrollment.update).mock
      .calls[0][0];
    // A 5h budget forces one topic per week → four weeks.
    expect((updateArg.data as any).weeklyPlan).toHaveLength(4);
  });

  it("rebuilds the plan from all topics, including already-completed ones", async () => {
    // recomputePace ignores progress; completed topics stay in the new plan.
    primeEnrollment([
      ["done-1", 4],
      ["done-2", 4],
      ["todo-1", 4],
    ]);

    await recomputePace({
      userId: USER_ID,
      enrollmentId: ENROLLMENT_ID,
      hoursPerWeek: 100,
    });

    const updateArg = vi.mocked(prisma.roadmapEnrollment.update).mock
      .calls[0][0];
    const plan = (updateArg.data as any).weeklyPlan as {
      topicSlugs: string[];
    }[];
    const allSlugs = plan.flatMap((w) => w.topicSlugs);
    expect(allSlugs).toEqual(["done-1", "done-2", "todo-1"]);
  });
});
