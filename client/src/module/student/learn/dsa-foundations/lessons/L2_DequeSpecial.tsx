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

const PRACTICE_TOPIC_SLUG: string | null = "queue";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

type Mode = "deque" | "monotonic";
type DOp = "PF" | "PB" | "RF" | "RB";

interface DequeOp { kind: DOp; value?: number; }

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  highlightKey?: string;
  deque: { value: number; idx?: number; flash?: "enter" | "pop-violate" }[];
  array?: number[];
  states?: ("default" | "window" | "done" | "match")[];
  windowLo?: number;
  windowHi?: number;
  i?: number;
  maxAtStep?: number;
  result?: number[];
}

const PSEUDO_MONO = [
  "function slidingMax(arr, k):",
  "  dq ← empty (stores indices)",
  "  result ← []",
  "  for i in 0..n-1:",
  "    while dq not empty and dq.front ≤ i - k:",
  "      dq.popFront()                   // drop out-of-window",
  "    while dq not empty and arr[dq.back] < arr[i]:",
  "      dq.popBack()                    // violator → pop",
  "    dq.pushBack(i)",
  "    if i ≥ k - 1:",
  "      result.append(arr[dq.front])   // window max",
  "  return result",
];

const PSEUDO_DEQUE = [
  "class Deque:",
  "  pushFront(x) // insert at left",
  "  pushBack(x)  // insert at right",
  "  popFront()   // remove from left",
  "  popBack()    // remove from right",
];

/* ------------------------------------------------------------------ */
/*  Frame builders                                                       */
/* ------------------------------------------------------------------ */

function parseOps(s: string): DequeOp[] {
  return s.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean).map((t) => {
    if (t.startsWith("PF")) return { kind: "PF" as DOp, value: Number(t.slice(2)) };
    if (t.startsWith("PB")) return { kind: "PB" as DOp, value: Number(t.slice(2)) };
    if (t === "RF") return { kind: "RF" as DOp };
    if (t === "RB") return { kind: "RB" as DOp };
    return null;
  }).filter((x): x is DequeOp => x !== null);
}

function parseList(s: string): number[] {
  return s.split(/[,\s]+/).map((x) => Number(x.trim())).filter((x) => !Number.isNaN(x));
}

function buildDeque(ops: DequeOp[]): Frame[] {
  const f: Frame[] = [];
  const dq: { value: number }[] = [];
  f.push({ line: 0, vars: { size: 0 }, message: "Empty deque", deque: [] });
  for (const op of ops) {
    if (op.kind === "PF") {
      f.push({ line: 1, vars: { x: op.value, size: dq.length }, message: `pushFront(${op.value}) — insert at left`, deque: [...dq] });
      dq.unshift({ value: op.value! });
      f.push({ line: 1, vars: { size: dq.length }, highlightKey: "size", message: `${op.value} now at front`, deque: dq.map((d, i) => ({ ...d, flash: i === 0 ? "enter" as const : undefined })) });
    } else if (op.kind === "PB") {
      f.push({ line: 2, vars: { x: op.value, size: dq.length }, message: `pushBack(${op.value}) — insert at right`, deque: [...dq] });
      dq.push({ value: op.value! });
      f.push({ line: 2, vars: { size: dq.length }, highlightKey: "size", message: `${op.value} now at rear`, deque: dq.map((d, i) => ({ ...d, flash: i === dq.length - 1 ? "enter" as const : undefined })) });
    } else if (op.kind === "RF") {
      if (dq.length === 0) {
        f.push({ line: 3, vars: { error: "empty" }, message: "popFront() on empty deque", deque: [] });
        continue;
      }
      f.push({ line: 3, vars: { front: dq[0].value }, message: `popFront() — remove ${dq[0].value}`, deque: [...dq] });
      const v = dq.shift()!;
      f.push({ line: 3, vars: { removed: v.value, size: dq.length }, highlightKey: "removed", message: `Removed ${v.value} from front`, deque: [...dq] });
    } else if (op.kind === "RB") {
      if (dq.length === 0) {
        f.push({ line: 4, vars: { error: "empty" }, message: "popBack() on empty deque", deque: [] });
        continue;
      }
      f.push({ line: 4, vars: { back: dq[dq.length - 1].value }, message: `popBack() — remove ${dq[dq.length - 1].value}`, deque: [...dq] });
      const v = dq.pop()!;
      f.push({ line: 4, vars: { removed: v.value, size: dq.length }, highlightKey: "removed", message: `Removed ${v.value} from rear`, deque: [...dq] });
    }
  }
  return f;
}

