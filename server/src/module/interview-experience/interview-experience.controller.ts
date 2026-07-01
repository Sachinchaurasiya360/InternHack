import type { Request, Response, NextFunction } from "express";
import { InterviewExperienceService } from "./interview-experience.service.js";
import {
  createExperienceSchema,
  updateExperienceSchema,
  listExperiencesSchema,
  listCompaniesSchema,
} from "./interview-experience.validation.js";
import { sendEmail } from "../../utils/email.utils.js";
import { interviewExperienceApprovedHtml } from "../../utils/email-templates.js";
import { prisma } from "../../database/db.js";

const service = new InterviewExperienceService();

export class InterviewExperienceController {
  /** GET /api/interviews */
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = listExperiencesSchema.safeParse(req.query);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid query", errors: parsed.error.flatten() });
        return;
      }
      const viewerIsAdmin = req.user?.role === "ADMIN";
      const result = await service.list(parsed.data, viewerIsAdmin);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  /** GET /api/interviews/companies, directory of companies with experiences */
  async listCompanies(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = listCompaniesSchema.safeParse(req.query);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid query", errors: parsed.error.flatten() });
        return;
      }
      const result = await service.listCompaniesWithExperiences(parsed.data);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  /** GET /api/interviews/companies/:slug/summary */
  async getCompanySummary(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = String(req.params["slug"] ?? "");
      const summary = await service.getCompanySummary(slug);
      if (!summary) {
        res.status(404).json({ message: "Company not found" });
        return;
      }
      res.json(summary);
    } catch (err) {
      next(err);
    }
  }

  /** GET /api/interviews/companies/:slug/top-questions */
  async getTopQuestions(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = String(req.params["slug"] ?? "");
      const limitRaw = Number(req.query["limit"] ?? 20);
      const limit = Number.isFinite(limitRaw) ? Math.min(50, Math.max(1, limitRaw)) : 20;
      const questions = await service.getTopQuestions(slug, limit);
      res.json({ questions });
    } catch (err) {
      next(err);
    }
  }

  /** GET /api/interviews/:id */
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(String(req.params["id"]));
      if (!Number.isFinite(id)) {
        res.status(400).json({ message: "Invalid ID" });
        return;
      }
      const viewerIsAdmin = req.user?.role === "ADMIN";
      const experience = await service.getById(id, req.user?.id, viewerIsAdmin);
      if (!experience) {
        res.status(404).json({ message: "Experience not found" });
        return;
      }
      res.json({ experience });
    } catch (err) {
      next(err);
    }
  }

  /** POST /api/interviews (student) */
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Not authenticated" });
        return;
      }
      const parsed = createExperienceSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid payload", errors: parsed.error.flatten() });
        return;
      }
      const experience = await service.create(req.user.id, parsed.data);

      res.status(201).json({ experience });
    } catch (err) {
      next(err);
    }
  }

  /** PATCH /api/interviews/:id (author or admin) */
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Not authenticated" });
        return;
      }
      const id = Number(String(req.params["id"]));
      if (!Number.isFinite(id)) {
        res.status(400).json({ message: "Invalid ID" });
        return;
      }
      const parsed = updateExperienceSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid payload", errors: parsed.error.flatten() });
        return;
      }
      const { experience, previousStatus } = await service.update(
        id,
        parsed.data,
        req.user.id,
        req.user.role === "ADMIN",
      );

      // Side-effect: when an admin approves a previously-non-approved experience,
      // email the author that it is live.
      if (
        req.user.role === "ADMIN" &&
        previousStatus !== "APPROVED" &&
        experience.status === "APPROVED" &&
        experience.user
      ) {
        void notifyApproval(experience).catch((err) => {
          console.error("[interview-experience] approval notify failed for experience %d: %o", experience.id, err);
        });
      }

      res.json({ experience });
    } catch (err) {
      next(err);
    }
  }

  /** DELETE /api/interviews/:id (author or admin) */
  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Not authenticated" });
        return;
      }
      const id = Number(String(req.params["id"]));
      if (!Number.isFinite(id)) {
        res.status(400).json({ message: "Invalid ID" });
        return;
      }
      await service.remove(id, req.user.id, req.user.role === "ADMIN");
      res.json({ message: "Deleted" });
    } catch (err) {
      next(err);
    }
  }

  /** POST /api/interviews/:id/upvote (student) */
  async toggleUpvote(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Not authenticated" });
        return;
      }
      const id = Number(String(req.params["id"]));
      if (!Number.isFinite(id)) {
        res.status(400).json({ message: "Invalid ID" });
        return;
      }
      const result = await service.toggleUpvote(id, req.user.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

interface ApprovalNotifyTarget {
  id: number;
  role: string;
  user: { id: number } | null;
  company: { name: string } | null;
}

async function notifyApproval(experience: ApprovalNotifyTarget): Promise<void> {
  if (!experience.user) return;

  const author = await prisma.user.findUnique({
    where: { id: experience.user.id },
    select: { email: true, name: true },
  });
  if (!author?.email) return;

  await sendEmail({
    to: author.email,
    subject: `Your interview experience for ${experience.company?.name ?? "a company"} is approved`,
    html: interviewExperienceApprovedHtml({
      name: author.name,
      companyName: experience.company?.name ?? "Unknown Company",
      role: experience.role,
      experienceId: experience.id,
    }),
  });
}
