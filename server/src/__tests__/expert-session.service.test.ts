import { describe, it, expect, vi, beforeEach } from "vitest";
import { ExpertSessionService } from "../module/expert-session/expert-session.service.js";
import { prisma } from "../database/db.js";

vi.mock("../database/db.js", () => ({
  prisma: {
    expertAvailabilityBlock: {
      findMany: vi.fn(),
      create: vi.fn(),
      findMany2: vi.fn(),
    },
    expertSession: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      deleteMany: vi.fn(),
    },
  },
}));

vi.mock("../utils/email.utils.js", () => ({
  sendEmail: vi.fn().mockResolvedValue(undefined),
}));

// A Monday at 08:00 IST (02:30 UTC), well within business hours' lookahead window.
const REFERENCE_NOW = new Date("2026-08-03T02:30:00.000Z");

describe("ExpertSessionService.getAvailableSlots", () => {
  let service: ExpertSessionService;

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(prisma.expertAvailabilityBlock.findMany).mockResolvedValue([]);
    vi.mocked(prisma.expertSession.findMany).mockResolvedValue([]);
    service = new ExpertSessionService();
  });

  it("only generates slots on weekdays within business hours (10:00-18:00 IST, 30-min increments)", async () => {
    const slots = await service.getAvailableSlots(REFERENCE_NOW);
    expect(slots.length).toBeGreaterThan(0);

    for (const slot of slots) {
      const ist = new Date(slot.getTime() + 330 * 60_000);
      const day = ist.getUTCDay();
      const hour = ist.getUTCHours();
      const minute = ist.getUTCMinutes();
      expect(day).not.toBe(0); // not Sunday
      expect(day).not.toBe(6); // not Saturday
      expect(hour).toBeGreaterThanOrEqual(10);
      expect(hour).toBeLessThan(18);
      expect([0, 30]).toContain(minute);
    }
  });

  it("excludes slots less than 12 hours from now", async () => {
    const slots = await service.getAvailableSlots(REFERENCE_NOW);
    const minTime = REFERENCE_NOW.getTime() + 12 * 60 * 60 * 1000;
    for (const slot of slots) {
      expect(slot.getTime()).toBeGreaterThanOrEqual(minTime);
    }
  });

  it("excludes slots covered by a whole-day availability block", async () => {
    // Block the first available weekday entirely.
    const firstDayCandidate = new Date(REFERENCE_NOW.getTime() + 12 * 60 * 60 * 1000 + 24 * 60 * 60 * 1000);
    vi.mocked(prisma.expertAvailabilityBlock.findMany).mockResolvedValue([
      { id: 1, date: firstDayCandidate, startTime: null, endTime: null, reason: "Out of office", createdAt: new Date() },
    ] as any);

    const slots = await service.getAvailableSlots(REFERENCE_NOW);
    const blockedDayKey = (d: Date) => {
      const ist = new Date(d.getTime() + 330 * 60_000);
      return `${ist.getUTCFullYear()}-${ist.getUTCMonth()}-${ist.getUTCDate()}`;
    };
    const blockedKey = blockedDayKey(firstDayCandidate);
    expect(slots.some((s) => blockedDayKey(s) === blockedKey)).toBe(false);
  });

  it("excludes a specific partial-block time range but keeps other slots that day", async () => {
    const candidateDay = new Date(REFERENCE_NOW.getTime() + 12 * 60 * 60 * 1000 + 24 * 60 * 60 * 1000);
    vi.mocked(prisma.expertAvailabilityBlock.findMany).mockResolvedValue([
      { id: 1, date: candidateDay, startTime: "10:00", endTime: "12:00", reason: "Meeting", createdAt: new Date() },
    ] as any);

    const slots = await service.getAvailableSlots(REFERENCE_NOW);
    const istTime = (d: Date) => {
      const ist = new Date(d.getTime() + 330 * 60_000);
      return `${String(ist.getUTCHours()).padStart(2, "0")}:${String(ist.getUTCMinutes()).padStart(2, "0")}`;
    };
    const dayKey = (d: Date) => {
      const ist = new Date(d.getTime() + 330 * 60_000);
      return `${ist.getUTCFullYear()}-${ist.getUTCMonth()}-${ist.getUTCDate()}`;
    };
    const sameDaySlots = slots.filter((s) => dayKey(s) === dayKey(candidateDay));
    expect(sameDaySlots.some((s) => istTime(s) === "10:00")).toBe(false);
    expect(sameDaySlots.some((s) => istTime(s) === "11:30")).toBe(false);
    expect(sameDaySlots.some((s) => istTime(s) === "12:00")).toBe(true);
  });

  it("excludes a slot already booked by a SCHEDULED session", async () => {
    const all = await service.getAvailableSlots(REFERENCE_NOW);
    const target = all[0]!;
    vi.mocked(prisma.expertSession.findMany).mockResolvedValue([{ scheduledAt: target }] as any);

    const filtered = await service.getAvailableSlots(REFERENCE_NOW);
    expect(filtered.some((s) => s.getTime() === target.getTime())).toBe(false);
  });
});

