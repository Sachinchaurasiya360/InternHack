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
  Card, PillButton, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Frames & builders                                                  */
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

const PSEUDO_BUBBLE = [
  "function bubbleSort(A):",
  "  n ← length(A)",
  "  for i from 0 to n-2:",
  "    swapped ← false",
  "    for j from 0 to n-2-i:",
  "      if A[j] > A[j+1]:",
  "        swap(A[j], A[j+1])",
  "        swapped ← true",
  "    if not swapped: break",
];

const PSEUDO_SELECTION = [
  "function selectionSort(A):",
  "  n ← length(A)",
  "  for i from 0 to n-2:",
  "    min ← i",
  "    for j from i+1 to n-1:",
  "      if A[j] < A[min]:",
  "        min ← j",
  "    swap(A[i], A[min])",
];

function buildBubbleFrames(input: number[]): Frame[] {
  const A = [...input];
  const n = A.length;
  const f: Frame[] = [];
  let comparisons = 0;
  let swaps = 0;
  const sorted = new Set<number>();

  const snap = (line: number, msg: string, extra?: Partial<Frame>): Frame => {
    const states: (CellState | undefined)[] = A.map((_, k) => (sorted.has(k) ? "sorted" : "default"));
    return {
      line,
      vars: { n, comparisons, swaps, ...(extra?.vars || {}) },
      values: [...A],
      states,
      pointers: {},
      message: msg,
      ...extra,
    };
  };

  f.push(snap(0, `Starting bubble sort on [${A.join(", ")}]`));
  f.push(snap(1, `Array length n = ${n}`));

  for (let i = 0; i < n - 1; i++) {
    f.push(snap(2, `Pass ${i + 1}: bubble the largest unsorted element to position ${n - 1 - i}`, { vars: { n, i, comparisons, swaps } }));
    let swapped = false;
    f.push(snap(3, `Reset swapped flag for this pass`, { vars: { n, i, swapped, comparisons, swaps } }));

    for (let j = 0; j < n - 1 - i; j++) {
      comparisons++;
      // compare frame
      {
        const states: (CellState | undefined)[] = A.map((_, k) => (sorted.has(k) ? "sorted" : "default"));
        states[j] = "compare";
        states[j + 1] = "compare";
        f.push({
          line: 5,
          vars: { n, i, j, swapped, comparisons, swaps, "A[j]": A[j], "A[j+1]": A[j + 1] },
          values: [...A],
          states,
          pointers: { j, "j+1": j + 1 },
          message: `Compare A[${j}] = ${A[j]} with A[${j + 1}] = ${A[j + 1]}`,
        });
      }

      if (A[j] > A[j + 1]) {
        const states: (CellState | undefined)[] = A.map((_, k) => (sorted.has(k) ? "sorted" : "default"));
        states[j] = "swap"; states[j + 1] = "swap";
        f.push({
          line: 6,
          vars: { n, i, j, swapped, comparisons, swaps, "A[j]": A[j], "A[j+1]": A[j + 1] },
          values: [...A],
          states,
          pointers: { j, "j+1": j + 1 },
          message: `${A[j]} > ${A[j + 1]} - out of order, swap!`,
        });
        [A[j], A[j + 1]] = [A[j + 1], A[j]];
        swaps++;
        swapped = true;
        const st2: (CellState | undefined)[] = A.map((_, k) => (sorted.has(k) ? "sorted" : "default"));
        st2[j] = "swap"; st2[j + 1] = "swap";
        f.push({
          line: 7,
          vars: { n, i, j, swapped, comparisons, swaps },
          values: [...A],
          states: st2,
          pointers: { j, "j+1": j + 1 },
          message: `Swapped - array now [${A.join(", ")}]`,
          highlightKey: "swaps",
        });
      } else {
        f.push(snap(5, `${A[j]} ≤ ${A[j + 1]} - already in order, no swap`, { vars: { n, i, j, swapped, comparisons, swaps } }));
      }
    }

    // confirm this pass's largest
    sorted.add(n - 1 - i);
    f.push(snap(2, `End of pass ${i + 1}: position ${n - 1 - i} is finalized`));

    if (!swapped) {
      f.push(snap(8, `No swaps this pass - array is already sorted, exit early`));
      // mark remaining as sorted
      for (let k = 0; k < n - 1 - i; k++) sorted.add(k);
      break;
    }
  }

  // mark index 0 as sorted
  sorted.add(0);
  f.push(snap(0, `Done. Sorted array: [${A.join(", ")}]`, { vars: { n, comparisons, swaps } }));
  return f;
}

