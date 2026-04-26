"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer, TreeCanvas,
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
  Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  AVL tree model                                                      */
/* ------------------------------------------------------------------ */

interface AvlNode {
  id: string;
  value: number;
  left: string | null;
  right: string | null;
  height: number;
}
type Avl = Record<string, AvlNode>;

let NEXT = 1;
function mk(v: number): AvlNode { return { id: `a${NEXT++}`, value: v, left: null, right: null, height: 1 }; }
function h(t: Avl, id: string | null): number { return id === null ? 0 : t[id].height; }
function bf(t: Avl, id: string | null): number { return id === null ? 0 : h(t, t[id].left) - h(t, t[id].right); }
function updateHeight(t: Avl, id: string) { t[id].height = 1 + Math.max(h(t, t[id].left), h(t, t[id].right)); }
function clone(t: Avl): Avl { const o: Avl = {}; Object.values(t).forEach((n) => { o[n.id] = { ...n }; }); return o; }

function rotateRight(t: Avl, yId: string): string {
  const y = t[yId];
  const xId = y.left!;
  const x = t[xId];
  const T2 = x.right;
  x.right = yId;
  y.left = T2;
  updateHeight(t, yId);
  updateHeight(t, xId);
  return xId;
}
function rotateLeft(t: Avl, xId: string): string {
  const x = t[xId];
  const yId = x.right!;
  const y = t[yId];
  const T2 = y.left;
  y.left = xId;
  x.right = T2;
  updateHeight(t, xId);
  updateHeight(t, yId);
  return yId;
}

/* ------------------------------------------------------------------ */
/*  Frames                                                              */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  tree: Avl;
  rootId: string | null;
  nodeStates: Record<string, CellState>;
  message: string;
  vars: Record<string, string | number | undefined>;
  rotation?: string;
}

const PSEUDO = [
  "function insert(root, v):",
  "  standard BST insert",
  "  update height(root)",
  "  bf ← balanceFactor(root)",
  "  if bf > 1 and v < root.left.value:",
  "    return rotateRight(root)   # LL",
  "  if bf < -1 and v > root.right.value:",
  "    return rotateLeft(root)    # RR",
  "  if bf > 1 and v > root.left.value:",
  "    root.left ← rotateLeft(root.left); return rotateRight(root)  # LR",
  "  if bf < -1 and v < root.right.value:",
  "    root.right ← rotateRight(root.right); return rotateLeft(root)  # RL",
  "  return root",
];

