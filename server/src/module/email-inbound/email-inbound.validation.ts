import { z } from "zod";

export const inboundWebhookSchema = z.object({
  type: z.string(),
  data: z.object({
    from: z.string().optional(),
    subject: z.string().optional(),
    text: z.string().optional(),
    html: z.string().optional(),
    to: z.union([z.string(), z.array(z.string())]).optional(),
    cc: z.union([z.string(), z.array(z.string())]).optional(),
  }).passthrough(),
});
