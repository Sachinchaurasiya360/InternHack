"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer,
  TreeCanvas, StackColumn, QueueTube,
} from "@/components/engineering/algo";
import type { TreeNodeData, CellState } from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, PillButton, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Tree building from level-order "1,2,3,null,4" notation             */
/* ------------------------------------------------------------------ */

interface BuiltTree { nodes: Record<string, TreeNodeData>; root: string | undefined; order: string[] }

function parseLevelOrder(s: string): (number | null)[] | null {
  const toks = s.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (toks.length === 0) return null;
  const out: (number | null)[] = [];
  for (const t of toks) {
    if (t === "null" || t === "-") out.push(null);
    else {
      const n = Number(t);
      if (Number.isNaN(n)) return null;
      out.push(n);
    }
  }
  return out;
}

function buildTree(arr: (number | null)[]): BuiltTree {
  const nodes: Record<string, TreeNodeData> = {};
  const order: string[] = [];
  if (arr.length === 0 || arr[0] === null) return { nodes, root: undefined, order };
  const ids: (string | null)[] = arr.map((v, i) => (v === null ? null : `n${i}`));
  arr.forEach((v, i) => {
    if (v === null) return;
    const id = ids[i]!;
    nodes[id] = { id, value: v };
    order.push(id);
  });
  // Connect via BFS index mapping (LeetCode-style level-order with nulls)
  let childIdx = 1;
  for (let i = 0; i < arr.length && childIdx < arr.length; i++) {
    if (arr[i] === null) continue;
    const id = ids[i]!;
    if (childIdx < arr.length) { if (ids[childIdx]) nodes[id].left = ids[childIdx]!; childIdx++; }
    if (childIdx < arr.length) { if (ids[childIdx]) nodes[id].right = ids[childIdx]!; childIdx++; }
  }
  return { nodes, root: ids[0] ?? undefined, order };
}

/* ------------------------------------------------------------------ */
/*  Frames                                                              */
/* ------------------------------------------------------------------ */

type Mode = "inorder" | "preorder" | "postorder" | "levelorder";

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodeStates: Record<string, CellState>;
  output: (string | number)[];
  stack: (string | number)[];
  queue: (string | number)[];
}

const PSEUDO: Record<Mode, string[]> = {
  inorder: [
    "function inorder(node):",
    "  if node is null: return",
    "  inorder(node.left)",
    "  visit(node)",
    "  inorder(node.right)",
  ],
  preorder: [
    "function preorder(node):",
    "  if node is null: return",
    "  visit(node)",
    "  preorder(node.left)",
    "  preorder(node.right)",
  ],
  postorder: [
    "function postorder(node):",
    "  if node is null: return",
    "  postorder(node.left)",
    "  postorder(node.right)",
    "  visit(node)",
  ],
  levelorder: [
    "function bfs(root):",
    "  q ← [root]",
    "  while q not empty:",
    "    node ← q.dequeue()",
    "    visit(node)",
    "    if node.left:  q.enqueue(node.left)",
    "    if node.right: q.enqueue(node.right)",
  ],
};

