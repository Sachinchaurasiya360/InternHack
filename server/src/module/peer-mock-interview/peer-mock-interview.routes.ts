import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";
import { PeerMockInterviewController } from "./peer-mock-interview.controller.js";
import { mockInterviewPreferenceSchema, mockInterviewFeedbackSchema, proposeTimeSchema, acceptTimeSchema } from "./peer-mock-interview.validation.js";
import { z } from "zod";
import type { Request, Response, NextFunction } from "express";

const controller = new PeerMockInterviewController();

export const peerMockInterviewRouter = Router();

function validateBody(schema: z.Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ message: "Validation failed", errors: parsed.error.format() });
      return;
    }
    next();
  };
}

// Retrieve user's mock interview preferences
peerMockInterviewRouter.get(
  "/preferences",
  authMiddleware,
  requireRole("STUDENT"),
  usageLimit("MOCK_INTERVIEW"),
  (req, res) => controller.getPreference(req, res)
);

// Create or update user's mock interview preferences
peerMockInterviewRouter.post(
  "/preferences",
  authMiddleware,
  requireRole("STUDENT"),
  usageLimit("MOCK_INTERVIEW"),
  validateBody(mockInterviewPreferenceSchema),
  (req, res) => controller.upsertPreference(req, res)
);

// Retrieve the current active scheduled mock interview pairing
peerMockInterviewRouter.get(
  "/pairings/upcoming",
  authMiddleware,
  requireRole("STUDENT"),
  usageLimit("MOCK_INTERVIEW"),
  (req, res) => controller.getUpcomingPairing(req, res)
);

// Retrieve full details of a specific pairing
peerMockInterviewRouter.get(
  "/pairings/:id",
  authMiddleware,
  requireRole("STUDENT"),
  usageLimit("MOCK_INTERVIEW"),
  (req, res) => controller.getPairingDetails(req, res)
);

// Mark a specific mock interview session as completed
peerMockInterviewRouter.post(
  "/pairings/:id/complete",
  authMiddleware,
  requireRole("STUDENT"),
  usageLimit("MOCK_INTERVIEW"),
  (req, res) => controller.markCompleted(req, res)
);

// Submit rating and feedback for a partner in a completed mock interview
peerMockInterviewRouter.post(
  "/pairings/:id/rate",
  authMiddleware,
  requireRole("STUDENT"),
  usageLimit("MOCK_INTERVIEW"),
  validateBody(mockInterviewFeedbackSchema),
  (req, res) => controller.submitRating(req, res)
);

// Propose a time for a pending mock interview
peerMockInterviewRouter.post(
  "/pairings/:id/propose-time",
  authMiddleware,
  requireRole("STUDENT"),
  usageLimit("MOCK_INTERVIEW"),
  validateBody(proposeTimeSchema),
  (req, res) => controller.proposeTime(req, res)
);

// Accept a proposed time
peerMockInterviewRouter.post(
  "/pairings/:id/accept-time",
  authMiddleware,
  requireRole("STUDENT"),
  usageLimit("MOCK_INTERVIEW"),
  validateBody(acceptTimeSchema),
  (req, res) => controller.acceptTime(req, res)
);

// Reject a proposed time
peerMockInterviewRouter.post(
  "/pairings/:id/reject-time",
  authMiddleware,
  requireRole("STUDENT"),
  usageLimit("MOCK_INTERVIEW"),
  validateBody(z.object({})),
  (req, res) => controller.rejectTime(req, res)
);
