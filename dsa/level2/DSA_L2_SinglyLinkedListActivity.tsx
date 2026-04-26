"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer,
} from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, PillButton, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

type Op = "head" | "insert" | "delete";

interface NodeView {
  id: string;
  value: number;
  state?: "default" | "active" | "new" | "deleted";
}

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  highlightKey?: string;
  nodes: NodeView[];
  headId: string | null;
  /** traversal pointer on which node (by id) */
  cursorId?: string | null;
  /** new node floating above for insertion */
  pendingNew?: { id: string; value: number; at: number } | null;
  /** edges to highlight in red (to be deleted) or green (new) */
  edgeHighlights?: Record<string, "new" | "deleted">;
}

/* ------------------------------------------------------------------ */
/*  Frame builders                                                      */
/* ------------------------------------------------------------------ */

const PSEUDO_HEAD = [
  "function insertAtHead(head, value):",
  "  node ← new Node(value)",
  "  node.next ← head",
  "  head ← node",
  "  return head",
];

const PSEUDO_INSERT = [
  "function insertAt(head, k, value):",
  "  if k == 0: return insertAtHead(head, value)",
  "  cur ← head; i ← 0",
  "  while cur.next != null and i < k-1:",
  "    cur ← cur.next; i ← i + 1",
  "  node ← new Node(value)",
  "  node.next ← cur.next",
  "  cur.next ← node",
  "  return head",
];

const PSEUDO_DELETE = [
  "function deleteAt(head, k):",
  "  if k == 0: head ← head.next; return head",
  "  cur ← head; i ← 0",
  "  while cur.next != null and i < k-1:",
  "    cur ← cur.next; i ← i + 1",
  "  if cur.next == null: return head",
  "  cur.next ← cur.next.next",
  "  return head",
];

let __idc = 0;
const nid = (p = "n") => `${p}${++__idc}`;

function initial(values: number[]): { nodes: NodeView[]; headId: string | null } {
  __idc = 0;
  const nodes = values.map((v) => ({ id: nid(), value: v }));
  return { nodes, headId: nodes[0]?.id ?? null };
}

function buildHead(values: number[], newVal: number): Frame[] {
  const { nodes, headId } = initial(values);
  const f: Frame[] = [];
  f.push({ line: 0, vars: { value: newVal, head: headId ? nodes[0].value : "null" }, message: `Insert ${newVal} at head`, nodes, headId });
  const newNode: NodeView = { id: nid(), value: newVal, state: "new" };
  f.push({ line: 1, vars: { value: newVal, newNode: newVal }, highlightKey: "newNode",
    message: `Allocate new node with value ${newVal}`, nodes, headId, pendingNew: { id: newNode.id, value: newVal, at: -1 } });
  f.push({ line: 2, vars: { value: newVal, "newNode.next": headId ? nodes[0].value : "null" },
    message: "Point newNode.next at current head", nodes, headId,
    pendingNew: { id: newNode.id, value: newVal, at: -1 },
    edgeHighlights: { [`${newNode.id}->${headId ?? "null"}`]: "new" } });
  const nodes2 = [newNode, ...nodes];
  f.push({ line: 3, vars: { head: newVal }, highlightKey: "head",
    message: `Move head pointer to new node`, nodes: nodes2, headId: newNode.id });
  f.push({ line: 4, vars: { head: newVal }, message: "Done - O(1) insertion at head", nodes: nodes2.map((n) => ({ ...n, state: undefined })), headId: newNode.id });
  return f;
}

