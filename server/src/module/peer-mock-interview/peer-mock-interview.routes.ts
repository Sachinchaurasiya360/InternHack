import { Router } from "express";
import { z } from "zod";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";
import { validateBody } from "../../middleware/validation.middleware.js";
import { PeerMockInterviewController } from "./peer-mock-interview.controller.js";
import { mockInterviewPreferenceSchema, mockInterviewFeedbackSchema, proposeTimeSchema, acceptTimeSchema, selectMatchSchema } from "./peer-mock-interview.validation.js";

const controller = new PeerMockInterviewController();

export const peerMockInterviewRouter = Router();

// Every route requires an authenticated STUDENT. The feature is open to all
// tiers: free students see their top live matches, premium unlocks the full
// list (the service enforces that gate). usageLimit only guards pairing
// creation, the actual consumption event; browsing matches, preferences, and
// scheduling coordination must not burn quota.

// Retrieve user's mock interview preferences
peerMockInterviewRouter.get(
  "/preferences",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => controller.getPreference(req, res)
);

// Create or update user's mock interview preferences
peerMockInterviewRouter.post(
  "/preferences",
  authMiddleware,
  requireRole("STUDENT"),
  validateBody(mockInterviewPreferenceSchema),
  (req, res) => controller.upsertPreference(req, res)
);

// Live ranked match list for the current user (tier-gated by the service)
peerMockInterviewRouter.get(
  "/matches",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => controller.getMatches(req, res)
);

// Instantly pair with a candidate from the live match list
peerMockInterviewRouter.post(
  "/matches/select",
  authMiddleware,
  requireRole("STUDENT"),
  usageLimit("MOCK_INTERVIEW"),
  validateBody(selectMatchSchema),
  (req, res) => controller.selectMatch(req, res)
);

// Retrieve the current active scheduled mock interview pairing
peerMockInterviewRouter.get(
  "/pairings/upcoming",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => controller.getUpcomingPairing(req, res)
);

// Retrieve past mock interview pairings (completed/cancelled)
peerMockInterviewRouter.get(
  "/pairings/history",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => controller.getHistory(req, res)
);

// Retrieve full details of a specific pairing
peerMockInterviewRouter.get(
  "/pairings/:id",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => controller.getPairingDetails(req, res)
);

// Mark a specific mock interview session as completed
peerMockInterviewRouter.post(
  "/pairings/:id/complete",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => controller.markCompleted(req, res)
);

// Submit rating and feedback for a partner in a completed mock interview
peerMockInterviewRouter.post(
  "/pairings/:id/rate",
  authMiddleware,
  requireRole("STUDENT"),
  validateBody(mockInterviewFeedbackSchema),
  (req, res) => controller.submitRating(req, res)
);

// Propose / accept / reject a time and decline a pairing. These are
// scheduling-coordination calls, not interview consumption, so they
// intentionally do NOT go through usageLimit: re-proposing after a reject
// must not burn the user's mock-interview quota.
peerMockInterviewRouter.post(
  "/pairings/:id/propose-time",
  authMiddleware,
  requireRole("STUDENT"),
  validateBody(proposeTimeSchema),
  (req, res) => controller.proposeTime(req, res)
);

// Accept a proposed time
peerMockInterviewRouter.post(
  "/pairings/:id/accept-time",
  authMiddleware,
  requireRole("STUDENT"),
  validateBody(acceptTimeSchema),
  (req, res) => controller.acceptTime(req, res)
);

// Reject a proposed time
peerMockInterviewRouter.post(
  "/pairings/:id/reject-time",
  authMiddleware,
  requireRole("STUDENT"),
  validateBody(z.object({})),
  (req, res) => controller.rejectTime(req, res)
);

// Decline an unscheduled pairing; both students return to the pool
peerMockInterviewRouter.post(
  "/pairings/:id/decline",
  authMiddleware,
  requireRole("STUDENT"),
  validateBody(z.object({})),
  (req, res) => controller.declinePairing(req, res)
);
