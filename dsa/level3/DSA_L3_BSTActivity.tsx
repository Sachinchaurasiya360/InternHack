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
  PillButton,
  Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  BST model                                                           */
/* ------------------------------------------------------------------ */

interface BSTNode {
  id: string;
  value: number;
  left: string | null;
  right: string | null;
}
type BST = Record<string, BSTNode>;

let NEXT_ID = 1;
function makeNode(v: number): BSTNode {
  return { id: `n${NEXT_ID++}`, value: v, left: null, right: null };
}

function bstInsert(tree: BST, rootId: string | null, v: number, frames: Frame[]): string {
  const path: string[] = [];
  let curId: string | null = rootId;
  while (curId !== null) {
    path.push(curId);
    frames.push({
      kind: "compare",
      line: 2,
      tree: cloneTree(tree),
      rootId,
      nodeStates: pathStates(path, curId, "compare"),
      message: `Compare ${v} with ${tree[curId].value}.`,
      vars: { insert: v, at: tree[curId].value },
    });
    if (v === tree[curId].value) {
      frames.push({
        kind: "dup", line: 3, tree: cloneTree(tree), rootId,
        nodeStates: { [curId]: "mismatch" },
        message: `${v} already exists — duplicate ignored.`, vars: { insert: v, duplicate: "yes" },
      });
      return rootId as string;
    }
    const nxt: string | null = v < tree[curId].value ? tree[curId].left : tree[curId].right;
    frames.push({
      kind: "descend", line: v < tree[curId].value ? 4 : 5,
      tree: cloneTree(tree), rootId,
      nodeStates: pathStates(path, curId, v < tree[curId].value ? "low" : "high"),
      message: v < tree[curId].value
        ? `${v} < ${tree[curId].value} → go left.`
        : `${v} > ${tree[curId].value} → go right.`,
      vars: { insert: v, dir: v < tree[curId].value ? "left" : "right" },
    });
    if (nxt === null) {
      const n = makeNode(v);
      tree[n.id] = n;
      if (v < tree[curId].value) tree[curId].left = n.id;
      else tree[curId].right = n.id;
      path.push(n.id);
      frames.push({
        kind: "place", line: 6, tree: cloneTree(tree), rootId: rootId,
        nodeStates: { ...pathStates(path, n.id, "done"), [n.id]: "done" },
        message: `Insert ${v} as ${v < tree[curId].value ? "left" : "right"} child of ${tree[curId].value}.`,
        vars: { insert: v, placed: "yes" },
      });
      return rootId as string;
    }
    curId = nxt;
  }
  const n = makeNode(v);
  tree[n.id] = n;
  frames.push({
    kind: "place", line: 1, tree: cloneTree(tree), rootId: n.id,
    nodeStates: { [n.id]: "done" },
    message: `Tree empty — ${v} becomes root.`,
    vars: { insert: v, placed: "yes" },
  });
  return n.id;
}

function bstSearch(tree: BST, rootId: string | null, v: number, frames: Frame[]) {
  const path: string[] = [];
  let curId: string | null = rootId;
  while (curId !== null) {
    path.push(curId);
    frames.push({
      kind: "compare", line: 2, tree: cloneTree(tree), rootId,
      nodeStates: pathStates(path, curId, "compare"),
      message: `Compare ${v} with ${tree[curId].value}.`, vars: { target: v, at: tree[curId].value },
    });
    if (v === tree[curId].value) {
      frames.push({
        kind: "found", line: 3, tree: cloneTree(tree), rootId,
        nodeStates: { [curId]: "done" },
        message: `Found ${v}!`, vars: { target: v, found: "yes" },
      });
      return;
    }
    const nxt: string | null = v < tree[curId].value ? tree[curId].left : tree[curId].right;
    frames.push({
      kind: "descend", line: v < tree[curId].value ? 4 : 5,
      tree: cloneTree(tree), rootId,
      nodeStates: pathStates(path, curId, v < tree[curId].value ? "low" : "high"),
      message: v < tree[curId].value ? `${v} < ${tree[curId].value} → go left.` : `${v} > ${tree[curId].value} → go right.`,
      vars: { target: v, dir: v < tree[curId].value ? "left" : "right" },
    });
    curId = nxt;
  }
  frames.push({
    kind: "notfound", line: 6, tree: cloneTree(tree), rootId,
    nodeStates: Object.fromEntries(path.map((p) => [p, "mismatch" as CellState])),
    message: `${v} not found.`, vars: { target: v, found: "no" },
  });
}

