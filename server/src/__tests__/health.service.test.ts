import { describe, it, expect, vi, beforeEach } from "vitest";
import { checkDatabase, getReadiness } from "../module/health/health.service.js";
import { prisma } from "../database/db.js";
import { shutdownManager } from "../utils/graceful-shutdown.js";

vi.mock("../database/db.js", () => ({
  prisma: {
    $queryRawUnsafe: vi.fn(),
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

  it("getReadiness should return ready when DB is up and shutdown is false", async () => {
    vi.mocked(prisma.$queryRawUnsafe).mockResolvedValueOnce([]);
    vi.spyOn(shutdownManager, "isShutdown").mockReturnValue(false);

    const res = await getReadiness();
    expect(res.status).toBe("ready");
    expect(res.checks.database.status).toBe("up");
    expect(res.checks.shutdownInProgress).toBe(false);
  });

  it("getReadiness should return not_ready when shutdown is in progress", async () => {
    vi.mocked(prisma.$queryRawUnsafe).mockResolvedValueOnce([]);
    vi.spyOn(shutdownManager, "isShutdown").mockReturnValue(true);

    const res = await getReadiness();
    expect(res.status).toBe("not_ready");
    expect(res.checks.shutdownInProgress).toBe(true);
  });
});
