import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  prisma: {
    $transaction: vi.fn(),
    adminJob: {
      findUnique: vi.fn(),
    },
    externalJobApplication: {
      create: vi.fn(),
    },
    usageLog: {
      create: vi.fn(),
    },
  },
  badgeService: {
    checkAndAwardBadges: vi.fn().mockResolvedValue(undefined),
  },
}));

vi.mock("../../database/db.js", () => ({
  prisma: mocks.prisma,
}));

vi.mock("../badge/badge.service.js", () => ({
  BadgeService: class {
    checkAndAwardBadges = mocks.badgeService.checkAndAwardBadges;
  },
}));

const { StudentService } = await import("./student.service.js");

vi.spyOn(StudentService.prototype as any, "checkApplicationMilestone").mockResolvedValue(undefined);

describe("StudentService.applyToExternalJob", () => {
  const service = new StudentService();
  const activeJob = {
    id: 23,
    isActive: true,
    expiresAt: new Date(Date.now() + 60_000),
  };
  const createdApplication = {
    id: 301,
    adminJob: {
      id: 23,
      slug: "frontend-intern",
      company: "InternHack",
      role: "Frontend Intern",
    },
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mocks.prisma.$transaction.mockImplementation(async (callback) => callback(mocks.prisma));
  });

  it("creates the application and usage log in one transaction", async () => {
    mocks.prisma.adminJob.findUnique.mockResolvedValue(activeJob);
    mocks.prisma.externalJobApplication.create.mockResolvedValue(createdApplication);
    mocks.prisma.usageLog.create.mockResolvedValue({ id: 401 });

    await expect(service.applyToExternalJob(44, 23)).resolves.toEqual(createdApplication);

    expect(mocks.prisma.$transaction).toHaveBeenCalledOnce();
    expect(mocks.prisma.externalJobApplication.create).toHaveBeenCalledWith({
      data: { studentId: 44, adminJobId: 23 },
      include: {
        adminJob: {
          select: { id: true, slug: true, company: true, role: true },
        },
      },
    });
    expect(mocks.prisma.usageLog.create).toHaveBeenCalledWith({
      data: { userId: 44, action: "JOB_APPLICATION" },
    });
  });

  it("does not run post-commit work when usage logging fails", async () => {
    mocks.prisma.adminJob.findUnique.mockResolvedValue(activeJob);
    mocks.prisma.externalJobApplication.create.mockResolvedValue(createdApplication);
    mocks.prisma.usageLog.create.mockRejectedValue(new Error("Usage log unavailable"));

    await expect(service.applyToExternalJob(44, 23)).rejects.toThrow("Usage log unavailable");
    expect(mocks.badgeService.checkAndAwardBadges).not.toHaveBeenCalled();
  });
});
