import type { Request, Response, NextFunction } from "express";
import { EmailCampaignService } from "./email-campaign.service.js";
import { chatMessageSchema, createCampaignSchema, previewSchema } from "./email-campaign.validation.js";

const service = new EmailCampaignService();

export class EmailCampaignController {
  async chat(req: Request, res: Response, next: NextFunction) {
    try {
      const data = chatMessageSchema.parse(req.body);
      const result = await service.chat(data.message, data.history, data.contactType);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async preview(req: Request, res: Response, next: NextFunction) {
    try {
      const data = previewSchema.parse(req.body);
      const result = await service.preview(
        data.emailTemplate,
        data.emailSubject,
        data.contactType,
        data.filters,
        data.count,
      );
      res.json({ previews: result });
    } catch (err) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = createCampaignSchema.parse(req.body);
      const campaign = await service.createCampaign(data, req.user!.id);
      res.status(201).json(campaign);
    } catch (err) {
      next(err);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const campaigns = await service.listCampaigns(req.user!.id);
      res.json({ campaigns });
    } catch (err) {
      next(err);
    }
  }

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params["id"]!);
      if (isNaN(id)) { res.status(400).json({ error: "Invalid campaign ID" }); return; }
      const campaign = await service.getCampaign(id, req.user!.id);
      res.json(campaign);
    } catch (err) {
      next(err);
    }
  }

  async start(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params["id"]!);
      if (isNaN(id)) { res.status(400).json({ error: "Invalid campaign ID" }); return; }
      const result = await service.startCampaign(id, req.user!.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async pause(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params["id"]!);
      if (isNaN(id)) { res.status(400).json({ error: "Invalid campaign ID" }); return; }
      const result = await service.pauseCampaign(id, req.user!.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async resume(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params["id"]!);
      if (isNaN(id)) { res.status(400).json({ error: "Invalid campaign ID" }); return; }
      const result = await service.resumeCampaign(id, req.user!.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params["id"]!);
      if (isNaN(id)) { res.status(400).json({ error: "Invalid campaign ID" }); return; }
      const result = await service.deleteCampaign(id, req.user!.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}
