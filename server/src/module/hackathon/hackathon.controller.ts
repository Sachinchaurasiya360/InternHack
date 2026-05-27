import type { Request, Response } from "express";
import { HackathonService } from "./hackathon.service.js";
import { participateHackathonSchema } from "./hackathon.validation.js";

export class HackathonController {
  constructor(private readonly hackathonService: HackathonService) {}

  async listHackathons(_req: Request, res: Response) {
    try {
      const data = await this.hackathonService.listHackathons();
      return res.status(200).json(data);
    } catch {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async myParticipations(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      const data = await this.hackathonService.getMyParticipations(req.user.id);
      return res.status(200).json(data);
    } catch {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async participate(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      const id = Number.parseInt(String(req.params["id"]), 10);
      if (Number.isNaN(id)) return res.status(400).json({ message: "Invalid hackathon ID" });

      const body = participateHackathonSchema.safeParse(req.body);
      if (!body.success) {
        return res.status(400).json({ message: "Validation failed", errors: body.error.flatten() });
      }

      const participation = await this.hackathonService.upsertParticipation(
        req.user.id,
        id,
        body.data.status,
      );
      return res.status(200).json({ participation });
    } catch {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async removeParticipation(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      const id = Number.parseInt(String(req.params["id"]), 10);
      if (Number.isNaN(id)) return res.status(400).json({ message: "Invalid hackathon ID" });

      await this.hackathonService.removeParticipation(req.user.id, id);
      return res.status(204).send();
    } catch {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
