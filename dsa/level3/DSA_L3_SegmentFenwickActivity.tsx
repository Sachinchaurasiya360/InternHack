"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer, TreeCanvas, ArrayBars,
} from "@/components/engineering/algo";
import type { TreeNodeData, CellState } from "@/components/engineering/algo";
import {
  C,
  DSA_ACCENT as A,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  Lede,
  Card,
  PillButton,
  Callout,
} from "@/components/engineering/lessonPrimitives";

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
  lo: number; hi: number;
  value: number;
  left?: string; right?: string;
}
type SegTree = Record<string, SegNode>;

function buildSeg(arr: number[], op: Agg, frames: SegFrame[] | null): { tree: SegTree; rootId: string } {
  const tree: SegTree = {};
  function rec(idx: number, lo: number, hi: number): string {
    const id = `s${idx}`;
    if (lo === hi) {
      tree[id] = { id, idx, lo, hi, value: arr[lo] };
      if (frames) frames.push({
        line: 1, tree: cloneSeg(tree), rootId: "s1",
        nodeStates: { [id]: "done" }, arrStates: arr.map((_, i) => i === lo ? "match" : "default"),
        message: `Leaf [${lo},${hi}] ← ${arr[lo]}.`, vars: { lo, hi, value: arr[lo] },
      });
      return id;
    }
    const mid = Math.floor((lo + hi) / 2);
    const L = rec(idx * 2, lo, mid);
    const R = rec(idx * 2 + 1, mid + 1, hi);
    const val = combine(op, tree[L].value, tree[R].value);
    tree[id] = { id, idx, lo, hi, value: val, left: L, right: R };
    if (frames) frames.push({
      line: 4, tree: cloneSeg(tree), rootId: "s1",
      nodeStates: { [id]: "done", [L]: "visited", [R]: "visited" },
      arrStates: arr.map((_, i) => (i >= lo && i <= hi) ? "visited" : "default"),
      message: `Combine [${lo},${hi}] = ${op}(${tree[L].value}, ${tree[R].value}) = ${val}.`,
      vars: { lo, hi, value: val },
    });
    return id;
  }
  const root = rec(1, 0, arr.length - 1);
  return { tree, rootId: root };
}
function cloneSeg(t: SegTree): SegTree {
  const o: SegTree = {};
  Object.values(t).forEach((n) => { o[n.id] = { ...n }; });
  return o;
}

function queryRange(t: SegTree, rootId: string, ql: number, qh: number, op: Agg, arr: number[], frames: SegFrame[]) {
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
    const L = n.left ? rec(n.left) : identity(op);
    const R = n.right ? rec(n.right) : identity(op);
    return combine(op, L, R);
  }
  const res = rec(rootId);
  frames.push({
    line: 5, tree: cloneSeg(t), rootId,
    nodeStates: {}, arrStates: arr.map((_, i) => i >= ql && i <= qh ? "window" : "default"),
    message: `Answer for [${ql},${qh}] = ${res}.`,
    vars: { result: res },
  });
}

function pointUpdate(t: SegTree, rootId: string, idx: number, val: number, op: Agg, arr: number[], frames: SegFrame[]) {
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
    const L = n.left ? t[n.left].value : identity(op);
    const R = n.right ? t[n.right].value : identity(op);
    const newV = combine(op, L, R);
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

/* ------------------------------------------------------------------ */
/*  Fenwick tree (BIT)                                                  */
/* ------------------------------------------------------------------ */

function buildBIT(arr: number[]): number[] {
  const bit = new Array(arr.length + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (j < bit.length) { bit[j] += arr[i]; j += j & -j; }
  }
  return bit;
}

interface SegFrame {
  line: number;
  tree: SegTree;
  rootId: string;
  nodeStates: Record<string, CellState>;
  arrStates: CellState[];
  message: string;
  vars: Record<string, string | number | undefined>;
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

function buildFrames(arr: number[], segOp: SegOp, op: Agg, ql: number, qh: number, upIdx: number, upVal: number): SegFrame[] {
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
/*  Visualize tab                                                       */
/* ------------------------------------------------------------------ */

type Tab = "seg" | "fenwick";

function VisualizeTab() {
  const [tab, setTab] = useState<Tab>("seg");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 6 }}>
        <PillButton onClick={() => setTab("seg")} active={tab === "seg"} color={A}>
          <span style={{ fontSize: "0.8rem" }}>Segment Tree</span>
        </PillButton>
        <PillButton onClick={() => setTab("fenwick")} active={tab === "fenwick"} color={A}>
          <span style={{ fontSize: "0.8rem" }}>Fenwick (BIT)</span>
        </PillButton>
      </div>
      {tab === "seg" ? <SegViz /> : <FenwickViz />}
    </div>
  );
}

