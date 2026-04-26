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
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "dynamic-programming";

/* ------------------------------------------------------------------ */
/*  Mode                                                               */
/* ------------------------------------------------------------------ */

type Mode = "tsp" | "space";

/* ------------------------------------------------------------------ */
/*  TSP (Held-Karp Bitmask DP)                                        */
/* ------------------------------------------------------------------ */

interface TSPFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  dp: (number | null)[][];
  curMask: number;
  curCity: number;
  nextCity: number | null;
  traversedEdge: [number, number] | null;
  flashKey?: string;
}

const PSEUDO_TSP = [
  "function tsp(dist, start):",
  "  dp[1<<start][start] = 0",
  "  for mask in increasing popcount:",
  "    for i in bits of mask:",
  "      if dp[mask][i] is inf: continue",
  "      for j in 0..n-1:       // try go to j next",
  "        if j in mask: skip",
  "        newMask = mask | (1<<j)",
  "        cost = dp[mask][i] + dist[i][j]",
  "        dp[newMask][j] = min(dp[newMask][j], cost)",
  "  return min over i of dp[full][i] + dist[i][start]",
];

function bitCount(x: number) { let c = 0; while (x) { c += x & 1; x >>>= 1; } return c; }

function buildTSPFrames(dist: number[][], start: number): TSPFrame[] {
  const n = dist.length;
  const FULL = (1 << n) - 1;
  const dp: (number | null)[][] = Array.from({ length: 1 << n }, () => Array(n).fill(null));
  dp[1 << start][start] = 0;
  const f: TSPFrame[] = [];

  f.push({ line: 0, vars: { n, start }, message: `Held-Karp on ${n} cities. State = (mask, lastCity).`, dp: dp.map((r) => [...r]), curMask: 0, curCity: -1, nextCity: null, traversedEdge: null });
  f.push({ line: 1, vars: { mask: (1 << start).toString(2).padStart(n, "0"), [`dp[${1 << start}][${start}]`]: 0 }, flashKey: `dp[${1 << start}][${start}]`, message: `Base case: at city ${start}, having visited only ${start}, cost = 0.`, dp: dp.map((r) => [...r]), curMask: 1 << start, curCity: start, nextCity: null, traversedEdge: null });

  const masksByPop: number[][] = Array.from({ length: n + 1 }, () => []);
  for (let m = 0; m <= FULL; m++) masksByPop[bitCount(m)].push(m);

  for (let pc = 1; pc <= n; pc++) {
    for (const mask of masksByPop[pc]) {
      if (!(mask & (1 << start))) continue;
      for (let i = 0; i < n; i++) {
        if (!(mask & (1 << i))) continue;
        if (dp[mask][i] === null) continue;
        f.push({ line: 3, vars: { mask: mask.toString(2).padStart(n, "0"), i, [`dp[mask][${i}]`]: dp[mask][i] ?? "-" }, flashKey: "i", message: `At mask=${mask.toString(2).padStart(n, "0")}, city=${i}, cost=${dp[mask][i]}.`, dp: dp.map((r) => [...r]), curMask: mask, curCity: i, nextCity: null, traversedEdge: null });
        for (let j = 0; j < n; j++) {
          if (mask & (1 << j)) continue;
          const nm = mask | (1 << j);
          const cost = (dp[mask][i] ?? Infinity) + dist[i][j];
          const prev = dp[nm][j];
          f.push({ line: 6, vars: { i, j, cost, [`dp[newMask][${j}]`]: prev ?? "inf" }, message: `Try going ${i} to ${j}: cost ${dp[mask][i]} + ${dist[i][j]} = ${cost}. Previous dp[${nm.toString(2).padStart(n, "0")}][${j}] = ${prev ?? "inf"}.`, dp: dp.map((r) => [...r]), curMask: mask, curCity: i, nextCity: j, traversedEdge: [i, j] });
          if (prev === null || cost < prev) {
            dp[nm][j] = cost;
            f.push({ line: 9, vars: { [`dp[newMask][${j}]`]: cost }, flashKey: `dp[newMask][${j}]`, message: `Better! dp[${nm.toString(2).padStart(n, "0")}][${j}] = ${cost}.`, dp: dp.map((r) => [...r]), curMask: nm, curCity: j, nextCity: null, traversedEdge: [i, j] });
          }
        }
      }
    }
  }

  let best = Infinity;
  for (let i = 0; i < n; i++) {
    if (dp[FULL][i] === null) continue;
    const total = (dp[FULL][i] ?? Infinity) + dist[i][start];
    if (total < best) best = total;
  }
  f.push({ line: 10, vars: { answer: best === Infinity ? "unreachable" : best }, flashKey: "answer", message: `Close the tour: min over i of dp[FULL][i] + dist[i][${start}] = ${best === Infinity ? "inf" : best}.`, dp: dp.map((r) => [...r]), curMask: FULL, curCity: -1, nextCity: null, traversedEdge: null });
  return f;
}

