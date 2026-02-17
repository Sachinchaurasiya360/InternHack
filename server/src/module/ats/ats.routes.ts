import { Router } from "express";
import { AtsController } from "./ats.controller.js";
import { AtsService } from "./ats.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const atsService = new AtsService();
const atsController = new AtsController(atsService);

export const atsRouter = Router();

atsRouter.use(authMiddleware, requireRole("STUDENT"));

atsRouter.post("/score", (req, res, next) => atsController.scoreResume(req, res, next));
atsRouter.get("/history", (req, res, next) => atsController.getScoreHistory(req, res, next));
atsRouter.get("/history/:scoreId", (req, res, next) => atsController.getScoreById(req, res, next));
