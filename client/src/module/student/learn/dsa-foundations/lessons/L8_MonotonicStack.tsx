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
  CodeBlock,
  InlineCode,
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "stack";

/* ------------------------------------------------------------------ */
/*  Types & helpers                                                    */
/* ------------------------------------------------------------------ */

type Mode = "nge" | "lrh";

type CellState = "default" | "active" | "compare" | "done" | "window" | "path";

const STATE_COLOR: Record<CellState, { bg: string; fg: string; border: string }> = {
  default: { bg: THEME.bg, fg: THEME.textMuted, border: THEME.border },
  active:  { bg: THEME.accent, fg: "#fff", border: THEME.accentDark },
  compare: { bg: "#c7d2fe", fg: "#3730a3", border: "#6366f1" },
  done:    { bg: "#dcfce7", fg: "#166534", border: "#16a34a" },
  window:  { bg: "#dbeafe", fg: "#1e40af", border: "#3b82f6" },
  path:    { bg: "#fef9c3", fg: "#713f12", border: "#ca8a04" },
};

interface Arrow { from: number; to: number }

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  arrStates: CellState[];
  stack: { idx: number; val: number }[];
  result: (number | null)[];
  arrows: Arrow[];
  bestRect: { lo: number; hi: number; h: number; area: number } | null;
  flashKey?: string;
}

/* ------------------------------------------------------------------ */
/*  Local StackColumn helper                                           */
/* ------------------------------------------------------------------ */

