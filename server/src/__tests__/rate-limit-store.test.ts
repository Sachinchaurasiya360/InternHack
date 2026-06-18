import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

describe("createRateLimitStore", () => {
  const originalEnv = process.env["REDIS_URL"];

  afterEach(() => {
    if (originalEnv !== undefined) {
      process.env["REDIS_URL"] = originalEnv;
    } else {
      delete process.env["REDIS_URL"];
    }
    vi.resetModules();
  });

  it("should return undefined when REDIS_URL is not set", async () => {
    delete process.env["REDIS_URL"];
    vi.resetModules();

    // Re-import after resetting modules to pick up env change
    const { createRateLimitStore } = await import("../utils/rate-limit-store.js");
    const store = createRateLimitStore("test");
    expect(store).toBeUndefined();
  });
});