function buildFrames(t: BuiltTree, mode: Mode): Frame[] {
  const frames: Frame[] = [];
  const { nodes, root } = t;
  const visited: Record<string, CellState> = {};
  const output: (string | number)[] = [];

  if (!root) {
    frames.push({
      line: 0, vars: { mode }, message: "Tree is empty.",
      nodeStates: {}, output: [], stack: [], queue: [],
    });
    return frames;
  }

  if (mode === "levelorder") {
    const q: string[] = [root];
    frames.push({
      line: 1, vars: { mode, queued: 1, visited: 0 },
      message: `Enqueue root ${nodes[root].value}.`,
      nodeStates: { [root]: "frontier" }, output: [], stack: [], queue: q.map((id) => nodes[id].value),
    });
    while (q.length > 0) {
      frames.push({
        line: 2, vars: { mode, queued: q.length, visited: output.length },
        message: `Queue has ${q.length} node(s). Continue.`,
        nodeStates: { ...visited, ...Object.fromEntries(q.map((id) => [id, "frontier" as CellState])) },
        output: [...output], stack: [], queue: q.map((id) => nodes[id].value),
      });
      const id = q.shift()!;
      frames.push({
        line: 3, vars: { mode, queued: q.length, node: nodes[id].value, visited: output.length },
        message: `Dequeue ${nodes[id].value}.`,
        nodeStates: { ...visited, [id]: "active", ...Object.fromEntries(q.map((x) => [x, "frontier" as CellState])) },
        output: [...output], stack: [], queue: q.map((x) => nodes[x].value),
      });
      output.push(nodes[id].value);
      visited[id] = "done";
      frames.push({
        line: 4, vars: { mode, queued: q.length, node: nodes[id].value, visited: output.length },
        message: `Visit ${nodes[id].value} - append to output.`,
        nodeStates: { ...visited, ...Object.fromEntries(q.map((x) => [x, "frontier" as CellState])) },
        output: [...output], stack: [], queue: q.map((x) => nodes[x].value),
      });
      if (nodes[id].left) {
        q.push(nodes[id].left!);
        frames.push({
          line: 5, vars: { mode, queued: q.length, visited: output.length },
          message: `Enqueue left child ${nodes[nodes[id].left!].value}.`,
          nodeStates: { ...visited, ...Object.fromEntries(q.map((x) => [x, "frontier" as CellState])) },
          output: [...output], stack: [], queue: q.map((x) => nodes[x].value),
        });
      }
      if (nodes[id].right) {
        q.push(nodes[id].right!);
        frames.push({
          line: 6, vars: { mode, queued: q.length, visited: output.length },
          message: `Enqueue right child ${nodes[nodes[id].right!].value}.`,
          nodeStates: { ...visited, ...Object.fromEntries(q.map((x) => [x, "frontier" as CellState])) },
          output: [...output], stack: [], queue: q.map((x) => nodes[x].value),
        });
      }
    }
    frames.push({
      line: 2, vars: { mode, queued: 0, visited: output.length },
      message: `Queue empty - traversal done: [${output.join(", ")}].`,
      nodeStates: visited, output: [...output], stack: [], queue: [],
    });
    return frames;
  }

  // DFS with explicit stack trace for pseudocode-line sync
  const callStack: { id: string; phase: number }[] = [];

  function pushCall(id: string) {
    callStack.push({ id, phase: 0 });
  }

  // Seed with root
  pushCall(root);
  frames.push({
    line: 0, vars: { mode, stackDepth: callStack.length, visited: 0 },
    message: `Start: call ${mode}(${nodes[root].value}).`,
    nodeStates: { [root]: "active" }, output: [],
    stack: callStack.map((c) => nodes[c.id].value), queue: [],
  });

  // Iteratively simulate recursion
  while (callStack.length > 0) {
    const top = callStack[callStack.length - 1];
    const nd = nodes[top.id];
    const visitedMap: Record<string, CellState> = { ...visited };
    callStack.forEach((c) => { if (!visitedMap[c.id]) visitedMap[c.id] = "frontier"; });
    visitedMap[top.id] = "active";

    if (mode === "inorder") {
      if (top.phase === 0) {
        frames.push({
          line: 1, vars: { mode, stackDepth: callStack.length, node: nd.value },
          message: `Enter inorder(${nd.value}).`,
          nodeStates: visitedMap, output: [...output],
          stack: callStack.map((c) => nodes[c.id].value), queue: [],
        });
        top.phase = 1;
        if (nd.left) {
          frames.push({
            line: 2, vars: { mode, stackDepth: callStack.length, node: nd.value },
            message: `Recurse left into ${nodes[nd.left].value}.`,
            nodeStates: visitedMap, output: [...output],
            stack: callStack.map((c) => nodes[c.id].value), queue: [],
          });
          pushCall(nd.left);
          continue;
        }
      }
      if (top.phase === 1) {
        output.push(nd.value);
        visited[top.id] = "done";
        frames.push({
          line: 3, vars: { mode, stackDepth: callStack.length, node: nd.value, visited: output.length },
          message: `Visit ${nd.value} - append to output.`,
          nodeStates: { ...visited, ...Object.fromEntries(callStack.map((c) => [c.id, "frontier" as CellState])) },
          output: [...output], stack: callStack.map((c) => nodes[c.id].value), queue: [],
        });
        top.phase = 2;
        if (nd.right) {
          frames.push({
            line: 4, vars: { mode, stackDepth: callStack.length, node: nd.value },
            message: `Recurse right into ${nodes[nd.right].value}.`,
            nodeStates: { ...visited, ...Object.fromEntries(callStack.map((c) => [c.id, "frontier" as CellState])) },
            output: [...output], stack: callStack.map((c) => nodes[c.id].value), queue: [],
          });
          pushCall(nd.right);
          continue;
        }
      }
      callStack.pop();
    } else if (mode === "preorder") {
      if (top.phase === 0) {
        output.push(nd.value);
        visited[top.id] = "done";
        frames.push({
          line: 2, vars: { mode, stackDepth: callStack.length, node: nd.value, visited: output.length },
          message: `Visit ${nd.value} - append to output.`,
          nodeStates: { ...visited, ...Object.fromEntries(callStack.map((c) => [c.id, "frontier" as CellState])) },
          output: [...output], stack: callStack.map((c) => nodes[c.id].value), queue: [],
        });
        top.phase = 1;
        if (nd.left) {
          frames.push({
            line: 3, vars: { mode, stackDepth: callStack.length, node: nd.value },
            message: `Recurse left into ${nodes[nd.left].value}.`,
            nodeStates: { ...visited, ...Object.fromEntries(callStack.map((c) => [c.id, "frontier" as CellState])) },
            output: [...output], stack: callStack.map((c) => nodes[c.id].value), queue: [],
          });
          pushCall(nd.left);
          continue;
        }
      }
      if (top.phase === 1) {
        top.phase = 2;
        if (nd.right) {
          frames.push({
            line: 4, vars: { mode, stackDepth: callStack.length, node: nd.value },
            message: `Recurse right into ${nodes[nd.right].value}.`,
            nodeStates: { ...visited, ...Object.fromEntries(callStack.map((c) => [c.id, "frontier" as CellState])) },
            output: [...output], stack: callStack.map((c) => nodes[c.id].value), queue: [],
          });
          pushCall(nd.right);
          continue;
        }
      }
      callStack.pop();
    } else {
      // postorder
      if (top.phase === 0) {
        frames.push({
          line: 1, vars: { mode, stackDepth: callStack.length, node: nd.value },
          message: `Enter postorder(${nd.value}).`,
          nodeStates: visitedMap, output: [...output],
          stack: callStack.map((c) => nodes[c.id].value), queue: [],
        });
        top.phase = 1;
        if (nd.left) {
          frames.push({
            line: 2, vars: { mode, stackDepth: callStack.length, node: nd.value },
            message: `Recurse left into ${nodes[nd.left].value}.`,
            nodeStates: visitedMap, output: [...output],
            stack: callStack.map((c) => nodes[c.id].value), queue: [],
          });
          pushCall(nd.left);
          continue;
        }
      }
      if (top.phase === 1) {
        top.phase = 2;
        if (nd.right) {
          frames.push({
            line: 3, vars: { mode, stackDepth: callStack.length, node: nd.value },
            message: `Recurse right into ${nodes[nd.right].value}.`,
            nodeStates: visitedMap, output: [...output],
            stack: callStack.map((c) => nodes[c.id].value), queue: [],
          });
          pushCall(nd.right);
          continue;
        }
      }
      if (top.phase === 2) {
        output.push(nd.value);
        visited[top.id] = "done";
        frames.push({
          line: 4, vars: { mode, stackDepth: callStack.length - 1, node: nd.value, visited: output.length },
          message: `Visit ${nd.value} - append to output.`,
          nodeStates: { ...visited, ...Object.fromEntries(callStack.slice(0, -1).map((c) => [c.id, "frontier" as CellState])) },
          output: [...output], stack: callStack.slice(0, -1).map((c) => nodes[c.id].value), queue: [],
        });
        callStack.pop();
        continue;
      }
      callStack.pop();
    }
  }

  frames.push({
    line: 0, vars: { mode, stackDepth: 0, visited: output.length },
    message: `Done! Output: [${output.join(", ")}]`,
    nodeStates: visited, output: [...output], stack: [], queue: [],
  });
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                       */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [input, setInput] = useState("1,2,3,4,5,6,7");
  const [mode, setMode] = useState<Mode>("inorder");
  const parsed = useMemo(() => parseLevelOrder(input) ?? [1, 2, 3, 4, 5, 6, 7], [input]);
  const tree = useMemo(() => buildTree(parsed), [parsed]);
  const frames = useMemo(() => buildFrames(tree, mode), [tree, mode]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  const nodesWithState = useMemo(() => {
    const out: Record<string, TreeNodeData> = {};
    Object.values(tree.nodes).forEach((n) => {
      out[n.id] = { ...n, state: frame.nodeStates[n.id] };
    });
    return out;
  }, [tree, frame]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {(["inorder", "preorder", "postorder", "levelorder"] as Mode[]).map((m) => (
          <PillButton key={m} onClick={() => setMode(m)} active={mode === m} color={A}>
            <span style={{ fontSize: "0.78rem" }}>
              {m === "levelorder" ? "Level-order (BFS)" : m.charAt(0).toUpperCase() + m.slice(1)}
            </span>
          </PillButton>
        ))}
      </div>
      <AlgoCanvas
        title={`Traversal - ${mode === "levelorder" ? "BFS" : mode}`}
        player={player}
        input={
          <InputEditor
            label="Level-order array"
            value={input}
            placeholder="e.g. 1,2,3,null,4,5"
            helper="Comma-separated. Use null to skip a slot (LeetCode-style)."
            presets={[
              { label: "Balanced", value: "1,2,3,4,5,6,7" },
              { label: "Skewed left", value: "1,2,null,3,null,4" },
              { label: "Sparse", value: "1,2,3,null,4,5" },
              { label: "Single", value: "42" },
            ]}
            onApply={(v) => { if (parseLevelOrder(v)) setInput(v); }}
          />
        }
        pseudocode={<PseudocodePanel lines={PSEUDO[mode]} activeLine={frame.line} title={`${mode} pseudocode`} />}
        variables={<VariablesPanel vars={frame.vars} />}
      >
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 420px", minWidth: 300 }}>
            <TreeCanvas nodes={nodesWithState} root={tree.root} width={480} height={280} />
            <OutputStrip values={frame.output} />
          </div>
          <div style={{ flex: "0 0 auto" }}>
            {mode === "levelorder"
              ? <QueueTube items={frame.queue.map((v) => ({ value: v }))} title="BFS Queue" maxWidth={220} />
              : <StackColumn items={frame.stack.map((v) => ({ value: v }))} title="Call Stack" maxHeight={260} width={110} />
            }
          </div>
        </div>
        <div style={{ marginTop: 12 }}>
          <Callout accent={A}>{frame.message}</Callout>
        </div>
      </AlgoCanvas>
    </div>
  );
}

function OutputStrip({ values }: { values: (string | number)[] }) {
  return (
    <div style={{
      marginTop: 12, padding: "10px 12px",
      border: `1.5px solid ${C.border}`,
      borderRadius: 8, background: C.bgSoft,
      minHeight: 40, display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap",
    }}>
      <span style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", fontFamily: C.heading }}>Visit order:</span>
      {values.length === 0 && <span style={{ fontSize: "0.8rem", color: C.textMuted, fontStyle: "italic" }}>(empty)</span>}
      {values.map((v, i) => (
        <span key={i} style={{
          padding: "3px 9px", borderRadius: 6,
          background: A, color: "#fff",
          fontFamily: C.mono,
          fontSize: "0.82rem", fontWeight: 700,
        }}>{v}</span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                           */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const items = [
    { title: "Inorder (Left → Root → Right)", body: "For a BST, inorder visits nodes in sorted order. Used heavily in expression tree evaluation." },
    { title: "Preorder (Root → Left → Right)", body: "Clones/serializes a tree - you visit a parent before its children, so reconstruction is straightforward." },
    { title: "Postorder (Left → Right → Root)", body: "Delete or compute aggregates: children are finished before the parent acts. Used in expression evaluation and tree DP." },
    { title: "Level-order (BFS)", body: "Visits by depth level. Uses a FIFO queue. Used for shortest unweighted path from root and level-wise summaries." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Why four traversals?</SectionEyebrow>
        <SectionTitle>Pick an order to visit every node once</SectionTitle>
        <Lede>
          A tree is non-linear. To process every node exactly once, you must pick an order. DFS has
          three natural variants based on when you visit the current node (before, between, or
          after recursing). BFS is the fourth - level-by-level using a queue.
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
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.title}</div>
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
  // Tree: 1,2,3,4,5,6,7 (complete)
  const problems = [
    { q: "Inorder of [1,2,3,4,5,6,7]", a: "4,2,5,1,6,3,7" },
    { q: "Preorder of [1,2,3,4,5,6,7]", a: "1,2,4,5,3,6,7" },
    { q: "Postorder of [1,2,3,4,5,6,7]", a: "4,5,2,6,7,3,1" },
    { q: "Level-order of [1,2,3,4,5,6,7]", a: "1,2,3,4,5,6,7" },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        Tree: root=1, children 2 &amp; 3, then 4,5 under 2 and 6,7 under 3. Write each traversal. Comma-separated.
      </Callout>
      {problems.map((p, i) => {
        const g = (guesses[i] ?? "").replace(/\s+/g, "");
        const revealed = shown[i];
        const correct = g === p.a;
        return (
          <Card key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700, fontSize: "0.9rem", color: C.textMuted, fontFamily: C.mono }}>#{i + 1}</span>
              <span style={{ fontSize: "0.9rem", color: C.text }}>{p.q}</span>
              <input type="text" placeholder="e.g. 1,2,3" value={guesses[i] ?? ""}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                style={{ width: 160, padding: "6px 8px", borderRadius: 6, border: `1px solid ${C.border}`, fontFamily: C.mono, fontSize: "0.85rem", background: C.bg, color: C.text }} />
              <button
                onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
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
              {revealed && (
                <span style={{
                  fontSize: "0.82rem", fontWeight: 700,
                  color: correct ? C.successDark : C.dangerDark,
                  padding: "4px 12px", borderRadius: 8,
                  background: correct ? `${C.success}14` : `${C.danger}14`,
                  fontFamily: C.heading,
                }}>{correct ? `✓ Correct` : `Answer: ${p.a}`}</span>
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
        <SubHeading>The call-stack is the recursion</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Every DFS traversal runs on a stack - either the implicit call stack (recursion) or an explicit <code style={{ fontFamily: C.mono }}>Stack</code>. BFS always uses a <code style={{ fontFamily: C.mono }}>Queue</code>. This is why stacks-vs-queues is a frequent interview question disguised as traversal.
        </p>
      </Card>
      <Card>
        <SubHeading>Reconstruction rule</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          A single traversal is ambiguous, but <em>preorder + inorder</em> (or <em>postorder + inorder</em>) uniquely reconstructs the tree. Preorder alone or postorder alone does not. This shows up often in interviews.
        </p>
      </Card>
      <Card>
        <SubHeading>Complexity</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Every traversal visits each node exactly once → <strong>O(n)</strong> time. Space is O(h) for DFS (h = height) and O(w) for BFS (w = max width). For a skewed tree DFS is O(n); for a balanced tree it&apos;s O(log n).
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                             */
/* ------------------------------------------------------------------ */

export default function DSA_L3_BinaryTreeTraversalsActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "Which traversal of a BST yields the keys in sorted (ascending) order?",
      options: ["Preorder", "Inorder", "Postorder", "Level-order"],
      correctIndex: 1,
      explanation: "In a BST, left subtree < node < right subtree. Inorder (L, N, R) reads keys in ascending order.",
    },
    {
      question: "Which data structure is the underlying driver of level-order traversal?",
      options: ["Stack", "Queue", "Priority queue", "Hash map"],
      correctIndex: 1,
      explanation: "BFS uses a FIFO queue so nodes are processed in the order they were discovered, level by level.",
    },
    {
      question: "Given preorder = [1,2,4,5,3,6,7] and inorder = [4,2,5,1,6,3,7], what is the postorder?",
      options: ["[4,5,2,6,7,3,1]", "[1,2,3,4,5,6,7]", "[4,2,5,6,3,7,1]", "[7,6,3,5,4,2,1]"],
      correctIndex: 0,
      explanation: "Reconstruct: root=1, left subtree {2,4,5}, right {3,6,7}. Postorder is L-R-N per subtree → [4,5,2,6,7,3,1].",
    },
    {
      question: "Minimum extra space needed for iterative inorder on a tree of height h?",
      options: ["O(1)", "O(log n)", "O(h)", "O(n)"],
      correctIndex: 2,
      explanation: "You must remember the ancestor chain to return to after visiting the left subtree - that needs O(h) stack.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Binary Tree & Traversals"
      level={3}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Every tree interview starts here"
      nextLessonHint="Binary Search Trees"
    />
  );
}
