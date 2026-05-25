import { Request, Response, NextFunction } from "express";
import { OpensourceService } from "./opensource.service.js";
import { repoIdSchema } from "./opensource.validation.js";

export class OpensourceController {
  constructor(private opensourceService: OpensourceService) {}

  async getRepoInsights(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = repoIdSchema.safeParse(req.params);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid repo ID" });
        return;
      }
      const repoId = parsed.data.id;
      const userId = req.user!.id;

      const insights = await this.opensourceService.getRepoInsights(repoId, userId);
      res.json(insights);
    } catch (err: any) {
      if (err.message === "Repository not found") {
        res.status(404).json({ message: err.message });
        return;
      }
      next(err);
    }
  }
}
