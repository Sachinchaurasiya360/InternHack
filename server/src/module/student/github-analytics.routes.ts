// server/src/module/student/github-analytics.routes.ts
import { Router } from "express";
import { GithubAnalyticsController } from "./github-analytics.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

const githubAnalyticsRouter = Router();
const controller = new GithubAnalyticsController();

githubAnalyticsRouter.get("/", authMiddleware, controller.getAnalytics.bind(controller));

export default githubAnalyticsRouter;
