import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";

/**
 * Express middleware that validates `req.body` against a Zod schema.
 * On failure it returns a 400 with `{ message, errors }` format.
 */
export const validateBody = <T>(schema: ZodSchema<T>) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        message: "Validation failed",
        errors: result.error.flatten(),
      });
      return;
    }
    // Replace raw body with the parsed (and possibly coerced/defaulted) data
    req.body = result.data;
    next();
  };
