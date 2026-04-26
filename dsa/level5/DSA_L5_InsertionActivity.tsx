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

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  values: number[];
  states: (CellState | undefined)[];
  pointers: Record<string, number>;
  message: string;
  heldKey?: number | null; // the lifted key value
  heldAt?: number | null; // index it was lifted from (shown as floating label)
  highlightKey?: string;
}

const PSEUDO = [
  "function insertionSort(A):",
  "  for i from 1 to n-1:",
  "    key ← A[i]",
  "    j ← i - 1",
  "    while j ≥ 0 and A[j] > key:",
  "      A[j+1] ← A[j]          // shift right",
  "      j ← j - 1",
  "    A[j+1] ← key              // drop in place",
];

function buildFrames(input: number[]): Frame[] {
  const A = [...input];
  const n = A.length;
  const f: Frame[] = [];
  let comparisons = 0;
  let shifts = 0;

  const stateFor = (sortedUpTo: number, extra?: { j?: number; cmp?: number; insertAt?: number }) => {
    const st: (CellState | undefined)[] = A.map((_, k) => (k <= sortedUpTo ? "sorted" : "default"));
    if (extra?.cmp !== undefined) st[extra.cmp] = "compare";
    if (extra?.j !== undefined && extra.j >= 0) st[extra.j] = "swap";
    if (extra?.insertAt !== undefined) st[extra.insertAt] = "active";
    return st;
  };

  f.push({
    line: 0, vars: { n, comparisons, shifts }, values: [...A],
    states: A.map((_, k) => (k === 0 ? "sorted" : "default") as CellState),
    pointers: {}, message: `Starting insertion sort on [${A.join(", ")}]. A[0] alone is trivially sorted.`,
    heldKey: null, heldAt: null,
  });

  for (let i = 1; i < n; i++) {
    const key = A[i];
    f.push({
      line: 1, vars: { n, i, comparisons, shifts }, values: [...A],
      states: stateFor(i - 1, { cmp: i }), pointers: { i },
      message: `Outer step i = ${i}. Consider element A[${i}] = ${key}.`,
      heldKey: null, heldAt: null,
    });
    f.push({
      line: 2, vars: { n, i, key, comparisons, shifts }, values: [...A],
      states: stateFor(i - 1, { cmp: i }), pointers: { i },
      message: `Lift key = ${key} out of the array (hold it aside).`,
      heldKey: key, heldAt: i, highlightKey: "key",
    });
    let j = i - 1;
    f.push({
      line: 3, vars: { n, i, key, j, comparisons, shifts }, values: [...A],
      states: stateFor(i - 1, { j }), pointers: { j },
      message: `j = ${j} - we'll scan left while sorted elements are bigger than key.`,
      heldKey: key, heldAt: i,
    });

    while (j >= 0 && A[j] > key) {
      comparisons++;
      f.push({
        line: 4, vars: { n, i, key, j, "A[j]": A[j], comparisons, shifts }, values: [...A],
        states: stateFor(i - 1, { j, cmp: j }), pointers: { j },
        message: `A[${j}] = ${A[j]} > key = ${key} - must shift A[${j}] right.`,
        heldKey: key, heldAt: i,
      });
      A[j + 1] = A[j];
      shifts++;
      f.push({
        line: 5, vars: { n, i, key, j, comparisons, shifts }, values: [...A],
        states: stateFor(i - 1, { j }), pointers: { j, "j+1": j + 1 },
        message: `Shift: A[${j + 1}] ← A[${j}] = ${A[j]}. Array now [${A.join(", ")}]`,
        heldKey: key, heldAt: i, highlightKey: "shifts",
      });
      j--;
      f.push({
        line: 6, vars: { n, i, key, j, comparisons, shifts }, values: [...A],
        states: stateFor(i - 1, { j: Math.max(j, -1) }), pointers: j >= 0 ? { j } : {},
        message: `j ← ${j}`,
        heldKey: key, heldAt: i,
      });
    }

    if (j >= 0) {
      comparisons++;
      f.push({
        line: 4, vars: { n, i, key, j, "A[j]": A[j], comparisons, shifts }, values: [...A],
        states: stateFor(i - 1, { j, cmp: j }), pointers: { j },
        message: `A[${j}] = ${A[j]} ≤ key = ${key} - stop shifting.`,
        heldKey: key, heldAt: i,
      });
    }

    A[j + 1] = key;
    f.push({
      line: 7, vars: { n, i, key, j, comparisons, shifts }, values: [...A],
      states: stateFor(i, { insertAt: j + 1 }), pointers: { "insert": j + 1 },
      message: `Drop key = ${key} at index ${j + 1}. Sorted prefix now A[0..${i}].`,
      heldKey: null, heldAt: null, highlightKey: "key",
    });
  }

  f.push({
    line: 0, vars: { n, comparisons, shifts }, values: [...A],
    states: A.map(() => "sorted" as CellState), pointers: {},
    message: `Done. Sorted: [${A.join(", ")}]`,
    heldKey: null, heldAt: null,
  });

  return f;
}

