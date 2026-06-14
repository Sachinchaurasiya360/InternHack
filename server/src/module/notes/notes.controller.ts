import type { Request, Response, NextFunction } from "express";
import { NotesService } from "./notes.service.js";

export class NotesController {
  constructor(private readonly notesService = new NotesService()) {}

  async getNotes(req: Request, res: Response, next: NextFunction) {
    try {
      const notes = await this.notesService.getNotes(req.user!.id, req.query as any);
      res.json({ notes });
    } catch (err) {
      next(err);
    }
  }

  async getNote(req: Request, res: Response, next: NextFunction) {
    try {
      const { contentType, contentId } = req.params;
      const note = await this.notesService.getNote(
        req.user!.id,
        contentType as any,
        contentId as string
      );
      res.json({ note });
    } catch (err) {
      next(err);
    }
  }

  async saveNote(req: Request, res: Response, next: NextFunction) {
    try {
      const { contentType, contentId } = req.params;
      const { note } = req.body;
      const saved = await this.notesService.saveNote(
        req.user!.id,
        contentType as any,
        contentId as string,
        note
      );
      res.json({ note: saved });
    } catch (err) {
      next(err);
    }
  }

  async deleteNote(req: Request, res: Response, next: NextFunction) {
    try {
      const { contentType, contentId } = req.params;
      const result = await this.notesService.deleteNote(
        req.user!.id,
        contentType as any,
        contentId as string
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

