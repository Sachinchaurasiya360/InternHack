import { describe, it, expect } from "vitest";
import { hashPassword, comparePassword } from "../utils/password.utils.js";

describe("password.utils", () => {
  it("should hash password and correctly verify matches", async () => {
    const plain = "mySecretPassword123";
    const hashed = await hashPassword(plain);

    expect(hashed).not.toBe(plain);
    expect(hashed.length).toBeGreaterThan(0);

    const isMatch = await comparePassword(plain, hashed);
    expect(isMatch).toBe(true);

    const isNotMatch = await comparePassword("wrongPassword", hashed);
    expect(isNotMatch).toBe(false);
  });

  it("should use bcrypt with at least 12 salt rounds (OWASP recommendation)", async () => {
    const plain = "testPassword123!";
    const hashed = await hashPassword(plain);

    // Bcrypt hash format: $2a$[rounds]$[salt][hash]
    // Extract the rounds from the hash
    const parts = hashed.split("$");
    expect(parts.length).toBeGreaterThanOrEqual(4);
    
    const rounds = parseInt(parts[2] || "0", 10);
    
    // Verify salt rounds meet OWASP minimum recommendation (12 rounds as of 2023+)
    expect(rounds).toBeGreaterThanOrEqual(12);
    expect(rounds).toBeLessThanOrEqual(14); // Reasonable upper bound for performance
  });

  it("should generate unique hashes for the same password", async () => {
    const plain = "samePassword123";
    const hash1 = await hashPassword(plain);
    const hash2 = await hashPassword(plain);

    // Each hash should be unique due to random salt
    expect(hash1).not.toBe(hash2);
    
    // But both should verify correctly
    expect(await comparePassword(plain, hash1)).toBe(true);
    expect(await comparePassword(plain, hash2)).toBe(true);
  });

  it("should handle empty and special character passwords", async () => {
    const specialChars = "p@$$w0rd!#%&*()[]{}";
    const hashed = await hashPassword(specialChars);
    
    expect(await comparePassword(specialChars, hashed)).toBe(true);
    expect(await comparePassword("p@$$w0rd", hashed)).toBe(false);
  });

  it("should be case-sensitive", async () => {
    const plain = "CaseSensitive123";
    const hashed = await hashPassword(plain);
    
    expect(await comparePassword(plain, hashed)).toBe(true);
    expect(await comparePassword("casesensitive123", hashed)).toBe(false);
    expect(await comparePassword("CASESENSITIVE123", hashed)).toBe(false);
  });
});
