import { Router } from "express";
import { InterviewController } from "./interview.controller.js";
import { InterviewService } from "./interview.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const interviewService = new InterviewService();
const interviewController = new InterviewController(interviewService);

export const interviewRouter = Router();

// Interview module extends the recruiter module, requires RECRUITER role
interviewRouter.use(authMiddleware, requireRole("RECRUITER"));

interviewRouter.post("/", (req, res) => interviewController.create(req, res));
interviewRouter.get("/", (req, res) => interviewController.getAll(req, res));
interviewRouter.get("/calendar", (req, res) => interviewController.getCalendar(req, res));
interviewRouter.get("/:id", (req, res) => interviewController.getById(req, res));
interviewRouter.patch("/:id", (req, res) => interviewController.update(req, res));
interviewRouter.delete("/:id", (req, res) => interviewController.delete(req, res));
interviewRouter.post("/:id/feedback", (req, res) => interviewController.addFeedback(req, res));
interviewRouter.get("/applications/:applicationId", (req, res) => interviewController.getForApplication(req, res));
