import type { DsaTopic } from "../../../lib/types";

export type TopicAccuracyEntry = DsaTopic & { pct: number };

export function buildTopicAccuracy(topics: DsaTopic[]) {
  const topicAccuracy = topics.map((topic) => {
    const pct = topic.problemCount > 0 ? Math.round((topic.solvedCount / topic.problemCount) * 100) : 0;
    return { ...topic, pct };
  });

  const startedTopics = topicAccuracy.filter((topic) => topic.solvedCount > 0);
  const strongestTopic = startedTopics.reduce<TopicAccuracyEntry | null>(
    (best, topic) => (!best || topic.pct > best.pct ? topic : best),
    null,
  );
  const needsWorkTopic = startedTopics
    .filter((topic) => topic.pct < 70)
    .reduce<TopicAccuracyEntry | null>(
      (worst, topic) => (!worst || topic.pct < worst.pct ? topic : worst),
      null,
    );
  const notStartedTopic = topicAccuracy.find((topic) => topic.solvedCount === 0 && topic.problemCount > 0) ?? null;

  return {
    topicAccuracy,
    strongestTopic,
    needsWorkTopic,
    notStartedTopic,
  };
}
