import { z } from "zod";

export const inboundWebhookSchema = z.object({
  type: z.string(),
  data: z.object({
    from: z.string().optional(),
    subject: z.string().optional(),
    text: z.string().max(50000).optional(),
    html: z.string().max(50000).optional(),
    to: z.union([z.string(), z.array(z.string())]).optional(),
    cc: z.union([z.string(), z.array(z.string())]).optional(),
  }).passthrough(),
});
