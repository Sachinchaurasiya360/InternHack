import { describe, it, expect, vi, beforeEach } from "vitest";
import { SkillTestService } from "../module/skill-test/skill-test.service.js";
import { prisma } from "../database/db.js";

vi.mock("../database/db.js", () => ({
  prisma: {
    skillTest: {
      findUnique: vi.fn(),
    },
    skillTestAttempt: {
      findFirst: vi.fn(),
      update: vi.fn(),
    },
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
  });

  it("throws error if test not found", async () => {
    vi.mocked(prisma.skillTest.findUnique).mockResolvedValue(null);
    await expect(service.logProctorEvents(1, 2, [])).rejects.toThrow("Test not found");
  });

  it("throws error if no open session exists", async () => {
    vi.mocked(prisma.skillTest.findUnique).mockResolvedValue({ timeLimitSecs: 3600 } as any);
    vi.mocked(prisma.skillTestAttempt.findFirst).mockResolvedValue(null);
    await expect(service.logProctorEvents(1, 2, [])).rejects.toThrow("NO_OPEN_SESSION");
  });

  it("throws error if session expired", async () => {
    vi.mocked(prisma.skillTest.findUnique).mockResolvedValue({ timeLimitSecs: 3600 } as any);
    vi.mocked(prisma.skillTestAttempt.findFirst).mockResolvedValue({
      id: 1,
      startedAt: new Date(Date.now() - 7200 * 1000), // 2 hours ago
      completedAt: null,
      proctorLog: null,
    } as any);

    await expect(service.logProctorEvents(1, 2, [])).rejects.toThrow("TEST_EXPIRED");
  });

  it("merges incremental events into existing proctorLog array", async () => {
    vi.mocked(prisma.skillTest.findUnique).mockResolvedValue({ timeLimitSecs: 3600 } as any);
    
    const existingLog = {
      tabSwitches: 0,
      incrementalEvents: [
        { type: "tab_switch", timestamp: "2024-01-01T10:00:00.000Z" }
      ]
    };

    vi.mocked(prisma.skillTestAttempt.findFirst).mockResolvedValue({
      id: 99,
      startedAt: new Date(Date.now() - 600 * 1000), // 10 mins ago
      completedAt: null,
      proctorLog: existingLog,
    } as any);

    vi.mocked(prisma.skillTestAttempt.update).mockResolvedValue({} as any);

    const newEvents = [
      { type: "focus_loss", timestamp: "2024-01-01T10:05:00.000Z" }
    ];

    const result = await service.logProctorEvents(1, 2, newEvents);
    
    expect(result.accepted).toBe(1);
    expect(prisma.skillTestAttempt.update).toHaveBeenCalledWith({
      where: { id: 99 },
      data: {
        proctorLog: {
          tabSwitches: 0,
          incrementalEvents: [
            { type: "tab_switch", timestamp: "2024-01-01T10:00:00.000Z" },
            { type: "focus_loss", timestamp: "2024-01-01T10:05:00.000Z" }
          ]
        }
      }
    });
  });

  it("initializes incrementalEvents array if it does not exist", async () => {
    vi.mocked(prisma.skillTest.findUnique).mockResolvedValue({ timeLimitSecs: 3600 } as any);
    
    vi.mocked(prisma.skillTestAttempt.findFirst).mockResolvedValue({
      id: 99,
      startedAt: new Date(),
      completedAt: null,
      proctorLog: { tabSwitches: 5 },
    } as any);

    const newEvents = [{ type: "tab_switch", timestamp: "2024-01-01T10:05:00.000Z" }];

    await service.logProctorEvents(1, 2, newEvents);
    
    expect(prisma.skillTestAttempt.update).toHaveBeenCalledWith({
      where: { id: 99 },
      data: {
        proctorLog: {
          tabSwitches: 5,
          incrementalEvents: newEvents,
        }
      }
    });
  });
});
