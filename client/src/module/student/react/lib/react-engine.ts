import { jsEngine } from "../../javascript/lib/js-engine";
import type { JsRunResult } from "../../javascript/lib/js-engine";
import { transform } from "sucrase";

export type ReactRunResult = JsRunResult;

class ReactEngine {
  async execute(code: string, timeout = 5000): Promise<ReactRunResult> {
    try {
      const result = transform(code, {
        transforms: ["jsx", "typescript"],
        jsxRuntime: "classic",
        disableESTransforms: true,
      });
      return jsEngine.execute(result.code, timeout);
    } catch (e: unknown) {
      return {
        logs: [],
        error: e instanceof Error ? e.message : String(e),
        timeMs: 0,
      };
    }
  }
}

export const reactEngine = new ReactEngine();
