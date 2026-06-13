import type { Request, Response, NextFunction } from "express";
import { DsaService } from "./dsa.service.js";
import { parsePagination } from "../../utils/pagination.utils.js";
import { syncLeetCodeSolvedProblems } from "./leetcode.service.js";
import { syncLeetCodeSchema } from "./dsa.validation.js";
import { prisma } from "../../database/db.js";
import { isPremiumUser } from "../../utils/premium.utils.js";
import {
  executeCodeSchema,
  addLabelSchema,
  removeLabelSchema,
} from "./dsa.validation.js";

export class DsaController {
  constructor(private dsaService: DsaService) {}

  async listTopics(req: Request, res: Response, next: NextFunction) {
    try {
      const studentId = req.user?.id;
      const sheet = req.query.sheet as string | undefined;
      const difficulty = req.query.difficulty
        ? (req.query.difficulty as string).split(",")
        : undefined;
      const search = req.query.search ? String(req.query.search) : undefined;
      const topics = await this.dsaService.listTopics(
        studentId,
        sheet,
        difficulty,
        search,
      );
      res.json(topics);
    } catch (err) {
      next(err);
    }
  }

  async getTopicBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = req.params.slug as string;
      const studentId = req.user?.id;
      const { page, limit } = parsePagination(req, { defaultLimit: 50 });
      const difficulty = req.query.difficulty as string | undefined;
      const search = req.query.search as string | undefined;
      const topic = await this.dsaService.getTopicBySlug(
        slug,
        studentId,
        page,
        limit,
        difficulty,
        search,
      );
      res.json(topic);
    } catch (err) {
      next(err);
    }
  }

  async getProblemBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = req.params.slug as string;
      const studentId = req.user?.id;
      const problem = await this.dsaService.getProblemBySlug(slug, studentId);
      res.json(problem);
    } catch (err) {
      next(err);
    }
  }

  async toggleProblem(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const problemId = parseInt(req.params.problemId as string);
      if (isNaN(problemId))
        return res.status(400).json({ message: "Invalid problem ID" });
      const result = await this.dsaService.toggleProblem(userId, problemId);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async updateNotes(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const problemId = parseInt(req.params.problemId as string);
      if (isNaN(problemId))
        return res.status(400).json({ message: "Invalid problem ID" });
      const { notes } = req.body;
      const result = await this.dsaService.updateNotes(
        userId,
        problemId,
        notes ?? "",
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async toggleBookmark(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const problemId = parseInt(req.params.problemId as string);
      if (isNaN(problemId))
        return res.status(400).json({ message: "Invalid problem ID" });
      const result = await this.dsaService.toggleBookmark(userId, problemId);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async reportProblem(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.status(401).json({
          message: "Unauthorized",
        });
      }

      const problemId = Number(req.params.problemId);

      if (Number.isNaN(problemId)) {
        return res.status(400).json({
          message: "Invalid problem ID",
        });
      }

      const { reason, message } = req.body;

      if (!reason) {
        return res.status(400).json({
          message: "Reason is required",
        });
      }

      const report = await this.dsaService.reportProblem({
        userId: req.user.id,
        problemId,
        reason,
        message,
      });

      res.status(201).json(report);
    } catch (error) {
      next(error);
    }
  }

  async getBookmarks(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const bookmarks = await this.dsaService.getBookmarks(userId);
      res.json(bookmarks);
    } catch (err) {
      next(err);
    }
  }

  async addLabel(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const problemId = parseInt(req.params.problemId as string);
      if (isNaN(problemId)) {
        res.status(400).json({ message: "Invalid problem ID" });
        return;
      }
      const parsed = addLabelSchema.safeParse(req.body);
      if (!parsed.success) {
        res
          .status(400)
          .json({
            message: "Validation failed",
            errors: parsed.error.flatten(),
          });
        return;
      }
      const result = await this.dsaService.addLabel(
        userId,
        problemId,
        parsed.data.label,
      );
      res.status(201).json(result);
    } catch (err) {
      const status = (err as { status?: unknown }).status;
      if (err instanceof Error && typeof status === "number") {
        res.status(status).json({ message: err.message });
        return;
      }
      next(err);
    }
  }

  async removeLabel(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const problemId = parseInt(req.params.problemId as string);
      if (isNaN(problemId)) {
        res.status(400).json({ message: "Invalid problem ID" });
        return;
      }
      const parsed = removeLabelSchema.safeParse(req.body);
      if (!parsed.success) {
        res
          .status(400)
          .json({
            message: "Validation failed",
            errors: parsed.error.flatten(),
          });
        return;
      }
      const result = await this.dsaService.removeLabel(
        userId,
        problemId,
        parsed.data.label,
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getMyLabels(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const labels = await this.dsaService.getMyLabels(userId);
      res.json(labels);
    } catch (err) {
      next(err);
    }
  }

  async getCompanies(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      const companies = await this.dsaService.getCompanies(userId);
      res.json(companies);
    } catch (err) {
      next(err);
    }
  }

  async getCompanyProblems(req: Request, res: Response, next: NextFunction) {
    try {
      const company = req.params.company as string;
      const studentId = req.user?.id;
      const { page, limit } = parsePagination(req, { defaultLimit: 50 });
      const result = await this.dsaService.getCompanyProblems(
        company,
        studentId,
        page,
        limit,
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getCompanyTrackStats(req: Request, res: Response, next: NextFunction) {
    try {
      const company = req.params.company as string;
      const userId = req.user?.id;
      const stats = await this.dsaService.getCompanyTrackStats(company, userId);
      res.json(stats);
    } catch (err) {
      next(err);
    }
  }

  async getPatterns(_req: Request, res: Response, next: NextFunction) {
    try {
      const patterns = await this.dsaService.getPatterns();
      res.json(patterns);
    } catch (err) {
      next(err);
    }
  }

  async getPatternProblems(req: Request, res: Response, next: NextFunction) {
    try {
      const pattern = req.params.pattern as string;
      const studentId = req.user?.id;
      const { page, limit } = parsePagination(req, { defaultLimit: 50 });
      const result = await this.dsaService.getPatternProblems(
        pattern,
        studentId,
        page,
        limit,
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getSheetStats(req: Request, res: Response, next: NextFunction) {
    try {
      const studentId = req.user?.id;
      const stats = await this.dsaService.getSheetStats(studentId);
      res.json(stats);
    } catch (err) {
      next(err);
    }
  }

  async getLists(req: Request, res: Response, next: NextFunction) {
    try {
      const studentId = req.user?.id;
      const lists = await this.dsaService.getLists(studentId);
      res.json(lists);
    } catch (err) {
      next(err);
    }
  }

  async getListProblems(req: Request, res: Response, next: NextFunction) {
    try {
      const list = req.params.name as string;
      const studentId = req.user?.id;
      const { page, limit } = parsePagination(req, { defaultLimit: 50 });
      const result = await this.dsaService.getListProblems(
        list,
        studentId,
        page,
        limit,
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getMyProgress(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const progress = await this.dsaService.getMyProgress(userId);
      res.json(progress);
    } catch (err) {
      next(err);
    }
  }

  async executeCode(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const problemId = parseInt(req.params.problemId as string);
      if (isNaN(problemId)) {
        res.status(400).json({ message: "Invalid problem ID" });
        return;
      }
      const body = executeCodeSchema.safeParse(req.body);
      if (!body.success)
        return res
          .status(400)
          .json({ message: "Validation failed", errors: body.error.flatten() });
      const { language, code } = body.data;
      const result = await this.dsaService.executeCodeAgainstTestCases(
        userId,
        problemId,
        language,
        code,
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getSubmissionHistory(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const problemId = parseInt(req.params.problemId as string);
      if (isNaN(problemId)) {
        res.status(400).json({ message: "Invalid problem ID" });
        return;
      }
      const history = await this.dsaService.getSubmissionHistory(
        userId,
        problemId,
      );
      res.json(history);
    } catch (err) {
      next(err);
    }
  }

  async syncLeetCode(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const parsed = syncLeetCodeSchema.safeParse(req.body);
      if (!parsed.success) {
        res
          .status(400)
          .json({
            message: "Validation failed",
            errors: parsed.error.flatten(),
          });
        return;
      }
      const result = await syncLeetCodeSolvedProblems(
        userId,
        parsed.data.leetcodeUsername,
      );
      res.json({
        success: true,
        message: `Successfully synced ${result.syncedCount} problems from LeetCode.`,
        data: result,
      });
    } catch (err) {
      next(err);
    }
  }

  async getActivity(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const currentYear = new Date().getUTCFullYear();
      const year = req.query.year
        ? parseInt(req.query.year as string, 10)
        : currentYear;
      if (!Number.isInteger(year) || year < 1970 || year > currentYear) {
        res.status(400).json({ message: "Invalid year" });
        return;
      }

      const activity = await this.dsaService.getActivity(userId, year);

      if (year < currentYear) {
        res.setHeader("Cache-Control", "private, max-age=31536000");
      } else {
        res.setHeader("Cache-Control", "private, max-age=600");
      }

      res.json(activity);
    } catch (err) {
      next(err);
    }
  }

  async getAnalytics(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) { res.status(401).json({ message: "Authentication required" }); return; }
      const data = await this.dsaService.getAnalytics(userId);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async getDailyProblem(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      const dailyProblem = await this.dsaService.getDailyProblem(userId);
      res.json(dailyProblem);
    } catch (err) {
      next(err);
    }
  }

  async getUserDsaStreak(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;

      if (!userId) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const streak = await this.dsaService.getUserDsaStreak(userId);
      res.json(streak);
    } catch (err) {
      next(err);
    }
  }

  async getSimilarProblems(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id as string, 10);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid problem ID" });
        return;
      }
      const limit = Math.min(
        Math.max(parseInt(req.query.limit as string, 10) || 3, 1),
        10,
      );
      const data = await this.dsaService.getSimilarProblems(id, limit);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async generateCodeReview(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const isPremium = await isPremiumUser(userId);
      if (!isPremium) {
        res.status(403).json({ message: "Premium subscription required" });
        return;
      }

      const submissionId = parseInt(req.params.submissionId as string);
      if (isNaN(submissionId)) {
        res.status(400).json({ message: "Invalid submission ID" });
        return;
      }
      const review = await this.dsaService.generateCodeReview(
        submissionId,
        userId,
      );
      res.json(review);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes("Submission not found")) {
          res.status(404).json({ message: err.message });
          return;
        }
        if (err.message.includes("Not authorized")) {
          res.status(403).json({ message: err.message });
          return;
        }
      }
      next(err);
    }
  }

  async generateHint(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const problemId = parseInt(req.params.problemId as string);
      if (isNaN(problemId)) {
        res.status(400).json({ message: "Invalid problem ID" });
        return;
      }
      const { level } = req.body;
      if (!["conceptual", "algorithmic", "code"].includes(level)) {
        res
          .status(400)
          .json({
            message:
              "Invalid hint level. Must be: conceptual, algorithmic, or code",
          });
        return;
      }
      const hint = await this.dsaService.generateHint(userId, problemId, level);
      res.json(hint);
    } catch (err) {
      next(err);
    }
  }

  async getApproaches(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = req.params.slug as string;
      if (!slug) { res.status(400).json({ message: "Problem slug is required" }); return; }
      const approaches = await this.dsaService.getApproaches(slug);
      res.json(approaches);
    } catch (err) {
      if (err instanceof Error && err.message.includes("Problem not found")) {
        res.status(404).json({ message: err.message });
        return;
      }
      next(err);
    }
  }
}