function cloneTree(t: BST): BST {
  const out: BST = {};
  Object.values(t).forEach((n) => { out[n.id] = { ...n }; });
  return out;
}
function pathStates(path: string[], curId: string, curSt: CellState): Record<string, CellState> {
  const out: Record<string, CellState> = {};
  path.forEach((p) => { if (p !== curId) out[p] = "visited"; });
  out[curId] = curSt;
  return out;
}

function bstDelete(tree: BST, rootId: string | null, v: number, frames: Frame[]): string | null {
  if (rootId === null) {
    frames.push({
      kind: "notfound", line: 1, tree: cloneTree(tree), rootId, nodeStates: {},
      message: `Tree empty — nothing to delete.`, vars: { delete: v, found: "no" },
    });
    return null;
  }
  let curId: string | null = rootId;
  let parentId: string | null = null;
  let direction: "left" | "right" | null = null;
  const path: string[] = [];
  while (curId !== null && tree[curId].value !== v) {
    path.push(curId);
    frames.push({
      kind: "compare", line: 2, tree: cloneTree(tree), rootId,
      nodeStates: pathStates(path, curId, "compare"),
      message: `Compare ${v} with ${tree[curId].value}.`,
      vars: { delete: v, at: tree[curId].value },
    });
    parentId = curId;
    if (v < tree[curId].value) {
      direction = "left";
      curId = tree[curId].left;
    } else {
      direction = "right";
      curId = tree[curId].right;
    }
    if (curId !== null) {
      frames.push({
        kind: "descend", line: 3, tree: cloneTree(tree), rootId,
        nodeStates: pathStates(path, parentId!, v < tree[parentId!].value ? "low" : "high"),
        message: `${v} ${v < tree[parentId!].value ? "<" : ">"} ${tree[parentId!].value} → go ${direction}.`,
        vars: { delete: v, dir: direction! },
      });
    }
  }
  if (curId === null) {
    frames.push({
      kind: "notfound", line: 4, tree: cloneTree(tree), rootId,
      nodeStates: Object.fromEntries(path.map((p) => [p, "mismatch" as CellState])),
      message: `${v} not in tree — nothing to delete.`, vars: { delete: v, found: "no" },
    });
    return rootId;
  }
  path.push(curId);
  const node = tree[curId];

  if (node.left === null && node.right === null) {
    frames.push({
      kind: "case1-leaf", line: 6, tree: cloneTree(tree), rootId,
      nodeStates: { ...pathStates(path, curId, "swap") },
      message: `Case 1: ${v} is a leaf — remove it directly.`,
      vars: { delete: v, case: "1: leaf" },
    });
    if (parentId === null) {
      delete tree[curId];
      frames.push({
        kind: "removed", line: 7, tree: cloneTree(tree), rootId: null, nodeStates: {},
        message: `Removed root ${v}. Tree is now empty.`,
        vars: { delete: v, done: "yes" },
      });
      return null;
    }
    if (direction === "left") tree[parentId].left = null;
    else tree[parentId].right = null;
    delete tree[curId];
    frames.push({
      kind: "removed", line: 7, tree: cloneTree(tree), rootId,
      nodeStates: Object.fromEntries(path.slice(0, -1).map((p) => [p, "done" as CellState])),
      message: `Removed leaf ${v}.`,
      vars: { delete: v, done: "yes" },
    });
    return rootId;
  }

  if (node.left === null || node.right === null) {
    const childId = (node.left ?? node.right)!;
    frames.push({
      kind: "case2-one-child", line: 9, tree: cloneTree(tree), rootId,
      nodeStates: { ...pathStates(path, curId, "swap"), [childId]: "active" },
      message: `Case 2: ${v} has one child (${tree[childId].value}) — splice the child up.`,
      vars: { delete: v, case: "2: one child", child: tree[childId].value },
    });
    if (parentId === null) {
      delete tree[curId];
      frames.push({
        kind: "removed", line: 10, tree: cloneTree(tree), rootId: childId,
        nodeStates: { [childId]: "done" },
        message: `Removed ${v}. ${tree[childId].value} is the new root.`,
        vars: { delete: v, done: "yes" },
      });
      return childId;
    }
    if (direction === "left") tree[parentId].left = childId;
    else tree[parentId].right = childId;
    delete tree[curId];
    frames.push({
      kind: "removed", line: 10, tree: cloneTree(tree), rootId,
      nodeStates: { [childId]: "done", ...Object.fromEntries(path.slice(0, -1).map((p) => [p, "visited" as CellState])) },
      message: `Removed ${v}. Child ${tree[childId].value} took its place.`,
      vars: { delete: v, done: "yes" },
    });
    return rootId;
  }

  frames.push({
    kind: "case3-two-children", line: 12, tree: cloneTree(tree), rootId,
    nodeStates: { ...pathStates(path, curId, "swap") },
    message: `Case 3: ${v} has two children — find inorder successor (smallest in right subtree).`,
    vars: { delete: v, case: "3: two children" },
  });
  let succParentId = curId;
  let succId: string = node.right!;
  const succPath: string[] = [];
  frames.push({
    kind: "succ-start", line: 13, tree: cloneTree(tree), rootId,
    nodeStates: { [curId]: "swap", [succId]: "frontier" },
    message: `Step into right subtree at ${tree[succId].value}, then keep going left.`,
    vars: { delete: v, succ: tree[succId].value },
  });
  while (tree[succId].left !== null) {
    succParentId = succId;
    succPath.push(succId);
    succId = tree[succId].left!;
    frames.push({
      kind: "succ-walk", line: 13, tree: cloneTree(tree), rootId,
      nodeStates: {
        [curId]: "swap",
        ...Object.fromEntries(succPath.map((p) => [p, "visited" as CellState])),
        [succId]: "frontier",
      },
      message: `Step left to ${tree[succId].value}.`,
      vars: { delete: v, succ: tree[succId].value },
    });
  }
  const succVal = tree[succId].value;
  frames.push({
    kind: "succ-found", line: 14, tree: cloneTree(tree), rootId,
    nodeStates: { [curId]: "swap", [succId]: "match" },
    message: `Inorder successor = ${succVal}. It has no left child by construction.`,
    vars: { delete: v, succ: succVal },
  });
  tree[curId].value = succVal;
  frames.push({
    kind: "succ-copy", line: 15, tree: cloneTree(tree), rootId,
    nodeStates: { [curId]: "match", [succId]: "swap" },
    message: `Copy ${succVal} into the target node. Now delete the successor (which has ≤ 1 child).`,
    vars: { delete: v, copied: succVal },
  });
  const succRight = tree[succId].right;
  if (succParentId === curId) {
    tree[curId].right = succRight;
  } else {
    tree[succParentId].left = succRight;
  }
  delete tree[succId];
  frames.push({
    kind: "removed", line: 16, tree: cloneTree(tree), rootId,
    nodeStates: { [curId]: "done" },
    message: `Removed the successor node. BST invariant preserved.`,
    vars: { delete: v, done: "yes" },
  });
  return rootId;
}