function buildSelectionFrames(input: number[]): Frame[] {
  const A = [...input];
  const n = A.length;
  const f: Frame[] = [];
  let comparisons = 0;
  let swaps = 0;
  const sorted = new Set<number>();

  const baseStates = (extra?: { min?: number; i?: number; j?: number }) => {
    const st: (CellState | undefined)[] = A.map((_, k) => (sorted.has(k) ? "sorted" : "default"));
    if (extra?.min !== undefined) st[extra.min] = "pivot";
    if (extra?.j !== undefined) st[extra.j] = "compare";
    if (extra?.i !== undefined && !sorted.has(extra.i)) st[extra.i] = "active";
    return st;
  };

  f.push({
    line: 0, vars: { n, comparisons, swaps }, values: [...A], states: A.map(() => "default" as CellState),
    pointers: {}, message: `Starting selection sort on [${A.join(", ")}]`,
  });
  f.push({
    line: 1, vars: { n, comparisons, swaps }, values: [...A], states: A.map(() => "default" as CellState),
    pointers: {}, message: `Array length n = ${n}`,
  });

  for (let i = 0; i < n - 1; i++) {
    f.push({
      line: 2, vars: { n, i, comparisons, swaps }, values: [...A],
      states: baseStates({ i }), pointers: { i },
      message: `Pass ${i + 1}: find minimum of A[${i}..${n - 1}] and place at index ${i}`,
    });

    let min = i;
    f.push({
      line: 3, vars: { n, i, min, comparisons, swaps }, values: [...A],
      states: baseStates({ i, min }), pointers: { i, min },
      message: `Start with min = ${i} (assume A[${i}] = ${A[i]} is smallest)`,
      highlightKey: "min",
    });

    for (let j = i + 1; j < n; j++) {
      comparisons++;
      f.push({
        line: 5, vars: { n, i, j, min, comparisons, swaps, "A[j]": A[j], "A[min]": A[min] }, values: [...A],
        states: baseStates({ i, min, j }), pointers: { i, min, j },
        message: `Compare A[${j}] = ${A[j]} with A[${min}] = ${A[min]}`,
      });
      if (A[j] < A[min]) {
        min = j;
        f.push({
          line: 6, vars: { n, i, j, min, comparisons, swaps }, values: [...A],
          states: baseStates({ i, min, j }), pointers: { i, min, j },
          message: `A[${j}] is smaller - update min = ${j}`,
          highlightKey: "min",
        });
      }
    }

    if (min !== i) {
      const st: (CellState | undefined)[] = A.map((_, k) => (sorted.has(k) ? "sorted" : "default"));
      st[i] = "swap"; st[min] = "swap";
      f.push({
        line: 7, vars: { n, i, min, comparisons, swaps }, values: [...A],
        states: st, pointers: { i, min },
        message: `Swap A[${i}] = ${A[i]} with A[${min}] = ${A[min]}`,
      });
      [A[i], A[min]] = [A[min], A[i]];
      swaps++;
    } else {
      f.push({
        line: 7, vars: { n, i, min, comparisons, swaps }, values: [...A],
        states: baseStates({ i, min }), pointers: { i },
        message: `min equals i - no swap needed`,
      });
    }
    sorted.add(i);
    f.push({
      line: 2, vars: { n, i, comparisons, swaps }, values: [...A],
      states: baseStates(), pointers: {},
      message: `Position ${i} is finalized. Array: [${A.join(", ")}]`,
    });
  }

  sorted.add(n - 1);
  f.push({
    line: 0, vars: { n, comparisons, swaps }, values: [...A],
    states: A.map(() => "sorted" as CellState), pointers: {},
    message: `Done. Sorted array: [${A.join(", ")}]`,
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

function VisualizeTab() {
  const [algo, setAlgo] = useState<"bubble" | "selection">("bubble");
  const [inputStr, setInputStr] = useState("5, 2, 8, 1, 9, 3");
  const parsed = parseArr(inputStr) ?? [5, 2, 8, 1, 9, 3];

  const frames = useMemo(
    () => (algo === "bubble" ? buildBubbleFrames(parsed) : buildSelectionFrames(parsed)),
    [parsed, algo]
  );
  const player = useStepPlayer(frames);
  const frame = player.current!;

  const PSEUDO = algo === "bubble" ? PSEUDO_BUBBLE : PSEUDO_SELECTION;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {(["bubble", "selection"] as const).map((a) => (
          <PillButton
            key={a}
            onClick={() => setAlgo(a)}
            active={algo === a}
            color={A}
          >
            <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>
              {a === "bubble" ? "Bubble Sort" : "Selection Sort"}
            </span>
          </PillButton>
        ))}
      </div>

      <AlgoCanvas
        title={algo === "bubble" ? "Bubble Sort" : "Selection Sort"}
        player={player}
        input={
          <InputEditor
            label="Array (2–12 numbers)"
            value={inputStr}
            placeholder="e.g. 5, 2, 8, 1, 9, 3"
            helper="Comma or space separated."
            presets={[
              { label: "Random", value: "5, 2, 8, 1, 9, 3" },
              { label: "Sorted", value: "1, 2, 3, 4, 5, 6" },
              { label: "Reverse", value: "9, 7, 5, 3, 1" },
              { label: "Nearly sorted", value: "1, 2, 4, 3, 5, 6" },
              { label: "Duplicates", value: "4, 2, 4, 1, 2, 4" },
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
          <ArrayBars
            values={frame.values}
            states={frame.states}
            pointers={frame.pointers}
            height={180}
          />
          <Callout accent={A}>{frame.message}</Callout>
        </div>
      </AlgoCanvas>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Two simple O(n²) sorts</SectionEyebrow>
        <SectionTitle>Training-wheels sorting: compare, swap, repeat</SectionTitle>
        <Lede>
          Bubble sort and selection sort are the &quot;training-wheels&quot; of sorting. Both compare pairs and swap, both take
          quadratic time - but they differ in <em>what</em> they look for each pass.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
        <Card>
          <SubHeading>Bubble Sort</SubHeading>
          <p style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55, margin: 0 }}>
            Scan left-to-right. Every adjacent pair that is out of order gets swapped. After one full pass the largest
            element &quot;bubbles&quot; to the end. Repeat - each pass shrinks the unsorted region by 1.
          </p>
          <div style={{ fontSize: "0.78rem", color: C.textMuted, marginTop: 8 }}>
            <strong>Best:</strong> O(n) (already sorted + early exit) · <strong>Avg/Worst:</strong> O(n²) · <strong>Stable:</strong> yes
          </div>
        </Card>
        <Card>
          <SubHeading>Selection Sort</SubHeading>
          <p style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55, margin: 0 }}>
            For each position i, scan the remaining array to find the minimum, then swap it into position i. One swap
            per pass - fewer writes than bubble, but always O(n²) comparisons.
          </p>
          <div style={{ fontSize: "0.78rem", color: C.textMuted, marginTop: 8 }}>
            <strong>Best/Avg/Worst:</strong> O(n²) · <strong>Swaps:</strong> O(n) · <strong>Stable:</strong> no
          </div>
        </Card>
      </div>
      <Callout accent={A}>
        <strong>Key insight:</strong> both build the sorted portion from the end (bubble) or start (selection). Watch the
        green &quot;sorted&quot; region grow in the visualizer.
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try tab                                                            */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Bubble sort on [4, 1, 3, 2]: how many swaps?", answer: "4" },
    { q: "Selection sort on [5, 1, 4, 2, 3]: how many swaps?", answer: "3" },
    { q: "Bubble sort on sorted [1,2,3,4,5] (with early exit): swaps?", answer: "0" },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        Trace the algorithm on paper and predict swap counts. Then reveal.
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
                <span
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: correct ? C.successDark : C.dangerDark,
                    padding: "4px 12px",
                    borderRadius: 8,
                    background: correct ? `${C.success}14` : `${C.danger}14`,
                    fontFamily: C.heading,
                  }}
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
/*  Insight tab                                                        */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>Why O(n²)?</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Both algorithms compare every pair of positions (roughly n·(n−1)/2 times). Doubling the input quadruples the
          work. That is fine for 100 items, catastrophic for a million.
        </p>
      </Card>
      <Card>
        <SubHeading>Bubble vs Selection in one sentence</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Bubble pushes the largest to the right with many small swaps; selection hunts for the smallest and moves it
          with one big swap. Same time complexity, different &quot;flavor&quot;.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview hook</SubHeading>
        <ul style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
          <li>Count <em>comparisons</em> and <em>swaps</em> separately - both appear in NAT questions.</li>
          <li>Selection sort makes exactly n−1 swaps max; bubble can make up to n(n−1)/2.</li>
          <li>Bubble with early-exit is O(n) on sorted input - classic MCQ trap.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                            */
/* ------------------------------------------------------------------ */

export default function DSA_L5_BubbleSelectionActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "After one full pass of bubble sort on [5, 1, 4, 2, 8], the array becomes:",
      options: ["[1, 4, 2, 5, 8]", "[1, 5, 4, 2, 8]", "[5, 1, 4, 2, 8]", "[1, 2, 4, 5, 8]"],
      correctIndex: 0,
      explanation: "5↔1 → [1,5,4,2,8]; 5↔4 → [1,4,5,2,8]; 5↔2 → [1,4,2,5,8]; 5 vs 8 no swap. 8 is already in place.",
    },
    {
      question: "Selection sort on [29, 10, 14, 37, 13] - after the first swap, the array becomes:",
      options: ["[10, 29, 14, 37, 13]", "[10, 14, 29, 37, 13]", "[13, 10, 14, 37, 29]", "[10, 29, 14, 13, 37]"],
      correctIndex: 0,
      explanation: "Minimum of entire array is 10 at index 1. Swap A[0]=29 with A[1]=10.",
    },
    {
      question: "Worst-case comparison count of bubble sort on n elements is:",
      options: ["n", "n log n", "n(n−1)/2", "n²+n"],
      correctIndex: 2,
      explanation: "Bubble does (n−1) + (n−2) + … + 1 = n(n−1)/2 comparisons in the worst case.",
    },
    {
      question: "Which statement is TRUE about selection sort?",
      options: [
        "Its best case is O(n) when the array is sorted",
        "It is stable by default",
        "It makes at most n−1 swaps regardless of input",
        "It is faster than bubble sort on nearly-sorted arrays",
      ],
      correctIndex: 2,
      explanation: "Exactly one swap per outer iteration, so ≤ n−1 swaps total - independent of input order. Selection is not stable and not adaptive.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Bubble & Selection Sort"
      level={5}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Warm-up problems, rarely asked directly"
      nextLessonHint="Insertion Sort - the adaptive sibling"
    />
  );
}
