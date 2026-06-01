/**
 * Lightweight structured logger.
 * Wraps console methods with consistent prefix + JSON context.
 * Swap this file for pino/winston in production without touching call sites.
 */

import pino from "pino";

const isDev = process.env.NODE_ENV !== "production";

// Create a single root logger
const rootLogger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: isDev
    ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:standard",
          ignore: "pid,hostname",
        },
      }
    : undefined,
});

export function createLogger(moduleName: string) {
  const logger = rootLogger.child({ module: moduleName });
  return {
    info(msg: string, meta?: unknown) {
      if (meta) { logger.info(meta, msg); } else { logger.info(msg); }
    },
    warn(msg: string, meta?: unknown) {
      if (meta) { logger.warn(meta, msg); } else { logger.warn(msg); }
    },
    error(msg: string, error?: unknown, meta?: unknown) {
      const errInfo =
        error instanceof Error
          ? { err: { message: error.message, stack: error.stack } }
          : { err: error };
          
      const payload = meta ? { ...errInfo, ...(meta as object) } : errInfo;
      logger.error(payload, msg);
    },
  };
}
