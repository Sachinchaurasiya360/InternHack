import { prisma } from "../../database/db.js";
import { shutdownManager } from "../../utils/graceful-shutdown.js";

export type HealthStatus = "up" | "down";

export interface DependencyCheck {
  status: HealthStatus;
  latencyMs?: number;
  error?: string;
}

export interface ReadinessResult {
  status: "ready" | "not_ready";
  checks: {
    database: DependencyCheck;
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
  const database = await checkDatabase();

  const isReady = !isShutdown && database.status === "up";

  return {
    status: isReady ? "ready" : "not_ready",
    checks: {
      database,
      shutdownInProgress: isShutdown,
    },
  };
}

/**
 * Full health status — includes memory, uptime, and all dependency checks.
 */
export async function getFullHealth(): Promise<FullHealthResult> {
  const database = await checkDatabase();

  return {
    status: database.status === "up" ? "ok" : "degraded",
    version: process.env["npm_package_version"] ?? "0.0.0",
    uptime: Math.floor(process.uptime()),
    memory: getMemoryUsage(),
    checks: {
      database,
    },
  };
}
