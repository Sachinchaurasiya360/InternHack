import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import type { ZodTypeAny } from "zod";

export const validateRequest = (schema: ZodTypeAny) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.method === "GET") {
        req.query = (await schema.parseAsync(req.query)) as any;
      } else {
        req.body = await schema.parseAsync(req.body);
      }
      return next();
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: (error as any).errors });
      }
      return res.status(400).json({ error: "Invalid request data" });
    }
  };
};
