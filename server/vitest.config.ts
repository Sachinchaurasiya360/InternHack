import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    env: {
      JWT_SECRET: "test-secret-key-at-least-32-chars-long",
    },
  },
});
