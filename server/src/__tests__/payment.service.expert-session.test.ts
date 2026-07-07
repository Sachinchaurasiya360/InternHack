import { describe, it, expect, vi, beforeEach } from "vitest";

const { unwrapMock, confirmBookingMock, cancelPendingBookingMock } = vi.hoisted(() => ({
  unwrapMock: vi.fn(),
  confirmBookingMock: vi.fn(),
  cancelPendingBookingMock: vi.fn(),
}));

vi.mock("dodopayments", () => ({
  DodoPayments: vi.fn().mockImplementation(function (this: any) {
    this.webhooks = { unwrap: unwrapMock };
    this.checkoutSessions = { create: vi.fn(), retrieve: vi.fn() };
  }),
}));

vi.mock("../database/db.js", () => ({
  prisma: {
    payment: { updateMany: vi.fn(), create: vi.fn(), findFirst: vi.fn() },
    user: { findUnique: vi.fn(), update: vi.fn() },
    $transaction: vi.fn(async (cb: any) => cb({ payment: { findFirst: vi.fn(), create: vi.fn(), update: vi.fn() }, user: { findUnique: vi.fn(), update: vi.fn() } })),
  },
}));

vi.mock("../module/expert-session/expert-session.service.js", () => ({
  ExpertSessionService: vi.fn().mockImplementation(function (this: any) {
    this.confirmBooking = confirmBookingMock;
    this.cancelPendingBooking = cancelPendingBookingMock;
  }),
}));

vi.mock("../utils/email.utils.js", () => ({ sendEmail: vi.fn().mockResolvedValue(undefined) }));
vi.mock("../utils/email-templates.js", () => ({ premiumConfirmationEmailHtml: vi.fn().mockReturnValue("<html></html>") }));
vi.mock("../utils/premium.utils.js", () => ({ invalidateUserTierCache: vi.fn().mockResolvedValue(undefined) }));

import { PaymentService } from "../module/payment/payment.service.js";
import { prisma } from "../database/db.js";

describe("PaymentService webhook — expert_session purpose routing", () => {
  let service: PaymentService;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env["DODO_PAYMENTS_API_KEY"] = "test_key";
    service = new PaymentService();
  });

  it("routes payment.succeeded with purpose=expert_session to confirmBooking, not subscription bookkeeping", async () => {
    unwrapMock.mockReturnValue({
      type: "payment.succeeded",
      data: {
        checkout_session_id: "cs_expert_1",
        metadata: { purpose: "expert_session", expertSessionId: "5" },
        total_amount: 4900,
        currency: "INR",
      },
    });

    await service.handleWebhook("{}", {});

    expect(confirmBookingMock).toHaveBeenCalledWith("cs_expert_1");
    expect(prisma.payment.updateMany).not.toHaveBeenCalled();
  });

  it("routes payment.failed with purpose=expert_session to cancelPendingBooking, not subscription bookkeeping", async () => {
    unwrapMock.mockReturnValue({
      type: "payment.failed",
      data: {
        checkout_session_id: "cs_expert_2",
        metadata: { purpose: "expert_session" },
      },
    });

    await service.handleWebhook("{}", {});

    expect(cancelPendingBookingMock).toHaveBeenCalledWith("cs_expert_2");
    expect(prisma.payment.updateMany).not.toHaveBeenCalled();
  });

  it("still routes a plain payment.succeeded (no expert_session metadata) to the existing subscription payment update", async () => {
    unwrapMock.mockReturnValue({
      type: "payment.succeeded",
      data: {
        checkout_session_id: "cs_sub_1",
        metadata: { userId: "1", plan: "pro", billing: "monthly" },
        total_amount: 500,
        currency: "USD",
      },
    });

    await service.handleWebhook("{}", {});

    expect(confirmBookingMock).not.toHaveBeenCalled();
    expect(prisma.payment.updateMany).toHaveBeenCalledWith({
      where: { dodoPaymentId: "cs_sub_1" },
      data: { amount: 500, currency: "USD", status: "SUCCESS" },
    });
  });
});
