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

import { OpensourceController } from "./opensource.controller.js";

export const opensourceRouter = Router();
const controller = new OpensourceController();

// ─── Public Routes ─────────────────────────────────────────────

// List repos with optional filters
opensourceRouter.get("/", (req, res, next) => controller.listRepos(req, res, next));

// Get all unique languages
opensourceRouter.get("/languages", (req, res, next) => controller.getLanguages(req, res, next));

// Public: global stats (cached every 5 min, independent of pagination/filters)
opensourceRouter.get("/stats", (req, res, next) => controller.getGlobalStats(req, res, next));

// Public: list repos with optional filters
opensourceRouter.get("/", async (req, res, next) => {
  try {
    const parsed = opensourceListQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      res.status(400).json({ message: "Invalid query parameters", errors: parsed.error.flatten().fieldErrors });
      return;
    }
    const { page, limit, search, language, difficulty, domain, sortBy, sortOrder } = parsed.data;

    const where: Record<string, unknown> = {};
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
// Get GSoC organizations
opensourceRouter.get("/gsoc/orgs", (req, res, next) => controller.getGsocOrgs(req, res, next));

// ─── Repo Requests (Student-authenticated) ─────────────────────
// NOTE: these must be registered BEFORE /:id to avoid route conflicts

// Submit a repo request
opensourceRouter.post("/requests", authMiddleware, requireRole("STUDENT"), (req, res, next) => 
  controller.submitRepoRequest(req, res, next)
);

// Get my repo requests
opensourceRouter.get("/requests/mine", authMiddleware, requireRole("STUDENT"), async (req, res, next) => {
  try {
    const requests = await prisma.repoRequest.findMany({
      where: { userId: req.user!.id },
      orderBy: { createdAt: "desc" },
    });

    // For approved requests, look up the corresponding InternHack repo ID so
    // the client can open the repo detail popup directly.
    const approvedUrls = requests
      .filter((r) => r.status === "APPROVED")
      .map((r) => r.url);

    const approvedRepos =
      approvedUrls.length > 0
        ? await prisma.opensourceRepo.findMany({
            where: { url: { in: approvedUrls } },
            select: { id: true, url: true },
          })
        : [];

    const repoIdByUrl = new Map(approvedRepos.map((r) => [r.url, r.id]));

    const enriched = requests.map((r) => ({
      ...r,
      repoId: r.status === "APPROVED" ? (repoIdByUrl.get(r.url) ?? null) : null,
    }));

    res.json({ requests: enriched });
  } catch (err) {
    next(err);
  }
});

// Student contribution trend
opensourceRouter.get("/analytics/trend", authMiddleware, requireRole("STUDENT"), (req, res, next) => 
  controller.getStudentContributionTrend(req, res, next)
);

// ─── Admin: Manage Repo Requests ───────────────────────────────

// List all repo requests
opensourceRouter.get("/requests/all", authMiddleware, requireRole("ADMIN"), (req, res, next) => 
  controller.getAllRepoRequests(req, res, next)
);

// Approve a repo request
opensourceRouter.put("/requests/:id/approve", authMiddleware, requireRole("ADMIN"), (req, res, next) => 
  controller.approveRepoRequest(req, res, next)
);

// Reject a repo request
opensourceRouter.put("/requests/:id/reject", authMiddleware, requireRole("ADMIN"), (req, res, next) => 
  controller.rejectRepoRequest(req, res, next)
);

// ─── Public: Single Repo ───────────────────────────────────────

// Public: get single repo (must be AFTER /requests/* routes)
opensourceRouter.get("/:id", (req, res, next) => controller.getRepoById(req, res, next));