interface Frame {
  kind: string;
  line: number;
  tree: BST;
  rootId: string | null;
  nodeStates: Record<string, CellState>;
  message: string;
  vars: Record<string, string | number | undefined>;
}

const INSERT_PSEUDO = [
  "function insert(root, v):",
  "  if root is null: return Node(v)",
  "  if v == root.value: return root",
  "  # duplicate — BSTs disallow",
  "  if v < root.value: root.left ← insert(root.left, v)",
  "  else: root.right ← insert(root.right, v)",
  "  return root",
];

const SEARCH_PSEUDO = [
  "function search(root, v):",
  "  if root is null: return false",
  "  if v == root.value: return true",
  "  # found",
  "  if v < root.value: return search(root.left, v)",
  "  else: return search(root.right, v)",
  "  return false",
];

const DELETE_PSEUDO = [
  "function delete(root, v):",
  "  if root is null: return null",
  "  walk down comparing v with root.value",
  "  follow left/right child until v found",
  "  if not found: return root unchanged",
  "  # node found — dispatch on number of children",
  "  Case 1 — leaf: detach from parent",
  "  return updated tree",
  "  # one-child case",
  "  Case 2 — one child: parent → child (splice up)",
  "  return updated tree",
  "  # two-children case",
  "  Case 3 — two children: find inorder successor",
  "    walk right once, then left until null",
  "    successor value found",
  "    copy successor's value into target node",
  "    delete the successor (recurses into Case 1 or 2)",
];

