import Razorpay from "razorpay";
import crypto from "crypto";
import { prisma } from "../../database/db.js";

// ── Price table (amounts in paise) ────────────────────────────
const PRICE_TABLE = {
  MONTHLY: {
    pro: 469_00,     // ₹469
    premium: 969_00, // ₹969
  },
  YEARLY: {
    pro: 3769_00,    // ₹3,769
    premium: 7769_00, // ₹7,769
  },
} as const;

type PlanKey = "pro" | "premium";
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

    if (generatedSignature !== razorpaySignature) {
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

    // 3. Update payment record to SUCCESS
    await prisma.payment.update({
      where: { razorpayOrderId },
      data: {
        razorpayPaymentId,
        razorpaySignature,
        status: "SUCCESS",
      },
    });

    // 4. Activate subscription on user
    const now = new Date();
    const endDate = new Date(now);
    if (payment.billing === "yearly") {
      endDate.setFullYear(endDate.getFullYear() + 1);
    } else {
      endDate.setMonth(endDate.getMonth() + 1);
    }

    const updatedUser = await prisma.user.update({
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
    });

    return { success: true, subscription: updatedUser };
  }
}
