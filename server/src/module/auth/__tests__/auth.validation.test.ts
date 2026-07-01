/**
 * @file Unit tests for the registerSchema Zod validator.
 * Registration is student-only (the recruiter role was removed).
 */
import { describe, it, expect } from "vitest";
import { registerSchema } from "../auth.validation.js";

describe("registerSchema validation", () => {
  const baseStudentData = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    password: "Password123!",
  };

  it("should validate a valid student registration", () => {
    const result = registerSchema.safeParse(baseStudentData);
    expect(result.success).toBe(true);
  });

  it("should fail when the name is too short", () => {
    const result = registerSchema.safeParse({ ...baseStudentData, name: "J" });
    expect(result.success).toBe(false);
  });

  it("should fail with an invalid email", () => {
    const result = registerSchema.safeParse({ ...baseStudentData, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("should fail with a weak password", () => {
    const result = registerSchema.safeParse({ ...baseStudentData, password: "weak" });
    expect(result.success).toBe(false);
  });
});
