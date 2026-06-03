import { Router } from "express";
import { OpensourceController } from "./opensource.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

export const opensourceRouter = Router();
const controller = new OpensourceController();

// ─── Public Routes ─────────────────────────────────────────────

// List repos with optional filters
opensourceRouter.get("/", (req, res, next) => controller.listRepos(req, res, next));

// Get all unique languages
opensourceRouter.get("/languages", (req, res, next) => controller.getLanguages(req, res, next));

// Get GSoC organizations
opensourceRouter.get("/gsoc-orgs", (req, res, next) => controller.getGsocOrgs(req, res, next));


// ─── Student Tracking Progress Routes (Custom Feature) ──────────

opensourceRouter.get(
  "/first-pr/progress",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => controller.getFirstPrProgress(req, res, next),
);

opensourceRouter.patch(
  "/first-pr/progress",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => controller.patchFirstPrProgress(req, res, next),
);


// ─── Repo Requests (Student-authenticated) ───────────────────────
// NOTE: these must be registered BEFORE /:id to avoid route conflicts

// Submit a repo request
opensourceRouter.post(
  "/requests",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => controller.submitRepoRequest(req, res, next),
);

// Get my repo requests (Includes newly enriched lookups from upstream main)
opensourceRouter.get(
  "/requests/mine",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => controller.getMyRepoRequests(req, res, next),
);

// Student contribution trend analytics
opensourceRouter.get(
  "/analytics/trend",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => controller.getStudentContributionTrend(req, res, next),
);


// ─── Admin: Manage Repo Requests ─────────────────────────────────

// List all repo requests
opensourceRouter.get(
  "/requests/all",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.getAllRepoRequests(req, res, next),
);

// Approve a repo request
opensourceRouter.put(
  "/requests/:id/approve",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.approveRepoRequest(req, res, next),
);

// Reject a repo request
opensourceRouter.put(
  "/requests/:id/reject",
  authMiddleware,
  requireRole("ADMIN"),
  (req, res, next) => controller.rejectRepoRequest(req, res, next),
);


// Public: get single repo (Registered at the very end to prevent parameter conflicts)
opensourceRouter.get("/:id", (req, res, next) => controller.getRepoById(req, res, next));