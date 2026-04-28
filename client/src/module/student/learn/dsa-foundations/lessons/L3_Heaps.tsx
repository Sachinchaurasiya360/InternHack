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
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "heap";

/* ------------------------------------------------------------------ */
/*  Local CellState + color map                                         */
/* ------------------------------------------------------------------ */

type CellState = "default" | "active" | "compare" | "swap" | "done" | "mismatch";

const STATE_COLOR: Record<CellState, string> = {
  default: THEME.bg,
  active: "#a3e635",
  compare: "#fbbf24",
  swap: "#f87171",
  done: "#86efac",
  mismatch: "#fca5a5",
};

const STATE_TEXT: Record<CellState, string> = {
  default: THEME.text,
  active: "#1a2e05",
  compare: "#78350f",
  swap: "#450a0a",
  done: "#14532d",
  mismatch: "#450a0a",
};

/* ------------------------------------------------------------------ */
/*  Heap frame types                                                    */
/* ------------------------------------------------------------------ */

type Kind = "min" | "max";
type Op = "insert" | "extract" | "heapify";

interface Frame {
  line: number;
  arr: number[];
  arrStates: CellState[];
  nodeStates: Record<number, CellState>;
  message: string;
  vars: Record<string, string | number | undefined>;
}

const PSEUDO_INSERT = [
  "function insert(heap, v):",
  "  heap.push(v)               # append to end",
  "  i ← heap.length − 1",
  "  while i > 0:",
  "    parent ← (i − 1) / 2",
  "    if heap[i] violates order with heap[parent]:",
  "      swap heap[i], heap[parent]",
  "      i ← parent",
  "    else break",
];
const PSEUDO_EXTRACT = [
  "function extract(heap):",
  "  top ← heap[0]",
  "  heap[0] ← heap.pop()       # move last to root",
  "  i ← 0",
  "  while true:                # sift-down",
  "    l ← 2i+1, r ← 2i+2",
  "    best ← i",
  "    if l < n and heap[l] beats heap[best]: best ← l",
  "    if r < n and heap[r] beats heap[best]: best ← r",
  "    if best == i: break",
  "    swap heap[i], heap[best]; i ← best",
  "  return top",
];
const PSEUDO_HEAPIFY = [
  "function heapify(arr):",
  "  for i from n/2−1 down to 0:",
  "    siftDown(arr, i)          # O(n) total",
];

/* ------------------------------------------------------------------ */
/*  Heap logic                                                          */
/* ------------------------------------------------------------------ */

function beats(kind: Kind, a: number, b: number): boolean {
  return kind === "min" ? a < b : a > b;
}

function buildInsertFrames(initial: number[], toInsert: number, kind: Kind): Frame[] {
  const a = [...initial];
  const frames: Frame[] = [];
  frames.push({
    line: 0, arr: [...a], arrStates: a.map(() => "default"),
    nodeStates: {}, message: `Insert ${toInsert} into ${kind}-heap.`,
    vars: { insert: toInsert, kind, n: a.length },
  });
  a.push(toInsert);
  let i = a.length - 1;
  const states: CellState[] = a.map(() => "default");
  states[i] = "active";
  frames.push({
    line: 1, arr: [...a], arrStates: [...states],
    nodeStates: { [i]: "active" }, message: `Append ${toInsert} at index ${i}.`,
    vars: { i, value: a[i] },
  });
  while (i > 0) {
    const p = Math.floor((i - 1) / 2);
    const st: CellState[] = a.map(() => "default");
    st[i] = "compare"; st[p] = "compare";
    frames.push({
      line: 4, arr: [...a], arrStates: st,
      nodeStates: { [i]: "compare", [p]: "compare" },
      message: `Compare a[${i}]=${a[i]} with parent a[${p}]=${a[p]}.`,
      vars: { i, parent: p, value: a[i], parentVal: a[p] },
    });
    if (beats(kind, a[i], a[p])) {
      [a[i], a[p]] = [a[p], a[i]];
      const st2: CellState[] = a.map(() => "default");
      st2[i] = "swap"; st2[p] = "swap";
      frames.push({
        line: 6, arr: [...a], arrStates: st2,
        nodeStates: { [i]: "swap", [p]: "swap" },
        message: `${kind === "min" ? "Child smaller" : "Child larger"}, swap ${a[i]} ↔ ${a[p]}.`,
        vars: { i, parent: p, swapped: "yes" },
      });
      i = p;
    } else {
      frames.push({
        line: 8, arr: [...a], arrStates: a.map(() => "default"),
        nodeStates: { [i]: "done" },
        message: `Heap order restored. Stop.`, vars: { i, done: "yes" },
      });
      break;
    }
  }
  frames.push({
    line: 0, arr: [...a],
    arrStates: a.map(() => "done"),
    nodeStates: Object.fromEntries(a.map((_, k) => [k, "done" as CellState])),
    message: `Final heap after insert.`, vars: { n: a.length },
  });
  return frames;
}

