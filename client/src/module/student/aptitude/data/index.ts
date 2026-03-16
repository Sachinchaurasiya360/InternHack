import { aptitudeTheory } from "./aptitude-theory";
import { logicalReasoningTheory } from "./logical-reasoning-theory";
import { verbalAbilityTheory } from "./verbal-ability-theory";
import { dataInterpretationTheory } from "./data-interpretation-theory";
import type { TopicTheory } from "./types";

export type { TopicTheory, Formula, Method, SolvedExample } from "./types";

const allTheory: TopicTheory[] = [
  ...aptitudeTheory,
  ...logicalReasoningTheory,
  ...verbalAbilityTheory,
  ...dataInterpretationTheory,
];

const theoryMap = new Map<string, TopicTheory>(
  allTheory.map((t) => [t.slug, t]),
);

export function getTopicTheory(slug: string): TopicTheory | undefined {
  return theoryMap.get(slug);
}
