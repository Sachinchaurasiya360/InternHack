import type { Request, Response } from "express";
import type { TrendsService } from "./trends.service.js";

export class TrendsController {
  constructor(private readonly trendsService: TrendsService) {}

  async getOverview(_req: Request, res: Response) {
    try {
      const data = await this.trendsService.getOverview();
      return res.status(200).json(data);
    } catch (error) {
      console.error("TrendsController.getOverview error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getTopSkills(_req: Request, res: Response) {
    try {
      const data = await this.trendsService.getTopSkills();
      return res.status(200).json(data);
    } catch (error) {
      console.error("TrendsController.getTopSkills error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getTopLocations(_req: Request, res: Response) {
    try {
      const data = await this.trendsService.getTopLocations();
      return res.status(200).json(data);
    } catch (error) {
      console.error("TrendsController.getTopLocations error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getSalaryInsights(_req: Request, res: Response) {
    try {
      const data = await this.trendsService.getSalaryInsights();
      return res.status(200).json(data);
    } catch (error) {
      console.error("TrendsController.getSalaryInsights error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getTimeline(_req: Request, res: Response) {
    try {
      const data = await this.trendsService.getTimeline();
      return res.status(200).json(data);
    } catch (error) {
      console.error("TrendsController.getTimeline error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getSkillSupply(_req: Request, res: Response) {
    try {
      const data = await this.trendsService.getSkillSupply();
      return res.status(200).json(data);
    } catch (error) {
      console.error("TrendsController.getSkillSupply error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
