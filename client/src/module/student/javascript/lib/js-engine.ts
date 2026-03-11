export interface LogEntry {
  type: "log" | "warn" | "error" | "info";
  args: string[];
}

export interface JsRunResult {
  logs: LogEntry[];
  error?: string;
  timeMs: number;
}

const DEFAULT_TIMEOUT = 5000;

class JsEngine {
  async execute(code: string, timeout = DEFAULT_TIMEOUT): Promise<JsRunResult> {
    return new Promise((resolve) => {
      const start = performance.now();
      const iframe = document.createElement("iframe");
      iframe.setAttribute("sandbox", "allow-scripts");
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      let settled = false;
      const logs: LogEntry[] = [];

      const cleanup = () => {
        window.removeEventListener("message", onMessage);
        clearTimeout(timer);
        if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
      };

      const finish = (error?: string) => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve({
          logs,
          error,
          timeMs: Math.round((performance.now() - start) * 100) / 100,
        });
      };

      const timer = setTimeout(() => {
        finish("Execution timed out (exceeded " + timeout + "ms). Possible infinite loop.");
      }, timeout);

      const onMessage = (event: MessageEvent) => {
        if (event.source !== iframe.contentWindow) return;
        const data = event.data;
        if (!data || typeof data.type !== "string") return;

        if (data.type === "__js_log") {
          logs.push({ type: data.level, args: data.args });
        } else if (data.type === "__js_done") {
          finish();
        } else if (data.type === "__js_error") {
          finish(data.message);
        }
      };

      window.addEventListener("message", onMessage);

      const html = `<!DOCTYPE html><html><body><script>
var _post = function(level, args) {
  parent.postMessage({
    type: "__js_log",
    level: level,
    args: args.map(function(a) {
      try {
        if (a === null) return "null";
        if (a === undefined) return "undefined";
        if (typeof a === "object") return JSON.stringify(a, null, 2);
        return String(a);
      } catch(e) { return String(a); }
    })
  }, "*");
};
console.log   = function() { _post("log",   Array.from(arguments)); };
console.warn  = function() { _post("warn",  Array.from(arguments)); };
console.error = function() { _post("error", Array.from(arguments)); };
console.info  = function() { _post("info",  Array.from(arguments)); };

(async function() {
  try {
${code}
  } catch(e) {
    parent.postMessage({ type: "__js_error", message: e.message || String(e) }, "*");
    return;
  }
  parent.postMessage({ type: "__js_done" }, "*");
})();
<\/script></body></html>`;

      iframe.srcdoc = html;
    });
  }
}

export const jsEngine = new JsEngine();
