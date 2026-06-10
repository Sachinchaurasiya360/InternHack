import type { Request, Response, NextFunction } from "express";

import { NotesService } from "./notes.service.js";
import {
  deleteNoteSchema,
  listNotesQuerySchema,
  upsertNoteSchema,
} from "./notes.validation.js";

export class NotesController {
  constructor(private notesService: NotesService) {}

  async getNotes(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;

      const parsed = listNotesQuerySchema.safeParse(req.query);
      if (!parsed.success) {
        return res.status(400).json({
          message: "Invalid query",
          errors: parsed.error.flatten().fieldErrors,
        });
      }

      const notes = await this.notesService.listNotes(userId, parsed.data);
      return res.json({ notes });
    } catch (err) {
      next(err);
    }
  }

  async upsertNote(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;

      const parsed = upsertNoteSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          message: "Invalid input",
          errors: parsed.error.flatten().fieldErrors,
        });
      }

      const note = await this.notesService.upsertNote(userId, parsed.data);
      return res.json({ note });
    } catch (err) {
      next(err);
    }
  }

  async deleteNote(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;

      // Accept the content key from the body (preferred) or query string so the
      // endpoint works with clients that cannot send a DELETE body.
      const source =
        req.body && Object.keys(req.body).length > 0 ? req.body : req.query;

      const parsed = deleteNoteSchema.safeParse(source);
      if (!parsed.success) {
        return res.status(400).json({
          message: "Invalid input",
          errors: parsed.error.flatten().fieldErrors,
        });
      }

      const deleted = await this.notesService.deleteNote(userId, parsed.data);
      return res.json({ deleted });
    } catch (err) {
      next(err);
    }
  }
}
