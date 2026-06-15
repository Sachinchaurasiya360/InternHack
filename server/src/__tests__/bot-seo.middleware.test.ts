import { describe, it, expect, vi } from "vitest";
import type { Request, Response, NextFunction } from "express";
import { botSeoMiddleware } from "../middleware/bot-seo.middleware.js";

// ── Helpers ─────────────────────────────────────────────────────────
function mockReq(userAgent: string = ""): Request {
  return {
    headers: { "user-agent": userAgent },
  } as unknown as Request;
}

function mockRes(): Response & { _headers: Record<string, string> } {
  const headers: Record<string, string> = {};
  return {
    _headers: headers,
    setHeader: vi.fn((key: string, value: string) => {
      headers[key] = value;
    }),
  } as unknown as Response & { _headers: Record<string, string> };
}

describe("botSeoMiddleware", () => {
  it("should set X-Is-Bot: 1 for Googlebot", () => {
    const req = mockReq("Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)");
    const res = mockRes();
    const next = vi.fn();

    botSeoMiddleware(req, res, next);

    expect(res.setHeader).toHaveBeenCalledWith("X-Is-Bot", "1");
    expect(res.setHeader).toHaveBeenCalledWith("Vary", "User-Agent");
    expect(next).toHaveBeenCalledOnce();
  });

  it("should set X-Is-Bot: 1 for Bingbot", () => {
    const req = mockReq("Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)");
    const res = mockRes();
    const next = vi.fn();

    botSeoMiddleware(req, res, next);

    expect(res.setHeader).toHaveBeenCalledWith("X-Is-Bot", "1");
    expect(next).toHaveBeenCalledOnce();
  });

  it("should set X-Is-Bot: 1 for facebookexternalhit", () => {
    const req = mockReq("facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)");
    const res = mockRes();
    const next = vi.fn();

    botSeoMiddleware(req, res, next);

    expect(res.setHeader).toHaveBeenCalledWith("X-Is-Bot", "1");
  });

  it("should set X-Is-Bot: 1 for LinkedInBot", () => {
    const req = mockReq("LinkedInBot/1.0 (compatible; Mozilla/5.0)");
    const res = mockRes();
    const next = vi.fn();

    botSeoMiddleware(req, res, next);

    expect(res.setHeader).toHaveBeenCalledWith("X-Is-Bot", "1");
  });

  it("should NOT set X-Is-Bot for regular browser user-agents", () => {
    const req = mockReq("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120");
    const res = mockRes();
    const next = vi.fn();

    botSeoMiddleware(req, res, next);

    // Should NOT have X-Is-Bot header set
    expect(res._headers["X-Is-Bot"]).toBeUndefined();
    // But should always set Vary
    expect(res.setHeader).toHaveBeenCalledWith("Vary", "User-Agent");
    expect(next).toHaveBeenCalledOnce();
  });

  it("should NOT set X-Is-Bot for empty user-agent", () => {
    const req = mockReq("");
    const res = mockRes();
    const next = vi.fn();

    botSeoMiddleware(req, res, next);

    expect(res._headers["X-Is-Bot"]).toBeUndefined();
    expect(res.setHeader).toHaveBeenCalledWith("Vary", "User-Agent");
    expect(next).toHaveBeenCalledOnce();
  });

  it("should always set Vary: User-Agent header", () => {
    const req = mockReq("some-random-client");
    const res = mockRes();
    const next = vi.fn();

    botSeoMiddleware(req, res, next);

    expect(res.setHeader).toHaveBeenCalledWith("Vary", "User-Agent");
  });

  it("should always call next()", () => {
    const req = mockReq("Googlebot");
    const res = mockRes();
    const next = vi.fn();

    botSeoMiddleware(req, res, next);

    expect(next).toHaveBeenCalledOnce();
  });
});
