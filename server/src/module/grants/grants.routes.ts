import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { grantsController } from "./grants.controller.js";

const router = Router();

router.use(authMiddleware, requireRole("STUDENT"));

router.get("/tracked", grantsController.listTracked);
router.post("/tracked", grantsController.addTracked);
router.patch("/tracked/:id", grantsController.updateTracked);
router.delete("/tracked/:id", grantsController.deleteTracked);

export { router as grantsRouter };