function parseArr(s: string): number[] | null {
  const parts = s.split(/[,\s]+/).map((x) => x.trim()).filter(Boolean);
  const nums = parts.map((x) => Number(x));
  if (nums.some((n) => Number.isNaN(n))) return null;
  return nums;
}

function buildInsertFrames(values: number[]): Frame[] {
  NEXT_ID = 1;
  const frames: Frame[] = [];
  const tree: BST = {};
  let rootId: string | null = null;
  frames.push({
    kind: "start", line: 0, tree: {}, rootId: null, nodeStates: {},
    message: `Start with empty BST. Inserting: [${values.join(", ")}].`,
    vars: { pending: values.length },
  });
  for (const v of values) {
    rootId = bstInsert(tree, rootId, v, frames);
  }
  frames.push({
    kind: "done", line: 6, tree: cloneTree(tree), rootId,
    nodeStates: Object.fromEntries(Object.keys(tree).map((k) => [k, "done" as CellState])),
    message: `All values inserted. BST complete.`, vars: { inserted: values.length },
  });
  return frames;
}

function buildSearchFrames(values: number[], target: number): Frame[] {
  NEXT_ID = 1;
  const frames: Frame[] = [];
  const tree: BST = {};
  let rootId: string | null = null;
  for (const v of values) rootId = bstInsert(tree, rootId, v, []);
  frames.push({
    kind: "start", line: 0, tree: cloneTree(tree), rootId, nodeStates: {},
    message: `Search for ${target} starting at root.`, vars: { target },
  });
  bstSearch(tree, rootId, target, frames);
  return frames;
}

