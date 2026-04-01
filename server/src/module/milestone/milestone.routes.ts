import { Router } from "express";
import type { Request, Response, NextFunction } from "express";
import { MilestoneController } from "./milestone.controller.js";
import { MilestoneService } from "./milestone.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { reportMilestoneSchema } from "./milestone.validation.js";

const service = new MilestoneService();
const controller = new MilestoneController(service);

export const milestoneRouter = Router();

milestoneRouter.post(
  "/report",
  authMiddleware,
  requireRole("STUDENT"),
  (req: Request, res: Response, next: NextFunction) => {
    const parsed = reportMilestoneSchema.safeParse({ body: req.body });
    if (!parsed.success) {
      res.status(400).json({
        message: "Invalid input",
        errors: parsed.error.flatten().fieldErrors,
      });
      return;
    }
    controller.reportMilestone(req, res, next);
  }
);
