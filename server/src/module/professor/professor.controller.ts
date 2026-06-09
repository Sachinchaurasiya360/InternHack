import type { Request, Response, NextFunction } from "express";
import { ProfessorService } from "./professor.service.js";
import { isPremiumUser } from "../../utils/premium.utils.js";
import { parsePagination } from "../../utils/pagination.utils.js";
import { createProfessorSchema, updateProfessorSchema } from "./professor.validation.js";

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

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = createProfessorSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid payload", errors: parsed.error.flatten() });
        return;
      }
      const record = await service.create(parsed.data);
      res.status(201).json(record);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(String(req.params["id"]));
      if (!Number.isFinite(id)) {
        res.status(400).json({ message: "Invalid ID" });
        return;
      }
      const parsed = updateProfessorSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid payload", errors: parsed.error.flatten() });
        return;
      }
      const record = await service.update(id, parsed.data);
      res.json(record);
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(String(req.params["id"]));
      if (!Number.isFinite(id)) {
        res.status(400).json({ message: "Invalid ID" });
        return;
      }
      const record = await service.delete(id);
      res.json({ message: "Professor deleted", record });
    } catch (err) {
      next(err);
    }
  }
}
