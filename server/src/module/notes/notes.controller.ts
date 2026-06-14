import type { Request, Response, NextFunction } from "express";
import { NotesService } from "./notes.service.js";
import { noteParamSchema, saveNoteSchema, notesQuerySchema } from "./notes.validation.js";

const validationError = (res: Response, errors: unknown) =>
  res.status(400).json({ message: "Validation failed", errors });

export class NotesController {
  constructor(private readonly notesService = new NotesService()) {}

  async getNotes(req: Request, res: Response, next: NextFunction) {
    try {
      const query = notesQuerySchema.safeParse(req.query);
      if (!query.success) {
        validationError(res, query.error.flatten().fieldErrors);
        return;
      }

      const notes = await this.notesService.getNotes(req.user!.id, query.data);
      res.json({ notes });
    } catch (err) {
      next(err);
    }
  }

  async getNote(req: Request, res: Response, next: NextFunction) {
    try {
      const params = noteParamSchema.safeParse(req.params);
      if (!params.success) {
        validationError(res, params.error.flatten().fieldErrors);
        return;
      }

      const note = await this.notesService.getNote(
        req.user!.id,
        params.data.contentType,
        params.data.contentId
      );
      res.json({ note });
    } catch (err) {
      next(err);
    }
  }

  async saveNote(req: Request, res: Response, next: NextFunction) {
    try {
      const params = noteParamSchema.safeParse(req.params);
      if (!params.success) {
        validationError(res, params.error.flatten().fieldErrors);
        return;
      }

      const body = saveNoteSchema.safeParse(req.body);
      if (!body.success) {
        validationError(res, body.error.flatten().fieldErrors);
        return;
      }

      const note = await this.notesService.saveNote(
        req.user!.id,
        params.data.contentType,
        params.data.contentId,
        body.data.note
      );
      res.json({ note });
    } catch (err) {
      next(err);
    }
  }

  async deleteNote(req: Request, res: Response, next: NextFunction) {
    try {
      const params = noteParamSchema.safeParse(req.params);
      if (!params.success) {
        validationError(res, params.error.flatten().fieldErrors);
        return;
      }

      const result = await this.notesService.deleteNote(
        req.user!.id,
        params.data.contentType,
        params.data.contentId
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

