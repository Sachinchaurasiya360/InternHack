import { z } from "zod/v4";

export const createOrderSchema = z.object({
  plan: z.enum(["pro"]),
  billing: z.enum(["monthly", "yearly"]),
});

export const verifyPaymentSchema = z.object({
  razorpay_order_id: z.string().min(1, "razorpay_order_id is required"),
  razorpay_payment_id: z.string().min(1, "razorpay_payment_id is required"),
  razorpay_signature: z.string().min(1, "razorpay_signature is required"),
});
