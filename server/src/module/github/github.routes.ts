import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { githubSyncLimiter } from "../../middleware/rate-limit.middleware.js";
import { GithubController } from "./github.controller.js";

export const githubRouter = Router();
const controller = new GithubController();

githubRouter.get("/callback", (req, res, next) => controller.callback(req, res, next));

githubRouter.post("/connect", authMiddleware, requireRole("STUDENT"), githubSyncLimiter, (req, res, next) =>
  controller.getConnectUrl(req, res, next),
);

githubRouter.get("/connection", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.getConnection(req, res, next),
);

githubRouter.post("/sync", authMiddleware, requireRole("STUDENT"), githubSyncLimiter, (req, res, next) =>
  controller.sync(req, res, next),
);

githubRouter.delete("/connection", authMiddleware, requireRole("STUDENT"), (req, res, next) =>
  controller.disconnect(req, res, next),
);