function buildExtractFrames(initial: number[], kind: Kind): Frame[] {
  const a = [...initial];
  const frames: Frame[] = [];
  if (a.length === 0) {
    frames.push({ line: 0, arr: [], arrStates: [], nodeStates: {}, message: `Heap empty.`, vars: {} });
    return frames;
  }
  const top = a[0];
  frames.push({
    line: 1, arr: [...a], arrStates: a.map((_, i) => i === 0 ? "active" : "default"),
    nodeStates: { 0: "active" },
    message: `Extract root ${top}.`, vars: { top, kind, n: a.length },
  });
  a[0] = a[a.length - 1];
  a.pop();
  frames.push({
    line: 2, arr: [...a],
    arrStates: a.map((_, i) => i === 0 ? "swap" : "default"),
    nodeStates: a.length > 0 ? { 0: "swap" } : {},
    message: `Move last element to root. Sift down.`, vars: { extracted: top, n: a.length },
  });
  let i = 0;
  while (true) {
    const l = 2 * i + 1, r = 2 * i + 2;
    let best = i;
    const st: CellState[] = a.map(() => "default");
    st[i] = "active";
    if (l < a.length) st[l] = "compare";
    if (r < a.length) st[r] = "compare";
    frames.push({
      line: 5, arr: [...a], arrStates: st,
      nodeStates: st.reduce((acc, s, k) => { acc[k] = s; return acc; }, {} as Record<number, CellState>),
      message: `At i=${i}: compare with children${l < a.length ? ` l=${l}` : ""}${r < a.length ? `, r=${r}` : ""}.`,
      vars: { i, l, r },
    });
    if (l < a.length && beats(kind, a[l], a[best])) best = l;
    if (r < a.length && beats(kind, a[r], a[best])) best = r;
    if (best === i) {
      frames.push({
        line: 10, arr: [...a], arrStates: a.map(() => "default"),
        nodeStates: { [i]: "done" },
        message: `Heap order restored.`, vars: { i, done: "yes" },
      });
      break;
    }
    [a[i], a[best]] = [a[best], a[i]];
    const st2: CellState[] = a.map(() => "default");
    st2[i] = "swap"; st2[best] = "swap";
    frames.push({
      line: 11, arr: [...a], arrStates: st2,
      nodeStates: { [i]: "swap", [best]: "swap" },
      message: `Swap a[${i}] ↔ a[${best}].`, vars: { i, best, swapped: "yes" },
    });
    i = best;
  }
  frames.push({
    line: 12, arr: [...a],
    arrStates: a.map(() => "done"),
    nodeStates: Object.fromEntries(a.map((_, k) => [k, "done" as CellState])),
    message: `Extracted ${top}. Heap size now ${a.length}.`, vars: { extracted: top },
  });
  return frames;
}

