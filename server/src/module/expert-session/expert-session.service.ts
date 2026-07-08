import { prisma } from "../../database/db.js";
import { sendEmail } from "../../utils/email.utils.js";

const IST_OFFSET_MINUTES = 330; // UTC+5:30, fixed offset (India has no DST)
const SLOT_DURATION_MINUTES = 30;
const BUSINESS_START_HOUR = 10; // 10:00 IST
const BUSINESS_END_HOUR = 18; // last slot starts 17:30, ends 18:00 IST
const LOOKAHEAD_DAYS = 14;
const MIN_LEAD_HOURS = 12;

const ADMIN_ALERT_EMAIL = process.env["ADMIN_ALERT_EMAIL"] ?? "";

interface IstParts {
  year: number;
  month: number; // 0-indexed
  date: number;
  day: number; // 0=Sun..6=Sat
  hour: number;
  minute: number;
}

function toIstParts(utcDate: Date): IstParts {
  const shifted = new Date(utcDate.getTime() + IST_OFFSET_MINUTES * 60_000);
  return {
    year: shifted.getUTCFullYear(),
    month: shifted.getUTCMonth(),
    date: shifted.getUTCDate(),
    day: shifted.getUTCDay(),
    hour: shifted.getUTCHours(),
    minute: shifted.getUTCMinutes(),
  };
}

function istWallClockToUtc(year: number, month: number, date: number, hour: number, minute: number): Date {
  return new Date(Date.UTC(year, month, date, hour, minute, 0, 0) - IST_OFFSET_MINUTES * 60_000);
}

function istDateKey(p: Pick<IstParts, "year" | "month" | "date">): string {
  return `${p.year}-${p.month}-${p.date}`;
}

function utcDateOnlyKey(d: Date): string {
  return `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}`;
}

function istTimeKey(p: Pick<IstParts, "hour" | "minute">): string {
  return `${String(p.hour).padStart(2, "0")}:${String(p.minute).padStart(2, "0")}`;
}

/** Every candidate business-hours slot for the next LOOKAHEAD_DAYS, unfiltered. */
function generateSlotCandidates(now: Date): Date[] {
  const slots: Date[] = [];
  const nowIst = toIstParts(now);

  for (let dayOffset = 0; dayOffset < LOOKAHEAD_DAYS; dayOffset++) {
    const dayAnchor = istWallClockToUtc(nowIst.year, nowIst.month, nowIst.date + dayOffset, 12, 0);
    const dayIst = toIstParts(dayAnchor);
    if (dayIst.day === 0 || dayIst.day === 6) continue; // skip weekends

    for (let hour = BUSINESS_START_HOUR; hour < BUSINESS_END_HOUR; hour++) {
      for (let minute = 0; minute < 60; minute += SLOT_DURATION_MINUTES) {
        slots.push(istWallClockToUtc(dayIst.year, dayIst.month, dayIst.date, hour, minute));
      }
    }
  }
  return slots;
}

export class ExpertSessionService {
  /** Business-hours slots minus admin blocks, existing bookings, and the minimum lead time. */
  async getAvailableSlots(now: Date = new Date()): Promise<Date[]> {
    const minTime = new Date(now.getTime() + MIN_LEAD_HOURS * 60 * 60 * 1000);
    const candidates = generateSlotCandidates(now).filter((slot) => slot >= minTime);
    if (candidates.length === 0) return [];

    const rangeStart = candidates[0]!;
    const rangeEnd = candidates[candidates.length - 1]!;

    const [blocks, booked] = await Promise.all([
      prisma.expertAvailabilityBlock.findMany({
        where: { date: { gte: rangeStart, lte: rangeEnd } },
      }),
      prisma.expertSession.findMany({
        where: { status: "SCHEDULED", scheduledAt: { gte: rangeStart, lte: rangeEnd } },
        select: { scheduledAt: true },
      }),
    ]);

    const bookedSet = new Set(booked.map((b) => b.scheduledAt.getTime()));
    const blocksByDate = new Map<string, typeof blocks>();
    for (const block of blocks) {
      const key = utcDateOnlyKey(block.date);
      const list = blocksByDate.get(key) ?? [];
      list.push(block);
      blocksByDate.set(key, list);
    }

    return candidates.filter((slot) => {
      if (bookedSet.has(slot.getTime())) return false;

      const slotIst = toIstParts(slot);
      const dayBlocks = blocksByDate.get(istDateKey(slotIst));
      if (!dayBlocks) return true;

      const slotTime = istTimeKey(slotIst);
      return !dayBlocks.some((block) => {
        if (!block.startTime || !block.endTime) return true; // whole day blocked
        return slotTime >= block.startTime && slotTime < block.endTime;
      });
    });
  }

