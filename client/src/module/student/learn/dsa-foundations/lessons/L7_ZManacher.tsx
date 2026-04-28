import { useMemo, useState } from "react";
import { BookOpen, Code2, Lightbulb, Play, Target } from "lucide-react";
import {
  LessonShell,
  type LessonQuizQuestion,
  type LessonTabDef,
} from "../../../../../components/dsa-theory/LessonShell";
import {
  AlgoCanvas,
  InputEditor,
  PseudocodePanel,
  useStepPlayer,
  VariablesPanel,
} from "../../../../../components/dsa-theory/algo";
import {
  Callout,
  Card,
  CodeBlock,
  InlineCode,
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "string-matching";

/* ------------------------------------------------------------------ */
/*  Cell state types for inline visualizer                              */
/* ------------------------------------------------------------------ */

type CellState = "default" | "active" | "match" | "window" | "done" | "visited" | "swap" | "compare";

const STATE_COLOR: Record<CellState, string> = {
  default: THEME.bg,
  active: "rgba(59,130,246,0.18)",
  match: "rgba(16,185,129,0.18)",
  window: "rgba(139,92,246,0.10)",
  done: "rgba(163,230,53,0.15)",
  visited: "rgba(120,113,108,0.12)",
  swap: "rgba(245,158,11,0.18)",
  compare: "rgba(245,158,11,0.18)",
};

const STATE_BORDER: Record<CellState, string> = {
  default: THEME.border,
  active: "#3b82f6",
  match: "#10b981",
  window: "#8b5cf6",
  done: "#a3e635",
  visited: "#78716c",
  swap: "#f59e0b",
  compare: "#f59e0b",
};

/* ------------------------------------------------------------------ */
/*  Inline string-cell visualizer                                       */
/* ------------------------------------------------------------------ */

function StringCells({
  values,
  states,
  pointers,
  cellWidth = 36,
}: {
  values: string[];
  states: CellState[];
  pointers: Record<string, number>;
  cellWidth?: number;
}) {
  const ptrByIdx: Record<number, string[]> = {};
  for (const [name, idx] of Object.entries(pointers)) {
    if (!ptrByIdx[idx]) ptrByIdx[idx] = [];
    ptrByIdx[idx].push(name);
  }
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-1 pb-6 relative" style={{ minWidth: values.length * (cellWidth + 4) }}>
        {values.map((v, i) => {
          const st = states[i] ?? "default";
          const ptrs = ptrByIdx[i] ?? [];
          return (
            <div key={i} className="flex flex-col items-center gap-1 relative" style={{ width: cellWidth }}>
              <span className="text-[9px] font-mono text-stone-400" style={{ lineHeight: 1 }}>{i}</span>
              <div
                className="flex items-center justify-center font-mono font-bold text-sm rounded"
                style={{
                  width: cellWidth,
                  height: cellWidth,
                  background: STATE_COLOR[st],
                  border: `${st === "active" || st === "match" ? 2 : 1}px solid ${STATE_BORDER[st]}`,
                  color: THEME.text,
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                {v}
              </div>
              {ptrs.length > 0 && (
                <div className="absolute -bottom-5 left-0 right-0 flex justify-center">
                  <span className="text-[9px] font-mono text-stone-500 leading-none">
                    {ptrs.join(",")}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Z-algorithm                                                          */
/* ------------------------------------------------------------------ */

interface ZFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  s: string;
  z: number[];
  l: number;
  r: number;
  i: number;
  states: CellState[];
  pointers: Record<string, number>;
  flashKey?: string;
}

const Z_PSEUDO = [
  "function Z(s):",
  "  n ← len(s); z[0] ← 0",
  "  l ← r ← 0   # current Z-box [l, r)",
  "  for i in 1..n-1:",
  "    if i < r:",
  "      z[i] ← min(r - i, z[i - l])    # reuse precomputed",
  "    while i + z[i] < n and s[z[i]] == s[i + z[i]]:",
  "      z[i] += 1                        # extend brute-force",
  "    if i + z[i] > r:",
  "      l ← i; r ← i + z[i]              # update Z-box",
  "  return z",
];

function buildZFrames(s: string): ZFrame[] {
  const n = s.length;
  const f: ZFrame[] = [];
  if (n === 0) {
    f.push({
      line: 0, vars: {}, message: "Empty string.",
      s, z: [], l: 0, r: 0, i: -1,
      states: [], pointers: {},
    });
    return f;
  }
  const z = new Array(n).fill(0);
  let l = 0, r = 0;
  const stateOf = (ci: number, cl: number, cr: number, matches: number): CellState[] => {
    return s.split("").map((_, idx) => {
      if (idx === ci) return "active";
      if (idx >= ci && idx < ci + matches) return "match";
      if (idx >= cl && idx < cr) return "window";
      return "default";
    });
  };
  f.push({
    line: 0, vars: { n, s: `"${s}"` }, message: `Compute Z-array for "${s}". z[i] = length of longest substring starting at i that matches a prefix of s.`,
    s, z: [...z], l, r, i: 0,
    states: stateOf(-1, 0, 0, 0), pointers: {},
  });
  for (let i = 1; i < n; i++) {
    f.push({
      line: 3, vars: { i, l, r, "z[i]": z[i] }, message: `i = ${i}. Current Z-box = [${l}, ${r}).`,
      s, z: [...z], l, r, i,
      states: stateOf(i, l, r, 0), pointers: { i, l, r: Math.max(0, r - 1) },
    });
    if (i < r) {
      const reuse = Math.min(r - i, z[i - l]);
      z[i] = reuse;
      f.push({
        line: 5, vars: { i, "i-l": i - l, "z[i-l]": z[i - l], "r-i": r - i, "z[i] new": reuse }, message: `i < r. Reuse z[i-l] = z[${i - l}] = ${z[i - l]}, capped by r-i = ${r - i} → z[${i}] = ${reuse}.`,
        s, z: [...z], l, r, i,
        states: stateOf(i, l, r, z[i]), pointers: { i, l, r: r - 1 }, flashKey: "z[i] new",
      });
    }
    let extended = 0;
    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
      z[i]++;
      extended++;
    }
    if (extended > 0) {
      f.push({
        line: 6, vars: { i, "z[i]": z[i], extended }, message: `Brute-force extension: matched ${extended} more char${extended === 1 ? "" : "s"}. z[${i}] = ${z[i]}.`,
        s, z: [...z], l, r, i,
        states: stateOf(i, l, r, z[i]), pointers: { i }, flashKey: "z[i]",
      });
    } else {
      f.push({
        line: 6, vars: { i, "z[i]": z[i] }, message: `No further match. z[${i}] stays at ${z[i]}.`,
        s, z: [...z], l, r, i,
        states: stateOf(i, l, r, z[i]), pointers: { i },
      });
    }
    if (i + z[i] > r) {
      l = i; r = i + z[i];
      f.push({
        line: 8, vars: { l, r }, message: `New Z-box: [${l}, ${r}). Future indices in this range can reuse this work.`,
        s, z: [...z], l, r, i,
        states: stateOf(i, l, r, z[i]), pointers: { l, r: r - 1 }, flashKey: "l",
      });
    }
  }
  f.push({
    line: 0, vars: { z: `[${z.join(",")}]` }, message: `Done. Z-array = [${z.join(", ")}]. Total work O(n), each character is visited at most twice.`,
    s, z: [...z], l, r, i: n - 1,
    states: s.split("").map(() => "done" as CellState), pointers: {},
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Manacher's algorithm                                                 */
/* ------------------------------------------------------------------ */

interface ManaFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  T: string;
  p: number[];
  C: number;
  R: number;
  i: number;
  states: CellState[];
  pointers: Record<string, number>;
  flashKey?: string;
  bestCenter?: number;
  bestRadius?: number;
}

const MANA_PSEUDO = [
  "function manacher(s):",
  "  T ← '#' + interleave(s, '#')",
  "  n ← len(T); p ← array of zeros",
  "  C ← 0; R ← 0",
  "  for i in 1..n-2:",
  "    mirror ← 2C - i",
  "    if i < R: p[i] ← min(R - i, p[mirror])    # reflect",
  "    while T[i + p[i] + 1] == T[i - p[i] - 1]:",
  "      p[i] += 1                                  # expand",
  "    if i + p[i] > R: C ← i; R ← i + p[i]        # update",
  "  return max(p) → longest palindrome",
];

function manaTransform(s: string): string {
  return "^#" + s.split("").join("#") + "#$";
}

function buildManacherFrames(s: string): ManaFrame[] {
  const T = manaTransform(s);
  const n = T.length;
  const p = new Array(n).fill(0);
  let C = 0, R = 0;
  const f: ManaFrame[] = [];
  const stateOf = (i: number, curR: number, hl?: { mirror?: number }): CellState[] => {
    return T.split("").map((_, idx) => {
      if (hl?.mirror === idx) return "compare";
      if (idx === i) return "active";
      if (idx >= i - p[i] && idx <= i + p[i]) return "match";
      if (idx <= curR) return "window";
      return "default";
    });
  };
  f.push({
    line: 0, vars: { s: `"${s}"`, T: `"${T}"` }, message: `Manacher's on "${s}". Transform: insert '#' between every char.`,
    T, p: [...p], C, R, i: 0,
    states: T.split("").map(() => "default" as CellState), pointers: {},
  });
  for (let i = 1; i < n - 1; i++) {
    const mirror = 2 * C - i;
    f.push({
      line: 5, vars: { i, mirror, C, R }, message: `i = ${i}. Mirror across C=${C}: 2C-i = ${mirror}.`,
      T, p: [...p], C, R, i,
      states: stateOf(i, R, { mirror }), pointers: { i, mirror, C, R },
    });
    if (i < R) {
      const reuse = Math.min(R - i, p[mirror]);
      p[i] = reuse;
      f.push({
        line: 6, vars: { i, "p[mirror]": p[mirror], "R-i": R - i, "p[i] new": p[i] }, message: `i < R → reuse p[mirror=${mirror}] = ${p[mirror]}, capped by R-i = ${R - i} → p[${i}] = ${p[i]}.`,
        T, p: [...p], C, R, i,
        states: stateOf(i, R, { mirror }), pointers: { i, mirror }, flashKey: "p[i] new",
      });
    }
    let expanded = 0;
    while (T[i + p[i] + 1] === T[i - p[i] - 1]) {
      p[i]++;
      expanded++;
    }
    if (expanded > 0) {
      f.push({
        line: 7, vars: { i, expanded, "p[i]": p[i] }, message: `Expand ${expanded} step${expanded === 1 ? "" : "s"}. p[${i}] = ${p[i]}.`,
        T, p: [...p], C, R, i,
        states: stateOf(i, R), pointers: { i }, flashKey: "p[i]",
      });
    }
    if (i + p[i] > R) {
      C = i; R = i + p[i];
      f.push({
        line: 9, vars: { C, R }, message: `Palindrome at i=${i} extends past R → update center C=${C}, R=${R}.`,
        T, p: [...p], C, R, i,
        states: stateOf(i, R), pointers: { i, C, R }, flashKey: "C",
      });
    }
  }
  let bestI = 0, bestRad = 0;
  for (let i = 0; i < n; i++) if (p[i] > bestRad) { bestRad = p[i]; bestI = i; }
  const startInT = bestI - bestRad;
  const startInS = Math.floor(startInT / 2);
  const palindrome = s.substr(startInS, bestRad);
  f.push({
    line: 0, vars: { longestPalindrome: `"${palindrome}"`, length: bestRad }, message: `Done. Longest palindromic substring = "${palindrome}" (length ${bestRad}).`,
    T, p: [...p], C, R, i: n - 1,
    states: T.split("").map((_, idx) => idx >= bestI - bestRad && idx <= bestI + bestRad ? "match" : "visited"),
    pointers: { center: bestI },
    bestCenter: bestI, bestRadius: bestRad,
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                            */
/* ------------------------------------------------------------------ */

type VizMode = "z" | "manacher";

function ZViz() {
  const [s, setS] = useState("aabcaabxaaaz");
  const sCapped = s.slice(0, 18);
  const frames = useMemo(() => buildZFrames(sCapped), [sCapped]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title={`Z-array of "${sCapped}"`}
      player={player}
      input={
        <InputEditor
          label="Input string"
          value={s}
          helper="Up to 18 chars. Watch the Z-box [l, r) get reused, each char visited at most twice → O(n)."
          presets={[
            { label: "aabcaabxaaaz", value: "aabcaabxaaaz" },
            { label: "aaaaa (max reuse)", value: "aaaaa" },
            { label: "abacaba (palindrome)", value: "abacaba" },
            { label: "abcdef (no match)", value: "abcdef" },
          ]}
          onApply={setS}
        />
      }
      pseudocode={<PseudocodePanel lines={Z_PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? [frame.flashKey] : []} />}
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 flex-wrap text-xs">
          <span><span className="font-bold text-blue-500">blue</span> = current i</span>
          <span><span className="font-bold text-emerald-500">green</span> = matched (z[i] chars)</span>
          <span><span className="font-bold text-violet-500">purple</span> = current Z-box [l, r)</span>
        </div>
        {frame && (
          <>
            <StringCells
              values={frame.s.split("")}
              states={frame.states}
              pointers={frame.pointers}
              cellWidth={36}
            />
            <Card>
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">
                Z-array
              </div>
              <div className="flex gap-1 flex-wrap">
                {frame.z.map((v, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center rounded"
                    style={{
                      width: 36, height: 36,
                      border: idx === frame.i ? "2px solid #3b82f6" : `1px solid ${THEME.border}`,
                      background: idx === frame.i ? "rgba(59,130,246,0.12)" : THEME.bg,
                    }}
                  >
                    <span className="text-[9px] font-mono text-stone-400 leading-none">{idx}</span>
                    <span className="font-bold text-sm" style={{ color: THEME.text }}>{v}</span>
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}
        <Callout>{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function ManaViz() {
  const [s, setS] = useState("babad");
  const sCapped = s.slice(0, 14);
  const frames = useMemo(() => buildManacherFrames(sCapped), [sCapped]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title={`Manacher on "${sCapped}"`}
      player={player}
      input={
        <InputEditor
          label="Input string"
          value={s}
          helper="Up to 14 chars. The transform inserts '#' so even/odd palindromes are handled uniformly."
          presets={[
            { label: "babad", value: "babad" },
            { label: "cbbd (even)", value: "cbbd" },
            { label: "abacaba", value: "abacaba" },
            { label: "racecar", value: "racecar" },
            { label: "abcde (no palindrome)", value: "abcde" },
          ]}
          onApply={setS}
        />
      }
      pseudocode={<PseudocodePanel lines={MANA_PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? [frame.flashKey] : []} />}
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 flex-wrap text-xs">
          <span><span className="font-bold text-blue-500">blue</span> = current i</span>
          <span><span className="font-bold text-emerald-500">green</span> = palindrome around i</span>
          <span><span className="font-bold text-amber-500">amber</span> = mirror index</span>
        </div>
        {frame && (
          <>
            <StringCells
              values={frame.T.split("")}
              states={frame.states}
              pointers={frame.pointers}
              cellWidth={26}
            />
            <Card>
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">
                Palindrome radii p[i] (transformed string T)
              </div>
              <div className="flex gap-1 flex-wrap">
                {frame.p.map((v, idx) => {
                  const isBest = idx === frame.bestCenter;
                  const isActive = idx === frame.i;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center rounded"
                      style={{
                        width: 26, height: 30,
                        border: isBest ? "2px solid #10b981" : isActive ? "2px solid #3b82f6" : `1px solid ${THEME.border}`,
                        background: isBest ? "rgba(16,185,129,0.12)" : isActive ? "rgba(59,130,246,0.12)" : THEME.bg,
                      }}
                    >
                      <span className="font-mono text-stone-400 leading-none" style={{ fontSize: 9 }}>{idx}</span>
                      <span className="font-bold font-mono" style={{ fontSize: 11, color: THEME.text }}>{v}</span>
                    </div>
                  );
                })}
              </div>
              {frame.bestCenter !== undefined && frame.bestRadius !== undefined && (
                <div className="mt-3 pt-3 border-t border-dashed border-stone-200 dark:border-white/10 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  Longest palindrome radius: {frame.bestRadius} (centered at T[{frame.bestCenter}]).
                </div>
              )}
            </Card>
          </>
        )}
        <Callout>{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function VisualizeTab() {
  const [mode, setMode] = useState<VizMode>("z");
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 flex-wrap">
        <PillButton active={mode === "z"} onClick={() => setMode("z")}>
          Z-algorithm
        </PillButton>
        <PillButton active={mode === "manacher"} onClick={() => setMode("manacher")}>
          Manacher (longest palindrome)
        </PillButton>
      </div>
      {mode === "z" ? <ZViz /> : <ManaViz />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "Z-array, what it is", b: "z[i] = the length of the longest substring of s starting at index i that matches a prefix of s. By convention z[0] = 0 (or n, depending on style). The Z-array compresses 'how far does s look like its own prefix from this point' for every i." },
    { t: "Z trick, pattern matching in O(n+m)", b: "To find all occurrences of pattern P in text T, build the Z-array of S = P + '$' + T (where $ is a separator not appearing anywhere). Any index i with z[i] = |P| marks an occurrence of P starting at i − |P| − 1 in T. Same complexity as KMP, often easier to code." },
    { t: "Why Z is O(n)", b: "The Z-box [l, r) tracks the rightmost-extending substring known to match a prefix. When i lies inside it, we initialize z[i] from z[i-l] for FREE (capped by r-i). Brute-force expansion only happens past r, and the expansion advances r each time, so the TOTAL extension work is bounded by n." },
    { t: "Manacher, what it is", b: "Computes the longest palindromic substring of s in O(n) (vs the obvious O(n³) or O(n²)). The trick: insert '#' between every character (so 'aba' becomes '#a#b#a#'), turning EVERY palindrome into an odd-length palindrome about a single center. Then exploit reflection-around-known-palindromes the same way Z exploits the Z-box." },
    { t: "Manacher's symmetry trick", b: "Maintain (C, R) = the rightmost palindrome's center and right boundary. For a new index i < R, its mirror across C is 2C − i. We can SEED p[i] = min(R − i, p[mirror]) before any character comparisons. The exact-O(n) bound comes from the same potential-function argument as Z." },
    { t: "Z vs KMP, when each wins", b: "Both are O(n + m) for pattern matching. Z is conceptually simpler (no failure function, just a length array). KMP wins when you only have one pass over the text and want minimal extra memory. For multi-pattern matching, neither, use Aho-Corasick. For palindromes, ONLY Manacher gives O(n)." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>linear-time string magic</SectionEyebrow>
        <SectionTitle>Mental model: reflection beats re-comparison</SectionTitle>
        <Lede>
          Both Z and Manacher exploit the same idea: when you have already matched or extended something, you do not need to redo work for indices whose answer is determined by reflection around what you already know. The bookkeeping (Z-box for Z, center+radius for Manacher) lets you reuse prior matches and extend only past the known boundary.
        </Lede>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {cards.map((c, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-700 dark:text-lime-400 mb-2 tracking-widest uppercase">
              0{i + 1}
            </div>
            <SubHeading>{c.t}</SubHeading>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{c.b}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                              */
/* ------------------------------------------------------------------ */

function TryTab() {
  const probs = [
    { q: "Z-array of 'aabcaab' = ?", a: "[0, 1, 0, 0, 3, 1, 0]" },
    { q: "Longest palindrome of 'babad' (one valid answer)?", a: "'bab' or 'aba'" },
    { q: "Longest palindrome of 'cbbd'?", a: "'bb'" },
    { q: "To search pattern P in text T using Z, you build Z of?", a: "P + '$' + T" },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(probs.map(() => null));
  const [shown, setShown] = useState<boolean[]>(probs.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Verify each answer in the Visualize tab.</Callout>
      {probs.map((p, i) => (
        <Card key={i}>
          <p className="text-sm text-stone-800 dark:text-stone-200 mb-3">
            <span className="font-mono font-bold text-stone-500 mr-2">#{i + 1}</span>
            {p.q}
          </p>
          <div className="flex gap-2 items-center flex-wrap">
            <input
              value={guesses[i] ?? ""}
              onChange={(e) => {
                const v = [...guesses]; v[i] = e.target.value; setGuesses(v);
              }}
              placeholder="your answer"
              className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-sm font-mono text-stone-900 dark:text-stone-100 outline-none focus:border-stone-400 dark:focus:border-white/30"
              style={{ minWidth: 240 }}
            />
            <button
              type="button"
              onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
              className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 text-xs font-mono text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30 transition-colors cursor-pointer bg-white dark:bg-stone-900"
            >
              Reveal
            </button>
            {shown[i] && (
              <span className="px-3 py-1 rounded-md text-xs font-bold bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-300 dark:border-lime-400/30">
                {p.a}
              </span>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Insight                                                             */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card padded={false} className="overflow-hidden">
        <div className="px-5 pt-5 pb-2">
          <SubHeading>Z vs KMP, head to head</SubHeading>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-stone-50 dark:bg-stone-950/50">
            <tr>
              {["Property", "Z-algorithm", "KMP"].map((h) => (
                <th key={h} className="text-left px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 border-b border-stone-200 dark:border-white/10">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Time", "O(n + m)", "O(n + m)"],
              ["Space", "O(n + m)", "O(m), failure func only"],
              ["Conceptual model", "Length array (z[i])", "Failure function (fall-back jumps)"],
              ["Streaming-friendly", "No (needs whole string)", "Yes (state machine over text)"],
              ["Code length", "~10 lines", "~15 lines"],
              ["Generalizes to", "Palindromes (Manacher), suffix array prep", "Aho-Corasick (multi-pattern)"],
            ].map((r, i) => (
              <tr key={i} className="border-t border-stone-100 dark:border-white/5">
                <td className="px-4 py-2 font-semibold text-stone-900 dark:text-stone-100">{r[0]}</td>
                <td className="px-4 py-2 text-stone-600 dark:text-stone-400">{r[1]}</td>
                <td className="px-4 py-2 text-stone-600 dark:text-stone-400">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card>
        <SubHeading>String-algorithm zoo</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed space-y-1.5 pl-4 list-disc">
          <li><strong className="text-stone-900 dark:text-stone-100">Single-pattern match</strong>: KMP, Z, or Boyer-Moore. Production = Boyer-Moore variants (used by grep, git diff).</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Multi-pattern match</strong>: Aho-Corasick, O(n + sum of patterns).</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Approximate match</strong>: Rabin-Karp rolling hash or Levenshtein automaton.</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Longest palindrome</strong>: Manacher, O(n).</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Substring queries en masse</strong>: suffix array + LCP (Kasai O(n)), or suffix automaton.</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Periodicity / borders</strong>: Z-array, z[i] = i means s has period i.</li>
        </ul>
      </Card>

      <Card>
        <SubHeading>Why insert '#' for Manacher?</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          A naive expand-around-center algorithm must handle two cases: odd-length palindromes (center on a char) and even-length (center between chars). Inserting '#' between every character makes EVERY palindrome odd-length about some position in the new string. p[i] in the new string maps back via integer division:
        </p>
        <CodeBlock>original_radius = ⌊p[i]/2⌋,   original_start = ⌊(i − p[i])/2⌋</CodeBlock>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mt-2">
          The transform doubles the string length but cleans up the case analysis to one loop. No mainstream stdlib ships these, carry them as templates. LeetCode 5, 28, 214, 1392 are the canonical interview problems.
        </p>
      </Card>

      <Card>
        <SubHeading>Stdlib reality</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          No mainstream stdlib ships Z or Manacher. Python <InlineCode>re</InlineCode> uses NFA/DFA. Java <InlineCode>Pattern</InlineCode> uses Thompson NFA + bytecode. C++ <InlineCode>std::regex</InlineCode> uses backtracking (watch for catastrophic backtracking). Boyer-Moore variants are inside grep/ripgrep. For LeetCode-style problems (LC5, LC28, LC214, LC1392), Z and Manacher are the right tools.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L7_ZManacher({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
    ...(PRACTICE_TOPIC_SLUG
      ? [
          {
            id: "practice",
            label: "Practice",
            icon: <Code2 className="w-4 h-4" />,
            content: <PracticeTab topicSlug={PRACTICE_TOPIC_SLUG} />,
          },
        ]
      : []),
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "What does z[i] represent in the Z-algorithm?",
      options: [
        "The number of times s[i] appears in s",
        "The length of the longest substring of s starting at i that equals a prefix of s",
        "The position of the next occurrence of s[i]",
        "The depth of i in a suffix tree",
      ],
      correctIndex: 1,
      explanation: "z[i] = max k such that s[0..k-1] == s[i..i+k-1]. The Z-array compresses 'prefix match' info for every starting index.",
    },
    {
      question: "To find all occurrences of P in T using Z, what string do you build the Z-array of?",
      options: ["P only", "T only", "P + T (concatenated)", "P + '$' + T (with separator $ not in alphabet)"],
      correctIndex: 3,
      explanation: "The separator $ ensures z[i] never exceeds |P|; any index in the T part with z[i] = |P| marks an occurrence at i − |P| − 1.",
    },
    {
      question: "Why is the Z-algorithm O(n)?",
      options: [
        "It uses dynamic programming",
        "Inside the Z-box, work is reused for free; brute-force extension only happens past R, and each extension advances R, so total extension work is at most n",
        "Because palindromes",
        "Hash-based amortization",
      ],
      correctIndex: 1,
      explanation: "Same potential argument as KMP. Inner-loop work is bounded by total advancement of the right boundary, which is at most n total.",
    },
    {
      question: "Why does Manacher transform 'abc' into '#a#b#c#'?",
      options: [
        "To avoid hashing collisions",
        "Because palindromes only exist at odd lengths",
        "To handle even and odd palindromes uniformly, every palindrome in the transformed string is odd-length about a single center",
        "To reduce memory",
      ],
      correctIndex: 2,
      explanation: "Without '#', 'abba' would have its center between two chars. The '#' insertion makes EVERY palindrome odd, so a single 'expand around index i' loop handles both cases.",
    },
    {
      question: "Time complexity of Manacher's algorithm?",
      options: ["O(n²)", "O(n log n)", "O(n)", "O(n √n)"],
      correctIndex: 2,
      explanation: "Linear, by the same potential argument as Z: extension work past the rightmost palindrome boundary R can total at most n across the whole run.",
    },
  ];

  return (
    <LessonShell
      title="Z-Function & Manacher"
      level={7}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High, LC5 longest palindrome, LC28 strStr, LC214 shortest palindrome, LC1392 longest happy prefix."
      nextLessonHint="Lowest Common Ancestor"
      onQuizComplete={onQuizComplete}
    />
  );
}
