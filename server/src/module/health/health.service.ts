import { prisma } from "../../database/db.js";
import { redis } from "../../config/redis.js";
import { shutdownManager } from "../../utils/graceful-shutdown.js";

export type HealthStatus = "up" | "down" | "not_configured";

export interface DependencyCheck {
  status: HealthStatus;
  latencyMs?: number;
  error?: string;
}

export interface ReadinessResult {
  status: "ready" | "not_ready";
  checks: {
    database: DependencyCheck;
    redis: DependencyCheck;
    shutdownInProgress: boolean;
  };
}

export interface FullHealthResult {
  status: "ok" | "degraded";
  version: string;
  uptime: number;
  memory: {
    heapUsedMB: number;
    heapTotalMB: number;
    rssMB: number;
  };
  checks: {
    database: DependencyCheck;
    redis: DependencyCheck;
  };
}

/**
 * Check database connectivity by running a lightweight query.
 */
export async function checkDatabase(): Promise<DependencyCheck> {
  const start = Date.now();
  try {
    await prisma.$queryRawUnsafe("SELECT 1");
    return { status: "up", latencyMs: Date.now() - start };
  } catch (err) {
    return {
      status: "down",
      latencyMs: Date.now() - start,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

/**
 * Check Redis connectivity by sending a PING.
 * Returns "not_configured" when REDIS_URL is not set.
 */
export async function checkRedis(): Promise<DependencyCheck> {
  if (!redis) {
    return { status: "not_configured" };
  }

  const start = Date.now();
  try {
    await redis.ping();
    return { status: "up", latencyMs: Date.now() - start };
  } catch (err) {
    return {
      status: "down",
      latencyMs: Date.now() - start,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

/**
 * Get current process memory usage in megabytes.
 */
export function getMemoryUsage(): FullHealthResult["memory"] {
  const mem = process.memoryUsage();
  return {
    heapUsedMB: Math.round((mem.heapUsed / 1024 / 1024) * 100) / 100,
    heapTotalMB: Math.round((mem.heapTotal / 1024 / 1024) * 100) / 100,
    rssMB: Math.round((mem.rss / 1024 / 1024) * 100) / 100,
  };
}

/**
 * Readiness check — used by load balancers to determine if the server
 * should receive traffic. Returns not_ready during shutdown or if the
 * database is unreachable.
 */
export async function getReadiness(): Promise<ReadinessResult> {
  const isShutdown = shutdownManager.isShutdown();
  const [database, redisCheck] = await Promise.all([
    checkDatabase(),
    checkRedis(),
  ]);

  const isReady = !isShutdown && database.status === "up";

  return {
    status: isReady ? "ready" : "not_ready",
    checks: {
      database,
      redis: redisCheck,
      shutdownInProgress: isShutdown,
    },
  };
}

/**
 * Full health status — includes memory, uptime, and all dependency checks.
 */
export async function getFullHealth(): Promise<FullHealthResult> {
  const [database, redisCheck] = await Promise.all([
    checkDatabase(),
    checkRedis(),
  ]);

  const allUp = database.status === "up" &&
    (redisCheck.status === "up" || redisCheck.status === "not_configured");

  return {
    status: allUp ? "ok" : "degraded",
    version: process.env["npm_package_version"] ?? "0.0.0",
    uptime: Math.floor(process.uptime()),
    memory: getMemoryUsage(),
    checks: {
      database,
      redis: redisCheck,
    },
  };
}
