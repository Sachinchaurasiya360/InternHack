import { z } from "zod";

export const inboundWebhookSchema = z.object({
  type: z.string().max(100),
  data: z.object({
    from: z.string().max(500).optional(),
    subject: z.string().max(1000).optional(),
    text: z.string().max(100000).optional(),
    html: z.string().max(500000).optional(),
    to: z.union([z.string().max(500), z.array(z.string().max(500)).max(50)]).optional(),
    cc: z.union([z.string().max(500), z.array(z.string().max(500)).max(50)]).optional(),
  }).passthrough(),
});
