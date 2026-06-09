import type {
  Request,
  Response,
  NextFunction,
} from "express";

import { TeammateService } from "./teammate.service.js";
import {
  createProfileSchema,
  inviteSchema,
} from "./teammate.validation.js";

export class TeammateController {
  constructor(
    private readonly teammateService: TeammateService,
  ) {}

  async createProfile(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.user) {
        res.status(401).json({
          message: "Authentication required",
        });
        return;
      }

      const result =
        createProfileSchema.safeParse(req.body);

      if (!result.success) {
        res.status(400).json(result.error);
        return;
      }

      const profile =
        await this.teammateService.createProfile(
          req.user.id,
          result.data,
        );

      res.json(profile);
    } catch (err) {
      next(err);
    }
  }

  async getProfiles(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const profiles =
        await this.teammateService.getProfiles();

      res.json(profiles);
    } catch (err) {
      next(err);
    }
  }

  async sendInvitation(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.user) {
        res.status(401).json({
          message: "Authentication required",
        });
        return;
      }

      const result =
        inviteSchema.safeParse(req.body);

      if (!result.success) {
        res.status(400).json(result.error);
        return;
      }

      const invite =
        await this.teammateService.sendInvitation(
          req.user.id,
          result.data.hackathonId,
          result.data.receiverId,
        );

      res.status(201).json(invite);
    } catch (err) {
      next(err);
    }
  }
}