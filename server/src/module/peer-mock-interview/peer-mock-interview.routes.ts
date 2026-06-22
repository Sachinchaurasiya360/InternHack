import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { PeerMockInterviewController } from "./peer-mock-interview.controller.js";

const controller = new PeerMockInterviewController();

export const peerMockInterviewRouter = Router();

// Retrieve user's mock interview preferences
peerMockInterviewRouter.get(
  "/preferences",
  authMiddleware,
  (req, res) => controller.getPreference(req, res)
);

// Create or update user's mock interview preferences
peerMockInterviewRouter.post(
  "/preferences",
  authMiddleware,
  (req, res) => controller.upsertPreference(req, res)
);

// Retrieve the current active scheduled mock interview pairing
peerMockInterviewRouter.get(
  "/pairings/upcoming",
  authMiddleware,
  (req, res) => controller.getUpcomingPairing(req, res)
);

// Retrieve full details of a specific pairing
peerMockInterviewRouter.get(
  "/pairings/:id",
  authMiddleware,
  (req, res) => controller.getPairingDetails(req, res)
);

// Mark a specific mock interview session as completed
peerMockInterviewRouter.post(
  "/pairings/:id/complete",
  authMiddleware,
  (req, res) => controller.markCompleted(req, res)
);

// Submit rating and feedback for a partner in a completed mock interview
peerMockInterviewRouter.post(
  "/pairings/:id/rate",
  authMiddleware,
  (req, res) => controller.submitRating(req, res)
);
