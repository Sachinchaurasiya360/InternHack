import type { Request, Response, NextFunction } from "express";
import { ProfessorService } from "./professor.service.js";
import { isPremiumUser } from "../../utils/premium.utils.js";
import { parsePagination } from "../../utils/pagination.utils.js";

const service = new ProfessorService();

export class ProfessorController {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, limit } = parsePagination(req, { defaultLimit: 24, maxLimit: 50 });
      const search = (req.query["search"] as string) || undefined;
      const college = (req.query["college"] as string) || undefined;
      const department = (req.query["department"] as string) || undefined;

      const isPremium = req.user?.id ? await isPremiumUser(req.user.id) : false;

      const result = await service.list({ page, limit, search, college, department }, isPremium);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async stats(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await service.stats();
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}
