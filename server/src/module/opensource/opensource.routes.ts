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
