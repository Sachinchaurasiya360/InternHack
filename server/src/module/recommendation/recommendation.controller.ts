import type { Request, Response, NextFunction } from "express";
import { getRecommendations } from "./recommendation.service.js";
import { createLogger } from "../../utils/logger.js";

const logger = createLogger("RecommendationController");

export async function getRecommendationsHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    if (!req.user) return res.status(401).json({ message: "Authentication required" });

    const result = await getRecommendations(req.user.id);
    return res.status(200).json(result);
  } catch (error) {
    logger.error("Failed to get recommendations", error);
    next(error);
  }
}