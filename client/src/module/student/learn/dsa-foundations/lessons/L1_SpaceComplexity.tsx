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

const PRACTICE_TOPIC_SLUG: string | null = null;

/* ------------------------------------------------------------------ */
/*  Local StackColumn                                                  */
/* ------------------------------------------------------------------ */

interface StackItem {
  value: string;
  color?: string;
}

function StackColumn({
  title,
  items,
  maxHeight,
  width,
  topLabel,
}: {
  title: string;
  items: StackItem[];
  maxHeight: number;
  width: number;
  topLabel?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2" style={{ width }}>
      <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500">
        {title}
      </div>
      <div
        className="relative flex flex-col-reverse gap-0.5 w-full border border-stone-300 dark:border-white/15 rounded-md bg-stone-50 dark:bg-stone-950 overflow-hidden p-1"
        style={{ minHeight: 48, maxHeight }}
      >
        {items.length === 0 ? (
          <div className="text-[10px] font-mono text-stone-400 text-center py-2">empty</div>
        ) : (
          items.map((item, idx) => (
            <div
              key={idx}
              className="w-full px-2 py-1 rounded text-xs font-mono font-bold text-center truncate transition-all duration-300"
              style={{
                background: item.color ? `${item.color}20` : THEME.bg,
                border: `1px solid ${item.color ?? THEME.border}`,
                color: item.color ?? THEME.text,
              }}
            >
              {item.value}
            </div>
          ))
        )}
        {items.length > 0 && topLabel && (
          <div className="absolute top-1 right-1 text-[9px] font-mono text-stone-400 uppercase tracking-widest">
            {topLabel}
          </div>
        )}
      </div>
      <div className="text-[10px] font-mono text-stone-400">
        depth: {items.length}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Frame model                                                        */
/* ------------------------------------------------------------------ */

interface CallRec { id: string; label: string; ret?: number; }
interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  stack: CallRec[];
  maxDepth: number;
  result?: number;
}

/* ------------------------------------------------------------------ */
/*  Recursive factorial                                                */
/* ------------------------------------------------------------------ */

const PSEUDO_REC_FACT = [
  "function fact(n):",
  "  if n <= 1:",
  "    return 1",
  "  return n * fact(n - 1)",
];

function buildRecFact(n0: number): Frame[] {
  const f: Frame[] = [];
  const stack: CallRec[] = [];
  let maxDepth = 0;

  const enter = (n: number, line: number, msg: string) => {
    stack.push({ id: `fact(${n})`, label: `fact(${n})` });
    maxDepth = Math.max(maxDepth, stack.length);
    f.push({ line, vars: { n, depth: stack.length }, message: msg, stack: [...stack], maxDepth });
  };

  const exit = (n: number, ret: number, line: number, msg: string) => {
    stack[stack.length - 1] = { ...stack[stack.length - 1], ret };
    f.push({ line, vars: { n, "returns": ret, depth: stack.length }, message: msg, stack: [...stack], maxDepth });
    stack.pop();
  };

  function go(n: number): number {
    enter(n, 0, `Call fact(${n}) — push a new stack frame.`);
    f.push({ line: 1, vars: { n, depth: stack.length }, message: `Check base case: is ${n} ≤ 1?`, stack: [...stack], maxDepth });
    if (n <= 1) {
      exit(n, 1, 2, `Base case hit. fact(${n}) = 1. Pop frame.`);
      return 1;
    }
    f.push({ line: 3, vars: { n, depth: stack.length }, message: `Recurse: need fact(${n - 1}) before multiplying.`, stack: [...stack], maxDepth });
    const sub = go(n - 1);
    const r = n * sub;
    exit(n, r, 3, `fact(${n}) = ${n} × ${sub} = ${r}. Pop frame.`);
    return r;
  }

  const finalAnswer = go(n0);
  f.push({
    line: 3, vars: { n: n0, result: finalAnswer, "max depth": maxDepth },
    message: `Done. Peak stack depth was ${maxDepth} — that is the auxiliary space O(n).`,
    stack: [], maxDepth, result: finalAnswer,
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Iterative factorial                                                */
/* ------------------------------------------------------------------ */

const PSEUDO_ITER_FACT = [
  "function fact(n):",
  "  result ← 1",
  "  for i in 2..n:",
  "    result ← result * i",
  "  return result",
];

function buildIterFact(n0: number): Frame[] {
  const f: Frame[] = [];
  const stack: CallRec[] = [{ id: "main", label: "main()" }];
  f.push({ line: 0, vars: { n: n0 }, message: `Call fact(${n0}) — single frame on the stack.`, stack: [...stack], maxDepth: 1 });
  let result = 1;
  f.push({ line: 1, vars: { n: n0, result }, message: `Initialise result = 1.`, stack: [...stack], maxDepth: 1 });
  for (let i = 2; i <= n0; i++) {
    f.push({ line: 2, vars: { n: n0, i, result }, message: `Loop head: i = ${i}.`, stack: [...stack], maxDepth: 1 });
    result = result * i;
    f.push({ line: 3, vars: { n: n0, i, result }, message: `result ← result × ${i} = ${result}.`, stack: [...stack], maxDepth: 1 });
  }
  f.push({ line: 4, vars: { n: n0, result }, message: `Return ${result}. Stack never grew past 1 frame → O(1) auxiliary space.`, stack: [...stack], maxDepth: 1, result });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

type Mode = "rec" | "iter";

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("rec");
  const [n, setN] = useState(5);
  const [inputStr, setInputStr] = useState("5");

  const frames = useMemo(
    () => (mode === "rec" ? buildRecFact(n) : buildIterFact(n)),
    [mode, n],
  );
  const player = useStepPlayer(frames);
  const frame = player.current;

  const isRec = mode === "rec";

  return (
    <AlgoCanvas
      title={`Factorial — ${isRec ? "Recursive" : "Iterative"}`}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <InputEditor
            label="Input n"
            value={inputStr}
            placeholder="e.g. 5"
            helper="We trace fact(n). Try both modes and compare the stack height."
            presets={[
              { label: "n = 1", value: "1" },
              { label: "n = 3", value: "3" },
              { label: "n = 5", value: "5" },
              { label: "n = 8", value: "8" },
            ]}
            onApply={(v) => {
              const x = Math.max(1, Math.min(10, Math.floor(Number(v) || 0)));
              if (x > 0) {
                setInputStr(String(x));
                setN(x);
              }
            }}
            onRandom={() => {
              const x = 1 + Math.floor(Math.random() * 8);
              setInputStr(String(x));
              setN(x);
            }}
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              / mode
            </label>
            <div className="flex flex-wrap gap-1.5">
              {([
                ["rec", "Recursive — O(n) stack"],
                ["iter", "Iterative — O(1) stack"],
              ] as const).map(([id, label]) => (
                <PillButton key={id} onClick={() => setMode(id)} active={mode === id}>
                  <span className="text-xs">{label}</span>
                </PillButton>
              ))}
            </div>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={isRec ? PSEUDO_REC_FACT : PSEUDO_ITER_FACT} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["depth", "result", "i"]} />}
    >
      <div className="grid grid-cols-[1fr_auto] gap-6 items-center justify-items-center">
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500">
            Auxiliary space
          </div>
          <div
            className="px-4 py-2.5 rounded-md font-mono text-lg font-extrabold"
            style={{
              background: isRec ? `${THEME.danger}14` : `${THEME.success}14`,
              border: `2px solid ${isRec ? THEME.danger : THEME.success}`,
              color: isRec ? THEME.dangerDark : THEME.successDark,
            }}
          >
            {isRec ? "O(n) — grows with input" : "O(1) — single frame"}
          </div>
          <p className="text-sm text-stone-600 dark:text-stone-400 text-center max-w-xs leading-relaxed">
            Peak stack frames during this trace:{" "}
            <strong className="text-stone-900 dark:text-stone-50">{frame?.maxDepth}</strong>
          </p>
          <Callout className="w-full">{frame?.message ?? "Press play to start."}</Callout>
        </div>

        <div className="overflow-x-auto">
          <StackColumn
            title="Call Stack"
            items={(frame?.stack ?? []).map((s) => ({
              value: s.ret !== undefined ? `${s.label} ↩ ${s.ret}` : s.label,
              color: s.ret !== undefined ? THEME.success : undefined,
            }))}
            maxHeight={300}
            width={150}
            topLabel="top"
          />
        </div>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "Variables are O(1)", b: "A fixed number of scalars (counters, accumulators) uses constant memory no matter how big n is." },
    { t: "New arrays are O(size)", b: "If you allocate a helper array of length n, you just added O(n) space." },
    { t: "Recursion costs stack frames", b: "Each unresolved recursive call keeps its locals alive on the call stack. Depth d → O(d) space." },
    { t: "Data structures count", b: "Hash maps, sets, matrices — their sizes all feed into auxiliary space." },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>space complexity</SectionEyebrow>
        <SectionTitle>How much memory does the algorithm need?</SectionTitle>
        <Lede>
          The total memory an algorithm uses as a function of the input size n. We split it into{" "}
          <strong className="text-stone-900 dark:text-stone-50">input space</strong> (the given
          data) and{" "}
          <strong className="text-stone-900 dark:text-stone-50">auxiliary space</strong> (anything
          extra the algorithm allocates). Interviews care about auxiliary space.
        </Lede>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cards.map((c, i) => (
          <Card key={i}>
            <SubHeading>{c.t}</SubHeading>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{c.b}</p>
          </Card>
        ))}
      </div>

      <Card padded={false} className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-stone-50 dark:bg-stone-950/50">
            <tr>
              {["Algorithm", "Auxiliary space"].map((h) => (
                <th
                  key={h}
                  className="text-left px-4 py-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 border-b border-stone-200 dark:border-white/10"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Iterative factorial / Fibonacci", "O(1)"],
              ["Recursive factorial / Fibonacci (no memo)", "O(n)"],
              ["Merge sort auxiliary array", "O(n)"],
              ["Quick sort (in-place)", "O(log n)"],
              ["BFS on a graph (queue)", "O(V)"],
            ].map(([what, big], i) => (
              <tr key={i} className={i === 0 ? "" : "border-t border-stone-100 dark:border-white/5"}>
                <td className="px-4 py-2 text-stone-600 dark:text-stone-400">{what}</td>
                <td className="px-4 py-2 font-mono font-bold text-lime-700 dark:text-lime-400">{big}</td>
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
    {
      snippet: "for i in 0..n:\n  sum += a[i]",
      options: ["O(1)", "O(n)", "O(n²)"],
      answer: 0,
      explain: "A single accumulator sum is one scalar — constant auxiliary space.",
    },
    {
      snippet: "copy ← new array of size n\nfor i in 0..n:\n  copy[i] ← a[i]",
      options: ["O(1)", "O(log n)", "O(n)"],
      answer: 2,
      explain: "Allocating a fresh size-n array adds O(n) auxiliary space.",
    },
    {
      snippet: "function f(n):\n  if n == 0: return 0\n  return f(n-1) + 1",
      options: ["O(1)", "O(n)", "O(log n)"],
      answer: 1,
      explain: "Recursion depth is n → n stack frames alive at once.",
    },
    {
      snippet: "function bs(a, lo, hi, x):\n  if lo > hi: return -1\n  mid ← (lo + hi) / 2\n  ...",
      options: ["O(1)", "O(log n)", "O(n)"],
      answer: 1,
      explain: "Binary search recursion halves each call → stack depth log₂ n.",
    },
  ];
  const [picked, setPicked] = useState<(number | null)[]>(problems.map(() => null));

  return (
    <div className="flex flex-col gap-3">
      <Callout>
        Pick the auxiliary space for each snippet. Input arrays do not count — only new
        allocations and stack frames.
      </Callout>
      {problems.map((p, i) => {
        const sel = picked[i];
        return (
          <Card key={i}>
            <pre className="bg-stone-950 dark:bg-black text-stone-100 px-4 py-3 rounded-md text-xs font-mono leading-relaxed overflow-x-auto border border-stone-800 mb-3">
              {p.snippet}
            </pre>
            <div className="flex flex-wrap gap-1.5">
              {p.options.map((o, idx) => {
                const correct = sel !== null && idx === p.answer;
                const wrong = sel !== null && idx === sel && idx !== p.answer;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      const v = [...picked];
                      v[i] = idx;
                      setPicked(v);
                    }}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-colors cursor-pointer border ${
                      correct
                        ? "border-lime-500 bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200"
                        : wrong
                          ? "border-rose-500 bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200"
                          : "border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-white/30"
                    }`}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
            {sel !== null && (
              <div className="mt-3">
                <Callout>{p.explain}</Callout>
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
        <SubHeading>Time vs Space trade-offs</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          You can almost always trade one for the other. Memoisation turns exponential-time
          recursion into linear time by spending O(n) extra space. Interviewers love this pattern;
          it shows up in DP, hashing, and caching.
        </p>
      </Card>
      <Card>
        <SubHeading>Tail recursion caveat</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Some languages (Scheme, Scala) optimise tail calls to O(1) space. Mainstream Python,
          Java, and C++ do <em>not</em>. In interviews, assume each recursive call costs a frame.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview-style checklist</SubHeading>
        <ol className="list-decimal pl-5 space-y-1.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Count all <em>new</em> data structures and multiply their sizes.</li>
          <li>Measure recursion depth. Each level = 1 frame.</li>
          <li>Add everything; drop constants and lower-order terms.</li>
          <li>State whether you are reporting input + auxiliary, or just auxiliary.</li>
        </ol>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L1_SpaceComplexity({ onQuizComplete }: Props) {
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
      question: "A recursive function f(n) that calls itself once with argument n-1 uses how much auxiliary space?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctIndex: 2,
      explanation: "Each call lives on the stack until its base case returns. Depth n → n frames → O(n).",
    },
    {
      question: "Which version of factorial uses O(1) auxiliary space?",
      options: [
        "Recursive with cached results",
        "Plain recursive",
        "Iterative with a loop",
        "None, all factorial implementations need O(n)",
      ],
      correctIndex: 2,
      explanation: "A simple for-loop with a single accumulator uses one frame and one scalar, constant space.",
    },
    {
      question: "Merge sort's extra array during merges makes its auxiliary space…",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctIndex: 2,
      explanation: "The temporary buffer holds up to n elements while merging, so auxiliary space is O(n).",
    },
    {
      question: "You trade O(1) space for O(n) space by caching results to skip recomputation. What do you typically gain?",
      options: ["Simpler code", "A smaller stack", "Lower time complexity", "Easier debugging"],
      correctIndex: 2,
      explanation: "Caching results lets exponential-time recursion collapse to polynomial-time, a space-for-time trade.",
    },
  ];

  return (
    <LessonShell
      title="Space Complexity"
      level={1}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Expected whenever recursion or caching is discussed"
      nextLessonHint="Arrays"
      onQuizComplete={onQuizComplete}
    />
  );
}
