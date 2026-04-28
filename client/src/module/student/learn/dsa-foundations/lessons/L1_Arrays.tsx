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

const PRACTICE_TOPIC_SLUG: string | null = "arrays";

/* ------------------------------------------------------------------ */
/*  CellState type + local MemoryCells                                 */
/* ------------------------------------------------------------------ */

type CellState =
  | "default"
  | "active"
  | "compare"
  | "swap"
  | "done"
  | "visited"
  | "match"
  | "mismatch"
  | "window"
  | "mid";

const CELL_COLORS: Record<CellState, { bg: string; border: string; text: string }> = {
  default:  { bg: THEME.bg,         border: THEME.border,   text: THEME.text },
  active:   { bg: "#dbeafe",        border: "#3b82f6",      text: "#1e3a8a" },
  compare:  { bg: "#fef9c3",        border: "#eab308",      text: "#713f12" },
  swap:     { bg: "#fce7f3",        border: "#ec4899",      text: "#831843" },
  done:     { bg: "#d1fae5",        border: "#10b981",      text: "#064e3b" },
  visited:  { bg: "#f1f5f9",        border: "#94a3b8",      text: "#475569" },
  match:    { bg: "#dcfce7",        border: "#22c55e",      text: "#14532d" },
  mismatch: { bg: "#fee2e2",        border: "#ef4444",      text: "#7f1d1d" },
  window:   { bg: "#ede9fe",        border: "#8b5cf6",      text: "#3b0764" },
  mid:      { bg: "#ffedd5",        border: "#f97316",      text: "#7c2d12" },
};

