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
  tx: {
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

const checkApplicationMilestoneSpy = vi
  .spyOn(StudentService.prototype as any, "checkApplicationMilestone")
  .mockResolvedValue(undefined);

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
    mocks.prisma.$transaction.mockImplementation(async (callback) => callback(mocks.tx));
  });

  it("creates the application in a transaction", async () => {
    mocks.prisma.adminJob.findUnique.mockResolvedValue(activeJob);
    mocks.tx.externalJobApplication.create.mockResolvedValue(createdApplication);

    await expect(service.applyToExternalJob(44, 23)).resolves.toEqual(createdApplication);

    expect(mocks.prisma.$transaction).toHaveBeenCalledOnce();
    expect(mocks.tx.externalJobApplication.create).toHaveBeenCalledWith({
      data: { studentId: 44, adminJobId: 23 },
      include: {
        adminJob: {
          select: { id: true, slug: true, company: true, role: true },
        },
      },
    });
    expect(mocks.prisma.externalJobApplication.create).not.toHaveBeenCalled();
  });

  it("runs post-commit work after successful create", async () => {
    mocks.prisma.adminJob.findUnique.mockResolvedValue(activeJob);
    mocks.tx.externalJobApplication.create.mockResolvedValue(createdApplication);

    await service.applyToExternalJob(44, 23);
    expect(mocks.badgeService.checkAndAwardBadges).toHaveBeenCalled();
    expect(checkApplicationMilestoneSpy).toHaveBeenCalled();
  });

  it("does not run post-commit work when application fails", async () => {
    mocks.prisma.adminJob.findUnique.mockResolvedValue(activeJob);
    mocks.tx.externalJobApplication.create.mockRejectedValue(new Error("DB error"));

    await expect(service.applyToExternalJob(44, 23)).rejects.toThrow("DB error");
    expect(mocks.badgeService.checkAndAwardBadges).not.toHaveBeenCalled();
    expect(checkApplicationMilestoneSpy).not.toHaveBeenCalled();
  });
});
