import { Router } from "express";
import { prisma } from "../../database/db.js";
import {
  approveRequestOverrideSchema,
  bulkRepoRequestSchema,
  opensourceListQuerySchema,
  repoIdSchema,
  submitRepoRequestSchema,
} from "./opensource.validation.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { sendEmail } from "../../utils/email.utils.js";
import { repoRequestSubmittedHtml, repoRequestApprovedHtml } from "../../utils/email-templates.js";
import { parsePagination } from "../../utils/pagination.utils.js";

import { OpensourceController } from "./opensource.controller.js";

export const opensourceRouter = Router();
const controller = new OpensourceController();

// Public: list available languages
opensourceRouter.get("/languages", (req, res, next) => controller.getLanguages(req, res, next));

// Personalized repo recommendations for authenticated students
opensourceRouter.get("/recommended", authMiddleware, requireRole("STUDENT"), async (req, res, next) => {
  try {
    const userId = req.user!.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { skills: true, projects: true },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const studentTechStack = user.skills || [];
    const projects = (user.projects as any[]) || [];
    const projectTech = projects.flatMap((p) => p.techStack || []);
    const allStudentTech = [...new Set([...studentTechStack, ...projectTech])];

    if (allStudentTech.length === 0) {
      const topRepos = await prisma.opensourceRepo.findMany({
        take: 6,
        orderBy: { stars: "desc" },
      });
      res.json({ repos: topRepos.map((r) => ({ ...r, matchedSkills: [] })) });
      return;
    }

    const recommendedRepos = await prisma.opensourceRepo.findMany({
      where: {
        OR: [
          { techStack: { hasSome: allStudentTech } },
          { language: { in: allStudentTech } },
        ],
      },
      take: 6,
      orderBy: { stars: "desc" },
    });

    let results = recommendedRepos.map((repo) => {
      const matchedSkills = repo.techStack.filter((skill) =>
        allStudentTech.some((s) => s.toLowerCase() === skill.toLowerCase())
      );
      if (allStudentTech.some((s) => s.toLowerCase() === repo.language.toLowerCase())) {
        if (!matchedSkills.includes(repo.language)) {
          matchedSkills.push(repo.language);
        }
      }
      return { ...repo, matchedSkills };
    });

    if (results.length < 6) {
      const existingIds = results.map((r) => r.id);
      const extra = await prisma.opensourceRepo.findMany({
        where: { id: { notIn: existingIds } },
        take: 6 - results.length,
        orderBy: { stars: "desc" },
      });
      results = [...results, ...extra.map((r) => ({ ...r, matchedSkills: [] }))];
    }

    res.json({ repos: results });
  } catch (err) {
    next(err);
  }
});

// Public: list repos with optional filters
opensourceRouter.get("/", (req, res, next) => controller.listRepos(req, res, next));
// ─── Repo Requests (Student-authenticated) ───────────────────────
// NOTE: these must be registered BEFORE /:id to avoid route conflicts

// Submit a repo request
opensourceRouter.post("/requests", authMiddleware, requireRole("STUDENT"), async (req, res, next) => {
  try {
    const parsed = submitRepoRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten().fieldErrors });
      return;
    }

    const existing = await prisma.repoRequest.findFirst({
      where: { url: parsed.data.url, status: { in: ["PENDING", "APPROVED"] } },
    });
    if (existing) {
      res.status(409).json({ message: "This repository has already been submitted" });
      return;
    }
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const requestCount = await prisma.repoRequest.count({
      where: {
        userId: req.user!.id,
        createdAt: {
          gte: twentyFourHoursAgo,
        },
      },
    });

    if (requestCount >= 5) {
      res.status(429).json({
        message: "You can submit at most 5 repo suggestions in the last 24 hours.",
      });
      return;
    }
    const request = await prisma.repoRequest.create({
      data: { ...parsed.data, userId: req.user!.id },
      include: { user: { select: { name: true, email: true } } },
    });

    // Send confirmation email
    try {
      await sendEmail({
        to: request.user.email,
        subject: "Repo Request Received, InternHack",
        html: repoRequestSubmittedHtml(request.user.name, request.name, request.owner),
      });
    } catch { /* email failure is non-blocking */ }

    res.status(201).json({ message: "Repository request submitted successfully", request });
  } catch (err) {
    next(err);
  }
});

