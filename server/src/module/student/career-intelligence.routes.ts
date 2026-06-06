// server/src/module/student/career-intelligence.routes.ts
import { Router } from "express";
import { CareerIntelligenceController } from "./career-intelligence.controller.js";

const controller = new CareerIntelligenceController();
const router = Router();

router.get("/", (req, res) => controller.getCareerIntelligence(req, res));
router.get("/goals", (req, res) => controller.getGoals(req, res));
router.post("/goals", (req, res) => controller.saveGoals(req, res));

export default router;
