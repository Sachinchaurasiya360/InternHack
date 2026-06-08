import { describe, expect, it } from "vitest";
import { buildTopicAccuracy } from "./topic-accuracy";

describe("buildTopicAccuracy", () => {
  it("computes strongest, needs work and not started topics", () => {
    const result = buildTopicAccuracy([
      { id: 1, name: "Arrays", slug: "arrays", orderIndex: 0, problemCount: 50, solvedCount: 23 },
      { id: 2, name: "Hash Maps", slug: "hash-maps", orderIndex: 1, problemCount: 50, solvedCount: 41 },
      { id: 3, name: "Dynamic Programming", slug: "dynamic-programming", orderIndex: 2, problemCount: 50, solvedCount: 6 },
      { id: 4, name: "Segment Trees", slug: "segment-trees", orderIndex: 3, problemCount: 25, solvedCount: 0 },
    ]);

    expect(result.topicAccuracy.map((topic) => topic.pct)).toEqual([46, 82, 12, 0]);
    expect(result.strongestTopic?.name).toBe("Hash Maps");
    expect(result.needsWorkTopic?.name).toBe("Dynamic Programming");
    expect(result.notStartedTopic?.name).toBe("Segment Trees");
  });
});
