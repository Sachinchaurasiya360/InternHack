import type { Server } from "http";
import { createLogger } from "./logger.js";

const logger = createLogger("GracefulShutdown");

/**
 * A shutdown hook is a named cleanup function with a priority.
 * Lower priority numbers run first.
 *
 * Recommended priority bands:
 *   0  – stop accepting connections (server.close)
 *  10  – stop cron jobs & background workers
 *  20  – disconnect external services (DB)
 */
export interface ShutdownHook {
  /** Human-readable label for logging */
  name: string;
  /** Cleanup function — may be sync or async */
  fn: () => Promise<void> | void;
  /** Execution order (lower = earlier). Default: 10 */
  priority: number;
}

/**
 * Centralized shutdown manager.
 *
 * Services register cleanup hooks at startup; on SIGTERM/SIGINT the manager
 * executes them in priority order, then exits.
 *
 * The manager is idempotent — multiple signals won't trigger duplicate runs.
 */
class GracefulShutdownManager {
  private hooks: ShutdownHook[] = [];
  private shuttingDown = false;
  private server: Server | null = null;

  /** How long to wait for hooks before force-killing (ms). */
  private readonly forceTimeoutMs: number;

  constructor(forceTimeoutMs = 30_000) {
    this.forceTimeoutMs = forceTimeoutMs;
  }

  // ── Public API ──────────────────────────────────────────────

  /** Register a shutdown hook. */
  register(hook: ShutdownHook): void {
    this.hooks.push(hook);
  }

  /** Attach the HTTP server so it can be closed during shutdown. */
  attachServer(server: Server): void {
    this.server = server;
  }

  /** Returns `true` once shutdown has been initiated. */
  isShutdown(): boolean {
    return this.shuttingDown;
  }

  /**
   * Run all hooks in priority order, then exit.
   *
   * Safe to call multiple times — only the first invocation runs.
   */
  async shutdown(signal: string): Promise<void> {
    if (this.shuttingDown) {
      logger.warn("Shutdown already in progress, ignoring duplicate signal", { signal });
      return;
    }
    this.shuttingDown = true;
    logger.info(`Received ${signal} — starting graceful shutdown`);

    // Safety net: force-kill if hooks take too long
    const forceTimer = setTimeout(() => {
      logger.error("Shutdown timed out — forcing exit");
      process.exit(1);
    }, this.forceTimeoutMs);
    // Don't keep the process alive just for this timer
    forceTimer.unref();

    // Phase 1: stop accepting new connections
    if (this.server) {
      await new Promise<void>((resolve) => {
        logger.info("Closing HTTP server (draining in-flight requests)…");
        this.server!.close(() => {
          logger.info("HTTP server closed");
          resolve();
        });
      });
    }

    // Phase 2+: run registered hooks in priority order
    const sorted = [...this.hooks].sort((a, b) => a.priority - b.priority);

    for (const hook of sorted) {
      try {
        logger.info(`Running hook: ${hook.name}`);
        await hook.fn();
        logger.info(`Hook completed: ${hook.name}`);
      } catch (err) {
        // Log but don't abort — continue with remaining hooks
        logger.error(`Hook failed: ${hook.name}`, err);
      }
    }

    clearTimeout(forceTimer);
    logger.info("Graceful shutdown complete — exiting");
    process.exit(0);
  }

  /**
   * Install SIGTERM and SIGINT handlers.
   *
   * Call this once after all hooks are registered.
   */
  installSignalHandlers(): void {
    const handler = (signal: string) => {
      void this.shutdown(signal);
    };

    process.on("SIGTERM", () => handler("SIGTERM"));
    process.on("SIGINT", () => handler("SIGINT"));

    logger.info("Signal handlers installed (SIGTERM, SIGINT)");
  }
}

/** Singleton instance — import and use across the application. */
export const shutdownManager = new GracefulShutdownManager();
