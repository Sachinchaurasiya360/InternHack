import { Router } from "express";
import { NotesController } from "./notes.controller.js";
import { NotesService } from "./notes.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const notesService = new NotesService();
const notesController = new NotesController(notesService);

export const notesRouter = Router();

// All notes endpoints are scoped to the authenticated student.
notesRouter.use(authMiddleware, requireRole("STUDENT"));

notesRouter.get("/", (req, res, next) =>
  notesController.getNotes(req, res, next),
);

notesRouter.put("/", (req, res, next) =>
  notesController.upsertNote(req, res, next),
);

notesRouter.delete("/", (req, res, next) =>
  notesController.deleteNote(req, res, next),
);
