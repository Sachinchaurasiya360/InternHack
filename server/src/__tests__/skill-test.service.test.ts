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
    skillTestAttempt: {
      findFirst: vi.fn(),
      update: vi.fn(),
    },
    verifiedSkill: {
      upsert: vi.fn(),
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
  cacheDelPattern: vi.fn(),
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

describe("SkillTestService.submitTest proctoring integrity", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("preserves server-side incrementalEvents and scores from them, ignoring under-reported client counts", async () => {
    // Test with one question the student answers correctly.
    vi.mocked(prisma.skillTest.findUnique).mockResolvedValue({
      id: 10,
      passThreshold: 70,
      timeLimitSecs: 3600,
      skillName: "react",
      questions: [{ id: 1, correctIndex: 0, explanation: null }],
    } as any);

    // The open session already holds tamper-resistant events appended during the test.
    const serverEvents = [
      { type: "tab_switch", timestamp: "2024-01-01T10:01:00.000Z" },
      { type: "devtools", timestamp: "2024-01-01T10:02:00.000Z", detail: "F12" },
      { type: "camera_track_ended", timestamp: "2024-01-01T10:03:00.000Z" },
    ];
    vi.mocked(prisma.skillTestAttempt.findFirst).mockResolvedValue({
      id: 99,
      startedAt: new Date(Date.now() - 600 * 1000), // 10 mins ago, not expired
      answers: [{ questionId: 1 }],
      proctorLog: { incrementalEvents: serverEvents },
    } as any);

    vi.mocked(prisma.skillTestAttempt.update).mockResolvedValue({ id: 99 } as any);

    // Client tries to under-report: claims a clean run.
    const clientProctorLog = { tabSwitches: 0, devtoolsAttempts: 0, cameraEnabled: true };

    const result = await service.submitTest(
      10,
      2,
      [{ questionId: 1, selectedIndex: 0 }],
      clientProctorLog,
    );

    expect(result.score).toBe(100); // answered correctly

    const updateArg = vi.mocked(prisma.skillTestAttempt.update).mock.calls[0]![0] as any;
    // Score derived from the server log: 100 - 15 (tab) - 25 (devtools) - 20 (camera) = 40
    expect(updateArg.data.proctoringScore).toBe(40);
    // Below the 60 minimum → fails despite a perfect quiz score
    expect(updateArg.data.passed).toBe(false);
    expect(result.passed).toBe(false);
    // The incremental events survive submit instead of being clobbered.
    expect(updateArg.data.proctorLog.incrementalEvents).toHaveLength(3);
    // Passing branch never runs, so no verified skill is written.
    expect(prisma.verifiedSkill.upsert).not.toHaveBeenCalled();
  });
});
