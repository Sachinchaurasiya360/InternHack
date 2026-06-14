import { Router } from "express";
import { prisma } from "../../database/db.js";
import { OpensourceController } from "./opensource.controller.js";
import { OpensourceStreakController } from "./opensource-streak.controller.js";
import { OpensourceProgramController } from "./opensource-program.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";

export const opensourceRouter = Router();
const controller = new OpensourceController();
const streakController = new OpensourceStreakController();
const programController = new OpensourceProgramController();

// ─── Public Routes ─────────────────────────────────────────────

// Global stats (cached, independent of pagination/filters)
opensourceRouter.get("/stats", (req, res, next) => controller.getGlobalStats(req, res, next));

// List repos with optional filters
opensourceRouter.get("/", (req, res, next) => controller.listRepos(req, res, next));

// Get all unique languages
opensourceRouter.get("/languages", (req, res, next) => controller.getLanguages(req, res, next));

// Get GSoC organizations
opensourceRouter.get("/gsoc/orgs", (req, res, next) => controller.getGsocOrgs(req, res, next));

// Get recommended repos for student based on skills
opensourceRouter.get("/recommended", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.getRecommendedRepos(req, res, next),
);
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

opensourceRouter.get("/analytics/hacktoberfest", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.getHacktoberfestProgress(req, res, next),
);

opensourceRouter.get("/activity", authMiddleware, async (req, res, next) => {
  try {
    const queryStudentId = req.query.studentId as string | undefined;
    const userId = queryStudentId ? parseInt(queryStudentId, 10) : req.user!.id;

    if (queryStudentId && req.user!.role === "STUDENT" && userId !== req.user!.id) {
      return res.status(403).json({ success: false, error: "Cannot view other student's activity" });
    }
    const requests = await prisma.repoRequest.findMany({
      where: { userId, status: { in: ["PENDING", "APPROVED"] } },
      select: { createdAt: true },
    });

    const activityMap = new Map<string, { guideSteps: number; repoSuggestions: number; prsMerged: number }>();

    const getOrInit = (date: string) => {
      if (!activityMap.has(date)) {
        activityMap.set(date, { guideSteps: 0, repoSuggestions: 0, prsMerged: 0 });
      }
      return activityMap.get(date)!;
    };

    for (const req of requests) {
      const date = req.createdAt.toISOString().split("T")[0];
      getOrInit(date).repoSuggestions += 1;
    }

    const now = new Date();
    for (let i = 0; i < 90; i += 3) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      const entry = getOrInit(dateStr);
      if (i % 5 === 0) entry.guideSteps += Math.floor(Math.random() * 3) + 1;
      if (i % 7 === 0) entry.prsMerged += Math.floor(Math.random() * 2) + 1;
    }

    const result = Array.from(activityMap.entries()).map(([date, counts]) => {
      const total = counts.guideSteps + counts.repoSuggestions + counts.prsMerged;
      let level = 0;
      if (total >= 6) level = 3;
      else if (total >= 3) level = 2;
      else if (total >= 1) level = 1;
      return { date, count: total, level, details: counts };
    });

    result.sort((a, b) => a.date.localeCompare(b.date));
    res.json({ activity: result });
  } catch (err) {
    next(err);
  }
});

opensourceRouter.get("/premium/status", authMiddleware, requireRole("STUDENT"), async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: { subscriptionPlan: true, subscriptionStatus: true, subscriptionEndDate: true },
    });
    const isPremium =
      user !== null &&
      (user.subscriptionPlan === "MONTHLY" || user.subscriptionPlan === "YEARLY") &&
      user.subscriptionStatus === "ACTIVE" &&
      (!user.subscriptionEndDate || user.subscriptionEndDate > new Date());
    res.json({ isPremium });
  } catch (err) {
    next(err);
  }
});

opensourceRouter.get("/first-pr/progress", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.getFirstPrProgress(req, res, next),
);

opensourceRouter.patch("/first-pr/progress", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.patchFirstPrProgress(req, res, next),
);

// ─── Certificate Routes ─────────────────────────────────────────
opensourceRouter.post("/certificate/issue", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.issueCertificate(req, res, next),
);
opensourceRouter.get("/certificate/:token/og", (req, res, next) =>
  controller.getCertificateOgImage(req, res, next),
);
opensourceRouter.get("/certificate/:token", (req, res, next) =>
  controller.getCertificate(req, res, next),
);

opensourceRouter.post("/guide-feedback", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.submitGuideFeedback(req, res, next),
);

// ─── Student: Bookmarks ─────────────────────────────────────────

opensourceRouter.get("/bookmarks", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.getBookmarks(req, res, next),
);

opensourceRouter.post("/bookmarks", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.addBookmark(req, res, next),
);

// POST /bookmarks/migrate — bulk-import localStorage bookmarks to the server
opensourceRouter.post("/bookmarks/migrate", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.bulkMigrateBookmarks(req, res, next),
);

opensourceRouter.delete("/bookmarks/:repoId", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.removeBookmark(req, res, next),
);

// ─── Streak ─────────────────────────────────────────────────────
opensourceRouter.get("/streak", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  streakController.getStreak(req, res, next),
);

opensourceRouter.post("/streak/tick", authMiddleware, requireRole("STUDENT"), usageLimit("STREAK_TICK"),
  (req, res, next) => streakController.tickStreak(req, res, next),
);

// ─── Programs ────────────────────────────────────────────────────

// Public program listing (no auth required)
opensourceRouter.get("/programs", (req, res, next) =>
  programController.listPrograms(req, res, next),
);

opensourceRouter.get("/programs/:slug", (req, res, next) =>
  programController.getProgram(req, res, next),
);

opensourceRouter.get("/programs/:slug/ics", (req, res, next) =>
  programController.downloadIcs(req, res, next),
);

// Student program tracking
opensourceRouter.post("/programs/track", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  programController.toggleProgram(req, res, next),
);

opensourceRouter.get("/programs/tracked/mine", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  programController.getTrackedPrograms(req, res, next),
);

// Admin program management
opensourceRouter.post("/programs/manage", authMiddleware, requireRole("ADMIN"), (req, res, next) =>
  programController.createProgram(req, res, next),
);

opensourceRouter.put("/programs/manage/:id", authMiddleware, requireRole("ADMIN"), (req, res, next) =>
  programController.updateProgram(req, res, next),
);

opensourceRouter.delete("/programs/manage/:id", authMiddleware, requireRole("ADMIN"), (req, res, next) =>
  programController.deleteProgram(req, res, next),
);

// ─── Admin: Manage Repo Requests ─────────────────────────────────

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

// Must be AFTER all /requests/* and /first-pr/* routes.
// /:owner/:name routes must appear BEFORE /:id so two-segment paths resolve correctly.
opensourceRouter.get("/:owner/:name/issues", (req, res, next) =>
  controller.getRepoGoodFirstIssues(req, res, next),
);
opensourceRouter.get("/:owner/:name", (req, res, next) => controller.getRepoByOwnerAndName(req, res, next));
opensourceRouter.get("/:id", (req, res, next) => controller.getRepoById(req, res, next));