// Get my repo requests
opensourceRouter.get("/requests/mine", authMiddleware, requireRole("STUDENT"), async (req, res, next) => {
  try {
    const requests = await prisma.repoRequest.findMany({
      where: { userId: req.user!.id },
      orderBy: { createdAt: "desc" },
    });
    res.json({ requests });
  } catch (err) {
    next(err);
  }
});

// Student contribution trend
opensourceRouter.get("/analytics/trend", authMiddleware, requireRole("STUDENT"), async (req, res, next) => {
  try {
    const now = new Date();
    const currentMonthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
    const startMonth = addMonthsUTC(currentMonthStart, -5);
    const endMonth = addMonthsUTC(currentMonthStart, 1);

    const approvedRequests = await prisma.repoRequest.findMany({
      where: {
        userId: req.user!.id,
        status: "APPROVED",
        updatedAt: { gte: startMonth, lt: endMonth },
      },
      select: { updatedAt: true },
    });

    const countsByMonth = new Map<string, number>();
    for (const request of approvedRequests) {
      const monthKey = getMonthKeyUTC(request.updatedAt);
      countsByMonth.set(monthKey, (countsByMonth.get(monthKey) ?? 0) + 1);
    }

    const trend = Array.from({ length: 6 }, (_, index) => {
      const monthStart = addMonthsUTC(startMonth, index);
      const monthKey = getMonthKeyUTC(monthStart);
      return {
        month: monthKey,
        label: getMonthLabelUTC(monthStart),
        count: countsByMonth.get(monthKey) ?? 0,
      };
    });

    const allApproved = await prisma.repoRequest.findMany({
      where: { userId: req.user!.id, status: "APPROVED" },
      select: { domain: true },
    });

    const domainCounts: Record<string, number> = {};
    allApproved.forEach((r) => {
      if (r.domain) domainCounts[r.domain] = (domainCounts[r.domain] || 0) + 1;
    });
    const domains = Object.entries(domainCounts)
      .map(([domain, count]) => ({ domain, count }))
      .sort((a, b) => b.count - a.count);

    res.json({ trend, total: approvedRequests.length, domains });
  } catch (err) {
    next(err);
  }
});

// ─── Admin: Manage Repo Requests ─────────────────────────────────

// List all repo requests
opensourceRouter.get("/requests/all", authMiddleware, requireRole("ADMIN"), async (req, res, next) => {
  try {
    const { page, limit, skip } = parsePagination(req);
    const status = req.query.status as string | undefined;

    const where: Record<string, unknown> = {};
    if (status && ["PENDING", "APPROVED", "REJECTED"].includes(status)) {
      where.status = status;
    }

    const [requests, total] = await Promise.all([
      prisma.repoRequest.findMany({
        where,
        include: { user: { select: { id: true, name: true, email: true, profilePic: true } } },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.repoRequest.count({ where }),
    ]);

    res.json({ requests, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } });
  } catch (err) {
    next(err);
  }
});

// Approve a repo request
opensourceRouter.put("/requests/:id/approve", authMiddleware, requireRole("ADMIN"), async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) { res.status(400).json({ message: "Invalid request ID" }); return; }

    const overridesParsed = approveRequestOverrideSchema.safeParse(req.body);
    if (!overridesParsed.success) {
      res.status(400).json({ message: "Validation failed", errors: overridesParsed.error.flatten().fieldErrors });
      return;
    }
    const overrides = overridesParsed.data;

    const request = await prisma.repoRequest.findUnique({
      where: { id },
      include: { user: { select: { name: true, email: true } } },
    });
    if (!request) { res.status(404).json({ message: "Request not found" }); return; }
    if (request.status !== "PENDING") { res.status(400).json({ message: "Request is not pending" }); return; }

    // Create the actual repo from the request
    const repo = await prisma.opensourceRepo.create({
      data: {
        name: overrides.name ?? request.name,
        owner: request.owner,
        description: overrides.description ?? request.description,
        language: request.language,
        url: request.url,
        domain: overrides.domain ?? request.domain,
        difficulty: overrides.difficulty ?? request.difficulty,
        techStack: request.techStack,
        tags: overrides.tags ?? request.tags,
      },
    });

    // Update request status
    await prisma.repoRequest.update({
      where: { id },
      data: { status: "APPROVED", adminNote: overrides.adminNote ?? null },
    });

    // Send approval email
    try {
      await sendEmail({
        to: request.user.email,
        subject: "Your Repo Has Been Approved, InternHack",
        html: repoRequestApprovedHtml(request.user.name, overrides.name ?? request.name, request.owner),
      });
    } catch { /* email failure is non-blocking */ }

    res.json({ message: "Request approved and repository added", repo });
  } catch (err) {
    next(err);
  }
});

