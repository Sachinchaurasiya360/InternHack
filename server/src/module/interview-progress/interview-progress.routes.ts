import { Router } from "express";
import { InterviewProgressController } from "./interview-progress.controller.js";
import { InterviewProgressService } from "./interview-progress.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { validateBody } from "../../middleware/validation.middleware.js";
import { updateInterviewProgressSchema } from "./interview-progress.validation.js";

const interviewProgressService = new InterviewProgressService();

const interviewProgressController =
  new InterviewProgressController(interviewProgressService);

export const interviewProgressRouter = Router();

interviewProgressRouter.get(
  "/",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) =>
    interviewProgressController.getProgress(req, res, next)
);

interviewProgressRouter.patch(
  "/",
  authMiddleware,
  requireRole("STUDENT"),
  validateBody(updateInterviewProgressSchema),
  (req, res, next) =>
    interviewProgressController.updateProgress(req, res, next)
);