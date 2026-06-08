import { describe, it, expect } from "vitest";
import { slugify, slugifyWithSuffix } from "./slug.utils.js";

describe("slug.utils", () => {
  describe("slugify", () => {
    it("should convert titles to lowercase, hyphenated slugs", () => {
      expect(slugify("Hello World")).toBe("hello-world");
      expect(slugify("React 18 & Vitest Testing")).toBe("react-18-vitest-testing");
    });

    it("should strip diacritics and special characters", () => {
      expect(slugify("café")).toBe("cafe");
      expect(slugify("Crème brûlée")).toBe("creme-brulee");
      expect(slugify("Hello @ World!")).toBe("hello-world");
    });

    it("should trim leading and trailing hyphens", () => {
      expect(slugify("---Hello World---")).toBe("hello-world");
    });

    it("should respect max length if provided", () => {
      expect(slugify("hello-world-testing-vitest", 11)).toBe("hello-world");
    });
  });

  describe("slugifyWithSuffix", () => {
    it("should append a random 4-character suffix for uniqueness", () => {
      const slug = slugifyWithSuffix("My Awesome Title");
      expect(slug).toMatch(/^my-awesome-title-[a-z0-9]{4}$/);
    });

    it("should use fallback if title generates an empty slug", () => {
      const slug = slugifyWithSuffix("!!!", "custom-fallback");
      expect(slug).toMatch(/^custom-fallback-[a-z0-9]{4}$/);
    });
  });
});