// Reject a repo request
opensourceRouter.put("/requests/:id/reject", authMiddleware, requireRole("ADMIN"), async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) { res.status(400).json({ message: "Invalid request ID" }); return; }

    const request = await prisma.repoRequest.findUnique({ where: { id } });
    if (!request) { res.status(404).json({ message: "Request not found" }); return; }
    if (request.status !== "PENDING") { res.status(400).json({ message: "Request is not pending" }); return; }

    await prisma.repoRequest.update({
      where: { id },
      data: { status: "REJECTED", adminNote: req.body.adminNote || null },
    });

    res.json({ message: "Request rejected" });
  } catch (err) {
    next(err);
  }
});

// Bulk approve/reject repo requests (admin only)
opensourceRouter.put("/requests/bulk", authMiddleware, requireRole("ADMIN"), async (req, res, next) => {
  try {
    const parsed = bulkRepoRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ message: "Invalid request body", errors: parsed.error.flatten().fieldErrors });
      return;
    }
    const { ids, action, adminNote } = parsed.data;

    const existing = await prisma.repoRequest.findMany({
      where: { id: { in: ids } },
    });

    const validIds = existing.filter((r) => r.status === "PENDING").map((r) => r.id);
    const skippedCount = ids.length - validIds.length;

    if (validIds.length === 0) {
      res.status(400).json({ message: "No PENDING requests found among the provided IDs" });
      return;
    }

    await prisma.$transaction(async (tx) => {
      if (action === "approve") {
        for (const id of validIds) {
          const request = await tx.repoRequest.findUnique({
            where: { id },
            include: { user: { select: { id: true } } },
          });
          if (!request) continue;
          await tx.repoRequest.update({ where: { id }, data: { status: "APPROVED", adminNote: adminNote ?? null } });
          await tx.opensourceRepo.create({
            data: {
              name: request.name,
              owner: request.owner,
              description: request.description,
              language: request.language,
              url: request.url,
              domain: request.domain,
              difficulty: request.difficulty,
              techStack: request.techStack,
              tags: request.tags,
              status: "APPROVED",
              userId: request.userId,
            },
          });
        }
      } else {
        await tx.repoRequest.updateMany({
          where: { id: { in: validIds } },
          data: { status: "REJECTED", adminNote: adminNote ?? null },
        });
      }
    });

    res.json({
      message: `Bulk ${action} completed`,
      approved: action === "approve" ? validIds.length : 0,
      rejected: action === "reject" ? validIds.length : 0,
      skipped: skippedCount,
    });
  } catch (err) {
    next(err);
  }
});

// Public: get single repo (must be AFTER /requests/* routes)
opensourceRouter.get("/:id", async (req, res, next) => {
  try {
    const parsed = repoIdSchema.safeParse(req.params);
    if (!parsed.success) { res.status(400).json({ message: "Invalid repo ID" }); return; }
    const { id } = parsed.data;

    const repo = await prisma.opensourceRepo.findUnique({ where: { id } });
    if (!repo) { res.status(404).json({ message: "Repository not found" }); return; }

    res.json({ repo });
  } catch (err) {
    next(err);
  }
});
