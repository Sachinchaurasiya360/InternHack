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
/*  Frame types & builders                                             */
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
        states[j] = "swap";
        states[j + 1] = "swap";
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
        st2[j] = "swap";
        st2[j + 1] = "swap";
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
        f.push(snap(5, `${A[j]} <= ${A[j + 1]} - already in order, no swap`, { vars: { n, i, j, swapped, comparisons, swaps } }));
      }
    }

    sorted.add(n - 1 - i);
    f.push(snap(2, `End of pass ${i + 1}: position ${n - 1 - i} is finalized`));

    if (!swapped) {
      f.push(snap(8, `No swaps this pass - array is already sorted, exit early`));
      for (let k = 0; k < n - 1 - i; k++) sorted.add(k);
      break;
    }
  }

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
    line: 0, vars: { n, comparisons, swaps }, values: [...A],
    states: A.map(() => "default" as CellState),
    pointers: {}, message: `Starting selection sort on [${A.join(", ")}]`,
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
      st[i] = "swap";
      st[min] = "swap";
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
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [algo, setAlgo] = useState<"bubble" | "selection">("bubble");
  const [inputStr, setInputStr] = useState("5, 2, 8, 1, 9, 3");
  const parsed = useMemo(() => parseArr(inputStr) ?? [5, 2, 8, 1, 9, 3], [inputStr]);

  const frames = useMemo(
    () => (algo === "bubble" ? buildBubbleFrames(parsed) : buildSelectionFrames(parsed)),
    [parsed, algo],
  );
  const player = useStepPlayer(frames);
  const frame = player.current;

  const PSEUDO = algo === "bubble" ? PSEUDO_BUBBLE : PSEUDO_SELECTION;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-1.5">
        {(["bubble", "selection"] as const).map((a) => (
          <PillButton key={a} onClick={() => setAlgo(a)} active={algo === a}>
            <span className="text-xs font-semibold">
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
            label="Array (2-12 numbers)"
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
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>Two simple O(n²) sorts</SectionEyebrow>
        <SectionTitle>Training-wheels sorting: compare, swap, repeat</SectionTitle>
        <Lede>
          Bubble sort and selection sort are the training-wheels of sorting. Both compare pairs and
          swap, both take quadratic time, but they differ in what they look for each pass.
        </Lede>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Card>
          <SubHeading>Bubble Sort</SubHeading>
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            Scan left-to-right. Every adjacent pair that is out of order gets swapped. After one
            full pass the largest element bubbles to the end. Repeat; each pass shrinks the unsorted
            region by 1.
          </p>
          <p className="text-xs text-stone-500 mt-2">
            <strong>Best:</strong> O(n) (already sorted + early exit) · <strong>Avg/Worst:</strong>{" "}
            O(n²) · <strong>Stable:</strong> yes
          </p>
        </Card>
        <Card>
          <SubHeading>Selection Sort</SubHeading>
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            For each position i, scan the remaining array to find the minimum, then swap it into
            position i. One swap per pass, fewer writes than bubble, but always O(n²) comparisons.
          </p>
          <p className="text-xs text-stone-500 mt-2">
            <strong>Best/Avg/Worst:</strong> O(n²) · <strong>Swaps:</strong> O(n) ·{" "}
            <strong>Stable:</strong> no
          </p>
        </Card>
      </div>

      <Callout>
        <strong>Key insight:</strong> both build the sorted portion from the end (bubble) or start
        (selection). Watch the lime-colored sorted region grow in the visualizer.
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                             */
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
    <div className="flex flex-col gap-3">
      <Callout>Trace the algorithm on paper and predict swap counts. Then reveal.</Callout>
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
        <SubHeading>Why O(n²)?</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Both algorithms compare every pair of positions (roughly n(n-1)/2 times). Doubling the
          input quadruples the work. That is fine for 100 items, catastrophic for a million.
        </p>
      </Card>
      <Card>
        <SubHeading>Bubble vs Selection in one sentence</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Bubble pushes the largest to the right with many small swaps; selection hunts for the
          smallest and moves it with one big swap. Same time complexity, different flavor.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview hook</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Count comparisons and swaps separately; both appear in exam questions.</li>
          <li>Selection sort makes exactly n-1 swaps max; bubble can make up to n(n-1)/2.</li>
          <li>Bubble with early-exit is O(n) on sorted input, a classic MCQ trap.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L5_BubbleSelection({ onQuizComplete }: Props) {
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
      question: "After one full pass of bubble sort on [5, 1, 4, 2, 8], the array becomes:",
      options: ["[1, 4, 2, 5, 8]", "[1, 5, 4, 2, 8]", "[5, 1, 4, 2, 8]", "[1, 2, 4, 5, 8]"],
      correctIndex: 0,
      explanation:
        "5 vs 1 → swap → [1,5,4,2,8]; 5 vs 4 → swap → [1,4,5,2,8]; 5 vs 2 → swap → [1,4,2,5,8]; 5 vs 8 → no swap. 8 is already in place.",
    },
    {
      question: "Selection sort on [29, 10, 14, 37, 13] - after the first swap, the array becomes:",
      options: [
        "[10, 29, 14, 37, 13]",
        "[10, 14, 29, 37, 13]",
        "[13, 10, 14, 37, 29]",
        "[10, 29, 14, 13, 37]",
      ],
      correctIndex: 0,
      explanation: "Minimum of entire array is 10 at index 1. Swap A[0]=29 with A[1]=10.",
    },
    {
      question: "Worst-case comparison count of bubble sort on n elements is:",
      options: ["n", "n log n", "n(n-1)/2", "n²+n"],
      correctIndex: 2,
      explanation:
        "Bubble does (n-1) + (n-2) + ... + 1 = n(n-1)/2 comparisons in the worst case.",
    },
    {
      question: "Which statement is TRUE about selection sort?",
      options: [
        "Its best case is O(n) when the array is sorted",
        "It is stable by default",
        "It makes at most n-1 swaps regardless of input",
        "It is faster than bubble sort on nearly-sorted arrays",
      ],
      correctIndex: 2,
      explanation:
        "Exactly one swap per outer iteration, so at most n-1 swaps total, independent of input order. Selection is not stable and not adaptive.",
    },
  ];

  return (
    <LessonShell
      title="Bubble & Selection Sort"
      level={5}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Warm-up problems, rarely asked directly"
      nextLessonHint="Insertion Sort"
      onQuizComplete={onQuizComplete}
    />
  );
}