function MemoryCells({
  values,
  states,
  pointers,
  showAddress,
  addressBase,
  bytesPerCell,
  cellWidth = 56,
}: {
  values: (string | number)[];
  states?: (CellState | undefined)[];
  pointers?: Record<string, number>;
  showAddress?: boolean;
  addressBase?: number;
  bytesPerCell?: number;
  cellWidth?: number;
}) {
  const ptMap: Record<number, string[]> = {};
  if (pointers) {
    Object.entries(pointers).forEach(([k, v]) => {
      if (!ptMap[v]) ptMap[v] = [];
      ptMap[v].push(k);
    });
  }

  return (
    <div className="overflow-x-auto w-full">
      <div className="inline-flex flex-col gap-1">
        {/* pointer labels above */}
        <div className="flex gap-0.5">
          {values.map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center"
              style={{ width: cellWidth }}
            >
              {ptMap[i] ? (
                <div className="text-[9px] font-mono font-bold text-lime-700 dark:text-lime-400 truncate">
                  {ptMap[i].join(",")}
                </div>
              ) : (
                <div className="h-3" />
              )}
            </div>
          ))}
        </div>
        {/* cells */}
        <div className="flex gap-0.5">
          {values.map((v, i) => {
            const state: CellState = states?.[i] ?? "default";
            const colors = CELL_COLORS[state] ?? CELL_COLORS.default;
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded transition-all duration-200"
                style={{
                  width: cellWidth,
                  height: cellWidth,
                  background: colors.bg,
                  border: `1.5px solid ${colors.border}`,
                  color: colors.text,
                }}
              >
                <div className="font-mono font-bold text-sm leading-none">{v}</div>
                <div
                  className="text-[9px] font-mono text-stone-400 mt-0.5"
                  style={{ color: colors.text, opacity: 0.5 }}
                >
                  [{i}]
                </div>
              </div>
            );
          })}
        </div>
        {/* addresses below */}
        {showAddress && addressBase !== undefined && bytesPerCell !== undefined && (
          <div className="flex gap-0.5">
            {values.map((_, i) => (
              <div
                key={i}
                className="text-[9px] font-mono text-stone-400 text-center"
                style={{ width: cellWidth }}
              >
                {addressBase + i * bytesPerCell}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Types + parser                                                     */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  values: (string | number)[];
  states: (CellState | undefined)[];
  pointers: Record<string, number>;
}

function parseArray(s: string): number[] {
  return s.split(/[,\s]+/).map((x) => x.trim()).filter(Boolean).map(Number).filter((x) => !Number.isNaN(x));
}

/* ------------------------------------------------------------------ */
/*  Operation builders                                                 */
/* ------------------------------------------------------------------ */

const PSEUDO_INSERT = [
  "function insertAt(a, idx, value):",
  "  for i from n-1 down to idx:",
  "    a[i+1] ← a[i]",
  "  a[idx] ← value",
  "  n ← n + 1",
];

function buildInsert(base: number[], idx: number, value: number): Frame[] {
  const f: Frame[] = [];
  const a = [...base, 0];
  const n = base.length;
  const show = () => a.slice(0, n + 1);
  f.push({
    line: 0, vars: { n, idx, value },
    message: `Insert ${value} at index ${idx}. Everything at or after ${idx} must shift right.`,
    values: show(), states: show().map(() => "default"), pointers: { new: idx },
  });
  for (let i = n - 1; i >= idx; i--) {
    f.push({
      line: 1, vars: { i, value, n },
      message: `Look at index ${i}. It will move to ${i + 1}.`,
      values: show(), states: show().map((_, k) => (k === i ? "active" : k === i + 1 ? "compare" : "default")),
      pointers: { i },
    });
    a[i + 1] = a[i];
    f.push({
      line: 2, vars: { i, value, n },
      message: `Shift: a[${i + 1}] ← a[${i}] = ${a[i + 1]}.`,
      values: show(), states: show().map((_, k) => (k === i + 1 ? "swap" : "default")),
      pointers: { i },
    });
  }
  a[idx] = value;
  f.push({
    line: 3, vars: { idx, value },
    message: `Place the new value: a[${idx}] = ${value}.`,
    values: show(), states: show().map((_, k) => (k === idx ? "done" : "default")),
    pointers: { idx },
  });
  f.push({
    line: 4, vars: { n: n + 1 },
    message: `Array length is now ${n + 1}. Total shifts: ${n - idx} → O(n) worst case.`,
    values: show(), states: show().map(() => "done"), pointers: {},
  });
  return f;
}

const PSEUDO_DELETE = [
  "function deleteAt(a, idx):",
  "  for i from idx to n-2:",
  "    a[i] ← a[i+1]",
  "  n ← n - 1",
];

function buildDelete(base: number[], idx: number): Frame[] {
  const f: Frame[] = [];
  const a = [...base];
  const n = base.length;
  f.push({
    line: 0, vars: { n, idx },
    message: `Delete a[${idx}] = ${a[idx]}. Everything after shifts left to close the gap.`,
    values: [...a], states: a.map((_, k) => (k === idx ? "swap" : "default")), pointers: { idx },
  });
  for (let i = idx; i < n - 1; i++) {
    f.push({
      line: 1, vars: { i },
      message: `Look at index ${i + 1}. Its value will move to ${i}.`,
      values: [...a], states: a.map((_, k) => (k === i ? "active" : k === i + 1 ? "compare" : "default")),
      pointers: { i },
    });
    a[i] = a[i + 1];
    f.push({
      line: 2, vars: { i },
      message: `Shift: a[${i}] ← a[${i + 1}] = ${a[i]}.`,
      values: [...a], states: a.map((_, k) => (k === i ? "swap" : "default")),
      pointers: { i },
    });
  }
  const shrunk = a.slice(0, n - 1);
  f.push({
    line: 3, vars: { n: n - 1 },
    message: `Array length is now ${n - 1}. Total shifts: ${n - 1 - idx} → O(n) worst case.`,
    values: shrunk, states: shrunk.map(() => "done"), pointers: {},
  });
  return f;
}

const PSEUDO_LINEAR = [
  "function linearSearch(a, target):",
  "  for i in 0..n-1:",
  "    if a[i] == target:",
  "      return i",
  "  return -1",
];

function buildLinear(a: number[], target: number): Frame[] {
  const f: Frame[] = [];
  const n = a.length;
  f.push({
    line: 0, vars: { n, target },
    message: `Scan left-to-right looking for ${target}.`,
    values: [...a], states: a.map(() => "default"), pointers: {},
  });
  for (let i = 0; i < n; i++) {
    f.push({
      line: 1, vars: { i, target },
      message: `Inspect a[${i}] = ${a[i]}.`,
      values: [...a], states: a.map((_, k) => (k === i ? "active" : k < i ? "visited" : "default")),
      pointers: { i },
    });
    f.push({
      line: 2, vars: { i, target },
      message: `Compare: is a[${i}] (${a[i]}) == ${target}?`,
      values: [...a], states: a.map((_, k) => (k === i ? "compare" : k < i ? "visited" : "default")),
      pointers: { i },
    });
    if (a[i] === target) {
      f.push({
        line: 3, vars: { i, target, found: i },
        message: `Match! Return index ${i}.`,
        values: [...a], states: a.map((_, k) => (k === i ? "match" : k < i ? "visited" : "default")),
        pointers: { i },
      });
      return f;
    }
  }
  f.push({
    line: 4, vars: { target, found: -1 },
    message: `End of array. ${target} is not present; return -1. Worst case is O(n).`,
    values: [...a], states: a.map(() => "visited"), pointers: {},
  });
  return f;
}

const PSEUDO_BINARY = [
  "function binarySearch(a, target):  # a must be sorted",
  "  lo ← 0, hi ← n - 1",
  "  while lo <= hi:",
  "    mid ← (lo + hi) / 2",
  "    if a[mid] == target: return mid",
  "    if a[mid] < target: lo ← mid + 1",
  "    else: hi ← mid - 1",
  "  return -1",
];

function buildBinary(a: number[], target: number): Frame[] {
  const f: Frame[] = [];
  const sorted = [...a].sort((x, y) => x - y);
  const n = sorted.length;
  let lo = 0, hi = n - 1;
  f.push({
    line: 0, vars: { n, target },
    message: `Binary search needs a sorted array. We sort first: [${sorted.join(", ")}].`,
    values: [...sorted], states: sorted.map(() => "default"), pointers: {},
  });
  f.push({
    line: 1, vars: { lo, hi, target },
    message: `Set the search window: lo = 0, hi = ${hi}.`,
    values: [...sorted], states: sorted.map(() => "default"), pointers: { lo, hi },
  });
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    f.push({
      line: 2, vars: { lo, hi, target },
      message: `Window [${lo}..${hi}] non-empty. Continue.`,
      values: [...sorted], states: sorted.map((_, k) => (k < lo || k > hi ? "visited" : "default")),
      pointers: { lo, hi },
    });
    f.push({
      line: 3, vars: { lo, hi, mid, target },
      message: `Pick the middle: mid = ⌊(${lo}+${hi})/2⌋ = ${mid}.`,
      values: [...sorted], states: sorted.map((_, k) => (k === mid ? "mid" : k < lo || k > hi ? "visited" : "default")),
      pointers: { lo, mid, hi },
    });
    f.push({
      line: 4, vars: { mid, target },
      message: `Compare a[${mid}] = ${sorted[mid]} with ${target}.`,
      values: [...sorted], states: sorted.map((_, k) => (k === mid ? "compare" : k < lo || k > hi ? "visited" : "default")),
      pointers: { lo, mid, hi },
    });
    if (sorted[mid] === target) {
      f.push({
        line: 4, vars: { mid, target, found: mid },
        message: `Match! Return ${mid}.`,
        values: [...sorted], states: sorted.map((_, k) => (k === mid ? "match" : k < lo || k > hi ? "visited" : "default")),
        pointers: { mid },
      });
      return f;
    }
    if (sorted[mid] < target) {
      lo = mid + 1;
      f.push({
        line: 5, vars: { lo, hi },
        message: `a[${mid}] < ${target}, so throw away the left half. lo ← ${lo}.`,
        values: [...sorted], states: sorted.map((_, k) => (k < lo || k > hi ? "visited" : "default")),
        pointers: { lo, hi },
      });
    } else {
      hi = mid - 1;
      f.push({
        line: 6, vars: { lo, hi },
        message: `a[${mid}] > ${target}, so throw away the right half. hi ← ${hi}.`,
        values: [...sorted], states: sorted.map((_, k) => (k < lo || k > hi ? "visited" : "default")),
        pointers: { lo, hi },
      });
    }
  }
  f.push({
    line: 7, vars: { target, found: -1 },
    message: `Window empty. ${target} not present. Total steps ≈ log₂(n) → O(log n).`,
    values: [...sorted], states: sorted.map(() => "visited"), pointers: {},
  });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

type Op = "insert" | "delete" | "linear" | "binary";

function VisualizeTab() {
  const [op, setOp] = useState<Op>("insert");
  const [arrStr, setArrStr] = useState("10, 20, 30, 40, 50");
  const [paramStr, setParamStr] = useState("2 : 99");

  const base = useMemo(() => parseArray(arrStr), [arrStr]);

  const { pseudo, frames, helper } = useMemo(() => {
    const parts = paramStr.split(":").map((s) => s.trim());
    const p1 = Number(parts[0]);
    const p2 = Number(parts[1]);
    if (op === "insert") {
      const idx = Math.max(0, Math.min(base.length, Number.isFinite(p1) ? Math.floor(p1) : 0));
      const val = Number.isFinite(p2) ? p2 : 0;
      return { pseudo: PSEUDO_INSERT, frames: buildInsert(base, idx, val), helper: "Format: index : value, e.g. 2 : 99" };
    }
    if (op === "delete") {
      const idx = Math.max(0, Math.min(Math.max(0, base.length - 1), Number.isFinite(p1) ? Math.floor(p1) : 0));
      return { pseudo: PSEUDO_DELETE, frames: buildDelete(base, idx), helper: "Format: index, e.g. 2" };
    }
    if (op === "linear") {
      const target = Number.isFinite(p1) ? p1 : 0;
      return { pseudo: PSEUDO_LINEAR, frames: buildLinear(base, target), helper: "Format: target, e.g. 30" };
    }
    const target = Number.isFinite(p1) ? p1 : 0;
    return { pseudo: PSEUDO_BINARY, frames: buildBinary(base, target), helper: "Format: target, e.g. 30 (array is auto-sorted)" };
  }, [op, base, paramStr]);

  const player = useStepPlayer(frames);
  const frame = player.current;

  const opLabels: Record<Op, string> = {
    insert: "Insert, O(n)",
    delete: "Delete, O(n)",
    linear: "Linear Search, O(n)",
    binary: "Binary Search, O(log n)",
  };

  return (
    <AlgoCanvas
      title={opLabels[op]}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <InputEditor
            label="Array values"
            value={arrStr}
            placeholder="e.g. 10, 20, 30"
            presets={[
              { label: "Small", value: "5, 12, 3, 8, 15" },
              { label: "Sorted", value: "2, 7, 11, 19, 25, 33" },
              { label: "Duplicates", value: "4, 4, 4, 7, 4" },
              { label: "Single", value: "42" },
            ]}
            onApply={(v) => { if (parseArray(v).length > 0) setArrStr(v); }}
            onRandom={() => {
              const n = 5 + Math.floor(Math.random() * 4);
              const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 90) + 1);
              setArrStr(arr.join(", "));
            }}
          />
          <InputEditor
            label="Parameters"
            value={paramStr}
            placeholder={helper}
            helper={helper}
            onApply={(v) => setParamStr(v)}
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              / operation
            </label>
            <div className="flex flex-wrap gap-1.5">
              {(Object.keys(opLabels) as Op[]).map((id) => (
                <PillButton
                  key={id}
                  onClick={() => {
                    setOp(id);
                    if (id === "insert") setParamStr("2 : 99");
                    else if (id === "delete") setParamStr("2");
                    else setParamStr("30");
                  }}
                  active={op === id}
                >
                  <span className="text-xs">{opLabels[id]}</span>
                </PillButton>
              ))}
            </div>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["i", "mid", "lo", "hi", "found"]} />}
    >
      <div className="flex flex-col items-center gap-4">
        <MemoryCells
          values={frame?.values ?? []}
          states={frame?.states}
          pointers={frame?.pointers}
          showAddress
          addressBase={1000}
          bytesPerCell={4}
          cellWidth={60}
        />
        <Callout className="w-full">{frame?.message ?? "Press play to start."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const rows = [
    ["Access a[i]", "O(1)", "Address arithmetic"],
    ["Linear search", "O(n)", "Must check each element"],
    ["Binary search (sorted)", "O(log n)", "Halve the window each step"],
    ["Insert at end", "O(1)*", "No shift needed (*amortised for dynamic arrays)"],
    ["Insert at index", "O(n)", "Must shift later elements right"],
    ["Delete at index", "O(n)", "Must shift later elements left"],
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>arrays = contiguous memory</SectionEyebrow>
        <SectionTitle>Same-sized cells, side by side, indexed in O(1)</SectionTitle>
        <Lede>
          An array is a block of same-sized cells placed side-by-side in RAM. Because every cell
          is at a known offset from the array's starting address, the CPU can compute{" "}
          <InlineCode>base + i × size</InlineCode> in a single step, that is why indexing is O(1).
        </Lede>
      </div>

      <Card padded={false} className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-stone-50 dark:bg-stone-950/50">
            <tr>
              {["Operation", "Time", "Why"].map((h) => (
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
            {rows.map((r, i) => (
              <tr key={i} className={i === 0 ? "" : "border-t border-stone-100 dark:border-white/5"}>
                <td className="px-4 py-2 text-stone-900 dark:text-stone-100">{r[0]}</td>
                <td className="px-4 py-2 font-mono font-bold text-lime-700 dark:text-lime-400">{r[1]}</td>
                <td className="px-4 py-2 text-stone-600 dark:text-stone-400">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card>
        <SubHeading>Static vs Dynamic arrays</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Static arrays have a fixed capacity chosen at creation. Dynamic arrays (C++{" "}
          <InlineCode>vector</InlineCode>, Java <InlineCode>ArrayList</InlineCode>, Python{" "}
          <InlineCode>list</InlineCode>) grow by allocating a bigger block and copying, amortised
          O(1) append.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try tab                                                            */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Given a = [5,10,15,20], how many shifts does insertAt(a, 1, 99) perform?", options: ["0", "1", "3", "4"], ans: 2, exp: "Elements at indices 1, 2, 3 (three elements) must move right." },
    { q: "Linear search on an array of size 8 for an element at index 5 makes how many comparisons in the worst observed case?", options: ["1", "4", "6", "8"], ans: 2, exp: "We compare index 0, 1, 2, 3, 4, 5, that is 6 comparisons before the match." },
    { q: "Binary search on 16 elements needs at most how many comparisons?", options: ["2", "4", "8", "16"], ans: 1, exp: "log₂(16) = 4. Each step halves the window." },
    { q: "Which operation is O(1) on a dynamic array most of the time?", options: ["Insert at front", "Insert at back", "Delete at front", "Search"], ans: 1, exp: "Back-insert just writes at the end (amortised O(1) with occasional resize)." },
  ];
  const [picked, setPicked] = useState<(number | null)[]>(problems.map(() => null));

  return (
    <div className="flex flex-col gap-3">
      {problems.map((p, i) => {
        const sel = picked[i];
        return (
          <Card key={i}>
            <p className="text-sm text-stone-900 dark:text-stone-100 mb-3 leading-relaxed">
              <strong className="text-lime-700 dark:text-lime-400">#{i + 1}.</strong> {p.q}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.options.map((o, idx) => {
                const correct = sel !== null && idx === p.ans;
                const wrong = sel !== null && idx === sel && idx !== p.ans;
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
                <Callout>{p.exp}</Callout>
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
        <SubHeading>Cache locality, arrays' secret advantage</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Because array cells sit next to each other, scanning them is blazing fast, the CPU
          prefetches neighbouring memory. A linked list with the same O(n) loop can be 5–10×
          slower in practice.
        </p>
      </Card>
      <Card>
        <SubHeading>When to pick an array</SubHeading>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>You need fast random access by index.</li>
          <li>Data fits in a predictable contiguous block.</li>
          <li>Most mutations happen near the end.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>When to avoid</SubHeading>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Frequent inserts/deletes in the middle: use linked list or deque.</li>
          <li>Unknown maximum size with strict memory limits: use dynamic array with reserve.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L1_Arrays({ onQuizComplete }: Props) {
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
      question: "Why is a[i] computed in O(1) time on a contiguous array?",
      options: [
        "The CPU scans from the start until it reaches index i",
        "The address is calculated directly: base + i · element_size",
        "Arrays store a hash map internally",
        "Modern CPUs memorise all array values",
      ],
      correctIndex: 1,
      explanation: "Indexing is pure address arithmetic, no loop, no search. That is the defining advantage of arrays.",
    },
    {
      question: "Which operation is not O(n) in the worst case on a plain array?",
      options: ["Insert at index 0", "Delete at index 0", "Access a[5]", "Linear search"],
      correctIndex: 2,
      explanation: "Access is O(1). The others require shifting or scanning.",
    },
    {
      question: "Binary search requires the array to be…",
      options: ["Non-empty", "Sorted", "Unique", "Numeric"],
      correctIndex: 1,
      explanation: "Without sorted order, 'the target is larger, go right' is meaningless. Binary search relies on the sorted invariant.",
    },
    {
      question: "insertAt([1,2,3,4,5], 0, 9) performs how many element shifts?",
      options: ["0", "1", "4", "5"],
      correctIndex: 3,
      explanation: "All 5 existing elements must each move one position right to make space at index 0.",
    },
  ];

  return (
    <LessonShell
      title="Arrays"
      level={1}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Arrays are the foundation of nearly every DSA interview question"
      nextLessonHint="Strings"
      onQuizComplete={onQuizComplete}
    />
  );
}
