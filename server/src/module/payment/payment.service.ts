import Razorpay from "razorpay";
import crypto from "crypto";
import { prisma } from "../../database/db.js";

// ── Price table (amounts in paise) ────────────────────────────
const PRICE_TABLE = {
  MONTHLY: {
    pro: 333_00, // ₹333
  },
  YEARLY: {
    pro: 2999_00, // ₹2,999
  },
} as const;

type PlanKey = "pro";
type BillingKey = "monthly" | "yearly";

export class PaymentService {
  private razorpay: Razorpay;

  constructor() {
    const keyId = process.env["RAZORPAY_KEY_ID"];
    const keySecret = process.env["RAZORPAY_KEY_SECRET"];

    if (!keyId || !keySecret) {
      throw new Error("RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be set in environment variables");
    }

    this.razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });
  }

  // ── Create a Razorpay order ─────────────────────────────────
  async createOrder(userId: number, plan: PlanKey, billing: BillingKey) {
    const billingUpper = billing.toUpperCase() as "MONTHLY" | "YEARLY";
    const amount = PRICE_TABLE[billingUpper]?.[plan];

    if (!amount) {
      throw new Error("Invalid plan or billing cycle");
    }

    // Map plan key to Prisma enum
    const subscriptionPlan = billingUpper; // MONTHLY or YEARLY

    // Create Razorpay order
    const order = await this.razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: `receipt_${userId}_${Date.now()}`,
      notes: {
        userId: String(userId),
        plan,
        billing,
      },
    });

    // Store in DB as PENDING
    await prisma.payment.create({
      data: {
        userId,
        razorpayOrderId: order.id,
        amount,
        currency: "INR",
        plan: subscriptionPlan,
        billing,
        status: "PENDING",
      },
    });

    return {
      orderId: order.id,
      amount,
      currency: "INR",
      keyId: process.env["RAZORPAY_KEY_ID"]!,
    };
  }

  // ── Verify payment signature (HMAC-SHA256) ──────────────────
  async verifyPayment(
    razorpayOrderId: string,
    razorpayPaymentId: string,
    razorpaySignature: string,
    userId: number
  ) {
    // 1. Find the pending payment
    const payment = await prisma.payment.findUnique({
      where: { razorpayOrderId },
    });

    if (!payment) {
      throw new Error("Order not found");
    }

    if (payment.userId !== userId) {
      throw new Error("Unauthorized: payment does not belong to this user");
    }

    if (payment.status === "SUCCESS") {
      throw new Error("Payment already verified");
    }

    // 2. Verify HMAC-SHA256 signature
    const secret = process.env["RAZORPAY_KEY_SECRET"]!;
    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${razorpayOrderId}|${razorpayPaymentId}`)
      .digest("hex");

    // Use timing-safe comparison to prevent timing attacks
    const sigBuffer = Buffer.from(generatedSignature, "hex");
    const providedBuffer = Buffer.from(razorpaySignature, "hex");
    const sigMatch =
      sigBuffer.length === providedBuffer.length &&
      crypto.timingSafeEqual(sigBuffer, providedBuffer);

    if (!sigMatch) {
      // Mark as failed
      await prisma.payment.update({
        where: { razorpayOrderId },
        data: {
          razorpayPaymentId,
          razorpaySignature,
          status: "FAILED",
        },
      });
      throw new Error("Invalid payment signature");
    }

    // 3. Verify payment amount matches order amount via Razorpay API
    try {
      const rpPayment = await this.razorpay.payments.fetch(razorpayPaymentId);
      if (Number(rpPayment.amount) !== payment.amount) {
        await prisma.payment.update({
          where: { razorpayOrderId },
          data: { razorpayPaymentId, razorpaySignature, status: "FAILED" },
        });
        throw new Error("Payment amount mismatch");
      }
    } catch (err) {
      if (err instanceof Error && err.message === "Payment amount mismatch") throw err;
      console.error("[Payment] Failed to verify amount with Razorpay API:", err);
      // Continue if Razorpay API is unreachable - signature was already verified
    }

    // 4. Atomically update payment + activate subscription
    const now = new Date();
    const endDate = new Date(now);
    if (payment.billing === "yearly") {
      endDate.setFullYear(endDate.getFullYear() + 1);
    } else {
      endDate.setMonth(endDate.getMonth() + 1);
    }

    const [, updatedUser] = await prisma.$transaction([
      prisma.payment.update({
        where: { razorpayOrderId },
        data: {
          razorpayPaymentId,
          razorpaySignature,
          status: "SUCCESS",
        },
      }),
      prisma.user.update({
        where: { id: userId },
        data: {
          subscriptionPlan: payment.plan,
          subscriptionStatus: "ACTIVE",
          subscriptionStartDate: now,
          subscriptionEndDate: endDate,
        },
        select: {
          id: true,
          subscriptionPlan: true,
          subscriptionStatus: true,
          subscriptionStartDate: true,
          subscriptionEndDate: true,
        },
      }),
    ]);

    return { success: true, subscription: updatedUser };
  }
}
