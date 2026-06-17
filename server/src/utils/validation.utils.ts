import { z } from "zod";
import type { Response } from "express";

/**
 * Validates request data against a Zod schema.
 * Sends a structured HTTP 400 response and returns null on failure,
 * or returns the parsed typed data on success.
 */
export function validateRequestData<T>(
  res: Response,
  schema: z.Schema<T>,
  data: unknown
): T | null {
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    res.status(400).json({
      message: "Validation failed",
      errors: parsed.error.flatten(),
    });
    return null;
  }
  return parsed.data;
}
