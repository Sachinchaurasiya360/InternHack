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
      updateMany: vi.fn(),
      delete: vi.fn(),
      deleteMany: vi.fn(),
    },
    // No default implementation here — each describe block below wires its
    // own $transaction behavior in beforeEach (or per-test for the
    // concurrency suite), since "tx === prisma" vs. a stateful in-memory DB
    // are both valid depending on what's being tested.
    $transaction: vi.fn(),
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

  it("generates all-day slots every day of the week (30-min increments)", async () => {
    const slots = await service.getAvailableSlots(REFERENCE_NOW);
    expect(slots.length).toBeGreaterThan(0);

    const hours = new Set<number>();
    const days = new Set<number>();
    for (const slot of slots) {
      const ist = new Date(slot.getTime() + 330 * 60_000);
      expect([0, 30]).toContain(ist.getUTCMinutes());
      hours.add(ist.getUTCHours());
      days.add(ist.getUTCDay());
    }
    // The entire day is bookable now, not just 10:00-18:00 IST.
    expect([...hours].some((h) => h < 10)).toBe(true);
    expect([...hours].some((h) => h >= 18)).toBe(true);
    // Weekends are bookable: the 14-day window from a Monday spans both.
    expect(days.has(0)).toBe(true); // Sunday
    expect(days.has(6)).toBe(true); // Saturday
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

  it("queries for SCHEDULED sessions plus only recent (non-stale) PENDING_PAYMENT holds", async () => {
    await service.getAvailableSlots(REFERENCE_NOW);

    const call = vi.mocked(prisma.expertSession.findMany).mock.calls[0]![0] as any;
    expect(call.where.OR).toEqual([
      { status: "SCHEDULED" },
      { status: "PENDING_PAYMENT", createdAt: { gte: expect.any(Date) } },
    ]);
    const cutoff = call.where.OR[1].createdAt.gte as Date;
    expect(REFERENCE_NOW.getTime() - cutoff.getTime()).toBe(15 * 60 * 1000);
  });
});

