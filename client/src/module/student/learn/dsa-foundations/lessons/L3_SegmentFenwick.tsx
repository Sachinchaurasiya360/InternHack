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
  InlineCode,
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "segment-tree";

/* ------------------------------------------------------------------ */
/*  Local CellState + color map                                         */
/* ------------------------------------------------------------------ */

type CellState = "default" | "active" | "visited" | "done" | "mismatch" | "match" | "swap" | "window" | "path";

const STATE_COLOR: Record<CellState, string> = {
  default: THEME.bg,
  active: "#a3e635",
  visited: "#d1fae5",
  done: "#86efac",
  mismatch: "#fca5a5",
  match: "#6ee7b7",
  swap: "#f87171",
  window: "#bfdbfe",
  path: "#e9d5ff",
};

const STATE_BORDER: Record<CellState, string> = {
  default: THEME.border,
  active: "#65a30d",
  visited: "#34d399",
  done: "#22c55e",
  mismatch: "#f87171",
  match: "#10b981",
  swap: "#ef4444",
  window: "#3b82f6",
  path: "#8b5cf6",
};

const STATE_TEXT: Record<CellState, string> = {
  default: THEME.text,
  active: "#1a2e05",
  visited: "#14532d",
  done: "#14532d",
  mismatch: "#450a0a",
  match: "#14532d",
  swap: "#450a0a",
  window: "#1e3a8a",
  path: "#4c1d95",
};

/* ------------------------------------------------------------------ */
/*  Segment tree                                                        */
/* ------------------------------------------------------------------ */

type Agg = "sum" | "min" | "max";

function combine(op: Agg, a: number, b: number): number {
  if (op === "sum") return a + b;
  if (op === "min") return Math.min(a, b);
  return Math.max(a, b);
}
function identity(op: Agg): number {
  if (op === "sum") return 0;
  if (op === "min") return Infinity;
  return -Infinity;
}

interface SegNode {
  id: string;
  idx: number;
  lo: number;
  hi: number;
  value: number;
  left?: string;
  right?: string;
}
type SegTree = Record<string, SegNode>;

interface SegFrame {
  line: number;
  tree: SegTree;
  rootId: string;
  nodeStates: Record<string, CellState>;
  arrStates: CellState[];
  message: string;
  vars: Record<string, string | number | undefined>;
}

function cloneSeg(t: SegTree): SegTree {
  const o: SegTree = {};
  Object.values(t).forEach((n) => { o[n.id] = { ...n }; });
  return o;
}

function buildSeg(
  arr: number[],
  op: Agg,
  frames: SegFrame[] | null,
): { tree: SegTree; rootId: string } {
  const tree: SegTree = {};
  function rec(idx: number, lo: number, hi: number): string {
    const id = `s${idx}`;
    if (lo === hi) {
      tree[id] = { id, idx, lo, hi, value: arr[lo] };
      if (frames)
        frames.push({
          line: 1, tree: cloneSeg(tree), rootId: "s1",
          nodeStates: { [id]: "done" },
          arrStates: arr.map((_, i) => i === lo ? "match" : "default"),
          message: `Leaf [${lo},${hi}] ← ${arr[lo]}.`, vars: { lo, hi, value: arr[lo] },
        });
      return id;
    }
    const mid = Math.floor((lo + hi) / 2);
    const L = rec(idx * 2, lo, mid);
    const R = rec(idx * 2 + 1, mid + 1, hi);
    const val = combine(op, tree[L].value, tree[R].value);
    tree[id] = { id, idx, lo, hi, value: val, left: L, right: R };
    if (frames)
      frames.push({
        line: 4, tree: cloneSeg(tree), rootId: "s1",
        nodeStates: { [id]: "done", [L]: "visited", [R]: "visited" },
        arrStates: arr.map((_, i) => i >= lo && i <= hi ? "visited" : "default"),
        message: `Combine [${lo},${hi}] = ${op}(${tree[L].value}, ${tree[R].value}) = ${val}.`,
        vars: { lo, hi, value: val },
      });
    return id;
  }
  const root = rec(1, 0, arr.length - 1);
  return { tree, rootId: root };
}