function parseArr(s: string): number[] | null {
  const nums = s.split(/[,\s]+/).filter(Boolean).map((x) => Number(x.trim()));
  if (nums.some((n) => Number.isNaN(n))) return null;
  if (nums.length < 2 || nums.length > 12) return null;
  return nums;
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

function FloatingKey({ frame }: { frame: Frame }) {
  if (frame.heldKey === null || frame.heldKey === undefined) {
    return <div style={{ height: 34 }} />;
  }
  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center", gap: 8,
      padding: "6px 14px", borderRadius: 8,
      background: `${A}14`,
      border: `2px dashed ${A}`,
      color: A, fontWeight: 700,
      fontFamily: C.mono, fontSize: "0.95rem",
      alignSelf: "center", maxWidth: 240, margin: "0 auto",
      transition: "all 0.3s ease",
    }}>
      <span style={{ fontSize: "0.75rem", color: C.textMuted, fontWeight: 600 }}>key =</span>
      <span>{frame.heldKey}</span>
      {frame.heldAt !== null && frame.heldAt !== undefined && (
        <span style={{ fontSize: "0.7rem", color: C.textMuted, fontWeight: 500 }}>
          (from i={frame.heldAt})
        </span>
      )}
    </div>
  );
}

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("5, 2, 4, 6, 1, 3");
  const parsed = parseArr(inputStr) ?? [5, 2, 4, 6, 1, 3];

  const frames = useMemo(() => buildFrames(parsed), [parsed]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  return (
    <AlgoCanvas
      title="Insertion Sort"
      player={player}
      input={
        <InputEditor
          label="Array (2–12 numbers)"
          value={inputStr}
          placeholder="e.g. 5, 2, 4, 6, 1, 3"
          helper="Try the 'Nearly sorted' preset to see the adaptive O(n) behavior."
          presets={[
            { label: "Random", value: "5, 2, 4, 6, 1, 3" },
            { label: "Sorted", value: "1, 2, 3, 4, 5, 6" },
            { label: "Reverse", value: "6, 5, 4, 3, 2, 1" },
            { label: "Nearly sorted", value: "1, 2, 3, 5, 4, 6" },
            { label: "Duplicates", value: "3, 1, 3, 2, 1, 2" },
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
      <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
        <FloatingKey frame={frame} />
        <ArrayBars values={frame.values} states={frame.states} pointers={frame.pointers} height={180} />
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>The &quot;playing cards&quot; sort</SectionEyebrow>
        <SectionTitle>Slot each new element into a sorted prefix</SectionTitle>
        <Lede>
          Imagine sorting a hand of playing cards: pick each new card from the table and slot it into the correct
          position among the cards already in your hand. That&apos;s insertion sort - one element at a time, always into a
          <em> sorted prefix</em>.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
        {[
          { t: "Lift", b: "Take A[i] out as 'key' - imagine lifting it above the row." },
          { t: "Scan & shift", b: "Walk backward through the sorted prefix, shifting anything larger than key one slot right." },
          { t: "Drop", b: "When you hit a value ≤ key (or the start), drop key into the gap." },
          { t: "Grow the prefix", b: "A[0..i] is now sorted. Move to i+1 and repeat." },
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
        <strong>Why it&apos;s loved:</strong> fastest practical sort for small n and <em>nearly sorted</em> input - O(n) best
        case. Real libraries switch to insertion sort once a quicksort partition shrinks below ~16 elements.
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try tab                                                            */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Insertion sort on [3, 1, 2]: total shifts?", answer: "2" },
    { q: "Insertion sort on already-sorted [1, 2, 3, 4]: total shifts?", answer: "0" },
    { q: "Insertion sort on reverse [4, 3, 2, 1]: total shifts?", answer: "6" },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        Each shift = one element moves one slot to the right. Count them.
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
/*  Insight tab                                                        */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>Adaptive = O(n) best case</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          On a sorted array, every inner while-check fails immediately - zero shifts, just one comparison per outer
          step. That&apos;s O(n). On reverse-sorted input, every element shifts all the way back - O(n²). Insertion sort
          &quot;rewards&quot; already-mostly-sorted data.
        </p>
      </Card>
      <Card>
        <SubHeading>Inversions & why they matter</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          An <em>inversion</em> is a pair (i, j) with i &lt; j but A[i] &gt; A[j]. Insertion sort&apos;s shift count equals
          the number of inversions exactly. Counting inversions is itself a classic interview problem (via merge sort).
        </p>
      </Card>
      <Card>
        <SubHeading>Interview hook</SubHeading>
        <ul style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
          <li>Best case comparisons: n−1. Worst case: n(n−1)/2.</li>
          <li>Stable, in-place, adaptive - three properties worth memorizing.</li>
          <li>Binary insertion sort uses binary search to find the slot - O(n log n) comparisons, still O(n²) shifts.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                            */
/* ------------------------------------------------------------------ */

export default function DSA_L5_InsertionActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Insertion sort on [4, 3, 2, 1] - total number of shifts?",
      options: ["3", "4", "6", "10"],
      correctIndex: 2,
      explanation: "i=1: 1 shift. i=2: 2 shifts. i=3: 3 shifts. Total = 1+2+3 = 6 (= n(n−1)/2 for reverse input).",
    },
    {
      question: "Which input makes insertion sort run in O(n) time?",
      options: ["Reverse-sorted", "Already sorted", "Random", "All elements equal and reverse-sorted"],
      correctIndex: 1,
      explanation: "Sorted input triggers the early exit of the inner while loop every iteration → one comparison per element.",
    },
    {
      question: "Is insertion sort stable?",
      options: ["Yes", "No", "Only if input has no duplicates", "Only on sorted arrays"],
      correctIndex: 0,
      explanation: "The comparison is strictly 'A[j] > key', so equal elements never swap, preserving relative order.",
    },
    {
      question: "Number of shifts performed by insertion sort equals:",
      options: ["Number of swaps in bubble sort", "Number of inversions in the array", "n log n", "Always n−1"],
      correctIndex: 1,
      explanation: "Each inversion - a pair (i, j), i<j with A[i]>A[j] - causes exactly one shift during sorting.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Insertion Sort"
      level={5}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Rarely asked directly; used as subroutine in hybrid sorts"
      nextLessonHint="Merge Sort - our first O(n log n) champion"
    />
  );
}
