import type { Request, Response, NextFunction } from "express";
import { AptitudeService } from "./aptitude.service.js";

export class AptitudeController {
  constructor(private service: AptitudeService) {}

  async getCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const studentId = req.user?.id;
      const categories = await this.service.getCategories(studentId);
      res.json(categories);
    } catch (err) {
      next(err);
    }
  }

  async getTopicQuestions(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = req.params.slug as string;
      const page = parseInt(String(req.query.page ?? "1")) || 1;
      const limit = parseInt(String(req.query.limit ?? "10")) || 10;
      const studentId = req.user?.id;
      const result = await this.service.getTopicQuestions(slug, page, limit, studentId);
      if (!result) return res.status(404).json({ error: "Topic not found" });
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async submitAnswer(req: Request, res: Response, next: NextFunction) {
    try {
      const questionId = parseInt(req.params.id as string);
      const studentId = req.user!.id;
      const { answer } = req.body;
      if (!answer) return res.status(400).json({ error: "Answer is required" });
      const result = await this.service.submitAnswer(studentId, questionId, answer);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getCompanies(_req: Request, res: Response, next: NextFunction) {
    try {
      const companies = await this.service.getCompanies();
      res.json(companies);
    } catch (err) {
      next(err);
    }
  }

  async getCompanyQuestions(req: Request, res: Response, next: NextFunction) {
    try {
      const name = req.params.name as string;
      const page = parseInt(String(req.query.page ?? "1")) || 1;
      const limit = parseInt(String(req.query.limit ?? "10")) || 10;
      const studentId = req.user?.id;
      const result = await this.service.getCompanyQuestions(name, page, limit, studentId);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getProgress(req: Request, res: Response, next: NextFunction) {
    try {
      const studentId = req.user!.id;
      const progress = await this.service.getProgress(studentId);
      res.json(progress);
    } catch (err) {
      next(err);
    }
  }
}
