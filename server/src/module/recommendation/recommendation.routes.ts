import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";
import { getRecommendationsHandler } from "./recommendation.controller.js";

export const recommendationRouter = Router();

recommendationRouter.use(authMiddleware, requireRole("STUDENT"));

recommendationRouter.get("/", usageLimit("ATS_SCORE"), getRecommendationsHandler);