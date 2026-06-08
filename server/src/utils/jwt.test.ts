import { describe, it, expect } from "vitest";
import type { UserRole } from "@prisma/client";
import { generateToken, verifyToken } from "./jwt.utils.js";

describe("jwt.utils", () => {
  const payload = {
    id: 1,
    email: "test@example.com",
    role: "USER" as UserRole,
    tokenVersion: 1,
  };

  it("should generate and verify token successfully", () => {
    const token = generateToken(payload);
    expect(token).toBeTypeOf("string");

    const decoded = verifyToken(token);
    expect(decoded.id).toBe(payload.id);
    expect(decoded.email).toBe(payload.email);
    expect(decoded.role).toBe(payload.role);
    expect(decoded.tokenVersion).toBe(payload.tokenVersion);
  });

  it("should fail verification if token is invalid or expired", () => {
    expect(() => verifyToken("invalid-token")).toThrow();
  });
});