function buildDeleteFrames(values: number[], target: number): Frame[] {
  NEXT_ID = 1;
  const frames: Frame[] = [];
  const tree: BST = {};
  let rootId: string | null = null;
  for (const v of values) rootId = bstInsert(tree, rootId, v, []);
  frames.push({
    kind: "start", line: 0, tree: cloneTree(tree), rootId, nodeStates: {},
    message: `Built BST from [${values.join(", ")}]. Now delete ${target}.`,
    vars: { delete: target },
  });
  bstDelete(tree, rootId, target, frames);
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                       */
/* ------------------------------------------------------------------ */

type Mode = "insert" | "search" | "delete";

const PRESETS_FOR: Record<Mode, { label: string; value: string }[]> = {
  insert: [
    { label: "Balanced", value: "50, 30, 70, 20, 40, 60, 80" },
    { label: "Sorted (skewed)", value: "10, 20, 30, 40, 50" },
    { label: "Random", value: "42, 15, 78, 8, 23, 55, 91" },
    { label: "Small", value: "5, 3, 7" },
  ],
  search: [
    { label: "Balanced", value: "50, 30, 70, 20, 40, 60, 80" },
    { label: "Sorted (skewed)", value: "10, 20, 30, 40, 50" },
    { label: "Random", value: "42, 15, 78, 8, 23, 55, 91" },
  ],
  delete: [
    { label: "Case 1 (leaf)", value: "50, 30, 70, 20, 40, 60, 80" },
    { label: "Case 2 (one child)", value: "50, 30, 70, 60, 80, 90" },
    { label: "Case 3 (two children)", value: "50, 30, 70, 20, 40, 60, 80" },
    { label: "Delete root", value: "50, 30, 70, 20, 40" },
  ],
};

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("insert");
  const [input, setInput] = useState("50, 30, 70, 20, 40, 60, 80");
  const [target, setTarget] = useState(40);
  const parsed = useMemo(() => parseArr(input) ?? [50, 30, 70, 20, 40, 60, 80], [input]);

  const frames = useMemo(() => {
    if (mode === "insert") return buildInsertFrames(parsed);
    if (mode === "search") return buildSearchFrames(parsed, target);
    return buildDeleteFrames(parsed, target);
  }, [mode, parsed, target]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  const nodes: Record<string, TreeNodeData> = useMemo(() => {
    const out: Record<string, TreeNodeData> = {};
    Object.values(frame.tree).forEach((n) => {
      out[n.id] = { id: n.id, value: n.value, left: n.left ?? undefined, right: n.right ?? undefined, state: frame.nodeStates[n.id] };
    });
    return out;
  }, [frame]);

  const pseudo = mode === "insert" ? INSERT_PSEUDO : mode === "search" ? SEARCH_PSEUDO : DELETE_PSEUDO;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
        {(["insert", "search", "delete"] as Mode[]).map((m) => (
          <PillButton key={m} onClick={() => setMode(m)} active={mode === m} color={A}>
            <span style={{ fontSize: "0.78rem", textTransform: "capitalize" }}>{m}</span>
          </PillButton>
        ))}
        {(mode === "search" || mode === "delete") && (
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 4 }}>
            <span style={{ fontSize: "0.78rem", color: C.textMuted, fontWeight: 600, fontFamily: C.heading }}>
              {mode === "search" ? "target:" : "key to delete:"}
            </span>
            <input
              type="number"
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
              style={{
                width: 80,
                padding: "6px 10px",
                borderRadius: 8,
                border: `1px solid ${C.border}`,
                fontFamily: C.mono,
                fontSize: "0.85rem",
                outline: "none",
                background: C.bg,
                color: C.text,
              }}
            />
            {mode === "delete" && (
              <span style={{ fontSize: "0.72rem", color: C.textMuted, fontStyle: "italic" }}>
                try 20 (leaf), 30 (two children), or 50 (root)
              </span>
            )}
          </div>
        )}
      </div>
      <AlgoCanvas
        title={`BST — ${mode}`}
        player={player}
        input={
          <InputEditor
            label="Insert sequence"
            value={input}
            placeholder="e.g. 50, 30, 70, 20, 40"
            helper={mode === "delete"
              ? "Tree is built from this sequence, then the target key is deleted with the 3-case dispatch."
              : "Values are inserted one by one in the given order."}
            presets={PRESETS_FOR[mode]}
            onApply={(v) => { if (parseArr(v)) setInput(v); }}
          />
        }
        pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame.line} />}
        variables={<VariablesPanel vars={frame.vars} />}
      >
        <TreeCanvas nodes={nodes} root={frame.rootId ?? undefined} width={560} height={320} />
      </AlgoCanvas>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                           */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const items = [
    { title: "The BST invariant", body: "For every node: all keys in the left subtree are strictly less, and all keys in the right subtree are strictly greater. This property must hold recursively — not just for direct children." },
    { title: "Insert is a walk", body: "Starting at the root, compare with the current node's value. Go left or right until you hit a null pointer — that's where the new node lands." },
    { title: "Search is the same walk", body: "At each node: match → done. Smaller → left. Larger → right. Null → not found. This is why balanced BSTs give O(log n) search." },
    { title: "Delete has 3 cases", body: "(1) Leaf: just remove it. (2) One child: replace node with its child. (3) Two children: swap the node's value with its inorder successor (smallest in right subtree), then delete that successor." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>What makes a BST useful?</SectionEyebrow>
        <SectionTitle>Sorted-on-demand by structure, not by sorting</SectionTitle>
        <Lede>
          A BST combines the flexibility of a linked structure with the O(log n) speed of binary
          search — <em>when balanced</em>. Inorder traversal always produces sorted output; that
          property falls out of the invariant for free.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 12 }}>
        {items.map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: A, marginBottom: 6, fontFamily: C.mono, letterSpacing: "0.08em" }}>
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
  const problems = [
    { q: "Insert [5,3,7,1,4] — what is the inorder output?", a: "1,3,4,5,7" },
    { q: "Insert 8 into {5,3,7,6,9} — 8 becomes which node's left/right child?", a: "9-left" },
    { q: "Search 15 in {10,5,20,3,7,15,25}. How many comparisons?", a: "3" },
    { q: "Delete 10 from {10,5,20,3,7,15,25}. New root value (inorder successor)?", a: "15" },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Work it out on paper first, then reveal.</Callout>
      {problems.map((p, i) => {
        const g = (guesses[i] ?? "").replace(/\s+/g, "").toLowerCase();
        const revealed = shown[i];
        const correct = g === p.a;
        return (
          <Card key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700, fontSize: "0.85rem", color: C.textMuted, fontFamily: C.mono }}>
                #{i + 1}
              </span>
              <span style={{ fontSize: "0.9rem", flex: "1 1 260px", color: C.text }}>{p.q}</span>
              <input
                type="text"
                placeholder="answer"
                value={guesses[i] ?? ""}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                style={{
                  width: 140, padding: "7px 10px", borderRadius: 8,
                  border: `1px solid ${C.border}`, fontFamily: C.mono, fontSize: "0.85rem",
                  outline: "none", background: C.bg, color: C.text,
                }}
              />
              <button
                onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
                style={{
                  padding: "6px 14px", borderRadius: 8, fontSize: "0.78rem", fontWeight: 700,
                  border: `1px solid ${C.border}`, background: C.bg, color: C.textSecondary,
                  cursor: "pointer", fontFamily: C.heading,
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

/* ------------------------------------------------------------------ */
/*  Insight tab                                                         */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>The skewed-tree trap</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Inserting already-sorted data into a plain BST produces a linked list in disguise. Every
          operation degrades to <strong style={{ color: C.text }}>O(n)</strong>. This is exactly
          why AVL and Red-Black trees exist — they self-balance to preserve O(log n).
        </p>
      </Card>
      <Card>
        <SubHeading>Why inorder successor for delete?</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          The inorder successor is the smallest key larger than the node being deleted — so
          replacing the node with it preserves the BST invariant everywhere. The successor always
          has at most one (right) child, which makes it cheap to splice out.
        </p>
      </Card>
      <Card>
        <SubHeading>Count of distinct BSTs</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          The number of structurally distinct BSTs with n keys is the <em>n-th Catalan number</em>{" "}
          C(n) = (2n)! / ((n+1)!·n!). A classic interview question: how many BSTs on keys{" "}
          {"{1..n}"} have a specific property — start from this identity.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                             */
/* ------------------------------------------------------------------ */

export default function DSA_L3_BSTActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "Worst-case time complexity of search in a plain (unbalanced) BST?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctIndex: 2,
      explanation: "If the tree degenerates into a chain (insert sorted data), search traverses every node — O(n).",
    },
    {
      question: "Inserting 6, 2, 8, 1, 4 in order — what is the inorder traversal?",
      options: ["[1,2,4,6,8]", "[6,2,8,1,4]", "[1,4,2,8,6]", "[1,2,6,4,8]"],
      correctIndex: 0,
      explanation: "BST inorder is always sorted ascending — regardless of insertion order.",
    },
    {
      question: "When deleting a node with two children, the standard replacement is:",
      options: ["the left child", "any leaf", "the inorder successor (or predecessor)", "the root"],
      correctIndex: 2,
      explanation: "Using the inorder successor preserves the BST invariant and keeps the replacement simple.",
    },
    {
      question: "A BST has n nodes and height h. Which is always true?",
      options: [
        "h = log₂(n)",
        "⌈log₂(n+1)⌉ ≤ h ≤ n",
        "h ≤ log₂(n)",
        "h = n always",
      ],
      correctIndex: 1,
      explanation: "Minimum height occurs when perfectly balanced: ⌈log₂(n+1)⌉. Maximum when fully skewed: h = n − 1 (some texts say n).",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Binary Search Tree"
      level={3}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Essential foundation for maps, sets & balanced trees"
      nextLessonHint="AVL Trees — keeping a BST balanced"
    />
  );
}
