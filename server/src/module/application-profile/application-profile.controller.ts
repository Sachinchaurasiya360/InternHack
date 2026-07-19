import type { Request, Response, NextFunction } from "express";
import { applicationProfileService } from "./application-profile.service.js";
import {
  createQuestionAnswerSchema,
  generateQuestionAnswerSchema,
  matchQuestionSchema,
  questionQuerySchema,
  updateApplicationProfileSchema,
  updateAutofillSettingsSchema,
} from "./application-profile.validation.js";

export class ApplicationProfileController {
  getMe = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const profile = await applicationProfileService.getMergedProfile(req.user.id);
      res.json(profile);
    } catch (err) { next(err); }
  };

  updateMe = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const parsed = updateApplicationProfileSchema.safeParse(req.body);
      if (!parsed.success) { res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() }); return; }
      const profile = await applicationProfileService.upsertProfile(req.user.id, parsed.data);
      res.json(profile);
    } catch (err) { next(err); }
  };

  updateAutofillSettings = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const parsed = updateAutofillSettingsSchema.safeParse(req.body);
      if (!parsed.success) { res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() }); return; }
      const profile = await applicationProfileService.updateAutofillSettings(req.user.id, parsed.data);
      res.json(profile);
    } catch (err) { next(err); }
  };

  listQuestions = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const parsed = questionQuerySchema.safeParse(req.query);
      if (!parsed.success) { res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() }); return; }
      const answers = await applicationProfileService.listQuestionAnswers(req.user.id, parsed.data);
      res.json({ answers });
    } catch (err) { next(err); }
  };

  saveQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const parsed = createQuestionAnswerSchema.safeParse(req.body);
      if (!parsed.success) { res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() }); return; }
      const answer = await applicationProfileService.saveQuestionAnswer(req.user.id, parsed.data);
      res.status(201).json({ answer });
    } catch (err) { next(err); }
  };

  matchQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const parsed = matchQuestionSchema.safeParse(req.body);
      if (!parsed.success) { res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() }); return; }
      const match = await applicationProfileService.matchQuestionAnswer(req.user.id, parsed.data.questionText);
      res.json(match);
    } catch (err) { next(err); }
  };

  generateQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const parsed = generateQuestionAnswerSchema.safeParse(req.body);
      if (!parsed.success) { res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() }); return; }
      const result = await applicationProfileService.generateQuestionAnswer(req.user.id, parsed.data);
      res.json(result);
    } catch (err) { next(err); }
  };
}

export const applicationProfileController = new ApplicationProfileController();

