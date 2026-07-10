// Runs student DSA submissions entirely in the browser — a Web Worker for
// JavaScript, a Pyodide (WASM Python) worker for Python. The server never
// executes untrusted code; it only receives the captured stdout per test
// case and compares it against the stored expected output.
//
// Each language gets one persistent worker reused across every test case in
// a submission (avoids paying Pyodide's ~1-3s load cost per test case). A
// per-test-case timeout hard-terminates the worker — Worker.terminate() is a
// forced kill at the browser-engine level, so it stops a genuine infinite
// loop even though cooperative cancellation (e.g. an interrupt buffer) isn't
// wired up. The next run simply spins up a fresh worker.

const PYODIDE_CDN = "https://cdn.jsdelivr.net/pyodide/v0.27.5/full/";

const JS_WORKER_SRC = `
self.onmessage = async function (e) {
  var id = e.data.id;
  var code = e.data.code;
  var input = e.data.input;
  if (e.data.warmupOnly) return;

  var logs = [];
  var stringifyArg = function (a) {
    if (a === null) return "null";
    if (a === undefined) return "undefined";
    if (typeof a === "object") { try { return JSON.stringify(a); } catch (e2) { return String(a); } }
    return String(a);
  };
  var originalLog = console.log;
  console.log = function () {
    var parts = [];
    for (var i = 0; i < arguments.length; i++) parts.push(stringifyArg(arguments[i]));
    logs.push(parts.join(" "));
  };

  var lines = String(input == null ? "" : input).split("\\n");
  var lineIdx = 0;
  function readLine() { return lineIdx < lines.length ? lines[lineIdx++] : ""; }

  try {
    var fn = new Function("input", "readLine", "return (async function () {\\n" + code + "\\n})();");
    await fn(input, readLine);
    self.postMessage({ id: id, output: logs.join("\\n") });
  } catch (err) {
    self.postMessage({ id: id, output: logs.join("\\n"), error: (err && err.message) ? err.message : String(err) });
  } finally {
    console.log = originalLog;
  }
};
`;

const PY_WORKER_SRC = `
importScripts("${PYODIDE_CDN}pyodide.js");
var pyodidePromise = null;
function ensurePyodide() {
  if (!pyodidePromise) {
    pyodidePromise = loadPyodide({ indexURL: "${PYODIDE_CDN}" });
  }
  return pyodidePromise;
}

var RESET_GLOBALS = "import sys as _s\\nfor _k in list(_s.modules['__main__'].__dict__.keys()):\\n    if not _k.startswith('_'):\\n        del _s.modules['__main__'].__dict__[_k]\\n";

self.onmessage = async function (e) {
  var id = e.data.id;
  var code = e.data.code;
  var input = e.data.input;

  try {
    var pyodide = await ensurePyodide();
    if (e.data.warmupOnly) return;

    var lines = String(input == null ? "" : input).split("\\n");
    var lineIdx = 0;
    var output = "";
    pyodide.setStdin({ stdin: function () { return lineIdx < lines.length ? lines[lineIdx++] : undefined; } });
    pyodide.setStdout({ batched: function (s) { output += s + "\\n"; } });
    pyodide.setStderr({ batched: function () {} });

    try { pyodide.runPython(RESET_GLOBALS); } catch (resetErr) { /* best-effort isolation between test cases */ }

    await pyodide.runPythonAsync(code);

    self.postMessage({ id: id, output: output.replace(/\\n$/, "") });
  } catch (err) {
    var rawMessage = (err && err.message) ? err.message : String(err);
    var tbMatch = rawMessage.match(/(?:^|\\n)((?:Traceback|.*Error|.*Exception)[\\s\\S]*)/);
    var message = tbMatch ? tbMatch[1].trim() : rawMessage;
    self.postMessage({ id: id, output: "", error: message });
  }
};
`;

interface WorkerResult {
  actual: string;
  timeMs: number;
  error?: string;
}

