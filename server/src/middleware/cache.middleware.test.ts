import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Request, Response, NextFunction } from "express";
import { cacheMiddleware, clearCache, appCache } from "./cache.middleware.js";

// ── Helpers ─────────────────────────────────────────────────────────
function mockReq(method: string = "GET", url: string = "/api/test"): Request {
  return {
    method,
    originalUrl: url,
    url,
  } as unknown as Request;
}

function mockRes(): Response {
  const locals: Record<string, unknown> = {};
  const res = {
    statusCode: 200,
    locals,
    setHeader: vi.fn(),
    json: vi.fn().mockReturnThis(),
  } as unknown as Response;
  return res;
}

describe("cacheMiddleware", () => {
  beforeEach(() => {
    // Clear all cached entries between tests
    appCache.flushAll();
  });

  it("should skip caching for non-GET requests", () => {
    const middleware = cacheMiddleware();
    const req = mockReq("POST");
    const res = mockRes();
    const next = vi.fn();

    middleware(req, res, next);

    expect(next).toHaveBeenCalledOnce();
    expect(res.setHeader).not.toHaveBeenCalled();
  });

  it("should return MISS on first GET request", () => {
    const middleware = cacheMiddleware(300, "test");
    const req = mockReq("GET", "/api/users");
    const res = mockRes();
    const next = vi.fn();

    middleware(req, res, next);

    // Middleware sets up response interception and calls next
    expect(next).toHaveBeenCalledOnce();

    // Simulate the route handler calling res.json()
    res.json({ users: ["alice"] });

    expect(res.setHeader).toHaveBeenCalledWith("X-Cache", "MISS");
  });

  it("should return HIT on second GET request to same URL", () => {
    const middleware = cacheMiddleware(300, "test");
    const url = "/api/cached-endpoint";

    // First request: MISS
    const req1 = mockReq("GET", url);
    const res1 = mockRes();
    const next1 = vi.fn();
    middleware(req1, res1, next1);
    res1.json({ data: "hello" });

    // Second request: HIT
    const req2 = mockReq("GET", url);
    const res2 = mockRes();
    const next2 = vi.fn();
    middleware(req2, res2, next2);

    expect(res2.setHeader).toHaveBeenCalledWith("X-Cache", "HIT");
    expect(res2.json).toHaveBeenCalledWith({ data: "hello" });
    // next should NOT be called on cache HIT
    expect(next2).not.toHaveBeenCalled();
  });

  it("should NOT cache non-2xx responses", () => {
    const middleware = cacheMiddleware(300, "test");
    const url = "/api/error-endpoint";

    // First request: 500 error
    const req1 = mockReq("GET", url);
    const res1 = mockRes();
    res1.statusCode = 500;
    const next1 = vi.fn();
    middleware(req1, res1, next1);
    res1.json({ error: "fail" });

    // Second request: should still be a MISS
    const req2 = mockReq("GET", url);
    const res2 = mockRes();
    const next2 = vi.fn();
    middleware(req2, res2, next2);

    expect(next2).toHaveBeenCalledOnce(); // No cache hit
  });

  it("should respect skipCache flag in res.locals", () => {
    const middleware = cacheMiddleware(300, "test");
    const url = "/api/skip-cache";

    // First request with skipCache
    const req1 = mockReq("GET", url);
    const res1 = mockRes();
    res1.locals["skipCache"] = true;
    const next1 = vi.fn();
    middleware(req1, res1, next1);
    res1.json({ data: "no-cache" });

    // Second request: should be a MISS since first was skipped
    const req2 = mockReq("GET", url);
    const res2 = mockRes();
    const next2 = vi.fn();
    middleware(req2, res2, next2);

    expect(next2).toHaveBeenCalledOnce();
  });

  it("should use different cache keys for different URLs", () => {
    const middleware = cacheMiddleware(300, "test");

    // Cache /api/a
    const req1 = mockReq("GET", "/api/a");
    const res1 = mockRes();
    middleware(req1, res1, vi.fn());
    res1.json({ route: "a" });

    // Cache /api/b
    const req2 = mockReq("GET", "/api/b");
    const res2 = mockRes();
    middleware(req2, res2, vi.fn());
    res2.json({ route: "b" });

    // Verify /api/a returns its own cached data
    const req3 = mockReq("GET", "/api/a");
    const res3 = mockRes();
    middleware(req3, res3, vi.fn());
    expect(res3.json).toHaveBeenCalledWith({ route: "a" });

    // Verify /api/b returns its own cached data
    const req4 = mockReq("GET", "/api/b");
    const res4 = mockRes();
    middleware(req4, res4, vi.fn());
    expect(res4.json).toHaveBeenCalledWith({ route: "b" });
  });
});

describe("clearCache", () => {
  beforeEach(() => {
    appCache.flushAll();
  });

  it("should clear all keys matching a prefix", () => {
    appCache.set("blog:/api/blog/1", { id: 1 });
    appCache.set("blog:/api/blog/2", { id: 2 });
    appCache.set("user:/api/users/1", { id: 1 });

    clearCache("blog:");

    expect(appCache.get("blog:/api/blog/1")).toBeUndefined();
    expect(appCache.get("blog:/api/blog/2")).toBeUndefined();
    // user cache should NOT be cleared
    expect(appCache.get("user:/api/users/1")).toEqual({ id: 1 });
  });

  it("should do nothing if no keys match the prefix", () => {
    appCache.set("blog:/api/blog/1", { id: 1 });

    clearCache("nonexistent:");

    expect(appCache.get("blog:/api/blog/1")).toEqual({ id: 1 });
  });
});
