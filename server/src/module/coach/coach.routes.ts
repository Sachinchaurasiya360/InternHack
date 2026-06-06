import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { CoachService } from "./coach.service.js";
import { CoachController } from "./coach.controller.js";

const coachService = new CoachService();
const coachController = new CoachController(coachService);

export const coachRouter = Router();

// POST /api/coach/suggest — generate AI coaching advice
coachRouter.post(
  "/suggest",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => coachController.suggest(req, res, next),
);

// POST /api/coach/save — persist a piece of advice
coachRouter.post(
  "/save",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => coachController.saveAdvice(req, res, next),
);

// GET /api/coach/saved — get all saved advice
coachRouter.get(
  "/saved",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => coachController.getSavedAdvice(req, res, next),
);

// DELETE /api/coach/saved/:id — delete a saved advice
coachRouter.delete(
  "/saved/:id",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => coachController.deleteAdvice(req, res, next),
);