function buildHeapifyFrames(initial: number[], kind: Kind): Frame[] {
  const a = [...initial];
  const frames: Frame[] = [];
  frames.push({
    line: 0, arr: [...a], arrStates: a.map(() => "default"),
    nodeStates: {}, message: `Heapify [${a.join(", ")}] as ${kind}-heap.`, vars: { n: a.length },
  });
  for (let start = Math.floor(a.length / 2) - 1; start >= 0; start--) {
    frames.push({
      line: 1, arr: [...a],
      arrStates: a.map((_, i) => i === start ? "active" : "default"),
      nodeStates: { [start]: "active" },
      message: `Sift down from index ${start} (value ${a[start]}).`, vars: { start, value: a[start] },
    });
    let i = start;
    while (true) {
      const l = 2 * i + 1, r = 2 * i + 2;
      let best = i;
      if (l < a.length && beats(kind, a[l], a[best])) best = l;
      if (r < a.length && beats(kind, a[r], a[best])) best = r;
      if (best === i) break;
      [a[i], a[best]] = [a[best], a[i]];
      const st: CellState[] = a.map(() => "default");
      st[i] = "swap"; st[best] = "swap";
      frames.push({
        line: 2, arr: [...a], arrStates: st,
        nodeStates: { [i]: "swap", [best]: "swap" },
        message: `Swap a[${i}] ↔ a[${best}].`, vars: { i, best },
      });
      i = best;
    }
  }
  frames.push({
    line: 2, arr: [...a],
    arrStates: a.map(() => "done"),
    nodeStates: Object.fromEntries(a.map((_, k) => [k, "done" as CellState])),
    message: `Heapify complete. This is a valid ${kind}-heap.`, vars: { n: a.length },
  });
  return frames;
}

function parseArr(s: string): number[] | null {
  const p = s.split(/[,\s]+/).map((x) => x.trim()).filter(Boolean).map(Number);
  if (p.some((n) => Number.isNaN(n))) return null;
  return p;
}

/* ------------------------------------------------------------------ */
/*  Local heap tree SVG                                                 */
/* ------------------------------------------------------------------ */

