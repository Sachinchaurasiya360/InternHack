import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { validateBody } from "../../middleware/validation.middleware.js";
import { ExpertSessionController } from "./expert-session.controller.js";
import { bookExpertSessionSchema, availabilityBlockSchema } from "./expert-session.validation.js";

const controller = new ExpertSessionController();

// Student-facing routes: ₹49 payment is the sole gate, no requirePremium/usageLimit.
export const expertSessionRouter = Router();

expertSessionRouter.get(
  "/available-slots",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => controller.getAvailableSlots(req, res),
);

expertSessionRouter.post(
  "/checkout",
  authMiddleware,
  requireRole("STUDENT"),
  validateBody(bookExpertSessionSchema),
  (req, res) => controller.checkout(req, res),
);

expertSessionRouter.get(
  "/status/:id",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => controller.getStatus(req, res),
);

expertSessionRouter.get(
  "/my-sessions",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res) => controller.getMySessions(req, res),
);

// Admin routes: availability management + booking visibility.
export const expertSessionAdminRouter = Router();
expertSessionAdminRouter.use(authMiddleware, requireRole("ADMIN"));

expertSessionAdminRouter.get("/availability-blocks", (req, res) => controller.listAvailabilityBlocks(req, res));
expertSessionAdminRouter.post(
  "/availability-blocks",
  validateBody(availabilityBlockSchema),
  (req, res) => controller.createAvailabilityBlock(req, res),
);
expertSessionAdminRouter.delete("/availability-blocks/:id", (req, res) => controller.deleteAvailabilityBlock(req, res));
expertSessionAdminRouter.get("/bookings", (req, res) => controller.listBookings(req, res));
