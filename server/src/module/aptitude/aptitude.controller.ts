import type { Request, Response, NextFunction } from "express";
import { AptitudeService } from "./aptitude.service.js";
import { parsePagination } from "../../utils/pagination.utils.js";
import { submitAnswerSchema } from "./aptitude.validation.js";

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
      const { page, limit } = parsePagination(req, { defaultLimit: 10, maxLimit: 50 });
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
      const parsed = submitAnswerSchema.safeParse({ body: req.body, params: req.params });
      if (!parsed.success) return res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() });

      const questionId = parseInt(parsed.data.params.id);
      if (isNaN(questionId)) return res.status(400).json({ message: "Invalid question ID" });

      const studentId = req.user!.id;
      const result = await this.service.submitAnswer(studentId, questionId, parsed.data.body.answer);
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
      const { page, limit } = parsePagination(req, { defaultLimit: 10 });
      const studentId = req.user?.id;
      const result = await this.service.getCompanyQuestions(name, page, limit, studentId);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async resetTopicProgress(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = req.params.slug as string;
      const studentId = req.user!.id;
      const result = await this.service.resetTopicProgress(studentId, slug);
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

  async getWeakAreas(req: Request, res: Response, next: NextFunction) {
    try {
      const studentId = req.user!.id;
      const weakAreas = await this.service.getWeakAreas(studentId);
      res.json(weakAreas);
    } catch (err) {
      next(err);
    }
  }
}
