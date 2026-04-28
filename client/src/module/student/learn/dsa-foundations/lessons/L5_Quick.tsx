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
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "sorting";

/* ------------------------------------------------------------------ */
/*  Local types                                                        */
/* ------------------------------------------------------------------ */

type CellState = "default" | "compare" | "swap" | "sorted" | "active" | "pivot" | "visited" | "done" | "low" | "high" | "mid";

type PivotStrategy = "last" | "first" | "random" | "median";

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
/*  Frame types & builder                                              */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  values: number[];
  states: (CellState | undefined)[];
  pointers: Record<string, number>;
  message: string;
  highlightKey?: string;
}

const PSEUDO = [
  "function quickSort(A, lo, hi):",
  "  if lo >= hi: return",
  "  p <- partition(A, lo, hi)",
  "  quickSort(A, lo, p-1)",
  "  quickSort(A, p+1, hi)",
  "",
  "function partition(A, lo, hi):  // Lomuto",
  "  pivot <- A[hi]",
  "  i <- lo - 1",
  "  for j from lo to hi-1:",
  "    if A[j] <= pivot:",
  "      i <- i + 1; swap(A[i], A[j])",
  "  swap(A[i+1], A[hi])",
  "  return i + 1",
];

function pickPivotIndex(arr: number[], lo: number, hi: number, strat: PivotStrategy): number {
  if (strat === "last") return hi;
  if (strat === "first") return lo;
  if (strat === "random") return lo + Math.floor(Math.random() * (hi - lo + 1));
  const mid = Math.floor((lo + hi) / 2);
  const trio = [[lo, arr[lo]], [mid, arr[mid]], [hi, arr[hi]]] as const;
  const sorted = [...trio].sort((a, b) => a[1] - b[1]);
  return sorted[1][0];
}

