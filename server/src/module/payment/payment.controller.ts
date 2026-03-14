import type { Request, Response, NextFunction } from "express";
import type { PaymentService } from "./payment.service.js";
import { createOrderSchema, verifyPaymentSchema } from "./payment.validation.js";

export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const parsed = createOrderSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: parsed.error.issues[0]?.message ?? "Invalid request body" });
        return;
      }

      const { plan, billing } = parsed.data;
      const order = await this.paymentService.createOrder(req.user.id, plan, billing);
      res.json(order);
    } catch (err) {
      next(err);
    }
  }

  async verifyPayment(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const parsed = verifyPaymentSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: parsed.error.issues[0]?.message ?? "Missing payment verification fields" });
        return;
      }

      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = parsed.data;

      const result = await this.paymentService.verifyPayment(
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        req.user.id
      );

      res.json(result);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Order not found") {
          res.status(404).json({ message: err.message });
          return;
        }
        if (err.message.includes("Unauthorized")) {
          res.status(403).json({ message: err.message });
          return;
        }
        if (err.message === "Payment already verified") {
          res.status(409).json({ message: err.message });
          return;
        }
        if (err.message === "Invalid payment signature") {
          res.status(400).json({ message: err.message });
          return;
        }
      }
      next(err);
    }
  }

  async handleWebhook(req: Request, res: Response) {
    try {
      const signature = req.headers["x-razorpay-signature"] as string | undefined;
      if (!signature) {
        res.status(400).json({ message: "Missing x-razorpay-signature header" });
        return;
      }

      // req.body is the raw string when express.raw() is used on this route
      const rawBody = typeof req.body === "string" ? req.body : JSON.stringify(req.body);
      const result = await this.paymentService.handleWebhook(rawBody, signature);
      res.json(result);
    } catch (err) {
      if (err instanceof Error && err.message === "Invalid webhook signature") {
        res.status(400).json({ message: err.message });
        return;
      }
      console.error("[Webhook] Error:", err);
      res.status(500).json({ message: "Webhook processing failed" });
    }
  }
}
