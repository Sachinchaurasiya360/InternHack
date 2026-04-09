import { create } from "zustand";
import { persist } from "zustand/middleware";

export type LessonMark = {
  completed: boolean;
  completedAt?: number;
  xpAwarded?: number;
};

type LearnState = {
  xp: number;
  level: number;
  streakDays: number;
  lastActiveDay: string | null; // yyyy-mm-dd
  lessonsCompleted: Record<string, LessonMark>;
  bookmarks: string[]; // lessonId list
  notes: Record<string, string>; // lessonId -> markdown
  quizScores: Record<string, { score: number; total: number; best: number; at: number }>;
  dailyChallengeDone: Record<string, boolean>; // yyyy-mm-dd -> boolean

  // actions
  awardLessonXp: (lessonId: string, xp?: number) => void;
  toggleBookmark: (lessonId: string) => void;
  setNote: (lessonId: string, note: string) => void;
  recordQuiz: (lessonId: string, score: number, total: number) => void;
  markDailyChallengeDone: () => void;
  resetProgress: () => void;
  touchStreak: () => void;
};

function today() {
  return new Date().toISOString().slice(0, 10);
}
function daysBetween(a: string, b: string) {
  const d1 = new Date(a).getTime();
  const d2 = new Date(b).getTime();
  return Math.round((d2 - d1) / 86400000);
}
function xpForLevel(level: number) {
  return 100 + (level - 1) * 50;
}
function computeLevel(xp: number) {
  let lvl = 1;
  let need = 0;
  while (xp >= need + xpForLevel(lvl)) {
    need += xpForLevel(lvl);
    lvl++;
  }
  return lvl;
}

export const useLearnStore = create<LearnState>()(
  persist(
    (set, get) => ({
      xp: 0,
      level: 1,
      streakDays: 0,
      lastActiveDay: null,
      lessonsCompleted: {},
      bookmarks: [],
      notes: {},
      quizScores: {},
      dailyChallengeDone: {},

      awardLessonXp: (lessonId, xp = 20) => {
        const state = get();
        if (state.lessonsCompleted[lessonId]?.completed) return;
        const newXp = state.xp + xp;
        set({
          xp: newXp,
          level: computeLevel(newXp),
          lessonsCompleted: {
            ...state.lessonsCompleted,
            [lessonId]: { completed: true, completedAt: Date.now(), xpAwarded: xp },
          },
        });
        get().touchStreak();
      },

      toggleBookmark: (lessonId) => {
        const { bookmarks } = get();
        set({
          bookmarks: bookmarks.includes(lessonId)
            ? bookmarks.filter((b) => b !== lessonId)
            : [...bookmarks, lessonId],
        });
      },

      setNote: (lessonId, note) => {
        set({ notes: { ...get().notes, [lessonId]: note } });
      },

      recordQuiz: (lessonId, score, total) => {
        const prev = get().quizScores[lessonId];
        const best = Math.max(prev?.best ?? 0, score);
        const gained = score === total && (!prev || prev.best < total) ? 15 : 0;
        set({
          quizScores: {
            ...get().quizScores,
            [lessonId]: { score, total, best, at: Date.now() },
          },
          xp: get().xp + gained,
          level: computeLevel(get().xp + gained),
        });
      },

      markDailyChallengeDone: () => {
        const key = today();
        if (get().dailyChallengeDone[key]) return;
        set({
          dailyChallengeDone: { ...get().dailyChallengeDone, [key]: true },
          xp: get().xp + 25,
          level: computeLevel(get().xp + 25),
        });
        get().touchStreak();
      },

      touchStreak: () => {
        const t = today();
        const last = get().lastActiveDay;
        if (!last) {
          set({ lastActiveDay: t, streakDays: 1 });
          return;
        }
        if (last === t) return;
        const gap = daysBetween(last, t);
        set({
          lastActiveDay: t,
          streakDays: gap === 1 ? get().streakDays + 1 : 1,
        });
      },

      resetProgress: () =>
        set({
          xp: 0,
          level: 1,
          streakDays: 0,
          lastActiveDay: null,
          lessonsCompleted: {},
          bookmarks: [],
          notes: {},
          quizScores: {},
          dailyChallengeDone: {},
        }),
    }),
    { name: "internhack-learn-progress" }
  )
);

export function xpToNextLevel(xp: number, level: number) {
  let need = 0;
  for (let i = 1; i < level; i++) need += xpForLevel(i);
  const req = xpForLevel(level);
  const into = xp - need;
  return { into, req, pct: Math.min(100, Math.round((into / req) * 100)) };
}