describe("ExpertSessionService booking lifecycle", () => {
  let service: ExpertSessionService;

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(prisma.expertAvailabilityBlock.findMany).mockResolvedValue([]);
    vi.mocked(prisma.expertSession.findMany).mockResolvedValue([]);
    service = new ExpertSessionService();
  });

  it("rejects booking a slot that is not in the available list", async () => {
    await expect(
      service.bookSession(
        1,
        { scheduledAt: new Date("2020-01-01T00:00:00.000Z"), focusAreas: [] },
        REFERENCE_NOW,
      ),
    ).rejects.toMatchObject({ status: 409 });
    expect(prisma.expertSession.create).not.toHaveBeenCalled();
  });

  it("books a valid available slot", async () => {
    const [slot] = await service.getAvailableSlots(REFERENCE_NOW);
    vi.mocked(prisma.expertSession.create).mockResolvedValue({ id: 1 } as any);

    await service.bookSession(1, { scheduledAt: slot!, focusAreas: ["System Design"] }, REFERENCE_NOW);
    expect(prisma.expertSession.create).toHaveBeenCalledWith({
      data: expect.objectContaining({ userId: 1, scheduledAt: slot, status: "PENDING_PAYMENT" }),
    });
  });

  it("confirmBooking marks the session SCHEDULED and sends admin + student emails", async () => {
    const emailUtils = await import("../utils/email.utils.js");
    vi.mocked(prisma.expertSession.findUnique).mockResolvedValue({ id: 5 } as any);
    vi.mocked(prisma.expertSession.update).mockResolvedValue({
      id: 5,
      scheduledAt: new Date("2026-08-05T04:30:00.000Z"),
      targetRole: "SDE",
      experienceLevel: "FRESHER",
      focusAreas: ["DSA"],
      notes: null,
      user: { name: "Test Student", email: "student@example.com" },
    } as any);

    await service.confirmBooking("dodo_session_123");

    expect(prisma.expertSession.update).toHaveBeenCalledWith({
      where: { id: 5 },
      data: { status: "SCHEDULED" },
      include: { user: { select: { name: true, email: true } } },
    });
    expect(emailUtils.sendEmail).toHaveBeenCalledTimes(2);
  });

  it("confirmBooking is a no-op when no session matches the payment id", async () => {
    const emailUtils = await import("../utils/email.utils.js");
    vi.mocked(prisma.expertSession.findUnique).mockResolvedValue(null);

    await service.confirmBooking("unknown_session");

    expect(prisma.expertSession.update).not.toHaveBeenCalled();
    expect(emailUtils.sendEmail).not.toHaveBeenCalled();
  });

  it("cancelPendingBooking deletes only PENDING_PAYMENT sessions", async () => {
    vi.mocked(prisma.expertSession.findUnique).mockResolvedValue({ id: 7, status: "PENDING_PAYMENT" } as any);

    await service.cancelPendingBooking("dodo_session_456");

    expect(prisma.expertSession.delete).toHaveBeenCalledWith({ where: { id: 7 } });
  });

  it("cancelPendingBooking does nothing for an already-SCHEDULED session", async () => {
    vi.mocked(prisma.expertSession.findUnique).mockResolvedValue({ id: 8, status: "SCHEDULED" } as any);

    await service.cancelPendingBooking("dodo_session_789");

    expect(prisma.expertSession.delete).not.toHaveBeenCalled();
  });
});
