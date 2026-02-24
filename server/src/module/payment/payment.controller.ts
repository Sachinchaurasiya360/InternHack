import type { Request, Response, NextFunction } from "express";
import type { PaymentService } from "./payment.service.js";

export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const { plan, billing } = req.body;

      // Validate plan
      if (!plan || !["pro", "premium"].includes(plan)) {
        res.status(400).json({ message: "Invalid plan. Must be 'pro' or 'premium'" });
        return;
      }

      // Validate billing
      if (!billing || !["monthly", "yearly"].includes(billing)) {
        res.status(400).json({ message: "Invalid billing. Must be 'monthly' or 'yearly'" });
        return;
      }

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

      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

      if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        res.status(400).json({ message: "Missing payment verification fields" });
        return;
      }

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
}
