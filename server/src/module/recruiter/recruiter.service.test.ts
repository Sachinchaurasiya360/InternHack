import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  prisma: {
    job: {
      findUnique: vi.fn(),
    },
    application: {
      findMany: vi.fn(),
      count: vi.fn(),
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
