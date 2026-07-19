import { Prisma } from "@prisma/client";
import { prisma } from "../../database/db.js";
import { sendEmail } from "../../utils/email.utils.js";

/** Anything that exposes the model delegates we need — either the top-level
 * PrismaClient or a `tx` handed to us inside `prisma.$transaction`. */
type DbClient = Prisma.TransactionClient | typeof prisma;

const IST_OFFSET_MINUTES = 330; // UTC+5:30, fixed offset (India has no DST)
const SLOT_DURATION_MINUTES = 30;
const BUSINESS_START_HOUR = 0; // 00:00 IST (bookable the entire day)
const BUSINESS_END_HOUR = 24; // last slot starts 23:30, ends 00:00 IST
const LOOKAHEAD_DAYS = 14;
const MIN_LEAD_HOURS = 12;
// How long a PENDING_PAYMENT hold blocks a slot's availability before it's
// treated as abandoned. Checkout sessions are expected to complete or fail
// within a couple minutes; this is deliberately generous.
const PENDING_HOLD_TTL_MINUTES = 15;

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
    // Every day is bookable, including Saturday and Sunday.

    for (let hour = BUSINESS_START_HOUR; hour < BUSINESS_END_HOUR; hour++) {
      for (let minute = 0; minute < 60; minute += SLOT_DURATION_MINUTES) {
        slots.push(istWallClockToUtc(dayIst.year, dayIst.month, dayIst.date, hour, minute));
      }
    }
  }
  return slots;
}

/** Cutoff before which a PENDING_PAYMENT hold is treated as abandoned. */
function pendingHoldCutoff(now: Date): Date {
  return new Date(now.getTime() - PENDING_HOLD_TTL_MINUTES * 60 * 1000);
}

export class ExpertSessionService {
  /**
   * Business-hours slots minus admin blocks, existing bookings, and the minimum lead time.
   *
   * Accepts an optional `db` client so `bookSession` can re-run this same check
   * inside its transaction against a consistent snapshot (see below).
   */
  async getAvailableSlots(now: Date = new Date(), db: DbClient = prisma): Promise<Date[]> {
    const minTime = new Date(now.getTime() + MIN_LEAD_HOURS * 60 * 60 * 1000);
    const candidates = generateSlotCandidates(now).filter((slot) => slot >= minTime);
    if (candidates.length === 0) return [];

    const rangeStart = candidates[0]!;
    const rangeEnd = candidates[candidates.length - 1]!;
    // A PENDING_PAYMENT row is an active hold on a slot, so it should make
    // that slot look unavailable too — not just SCHEDULED ones. But there's
    // no cleanup job for abandoned checkouts (user closes the tab, no
    // success/failure webhook ever fires), so an unbounded hold could
    // permanently lock a slot. Cap how long a pending hold blocks
    // availability; past that, treat it as abandoned and let the slot show
    // as free again. The partial unique index still protects against a
    // genuinely-concurrent double booking even if a stale hold slips through
    // this window.
    const holdCutoff = pendingHoldCutoff(now);

    const [blocks, booked] = await Promise.all([
      db.expertAvailabilityBlock.findMany({
        where: { date: { gte: rangeStart, lte: rangeEnd } },
      }),
      db.expertSession.findMany({
        where: {
          scheduledAt: { gte: rangeStart, lte: rangeEnd },
          OR: [{ status: "SCHEDULED" }, { status: "PENDING_PAYMENT", createdAt: { gte: holdCutoff } }],
        },
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
      recordingConsent?: boolean;
    },
    now: Date = new Date(),
  ) {
    try {
      // Serializable transaction closes the TOCTOU gap between the
      // availability check and the insert: if two requests race for the same
      // slot, Postgres aborts the loser with a P2034 serialization failure
      // instead of letting both reads see the slot as free (same pattern as
      // usageLimit middleware). The partial unique index added in migration
      // 20260712000000_add_expert_session_slot_unique_index is the backstop
      // in case this method is ever called outside a Serializable transaction.
      return await prisma.$transaction(
        async (tx) => {
          // The availability check below treats a PENDING_PAYMENT hold older
          // than PENDING_HOLD_TTL_MINUTES as abandoned and ignores it — but
          // the partial unique index doesn't know about that TTL, it just
          // sees an existing active row and rejects the insert. Without this
          // delete, a slot could show as available and then always 409 on
          // create. Clear out any stale hold for *this exact slot* first so
          // the two checks agree.
          await tx.expertSession.deleteMany({
            where: {
              scheduledAt: input.scheduledAt,
              status: "PENDING_PAYMENT",
              createdAt: { lt: pendingHoldCutoff(now) },
            },
          });

          const available = await this.getAvailableSlots(now, tx);
          const isAvailable = available.some((slot) => slot.getTime() === input.scheduledAt.getTime());
          if (!isAvailable) {
            throw Object.assign(new Error("That slot is no longer available"), { status: 409 });
          }

          return tx.expertSession.create({
            data: {
              userId,
              scheduledAt: input.scheduledAt,
              targetRole: input.targetRole,
              experienceLevel: input.experienceLevel,
              focusAreas: input.focusAreas,
              notes: input.notes,
              recordingConsent: input.recordingConsent ?? true,
              status: "PENDING_PAYMENT",
            },
          });
        },
        { isolationLevel: Prisma.TransactionIsolationLevel.Serializable },
      );
    } catch (err) {
      // Our own "not available" check above already carries a `.status`, so
      // just propagate it as-is.
      if (typeof err === "object" && err !== null && "status" in err) {
        throw err;
      }

      const code = typeof err === "object" && err !== null && "code" in err ? (err as { code: unknown }).code : undefined;
      // P2034 = Prisma serialization failure (lost the Serializable race).
      // P2002 = unique constraint violation on the partial index below.
      // Both mean a concurrent request booked this exact slot first.
      if (code === "P2034" || code === "P2002") {
        throw Object.assign(new Error("This slot has just been booked. Please choose another available slot."), {
          status: 409,
        });
      }
      throw err;
    }
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
    // Atomically flip PENDING_PAYMENT -> SCHEDULED. Dodo delivers webhooks at
    // least once (and we return 5xx on transient errors, which triggers a retry),
    // so this guard is what stops a redelivery, or a concurrent delivery, from
    // re-sending both confirmation emails and rewriting the row. Only the call
    // that actually performs the transition (count === 1) goes on to notify.
    const { count } = await prisma.expertSession.updateMany({
      where: { dodoPaymentId, status: "PENDING_PAYMENT" },
      data: { status: "SCHEDULED" },
    });
    if (count === 0) return;

    const updated = await prisma.expertSession.findUnique({
      where: { dodoPaymentId },
      include: { user: { select: { name: true, email: true } } },
    });
    if (!updated) return;

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
        <p><strong>Notes:</strong> ${updated.notes ?? "None"}</p>
        <p><strong>Recording consent:</strong> ${updated.recordingConsent ? "Yes — agreed to be recorded" : "No — declined recording"}</p>`,
    }).catch((err) => console.error("[ExpertSession] Failed to send admin alert email:", err));

    if (updated.user.email) {
      sendEmail({
        to: updated.user.email,
        subject: "Your expert mock interview session is confirmed",
        html: `<h2>Session Confirmed</h2>
          <p>Your expert mock interview session is booked for <strong>${scheduledLabel} IST</strong>.</p>
          <p>You'll receive the meeting link by email shortly before your session.</p>
          <p>${updated.recordingConsent
            ? "You agreed to have this interview recorded so others can watch and learn from it. You can change your mind at the start of the session."
            : "You chose not to have this interview recorded."}</p>`,
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
