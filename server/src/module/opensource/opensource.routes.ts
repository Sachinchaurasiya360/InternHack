import { Router } from "express";
import { prisma } from "../../database/db.js";
import { opensourceListQuerySchema, repoIdSchema, submitRepoRequestSchema } from "./opensource.validation.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { sendEmail } from "../../utils/email.utils.js";
import { repoRequestSubmittedHtml, repoRequestApprovedHtml } from "../../utils/email-templates.js";

export const opensourceRouter = Router();

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
      where["OR"] = [
        { name: { contains: search, mode: "insensitive" } },
        { owner: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { tags: { hasSome: [search] } },
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

    const request = await prisma.repoRequest.create({
      data: { ...parsed.data, userId: req.user!.id },
      include: { user: { select: { name: true, email: true } } },
    });

    // Send confirmation email
    try {
      await sendEmail({
        to: request.user.email,
        subject: "Repo Request Received — InternHack",
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

// ─── Admin: Manage Repo Requests ─────────────────────────────────

// List all repo requests
opensourceRouter.get("/requests/all", authMiddleware, requireRole("ADMIN"), async (req, res, next) => {
  try {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 20));
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
        skip: (page - 1) * limit,
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

    const request = await prisma.repoRequest.findUnique({
      where: { id },
      include: { user: { select: { name: true, email: true } } },
    });
    if (!request) { res.status(404).json({ message: "Request not found" }); return; }
    if (request.status !== "PENDING") { res.status(400).json({ message: "Request is not pending" }); return; }

    // Create the actual repo from the request
    const repo = await prisma.opensourceRepo.create({
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
      },
    });

    // Update request status
    await prisma.repoRequest.update({
      where: { id },
      data: { status: "APPROVED", adminNote: req.body.adminNote || null },
    });

    // Send approval email
    try {
      await sendEmail({
        to: request.user.email,
        subject: "Your Repo Has Been Approved — InternHack",
        html: repoRequestApprovedHtml(request.user.name, request.name, request.owner),
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