function HeapTreeSVG({
  arr,
  nodeStates,
  width = 560,
  height = 240,
}: {
  arr: number[];
  nodeStates: Record<number, CellState>;
  width?: number;
  height?: number;
}) {
  const R = 18;
  if (arr.length === 0) return null;

  // Compute x/y positions for each index in a complete binary tree layout
  const maxDepth = Math.floor(Math.log2(arr.length));
  const positions: { x: number; y: number }[] = [];
  for (let i = 0; i < arr.length; i++) {
    const depth = Math.floor(Math.log2(i + 1));
    const posInLevel = i + 1 - Math.pow(2, depth);
    const totalInLevel = Math.pow(2, depth);
    const x = ((posInLevel + 0.5) / totalInLevel) * width;
    const y = 30 + depth * ((height - 40) / Math.max(1, maxDepth));
    positions.push({ x, y });
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: "100%", height: "auto", maxHeight: height }}
      className="block"
    >
      {arr.map((_, i) => {
        const l = 2 * i + 1, r = 2 * i + 2;
        return (
          <g key={`e${i}`}>
            {l < arr.length && (
              <line
                x1={positions[i].x} y1={positions[i].y + R}
                x2={positions[l].x} y2={positions[l].y - R}
                stroke={THEME.border} strokeWidth={1.5}
              />
            )}
            {r < arr.length && (
              <line
                x1={positions[i].x} y1={positions[i].y + R}
                x2={positions[r].x} y2={positions[r].y - R}
                stroke={THEME.border} strokeWidth={1.5}
              />
            )}
          </g>
        );
      })}
      {arr.map((val, i) => {
        const st = nodeStates[i] ?? "default";
        const fill = STATE_COLOR[st];
        const fg = STATE_TEXT[st];
        return (
          <g key={`n${i}`} style={{ transition: "all 0.3s" }}>
            <circle
              cx={positions[i].x} cy={positions[i].y} r={R}
              fill={fill} stroke={THEME.border} strokeWidth={2}
              style={{ transition: "fill 0.3s" }}
            />
            <text
              x={positions[i].x} y={positions[i].y + 4}
              textAnchor="middle" fontSize={11} fontWeight={700}
              fill={fg} fontFamily={THEME.mono}
            >
              {val}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function ArrayView({
  arr,
  states,
}: {
  arr: number[];
  states: CellState[];
}) {
  if (arr.length === 0) return null;
  const maxVal = Math.max(...arr, 1);
  const cellW = Math.min(56, Math.max(28, Math.floor(560 / arr.length)));
  const H = 80;

  return (
    <div className="flex items-end gap-1 justify-center">
      {arr.map((v, i) => {
        const st = states[i] ?? "default";
        const h = Math.max(20, Math.round((v / maxVal) * H));
        return (
          <div
            key={i}
            className="flex flex-col items-center gap-0.5"
            style={{ width: cellW }}
          >
            <div
              className="w-full flex items-center justify-center text-[10px] font-mono font-bold"
              style={{
                height: h,
                background: STATE_COLOR[st],
                color: STATE_TEXT[st],
                borderRadius: 3,
                transition: "all 0.3s",
              }}
            >
              {v}
            </div>
            <div className="text-[9px] font-mono text-stone-400">{i}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                       */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [input, setInput] = useState("10, 4, 15, 20, 0, 8, 25, 2");
  const [op, setOp] = useState<Op>("heapify");
  const [kind, setKind] = useState<Kind>("min");
  const [insertVal, setInsertVal] = useState(3);

  const parsed = useMemo(() => parseArr(input) ?? [10, 4, 15, 20, 0, 8, 25, 2], [input]);

  const frames = useMemo(() => {
    if (op === "heapify") return buildHeapifyFrames(parsed, kind);
    const base = [...parsed];
    for (let start = Math.floor(base.length / 2) - 1; start >= 0; start--) {
      let i = start;
      while (true) {
        const l = 2 * i + 1, r = 2 * i + 2;
        let best = i;
        if (l < base.length && beats(kind, base[l], base[best])) best = l;
        if (r < base.length && beats(kind, base[r], base[best])) best = r;
        if (best === i) break;
        [base[i], base[best]] = [base[best], base[i]];
        i = best;
      }
    }
    if (op === "insert") return buildInsertFrames(base, insertVal, kind);
    return buildExtractFrames(base, kind);
  }, [op, kind, parsed, insertVal]);

  const player = useStepPlayer(frames);
  const frame = player.current;
  const pseudo = op === "insert" ? PSEUDO_INSERT : op === "extract" ? PSEUDO_EXTRACT : PSEUDO_HEAPIFY;

  return (
    <AlgoCanvas
      title={`Heap, ${op} (${kind}-heap)`}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <InputEditor
            label="Initial array"
            value={input}
            placeholder="e.g. 10, 4, 15, 20, 0"
            helper={op === "heapify" ? "Any array, will be sift-heapified." : "Array is first heapified; op runs on that heap."}
            presets={[
              { label: "Classic", value: "10, 4, 15, 20, 0, 8, 25, 2" },
              { label: "Sorted asc", value: "1, 2, 3, 4, 5, 6, 7" },
              { label: "Sorted desc", value: "9, 8, 7, 6, 5, 4" },
              { label: "Worst", value: "50, 25, 40, 10, 20, 30, 35, 5, 7, 15" },
            ]}
            onApply={(v) => { if (parseArr(v)) setInput(v); }}
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              / operation
            </label>
            <div className="flex flex-wrap gap-1.5">
              {(["heapify", "insert", "extract"] as Op[]).map((m) => (
                <PillButton key={m} active={op === m} onClick={() => setOp(m)}>
                  <span className="text-[11px] font-semibold capitalize">{m}</span>
                </PillButton>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              / heap type
            </label>
            <div className="flex flex-wrap gap-1.5">
              {(["min", "max"] as Kind[]).map((k) => (
                <PillButton key={k} active={kind === k} onClick={() => setKind(k)}>
                  <span className="text-[11px] font-semibold">{k}-heap</span>
                </PillButton>
              ))}
            </div>
          </div>
          {op === "insert" && (
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                / insert value
              </label>
              <input
                type="number"
                value={insertVal}
                onChange={(e) => setInsertVal(Number(e.target.value))}
                className="w-24 px-3 py-1.5 border border-stone-300 dark:border-white/10 rounded-md text-sm font-mono bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 outline-none"
              />
            </div>
          )}
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} />}
    >
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
            / tree view
          </div>
          <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 p-2 overflow-x-auto">
            <HeapTreeSVG
              arr={frame?.arr ?? []}
              nodeStates={frame?.nodeStates ?? {}}
            />
          </div>
        </div>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
            / array view
          </div>
          <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 p-3 overflow-x-auto">
            <ArrayView arr={frame?.arr ?? []} states={frame?.arrStates ?? []} />
          </div>
        </div>
        <Callout className="w-full">{frame?.message ?? "Press play to step through the algorithm."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                           */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const items = [
    { title: "Complete binary tree", body: "Heaps fill level by level, left to right, this lets us store them in an array with zero wasted slots. For index i: parent = ⌊(i−1)/2⌋, children = 2i+1 and 2i+2." },
    { title: "Heap property", body: "Min-heap: every node ≤ its children, so the minimum is at the root. Max-heap flips the inequality. The heap property is local, no ordering between siblings." },
    { title: "Three core ops", body: "insert (O(log n) bubble-up), extractMin/Max (O(log n) sift-down), heapify (O(n) bulk build). Together they power Dijkstra, priority queues, heap-sort, and median tricks." },
    { title: "Heap vs BST", body: "A BST supports ordered traversal and range queries; a heap only gives you the extreme. Because heaps don't require full ordering, they are smaller, faster, and fit neatly in an array." },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>priority queue in 40 bytes</SectionEyebrow>
        <SectionTitle>Array-backed tree, O(log n) insert and extract</SectionTitle>
        <Lede>
          Heaps are the canonical implementation of a priority queue: give me the highest-priority
          element fast, and let me add new elements fast. That is exactly what{" "}
          <InlineCode>insert</InlineCode> and <InlineCode>extract</InlineCode> provide at O(log n).
        </Lede>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((s, i) => (
          <div
            key={i}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5"
          >
            <div className="text-[10px] font-mono font-bold text-lime-600 dark:text-lime-400 mb-2 tracking-widest uppercase">
              0{i + 1}
            </div>
            <div className="font-bold text-sm text-stone-900 dark:text-stone-50 mb-1.5">{s.title}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It tab                                                          */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Heapify [4,10,3,5,1] into min-heap. Root value?", a: "1" },
    { q: "Min-heap [1,3,5,4,8]. After insert 2, the root is?", a: "1" },
    { q: "Max-heap [20,15,10,8,7,5]. extractMax, new root is?", a: "15" },
    { q: "Time for heapSort on n items?", a: "O(n log n)" },
  ];
  const [g, setG] = useState<(string | null)[]>(problems.map(() => null));
  const [s, setS] = useState<boolean[]>(problems.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>Do them mentally, then reveal.</Callout>
      {problems.map((p, i) => {
        const gv = (g[i] ?? "").replace(/\s/g, "").toLowerCase();
        const correct = gv === p.a.replace(/\s/g, "").toLowerCase();
        return (
          <div
            key={i}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4 flex items-center gap-3 flex-wrap"
          >
            <span className="font-bold text-xs text-stone-500 font-mono">#{i + 1}</span>
            <span className="text-sm text-stone-900 dark:text-stone-50 flex-1 min-w-0 basis-64">{p.q}</span>
            <input
              type="text"
              placeholder="answer"
              value={g[i] ?? ""}
              onChange={(e) => { const v = [...g]; v[i] = e.target.value; setG(v); }}
              className="w-36 px-3 py-1.5 border border-stone-300 dark:border-white/10 rounded-md text-sm font-mono bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 outline-none"
            />
            <button
              type="button"
              onClick={() => { const v = [...s]; v[i] = true; setS(v); }}
              className="px-3 py-1.5 rounded-md border border-stone-300 dark:border-white/10 text-xs font-bold bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400 cursor-pointer hover:border-stone-500 dark:hover:border-white/30 transition-colors"
            >
              Reveal
            </button>
            {s[i] && (
              <span
                className={`text-xs font-bold px-3 py-1.5 rounded-md ${
                  correct
                    ? "bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-400"
                    : "bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200 border border-rose-400"
                }`}
              >
                {correct ? "Correct" : `Answer: ${p.a}`}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Insight tab                                                         */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
        <SubHeading>Why heapify is O(n), not O(n log n)</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Sift-down from index i does work proportional to the height of that subtree, not of the
          whole tree. Summing across all nodes gives a geometric series that converges to O(n). This
          is an interview-favorite derivation.
        </p>
      </div>
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
        <SubHeading>Tiny pointer math</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          For 0-indexed heaps: parent(i) = (i−1)/2, left(i) = 2i+1, right(i) = 2i+2. For 1-indexed
          heaps: parent(i) = i/2, left(i) = 2i, right(i) = 2i+1. Interviewers often ask why
          1-indexed is slightly prettier, these formulas are why.
        </p>
      </div>
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
        <SubHeading>K-th largest trick</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Maintain a min-heap of size k. For each new element, push it and pop the smallest if size
          exceeds k. The root is the k-th largest. Time O(n log k), space O(k), canonical interview
          pattern.
        </p>
      </div>
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
        <SubHeading>Stdlib priority queues, three traps you must know</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed list-disc pl-5 space-y-2">
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Python <InlineCode>heapq</InlineCode></strong>:{" "}
            min-heap only. For max-heap, push the negated value and negate on pop. There is no{" "}
            <InlineCode>decrease-key</InlineCode> operation, for Dijkstra, use the lazy pattern
            (push duplicate entries, skip stale pops).
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Java <InlineCode>PriorityQueue</InlineCode></strong>:{" "}
            also min-heap by default. Pass a custom comparator{" "}
            <InlineCode>(a,b) -&gt; b - a</InlineCode> for max-heap.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">C++ <InlineCode>std::priority_queue</InlineCode></strong>:{" "}
            defaults to MAX-heap, opposite of Python and Java. For min-heap pass{" "}
            <InlineCode>std::greater&lt;T&gt;</InlineCode>. Porting gotcha #1.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Tie-breaking</strong>: heapq sorts
            by tuple comparison, <InlineCode>(priority, sequence_no, item)</InlineCode> avoids
            ordering errors when items are not comparable.
          </li>
        </ul>
      </div>
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
        <SubHeading>Decrease-key: why production Dijkstra uses lazy deletion</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          A binary heap can decrease-key in O(log n) only if you keep an index from key to position.
          Python <InlineCode>heapq</InlineCode> does not. Java{" "}
          <InlineCode>PriorityQueue.remove(o)</InlineCode> is O(n). The standard workaround: just{" "}
          <InlineCode>push(new_priority, key)</InlineCode> again, and when you pop a key whose
          priority no longer matches the latest one, skip it.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Root export                                                         */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L3_Heaps({ onQuizComplete }: Props) {
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
      question: "In a 0-indexed array heap, the parent of index i is:",
      options: ["2i + 1", "(i − 1) / 2 (floor)", "i / 2", "i − 1"],
      correctIndex: 1,
      explanation: "Children live at 2i+1 and 2i+2, so the parent of i is ⌊(i−1)/2⌋.",
    },
    {
      question: "Building a heap from an unsorted array via bottom-up heapify costs:",
      options: ["O(n log n)", "O(n)", "O(log n)", "O(n²)"],
      correctIndex: 1,
      explanation: "The geometric sum of sift-down heights gives a tight O(n) bound, faster than inserting one-by-one.",
    },
    {
      question: "To find the kth largest element among n items, a heap-based approach uses:",
      options: [
        "a max-heap of size n",
        "a min-heap of size k",
        "a sorted linked list",
        "two heaps of size n/2",
      ],
      correctIndex: 1,
      explanation: "Keep a min-heap of size k; its root is the kth largest. Time O(n log k).",
    },
    {
      question: "Which operation is NOT O(log n) on a binary heap of n elements?",
      options: ["insert", "extract-min", "peek-min", "decrease-key"],
      correctIndex: 2,
      explanation: "peek-min is O(1), it is just the root.",
    },
  ];

  return (
    <LessonShell
      title="Heaps & Priority Queues"
      level={3}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Priority queues, Dijkstra, top-K, stream medians"
      nextLessonHint="Tries"
      onQuizComplete={onQuizComplete}
    />
  );
}