function parseCities(s: string): { n: number; dist: number[][] } | null {
  const rows = s.split("\n").map((r) => r.trim()).filter(Boolean);
  if (!rows.length) return null;
  const dist = rows.map((r) => r.split(/[,\s]+/).map(Number));
  const n = dist.length;
  if (dist.some((row) => row.length !== n || row.some((v) => !Number.isFinite(v)))) return null;
  if (n < 2 || n > 5) return null;
  return { n, dist };
}

/* ------------------------------------------------------------------ */
/*  Local city graph SVG                                               */
/* ------------------------------------------------------------------ */

function CityGraph({
  n,
  dist,
  curMask,
  curCity,
  nextCity,
  traversedEdge,
}: {
  n: number;
  dist: number[][];
  curMask: number;
  curCity: number;
  nextCity: number | null;
  traversedEdge: [number, number] | null;
}) {
  const cx = 200; const cy = 140; const r = 90;
  const pts = Array.from({ length: n }, (_, i) => {
    const a = (2 * Math.PI * i) / n - Math.PI / 2;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  });

  return (
    <svg width={400} height={280} viewBox="0 0 400 280" className="block w-full max-w-sm mx-auto">
      {Array.from({ length: n }, (_, i) =>
        Array.from({ length: n }, (__, j) => {
          if (j <= i) return null;
          const isActive = traversedEdge && ((traversedEdge[0] === i && traversedEdge[1] === j) || (traversedEdge[0] === j && traversedEdge[1] === i));
          return (
            <g key={`e${i}-${j}`}>
              <line
                x1={pts[i].x} y1={pts[i].y} x2={pts[j].x} y2={pts[j].y}
                stroke={isActive ? THEME.accent : THEME.border}
                strokeWidth={isActive ? 2.5 : 1}
                opacity={isActive ? 1 : 0.4}
              />
              <text
                x={(pts[i].x + pts[j].x) / 2}
                y={(pts[i].y + pts[j].y) / 2 - 3}
                fontSize="9"
                fill={THEME.textMuted}
                textAnchor="middle"
                fontFamily={THEME.mono}
              >
                {dist[i][j]}
              </text>
            </g>
          );
        })
      )}
      {pts.map((p, i) => {
        const visited = !!(curMask & (1 << i));
        const isCur = i === curCity;
        const isNext = i === nextCity;
        const bg = isCur ? THEME.accent : isNext ? "#06b6d4" : visited ? "#dcfce7" : THEME.bg;
        const fg = isCur || isNext ? "#fff" : visited ? "#166534" : THEME.textMuted;
        return (
          <g key={`n${i}`}>
            <circle cx={p.x} cy={p.y} r={16} fill={bg} stroke={isCur ? THEME.accentDark : THEME.border} strokeWidth={isCur ? 2 : 1} />
            <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="12" fill={fg} fontWeight="bold" fontFamily={THEME.mono}>
              {i}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function TSPVisualize() {
  const DEFAULT = ["0,10,15,20", "10,0,35,25", "15,35,0,30", "20,25,30,0"].join("\n");
  const [inputStr, setInputStr] = useState(DEFAULT);
  const parsed = parseCities(inputStr) ?? parseCities(DEFAULT)!;
  const frames = useMemo(() => buildTSPFrames(parsed.dist, 0), [parsed]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const n = parsed.n;

  return (
    <AlgoCanvas
      title="Bitmask DP — Travelling Salesman (Held-Karp)"
      player={player}
      input={
        <InputEditor
          label="Distance matrix (n rows x n numbers, 2 <= n <= 5)"
          value={inputStr}
          placeholder={DEFAULT}
          helper="Symmetric matrix, zero diagonals. Rows separated by newlines."
          presets={[
            { label: "4 cities", value: DEFAULT },
            { label: "Tight 3", value: "0,1,2\n1,0,4\n2,4,0" },
            { label: "5 cities", value: "0,2,9,10,7\n2,0,6,4,3\n9,6,0,8,5\n10,4,8,0,6\n7,3,5,6,0" },
          ]}
          onApply={(v) => { if (parseCities(v)) setInputStr(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_TSP} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? [frame.flashKey] : []} />}
    >
      {frame ? (
        <div className="flex flex-col gap-4">
          <div className="grid gap-4" style={{ gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" }}>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">Cities and Distances</div>
              <div className="border border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-900">
                <CityGraph n={n} dist={parsed.dist} curMask={frame.curMask} curCity={frame.curCity} nextCity={frame.nextCity} traversedEdge={frame.traversedEdge} />
              </div>
              <div className="mt-2 flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">visited mask</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: n }, (_, i) => n - 1 - i).map((bitIdx) => {
                    const bit = (frame.curMask >> bitIdx) & 1;
                    return (
                      <div
                        key={bitIdx}
                        className="w-6 h-6 flex items-center justify-center rounded font-mono text-xs font-bold border transition-all"
                        style={{ background: bit ? THEME.accent : THEME.bg, color: bit ? "#fff" : THEME.textMuted, borderColor: THEME.border }}
                      >
                        {bit}
                      </div>
                    );
                  })}
                </div>
                <span className="text-[10px] font-mono text-stone-500">(bit i=1 means city i visited) = {frame.curMask}</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">dp[mask][lastCity] — finite entries</div>
              <div className="max-h-72 overflow-y-auto border border-stone-200 dark:border-white/10 rounded-md bg-stone-50 dark:bg-stone-950 p-2">
                <table className="text-[11px] font-mono border-collapse w-full">
                  <thead>
                    <tr>
                      <th className="py-1 px-1.5 text-left text-stone-500">mask</th>
                      {Array.from({ length: n }, (_, i) => (
                        <th key={i} className="py-1 px-1.5 text-stone-500">city {i}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {frame.dp.map((row, m) => {
                      if (row.every((v) => v === null)) return null;
                      const isCurrent = m === frame.curMask;
                      return (
                        <tr key={m} style={{ background: isCurrent ? `${THEME.accent}20` : "transparent" }}>
                          <td className="py-0.5 px-1.5 font-bold" style={{ color: isCurrent ? THEME.accent : THEME.text }}>
                            {m.toString(2).padStart(n, "0")}
                          </td>
                          {row.map((v, i) => {
                            const isCell = isCurrent && i === frame.curCity;
                            return (
                              <td
                                key={i}
                                className="py-0.5 px-1.5 text-center rounded transition-all"
                                style={{
                                  color: v === null ? "#cbd5e1" : isCell ? "#fff" : THEME.text,
                                  background: isCell ? THEME.accent : "transparent",
                                  fontWeight: isCell ? 800 : 400,
                                }}
                              >
                                {v === null ? "inf" : v}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] font-mono text-stone-500 mt-1">Table size: 2^n x n. Time: O(n^2 * 2^n).</p>
            </div>
          </div>
          <Callout>{frame.message}</Callout>
        </div>
      ) : (
        <Callout>Press play to step through the algorithm.</Callout>
      )}
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Space Optimization (Edit Distance)                                */
/* ------------------------------------------------------------------ */

interface SpaceFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  rows: (number | null)[][];
  highlighted: { i: number; j: number } | null;
  collapsed: boolean;
  prev: number[] | null;
  curr: number[] | null;
  flashKey?: string;
}

const PSEUDO_SPACE = [
  "// Edit Distance - classic 2D DP",
  "function edit(a, b):",
  "  n = |a|; m = |b|",
  "  dp[0..n][0..m]",
  "  dp[i][0] = i; dp[0][j] = j",
  "  for i in 1..n:",
  "    for j in 1..m:",
  "      if a[i-1]==b[j-1]:",
  "        dp[i][j] = dp[i-1][j-1]",
  "      else:",
  "        dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])",
  "  return dp[n][m]",
];

function buildSpaceFrames(a: string, b: string): SpaceFrame[] {
  const n = a.length; const m = b.length;
  const dp: (number | null)[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(null));
  for (let i = 0; i <= n; i++) dp[i][0] = i;
  for (let j = 0; j <= m; j++) dp[0][j] = j;
  const f: SpaceFrame[] = [];

  f.push({ line: 0, vars: { a: `"${a}"`, b: `"${b}"`, n, m }, message: `Compute edit distance between "${a}" and "${b}".`, rows: dp.map((r) => [...r]), highlighted: null, collapsed: false, prev: null, curr: null });
  f.push({ line: 4, vars: {}, flashKey: "dp", message: "Initialize base row and column (dp[i][0]=i, dp[0][j]=j).", rows: dp.map((r) => [...r]), highlighted: null, collapsed: false, prev: null, curr: null });

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
        f.push({ line: 8, vars: { i, j, [`a[${i - 1}]`]: a[i - 1], [`b[${j - 1}]`]: b[j - 1], [`dp[i][j]`]: dp[i][j] ?? "-" }, flashKey: "dp[i][j]", message: `'${a[i - 1]}' == '${b[j - 1]}' — inherit diagonal: dp[${i}][${j}] = ${dp[i][j]}.`, rows: dp.map((r) => [...r]), highlighted: { i, j }, collapsed: false, prev: null, curr: null });
      } else {
        const v = 1 + Math.min(dp[i - 1][j] ?? Infinity, dp[i][j - 1] ?? Infinity, dp[i - 1][j - 1] ?? Infinity);
        dp[i][j] = v;
        f.push({ line: 10, vars: { i, j, [`dp[i][j]`]: v }, flashKey: "dp[i][j]", message: `'${a[i - 1]}' != '${b[j - 1]}' — 1 + min(up, left, diag) = ${v}.`, rows: dp.map((r) => [...r]), highlighted: { i, j }, collapsed: false, prev: null, curr: null });
      }
    }
  }

  f.push({ line: 11, vars: { answer: dp[n][m] ?? "-" }, flashKey: "answer", message: `Edit distance = ${dp[n][m]}. Space used so far: O((n+1)(m+1)).`, rows: dp.map((r) => [...r]), highlighted: { i: n, j: m }, collapsed: false, prev: null, curr: null });
  const prev = dp[n - 1 >= 0 ? n - 1 : 0].map((x) => x ?? 0);
  const curr = dp[n].map((x) => x ?? 0);
  f.push({ line: 11, vars: {}, flashKey: "dp", message: "Observation: dp[i][j] only reads row i-1 and row i. Keep just two rows!", rows: dp.map((r) => [...r]), highlighted: null, collapsed: false, prev, curr });
  f.push({ line: 11, vars: { space: "O(2*m) => O(m)" }, flashKey: "space", message: "Collapse the table to two 1-D arrays. Space drops from O(n*m) to O(m).", rows: dp.map((r) => [...r]), highlighted: null, collapsed: true, prev, curr });
  return f;
}

function OneDRow({ label, vals }: { label: string; vals: number[] }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-12 text-xs font-mono font-bold" style={{ color: label === "curr" ? THEME.success : THEME.textMuted }}>{label}:</span>
      <div className="flex gap-0.5">
        {vals.map((v, i) => (
          <div key={i} className="w-8 h-8 flex items-center justify-center rounded border font-mono text-xs font-bold border-stone-200 dark:border-white/10" style={{ background: label === "curr" ? "#dcfce7" : THEME.bg, color: THEME.text }}>
            {v}
          </div>
        ))}
      </div>
    </div>
  );
}

function SpaceVisualize() {
  const [inputStr, setInputStr] = useState("kitten | sitting");
  const parts = inputStr.split("|").map((s) => s.trim());
  const a = (parts[0] || "ab").slice(0, 8);
  const b = (parts[1] || "ac").slice(0, 8);
  const frames = useMemo(() => buildSpaceFrames(a, b), [a, b]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const n = a.length; const m = b.length;

  return (
    <AlgoCanvas
      title="Space Optimization — Edit Distance"
      player={player}
      input={
        <InputEditor
          label="Two strings (separated by |). Max 8 chars each."
          value={inputStr}
          placeholder="e.g. kitten | sitting"
          helper="Watch the 2-D table build, then collapse to two 1-D rows."
          presets={[
            { label: "kitten->sitting", value: "kitten | sitting" },
            { label: "horse->ros", value: "horse | ros" },
            { label: "abc->yabd", value: "abc | yabd" },
            { label: "same", value: "code | code" },
          ]}
          onApply={(v) => setInputStr(v)}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_SPACE} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? [frame.flashKey] : []} />}
    >
      {frame ? (
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
              2-D DP Table ({n + 1} x {m + 1})
            </div>
            <div className="overflow-x-auto" style={{ opacity: frame.collapsed ? 0.3 : 1, transition: "opacity 0.45s ease" }}>
              <table className="border-collapse font-mono text-xs">
                <thead>
                  <tr>
                    <th className="p-1" />
                    <th className="py-1 px-2 text-stone-500">eps</th>
                    {b.split("").map((c, j) => (
                      <th key={j} className="py-1 px-2 text-stone-500">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {frame.rows.map((row, i) => (
                    <tr key={i}>
                      <th className="py-1 px-2 text-stone-500">{i === 0 ? "eps" : a[i - 1]}</th>
                      {row.map((v, j) => {
                        const isHot = frame.highlighted && frame.highlighted.i === i && frame.highlighted.j === j;
                        const fromPrev = frame.highlighted && (
                          (frame.highlighted.i - 1 === i && frame.highlighted.j === j) ||
                          (frame.highlighted.i - 1 === i && frame.highlighted.j - 1 === j) ||
                          (frame.highlighted.i === i && frame.highlighted.j - 1 === j)
                        );
                        return (
                          <td
                            key={j}
                            className="text-center rounded transition-all"
                            style={{
                              width: 32, height: 32,
                              border: `1px solid ${THEME.border}`,
                              background: isHot ? THEME.accent : fromPrev ? `${THEME.accent}24` : THEME.bg,
                              color: isHot ? "#fff" : v === null ? "#cbd5e1" : THEME.text,
                              fontWeight: isHot ? 800 : 500,
                            }}
                          >
                            {v ?? "-"}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="rounded-md p-4 border-2 border-lime-400 transition-opacity"
            style={{ opacity: frame.collapsed ? 1 : 0.35, background: "#f0fdf4" }}
          >
            <div className="text-[10px] font-mono uppercase tracking-widest text-lime-700 mb-3">Collapsed to 2 x 1-D Arrays</div>
            {frame.prev && frame.curr ? (
              <div className="flex flex-col gap-2">
                <OneDRow label="prev" vals={frame.prev} />
                <OneDRow label="curr" vals={frame.curr} />
                <p className="text-xs text-stone-600 mt-2">
                  dp[i][j] only needs prev[j], prev[j-1], curr[j-1]. After each row swap prev = curr. Space drops from O((n+1)(m+1)) to O(m+1).
                </p>
              </div>
            ) : (
              <div className="text-xs text-stone-400 italic">Waiting for the 2-D table to finish...</div>
            )}
          </div>
          <Callout>{frame.message}</Callout>
        </div>
      ) : (
        <Callout>Press play to step through the algorithm.</Callout>
      )}
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("tsp");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <PillButton active={mode === "tsp"} onClick={() => setMode("tsp")}>
          <span className="text-[11px]">Bitmask DP (TSP)</span>
        </PillButton>
        <PillButton active={mode === "space"} onClick={() => setMode("space")}>
          <span className="text-[11px]">Space Optimization</span>
        </PillButton>
      </div>
      {mode === "tsp" ? <TSPVisualize /> : <SpaceVisualize />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "State = identity of a subproblem", body: "A DP state is just enough information to decide what to do next. For TSP, 'I'm at city i and have visited set S' — (i, S) — is sufficient. Rest of the past doesn't matter. Pick the smallest tuple that makes the recurrence work." },
    { title: "Bitmask = tiny sets", body: "When the 'set' in your state has <= ~20 elements, represent it as an integer whose i-th bit is 1 if element i is in the set. Union = OR, test = AND, add = OR. Tables become 2^n x n arrays. Canonical for TSP, subset-sum-with-tracking, assignment problems." },
    { title: "Space optimization rule of thumb", body: "If dp[i] depends only on dp[i-1] (and maybe dp[i-2]), you only need O(1) or O(2) rows. Replace dp[n][m] with prev[] and curr[] arrays. Space O(n*m) -> O(m). This is free — no algorithmic change, just rewriting the loop." },
    { title: "Top-down vs bottom-up", body: "Top-down (memoization) mirrors the natural recurrence: recurse + memo. Bottom-up fills the table in dependency order. Bottom-up makes space optimization obvious — you can physically see which rows are needed." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>dp state design</SectionEyebrow>
        <SectionTitle>The right state writes the recurrence for you</SectionTitle>
        <Lede>
          DP problems aren't solved by finding a clever formula — they're solved by choosing the state well. A well-chosen state halves your code. A poorly-chosen state makes the problem feel impossible. Bitmasks and space optimization are two tools for getting the state right.
        </Lede>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {sections.map((s, i) => (
          <Card key={i}>
            <div className="text-xs font-bold text-lime-700 dark:text-lime-400 mb-1 font-mono">0{i + 1}</div>
            <SubHeading>{s.title}</SubHeading>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                             */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Bitmask TSP on 4 cities has how many states (mask x city)?", a: "64" },
    { q: "Edit distance dp table size for words of length n=5 and m=7?", a: "48" },
    { q: "After space optimization, how many int cells does edit distance need (in terms of m)?", a: "2(m+1)" },
    { q: "mask = 0b1011. Which cities are visited (sorted bits set)?", a: "0,1,3" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  const normalize = (s: string) => s.replace(/\s+/g, "").toLowerCase();

  return (
    <div className="flex flex-col gap-3">
      <Callout>
        Work out the state space sizes on paper first — the "state" is the key object in DP.
      </Callout>
      {problems.map((p, i) => {
        const correct = normalize(guesses[i]) === normalize(p.a);
        return (
          <Card key={i}>
            <p className="text-sm text-stone-800 dark:text-stone-200 mb-3">
              <span className="font-bold text-stone-400 mr-1">#{i + 1}.</span> {p.q}
            </p>
            <div className="flex gap-2 flex-wrap items-center">
              <input
                type="text"
                value={guesses[i]}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                placeholder="your answer"
                className="w-32 px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 font-mono text-sm focus:outline-none focus:border-stone-400"
              />
              <button
                type="button"
                onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
                className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-600 dark:text-stone-400 text-xs font-medium cursor-pointer hover:border-stone-400"
              >
                Reveal
              </button>
              {shown[i] && (
                <span className={`px-3 py-1 rounded-md text-xs font-bold ${correct ? "bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-400" : "bg-rose-50 dark:bg-rose-400/10 text-rose-800 dark:text-rose-200 border border-rose-400"}`}>
                  {correct ? `Correct - ${p.a}` : `Answer: ${p.a}`}
                </span>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Insight                                                            */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>Bitmask DP feasibility boundary</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Bitmask on n items: 2^n masks x n transitions = O(n^2 * 2^n) time, O(n * 2^n) space. For n=20: ~4*10^8 ops — feasible. For n=25: 10^10 — too slow. When n creeps above 20, look for problem-specific structure (meet-in-the-middle, SOS DP).
        </p>
      </Card>
      <Card>
        <SubHeading>Space opt gotchas</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>0/1 knapsack: reverse the inner loop (j from W down to w) to reuse dp[j-w] from the previous row.</li>
          <li>Unbounded knapsack: forward inner loop — you WANT to reuse the current row.</li>
          <li>If you need to reconstruct the path, keep the full table. Don't collapse.</li>
          <li>LIS with patience sort collapses O(n^2) DP into O(n log n) — state redesign, not space trick.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>How to pick a state</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Ask: "If I'm about to make the next decision, what minimum info from the past do I need?" That info IS the state. For TSP: where am I + what have I visited. For edit distance: how much of string a + how much of string b I've processed. The recurrence then writes itself.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Root                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L8_DPStateDesign({ onQuizComplete }: Props) {
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
      question: "Time complexity of Held-Karp bitmask DP for TSP on n cities?",
      options: ["O(n!)", "O(n² * 2ⁿ)", "O(n³)", "O(n * 2ⁿ)"],
      correctIndex: 1,
      explanation: "2ⁿ masks x n last-cities = n * 2ⁿ states; each considers n transitions. Total O(n² * 2ⁿ). Brute force would be O(n!), much worse.",
    },
    {
      question: "In the edit-distance 2-D DP, which cells does dp[i][j] directly depend on?",
      options: [
        "dp[i+1][j+1] only",
        "dp[i-1][j], dp[i][j-1], dp[i-1][j-1]",
        "All cells of row 0",
        "dp[0][0] only",
      ],
      correctIndex: 1,
      explanation: "Delete = up, insert = left, replace/keep = diagonal. All three are needed.",
    },
    {
      question: "After space optimization, edit distance for strings of length n and m uses how much memory?",
      options: ["O(n * m)", "O(n + m)", "O(min(n, m))", "Both B and C are acceptable"],
      correctIndex: 3,
      explanation: "You keep two rows of length m+1: O(m). You can always iterate over the shorter string's length -> O(min(n, m)). Both answers express the same idea.",
    },
    {
      question: "Which of the following problems is NOT naturally solved by bitmask DP?",
      options: [
        "Travelling salesman with 15 cities",
        "Assignment problem with 12 jobs",
        "Shortest path in a 10⁶-node graph",
        "Minimum cost to cover all subsets of 18 items",
      ],
      correctIndex: 2,
      explanation: "A 10⁶-node graph has no small 'set in the state' to bitmask. Use Dijkstra/BFS. Bitmask DP is for small-n exponential enumeration.",
    },
  ];

  return (
    <LessonShell
      title="DP State Design"
      level={8}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very high - separates mid-level from senior candidates"
      nextLessonHint="Pattern Recognition"
      onQuizComplete={onQuizComplete}
    />
  );
}
