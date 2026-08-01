/**
 * @vitest-environment jsdom
 */

import { renderHook, cleanup } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useKeyboardNavigation } from "./useKeyboardNavigation";

const navigateMock = vi.fn();

vi.mock("react-router", () => ({
    useNavigate: () => navigateMock,
}));

describe("useKeyboardNavigation", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        cleanup();
    });

    it("navigates to the next path when ArrowRight is pressed", () => {
        renderHook(() =>
            useKeyboardNavigation({
                nextPath: "/next",
            })
        );

        window.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "ArrowRight",
            })
        );

        expect(navigateMock).toHaveBeenCalledWith("/next");
    });

    it("navigates to the previous path when ArrowLeft is pressed", () => {
        renderHook(() =>
            useKeyboardNavigation({
                prevPath: "/previous",
            })
        );

        window.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "ArrowLeft",
            })
        );

        expect(navigateMock).toHaveBeenCalledWith("/previous");
    });

    it("navigates to the next path when 'l' is pressed", () => {
        renderHook(() =>
            useKeyboardNavigation({
                nextPath: "/next",
            })
        );

        window.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "l",
            })
        );

        expect(navigateMock).toHaveBeenCalledWith("/next");
    });

    it("navigates to the previous path when 'h' is pressed", () => {
        renderHook(() =>
            useKeyboardNavigation({
                prevPath: "/previous",
            })
        );

        window.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "h",
            })
        );

        expect(navigateMock).toHaveBeenCalledWith("/previous");
    });

    it("does not navigate for unsupported keys", () => {
        renderHook(() =>
            useKeyboardNavigation({
                prevPath: "/previous",
                nextPath: "/next",
            })
        );

        window.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "Enter",
            })
        );

        expect(navigateMock).not.toHaveBeenCalled();
    });

    it("does not navigate when nextPath is not provided", () => {
        renderHook(() =>
            useKeyboardNavigation({})
        );

        window.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "ArrowRight",
            })
        );

        expect(navigateMock).not.toHaveBeenCalled();
    });

    it("does not navigate when prevPath is not provided", () => {
        renderHook(() =>
            useKeyboardNavigation({})
        );

        window.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "ArrowLeft",
            })
        );

        expect(navigateMock).not.toHaveBeenCalled();
    });

    it("does not navigate when Ctrl is pressed", () => {
        renderHook(() =>
            useKeyboardNavigation({
                nextPath: "/next",
            })
        );

        window.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "ArrowRight",
                ctrlKey: true,
            })
        );

        expect(navigateMock).not.toHaveBeenCalled();
    });

    it("does not navigate when Shift is pressed", () => {
        renderHook(() =>
            useKeyboardNavigation({
                nextPath: "/next",
            })
        );

        window.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "ArrowRight",
                shiftKey: true,
            })
        );

        expect(navigateMock).not.toHaveBeenCalled();
    });

    it("does not navigate when Alt is pressed", () => {
        renderHook(() =>
            useKeyboardNavigation({
                nextPath: "/next",
            })
        );

        window.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "ArrowRight",
                altKey: true,
            })
        );

        expect(navigateMock).not.toHaveBeenCalled();
    });

    it("does not navigate when Meta is pressed", () => {
        renderHook(() =>
            useKeyboardNavigation({
                nextPath: "/next",
            })
        );

        window.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "ArrowRight",
                metaKey: true,
            })
        );

        expect(navigateMock).not.toHaveBeenCalled();
    });

    it("removes the keyboard listener on unmount", () => {
        const { unmount } = renderHook(() =>
            useKeyboardNavigation({
                nextPath: "/next",
            })
        );

        unmount();

        window.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "ArrowRight",
            })
        );

        expect(navigateMock).not.toHaveBeenCalled();
    });

    it("does not navigate when typing in an input element", () => {
        renderHook(() =>
            useKeyboardNavigation({
                nextPath: "/next",
            })
        );

        const input = document.createElement("input");

        input.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "ArrowRight",
                bubbles: true,
            })
        );

        expect(navigateMock).not.toHaveBeenCalled();
    });

    it("does not navigate when typing in a textarea", () => {
        renderHook(() =>
            useKeyboardNavigation({
                nextPath: "/next",
            })
        );

        const textarea = document.createElement("textarea");

        textarea.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "ArrowRight",
                bubbles: true,
            })
        );

        expect(navigateMock).not.toHaveBeenCalled();
    });

    it("does not navigate when editing contenteditable elements", () => {
        renderHook(() =>
            useKeyboardNavigation({
                nextPath: "/next",
            })
        );

        const div = document.createElement("div");
        div.contentEditable = "true";

        div.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: "ArrowRight",
                bubbles: true,
            })
        );

        expect(navigateMock).not.toHaveBeenCalled();
    });

});
