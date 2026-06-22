import { describe, it, expect, vi, beforeEach } from "vitest";
import { SkillTestService } from "../module/skill-test/skill-test.service.js";
import { prisma } from "../database/db.js";

// Shared mocks for the transaction-internal objects.
// Each test configures these before calling the service method.
const txQueryRaw = vi.fn();
const txUpdate = vi.fn();

vi.mock("../database/db.js", () => ({
  prisma: {
    skillTest: {
      findUnique: vi.fn(),
    },
    // $transaction receives a callback; we invoke it with a fake tx object
    // that exposes the two methods the service actually calls.
    $transaction: vi.fn((cb: (tx: unknown) => Promise<unknown>) =>
      cb({
        $queryRaw: txQueryRaw,
        skillTestAttempt: { update: txUpdate },
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
    vi.mocked(prisma.$transaction).mockImplementation(
      (cb: (tx: unknown) => Promise<unknown>) =>
        cb({
          $queryRaw: txQueryRaw,
          skillTestAttempt: { update: txUpdate },
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

    const existingLog = {
      tabSwitches: 0,
      incrementalEvents: [
        { type: "tab_switch", timestamp: "2024-01-01T10:00:00.000Z" },
      ],
    };

    txQueryRaw.mockResolvedValue([
      {
        id: 99,
        startedAt: new Date(Date.now() - 600 * 1000), // 10 mins ago
        proctorLog: existingLog,
      },
    ]);

    txUpdate.mockResolvedValue({} as any);

    const newEvents = [
      { type: "focus_loss", timestamp: "2024-01-01T10:05:00.000Z" },
    ];

    const result = await service.logProctorEvents(1, 2, newEvents);

    expect(result.accepted).toBe(1);
    expect(txUpdate).toHaveBeenCalledWith({
      where: { id: 99 },
      data: {
        proctorLog: {
          tabSwitches: 0,
          incrementalEvents: [
            { type: "tab_switch", timestamp: "2024-01-01T10:00:00.000Z" },
            { type: "focus_loss", timestamp: "2024-01-01T10:05:00.000Z" },
          ],
        },
      },
    });
  });

  it("initializes incrementalEvents array if it does not exist", async () => {
    vi.mocked(prisma.skillTest.findUnique).mockResolvedValue({ timeLimitSecs: 3600 } as any);

    txQueryRaw.mockResolvedValue([
      {
        id: 99,
        startedAt: new Date(),
        proctorLog: { tabSwitches: 5 },
      },
    ]);

    txUpdate.mockResolvedValue({} as any);

    const newEvents = [{ type: "tab_switch", timestamp: "2024-01-01T10:05:00.000Z" }];

    await service.logProctorEvents(1, 2, newEvents);

    expect(txUpdate).toHaveBeenCalledWith({
      where: { id: 99 },
      data: {
        proctorLog: {
          tabSwitches: 5,
          incrementalEvents: newEvents,
        },
      },
    });
  });
});
