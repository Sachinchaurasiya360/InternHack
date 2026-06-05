import { Router } from "express";
import { prisma } from "../../database/db.js";
import {
  approveRequestOverrideSchema,
  opensourceListQuerySchema,
  repoIdSchema,
  submitRepoRequestSchema,
} from "./opensource.validation.js";
import { OpensourceController } from "./opensource.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { prisma } from "../../database/db.js";

export const opensourceRouter = Router();
const controller = new OpensourceController();

// ─── Public Routes ─────────────────────────────────────────────

// List repos with optional filters
opensourceRouter.get("/", (req, res, next) =>
  controller.listRepos(req, res, next),
);

// Get all unique languages
opensourceRouter.get("/languages", (req, res, next) =>
  controller.getLanguages(req, res, next),
);

// Public: list repos with optional filters
opensourceRouter.get("/", async (req, res, next) => {
  try {
    const parsed = opensourceListQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      res.status(400).json({ message: "Invalid query parameters", errors: parsed.error.flatten().fieldErrors });
      return;
    }
    const { page, limit, search, language, difficulty, domain, sortBy, sortOrder, ids } = parsed.data;

    const where: Record<string, unknown> = {};
    if (ids) {
      const idArray = ids.split(",").map(Number).filter((id) => !isNaN(id));
      if (idArray.length > 0) {
        where["id"] = { in: idArray };
      }
    }
    if (language) where["language"] = { equals: language, mode: "insensitive" };
    if (difficulty) where["difficulty"] = difficulty;
    if (domain) where["domain"] = domain;
    if (search) {
      // Prisma's scalar-list filters can't do case-insensitive substring match
      // on array elements, so resolve tag matches via a raw ILIKE-on-unnest
      // subquery and merge the matching ids into the OR clause.
      const tagMatches = await prisma.$queryRaw<Array<{ id: number }>>`
        SELECT id FROM "opensourceRepo"
        WHERE EXISTS (
          SELECT 1 FROM unnest(tags) AS t WHERE t ILIKE ${`%${search}%`}
        )
      `;
      const tagMatchIds = tagMatches.map((r) => r.id);

      where["OR"] = [
        { name: { contains: search, mode: "insensitive" } },
        { owner: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { language: { contains: search, mode: "insensitive" } },
        ...(tagMatchIds.length > 0 ? [{ id: { in: tagMatchIds } }] : []),
      ];
    }

    const skip = (page - 1) * limit;
    const [repos, total] = await Promise.all([
      prisma.opensourceRepo.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
      }),
      prisma.opensourceRepo.count({ where }),
    ]);

    res.json({
      repos,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (err) {
    next(err);
  }
});
// Get GSoC organizations
opensourceRouter.get("/gsoc-orgs", (req, res, next) =>
  controller.getGsocOrgs(req, res, next),
);

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
opensourceRouter.get("/:id", (req, res, next) =>
  controller.getRepoById(req, res, next),
);
