import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => {
  const checkoutSessions = {
    create: vi.fn(),
    retrieve: vi.fn(),
  };

  const webhooks = {
    unwrap: vi.fn(),
  };

  const DodoPayments = vi.fn(function() {
    this.checkoutSessions = checkoutSessions;
    this.webhooks = webhooks;
  });

  const prisma = {
    payment: {
      create: vi.fn(),
      findFirst: vi.fn(),
      findUnique: vi.fn(),
      update: vi.fn(),
      updateMany: vi.fn(),
    },
    user: {
      findUnique: vi.fn(),
      update: vi.fn(),
    },
    $transaction: vi.fn((fn: (tx: any) => Promise<any>) =>
      fn({
        payment: {
          findFirst: vi.fn(),
          update: vi.fn(),
          create: vi.fn(),
        },
        user: {
          findUnique: vi.fn(),
          update: vi.fn(),
        },
      })
    ),
  };

  const sendEmail = vi.fn().mockResolvedValue(undefined);
  const invalidateUserTierCache = vi.fn().mockResolvedValue(undefined);

  return { DodoPayments, prisma, sendEmail, invalidateUserTierCache };
});

vi.mock("pg", () => ({ Pool: vi.fn(function() { return { on: vi.fn(), end: vi.fn() }; }) }));
vi.mock("@prisma/client", () => ({ PrismaClient: vi.fn() }));
vi.mock("@prisma/adapter-pg", () => ({ PrismaPg: vi.fn() }));
vi.mock("dodopayments", () => ({ DodoPayments: mocks.DodoPayments }));
vi.mock("../../../database/db.js", () => ({ prisma: mocks.prisma }));
vi.mock("../../../utils/email.utils.js", () => ({ sendEmail: mocks.sendEmail }));
vi.mock("../../../utils/email-templates.js", () => ({
  premiumConfirmationEmailHtml: vi.fn(() => "<html></html>"),
}));
vi.mock("../../../utils/premium.utils.js", () => ({
  invalidateUserTierCache: mocks.invalidateUserTierCache,
}));

const { PaymentService } = await import("../payment.service.js");

