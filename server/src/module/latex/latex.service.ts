import { spawn } from "child_process";
import {
  writeFile,
  readFile,
  mkdtemp,
  rm,
} from "fs/promises";
import path from "path";
import os from "os";

const COMPILE_TIMEOUT = 30_000;
const ONLINE_API = "https://latex.ytotech.com/builds/sync";

const MAX_SUPPORTING_FILES = 5;
const MAX_TOTAL_SUPPORT_SIZE = 500_000;
const MAX_PDF_SIZE = 10 * 1024 * 1024;

const FILENAME_REGEX =
  /^[A-Za-z0-9][A-Za-z0-9_.-]{0,99}\.(cls|sty|bst|bib|tex)$/i;

export interface SupportingFile {
  filename: string;
  content: string;
}

export class LatexService {
  private pdflatexAvailable: boolean | null = null;

  async compile(
    source: string,
    supportingFiles: SupportingFile[] = []
  ): Promise<Buffer> {
    if (this.pdflatexAvailable !== false) {
      try {
        const pdf = await this.compileLocal(source, supportingFiles);
        this.pdflatexAvailable = true;
        return pdf;
      } catch (err) {
        if (
          err instanceof Error &&
          err.message.includes("pdflatex not found")
        ) {
          this.pdflatexAvailable = false;
        } else {
          throw err;
        }
      }
    }

    return this.compileOnline(source, supportingFiles);
  }

  private async compileLocal(
    source: string,
    supportingFiles: SupportingFile[]
  ): Promise<Buffer> {
    if (supportingFiles.length > MAX_SUPPORTING_FILES) {
      throw new Error(
        `Maximum ${MAX_SUPPORTING_FILES} supporting files allowed.`
      );
    }

    const totalSize = supportingFiles.reduce(
      (sum, file) => sum + Buffer.byteLength(file.content, "utf8"),
      0
    );

    if (totalSize > MAX_TOTAL_SUPPORT_SIZE) {
      throw new Error("Supporting files exceed total size limit.");
    }

    const workDir = await mkdtemp(
      path.join(os.tmpdir(), "latex-")
    );

    const texFile = path.join(workDir, "main.tex");
    const pdfFile = path.join(workDir, "main.pdf");

    try {
      await writeFile(texFile, source, "utf8");

      for (const sf of supportingFiles) {
        if (!FILENAME_REGEX.test(sf.filename)) {
          throw new Error(
            `Invalid supporting filename: ${sf.filename}`
          );
        }

        const resolved = path.resolve(workDir, sf.filename);
        const relative = path.relative(workDir, resolved);

        if (
          relative.startsWith("..") ||
          path.isAbsolute(relative)
        ) {
          throw new Error(
            `Path traversal detected: ${sf.filename}`
          );
        }

        await writeFile(resolved, sf.content, "utf8");
      }

      await this.runPdflatex(workDir);

      const pdf = await readFile(pdfFile);

      if (pdf.length > MAX_PDF_SIZE) {
        throw new Error(
          "Generated PDF exceeds maximum allowed size."
        );
      }

      return pdf;
    } finally {
      await rm(workDir, {
        recursive: true,
        force: true,
      });
    }
  }

  private async compileOnline(
    source: string,
    supportingFiles: SupportingFile[]
  ): Promise<Buffer> {
    const controller = new AbortController();

    const timeout = setTimeout(
      () => controller.abort(),
      COMPILE_TIMEOUT
    );

    const resources: Record<string, unknown>[] = [
      {
        main: true,
        content: source,
      },
    ];

    for (const sf of supportingFiles) {
      resources.push({
        path: sf.filename,
        content: sf.content,
      });
    }

    try {
      const response = await fetch(ONLINE_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          compiler: "pdflatex",
          resources,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        const text = await response.text();

        try {
          const parsed = JSON.parse(text);

          if (parsed.log_files) {
            const log = Object.values(parsed.log_files).join("\n");

            const errors = log
              .split("\n")
              .filter(
                (line: string) =>
                  line.startsWith("!") ||
                  line.includes("Error")
              )
              .slice(0, 5);

            if (errors.length) {
              throw new Error(errors.join("\n"));
            }
          }

          throw new Error(parsed.error ?? "Compilation failed");
        } catch (e) {
          if (e instanceof Error) throw e;

          throw new Error(
            `Server returned ${response.status}`
          );
        }
      }

      return Buffer.from(await response.arrayBuffer());
    } catch (err) {
      if (
        err instanceof Error &&
        err.name === "AbortError"
      ) {
        throw new Error(
          "Online LaTeX compilation timed out."
        );
      }

      throw err;
    } finally {
      clearTimeout(timeout);
    }
  }

  private runPdflatex(workDir: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const child = spawn(
        "pdflatex",
        [
          "-interaction=nonstopmode",
          "-halt-on-error",
          "-no-shell-escape",
          "main.tex",
        ],
        {
          cwd: workDir,
          timeout: COMPILE_TIMEOUT,
          env: {
            PATH: process.env.PATH,
            HOME: process.env.HOME,
            TEMP: process.env.TEMP,
            TMP: process.env.TMP,
            TMPDIR: process.env.TMPDIR,
            LANG: process.env.LANG,
            TZ: process.env.TZ,
            TEXINPUTS: process.env.TEXINPUTS,
            SystemRoot: process.env.SystemRoot,
            SystemDrive: process.env.SystemDrive,
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
        reject(
          new Error(
            "LaTeX compilation timed out."
          )
        );
      }, COMPILE_TIMEOUT);

      child.on("error", (err: NodeJS.ErrnoException) => {
        clearTimeout(timer);

        if (err.code === "ENOENT") {
          reject(new Error("pdflatex not found"));
        } else {
          reject(
            new Error(
              `Failed to start pdflatex: ${err.message}`
            )
          );
        }
      });

      child.on("close", (code) => {
        clearTimeout(timer);

        if (code === 0) {
          resolve();
          return;
        }

        const errors = stdout
          .split("\n")
          .filter(
            (line) =>
              line.startsWith("!") ||
              line.includes("Error")
          )
          .slice(0, 5)
          .join("\n");

        reject(
          new Error(
            `LaTeX compilation failed:\n${
              errors ||
              stderr ||
              `Exit code ${code}`
            }`
          )
        );
      });
    });
  }
}

