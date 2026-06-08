import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  prisma: {
    job: {
      findUnique: vi.fn(),
    },
    application: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
      count: vi.fn(),
    },
    round: {
      findUnique: vi.fn(),
      findFirst: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
    roundSubmission: {
      update: vi.fn(),
    },
  },
  s3Utils: {
    signUrl: vi.fn().mockImplementation((url) => Promise.resolve(url)),
  },
}));

vi.mock("../../database/db.js", () => ({
  prisma: mocks.prisma,
}));

vi.mock("../../utils/s3.utils.js", () => ({
  signUrl: mocks.s3Utils.signUrl,
  signUrls: vi.fn().mockImplementation((urls) => Promise.resolve(urls)),
}));

const { RecruiterService } = await import("./recruiter.service.js");

describe("RecruiterService - getApplications", () => {
  const service = new RecruiterService();
  const jobId = 1;
  const recruiterId = 10;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should throw 'Job not found' if job does not exist", async () => {
    mocks.prisma.job.findUnique.mockResolvedValue(null);

    await expect(
      service.getApplications(jobId, recruiterId, { page: 1, limit: 10 })
    ).rejects.toThrow("Job not found");

    expect(mocks.prisma.job.findUnique).toHaveBeenCalledWith({
      where: { id: jobId },
    });
  });

  it("should throw 'Not authorized' if job belongs to a different recruiter", async () => {
    mocks.prisma.job.findUnique.mockResolvedValue({
      id: jobId,
      recruiterId: 999, // different recruiter
    });

    await expect(
      service.getApplications(jobId, recruiterId, { page: 1, limit: 10 })
    ).rejects.toThrow("Not authorized");
  });

  it("should exclude WITHDRAWN applications by default when status filter is not passed", async () => {
    mocks.prisma.job.findUnique.mockResolvedValue({
      id: jobId,
      recruiterId: recruiterId,
    });
    mocks.prisma.application.findMany.mockResolvedValue([]);
    mocks.prisma.application.count.mockResolvedValue(0);

    const result = await service.getApplications(jobId, recruiterId, {
      page: 1,
      limit: 10,
    });

    expect(result.applications).toEqual([]);
    expect(result.pagination.total).toBe(0);

    // Verify findMany was called with status: { not: "WITHDRAWN" }
    expect(mocks.prisma.application.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          jobId,
          status: { not: "WITHDRAWN" },
        }),
      })
    );

    // Verify count was called with status: { not: "WITHDRAWN" }
    expect(mocks.prisma.application.count).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          jobId,
          status: { not: "WITHDRAWN" },
        }),
      })
    );
  });

  it("should explicitly filter by status when status filter is passed", async () => {
    mocks.prisma.job.findUnique.mockResolvedValue({
      id: jobId,
      recruiterId: recruiterId,
    });
    mocks.prisma.application.findMany.mockResolvedValue([]);
    mocks.prisma.application.count.mockResolvedValue(0);

    // Explicitly filter for WITHDRAWN status
    await service.getApplications(jobId, recruiterId, {
      page: 1,
      limit: 10,
      status: "WITHDRAWN",
    });

    expect(mocks.prisma.application.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          jobId,
          status: "WITHDRAWN",
        }),
      })
    );

    // Explicitly filter for APPLIED status
    await service.getApplications(jobId, recruiterId, {
      page: 1,
      limit: 10,
      status: "APPLIED",
    });

    expect(mocks.prisma.application.findMany).toHaveBeenLastCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          jobId,
          status: "APPLIED",
        }),
      })
    );
  });
});

