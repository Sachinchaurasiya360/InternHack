import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { shutdownManager } from "./graceful-shutdown.js";

describe("GracefulShutdownManager", () => {
  beforeEach(() => {
    // Reset internal state using untyped access for testing
    (shutdownManager as any).hooks = [];
    (shutdownManager as any).shuttingDown = false;
    (shutdownManager as any).server = null;
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("should execute hooks in priority order", async () => {
    const order: number[] = [];

    shutdownManager.register({
      name: "Hook 20",
      priority: 20,
      fn: () => { order.push(20); }
    });
    
    shutdownManager.register({
      name: "Hook 5",
      priority: 5,
      fn: () => { order.push(5); }
    });

    shutdownManager.register({
      name: "Hook 10",
      priority: 10,
      fn: () => { order.push(10); }
    });

    const exitMock = vi.spyOn(process, "exit").mockImplementation((() => {}) as any);

    await shutdownManager.shutdown("SIGTERM");

    expect(order).toEqual([5, 10, 20]);
    expect(exitMock).toHaveBeenCalledWith(0);
  });

  it("should be idempotent (ignore duplicate signals)", async () => {
    const fn = vi.fn();
    shutdownManager.register({ name: "Idempotent Hook", priority: 10, fn });

    const exitMock = vi.spyOn(process, "exit").mockImplementation((() => {}) as any);

    void shutdownManager.shutdown("SIGTERM");
    void shutdownManager.shutdown("SIGINT");

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should force exit if hooks exceed timeout", async () => {
    shutdownManager.register({
      name: "Slow Hook",
      priority: 10,
      fn: async () => {
        await new Promise((resolve) => setTimeout(resolve, 60_000));
      }
    });

    const exitMock = vi.spyOn(process, "exit").mockImplementation((() => {}) as any);

    const shutdownPromise = shutdownManager.shutdown("SIGTERM");
    
    vi.advanceTimersByTime(30_000); // Default forceTimeoutMs
    expect(exitMock).toHaveBeenCalledWith(1);

    // Let the slow hook finish so the promise resolves cleanly
    vi.advanceTimersByTime(30_000);
    await shutdownPromise;
  });
});