const inputStyle = (extra?: React.CSSProperties): React.CSSProperties => ({
  padding: "6px 10px", borderRadius: 8,
  border: `1px solid ${C.border}`, fontFamily: C.mono, fontSize: "0.82rem",
  outline: "none", background: C.bg, color: C.text,
  ...extra,
});

function SegViz() {
  const [input, setInput] = useState("3, 1, 4, 1, 5, 9, 2, 6");
  const [segOp, setSegOp] = useState<SegOp>("build");
  const [op, setOp] = useState<Agg>("sum");
  const [ql, setQl] = useState(1);
  const [qh, setQh] = useState(5);
  const [upIdx, setUpIdx] = useState(2);
  const [upVal, setUpVal] = useState(10);

  const parsed = useMemo(() => parseArr(input) ?? [3, 1, 4, 1, 5, 9, 2, 6], [input]);
  const frames = useMemo(
    () => buildFrames(parsed, segOp, op, Math.max(0, Math.min(ql, parsed.length - 1)), Math.max(0, Math.min(qh, parsed.length - 1)), Math.max(0, Math.min(upIdx, parsed.length - 1)), upVal),
    [parsed, segOp, op, ql, qh, upIdx, upVal]
  );
  const player = useStepPlayer(frames);
  const frame = player.current!;

  const treeNodes: Record<string, TreeNodeData> = useMemo(() => {
    const o: Record<string, TreeNodeData> = {};
    Object.values(frame.tree).forEach((n) => {
      o[n.id] = {
        id: n.id, value: n.value,
        left: n.left, right: n.right,
        state: frame.nodeStates[n.id],
        meta: { range: `[${n.lo},${n.hi}]` },
      };
    });
    return o;
  }, [frame]);

  const pseudo = segOp === "build" ? BUILD_PSEUDO : segOp === "query" ? QUERY_PSEUDO : UPDATE_PSEUDO;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
        {(["build", "query", "update"] as SegOp[]).map((m) => (
          <PillButton key={m} onClick={() => setSegOp(m)} active={segOp === m} color={A}>
            <span style={{ fontSize: "0.78rem", textTransform: "capitalize" }}>{m}</span>
          </PillButton>
        ))}
        <div style={{ marginLeft: 8, display: "flex", gap: 4 }}>
          {(["sum", "min", "max"] as Agg[]).map((k) => (
            <PillButton key={k} onClick={() => setOp(k)} active={op === k} color={A}>
              <span style={{ fontSize: "0.74rem" }}>{k}</span>
            </PillButton>
          ))}
        </div>
        {segOp === "query" && (
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginLeft: 8 }}>
            <span style={{ fontSize: "0.78rem", color: C.textMuted, fontWeight: 600, fontFamily: C.heading }}>range:</span>
            <input type="number" value={ql} onChange={(e) => setQl(Number(e.target.value))} style={inputStyle({ width: 60 })} />
            <span style={{ color: C.textMuted }}>–</span>
            <input type="number" value={qh} onChange={(e) => setQh(Number(e.target.value))} style={inputStyle({ width: 60 })} />
          </div>
        )}
        {segOp === "update" && (
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginLeft: 8 }}>
            <span style={{ fontSize: "0.78rem", color: C.textMuted, fontWeight: 600, fontFamily: C.heading }}>idx:</span>
            <input type="number" value={upIdx} onChange={(e) => setUpIdx(Number(e.target.value))} style={inputStyle({ width: 60 })} />
            <span style={{ color: C.textMuted }}>=</span>
            <input type="number" value={upVal} onChange={(e) => setUpVal(Number(e.target.value))} style={inputStyle({ width: 60 })} />
          </div>
        )}
      </div>
      <AlgoCanvas
        title={`Segment Tree — ${segOp} (${op})`}
        player={player}
        input={
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
        }
        pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame.line} />}
        variables={<VariablesPanel vars={frame.vars} />}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: C.heading }}>
              Segment tree (value · [range])
            </div>
            <TreeCanvas nodes={treeNodes} root={frame.rootId} width={620} height={300} />
          </div>
          <div>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: C.heading }}>
              Underlying array
            </div>
            <ArrayBars values={parsed} states={frame.arrStates} height={110}
              windowRange={segOp === "query" ? [Math.min(ql, qh), Math.max(ql, qh)] : undefined} />
          </div>
        </div>
      </AlgoCanvas>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Fenwick viz                                                         */
/* ------------------------------------------------------------------ */

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

