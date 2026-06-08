import { describe, it, expect, vi, beforeEach } from "vitest";
import { checkDatabase, checkRedis, getReadiness } from "./health.service.js";
import { prisma } from "../../database/db.js";
import { redis } from "../../config/redis.js";
import { shutdownManager } from "../../utils/graceful-shutdown.js";

vi.mock("../../database/db.js", () => ({
  prisma: {
    $queryRawUnsafe: vi.fn(),
  },
}));

vi.mock("../../config/redis.js", () => ({
  redis: {
    ping: vi.fn(),
  },
}));

describe("HealthService", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should return up when database is reachable", async () => {
    vi.mocked(prisma.$queryRawUnsafe).mockResolvedValueOnce([]);
    const res = await checkDatabase();
    expect(res.status).toBe("up");
    expect(res.latencyMs).toBeDefined();
  });

  it("should return down when database query throws", async () => {
    vi.mocked(prisma.$queryRawUnsafe).mockRejectedValueOnce(new Error("Connection failed"));
    const res = await checkDatabase();
    expect(res.status).toBe("down");
    expect(res.error).toBe("Connection failed");
  });

  it("should return up when Redis is reachable", async () => {
    vi.mocked(redis!.ping).mockResolvedValueOnce("PONG");
    const res = await checkRedis();
    expect(res.status).toBe("up");
  });

  it("should return down when Redis ping throws", async () => {
    vi.mocked(redis!.ping).mockRejectedValueOnce(new Error("Timeout"));
    const res = await checkRedis();
    expect(res.status).toBe("down");
    expect(res.error).toBe("Timeout");
  });

  it("getReadiness should return ready when DB is up and shutdown is false", async () => {
    vi.mocked(prisma.$queryRawUnsafe).mockResolvedValueOnce([]);
    vi.mocked(redis!.ping).mockResolvedValueOnce("PONG");
    vi.spyOn(shutdownManager, "isShutdown").mockReturnValue(false);

    const res = await getReadiness();
    expect(res.status).toBe("ready");
    expect(res.checks.database.status).toBe("up");
    expect(res.checks.redis.status).toBe("up");
    expect(res.checks.shutdownInProgress).toBe(false);
  });

  it("getReadiness should return not_ready when shutdown is in progress", async () => {
    vi.mocked(prisma.$queryRawUnsafe).mockResolvedValueOnce([]);
    vi.mocked(redis!.ping).mockResolvedValueOnce("PONG");
    vi.spyOn(shutdownManager, "isShutdown").mockReturnValue(true);

    const res = await getReadiness();
    expect(res.status).toBe("not_ready");
    expect(res.checks.shutdownInProgress).toBe(true);
  });
});
