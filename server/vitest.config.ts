import { defineConfig } from "vitest/config";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    environment: "node",
    env: {
      JWT_SECRET: "test-secret-key-at-least-32-chars-long",
    },
    alias: {
      ".prisma/client/default": path.resolve(__dirname, "./node_modules/.prisma/client/default.js"),
      ".prisma/client/index-browser": path.resolve(__dirname, "./node_modules/.prisma/client/index-browser.js"),
    },
  },
});
