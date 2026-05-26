import { beforeEach, describe, expect, it, vi } from "vitest";
import { Prisma } from "@prisma/client";

const mocks = vi.hoisted(() => ({
  prisma: {
    job: {
      findUnique: vi.fn(),
    },
    application: {
      create: vi.fn(),
      findFirst: vi.fn(),
    },
    roundSubmission: {
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

describe("StudentService", () => {
  const service = new StudentService();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("applyToJob", () => {
    it("creates an application and first round submission when the job is open", async () => {
      const firstRound = { id: 31 };
      const job = {
        id: 12,
        status: "PUBLISHED",
        deadline: new Date(Date.now() + 60_000).toISOString(),
        rounds: [firstRound],
      };
      const createdApplication = {
        id: 99,
        job: { id: 12, title: "Frontend Intern", company: "InternHack" },
      };

      mocks.prisma.job.findUnique.mockResolvedValue(job);
      mocks.prisma.application.create.mockResolvedValue(createdApplication);

      const result = await service.applyToJob(12, 44, {
        customFieldAnswers: {
          portfolio: ["https://example.com"],
          hasExperience: true,
        },
        resumeUrl: "https://cdn.example.com/resume.pdf",
        coverLetter: "I want to join InternHack.",
      });

      expect(result).toEqual(createdApplication);
      expect(mocks.prisma.job.findUnique).toHaveBeenCalledWith({
        where: { id: 12 },
        include: { rounds: { orderBy: { orderIndex: "asc" }, take: 1 } },
      });
      expect(mocks.prisma.application.create).toHaveBeenCalledWith({
        data: {
          jobId: 12,
          studentId: 44,
          customFieldAnswers: {
            portfolio: ["https://example.com"],
            hasExperience: true,
          },
          resumeUrl: "https://cdn.example.com/resume.pdf",
          coverLetter: "I want to join InternHack.",
          currentRoundId: 31,
          status: "APPLIED",
        },
        include: {
          job: { select: { id: true, title: true, company: true } },
        },
      });
      expect(mocks.prisma.roundSubmission.create).toHaveBeenCalledWith({
        data: {
          applicationId: 99,
          roundId: 31,
          status: "IN_PROGRESS",
        },
      });
      expect(mocks.badgeService.checkAndAwardBadges).toHaveBeenCalledWith(44, "first_application");
      expect(mocks.badgeService.checkAndAwardBadges).toHaveBeenCalledWith(44, "job_apply");
    });

    it("creates an application without a round submission when the job has no rounds", async () => {
      const job = {
        id: 13,
        status: "PUBLISHED",
        deadline: new Date(Date.now() + 60_000).toISOString(),
        rounds: [],
      };
      const createdApplication = {
        id: 101,
        job: { id: 13, title: "Backend Intern", company: "InternHack" },
      };

      mocks.prisma.job.findUnique.mockResolvedValue(job);
      mocks.prisma.application.create.mockResolvedValue(createdApplication);

      await service.applyToJob(13, 44, { customFieldAnswers: {} });

      expect(mocks.prisma.roundSubmission.create).not.toHaveBeenCalled();
      expect(mocks.prisma.application.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            currentRoundId: null,
            status: "APPLIED",
          }),
        }),
      );
    });

    it("rejects when the job does not exist", async () => {
      mocks.prisma.job.findUnique.mockResolvedValue(null);

      await expect(service.applyToJob(999, 44, { customFieldAnswers: {} })).rejects.toThrow("Job not found");
    });

    it("rejects when the job is not accepting applications", async () => {
      mocks.prisma.job.findUnique.mockResolvedValue({
        id: 12,
        status: "DRAFT",
        deadline: null,
        rounds: [],
      });

      await expect(service.applyToJob(12, 44, { customFieldAnswers: {} })).rejects.toThrow(
        "Job is not accepting applications",
      );
    });

    it("rejects when the application deadline has passed", async () => {
      mocks.prisma.job.findUnique.mockResolvedValue({
        id: 12,
        status: "PUBLISHED",
        deadline: new Date(Date.now() - 60_000).toISOString(),
        rounds: [],
      });

      await expect(service.applyToJob(12, 44, { customFieldAnswers: {} })).rejects.toThrow(
        "Application deadline has passed",
      );
    });

    it("translates duplicate applications into a friendly error", async () => {
      const duplicateError = new Prisma.PrismaClientKnownRequestError("Duplicate", {
        code: "P2002",
        clientVersion: "test",
      });

      mocks.prisma.job.findUnique.mockResolvedValue({
        id: 12,
        status: "PUBLISHED",
        deadline: null,
        rounds: [],
      });
      mocks.prisma.application.create.mockRejectedValue(duplicateError);

      await expect(service.applyToJob(12, 44, { customFieldAnswers: {} })).rejects.toThrow(
        "You have already applied to this job",
      );
    });
  });

  describe("getApplicationStatusByJob", () => {
    it("returns the application status for a student/job pair", async () => {
      mocks.prisma.application.findFirst.mockResolvedValue({
        id: 201,
        status: "APPLIED",
      });

      await expect(service.getApplicationStatusByJob(15, 44)).resolves.toEqual({
        id: 201,
        status: "APPLIED",
      });
      expect(mocks.prisma.application.findFirst).toHaveBeenCalledWith({
        where: { jobId: 15, studentId: 44 },
        select: { id: true, status: true },
      });
    });

    it("returns null when no application exists", async () => {
      mocks.prisma.application.findFirst.mockResolvedValue(null);

      await expect(service.getApplicationStatusByJob(15, 44)).resolves.toBeNull();
    });
  });
});