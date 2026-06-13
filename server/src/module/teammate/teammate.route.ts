import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

import { TeammateController } from "./teammate.controller.js";
import { TeammateService } from "./teammate.service.js";

const teammateService = new TeammateService();
const teammateController = new TeammateController(teammateService);

export const teammateRouter = Router();

// ── Authenticated: browse all profiles (with optional filter query params) ──
teammateRouter.get(
  "/",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => teammateController.getProfiles(req, res, next),
);

// ── Authenticated: own profile ──
teammateRouter.get(
  "/my-profile",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => teammateController.getMyProfile(req, res, next),
);

teammateRouter.post(
  "/profile",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => teammateController.createProfile(req, res, next),
);

// ── Authenticated: send invite ──
teammateRouter.post(
  "/invite",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => teammateController.sendInvitation(req, res, next),
);

// ── Authenticated: invitation management ──
teammateRouter.get(
  "/invitations/received",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => teammateController.getMyInvitations(req, res, next),
);

teammateRouter.get(
  "/invitations/sent",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => teammateController.getSentInvitations(req, res, next),
);

teammateRouter.patch(
  "/invitations/:id/accept",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => teammateController.acceptInvitation(req, res, next),
);

teammateRouter.patch(
  "/invitations/:id/reject",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => teammateController.rejectInvitation(req, res, next),
);