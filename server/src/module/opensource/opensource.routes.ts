import { prisma } from "../../database/db.js";
import { Router } from "express";
import { prisma } from "../../database/db.js";
import { OpensourceController } from "./opensource.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

export const opensourceRouter = Router();
const controller = new OpensourceController();

// ─── Public Routes ─────────────────────────────────────────────

// Global stats (cached, independent of pagination/filters)
opensourceRouter.get("/stats", (req, res, next) => controller.getGlobalStats(req, res, next));

// List repos with optional filters
opensourceRouter.get("/", (req, res, next) => controller.listRepos(req, res, next));

// Get all unique languages
opensourceRouter.get("/languages", (req, res, next) => controller.getLanguages(req, res, next));

// Get GSoC organizations
opensourceRouter.get("/gsoc/orgs", (req, res, next) => controller.getGsocOrgs(req, res, next));

// ─── Student Progress Tracking ─────────────────────────────────
// NOTE: must be before /:id to avoid route conflicts

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

// ─── Repo Requests (Student-authenticated) ─────────────────────
// NOTE: these must be registered BEFORE /:id to avoid route conflicts

opensourceRouter.post("/requests", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.submitRepoRequest(req, res, next),
);

opensourceRouter.get("/requests/mine", authMiddleware, requireRole("STUDENT"), async (req, res, next) => {
  try {
    const requests = await prisma.repoRequest.findMany({
      where: { userId: req.user!.id },
      orderBy: { createdAt: "desc" },
    });

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

opensourceRouter.get("/analytics/trend", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.getStudentContributionTrend(req, res, next),
);

// ─── Admin: Manage Repo Requests ───────────────────────────────

opensourceRouter.get("/requests/all", authMiddleware, requireRole("ADMIN"), (req, res, next) =>
  controller.getAllRepoRequests(req, res, next),
);

opensourceRouter.put("/requests/:id/approve", authMiddleware, requireRole("ADMIN"), (req, res, next) =>
  controller.approveRepoRequest(req, res, next),
);

opensourceRouter.put("/requests/:id/reject", authMiddleware, requireRole("ADMIN"), (req, res, next) =>
  controller.rejectRepoRequest(req, res, next),
);

// ─── Public: Single Repo ───────────────────────────────────────

// Must be AFTER all /requests/* and /first-pr/* routes
opensourceRouter.get("/:id", (req, res, next) => controller.getRepoById(req, res, next));
