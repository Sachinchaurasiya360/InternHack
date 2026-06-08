import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { ResumeController } from "./resume.controller.js";
import { ResumeService } from "./resume.service.js";

export const resumeRouter = Router();

const resumeController = new ResumeController(new ResumeService());

resumeRouter.use(authMiddleware, requireRole("STUDENT"));
resumeRouter.get("/oss-section", (req, res, next) => resumeController.getOssSection(req, res, next));
