import type { Request, Response, NextFunction } from "express";

import { TeammateService } from "./teammate.service.js";
import { createProfileSchema, inviteSchema } from "./teammate.validation.js";

export class TeammateController {
  constructor(private readonly teammateService: TeammateService) {}

  // POST /profile — create or update own profile
  async createProfile(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const result = createProfileSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json(result.error);
        return;
      }
      const profile = await this.teammateService.createProfile(req.user.id, result.data);
      res.json(profile);
    } catch (err) {
      next(err);
    }
  }

  // GET /my-profile — fetch the authenticated user's own profile
  async getMyProfile(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const profile = await this.teammateService.getProfileByUserId(req.user.id);
      res.json(profile);
    } catch (err) {
      next(err);
    }
  }

  // GET / — list all profiles with optional filters
  async getProfiles(req: Request, res: Response, next: NextFunction) {
    try {
      const { skills, techStack, preferredRole, experienceLevel, availability } = req.query;
      const filters = {
        preferredRole: preferredRole as string | undefined,
        experienceLevel: experienceLevel as string | undefined,
        availability: availability as string | undefined,
        skills: skills ? (skills as string).split(",").filter(Boolean) : undefined,
        techStack: techStack ? (techStack as string).split(",").filter(Boolean) : undefined,
      };
      const profiles = await this.teammateService.getProfiles(filters);
      res.json(profiles);
    } catch (err) {
      next(err);
    }
  }

  // POST /invite — send a team invitation
  async sendInvitation(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const result = inviteSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json(result.error);
        return;
      }
      const invite = await this.teammateService.sendInvitation(
        req.user.id,
        result.data.hackathonId,
        result.data.receiverId,
      );
      res.status(201).json(invite);
    } catch (err: any) {
      if (err.message === "SELF_INVITE") {
        res.status(400).json({ message: "You cannot invite yourself" });
        return;
      }
      if (err.message === "NO_HACKATHON") {
        res.status(404).json({ message: "No hackathon found to invite to" });
        return;
      }
      if (err.message === "DUPLICATE_INVITE") {
        res.status(409).json({ message: "Invitation already sent" });
        return;
      }
      next(err);
    }
  }

  // GET /invitations/received — invitations sent to the current user
  async getMyInvitations(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const invitations = await this.teammateService.getMyInvitations(req.user.id);
      res.json(invitations);
    } catch (err) {
      next(err);
    }
  }

  // GET /invitations/sent — invitations the current user sent
  async getSentInvitations(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const invitations = await this.teammateService.getSentInvitations(req.user.id);
      res.json(invitations);
    } catch (err) {
      next(err);
    }
  }

  // PATCH /invitations/:id/accept
  async acceptInvitation(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const id = Number(req.params["id"]);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid invitation id" });
        return;
      }
      const result = await this.teammateService.acceptInvitation(id, req.user.id);
      if (!result) {
        res.status(404).json({ message: "Invitation not found" });
        return;
      }
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  // PATCH /invitations/:id/reject
  async rejectInvitation(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const id = Number(req.params["id"]);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid invitation id" });
        return;
      }
      const result = await this.teammateService.rejectInvitation(id, req.user.id);
      if (!result) {
        res.status(404).json({ message: "Invitation not found" });
        return;
      }
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}