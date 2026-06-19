// @vitest-environment jsdom
import { render, screen, act, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { LearningPathProvider, useLearningPath } from "./learning-paths.context";
import { LEARNING_PATH_PROGRESS_EVENT, LEARNING_PATH_SELECTED_KEY } from "./learning-paths.data";
import React from "react";

vi.mock("react-router", () => ({
  useLocation: () => ({ pathname: "/opensource/learn" }),
}));

const mockFetchFirstPRProgress = vi.fn();
vi.mock("./api/opensource.api", () => ({
  fetchFirstPRProgress: () => mockFetchFirstPRProgress(),
}));

const mockReadLearningPathMilestones = vi.fn();
const mockIsLearningPathItemComplete = vi.fn();

vi.mock("./learning-paths.data", async (importOriginal) => {
  const actual = await importOriginal<typeof import("./learning-paths.data")>();
  return {
    ...actual,
    readLearningPathMilestones: () => mockReadLearningPathMilestones(),
    isLearningPathItemComplete: (item: unknown, prs: unknown, milestones: unknown) => 
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

function TestComponent() {
  const { progress } = useLearningPath();
  return (
    <div>
      <span data-testid="completed-count">{progress.completedCount}</span>
      <span data-testid="remaining-minutes">{progress.remainingMinutes}</span>
    </div>
  );
}

describe("LearningPathContext Unit Tests", () => {
  beforeEach(() => {
    mockFetchFirstPRProgress.mockResolvedValue(["pr-1"]);
    mockReadLearningPathMilestones.mockReturnValue(new Set(["milestone-1"]));
    mockIsLearningPathItemComplete.mockReturnValue(false);

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
    cleanup();
    vi.restoreAllMocks();
  });

  it("should refresh milestones and external PR milestones upon mount", async () => {
    mockIsLearningPathItemComplete.mockImplementation((item: unknown) => {
      if (item && typeof item === "object" && "slug" in item && item.slug === "lesson-1") {
        return true;
      }
      return false;
    });

    await act(async () => {
      render(
        <LearningPathProvider>
          <TestComponent />
        </LearningPathProvider>
      );
    });

    const completedElement = await screen.findByTestId("completed-count");
    const remainingElement = await screen.findByTestId("remaining-minutes");

    expect(completedElement.textContent).toBe("1");
    expect(remainingElement.textContent).toBe("15");
    expect(mockReadLearningPathMilestones).toHaveBeenCalled();
  });

  it("should invoke internal progress refresh when custom event is dispatched", async () => {
    await act(async () => {
      render(
        <LearningPathProvider>
          <TestComponent />
        </LearningPathProvider>
      );
    });

    mockReadLearningPathMilestones.mockClear();

    await act(async () => {
      const customEvent = new CustomEvent(LEARNING_PATH_PROGRESS_EVENT);
      window.dispatchEvent(customEvent);
    });

    expect(mockReadLearningPathMilestones).toHaveBeenCalledTimes(1);
  });

  it("should process cross-tab updates when storage changes", async () => {
    await act(async () => {
      render(
        <LearningPathProvider>
          <TestComponent />
        </LearningPathProvider>
      );
    });

    mockReadLearningPathMilestones.mockClear();

    await act(async () => {
      const storageEvent = new StorageEvent("storage", {
        key: "some_other_progress_milestone",
        newValue: "completed",
      });
      window.dispatchEvent(storageEvent);
    });

    expect(mockReadLearningPathMilestones).toHaveBeenCalledTimes(1);
  });

  it("should completely ignore storage changes targeting only the path selection identifier", async () => {
    await act(async () => {
      render(
        <LearningPathProvider>
          <TestComponent />
        </LearningPathProvider>
      );
    });

    mockReadLearningPathMilestones.mockClear();

    await act(async () => {
      const internalSelectionChangedEvent = new StorageEvent("storage", {
        key: LEARNING_PATH_SELECTED_KEY,
        newValue: "path-2",
      });
      window.dispatchEvent(internalSelectionChangedEvent);
    });

    expect(mockReadLearningPathMilestones).not.toHaveBeenCalled();
  });
});