function buildInsert(values: number[], k: number, newVal: number): Frame[] {
  const { nodes, headId } = initial(values);
  const f: Frame[] = [];
  f.push({ line: 0, vars: { k, value: newVal }, message: `Insert ${newVal} at position ${k}`, nodes, headId });
  if (k === 0) {
    return buildHead(values, newVal);
  }
  if (!headId || k > nodes.length) {
    f.push({ line: 0, vars: { k, value: newVal }, message: `Position ${k} is out of range - clamping`, nodes, headId });
    return f;
  }
  f.push({ line: 1, vars: { k }, message: "k ≠ 0, traverse list to find position", nodes, headId });
  let i = 0;
  let cur = nodes[0];
  f.push({ line: 2, vars: { k, i, "cur.value": cur.value }, highlightKey: "cur",
    message: `Start: cur = head (value ${cur.value}), i = 0`,
    nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id });
  while (i < k - 1 && i < nodes.length - 1) {
    f.push({ line: 3, vars: { k, i, "cur.value": cur.value },
      message: `Check: is i (${i}) < k-1 (${k - 1})? Yes - advance`,
      nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id });
    cur = nodes[i + 1];
    i++;
    f.push({ line: 4, vars: { k, i, "cur.value": cur.value }, highlightKey: "cur",
      message: `Walked one step: cur = ${cur.value}, i = ${i}`,
      nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id });
  }
  f.push({ line: 3, vars: { k, i, "cur.value": cur.value },
    message: `i = k-1 = ${i} - stop, we're at predecessor of position ${k}`,
    nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id });
  const newNode: NodeView = { id: nid(), value: newVal, state: "new" };
  f.push({ line: 5, vars: { newNode: newVal }, highlightKey: "newNode",
    message: `Allocate new node (${newVal}) above position`,
    nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId,
    cursorId: cur.id, pendingNew: { id: newNode.id, value: newVal, at: i } });
  const next = nodes[i + 1];
  f.push({ line: 6, vars: { "newNode.next": next ? next.value : "null" },
    message: `Rewire: newNode.next ← cur.next (${next ? next.value : "null"})`,
    nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId,
    cursorId: cur.id, pendingNew: { id: newNode.id, value: newVal, at: i },
    edgeHighlights: { [`${newNode.id}->${next?.id ?? "null"}`]: "new" } });
  const nodes2 = [...nodes.slice(0, i + 1), newNode, ...nodes.slice(i + 1)];
  f.push({ line: 7, vars: { "cur.next": newVal },
    message: `Rewire: cur.next ← newNode - insertion complete`,
    nodes: nodes2.map((n) => ({ ...n, state: n.id === newNode.id ? "new" : n.id === cur.id ? "active" : "default" })), headId,
    edgeHighlights: { [`${cur.id}->${newNode.id}`]: "new" } });
  f.push({ line: 8, vars: {}, message: "Done", nodes: nodes2.map((n) => ({ ...n, state: undefined })), headId });
  return f;
}

function buildDelete(values: number[], k: number): Frame[] {
  const { nodes, headId } = initial(values);
  const f: Frame[] = [];
  f.push({ line: 0, vars: { k }, message: `Delete node at position ${k}`, nodes, headId });
  if (!headId || k >= nodes.length) {
    f.push({ line: 0, vars: { k }, message: `Position ${k} out of range`, nodes, headId });
    return f;
  }
  if (k === 0) {
    f.push({ line: 1, vars: { k }, message: `k == 0 - advance head to head.next`,
      nodes: nodes.map((n, i) => ({ ...n, state: i === 0 ? "deleted" : "default" })), headId });
    const nodes2 = nodes.slice(1);
    f.push({ line: 1, vars: { head: nodes2[0]?.value ?? "null" }, highlightKey: "head",
      message: `Old head removed, new head = ${nodes2[0]?.value ?? "null"}`, nodes: nodes2, headId: nodes2[0]?.id ?? null });
    return f;
  }
  let i = 0;
  let cur = nodes[0];
  f.push({ line: 2, vars: { k, i, "cur.value": cur.value }, highlightKey: "cur",
    message: `Start: cur = head, i = 0`, nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id });
  while (i < k - 1 && i < nodes.length - 1) {
    f.push({ line: 3, vars: { k, i, "cur.value": cur.value },
      message: `i (${i}) < k-1 (${k - 1})? Yes - advance`,
      nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id });
    cur = nodes[i + 1];
    i++;
    f.push({ line: 4, vars: { k, i, "cur.value": cur.value }, highlightKey: "cur",
      message: `cur = ${cur.value}, i = ${i}`,
      nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id });
  }
  const target = nodes[i + 1];
  if (!target) {
    f.push({ line: 5, vars: {}, message: `cur.next is null - nothing to delete`, nodes, headId });
    return f;
  }
  f.push({ line: 6, vars: { "cur.next": target.value, "target.next": nodes[i + 2]?.value ?? "null" },
    message: `Rewire: cur.next ← target.next (skip over ${target.value})`,
    nodes: nodes.map((n) => ({ ...n, state: n.id === target.id ? "deleted" : n.id === cur.id ? "active" : "default" })), headId,
    cursorId: cur.id, edgeHighlights: { [`${cur.id}->${nodes[i + 2]?.id ?? "null"}`]: "new", [`${cur.id}->${target.id}`]: "deleted" } });
  const nodes2 = [...nodes.slice(0, i + 1), ...nodes.slice(i + 2)];
  f.push({ line: 7, vars: {}, message: `Node ${target.value} removed`, nodes: nodes2.map((n) => ({ ...n, state: undefined })), headId });
  return f;
}

