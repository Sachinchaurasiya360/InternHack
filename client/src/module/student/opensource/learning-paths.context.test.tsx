import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { LearningPathProvider, useLearningPath } from "./learning-paths.context";
import { LEARNING_PATH_PROGRESS_EVENT, LEARNING_PATH_SELECTED_KEY } from "./learning-paths.data";
import React from "react";

// 1. Mock 'react-router' useLocation hook
vi.mock("react-router", () => ({
  useLocation: () => ({ pathname: "/opensource/learn" }),
}));

// 2. Mock api layer fetcher function
const mockFetchFirstPRProgress = vi.fn();
vi.mock("./api/opensource.api", () => ({
  fetchFirstPRProgress: () => mockFetchFirstPRProgress(),
}));

// 3. Mock data layer definitions and state helpers
const mockReadLearningPathMilestones = vi.fn();
const mockIsLearningPathItemComplete = vi.fn();

vi.mock("./learning-paths.data", async (importOriginal) => {
  const actual = await importOriginal<typeof import("./learning-paths.data")>();
  return {
    ...actual,
    readLearningPathMilestones: () => mockReadLearningPathMilestones(),
    isLearningPathItemComplete: (item: any, prs: any, milestones: any) => 
      mockIsLearningPathItemComplete(item, prs, milestones),
    getLearningPathById: (id: string) => ({
      id,
      items: [
        { slug: "lesson-1", estimatedMinutes: 10 },
        { slug: "lesson-2", estimatedMinutes: 15 },
      ],
    }),
    inferLearningPathId: () => "path-1",
  };
});

describe("LearningPathContext Unit Tests", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockFetchFirstPRProgress.mockResolvedValue(["pr-1"]);
    mockReadLearningPathMilestones.mockReturnValue(new Set(["milestone-1"]));
    mockIsLearningPathItemComplete.mockReturnValue(false);

    // Mock global localStorage operations cleanly
    const localStore: Record<string, string> = {};
    vi.spyOn(Storage.prototype, "getItem").mockImplementation((key) => localStore[key] || null);
    vi.spyOn(Storage.prototype, "setItem").mockImplementation((key, val) => {
      localStore[key] = String(val);
    });
    vi.spyOn(Storage.prototype, "removeItem").mockImplementation((key) => {
      delete localStore[key];
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <LearningPathProvider>{children}</LearningPathProvider>
  );

  // --- CRITERIA 1: Test progress initialization and refresh ---
  it("should refresh milestones and external PR milestones upon mount and refresh trigger", async () => {
    mockIsLearningPathItemComplete
      .mockReturnValueOnce(true)  // first item complete
      .mockReturnValueOnce(false); // second item incomplete

    const { result } = renderHook(() => useLearningPath(), { wrapper });

    // Initial mount triggers refreshProgress internally
    await act(async () => {
      await Promise.resolve(); // Flush API macro-tasks
    });

    expect(mockReadLearningPathMilestones).toHaveBeenCalled();
    expect(mockFetchFirstPRProgress).toHaveBeenCalled();
    expect(result.current.progress.completedCount).toBe(1);
    expect(result.current.progress.remainingMinutes).toBe(15);
  });

  // --- CRITERIA 2: Test LEARNING_PATH_PROGRESS_EVENT Custom Event listener ---
  it("should invoke internal progress refresh when the custom progress event is dispatched", async () => {
    renderHook(() => useLearningPath(), { wrapper });

    await act(async () => {
      // Clear mount counters to check the explicit event side-effects
      mockReadLearningPathMilestones.mockClear();
      
      const customProgressChangedEvent = new CustomEvent(LEARNING_PATH_PROGRESS_EVENT);
      window.dispatchEvent(customProgressChangedEvent);
    });

    expect(mockReadLearningPathMilestones).toHaveBeenCalledTimes(1);
  });

  // --- CRITERIA 3: Test Cross-Tab Storage Event Processing ---
  it("should process cross-tab updates when storage changes outside the tab context", async () => {
    renderHook(() => useLearningPath(), { wrapper });

    await act(async () => {
      mockReadLearningPathMilestones.mockClear();

      // Dispatch cross-tab simulation storage event
      const externalUpdateEvent = new StorageEvent("storage", {
        key: "some_other_progress_milestone",
        newValue: "completed",
      });
      window.dispatchEvent(externalUpdateEvent);
    });

    expect(mockReadLearningPathMilestones).toHaveBeenCalledTimes(1);
  });

  it("should completely ignore storage changes targeting only the path selection identifier", async () => {
    renderHook(() => useLearningPath(), { wrapper });

    await act(async () => {
      mockReadLearningPathMilestones.mockClear();

      // Dispatch selection swap storage event (which should be bypassed)
      const internalSelectionChangedEvent = new StorageEvent("storage", {
        key: LEARNING_PATH_SELECTED_KEY,
        newValue: "path-2",
      });
      window.dispatchEvent(internalSelectionChangedEvent);
    });

    // Should be skipped based on: if (event.key === LEARNING_PATH_SELECTED_KEY) return;
    expect(mockReadLearningPathMilestones).not.toHaveBeenCalled();
  });
});