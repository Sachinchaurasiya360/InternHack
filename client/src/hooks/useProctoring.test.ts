/**
 * @vitest-environment jsdom
 */
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useProctoring } from "./useProctoring";

// Mock API_BASE for fetch
vi.mock("../lib/axios", () => ({
  API_BASE: "http://localhost/api",
}));

// Mock toast to prevent errors
vi.mock("../components/ui/toast", () => ({
  default: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetchMock = vi.fn((_input: RequestInfo | URL, _init?: RequestInit) => Promise.resolve(new Response()));

describe("useProctoring incremental flush", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
    globalThis.fetch = fetchMock as unknown as typeof fetch;
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("flushes violation queue on interval", () => {
    const { result } = renderHook(() =>
      useProctoring({
        enabled: true,
        testId: 1,
        onTerminate: vi.fn(),
      })
    );

    // Queue some events
    act(() => {
      // Simulate tab switch (we need to trigger a violation)
      // We can do this by calling registerCameraEvent
      result.current.registerCameraEvent("camera_track_ended");
      result.current.registerFaceViolation({ type: "NO_FACE", timestamp: new Date().toISOString() });
    });

    // We should have 2 events in queue
    expect(fetchMock).not.toHaveBeenCalled();

    // Fast forward 10s
    act(() => {
      vi.advanceTimersByTime(10000);
    });

    // Should flush queue
    expect(fetchMock).toHaveBeenCalledTimes(1);
    
    // Check fetch payload
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("http://localhost/api/skill-tests/1/proctor-logs");
    expect(init.keepalive).toBe(true);
    expect(init.credentials).toBe("include");
    
    const body = JSON.parse(init.body as string);
    expect(body.events.length).toBe(2);
    expect(body.events[0].type).toBe("camera_track_ended");
    expect(body.events[1].type).toBe("face_violation");
    expect(body.events[1].detail).toBe("NO_FACE");
  });

  it("does not flush if queue is empty", () => {
    renderHook(() =>
      useProctoring({
        enabled: true,
        testId: 1,
        onTerminate: vi.fn(),
      })
    );

    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("does not flush if testId is missing", () => {
    const { result } = renderHook(() =>
      useProctoring({
        enabled: true,
        onTerminate: vi.fn(),
      })
    );

    act(() => {
      result.current.registerCameraEvent("camera_track_muted");
      vi.advanceTimersByTime(10000);
    });

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("unshifts events back to queue on fetch failure", async () => {
    fetchMock.mockRejectedValueOnce(new Error("Network Error"));

    const { result } = renderHook(() =>
      useProctoring({
        enabled: true,
        testId: 1,
        onTerminate: vi.fn(),
      })
    );

    act(() => {
      result.current.registerCameraEvent("camera_track_ended");
      vi.advanceTimersByTime(10000);
    });

    // Wait for the promise rejection to resolve
    await act(async () => {
      await Promise.resolve();
    });

    // Expect queue to be restored, meaning next flush will send it again
    fetchMock.mockResolvedValueOnce(new Response());
    
    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(fetchMock).toHaveBeenCalledTimes(2);
    const [, init] = fetchMock.mock.calls[1] as [string, RequestInit];
    const body = JSON.parse(init.body as string);
    expect(body.events.length).toBe(1);
    expect(body.events[0].type).toBe("camera_track_ended");
  });

  it("flushes on unmount", () => {
    const { result, unmount } = renderHook(() =>
      useProctoring({
        enabled: true,
        testId: 1,
        onTerminate: vi.fn(),
      })
    );

    act(() => {
      result.current.registerCameraEvent("camera_track_ended");
    });

    unmount();

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