function parseList(s: string): number[] {
  return s.split(/[,\s]+/).map((x) => Number(x.trim())).filter((x) => !Number.isNaN(x));
}

/* ------------------------------------------------------------------ */
/*  Visualization - SVG                                                 */
/* ------------------------------------------------------------------ */

function LinkedListViz({ frame }: { frame: Frame }) {
  const NODE_W = 90, NODE_H = 52, GAP = 44, TOP = 70;
  const nodes = frame.nodes;
  const positions: Record<string, { x: number; y: number }> = {};
  nodes.forEach((n, i) => { positions[n.id] = { x: 40 + i * (NODE_W + GAP), y: TOP }; });
  if (frame.pendingNew) {
    const at = frame.pendingNew.at;
    const insertIdx = at + 1;
    const px = at < 0 ? 40 - NODE_W / 2 : 40 + insertIdx * (NODE_W + GAP) - GAP / 2 - NODE_W / 2;
    positions[frame.pendingNew.id] = { x: px, y: 8 };
  }
  const width = Math.max(500, 80 + nodes.length * (NODE_W + GAP));
  const color = (st?: NodeView["state"]) =>
    st === "active" ? "#3b82f6" :
    st === "new" ? "#10b981" :
    st === "deleted" ? "#ef4444" : A;
  const bg = (st?: NodeView["state"]) =>
    st === "active" ? "rgba(59,130,246,0.12)" :
    st === "new" ? "rgba(16,185,129,0.14)" :
    st === "deleted" ? "rgba(239,68,68,0.14)" : C.bg;

  return (
    <div style={{ overflowX: "auto", padding: "4px 0 8px" }}>
      <svg width={width} height={170} style={{ display: "block", margin: "0 auto", minWidth: width }}>
        <defs>
          <marker id="arrow-ll" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill={C.textMuted} />
          </marker>
          <marker id="arrow-ll-new" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#10b981" />
          </marker>
          <marker id="arrow-ll-del" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#ef4444" />
          </marker>
        </defs>

        {/* HEAD label */}
        {frame.headId && positions[frame.headId] && (
          <g>
            <text x={positions[frame.headId].x + NODE_W / 2} y={50} textAnchor="middle"
              style={{ fontSize: 12, fontWeight: 700, fill: A, fontFamily: C.heading }}>
              head
            </text>
            <line x1={positions[frame.headId].x + NODE_W / 2} y1={54}
              x2={positions[frame.headId].x + NODE_W / 2} y2={TOP - 2}
              stroke={A} strokeWidth={2} markerEnd="url(#arrow-ll)" />
          </g>
        )}

        {/* Edges between nodes */}
        {nodes.map((n, i) => {
          const nxt = nodes[i + 1];
          const key = `${n.id}->${nxt?.id ?? "null"}`;
          const hi = frame.edgeHighlights?.[key];
          const stroke = hi === "new" ? "#10b981" : hi === "deleted" ? "#ef4444" : C.textMuted;
          const marker = hi === "new" ? "url(#arrow-ll-new)" : hi === "deleted" ? "url(#arrow-ll-del)" : "url(#arrow-ll)";
          const opacity = hi === "deleted" ? 0.6 : 1;
          const dash = hi === "deleted" ? "4 3" : undefined;
          const x1 = positions[n.id].x + NODE_W - 14;
          const y1 = positions[n.id].y + NODE_H / 2;
          const x2 = nxt ? positions[nxt.id].x : positions[n.id].x + NODE_W + GAP - 10;
          const y2 = y1;
          return (
            <line key={key} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={stroke} strokeWidth={2} strokeDasharray={dash} markerEnd={marker}
              opacity={opacity} style={{ transition: "all 0.3s" }} />
          );
        })}
        {nodes.length > 0 && (
          <text x={positions[nodes[nodes.length - 1].id].x + NODE_W + GAP - 4}
            y={positions[nodes[nodes.length - 1].id].y + NODE_H / 2 + 4}
            style={{ fontSize: 11, fill: C.textMuted, fontFamily: C.mono }}>∅</text>
        )}

        {/* Pending new node connection */}
        {frame.pendingNew && (() => {
          const p = positions[frame.pendingNew.id];
          const target = frame.pendingNew.at < 0 ? frame.headId : nodes[frame.pendingNew.at + 1]?.id;
          const key = `${frame.pendingNew.id}->${target ?? "null"}`;
          const hi = frame.edgeHighlights?.[key];
          if (!hi) return null;
          const tpos = target ? positions[target] : null;
          return (
            <line x1={p.x + NODE_W - 14} y1={p.y + NODE_H - 4}
              x2={tpos ? tpos.x + 4 : p.x + NODE_W + 20} y2={tpos ? tpos.y + 2 : p.y + NODE_H + 30}
              stroke="#10b981" strokeWidth={2} markerEnd="url(#arrow-ll-new)" style={{ transition: "all 0.3s" }} />
          );
        })()}

        {/* Nodes */}
        {[...nodes, ...(frame.pendingNew ? [{ id: frame.pendingNew.id, value: frame.pendingNew.value, state: "new" as const }] : [])].map((n) => {
          const p = positions[n.id];
          if (!p) return null;
          return (
            <g key={n.id} style={{ transition: "transform 0.3s" }}>
              <rect x={p.x} y={p.y} width={NODE_W} height={NODE_H} rx={8}
                fill={bg(n.state)} stroke={color(n.state)} strokeWidth={2.2} />
              {/* separator */}
              <line x1={p.x + NODE_W - 24} y1={p.y} x2={p.x + NODE_W - 24} y2={p.y + NODE_H}
                stroke={color(n.state)} strokeWidth={1.2} opacity={0.5} />
              <text x={p.x + (NODE_W - 24) / 2} y={p.y + NODE_H / 2 + 5} textAnchor="middle"
                style={{ fontSize: 15, fontWeight: 700, fill: C.text, fontFamily: C.mono }}>
                {n.value}
              </text>
              <text x={p.x + NODE_W - 12} y={p.y + NODE_H / 2 + 4} textAnchor="middle"
                style={{ fontSize: 10, fontWeight: 700, fill: C.textMuted, fontFamily: C.mono }}>
                •
              </text>
              {/* cursor arrow */}
              {frame.cursorId === n.id && (
                <>
                  <text x={p.x + NODE_W / 2} y={p.y + NODE_H + 20} textAnchor="middle"
                    style={{ fontSize: 11, fontWeight: 700, fill: "#3b82f6", fontFamily: C.heading }}>cur</text>
                  <polygon points={`${p.x + NODE_W / 2 - 5},${p.y + NODE_H + 6} ${p.x + NODE_W / 2 + 5},${p.y + NODE_H + 6} ${p.x + NODE_W / 2},${p.y + NODE_H + 1}`}
                    fill="#3b82f6" />
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                       */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [op, setOp] = useState<Op>("insert");
  const [listStr, setListStr] = useState("10, 20, 30, 40");
  const [arg, setArg] = useState("2");
  const [val, setVal] = useState("99");

  const values = parseList(listStr);

  const frames = useMemo(() => {
    if (op === "head") return buildHead(values, Number(val) || 0);
    if (op === "delete") return buildDelete(values, Math.max(0, Number(arg) || 0));
    return buildInsert(values, Math.max(0, Number(arg) || 0), Number(val) || 0);
  }, [op, listStr, arg, val]);

  const player = useStepPlayer(frames);
  const frame = player.current!;
  const pseudo = op === "head" ? PSEUDO_HEAD : op === "delete" ? PSEUDO_DELETE : PSEUDO_INSERT;

  return (
    <AlgoCanvas
      title={`Singly Linked List - ${op === "head" ? "Insert at Head" : op === "delete" ? "Delete at k" : "Insert at k"}`}
      player={player}
      input={
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {(["head", "insert", "delete"] as Op[]).map((o) => (
              <PillButton key={o} onClick={() => setOp(o)} active={op === o} color={A}>
                <span style={{ fontSize: "0.78rem" }}>
                  {o === "head" ? "Insert Head" : o === "insert" ? "Insert at k" : "Delete at k"}
                </span>
              </PillButton>
            ))}
          </div>
          <InputEditor
            label="List values"
            value={listStr}
            placeholder="e.g. 10, 20, 30"
            helper="Comma or space separated"
            presets={[
              { label: "Short", value: "5, 9, 2" },
              { label: "Medium", value: "10, 20, 30, 40, 50" },
              { label: "Single", value: "7" },
            ]}
            onApply={setListStr}
            onRandom={() => {
              const n = 3 + Math.floor(Math.random() * 4);
              setListStr(Array.from({ length: n }, () => Math.floor(Math.random() * 90) + 10).join(", "));
            }}
          />
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            {op !== "head" && (
              <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.78rem", color: C.textMuted, fontWeight: 600, fontFamily: C.heading }}>
                Position k:
                <input type="number" value={arg} onChange={(e) => setArg(e.target.value)} min={0}
                  style={{ width: 64, padding: "4px 8px", border: `1px solid ${C.border}`, borderRadius: 5, fontFamily: C.mono, fontSize: "0.8rem", background: C.bg, color: C.text }} />
              </label>
            )}
            {op !== "delete" && (
              <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.78rem", color: C.textMuted, fontWeight: 600, fontFamily: C.heading }}>
                Value:
                <input type="number" value={val} onChange={(e) => setVal(e.target.value)}
                  style={{ width: 72, padding: "4px 8px", border: `1px solid ${C.border}`, borderRadius: 5, fontFamily: C.mono, fontSize: "0.8rem", background: C.bg, color: C.text }} />
              </label>
            )}
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <LinkedListViz frame={frame} />
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn / Try / Insight                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "What is a linked list?", body: "A chain of node objects where each node holds a value and a pointer to the next node. Unlike arrays, memory is not contiguous - each node is allocated separately on the heap." },
    { title: "The head pointer", body: "A single pointer 'head' marks the start of the list. To access any node you walk from head, following next pointers. Lose head → lose the list (memory leak in C/C++)." },
    { title: "Why it beats arrays for inserts", body: "Inserting at the start of an array is O(n) because every element shifts. In a linked list, you rewire two pointers - O(1). The cost is O(n) random access: you cannot jump to index 7 without walking nodes 0..6." },
    { title: "Rewiring is the whole game", body: "Every operation - insert, delete, reverse - is pointer gymnastics. Draw boxes and arrows on paper. The #1 bug is forgetting to save a pointer before overwriting it (losing half the list)." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Mental model</SectionEyebrow>
        <SectionTitle>A treasure hunt of pointers</SectionTitle>
        <Lede>
          Each clue (node) tells you where the next clue lives. The game master only gives you the
          first clue (head). To find clue #5, you must read clues 1, 2, 3, 4 in order.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
        {sections.map((s, i) => (
          <Card key={i}>
            <div
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: A,
                marginBottom: 6,
                fontFamily: C.mono,
                letterSpacing: "0.08em",
              }}
            >
              0{i + 1}
            </div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 4, letterSpacing: "-0.01em" }}>
              {s.title}
            </div>
            <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }}>{s.body}</div>
          </Card>
        ))}
      </div>
      <Callout accent={A}>
        Complexity summary: <code style={{ fontFamily: C.mono }}>insertAtHead</code> and <code style={{ fontFamily: C.mono }}>deleteHead</code> are O(1). <code style={{ fontFamily: C.mono }}>insertAt(k)</code>, <code style={{ fontFamily: C.mono }}>deleteAt(k)</code>, and <code style={{ fontFamily: C.mono }}>search(v)</code> are O(n).
      </Callout>
    </div>
  );
}

function TryTab() {
  const problems = [
    { q: "Given list [3→7→9→4] and operation insertAtHead(5), final list?", a: "5→3→7→9→4" },
    { q: "Given [1→2→3→4→5], delete at k=2. Final list?", a: "1→2→4→5" },
    { q: "Time complexity of deleting the last node of a singly linked list (no tail pointer)?", a: "O(n)" },
  ];
  const [guess, setGuess] = useState<(string | null)[]>(problems.map(() => null));
  const [show, setShow] = useState<boolean[]>(problems.map(() => false));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Trace each operation on paper. Write the final list notation.</Callout>
      {problems.map((p, i) => (
        <Card key={i}>
          <div style={{ fontSize: "0.9rem", marginBottom: 8, color: C.text }}>#{i + 1} {p.q}</div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <input value={guess[i] ?? ""} onChange={(e) => { const v = [...guess]; v[i] = e.target.value; setGuess(v); }}
              placeholder="your answer"
              style={{ padding: "6px 10px", border: `1px solid ${C.border}`, borderRadius: 6, fontFamily: C.mono, fontSize: "0.85rem", minWidth: 180, background: C.bg, color: C.text }} />
            <button
              onClick={() => { const v = [...show]; v[i] = true; setShow(v); }}
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
            {show[i] && (
              <span style={{ fontSize: "0.82rem", fontWeight: 700, padding: "4px 12px", borderRadius: 8,
                color: C.successDark, background: `${C.success}14`, fontFamily: C.heading }}>
                Answer: {p.a}
              </span>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

function InsightTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>The dummy-head trick</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Interviewers love this. Allocate a fake node whose <code style={{ fontFamily: C.mono }}>next</code> points to the real head. Now every deletion has a predecessor - no more &quot;if k == 0&quot; special case. At the end, return <code style={{ fontFamily: C.mono }}>dummy.next</code>.
        </p>
      </Card>
      <Card>
        <SubHeading>Where linked lists show up in real life</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>OS free-memory lists (kernel heap)</li>
          <li>Adjacency lists in sparse graphs</li>
          <li>Undo history, browser back-stack, MRU caches (as doubly-linked lists)</li>
          <li>LinkedHashMap buckets (chaining) - see the Hashing lesson</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                             */
/* ------------------------------------------------------------------ */

export default function DSA_L2_SinglyLinkedListActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "What is the time complexity of inserting at the head of a singly linked list?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      correctIndex: 2,
      explanation: "Only two pointers rewire: newNode.next ← head, then head ← newNode. Independent of list length.",
    },
    {
      question: "To delete the node at position k in a singly linked list, you must first walk to which node?",
      options: ["The node at position k", "The node at position k-1 (predecessor)", "The last node", "The head"],
      correctIndex: 1,
      explanation: "You need the predecessor to rewire its next pointer, skipping over the node at k. Singly-linked means you cannot go backwards.",
    },
    {
      question: "A singly linked list has head → 4 → 8 → 2 → 6. After insertAt(2, 99) the list becomes?",
      options: ["4 → 99 → 8 → 2 → 6", "4 → 8 → 99 → 2 → 6", "99 → 4 → 8 → 2 → 6", "4 → 8 → 2 → 99 → 6"],
      correctIndex: 1,
      explanation: "Position 2 (zero-indexed) means the predecessor is index 1 (value 8). New node slots between 8 and 2.",
    },
    {
      question: "Why can't arrays match linked-list insertion speed at the front?",
      options: [
        "Arrays use more memory",
        "Arrays must shift every element one position right - O(n)",
        "Arrays don't support numbers",
        "Arrays are immutable",
      ],
      correctIndex: 1,
      explanation: "Contiguous memory is the array's strength (O(1) random access) and weakness (O(n) front-insert). Linked lists trade one for the other.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Singly Linked List"
      level={2}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Reversal, cycle detection, and merge questions are staple interview problems"
      nextLessonHint="Doubly & Circular Linked Lists"
    />
  );
}
