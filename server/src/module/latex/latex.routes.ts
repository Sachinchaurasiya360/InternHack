import { Router } from "express";
import { LatexController } from "./latex.controller.js";
import { LatexService } from "./latex.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const latexService = new LatexService();
const latexController = new LatexController(latexService);

export const latexRouter = Router();

latexRouter.use(authMiddleware, requireRole("STUDENT"));

latexRouter.post("/compile", (req, res, next) =>
  latexController.compile(req, res, next)
);
