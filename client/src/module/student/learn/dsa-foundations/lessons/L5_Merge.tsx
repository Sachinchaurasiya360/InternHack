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
/*  Local RecursionNode / RecursionTree                               */
/* ------------------------------------------------------------------ */

interface RecursionNode {
  id: string;
  label: string;
  parent: string | undefined;
  depth: number;
  state: "active" | "done" | "pending";
  returnValue?: number;
}

function RecursionTree({
  nodes,
  activeId,
}: {
  nodes: RecursionNode[];
  activeId?: string;
}) {
  if (nodes.length === 0) {
    return (
      <p className="text-xs text-stone-500 text-center py-4">Tree builds as recursion unfolds...</p>
    );
  }

  const maxDepth = Math.max(...nodes.map((n) => n.depth));
  const byDepth: RecursionNode[][] = [];
  for (let d = 0; d <= maxDepth; d++) {
    byDepth[d] = nodes.filter((n) => n.depth === d);
  }

  return (
    <div className="flex flex-col gap-2 py-2">
      {byDepth.map((row, d) => (
        <div key={d} className="flex justify-center gap-2 flex-wrap">
          {row.map((n) => {
            const isActive = n.id === activeId;
            return (
              <span
                key={n.id}
                className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border transition-colors ${
                  isActive
                    ? "border-lime-400 bg-lime-400/15 text-lime-700 dark:text-lime-300"
                    : n.state === "done"
                      ? "border-stone-300 dark:border-white/10 bg-stone-100 dark:bg-stone-800 text-stone-500"
                      : "border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400"
                }`}
              >
                {n.label}
              </span>
            );
          })}
        </div>
      ))}
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
  treeNodes: RecursionNode[];
  activeId?: string;
  highlightKey?: string;
}

const PSEUDO = [
  "function mergeSort(A, lo, hi):",
  "  if lo >= hi: return",
  "  mid <- (lo + hi) / 2",
  "  mergeSort(A, lo, mid)",
  "  mergeSort(A, mid+1, hi)",
  "  merge(A, lo, mid, hi)",
  "",
  "function merge(A, lo, mid, hi):",
  "  i <- lo; j <- mid+1; k <- lo",
  "  while i <= mid and j <= hi:",
  "    if A[i] <= A[j]: B[k++] <- A[i++]",
  "    else: B[k++] <- A[j++]",
  "  copy leftovers; copy B back into A",
];

function buildFrames(input: number[]): Frame[] {
  const A = [...input];
  const n = A.length;
  const frames: Frame[] = [];
  let mergeOps = 0;
  let maxDepth = 0;
  const nodes: RecursionNode[] = [];
  let idCounter = 0;

  frames.push({
    line: 0, vars: { n, merges: 0, maxDepth: 0 }, values: [...A],
    states: A.map(() => "default" as CellState), pointers: {},
    message: `Starting merge sort on [${A.join(", ")}]`,
    treeNodes: [], activeId: undefined,
  });

  const stateRange = (lo: number, hi: number, st: CellState): (CellState | undefined)[] => {
    return A.map((_, k) => (k >= lo && k <= hi ? st : "default"));
  };

  function sort(lo: number, hi: number, parentId: string | undefined, curDepth: number): string {
    const myId = `n${idCounter++}`;
    const label = `[${lo}..${hi}]`;
    nodes.push({ id: myId, label, parent: parentId, depth: curDepth, state: "active" });
    maxDepth = Math.max(maxDepth, curDepth);

    frames.push({
      line: 0, vars: { lo, hi, depth: curDepth, maxDepth, merges: mergeOps }, values: [...A],
      states: stateRange(lo, hi, "active"), pointers: { lo, hi },
      message: `Call mergeSort(A, ${lo}, ${hi}) at depth ${curDepth}`,
      treeNodes: [...nodes], activeId: myId,
    });

    if (lo >= hi) {
      const idx = nodes.findIndex((x) => x.id === myId);
      if (idx >= 0) nodes[idx] = { ...nodes[idx], state: "done", returnValue: A[lo] };
      frames.push({
        line: 1, vars: { lo, hi, depth: curDepth, maxDepth, merges: mergeOps }, values: [...A],
        states: stateRange(lo, hi, "sorted"), pointers: { lo },
        message: `Base case: single element A[${lo}] = ${A[lo]} is already sorted.`,
        treeNodes: [...nodes], activeId: myId,
      });
      return myId;
    }

    const mid = Math.floor((lo + hi) / 2);
    frames.push({
      line: 2, vars: { lo, hi, mid, depth: curDepth, merges: mergeOps }, values: [...A],
      states: A.map((_, k) => {
        if (k >= lo && k <= mid) return "low";
        if (k > mid && k <= hi) return "high";
        return "default";
      }), pointers: { lo, mid, hi },
      message: `mid = floor((${lo}+${hi})/2) = ${mid}. Split into [${lo}..${mid}] and [${mid + 1}..${hi}].`,
      treeNodes: [...nodes], activeId: myId,
    });

    frames.push({
      line: 3, vars: { lo, hi, mid, depth: curDepth, merges: mergeOps }, values: [...A],
      states: stateRange(lo, mid, "active"), pointers: { lo, mid },
      message: `Recurse on left half [${lo}..${mid}]`,
      treeNodes: [...nodes], activeId: myId,
    });
    sort(lo, mid, myId, curDepth + 1);

    frames.push({
      line: 4, vars: { lo, hi, mid, depth: curDepth, merges: mergeOps }, values: [...A],
      states: stateRange(mid + 1, hi, "active"), pointers: { mid, hi },
      message: `Recurse on right half [${mid + 1}..${hi}]`,
      treeNodes: [...nodes], activeId: myId,
    });
    sort(mid + 1, hi, myId, curDepth + 1);

    frames.push({
      line: 5, vars: { lo, hi, mid, depth: curDepth, merges: mergeOps }, values: [...A],
      states: A.map((_, k) => {
        if (k >= lo && k <= mid) return "low";
        if (k > mid && k <= hi) return "high";
        return "default";
      }), pointers: { lo, mid, hi },
      message: `Merge sorted halves [${lo}..${mid}] and [${mid + 1}..${hi}]`,
      treeNodes: [...nodes], activeId: myId,
    });

    const buf: number[] = [];
    let i = lo, j = mid + 1;
    while (i <= mid && j <= hi) {
      const st: (CellState | undefined)[] = A.map(() => "default");
      for (let k = lo; k <= mid; k++) st[k] = "low";
      for (let k = mid + 1; k <= hi; k++) st[k] = "high";
      st[i] = "compare";
      st[j] = "compare";
      frames.push({
        line: 10, vars: { lo, hi, mid, i, j, "A[i]": A[i], "A[j]": A[j], merges: mergeOps }, values: [...A],
        states: st, pointers: { i, j },
        message: `Compare A[${i}] = ${A[i]} vs A[${j}] = ${A[j]}`,
        treeNodes: [...nodes], activeId: myId,
      });
      if (A[i] <= A[j]) {
        buf.push(A[i]);
        i++;
      } else {
        buf.push(A[j]);
        j++;
      }
    }
    while (i <= mid) { buf.push(A[i++]); }
    while (j <= hi) { buf.push(A[j++]); }

    for (let k = 0; k < buf.length; k++) A[lo + k] = buf[k];
    mergeOps++;

    const idx = nodes.findIndex((x) => x.id === myId);
    if (idx >= 0) nodes[idx] = { ...nodes[idx], state: "done" };
    frames.push({
      line: 12, vars: { lo, hi, mid, merges: mergeOps }, values: [...A],
      states: stateRange(lo, hi, "sorted"), pointers: { lo, hi },
      message: `Merged: A[${lo}..${hi}] = [${buf.join(", ")}]`,
      treeNodes: [...nodes], activeId: myId, highlightKey: "merges",
    });

    return myId;
  }

  if (n > 0) sort(0, n - 1, undefined, 0);

  frames.push({
    line: 0, vars: { n, merges: mergeOps, maxDepth }, values: [...A],
    states: A.map(() => "sorted" as CellState), pointers: {},
    message: `Done. Sorted: [${A.join(", ")}]. ${mergeOps} merges at max depth ${maxDepth}.`,
    treeNodes: [...nodes],
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
  const [inputStr, setInputStr] = useState("5, 2, 4, 6, 1, 3, 7, 8");
  const parsed = useMemo(() => parseArr(inputStr) ?? [5, 2, 4, 6, 1, 3, 7, 8], [inputStr]);

  const frames = useMemo(() => buildFrames(parsed), [parsed]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="Merge Sort"
      player={player}
      input={
        <InputEditor
          label="Array (2-10 numbers)"
          value={inputStr}
          placeholder="e.g. 5, 2, 4, 6, 1, 3, 7, 8"
          helper="Powers of 2 (4, 8) produce beautifully balanced recursion trees."
          presets={[
            { label: "Random 8", value: "5, 2, 4, 6, 1, 3, 7, 8" },
            { label: "Reverse 8", value: "8, 7, 6, 5, 4, 3, 2, 1" },
            { label: "Sorted 6", value: "1, 2, 3, 4, 5, 6" },
            { label: "Small 4", value: "3, 1, 4, 2" },
          ]}
          onApply={(v) => {
            if (parseArr(v)) setInputStr(v);
          }}
          onRandom={() => {
            const n = 4 + Math.floor(Math.random() * 5);
            const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 30));
            setInputStr(arr.join(", "));
          }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div className="flex flex-col gap-4">
        <ArrayBars
          values={frame?.values ?? parsed}
          states={frame?.states}
          pointers={frame?.pointers}
          height={160}
        />
        <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950/50 p-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
            / recursion tree
          </div>
          <RecursionTree nodes={frame?.treeNodes ?? []} activeId={frame?.activeId} />
        </div>
        <Callout>{frame?.message ?? "Press play to step through the algorithm."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const props = [
    { t: "Recursion tree", b: "log n levels deep. Each level processes all n elements during merges, so O(n log n) total." },
    { t: "Stable", b: "When A[i] <= A[j] we pick left; equal elements keep their original order." },
    { t: "Not in-place", b: "Needs O(n) auxiliary buffer during each merge. Trade-off for the guaranteed speed." },
    { t: "Worst = average", b: "Unlike quicksort, no pathological input exists: O(n log n) always." },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>Divide-and-conquer in three beats</SectionEyebrow>
        <SectionTitle>Split, sort each half, merge them back</SectionTitle>
        <Lede>
          Divide the array at the middle. Conquer each half by sorting it recursively. Combine the
          two sorted halves by merging them into one. The merge step is the clever part: two sorted
          arrays merge in linear time with two pointers.
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
        <strong>Master theorem:</strong> T(n) = 2T(n/2) + O(n) gives O(n log n). Memorize this
        recurrence: it appears everywhere in divide-and-conquer.
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                             */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Merge sort on [5, 2, 4, 6] - depth of recursion tree?", answer: "2" },
    { q: "Merging [1, 3, 5] with [2, 4, 6] - total comparisons?", answer: "5" },
    { q: "n = 16. Number of levels (including root) in merge sort's recursion tree?", answer: "5" },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>
        Remember: each level halves the subproblem size. Merging two sorted lists of size m and k
        takes at most m+k-1 comparisons.
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
        <SubHeading>Counting inversions (bonus)</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          During merge, whenever you pick from the right side, every remaining element on the left
          contributes an inversion. Add <InlineCode>mid - i + 1</InlineCode> to your counter and
          you get total inversions in O(n log n) for free.
        </p>
      </Card>
      <Card>
        <SubHeading>Merge sort vs Quicksort</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Merge: guaranteed O(n log n), stable, O(n) extra memory; great for linked lists and
          external sorting (data bigger than RAM). Quicksort: faster in practice on arrays,
          in-place, but worst case O(n²) without care.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview hook</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Recurrence: T(n) = 2T(n/2) + n = Theta(n log n).</li>
          <li>
            Number of comparisons in merging two sorted arrays of size m, k: between min(m,k) and
            m+k-1.
          </li>
          <li>Space complexity: Theta(n) auxiliary + Theta(log n) recursion stack.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L5_Merge({ onQuizComplete }: Props) {
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
      question: "Time complexity of merge sort in the worst case?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correctIndex: 1,
      explanation:
        "Recurrence T(n) = 2T(n/2) + n solves to Theta(n log n). Unlike quicksort, worst case = average case.",
    },
    {
      question: "Minimum number of comparisons to merge two sorted arrays of sizes 4 and 3?",
      options: ["3", "4", "6", "7"],
      correctIndex: 0,
      explanation:
        "Best case: one array is entirely smaller than the other; you stop after min(m, k) = 3 comparisons.",
    },
    {
      question: "Auxiliary space used by standard merge sort on an array of n elements?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctIndex: 2,
      explanation:
        "Each merge uses a buffer of size up to n; recursion adds O(log n) stack. Total dominated by Theta(n).",
    },
    {
      question: "Why is merge sort preferred over quicksort for linked lists?",
      options: [
        "It has better cache behavior",
        "It does not need random access; naturally works with sequential pointer traversal",
        "It is always faster on average",
        "Linked lists cannot be quicksorted",
      ],
      correctIndex: 1,
      explanation:
        "Merge sort only moves forward through nodes and merges by rewiring pointers; no random access needed. Quicksort's partition wants A[i] access.",
    },
  ];

  return (
    <LessonShell
      title="Merge Sort"
      level={5}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very common: inversion counting, external sorting, linked-list sort"
      nextLessonHint="Quick Sort"
      onQuizComplete={onQuizComplete}
    />
  );
}
