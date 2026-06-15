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
});
