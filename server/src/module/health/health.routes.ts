import { Router } from "express";
import { getReadiness, getFullHealth } from "./health.service.js";

export const healthRouter = Router();

/**
 * GET /api/health/live
 *
 * Liveness probe — is the process alive?
 * Always returns 200 unless the process is dead.
 */
healthRouter.get("/live", (_req, res) => {
  res.json({ status: "ok" });
});

/**
 * GET /api/health/ready
 *
 * Readiness probe — are all critical dependencies reachable?
 * Returns 503 during graceful shutdown or when the database is down,
 * so load balancers stop routing traffic to this instance.
 */
healthRouter.get("/ready", async (_req, res) => {
  const result = await getReadiness();
  const statusCode = result.status === "ready" ? 200 : 503;
  res.status(statusCode).json(result);
});

/**
 * GET /api/health
 *
 * Full health status with dependency checks, memory usage, and uptime.
 * Useful for monitoring dashboards and ops debugging.
 */
healthRouter.get("/", async (_req, res) => {
  const result = await getFullHealth();
  const statusCode = result.status === "ok" ? 200 : 503;
  res.status(statusCode).json(result);
});
