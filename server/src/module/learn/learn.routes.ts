import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { LearnController } from "./learn.controller.js";
import { LearnService } from "./learn.service.js";
import { getReadinessReportSchema, validateBody } from './learn.validation.js';

const learnService = new LearnService();
const learnController = new LearnController(learnService);

export const learnRouter = Router();

// New Feature: AI Evaluation Job-Readiness Scorecard (#1088)
learnRouter.post(
  "/readiness",
  authMiddleware,
  requireRole("STUDENT"),
  validateBody(getReadinessReportSchema.body),
  (req, res) => learnController.getInterviewReadinessReport(req, res),
);

// Pre-existing Progress Endpoints
learnRouter.get(
  "/interview/progress",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => learnController.getInterviewProgress(req, res),
);

learnRouter.post(
  "/interview/progress/bulk-migrate",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => learnController.bulkMigrateInterviewProgress(req, res),
);

learnRouter.post(
  "/interview/progress/:questionId",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => learnController.updateInterviewProgress(req, res),
);

learnRouter.delete(
  "/interview/progress",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => learnController.resetInterviewProgress(req, res),
);