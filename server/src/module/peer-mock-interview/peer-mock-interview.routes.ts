import { Router } from "express";
import { z } from "zod";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { requirePremium } from "../../middleware/premium.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";
import { validateBody } from "../../middleware/validation.middleware.js";
import { PeerMockInterviewController } from "./peer-mock-interview.controller.js";
import { mockInterviewPreferenceSchema, mockInterviewFeedbackSchema, proposeTimeSchema, acceptTimeSchema } from "./peer-mock-interview.validation.js";

const controller = new PeerMockInterviewController();

export const peerMockInterviewRouter = Router();

// Every route requires an authenticated STUDENT with an active Premium
// subscription. requirePremium centralises the subscription lookup (via the
// canonical getPlanTier) so the controllers no longer repeat it, and the shared
// validateBody attaches parsed/transformed input to req.body so controllers do
// not re-parse.

// Retrieve user's mock interview preferences
peerMockInterviewRouter.get(
  "/preferences",
  authMiddleware,
  requireRole("STUDENT"),
  requirePremium,
  usageLimit("MOCK_INTERVIEW"),
  (req, res) => controller.getPreference(req, res)
);

// Create or update user's mock interview preferences
peerMockInterviewRouter.post(
  "/preferences",
  authMiddleware,
  requireRole("STUDENT"),
  requirePremium,
  usageLimit("MOCK_INTERVIEW"),
  validateBody(mockInterviewPreferenceSchema),
  (req, res) => controller.upsertPreference(req, res)
);

// Retrieve the current active scheduled mock interview pairing
peerMockInterviewRouter.get(
  "/pairings/upcoming",
  authMiddleware,
  requireRole("STUDENT"),
  requirePremium,
  usageLimit("MOCK_INTERVIEW"),
  (req, res) => controller.getUpcomingPairing(req, res)
);

// Retrieve past mock interview pairings (completed/cancelled)
peerMockInterviewRouter.get(
  "/pairings/history",
  authMiddleware,
  requireRole("STUDENT"),
  requirePremium,
  usageLimit("MOCK_INTERVIEW"),
  (req, res) => controller.getHistory(req, res)
);

// Retrieve full details of a specific pairing
peerMockInterviewRouter.get(
  "/pairings/:id",
  authMiddleware,
  requireRole("STUDENT"),
  requirePremium,
  usageLimit("MOCK_INTERVIEW"),
  (req, res) => controller.getPairingDetails(req, res)
);

// Mark a specific mock interview session as completed
peerMockInterviewRouter.post(
  "/pairings/:id/complete",
  authMiddleware,
  requireRole("STUDENT"),
  requirePremium,
  usageLimit("MOCK_INTERVIEW"),
  (req, res) => controller.markCompleted(req, res)
);

// Submit rating and feedback for a partner in a completed mock interview
peerMockInterviewRouter.post(
  "/pairings/:id/rate",
  authMiddleware,
  requireRole("STUDENT"),
  requirePremium,
  usageLimit("MOCK_INTERVIEW"),
  validateBody(mockInterviewFeedbackSchema),
  (req, res) => controller.submitRating(req, res)
);

// Propose / accept / reject a time. These are scheduling-coordination calls, not
// interview consumption, so they intentionally do NOT go through usageLimit:
// re-proposing after a reject must not burn the user's mock-interview quota.
peerMockInterviewRouter.post(
  "/pairings/:id/propose-time",
  authMiddleware,
  requireRole("STUDENT"),
  requirePremium,
  validateBody(proposeTimeSchema),
  (req, res) => controller.proposeTime(req, res)
);

// Accept a proposed time
peerMockInterviewRouter.post(
  "/pairings/:id/accept-time",
  authMiddleware,
  requireRole("STUDENT"),
  requirePremium,
  validateBody(acceptTimeSchema),
  (req, res) => controller.acceptTime(req, res)
);

// Reject a proposed time
peerMockInterviewRouter.post(
  "/pairings/:id/reject-time",
  authMiddleware,
  requireRole("STUDENT"),
  requirePremium,
  validateBody(z.object({})),
  (req, res) => controller.rejectTime(req, res)
);
