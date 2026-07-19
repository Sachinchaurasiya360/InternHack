import type { Request, Response, NextFunction } from "express";
import { extensionService } from "./extension.service.js";
import {
  autofillEventSchema,
  detectExtensionPageSchema,
  supportRequestSchema,
  trackApplicationFromExtensionSchema,
} from "./extension.validation.js";

export class ExtensionController {
  session = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const session = await extensionService.createSession(req.user.id);
      res.json(session);
    } catch (err) { next(err); }
  };

  profile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const profile = await extensionService.getProfile(req.user.id);
      res.json(profile);
    } catch (err) { next(err); }
  };

  detect = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = detectExtensionPageSchema.safeParse(req.body);
      if (!parsed.success) { res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() }); return; }
      const result = extensionService.detect(parsed.data);
      res.json(result);
    } catch (err) { next(err); }
  };

  event = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const parsed = autofillEventSchema.safeParse(req.body);
      if (!parsed.success) { res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() }); return; }
      const event = await extensionService.logEvent(req.user.id, parsed.data);
      res.status(201).json({ event });
    } catch (err) { next(err); }
  };

  trackApplication = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const parsed = trackApplicationFromExtensionSchema.safeParse(req.body);
      if (!parsed.success) { res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() }); return; }
      const application = await extensionService.trackApplication(req.user.id, parsed.data);
      res.status(201).json({ application });
    } catch (err) { next(err); }
  };

  supportRequest = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const parsed = supportRequestSchema.safeParse(req.body);
      if (!parsed.success) { res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() }); return; }
      const event = await extensionService.supportRequest(req.user.id, parsed.data);
      res.status(201).json({ event });
    } catch (err) { next(err); }
  };
}

export const extensionController = new ExtensionController();

