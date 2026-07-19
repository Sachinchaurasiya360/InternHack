import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { usageLimit } from "../../middleware/usage-limit.middleware.js";
import { applicationProfileController } from "./application-profile.controller.js";

const router = Router();

router.use(authMiddleware, requireRole("STUDENT"));

router.get("/me", applicationProfileController.getMe);
router.put("/me", applicationProfileController.updateMe);
router.patch("/autofill-settings", applicationProfileController.updateAutofillSettings);
router.get("/questions", applicationProfileController.listQuestions);
router.post("/questions", applicationProfileController.saveQuestion);
router.post("/questions/match", applicationProfileController.matchQuestion);
router.post("/questions/generate", usageLimit("AI_JOB_CHAT"), applicationProfileController.generateQuestion);

export { router as applicationProfileRouter };

