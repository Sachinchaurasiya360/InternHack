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

const PRACTICE_TOPIC_SLUG: string | null = "linked-list";

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
  cursorId?: string | null;
  pendingNew?: { id: string; value: number; at: number } | null;
  edgeHighlights?: Record<string, "new" | "deleted">;
}

/* ------------------------------------------------------------------ */
/*  Frame builders                                                       */
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
  f.push({ line: 1, vars: { value: newVal, newNode: newVal }, highlightKey: "newNode", message: `Allocate new node with value ${newVal}`, nodes, headId, pendingNew: { id: newNode.id, value: newVal, at: -1 } });
  f.push({ line: 2, vars: { value: newVal, "newNode.next": headId ? nodes[0].value : "null" }, message: "Point newNode.next at current head", nodes, headId, pendingNew: { id: newNode.id, value: newVal, at: -1 }, edgeHighlights: { [`${newNode.id}->${headId ?? "null"}`]: "new" } });
  const nodes2 = [newNode, ...nodes];
  f.push({ line: 3, vars: { head: newVal }, highlightKey: "head", message: "Move head pointer to new node", nodes: nodes2, headId: newNode.id });
  f.push({ line: 4, vars: { head: newVal }, message: "Done, O(1) insertion at head", nodes: nodes2.map((n) => ({ ...n, state: undefined })), headId: newNode.id });
  return f;
}