function buildFrames(input: number[], strategy: PivotStrategy): Frame[] {
  const arr = [...input];
  const n = arr.length;
  const frames: Frame[] = [];
  let comparisons = 0;
  let swaps = 0;
  const finalized = new Set<number>();

  const baseStates = (
    lo: number,
    hi: number,
    extra?: { pivot?: number; i?: number; j?: number; swap?: [number, number] },
  ) => {
    const st: (CellState | undefined)[] = arr.map((_, k) => {
      if (finalized.has(k)) return "sorted";
      if (k < lo || k > hi) return "visited";
      return "default";
    });
    if (extra?.pivot !== undefined) st[extra.pivot] = "pivot";
    if (extra?.i !== undefined && extra.i >= 0) st[extra.i] = "active";
    if (extra?.j !== undefined) st[extra.j] = "compare";
    if (extra?.swap) {
      st[extra.swap[0]] = "swap";
      st[extra.swap[1]] = "swap";
    }
    return st;
  };

  frames.push({
    line: 0, vars: { n, comparisons, swaps }, values: [...arr],
    states: arr.map(() => "default" as CellState), pointers: {},
    message: `Starting quick sort on [${arr.join(", ")}] with pivot = ${strategy}`,
  });

  function sort(lo: number, hi: number) {
    frames.push({
      line: 0, vars: { lo, hi, comparisons, swaps }, values: [...arr],
      states: baseStates(lo, hi), pointers: { lo, hi },
      message: `quickSort(A, ${lo}, ${hi})`,
    });

    if (lo >= hi) {
      if (lo === hi) finalized.add(lo);
      frames.push({
        line: 1, vars: { lo, hi, comparisons, swaps }, values: [...arr],
        states: baseStates(lo, hi), pointers: {},
        message: `Base case lo >= hi - sub-array of size <= 1 is sorted.`,
      });
      return;
    }

    const pivotIdx = pickPivotIndex(arr, lo, hi, strategy);
    if (pivotIdx !== hi) {
      frames.push({
        line: 2, vars: { lo, hi, pivotIdx, "A[pivotIdx]": arr[pivotIdx], comparisons, swaps }, values: [...arr],
        states: baseStates(lo, hi, { pivot: pivotIdx }), pointers: { lo, hi, pivot: pivotIdx },
        message: `Chosen pivot (${strategy}) is A[${pivotIdx}] = ${arr[pivotIdx]}. Move it to the end.`,
      });
      [arr[pivotIdx], arr[hi]] = [arr[hi], arr[pivotIdx]];
      swaps++;
      frames.push({
        line: 2, vars: { lo, hi, comparisons, swaps }, values: [...arr],
        states: baseStates(lo, hi, { pivot: hi }), pointers: { lo, hi, pivot: hi },
        message: `Pivot moved to index ${hi}.`,
      });
    }

    const pivot = arr[hi];
    frames.push({
      line: 7, vars: { lo, hi, pivot, comparisons, swaps }, values: [...arr],
      states: baseStates(lo, hi, { pivot: hi }), pointers: { lo, hi, pivot: hi },
      message: `pivot = A[${hi}] = ${pivot}`,
    });

    let i = lo - 1;
    frames.push({
      line: 8, vars: { lo, hi, pivot, i, comparisons, swaps }, values: [...arr],
      states: baseStates(lo, hi, { pivot: hi }), pointers: { lo, hi, pivot: hi },
      message: `Initialize i = lo - 1 = ${i}. i tracks the boundary of the <=pivot region.`,
    });

    for (let j = lo; j < hi; j++) {
      comparisons++;
      frames.push({
        line: 10,
        vars: { lo, hi, pivot, i, j, "A[j]": arr[j], comparisons, swaps },
        values: [...arr],
        states: baseStates(lo, hi, { pivot: hi, i: i >= lo ? i : undefined, j }),
        pointers: { i: Math.max(i, lo), j, pivot: hi },
        message: `Compare A[${j}] = ${arr[j]} with pivot = ${pivot}`,
      });

      if (arr[j] <= pivot) {
        i++;
        if (i !== j) {
          frames.push({
            line: 11, vars: { lo, hi, pivot, i, j, comparisons, swaps }, values: [...arr],
            states: baseStates(lo, hi, { pivot: hi, swap: [i, j] }), pointers: { i, j, pivot: hi },
            message: `A[${j}] <= pivot - expand the <= region. Swap A[${i}] with A[${j}].`,
          });
          [arr[i], arr[j]] = [arr[j], arr[i]];
          swaps++;
          frames.push({
            line: 11, vars: { lo, hi, pivot, i, j, comparisons, swaps }, values: [...arr],
            states: baseStates(lo, hi, { pivot: hi, i, j }), pointers: { i, j, pivot: hi },
            message: `After swap: window is [${arr.slice(lo, hi + 1).join(", ")}]`,
            highlightKey: "swaps",
          });
        } else {
          frames.push({
            line: 11, vars: { lo, hi, pivot, i, j, comparisons, swaps }, values: [...arr],
            states: baseStates(lo, hi, { pivot: hi, i, j }), pointers: { i, j, pivot: hi },
            message: `A[${j}] <= pivot - i = j, no swap needed. Advance i.`,
          });
        }
      }
    }

    frames.push({
      line: 12, vars: { lo, hi, pivot, i, comparisons, swaps }, values: [...arr],
      states: baseStates(lo, hi, { pivot: hi, swap: [i + 1, hi] }), pointers: { i, pivot: hi },
      message: `Place pivot: swap A[${i + 1}] with A[${hi}] (pivot)`,
    });
    [arr[i + 1], arr[hi]] = [arr[hi], arr[i + 1]];
    swaps++;
    const p = i + 1;
    finalized.add(p);
    frames.push({
      line: 13, vars: { lo, hi, p, comparisons, swaps }, values: [...arr],
      states: baseStates(lo, hi, { pivot: p }), pointers: { p },
      message: `Pivot ${arr[p]} is now at its final position ${p}. Recurse on [${lo}..${p - 1}] and [${p + 1}..${hi}].`,
      highlightKey: "swaps",
    });

    frames.push({
      line: 3, vars: { lo, hi, p, comparisons, swaps }, values: [...arr],
      states: baseStates(lo, p - 1), pointers: { lo, hi: p - 1 },
      message: `Left recursion: quickSort(A, ${lo}, ${p - 1})`,
    });
    sort(lo, p - 1);

    frames.push({
      line: 4, vars: { lo, hi, p, comparisons, swaps }, values: [...arr],
      states: baseStates(p + 1, hi), pointers: { lo: p + 1, hi },
      message: `Right recursion: quickSort(A, ${p + 1}, ${hi})`,
    });
    sort(p + 1, hi);
  }

  if (n > 0) sort(0, n - 1);

  for (let k = 0; k < n; k++) finalized.add(k);
  frames.push({
    line: 0, vars: { n, comparisons, swaps }, values: [...arr],
    states: arr.map(() => "sorted" as CellState), pointers: {},
    message: `Done. Sorted: [${arr.join(", ")}]. ${comparisons} comparisons, ${swaps} swaps.`,
  });

  return frames;
}

