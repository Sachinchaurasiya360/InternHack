import { Router } from "express";
import { AtsController } from "./ats.controller.js";
import { AtsService } from "./ats.service.js";
import { CoverLetterController } from "./cover-letter.controller.js";
import { CoverLetterService } from "./cover-letter.service.js";
import { ResumeGenController } from "./resume-gen.controller.js";
import { ResumeGenService } from "./resume-gen.service.js";
import { LatexChatController } from "./latex-chat.controller.js";
import { LatexChatService } from "./latex-chat.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";

const atsService = new AtsService();
const atsController = new AtsController(atsService);

const coverLetterService = new CoverLetterService();
const coverLetterController = new CoverLetterController(coverLetterService);

const resumeGenService = new ResumeGenService();
const resumeGenController = new ResumeGenController(resumeGenService);

const latexChatService = new LatexChatService();
const latexChatController = new LatexChatController(latexChatService);

export const atsRouter = Router();

atsRouter.use(authMiddleware, requireRole("STUDENT"));

atsRouter.get("/usage", (req, res, next) => atsController.getUsageStats(req, res, next));
atsRouter.post("/score", usageLimit("ATS_SCORE"), (req, res, next) => atsController.scoreResume(req, res, next));
atsRouter.get("/history", (req, res, next) => atsController.getScoreHistory(req, res, next));
atsRouter.get("/history/:scoreId", (req, res, next) => atsController.getScoreById(req, res, next));
atsRouter.post("/cover-letter", usageLimit("COVER_LETTER"), (req, res, next) => coverLetterController.generate(req, res, next));
atsRouter.post("/generate-resume", usageLimit("GENERATE_RESUME"), (req, res, next) => resumeGenController.generate(req, res, next));
atsRouter.post("/latex-chat", (req, res, next) => latexChatController.chat(req, res, next));
atsRouter.post("/latex-optimize-jd", (req, res, next) => latexChatController.optimizeForJD(req, res, next));
