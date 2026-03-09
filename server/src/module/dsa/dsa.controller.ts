import type { Request, Response, NextFunction } from "express";
import { DsaService } from "./dsa.service.js";

export class DsaController {
  constructor(private dsaService: DsaService) {}

  async listTopics(req: Request, res: Response, next: NextFunction) {
    try {
      const studentId = req.user?.id;
      const sheet = req.query.sheet as string | undefined;
      const difficulty = req.query.difficulty ? (req.query.difficulty as string).split(",") : undefined;
      const topics = await this.dsaService.listTopics(studentId, sheet, difficulty);
      res.json(topics);
    } catch (err) {
      next(err);
    }
  }

  async getTopicBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const { slug } = req.params;
      const studentId = req.user?.id;
      const topic = await this.dsaService.getTopicBySlug(slug, studentId);
      res.json(topic);
    } catch (err) {
      next(err);
    }
  }

  async toggleProblem(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) { res.status(401).json({ message: "Authentication required" }); return; }
      const problemId = parseInt(req.params.problemId);
      const result = await this.dsaService.toggleProblem(userId, problemId);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async updateNotes(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) { res.status(401).json({ message: "Authentication required" }); return; }
      const problemId = parseInt(req.params.problemId);
      const { notes } = req.body;
      const result = await this.dsaService.updateNotes(userId, problemId, notes ?? "");
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async toggleBookmark(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) { res.status(401).json({ message: "Authentication required" }); return; }
      const problemId = parseInt(req.params.problemId);
      const result = await this.dsaService.toggleBookmark(userId, problemId);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getBookmarks(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) { res.status(401).json({ message: "Authentication required" }); return; }
      const bookmarks = await this.dsaService.getBookmarks(userId);
      res.json(bookmarks);
    } catch (err) {
      next(err);
    }
  }

  async getCompanies(_req: Request, res: Response, next: NextFunction) {
    try {
      const companies = await this.dsaService.getCompanies();
      res.json(companies);
    } catch (err) {
      next(err);
    }
  }

  async getCompanyProblems(req: Request, res: Response, next: NextFunction) {
    try {
      const { company } = req.params;
      const studentId = req.user?.id;
      const problems = await this.dsaService.getCompanyProblems(company, studentId);
      res.json(problems);
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
      const { pattern } = req.params;
      const studentId = req.user?.id;
      const problems = await this.dsaService.getPatternProblems(pattern, studentId);
      res.json(problems);
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

  async getMyProgress(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) { res.status(401).json({ message: "Authentication required" }); return; }
      const progress = await this.dsaService.getMyProgress(userId);
      res.json(progress);
    } catch (err) {
      next(err);
    }
  }
}
