import { Router } from "express";
import { PaymentController } from "./payment.controller.js";
import { PaymentService } from "./payment.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const paymentService = new PaymentService();
const paymentController = new PaymentController(paymentService);

export const paymentRouter = Router();

// Authenticated student routes
paymentRouter.post(
  "/create-checkout",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => paymentController.createCheckout(req, res, next),
);

paymentRouter.get(
  "/checkout-status/:sessionId",
  authMiddleware,
  requireRole("STUDENT"),
  (req, res, next) => paymentController.checkoutStatus(req, res, next),
);

// Webhook route, NO auth middleware (Dodo server calls this directly)
// Raw body parsing is handled in index.ts
paymentRouter.post(
  "/webhook",
  (req, res, next) => paymentController.webhook(req, res, next),
);