function insertAvl(t: Avl, rootId: string | null, v: number, frames: Frame[]): string {
  function rec(nodeId: string | null): string {
    if (nodeId === null) {
      const n = mk(v);
      t[n.id] = n;
      frames.push({
        line: 1, tree: clone(t), rootId: rootId ?? n.id,
        nodeStates: { [n.id]: "done" },
        message: `Insert ${v} as new leaf.`, vars: { insert: v },
      });
      return n.id;
    }
    const nd = t[nodeId];
    frames.push({
      line: 1, tree: clone(t), rootId,
      nodeStates: { [nodeId]: "compare" },
      message: `At ${nd.value}: comparing with ${v}.`, vars: { insert: v, at: nd.value },
    });
    if (v < nd.value) nd.left = rec(nd.left);
    else if (v > nd.value) nd.right = rec(nd.right);
    else {
      frames.push({
        line: 1, tree: clone(t), rootId,
        nodeStates: { [nodeId]: "mismatch" },
        message: `${v} duplicate — ignored.`, vars: { insert: v, duplicate: "yes" },
      });
      return nodeId;
    }
    updateHeight(t, nodeId);
    const b = bf(t, nodeId);
    frames.push({
      line: 2, tree: clone(t), rootId,
      nodeStates: { [nodeId]: "active" },
      message: `Update height(${nd.value})=${nd.height}, BF=${b}.`,
      vars: { node: nd.value, height: nd.height, BF: b },
    });
    if (b > 1 && nd.left && v < t[nd.left].value) {
      frames.push({
        line: 5, tree: clone(t), rootId,
        nodeStates: { [nodeId]: "mismatch" },
        message: `Imbalance at ${nd.value} (BF=${b}) — LL case → rotate right.`,
        vars: { node: nd.value, BF: b, case: "LL" }, rotation: "LL",
      });
      const newRoot = rotateRight(t, nodeId);
      frames.push({
        line: 6, tree: clone(t), rootId: (rootId === nodeId ? newRoot : rootId),
        nodeStates: { [newRoot]: "done" },
        message: `Rotated right. ${t[newRoot].value} is new subtree root.`,
        vars: { node: t[newRoot].value },
      });
      return newRoot;
    }
    if (b < -1 && nd.right && v > t[nd.right].value) {
      frames.push({
        line: 7, tree: clone(t), rootId,
        nodeStates: { [nodeId]: "mismatch" },
        message: `Imbalance at ${nd.value} (BF=${b}) — RR case → rotate left.`,
        vars: { node: nd.value, BF: b, case: "RR" }, rotation: "RR",
      });
      const newRoot = rotateLeft(t, nodeId);
      frames.push({
        line: 8, tree: clone(t), rootId: (rootId === nodeId ? newRoot : rootId),
        nodeStates: { [newRoot]: "done" },
        message: `Rotated left. ${t[newRoot].value} is new subtree root.`,
        vars: { node: t[newRoot].value },
      });
      return newRoot;
    }
    if (b > 1 && nd.left && v > t[nd.left].value) {
      frames.push({
        line: 9, tree: clone(t), rootId,
        nodeStates: { [nodeId]: "mismatch" },
        message: `LR case at ${nd.value} — left-rotate child, then right-rotate ${nd.value}.`,
        vars: { node: nd.value, BF: b, case: "LR" }, rotation: "LR",
      });
      nd.left = rotateLeft(t, nd.left!);
      frames.push({
        line: 10, tree: clone(t), rootId,
        nodeStates: { [nd.left]: "active" },
        message: `Inner rotation done. Now rotate right at ${nd.value}.`,
        vars: { case: "LR" },
      });
      const newRoot = rotateRight(t, nodeId);
      frames.push({
        line: 10, tree: clone(t), rootId: (rootId === nodeId ? newRoot : rootId),
        nodeStates: { [newRoot]: "done" },
        message: `LR rotation complete. New subtree root: ${t[newRoot].value}.`,
        vars: { node: t[newRoot].value },
      });
      return newRoot;
    }
    if (b < -1 && nd.right && v < t[nd.right].value) {
      frames.push({
        line: 11, tree: clone(t), rootId,
        nodeStates: { [nodeId]: "mismatch" },
        message: `RL case at ${nd.value} — right-rotate child, then left-rotate ${nd.value}.`,
        vars: { node: nd.value, BF: b, case: "RL" }, rotation: "RL",
      });
      nd.right = rotateRight(t, nd.right!);
      frames.push({
        line: 12, tree: clone(t), rootId,
        nodeStates: { [nd.right]: "active" },
        message: `Inner rotation done. Now rotate left at ${nd.value}.`,
        vars: { case: "RL" },
      });
      const newRoot = rotateLeft(t, nodeId);
      frames.push({
        line: 12, tree: clone(t), rootId: (rootId === nodeId ? newRoot : rootId),
        nodeStates: { [newRoot]: "done" },
        message: `RL rotation complete. New subtree root: ${t[newRoot].value}.`,
        vars: { node: t[newRoot].value },
      });
      return newRoot;
    }
    return nodeId;
  }
  return rec(rootId);
}

function parseArr(s: string): number[] | null {
  const p = s.split(/[,\s]+/).map((x) => x.trim()).filter(Boolean).map(Number);
  if (p.some((n) => Number.isNaN(n))) return null;
  return p;
}