function StackColumn({
  items,
  title = "Stack",
  topLabel = "top",
  emptyLabel = "empty",
  maxHeight = 240,
}: {
  items: { value: string; label?: string }[];
  title?: string;
  topLabel?: string;
  emptyLabel?: string;
  maxHeight?: number;
}) {
  return (
    <div
      className="border border-stone-200 dark:border-white/10 rounded-md bg-stone-50 dark:bg-stone-950 p-3"
      style={{ maxHeight, overflowY: "auto", minWidth: 140 }}
    >
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
        {title}
      </div>
      {items.length === 0 ? (
        <div className="text-xs text-stone-400 italic">{emptyLabel}</div>
      ) : (
        <div className="flex flex-col-reverse gap-1">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-2 px-2 py-1 rounded bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 text-xs font-mono"
            >
              <span className="font-bold text-stone-900 dark:text-stone-50">{item.value}</span>
              {i === items.length - 1 && (
                <span className="text-[10px] text-lime-700 dark:text-lime-400 font-bold">{topLabel}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ArrayBars local helper                                             */
/* ------------------------------------------------------------------ */

function ArrayBars({
  values,
  states,
  height = 120,
}: {
  values: number[];
  states: CellState[];
  height?: number;
}) {
  const maxVal = Math.max(1, ...values);
  const barW = Math.max(28, Math.min(56, Math.floor(500 / Math.max(values.length, 1))));

  return (
    <div
      className="flex items-end gap-1 overflow-x-auto pb-1"
      style={{ height, alignItems: "flex-end" }}
    >
      {values.map((v, i) => {
        const col = STATE_COLOR[states[i] ?? "default"];
        const bh = Math.max(6, Math.round((v / maxVal) * (height - 28)));
        return (
          <div
            key={i}
            className="flex flex-col items-center gap-0.5 shrink-0"
            style={{ width: barW }}
          >
            <div
              className="text-[10px] font-mono font-bold text-center"
              style={{ color: col.fg !== "#fff" ? THEME.text : THEME.accent }}
            >
              {v}
            </div>
            <div
              style={{
                width: barW - 4,
                height: bh,
                background: col.bg,
                border: `1.5px solid ${col.border}`,
                borderRadius: 4,
                transition: "all 0.3s ease",
              }}
            />
            <div className="text-[10px] font-mono text-stone-400">[{i}]</div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Pseudocode                                                         */
/* ------------------------------------------------------------------ */

const PSEUDO_NGE = [
  "function nextGreater(A):",
  "  stack ← []; result ← [-1] * n",
  "  for i in 0..n-1:",
  "    while stack not empty and A[stack.top] < A[i]:",
  "      j ← stack.pop()",
  "      result[j] ← A[i]",
  "    stack.push(i)",
  "  return result",
];

const PSEUDO_LRH = [
  "function largestRectangle(H):",
  "  stack ← []; best ← 0",
  "  for i in 0..n:   // sentinel at n",
  "    h ← (i == n) ? 0 : H[i]",
  "    while stack not empty and H[stack.top] > h:",
  "      top ← stack.pop()",
  "      width ← stack empty ? i : i - stack.top - 1",
  "      best ← max(best, H[top] * width)",
  "    stack.push(i)",
  "  return best",
];

/* ------------------------------------------------------------------ */
/*  Frame builders                                                     */
/* ------------------------------------------------------------------ */

function buildFramesNGE(A: number[]): Frame[] {
  const n = A.length;
  const f: Frame[] = [];
  const stack: { idx: number; val: number }[] = [];
  const result: (number | null)[] = Array(n).fill(null);
  const base = () => Array<CellState>(n).fill("default");

  f.push({ line: 0, vars: { n }, message: `Find the next greater element for each item in [${A.join(",")}].`, arrStates: base(), stack: [], result: [...result], arrows: [], bestRect: null });
  f.push({ line: 1, vars: { stack: "[]" }, flashKey: "stack", message: "Stack is empty; result initialized to -1.", arrStates: base(), stack: [], result: [...result], arrows: [], bestRect: null });

  for (let i = 0; i < n; i++) {
    const st = base(); st[i] = "active";
    f.push({ line: 2, vars: { i, "A[i]": A[i] }, flashKey: "i", message: `Scan i=${i}, A[i]=${A[i]}.`, arrStates: st, stack: [...stack], result: [...result], arrows: [], bestRect: null });
    const arrows: Arrow[] = [];
    while (stack.length && stack[stack.length - 1].val < A[i]) {
      const st2 = base(); st2[i] = "active";
      stack.forEach((s) => (st2[s.idx] = "compare"));
      f.push({ line: 3, vars: { top: stack[stack.length - 1].idx, "A[top]": stack[stack.length - 1].val, "A[i]": A[i] }, message: `A[top]=${stack[stack.length - 1].val} < A[i]=${A[i]} - pop.`, arrStates: st2, stack: [...stack], result: [...result], arrows, bestRect: null });
      const j = stack.pop()!;
      result[j.idx] = A[i];
      arrows.push({ from: j.idx, to: i });
      const st3 = base(); st3[i] = "active"; st3[j.idx] = "done";
      stack.forEach((s) => (st3[s.idx] = "window"));
      f.push({ line: 5, vars: { j: j.idx, "result[j]": A[i] }, flashKey: "result", message: `result[${j.idx}] = ${A[i]} (A[${j.idx}]=${j.val}'s next greater).`, arrStates: st3, stack: [...stack], result: [...result], arrows: [...arrows], bestRect: null });
    }
    stack.push({ idx: i, val: A[i] });
    const stEnd = base(); stEnd[i] = "window";
    stack.forEach((s) => (stEnd[s.idx] = "window"));
    f.push({ line: 6, vars: { pushed: i }, flashKey: "stack", message: `Push i=${i} onto stack. Stack holds indices waiting for their next greater.`, arrStates: stEnd, stack: [...stack], result: [...result], arrows: [...arrows], bestRect: null });
  }
  f.push({ line: 7, vars: { result: `[${result.map((x) => x ?? -1).join(",")}]` }, message: `Done. Items still on stack had no next greater.`, arrStates: base(), stack: [...stack], result: [...result], arrows: [], bestRect: null });
  return f;
}

function buildFramesLRH(H: number[]): Frame[] {
  const n = H.length;
  const f: Frame[] = [];
  const stack: { idx: number; val: number }[] = [];
  let best = 0;
  let bestRect: Frame["bestRect"] = null;
  const base = () => Array<CellState>(n).fill("default");

  f.push({ line: 0, vars: { n }, message: `Histogram heights = [${H.join(",")}]. Find the largest rectangle.`, arrStates: base(), stack: [], result: [], arrows: [], bestRect: null });
  f.push({ line: 1, vars: { best }, flashKey: "best", message: "Stack empty, best=0.", arrStates: base(), stack: [], result: [], arrows: [], bestRect: null });

  for (let i = 0; i <= n; i++) {
    const h = i === n ? 0 : H[i];
    const st = base();
    if (i < n) st[i] = "active";
    f.push({ line: 2, vars: { i, h }, flashKey: "i", message: i === n ? "Sentinel i=n (h=0) - flush remaining stack." : `Scan i=${i}, h=${h}.`, arrStates: st, stack: [...stack], result: [], arrows: [], bestRect });
    while (stack.length && stack[stack.length - 1].val > h) {
      const st2 = base();
      if (i < n) st2[i] = "active";
      stack.forEach((s) => (st2[s.idx] = "compare"));
      const top = stack[stack.length - 1];
      f.push({ line: 4, vars: { top: top.idx, "H[top]": top.val, h }, message: `H[top]=${top.val} > h=${h} - pop and compute its rect.`, arrStates: st2, stack: [...stack], result: [], arrows: [], bestRect });
      stack.pop();
      const leftBound = stack.length ? stack[stack.length - 1].idx + 1 : 0;
      const rightBound = i - 1;
      const width = rightBound - leftBound + 1;
      const area = top.val * width;
      const st3 = base();
      if (i < n) st3[i] = "active";
      for (let k = leftBound; k <= rightBound; k++) st3[k] = "path";
      stack.forEach((s) => (st3[s.idx] = "window"));
      f.push({ line: 6, vars: { top: top.idx, width, area, best }, flashKey: "area", message: `Width = ${width}, area = ${top.val} x ${width} = ${area}.`, arrStates: st3, stack: [...stack], result: [], arrows: [], bestRect: { lo: leftBound, hi: rightBound, h: top.val, area } });
      if (area > best) {
        best = area;
        bestRect = { lo: leftBound, hi: rightBound, h: top.val, area };
        f.push({ line: 6, vars: { best }, flashKey: "best", message: `New best! best=${best}.`, arrStates: st3, stack: [...stack], result: [], arrows: [], bestRect });
      }
    }
    if (i < n) {
      stack.push({ idx: i, val: h });
      const stEnd = base();
      stack.forEach((s) => (stEnd[s.idx] = "window"));
      f.push({ line: 7, vars: { pushed: i }, flashKey: "stack", message: `Push i=${i}. Stack heights stay monotonically increasing.`, arrStates: stEnd, stack: [...stack], result: [], arrows: [], bestRect });
    }
  }
  f.push({ line: 8, vars: { best }, flashKey: "best", message: `Done. Largest rectangle area = ${best}.`, arrStates: base(), stack: [], result: [], arrows: [], bestRect });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

function parseArr(s: string): number[] | null {
  const nums = s.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean).map(Number);
  if (nums.some((x) => !Number.isFinite(x))) return null;
  return nums.slice(0, 12);
}

function MonotonicViz({ frame, A: arr, mode }: { frame: Frame; A: number[]; mode: Mode }) {
  const stackItems = frame.stack.map((s) => ({ value: `[${s.idx}]=${s.val}` }));
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-5" style={{ gridTemplateColumns: "minmax(0,1fr) 170px" }}>
        <div className="flex flex-col gap-4">
          <ArrayBars values={arr} states={frame.arrStates} height={160} />
          {mode === "nge" && frame.arrows.length > 0 && (
            <div className="text-xs text-stone-500 text-center">
              Arrows: popped indices to their next greater element.
              <div className="flex flex-wrap gap-1.5 justify-center mt-1.5">
                {frame.arrows.map((a, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md font-mono text-[11px] font-bold bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-300 dark:border-lime-400/30"
                  >
                    [{a.from}] to [{a.to}] ({arr[a.to]})
                  </span>
                ))}
              </div>
            </div>
          )}
          {mode === "lrh" && frame.bestRect && (
            <div className="text-sm text-stone-700 dark:text-stone-300 text-center">
              Current rect:{" "}
              <span className="font-mono font-bold text-lime-700 dark:text-lime-400">
                [{frame.bestRect.lo}..{frame.bestRect.hi}] x h={frame.bestRect.h} = area {frame.bestRect.area}
              </span>
            </div>
          )}
          {mode === "nge" && (
            <div className="border border-stone-200 dark:border-white/10 rounded-md p-3 bg-stone-50 dark:bg-stone-950">
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">Result</div>
              <div className="flex gap-1.5 flex-wrap">
                {arr.map((_, i) => {
                  const r = frame.result[i];
                  const done = r !== null;
                  return (
                    <div
                      key={i}
                      className="w-12 text-center py-1 rounded-md font-mono text-xs font-bold transition-all"
                      style={{
                        border: `1.5px solid ${done ? "#16a34a" : THEME.border}`,
                        background: done ? "#dcfce7" : THEME.bg,
                        color: done ? "#166534" : THEME.textMuted,
                      }}
                    >
                      <div className="text-[10px] text-stone-400">[{i}]</div>
                      <div>{r ?? -1}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <StackColumn items={stackItems} title="Mono-Stack" maxHeight={240} topLabel="top" emptyLabel="empty" />
      </div>
      <Callout>{frame.message}</Callout>
    </div>
  );
}

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("nge");
  const [inputStr, setInputStr] = useState("2,1,2,4,3,1");
  const Arr = parseArr(inputStr) ?? [2, 1, 2, 4, 3, 1];
  const frames = useMemo(() => (mode === "nge" ? buildFramesNGE(Arr) : buildFramesLRH(Arr)), [Arr, mode]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const pseudo = mode === "nge" ? PSEUDO_NGE : PSEUDO_LRH;

  return (
    <AlgoCanvas
      title={mode === "nge" ? "Next Greater Element" : "Largest Rectangle in Histogram"}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">/ mode</label>
            <PillButton active={mode === "nge"} onClick={() => setMode("nge")}>
              <span className="text-[11px]">Next Greater</span>
            </PillButton>
            <PillButton active={mode === "lrh"} onClick={() => setMode("lrh")}>
              <span className="text-[11px]">Histogram Rectangle</span>
            </PillButton>
          </div>
          <InputEditor
            label="Array (up to 12 values)"
            value={inputStr}
            placeholder="e.g. 2,1,2,4,3,1"
            helper={
              mode === "nge"
                ? "We find the nearest greater on the right of each element."
                : "Heights of adjacent unit-width bars; find the largest axis-aligned rectangle."
            }
            presets={[
              { label: "Classic", value: "2,1,2,4,3,1" },
              { label: "Increasing", value: "1,2,3,4,5" },
              { label: "Decreasing", value: "5,4,3,2,1" },
              { label: "Histogram", value: "2,1,5,6,2,3" },
              { label: "Flat", value: "3,3,3,3" },
            ]}
            onApply={(v) => { if (parseArr(v)) setInputStr(v); }}
            onRandom={() => {
              const n = 5 + Math.floor(Math.random() * 5);
              const arr: number[] = [];
              for (let i = 0; i < n; i++) arr.push(1 + Math.floor(Math.random() * 6));
              setInputStr(arr.join(","));
            }}
          />
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? [frame.flashKey] : []} />}
    >
      {frame ? (
        <MonotonicViz frame={frame} A={Arr} mode={mode} />
      ) : (
        <Callout>Press play to step through the algorithm.</Callout>
      )}
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "What is a monotonic stack?", body: "A stack in which every element is either strictly >= (decreasing) or <= (increasing) its predecessor. To keep the order we pop offenders before pushing. The pop event carries meaning: the popped element met its match." },
    { title: "Next-greater pattern", body: "Scan left to right. While the top of the stack is smaller than the current value, pop it — the current value is its next greater. Push the current index. Each index is pushed and popped at most once, giving O(n)." },
    { title: "Largest rectangle in histogram", body: "Use a monotonic-increasing stack of indices. When a shorter bar arrives, taller bars on the stack are trapped — we can now compute their width (current index minus stack.top minus 1) and area." },
    { title: "Monotonic deque", body: "A double-ended variant used for sliding-window maximum. Pop from the back while maintaining order, pop from the front when the index falls out of the window. O(n) for max over every window of size k." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>monotonic stack / queue</SectionEyebrow>
        <SectionTitle>The pop event is where the answer is computed</SectionTitle>
        <Lede>
          Think of the stack as a queue of people waiting to be answered. Each incoming element fires questions — are you the next greater for anyone waiting? — and the monotonic property guarantees the answer is cheap.
        </Lede>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {sections.map((s, i) => (
          <Card key={i}>
            <div className="text-xs font-bold text-lime-700 dark:text-lime-400 mb-1 font-mono">0{i + 1}</div>
            <SubHeading>{s.title}</SubHeading>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                             */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "NGE of [2,1,2,4,3,1] — what's result[1]?", a: "2" },
    { q: "NGE of [5,4,3,2,1]. How many -1 entries?", a: "5" },
    { q: "Largest rectangle for heights [2,1,5,6,2,3]?", a: "10" },
    { q: "Largest rectangle for heights [6,2,5,4,5,1,6]?", a: "12" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>
        Simulate by hand: maintain a small stack, pop when a violation arrives, record the result.
      </Callout>
      {problems.map((p, i) => {
        const correct = guesses[i].trim() === p.a;
        return (
          <Card key={i}>
            <p className="text-sm text-stone-800 dark:text-stone-200 mb-3">
              <span className="font-bold text-stone-400 mr-1">#{i + 1}.</span> {p.q}
            </p>
            <div className="flex gap-2 flex-wrap items-center">
              <input
                type="text"
                value={guesses[i]}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                placeholder="your answer"
                className="w-28 px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 font-mono text-sm focus:outline-none focus:border-stone-400"
              />
              <button
                type="button"
                onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
                className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-600 dark:text-stone-400 text-xs font-medium cursor-pointer hover:border-stone-400"
              >
                Reveal
              </button>
              {shown[i] && (
                <span
                  className={`px-3 py-1 rounded-md text-xs font-bold ${
                    correct
                      ? "bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-400"
                      : "bg-rose-50 dark:bg-rose-400/10 text-rose-800 dark:text-rose-200 border border-rose-400"
                  }`}
                >
                  {correct ? `Correct - ${p.a}` : `Answer: ${p.a}`}
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
        <SubHeading>Pattern signature</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          If a problem asks for the nearest larger or smaller element, the span, or the rectangle bounded by something shorter or taller — reach for a monotonic stack. The pop event is where the answer is computed.
        </p>
      </Card>
      <Card>
        <SubHeading>Complexity argument</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Every index is pushed exactly once. Each index is popped at most once. So the inner loop's total work across the whole outer loop is at most n. Outer + inner = O(n + n) = O(n). Amortized analysis — the same trick as sliding window.
        </p>
      </Card>
      <Card>
        <SubHeading>Cousins worth knowing</SubHeading>
        <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Daily temperatures: next-greater rephrased.</li>
          <li>Trapping rain water: two-pointer or monotonic stack.</li>
          <li>Stock span: next-greater on the reversed array.</li>
          <li>Sliding window max: monotonic deque.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Root                                                               */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L8_MonotonicStack({ onQuizComplete }: Props) {
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
      question: "Why is a monotonic-stack solution for 'next greater element' O(n) and not O(n²)?",
      options: [
        "Because the input is sorted",
        "Because each index is pushed and popped at most once - total work is 2n",
        "Because the stack has size at most sqrt(n)",
        "It is not - it is O(n²)",
      ],
      correctIndex: 1,
      explanation: "The amortized argument: each element enters the stack once and leaves once. The inner while across the entire run performs at most n pops total.",
    },
    {
      question: "In the largest-rectangle-in-histogram problem, what information is carried by the stack?",
      options: [
        "The running sum of heights",
        "Indices of bars in strictly increasing height order - candidates whose rectangle extends to the right",
        "Only the maximum height seen so far",
        "A sorted list of all heights",
      ],
      correctIndex: 1,
      explanation: "Bars on the stack haven't yet hit a shorter neighbor to their right, so their right boundary is still open. When a shorter bar arrives, each trapped bar's rectangle is finalized.",
    },
    {
      question: "In the next-greater algorithm, after processing [4, 3, 2, 1], what does the stack contain?",
      options: ["[]", "[4]", "[4, 3, 2, 1]", "[1]"],
      correctIndex: 2,
      explanation: "The array is strictly decreasing. Nothing ever pops. All four indices remain on the stack; their result entries stay -1.",
    },
    {
      question: "Which structure is best for 'sliding window maximum' over every window of size k?",
      options: [
        "Balanced BST in each window",
        "Min-heap",
        "Monotonic deque - pop from back to maintain order, pop from front when index is stale",
        "Hash map",
      ],
      correctIndex: 2,
      explanation: "Deque front always holds the index of the window's maximum. Back pops discard dominated values; front pops drop out-of-window indices. O(n) total.",
    },
  ];

  return (
    <LessonShell
      title="Monotonic Stack"
      level={8}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High - stock span, histogram, temperatures, sliding-window max"
      nextLessonHint="Binary Search on Answer"
      onQuizComplete={onQuizComplete}
    />
  );
}
