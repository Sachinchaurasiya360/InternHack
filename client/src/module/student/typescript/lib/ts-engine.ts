import { jsEngine } from "../../javascript/lib/js-engine";
import type { JsRunResult } from "../../javascript/lib/js-engine";
import { transform } from "sucrase";

export type TsRunResult = JsRunResult;

class TsEngine {
  async execute(code: string, timeout = 5000): Promise<TsRunResult> {
    try {
      const result = transform(code, {
        transforms: ["typescript"],
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

export const tsEngine = new TsEngine();
