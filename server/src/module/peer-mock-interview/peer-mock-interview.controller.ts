import type { Request, Response } from "express";
import { prisma } from "../../database/db.js";
import { PeerMockInterviewService } from "./peer-mock-interview.service.js";
import { mockInterviewPreferenceSchema, mockInterviewFeedbackSchema, proposeTimeSchema, acceptTimeSchema } from "./peer-mock-interview.validation.js";

const service = new PeerMockInterviewService();

export class PeerMockInterviewController {
  private async checkPremiumSubscription(userId: number): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { subscriptionPlan: true, subscriptionStatus: true },
    });
    return !!(
      user &&
      (user.subscriptionPlan === "MONTHLY" || user.subscriptionPlan === "YEARLY") &&
      user.subscriptionStatus === "ACTIVE"
    );
  }

  async getPreference(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      if (!await this.checkPremiumSubscription(req.user.id)) {
        res.status(403).json({ message: "Premium subscription required for peer mock interviews" });
        return;
      }
      const userId = req.user.id;
      const pref = await service.getPreference(userId);
      res.json(pref);
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to fetch preferences" });
    }
  }

  async upsertPreference(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      if (!await this.checkPremiumSubscription(req.user.id)) {
        res.status(403).json({ message: "Premium subscription required for peer mock interviews" });
        return;
      }
      const userId = req.user.id;
      const parsed = mockInterviewPreferenceSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid preferences input", errors: parsed.error.format() });
        return;
      }

      const { topic, availability, enabled } = parsed.data;
      const pref = await service.upsertPreference(userId, topic, availability, enabled);
      res.json(pref);
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to update preferences" });
    }
  }

  async getUpcomingPairing(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      if (!await this.checkPremiumSubscription(req.user.id)) {
        res.status(403).json({ message: "Premium subscription required for peer mock interviews" });
        return;
      }
      const userId = req.user.id;
      const pairing = await service.getUpcomingPairing(userId);
      res.json(pairing);
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to fetch upcoming pairing" });
    }
  }

  async getPairingDetails(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      if (!await this.checkPremiumSubscription(req.user.id)) {
        res.status(403).json({ message: "Premium subscription required for peer mock interviews" });
        return;
      }
      const userId = req.user.id;
      const pairingId = parseInt(String(req.params["id"] || ""), 10);
      if (isNaN(pairingId)) {
        res.status(400).json({ message: "Invalid pairing ID" });
        return;
      }

      const pairing = await service.getPairingDetails(userId, pairingId);
      res.json(pairing);
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to fetch pairing details" });
    }
  }

  async markCompleted(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      if (!await this.checkPremiumSubscription(req.user.id)) {
        res.status(403).json({ message: "Premium subscription required for peer mock interviews" });
        return;
      }
      const userId = req.user.id;
      const pairingId = parseInt(String(req.params["id"] || ""), 10);
      if (isNaN(pairingId)) {
        res.status(400).json({ message: "Invalid pairing ID" });
        return;
      }

      const updated = await service.markCompleted(userId, pairingId);
      res.json({ message: "Mock interview marked completed", pairing: updated });
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to complete pairing" });
    }
  }

  async submitRating(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      if (!await this.checkPremiumSubscription(req.user.id)) {
        res.status(403).json({ message: "Premium subscription required for peer mock interviews" });
        return;
      }
      const userId = req.user.id;
      const pairingId = parseInt(String(req.params["id"] || ""), 10);
      if (isNaN(pairingId)) {
        res.status(400).json({ message: "Invalid pairing ID" });
        return;
      }

      const parsed = mockInterviewFeedbackSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid feedback input", errors: parsed.error.format() });
        return;
      }

      const { rating, feedback } = parsed.data;
      const updated = await service.submitRating(userId, pairingId, rating, feedback);
      res.json({ message: "Feedback submitted successfully", pairing: updated });
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to submit feedback" });
    }
  }
  async proposeTime(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      if (!await this.checkPremiumSubscription(req.user.id)) {
        res.status(403).json({ message: "Premium subscription required for peer mock interviews" });
        return;
      }
      const userId = req.user.id;
      const pairingId = parseInt(String(req.params["id"] || ""), 10);
      if (isNaN(pairingId)) {
        res.status(400).json({ message: "Invalid pairing ID" });
        return;
      }

      const parsed = proposeTimeSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid time proposal input", errors: parsed.error.format() });
        return;
      }

      const { proposedTime } = parsed.data;
      const updated = await service.proposeTime(userId, pairingId, proposedTime);
      res.json({ message: "Time proposed successfully", pairing: updated });
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to propose time" });
    }
  }

  async acceptTime(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      if (!await this.checkPremiumSubscription(req.user.id)) {
        res.status(403).json({ message: "Premium subscription required for peer mock interviews" });
        return;
      }
      const userId = req.user.id;
      const pairingId = parseInt(String(req.params["id"] || ""), 10);
      if (isNaN(pairingId)) {
        res.status(400).json({ message: "Invalid pairing ID" });
        return;
      }

      const parsed = acceptTimeSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid acceptance input", errors: parsed.error.format() });
        return;
      }

      const { meetingLink } = parsed.data;
      const updated = await service.acceptTime(userId, pairingId, meetingLink);
      res.json({ message: "Time accepted successfully", pairing: updated });
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to accept time" });
    }
  }

  async rejectTime(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      if (!await this.checkPremiumSubscription(req.user.id)) {
        res.status(403).json({ message: "Premium subscription required for peer mock interviews" });
        return;
      }
      const userId = req.user.id;
      const pairingId = parseInt(String(req.params["id"] || ""), 10);
      if (isNaN(pairingId)) {
        res.status(400).json({ message: "Invalid pairing ID" });
        return;
      }

      const updated = await service.rejectTime(userId, pairingId);
      res.json({ message: "Time rejected successfully", pairing: updated });
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to reject time" });
    }
  }
}