function buildFenFrames(arr: number[], mode: "prefix" | "update", queryIdx: number, upIdx: number, delta: number): FFrame[] {
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
      const bitSt = bit.map(() => "default" as CellState);
      const arcHi: typeof arcs = arcs.map((a, i) => ({ ...a, highlight: i === j - 1 }));
      bitSt[j] = "match";
      frames.push({
        line: 4, arrStates: arr.map((_, i) => i <= queryIdx ? "window" : "default"),
        bitStates: bitSt, message: `Add bit[${j}] = ${bit[j]} (covers [${arcs[j - 1].lo},${arcs[j - 1].hi}]). Running sum = ${sum + bit[j]}.`,
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
      const bitSt = bit.map(() => "default" as CellState);
      bitSt[j] = "swap";
      const arcHi = arcs.map((a, i) => ({ ...a, highlight: i === j - 1 }));
      frames.push({
        line: 3, arrStates: arr.map((_, i) => i === upIdx ? "swap" : "default"),
        bitStates: bitSt,
        message: `bit[${j}] += ${delta} → now ${bit[j]}. (covers [${arcs[j - 1].lo},${arcs[j - 1].hi}])`,
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

function FenwickViz() {
  const [input, setInput] = useState("3, 1, 4, 1, 5, 9, 2, 6");
  const [mode, setMode] = useState<"prefix" | "update">("prefix");
  const [qi, setQi] = useState(4);
  const [ui, setUi] = useState(2);
  const [ud, setUd] = useState(3);

  const parsed = useMemo(() => parseArr(input) ?? [3, 1, 4, 1, 5, 9, 2, 6], [input]);
  const frames = useMemo(() => buildFenFrames(parsed, mode, Math.max(0, Math.min(qi, parsed.length - 1)), Math.max(0, Math.min(ui, parsed.length - 1)), ud), [parsed, mode, qi, ui, ud]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  const pseudo = mode === "prefix" ? FEN_QUERY_PSEUDO : FEN_UPDATE_PSEUDO;
  const bit = useMemo(() => buildBIT(parsed), [parsed]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
        <PillButton onClick={() => setMode("prefix")} active={mode === "prefix"} color={A}>
          <span style={{ fontSize: "0.78rem" }}>Prefix sum</span>
        </PillButton>
        <PillButton onClick={() => setMode("update")} active={mode === "update"} color={A}>
          <span style={{ fontSize: "0.78rem" }}>Update</span>
        </PillButton>
        {mode === "prefix" ? (
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginLeft: 8 }}>
            <span style={{ fontSize: "0.78rem", color: C.textMuted, fontWeight: 600, fontFamily: C.heading }}>up to idx:</span>
            <input type="number" value={qi} onChange={(e) => setQi(Number(e.target.value))} style={inputStyle({ width: 60 })} />
          </div>
        ) : (
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginLeft: 8 }}>
            <span style={{ fontSize: "0.78rem", color: C.textMuted, fontWeight: 600, fontFamily: C.heading }}>idx:</span>
            <input type="number" value={ui} onChange={(e) => setUi(Number(e.target.value))} style={inputStyle({ width: 60 })} />
            <span style={{ fontSize: "0.78rem", color: C.textMuted }}>+=</span>
            <input type="number" value={ud} onChange={(e) => setUd(Number(e.target.value))} style={inputStyle({ width: 60 })} />
          </div>
        )}
      </div>
      <AlgoCanvas
        title={`Fenwick / BIT — ${mode}`}
        player={player}
        input={
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
        }
        pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame.line} />}
        variables={<VariablesPanel vars={frame.vars} />}
        legend={<span>Each BIT index i covers [i − lowbit(i) + 1, i]. Jumps use i += i &amp; −i (update) or i −= i &amp; −i (query).</span>}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: C.heading }}>
              Original array
            </div>
            <ArrayBars values={parsed} states={frame.arrStates} height={100} />
          </div>
          <div>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: C.heading }}>
              BIT array (1-indexed, bit[0] unused)
            </div>
            <ArrayBars values={bit} states={frame.bitStates} height={110} labels={bit.map((_, i) => String(i))} />
            <BITArcs arcs={frame.arc} n={bit.length - 1} />
          </div>
        </div>
      </AlgoCanvas>
    </div>
  );
}

