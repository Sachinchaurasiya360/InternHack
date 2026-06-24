/**
 * @file Unit tests for the registerSchema Zod validator.
 * Covers student/recruiter success paths and recruiter-specific rejections:
 * missing company name, whitespace-only company, and personal email domains.
 */
import { describe, it, expect } from "vitest";
import { registerSchema } from "../auth.validation.js";

describe("registerSchema validation", () => {
  const baseStudentData = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    password: "Password123!",
    role: "STUDENT" as const,
  };

  const baseRecruiterData = {
    name: "Jane Smith",
    email: "jane.smith@microsoft.com",
    password: "Password123!",
    role: "RECRUITER" as const,
    company: "Microsoft",
  };

  it("should validate a valid student registration", () => {
    const result = registerSchema.safeParse(baseStudentData);
    expect(result.success).toBe(true);
  });

  it("should validate a valid recruiter registration", () => {
    const result = registerSchema.safeParse(baseRecruiterData);
    expect(result.success).toBe(true);
  });

  it("should fail recruiter registration if company name is missing", () => {
    const data = { ...baseRecruiterData };
    delete (data as any).company;

    const result = registerSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      expect(errors.company).toContain("Company name is required for recruiter accounts");
    }
  });

  it("should fail recruiter registration if company name is empty or only whitespace", () => {
    const data = { ...baseRecruiterData, company: "   " };

    const result = registerSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      expect(errors.company).toContain("Company name is required for recruiter accounts");
    }
  });

  it("should fail recruiter registration if personal email is used", () => {
    const data = { ...baseRecruiterData, email: "jane.smith@gmail.com" };

    const result = registerSchema.safeParse(data);
    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      expect(errors.email).toContain("Please use your company email. Personal email addresses (Gmail, Yahoo, etc.) are not allowed for recruiter accounts.");
    }
  });

  it("should allow student registration with a company name", () => {
    const data = { ...baseStudentData, company: "Google" };
    const result = registerSchema.safeParse(data);
    expect(result.success).toBe(true);
  });
});
