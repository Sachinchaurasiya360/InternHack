// server/src/module/student/hiring-signal.routes.ts
import { Router } from "express";
import { HiringSignalController } from "./hiring-signal.controller.js";

const controller = new HiringSignalController();
const router = Router();

router.get("/", (req, res) => controller.getHiringSignal(req, res));

export default router;
