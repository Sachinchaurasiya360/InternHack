export interface LogEntry {
  type: "log" | "warn" | "error" | "info";
  args: string[];
}

export interface PyRunResult {
  logs: LogEntry[];
  error?: string;
  timeMs: number;
}

const DEFAULT_TIMEOUT = 5000;
const PYODIDE_CDN = "https://cdn.jsdelivr.net/pyodide/v0.27.5/full/";

type PyodideInstance = {
  runPython: (code: string) => unknown;
  runPythonAsync: (code: string) => Promise<unknown>;
};

type PyodideWindow = Window & {
  loadPyodide?: (opts: { indexURL: string }) => Promise<PyodideInstance>;
};

let pyodidePromise: Promise<PyodideInstance> | null = null;
let pyodideReady = false;

function loadPyodide(): Promise<PyodideInstance> {
  if (pyodidePromise) return pyodidePromise;

  pyodidePromise = (async () => {
    try {
      const win = window as PyodideWindow;
      if (!win.loadPyodide) {
        const script = document.createElement("script");
        script.src = `${PYODIDE_CDN}pyodide.js`;
        script.async = true;
        await new Promise<void>((res, rej) => {
          script.onload = () => res();
          script.onerror = () => rej(new Error("Failed to load Pyodide from CDN"));
          document.head.appendChild(script);
        });
      }

      const pyodide = await (window as PyodideWindow).loadPyodide!({
        indexURL: PYODIDE_CDN,
      });
      pyodideReady = true;
      return pyodide;
    } catch (err) {
      pyodidePromise = null;
      throw err;
    }
  })();

  return pyodidePromise;
}

class PythonEngine {
  /** Begin loading Pyodide in the background. */
  preload(): void {
    loadPyodide().catch((err) => {
      console.error("[PythonEngine] Failed to preload Pyodide:", err);
    });
  }

  isReady(): boolean {
    return pyodideReady;
  }

  async execute(code: string, timeout = DEFAULT_TIMEOUT): Promise<PyRunResult> {
    const start = performance.now();
    const logs: LogEntry[] = [];

    try {
      const pyodide = await Promise.race([
        loadPyodide(),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("Pyodide loading timed out")), 15000)
        ),
      ]);

      // Redirect stdout/stderr
      pyodide.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`);

      // Execute user code with timeout
      await Promise.race([
        (async () => {
          await pyodide.runPythonAsync(code);
        })(),
        new Promise<never>((_, reject) =>
          setTimeout(
            () => reject(new Error(`Execution timed out (exceeded ${timeout}ms). Possible infinite loop.`)),
            timeout
          )
        ),
      ]);

      // Capture output
      const stdout = String(pyodide.runPython("sys.stdout.getvalue()"));
      const stderr = String(pyodide.runPython("sys.stderr.getvalue()"));

      if (stdout) {
        for (const line of stdout.split("\n")) {
          if (line !== "") logs.push({ type: "log", args: [line] });
        }
        // Preserve trailing newline awareness - if stdout ends with \n and last line is empty, don't add extra
      }

      if (stderr) {
        logs.push({ type: "error", args: [stderr.trim()] });
      }

      // Reset stdout/stderr
      pyodide.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`);

      return {
        logs,
        timeMs: Math.round((performance.now() - start) * 100) / 100,
      };
    } catch (err: unknown) {
      // Try to reset stdout/stderr on error
      try {
        const pyodide = await loadPyodide();
        pyodide.runPython(`
import sys
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`);
      } catch { /* ignore reset failure */ }

      // Extract clean error message from Pyodide traceback
      const rawMessage = err instanceof Error ? err.message : String(err);
      const tbMatch = rawMessage.match(/(?:^|\n)((?:Traceback|.*Error|.*Exception)[\s\S]*)/);
      const message = tbMatch ? tbMatch[1].trim() : rawMessage;

      return {
        logs,
        error: message,
        timeMs: Math.round((performance.now() - start) * 100) / 100,
      };
    }
  }
}

export const pythonEngine = new PythonEngine();
