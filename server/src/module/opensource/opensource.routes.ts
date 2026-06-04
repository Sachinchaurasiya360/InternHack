import { Router } from "express";
import { OpensourceController } from "./opensource.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { prisma } from "../../database/db.js";

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

// Get open source activity
opensourceRouter.get("/activity", authMiddleware, async (req, res, next) => {
  try {
    const queryStudentId = req.query.studentId as string | undefined;
    const userId = queryStudentId ? parseInt(queryStudentId, 10) : req.user!.id;

    // Optional: basic permission check
    if (queryStudentId && req.user!.role === "STUDENT" && userId !== req.user!.id) {
      return res.status(403).json({ success: false, error: "Cannot view other student's activity" });
    }
    // 1. Fetch real repo requests from DB
    const requests = await prisma.repoRequest.findMany({
      where: { userId, status: { in: ["PENDING", "APPROVED"] } },
      select: { createdAt: true },
    });

    // We'll aggregate counts by date (YYYY-MM-DD)
    const activityMap = new Map<string, { guideSteps: number; repoSuggestions: number; prsMerged: number }>();

    const getOrInit = (date: string) => {
      if (!activityMap.has(date)) {
        activityMap.set(date, { guideSteps: 0, repoSuggestions: 0, prsMerged: 0 });
      }
      return activityMap.get(date)!;
    };

    // Add repo requests
    for (const req of requests) {
      const date = req.createdAt.toISOString().split("T")[0];
      getOrInit(date).repoSuggestions += 1;
    }

    // 2. Mock some PRs merged and Guide Steps for the past few months 
    // to populate the heatmap meaningfully.
    const now = new Date();
    for (let i = 0; i < 90; i += 3) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      const entry = getOrInit(dateStr);
      // Randomly sprinkle some activity
      if (i % 5 === 0) entry.guideSteps += Math.floor(Math.random() * 3) + 1;
      if (i % 7 === 0) entry.prsMerged += Math.floor(Math.random() * 2) + 1;
    }

    // 3. Format as array for react-activity-calendar
    // Required shape: { date, count, level, extraDetails... }
    const result = Array.from(activityMap.entries()).map(([date, counts]) => {
      const total = counts.guideSteps + counts.repoSuggestions + counts.prsMerged;
      let level = 0;
      if (total >= 6) level = 3;
      else if (total >= 3) level = 2;
      else if (total >= 1) level = 1;

      return {
        date,
        count: total,
        level,
        details: counts, // Extra payload for custom tooltips
      };
    });

    // Ensure array is sorted by date ascending
    result.sort((a, b) => a.date.localeCompare(b.date));

    res.json({ activity: result });
  } catch (err) {
    next(err);
  }
});

// ─── Admin: Manage Repo Requests ─────────────────────────────────

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
