import { Router } from "express";
import { StudentController } from "./student.controller.js";
import { StudentService } from "./student.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const studentService = new StudentService();
const studentController = new StudentController(studentService);

export const studentRouter = Router();

// All routes require authentication and STUDENT role
studentRouter.use(authMiddleware, requireRole("STUDENT"));

// Applications
studentRouter.post("/jobs/:jobId/apply", (req, res) => studentController.applyToJob(req, res));
studentRouter.get("/applications", (req, res) => studentController.getMyApplications(req, res));
studentRouter.get("/applications/:applicationId", (req, res) => studentController.getApplicationDetail(req, res));
studentRouter.delete("/applications/:applicationId", (req, res) => studentController.withdrawApplication(req, res));

// Round submissions
studentRouter.get("/applications/:applicationId/rounds/:roundId", (req, res) => studentController.getRoundInfo(req, res));
studentRouter.post("/applications/:applicationId/rounds/:roundId/submit", (req, res) => studentController.submitRound(req, res));
studentRouter.put("/applications/:applicationId/rounds/:roundId/submit", (req, res) => studentController.submitRound(req, res));
