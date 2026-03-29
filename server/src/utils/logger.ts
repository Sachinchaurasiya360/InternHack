/**
 * Lightweight structured logger.
 * Wraps console methods with consistent prefix + JSON context.
 * Swap this file for pino/winston in production without touching call sites.
 */

function fmt(level: string, module: string, msg: string, meta?: unknown): string {
  const ts = new Date().toISOString();
  const base = `${ts} [${level}] [${module}] ${msg}`;
  return meta ? `${base} ${JSON.stringify(meta)}` : base;
}

export function createLogger(module: string) {
  return {
    info(msg: string, meta?: unknown) {
      console.log(fmt("INFO", module, msg, meta));
    },
    warn(msg: string, meta?: unknown) {
      console.warn(fmt("WARN", module, msg, meta));
    },
    error(msg: string, error?: unknown, meta?: unknown) {
      const errInfo = error instanceof Error
        ? { message: error.message, stack: error.stack }
        : error;
      console.error(fmt("ERROR", module, msg, meta ?? errInfo));
    },
  };
}