function BITArcs({ arcs, n }: { arcs: { lo: number; hi: number; highlight?: boolean }[]; n: number }) {
  const cellW = Math.min(48, Math.max(18, Math.floor(620 / Math.max(1, n + 1))));
  const gap = 4;
  const totalW = (n + 1) * cellW + n * gap;
  const height = 60;
  return (
    <div style={{ padding: "4px 8px", display: "flex", justifyContent: "center" }}>
      <svg viewBox={`0 0 ${totalW} ${height}`} width={totalW} height={height}>
        {arcs.map((arc, i) => {
          const x1 = (arc.lo + 1) * (cellW + gap) + cellW / 2 - gap;
          const x2 = (arc.hi + 1) * (cellW + gap) + cellW / 2 - gap;
          const mid = (x1 + x2) / 2;
          const col = arc.highlight ? A : C.textMuted;
          return (
            <path key={i}
              d={`M ${x1} 6 Q ${mid} ${30 + i % 2 * 20} ${x2} 6`}
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
/*  Learn/Try/Insight                                                   */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const items = [
    { title: "Segment tree shape", body: "Full binary tree over array indices. Leaves = elements. Each internal node covers [lo,hi] and stores the aggregate of that range. O(4n) memory is a safe upper bound." },
    { title: "Range query = O(log n)", body: "Walk down: if node is fully inside the query → use its value. Fully outside → skip. Partial → recurse both kids. At most O(log n) nodes are ever touched." },
    { title: "Point update = O(log n)", body: "Update the leaf, then walk up the chain of ancestors and recombine. Only the one root-to-leaf path changes." },
    { title: "Fenwick tree (BIT)", body: "Clever array that supports prefix-sum and point-update in O(log n) using the bit trick i ± (i & −i). Half the code of a segment tree for sum queries." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Range queries in log time</SectionEyebrow>
        <SectionTitle>Segment trees and Fenwick trees</SectionTitle>
        <Lede>
          Given an array and many queries of the form &ldquo;sum/min/max of arr[l..r]&rdquo; plus
          occasional updates — both segment trees and Fenwick trees give O(log n) per operation.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 12 }}>
        {items.map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: A, marginBottom: 6, fontFamily: C.mono, letterSpacing: "0.08em" }}>0{i + 1}</div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.title}</div>
            <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }}>{s.body}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

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
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Draw the tree or BIT by hand for each.</Callout>
      {problems.map((p, i) => {
        const gv = (g[i] ?? "").replace(/\s+/g, "").toLowerCase();
        const correct = gv === p.a.replace(/\s+/g, "").toLowerCase();
        return (
          <Card key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700, fontSize: "0.85rem", color: C.textMuted, fontFamily: C.mono }}>#{i + 1}</span>
              <span style={{ fontSize: "0.9rem", flex: "1 1 260px", color: C.text }}>{p.q}</span>
              <input
                type="text"
                placeholder="answer"
                value={g[i] ?? ""}
                onChange={(e) => { const v = [...g]; v[i] = e.target.value; setG(v); }}
                style={{
                  width: 140, padding: "7px 10px", borderRadius: 8,
                  border: `1px solid ${C.border}`, fontFamily: C.mono, fontSize: "0.85rem",
                  outline: "none", background: C.bg, color: C.text,
                }}
              />
              <button
                onClick={() => { const v = [...s]; v[i] = true; setS(v); }}
                style={{
                  padding: "6px 14px", borderRadius: 8, fontSize: "0.78rem", fontWeight: 700,
                  border: `1px solid ${C.border}`, background: C.bg, color: C.textSecondary,
                  cursor: "pointer", fontFamily: C.heading,
                }}
              >
                Reveal
              </button>
              {s[i] && (
                <span style={{
                  fontSize: "0.82rem", fontWeight: 700,
                  color: correct ? C.successDark : C.dangerDark,
                  padding: "4px 12px", borderRadius: 8,
                  background: correct ? `${C.success}14` : `${C.danger}14`,
                  fontFamily: C.heading,
                }}>
                  {correct ? `✓ Correct` : `Answer: ${p.a}`}
                </span>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

function InsightTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>Segment tree vs Fenwick</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Fenwick wins on simplicity and constants but <em>only works for invertible
          operations</em> (sum, xor). For min/max/gcd, you need a segment tree. Segment trees also
          generalize to lazy propagation for range-update/range-query.
        </p>
      </Card>
      <Card>
        <SubHeading>Why i &amp; −i works</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          In two&rsquo;s complement,{" "}
          <code style={{ fontFamily: C.mono }}>i &amp; −i</code> isolates the lowest set bit of i.
          That bit tells how many elements bit[i] is responsible for — the ranges fit together
          like a puzzle, covering every prefix in O(log n) pieces.
        </p>
      </Card>
      <Card>
        <SubHeading>Beyond plain ranges</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Competitive programming extends segment trees with <em>lazy propagation</em>{" "}
          (range-update), persistent trees (time travel), 2D segment trees, segment trees on
          trees (Euler tour), and HLD — but everything starts from the basic build/query/update
          you just saw.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                             */
/* ------------------------------------------------------------------ */

export default function DSA_L3_SegmentFenwickActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
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
    <EngineeringLessonShell
      title="Segment & Fenwick Trees"
      level={3}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Range queries, inversion count, competitive programming"
      nextLessonHint="Level 4 — Graphs"
    />
  );
}