  async bookSession(
    userId: number,
    input: {
      scheduledAt: Date;
      targetRole?: string;
      experienceLevel?: string;
      focusAreas: string[];
      notes?: string;
    },
    now: Date = new Date(),
  ) {
    const available = await this.getAvailableSlots(now);
    const isAvailable = available.some((slot) => slot.getTime() === input.scheduledAt.getTime());
    if (!isAvailable) {
      throw Object.assign(new Error("That slot is no longer available"), { status: 409 });
    }

    return prisma.expertSession.create({
      data: {
        userId,
        scheduledAt: input.scheduledAt,
        targetRole: input.targetRole,
        experienceLevel: input.experienceLevel,
        focusAreas: input.focusAreas,
        notes: input.notes,
        status: "PENDING_PAYMENT",
      },
    });
  }

  async attachCheckout(id: number, dodoPaymentId: string, dodoCheckoutUrl: string) {
    await prisma.expertSession.update({
      where: { id },
      data: { dodoPaymentId, dodoCheckoutUrl },
    });
  }

  async deletePendingSession(id: number) {
    await prisma.expertSession.deleteMany({ where: { id, status: "PENDING_PAYMENT" } });
  }

  async getStatus(userId: number, id: number) {
    const session = await prisma.expertSession.findUnique({ where: { id } });
    if (!session || session.userId !== userId) {
      throw Object.assign(new Error("Session not found"), { status: 404 });
    }
    return session;
  }

  async getMySessions(userId: number) {
    return prisma.expertSession.findMany({
      where: { userId },
      orderBy: { scheduledAt: "desc" },
    });
  }

  /** Called from the payment webhook once the ₹49 checkout succeeds. */
  async confirmBooking(dodoPaymentId: string) {
    const session = await prisma.expertSession.findUnique({ where: { dodoPaymentId } });
    if (!session) return;

    const updated = await prisma.expertSession.update({
      where: { id: session.id },
      data: { status: "SCHEDULED" },
      include: { user: { select: { name: true, email: true } } },
    });

    const scheduledLabel = updated.scheduledAt.toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    sendEmail({
      to: ADMIN_ALERT_EMAIL,
      subject: `New expert session booking: ${updated.user.name}`,
      html: `<h2>New Expert Session Booking</h2>
        <p><strong>Student:</strong> ${updated.user.name} (${updated.user.email})</p>
        <p><strong>Scheduled for:</strong> ${scheduledLabel} IST</p>
        <p><strong>Target role:</strong> ${updated.targetRole ?? "Not specified"}</p>
        <p><strong>Experience level:</strong> ${updated.experienceLevel ?? "Not specified"}</p>
        <p><strong>Focus areas:</strong> ${updated.focusAreas.join(", ") || "Not specified"}</p>
        <p><strong>Notes:</strong> ${updated.notes ?? "None"}</p>`,
    }).catch((err) => console.error("[ExpertSession] Failed to send admin alert email:", err));

    if (updated.user.email) {
      sendEmail({
        to: updated.user.email,
        subject: "Your expert mock interview session is confirmed",
        html: `<h2>Session Confirmed</h2>
          <p>Your expert mock interview session is booked for <strong>${scheduledLabel} IST</strong>.</p>
          <p>You'll receive the meeting link by email shortly before your session.</p>`,
      }).catch((err) => console.error("[ExpertSession] Failed to send student confirmation email:", err));
    }

    return updated;
  }

  /** Called from the payment webhook if the ₹49 checkout fails, freeing the slot. */
  async cancelPendingBooking(dodoPaymentId: string) {
    const session = await prisma.expertSession.findUnique({ where: { dodoPaymentId } });
    if (!session || session.status !== "PENDING_PAYMENT") return;

    await prisma.expertSession.delete({ where: { id: session.id } });
  }

  // ── Admin: availability blocks ──────────────────────────────────
  async listAvailabilityBlocks() {
    return prisma.expertAvailabilityBlock.findMany({ orderBy: { date: "asc" } });
  }

  async createAvailabilityBlock(input: { date: Date; startTime?: string; endTime?: string; reason?: string }) {
    return prisma.expertAvailabilityBlock.create({ data: input });
  }

  async deleteAvailabilityBlock(id: number) {
    await prisma.expertAvailabilityBlock.delete({ where: { id } });
  }

  async listBookings() {
    return prisma.expertSession.findMany({
      where: { status: { in: ["SCHEDULED", "COMPLETED"] } },
      orderBy: { scheduledAt: "desc" },
      include: { user: { select: { name: true, email: true } } },
    });
  }
}
