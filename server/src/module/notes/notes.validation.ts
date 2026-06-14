import { z, type ZodSchema } from "zod";
import { NoteContentType } from "@prisma/client";
import type { Request, Response, NextFunction } from "express";

export const noteParamSchema = z.object({
  contentType: z.nativeEnum(NoteContentType),
  contentId: z.string().min(1),
});

export const saveNoteSchema = z.object({
  note: z.string().max(4000),
});

export const notesQuerySchema = z.object({
  contentType: z.nativeEnum(NoteContentType).optional(),
  search: z.string().optional(),
});

export const validateQuery = (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.query);
    if (!result.success) {
      res.status(400).json({ message: "Validation failed", errors: result.error.flatten().fieldErrors });
      return;
    }
    for (const key of Object.keys(req.query)) {
      delete req.query[key];
    }
    Object.assign(req.query, result.data);
    next();
  };

export const validateParams = (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.params);
    if (!result.success) {
      res.status(400).json({ message: "Validation failed", errors: result.error.flatten().fieldErrors });
      return;
    }
    for (const key of Object.keys(req.params)) {
      delete req.params[key];
    }
    Object.assign(req.params, result.data);
    next();
  };

export const validateBody = (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ message: "Validation failed", errors: result.error.flatten().fieldErrors });
      return;
    }
    req.body = result.data as any;
    next();
  };
