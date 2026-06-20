import { describe, it, expect } from "vitest";
import { authIpKeyGenerator, authEmailKeyGenerator, authEmailSkip } from "../rate-limit.middleware.js";
import type { Request } from "express";

describe("authIpKeyGenerator", () => {
  it("should return the request IP", () => {
    const req = { ip: "1.2.3.4" } as unknown as Request;
    const key = authIpKeyGenerator(req);
    expect(key).toBe("1.2.3.4");
  });

  it("should return unknown_ip if no IP is present", () => {
    const req = {} as unknown as Request;
    const key = authIpKeyGenerator(req);
    expect(key).toBe("unknown_ip");
  });
});

describe("authEmailKeyGenerator", () => {
  it("should return email-based key when email is provided in body", () => {
    const req = {
      body: { email: " TEST@user.com  " },
      ip: "1.2.3.4",
    } as unknown as Request;
    const key = authEmailKeyGenerator(req);
    expect(key).toBe("email:test@user.com");
  });

  it("should fallback to IP key when email is not present in body", () => {
    const req = {
      body: {},
      ip: "1.2.3.4",
    } as unknown as Request;
    const key = authEmailKeyGenerator(req);
    expect(key).toBe("ip:1.2.3.4");
  });

  it("should fallback to IP key when email is not a string", () => {
    const req = {
      body: { email: 123 },
      ip: "1.2.3.4",
    } as unknown as Request;
    const key = authEmailKeyGenerator(req);
    expect(key).toBe("ip:1.2.3.4");
  });
});

describe("authEmailSkip", () => {
  it("should skip rate limiting for non-auth/non-recovery paths", () => {
    const req = {
      originalUrl: "/api/jobs",
      body: { email: "test@user.com" },
    } as unknown as Request;
    const shouldSkip = authEmailSkip(req);
    expect(shouldSkip).toBe(true);
  });

  it("should run rate limiting for login path with email present", () => {
    const req = {
      originalUrl: "/api/auth/login",
      body: { email: "test@user.com" },
    } as unknown as Request;
    const shouldSkip = authEmailSkip(req);
    expect(shouldSkip).toBe(false);
  });

  it("should skip rate limiting for login path if email is missing", () => {
    const req = {
      originalUrl: "/api/auth/login",
      body: {},
    } as unknown as Request;
    const shouldSkip = authEmailSkip(req);
    expect(shouldSkip).toBe(true);
  });

  it("should run rate limiting for forgot-password path with email present", () => {
    const req = {
      originalUrl: "/api/auth/forgot-password",
      body: { email: "test@user.com" },
    } as unknown as Request;
    const shouldSkip = authEmailSkip(req);
    expect(shouldSkip).toBe(false);
  });
});
