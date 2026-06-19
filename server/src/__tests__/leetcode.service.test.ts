import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => {
  const prisma = {
    dsaProblem: {
      findMany: vi.fn(),
    },
    studentDsaProgress: {
      findMany: vi.fn(),
      createMany: vi.fn(),
      update: vi.fn(),
    },
    $transaction: vi.fn(),
  };

  prisma.$transaction.mockImplementation((arg) =>
    typeof arg === "function" ? arg(prisma) : Promise.all(arg),
  );

  return { prisma };
});

vi.mock("../database/db.js", () => ({
  prisma: mocks.prisma,
}));

const { syncLeetCodeSolvedProblems } = await import(
  "../module/dsa/leetcode.service.js"
);

describe("syncLeetCodeSolvedProblems", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch = vi.fn();
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("should sync and preserve original timestamps when no progress exists", async () => {
    const submissions = [
      { title: "Two Sum", titleSlug: "two-sum", timestamp: "1672531200" }, // 2023-01-01T00:00:00.000Z
      { title: "Add Two Numbers", titleSlug: "add-two-numbers", timestamp: "1672617600" }, // 2023-01-02T00:00:00.000Z
    ];

    vi.mocked(global.fetch).mockResolvedValue({
      json: async () => ({
        data: {
          matchedUser: {
            recentAcSubmissionList: submissions,
          },
        },
      }),
    } as any);

    mocks.prisma.dsaProblem.findMany.mockResolvedValue([
      { id: 10, leetcodeSlug: "two-sum" },
      { id: 20, leetcodeSlug: "add-two-numbers" },
    ]);

    mocks.prisma.studentDsaProgress.findMany.mockResolvedValue([]);

    const result = await syncLeetCodeSolvedProblems(1, "testuser");

    expect(result).toEqual({ syncedCount: 2, totalFetched: 2 });
    expect(mocks.prisma.studentDsaProgress.createMany).toHaveBeenCalledWith({
      data: [
        {
          studentId: 1,
          problemId: 10,
          solved: true,
          solvedAt: new Date(1672531200 * 1000),
          source: "LEETCODE",
        },
        {
          studentId: 1,
          problemId: 20,
          solved: true,
          solvedAt: new Date(1672617600 * 1000),
          source: "LEETCODE",
        },
      ],
      skipDuplicates: true,
    });
    expect(mocks.prisma.studentDsaProgress.update).not.toHaveBeenCalled();
  });

  it("should select the earliest timestamp if there are multiple submissions for the same problem", async () => {
    const submissions = [
      { title: "Two Sum", titleSlug: "two-sum", timestamp: "1672617600" }, // Later solve: 2023-01-02
      { title: "Two Sum", titleSlug: "two-sum", timestamp: "1672531200" }, // Earliest solve: 2023-01-01
    ];

    vi.mocked(global.fetch).mockResolvedValue({
      json: async () => ({
        data: {
          matchedUser: {
            recentAcSubmissionList: submissions,
          },
        },
      }),
    } as any);

    mocks.prisma.dsaProblem.findMany.mockResolvedValue([
      { id: 10, leetcodeSlug: "two-sum" },
    ]);

    mocks.prisma.studentDsaProgress.findMany.mockResolvedValue([]);

    await syncLeetCodeSolvedProblems(1, "testuser");

    expect(mocks.prisma.studentDsaProgress.createMany).toHaveBeenCalledWith({
      data: [
        {
          studentId: 1,
          problemId: 10,
          solved: true,
          solvedAt: new Date(1672531200 * 1000), // Should pick earliest
          source: "LEETCODE",
        },
      ],
      skipDuplicates: true,
    });
  });

  it("should update existing records that are NOT solved, and keep their original solve dates", async () => {
    const submissions = [
      { title: "Two Sum", titleSlug: "two-sum", timestamp: "1672531200" },
    ];

    vi.mocked(global.fetch).mockResolvedValue({
      json: async () => ({
        data: {
          matchedUser: {
            recentAcSubmissionList: submissions,
          },
        },
      }),
    } as any);

    mocks.prisma.dsaProblem.findMany.mockResolvedValue([
      { id: 10, leetcodeSlug: "two-sum" },
    ]);

    mocks.prisma.studentDsaProgress.findMany.mockResolvedValue([
      { problemId: 10, solved: false, solvedAt: new Date() },
    ]);

    await syncLeetCodeSolvedProblems(1, "testuser");

    expect(mocks.prisma.studentDsaProgress.createMany).not.toHaveBeenCalled();
    expect(mocks.prisma.studentDsaProgress.update).toHaveBeenCalledWith({
      where: {
        studentId_problemId: {
          studentId: 1,
          problemId: 10,
        },
      },
      data: {
        solved: true,
        solvedAt: new Date(1672531200 * 1000),
        source: "LEETCODE",
      },
    });
  });

  it("should NOT update existing records that are already solved (idempotency)", async () => {
    const submissions = [
      { title: "Two Sum", titleSlug: "two-sum", timestamp: "1672531200" },
    ];

    vi.mocked(global.fetch).mockResolvedValue({
      json: async () => ({
        data: {
          matchedUser: {
            recentAcSubmissionList: submissions,
          },
        },
      }),
    } as any);

    mocks.prisma.dsaProblem.findMany.mockResolvedValue([
      { id: 10, leetcodeSlug: "two-sum" },
    ]);

    const existingSolvedAt = new Date("2022-12-15T00:00:00.000Z");
    mocks.prisma.studentDsaProgress.findMany.mockResolvedValue([
      { problemId: 10, solved: true, solvedAt: existingSolvedAt },
    ]);

    const result = await syncLeetCodeSolvedProblems(1, "testuser");

    expect(result).toEqual({ syncedCount: 1, totalFetched: 1 });
    expect(mocks.prisma.studentDsaProgress.createMany).not.toHaveBeenCalled();
    expect(mocks.prisma.studentDsaProgress.update).not.toHaveBeenCalled();
  });

  it("should handle missing or invalid timestamps safely using current date fallback", async () => {
    const submissions = [
      { title: "Two Sum", titleSlug: "two-sum", timestamp: "" },
      { title: "Add Two Numbers", titleSlug: "add-two-numbers", timestamp: "invalid_ts" },
    ];

    vi.mocked(global.fetch).mockResolvedValue({
      json: async () => ({
        data: {
          matchedUser: {
            recentAcSubmissionList: submissions,
          },
        },
      }),
    } as any);

    mocks.prisma.dsaProblem.findMany.mockResolvedValue([
      { id: 10, leetcodeSlug: "two-sum" },
      { id: 20, leetcodeSlug: "add-two-numbers" },
    ]);

    mocks.prisma.studentDsaProgress.findMany.mockResolvedValue([]);

    const beforeSync = Date.now();
    await syncLeetCodeSolvedProblems(1, "testuser");

    expect(mocks.prisma.studentDsaProgress.createMany).toHaveBeenCalled();
    const callArgs = mocks.prisma.studentDsaProgress.createMany.mock.calls[0][0].data;

    expect(callArgs[0].solvedAt.getTime()).toBeGreaterThanOrEqual(beforeSync);
    expect(callArgs[1].solvedAt.getTime()).toBeGreaterThanOrEqual(beforeSync);
  });
});
