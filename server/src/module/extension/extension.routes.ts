import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { extensionController } from "./extension.controller.js";

const router = Router();

router.use(authMiddleware, requireRole("STUDENT"));

router.post("/session", extensionController.session);
router.get("/profile", extensionController.profile);
router.post("/detect", extensionController.detect);
router.post("/autofill-event", extensionController.event);
router.post("/track-application", extensionController.trackApplication);
router.post("/support-request", extensionController.supportRequest);

export { router as extensionRouter };