describe("ExpertSessionService booking lifecycle", () => {
  let service: ExpertSessionService;

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(prisma.expertAvailabilityBlock.findMany).mockResolvedValue([]);
    vi.mocked(prisma.expertSession.findMany).mockResolvedValue([]);
    vi.mocked(prisma.$transaction).mockImplementation((fn: any) => fn(prisma));
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
    // The atomic transition succeeds (one row flipped PENDING_PAYMENT -> SCHEDULED).
    vi.mocked(prisma.expertSession.updateMany).mockResolvedValue({ count: 1 } as any);
    vi.mocked(prisma.expertSession.findUnique).mockResolvedValue({
      id: 5,
      scheduledAt: new Date("2026-08-05T04:30:00.000Z"),
      targetRole: "SDE",
      experienceLevel: "FRESHER",
      focusAreas: ["DSA"],
      notes: null,
      user: { name: "Test Student", email: "student@example.com" },
    } as any);

    await service.confirmBooking("dodo_session_123");

    expect(prisma.expertSession.updateMany).toHaveBeenCalledWith({
      where: { dodoPaymentId: "dodo_session_123", status: "PENDING_PAYMENT" },
      data: { status: "SCHEDULED" },
    });
    expect(emailUtils.sendEmail).toHaveBeenCalledTimes(2);
  });

  it("confirmBooking is a no-op when no session matches the payment id", async () => {
    const emailUtils = await import("../utils/email.utils.js");
    vi.mocked(prisma.expertSession.updateMany).mockResolvedValue({ count: 0 } as any);

    await service.confirmBooking("unknown_session");

    expect(prisma.expertSession.findUnique).not.toHaveBeenCalled();
    expect(emailUtils.sendEmail).not.toHaveBeenCalled();
  });

  it("confirmBooking is idempotent: a redelivered webhook sends no duplicate emails", async () => {
    const emailUtils = await import("../utils/email.utils.js");
    // Row is already SCHEDULED, so the conditional transition matches nothing.
    vi.mocked(prisma.expertSession.updateMany).mockResolvedValue({ count: 0 } as any);

    await service.confirmBooking("dodo_session_123");

    expect(prisma.expertSession.findUnique).not.toHaveBeenCalled();
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

describe("ExpertSessionService.bookSession concurrency (regression for #2691)", () => {
  // Real Postgres Serializable transactions guarantee that of two concurrent
  // transactions touching the same row, exactly one commits and the other
  // gets aborted with a serialization failure. This in-memory double
  // reproduces that guarantee (transaction bodies run one at a time, and
  // `create` enforces the same "one active session per scheduledAt" rule as
  // the partial unique index added in
  // 20260712000000_add_expert_session_slot_unique_index) so we can drive a
  // genuine two-requests-race-for-one-slot scenario without a real database.
  function makeInMemoryDb(now: Date) {
    const sessions: { scheduledAt: Date; status: string; createdAt: Date }[] = [];
    let queue: Promise<unknown> = Promise.resolve();

    const client = {
      expertAvailabilityBlock: { findMany: vi.fn().mockResolvedValue([]) },
      expertSession: {
        findMany: vi.fn(async ({ where }: any) => {
          return sessions
            .filter(
              (s) =>
                s.status === "SCHEDULED" &&
                s.scheduledAt.getTime() >= where.scheduledAt.gte.getTime() &&
                s.scheduledAt.getTime() <= where.scheduledAt.lte.getTime(),
            )
            .map((s) => ({ scheduledAt: s.scheduledAt }));
        }),
        deleteMany: vi.fn(async ({ where }: any) => {
          const before = sessions.length;
          for (let i = sessions.length - 1; i >= 0; i--) {
            const s = sessions[i]!;
            if (
              s.scheduledAt.getTime() === where.scheduledAt.getTime() &&
              s.status === where.status &&
              s.createdAt.getTime() < where.createdAt.lt.getTime()
            ) {
              sessions.splice(i, 1);
            }
          }
          return { count: before - sessions.length };
        }),
        create: vi.fn(async ({ data }: any) => {
          const clash = sessions.some(
            (s) =>
              s.scheduledAt.getTime() === data.scheduledAt.getTime() &&
              (s.status === "PENDING_PAYMENT" || s.status === "SCHEDULED"),
          );
          if (clash) {
            throw Object.assign(new Error("Unique constraint failed on the fields: (`scheduledAt`)"), {
              code: "P2002",
            });
          }
          const record = { id: sessions.length + 1, createdAt: now, ...data };
          sessions.push(record);
          return record;
        }),
      },
      $transaction: vi.fn((fn: any) => {
        // Chain each transaction body onto the previous one so bodies never
        // interleave — this is what Serializable isolation buys you for two
        // transactions racing to write the same row.
        const run = queue.then(() => fn(client));
        queue = run.catch(() => {});
        return run;
      }),
    };

    return { client, sessions };
  }

  it("lets only one of two concurrent bookings for the same slot succeed", async () => {
    const { client } = makeInMemoryDb(REFERENCE_NOW);
    vi.mocked(prisma.$transaction).mockImplementation(client.$transaction as any);
    vi.mocked(prisma.expertAvailabilityBlock.findMany).mockImplementation(
      client.expertAvailabilityBlock.findMany as any,
    );
    vi.mocked(prisma.expertSession.findMany).mockImplementation(client.expertSession.findMany as any);
    vi.mocked(prisma.expertSession.create).mockImplementation(client.expertSession.create as any);

    const service = new ExpertSessionService();
    const [slot] = await service.getAvailableSlots(REFERENCE_NOW);

    const results = await Promise.allSettled([
      service.bookSession(1, { scheduledAt: slot!, focusAreas: ["System Design"] }, REFERENCE_NOW),
      service.bookSession(2, { scheduledAt: slot!, focusAreas: ["DSA"] }, REFERENCE_NOW),
    ]);

    const fulfilled = results.filter((r) => r.status === "fulfilled");
    const rejected = results.filter((r) => r.status === "rejected");

    expect(fulfilled).toHaveLength(1);
    expect(rejected).toHaveLength(1);
    expect((rejected[0] as PromiseRejectedResult).reason).toMatchObject({
      status: 409,
      message: "This slot has just been booked. Please choose another available slot.",
    });
    expect(client.expertSession.create).toHaveBeenCalledTimes(2); // one succeeds, one hits the unique index
  });

  it("lets two concurrent bookings for different slots both succeed", async () => {
    const { client } = makeInMemoryDb(REFERENCE_NOW);
    vi.mocked(prisma.$transaction).mockImplementation(client.$transaction as any);
    vi.mocked(prisma.expertAvailabilityBlock.findMany).mockImplementation(
      client.expertAvailabilityBlock.findMany as any,
    );
    vi.mocked(prisma.expertSession.findMany).mockImplementation(client.expertSession.findMany as any);
    vi.mocked(prisma.expertSession.create).mockImplementation(client.expertSession.create as any);

    const service = new ExpertSessionService();
    const slots = await service.getAvailableSlots(REFERENCE_NOW);

    const results = await Promise.allSettled([
      service.bookSession(1, { scheduledAt: slots[0]!, focusAreas: [] }, REFERENCE_NOW),
      service.bookSession(2, { scheduledAt: slots[1]!, focusAreas: [] }, REFERENCE_NOW),
    ]);

    expect(results.every((r) => r.status === "fulfilled")).toBe(true);
  });

  it("reclaims a slot whose only holder is a stale (TTL-expired) PENDING_PAYMENT hold", async () => {
    const { client, sessions } = makeInMemoryDb(REFERENCE_NOW);
    vi.mocked(prisma.$transaction).mockImplementation(client.$transaction as any);
    vi.mocked(prisma.expertAvailabilityBlock.findMany).mockImplementation(
      client.expertAvailabilityBlock.findMany as any,
    );
    vi.mocked(prisma.expertSession.findMany).mockImplementation(client.expertSession.findMany as any);
    vi.mocked(prisma.expertSession.deleteMany).mockImplementation(client.expertSession.deleteMany as any);
    vi.mocked(prisma.expertSession.create).mockImplementation(client.expertSession.create as any);

    const service = new ExpertSessionService();
    const [slot] = await service.getAvailableSlots(REFERENCE_NOW);

    sessions.push({
      scheduledAt: slot!,
      status: "PENDING_PAYMENT",
      createdAt: new Date(REFERENCE_NOW.getTime() - 20 * 60 * 1000),
    });

    const result = await service.bookSession(1, { scheduledAt: slot!, focusAreas: [] }, REFERENCE_NOW);

    expect(result).toBeTruthy();
    expect(client.expertSession.deleteMany).toHaveBeenCalled();
    const activeForSlot = sessions.filter(
      (s) => s.scheduledAt.getTime() === slot!.getTime() && s.status === "PENDING_PAYMENT",
    );
    expect(activeForSlot).toHaveLength(1);
  });
});
