import { Router } from "express";
import { CollegeController } from "./college.controller.js";
import { CollegeService } from "./college.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const collegeService = new CollegeService();
const collegeController = new CollegeController(collegeService);

export const collegeRouter = Router();

// Public routes
collegeRouter.get("/stats", (req, res, next) => collegeController.getFilterStats(req, res, next));
collegeRouter.get("/states", (req, res, next) => collegeController.getStates(req, res, next));
collegeRouter.get("/compare", (req, res, next) => collegeController.compareColleges(req, res, next));
collegeRouter.get("/exam/:examSlug", (req, res, next) => collegeController.getCollegesByExam(req, res, next));
collegeRouter.get("/", (req, res, next) => collegeController.listColleges(req, res, next));
collegeRouter.get("/:slug", (req, res, next) => collegeController.getCollegeBySlug(req, res, next));
collegeRouter.get("/:slug/courses", (req, res, next) => collegeController.getCollegeCourses(req, res, next));
collegeRouter.get("/:slug/placements", (req, res, next) => collegeController.getCollegePlacements(req, res, next));
collegeRouter.get("/:slug/cutoffs", (req, res, next) => collegeController.getCollegeCutoffs(req, res, next));
collegeRouter.get("/:slug/reviews", (req, res, next) => collegeController.getCollegeReviews(req, res, next));

// Authenticated student routes
collegeRouter.post("/:slug/reviews", authMiddleware, requireRole("STUDENT"), (req, res, next) => collegeController.submitReview(req, res, next));
