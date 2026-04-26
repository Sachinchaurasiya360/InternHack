import { useEffect, useState } from "react";

const STORAGE_KEY = "dsa-foundations:progress:v1";

export interface LessonProgress {
  completed: boolean;
  quizScore: number;
  completedAt: string | null;
}

type ProgressMap = Record<string, Record<string, LessonProgress>>;

function read(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressMap) : {};
  } catch {
    return {};
  }
}

function write(map: ProgressMap) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    window.dispatchEvent(new CustomEvent("dsa-foundations:progress-changed"));
  } catch {
    // ignore write failures (quota, private mode, etc.)
  }
}

export function getLessonProgress(levelId: string, slug: string): LessonProgress | undefined {
  return read()[levelId]?.[slug];
}

export function getLevelProgress(levelId: string): Record<string, LessonProgress> {
  return read()[levelId] ?? {};
}

export function markLessonComplete(levelId: string, slug: string, quizScore: number) {
  const map = read();
  const level = map[levelId] ?? {};
  level[slug] = {
    completed: true,
    quizScore,
    completedAt: new Date().toISOString(),
  };
  map[levelId] = level;
  write(map);
}

/**
 * Reactive hook: re-renders consumers when progress changes elsewhere on the page.
 */
export function useProgressMap(): ProgressMap {
  const [map, setMap] = useState<ProgressMap>(() => read());

  useEffect(() => {
    const handler = () => setMap(read());
    window.addEventListener("dsa-foundations:progress-changed", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("dsa-foundations:progress-changed", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  return map;
}

export function getLevelStats(levelId: string, totalLessons: number): {
  completed: number;
  total: number;
  percent: number;
} {
  const level = read()[levelId] ?? {};
  const completed = Object.values(level).filter((p) => p.completed).length;
  const percent = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
  return { completed, total: totalLessons, percent };
}
