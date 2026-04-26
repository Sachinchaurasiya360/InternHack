import { Router } from "express";
import rateLimit from "express-rate-limit";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";
import { jobAgentController } from "./job-agent.controller.js";

const router = Router();

router.use(authMiddleware, requireRole("STUDENT"));

// Per-user burst limit on top of the daily usage limit.
// Gemini calls are expensive, cap at 10 chat requests per minute per user.
const chatBurstLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    const userId = (req as any).user?.id;
    return userId ? `u:${userId}` : `ip:${req.ip}`;
  },
  message: { message: "You're sending messages too quickly. Please wait a moment and try again." },
});

router.post("/chat",             chatBurstLimiter, usageLimit("AI_JOB_CHAT"), jobAgentController.chat);
router.get("/conversation",      jobAgentController.getConversation);
router.delete("/conversation",   jobAgentController.resetConversation);

export { router as jobAgentRouter };