function buildFrames(values: number[]): Frame[] {
  NEXT = 1;
  const t: Avl = {};
  let rootId: string | null = null;
  const frames: Frame[] = [];
  frames.push({
    line: 0, tree: {}, rootId: null, nodeStates: {},
    message: `Empty AVL. Inserting: [${values.join(", ")}].`, vars: { pending: values.length },
  });
  for (const v of values) {
    rootId = insertAvl(t, rootId, v, frames);
    frames.push({
      line: 13, tree: clone(t), rootId,
      nodeStates: Object.fromEntries(Object.keys(t).map((k) => [k, "done" as CellState])),
      message: `After inserting ${v}. Height=${rootId ? t[rootId].height : 0}.`,
      vars: { inserted: v, height: rootId ? t[rootId].height : 0 },
    });
  }
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                       */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [input, setInput] = useState("30, 20, 40, 10, 25, 35, 50, 5");
  const parsed = useMemo(() => parseArr(input) ?? [30, 20, 40, 10, 25, 35, 50, 5], [input]);
  const frames = useMemo(() => buildFrames(parsed), [parsed]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  const nodes: Record<string, TreeNodeData> = useMemo(() => {
    const o: Record<string, TreeNodeData> = {};
    Object.values(frame.tree).forEach((n) => {
      o[n.id] = {
        id: n.id, value: n.value,
        left: n.left ?? undefined, right: n.right ?? undefined,
        state: frame.nodeStates[n.id],
        meta: { BF: bf(frame.tree, n.id), h: n.height },
      };
    });
    return o;
  }, [frame]);

  return (
    <AlgoCanvas
      title="AVL Insertion with Rotations"
      player={player}
      input={
        <InputEditor
          label="Insert sequence"
          value={input}
          placeholder="e.g. 10, 20, 30 → triggers LL"
          helper="Each insert shows BF update and any rotation. BF shown under each node."
          presets={[
            { label: "LL rotation", value: "30, 20, 10" },
            { label: "RR rotation", value: "10, 20, 30" },
            { label: "LR rotation", value: "30, 10, 20" },
            { label: "RL rotation", value: "10, 30, 20" },
            { label: "Mixed", value: "30, 20, 40, 10, 25, 35, 50, 5" },
          ]}
          onApply={(v) => { if (parseArr(v)) setInput(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} />}
      legend={
        <span>BF &gt; 1 = left-heavy · BF &lt; −1 = right-heavy · |BF| ≤ 1 = balanced · each node shows BF and height h</span>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <TreeCanvas nodes={nodes} root={frame.rootId ?? undefined} width={600} height={320} />
        {frame.rotation && (
          <div style={{
            padding: "6px 16px",
            borderRadius: 10,
            border: `2px solid ${C.danger}`,
            background: `${C.danger}14`,
            fontFamily: C.mono,
            fontSize: "0.85rem",
            fontWeight: 800,
            color: C.dangerDark,
          }}>
            {frame.rotation} rotation
          </div>
        )}
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                           */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const items = [
    { title: "Balance factor (BF)", body: "BF(node) = height(left) − height(right). An AVL tree keeps |BF| ≤ 1 at every node. If an insertion breaks that, we rotate." },
    { title: "Four rotation cases", body: "LL, RR, LR, RL — named after where the new value went. LL and RR are single rotations. LR and RL are double (two single rotations stacked)." },
    { title: "Why O(log n) is guaranteed", body: "Height of an AVL with n nodes is O(log n) — formally h ≤ 1.44·log₂(n+2). So insert/delete/search are all strictly O(log n) unlike plain BST." },
    { title: "Insert cost", body: "Standard BST insert (O(log n)) + possibly one rotation fix walk up (O(log n)). Delete may trigger O(log n) rotations along the path." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Why AVL exists</SectionEyebrow>
        <SectionTitle>Self-balancing through local rotations</SectionTitle>
        <Lede>
          A plain BST can degenerate to a chain. AVL repairs imbalance immediately using local
          rotations — small, O(1) pointer surgeries that preserve the BST invariant while keeping
          height logarithmic.
        </Lede>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 12 }}>
        {items.map((s, i) => (
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
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try tab                                                             */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Insert 10,20,30 into empty AVL. Which rotation?", a: "RR" },
    { q: "Insert 30,20,10 into empty AVL. Which rotation?", a: "LL" },
    { q: "Insert 30,10,20 into empty AVL. Which rotation?", a: "LR" },
    { q: "Final root after inserting 10,20,30?", a: "20" },
  ];
  const [g, setG] = useState<(string | null)[]>(problems.map(() => null));
  const [s, setS] = useState<boolean[]>(problems.map(() => false));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Figure out the rotation type by looking at the path to the new value.</Callout>
      {problems.map((p, i) => {
        const gv = (g[i] ?? "").trim().toUpperCase();
        const correct = gv === p.a.toUpperCase();
        return (
          <Card key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700, fontSize: "0.85rem", color: C.textMuted, fontFamily: C.mono }}>
                #{i + 1}
              </span>
              <span style={{ fontSize: "0.9rem", flex: "1 1 260px", color: C.text }}>{p.q}</span>
              <input
                type="text"
                placeholder="e.g. LL"
                value={g[i] ?? ""}
                onChange={(e) => { const v = [...g]; v[i] = e.target.value; setG(v); }}
                style={{
                  width: 100,
                  padding: "7px 10px",
                  borderRadius: 8,
                  border: `1px solid ${C.border}`,
                  fontFamily: C.mono,
                  fontSize: "0.85rem",
                  outline: "none",
                  background: C.bg,
                  color: C.text,
                }}
              />
              <button
                onClick={() => { const v = [...s]; v[i] = true; setS(v); }}
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
              {s[i] && (
                <span
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: correct ? C.successDark : C.dangerDark,
                    padding: "4px 12px",
                    borderRadius: 8,
                    background: correct ? `${C.success}14` : `${C.danger}14`,
                    fontFamily: C.heading,
                  }}
                >
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

/* ------------------------------------------------------------------ */
/*  Insight tab                                                         */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>Rotations preserve inorder</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Key insight: left and right rotations <em>never change the inorder sequence</em>. That
          is why they preserve the BST invariant for free. The same idea powers AVL, Red-Black
          trees, and splay trees.
        </p>
      </Card>
      <Card>
        <SubHeading>AVL vs Red-Black</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          AVL is stricter (|BF| ≤ 1) so lookups are a hair faster. Red-Black is looser so it does
          fewer rotations on insert/delete. Result: RB dominates language std-libs (C++{" "}
          <code style={{ fontFamily: C.mono }}>map</code>, Java{" "}
          <code style={{ fontFamily: C.mono }}>TreeMap</code>) while AVL appears in databases
          where reads dominate.
        </p>
      </Card>
      <Card>
        <SubHeading>Minimum nodes for height h</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          N(h) = N(h−1) + N(h−2) + 1 — this is the Fibonacci-like recursion behind the tight
          1.44·log bound. Interviewers love this derivation.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                             */
/* ------------------------------------------------------------------ */

export default function DSA_L3_AVLActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "An AVL tree requires |BF| ≤ 1 at every node. BF is defined as:",
      options: [
        "height(right) − height(left)",
        "height(left) − height(right)",
        "number of leaves",
        "depth of the node",
      ],
      correctIndex: 1,
      explanation: "Standard convention: BF(n) = h(left) − h(right). Positive → left-heavy, negative → right-heavy.",
    },
    {
      question: "An LR double-rotation consists of:",
      options: [
        "Two right rotations",
        "One right then one left rotation at the same node",
        "A left rotation at the left child, then a right rotation at the node",
        "A right rotation only",
      ],
      correctIndex: 2,
      explanation: "LR: first rotate the left child left (converts to LL shape), then rotate the root right.",
    },
    {
      question: "Maximum height of an AVL tree with 7 nodes?",
      options: ["2", "3", "4", "6"],
      correctIndex: 1,
      explanation: "Minimum nodes for height 3 is N(3) = N(2)+N(1)+1 = 4+2+1 = 7. So 7 nodes can fit in an AVL of height 3.",
    },
    {
      question: "Why are rotations O(1) even though they rebalance the tree?",
      options: [
        "They copy the whole subtree",
        "They only re-wire a constant number of pointers",
        "They sort the nodes first",
        "They rely on level-order traversal",
      ],
      correctIndex: 1,
      explanation: "A rotation swaps 3 pointers locally. The height fix-up is also constant-work per node on the path.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="AVL — Self-Balancing BST"
      level={3}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Balanced trees power std::map, TreeMap and DB indexes"
      nextLessonHint="Heaps — array-backed priority queues"
    />
  );
}
