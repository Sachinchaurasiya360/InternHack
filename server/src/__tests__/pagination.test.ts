import { describe, it, expect } from "vitest";
import type { Request } from "express";
import { parsePagination, paginate } from "../utils/pagination.utils.js";

describe("pagination.utils", () => {
  describe("parsePagination", () => {
    it("should parse page and limit correctly with query params", () => {
      const req = {
        query: { page: "2", limit: "15" },
      } as unknown as Request;

      const result = parsePagination(req);
      expect(result).toEqual({ page: 2, limit: 15, skip: 15 });
    });

    it("should use defaults if page or limit query params are missing", () => {
      const req = {
        query: {},
      } as unknown as Request;

      const result = parsePagination(req);
      expect(result).toEqual({ page: 1, limit: 20, skip: 0 });
    });

    it("should cap limit to maxLimit", () => {
      const req = {
        query: { page: "1", limit: "200" },
      } as unknown as Request;

      const result = parsePagination(req, { maxLimit: 50 });
      expect(result).toEqual({ page: 1, limit: 50, skip: 0 });
    });

    it("should handle invalid query inputs gracefully", () => {
      const req = {
        query: { page: "abc", limit: "-5" },
      } as unknown as Request;

      const result = parsePagination(req, { defaultLimit: 25 });
      expect(result).toEqual({ page: 1, limit: 25, skip: 0 });
    });
  });

  describe("paginate", () => {
    it("should calculate page pagination offsets correctly", () => {
      const result = paginate(3, 10);
      expect(result).toEqual({ page: 3, limit: 10, skip: 20 });
    });

    it("should fallback page to 1 if negative or invalid", () => {
      const result = paginate(-2, 10);
      expect(result).toEqual({ page: 1, limit: 10, skip: 0 });
    });

    it("should cap limit to maxLimit and use default if invalid", () => {
      const result = paginate(2, 500, { maxLimit: 50 });
      expect(result).toEqual({ page: 2, limit: 50, skip: 50 });

      const invalidLimitResult = paginate(2, -10, { defaultLimit: 30 });
      expect(invalidLimitResult.page).toBe(2);
      expect(invalidLimitResult.limit).toBe(30);
    });
  });
});
