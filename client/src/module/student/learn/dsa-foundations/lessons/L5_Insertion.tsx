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

/* ------------------------------------------------------------------ */
/*  Local ArrayBars component                                          */
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
  heldKey?: number | null;
  heldAt?: number | null;
  highlightKey?: string;
}

const PSEUDO = [
  "function insertionSort(A):",
  "  for i from 1 to n-1:",
  "    key <- A[i]",
  "    j <- i - 1",
  "    while j >= 0 and A[j] > key:",
  "      A[j+1] <- A[j]          // shift right",
  "      j <- j - 1",
  "    A[j+1] <- key              // drop in place",
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
      message: `j = ${j} - scan left while sorted elements are bigger than key.`,
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
        message: `Shift: A[${j + 1}] <- A[${j}] = ${A[j]}. Array now [${A.join(", ")}]`,
        heldKey: key, heldAt: i, highlightKey: "shifts",
      });
      j--;
      f.push({
        line: 6, vars: { n, i, key, j, comparisons, shifts }, values: [...A],
        states: stateFor(i - 1, { j: Math.max(j, -1) }), pointers: j >= 0 ? { j } : {},
        message: `j <- ${j}`,
        heldKey: key, heldAt: i,
      });
    }

    if (j >= 0) {
      comparisons++;
      f.push({
        line: 4, vars: { n, i, key, j, "A[j]": A[j], comparisons, shifts }, values: [...A],
        states: stateFor(i - 1, { j, cmp: j }), pointers: { j },
        message: `A[${j}] = ${A[j]} <= key = ${key} - stop shifting.`,
        heldKey: key, heldAt: i,
      });
    }

    A[j + 1] = key;
    f.push({
      line: 7, vars: { n, i, key, j, comparisons, shifts }, values: [...A],
      states: stateFor(i, { insertAt: j + 1 }), pointers: { insert: j + 1 },
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
/*  Floating key display                                               */
/* ------------------------------------------------------------------ */

function FloatingKey({ frame }: { frame: Frame | undefined }) {
  if (!frame || frame.heldKey === null || frame.heldKey === undefined) {
    return <div className="h-8" />;
  }
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border-2 border-dashed border-lime-400 bg-lime-400/10 text-lime-700 dark:text-lime-300 font-mono font-bold text-sm self-center">
      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">key =</span>
      <span>{frame.heldKey}</span>
      {frame.heldAt !== null && frame.heldAt !== undefined && (
        <span className="text-[10px] text-stone-500">(from i={frame.heldAt})</span>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("5, 2, 4, 6, 1, 3");
  const parsed = parseArr(inputStr) ?? [5, 2, 4, 6, 1, 3];

  const frames = useMemo(() => buildFrames(parsed), [parsed]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="Insertion Sort"
      player={player}
      input={
        <InputEditor
          label="Array (2-12 numbers)"
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
      <div className="flex flex-col gap-3 items-center">
        <FloatingKey frame={frame} />
        <ArrayBars
          values={frame?.values ?? parsed}
          states={frame?.states}
          pointers={frame?.pointers}
          height={180}
        />
        <Callout className="w-full">{frame?.message ?? "Press play to step through the algorithm."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const steps = [
    { t: "Lift", b: "Take A[i] out as 'key', imagine lifting it above the row." },
    { t: "Scan & shift", b: "Walk backward through the sorted prefix, shifting anything larger than key one slot right." },
    { t: "Drop", b: "When you hit a value <= key (or the start), drop key into the gap." },
    { t: "Grow the prefix", b: "A[0..i] is now sorted. Move to i+1 and repeat." },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>The playing-cards sort</SectionEyebrow>
        <SectionTitle>Slot each new element into a sorted prefix</SectionTitle>
        <Lede>
          Imagine sorting a hand of playing cards: pick each new card from the table and slot it
          into the correct position among the cards already in your hand. That is insertion sort,
          one element at a time, always into a sorted prefix.
        </Lede>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {steps.map((s, i) => (
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
        <strong>Why it is loved:</strong> fastest practical sort for small n and nearly-sorted
        input, O(n) best case. Real libraries switch to insertion sort once a quicksort partition
        shrinks below about 16 elements.
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                             */
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
    <div className="flex flex-col gap-3">
      <Callout>Each shift = one element moves one slot to the right. Count them.</Callout>
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
        <SubHeading>Adaptive = O(n) best case</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          On a sorted array, every inner while-check fails immediately, zero shifts, just one
          comparison per outer step. That is O(n). On reverse-sorted input, every element shifts
          all the way back, O(n²). Insertion sort rewards already-mostly-sorted data.
        </p>
      </Card>
      <Card>
        <SubHeading>Inversions and why they matter</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          An inversion is a pair (i, j) with i &lt; j but A[i] &gt; A[j]. Insertion sort's shift
          count equals the number of inversions exactly. Counting inversions is itself a classic
          interview problem (solvable via merge sort).
        </p>
      </Card>
      <Card>
        <SubHeading>Interview hook</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Best case comparisons: n-1. Worst case: n(n-1)/2.</li>
          <li>Stable, in-place, adaptive: three properties worth memorizing.</li>
          <li>
            Binary insertion sort uses binary search to find the slot: O(n log n) comparisons, still
            O(n²) shifts.
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

export default function L5_Insertion({ onQuizComplete }: Props) {
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
      question: "Insertion sort on [4, 3, 2, 1] - total number of shifts?",
      options: ["3", "4", "6", "10"],
      correctIndex: 2,
      explanation:
        "i=1: 1 shift. i=2: 2 shifts. i=3: 3 shifts. Total = 1+2+3 = 6 (= n(n-1)/2 for reverse input).",
    },
    {
      question: "Which input makes insertion sort run in O(n) time?",
      options: ["Reverse-sorted", "Already sorted", "Random", "All elements equal and reverse-sorted"],
      correctIndex: 1,
      explanation:
        "Sorted input triggers the early exit of the inner while loop every iteration: one comparison per element.",
    },
    {
      question: "Is insertion sort stable?",
      options: [
        "Yes",
        "No",
        "Only if input has no duplicates",
        "Only on sorted arrays",
      ],
      correctIndex: 0,
      explanation:
        "The comparison is strictly 'A[j] > key', so equal elements never swap, preserving relative order.",
    },
    {
      question: "Number of shifts performed by insertion sort equals:",
      options: [
        "Number of swaps in bubble sort",
        "Number of inversions in the array",
        "n log n",
        "Always n-1",
      ],
      correctIndex: 1,
      explanation:
        "Each inversion, a pair (i, j) with i<j and A[i]>A[j], causes exactly one shift during sorting.",
    },
  ];

  return (
    <LessonShell
      title="Insertion Sort"
      level={5}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Rarely asked directly; used as subroutine in hybrid sorts"
      nextLessonHint="Merge Sort"
      onQuizComplete={onQuizComplete}
    />
  );
}
