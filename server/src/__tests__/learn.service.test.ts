import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => {
  return {
    generateText: vi.fn(),
    prisma: {
      userInterviewQuestionState: {
        findMany: vi.fn(),
      },
      studentDsaProgress: {
        count: vi.fn(),
      },
      studentSqlProgress: {
        count: vi.fn(),
      },
      studentAptitudeProgress: {
        count: vi.fn(),
      },
    },
  };
});

vi.mock("../database/db.js", () => ({
  prisma: mocks.prisma,
}));

vi.mock("../lib/providers/gemini.provider.js", () => {
  return {
    GeminiProvider: class {
      generateText = mocks.generateText;
    },
  };
});

const { LearnService } = await import("../module/learn/learn.service.js");

describe("LearnService - calculateReadinessReport", () => {
  const service = new LearnService();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calculates readiness report successfully via Gemini", async () => {
    // Mock DB progress stats
    mocks.prisma.userInterviewQuestionState.findMany.mockResolvedValue([
      { questionId: "lesson-1", isCompleted: true },
      { questionId: "lesson-2", isCompleted: true },
    ] as any);
    mocks.prisma.studentDsaProgress.count.mockResolvedValue(5);
    mocks.prisma.studentSqlProgress.count.mockResolvedValue(3);
    mocks.prisma.studentAptitudeProgress.count.mockResolvedValue(10);

    // Mock Gemini Provider response
    const mockReport = {
      overallReadiness: 75,
      estimatedTimeToReady: "2 weeks",
      todaysPriority: "Mock priority",
      strongAreas: [{ topic: "JS Basics", score: 85 }],
      gapAreas: [{ topic: "System Design", score: 40 }],
      mockInterviewQuestion: { title: "Title", description: "Desc" },
    };

    mocks.generateText.mockResolvedValue({
      text: JSON.stringify(mockReport),
    });

    const result = await service.calculateReadinessReport({
      userId: 42,
      targetRole: "Frontend",
      companyTier: "Startup",
      availableTime: "1 month",
    });

    expect(result).toEqual(mockReport);
    expect(mocks.prisma.userInterviewQuestionState.findMany).toHaveBeenCalledWith({
      where: { userId: 42, isCompleted: true },
      select: { questionId: true },
    });
    expect(mocks.prisma.studentDsaProgress.count).toHaveBeenCalledWith({
      where: { studentId: 42, solved: true },
    });
    expect(mocks.generateText).toHaveBeenCalled();
  });

  it("falls back to heuristic calculations if Gemini fails", async () => {
    // Mock DB progress stats
    mocks.prisma.userInterviewQuestionState.findMany.mockResolvedValue([
      { questionId: "lesson-1", isCompleted: true },
      { questionId: "lesson-2", isCompleted: true },
    ] as any);
    mocks.prisma.studentDsaProgress.count.mockResolvedValue(5);
    mocks.prisma.studentSqlProgress.count.mockResolvedValue(3);
    mocks.prisma.studentAptitudeProgress.count.mockResolvedValue(10);

    // Mock Gemini failure
    mocks.generateText.mockRejectedValue(new Error("API Overloaded"));

    const result = await service.calculateReadinessReport({
      userId: 42,
      targetRole: "Frontend",
      companyTier: "Startup",
      availableTime: "1 month",
    });

    expect(result.overallReadiness).toBe(Math.min(100, Math.max(10, 2 * 10 + 5 * 5))); // completedCount * 10 + dsaCount * 5 = 20 + 25 = 45
    expect(result.strongAreas).toBeInstanceOf(Array);
    expect(result.gapAreas).toBeInstanceOf(Array);
    expect(result.mockInterviewQuestion).toBeDefined();
  });
});
