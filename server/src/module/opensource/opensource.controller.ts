import { type Request, type Response, type NextFunction } from "express";
import { OpensourceService } from "./opensource.service.js";
import { opensourceListQuerySchema, gsocOrgsQuerySchema } from "./opensource.validation.js";

const service = new OpensourceService();

export class OpensourceController {
  async getLanguages(req: Request, res: Response, next: NextFunction) {
    try {
      const languages = await service.getLanguages();
      res.json({ languages });
    } catch (err) {
      next(err);
    }
  }

  async listRepos(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = opensourceListQuerySchema.safeParse(req.query);
      if (!parsed.success) {
        res.status(400).json({
          message: "Invalid query parameters",
          errors: parsed.error.flatten().fieldErrors,
        });
        return;
      }

      const result = await service.listRepos(parsed.data);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getGsocOrgs(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = gsocOrgsQuerySchema.safeParse(req.query);
      if (!parsed.success) {
        res.status(400).json({
          message: "Invalid query parameters",
          errors: parsed.error.flatten().fieldErrors,
        });
        return;
      }

      const result = await service.getGsocOrgs(parsed.data);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}