function queryRange(
  t: SegTree,
  rootId: string,
  ql: number,
  qh: number,
  op: Agg,
  arr: number[],
  frames: SegFrame[],
) {
  function rec(id: string): number {
    const n = t[id];
    if (qh < n.lo || ql > n.hi) {
      frames.push({
        line: 1, tree: cloneSeg(t), rootId,
        nodeStates: { [id]: "mismatch" },
        arrStates: arr.map((_, i) => i >= ql && i <= qh ? "window" : "default"),
        message: `[${n.lo},${n.hi}] outside [${ql},${qh}] — skip.`,
        vars: { ql, qh, lo: n.lo, hi: n.hi },
      });
      return identity(op);
    }
    if (ql <= n.lo && n.hi <= qh) {
      frames.push({
        line: 2, tree: cloneSeg(t), rootId,
        nodeStates: { [id]: "done" },
        arrStates: arr.map((_, i) => i >= ql && i <= qh ? "window" : "default"),
        message: `[${n.lo},${n.hi}] fully inside [${ql},${qh}] — use value ${n.value}.`,
        vars: { ql, qh, hit: n.value },
      });
      return n.value;
    }
    frames.push({
      line: 3, tree: cloneSeg(t), rootId,
      nodeStates: { [id]: "active" },
      arrStates: arr.map((_, i) => i >= ql && i <= qh ? "window" : "default"),
      message: `[${n.lo},${n.hi}] partially covers — descend both children.`,
      vars: { ql, qh, lo: n.lo, hi: n.hi },
    });
    const Lv = n.left ? rec(n.left) : identity(op);
    const Rv = n.right ? rec(n.right) : identity(op);
    return combine(op, Lv, Rv);
  }
  const res = rec(rootId);
  frames.push({
    line: 5, tree: cloneSeg(t), rootId,
    nodeStates: {}, arrStates: arr.map((_, i) => i >= ql && i <= qh ? "window" : "default"),
    message: `Answer for [${ql},${qh}] = ${res}.`,
    vars: { result: res },
  });
}

function pointUpdate(
  t: SegTree,
  rootId: string,
  idx: number,
  val: number,
  op: Agg,
  arr: number[],
  frames: SegFrame[],
) {
  arr[idx] = val;
  function rec(id: string): void {
    const n = t[id];
    if (idx < n.lo || idx > n.hi) return;
    if (n.lo === n.hi) {
      n.value = val;
      frames.push({
        line: 2, tree: cloneSeg(t), rootId,
        nodeStates: { [id]: "swap" },
        arrStates: arr.map((_, i) => i === idx ? "swap" : "default"),
        message: `Update leaf [${n.lo}] ← ${val}.`,
        vars: { idx, value: val },
      });
      return;
    }
    if (n.left) rec(n.left);
    if (n.right) rec(n.right);
    const Lv = n.left ? t[n.left].value : identity(op);
    const Rv = n.right ? t[n.right].value : identity(op);
    const newV = combine(op, Lv, Rv);
    n.value = newV;
    frames.push({
      line: 4, tree: cloneSeg(t), rootId,
      nodeStates: { [id]: "active" },
      arrStates: arr.map((_, i) => i === idx ? "swap" : "default"),
      message: `Recombine [${n.lo},${n.hi}] = ${newV}.`,
      vars: { idx, value: newV },
    });
  }
  rec(rootId);
}

const BUILD_PSEUDO = [
  "function build(node, lo, hi):",
  "  if lo == hi: node.value ← arr[lo]; return",
  "  mid ← (lo + hi) / 2",
  "  build(left, lo, mid); build(right, mid+1, hi)",
  "  node.value ← combine(left.value, right.value)",
];
const QUERY_PSEUDO = [
  "function query(node, ql, qh):",
  "  if node outside [ql,qh]: return identity",
  "  if node fully inside [ql,qh]: return node.value",
  "  partial → recurse both children",
  "  return combine(left, right)",
  "  # final",
];
const UPDATE_PSEUDO = [
  "function update(node, idx, val):",
  "  if idx outside node: return",
  "  if leaf: node.value ← val",
  "  recurse children",
  "  node.value ← combine(left, right)",
];

