// server/src/module/student/coach.routes.ts
import { Router } from "express";
import { CoachController } from "./coach.controller.js";

const controller = new CoachController();
const router = Router();

router.get("/recommendations", (req, res) => controller.getRecommendations(req, res));
router.post("/roadmap", (req, res) => controller.generateRoadmap(req, res));
router.post("/feedback", (req, res) => controller.getFeedback(req, res));

export default router;
