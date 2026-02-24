import { Router } from "express";
import { PaymentController } from "./payment.controller.js";
import { PaymentService } from "./payment.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const paymentService = new PaymentService();
const paymentController = new PaymentController(paymentService);

export const paymentRouter = Router();

paymentRouter.use(authMiddleware, requireRole("STUDENT"));

paymentRouter.post("/create-order", (req, res, next) => paymentController.createOrder(req, res, next));
paymentRouter.post("/verify", (req, res, next) => paymentController.verifyPayment(req, res, next));
