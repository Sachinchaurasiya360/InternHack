"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer, ArrayBars, RecursionTree,
} from "@/components/engineering/algo";
import type { CellState, RecursionNode } from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Frames                                                             */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  values: number[];                 // current array snapshot
  states: (CellState | undefined)[];
  pointers: Record<string, number>;
  message: string;
  treeNodes: RecursionNode[];
  activeId?: string;
  highlightKey?: string;
}

const PSEUDO = [
  "function mergeSort(A, lo, hi):",
  "  if lo ≥ hi: return",
  "  mid ← (lo + hi) / 2",
  "  mergeSort(A, lo, mid)",
  "  mergeSort(A, mid+1, hi)",
  "  merge(A, lo, mid, hi)",
  "",
  "function merge(A, lo, mid, hi):",
  "  i ← lo; j ← mid+1; k ← lo",
  "  while i ≤ mid and j ≤ hi:",
  "    if A[i] ≤ A[j]: B[k++] ← A[i++]",
  "    else: B[k++] ← A[j++]",
  "  copy leftovers; copy B back into A",
];

function buildFrames(input: number[]): Frame[] {
  const A = [...input];
  const n = A.length;
  const frames: Frame[] = [];
  let mergeOps = 0;
  let depth = 0;
  let maxDepth = 0;
  const nodes: RecursionNode[] = [];
  let idCounter = 0;

  // Initial frame
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
    depth = Math.max(depth, curDepth);
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
      message: `mid = ⌊(${lo}+${hi})/2⌋ = ${mid}. Split into [${lo}..${mid}] and [${mid + 1}..${hi}].`,
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

    // Merge phase
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
      st[i] = "compare"; st[j] = "compare";
      frames.push({
        line: 10, vars: { lo, hi, mid, i, j, "A[i]": A[i], "A[j]": A[j], merges: mergeOps }, values: [...A],
        states: st, pointers: { i, j },
        message: `Compare A[${i}] = ${A[i]} vs A[${j}] = ${A[j]}`,
        treeNodes: [...nodes], activeId: myId,
      });
      if (A[i] <= A[j]) {
        buf.push(A[i]); i++;
      } else {
        buf.push(A[j]); j++;
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
  const parsed = parseArr(inputStr) ?? [5, 2, 4, 6, 1, 3, 7, 8];

  const frames = useMemo(() => buildFrames(parsed), [parsed]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  return (
    <AlgoCanvas
      title="Merge Sort"
      player={player}
      input={
        <InputEditor
          label="Array (2–10 numbers)"
          value={inputStr}
          placeholder="e.g. 5, 2, 4, 6, 1, 3, 7, 8"
          helper="Powers of 2 (4, 8) produce beautifully balanced recursion trees."
          presets={[
            { label: "Random 8", value: "5, 2, 4, 6, 1, 3, 7, 8" },
            { label: "Reverse 8", value: "8, 7, 6, 5, 4, 3, 2, 1" },
            { label: "Sorted 6", value: "1, 2, 3, 4, 5, 6" },
            { label: "Small 4", value: "3, 1, 4, 2" },
          ]}
          onApply={(v) => { if (parseArr(v)) setInputStr(v); }}
          onRandom={() => {
            const n = 4 + Math.floor(Math.random() * 5);
            const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 30));
            setInputStr(arr.join(", "));
          }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <ArrayBars values={frame.values} states={frame.states} pointers={frame.pointers} height={160} />
        <div style={{
          background: C.bgSoft, border: `1px solid ${C.border}`,
          borderRadius: 8, padding: 10,
        }}>
          <div style={{
            fontSize: "0.75rem", fontWeight: 700, color: C.textMuted,
            textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6,
          }}>
            Recursion Tree
          </div>
          {frame.treeNodes.length > 0 ? (
            <RecursionTree nodes={frame.treeNodes} activeId={frame.activeId} width={680} height={280} />
          ) : (
            <div style={{ fontSize: "0.85rem", color: C.textMuted, textAlign: "center", padding: 30 }}>
              Tree builds as recursion unfolds…
            </div>
          )}
        </div>
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Divide-and-conquer in three beats</SectionEyebrow>
        <SectionTitle>Split, sort each half, merge them back</SectionTitle>
        <Lede>
          <strong>Divide</strong> the array at the middle. <strong>Conquer</strong> each half by sorting it
          recursively. <strong>Combine</strong> the two sorted halves by merging them into one. The merge step is the
          clever part - two sorted arrays merge in linear time with two pointers.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
        {[
          { t: "Recursion tree", b: "log n levels deep. Each level processes all n elements during merges → O(n log n) total." },
          { t: "Stable", b: "When A[i] ≤ A[j] we pick left - equal elements keep their original order." },
          { t: "Not in-place", b: "Needs O(n) auxiliary buffer during each merge. Trade-off for the guaranteed speed." },
          { t: "Worst = average", b: "Unlike quicksort, no pathological input exists - O(n log n) always." },
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
        <strong>Master theorem:</strong> T(n) = 2·T(n/2) + O(n) ⇒ O(n log n). Memorize this recurrence - it appears
        everywhere in divide-and-conquer.
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try                                                                */
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
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        Remember: each level halves the subproblem size. Merging two sorted lists of size m and k takes at most m+k−1 comparisons.
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
        <SubHeading>Counting inversions (bonus)</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          During merge, whenever you pick from the right side, every remaining element on the left contributes an
          inversion. Add <code style={{ fontFamily: C.mono }}>mid − i + 1</code> to your counter - you get total inversions in O(n log n) &quot;for free&quot;.
        </p>
      </Card>
      <Card>
        <SubHeading>Merge sort vs Quicksort</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Merge: guaranteed O(n log n), stable, O(n) extra memory - great for linked lists and external sorting (data
          bigger than RAM). Quicksort: faster in practice on arrays, in-place, but worst case O(n²) without care.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview hook</SubHeading>
        <ul style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
          <li>Recurrence: T(n) = 2T(n/2) + n = Θ(n log n).</li>
          <li>Number of comparisons in merging two sorted arrays of size m, k: between min(m,k) and m+k−1.</li>
          <li>Space complexity: Θ(n) auxiliary + Θ(log n) recursion stack.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                            */
/* ------------------------------------------------------------------ */

export default function DSA_L5_MergeActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Time complexity of merge sort in the worst case?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correctIndex: 1,
      explanation: "Recurrence T(n) = 2T(n/2) + n solves to Θ(n log n). Unlike quicksort, worst case = average case.",
    },
    {
      question: "Minimum number of comparisons to merge two sorted arrays of sizes 4 and 3?",
      options: ["3", "4", "6", "7"],
      correctIndex: 0,
      explanation: "Best case: one array is entirely smaller than the other - you stop after min(m, k) = 3 comparisons.",
    },
    {
      question: "Auxiliary space used by standard merge sort on an array of n elements?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctIndex: 2,
      explanation: "Each merge uses a buffer of size up to n; recursion adds O(log n) stack. Total dominated by Θ(n).",
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
      explanation: "Merge sort only moves forward through nodes and merges by rewiring pointers - no random access needed. Quicksort's partition wants A[i] access.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Merge Sort"
      level={5}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very common - inversion counting, external sorting, linked-list sort"
      nextLessonHint="Quick Sort - the in-place partition champion"
    />
  );
}
