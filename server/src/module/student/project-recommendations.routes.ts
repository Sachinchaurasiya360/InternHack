// server/src/module/student/project-recommendations.routes.ts
import { Router } from "express";
import { ProjectRecommendationController } from "./project-recommendations.controller.js";

const controller = new ProjectRecommendationController();
const router = Router();

router.get("/", (req, res) => controller.getRecommendations(req, res));

export default router;
