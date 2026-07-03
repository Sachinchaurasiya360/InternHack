import type { NextFunction, Request, Response } from "express";
import { GithubService } from "./github.service.js";

const service = new GithubService();

export class GithubController {
  getConnectUrl(req: Request, res: Response, next: NextFunction) {
    try {
      const authUrl = service.getConnectUrl(req.user!.id);
      res.json({ authUrl });
    } catch (err) {
      next(err);
    }
  }

  async callback(req: Request, res: Response, next: NextFunction) {
    try {
      const code = typeof req.query.code === "string" ? req.query.code : "";
      const state = typeof req.query.state === "string" ? req.query.state : "";

      if (!code || !state) {
        res.status(400).json({ message: "Missing GitHub OAuth code or state" });
        return;
      }

      const redirectUrl = await service.handleCallback(code, state);
      res.redirect(redirectUrl);
    } catch (err) {
      next(err);
    }
  }

  async getConnection(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await service.getConnection(req.user!.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async sync(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await service.syncConnection(req.user!.id);
      res.json(result);
    } catch (err: any) {
      if (err.message === "GitHub is not connected") {
        res.status(404).json({ message: err.message });
        return;
      }
      next(err);
    }
  }

  async disconnect(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await service.disconnect(req.user!.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}