describe("RecruiterService - evaluateSubmission", () => {
  const service = new RecruiterService();
  const applicationId = 100;
  const roundId = 200;
  const recruiterId = 10;
  const jobId = 300;

  beforeEach(() => {
    vi.clearAllMocks();
    mocks.prisma.application.findUnique.mockResolvedValue({
      id: applicationId,
      jobId,
      job: { recruiterId },
    });
    mocks.prisma.round.findUnique.mockResolvedValue({
      jobId,
      evaluationCriteria: [
        { id: "communication", criterion: "Communication", maxScore: 10 },
        { id: "technical", criterion: "Technical", maxScore: 20 },
      ],
    });
    mocks.prisma.roundSubmission.update.mockResolvedValue({
      id: 1,
      applicationId,
      roundId,
      status: "COMPLETED",
    });
  });

  it("rejects evaluation scores above the criterion maxScore", async () => {
    await expect(
      service.evaluateSubmission(applicationId, roundId, recruiterId, {
        communication: { score: 11 },
      })
    ).rejects.toThrow("Evaluation score for communication cannot exceed maxScore 10");

    expect(mocks.prisma.roundSubmission.update).not.toHaveBeenCalled();
  });

  it("allows evaluation scores equal to the criterion maxScore", async () => {
    await service.evaluateSubmission(
      applicationId,
      roundId,
      recruiterId,
      {
        communication: { score: 10, comment: "Clear answers" },
        technical: { score: 20 },
      },
      "Strong candidate"
    );

    expect(mocks.prisma.roundSubmission.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { applicationId_roundId: { applicationId, roundId } },
        data: expect.objectContaining({
          evaluationScores: {
            communication: { score: 10, comment: "Clear answers" },
            technical: { score: 20 },
          },
          recruiterNotes: "Strong candidate",
          status: "COMPLETED",
        }),
      })
    );
  });
});

describe("RecruiterService - createRound", () => {
  const service = new RecruiterService();
  const jobId = 1;
  const recruiterId = 10;
  const roundData = { name: "Technical Interview", orderIndex: 0, description: "Test round" };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should throw 409 if round name already exists for the job", async () => {
    mocks.prisma.job.findUnique.mockResolvedValue({ id: jobId, recruiterId });
    mocks.prisma.round.findFirst.mockResolvedValue({ id: 99, jobId, name: roundData.name });

    await expect(
      service.createRound(jobId, recruiterId, roundData)
    ).rejects.toMatchObject({ message: `A round named "${roundData.name}" already exists for this job`, statusCode: 409 });

    expect(mocks.prisma.round.create).not.toHaveBeenCalled();
  });

  it("should create the round if name is unique", async () => {
    mocks.prisma.job.findUnique.mockResolvedValue({ id: jobId, recruiterId });
    mocks.prisma.round.findFirst.mockResolvedValue(null);
    mocks.prisma.round.create.mockResolvedValue({ id: 1, jobId, ...roundData });

    const result = await service.createRound(jobId, recruiterId, roundData);

    expect(result).toEqual({ id: 1, jobId, ...roundData });
    expect(mocks.prisma.round.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ name: roundData.name }),
      })
    );
  });
});

describe("RecruiterService - updateRound", () => {
  const service = new RecruiterService();
  const jobId = 1;
  const roundId = 5;
  const recruiterId = 10;
  const existingRound = { id: roundId, jobId, name: "Original Name", orderIndex: 0 };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should throw 409 if renamed to an existing name within the job", async () => {
    mocks.prisma.job.findUnique.mockResolvedValue({ id: jobId, recruiterId });
    mocks.prisma.round.findUnique.mockResolvedValue(existingRound);
    mocks.prisma.round.findFirst.mockResolvedValue({ id: 99, jobId, name: "Duplicate Name" });

    await expect(
      service.updateRound(jobId, roundId, recruiterId, { name: "Duplicate Name" })
    ).rejects.toMatchObject({ message: 'A round named "Duplicate Name" already exists for this job', statusCode: 409 });

    expect(mocks.prisma.round.update).not.toHaveBeenCalled();
  });

  it("should skip duplicate check if name is unchanged", async () => {
    mocks.prisma.job.findUnique.mockResolvedValue({ id: jobId, recruiterId });
    mocks.prisma.round.findUnique.mockResolvedValue(existingRound);
    mocks.prisma.round.update.mockResolvedValue(existingRound);

    await service.updateRound(jobId, roundId, recruiterId, { name: "Original Name" });

    expect(mocks.prisma.round.findFirst).not.toHaveBeenCalled();
    expect(mocks.prisma.round.update).toHaveBeenCalled();
  });

  it("should allow update when new name is unique", async () => {
    const updated = { ...existingRound, name: "Unique Name" };
    mocks.prisma.job.findUnique.mockResolvedValue({ id: jobId, recruiterId });
    mocks.prisma.round.findUnique.mockResolvedValue(existingRound);
    mocks.prisma.round.findFirst.mockResolvedValue(null);
    mocks.prisma.round.update.mockResolvedValue(updated);

    const result = await service.updateRound(jobId, roundId, recruiterId, { name: "Unique Name" });

    expect(result.name).toBe("Unique Name");
    expect(mocks.prisma.round.update).toHaveBeenCalled();
  });
});
