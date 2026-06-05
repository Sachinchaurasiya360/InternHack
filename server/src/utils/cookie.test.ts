import { describe, it, expect, vi } from "vitest";
import type { Response } from "express";
import { setTokenCookie, clearTokenCookie } from "./cookie.utils.js";

describe("cookie.utils", () => {
  it("should set the token cookie correctly", () => {
    const res = {
      cookie: vi.fn(),
    } as unknown as Response;

    setTokenCookie(res, "test-token");

    expect(res.cookie).toHaveBeenCalledWith("token", "test-token", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });
  });

  it("should set secure cookie when NODE_ENV is production", () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";

    const res = {
      cookie: vi.fn(),
    } as unknown as Response;

    setTokenCookie(res, "test-token");

    expect(res.cookie).toHaveBeenCalledWith("token", "test-token", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    process.env.NODE_ENV = originalEnv;
  });

  it("should clear the token cookie correctly", () => {
    const res = {
      clearCookie: vi.fn(),
    } as unknown as Response;

    clearTokenCookie(res);

    expect(res.clearCookie).toHaveBeenCalledWith("token", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });
  });
});
