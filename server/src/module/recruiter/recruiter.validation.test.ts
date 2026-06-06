import { describe, expect, it } from "vitest";
import { createRoundSchema, updateRoundSchema } from "./recruiter.validation.js";

const validCriterion = {
  id: "technical-depth",
  criterion: "Technical depth",
  maxScore: 100,
};

const validRound = {
  name: "Technical Interview",
  orderIndex: 0,
  evaluationCriteria: [validCriterion],
};

describe("recruiter.validation", () => {
  describe("evaluation criteria maxScore", () => {
    it("accepts positive scores up to 100 when creating a round", () => {
      const result = createRoundSchema.safeParse(validRound);

      expect(result.success).toBe(true);
    });

    it.each([0, -5])("rejects non-positive maxScore value %s", (maxScore) => {
      const result = createRoundSchema.safeParse({
        ...validRound,
        evaluationCriteria: [{ ...validCriterion, maxScore }],
      });

      expect(result.success).toBe(false);
      expect(result.error?.issues[0]?.path).toEqual(["evaluationCriteria", 0, "maxScore"]);
    });

    it("rejects maxScore values above 100 when creating a round", () => {
      const result = createRoundSchema.safeParse({
        ...validRound,
        evaluationCriteria: [{ ...validCriterion, maxScore: 101 }],
      });

      expect(result.success).toBe(false);
      expect(result.error?.issues[0]?.message).toBe("Maximum score cannot exceed 100");
    });

    it("applies the same maxScore bound when updating a round", () => {
      const result = updateRoundSchema.safeParse({
        evaluationCriteria: [{ ...validCriterion, maxScore: 250 }],
      });

      expect(result.success).toBe(false);
      expect(result.error?.issues[0]?.path).toEqual(["evaluationCriteria", 0, "maxScore"]);
    });
  });
});
