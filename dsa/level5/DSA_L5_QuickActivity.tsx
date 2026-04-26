"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer, ArrayBars,
} from "@/components/engineering/algo";
import type { CellState } from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Frames                                                             */
/* ------------------------------------------------------------------ */

type PivotStrategy = "last" | "first" | "random" | "median";

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
  "  if lo ≥ hi: return",
  "  p ← partition(A, lo, hi)",
  "  quickSort(A, lo, p-1)",
  "  quickSort(A, p+1, hi)",
  "",
  "function partition(A, lo, hi):  // Lomuto",
  "  pivot ← A[hi]",
  "  i ← lo - 1",
  "  for j from lo to hi-1:",
  "    if A[j] ≤ pivot:",
  "      i ← i + 1; swap(A[i], A[j])",
  "  swap(A[i+1], A[hi])",
  "  return i + 1",
];

function pickPivotIndex(arr: number[], lo: number, hi: number, strat: PivotStrategy): number {
  if (strat === "last") return hi;
  if (strat === "first") return lo;
  if (strat === "random") return lo + Math.floor(Math.random() * (hi - lo + 1));
  // median-of-three
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
  const rangeStack: Array<[number, number]> = [];

  const baseStates = (lo: number, hi: number, extra?: { pivot?: number; i?: number; j?: number; swap?: [number, number] }) => {
    const st: (CellState | undefined)[] = arr.map((_, k) => {
      if (finalized.has(k)) return "sorted";
      if (k < lo || k > hi) return "visited"; // dimmed
      return "default";
    });
    if (extra?.pivot !== undefined) st[extra.pivot] = "pivot";
    if (extra?.i !== undefined && extra.i >= 0) st[extra.i] = "active";
    if (extra?.j !== undefined) st[extra.j] = "compare";
    if (extra?.swap) { st[extra.swap[0]] = "swap"; st[extra.swap[1]] = "swap"; }
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
        message: `Base case lo ≥ hi - sub-array of size ≤ 1 is sorted.`,
      });
      return;
    }

    // pick pivot
    const pivotIdx = pickPivotIndex(arr, lo, hi, strategy);
    if (pivotIdx !== hi) {
      // move pivot to end so Lomuto can use A[hi] as pivot
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
        message: `Pivot moved to index ${hi}. Array now [${arr.slice(lo, hi + 1).join(", ")}] in window.`,
      });
    }

    const pivot = arr[hi];
    rangeStack.push([lo, hi]);
    frames.push({
      line: 7, vars: { lo, hi, pivot, comparisons, swaps }, values: [...arr],
      states: baseStates(lo, hi, { pivot: hi }), pointers: { lo, hi, pivot: hi },
      message: `pivot = A[${hi}] = ${pivot}`,
    });

    let i = lo - 1;
    frames.push({
      line: 8, vars: { lo, hi, pivot, i, comparisons, swaps }, values: [...arr],
      states: baseStates(lo, hi, { pivot: hi }), pointers: { lo, hi, pivot: hi },
      message: `Initialize i = lo - 1 = ${i}. i tracks the boundary of the ≤pivot region.`,
    });

    for (let j = lo; j < hi; j++) {
      comparisons++;
      frames.push({
        line: 10, vars: { lo, hi, pivot, i, j, "A[j]": arr[j], comparisons, swaps }, values: [...arr],
        states: baseStates(lo, hi, { pivot: hi, i: i >= lo ? i : undefined, j }), pointers: { i: Math.max(i, lo), j, pivot: hi },
        message: `Compare A[${j}] = ${arr[j]} with pivot = ${pivot}`,
      });

      if (arr[j] <= pivot) {
        i++;
        if (i !== j) {
          frames.push({
            line: 11, vars: { lo, hi, pivot, i, j, comparisons, swaps }, values: [...arr],
            states: baseStates(lo, hi, { pivot: hi, swap: [i, j] }), pointers: { i, j, pivot: hi },
            message: `A[${j}] ≤ pivot - expand the ≤ region. Swap A[${i}] with A[${j}].`,
          });
          [arr[i], arr[j]] = [arr[j], arr[i]];
          swaps++;
          frames.push({
            line: 11, vars: { lo, hi, pivot, i, j, comparisons, swaps }, values: [...arr],
            states: baseStates(lo, hi, { pivot: hi, i, j }), pointers: { i, j, pivot: hi },
            message: `After swap: [${arr.slice(lo, hi + 1).join(", ")}]`,
            highlightKey: "swaps",
          });
        } else {
          frames.push({
            line: 11, vars: { lo, hi, pivot, i, j, comparisons, swaps }, values: [...arr],
            states: baseStates(lo, hi, { pivot: hi, i, j }), pointers: { i, j, pivot: hi },
            message: `A[${j}] ≤ pivot - i = j, so no swap needed. Just advance i.`,
          });
        }
      }
    }

    // Final swap pivot into place
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
    rangeStack.pop();

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
  const frame = player.current!;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <label style={{ fontSize: "0.82rem", color: C.textMuted, fontWeight: 600, fontFamily: C.heading }}>Pivot strategy:</label>
        <select
          value={strategy}
          onChange={(e) => setStrategy(e.target.value as PivotStrategy)}
          style={{
            padding: "7px 12px", borderRadius: 8, border: `1px solid ${C.border}`,
            fontFamily: C.heading, fontSize: "0.85rem", background: C.bg, color: C.text,
            outline: "none",
          }}
        >
          <option value="last">Last element</option>
          <option value="first">First element</option>
          <option value="random">Random</option>
          <option value="median">Median of three</option>
        </select>
        <span style={{ fontSize: "0.78rem", color: C.textMuted, fontFamily: C.heading }}>
          {strategy === "first" ? "Worst case on sorted input!" : ""}
        </span>
      </div>

      <AlgoCanvas
        title="Quick Sort (Lomuto partition)"
        player={player}
        input={
          <InputEditor
            label="Array (2–10 numbers)"
            value={inputStr}
            placeholder="e.g. 7, 2, 1, 8, 6, 3, 5, 4"
            helper="Try 'sorted' with pivot=first to see O(n²) worst case."
            presets={[
              { label: "Random", value: "7, 2, 1, 8, 6, 3, 5, 4" },
              { label: "Worst (sorted)", value: "1, 2, 3, 4, 5, 6, 7" },
              { label: "Reverse", value: "7, 6, 5, 4, 3, 2, 1" },
              { label: "Duplicates", value: "4, 2, 4, 1, 4, 2" },
            ]}
            onApply={(v) => { if (parseArr(v)) setInputStr(v); }}
            onRandom={() => {
              const n = 5 + Math.floor(Math.random() * 4);
              const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 20));
              setInputStr(arr.join(", "));
            }}
          />
        }
        pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame.line} />}
        variables={<VariablesPanel vars={frame.vars} flashKeys={frame.highlightKey ? [frame.highlightKey] : []} />}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <ArrayBars values={frame.values} states={frame.states} pointers={frame.pointers} height={180} />
          <Callout accent={A}>{frame.message}</Callout>
        </div>
      </AlgoCanvas>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Partition first, then recurse</SectionEyebrow>
        <SectionTitle>One swap-heavy pass and the pivot lands home</SectionTitle>
        <Lede>
          Pick a <em>pivot</em>. Rearrange the array so everything ≤ pivot is on the left, everything &gt; pivot on the
          right. The pivot lands at its correct final position. Recurse on each side. No merge step needed - the work
          happens during partition.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
        {[
          { t: "In-place", b: "Only O(log n) extra space for recursion - no auxiliary array." },
          { t: "Average O(n log n)", b: "Each partition takes O(n). Balanced splits give log n levels." },
          { t: "Worst O(n²)", b: "Always picking smallest/largest element as pivot (e.g., first pivot on sorted input)." },
          { t: "Not stable", b: "Long-distance swaps during partition can reorder equal elements." },
        ].map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: A, marginBottom: 6, fontFamily: C.mono, letterSpacing: "0.08em" }}>
              0{i + 1}
            </div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.t}</div>
            <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }}>{s.b}</div>
          </Card>
        ))}
      </div>
      <Callout accent={A}>
        <strong>Pivot matters.</strong> Random or median-of-three pivots dodge the worst-case pathological input. This
        is why production quicksorts (introsort, pdqsort) always randomize.
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try                                                                */
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
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        Classic trace practice. Worst case comparisons = n(n−1)/2. Balanced depth = ⌈log₂ n⌉.
      </Callout>
      {problems.map((p, i) => {
        const g = guesses[i];
        const revealed = shown[i];
        const correct = g !== null && g.trim() === p.answer;
        return (
          <Card key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700, fontSize: "0.85rem", color: C.textMuted, fontFamily: C.mono }}>#{i + 1}</span>
              <span style={{ fontSize: "0.9rem", flex: "1 1 260px", color: C.text }}>{p.q}</span>
              <input
                value={g ?? ""}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                style={{
                  width: 100,
                  padding: "7px 10px",
                  borderRadius: 8,
                  border: `1px solid ${C.border}`,
                  fontFamily: C.mono,
                  fontSize: "0.85rem",
                  outline: "none",
                  background: C.bg,
                  color: C.text,
                }}
                placeholder="?"
              />
              <button
                onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
                style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  border: `1px solid ${C.border}`,
                  background: C.bg,
                  color: C.textSecondary,
                  cursor: "pointer",
                  fontFamily: C.heading,
                }}
              >
                Reveal
              </button>
              {revealed && (
                <span style={{
                  fontSize: "0.82rem", fontWeight: 700,
                  color: correct ? C.successDark : C.dangerDark,
                  padding: "4px 12px", borderRadius: 8,
                  background: correct ? `${C.success}14` : `${C.danger}14`,
                  fontFamily: C.heading,
                }}>
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
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>Lomuto vs Hoare partition</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Lomuto (used here): simple, one i-pointer, easier to teach. Hoare: two pointers moving inward, fewer swaps on
          average, but the pivot doesn&apos;t always end at its final index. Most textbooks teach Lomuto; production code
          uses Hoare or dual-pivot variants.
        </p>
      </Card>
      <Card>
        <SubHeading>Why randomize the pivot?</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          An adversary can craft input that makes your pivot always the smallest element → O(n²). Randomizing makes
          the expected running time Θ(n log n) regardless of input. &quot;Expected&quot; = with high probability, not
          best-case.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview hook</SubHeading>
        <ul style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
          <li>Worst-case comparisons: n(n−1)/2. Best-case: Θ(n log n).</li>
          <li>Space: Θ(log n) expected recursion stack; Θ(n) worst case.</li>
          <li>Introsort = quicksort + fallback to heapsort when recursion depth exceeds 2·log₂ n.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                            */
/* ------------------------------------------------------------------ */

export default function DSA_L5_QuickActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "What is the worst-case time complexity of quicksort?",
      options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
      correctIndex: 1,
      explanation: "When every partition is maximally unbalanced (e.g., always picking smallest/largest as pivot), the recursion is n levels deep → Θ(n²).",
    },
    {
      question: "In Lomuto partition of [3, 5, 2, 1, 4] with pivot = 4 (last), the pivot ends up at index:",
      options: ["2", "3", "4", "1"],
      correctIndex: 1,
      explanation: "Scan j=0..3. A[j] ≤ 4 for all of 3, 2, 1 - three elements land on the left. Pivot lands at index 3.",
    },
    {
      question: "Which pivot choice gives O(n²) on already-sorted input?",
      options: ["Last element", "Random", "Median of three", "Middle element"],
      correctIndex: 0,
      explanation: "With pivot = last (largest on sorted input), every partition produces [n−1 | 0] split - the worst case. Same happens with pivot=first on sorted ascending input.",
    },
    {
      question: "Space complexity of quicksort in the average case (auxiliary)?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctIndex: 1,
      explanation: "Quicksort is in-place but uses the recursion stack. Balanced partitions give Θ(log n) stack depth. Worst case: Θ(n).",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Quick Sort"
      level={5}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Extremely common - partition logic powers kth-largest, Dutch flag, etc."
      nextLessonHint="Counting / Radix / Bucket - non-comparison sorts"
    />
  );
}
