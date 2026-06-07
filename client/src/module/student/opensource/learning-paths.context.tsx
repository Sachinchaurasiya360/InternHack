/* @refresh reset */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useLocation } from "react-router";
import { fetchFirstPRProgress } from "./api/opensource.api";
import {
  LEARNING_PATH_PROGRESS_EVENT,
  LEARNING_PATH_SELECTED_KEY,
  LEARNING_PATHS,
  getLearningPathById,
  inferLearningPathId,
  isLearningPathItemComplete,
  readLearningPathMilestones,
  type LearningPath,
  type LearningPathId,
  type LearningPathItem,
  type LearningPathItemSlug,
} from "./learning-paths.data";

type LearningPathProgress = {
  completedCount: number;
  totalCount: number;
  remainingMinutes: number;
  completedSlugs: Set<LearningPathItemSlug>;
};

type LearningPathContextValue = {
  selectedPath: LearningPath;
  selectedPathId: LearningPathId;
  setSelectedPathId: (pathId: LearningPathId) => void;
  progress: LearningPathProgress;
  nextIncompleteItem: LearningPathItem | null;
  getNextItemAfter: (slug: LearningPathItemSlug) => LearningPathItem | null;
};

const LearningPathContext = createContext<LearningPathContextValue | null>(null);

function getInitialPathId(pathname: string): LearningPathId {
  try {
    const stored = localStorage.getItem(LEARNING_PATH_SELECTED_KEY);
    if (stored) return getLearningPathById(stored).id;
  } catch {
    // Fall through to route inference.
  }
  return inferLearningPathId(pathname) ?? LEARNING_PATHS[0].id;
}

export function LearningPathProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [selectedPathId, setSelectedPathIdState] = useState<LearningPathId>(() => getInitialPathId(pathname));
  const [firstPrCompleted, setFirstPrCompleted] = useState<Set<string>>(new Set());
  const [milestones, setMilestones] = useState<Set<string>>(() => readLearningPathMilestones());
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshProgress = useCallback(() => {
    setMilestones(readLearningPathMilestones());
    setRefreshKey((key) => key + 1);
    void fetchFirstPRProgress()
      .then((ids) => setFirstPrCompleted(new Set(ids)))
      .catch(() => setFirstPrCompleted(new Set()));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refreshProgress();
  }, [refreshProgress]);

  useEffect(() => {
    const onProgressChanged = () => refreshProgress();
    const onStorage = (event: StorageEvent) => {
      if (!event.key || event.key === LEARNING_PATH_SELECTED_KEY) return;
      refreshProgress();
    };

    window.addEventListener(LEARNING_PATH_PROGRESS_EVENT, onProgressChanged);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(LEARNING_PATH_PROGRESS_EVENT, onProgressChanged);
      window.removeEventListener("storage", onStorage);
    };
  }, [refreshProgress]);

  const setSelectedPathId = useCallback((pathId: LearningPathId) => {
    setSelectedPathIdState(pathId);
    try {
      localStorage.setItem(LEARNING_PATH_SELECTED_KEY, pathId);
    } catch {
      // Local selection is non-critical.
    }
  }, []);

  const selectedPath = getLearningPathById(selectedPathId);

  const progress = useMemo<LearningPathProgress>(() => {
    void refreshKey;
    const completedSlugs = new Set<LearningPathItemSlug>();
    let remainingMinutes = 0;

    selectedPath.items.forEach((item) => {
      const complete = isLearningPathItemComplete(item, firstPrCompleted, milestones);
      if (complete) completedSlugs.add(item.slug);
      else remainingMinutes += item.estimatedMinutes;
    });

    return {
      completedSlugs,
      remainingMinutes,
      completedCount: completedSlugs.size,
      totalCount: selectedPath.items.length,
    };
  }, [selectedPath, firstPrCompleted, milestones, refreshKey]);

  const nextIncompleteItem = selectedPath.items.find((item) => !progress.completedSlugs.has(item.slug)) ?? null;

  const getNextItemAfter = useCallback(
    (slug: LearningPathItemSlug) => {
      const index = selectedPath.items.findIndex((item) => item.slug === slug);
      return index >= 0 ? selectedPath.items[index + 1] ?? null : null;
    },
    [selectedPath.items],
  );

  const value = useMemo<LearningPathContextValue>(
    () => ({
      selectedPath,
      selectedPathId,
      setSelectedPathId,
      progress,
      nextIncompleteItem,
      getNextItemAfter,
    }),
    [selectedPath, selectedPathId, setSelectedPathId, progress, nextIncompleteItem, getNextItemAfter],
  );

  return <LearningPathContext.Provider value={value}>{children}</LearningPathContext.Provider>;
}

export function useLearningPath() {
  const context = useContext(LearningPathContext);
  if (!context) {
    throw new Error("useLearningPath must be used inside LearningPathProvider");
  }
  return context;
}
