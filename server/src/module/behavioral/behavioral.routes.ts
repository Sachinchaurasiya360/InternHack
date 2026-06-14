import { Router } from "express";
import { BehavioralController } from "./behavioral.controller.js";
import { BehavioralService } from "./behavioral.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";

const behavioralService = new BehavioralService();
const behavioralController = new BehavioralController(behavioralService);

export const behavioralRouter = Router();

behavioralRouter.use(authMiddleware, requireRole("STUDENT"));

behavioralRouter.post("/evaluate", usageLimit("BEHAVIORAL_EVAL" as any), (req, res, next) => behavioralController.evaluate(req, res, next));
