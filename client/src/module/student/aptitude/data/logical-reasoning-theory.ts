import type { TopicTheory } from "./types";

import { logicalReasoningTheorySeries } from "./logical-reasoning-series";
import { logicalReasoningTheoryVerbal } from "./logical-reasoning-verbal";
import { logicalReasoningTheoryDeductive } from "./logical-reasoning-deductive";
import { logicalReasoningTheorySpatialArrangement } from "./logical-reasoning-spatial-arrangement";
import { logicalReasoningTheoryCodingPuzzles } from "./logical-reasoning-coding-puzzles";

export const logicalReasoningTheory: TopicTheory[] = [
  ...logicalReasoningTheorySeries,
  ...logicalReasoningTheoryVerbal,
  ...logicalReasoningTheoryDeductive,
  ...logicalReasoningTheorySpatialArrangement,
  ...logicalReasoningTheoryCodingPuzzles,
];
