import type { Request, Response, NextFunction } from "express";
import { InternshipService } from "./internship.service.js";
import { parsePagination } from "../../utils/pagination.utils.js";
import { createGovInternshipSchema, updateGovInternshipSchema } from "./internship.validation.js";

const service = new InternshipService();

export class InternshipController {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, limit } = parsePagination(req, { defaultLimit: 24, maxLimit: 50 });
      const search = (req.query["search"] as string) || undefined;
      const category = (req.query["category"] as string) || undefined;

      const result = await service.list({ page, limit, search, category });
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
      const parsed = createGovInternshipSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() });
        return;
      }
      const data = parsed.data;
      const result = await service.create(data);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const idStr = req.params.id;
      if (!idStr || typeof idStr !== "string" || !/^\d+$/.test(idStr)) {
        res.status(400).json({ message: "Invalid internship ID" });
        return;
      }
      const id = Number(idStr);
      const parsed = updateGovInternshipSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() });
        return;
      }
      const data = parsed.data;
      const result = await service.update(id, data);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}
