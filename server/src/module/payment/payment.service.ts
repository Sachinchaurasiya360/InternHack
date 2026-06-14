import DodoPayments from "dodopayments";
import { prisma } from "../../database/db.js";
import { sendEmail } from "../../utils/email.utils.js";
import { premiumConfirmationEmailHtml } from "../../utils/email-templates.js";
import { invalidateUserTierCache } from "../../utils/premium.utils.js";

// ── Product IDs (set in Dodo dashboard, referenced by env vars) ──
const PRODUCT_IDS = {
  MONTHLY: process.env["DODO_PRODUCT_ID_MONTHLY"] ?? "prod_monthly_pro",
  YEARLY: process.env["DODO_PRODUCT_ID_YEARLY"] ?? "prod_yearly_pro",
} as const;

type PlanKey = "pro";
type BillingKey = "monthly" | "yearly";

export class PaymentService {
  private dodo: DodoPayments | null;

  constructor() {
    const apiKey = process.env["DODO_PAYMENTS_API_KEY"];
    if (!apiKey) {
      console.warn("[Payment] DODO_PAYMENTS_API_KEY not set — payment features will be unavailable.");
      this.dodo = null;
      return;
    }

    const environment = (process.env["DODO_PAYMENTS_ENVIRONMENT"] ?? "test_mode") as
      | "test_mode"
      | "live_mode";

    this.dodo = new DodoPayments({
      bearerToken: apiKey,
      webhookKey: process.env["DODO_PAYMENTS_WEBHOOK_KEY"] ?? null,
      environment,
    });
  }

  private requireDodo(): DodoPayments {
    if (!this.dodo) throw new Error("Payment service is not configured. Set DODO_PAYMENTS_API_KEY in your environment.");
    return this.dodo;
  }