type SegOp = "build" | "query" | "update";

function parseArr(s: string): number[] | null {
  const p = s.split(/[,\s]+/).map((x) => x.trim()).filter(Boolean).map(Number);
  if (p.some((n) => Number.isNaN(n))) return null;
  return p;
}

function buildSegFrames(
  arr: number[],
  segOp: SegOp,
  op: Agg,
  ql: number,
  qh: number,
  upIdx: number,
  upVal: number,
): SegFrame[] {
  const frames: SegFrame[] = [];
  if (arr.length === 0) {
    frames.push({ line: 0, tree: {}, rootId: "", nodeStates: {}, arrStates: [], message: "Empty array.", vars: {} });
    return frames;
  }
  frames.push({
    line: 0, tree: {}, rootId: "s1",
    nodeStates: {}, arrStates: arr.map(() => "default"),
    message: `Array length ${arr.length} with op=${op}.`,
    vars: { n: arr.length, op },
  });
  const built = buildSeg(arr, op, segOp === "build" ? frames : null);
  if (segOp === "build") return frames;
  frames.push({
    line: 0, tree: cloneSeg(built.tree), rootId: built.rootId,
    nodeStates: Object.fromEntries(Object.keys(built.tree).map((k) => [k, "default" as CellState])),
    arrStates: arr.map(() => "default"),
    message: `Built segment tree. Now run ${segOp}.`,
    vars: { op },
  });
  if (segOp === "query") {
    queryRange(built.tree, built.rootId, ql, qh, op, arr, frames);
  } else {
    pointUpdate(built.tree, built.rootId, upIdx, upVal, op, arr, frames);
  }
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Local SegTree SVG                                                   */
/* ------------------------------------------------------------------ */

function SegTreeSVG({
  frame,
  width = 620,
  height = 300,
}: {
  frame: SegFrame;
  width?: number;
  height?: number;
}) {
  const nodes = Object.values(frame.tree);
  if (nodes.length === 0) return null;

  // Assign positions by depth + order
  const depth: Record<string, number> = {};
  function dfs(id: string, d: number) {
    depth[id] = d;
    const n = frame.tree[id];
    if (n.left) dfs(n.left, d + 1);
    if (n.right) dfs(n.right, d + 1);
  }
  dfs(frame.rootId, 0);

  const maxDepth = Math.max(...Object.values(depth));
  const levels: string[][] = Array.from({ length: maxDepth + 1 }, () => []);
  for (const id in frame.tree) levels[depth[id]].push(id);
  // Sort leaves by range
  for (const lv of levels) {
    lv.sort((a, b) => frame.tree[a].lo - frame.tree[b].lo);
  }

  const positions: Record<string, { x: number; y: number }> = {};
  for (let d = 0; d <= maxDepth; d++) {
    const row = levels[d];
    const total = row.length;
    row.forEach((id, i) => {
      positions[id] = {
        x: ((i + 0.5) / total) * width,
        y: 24 + d * ((height - 40) / Math.max(1, maxDepth)),
      };
    });
  }

  const R = 20;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: "100%", height: "auto", maxHeight: height }}
    >
      {nodes.map((n) => {
        const a = positions[n.id];
        if (!a) return null;
        return (
          <g key={`e${n.id}`}>
            {n.left && positions[n.left] && (
              <line
                x1={a.x} y1={a.y + R}
                x2={positions[n.left].x} y2={positions[n.left].y - R}
                stroke={THEME.border} strokeWidth={1.5}
              />
            )}
            {n.right && positions[n.right] && (
              <line
                x1={a.x} y1={a.y + R}
                x2={positions[n.right].x} y2={positions[n.right].y - R}
                stroke={THEME.border} strokeWidth={1.5}
              />
            )}
          </g>
        );
      })}
      {nodes.map((n) => {
        const a = positions[n.id];
        if (!a) return null;
        const st = (frame.nodeStates[n.id] ?? "default") as CellState;
        const fill = STATE_COLOR[st];
        const border = STATE_BORDER[st];
        const fg = STATE_TEXT[st];
        return (
          <g key={n.id} style={{ transition: "all 0.3s" }}>
            <circle
              cx={a.x} cy={a.y} r={R}
              fill={fill} stroke={border} strokeWidth={2}
              style={{ transition: "fill 0.3s, stroke 0.3s" }}
            />
            <text
              x={a.x} y={a.y + 3}
              textAnchor="middle" fontSize={10} fontWeight={700}
              fill={fg} fontFamily={THEME.mono}
            >
              {n.value}
            </text>
            <text
              x={a.x} y={a.y - R - 4}
              textAnchor="middle" fontSize={8}
              fill={THEME.textMuted} fontFamily={THEME.heading}
            >
              [{n.lo},{n.hi}]
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function ArrayBarsLocal({
  values,
  states,
  windowRange,
}: {
  values: number[];
  states: CellState[];
  windowRange?: [number, number];
}) {
  if (values.length === 0) return null;
  const maxVal = Math.max(...values.map(Math.abs), 1);
  const H = 80;

  return (
    <div className="flex items-end gap-1 justify-center">
      {values.map((v, i) => {
        const st = states[i] ?? "default";
        const inWindow = windowRange && i >= windowRange[0] && i <= windowRange[1];
        const effectiveSt = inWindow ? "window" : st;
        const h = Math.max(16, Math.round((Math.abs(v) / maxVal) * H));
        return (
          <div key={i} className="flex flex-col items-center gap-0.5" style={{ minWidth: 28 }}>
            <div
              className="w-full flex items-center justify-center text-[10px] font-mono font-bold"
              style={{
                height: h,
                background: STATE_COLOR[effectiveSt],
                color: STATE_TEXT[effectiveSt],
                borderRadius: 3,
                transition: "all 0.3s",
                border: `1px solid ${STATE_BORDER[effectiveSt]}`,
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
/*  Fenwick tree                                                        */
/* ------------------------------------------------------------------ */

function buildBIT(arr: number[]): number[] {
  const bit = new Array(arr.length + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (j < bit.length) { bit[j] += arr[i]; j += j & -j; }
  }
  return bit;
}

interface FFrame {
  line: number;
  arrStates: CellState[];
  bitStates: CellState[];
  message: string;
  vars: Record<string, string | number | undefined>;
  arc: { lo: number; hi: number; highlight?: boolean }[];
}

const FEN_UPDATE_PSEUDO = [
  "function update(bit, i, delta):",
  "  i ← i + 1               # 1-indexed",
  "  while i ≤ n:",
  "    bit[i] += delta",
  "    i += i & (−i)          # jump by lowest set bit",
];
const FEN_QUERY_PSEUDO = [
  "function prefix(bit, i):",
  "  i ← i + 1               # 1-indexed",
  "  sum ← 0",
  "  while i > 0:",
  "    sum += bit[i]",
  "    i −= i & (−i)",
  "  return sum",
];

function bitArcs(n: number): { lo: number; hi: number }[] {
  const arcs: { lo: number; hi: number }[] = [];
  for (let i = 1; i <= n; i++) {
    const low = i & -i;
    const lo = i - low + 1;
    arcs.push({ lo: lo - 1, hi: i - 1 });
  }
  return arcs;
}

function buildFenFrames(
  arr: number[],
  mode: "prefix" | "update",
  queryIdx: number,
  upIdx: number,
  delta: number,
): FFrame[] {
  const n = arr.length;
  const frames: FFrame[] = [];
  const bit = buildBIT(arr);
  const arcs = bitArcs(n);
  if (mode === "prefix") {
    frames.push({
      line: 0, arrStates: arr.map(() => "default"), bitStates: bit.map(() => "default"),
      message: `Prefix sum up to index ${queryIdx}.`, vars: { i: queryIdx + 1 }, arc: arcs,
    });
    let j = queryIdx + 1;
    let sum = 0;
    while (j > 0) {
      const bitSt: CellState[] = bit.map(() => "default");
      const arcHi = arcs.map((a, i) => ({ ...a, highlight: i === j - 1 }));
      bitSt[j] = "match";
      frames.push({
        line: 4,
        arrStates: arr.map((_, i) => i <= queryIdx ? "window" : "default"),
        bitStates: bitSt,
        message: `Add bit[${j}] = ${bit[j]} (covers [${arcs[j - 1]?.lo ?? 0},${arcs[j - 1]?.hi ?? 0}]). Running sum = ${sum + bit[j]}.`,
        vars: { i: j, running: sum + bit[j] }, arc: arcHi,
      });
      sum += bit[j];
      j -= j & -j;
    }
    frames.push({
      line: 6, arrStates: arr.map((_, i) => i <= queryIdx ? "window" : "default"),
      bitStates: bit.map(() => "default"),
      message: `Prefix sum [0,${queryIdx}] = ${sum}.`,
      vars: { result: sum }, arc: arcs,
    });
  } else {
    frames.push({
      line: 0, arrStates: arr.map((_, i) => i === upIdx ? "swap" : "default"),
      bitStates: bit.map(() => "default"),
      message: `Update index ${upIdx}: add ${delta}.`,
      vars: { i: upIdx + 1, delta }, arc: arcs,
    });
    let j = upIdx + 1;
    while (j <= n) {
      bit[j] += delta;
      const bitSt: CellState[] = bit.map(() => "default");
      bitSt[j] = "swap";
      const arcHi = arcs.map((a, i) => ({ ...a, highlight: i === j - 1 }));
      frames.push({
        line: 3,
        arrStates: arr.map((_, i) => i === upIdx ? "swap" : "default"),
        bitStates: bitSt,
        message: `bit[${j}] += ${delta} → now ${bit[j]}.`,
        vars: { i: j, bit: bit[j] }, arc: arcHi,
      });
      j += j & -j;
    }
    frames.push({
      line: 4, arrStates: arr.map(() => "default"),
      bitStates: bit.map(() => "default"),
      message: `Update complete.`, vars: { updates: "done" }, arc: arcs,
    });
  }
  return frames;
}

function BITArcs({ arcs, n }: { arcs: { lo: number; hi: number; highlight?: boolean }[]; n: number }) {
  const cellW = Math.min(48, Math.max(20, Math.floor(560 / Math.max(1, n + 1))));
  const gap = 4;
  const totalW = (n + 1) * cellW + n * gap;
  const height = 60;
  return (
    <div className="flex justify-center mt-1">
      <svg viewBox={`0 0 ${totalW} ${height}`} width={totalW} height={height}>
        {arcs.map((arc, i) => {
          const x1 = (arc.lo + 1) * (cellW + gap) + cellW / 2 - gap;
          const x2 = (arc.hi + 1) * (cellW + gap) + cellW / 2 - gap;
          const mid = (x1 + x2) / 2;
          const col = arc.highlight ? THEME.accent : THEME.textMuted;
          return (
            <path
              key={i}
              d={`M ${x1} 6 Q ${mid} ${30 + (i % 2) * 20} ${x2} 6`}
              fill="none" stroke={col} strokeWidth={arc.highlight ? 2.5 : 1}
              opacity={arc.highlight ? 1 : 0.45}
              style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
            />
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize subtabs                                                   */
/* ------------------------------------------------------------------ */

function SegViz() {
  const [input, setInput] = useState("3, 1, 4, 1, 5, 9, 2, 6");
  const [segOp, setSegOp] = useState<SegOp>("build");
  const [op, setOp] = useState<Agg>("sum");
  const [ql, setQl] = useState(1);
  const [qh, setQh] = useState(5);
  const [upIdx, setUpIdx] = useState(2);
  const [upVal, setUpVal] = useState(10);

  const parsed = useMemo(() => parseArr(input) ?? [3, 1, 4, 1, 5, 9, 2, 6], [input]);
  const frames = useMemo(() => {
    const safeQl = Math.max(0, Math.min(ql, parsed.length - 1));
    const safeQh = Math.max(0, Math.min(qh, parsed.length - 1));
    const safeUp = Math.max(0, Math.min(upIdx, parsed.length - 1));
    return buildSegFrames(parsed, segOp, op, safeQl, safeQh, safeUp, upVal);
  }, [parsed, segOp, op, ql, qh, upIdx, upVal]);

  const player = useStepPlayer(frames);
  const frame = player.current;
  const pseudo = segOp === "build" ? BUILD_PSEUDO : segOp === "query" ? QUERY_PSEUDO : UPDATE_PSEUDO;

  return (
    <AlgoCanvas
      title={`Segment Tree — ${segOp} (${op})`}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <InputEditor
            label="Input array"
            value={input}
            placeholder="e.g. 3, 1, 4, 1, 5"
            helper="Tree is built over this array. Leaves = elements; internal nodes = aggregates."
            presets={[
              { label: "Pi-digits", value: "3, 1, 4, 1, 5, 9, 2, 6" },
              { label: "Small", value: "5, 2, 8, 1" },
              { label: "Sorted", value: "1, 2, 3, 4, 5, 6, 7, 8" },
            ]}
            onApply={(v) => { if (parseArr(v)) setInput(v); }}
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">/ operation</label>
            <div className="flex flex-wrap gap-1.5">
              {(["build", "query", "update"] as SegOp[]).map((m) => (
                <PillButton key={m} active={segOp === m} onClick={() => setSegOp(m)}>
                  <span className="text-[11px] font-semibold capitalize">{m}</span>
                </PillButton>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">/ aggregate</label>
            <div className="flex flex-wrap gap-1.5">
              {(["sum", "min", "max"] as Agg[]).map((k) => (
                <PillButton key={k} active={op === k} onClick={() => setOp(k)}>
                  <span className="text-[11px] font-semibold">{k}</span>
                </PillButton>
              ))}
            </div>
          </div>
          {segOp === "query" && (
            <div className="flex items-center gap-2 flex-wrap">
              <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">range:</label>
              <input
                type="number" value={ql} onChange={(e) => setQl(Number(e.target.value))}
                className="w-16 px-2 py-1 border border-stone-300 dark:border-white/10 rounded-md text-sm font-mono bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 outline-none"
              />
              <span className="text-stone-500">–</span>
              <input
                type="number" value={qh} onChange={(e) => setQh(Number(e.target.value))}
                className="w-16 px-2 py-1 border border-stone-300 dark:border-white/10 rounded-md text-sm font-mono bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 outline-none"
              />
            </div>
          )}
          {segOp === "update" && (
            <div className="flex items-center gap-2 flex-wrap">
              <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">idx:</label>
              <input
                type="number" value={upIdx} onChange={(e) => setUpIdx(Number(e.target.value))}
                className="w-16 px-2 py-1 border border-stone-300 dark:border-white/10 rounded-md text-sm font-mono bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 outline-none"
              />
              <span className="text-stone-500">=</span>
              <input
                type="number" value={upVal} onChange={(e) => setUpVal(Number(e.target.value))}
                className="w-16 px-2 py-1 border border-stone-300 dark:border-white/10 rounded-md text-sm font-mono bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 outline-none"
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
            / segment tree (value · [range])
          </div>
          <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 p-2 overflow-x-auto">
            {frame && <SegTreeSVG frame={frame} width={620} height={300} />}
          </div>
        </div>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
            / underlying array
          </div>
          <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 p-3 overflow-x-auto">
            <ArrayBarsLocal
              values={parsed}
              states={frame?.arrStates ?? parsed.map(() => "default")}
              windowRange={segOp === "query" ? [Math.min(ql, qh), Math.max(ql, qh)] : undefined}
            />
          </div>
        </div>
        <Callout className="w-full">{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function FenwickViz() {
  const [input, setInput] = useState("3, 1, 4, 1, 5, 9, 2, 6");
  const [mode, setMode] = useState<"prefix" | "update">("prefix");
  const [qi, setQi] = useState(4);
  const [ui, setUi] = useState(2);
  const [ud, setUd] = useState(3);

  const parsed = useMemo(() => parseArr(input) ?? [3, 1, 4, 1, 5, 9, 2, 6], [input]);
  const frames = useMemo(() => {
    const safeQi = Math.max(0, Math.min(qi, parsed.length - 1));
    const safeUi = Math.max(0, Math.min(ui, parsed.length - 1));
    return buildFenFrames(parsed, mode, safeQi, safeUi, ud);
  }, [parsed, mode, qi, ui, ud]);

  const player = useStepPlayer(frames);
  const frame = player.current;
  const pseudo = mode === "prefix" ? FEN_QUERY_PSEUDO : FEN_UPDATE_PSEUDO;
  const bit = useMemo(() => buildBIT(parsed), [parsed]);

  return (
    <AlgoCanvas
      title={`Fenwick / BIT — ${mode}`}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <InputEditor
            label="Input array"
            value={input}
            placeholder="e.g. 3, 1, 4"
            helper="BIT stores aggregates over ranges determined by lowest-set-bit arithmetic."
            presets={[
              { label: "Classic", value: "3, 1, 4, 1, 5, 9, 2, 6" },
              { label: "Ones", value: "1, 1, 1, 1, 1, 1, 1, 1" },
              { label: "Growing", value: "1, 2, 3, 4, 5, 6" },
            ]}
            onApply={(v) => { if (parseArr(v)) setInput(v); }}
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">/ mode</label>
            <div className="flex flex-wrap gap-1.5">
              <PillButton active={mode === "prefix"} onClick={() => setMode("prefix")}>
                <span className="text-[11px] font-semibold">Prefix sum</span>
              </PillButton>
              <PillButton active={mode === "update"} onClick={() => setMode("update")}>
                <span className="text-[11px] font-semibold">Update</span>
              </PillButton>
            </div>
          </div>
          {mode === "prefix" ? (
            <div className="flex items-center gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">up to idx:</label>
              <input
                type="number" value={qi} onChange={(e) => setQi(Number(e.target.value))}
                className="w-16 px-2 py-1 border border-stone-300 dark:border-white/10 rounded-md text-sm font-mono bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 outline-none"
              />
            </div>
          ) : (
            <div className="flex items-center gap-2 flex-wrap">
              <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">idx:</label>
              <input
                type="number" value={ui} onChange={(e) => setUi(Number(e.target.value))}
                className="w-16 px-2 py-1 border border-stone-300 dark:border-white/10 rounded-md text-sm font-mono bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 outline-none"
              />
              <span className="text-stone-500">+=</span>
              <input
                type="number" value={ud} onChange={(e) => setUd(Number(e.target.value))}
                className="w-16 px-2 py-1 border border-stone-300 dark:border-white/10 rounded-md text-sm font-mono bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 outline-none"
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
            / original array
          </div>
          <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 p-3 overflow-x-auto">
            <ArrayBarsLocal values={parsed} states={frame?.arrStates ?? parsed.map(() => "default")} />
          </div>
        </div>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
            / BIT array (1-indexed, bit[0] unused)
          </div>
          <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 p-3 overflow-x-auto">
            <ArrayBarsLocal
              values={bit}
              states={frame?.bitStates ?? bit.map(() => "default")}
            />
            {frame && <BITArcs arcs={frame.arc} n={bit.length - 1} />}
          </div>
        </div>
        <Callout className="w-full">
          {frame?.message ?? "Press play to step through."} Each BIT index i covers
          [i - lowbit(i) + 1, i]. Jumps use i += i &amp; -i (update) or i -= i &amp; -i (query).
        </Callout>
      </div>
    </AlgoCanvas>
  );
}

type VizTab = "seg" | "fenwick";

function VisualizeTab() {
  const [tab, setTab] = useState<VizTab>("seg");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-1.5">
        <PillButton active={tab === "seg"} onClick={() => setTab("seg")}>
          <span className="text-[11px] font-semibold">Segment Tree</span>
        </PillButton>
        <PillButton active={tab === "fenwick"} onClick={() => setTab("fenwick")}>
          <span className="text-[11px] font-semibold">Fenwick (BIT)</span>
        </PillButton>
      </div>
      {tab === "seg" ? <SegViz /> : <FenwickViz />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                           */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const items = [
    { title: "Segment tree shape", body: "Full binary tree over array indices. Leaves = elements. Each internal node covers [lo,hi] and stores the aggregate of that range. O(4n) memory is a safe upper bound." },
    { title: "Range query = O(log n)", body: "Walk down: if node is fully inside the query use its value. Fully outside skip. Partial recurse both kids. At most O(log n) nodes are ever touched." },
    { title: "Point update = O(log n)", body: "Update the leaf, then walk up the chain of ancestors and recombine. Only the one root-to-leaf path changes." },
    { title: "Fenwick tree (BIT)", body: "Clever array that supports prefix-sum and point-update in O(log n) using the bit trick i ± (i & −i). Half the code of a segment tree for sum queries." },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>range queries in log time</SectionEyebrow>
        <SectionTitle>Segment trees and Fenwick trees</SectionTitle>
        <Lede>
          Given an array and many queries of the form "sum/min/max of arr[l..r]" plus occasional
          updates — both segment trees and Fenwick trees give O(log n) per operation.
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
    { q: "Segment tree on [3,1,4,1,5]. sum of [1..3]?", a: "6" },
    { q: "Same array, min of [0..4]?", a: "1" },
    { q: "BIT for [1,1,1,1,1]. bit[4] (4 = 100₂) covers how many original indices?", a: "4" },
    { q: "Time for k queries + k updates on n-array using segment tree?", a: "O(k log n)" },
  ];
  const [g, setG] = useState<(string | null)[]>(problems.map(() => null));
  const [s, setS] = useState<boolean[]>(problems.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>Draw the tree or BIT by hand for each.</Callout>
      {problems.map((p, i) => {
        const gv = (g[i] ?? "").replace(/\s+/g, "").toLowerCase();
        const correct = gv === p.a.replace(/\s+/g, "").toLowerCase();
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
        <SubHeading>Segment tree vs Fenwick</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Fenwick wins on simplicity and constants but only works for invertible operations (sum,
          xor). For min/max/gcd, you need a segment tree. Segment trees also generalize to lazy
          propagation for range-update/range-query.
        </p>
      </div>
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
        <SubHeading>Why i &amp; -i works</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          In two's complement, <InlineCode>i &amp; -i</InlineCode> isolates the lowest set bit of i.
          That bit tells how many elements <InlineCode>bit[i]</InlineCode> is responsible for — the
          ranges fit together like a puzzle, covering every prefix in O(log n) pieces.
        </p>
      </div>
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
        <SubHeading>Beyond plain ranges</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Competitive programming extends segment trees with lazy propagation (range-update),
          persistent trees (time travel), 2D segment trees, segment trees on trees (Euler tour),
          and HLD — but everything starts from the basic build/query/update you just saw.
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

export default function L3_SegmentFenwick({ onQuizComplete }: Props) {
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
      question: "Time complexity of a range-sum query on a segment tree of size n?",
      options: ["O(1)", "O(log n)", "O(√n)", "O(n)"],
      correctIndex: 1,
      explanation: "Each query touches O(log n) nodes — the minimal covering set of full sub-ranges.",
    },
    {
      question: "Which range aggregation cannot be handled by a Fenwick tree directly?",
      options: ["sum", "xor", "minimum", "count (additive)"],
      correctIndex: 2,
      explanation: "Minimum is non-invertible — you cannot subtract back. Segment trees handle it; Fenwick cannot (for arbitrary point updates).",
    },
    {
      question: "For a Fenwick tree, bit[i] stores the aggregate over:",
      options: [
        "indices 1..i",
        "indices i..n",
        "indices (i − lowbit(i) + 1) .. i (1-indexed)",
        "a random subset",
      ],
      correctIndex: 2,
      explanation: "lowbit(i) = i & −i. Each BIT slot covers exactly that many elements ending at i.",
    },
    {
      question: "A segment tree for n leaves needs storage of at most:",
      options: ["n", "2n", "4n", "n²"],
      correctIndex: 2,
      explanation: "4n is the standard safe bound because the conceptual full binary tree can have up to 2·2^⌈log n⌉ ≤ 4n nodes.",
    },
  ];

  return (
    <LessonShell
      title="Segment & Fenwick Trees"
      level={3}
      lessonNumber={7}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Range queries, inversion count, competitive programming"
      nextLessonHint="B+ Trees"
      onQuizComplete={onQuizComplete}
    />
  );
}
