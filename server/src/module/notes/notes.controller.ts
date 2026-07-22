import type { Request, Response, NextFunction } from "express";
import { NoteContentType } from "@prisma/client";
import { NotesService } from "./notes.service.js";

export class NotesController {
  constructor(private readonly notesService = new NotesService()) {}

  async getNotes(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) return res.status(401).json({ error: "Unauthorized" });
      const { contentType, search } = req.query as { contentType?: NoteContentType; search?: string };
      const notes = await this.notesService.getNotes(userId, { contentType, search });
      res.json({ notes });
    } catch (err) {
      next(err);
    }
  }

  async getNote(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) return res.status(401).json({ error: "Unauthorized" });
      const { contentType, contentId } = req.params;
      const note = await this.notesService.getNote(
        userId,
        contentType as NoteContentType,
        contentId
      );
      res.json({ note });
    } catch (err) {
      next(err);
    }
  }

  async saveNote(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) return res.status(401).json({ error: "Unauthorized" });
      const { contentType, contentId } = req.params;
      const { note } = req.body;
      const saved = await this.notesService.saveNote(
        userId,
        contentType as NoteContentType,
        contentId,
        note
      );
      res.json({ note: saved });
    } catch (err) {
      next(err);
    }
  }

  async deleteNote(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) return res.status(401).json({ error: "Unauthorized" });
      const { contentType, contentId } = req.params;
      const result = await this.notesService.deleteNote(
        userId,
        contentType as NoteContentType,
        contentId
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

