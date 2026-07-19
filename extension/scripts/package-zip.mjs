// Regenerates the downloadable extension bundle served by the web app.
//
// The web app ships the built extension as a committed static asset at
// client/public/internhack-extension.zip (users download it and "Load unpacked"
// since the extension is not on the Chrome Web Store). That zip is a build
// artifact: run this after `vite build` so the download never goes stale.
//
// Zero-dependency: shells out to the platform's zip tool (PowerShell's
// Compress-Archive on Windows, `zip` elsewhere).
import { execFileSync } from "node:child_process";
import { existsSync, rmSync, mkdirSync, cpSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const extRoot = resolve(here, "..");
const dist = join(extRoot, "dist");
const outZip = resolve(extRoot, "..", "client", "public", "internhack-extension.zip");
const stageParent = join(extRoot, ".zip-stage");
// Stage under a named folder so unzipping yields internhack-extension/ (with
// manifest.json at its root), the folder the user points "Load unpacked" at.
const stageDir = join(stageParent, "internhack-extension");

if (!existsSync(dist)) {
  console.error("extension/dist not found. Run `npm run build` first.");
  process.exit(1);
}

rmSync(stageParent, { recursive: true, force: true });
mkdirSync(stageDir, { recursive: true });
cpSync(dist, stageDir, { recursive: true });
rmSync(outZip, { force: true });

if (process.platform === "win32") {
  execFileSync(
    "powershell",
    [
      "-NoProfile",
      "-Command",
      `Compress-Archive -Path '${stageDir}' -DestinationPath '${outZip}'`,
    ],
    { stdio: "inherit" },
  );
} else {
  // `zip` is standard on macOS and Linux CI images.
  execFileSync("zip", ["-r", outZip, "internhack-extension"], {
    cwd: stageParent,
    stdio: "inherit",
  });
}

rmSync(stageParent, { recursive: true, force: true });
console.log(`Wrote ${outZip}`);
