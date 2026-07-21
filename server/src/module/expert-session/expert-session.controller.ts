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
    } catch (err: unknown) {
      console.error(err);
      const status = typeof err === "object" && err !== null && "status" in err
        ? (err as { status: number }).status || 500
        : 500;
      const message = status < 500
        ? ((err as { message?: string }).message || "Operation failed")
        : "Internal Server Error";
      res.status(status).json({ message });
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
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof DodoPaymentsError) {
        console.error("[ExpertSession] Payment provider error during checkout:", err);
        res.status(502).json({ message: "Payment is temporarily unavailable. Please try again shortly." });
        return;
      }
      const status = typeof err === "object" && err !== null && "status" in err
        ? (err as { status: number }).status || 500
        : 500;
      const message = status < 500
        ? ((err as { message?: string }).message || "Operation failed")
        : "Internal Server Error";
      res.status(status).json({ message });
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
    } catch (err: unknown) {
      console.error(err);
      const status = typeof err === "object" && err !== null && "status" in err
        ? (err as { status: number }).status || 500
        : 500;
      const message = status < 500
        ? ((err as { message?: string }).message || "Operation failed")
        : "Internal Server Error";
      res.status(status).json({ message });
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
    } catch (err: unknown) {
      console.error(err);
      const status = typeof err === "object" && err !== null && "status" in err
        ? (err as { status: number }).status || 500
        : 500;
      const message = status < 500
        ? ((err as { message?: string }).message || "Operation failed")
        : "Internal Server Error";
      res.status(status).json({ message });
    }
  }

  // ── Admin ────────────────────────────────────────────────────────
  async listAvailabilityBlocks(_req: Request, res: Response) {
    try {
      const blocks = await service.listAvailabilityBlocks();
      res.json(blocks);
    } catch (err: unknown) {
      console.error(err);
      const status = typeof err === "object" && err !== null && "status" in err
        ? (err as { status: number }).status || 500
        : 500;
      const message = status < 500
        ? ((err as { message?: string }).message || "Operation failed")
        : "Internal Server Error";
      res.status(status).json({ message });
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
    } catch (err: unknown) {
      console.error(err);
      const status = typeof err === "object" && err !== null && "status" in err
        ? (err as { status: number }).status || 500
        : 500;
      const message = status < 500
        ? ((err as { message?: string }).message || "Operation failed")
        : "Internal Server Error";
      res.status(status).json({ message });
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
    } catch (err: unknown) {
      console.error(err);
      const status = typeof err === "object" && err !== null && "status" in err
        ? (err as { status: number }).status || 500
        : 500;
      const message = status < 500
        ? ((err as { message?: string }).message || "Operation failed")
        : "Internal Server Error";
      res.status(status).json({ message });
    }
  }

  async listBookings(_req: Request, res: Response) {
    try {
      const bookings = await service.listBookings();
      res.json(bookings);
    } catch (err: unknown) {
      console.error(err);
      const status = typeof err === "object" && err !== null && "status" in err
        ? (err as { status: number }).status || 500
        : 500;
      const message = status < 500
        ? ((err as { message?: string }).message || "Operation failed")
        : "Internal Server Error";
      res.status(status).json({ message });
    }
  }
}
