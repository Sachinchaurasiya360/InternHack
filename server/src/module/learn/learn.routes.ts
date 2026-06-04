import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { LearnController } from "./learn.controller.js";
import { LearnService } from "./learn.service.js";

const learnService = new LearnService();
const learnController = new LearnController(learnService);

export const learnRouter = Router();

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
