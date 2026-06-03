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
  InlineCode,
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "binary-search";

/* ------------------------------------------------------------------ */
/*  Local types                                                        */
/* ------------------------------------------------------------------ */

type CellState = "default" | "compare" | "swap" | "sorted" | "active" | "pivot" | "visited" | "done" | "low" | "high" | "mid";
type Variant = "basic" | "lower" | "upper" | "rotated";

/* ------------------------------------------------------------------ */
/*  Local ArrayBars                                                    */
/* ------------------------------------------------------------------ */

const STATE_COLORS: Record<CellState, string> = {
  default: THEME.border,
  compare: "#06b6d4",
  swap: "#f59e0b",
  sorted: "#a3e635",
  active: "#818cf8",
  pivot: "#f97316",
  visited: "#d6d3d1",
  done: "#a3e635",
  low: "#60a5fa",
  high: "#f87171",
  mid: "#fb923c",
};

function ArrayBars({
  values,
  states,
  pointers,
  height = 160,
}: {
  values: number[];
  states?: (CellState | undefined)[];
  pointers?: Record<string, number>;
  height?: number;
}) {
  const max = Math.max(...values, 1);
  const barW = Math.max(24, Math.min(48, Math.floor(480 / (values.length || 1))));
  const gap = 4;
  const totalW = values.length * (barW + gap) - gap;

  const ptrByIdx: Record<number, string[]> = {};
  if (pointers) {
    for (const [name, idx] of Object.entries(pointers)) {
      if (!ptrByIdx[idx]) ptrByIdx[idx] = [];
      ptrByIdx[idx].push(name);
    }
  }

  return (
    <div className="w-full overflow-x-auto">
      <div style={{ width: totalW, margin: "0 auto", height: height + 32 }}>
        <svg width={totalW} height={height + 32} style={{ display: "block" }}>
          {values.map((v, i) => {
            const barH = Math.max(4, Math.floor((v / max) * (height - 8)));
            const x = i * (barW + gap);
            const y = height - barH;
            const state = (states?.[i] ?? "default") as CellState;
            const color = STATE_COLORS[state] ?? STATE_COLORS.default;
            const ptrs = ptrByIdx[i] ?? [];
            return (
              <g key={i}>
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={barH}
                  fill={color}
                  rx={3}
                  style={{ transition: "all 0.25s ease" }}
                />
                <text
                  x={x + barW / 2}
                  y={height + 12}
                  textAnchor="middle"
                  fontSize="11"
                  fontFamily={THEME.mono}
                  fill={THEME.textMuted}
                >
                  {v}
                </text>
                {ptrs.map((p, pi) => (
                  <text
                    key={pi}
                    x={x + barW / 2}
                    y={height + 26}
                    textAnchor="middle"
                    fontSize="9"
                    fontFamily={THEME.mono}
                    fill={THEME.accent}
                    fontWeight="700"
                  >
                    {p}
                  </text>
                ))}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Frame types & pseudocode                                          */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | boolean | undefined>;
  values: number[];
  states: (CellState | undefined)[];
  pointers: Record<string, number>;
  message: string;
  highlightKey?: string;
}

const PSEUDO_BASIC = [
  "function binarySearch(A, target):",
  "  low <- 0; high <- n - 1",
  "  while low <= high:",
  "    mid <- (low + high) / 2",
  "    if A[mid] = target: return mid",
  "    else if A[mid] < target: low <- mid + 1",
  "    else: high <- mid - 1",
  "  return -1",
];

const PSEUDO_LOWER = [
  "function lowerBound(A, target):",
  "  low <- 0; high <- n",
  "  while low < high:",
  "    mid <- (low + high) / 2",
  "    if A[mid] < target: low <- mid + 1",
  "    else: high <- mid",
  "  return low  // first index with A[i] >= target",
];

const PSEUDO_UPPER = [
  "function upperBound(A, target):",
  "  low <- 0; high <- n",
  "  while low < high:",
  "    mid <- (low + high) / 2",
  "    if A[mid] <= target: low <- mid + 1",
  "    else: high <- mid",
  "  return low  // first index with A[i] > target",
];

const PSEUDO_ROTATED = [
  "function searchRotated(A, target):",
  "  low <- 0; high <- n - 1",
  "  while low <= high:",
  "    mid <- (low + high) / 2",
  "    if A[mid] = target: return mid",
  "    if A[low] <= A[mid]:          // left half sorted",
  "      if A[low] <= target < A[mid]: high <- mid - 1",
  "      else: low <- mid + 1",
  "    else:                         // right half sorted",
  "      if A[mid] < target <= A[high]: low <- mid + 1",
  "      else: high <- mid - 1",
  "  return -1",
];

/* ------------------------------------------------------------------ */
/*  Frame builders                                                     */
/* ------------------------------------------------------------------ */

function stateShell(n: number, low: number, high: number, active: "incl" | "excl" = "incl"): (CellState | undefined)[] {
  return Array.from({ length: n }, (_, k) => {
    const inside = active === "incl" ? k >= low && k <= high : k >= low && k < high;
    return inside ? "default" : "visited";
  });
}

function buildBasic(arr: number[], target: number): Frame[] {
  const n = arr.length;
  const f: Frame[] = [];
  f.push({ line: 0, vars: { n, target }, values: [...arr], states: arr.map(() => "default" as CellState), pointers: {}, message: `Binary search for ${target} in sorted array.` });

  let low = 0, high = n - 1;
  f.push({ line: 1, vars: { low, high, target }, values: [...arr], states: stateShell(n, low, high), pointers: { low, high }, message: `Initial window [${low}..${high}]` });

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const st = stateShell(n, low, high);
    st[mid] = "mid";
    f.push({ line: 3, vars: { low, high, mid, "A[mid]": arr[mid], target }, values: [...arr], states: st, pointers: { low, mid, high }, message: `mid = floor((${low} + ${high}) / 2) = ${mid}. A[${mid}] = ${arr[mid]}`, highlightKey: "mid" });
    if (arr[mid] === target) {
      const st2 = stateShell(n, low, high);
      st2[mid] = "done";
      f.push({ line: 4, vars: { low, high, mid, target, found: mid }, values: [...arr], states: st2, pointers: { mid }, message: `A[${mid}] = ${target} - found at index ${mid}!`, highlightKey: "found" });
      return f;
    } else if (arr[mid] < target) {
      f.push({ line: 5, vars: { low, high, mid, "A[mid]": arr[mid], target }, values: [...arr], states: stateShell(n, low, high), pointers: { low, mid, high }, message: `A[${mid}] = ${arr[mid]} < ${target} - target is in the right half. low <- ${mid + 1}` });
      low = mid + 1;
    } else {
      f.push({ line: 6, vars: { low, high, mid, "A[mid]": arr[mid], target }, values: [...arr], states: stateShell(n, low, high), pointers: { low, mid, high }, message: `A[${mid}] = ${arr[mid]} > ${target} - target is in the left half. high <- ${mid - 1}` });
      high = mid - 1;
    }
  }

  f.push({ line: 7, vars: { low, high, target, found: -1 }, values: [...arr], states: arr.map(() => "visited" as CellState), pointers: {}, message: `low (${low}) > high (${high}) - ${target} not present. Return -1.` });
  return f;
}

function buildLowerUpper(arr: number[], target: number, upper = false): Frame[] {
  const n = arr.length;
  const f: Frame[] = [];
  const title = upper ? "upperBound" : "lowerBound";
  f.push({ line: 0, vars: { n, target }, values: [...arr], states: arr.map(() => "default" as CellState), pointers: {}, message: `${title}: first index i with A[i] ${upper ? ">" : ">="} ${target}` });
  let low = 0, high = n;
  f.push({ line: 1, vars: { low, high, target }, values: [...arr], states: stateShell(n, low, high, "excl"), pointers: { low, high: Math.min(high, n - 1) }, message: `Half-open window [${low}, ${high}). Result lives somewhere here.` });

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const st = stateShell(n, low, high, "excl");
    st[mid] = "mid";
    f.push({ line: 3, vars: { low, high, mid, "A[mid]": arr[mid], target }, values: [...arr], states: st, pointers: { low, mid, high: Math.min(high, n - 1) }, message: `mid = ${mid}, A[${mid}] = ${arr[mid]}`, highlightKey: "mid" });

    const condition = upper ? arr[mid] <= target : arr[mid] < target;
    if (condition) {
      f.push({ line: 4, vars: { low, high, mid, target }, values: [...arr], states: stateShell(n, mid + 1, high, "excl"), pointers: { low: mid + 1, high: Math.min(high, n - 1) }, message: `A[${mid}] = ${arr[mid]} ${upper ? "<=" : "<"} ${target} - answer must be strictly right. low <- ${mid + 1}` });
      low = mid + 1;
    } else {
      f.push({ line: 5, vars: { low, high, mid, target }, values: [...arr], states: stateShell(n, low, mid, "excl"), pointers: { low, high: Math.max(mid - 1, 0) }, message: `A[${mid}] = ${arr[mid]} ${upper ? ">" : ">="} ${target} - mid could be the answer. high <- ${mid}` });
      high = mid;
    }
  }

  const st = arr.map((_, k) => (k === low ? "done" : "visited") as CellState);
  f.push({ line: 6, vars: { result: low }, values: [...arr], states: st, pointers: { result: Math.min(low, n - 1) }, message: `Converged: low = high = ${low}. ${title} returns ${low}${low < n ? ` (A[${low}] = ${arr[low]})` : " (past end)"}.`, highlightKey: "result" });
  return f;
}

function buildRotated(arr: number[], target: number): Frame[] {
  const n = arr.length;
  const f: Frame[] = [];
  f.push({ line: 0, vars: { n, target }, values: [...arr], states: arr.map(() => "default" as CellState), pointers: {}, message: `Search for ${target} in rotated sorted array.` });
  let low = 0, high = n - 1;
  f.push({ line: 1, vars: { low, high, target }, values: [...arr], states: stateShell(n, low, high), pointers: { low, high }, message: `Initial [${low}..${high}]` });

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const st = stateShell(n, low, high);
    st[mid] = "mid";
    f.push({ line: 3, vars: { low, high, mid, "A[mid]": arr[mid], target }, values: [...arr], states: st, pointers: { low, mid, high }, message: `mid = ${mid}, A[${mid}] = ${arr[mid]}`, highlightKey: "mid" });
    if (arr[mid] === target) {
      const st2 = stateShell(n, low, high);
      st2[mid] = "done";
      f.push({ line: 4, vars: { mid, found: mid }, values: [...arr], states: st2, pointers: { mid }, message: `Found ${target} at ${mid}!`, highlightKey: "found" });
      return f;
    }
    if (arr[low] <= arr[mid]) {
      f.push({ line: 5, vars: { low, mid, "A[low]": arr[low], "A[mid]": arr[mid] }, values: [...arr], states: st, pointers: { low, mid, high }, message: `Left half A[${low}..${mid}] is sorted (A[low] <= A[mid]).` });
      if (arr[low] <= target && target < arr[mid]) {
        f.push({ line: 6, vars: { low, mid, target }, values: [...arr], states: stateShell(n, low, mid - 1), pointers: { low, high: mid - 1 }, message: `Target is in the sorted left: high <- ${mid - 1}` });
        high = mid - 1;
      } else {
        f.push({ line: 7, vars: { low, mid, target }, values: [...arr], states: stateShell(n, mid + 1, high), pointers: { low: mid + 1, high }, message: `Target not in left half. Search right: low <- ${mid + 1}` });
        low = mid + 1;
      }
    } else {
      f.push({ line: 8, vars: { mid, high, "A[mid]": arr[mid], "A[high]": arr[high] }, values: [...arr], states: st, pointers: { low, mid, high }, message: `Right half A[${mid}..${high}] is sorted.` });
      if (arr[mid] < target && target <= arr[high]) {
        f.push({ line: 9, vars: { mid, high, target }, values: [...arr], states: stateShell(n, mid + 1, high), pointers: { low: mid + 1, high }, message: `Target in sorted right: low <- ${mid + 1}` });
        low = mid + 1;
      } else {
        f.push({ line: 10, vars: { low, mid, target }, values: [...arr], states: stateShell(n, low, mid - 1), pointers: { low, high: mid - 1 }, message: `Target not in right half. Search left: high <- ${mid - 1}` });
        high = mid - 1;
      }
    }
  }

  f.push({ line: 12, vars: { target, found: -1 }, values: [...arr], states: arr.map(() => "visited" as CellState), pointers: {}, message: `Not found. Return -1.` });
  return f;
}

function parseInputs(s: string): { arr: number[]; target: number } | null {
  const parts = s.split(/[|;]/);
  if (parts.length !== 2) return null;
  const arr = parts[0].split(/[,\s]+/).filter(Boolean).map((x) => Number(x.trim()));
  const target = Number(parts[1].trim());
  if (arr.some((n) => Number.isNaN(n)) || Number.isNaN(target)) return null;
  if (arr.length < 2 || arr.length > 15) return null;
  return { arr, target };
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [variant, setVariant] = useState<Variant>("basic");
  const [inputStr, setInputStr] = useState("1, 3, 5, 7, 9, 11, 13, 15 | 9");

  const parsed = useMemo(
    () => parseInputs(inputStr) ?? { arr: [1, 3, 5, 7, 9, 11, 13, 15], target: 9 },
    [inputStr],
  );
  const arr = useMemo(
    () => (variant === "rotated" ? parsed.arr : [...parsed.arr].sort((a, b) => a - b)),
    [variant, parsed.arr],
  );

  const frames = useMemo(() => {
    if (variant === "basic") return buildBasic(arr, parsed.target);
    if (variant === "lower") return buildLowerUpper(arr, parsed.target, false);
    if (variant === "upper") return buildLowerUpper(arr, parsed.target, true);
    return buildRotated(arr, parsed.target);
  }, [variant, arr, parsed.target]);

  const player = useStepPlayer(frames);
  const frame = player.current;

  const PSEUDO =
    variant === "basic"
      ? PSEUDO_BASIC
      : variant === "lower"
        ? PSEUDO_LOWER
        : variant === "upper"
          ? PSEUDO_UPPER
          : PSEUDO_ROTATED;

  const presets =
    variant === "rotated"
      ? [
          { label: "Rotated 1", value: "4, 5, 6, 7, 0, 1, 2 | 0" },
          { label: "Rotated 2", value: "6, 7, 1, 2, 3, 4, 5 | 3" },
          { label: "Not rotated", value: "1, 2, 3, 4, 5, 6, 7 | 5" },
          { label: "Not found", value: "4, 5, 6, 7, 0, 1, 2 | 9" },
        ]
      : [
          { label: "Found middle", value: "1, 3, 5, 7, 9, 11, 13, 15 | 9" },
          { label: "Found edge", value: "1, 3, 5, 7, 9, 11, 13, 15 | 1" },
          { label: "Not found", value: "1, 3, 5, 7, 9, 11, 13, 15 | 8" },
          { label: "Duplicates", value: "1, 2, 2, 2, 3, 4 | 2" },
        ];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1.5 flex-wrap">
        {(["basic", "lower", "upper", "rotated"] as const).map((v) => (
          <PillButton key={v} onClick={() => setVariant(v)} active={variant === v}>
            <span className="text-xs font-semibold">
              {v === "basic" ? "Basic" : v === "lower" ? "Lower Bound" : v === "upper" ? "Upper Bound" : "Rotated"}
            </span>
          </PillButton>
        ))}
      </div>

      <AlgoCanvas
        title={`Binary Search - ${variant}`}
        player={player}
        input={
          <InputEditor
            label="Array | Target"
            value={inputStr}
            placeholder="e.g. 1, 3, 5, 7, 9 | 7"
            helper={
              variant === "rotated"
                ? "Rotated sorted array. Target can be anywhere."
                : "Array is auto-sorted. Format: numbers | target"
            }
            presets={presets}
            onApply={(v) => {
              if (parseInputs(v)) setInputStr(v);
            }}
          />
        }
        pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame?.line} />}
        variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
      >
        <div className="flex flex-col items-center gap-4">
          <ArrayBars
            values={frame?.values ?? arr}
            states={frame?.states}
            pointers={frame?.pointers}
            height={180}
          />
          <Callout className="w-full">{frame?.message ?? "Press play to step through the algorithm."}</Callout>
        </div>
      </AlgoCanvas>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const variants = [
    { t: "Basic search", b: "Returns index of target, or -1 if absent. Works on any sorted array." },
    { t: "Lower bound", b: "First index i where A[i] >= target. Useful for 'where do I insert x to keep sorted?'" },
    { t: "Upper bound", b: "First index i where A[i] > target. Combined with lower bound you get count of duplicates." },
    { t: "Rotated sorted", b: "Sorted array rotated at some pivot. Half is still sorted: check which half, then apply basic logic." },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>Halve the search space</SectionEyebrow>
        <SectionTitle>Each step throws away half the candidates</SectionTitle>
        <Lede>
          Looking up a word in a printed dictionary: open near the middle, decide whether your word
          is to the left or right, and repeat. Each step throws away half the remaining pages.
          On a sorted array, look at the middle. If it is the target, done. If the middle is too
          small, the target lives strictly to the right; if too big, strictly to the left. Each step
          halves the search region, giving O(log n).
        </Lede>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {variants.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-700 dark:text-lime-400 mb-1 uppercase tracking-widest">
              0{i + 1}
            </div>
            <div className="font-bold text-stone-900 dark:text-stone-50 mb-1">{s.t}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.b}</div>
          </Card>
        ))}
      </div>

      <Callout>
        <strong>Overflow trick:</strong> <InlineCode>mid = (low + high) / 2</InlineCode> can
        overflow in languages with fixed-size ints. Use{" "}
        <InlineCode>mid = low + (high - low) / 2</InlineCode> instead.
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                             */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Max comparisons for binary search on n=1000?", answer: "10" },
    { q: "lowerBound([1,2,2,2,3,4], 2) returns?", answer: "1" },
    { q: "upperBound([1,2,2,2,3,4], 2) returns?", answer: "4" },
    { q: "Search 0 in rotated [4,5,6,7,0,1,2] - index?", answer: "4" },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>
        <strong>Hint:</strong> ceil(log2 n) is the worst-case comparisons. Count of x in sorted
        array = upper(x) - lower(x).
      </Callout>
      {problems.map((p, i) => {
        const g = guesses[i];
        const revealed = shown[i];
        const correct = g !== null && g.trim() === p.answer;
        return (
          <Card key={i}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[10px] font-mono font-bold text-stone-500">#{i + 1}</span>
              <span className="text-sm flex-1 min-w-52 text-stone-900 dark:text-stone-50">{p.q}</span>
              <input
                value={g ?? ""}
                onChange={(e) => {
                  const v = [...guesses];
                  v[i] = e.target.value;
                  setGuesses(v);
                }}
                className="w-24 px-2.5 py-1.5 rounded-md border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-mono text-sm outline-none focus:border-lime-400"
                placeholder="?"
              />
              <button
                type="button"
                onClick={() => {
                  const v = [...shown];
                  v[i] = true;
                  setShown(v);
                }}
                className="px-3 py-1.5 rounded-md text-xs font-medium border border-stone-300 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:border-stone-500 cursor-pointer transition-colors"
              >
                Reveal
              </button>
              {revealed && (
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-md ${
                    correct
                      ? "bg-lime-400/10 text-lime-700 dark:text-lime-300 border border-lime-400"
                      : "bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500"
                  }`}
                >
                  {correct ? `Correct - ${p.answer}` : `Answer: ${p.answer}`}
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
        <SubHeading>Binary search beyond arrays</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Any monotonic predicate over an ordered domain is binary-searchable: "is this workload
          feasible in time t?", "can we fit items in k boxes?". This pattern, "binary search on the
          answer", shows up in optimization problems constantly.
        </p>
      </Card>
      <Card>
        <SubHeading>Loop invariants</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Lower bound maintains: the answer is in [low, high]. Window always shrinks; we stop when
          low = high. Getting "&lt;" vs "&lt;=" right, and which pointer moves, is the source of 99%
          of bugs.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview hook</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Comparisons in worst case: ceil(log2(n+1)).</li>
          <li>Fails on unsorted input; prerequisite is monotonic order.</li>
          <li>
            Rotated binary search runs in O(log n) when all elements are distinct; O(n) worst case
            with duplicates.
          </li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Standard library map</SubHeading>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>
            <strong>Python <InlineCode>bisect</InlineCode>:</strong>{" "}
            <InlineCode>bisect.bisect_left(a, x)</InlineCode> is lowerBound,{" "}
            <InlineCode>bisect.bisect_right(a, x)</InlineCode> is upperBound.
          </li>
          <li>
            <strong>C++ <InlineCode>&lt;algorithm&gt;</InlineCode>:</strong>{" "}
            <InlineCode>std::lower_bound</InlineCode> and{" "}
            <InlineCode>std::upper_bound</InlineCode> return iterators.
          </li>
          <li>
            <strong>Java <InlineCode>Arrays.binarySearch</InlineCode>:</strong> returns the index if
            found, or <InlineCode>-(insertion_point) - 1</InlineCode> if not.
          </li>
          <li>
            <strong>JS:</strong> no built-in. Roll your own.{" "}
            <InlineCode>arr.indexOf(x)</InlineCode> is linear; never use it as a stand-in.
          </li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Safe-mid form</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <InlineCode>(low + high) / 2</InlineCode> can overflow when both are near INT_MAX. The
          famous Java bug in <InlineCode>Arrays.binarySearch</InlineCode> was caused by exactly
          this. Always write <InlineCode>low + (high - low) / 2</InlineCode>.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L5_BinarySearch({ onQuizComplete }: Props) {
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
      question: "Maximum number of comparisons for binary search on a sorted array of 1,000,000 elements?",
      options: ["10", "20", "100", "1000"],
      correctIndex: 1,
      explanation:
        "ceil(log2(10^6)) is approximately 20. Every step halves the search space, so about 20 halvings suffice.",
    },
    {
      question: "For sorted array [1, 2, 2, 2, 3, 4], what does lowerBound(2) return?",
      options: ["0", "1", "3", "4"],
      correctIndex: 1,
      explanation:
        "Lower bound = smallest index i with A[i] >= 2, which is index 1 (the first 2).",
    },
    {
      question: "Count of x in a sorted array equals:",
      options: ["upper(x) + lower(x)", "upper(x) - lower(x)", "lower(x) - 1", "n - upper(x)"],
      correctIndex: 1,
      explanation:
        "Lower bound is first >= x; upper bound is first > x. The difference is the number of x's.",
    },
    {
      question: "In the rotated sorted array [4, 5, 6, 7, 0, 1, 2], searching for 0 with standard rotated binary search takes:",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctIndex: 1,
      explanation:
        "At each step we identify which half is sorted, decide target's side, and shrink by half. O(log n) with distinct elements.",
    },
  ];

  return (
    <LessonShell
      title="Binary Search & Variants"
      level={5}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Among the most-asked topics: variants and 'BS on answer' problems dominate interviews"
      nextLessonHint="Recursion"
      onQuizComplete={onQuizComplete}
    />
  );
}
