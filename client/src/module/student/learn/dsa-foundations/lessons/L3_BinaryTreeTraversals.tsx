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

const PRACTICE_TOPIC_SLUG: string | null = "binary-tree";

/* ------------------------------------------------------------------ */
/*  Local types                                                         */
/* ------------------------------------------------------------------ */

interface TreeNodeData {
  id: string;
  value: number;
  left?: string;
  right?: string;
}

type CellState = "idle" | "active" | "frontier" | "done" | "visited";
const NODE_COLOR: Record<CellState, string> = {
  idle: THEME.bg,
  active: THEME.accent,
  frontier: "#bef264",
  done: THEME.accentDark,
  visited: THEME.accentSoft,
};
const NODE_TEXT_COLOR: Record<CellState, string> = {
  idle: THEME.text,
  active: THEME.text,
  frontier: THEME.text,
  done: "#fff",
  visited: THEME.text,
};

/* ------------------------------------------------------------------ */
/*  Tree builder                                                        */
/* ------------------------------------------------------------------ */

interface BuiltTree {
  nodes: Record<string, TreeNodeData>;
  root: string | undefined;
}

function parseLevelOrder(s: string): (number | null)[] | null {
  const toks = s
    .split(/[,\s]+/)
    .map((t) => t.trim())
    .filter(Boolean);
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
  if (arr.length === 0 || arr[0] === null) return { nodes, root: undefined };
  const ids: (string | null)[] = arr.map((v, i) => (v === null ? null : `n${i}`));
  arr.forEach((v, i) => {
    if (v === null) return;
    const id = ids[i]!;
    nodes[id] = { id, value: v };
  });
  let childIdx = 1;
  for (let i = 0; i < arr.length && childIdx < arr.length; i++) {
    if (arr[i] === null) continue;
    const id = ids[i]!;
    if (childIdx < arr.length) {
      if (ids[childIdx]) nodes[id].left = ids[childIdx]!;
      childIdx++;
    }
    if (childIdx < arr.length) {
      if (ids[childIdx]) nodes[id].right = ids[childIdx]!;
      childIdx++;
    }
  }
  return { nodes, root: ids[0] ?? undefined };
}

/* ------------------------------------------------------------------ */
/*  Tree SVG renderer (local)                                           */
/* ------------------------------------------------------------------ */

function computeLayout(
  nodes: Record<string, TreeNodeData>,
  root: string | undefined,
): { x: Record<string, number>; y: Record<string, number>; depth: number } {
  const x: Record<string, number> = {};
  const y: Record<string, number> = {};
  let col = 0;

  function walk(id: string | undefined, depth: number) {
    if (!id || !nodes[id]) return;
    walk(nodes[id].left, depth + 1);
    x[id] = col++;
    y[id] = depth;
    walk(nodes[id].right, depth + 1);
  }
  walk(root, 0);

  const maxDepth = Math.max(0, ...Object.values(y));
  return { x, y, depth: maxDepth };
}

