import { spawn } from "child_process";
import { writeFile, readFile, unlink } from "fs/promises";
import path from "path";
import os from "os";
import crypto from "crypto";

const COMPILE_TIMEOUT = 30_000; // 30 seconds
const ONLINE_API = "https://latex.ytotech.com/builds/sync";

const MAX_SOURCE_SIZE = 500 * 1024; // 500 KB
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB per supporting file
const MAX_TOTAL_SIZE = 10 * 1024 * 1024; // 10 MB total

const SAFE_FILENAME_REGEX = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,99}$/;
const ALLOWED_EXTENSIONS = new Set([".sty", ".cls", ".bib", ".bst", ".png", ".jpg", ".jpeg", ".eps"]);

const DANGEROUS_PATTERNS: RegExp[] = [
  /\\write18/,
  /\\immediate\s*\\write18/,
  /\\input\s*\{\s*\|/,
  /\\openin/,
  /\\catcode.*\\active/,
  /\\csname\s*shellescape/i,
];
export interface SupportingFile {
  filename: string;
  content: string;
}

export class LatexService {
  private pdflatexAvailable: boolean | null = null;
private validateFilename(filename: string): void {
    if (!SAFE_FILENAME_REGEX.test(filename)) {
      throw new Error(`Invalid supporting file name: "${filename}"`);
    }
    const ext = path.extname(filename).toLowerCase();
    if (!ALLOWED_EXTENSIONS.has(ext)) {
      throw new Error(`Unsupported file type: "${filename}"`);
    }
    const resolved = path.join(os.tmpdir(), filename);
    if (path.dirname(resolved) !== path.normalize(os.tmpdir())) {
      throw new Error(`Invalid file path: "${filename}"`);
    }
  }

  private validateSupportingFiles(supportingFiles: SupportingFile[]): void {
    const seen = new Set<string>();
    let totalSize = 0;

    for (const sf of supportingFiles) {
      this.validateFilename(sf.filename);

      if (seen.has(sf.filename)) {
        throw new Error(`Duplicate supporting file name: "${sf.filename}"`);
      }
      seen.add(sf.filename);

      const size = Buffer.byteLength(sf.content, "utf-8");
      if (size > MAX_FILE_SIZE) {
        throw new Error(`Supporting file "${sf.filename}" exceeds the 2 MB size limit`);
      }
      totalSize += size;
    }

    if (totalSize > MAX_TOTAL_SIZE) {
      throw new Error("Total size of supporting files exceeds the 10 MB limit");
    }
  }

  private validateSource(source: string): void {
    const size = Buffer.byteLength(source, "utf-8");
    if (size > MAX_SOURCE_SIZE) {
      throw new Error("LaTeX source exceeds the 500 KB size limit");
    }

    for (const pattern of DANGEROUS_PATTERNS) {
      if (pattern.test(source)) {
        throw new Error("LaTeX source contains a disallowed command");
      }
    }
  }
  async compile(source: string, supportingFiles: SupportingFile[] = []): Promise<Buffer> {
    this.validateSource(source);
    this.validateSupportingFiles(supportingFiles);
    // Try local pdflatex first (if not already known to be missing)
    if (this.pdflatexAvailable !== false) {
      try {
        const result = await this.compileLocal(source, supportingFiles);
        this.pdflatexAvailable = true;
        return result;
      } catch (err) {
        if (err instanceof Error && err.message.includes("pdflatex not found")) {
          this.pdflatexAvailable = false;
          // Fall through to online compilation
        } else {
          throw err; // Real compilation error - don't fallback
        }
      }
    }

    // Fallback: online LaTeX compilation API
    return this.compileOnline(source, supportingFiles);
  }

  private async compileLocal(source: string, supportingFiles: SupportingFile[] = []): Promise<Buffer> {
    const jobId = crypto.randomUUID();
    const tmpDir = os.tmpdir();
    const texFile = path.join(tmpDir, `latex-${jobId}.tex`);
    const pdfFile = path.join(tmpDir, `latex-${jobId}.pdf`);
    const writtenSupportFiles: string[] = [];

    try {
      await writeFile(texFile, source, "utf-8");

      // Write supporting files (.cls, .sty, etc.) to the same directory
      for (const sf of supportingFiles) {
        const sfPath = path.join(tmpDir, sf.filename);
        await writeFile(sfPath, sf.content, "utf-8");
        writtenSupportFiles.push(sfPath);
      }

      await this.runPdflatex(texFile, tmpDir);
      const pdf = await readFile(pdfFile);
      return pdf;
    } finally {
      const extensions = [".tex", ".pdf", ".aux", ".log", ".out", ".toc", ".nav", ".snm"];
      await Promise.allSettled([
        ...extensions.map((ext) =>
          unlink(path.join(tmpDir, `latex-${jobId}${ext}`))
        ),
        ...writtenSupportFiles.map((f) => unlink(f)),
      ]);
    }
  }

  private async compileOnline(source: string, supportingFiles: SupportingFile[] = []): Promise<Buffer> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), COMPILE_TIMEOUT);

    const resources: Record<string, unknown>[] = [{ main: true, content: source }];
    for (const sf of supportingFiles) {
      resources.push({ path: sf.filename, content: sf.content });
    }

    try {
      const response = await fetch(ONLINE_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ compiler: "pdflatex", resources }),
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
        {
          timeout: COMPILE_TIMEOUT,
          env: {
            // Principle of least privilege: whitelist only minimal required environment variables
            // and avoid forwarding credentials/secrets (like DATABASE_URL or JWT_SECRET).
            PATH: process.env.PATH,
            HOME: process.env.HOME,
            TMPDIR: process.env.TMPDIR,
            TEMP: process.env.TEMP,
            TMP: process.env.TMP,
            LANG: process.env.LANG,
            TZ: process.env.TZ,
            TEXINPUTS: process.env.TEXINPUTS,
            SystemRoot: process.env.SystemRoot, // Required for process spawning on Windows
            SystemDrive: process.env.SystemDrive,

            // openout_any is set to paranoid ("p") to restrict LaTeX output file creation.
            // Note: openin_any is a no-op in TeX Live 2026+, so read isolation must be enforced at the container/sandbox/OS level in production.
            openout_any: "p",
          },
        }
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
