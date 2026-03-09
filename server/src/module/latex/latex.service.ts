import { spawn } from "child_process";
import { writeFile, readFile, unlink } from "fs/promises";
import path from "path";
import os from "os";
import crypto from "crypto";

const COMPILE_TIMEOUT = 30_000; // 30 seconds
const ONLINE_API = "https://latex.ytotech.com/builds/sync";

export class LatexService {
  private pdflatexAvailable: boolean | null = null;

  async compile(source: string): Promise<Buffer> {
    // Try local pdflatex first (if not already known to be missing)
    if (this.pdflatexAvailable !== false) {
      try {
        const result = await this.compileLocal(source);
        this.pdflatexAvailable = true;
        return result;
      } catch (err) {
        if (err instanceof Error && err.message.includes("pdflatex not found")) {
          this.pdflatexAvailable = false;
          // Fall through to online compilation
        } else {
          throw err; // Real compilation error — don't fallback
        }
      }
    }

    // Fallback: online LaTeX compilation API
    return this.compileOnline(source);
  }

  private async compileLocal(source: string): Promise<Buffer> {
    const jobId = crypto.randomUUID();
    const tmpDir = os.tmpdir();
    const texFile = path.join(tmpDir, `latex-${jobId}.tex`);
    const pdfFile = path.join(tmpDir, `latex-${jobId}.pdf`);

    try {
      await writeFile(texFile, source, "utf-8");
      await this.runPdflatex(texFile, tmpDir);
      const pdf = await readFile(pdfFile);
      return pdf;
    } finally {
      const extensions = [".tex", ".pdf", ".aux", ".log", ".out", ".toc", ".nav", ".snm"];
      await Promise.allSettled(
        extensions.map((ext) =>
          unlink(path.join(tmpDir, `latex-${jobId}${ext}`))
        )
      );
    }
  }

  private async compileOnline(source: string): Promise<Buffer> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), COMPILE_TIMEOUT);

    try {
      const response = await fetch(ONLINE_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          compiler: "pdflatex",
          resources: [{ main: true, content: source }],
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        const text = await response.text();
        // Parse the API error to extract a clean message
        try {
          const parsed = JSON.parse(text);
          if (parsed.log_files) {
            // Extract meaningful error lines from log files
            const logContent = Object.values(parsed.log_files).join("\n");
            const errorLines = logContent
              .split("\n")
              .filter((l: string) => l.startsWith("!") || (l.includes("Error") && !l.includes("error style")))
              .slice(0, 5)
              .map((l: string) => l.replace(/^!\s*/, "").trim())
              .filter(Boolean);
            if (errorLines.length > 0) {
              throw new Error(`LaTeX compilation failed:\n${errorLines.join("\n")}`);
            }
          }
          throw new Error(`LaTeX compilation failed: ${parsed.error || "Unknown error"}`);
        } catch (parseErr) {
          if (parseErr instanceof Error && parseErr.message.includes("LaTeX compilation failed")) {
            throw parseErr;
          }
          throw new Error(`LaTeX compilation failed: Server returned status ${response.status}`);
        }
      }

      const arrayBuffer = await response.arrayBuffer();
      return Buffer.from(arrayBuffer);
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        throw new Error("Online LaTeX compilation timed out (30s limit)");
      }
      throw err;
    } finally {
      clearTimeout(timeout);
    }
  }

  private runPdflatex(texFile: string, outputDir: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const child = spawn(
        "pdflatex",
        [
          "-interaction=nonstopmode",
          "-no-shell-escape",
          `-output-directory=${outputDir}`,
          texFile,
        ],
        { timeout: COMPILE_TIMEOUT }
      );

      let stdout = "";
      let stderr = "";

      child.stdout.on("data", (data) => {
        stdout += data.toString();
      });
      child.stderr.on("data", (data) => {
        stderr += data.toString();
      });

      const timer = setTimeout(() => {
        child.kill("SIGKILL");
        reject(new Error("LaTeX compilation timed out (30s limit)"));
      }, COMPILE_TIMEOUT);

      child.on("error", (err) => {
        clearTimeout(timer);
        if ((err as NodeJS.ErrnoException).code === "ENOENT") {
          reject(new Error("pdflatex not found"));
        } else {
          reject(new Error(`Failed to start pdflatex: ${err.message}`));
        }
      });

      child.on("close", (code) => {
        clearTimeout(timer);
        if (code === 0) {
          resolve();
        } else {
          const errorLines = stdout
            .split("\n")
            .filter((l) => l.startsWith("!") || l.includes("Error"))
            .slice(0, 5)
            .join("\n");
          reject(
            new Error(
              `LaTeX compilation failed:\n${errorLines || stderr || "Unknown error (exit code " + code + ")"}`
            )
          );
        }
      });
    });
  }
}
