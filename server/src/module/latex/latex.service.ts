import { spawn } from "child_process";
import { writeFile, readFile, unlink } from "fs/promises";
import path from "path";
import os from "os";
import crypto from "crypto";

const COMPILE_TIMEOUT = 30_000; // 30 seconds

export class LatexService {
  async compile(source: string): Promise<Buffer> {
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
      // Cleanup all generated files
      const extensions = [".tex", ".pdf", ".aux", ".log", ".out", ".toc", ".nav", ".snm"];
      await Promise.allSettled(
        extensions.map((ext) =>
          unlink(path.join(tmpDir, `latex-${jobId}${ext}`))
        )
      );
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
          reject(
            new Error(
              "pdflatex not found. Install MiKTeX (https://miktex.org/download) or TeX Live, then restart the server."
            )
          );
        } else {
          reject(new Error(`Failed to start pdflatex: ${err.message}`));
        }
      });

      child.on("close", (code) => {
        clearTimeout(timer);
        if (code === 0) {
          resolve();
        } else {
          // Extract meaningful error from pdflatex log
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
