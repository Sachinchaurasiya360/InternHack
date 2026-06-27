import { prisma } from "../../database/db.js";

export interface WeakArea {
  type: "dsa" | "aptitude" | "skill" | "ats" | "roadmap";
  topic: string;
  topicSlug?: string;
  reason: string;
  score?: number;
}

export interface RecommendationResult {
  weakAreas: WeakArea[];
  lastRefreshedAt: Date;
}

const REFRESH_COOLDOWN_MINUTES = 30;

export async function getRecommendations(
  userId: number,
): Promise<RecommendationResult> {
  // Return cached result if fresh enough
  const cached = await prisma.userRecommendation.findUnique({
    where: { userId },
  });

  if (cached) {
    const ageMinutes =
      (Date.now() - new Date(cached.lastRefreshedAt).getTime()) / 1000 / 60;
    if (ageMinutes < REFRESH_COOLDOWN_MINUTES) {
      return {
        weakAreas: cached.weakAreas as unknown as WeakArea[],
        lastRefreshedAt: cached.lastRefreshedAt,
      };
    }
  }

  // Compute fresh recommendations
  const weakAreas = await computeWeakAreas(userId);

  // Upsert cache
  const updated = await prisma.userRecommendation.upsert({
    where: { userId },
    update: { weakAreas: weakAreas as any, lastRefreshedAt: new Date() },
    create: { userId, weakAreas: weakAreas as any },
  });

  return {
    weakAreas,
    lastRefreshedAt: updated.lastRefreshedAt,
  };
}

export async function invalidateRecommendations(userId: number): Promise<void> {
  await prisma.userRecommendation.updateMany({
    where: { userId },
    data: { lastRefreshedAt: new Date(0) }, // force refresh on next request
  });
}

async function computeWeakAreas(userId: number): Promise<WeakArea[]> {
  const weakAreas: WeakArea[] = [];

  await Promise.all([
    analyzeDsa(userId, weakAreas),
    analyzeAptitude(userId, weakAreas),
    analyzeSkillTests(userId, weakAreas),
    analyzeRoadmap(userId, weakAreas),
  ]);

  return weakAreas;
}

// ── DSA: topics where pass rate < 50% ─────────────────────────────────────
async function analyzeDsa(userId: number, out: WeakArea[]): Promise<void> {
  const submissions = await prisma.dsaSubmission.findMany({
    where: { studentId: userId },
    include: { problem: { select: { tags: true, title: true } } },
  });

  if (submissions.length === 0) return;

  // Aggregate pass rate per tag
  const tagStats: Record<string, { passed: number; total: number }> = {};

  for (const sub of submissions) {
    for (const tag of sub.problem.tags) {
      if (!tagStats[tag]) tagStats[tag] = { passed: 0, total: 0 };
      tagStats[tag].total += sub.total;
      tagStats[tag].passed += sub.passed;
    }
  }

  for (const [tag, stats] of Object.entries(tagStats)) {
    if (stats.total === 0) continue;
    const rate = stats.passed / stats.total;
    if (rate < 0.5) {
      out.push({
        type: "dsa",
        topic: tag,
        reason: `Low pass rate (${Math.round(rate * 100)}%) across submissions`,
        score: Math.round(rate * 100),
      });
    }
  }
}

// ── Aptitude: categories where correct rate < 50% ─────────────────────────
async function analyzeAptitude(userId: number, out: WeakArea[]): Promise<void> {
  const progress = await prisma.studentAptitudeProgress.findMany({
    where: { studentId: userId },
    include: {
      question: {
        include: {
          topic: { include: { category: true } },
        },
      },
    },
  });

  if (progress.length === 0) return;

  const categoryStats: Record<string, { correct: number; total: number }> = {};

  for (const p of progress) {
    const categoryName = p.question.topic.category.name;
    if (!categoryStats[categoryName])
      categoryStats[categoryName] = { correct: 0, total: 0 };
    categoryStats[categoryName].total += 1;
    if (p.correct) categoryStats[categoryName].correct += 1;
  }

  for (const [category, stats] of Object.entries(categoryStats)) {
    if (stats.total < 3) continue; // not enough data
    const rate = stats.correct / stats.total;
    if (rate < 0.5) {
      out.push({
        type: "aptitude",
        topic: category,
        reason: `Only ${Math.round(rate * 100)}% correct in aptitude questions`,
        score: Math.round(rate * 100),
      });
    }
  }
}

// ── Skill tests: failed attempts ───────────────────────────────────────────
async function analyzeSkillTests(
  userId: number,
  out: WeakArea[],
): Promise<void> {
  const attempts = await prisma.skillTestAttempt.findMany({
    where: { studentId: userId },
    include: { test: { select: { skillName: true, passThreshold: true } } },
    orderBy: { createdAt: "desc" },
  });

  if (attempts.length === 0) return;

  // Latest attempt per skill
  const seen = new Set<string>();
  for (const attempt of attempts) {
    const skill = attempt.test.skillName;
    if (seen.has(skill)) continue;
    seen.add(skill);

    if (!attempt.passed) {
      out.push({
        type: "skill",
        topic: skill,
        reason: `Failed skill test (score: ${attempt.score}%, threshold: ${attempt.test.passThreshold}%)`,
        score: attempt.score,
      });
    }
  }
}

// ── Roadmap: topics stuck in IN_PROGRESS or SKIPPED ───────────────────────
async function analyzeRoadmap(userId: number, out: WeakArea[]): Promise<void> {
  const stuckTopics = await prisma.roadmapTopicProgress.findMany({
    where: {
      enrollment: { userId },
      status: { in: ["SKIPPED", "IN_PROGRESS"] },
    },
    include: {
      topic: { select: { title: true, slug: true } },
    },
    take: 5,
    orderBy: { updatedAt: "asc" }, // oldest stuck topics first
  });

  for (const p of stuckTopics) {
    out.push({
      type: "roadmap",
      topic: p.topic.title,
      topicSlug: p.topic.slug,
      reason:
        p.status === "SKIPPED"
          ? "Skipped in your roadmap"
          : "Stuck in progress for a while",
    });
  }
}
