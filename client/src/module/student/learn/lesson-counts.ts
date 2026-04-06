// Compute lesson counts at build time by globbing every lesson JSON under
// client/src/module/student/<track>/data/lessons/*.json. This keeps the Learn
// Hub in sync with the actual lesson content without hardcoding numbers.

// Vite's import.meta.glob resolves at build time; keys are relative paths.
const modules = import.meta.glob("../*/data/lessons/*.json", { eager: false });

const counts = new Map<string, number>();
for (const path of Object.keys(modules)) {
  // path looks like "../javascript/data/lessons/scope-and-execution.json"
  const match = path.match(/^\.\.\/([^/]+)\/data\/lessons\//);
  if (!match) continue;
  const trackKey = match[1];
  counts.set(trackKey, (counts.get(trackKey) || 0) + 1);
}

export function getLessonCount(trackKey: string | undefined): number | null {
  if (!trackKey) return null;
  return counts.get(trackKey) ?? null;
}
