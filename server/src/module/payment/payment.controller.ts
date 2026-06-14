import type { Request, Response, NextFunction } from "express";
import type { PaymentService } from "./payment.service.js";
import { createOrderSchema } from "./payment.validation.js";

export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  async createCheckout(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const body = createOrderSchema.safeParse(req.body);
      if (!body.success) return res.status(400).json({ message: "Validation failed", errors: body.error.flatten() });
      const { plan, billing } = body.data;

      const result = await this.paymentService.createCheckoutSession(
        req.user.id,
        plan,
        billing,
        { email: req.user.email },
      );

      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async webhook(req: Request, res: Response, next: NextFunction) {
    try {
      // Raw body is a Buffer when using express.raw()
      const rawBody = typeof req.body === "string" ? req.body : (req.body as Buffer).toString("utf-8");

      const headers: Record<string, string> = {
        "webhook-id": req.headers["webhook-id"] as string ?? "",
        "webhook-signature": req.headers["webhook-signature"] as string ?? "",
        "webhook-timestamp": req.headers["webhook-timestamp"] as string ?? "",
      };

      await this.paymentService.handleWebhook(rawBody, headers);

      // Always return 200 quickly to acknowledge receipt
      res.json({ received: true });
    } catch (err) {
      console.error("[Webhook] Error processing webhook:", err);
      // Still return 200 to avoid retries for known errors
      // Return 401 only for signature verification failures
      if (err instanceof Error && err.message.includes("signature")) {
        res.status(401).json({ error: "Invalid signature" });
        return;
      }
      next(err);
    }
  }

  async checkoutStatus(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const sessionId = req.params.sessionId as string;
      if (!sessionId) {
        res.status(400).json({ message: "Missing sessionId" });
        return;
      }

      const status = await this.paymentService.getCheckoutStatus(sessionId);
      res.json(status);
    } catch (err) {
      next(err);
    }
  }
}
