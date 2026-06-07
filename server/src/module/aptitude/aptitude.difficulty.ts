import type { AptitudeDifficulty } from "@prisma/client";

export const APTITUDE_DIFFICULTIES = ["EASY", "MEDIUM", "HARD"] as const;

export function normalizeAptitudeDifficulty(value: string | null | undefined): AptitudeDifficulty {
  const upper = (value ?? "MEDIUM").toUpperCase();
  if (upper === "EASY" || upper === "HARD") return upper;
  return "MEDIUM";
}

export function upgradeAptitudeDifficulty(current: AptitudeDifficulty): AptitudeDifficulty {
  if (current === "EASY") return "MEDIUM";
  if (current === "MEDIUM") return "HARD";
  return "HARD";
}

export function downgradeAptitudeDifficulty(current: AptitudeDifficulty): AptitudeDifficulty {
  if (current === "HARD") return "MEDIUM";
  if (current === "MEDIUM") return "EASY";
  return "EASY";
}

export type DifficultyChange = "increased" | "decreased" | null;

const DIFFICULTY_RANK: Record<AptitudeDifficulty, number> = {
  EASY: 0,
  MEDIUM: 1,
  HARD: 2,
};

export function applyAptitudeDifficultyChange(
  current: AptitudeDifficulty,
  isCorrect: boolean,
): { next: AptitudeDifficulty; difficultyChange: DifficultyChange } {
  const next = isCorrect ? upgradeAptitudeDifficulty(current) : downgradeAptitudeDifficulty(current);
  if (next === current) {
    return { next, difficultyChange: null };
  }
  const difficultyChange =
    DIFFICULTY_RANK[next] > DIFFICULTY_RANK[current] ? "increased" : "decreased";
  return { next, difficultyChange };
}