  // ── Create a Dodo checkout session ─────────────────────────────
  async createCheckoutSession(
    userId: number,
    plan: PlanKey,
    billing: BillingKey,
    user: { email: string },
  ) {
    const billingUpper = billing.toUpperCase() as "MONTHLY" | "YEARLY";
    const productId = PRODUCT_IDS[billingUpper];

    if (!productId) {
      throw new Error("Invalid plan or billing cycle");
    }

    // Fetch user name from DB for checkout display
    const dbUser = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true },
    });

    const subscriptionPlan = billingUpper; // MONTHLY or YEARLY

    const session = await this.requireDodo().checkoutSessions.create({
      product_cart: [{ product_id: productId, quantity: 1 }],
      customer: { email: user.email, name: dbUser?.name ?? undefined },
      return_url: process.env["DODO_RETURN_URL"] ?? undefined,
      metadata: {
        userId: String(userId),
        plan,
        billing,
      },
    });

    // Store in DB as PENDING
    await prisma.payment.create({
      data: {
        userId,
        dodoPaymentId: session.session_id,
        dodoCheckoutUrl: session.checkout_url,
        amount: 0, // will be updated by webhook when payment succeeds
        currency: "USD",
        plan: subscriptionPlan,
        billing,
        status: "PENDING",
      },
    });

    return {
      checkoutUrl: session.checkout_url,
      sessionId: session.session_id,
    };
  }

  // ── Handle Dodo webhook events ─────────────────────────────────
  async handleWebhook(rawBody: string, headers: Record<string, string>) {
    const event = this.requireDodo().webhooks.unwrap(rawBody, { headers });

    switch (event.type) {
      case "payment.succeeded": {
        const payment = event.data;
        if (payment.checkout_session_id) {
          await prisma.payment.updateMany({
            where: { dodoPaymentId: payment.checkout_session_id },
            data: {
              amount: payment.total_amount,
              currency: payment.currency,
              status: "SUCCESS",
            },
          });
        }
        break;
      }

      case "payment.failed": {
        const payment = event.data;
        if (payment.checkout_session_id) {
          await prisma.payment.updateMany({
            where: { dodoPaymentId: payment.checkout_session_id },
            data: {
              status: "FAILED",
            },
          });
        }
        break;
      }

      case "subscription.active": {
        const sub = event.data;
        await this.activateSubscription(sub);
        break;
      }

      case "subscription.cancelled": {
        const sub = event.data;
        await this.cancelSubscription(sub.subscription_id);
        break;
      }

      case "subscription.expired": {
        const sub = event.data;
        await this.expireSubscription(sub.subscription_id);
        break;
      }

      case "subscription.on_hold": {
        const sub = event.data;
        await this.holdSubscription(sub.subscription_id);
        break;
      }

      case "subscription.renewed": {
        const sub = event.data;
        await this.renewSubscription(sub);
        break;
      }

      default:
        // Ignore unhandled event types
        console.log(`[Webhook] Unhandled event type: ${event.type}`);
        break;
    }
  }

  // ── Subscription lifecycle helpers ─────────────────────────────

  private async activateSubscription(sub: { subscription_id: string; product_id: string; next_billing_date: string; metadata: Record<string, string> }) {
    const userId = Number(sub.metadata["userId"]);
    if (!userId || isNaN(userId)) {
      console.error("[Webhook] No userId in subscription metadata");
      return;
    }

    const billing = sub.metadata["billing"] ?? "monthly";
    const plan = billing === "yearly" ? "YEARLY" : "MONTHLY";

    const now = new Date();
    const endDate = new Date(sub.next_billing_date);

    // Wrap entire subscription activation in database transaction to prevent
    // race conditions where concurrent webhooks create duplicate records.
    // All operations must succeed atomically or entire transaction rolls back.
    await prisma.$transaction(async (tx) => {
      // Check if subscription is already active to prevent duplicate activations
      const existingSubscription = await tx.user.findUnique({
        where: { id: userId },
        select: { subscriptionStatus: true },
      });

      if (existingSubscription?.subscriptionStatus === "ACTIVE") {
        console.log(`[Webhook] Subscription already active for user ${userId}, skipping duplicate activation`);
        return;
      }

      // Link subscription ID and mark payment SUCCESS first, then activate the user.
      // Order matters: payment record must be linked before any code looks it up by subscription_id.
      // Match on dodoSubscriptionId: null so this works whether payment.succeeded already
      // flipped the status to SUCCESS or the record is still PENDING.
      await tx.payment.updateMany({
        where: { userId, dodoSubscriptionId: null },
        data: { dodoSubscriptionId: sub.subscription_id, status: "SUCCESS" },
      });

      // Update user subscription status atomically
      await tx.user.update({
        where: { id: userId },
        data: {
          subscriptionPlan: plan,
          subscriptionStatus: "ACTIVE",
          subscriptionStartDate: now,
          subscriptionEndDate: endDate,
        },
      });
    });

    // Invalidate cache after transaction succeeds
    await invalidateUserTierCache(userId);

    // Send confirmation email
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true },
    });
    if (user?.email) {
      sendEmail({
        to: user.email,
        subject: "Welcome to InternHack Pro!",
        html: premiumConfirmationEmailHtml(user.name ?? "there", plan, now, endDate),
      }).catch((err) => console.error("[Payment] Failed to send confirmation email:", err));
    }
  }

  private async cancelSubscription(subscriptionId: string) {
    await prisma.$transaction(async (tx) => {
      const payment = await tx.payment.findFirst({
        where: { dodoSubscriptionId: subscriptionId },
        select: { userId: true },
      });
      if (!payment) return;

      await tx.user.update({
        where: { id: payment.userId },
        data: { subscriptionStatus: "CANCELLED" },
      });
    });
    const payment = await prisma.payment.findFirst({
      where: { dodoSubscriptionId: subscriptionId },
      select: { userId: true },
    });
    if (payment) {
      await invalidateUserTierCache(payment.userId);
    }
  }

  private async expireSubscription(subscriptionId: string) {
    await prisma.$transaction(async (tx) => {
      const payment = await tx.payment.findFirst({
        where: { dodoSubscriptionId: subscriptionId },
        select: { userId: true },
      });
      if (!payment) return;

      await tx.user.update({
        where: { id: payment.userId },
        data: {
          subscriptionStatus: "EXPIRED",
          subscriptionPlan: "FREE",
        },
      });
    });
    const payment = await prisma.payment.findFirst({
      where: { dodoSubscriptionId: subscriptionId },
      select: { userId: true },
    });
    if (payment) {
      await invalidateUserTierCache(payment.userId);
    }
  }

  private async holdSubscription(subscriptionId: string) {
    await prisma.$transaction(async (tx) => {
      const payment = await tx.payment.findFirst({
        where: { dodoSubscriptionId: subscriptionId },
        select: { userId: true },
      });
      if (!payment) return;

      await tx.user.update({
        where: { id: payment.userId },
        data: { subscriptionStatus: "EXPIRED" },
      });
    });
    const payment = await prisma.payment.findFirst({
      where: { dodoSubscriptionId: subscriptionId },
      select: { userId: true },
    });
    if (payment) {
      await invalidateUserTierCache(payment.userId);
    }
  }

  private async renewSubscription(sub: { subscription_id: string; next_billing_date: string; metadata: Record<string, string> }) {
    let userId: number | undefined;
    await prisma.$transaction(async (tx) => {
      const payment = await tx.payment.findFirst({
        where: { dodoSubscriptionId: sub.subscription_id },
        select: { userId: true },
      });
      if (!payment) return;

      userId = payment.userId;
      await tx.user.update({
        where: { id: payment.userId },
        data: {
          subscriptionStatus: "ACTIVE",
          subscriptionEndDate: new Date(sub.next_billing_date),
        },
      });
    });
    if (userId) {
      await invalidateUserTierCache(userId);
    }
  }

  // ── Check checkout session status (for client polling) ─────────
  async getCheckoutStatus(sessionId: string) {
    const status = await this.requireDodo().checkoutSessions.retrieve(sessionId);
    return status;
  }
}
