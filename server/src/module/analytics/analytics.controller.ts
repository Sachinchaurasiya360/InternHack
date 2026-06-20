import type { Request, Response } from "express";
import { validateRequestData } from "../../utils/validation.utils.js";
import { AnalyticsService } from "./analytics.service.js";
import { trackContentSchema } from "./analytics.validation.js";

const analyticsService = new AnalyticsService();

export const trackContentView = async (req: Request, res: Response) => {
  try {
    const data = validateRequestData(res, trackContentSchema, req.body);
      if (!data) return;
    const userId = req.user?.id; // Optional userId from auth middleware

    await analyticsService.trackContentView({
      ...data,
      userId,
    });

    res.status(200).json({ success: true });
  } catch (error: any) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getLearnAnalytics = async (req: Request, res: Response) => {
  try {
    const stats = await analyticsService.getLearnAnalytics();
    res.status(200).json(stats);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getUnderperformingItems = async (req: Request, res: Response) => {
  try {
    const result = await analyticsService.highlightUnderperformingItems();
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
