import type { Request, Response } from "express";
import { PeerMockInterviewService } from "./peer-mock-interview.service.js";

const service = new PeerMockInterviewService();

// Body validation is handled by route middleware (validateBody), so these
// handlers assume an authenticated STUDENT and an already-parsed req.body.
// The feature is open to all students; the service tier-gates how many live
// matches are unlocked (premium sees all, free sees the top ones).
export class PeerMockInterviewController {
  async getMatches(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const matches = await service.getLiveMatches(req.user.id);
      res.json(matches);
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to fetch matches" });
    }
  }

  async selectMatch(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const { candidateUserId } = req.body;
      const pairing = await service.selectMatch(req.user.id, candidateUserId);
      res.json({ message: "Matched successfully", pairing });
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to create pairing" });
    }
  }

  async declinePairing(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const pairingId = parseInt(String(req.params["id"] || ""), 10);
      if (isNaN(pairingId)) {
        res.status(400).json({ message: "Invalid pairing ID" });
        return;
      }
      const pairing = await service.declinePairing(req.user.id, pairingId);
      res.json({ message: "Pairing declined", pairing });
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to decline pairing" });
    }
  }

  async getPreference(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const pref = await service.getPreference(req.user.id);
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
      const { topic, availability, enabled, targetRole, experienceLevel, focusAreas, customTopic } = req.body;
      const pref = await service.upsertPreference(req.user.id, topic, availability, enabled, {
        targetRole,
        experienceLevel,
        focusAreas,
        customTopic,
      });
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
      const pairing = await service.getUpcomingPairing(req.user.id);
      res.json(pairing);
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to fetch upcoming pairing" });
    }
  }

  async getHistory(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const pairings = await service.getHistoryPairings(req.user.id);
      res.json(pairings);
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to fetch mock interview history" });
    }
  }

  async getPairingDetails(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const pairingId = parseInt(String(req.params["id"] || ""), 10);
      if (isNaN(pairingId)) {
        res.status(400).json({ message: "Invalid pairing ID" });
        return;
      }
      const pairing = await service.getPairingDetails(req.user.id, pairingId);
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
      const pairingId = parseInt(String(req.params["id"] || ""), 10);
      if (isNaN(pairingId)) {
        res.status(400).json({ message: "Invalid pairing ID" });
        return;
      }
      const updated = await service.markCompleted(req.user.id, pairingId);
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
      const pairingId = parseInt(String(req.params["id"] || ""), 10);
      if (isNaN(pairingId)) {
        res.status(400).json({ message: "Invalid pairing ID" });
        return;
      }
      const { rating, feedback } = req.body;
      const updated = await service.submitRating(req.user.id, pairingId, rating, feedback);
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
      const pairingId = parseInt(String(req.params["id"] || ""), 10);
      if (isNaN(pairingId)) {
        res.status(400).json({ message: "Invalid pairing ID" });
        return;
      }
      const { proposedTime } = req.body;
      const updated = await service.proposeTime(req.user.id, pairingId, proposedTime);
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
      const pairingId = parseInt(String(req.params["id"] || ""), 10);
      if (isNaN(pairingId)) {
        res.status(400).json({ message: "Invalid pairing ID" });
        return;
      }
      const { meetingLink } = req.body;
      const updated = await service.acceptTime(req.user.id, pairingId, meetingLink);
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
      const pairingId = parseInt(String(req.params["id"] || ""), 10);
      if (isNaN(pairingId)) {
        res.status(400).json({ message: "Invalid pairing ID" });
        return;
      }
      const updated = await service.rejectTime(req.user.id, pairingId);
      res.json({ message: "Time rejected successfully", pairing: updated });
    } catch (err: any) {
      res.status(err.status || 500).json({ message: err.message || "Failed to reject time" });
    }
  }
}