describe("PaymentService", () => {
  let service: PaymentService;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env["DODO_PAYMENTS_API_KEY"] = "test-key";
    process.env["DODO_PAYMENTS_ENVIRONMENT"] = "test_mode";
    service = new PaymentService();
  });

  afterEach(() => {
    delete process.env["DODO_PAYMENTS_API_KEY"];
    delete process.env["DODO_PAYMENTS_ENVIRONMENT"];
  });

  describe("constructor", () => {
    it("creates DodoPayments instance when API key is set", () => {
      expect(mocks.DodoPayments).toHaveBeenCalledWith({
        bearerToken: "test-key",
        webhookKey: null,
        environment: "test_mode",
      });
    });

    it("sets dodo to null when API key is missing", () => {
      delete process.env["DODO_PAYMENTS_API_KEY"];
      const svc = new PaymentService();
      expect(() => (svc as any).requireDodo()).toThrow("Payment service is not configured");
    });
  });

  describe("createCheckoutSession", () => {
    const userId = 1;
    const user = { email: "test@example.com" };
    const sessionId = "cs_test_123";
    const checkoutUrl = "https://checkout.dodopayments.com/test";

    it("creates a Dodo checkout session and stores PENDING payment", async () => {
      mocks.prisma.user.findUnique.mockResolvedValue({ name: "Test User" });
      mocks.DodoPayments.mock.results[0]?.value.checkoutSessions.create.mockResolvedValue({
        session_id: sessionId,
        checkout_url: checkoutUrl,
      });

      const result = await service.createCheckoutSession(userId, "pro", "monthly", user);

      expect(mocks.DodoPayments.mock.results[0]?.value.checkoutSessions.create).toHaveBeenCalledWith(
        expect.objectContaining({
          product_cart: [{ product_id: "prod_monthly_pro", quantity: 1 }],
          customer: { email: "test@example.com", name: "Test User" },
          metadata: { userId: "1", plan: "pro", billing: "monthly" },
        })
      );

      expect(mocks.prisma.payment.create).toHaveBeenCalledWith({
        data: {
          userId,
          dodoPaymentId: sessionId,
          dodoCheckoutUrl: checkoutUrl,
          amount: 0,
          currency: "USD",
          plan: "MONTHLY",
          billing: "monthly",
          status: "PENDING",
        },
      });

      expect(result).toEqual({ checkoutUrl, sessionId });
    });

    it("requires valid billing cycle", async () => {
      await expect(service.createCheckoutSession(userId, "pro", "invalid" as any, user))
        .rejects.toThrow("Invalid plan or billing cycle");
    });
  });

  describe("handleWebhook", () => {
    const subscriptionId = "sub_test_123";
    const checkoutSessionId = "cs_test_123";
    const userId = 1;

    function mockEvent(type: string, data?: Record<string, any>) {
      mocks.DodoPayments.mock.results[0]?.value.webhooks.unwrap.mockReturnValue({
        type,
        data: data ?? { subscription_id: subscriptionId, checkout_session_id: checkoutSessionId },
      });
    }

    describe("payment.succeeded", () => {
      it("updates payment record to SUCCESS with amount and currency", async () => {
        mockEvent("payment.succeeded", {
          checkout_session_id: checkoutSessionId,
          total_amount: 2999,
          currency: "USD",
        });

        await service.handleWebhook("{}", { "webhook-id": "test" });

        expect(mocks.prisma.payment.updateMany).toHaveBeenCalledWith({
          where: { dodoPaymentId: checkoutSessionId },
          data: { amount: 2999, currency: "USD", status: "SUCCESS" },
        });
      });

      it("handles missing checkout_session_id gracefully", async () => {
        mockEvent("payment.succeeded", {});

        await service.handleWebhook("{}", { "webhook-id": "test" });

        expect(mocks.prisma.payment.updateMany).not.toHaveBeenCalled();
      });
    });

    describe("payment.failed", () => {
      it("updates payment record to FAILED", async () => {
        mockEvent("payment.failed", { checkout_session_id: checkoutSessionId });

        await service.handleWebhook("{}", { "webhook-id": "test" });

        expect(mocks.prisma.payment.updateMany).toHaveBeenCalledWith({
          where: { dodoPaymentId: checkoutSessionId },
          data: { status: "FAILED" },
        });
      });
    });

    describe("subscription.active", () => {
      const now = new Date();
      const nextBilling = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

      function setupSubscriptionActive() {
        mockEvent("subscription.active", {
          subscription_id: subscriptionId,
          product_id: "prod_monthly_pro",
          next_billing_date: nextBilling.toISOString(),
          metadata: { userId: String(userId), billing: "monthly" },
        });
      }

      it("activates subscription via transaction", async () => {
        setupSubscriptionActive();
        const tx = {
          payment: {
            findFirst: vi.fn()
              .mockResolvedValueOnce(null)
              .mockResolvedValueOnce(null),
            update: vi.fn(),
            create: vi.fn(),
          },
          user: {
            findUnique: vi.fn().mockResolvedValue({ subscriptionStatus: "EXPIRED" }),
            update: vi.fn(),
          },
        };
        mocks.prisma.$transaction.mockImplementation((fn: (tx: any) => Promise<any>) => fn(tx));

        await service.handleWebhook("{}", { "webhook-id": "test" });

        expect(tx.user.update).toHaveBeenCalledWith({
          where: { id: userId },
          data: {
            subscriptionPlan: "MONTHLY",
            subscriptionStatus: "ACTIVE",
            subscriptionStartDate: expect.any(Date),
            subscriptionEndDate: expect.any(Date),
          },
        });
        expect(tx.payment.create).toHaveBeenCalled();
        expect(mocks.invalidateUserTierCache).toHaveBeenCalledWith(userId);
      });

      it("skips activation if subscription is already ACTIVE (idempotency)", async () => {
        setupSubscriptionActive();
        const tx = {
          payment: { findFirst: vi.fn(), update: vi.fn(), create: vi.fn() },
          user: {
            findUnique: vi.fn().mockResolvedValue({ subscriptionStatus: "ACTIVE" }),
            update: vi.fn(),
          },
        };
        mocks.prisma.$transaction.mockImplementation((fn: (tx: any) => Promise<any>) => fn(tx));

        await service.handleWebhook("{}", { "webhook-id": "test" });

        expect(tx.user.update).not.toHaveBeenCalled();
      });

      it("skips activation when userId is missing from metadata", async () => {
        mockEvent("subscription.active", {
          subscription_id: subscriptionId,
          product_id: "prod_monthly_pro",
          next_billing_date: nextBilling.toISOString(),
          metadata: {},
        });

        await service.handleWebhook("{}", { "webhook-id": "test" });

        expect(mocks.prisma.$transaction).not.toHaveBeenCalled();
      });
    });

    describe("subscription.cancelled", () => {
      it("sets user subscription to CANCELLED", async () => {
        mockEvent("subscription.cancelled", { subscription_id: subscriptionId });
        mocks.prisma.payment.findFirst.mockResolvedValue({ userId });

        await service.handleWebhook("{}", { "webhook-id": "test" });

        expect(mocks.prisma.user.update).toHaveBeenCalledWith({
          where: { id: userId },
          data: { subscriptionStatus: "CANCELLED" },
        });
        expect(mocks.invalidateUserTierCache).toHaveBeenCalledWith(userId);
      });

      it("does nothing when subscription payment record not found", async () => {
        mockEvent("subscription.cancelled", { subscription_id: "unknown_sub" });
        mocks.prisma.payment.findFirst.mockResolvedValue(null);

        await service.handleWebhook("{}", { "webhook-id": "test" });

        expect(mocks.prisma.user.update).not.toHaveBeenCalled();
      });
    });

    describe("subscription.on_hold", () => {
      it("sets user subscription to EXPIRED (current behaviour pending ON_HOLD enum)", async () => {
        mockEvent("subscription.on_hold", { subscription_id: subscriptionId });
        mocks.prisma.payment.findFirst.mockResolvedValue({ userId });

        await service.handleWebhook("{}", { "webhook-id": "test" });

        expect(mocks.prisma.user.update).toHaveBeenCalledWith({
          where: { id: userId },
          data: { subscriptionStatus: "EXPIRED" },
        });
        expect(mocks.invalidateUserTierCache).toHaveBeenCalledWith(userId);
      });
    });

    describe("subscription.expired", () => {
      it("resets user to FREE plan with EXPIRED status", async () => {
        mockEvent("subscription.expired", { subscription_id: subscriptionId });
        mocks.prisma.payment.findFirst.mockResolvedValue({ userId });

        await service.handleWebhook("{}", { "webhook-id": "test" });

        expect(mocks.prisma.user.update).toHaveBeenCalledWith({
          where: { id: userId },
          data: {
            subscriptionStatus: "EXPIRED",
            subscriptionPlan: "FREE",
          },
        });
        expect(mocks.invalidateUserTierCache).toHaveBeenCalledWith(userId);
      });
    });

    describe("subscription.renewed", () => {
      it("renews subscription with updated end date", async () => {
        const nextBilling = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        mockEvent("subscription.renewed", {
          subscription_id: subscriptionId,
          next_billing_date: nextBilling.toISOString(),
          metadata: {},
        });
        mocks.prisma.payment.findFirst.mockResolvedValue({ userId });

        await service.handleWebhook("{}", { "webhook-id": "test" });

        expect(mocks.prisma.user.update).toHaveBeenCalledWith({
          where: { id: userId },
          data: {
            subscriptionStatus: "ACTIVE",
            subscriptionEndDate: expect.any(Date),
          },
        });
        expect(mocks.invalidateUserTierCache).toHaveBeenCalledWith(userId);
      });
    });

    describe("unhandled event types", () => {
      it("does not throw for unrecognised event types", async () => {
        mockEvent("some.random.event");

        await expect(service.handleWebhook("{}", { "webhook-id": "test" })).resolves.not.toThrow();
      });
    });
  });

  describe("getCheckoutStatus", () => {
    it("returns session status from Dodo", async () => {
      const status = { status: "completed", session_id: "cs_123" };
      mocks.DodoPayments.mock.results[0]?.value.checkoutSessions.retrieve.mockResolvedValue(status);

      const result = await service.getCheckoutStatus("cs_123");

      expect(result).toEqual(status);
    });
  });
});
