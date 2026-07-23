/**
 * @vitest-environment jsdom
 */

import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { useDebounce } from "./useDebounce";

describe("useDebounce", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("returns the initial value immediately", () => {
        const { result } = renderHook(() =>
            useDebounce("initial", 500)
        );

        expect(result.current).toBe("initial");
    });

    it("updates the debounced value only after the specified delay", () => {
        const { result, rerender } = renderHook(
            ({ value }) => useDebounce(value, 500),
            {
                initialProps: {
                    value: "hello",
                },
            }
        );

        rerender({
            value: "world",
        });

        expect(result.current).toBe("hello");

        act(() => {
            vi.advanceTimersByTime(499);
        });

        expect(result.current).toBe("hello");

        act(() => {
            vi.advanceTimersByTime(1);
        });

        expect(result.current).toBe("world");
    });

    it("cancels the previous timeout when the value changes rapidly", () => {
        const { result, rerender } = renderHook(
            ({ value }) => useDebounce(value, 500),
            {
                initialProps: { value: "A" },
            }
        );

        rerender({ value: "B" });

        act(() => {
            vi.advanceTimersByTime(300);
        });

        rerender({ value: "C" });

        act(() => {
            vi.advanceTimersByTime(200);
        });

        // First timeout should have been cancelled
        expect(result.current).toBe("A");

        act(() => {
            vi.advanceTimersByTime(300);
        });

        expect(result.current).toBe("C");
    });

    it("handles multiple consecutive value changes", () => {
        const { result, rerender } = renderHook(
            ({ value }) => useDebounce(value, 500),
            {
                initialProps: { value: "1" },
            }
        );

        rerender({ value: "2" });
        rerender({ value: "3" });
        rerender({ value: "4" });

        act(() => {
            vi.advanceTimersByTime(500);
        });

        expect(result.current).toBe("4");
    });

    it("cleans up pending timers on component unmount", () => {
        const clearTimeoutSpy = vi.spyOn(globalThis, "clearTimeout");

        const { rerender, unmount } = renderHook(
            ({ value }) => useDebounce(value, 500),
            {
                initialProps: { value: "hello" },
            }
        );

        rerender({ value: "world" });

        unmount();

        expect(clearTimeoutSpy).toHaveBeenCalled();

        clearTimeoutSpy.mockRestore();
    });
});

