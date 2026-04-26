import { z } from "zod";

export const signalsListSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(12),
  search: z.string().trim().min(1).max(120).optional(),
  source: z.string().trim().min(1).max(60).optional(),
  round: z.string().trim().min(1).max(60).optional(),
  industry: z.string().trim().min(1).max(60).optional(),
  kind: z.enum(["funding", "hiring", "all"]).default("all"),
  hiringOnly: z
    .union([z.literal("true"), z.literal("false"), z.boolean()])
    .optional()
    .transform((v) => (v === true || v === "true" ? true : undefined)),
  status: z.enum(["ACTIVE", "STALE", "ARCHIVED", "ALL"]).default("ACTIVE"),
  minAmountUsd: z.coerce.bigint().nonnegative().optional(),
  sort: z.enum(["recent", "amount"]).default("recent"),
});

export type SignalsListQuery = z.infer<typeof signalsListSchema>;

const urlField = z.string().trim().url().max(500);
const stringList = z.array(z.string().trim().min(1).max(80)).max(20).default([]);

export const signalCreateSchema = z.object({
  companyName: z.string().trim().min(1).max(120),
  companyWebsite: urlField.optional().nullable(),
  logoUrl: urlField.optional().nullable(),
  fundingRound: z.string().trim().min(1).max(60).optional().nullable(),
  fundingAmount: z.string().trim().min(1).max(40).optional().nullable(),
  amountUsd: z.coerce.bigint().nonnegative().optional().nullable(),
  announcedAt: z.coerce.date().optional(),
  hqLocation: z.string().trim().min(1).max(120).optional().nullable(),
  industry: z.string().trim().min(1).max(60).optional().nullable(),
  description: z.string().trim().min(1).max(2000).optional().nullable(),
  sourceUrl: urlField,
  investors: stringList.optional(),
  tags: stringList.optional(),
  careersUrl: urlField.optional().nullable(),
  hiringSignal: z.boolean().optional(),
});

export const signalUpdateSchema = signalCreateSchema.partial().extend({
  status: z.enum(["ACTIVE", "STALE", "ARCHIVED"]).optional(),
});

export type SignalCreateInput = z.infer<typeof signalCreateSchema>;
export type SignalUpdateInput = z.infer<typeof signalUpdateSchema>;
