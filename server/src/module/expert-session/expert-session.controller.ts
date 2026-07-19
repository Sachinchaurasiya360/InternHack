import type { Request, Response } from "express";
import { DodoPaymentsError } from "dodopayments";
import { ExpertSessionService } from "./expert-session.service.js";
import { PaymentService } from "../payment/payment.service.js";

const service = new ExpertSessionService();
const paymentService = new PaymentService();

export class ExpertSessionController {
  async getAvailableSlots(_req: Request, res: Response) {
    try {
      const slots = await service.getAvailableSlots();
      res.json({ slots: slots.map((s) => s.toISOString()) });
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to fetch available slots" });
    }
  }

  async checkout(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const { scheduledAt, targetRole, experienceLevel, focusAreas, notes, recordingConsent } = req.body;

      const session = await service.bookSession(req.user.id, {
        scheduledAt: new Date(scheduledAt),
        targetRole,
        experienceLevel,
        focusAreas,
        notes,
        recordingConsent: recordingConsent !== false,
      });

      try {
        const { checkoutUrl, sessionId } = await paymentService.createExpertSessionCheckout(
          req.user.id,
          session.id,
          { email: req.user.email },
        );
        if (!checkoutUrl) throw new Error("No checkout URL returned by payment provider");
        await service.attachCheckout(session.id, sessionId, checkoutUrl);
        res.json({ checkoutUrl, sessionId, expertSessionId: session.id });
      } catch (checkoutErr) {
        // Slot was reserved but the checkout couldn't be created — free it up
        // immediately rather than leaving an unpayable row blocking nothing
        // but confusing admin visibility.
        await service.deletePendingSession(session.id);
        throw checkoutErr;
      }
    } catch (err: any) {
      // A payment-provider failure (e.g. Dodo returning 401 for a bad/rotated API
      // key) is a server-side misconfiguration, not a client auth problem. Never
      // mirror the provider's status to the browser: the global axios interceptor
      // logs the user out on any 401, so passing Dodo's 401 through would silently
      // sign the student out mid-checkout. Surface it as 502 and log the real cause.
      if (err instanceof DodoPaymentsError) {
        console.error("[ExpertSession] Payment provider error during checkout:", err);
        res.status(502).json({ message: "Payment is temporarily unavailable. Please try again shortly." });
        return;
      }
      res.status(err.status || 500).json({ message: err.message || "Failed to start checkout" });
    }
  }

  async getStatus(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const id = parseInt(String(req.params["id"] || ""), 10);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid session ID" });
        return;
      }
      const session = await service.getStatus(req.user.id, id);
      res.json(session);
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to fetch session status" });
    }
  }

  async getMySessions(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const sessions = await service.getMySessions(req.user.id);
      res.json(sessions);
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to fetch sessions" });
    }
  }

  // ── Admin ────────────────────────────────────────────────────────
  async listAvailabilityBlocks(_req: Request, res: Response) {
    try {
      const blocks = await service.listAvailabilityBlocks();
      res.json(blocks);
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to fetch availability blocks" });
    }
  }

  async createAvailabilityBlock(req: Request, res: Response) {
    try {
      const { date, startTime, endTime, reason } = req.body;
      const block = await service.createAvailabilityBlock({
        date: new Date(date),
        startTime,
        endTime,
        reason,
      });
      res.status(201).json(block);
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to create availability block" });
    }
  }

  async deleteAvailabilityBlock(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params["id"] || ""), 10);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid block ID" });
        return;
      }
      await service.deleteAvailabilityBlock(id);
      res.json({ message: "Availability block removed" });
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to delete availability block" });
    }
  }

  async listBookings(_req: Request, res: Response) {
    try {
      const bookings = await service.listBookings();
      res.json(bookings);
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to fetch bookings" });
    }
  }
}
