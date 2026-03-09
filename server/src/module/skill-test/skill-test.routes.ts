import { Router } from "express";
import { SkillTestService } from "./skill-test.service.js";
import { SkillTestController } from "./skill-test.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const service = new SkillTestService();
const controller = new SkillTestController(service);

export const skillTestRouter = Router();

// ── Student routes (static paths first to avoid /:id collision) ──
skillTestRouter.get(
  "/my-attempts",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => controller.getMyAttempts(req, res, next)
);
skillTestRouter.get(
  "/my-verified",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => controller.getMyVerified(req, res, next)
);

// ── Recruiter route ──
skillTestRouter.get(
  "/verified/:studentId",
  authMiddleware,
  requireRole("RECRUITER"),
  (req, res, next) => controller.getStudentVerified(req, res, next)
);

// ── Student browse & take tests ──
skillTestRouter.get(
  "/",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => controller.listTests(req, res, next)
);
skillTestRouter.get(
  "/:id",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => controller.getTestDetail(req, res, next)
);
skillTestRouter.post(
  "/:id/start",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => controller.startTest(req, res, next)
);
skillTestRouter.post(
  "/:id/submit",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => controller.submitTest(req, res, next)
);

// ── Admin routes ──
skillTestRouter.post(
  "/",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.createTest(req, res, next)
);
skillTestRouter.post(
  "/:id/questions",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.addQuestions(req, res, next)
);
