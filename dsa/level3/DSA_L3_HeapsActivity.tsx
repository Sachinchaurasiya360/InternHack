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
/*  Heap frames                                                         */
/* ------------------------------------------------------------------ */

type Kind = "min" | "max";
type Op = "insert" | "extract" | "heapify";

interface Frame {
  line: number;
  arr: number[];
  arrStates: CellState[];
  pointers: Record<string, number>;
  nodeStates: Record<string, CellState>;
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

function beats(kind: Kind, a: number, b: number): boolean {
  return kind === "min" ? a < b : a > b;
}
function treeFromArray(arr: number[], nodeStates: Record<number, CellState>): { nodes: Record<string, TreeNodeData>; root: string | undefined } {
  const nodes: Record<string, TreeNodeData> = {};
  for (let i = 0; i < arr.length; i++) {
    const id = `h${i}`;
    nodes[id] = {
      id, value: arr[i],
      left: 2 * i + 1 < arr.length ? `h${2 * i + 1}` : undefined,
      right: 2 * i + 2 < arr.length ? `h${2 * i + 2}` : undefined,
      state: nodeStates[i],
    };
  }
  return { nodes, root: arr.length > 0 ? "h0" : undefined };
}

function buildInsertFrames(initial: number[], toInsert: number, kind: Kind): Frame[] {
  const a = [...initial];
  const frames: Frame[] = [];
  frames.push({
    line: 0, arr: [...a], arrStates: a.map(() => "default" as CellState),
    pointers: {}, nodeStates: {}, message: `Insert ${toInsert} into ${kind}-heap.`,
    vars: { insert: toInsert, kind, n: a.length },
  });
  a.push(toInsert);
  let i = a.length - 1;
  const states = a.map(() => "default" as CellState);
  states[i] = "active";
  frames.push({
    line: 1, arr: [...a], arrStates: [...states], pointers: { i },
    nodeStates: { [i]: "active" }, message: `Append ${toInsert} at index ${i}.`,
    vars: { i, value: a[i] },
  });
  while (i > 0) {
    const p = Math.floor((i - 1) / 2);
    const st = a.map(() => "default" as CellState);
    st[i] = "compare"; st[p] = "compare";
    frames.push({
      line: 4, arr: [...a], arrStates: st, pointers: { i, parent: p },
      nodeStates: { [i]: "compare", [p]: "compare" },
      message: `Compare a[${i}]=${a[i]} with parent a[${p}]=${a[p]}.`,
      vars: { i, parent: p, value: a[i], parentVal: a[p] },
    });
    if (beats(kind, a[i], a[p])) {
      [a[i], a[p]] = [a[p], a[i]];
      const st2 = a.map(() => "default" as CellState);
      st2[i] = "swap"; st2[p] = "swap";
      frames.push({
        line: 6, arr: [...a], arrStates: st2, pointers: { i, parent: p },
        nodeStates: { [i]: "swap", [p]: "swap" },
        message: `${kind === "min" ? "Child smaller" : "Child larger"} — swap ${a[i]} ↔ ${a[p]}.`,
        vars: { i, parent: p, swapped: "yes" },
      });
      i = p;
    } else {
      frames.push({
        line: 8, arr: [...a], arrStates: a.map(() => "default" as CellState),
        pointers: { i }, nodeStates: { [i]: "done" },
        message: `Heap order restored. Stop.`, vars: { i, done: "yes" },
      });
      break;
    }
  }
  frames.push({
    line: 0, arr: [...a],
    arrStates: a.map(() => "done" as CellState),
    pointers: {}, nodeStates: Object.fromEntries(a.map((_, k) => [k, "done" as CellState])),
    message: `Final heap after insert.`, vars: { n: a.length },
  });
  return frames;
}

function buildExtractFrames(initial: number[], kind: Kind): Frame[] {
  const a = [...initial];
  const frames: Frame[] = [];
  if (a.length === 0) {
    frames.push({ line: 0, arr: [], arrStates: [], pointers: {}, nodeStates: {}, message: `Heap empty.`, vars: {} });
    return frames;
  }
  const top = a[0];
  frames.push({
    line: 1, arr: [...a], arrStates: a.map((_, i) => i === 0 ? "active" : "default"),
    pointers: {}, nodeStates: { 0: "active" },
    message: `Extract root ${top}.`, vars: { top, kind, n: a.length },
  });
  a[0] = a[a.length - 1];
  a.pop();
  frames.push({
    line: 2, arr: [...a],
    arrStates: a.map((_, i) => i === 0 ? "swap" : "default"),
    pointers: { i: 0 }, nodeStates: a.length > 0 ? { 0: "swap" } : {},
    message: `Move last element to root. Sift down.`, vars: { extracted: top, n: a.length },
  });
  let i = 0;
  while (true) {
    const l = 2 * i + 1, r = 2 * i + 2;
    let best = i;
    const st = a.map(() => "default" as CellState);
    st[i] = "active";
    if (l < a.length) st[l] = "compare";
    if (r < a.length) st[r] = "compare";
    frames.push({
      line: 5, arr: [...a], arrStates: st, pointers: { i, l: l < a.length ? l : -1, r: r < a.length ? r : -1 },
      nodeStates: st.reduce((acc, s, k) => { acc[k] = s; return acc; }, {} as Record<number, CellState>),
      message: `At i=${i}: compare with children${l < a.length ? ` l=${l}` : ""}${r < a.length ? `, r=${r}` : ""}.`,
      vars: { i, l, r },
    });
    if (l < a.length && beats(kind, a[l], a[best])) best = l;
    if (r < a.length && beats(kind, a[r], a[best])) best = r;
    if (best === i) {
      frames.push({
        line: 10, arr: [...a], arrStates: a.map(() => "default" as CellState),
        pointers: { i }, nodeStates: { [i]: "done" },
        message: `Heap order restored.`, vars: { i, done: "yes" },
      });
      break;
    }
    [a[i], a[best]] = [a[best], a[i]];
    const st2 = a.map(() => "default" as CellState);
    st2[i] = "swap"; st2[best] = "swap";
    frames.push({
      line: 11, arr: [...a], arrStates: st2, pointers: { i, best }, nodeStates: { [i]: "swap", [best]: "swap" },
      message: `Swap a[${i}] ↔ a[${best}].`, vars: { i, best, swapped: "yes" },
    });
    i = best;
  }
  frames.push({
    line: 12, arr: [...a],
    arrStates: a.map(() => "done" as CellState),
    pointers: {}, nodeStates: Object.fromEntries(a.map((_, k) => [k, "done" as CellState])),
    message: `Extracted ${top}. Heap size now ${a.length}.`, vars: { extracted: top },
  });
  return frames;
}

function buildHeapifyFrames(initial: number[], kind: Kind): Frame[] {
  const a = [...initial];
  const frames: Frame[] = [];
  frames.push({
    line: 0, arr: [...a], arrStates: a.map(() => "default" as CellState),
    pointers: {}, nodeStates: {}, message: `Heapify [${a.join(", ")}] as ${kind}-heap.`, vars: { n: a.length },
  });
  for (let start = Math.floor(a.length / 2) - 1; start >= 0; start--) {
    frames.push({
      line: 1, arr: [...a],
      arrStates: a.map((_, i) => i === start ? "active" : "default"),
      pointers: { start }, nodeStates: { [start]: "active" },
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
      const st = a.map(() => "default" as CellState);
      st[i] = "swap"; st[best] = "swap";
      frames.push({
        line: 2, arr: [...a], arrStates: st, pointers: { i, best },
        nodeStates: { [i]: "swap", [best]: "swap" },
        message: `Swap a[${i}] ↔ a[${best}].`, vars: { i, best },
      });
      i = best;
    }
  }
  frames.push({
    line: 2, arr: [...a],
    arrStates: a.map(() => "done" as CellState),
    pointers: {}, nodeStates: Object.fromEntries(a.map((_, k) => [k, "done" as CellState])),
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
  const frame = player.current!;

  const treeData = useMemo(() => {
    const nodeStates: Record<number, CellState> = {};
    Object.entries(frame.nodeStates).forEach(([k, v]) => { nodeStates[Number(k)] = v; });
    return treeFromArray(frame.arr, nodeStates);
  }, [frame]);

  const pseudo = op === "insert" ? PSEUDO_INSERT : op === "extract" ? PSEUDO_EXTRACT : PSEUDO_HEAPIFY;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
        {(["heapify", "insert", "extract"] as Op[]).map((m) => (
          <PillButton key={m} onClick={() => setOp(m)} active={op === m} color={A}>
            <span style={{ fontSize: "0.78rem", textTransform: "capitalize" }}>{m}</span>
          </PillButton>
        ))}
        <div style={{ marginLeft: 8, display: "flex", gap: 4 }}>
          {(["min", "max"] as Kind[]).map((k) => (
            <PillButton key={k} onClick={() => setKind(k)} active={kind === k} color={A}>
              <span style={{ fontSize: "0.74rem" }}>{k}-heap</span>
            </PillButton>
          ))}
        </div>
        {op === "insert" && (
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: 8 }}>
            <span style={{ fontSize: "0.78rem", color: C.textMuted, fontWeight: 600, fontFamily: C.heading }}>insert:</span>
            <input
              type="number"
              value={insertVal}
              onChange={(e) => setInsertVal(Number(e.target.value))}
              style={{
                width: 70, padding: "6px 10px", borderRadius: 8,
                border: `1px solid ${C.border}`, fontFamily: C.mono, fontSize: "0.85rem",
                outline: "none", background: C.bg, color: C.text,
              }}
            />
          </div>
        )}
      </div>
      <AlgoCanvas
        title={`Heap — ${op} (${kind}-heap)`}
        player={player}
        input={
          <InputEditor
            label="Initial array"
            value={input}
            placeholder="e.g. 10, 4, 15, 20, 0"
            helper={op === "heapify" ? "Any array — will be sift-heapified." : "Array is first heapified; op runs on that heap."}
            presets={[
              { label: "Classic", value: "10, 4, 15, 20, 0, 8, 25, 2" },
              { label: "Sorted asc", value: "1, 2, 3, 4, 5, 6, 7" },
              { label: "Sorted desc", value: "9, 8, 7, 6, 5, 4" },
              { label: "Worst", value: "50, 25, 40, 10, 20, 30, 35, 5, 7, 15" },
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
              Tree view
            </div>
            <TreeCanvas nodes={treeData.nodes} root={treeData.root} width={560} height={260} />
          </div>
          <div>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: C.heading }}>
              Array view
            </div>
            <ArrayBars values={frame.arr} states={frame.arrStates} pointers={frame.pointers} height={140} />
          </div>
        </div>
      </AlgoCanvas>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                           */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const items = [
    { title: "Complete binary tree", body: "Heaps fill level by level, left to right — this lets us store them in an array with zero wasted slots. For index i: parent = ⌊(i−1)/2⌋, children = 2i+1 and 2i+2." },
    { title: "Heap property", body: "Min-heap: every node ≤ its children, so the minimum is at the root. Max-heap flips the inequality. The heap property is local — no ordering between siblings." },
    { title: "Three core ops", body: "insert (O(log n) bubble-up), extractMin/Max (O(log n) sift-down), heapify (O(n) bulk build). Together they power Dijkstra, priority queues, heap-sort, and median tricks." },
    { title: "Heap vs BST", body: "A BST supports ordered traversal and range queries; a heap only gives you the extreme. Because heaps don't require full ordering, they are smaller, faster, and fit neatly in an array." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Priority queue in 40 bytes</SectionEyebrow>
        <SectionTitle>Array-backed tree, O(log n) insert and extract</SectionTitle>
        <Lede>
          Heaps are the canonical implementation of a priority queue: give me the highest-priority
          element fast, and let me add new elements fast. That&rsquo;s exactly what{" "}
          <code style={{ fontFamily: C.mono }}>insert</code> and{" "}
          <code style={{ fontFamily: C.mono }}>extract</code> provide at O(log n).
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

/* ------------------------------------------------------------------ */
/*  Try / Insight                                                       */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Heapify [4,10,3,5,1] into min-heap. Root value?", a: "1" },
    { q: "Min-heap [1,3,5,4,8]. After insert 2, the root is?", a: "1" },
    { q: "Max-heap [20,15,10,8,7,5]. extractMax — new root is?", a: "15" },
    { q: "Time for heapSort on n items?", a: "O(n log n)" },
  ];
  const [g, setG] = useState<(string | null)[]>(problems.map(() => null));
  const [s, setS] = useState<boolean[]>(problems.map(() => false));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Do them mentally, then reveal.</Callout>
      {problems.map((p, i) => {
        const gv = (g[i] ?? "").replace(/\s/g, "").toLowerCase();
        const correct = gv === p.a.replace(/\s/g, "").toLowerCase();
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
        <SubHeading>Why heapify is O(n), not O(n log n)</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Sift-down from index i does work proportional to the height <em>of that subtree</em>,
          not of the whole tree. Summing across all nodes gives a geometric series that converges
          to O(n). This is an interview-favorite derivation.
        </p>
      </Card>
      <Card>
        <SubHeading>Tiny pointer math</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          For 0-indexed heaps: parent(i) = (i−1)/2, left(i) = 2i+1, right(i) = 2i+2. For 1-indexed
          heaps: parent(i) = i/2, left(i) = 2i, right(i) = 2i+1. Interviewers often ask why
          1-indexed is slightly prettier — these formulas are why.
        </p>
      </Card>
      <Card>
        <SubHeading>K-th largest trick</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Maintain a min-heap of size k. For each new element, push it and pop the smallest if
          size exceeds k. The root is the k-th largest. Time O(n log k), space O(k) — canonical
          interview pattern.
        </p>
      </Card>
      <Card>
        <SubHeading>Stdlib priority queues — three traps you must know</SubHeading>
        <ul style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>
            <strong style={{ color: C.text }}>Python <code style={{ fontFamily: C.mono }}>heapq</code></strong>:{" "}
            <em>min-heap only</em>. For max-heap, push the negated value and negate on pop. There
            is <em>no</em> <code style={{ fontFamily: C.mono }}>decrease-key</code> operation —
            for Dijkstra, use the &ldquo;lazy&rdquo; pattern (push duplicate entries, skip when
            you pop a stale one).
          </li>
          <li>
            <strong style={{ color: C.text }}>Java <code style={{ fontFamily: C.mono }}>PriorityQueue</code></strong>:{" "}
            also a min-heap by default. Pass a custom comparator{" "}
            <code style={{ fontFamily: C.mono }}>(a,b) -&gt; b - a</code> for max-heap, or use{" "}
            <code style={{ fontFamily: C.mono }}>Comparator.reverseOrder()</code>.
          </li>
          <li>
            <strong style={{ color: C.text }}>C++ <code style={{ fontFamily: C.mono }}>std::priority_queue</code></strong>:{" "}
            defaults to <em>MAX-heap</em> — opposite of Python and Java. For min-heap pass{" "}
            <code style={{ fontFamily: C.mono }}>std::greater&lt;T&gt;</code>. This is one of the
            most common interview gotchas when porting code between languages.
          </li>
          <li>
            <strong style={{ color: C.text }}>Tie-breaking</strong>: heapq sorts by tuple
            comparison —{" "}
            <code style={{ fontFamily: C.mono }}>(priority, sequence_no, item)</code> avoids
            ordering errors when items aren&rsquo;t comparable. Java uses comparator only.
          </li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Decrease-key: why production Dijkstra uses lazy deletion</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          A binary heap can decrease-key in O(log n) <em>only if</em> you keep an index from
          key→position. Python <code style={{ fontFamily: C.mono }}>heapq</code> doesn&rsquo;t.
          Java{" "}
          <code style={{ fontFamily: C.mono }}>PriorityQueue.remove(o)</code> is O(n) (it scans).
          The standard workaround in real code: just{" "}
          <code style={{ fontFamily: C.mono }}>push(new_priority, key)</code> again, and when you{" "}
          <code style={{ fontFamily: C.mono }}>pop</code> a key whose priority no longer matches
          the latest one, skip it. This is what the Dijkstra lesson&rsquo;s pseudocode means by{" "}
          &ldquo;if u already finalized: skip&rdquo;.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                             */
/* ------------------------------------------------------------------ */

export default function DSA_L3_HeapsActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
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
      explanation: "The geometric sum of sift-down heights gives a tight O(n) bound — faster than inserting one-by-one.",
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
      explanation: "peek-min is O(1) — it is just the root.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Heaps & Priority Queues"
      level={3}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Priority queues, Dijkstra, top-K, stream medians"
      nextLessonHint="Tries — prefix trees for strings"
    />
  );
}
