import { z } from "zod";

export const subscribeSchema = z.object({
  email: z.string().email("Valid email is required"),
});

export const subscriberListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(50),
});

export const subscriberIdSchema = z.object({
  id: z.coerce.number().int().positive("Invalid subscriber ID"),
});
