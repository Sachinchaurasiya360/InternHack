// server/src/module/student/gap-analysis.routes.ts
import { Router } from "express";
import { GapAnalysisController } from "./gap-analysis.controller.js";

const controller = new GapAnalysisController();
const router = Router();

router.get("/", (req, res) => controller.getGapAnalysis(req, res));

export default router;
