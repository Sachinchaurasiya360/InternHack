// server/src/module/student/growth.routes.ts
import { Router } from "express";
import { GrowthController } from "./growth.controller.js";

const controller = new GrowthController();
const router = Router();

router.get("/", (req, res) => controller.getGrowth(req, res));

export default router;