function buildInsert(values: number[], k: number, newVal: number): Frame[] {
  const { nodes, headId } = initial(values);
  const f: Frame[] = [];
  f.push({ line: 0, vars: { k, value: newVal }, message: `Insert ${newVal} at position ${k}`, nodes, headId });
  if (k === 0) return buildHead(values, newVal);
  if (!headId || k > nodes.length) {
    f.push({ line: 0, vars: { k, value: newVal }, message: `Position ${k} is out of range, clamping`, nodes, headId });
    return f;
  }
  f.push({ line: 1, vars: { k }, message: "k ≠ 0, traverse list to find position", nodes, headId });
  let i = 0;
  let cur = nodes[0];
  f.push({ line: 2, vars: { k, i, "cur.value": cur.value }, highlightKey: "cur", message: `Start: cur = head (value ${cur.value}), i = 0`, nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id });
  while (i < k - 1 && i < nodes.length - 1) {
    f.push({ line: 3, vars: { k, i, "cur.value": cur.value }, message: `Check: is i (${i}) < k-1 (${k - 1})? Yes, advance`, nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id });
    cur = nodes[i + 1];
    i++;
    f.push({ line: 4, vars: { k, i, "cur.value": cur.value }, highlightKey: "cur", message: `Walked one step: cur = ${cur.value}, i = ${i}`, nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id });
  }
  f.push({ line: 3, vars: { k, i, "cur.value": cur.value }, message: `i = k-1 = ${i}, stop, we're at predecessor of position ${k}`, nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id });
  const newNode: NodeView = { id: nid(), value: newVal, state: "new" };
  f.push({ line: 5, vars: { newNode: newVal }, highlightKey: "newNode", message: `Allocate new node (${newVal}) above position`, nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id, pendingNew: { id: newNode.id, value: newVal, at: i } });
  const next = nodes[i + 1];
  f.push({ line: 6, vars: { "newNode.next": next ? next.value : "null" }, message: `Rewire: newNode.next ← cur.next (${next ? next.value : "null"})`, nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id, pendingNew: { id: newNode.id, value: newVal, at: i }, edgeHighlights: { [`${newNode.id}->${next?.id ?? "null"}`]: "new" } });
  const nodes2 = [...nodes.slice(0, i + 1), newNode, ...nodes.slice(i + 1)];
  f.push({ line: 7, vars: { "cur.next": newVal }, message: "Rewire: cur.next ← newNode, insertion complete", nodes: nodes2.map((n) => ({ ...n, state: n.id === newNode.id ? "new" : n.id === cur.id ? "active" : "default" })), headId, edgeHighlights: { [`${cur.id}->${newNode.id}`]: "new" } });
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
    f.push({ line: 1, vars: { k }, message: "k == 0, advance head to head.next", nodes: nodes.map((n, i) => ({ ...n, state: i === 0 ? "deleted" : "default" })), headId });
    const nodes2 = nodes.slice(1);
    f.push({ line: 1, vars: { head: nodes2[0]?.value ?? "null" }, highlightKey: "head", message: `Old head removed, new head = ${nodes2[0]?.value ?? "null"}`, nodes: nodes2, headId: nodes2[0]?.id ?? null });
    return f;
  }
  let i = 0;
  let cur = nodes[0];
  f.push({ line: 2, vars: { k, i, "cur.value": cur.value }, highlightKey: "cur", message: "Start: cur = head, i = 0", nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id });
  while (i < k - 1 && i < nodes.length - 1) {
    f.push({ line: 3, vars: { k, i, "cur.value": cur.value }, message: `i (${i}) < k-1 (${k - 1})? Yes, advance`, nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id });
    cur = nodes[i + 1];
    i++;
    f.push({ line: 4, vars: { k, i, "cur.value": cur.value }, highlightKey: "cur", message: `cur = ${cur.value}, i = ${i}`, nodes: nodes.map((n) => ({ ...n, state: n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id });
  }
  const target = nodes[i + 1];
  if (!target) {
    f.push({ line: 5, vars: {}, message: "cur.next is null, nothing to delete", nodes, headId });
    return f;
  }
  f.push({ line: 6, vars: { "cur.next": target.value, "target.next": nodes[i + 2]?.value ?? "null" }, message: `Rewire: cur.next ← target.next (skip over ${target.value})`, nodes: nodes.map((n) => ({ ...n, state: n.id === target.id ? "deleted" : n.id === cur.id ? "active" : "default" })), headId, cursorId: cur.id, edgeHighlights: { [`${cur.id}->${nodes[i + 2]?.id ?? "null"}`]: "new", [`${cur.id}->${target.id}`]: "deleted" } });
  const nodes2 = [...nodes.slice(0, i + 1), ...nodes.slice(i + 2)];
  f.push({ line: 7, vars: {}, message: `Node ${target.value} removed`, nodes: nodes2.map((n) => ({ ...n, state: undefined })), headId });
  return f;
}

function parseList(s: string): number[] {
  return s.split(/[,\s]+/).map((x) => Number(x.trim())).filter((x) => !Number.isNaN(x));
}

/* ------------------------------------------------------------------ */
/*  Linked list SVG viz                                                 */
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

  const nodeColor = (st?: NodeView["state"]) =>
    st === "active" ? "#3b82f6" : st === "new" ? "#10b981" : st === "deleted" ? "#ef4444" : THEME.accent;
  const nodeBg = (st?: NodeView["state"]) =>
    st === "active" ? "rgba(59,130,246,0.12)" : st === "new" ? "rgba(16,185,129,0.14)" : st === "deleted" ? "rgba(239,68,68,0.14)" : THEME.bg;

  return (
    <div className="overflow-x-auto">
      <svg width={width} height={170} style={{ display: "block", margin: "0 auto", minWidth: width }}>
        <defs>
          <marker id="arrow-ll" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill={THEME.textMuted} />
          </marker>
          <marker id="arrow-ll-new" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#10b981" />
          </marker>
          <marker id="arrow-ll-del" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#ef4444" />
          </marker>
        </defs>

        {frame.headId && positions[frame.headId] && (
          <g>
            <text x={positions[frame.headId].x + NODE_W / 2} y={50} textAnchor="middle"
              style={{ fontSize: 12, fontWeight: 700, fill: THEME.accent, fontFamily: THEME.heading }}>
              head
            </text>
            <line x1={positions[frame.headId].x + NODE_W / 2} y1={54}
              x2={positions[frame.headId].x + NODE_W / 2} y2={TOP - 2}
              stroke={THEME.accent} strokeWidth={2} markerEnd="url(#arrow-ll)" />
          </g>
        )}

        {nodes.map((n, i) => {
          const nxt = nodes[i + 1];
          const key = `${n.id}->${nxt?.id ?? "null"}`;
          const hi = frame.edgeHighlights?.[key];
          const stroke = hi === "new" ? "#10b981" : hi === "deleted" ? "#ef4444" : THEME.textMuted;
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
            style={{ fontSize: 11, fill: THEME.textMuted, fontFamily: THEME.mono }}>∅</text>
        )}

        {frame.pendingNew && (() => {
          const p = positions[frame.pendingNew!.id];
          const target = frame.pendingNew!.at < 0 ? frame.headId : nodes[frame.pendingNew!.at + 1]?.id;
          const key = `${frame.pendingNew!.id}->${target ?? "null"}`;
          const hi = frame.edgeHighlights?.[key];
          if (!hi) return null;
          const tpos = target ? positions[target] : null;
          return (
            <line x1={p.x + NODE_W - 14} y1={p.y + NODE_H - 4}
              x2={tpos ? tpos.x + 4 : p.x + NODE_W + 20} y2={tpos ? tpos.y + 2 : p.y + NODE_H + 30}
              stroke="#10b981" strokeWidth={2} markerEnd="url(#arrow-ll-new)" style={{ transition: "all 0.3s" }} />
          );
        })()}

        {[...nodes, ...(frame.pendingNew ? [{ id: frame.pendingNew.id, value: frame.pendingNew.value, state: "new" as const }] : [])].map((n) => {
          const p = positions[n.id];
          if (!p) return null;
          return (
            <g key={n.id} style={{ transition: "transform 0.3s" }}>
              <rect x={p.x} y={p.y} width={NODE_W} height={NODE_H} rx={8}
                fill={nodeBg(n.state)} stroke={nodeColor(n.state)} strokeWidth={2.2} />
              <line x1={p.x + NODE_W - 24} y1={p.y} x2={p.x + NODE_W - 24} y2={p.y + NODE_H}
                stroke={nodeColor(n.state)} strokeWidth={1.2} opacity={0.5} />
              <text x={p.x + (NODE_W - 24) / 2} y={p.y + NODE_H / 2 + 5} textAnchor="middle"
                style={{ fontSize: 15, fontWeight: 700, fill: THEME.text, fontFamily: THEME.mono }}>
                {n.value}
              </text>
              <text x={p.x + NODE_W - 12} y={p.y + NODE_H / 2 + 4} textAnchor="middle"
                style={{ fontSize: 10, fontWeight: 700, fill: THEME.textMuted, fontFamily: THEME.mono }}>
                •
              </text>
              {frame.cursorId === n.id && (
                <>
                  <text x={p.x + NODE_W / 2} y={p.y + NODE_H + 20} textAnchor="middle"
                    style={{ fontSize: 11, fontWeight: 700, fill: "#3b82f6", fontFamily: THEME.heading }}>cur</text>
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
/*  Visualize                                                           */
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
  const frame = player.current;
  const pseudo = op === "head" ? PSEUDO_HEAD : op === "delete" ? PSEUDO_DELETE : PSEUDO_INSERT;

  return (
    <AlgoCanvas
      title={`Singly Linked List, ${op === "head" ? "Insert at Head" : op === "delete" ? "Delete at k" : "Insert at k"}`}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <div className="flex gap-1.5 flex-wrap">
            {(["head", "insert", "delete"] as Op[]).map((o) => (
              <PillButton key={o} onClick={() => setOp(o)} active={op === o}>
                <span className="text-xs">
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
          <div className="flex gap-3 flex-wrap items-center">
            {op !== "head" && (
              <label className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                Position k:
                <input type="number" value={arg} onChange={(e) => setArg(e.target.value)} min={0}
                  className="w-16 px-2 py-1 border border-stone-200 dark:border-white/10 rounded-md font-mono text-sm bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50" />
              </label>
            )}
            {op !== "delete" && (
              <label className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                Value:
                <input type="number" value={val} onChange={(e) => setVal(e.target.value)}
                  className="w-20 px-2 py-1 border border-stone-200 dark:border-white/10 rounded-md font-mono text-sm bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50" />
              </label>
            )}
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div className="flex flex-col items-center gap-4">
        {frame && <LinkedListViz frame={frame} />}
        <Callout className="w-full">{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "What is a linked list?", body: "A chain of node objects where each node holds a value and a pointer to the next node. Unlike arrays, memory is not contiguous, each node is allocated separately on the heap." },
    { title: "The head pointer", body: "A single pointer 'head' marks the start of the list. To access any node you walk from head, following next pointers. Lose head and you lose the list (memory leak in C/C++)." },
    { title: "Why it beats arrays for inserts", body: "Inserting at the start of an array is O(n) because every element shifts. In a linked list, you rewire two pointers, O(1). The cost is O(n) random access: you cannot jump to index 7 without walking nodes 0..6." },
    { title: "Rewiring is the whole game", body: "Every operation, insert, delete, reverse, is pointer gymnastics. Draw boxes and arrows on paper. The number 1 bug is forgetting to save a pointer before overwriting it (losing half the list)." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>mental model</SectionEyebrow>
        <SectionTitle>A treasure hunt of pointers</SectionTitle>
        <Lede>
          Each clue (node) tells you where the next clue lives. The game master only gives you the
          first clue (head). To find clue #5, you must read clues 1, 2, 3, 4 in order.
        </Lede>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {sections.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-600 dark:text-lime-400 mb-2 tracking-widest">0{i + 1}</div>
            <div className="text-sm font-bold text-stone-900 dark:text-stone-50 mb-1">{s.title}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</div>
          </Card>
        ))}
      </div>
      <Callout>
        Complexity summary: <code className="font-mono">insertAtHead</code> and{" "}
        <code className="font-mono">deleteHead</code> are O(1).{" "}
        <code className="font-mono">insertAt(k)</code>,{" "}
        <code className="font-mono">deleteAt(k)</code>, and{" "}
        <code className="font-mono">search(v)</code> are O(n).
      </Callout>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                              */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Given list [3→7→9→4] and operation insertAtHead(5), final list?", a: "5→3→7→9→4" },
    { q: "Given [1→2→3→4→5], delete at k=2. Final list?", a: "1→2→4→5" },
    { q: "Time complexity of deleting the last node of a singly linked list (no tail pointer)?", a: "O(n)" },
  ];
  const [guess, setGuess] = useState<(string | null)[]>(problems.map(() => null));
  const [show, setShow] = useState<boolean[]>(problems.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Trace each operation on paper. Write the final list notation.</Callout>
      {problems.map((p, i) => (
        <Card key={i}>
          <div className="text-sm text-stone-800 dark:text-stone-200 mb-3">#{i + 1} {p.q}</div>
          <div className="flex gap-2 items-center flex-wrap">
            <input
              value={guess[i] ?? ""}
              onChange={(e) => { const v = [...guess]; v[i] = e.target.value; setGuess(v); }}
              placeholder="your answer"
              className="px-3 py-1.5 border border-stone-200 dark:border-white/10 rounded-md font-mono text-sm bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 min-w-44"
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
        <SubHeading>The dummy-head trick</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Interviewers love this. Allocate a fake node whose <code className="font-mono">next</code>{" "}
          points to the real head. Now every deletion has a predecessor, no more "if k == 0" special
          case. At the end, return <code className="font-mono">dummy.next</code>.
        </p>
      </Card>
      <Card>
        <SubHeading>Where linked lists show up in real life</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed space-y-1 pl-4 list-disc">
          <li>OS free-memory lists (kernel heap)</li>
          <li>Adjacency lists in sparse graphs</li>
          <li>Undo history, browser back-stack, MRU caches (as doubly-linked lists)</li>
          <li>LinkedHashMap buckets (chaining), see the Hashing lesson</li>
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

export default function L2_SinglyLinkedList({ onQuizComplete }: Props) {
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
        "Arrays must shift every element one position right, O(n)",
        "Arrays don't support numbers",
        "Arrays are immutable",
      ],
      correctIndex: 1,
      explanation: "Contiguous memory is the array's strength (O(1) random access) and weakness (O(n) front-insert). Linked lists trade one for the other.",
    },
  ];

  return (
    <LessonShell
      title="Singly Linked Lists"
      level={2}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Reversal, cycle detection, and merge questions are staple interview problems."
      nextLessonHint="Doubly & Circular Linked Lists"
      onQuizComplete={onQuizComplete}
    />
  );
}
