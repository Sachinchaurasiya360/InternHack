import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => {
  const prisma = {
    user: {
      findUnique: vi.fn(),
      update: vi.fn(),
    },
  };

  return { prisma };
});

vi.mock("../database/db.js", () => ({
  prisma: mocks.prisma,
}));

const { UserService } = await import("../module/user/user.service.js");

describe("UserService.calculateOssTier", () => {
  const service = new UserService();
  const userId = 1;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns null when user does not exist", async () => {
    mocks.prisma.user.findUnique.mockResolvedValue(null);

    const result = await service.calculateOssTier(userId);

    expect(result).toBeNull();
    expect(mocks.prisma.user.update).not.toHaveBeenCalled();
  });

  it("returns Ambassador when user has verified_ambassador badge", async () => {
    mocks.prisma.user.findUnique.mockResolvedValue({
      repoRequests: [],
      firstPrProgress: null,
      guideFeedbacks: [],
      studentBadges: [{ badge: { slug: "verified_ambassador" } }],
    });

    const result = await service.calculateOssTier(userId);

    expect(result).toBe("Ambassador");
    expect(mocks.prisma.user.update).toHaveBeenCalledWith({
      where: { id: userId },
      data: { ossTier: "Ambassador" },
    });
  });

  it("returns OSS Leader when user has program badge and >= 10 approved repos", async () => {
    mocks.prisma.user.findUnique.mockResolvedValue({
      repoRequests: Array.from({ length: 10 }, (_, i) => ({ id: i })),
      firstPrProgress: null,
      guideFeedbacks: [],
      studentBadges: [{ badge: { slug: "gsoc_participant" } }],
    });

    const result = await service.calculateOssTier(userId);

    expect(result).toBe("OSS Leader");
  });

  it("returns OSS Leader when user has gsoc badge and >= 10 approved repos", async () => {
    mocks.prisma.user.findUnique.mockResolvedValue({
      repoRequests: Array.from({ length: 10 }, (_, i) => ({ id: i })),
      firstPrProgress: null,
      guideFeedbacks: [],
      studentBadges: [{ badge: { slug: "gsoc" } }],
    });

    const result = await service.calculateOssTier(userId);

    expect(result).toBe("OSS Leader");
  });

  it("does not return OSS Leader when user has program badge but < 10 repos", async () => {
    mocks.prisma.user.findUnique.mockResolvedValue({
      repoRequests: Array.from({ length: 9 }, (_, i) => ({ id: i })),
      firstPrProgress: null,
      guideFeedbacks: [],
      studentBadges: [{ badge: { slug: "gsoc_participant" } }],
    });

    const result = await service.calculateOssTier(userId);

    expect(result).not.toBe("OSS Leader");
  });

  it("returns Active Contributor when >= 5 approved repos and >= 3 distinct guides", async () => {
    mocks.prisma.user.findUnique.mockResolvedValue({
      repoRequests: Array.from({ length: 5 }, (_, i) => ({ id: i })),
      firstPrProgress: null,
      guideFeedbacks: [
        { guideId: "guide-a" },
        { guideId: "guide-b" },
        { guideId: "guide-c" },
      ],
      studentBadges: [],
    });

    const result = await service.calculateOssTier(userId);

    expect(result).toBe("Active Contributor");
  });

  it("does not return Active Contributor when >= 5 repos but < 3 guides", async () => {
    mocks.prisma.user.findUnique.mockResolvedValue({
      repoRequests: Array.from({ length: 5 }, (_, i) => ({ id: i })),
      firstPrProgress: null,
      guideFeedbacks: [
        { guideId: "guide-a" },
        { guideId: "guide-b" },
      ],
      studentBadges: [],
    });

    const result = await service.calculateOssTier(userId);

    expect(result).not.toBe("Active Contributor");
  });

  it("returns Contributor when first PR roadmap completed and >= 1 approved repo", async () => {
    mocks.prisma.user.findUnique.mockResolvedValue({
      repoRequests: [{ id: 1 }],
      firstPrProgress: { completedStepIds: Array.from({ length: 7 }, (_, i) => `${i}`) },
      guideFeedbacks: [],
      studentBadges: [],
    });

    const result = await service.calculateOssTier(userId);

    expect(result).toBe("Contributor");
  });

  it("does not return Contributor when roadmap incomplete despite having a repo", async () => {
    mocks.prisma.user.findUnique.mockResolvedValue({
      repoRequests: [{ id: 1 }],
      firstPrProgress: { completedStepIds: Array.from({ length: 6 }, (_, i) => `${i}`) },
      guideFeedbacks: [],
      studentBadges: [],
    });

    const result = await service.calculateOssTier(userId);

    expect(result).not.toBe("Contributor");
  });

  it("does not return Contributor when roadmap complete but 0 repos", async () => {
    mocks.prisma.user.findUnique.mockResolvedValue({
      repoRequests: [],
      firstPrProgress: { completedStepIds: Array.from({ length: 7 }, (_, i) => `${i}`) },
      guideFeedbacks: [],
      studentBadges: [],
    });

    const result = await service.calculateOssTier(userId);

    expect(result).not.toBe("Contributor");
  });

  it("returns First Steps when >= 1 distinct guide completed", async () => {
    mocks.prisma.user.findUnique.mockResolvedValue({
      repoRequests: [],
      firstPrProgress: null,
      guideFeedbacks: [{ guideId: "guide-a" }],
      studentBadges: [],
    });

    const result = await service.calculateOssTier(userId);

    expect(result).toBe("First Steps");
  });

  it("counts distinct guideIds — duplicate guideId does not inflate count", async () => {
    mocks.prisma.user.findUnique.mockResolvedValue({
      repoRequests: Array.from({ length: 5 }, (_, i) => ({ id: i })),
      firstPrProgress: null,
      guideFeedbacks: [
        { guideId: "guide-a" },
        { guideId: "guide-a" },
        { guideId: "guide-a" },
      ],
      studentBadges: [],
    });

    const result = await service.calculateOssTier(userId);

    expect(result).toBe("First Steps");
    expect(result).not.toBe("Active Contributor");
  });

  it("returns null when no conditions are met", async () => {
    mocks.prisma.user.findUnique.mockResolvedValue({
      repoRequests: [],
      firstPrProgress: null,
      guideFeedbacks: [],
      studentBadges: [],
    });

    const result = await service.calculateOssTier(userId);

    expect(result).toBeNull();
    expect(mocks.prisma.user.update).toHaveBeenCalledWith({
      where: { id: userId },
      data: { ossTier: null },
    });
  });

  it("selects only badge slugs from studentBadges", async () => {
    mocks.prisma.user.findUnique.mockResolvedValue({
      repoRequests: [],
      firstPrProgress: null,
      guideFeedbacks: [],
      studentBadges: [{ badge: { slug: "verified_ambassador" } }],
    });

    await service.calculateOssTier(userId);

    const selectArg = mocks.prisma.user.findUnique.mock.calls[0][0];
    expect(selectArg.select.studentBadges.select.badge.select).toEqual({ slug: true });
  });

  it("handles case-insensitive program badge matching", async () => {
    mocks.prisma.user.findUnique.mockResolvedValue({
      repoRequests: Array.from({ length: 10 }, (_, i) => ({ id: i })),
      firstPrProgress: null,
      guideFeedbacks: [],
      studentBadges: [{ badge: { slug: "GSOC_PARTICIPANT" } }],
    });

    const result = await service.calculateOssTier(userId);

    expect(result).toBe("OSS Leader");
  });
});
