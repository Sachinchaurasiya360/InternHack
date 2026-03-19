import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { jobAgentController } from "./job-agent.controller.js";

const router = Router();

router.use(authMiddleware, requireRole("STUDENT"));

router.post("/chat",             jobAgentController.chat);
router.get("/conversation",      jobAgentController.getConversation);
router.delete("/conversation",   jobAgentController.resetConversation);

export { router as jobAgentRouter };
