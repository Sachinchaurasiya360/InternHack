import DodoPayments from "dodopayments";
import { prisma } from "../../database/db.js";
import { sendEmail } from "../../utils/email.utils.js";
import { premiumConfirmationEmailHtml } from "../../utils/email-templates.js";

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
        // Update payment record if we can find it by checkout session id
        if (payment.checkout_session_id) {
          await prisma.payment.updateMany({
            where: { dodoPaymentId: payment.checkout_session_id },
            data: {
              dodoPaymentId: payment.payment_id,
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
              dodoPaymentId: payment.payment_id,
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

    // Link subscription ID and mark payment SUCCESS first, then activate the user.
    // Order matters: payment record must be linked before any code looks it up by subscription_id.
    await prisma.payment.updateMany({
      where: { userId, status: "PENDING" },
      data: { dodoSubscriptionId: sub.subscription_id, status: "SUCCESS" },
    });

    await prisma.user.update({
      where: { id: userId },
      data: {
        subscriptionPlan: plan,
        subscriptionStatus: "ACTIVE",
        subscriptionStartDate: now,
        subscriptionEndDate: endDate,
      },
    });

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
    const payment = await prisma.payment.findFirst({
      where: { dodoSubscriptionId: subscriptionId },
      select: { userId: true },
    });
    if (!payment) return;

    await prisma.user.update({
      where: { id: payment.userId },
      data: { subscriptionStatus: "CANCELLED" },
    });
  }

  private async expireSubscription(subscriptionId: string) {
    const payment = await prisma.payment.findFirst({
      where: { dodoSubscriptionId: subscriptionId },
      select: { userId: true },
    });
    if (!payment) return;

    await prisma.user.update({
      where: { id: payment.userId },
      data: {
        subscriptionStatus: "EXPIRED",
        subscriptionPlan: "FREE",
      },
    });
  }

  private async holdSubscription(subscriptionId: string) {
    const payment = await prisma.payment.findFirst({
      where: { dodoSubscriptionId: subscriptionId },
      select: { userId: true },
    });
    if (!payment) return;

    await prisma.user.update({
      where: { id: payment.userId },
      data: { subscriptionStatus: "EXPIRED" },
    });
  }

  private async renewSubscription(sub: { subscription_id: string; next_billing_date: string; metadata: Record<string, string> }) {
    const payment = await prisma.payment.findFirst({
      where: { dodoSubscriptionId: sub.subscription_id },
      select: { userId: true },
    });
    if (!payment) return;

    await prisma.user.update({
      where: { id: payment.userId },
      data: {
        subscriptionStatus: "ACTIVE",
        subscriptionEndDate: new Date(sub.next_billing_date),
      },
    });
  }

  // ── Check checkout session status (for client polling) ─────────
  async getCheckoutStatus(sessionId: string) {
    const status = await this.requireDodo().checkoutSessions.retrieve(sessionId);
    return status;
  }
}
