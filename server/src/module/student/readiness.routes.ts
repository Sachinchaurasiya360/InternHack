// server/src/module/student/readiness.routes.ts
import { Router } from "express";
import { ReadinessController } from "./readiness.controller.js";

const controller = new ReadinessController();
const router = Router();

router.get("/", (req, res) => controller.getReadiness(req, res));

export default router;
