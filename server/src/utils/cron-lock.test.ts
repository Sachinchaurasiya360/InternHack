import { describe, it, expect, vi, beforeEach } from "vitest";
import { withAdvisoryLock } from "./cron-lock.js";
import { prisma } from "../database/db.js";

vi.mock("../database/db.js", () => ({
  prisma: {
    $transaction: vi.fn(),
  },
}));

describe("withAdvisoryLock", () => {
  const mockFn = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should run the function if lock is acquired", async () => {
    vi.mocked(prisma.$transaction).mockImplementation(async (callback: any) => {
      const tx = {
        $queryRaw: vi.fn().mockResolvedValue([{ locked: true }]),
      };
      return await callback(tx);
    });

    await withAdvisoryLock("test-job", mockFn);

    expect(prisma.$transaction).toHaveBeenCalledOnce();
    expect(mockFn).toHaveBeenCalledOnce();
  });

  it("should skip the function if lock is NOT acquired", async () => {
    vi.mocked(prisma.$transaction).mockImplementation(async (callback: any) => {
      const tx = {
        $queryRaw: vi.fn().mockResolvedValue([{ locked: false }]),
      };
      return await callback(tx);
    });

    await withAdvisoryLock("locked-job", mockFn);

    expect(prisma.$transaction).toHaveBeenCalledOnce();
    expect(mockFn).not.toHaveBeenCalled();
  });

  it("should handle transaction errors gracefully", async () => {
    vi.mocked(prisma.$transaction).mockRejectedValueOnce(new Error("DB Error"));

    await withAdvisoryLock("error-job", mockFn);

    expect(prisma.$transaction).toHaveBeenCalledOnce();
    expect(mockFn).not.toHaveBeenCalled();
  });
});
