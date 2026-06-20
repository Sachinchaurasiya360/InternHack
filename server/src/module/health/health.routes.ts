import { Router } from "express";
import { getReadiness, getFullHealth } from "./health.service.js";

export const healthRouter = Router();

healthRouter.get("/live", (_req, res) => {
  res.json({ status: "ok" });
});

healthRouter.get("/ready", async (_req, res) => {
  try {
    const result = await getReadiness();
    const statusCode = result.status === "ready" ? 200 : 503;
    res.status(statusCode).json(result);
  } catch {
    res.status(503).json({ status: "unhealthy", error: "Readiness check failed" });
  }
});

healthRouter.get("/", async (_req, res) => {
  try {
    const result = await getFullHealth();
    const statusCode = result.status === "ok" ? 200 : 503;
    res.status(statusCode).json(result);
  } catch {
    res.status(503).json({ status: "unhealthy", error: "Health check failed" });
  }
});
