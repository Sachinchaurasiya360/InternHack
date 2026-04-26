import { useEffect, useMemo, useState } from "react";
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
/*  Local RecursionNode (minimal, for top-down tree)                  */
/* ------------------------------------------------------------------ */

interface RecursionNode {
  id: string;
  label: string;
  parent?: string;
  depth: number;
  state: "active" | "done";
  returnValue?: number | string;
}

function MiniRecursionTree({ nodes, activeId, height = 240 }: { nodes: RecursionNode[]; activeId?: string; height?: number }) {
  if (nodes.length === 0) return null;

  const W = 520;
  const nodeR = 15;
  const levelH = 50;

  const byDepth: Record<number, RecursionNode[]> = {};
  for (const n of nodes) {
    if (!byDepth[n.depth]) byDepth[n.depth] = [];
    byDepth[n.depth].push(n);
  }
  const maxDepth = Math.max(...nodes.map((n) => n.depth));
  const positions: Record<string, { x: number; y: number }> = {};
  for (let d = 0; d <= maxDepth; d++) {
    const group = byDepth[d] ?? [];
    group.forEach((n, i) => {
      positions[n.id] = { x: (W / (group.length + 1)) * (i + 1), y: 22 + d * levelH };
    });
  }

  const edges: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (const n of nodes) {
    if (n.parent && positions[n.parent] && positions[n.id]) {
      const p = positions[n.parent];
      const c = positions[n.id];
      edges.push({ x1: p.x, y1: p.y + nodeR, x2: c.x, y2: c.y - nodeR });
    }
  }

  const svgH = Math.max(height, (maxDepth + 1) * levelH + 40);
  return (
    <div className="w-full overflow-x-auto rounded-md border border-stone-200 dark:border-white/10">
      <svg width={W} height={svgH} viewBox={`0 0 ${W} ${svgH}`} className="block">
        {edges.map((e, i) => (
          <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke={THEME.border} strokeWidth={1.5} />
        ))}
        {nodes.map((n) => {
          const pos = positions[n.id];
          if (!pos) return null;
          const isActive = n.id === activeId;
          const fill = n.state === "done" ? "#10b981" : isActive ? THEME.accent : "#3b82f6";
          return (
            <g key={n.id}>
              <circle cx={pos.x} cy={pos.y} r={nodeR} fill={fill} stroke="#fff" strokeWidth={1.5} style={{ transition: "fill 0.25s" }} />
              <text x={pos.x} y={pos.y + 4} textAnchor="middle" fontSize="8" fontWeight={700} fill="#fff"
                fontFamily={THEME.heading} style={{ pointerEvents: "none" }}>
                {n.label}
              </text>
              {n.returnValue !== undefined && (
                <text x={pos.x + nodeR + 3} y={pos.y - nodeR + 6} fontSize="8" fill={THEME.accent} fontWeight={700} fontFamily={THEME.mono}>
                  ={String(n.returnValue)}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  DP Table component                                                 */
/* ------------------------------------------------------------------ */

function DPTable({ dp, just, deps, memoHit, labels }: { dp: (number | null)[]; just?: number | null; deps?: number[]; memoHit?: number | null; labels: string[] }) {
  const depSet = new Set(deps ?? []);
  return (
    <div className="flex justify-center overflow-x-auto pb-2 px-1">
      <div className="flex gap-1">
        {dp.map((v, i) => {
          const isJust = i === just;
          const isDep = depSet.has(i);
          const isHit = i === memoHit;
          let cls = "border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100";
          if (isHit) cls = "border-violet-500 bg-violet-50 dark:bg-violet-500/10 text-violet-800 dark:text-violet-200";
          else if (isJust) cls = "border-lime-500 bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200";
          else if (isDep) cls = "border-amber-400 bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-200";
          return (
            <div key={i} className={`flex flex-col items-center px-2 py-1.5 rounded border-2 min-w-11 transition-colors ${cls}`}>
              <div className="text-[10px] text-stone-400 font-mono">{labels[i] ?? i}</div>
              <div className="text-sm font-bold font-mono">{v === null ? "-" : v === -1 ? "∞" : v}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Problem definitions                                                */
/* ------------------------------------------------------------------ */

type ProblemKey = "fib" | "stairs" | "coin" | "rob";

interface ProblemConfig {
  label: string;
  pseudoTop: string[];
  pseudoBottom: string[];
  parseInput: (s: string) => { n: number; extra?: number[] | number };
  baseLabels: (cfg: { n: number; extra?: number[] | number }) => string[];
  recurrence: (dp: number[], i: number, extra?: number[] | number) => { value: number; deps: number[] };
  baseCaseFor: (cfg: { n: number; extra?: number[] | number }) => number[];
  baseValue: (i: number, cfg: { n: number; extra?: number[] | number }) => number;
  fromI: (cfg: { n: number; extra?: number[] | number }) => number;
  upto: (cfg: { n: number; extra?: number[] | number }) => number;
  placeholder: string;
  presets: { label: string; value: string }[];
}

const PROBLEMS: Record<ProblemKey, ProblemConfig> = {
  fib: {
    label: "Fibonacci",
    pseudoTop: ["memo ← {}", "function fib(n):", "  if n in memo: return memo[n]", "  if n < 2: return n", "  memo[n] ← fib(n-1) + fib(n-2)", "  return memo[n]"],
    pseudoBottom: ["dp[0] ← 0; dp[1] ← 1", "for i in 2..n:", "  dp[i] ← dp[i-1] + dp[i-2]", "return dp[n]"],
    parseInput: (s) => ({ n: Math.max(0, Math.min(20, Math.floor(Number(s) || 0))) }),
    baseLabels: ({ n }) => Array.from({ length: n + 1 }, (_, i) => String(i)),
    recurrence: (dp, i) => ({ value: dp[i - 1] + dp[i - 2], deps: [i - 1, i - 2] }),
    baseCaseFor: ({ n }) => n === 0 ? [0] : [0, 1],
    baseValue: (i) => i,
    fromI: ({ n }) => n === 0 ? 0 : 2,
    upto: ({ n }) => n,
    placeholder: "e.g. 7",
    presets: [{ label: "n=5", value: "5" }, { label: "n=10", value: "10" }, { label: "n=15", value: "15" }],
  },
  stairs: {
    label: "Climbing Stairs",
    pseudoTop: ["function ways(n):", "  if n in memo: return memo[n]", "  if n <= 1: return 1", "  memo[n] ← ways(n-1) + ways(n-2)", "  return memo[n]"],
    pseudoBottom: ["dp[0] ← 1; dp[1] ← 1", "for i in 2..n:", "  dp[i] ← dp[i-1] + dp[i-2]", "return dp[n]"],
    parseInput: (s) => ({ n: Math.max(0, Math.min(20, Math.floor(Number(s) || 0))) }),
    baseLabels: ({ n }) => Array.from({ length: n + 1 }, (_, i) => String(i)),
    recurrence: (dp, i) => ({ value: dp[i - 1] + dp[i - 2], deps: [i - 1, i - 2] }),
    baseCaseFor: ({ n }) => n === 0 ? [0] : [0, 1],
    baseValue: () => 1,
    fromI: ({ n }) => n === 0 ? 0 : 2,
    upto: ({ n }) => n,
    placeholder: "e.g. 10",
    presets: [{ label: "n=5", value: "5" }, { label: "n=8", value: "8" }, { label: "n=12", value: "12" }],
  },
  rob: {
    label: "House Robber",
    pseudoTop: ["function rob(i):", "  if i < 0: return 0", "  if i in memo: return memo[i]", "  memo[i] ← max(rob(i-1), rob(i-2) + houses[i])", "  return memo[i]"],
    pseudoBottom: ["dp[0] ← houses[0]", "dp[1] ← max(houses[0], houses[1])", "for i in 2..n-1:", "  dp[i] ← max(dp[i-1], dp[i-2] + houses[i])", "return dp[n-1]"],
    parseInput: (s) => {
      const arr = s.trim().split(/[,\s]+/).map((x) => Math.max(0, Math.floor(Number(x) || 0)));
      return { n: Math.max(1, arr.length), extra: arr };
    },
    baseLabels: ({ extra }) => (extra as number[]).map((v, i) => `${i}(${v})`),
    recurrence: (dp, i, extra) => {
      const arr = extra as number[];
      return { value: Math.max(dp[i - 1], dp[i - 2] + arr[i]), deps: [i - 1, i - 2] };
    },
    baseCaseFor: ({ extra }) => (extra as number[]).length === 1 ? [0] : [0, 1],
    baseValue: (i, { extra }) => {
      const arr = extra as number[];
      if (i === 0) return arr[0];
      return Math.max(arr[0], arr[1] ?? 0);
    },
    fromI: ({ extra }) => (extra as number[]).length <= 1 ? 1 : 2,
    upto: ({ n }) => n - 1,
    placeholder: "e.g. 2, 7, 9, 3, 1",
    presets: [
      { label: "[2,7,9,3,1]", value: "2, 7, 9, 3, 1" },
      { label: "[5,3,4,11,2]", value: "5, 3, 4, 11, 2" },
      { label: "[1,2,3,1]", value: "1, 2, 3, 1" },
    ],
  },
  coin: {
    label: "Coin Change",
    pseudoTop: ["function minCoins(amount):", "  if amount == 0: return 0", "  if amount in memo: return memo[amount]", "  best ← ∞", "  for c in coins:", "    if c <= amount:", "      best ← min(best, minCoins(amount-c)+1)", "  memo[amount] ← best", "  return best"],
    pseudoBottom: ["dp[0] ← 0", "for i in 1..amount:", "  dp[i] ← ∞", "  for c in coins:", "    if c <= i and dp[i-c] != ∞:", "      dp[i] ← min(dp[i], dp[i-c] + 1)", "return dp[amount]"],
    parseInput: (s) => {
      const [amtStr, coinStr] = s.split("|").map((x) => x.trim());
      const amount = Math.max(0, Math.min(15, Math.floor(Number(amtStr) || 0)));
      const coins = (coinStr ?? "1,2,5").split(/[,\s]+/).map((x) => Math.max(1, Math.floor(Number(x) || 0))).filter((x) => x > 0);
      return { n: amount, extra: coins.length > 0 ? coins : [1, 2, 5] };
    },
    baseLabels: ({ n }) => Array.from({ length: n + 1 }, (_, i) => String(i)),
    recurrence: (dp, i, extra) => {
      const coins = extra as number[];
      let best = Infinity;
      const deps: number[] = [];
      for (const c of coins) {
        if (c <= i && dp[i - c] !== Infinity) {
          const cand = dp[i - c] + 1;
          if (cand < best) best = cand;
          if (i - c >= 0) deps.push(i - c);
        }
      }
      return { value: best, deps };
    },
    baseCaseFor: () => [0],
    baseValue: () => 0,
    fromI: () => 1,
    upto: ({ n }) => n,
    placeholder: "e.g. 11 | 1, 2, 5",
    presets: [
      { label: "11 | 1,2,5", value: "11 | 1, 2, 5" },
      { label: "7 | 1,3,4", value: "7 | 1, 3, 4" },
      { label: "9 | 2,5,10", value: "9 | 2, 5, 10" },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Frame types                                                        */
/* ------------------------------------------------------------------ */

interface DPFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  dp: (number | null)[];
  just?: number | null;
  depIndices?: number[];
  memoHit?: number | null;
  nodes?: RecursionNode[];
  activeId?: string;
  calls?: number;
}

/* ------------------------------------------------------------------ */
/*  Build: Top-down                                                    */
/* ------------------------------------------------------------------ */

function buildTopDown(key: ProblemKey, parsed: { n: number; extra?: number[] | number }): DPFrame[] {
  const cfg = PROBLEMS[key];
  const upto = cfg.upto(parsed);
  const dp: (number | null)[] = Array(Math.max(1, upto + 1)).fill(null);
  cfg.baseCaseFor(parsed).forEach((i) => { dp[i] = cfg.baseValue(i, parsed); });
  const frames: DPFrame[] = [];
  const nodes: RecursionNode[] = [];
  let idCounter = 0;
  let calls = 0;

  frames.push({ line: 0, vars: { n: parsed.n }, message: "Start with an empty memo table.", dp: [...dp], nodes: [], calls: 0 });

  function recurse(i: number, depth: number, parent?: string): number {
    const id = `tn-${idCounter++}`;
    calls++;
    const node: RecursionNode = { id, label: `f(${i})`, parent, depth, state: "active" };
    nodes.push(node);
    frames.push({ line: 1, vars: { i, calls, memo: dp.filter((x) => x !== null).length }, message: `Enter f(${i}).`, dp: [...dp], nodes: nodes.map((x) => ({ ...x })), activeId: id, calls });

    if (dp[i] !== null && !cfg.baseCaseFor(parsed).includes(i)) {
      node.returnValue = dp[i]!;
      node.state = "done";
      frames.push({ line: 2, vars: { i, hit: dp[i]!, calls }, message: `Memo hit! f(${i}) = ${dp[i]}. Return immediately.`, dp: [...dp], nodes: nodes.map((x) => ({ ...x })), activeId: id, memoHit: i, calls });
      return dp[i]!;
    }

    if (cfg.baseCaseFor(parsed).includes(i)) {
      node.returnValue = dp[i]!;
      node.state = "done";
      frames.push({ line: 3, vars: { i, base: dp[i]!, calls }, message: `Base case: f(${i}) = ${dp[i]}.`, dp: [...dp], nodes: nodes.map((x) => ({ ...x })), activeId: id, just: i, calls });
      return dp[i]!;
    }

    const tmpDp: number[] = dp.map((x) => x === null ? 0 : x);
    const { deps } = cfg.recurrence(tmpDp, i, parsed.extra);
    for (const d of deps) {
      if (d < 0) continue;
      frames.push({ line: 4, vars: { i, recurseTo: d, calls }, message: `Recurse into f(${d}).`, dp: [...dp], nodes: nodes.map((x) => ({ ...x })), activeId: id, calls });
      recurse(d, depth + 1, id);
    }

    const realDp: number[] = dp.map((x) => x === null ? 0 : x);
    const { value } = cfg.recurrence(realDp, i, parsed.extra);
    dp[i] = Number.isFinite(value) ? value : -1;
    node.returnValue = dp[i] ?? "?";
    node.state = "done";
    frames.push({ line: 4, vars: { i, value: dp[i]!, calls }, message: `Computed f(${i}) = ${dp[i]}. Store in memo and return.`, dp: [...dp], nodes: nodes.map((x) => ({ ...x })), activeId: id, just: i, calls });
    return dp[i]!;
  }

  recurse(upto, 0);
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Build: Bottom-up                                                   */
/* ------------------------------------------------------------------ */

function buildBottomUp(key: ProblemKey, parsed: { n: number; extra?: number[] | number }): DPFrame[] {
  const cfg = PROBLEMS[key];
  const upto = cfg.upto(parsed);
  const dp: (number | null)[] = Array(Math.max(1, upto + 1)).fill(null);
  const frames: DPFrame[] = [];

  frames.push({ line: 0, vars: { n: parsed.n }, message: "Initialize dp table with base cases.", dp: [...dp] });

  for (const bc of cfg.baseCaseFor(parsed)) {
    dp[bc] = cfg.baseValue(bc, parsed);
    frames.push({ line: 0, vars: { i: bc, base: dp[bc]! }, message: `Base: dp[${bc}] = ${dp[bc]}.`, dp: [...dp], just: bc });
  }

  for (let i = cfg.fromI(parsed); i <= upto; i++) {
    frames.push({ line: 1, vars: { i }, message: `Compute dp[${i}] using previously filled cells.`, dp: [...dp] });
    const realDp: number[] = dp.map((x) => x === null ? 0 : x);
    const { value, deps } = cfg.recurrence(realDp, i, parsed.extra);
    dp[i] = Number.isFinite(value) ? value : -1;
    frames.push({ line: 2, vars: { i, value: dp[i]! }, message: `dp[${i}] = ${dp[i]} (depends on ${deps.map((d) => `dp[${d}]=${dp[d] ?? "?"}`).join(", ")}).`, dp: [...dp], just: i, depIndices: deps });
  }
  frames.push({ line: 3, vars: { answer: dp[upto] ?? -1 }, message: `Done. Answer = dp[${upto}] = ${dp[upto] ?? "n/a"}.`, dp: [...dp], just: upto });
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Naive call count                                                   */
/* ------------------------------------------------------------------ */

function countNaiveCalls(key: ProblemKey, parsed: { n: number; extra?: number[] | number }): number {
  const { n, extra } = parsed;
  if (key === "fib" || key === "stairs") {
    const a: number[] = [];
    for (let i = 0; i <= n; i++) { if (i < 2) a.push(1); else a.push(a[i - 1] + a[i - 2] + 1); }
    return a[n] ?? 1;
  }
  if (key === "rob") {
    const arr = extra as number[];
    const memo: Record<number, number> = {};
    function go(i: number): number {
      if (i < 0) return 1;
      if (memo[i] !== undefined) return memo[i];
      return (memo[i] = go(i - 1) + go(i - 2) + 1);
    }
    return go(arr.length - 1);
  }
  if (key === "coin") {
    const coins = extra as number[];
    const cap = Math.min(25, n);
    function go(a: number): number {
      if (a <= 0) return 1;
      let s = 1;
      for (const c of coins) if (c <= a) s += go(a - c);
      return s;
    }
    return go(cap);
  }
  return 0;
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

type DPMode = "top-down" | "bottom-up";

function VisualizeTab() {
  const [problemKey, setProblemKey] = useState<ProblemKey>("fib");
  const [mode, setMode] = useState<DPMode>("top-down");
  const cfg = PROBLEMS[problemKey];
  const [input, setInput] = useState(() => cfg.presets[0].value);

  useEffect(() => { setInput(cfg.presets[0].value); }, [problemKey]); // eslint-disable-line react-hooks/exhaustive-deps
  const parsed = useMemo(() => cfg.parseInput(input), [input, cfg]);
  const labels = useMemo(() => cfg.baseLabels(parsed), [parsed, cfg]);

  const frames = useMemo(() => {
    if (mode === "top-down") return buildTopDown(problemKey, parsed);
    return buildBottomUp(problemKey, parsed);
  }, [problemKey, mode, parsed]);

  const player = useStepPlayer(frames);
  const frame = player.current;
  const pseudo = mode === "top-down" ? cfg.pseudoTop : cfg.pseudoBottom;

  const naiveCalls = useMemo(() => countNaiveCalls(problemKey, parsed), [problemKey, parsed]);
  const memoCalls = frames[frames.length - 1]?.calls ?? 0;
  const bottomUpOps = Math.max(1, cfg.upto(parsed) + 1);

  return (
    <AlgoCanvas
      title={`${cfg.label} - ${mode === "top-down" ? "Top-Down Memoization" : "Bottom-Up Tabulation"}`}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <div className="flex gap-1.5 flex-wrap">
            {(Object.keys(PROBLEMS) as ProblemKey[]).map((k) => (
              <PillButton key={k} onClick={() => setProblemKey(k)} active={problemKey === k}>
                <span className="text-xs">{PROBLEMS[k].label}</span>
              </PillButton>
            ))}
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {(["top-down", "bottom-up"] as DPMode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors cursor-pointer ${mode === m ? "border-lime-500 bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200" : "border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:border-stone-400"}`}
              >
                {m === "top-down" ? "Top-Down (recursion + memo)" : "Bottom-Up (tabulation)"}
              </button>
            ))}
          </div>
          <InputEditor
            label="Input"
            value={input}
            placeholder={cfg.placeholder}
            helper={
              problemKey === "coin" ? "Format: amount | coin1, coin2, ..." :
              problemKey === "rob" ? "Comma/space-separated house values." :
              "Integer n (bounded for readability)."
            }
            presets={cfg.presets}
            onApply={setInput}
          />
          <div className="flex gap-4 text-xs text-stone-500 flex-wrap">
            <span>Naive: <strong className="text-rose-600">{naiveCalls.toLocaleString()}</strong> calls</span>
            {mode === "top-down" && <span>Memoized: <strong className="text-emerald-600">{memoCalls.toLocaleString()}</strong> calls</span>}
            <span>Tabulation: <strong className="text-lime-600 dark:text-lime-400">{bottomUpOps.toLocaleString()}</strong> writes</span>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["value", "hit", "calls"]} />}
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 text-xs text-stone-500 flex-wrap">
          <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-lime-400" />just filled</span>
          <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-amber-400" />dependency</span>
          <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-violet-400" />memo hit</span>
        </div>
        {mode === "top-down" && frame?.nodes && frame.nodes.length > 0 && (
          <MiniRecursionTree nodes={frame.nodes} activeId={frame.activeId} height={240} />
        )}
        <DPTable dp={frame?.dp ?? []} just={frame?.just} deps={frame?.depIndices} memoHit={frame?.memoHit} labels={labels} />
        <Callout>{frame?.message ?? "Press play to begin."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { title: "What is DP?", body: "Dynamic programming = recursion with memoization. When a recursive solution solves the same subproblem many times, cache the answer. The complexity drops from exponential to polynomial." },
    { title: "Two styles", body: "Top-down (memoization): write the recursion naturally, add a cache. Bottom-up (tabulation): build the dp table iteratively from the base case up. Both compute the same answer - pick by convenience and stack-safety." },
    { title: "When to use DP", body: "Two properties: (1) Overlapping subproblems - naive recursion recomputes the same thing. (2) Optimal substructure - an optimal answer to the whole includes optimal answers to sub-pieces." },
    { title: "The 3 steps", body: "(a) Define the state: what does dp[i] mean? (b) Write the transition: dp[i] in terms of smaller indices. (c) Specify base cases. Write the state first - everything else follows." },
  ];

  const rows = [
    ["Fibonacci", "dp[i] = dp[i-1] + dp[i-2]"],
    ["Climbing Stairs", "dp[i] = dp[i-1] + dp[i-2]"],
    ["House Robber", "dp[i] = max(dp[i-1], dp[i-2] + h[i])"],
    ["Coin Change", "dp[i] = min(dp[i-c]+1) over coins c"],
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>Mental model</SectionEyebrow>
        <SectionTitle>Compute each subproblem once. Look it up forever.</SectionTitle>
        <Lede>
          Picture Fibonacci&apos;s call tree - most branches compute fib(5) over and over. DP says:
          compute each subproblem once, write the answer on a piece of paper (dp table),
          and look it up every future time.
        </Lede>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {cards.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-bold text-lime-600 dark:text-lime-400 mb-1.5 font-mono tracking-widest">0{i + 1}</div>
            <div className="font-bold text-stone-900 dark:text-stone-50 mb-1">{s.title}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</div>
          </Card>
        ))}
      </div>
      <Card padded={false} className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-stone-50 dark:bg-stone-950/50">
            <tr>
              {["Problem", "Recurrence"].map((h) => (
                <th key={h} className="text-left px-4 py-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 border-b border-stone-200 dark:border-white/10">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r[0]} className={i === 0 ? "" : "border-t border-stone-100 dark:border-white/5"}>
                <td className="px-4 py-2 text-stone-900 dark:text-stone-100">{r[0]}</td>
                <td className="px-4 py-2 font-mono font-bold text-lime-700 dark:text-lime-400">{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try tab                                                            */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Fibonacci with memoization - fib(30) calls how many subproblems?", a: "31", hint: "Each fib(k) for k=0..30 is computed exactly once." },
    { q: "Climbing stairs n=5. Number of ways?", a: "8", hint: "1,1,2,3,5,8 - Fibonacci pattern." },
    { q: "House Robber [2,7,9,3,1]. Max loot?", a: "12", hint: "Rob 2+9+1 = 12." },
    { q: "Coin Change amount=11, coins=[1,2,5]. Min coins?", a: "3", hint: "5+5+1 = 11 → 3 coins." },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Work through each recurrence by hand.</Callout>
      {problems.map((p, i) => {
        const g = guesses[i];
        const revealed = shown[i];
        const correct = g !== null && g.trim() === p.a;
        return (
          <Card key={i}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-bold text-sm text-stone-500 font-mono">#{i + 1}</span>
              <span className="flex-1 text-sm text-stone-900 dark:text-stone-100">{p.q}</span>
              <input
                type="text"
                placeholder="answer"
                value={g ?? ""}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                className="w-24 px-2.5 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-mono text-sm focus:outline-none focus:border-stone-400"
              />
              <button
                type="button"
                onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
                className="px-3 py-1.5 rounded-md text-xs font-semibold border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 cursor-pointer hover:border-stone-400 transition-colors"
              >
                Reveal
              </button>
              {revealed && (
                <span className={`text-xs font-bold px-3 py-1 rounded-md ${correct ? "bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-500" : "bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200 border border-rose-500"}`}>
                  {correct ? `✓ ${p.a}` : `Answer: ${p.a}`}
                </span>
              )}
            </div>
            {revealed && (
              <div className="mt-3">
                <Callout>Hint: {p.hint}</Callout>
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Insight tab                                                        */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>Top-down vs Bottom-up trade-offs</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Top-down is easier to write from the recursive spec - you only fill cells you actually need. Bottom-up avoids stack overflow and is usually slightly faster in practice because it doesn&apos;t pay function-call overhead.
        </p>
      </Card>
      <Card>
        <SubHeading>Space optimization</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Many 1D DPs only look at the last few cells. Fibonacci needs just two variables (prev, curr) - O(1) space. House Robber too. Always check: &quot;does dp[i] only depend on the last k cells?&quot;
        </p>
      </Card>
      <Card>
        <SubHeading>Interview checklist</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Write state + recurrence + base case on paper BEFORE coding.</li>
          <li>Naive Fibonacci is O(2ⁿ); memo makes it O(n).</li>
          <li>Coin change has O(amount · coins) time, O(amount) space.</li>
          <li>House Robber is the canonical &quot;pick or skip&quot; pattern.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L6_DP1D({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
    ...(PRACTICE_TOPIC_SLUG
      ? [{ id: "practice", label: "Practice", icon: <Code2 className="w-4 h-4" />, content: <PracticeTab topicSlug={PRACTICE_TOPIC_SLUG} /> }]
      : []),
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "What is the time complexity of naive recursive Fibonacci vs memoized?",
      options: ["O(n) vs O(n)", "O(2ⁿ) vs O(n)", "O(2ⁿ) vs O(log n)", "O(n log n) vs O(n)"],
      correctIndex: 1,
      explanation: "Naive fib has exponential calls due to repeated subproblems; memoization solves each subproblem once for O(n) total.",
    },
    {
      question: "For House Robber with h=[2, 1, 1, 2], what is the max loot?",
      options: ["3", "4", "5", "6"],
      correctIndex: 1,
      explanation: "dp: 2, 2, 3, 4. Rob houses 0 and 3 to get 2+2 = 4.",
    },
    {
      question: "Climbing stairs recurrence dp[i] = dp[i-1] + dp[i-2] arises because...",
      options: [
        "The last step is 1 OR 2 stairs, and those paths are disjoint",
        "Stairs are monotonically increasing",
        "Two-step moves are faster than one-step",
        "Fibonacci is always the answer",
      ],
      correctIndex: 0,
      explanation: "Count paths ending with a 1-step (dp[i-1]) + those ending with a 2-step (dp[i-2]). Disjoint and exhaustive.",
    },
    {
      question: "Which is NOT a benefit of bottom-up DP over top-down?",
      options: [
        "Avoids stack overflow on deep recursion",
        "Eliminates function-call overhead",
        "Only computes necessary subproblems",
        "Makes space optimization more obvious",
      ],
      correctIndex: 2,
      explanation: "Bottom-up fills the WHOLE table. Top-down only computes what's needed - that's a rare edge it still has over bottom-up.",
    },
  ];

  return (
    <LessonShell
      title="Dynamic Programming (1D)"
      level={6}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The most common hard-interview pattern. Master the state definition."
      nextLessonHint="Dynamic Programming (2D)"
      onQuizComplete={onQuizComplete}
    />
  );
}
