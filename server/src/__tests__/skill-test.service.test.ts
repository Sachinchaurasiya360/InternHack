import { describe, it, expect, vi, beforeEach } from "vitest";
import { SkillTestService } from "../module/skill-test/skill-test.service.js";
import { prisma } from "../database/db.js";

// Shared mocks for the transaction-internal objects.
// Each test configures these before calling the service method.
const txQueryRaw = vi.fn();
const txExecuteRaw = vi.fn();

vi.mock("../database/db.js", () => ({
  prisma: {
    skillTest: {
      findUnique: vi.fn(),
    },
    // $transaction receives a callback; we invoke it with a fake tx object
    // that exposes the two methods the service actually calls.
    $transaction: vi.fn((cb: any) =>
      cb({
        $queryRaw: txQueryRaw,
        $executeRaw: txExecuteRaw,
      }),
    ),
  },
}));

vi.mock("../utils/cache.js", () => ({
  cacheGet: vi.fn(),
  cacheSet: vi.fn(),
  cacheDel: vi.fn(),
}));

const service = new SkillTestService();

describe("SkillTestService.logProctorEvents", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Re-wire $transaction after clearAllMocks wipes the implementation
    (prisma.$transaction as any).mockImplementation(
      (cb: any) =>
        cb({
          $queryRaw: txQueryRaw,
          $executeRaw: txExecuteRaw,
        }),
    );
  });

  it("throws error if test not found", async () => {
    vi.mocked(prisma.skillTest.findUnique).mockResolvedValue(null);
    await expect(service.logProctorEvents(1, 2, [])).rejects.toThrow("Test not found");
  });

  it("throws error if no open session exists", async () => {
    vi.mocked(prisma.skillTest.findUnique).mockResolvedValue({ timeLimitSecs: 3600 } as any);
    txQueryRaw.mockResolvedValue([]); // no rows → no open session
    await expect(service.logProctorEvents(1, 2, [])).rejects.toThrow("NO_OPEN_SESSION");
  });

  it("throws error if session expired", async () => {
    vi.mocked(prisma.skillTest.findUnique).mockResolvedValue({ timeLimitSecs: 3600 } as any);
    txQueryRaw.mockResolvedValue([
      {
        id: 1,
        startedAt: new Date(Date.now() - 7200 * 1000), // 2 hours ago → expired
        proctorLog: null,
      },
    ]);

    await expect(service.logProctorEvents(1, 2, [])).rejects.toThrow("TEST_EXPIRED");
  });

  it("merges incremental events into existing proctorLog array", async () => {
    vi.mocked(prisma.skillTest.findUnique).mockResolvedValue({ timeLimitSecs: 3600 } as any);

    txQueryRaw.mockResolvedValue([
      {
        id: 99,
        startedAt: new Date(Date.now() - 600 * 1000), // 10 mins ago
      },
    ]);

    txExecuteRaw.mockResolvedValue(1);

    const newEvents = [
      { type: "focus_loss", timestamp: "2024-01-01T10:05:00.000Z" },
    ];

    const result = await service.logProctorEvents(1, 2, newEvents);

    expect(result.accepted).toBe(1);
    expect(txExecuteRaw).toHaveBeenCalledTimes(1);
    expect(txExecuteRaw).toHaveBeenCalledWith(
      expect.any(Array),
      JSON.stringify(newEvents),
      99
    );
  });

  it("initializes incrementalEvents array if it does not exist", async () => {
    vi.mocked(prisma.skillTest.findUnique).mockResolvedValue({ timeLimitSecs: 3600 } as any);

    txQueryRaw.mockResolvedValue([
      {
        id: 99,
        startedAt: new Date(),
      },
    ]);

    txExecuteRaw.mockResolvedValue(1);

    const newEvents = [{ type: "tab_switch", timestamp: "2024-01-01T10:05:00.000Z" }];

    await service.logProctorEvents(1, 2, newEvents);

    expect(txExecuteRaw).toHaveBeenCalledTimes(1);
    expect(txExecuteRaw).toHaveBeenCalledWith(
      expect.any(Array),
      JSON.stringify(newEvents),
      99
    );
  });
});