function buildMonotonic(arr: number[], k: number): Frame[] {
  type CellState = "default" | "window" | "done" | "match";
  const f: Frame[] = [];
  const n = arr.length;
  const dqIdx: number[] = [];
  const result: number[] = [];
  const states: CellState[] = arr.map(() => "default");
  k = Math.max(1, Math.min(k, n));

  f.push({ line: 0, vars: { n, k }, message: `Find sliding window max, window size k = ${k}`, deque: [], array: arr, states: [...states], i: -1, result: [] });
  f.push({ line: 1, vars: { dq: "[]" }, message: "Initialize empty deque of indices", deque: [], array: arr, states: [...states], i: -1, result: [] });
  for (let i = 0; i < n; i++) {
    const lo = Math.max(0, i - k + 1);
    const hi = i;
    const states_i: CellState[] = arr.map((_, j) => (j >= lo && j <= hi) ? "window" : j < lo ? "done" : "default");
    f.push({ line: 3, vars: { i, value: arr[i] }, message: `i = ${i}, consider arr[${i}] = ${arr[i]}`, deque: dqIdx.map((idx) => ({ value: arr[idx], idx })), array: arr, states: states_i, windowLo: lo, windowHi: hi, i, result: [...result] });

    if (dqIdx.length > 0 && dqIdx[0] <= i - k) {
      f.push({ line: 4, vars: { "dq.front": dqIdx[0], threshold: i - k }, message: `Front index ${dqIdx[0]} is out of window — drop it`, deque: dqIdx.map((idx, j) => ({ value: arr[idx], idx, flash: j === 0 ? "pop-violate" as const : undefined })), array: arr, states: states_i, windowLo: lo, windowHi: hi, i, result: [...result] });
      dqIdx.shift();
      f.push({ line: 5, vars: { "dq.size": dqIdx.length }, message: "Front removed", deque: dqIdx.map((idx) => ({ value: arr[idx], idx })), array: arr, states: states_i, windowLo: lo, windowHi: hi, i, result: [...result] });
    }
    while (dqIdx.length > 0 && arr[dqIdx[dqIdx.length - 1]] < arr[i]) {
      const tail = dqIdx[dqIdx.length - 1];
      f.push({ line: 6, vars: { "dq.back": tail, "arr[back]": arr[tail], current: arr[i] }, message: `arr[${tail}]=${arr[tail]} < arr[${i}]=${arr[i]} — violates invariant, pop`, deque: dqIdx.map((idx, j) => ({ value: arr[idx], idx, flash: j === dqIdx.length - 1 ? "pop-violate" as const : undefined })), array: arr, states: states_i, windowLo: lo, windowHi: hi, i, result: [...result] });
      dqIdx.pop();
      f.push({ line: 7, vars: { "dq.size": dqIdx.length }, message: "Popped", deque: dqIdx.map((idx) => ({ value: arr[idx], idx })), array: arr, states: states_i, windowLo: lo, windowHi: hi, i, result: [...result] });
    }
    dqIdx.push(i);
    f.push({ line: 8, vars: { pushed: i, "arr[i]": arr[i] }, highlightKey: "pushed", message: `pushBack(${i}) — new value ${arr[i]} joins deque`, deque: dqIdx.map((idx, j) => ({ value: arr[idx], idx, flash: j === dqIdx.length - 1 ? "enter" as const : undefined })), array: arr, states: states_i, windowLo: lo, windowHi: hi, i, result: [...result] });

    if (i >= k - 1) {
      const maxVal = arr[dqIdx[0]];
      result.push(maxVal);
      const stsMax: CellState[] = arr.map((_, j) => j === dqIdx[0] ? "match" : (j >= lo && j <= hi) ? "window" : j < lo ? "done" : "default");
      f.push({ line: 9, vars: { "window": `[${lo}..${hi}]`, max: maxVal }, highlightKey: "max", message: `Window [${lo}..${hi}]: max = arr[${dqIdx[0]}] = ${maxVal}`, deque: dqIdx.map((idx) => ({ value: arr[idx], idx })), array: arr, states: stsMax, windowLo: lo, windowHi: hi, i, maxAtStep: dqIdx[0], result: [...result] });
    }
  }
  f.push({ line: 10, vars: { result: `[${result.join(", ")}]` }, message: `Done — ${result.length} window maxima`, deque: dqIdx.map((idx) => ({ value: arr[idx], idx })), array: arr, states: arr.map((_, j) => j <= n - k ? "done" : "window"), i: n - 1, result: [...result] });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Deque row viz                                                        */
/* ------------------------------------------------------------------ */

function DequeRow({ items, showIdx }: { items: { value: number; idx?: number; flash?: "enter" | "pop-violate" }[]; showIdx?: boolean }) {
  return (
    <div className="flex justify-center max-w-xl mx-auto">
      <div className="flex gap-1.5 p-3 border border-stone-200 dark:border-white/10 rounded-md min-h-16 min-w-72 bg-stone-50 dark:bg-stone-950 items-center justify-center flex-wrap">
        {items.length === 0 ? (
          <span className="text-xs text-stone-400 dark:text-stone-600 font-mono italic">empty</span>
        ) : items.map((it, i) => {
          const isFront = i === 0;
          const isBack = i === items.length - 1;
          const bg = it.flash === "enter" ? "#10b981" : it.flash === "pop-violate" ? "#ef4444" : THEME.accent;
          return (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 min-h-3">
                {isFront && isBack ? "front/back" : isFront ? "front" : isBack ? "back" : ""}
              </div>
              <div
                className="px-3 py-2 rounded-md font-mono font-bold text-sm text-white transition-all"
                style={{ background: bg, boxShadow: `0 0 0 2px ${bg}33` }}
              >
                {it.value}
              </div>
              {showIdx && it.idx !== undefined && (
                <div className="text-[10px] font-mono text-stone-500">i={it.idx}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Array bars for monotonic mode                                        */
/* ------------------------------------------------------------------ */

function ArrayBarsSimple({ values, states, windowLo, windowHi, iCur }: {
  values: number[];
  states: ("default" | "window" | "done" | "match")[];
  windowLo?: number;
  windowHi?: number;
  iCur?: number;
}) {
  const max = Math.max(...values.map(Math.abs), 1);
  const H = 140;
  const BAR_W = Math.min(36, Math.floor(480 / Math.max(values.length, 1)));
  const width = values.length * (BAR_W + 4) + 20;
  return (
    <div className="overflow-x-auto">
      <svg width={Math.max(360, width)} height={H + 30} style={{ display: "block", margin: "0 auto" }}>
        {values.map((v, i) => {
          const st = states[i];
          const barH = Math.max(4, Math.round((Math.abs(v) / max) * (H - 20)));
          const x = 10 + i * (BAR_W + 4);
          const y = H - barH;
          const fill = st === "match" ? "#a3e635" : st === "window" ? "#3b82f6" : st === "done" ? "#78716c" : "#d6d3d1";
          const isC = iCur === i;
          return (
            <g key={i}>
              <rect x={x} y={y} width={BAR_W} height={barH} rx={3} fill={fill} style={{ transition: "all 0.3s" }} />
              {isC && <rect x={x - 1} y={y - 2} width={BAR_W + 2} height={barH + 4} rx={3} fill="none" stroke="#a3e635" strokeWidth={2} />}
              <text x={x + BAR_W / 2} y={H + 14} textAnchor="middle"
                style={{ fontSize: 9, fill: THEME.textMuted, fontFamily: THEME.mono }}>{v}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                           */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("deque");
  const [opsStr, setOpsStr] = useState("PB1, PB2, PF3, PB4, RF, RB");
  const [arrStr, setArrStr] = useState("1, 3, -1, -3, 5, 3, 6, 7");
  const [k, setK] = useState(3);

  const ops = parseOps(opsStr);
  const arr = parseList(arrStr);

  const frames = useMemo(() => mode === "deque" ? buildDeque(ops) : buildMonotonic(arr, k), [mode, opsStr, arrStr, k]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const pseudo = mode === "deque" ? PSEUDO_DEQUE : PSEUDO_MONO;

  return (
    <AlgoCanvas
      title={mode === "deque" ? "Deque — Double-Ended Queue" : "Monotonic Deque — Sliding Window Max"}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <div className="flex gap-1.5 flex-wrap">
            {(["deque", "monotonic"] as Mode[]).map((m) => (
              <PillButton key={m} onClick={() => setMode(m)} active={mode === m}>
                <span className="text-xs">{m === "deque" ? "Deque Ops" : "Sliding Window Max"}</span>
              </PillButton>
            ))}
          </div>
          {mode === "deque" ? (
            <InputEditor
              label="Operations"
              value={opsStr}
              placeholder="e.g. PB1, PF2, RB, PF3"
              helper="PF<n>=pushFront, PB<n>=pushBack, RF=popFront, RB=popBack"
              presets={[
                { label: "Mixed", value: "PB1, PB2, PF3, PB4, RF, RB" },
                { label: "Stack-like", value: "PB1, PB2, PB3, RB, RB" },
                { label: "Queue-like", value: "PB1, PB2, PB3, RF, RF" },
              ]}
              onApply={setOpsStr}
              onRandom={() => {
                const choices: DOp[] = ["PF", "PB", "RF", "RB"];
                const n = 6 + Math.floor(Math.random() * 4);
                const toks = Array.from({ length: n }, () => {
                  const c = choices[Math.floor(Math.random() * choices.length)];
                  return c === "RF" || c === "RB" ? c : `${c}${Math.floor(Math.random() * 20) + 1}`;
                });
                setOpsStr(toks.join(", "));
              }}
            />
          ) : (
            <>
              <InputEditor
                label="Array"
                value={arrStr}
                placeholder="e.g. 1, 3, -1, -3, 5"
                helper="Integer array for sliding window"
                presets={[
                  { label: "Classic", value: "1, 3, -1, -3, 5, 3, 6, 7" },
                  { label: "Ascending", value: "1, 2, 3, 4, 5, 6" },
                  { label: "Descending", value: "9, 7, 5, 3, 1" },
                  { label: "With dupes", value: "4, 4, 2, 8, 8, 1, 5" },
                ]}
                onApply={setArrStr}
                onRandom={() => {
                  const n = 7 + Math.floor(Math.random() * 3);
                  setArrStr(Array.from({ length: n }, () => Math.floor(Math.random() * 20) - 5).join(", "));
                }}
              />
              <label className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                Window size k:
                <input type="number" value={k} onChange={(e) => setK(Math.max(1, Number(e.target.value) || 1))}
                  min={1} max={arr.length}
                  className="w-16 px-2 py-1 border border-stone-200 dark:border-white/10 rounded-md font-mono text-sm bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50" />
              </label>
            </>
          )}
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div className="flex flex-col items-center gap-4 w-full">
        {mode === "monotonic" && frame?.array && frame.states && (
          <ArrayBarsSimple
            values={frame.array}
            states={frame.states as ("default" | "window" | "done" | "match")[]}
            windowLo={frame.windowLo}
            windowHi={frame.windowHi}
            iCur={frame.i !== undefined && frame.i >= 0 ? frame.i : undefined}
          />
        )}
        <div className="w-full">
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 text-center mb-2">
            Deque (front {"←"} {"→"} back){mode === "monotonic" ? " — indices of candidates" : ""}
          </div>
          <DequeRow items={frame?.deque ?? []} showIdx={mode === "monotonic"} />
        </div>
        {mode === "monotonic" && frame?.result && frame.result.length > 0 && (
          <div className="px-4 py-2 rounded-md border border-lime-400 bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 text-sm font-bold">
            Window maxima so far: [{frame.result.join(", ")}]
          </div>
        )}
        <Callout className="w-full">{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "Deque = stack + queue", b: "A double-ended queue supports four O(1) ops: pushFront, pushBack, popFront, popBack. Use only pushBack+popFront and you have a queue. Use only pushBack+popBack and you have a stack." },
    { t: "Monotonic deque", b: "A deque whose values are kept strictly increasing (or decreasing) from front to back. Whenever a new value violates the order, pop from the back until the order is restored." },
    { t: "Sliding-window max in O(n)", b: "The front of a max-monotonic deque is always the max of the current window. Each element enters and leaves the deque once — total work is O(n), not O(nk)." },
    { t: "Priority queue vs deque", b: "Both can find a max. But heap insert/remove is O(log n); monotonic deque is O(1) amortized when the access pattern is a sliding window. Pick the structure that matches the access pattern." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>why the invariant matters</SectionEyebrow>
        <SectionTitle>The front always holds the window's max</SectionTitle>
        <Lede>
          Keeping the deque sorted by value (with smaller values thrown away when a bigger one
          arrives) means the front is the max. Keeping indices (not values) lets us also detect when
          the max has slid out of the window.
        </Lede>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cards.map((c, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-600 dark:text-lime-400 mb-2 tracking-widest">0{i + 1}</div>
            <div className="text-sm font-bold text-stone-900 dark:text-stone-50 mb-1">{c.t}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{c.b}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                              */
/* ------------------------------------------------------------------ */

function TryTab() {
  const probs = [
    { q: "For arr = [4,3,2,1] and k=2, the window maxima are?", a: "[4, 3, 2]" },
    { q: "For arr = [1,2,3,4] and k=2, the window maxima are?", a: "[2, 3, 4]" },
    { q: "Each element is pushed at most ___ and popped at most ___ in the monotonic deque algorithm.", a: "1 time each — total work O(n)" },
    { q: "Which four operations define a deque?", a: "pushFront, pushBack, popFront, popBack" },
  ];
  const [guess, setGuess] = useState<(string | null)[]>(probs.map(() => null));
  const [show, setShow] = useState<boolean[]>(probs.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Work on paper, then reveal.</Callout>
      {probs.map((p, i) => (
        <Card key={i}>
          <div className="text-sm text-stone-800 dark:text-stone-200 mb-3">#{i + 1} {p.q}</div>
          <div className="flex gap-2 items-center flex-wrap">
            <input
              value={guess[i] ?? ""}
              onChange={(e) => { const v = [...guess]; v[i] = e.target.value; setGuess(v); }}
              placeholder="your answer"
              className="px-3 py-1.5 border border-stone-200 dark:border-white/10 rounded-md font-mono text-sm bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 min-w-64"
            />
            <button
              type="button"
              onClick={() => { const v = [...show]; v[i] = true; setShow(v); }}
              className="px-3 py-1.5 border border-stone-200 dark:border-white/10 rounded-md text-xs font-medium bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 cursor-pointer hover:border-stone-400 dark:hover:border-white/30 transition-colors"
            >
              Reveal
            </button>
            {show[i] && (
              <span className="text-xs font-bold px-3 py-1.5 rounded-md bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-400">
                Answer: {p.a}
              </span>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Insight                                                             */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>Amortized O(n) — the accounting argument</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Although one iteration may pop many elements, each element is popped at most once across
          the entire run. Sum total pops ≤ n. Pushes are at most n. Total operations ≤ 2n → O(n).
        </p>
      </Card>
      <Card>
        <SubHeading>Where deques appear in practice</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed space-y-1 pl-4 list-disc">
          <li>Python's <code className="font-mono">collections.deque</code></li>
          <li>Java's <code className="font-mono">ArrayDeque</code></li>
          <li>Work-stealing runqueues (used by Go/Java fork-join)</li>
          <li>0-1 BFS in graphs (pushFront for weight 0, pushBack for weight 1)</li>
          <li>Sliding window min/max, first-negative-in-every-window</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Root                                                                */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L2_DequeSpecial({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
    ...(PRACTICE_TOPIC_SLUG
      ? [{ id: "practice", label: "Practice", icon: <Code2 className="w-4 h-4" />, content: <PracticeTab topicSlug={PRACTICE_TOPIC_SLUG} /> }]
      : []),
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "Which operations must be O(1) for a structure to qualify as a deque?",
      options: [
        "Only pushBack and popFront",
        "pushFront, pushBack, popFront, popBack",
        "push and pop at one end",
        "Insert at any position",
      ],
      correctIndex: 1,
      explanation: "A deque is double-ended: all four insert/remove-at-both-ends operations are O(1). Insert at arbitrary position is NOT a deque requirement.",
    },
    {
      question: "In the monotonic deque sliding-window-maximum algorithm, what does the deque store?",
      options: ["Values", "Indices in decreasing order of value", "Indices in increasing order of value", "Window boundaries"],
      correctIndex: 1,
      explanation: "Indices are stored so we can detect when the front has slid out of the window. They are kept in decreasing order of the values they refer to — the front is always the max.",
    },
    {
      question: "Why is the sliding-window-max algorithm using a monotonic deque O(n), not O(nk)?",
      options: [
        "The deque has capacity k",
        "Each array element is pushed and popped at most once total",
        "The algorithm skips k-1 elements",
        "Modern CPUs vectorize it",
      ],
      correctIndex: 1,
      explanation: "Amortized analysis: total pushes ≤ n and total pops ≤ n, regardless of k. Linear time.",
    },
    {
      question: "For arr = [5, 3, 7, 1, 2] and k = 3, what is the first window's maximum using the algorithm?",
      options: ["5", "7", "3", "2"],
      correctIndex: 1,
      explanation: "First window is [5, 3, 7]; max is 7. The deque after processing i=2 holds just [index 2] because 5 and 3 were popped when 7 arrived.",
    },
  ];

  return (
    <LessonShell
      title="Deques & Special Queues"
      level={2}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Sliding-window problems, monotonic-deque patterns appear in FAANG interviews."
      nextLessonHint="Hashing"
      onQuizComplete={onQuizComplete}
    />
  );
}
