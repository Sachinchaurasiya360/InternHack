import { describe, it, expect, vi, beforeEach } from "vitest";
import { withAdvisoryLock } from "../utils/cron-lock.js";
import { prisma } from "../database/db.js";

vi.mock("../database/db.js", () => ({
  prisma: {
    $queryRaw: vi.fn(),
  },
}));

describe("withAdvisoryLock", () => {
  const mockFn = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should run the function if lock is acquired", async () => {
    vi.mocked(prisma.$queryRaw)
      .mockResolvedValueOnce([{ locked: true }])   // pg_try_advisory_lock
      .mockResolvedValueOnce([{ pg_advisory_unlock: true }]); // pg_advisory_unlock

    await withAdvisoryLock("test-job", mockFn);

    expect(prisma.$queryRaw).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenCalledOnce();
  });

  it("should skip the function if lock is NOT acquired", async () => {
    vi.mocked(prisma.$queryRaw).mockResolvedValueOnce([{ locked: false }]);

    await withAdvisoryLock("locked-job", mockFn);

    expect(prisma.$queryRaw).toHaveBeenCalledOnce();
    expect(mockFn).not.toHaveBeenCalled();
  });

  it("should handle errors gracefully", async () => {
    vi.mocked(prisma.$queryRaw).mockRejectedValueOnce(new Error("DB Error"));

    await withAdvisoryLock("error-job", mockFn);

    expect(prisma.$queryRaw).toHaveBeenCalledOnce();
    expect(mockFn).not.toHaveBeenCalled();
  });
});