interface PendingEntry {
  timer: ReturnType<typeof setTimeout>;
  resolve: (result: { output: string; error?: string }) => void;
}

abstract class WorkerRunner {
  private worker: Worker | null = null;
  private nextId = 1;
  private pending = new Map<number, PendingEntry>();

  protected abstract workerSource(): string;
  protected abstract defaultTimeoutMs(): number;

  private ensureWorker(): Worker {
    if (this.worker) return this.worker;

    const blob = new Blob([this.workerSource()], { type: "application/javascript" });
    const worker = new Worker(URL.createObjectURL(blob));

    worker.onmessage = (e: MessageEvent) => {
      const { id, output, error } = e.data as { id: number; output: string; error?: string };
      const entry = this.pending.get(id);
      if (!entry) return;
      this.pending.delete(id);
      clearTimeout(entry.timer);
      entry.resolve({ output, error });
    };

    worker.onerror = () => {
      for (const entry of this.pending.values()) {
        clearTimeout(entry.timer);
        entry.resolve({ output: "", error: "Runtime crashed unexpectedly" });
      }
      this.pending.clear();
      this.terminate();
    };

    this.worker = worker;
    return worker;
  }

  private terminate(): void {
    this.worker?.terminate();
    this.worker = null;
  }

  /** Fire-and-forget: start warming up the runtime before the student clicks Run. */
  warm(): void {
    this.ensureWorker().postMessage({ id: 0, warmupOnly: true });
  }

  async runTestCase(code: string, input: string, timeoutMs = this.defaultTimeoutMs()): Promise<WorkerResult> {
    const worker = this.ensureWorker();
    const id = this.nextId++;
    const start = performance.now();

    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        this.terminate(); // hard kill — the only reliable way to stop a genuine infinite loop
        resolve({ actual: "", timeMs: timeoutMs, error: "Time Limit Exceeded" });
      }, timeoutMs);

      this.pending.set(id, {
        timer,
        resolve: ({ output, error }) =>
          resolve({ actual: output, timeMs: Math.round(performance.now() - start), error }),
      });

      worker.postMessage({ id, code, input });
    });
  }
}

class JsRunner extends WorkerRunner {
  protected defaultTimeoutMs(): number { return 5000; }
  protected workerSource(): string { return JS_WORKER_SRC; }
}

class PyRunner extends WorkerRunner {
  protected defaultTimeoutMs(): number { return 8000; } // WASM interpreter start + execution
  protected workerSource(): string { return PY_WORKER_SRC; }
}

const jsRunner = new JsRunner();
const pyRunner = new PyRunner();

export type DsaRunLanguage = "javascript" | "python";

export interface DsaRunTestCaseInput {
  id: number;
  input: string;
  label?: string | null;
}

export interface DsaRunTestCaseOutput {
  testCaseId: number;
  actual: string;
  timeMs: number;
  error?: string;
}

/** Begin loading the runtime for `language` in the background (call on mount / language switch). */
export function warmDsaRuntime(language: DsaRunLanguage): void {
  (language === "python" ? pyRunner : jsRunner).warm();
}

/**
 * Runs `code` against each test case in the browser, sequentially. Stops at
 * the first error/timeout (mirrors a real judge: remaining cases are simply
 * absent from the result and the server marks them "Not executed").
 */
export async function runTestCasesInBrowser(
  language: DsaRunLanguage,
  code: string,
  testCases: DsaRunTestCaseInput[],
): Promise<DsaRunTestCaseOutput[]> {
  const runner = language === "python" ? pyRunner : jsRunner;
  const results: DsaRunTestCaseOutput[] = [];

  for (const tc of testCases) {
    const { actual, timeMs, error } = await runner.runTestCase(code, tc.input);
    results.push({ testCaseId: tc.id, actual, timeMs, error });
    if (error) break;
  }

  return results;
}
