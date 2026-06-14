import { Router } from "express";
import { NotesController } from "./notes.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import {
  noteParamSchema,
  saveNoteSchema,
  notesQuerySchema,
  validateQuery,
  validateParams,
  validateBody,
} from "./notes.validation.js";

const notesController = new NotesController();

export const notesRouter = Router();

notesRouter.get(
  "/",
  authMiddleware,
  requireRole("STUDENT"),
  validateQuery(notesQuerySchema),
  (req, res, next) => notesController.getNotes(req, res, next)
);

notesRouter.get(
  "/:contentType/:contentId",
  authMiddleware,
  requireRole("STUDENT"),
  validateParams(noteParamSchema),
  (req, res, next) => notesController.getNote(req, res, next)
);

notesRouter.put(
  "/:contentType/:contentId",
  authMiddleware,
  requireRole("STUDENT"),
  validateParams(noteParamSchema),
  validateBody(saveNoteSchema),
  (req, res, next) => notesController.saveNote(req, res, next)
);

notesRouter.delete(
  "/:contentType/:contentId",
  authMiddleware,
  requireRole("STUDENT"),
  validateParams(noteParamSchema),
  (req, res, next) => notesController.deleteNote(req, res, next)
);