function TreeViz({
  nodes,
  root,
  nodeStates,
  width = 560,
  height = 280,
}: {
  nodes: Record<string, TreeNodeData>;
  root: string | undefined;
  nodeStates: Record<string, CellState>;
  width?: number;
  height?: number;
}) {
  const { x, y, depth } = computeLayout(nodes, root);
  const n = Object.keys(x).length;
  if (n === 0) {
    return (
      <svg width={width} height={60} viewBox={`0 0 ${width} 60`}>
        <text x={width / 2} y={35} textAnchor="middle" fontSize={13} fill={THEME.textMuted}>
          (empty tree)
        </text>
      </svg>
    );
  }
  const PAD = 30;
  const xScale = n > 1 ? (width - PAD * 2) / (n - 1) : 0;
  const yScale = depth > 0 ? (height - PAD * 2 - 20) / depth : 0;
  const R = 18;

  const px = (id: string) => PAD + x[id] * xScale;
  const py = (id: string) => PAD + y[id] * yScale;

  const ids = Object.keys(nodes);
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      style={{ height: "auto", maxHeight: height }}
    >
      {ids.map((id) => {
        const nd = nodes[id];
        return (
          [nd.left, nd.right].filter(Boolean) as string[]
        ).map((cid) => (
          <line
            key={`${id}-${cid}`}
            x1={px(id)}
            y1={py(id)}
            x2={px(cid)}
            y2={py(cid)}
            stroke={THEME.border}
            strokeWidth={1.8}
          />
        ));
      })}
      {ids.map((id) => {
        const state = nodeStates[id] ?? "idle";
        return (
          <g key={id}>
            <circle
              cx={px(id)}
              cy={py(id)}
              r={R}
              fill={NODE_COLOR[state]}
              stroke={state === "active" ? THEME.accentDark : THEME.border}
              strokeWidth={state === "active" ? 2.5 : 1.5}
            />
            <text
              x={px(id)}
              y={py(id) + 4}
              textAnchor="middle"
              fontSize={12}
              fontWeight={700}
              fill={NODE_TEXT_COLOR[state]}
              fontFamily={THEME.mono}
            >
              {nodes[id].value}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Frame types                                                         */
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
    "  q <- [root]",
    "  while q not empty:",
    "    node <- q.dequeue()",
    "    visit(node)",
    "    if node.left:  q.enqueue(node.left)",
    "    if node.right: q.enqueue(node.right)",
  ],
};

/* ------------------------------------------------------------------ */
/*  Frame builders                                                      */
/* ------------------------------------------------------------------ */

function buildFrames(t: BuiltTree, mode: Mode): Frame[] {
  const frames: Frame[] = [];
  const { nodes, root } = t;
  const visited: Record<string, CellState> = {};
  const output: (string | number)[] = [];

  if (!root) {
    frames.push({
      line: 0,
      vars: { mode },
      message: "Tree is empty.",
      nodeStates: {},
      output: [],
      stack: [],
      queue: [],
    });
    return frames;
  }

  if (mode === "levelorder") {
    const q: string[] = [root];
    frames.push({
      line: 1,
      vars: { mode, queued: 1, visited: 0 },
      message: `Enqueue root ${nodes[root].value}.`,
      nodeStates: { [root]: "frontier" },
      output: [],
      stack: [],
      queue: q.map((id) => nodes[id].value),
    });
    while (q.length > 0) {
      frames.push({
        line: 2,
        vars: { mode, queued: q.length, visited: output.length },
        message: `Queue has ${q.length} node(s). Continue.`,
        nodeStates: {
          ...visited,
          ...Object.fromEntries(q.map((id) => [id, "frontier" as CellState])),
        },
        output: [...output],
        stack: [],
        queue: q.map((id) => nodes[id].value),
      });
      const id = q.shift()!;
      frames.push({
        line: 3,
        vars: { mode, queued: q.length, node: nodes[id].value, visited: output.length },
        message: `Dequeue ${nodes[id].value}.`,
        nodeStates: {
          ...visited,
          [id]: "active",
          ...Object.fromEntries(q.map((x) => [x, "frontier" as CellState])),
        },
        output: [...output],
        stack: [],
        queue: q.map((x) => nodes[x].value),
      });
      output.push(nodes[id].value);
      visited[id] = "done";
      frames.push({
        line: 4,
        vars: { mode, queued: q.length, node: nodes[id].value, visited: output.length },
        message: `Visit ${nodes[id].value} - append to output.`,
        nodeStates: {
          ...visited,
          ...Object.fromEntries(q.map((x) => [x, "frontier" as CellState])),
        },
        output: [...output],
        stack: [],
        queue: q.map((x) => nodes[x].value),
      });
      if (nodes[id].left) {
        q.push(nodes[id].left!);
        frames.push({
          line: 5,
          vars: { mode, queued: q.length, visited: output.length },
          message: `Enqueue left child ${nodes[nodes[id].left!].value}.`,
          nodeStates: {
            ...visited,
            ...Object.fromEntries(q.map((x) => [x, "frontier" as CellState])),
          },
          output: [...output],
          stack: [],
          queue: q.map((x) => nodes[x].value),
        });
      }
      if (nodes[id].right) {
        q.push(nodes[id].right!);
        frames.push({
          line: 6,
          vars: { mode, queued: q.length, visited: output.length },
          message: `Enqueue right child ${nodes[nodes[id].right!].value}.`,
          nodeStates: {
            ...visited,
            ...Object.fromEntries(q.map((x) => [x, "frontier" as CellState])),
          },
          output: [...output],
          stack: [],
          queue: q.map((x) => nodes[x].value),
        });
      }
    }
    frames.push({
      line: 2,
      vars: { mode, queued: 0, visited: output.length },
      message: `Queue empty - traversal done: [${output.join(", ")}].`,
      nodeStates: visited,
      output: [...output],
      stack: [],
      queue: [],
    });
    return frames;
  }

  // DFS
  const callStack: { id: string; phase: number }[] = [];
  function pushCall(id: string) {
    callStack.push({ id, phase: 0 });
  }

  pushCall(root);
  frames.push({
    line: 0,
    vars: { mode, stackDepth: callStack.length, visited: 0 },
    message: `Start: call ${mode}(${nodes[root].value}).`,
    nodeStates: { [root]: "active" },
    output: [],
    stack: callStack.map((c) => nodes[c.id].value),
    queue: [],
  });

  while (callStack.length > 0) {
    const top = callStack[callStack.length - 1];
    const nd = nodes[top.id];
    const visitedMap: Record<string, CellState> = { ...visited };
    callStack.forEach((c) => {
      if (!visitedMap[c.id]) visitedMap[c.id] = "frontier";
    });
    visitedMap[top.id] = "active";

    if (mode === "inorder") {
      if (top.phase === 0) {
        frames.push({
          line: 1,
          vars: { mode, stackDepth: callStack.length, node: nd.value },
          message: `Enter inorder(${nd.value}).`,
          nodeStates: visitedMap,
          output: [...output],
          stack: callStack.map((c) => nodes[c.id].value),
          queue: [],
        });
        top.phase = 1;
        if (nd.left) {
          frames.push({
            line: 2,
            vars: { mode, stackDepth: callStack.length, node: nd.value },
            message: `Recurse left into ${nodes[nd.left].value}.`,
            nodeStates: visitedMap,
            output: [...output],
            stack: callStack.map((c) => nodes[c.id].value),
            queue: [],
          });
          pushCall(nd.left);
          continue;
        }
      }
      if (top.phase === 1) {
        output.push(nd.value);
        visited[top.id] = "done";
        frames.push({
          line: 3,
          vars: { mode, stackDepth: callStack.length, node: nd.value, visited: output.length },
          message: `Visit ${nd.value} - append to output.`,
          nodeStates: {
            ...visited,
            ...Object.fromEntries(
              callStack.map((c) => [c.id, "frontier" as CellState]),
            ),
          },
          output: [...output],
          stack: callStack.map((c) => nodes[c.id].value),
          queue: [],
        });
        top.phase = 2;
        if (nd.right) {
          frames.push({
            line: 4,
            vars: { mode, stackDepth: callStack.length, node: nd.value },
            message: `Recurse right into ${nodes[nd.right].value}.`,
            nodeStates: {
              ...visited,
              ...Object.fromEntries(
                callStack.map((c) => [c.id, "frontier" as CellState]),
              ),
            },
            output: [...output],
            stack: callStack.map((c) => nodes[c.id].value),
            queue: [],
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
          line: 2,
          vars: { mode, stackDepth: callStack.length, node: nd.value, visited: output.length },
          message: `Visit ${nd.value} - append to output.`,
          nodeStates: {
            ...visited,
            ...Object.fromEntries(
              callStack.map((c) => [c.id, "frontier" as CellState]),
            ),
          },
          output: [...output],
          stack: callStack.map((c) => nodes[c.id].value),
          queue: [],
        });
        top.phase = 1;
        if (nd.left) {
          frames.push({
            line: 3,
            vars: { mode, stackDepth: callStack.length, node: nd.value },
            message: `Recurse left into ${nodes[nd.left].value}.`,
            nodeStates: {
              ...visited,
              ...Object.fromEntries(
                callStack.map((c) => [c.id, "frontier" as CellState]),
              ),
            },
            output: [...output],
            stack: callStack.map((c) => nodes[c.id].value),
            queue: [],
          });
          pushCall(nd.left);
          continue;
        }
      }
      if (top.phase === 1) {
        top.phase = 2;
        if (nd.right) {
          frames.push({
            line: 4,
            vars: { mode, stackDepth: callStack.length, node: nd.value },
            message: `Recurse right into ${nodes[nd.right].value}.`,
            nodeStates: {
              ...visited,
              ...Object.fromEntries(
                callStack.map((c) => [c.id, "frontier" as CellState]),
              ),
            },
            output: [...output],
            stack: callStack.map((c) => nodes[c.id].value),
            queue: [],
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
          line: 1,
          vars: { mode, stackDepth: callStack.length, node: nd.value },
          message: `Enter postorder(${nd.value}).`,
          nodeStates: visitedMap,
          output: [...output],
          stack: callStack.map((c) => nodes[c.id].value),
          queue: [],
        });
        top.phase = 1;
        if (nd.left) {
          frames.push({
            line: 2,
            vars: { mode, stackDepth: callStack.length, node: nd.value },
            message: `Recurse left into ${nodes[nd.left].value}.`,
            nodeStates: visitedMap,
            output: [...output],
            stack: callStack.map((c) => nodes[c.id].value),
            queue: [],
          });
          pushCall(nd.left);
          continue;
        }
      }
      if (top.phase === 1) {
        top.phase = 2;
        if (nd.right) {
          frames.push({
            line: 3,
            vars: { mode, stackDepth: callStack.length, node: nd.value },
            message: `Recurse right into ${nodes[nd.right].value}.`,
            nodeStates: visitedMap,
            output: [...output],
            stack: callStack.map((c) => nodes[c.id].value),
            queue: [],
          });
          pushCall(nd.right);
          continue;
        }
      }
      if (top.phase === 2) {
        output.push(nd.value);
        visited[top.id] = "done";
        frames.push({
          line: 4,
          vars: {
            mode,
            stackDepth: callStack.length - 1,
            node: nd.value,
            visited: output.length,
          },
          message: `Visit ${nd.value} - append to output.`,
          nodeStates: {
            ...visited,
            ...Object.fromEntries(
              callStack.slice(0, -1).map((c) => [c.id, "frontier" as CellState]),
            ),
          },
          output: [...output],
          stack: callStack.slice(0, -1).map((c) => nodes[c.id].value),
          queue: [],
        });
        callStack.pop();
        continue;
      }
      callStack.pop();
    }
  }

  frames.push({
    line: 0,
    vars: { mode, stackDepth: 0, visited: output.length },
    message: `Done! Output: [${output.join(", ")}]`,
    nodeStates: visited,
    output: [...output],
    stack: [],
    queue: [],
  });
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Output strip                                                        */
/* ------------------------------------------------------------------ */

function OutputStrip({ values }: { values: (string | number)[] }) {
  return (
    <div className="mt-3 p-3 border border-stone-200 dark:border-white/10 rounded-md bg-stone-50 dark:bg-stone-950/40 min-h-10 flex items-center gap-2 flex-wrap">
      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
        visit order:
      </span>
      {values.length === 0 && (
        <span className="text-xs text-stone-400 italic">(empty)</span>
      )}
      {values.map((v, i) => (
        <span
          key={i}
          className="px-2 py-0.5 rounded bg-lime-400 text-stone-900 font-mono text-xs font-bold"
        >
          {v}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stack / queue display                                               */
/* ------------------------------------------------------------------ */

function StackDisplay({ items, title }: { items: (string | number)[]; title: string }) {
  return (
    <div className="flex flex-col gap-1 min-w-20">
      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">{title}</span>
      <div className="flex flex-col-reverse gap-1">
        {items.length === 0 && (
          <span className="text-xs text-stone-400 italic px-2 py-1">empty</span>
        )}
        {items.map((v, i) => (
          <div
            key={i}
            className="px-3 py-1 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded text-xs font-mono font-bold text-stone-900 dark:text-stone-50 text-center"
          >
            {v}
          </div>
        ))}
      </div>
    </div>
  );
}

function QueueDisplay({ items, title }: { items: (string | number)[]; title: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">{title}</span>
      <div className="flex gap-1 flex-wrap">
        {items.length === 0 && (
          <span className="text-xs text-stone-400 italic px-2 py-1">empty</span>
        )}
        {items.map((v, i) => (
          <div
            key={i}
            className="px-3 py-1 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded text-xs font-mono font-bold text-stone-900 dark:text-stone-50"
          >
            {v}
          </div>
        ))}
      </div>
    </div>
  );
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
  const frame = player.current;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 flex-wrap">
        {(["inorder", "preorder", "postorder", "levelorder"] as Mode[]).map((m) => (
          <PillButton key={m} onClick={() => setMode(m)} active={mode === m}>
            <span className="text-xs font-semibold">
              {m === "levelorder" ? "Level-order (BFS)" : m.charAt(0).toUpperCase() + m.slice(1)}
            </span>
          </PillButton>
        ))}
      </div>
      <AlgoCanvas
        title={`Traversal, ${mode === "levelorder" ? "BFS" : mode}`}
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
            onApply={(v) => {
              if (parseLevelOrder(v)) setInput(v);
            }}
          />
        }
        pseudocode={
          <PseudocodePanel
            lines={PSEUDO[mode]}
            activeLine={frame?.line}
            title={`${mode} pseudocode`}
          />
        }
        variables={<VariablesPanel vars={frame?.vars ?? {}} />}
      >
        <div className="flex gap-4 items-start flex-wrap">
          <div className="flex-1 min-w-64">
            <TreeViz
              nodes={tree.nodes}
              root={tree.root}
              nodeStates={frame?.nodeStates ?? {}}
              width={480}
              height={260}
            />
            <OutputStrip values={frame?.output ?? []} />
          </div>
          <div className="shrink-0">
            {mode === "levelorder" ? (
              <QueueDisplay
                items={frame?.queue ?? []}
                title="BFS Queue"
              />
            ) : (
              <StackDisplay
                items={frame?.stack ?? []}
                title="Call Stack"
              />
            )}
          </div>
        </div>
        <Callout className="mt-3">
          {frame?.message ?? "Press play to step through."}
        </Callout>
      </AlgoCanvas>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                           */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const items = [
    {
      title: "Inorder (Left, Root, Right)",
      body: "For a BST, inorder visits nodes in sorted order. Used heavily in expression tree evaluation.",
    },
    {
      title: "Preorder (Root, Left, Right)",
      body: "Clones/serializes a tree. You visit a parent before its children, so reconstruction is straightforward.",
    },
    {
      title: "Postorder (Left, Right, Root)",
      body: "Delete or compute aggregates: children are finished before the parent acts. Used in expression evaluation and tree DP.",
    },
    {
      title: "Level-order (BFS)",
      body: "Visits by depth level. Uses a FIFO queue. Used for shortest unweighted path from root and level-wise summaries.",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>why four traversals?</SectionEyebrow>
        <SectionTitle>Pick an order to visit every node once</SectionTitle>
        <Lede>
          A tree is non-linear. To process every node exactly once, you must pick an order. DFS has
          three natural variants based on when you visit the current node (before, between, or after
          recursing). BFS is the fourth, level-by-level using a queue.
        </Lede>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-600 dark:text-lime-400 tracking-widest mb-2">
              0{i + 1}
            </div>
            <SubHeading>{s.title}</SubHeading>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</p>
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
    { q: "Inorder of [1,2,3,4,5,6,7]", a: "4,2,5,1,6,3,7" },
    { q: "Preorder of [1,2,3,4,5,6,7]", a: "1,2,4,5,3,6,7" },
    { q: "Postorder of [1,2,3,4,5,6,7]", a: "4,5,2,6,7,3,1" },
    { q: "Level-order of [1,2,3,4,5,6,7]", a: "1,2,3,4,5,6,7" },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(problems.map(() => null));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>
        Tree: root=1, children 2 &amp; 3, then 4,5 under 2 and 6,7 under 3. Write each traversal.
        Comma-separated.
      </Callout>
      {problems.map((p, i) => {
        const g = (guesses[i] ?? "").replace(/\s+/g, "");
        const revealed = shown[i];
        const correct = g === p.a;
        return (
          <Card key={i}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono font-bold text-sm text-stone-400 dark:text-stone-500">
                #{i + 1}
              </span>
              <span className="text-sm text-stone-900 dark:text-stone-100 flex-1">{p.q}</span>
              <input
                type="text"
                placeholder="e.g. 1,2,3"
                value={guesses[i] ?? ""}
                onChange={(e) => {
                  const v = [...guesses];
                  v[i] = e.target.value;
                  setGuesses(v);
                }}
                className="w-36 px-2 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 font-mono text-xs outline-none focus:border-lime-400"
              />
              <button
                type="button"
                onClick={() => {
                  const v = [...shown];
                  v[i] = true;
                  setShown(v);
                }}
                className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 text-xs font-medium cursor-pointer hover:border-stone-400 dark:hover:border-white/30 transition-colors"
              >
                Reveal
              </button>
              {revealed && (
                <span
                  className={`text-xs font-bold px-3 py-1.5 rounded-md ${
                    correct
                      ? "bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-400"
                      : "bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200 border border-rose-400"
                  }`}
                >
                  {correct ? `Correct` : `Answer: ${p.a}`}
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
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>The call-stack is the recursion</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Every DFS traversal runs on a stack, either the implicit call stack (recursion) or an
          explicit Stack. BFS always uses a Queue. This is why stacks-vs-queues is a frequent
          interview question disguised as traversal.
        </p>
      </Card>
      <Card>
        <SubHeading>Reconstruction rule</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          A single traversal is ambiguous, but{" "}
          <em>preorder + inorder</em> (or <em>postorder + inorder</em>) uniquely reconstructs the
          tree. Preorder alone or postorder alone does not. This shows up often in interviews.
        </p>
      </Card>
      <Card>
        <SubHeading>Complexity</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Every traversal visits each node exactly once so O(n) time. Space is O(h) for DFS
          (h = height) and O(w) for BFS (w = max width). For a skewed tree DFS is O(n); for a
          balanced tree it is O(log n).
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Lesson export                                                       */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L3_BinaryTreeTraversals({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    {
      id: "visualize",
      label: "Visualize",
      icon: <Play className="w-4 h-4" />,
      content: <VisualizeTab />,
    },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    {
      id: "insight",
      label: "Insight",
      icon: <Lightbulb className="w-4 h-4" />,
      content: <InsightTab />,
    },
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
      question: "Which traversal of a BST yields the keys in sorted (ascending) order?",
      options: ["Preorder", "Inorder", "Postorder", "Level-order"],
      correctIndex: 1,
      explanation:
        "In a BST, left subtree < node < right subtree. Inorder (L, N, R) reads keys in ascending order.",
    },
    {
      question: "Which data structure is the underlying driver of level-order traversal?",
      options: ["Stack", "Queue", "Priority queue", "Hash map"],
      correctIndex: 1,
      explanation:
        "BFS uses a FIFO queue so nodes are processed in the order they were discovered, level by level.",
    },
    {
      question:
        "Given preorder = [1,2,4,5,3,6,7] and inorder = [4,2,5,1,6,3,7], what is the postorder?",
      options: [
        "[4,5,2,6,7,3,1]",
        "[1,2,3,4,5,6,7]",
        "[4,2,5,6,3,7,1]",
        "[7,6,3,5,4,2,1]",
      ],
      correctIndex: 0,
      explanation:
        "Reconstruct: root=1, left subtree {2,4,5}, right {3,6,7}. Postorder is L-R-N per subtree -> [4,5,2,6,7,3,1].",
    },
    {
      question: "Minimum extra space needed for iterative inorder on a tree of height h?",
      options: ["O(1)", "O(log n)", "O(h)", "O(n)"],
      correctIndex: 2,
      explanation:
        "You must remember the ancestor chain to return to after visiting the left subtree - that needs O(h) stack.",
    },
  ];

  return (
    <LessonShell
      title="Binary Tree Traversals"
      level={3}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Every tree interview starts here"
      nextLessonHint="Binary Search Trees"
      onQuizComplete={onQuizComplete}
    />
  );
}
