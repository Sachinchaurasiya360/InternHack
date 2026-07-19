import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/__tests__/**/*.ts"],
    env: {
      JWT_SECRET: "test-secret-key-at-least-32-chars-long",
      VERIFICATION_SECRET: "test-verification-secret-at-least-32-chars-long",
    },
  },
});
