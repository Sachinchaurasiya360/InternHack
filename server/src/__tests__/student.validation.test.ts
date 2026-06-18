import { describe, expect, it } from "vitest";
import { submitRoundSchema } from "../module/student/student.validation.js";

describe("student.validation", () => {
  describe("submitRoundSchema", () => {
    it("accepts assessment answer maps inside fieldAnswers", () => {
      const result = submitRoundSchema.safeParse({
        fieldAnswers: {
          assessmentAnswers: {
            "0": 1,
            "1": 2,
          },
        },
      });

      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.fieldAnswers.assessmentAnswers).toEqual({
          "0": 1,
          "1": 2,
        });
      }
    });

    it("continues to accept existing primitive field answer values", () => {
      const result = submitRoundSchema.safeParse({
        fieldAnswers: {
          portfolio: "https://example.com",
          yearsExperience: 2,
          willingToRelocate: true,
          skills: ["TypeScript", "Node.js"],
        },
      });

      expect(result.success).toBe(true);
    });

    it("rejects nested answer maps with non-numeric assessment values", () => {
      const result = submitRoundSchema.safeParse({
        fieldAnswers: {
          assessmentAnswers: {
            "0": "first-option",
          },
        },
      });

      expect(result.success).toBe(false);
      expect(result.error?.issues[0]?.path).toEqual(["fieldAnswers", "assessmentAnswers"]);
    });
  });
});
