import { Router } from "express";
import { AmbassadorController } from "./ambassador.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import {
  validateBody,
  createReferralLinkSchema,
  submitShareSchema,
  reviewAmbassadorSchema,
  reviewShareSchema,
  createSpotlightSchema,
  updateSpotlightSchema,
} from "./ambassador.validation.js";

const controller = new AmbassadorController();
export const ambassadorRouter = Router();

// ─── Student: My Ambassador Status ─────────────────────────────

ambassadorRouter.get("/me", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.getMyStatus(req, res, next),
);

ambassadorRouter.get("/me/eligibility", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.checkEligibility(req, res, next),
);

ambassadorRouter.post("/apply", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.apply(req, res, next),
);

ambassadorRouter.post("/auto-enroll", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.autoEnroll(req, res, next),
);

// ─── Student: Referral Links ────────────────────────────────────

ambassadorRouter.post("/referral-links", authMiddleware, requireRole("STUDENT"),
  validateBody(createReferralLinkSchema), (req, res, next) =>
    controller.generateReferralLink(req, res, next),
);

ambassadorRouter.get("/referral-links", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.getMyReferralLinks(req, res, next),
);

// ─── Student: Social Shares ─────────────────────────────────────

ambassadorRouter.post("/shares", authMiddleware, requireRole("STUDENT"),
  validateBody(submitShareSchema), (req, res, next) =>
    controller.submitShare(req, res, next),
);

ambassadorRouter.get("/shares", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.listShares(req, res, next),
);

// ─── Admin: Ambassador Management ───────────────────────────────

ambassadorRouter.get("/admin", authMiddleware, requireRole("ADMIN"), (req, res, next) =>
  controller.listAmbassadors(req, res, next),
);

ambassadorRouter.get("/admin/:id", authMiddleware, requireRole("ADMIN"), (req, res, next) =>
  controller.getAmbassadorDetail(req, res, next),
);

ambassadorRouter.put("/admin/:id/review", authMiddleware, requireRole("ADMIN"),
  validateBody(reviewAmbassadorSchema), (req, res, next) =>
    controller.reviewAmbassador(req, res, next),
);

ambassadorRouter.get("/admin/:ambassadorId/shares", authMiddleware, requireRole("ADMIN"), (req, res, next) =>
  controller.listSharesAdmin(req, res, next),
);

ambassadorRouter.put("/admin/shares/:shareId/review", authMiddleware, requireRole("ADMIN"),
  validateBody(reviewShareSchema), (req, res, next) =>
    controller.reviewShare(req, res, next),
);

// ─── Admin: Spotlight ───────────────────────────────────────────

ambassadorRouter.get("/admin/spotlights", authMiddleware, requireRole("ADMIN"), (req, res, next) =>
  controller.listSpotlights(req, res, next),
);

ambassadorRouter.post("/admin/spotlights", authMiddleware, requireRole("ADMIN"),
  validateBody(createSpotlightSchema), (req, res, next) =>
    controller.createSpotlight(req, res, next),
);

ambassadorRouter.put("/admin/spotlights/:id", authMiddleware, requireRole("ADMIN"),
  validateBody(updateSpotlightSchema), (req, res, next) =>
    controller.updateSpotlight(req, res, next),
);

ambassadorRouter.delete("/admin/spotlights/:id", authMiddleware, requireRole("ADMIN"), (req, res, next) =>
  controller.deleteSpotlight(req, res, next),
);

// ─── Admin: Referrer Leaderboard ────────────────────────────────

ambassadorRouter.get("/admin/top-referrers", authMiddleware, requireRole("ADMIN"), (req, res, next) =>
  controller.getTopReferrers(req, res, next),
);

// ─── Public ─────────────────────────────────────────────────────

ambassadorRouter.get("/spotlights", (req, res, next) =>
  controller.getPublicSpotlights(req, res, next),
);

ambassadorRouter.get("/top-referrers", (req, res, next) =>
  controller.getTopReferrers(req, res, next),
);
