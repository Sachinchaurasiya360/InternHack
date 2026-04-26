import { Router } from "express";
import { InterviewExperienceController } from "./interview-experience.controller.js";
import { authMiddleware, optionalAuthMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const controller = new InterviewExperienceController();
export const interviewExperienceRouter = Router();

// Order matters: static subpaths must be registered before `/:id`

// Public, optional auth so admin can see PENDING rows and viewers get hasUpvoted flag
interviewExperienceRouter.get(
  "/",
  optionalAuthMiddleware,
  (req, res, next) => controller.list(req, res, next),
);
interviewExperienceRouter.get(
  "/companies",
  (req, res, next) => controller.listCompanies(req, res, next),
);
interviewExperienceRouter.get(
  "/companies/:slug/summary",
  (req, res, next) => controller.getCompanySummary(req, res, next),
);
interviewExperienceRouter.get(
  "/companies/:slug/top-questions",
  (req, res, next) => controller.getTopQuestions(req, res, next),
);

// Student write ops
interviewExperienceRouter.post(
  "/",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => controller.create(req, res, next),
);

interviewExperienceRouter.post(
  "/:id/upvote",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => controller.toggleUpvote(req, res, next),
);

// Author or admin
interviewExperienceRouter.patch(
  "/:id",
  authMiddleware,
  (req, res, next) => controller.update(req, res, next),
);
interviewExperienceRouter.delete(
  "/:id",
  authMiddleware,
  (req, res, next) => controller.remove(req, res, next),
);

// Public read, must be registered last among the `/:id` patterns
interviewExperienceRouter.get(
  "/:id",
  optionalAuthMiddleware,
  (req, res, next) => controller.getById(req, res, next),
);