function parseArr(s: string): number[] | null {
  const nums = s.split(/[,\s]+/).filter(Boolean).map((x) => Number(x.trim()));
  if (nums.some((n) => Number.isNaN(n))) return null;
  if (nums.length < 2 || nums.length > 10) return null;
  return nums;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("7, 2, 1, 8, 6, 3, 5, 4");
  const [strategy, setStrategy] = useState<PivotStrategy>("last");

  const parsed = parseArr(inputStr) ?? [7, 2, 1, 8, 6, 3, 5, 4];
  const frames = useMemo(() => buildFrames(parsed, strategy), [parsed, strategy]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 flex-wrap">
        <label className="text-xs font-medium text-stone-600 dark:text-stone-400">
          Pivot strategy:
        </label>
        <select
          value={strategy}
          onChange={(e) => setStrategy(e.target.value as PivotStrategy)}
          className="px-3 py-1.5 rounded-md border border-stone-300 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 text-sm outline-none focus:border-lime-400"
        >
          <option value="last">Last element</option>
          <option value="first">First element</option>
          <option value="random">Random</option>
          <option value="median">Median of three</option>
        </select>
        {strategy === "first" && (
          <span className="text-xs text-rose-600 dark:text-rose-400 font-medium">
            Worst case on sorted input!
          </span>
        )}
      </div>

      <AlgoCanvas
        title="Quick Sort (Lomuto partition)"
        player={player}
        input={
          <InputEditor
            label="Array (2-10 numbers)"
            value={inputStr}
            placeholder="e.g. 7, 2, 1, 8, 6, 3, 5, 4"
            helper="Try 'sorted' with pivot=first to see O(n²) worst case."
            presets={[
              { label: "Random", value: "7, 2, 1, 8, 6, 3, 5, 4" },
              { label: "Worst (sorted)", value: "1, 2, 3, 4, 5, 6, 7" },
              { label: "Reverse", value: "7, 6, 5, 4, 3, 2, 1" },
              { label: "Duplicates", value: "4, 2, 4, 1, 4, 2" },
            ]}
            onApply={(v) => {
              if (parseArr(v)) setInputStr(v);
            }}
            onRandom={() => {
              const n = 5 + Math.floor(Math.random() * 4);
              const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 20));
              setInputStr(arr.join(", "));
            }}
          />
        }
        pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame?.line} />}
        variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
      >
        <div className="flex flex-col items-center gap-4">
          <ArrayBars
            values={frame?.values ?? parsed}
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
  const props = [
    { t: "In-place", b: "Only O(log n) extra space for recursion; no auxiliary array." },
    { t: "Average O(n log n)", b: "Each partition takes O(n). Balanced splits give log n levels." },
    { t: "Worst O(n²)", b: "Always picking smallest/largest element as pivot (e.g., first pivot on sorted input)." },
    { t: "Not stable", b: "Long-distance swaps during partition can reorder equal elements." },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>Partition first, then recurse</SectionEyebrow>
        <SectionTitle>One swap-heavy pass and the pivot lands home</SectionTitle>
        <Lede>
          Imagine sorting a hand of cards by picking one card (the pivot), placing every smaller
          card to its left and every larger card to its right, then sorting each pile the same way.
          Pick a pivot. Rearrange the array so everything &le; pivot is on the left, everything
          &gt; pivot on the right. The pivot lands at its correct final position. Recurse on each
          side. No merge step needed; the work happens during partition.
        </Lede>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {props.map((s, i) => (
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
        <strong>Pivot matters.</strong> Random or median-of-three pivots dodge the worst-case
        pathological input. This is why production quicksorts (introsort, pdqsort) always randomize.
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                             */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Lomuto partition on [2, 8, 7, 1, 3, 5, 6, 4] with pivot = 4 (last): final pivot index?", answer: "3" },
    { q: "Quicksort on sorted [1,2,3,4,5] with pivot=first: total comparisons?", answer: "10" },
    { q: "n = 8, balanced pivots every time: recursion depth?", answer: "3" },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>
        Classic trace practice. Worst case comparisons = n(n-1)/2. Balanced depth = ceil(log2 n).
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
        <SubHeading>Lomuto vs Hoare partition</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Lomuto (used here): simple, one i-pointer, easier to teach. Hoare: two pointers moving
          inward, fewer swaps on average, but the pivot does not always end at its final index. Most
          textbooks teach Lomuto; production code uses Hoare or dual-pivot variants.
        </p>
      </Card>
      <Card>
        <SubHeading>Why randomize the pivot?</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          An adversary can craft input that makes your pivot always the smallest element, giving
          O(n²). Randomizing makes the expected running time Theta(n log n) regardless of input.
          Expected means with high probability, not best-case.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview hook</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Worst-case comparisons: n(n-1)/2. Best-case: Theta(n log n).</li>
          <li>Space: Theta(log n) expected recursion stack; Theta(n) worst case.</li>
          <li>
            Introsort = quicksort + fallback to heapsort when recursion depth exceeds 2 log2 n.
          </li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L5_Quick({ onQuizComplete }: Props) {
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
      question: "What is the worst-case time complexity of quicksort?",
      options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
      correctIndex: 1,
      explanation:
        "When every partition is maximally unbalanced (e.g., always picking smallest/largest as pivot), the recursion is n levels deep, giving Theta(n²).",
    },
    {
      question: "In Lomuto partition of [3, 5, 2, 1, 4] with pivot = 4 (last), the pivot ends up at index:",
      options: ["2", "3", "4", "1"],
      correctIndex: 1,
      explanation:
        "Scan j=0..3. A[j] <= 4 for 3, 2, 1; three elements land on the left. Pivot lands at index 3.",
    },
    {
      question: "Which pivot choice gives O(n²) on already-sorted input?",
      options: ["Last element", "Random", "Median of three", "Middle element"],
      correctIndex: 0,
      explanation:
        "With pivot = last (largest on sorted input), every partition produces [n-1 | 0] split: the worst case. Same happens with pivot=first on sorted ascending input.",
    },
    {
      question: "Space complexity of quicksort in the average case (auxiliary)?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctIndex: 1,
      explanation:
        "Quicksort is in-place but uses the recursion stack. Balanced partitions give Theta(log n) stack depth. Worst case: Theta(n).",
    },
  ];

  return (
    <LessonShell
      title="Quick Sort"
      level={5}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Extremely common: partition logic powers kth-largest, Dutch flag, etc."
      nextLessonHint="Non-Comparison Sorts"
      onQuizComplete={onQuizComplete}
    />
  );
}
