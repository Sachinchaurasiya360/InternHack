import { Router } from "express";
import { StudentController } from "./student.controller.js";
import { StudentService } from "./student.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";

const studentService = new StudentService();
const studentController = new StudentController(studentService);

export const studentRouter = Router();

// All routes require authentication and STUDENT role
studentRouter.use(authMiddleware, requireRole("STUDENT"));

// Applications
studentRouter.post("/jobs/:jobId/apply", usageLimit("JOB_APPLICATION"), (req, res, next) => studentController.applyToJob(req, res, next));
studentRouter.get("/jobs/:jobId/application-status", (req, res) => studentController.getApplicationStatusByJob(req, res));
studentRouter.get("/applications", (req, res) => studentController.getMyApplications(req, res));
studentRouter.get("/applications/:applicationId", (req, res) => studentController.getApplicationDetail(req, res));
studentRouter.get("/applications/:applicationId/calendar.ics", (req, res) => studentController.downloadCalendarEvent(req, res));
studentRouter.delete("/applications/:applicationId", (req, res) => studentController.withdrawApplication(req, res));

// External job applications
studentRouter.post("/external-jobs/:adminJobId/apply", (req, res) => studentController.applyToExternalJob(req, res));
studentRouter.get("/external-jobs/:adminJobId/status", (req, res) => studentController.getExternalApplicationStatus(req, res));
studentRouter.delete("/external-applications/:applicationId", (req, res, next) => studentController.deleteExternalApplication(req, res, next));

// Round submissions
studentRouter.get("/applications/:applicationId/rounds/:roundId", (req, res) => studentController.getRoundInfo(req, res));
studentRouter.post("/applications/:applicationId/rounds/:roundId/submit", (req, res) => studentController.submitRound(req, res));
studentRouter.put("/applications/:applicationId/rounds/:roundId/submit", (req, res) => studentController.submitRound(req, res));

// Mock interview
studentRouter.get("/mock-interview", (req, res, next) => studentController.getMockInterviewInfo(req, res, next));
studentRouter.post("/mock-interview/book", (req, res, next) => studentController.bookMockInterview(req, res, next));

