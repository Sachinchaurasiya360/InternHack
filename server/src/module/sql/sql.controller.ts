import type { Request, Response, NextFunction } from "express";
import { SqlService } from "./sql.service.js";

export class SqlController {
  constructor(private sqlService: SqlService) {}

  async saveProgress(req: Request, res: Response, next: NextFunction) {
    try {
      const studentId = req.user!.id;
      const { exerciseId, solved, code } = req.body;
      if (!exerciseId || typeof solved !== "boolean") {
        return res.status(400).json({ message: "exerciseId and solved are required" });
      }
      await this.sqlService.saveProgress(studentId, exerciseId, solved, code);
      return res.json({ exerciseId, solved });
    } catch (err) {
      next(err);
    }
  }

  async getProgress(req: Request, res: Response, next: NextFunction) {
    try {
      const studentId = req.user!.id;
      const progress = await this.sqlService.getProgress(studentId);
      return res.json(progress);
    } catch (err) {
      next(err);
    }
  }
}
