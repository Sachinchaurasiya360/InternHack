import { useMemo, useState } from "react";
import { BookOpen, Lightbulb, Play, Target } from "lucide-react";
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
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";

/* ------------------------------------------------------------------ */
/*  Local types                                                         */
/* ------------------------------------------------------------------ */

type CellState = "idle" | "active" | "compare" | "done" | "mismatch";
const NODE_FILL: Record<CellState, string> = {
  idle: THEME.bg,
  active: THEME.accent,
  compare: "#fde68a",
  done: THEME.accentDark,
  mismatch: "#fca5a5",
};
const NODE_TEXT: Record<CellState, string> = {
  idle: THEME.text,
  active: THEME.text,
  compare: THEME.text,
  done: "#fff",
  mismatch: "#7f1d1d",
};

/* ------------------------------------------------------------------ */
/*  AVL model                                                           */
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
function mk(v: number): AvlNode {
  return { id: `a${NEXT++}`, value: v, left: null, right: null, height: 1 };
}
function avlH(t: Avl, id: string | null): number {
  return id === null ? 0 : t[id].height;
}
function avlBF(t: Avl, id: string | null): number {
  return id === null ? 0 : avlH(t, t[id].left) - avlH(t, t[id].right);
}
function updateH(t: Avl, id: string) {
  t[id].height = 1 + Math.max(avlH(t, t[id].left), avlH(t, t[id].right));
}
function cloneAvl(t: Avl): Avl {
  const o: Avl = {};
  Object.values(t).forEach((n) => {
    o[n.id] = { ...n };
  });
  return o;
}

function rotateRight(t: Avl, yId: string): string {
  const y = t[yId];
  const xId = y.left!;
  const x = t[xId];
  const T2 = x.right;
  x.right = yId;
  y.left = T2;
  updateH(t, yId);
  updateH(t, xId);
  return xId;
}
function rotateLeft(t: Avl, xId: string): string {
  const x = t[xId];
  const yId = x.right!;
  const y = t[yId];
  const T2 = y.left;
  y.left = xId;
  x.right = T2;
  updateH(t, xId);
  updateH(t, yId);
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
  "  bf <- balanceFactor(root)",
  "  if bf > 1 and v < root.left.value:",
  "    return rotateRight(root)   # LL",
  "  if bf < -1 and v > root.right.value:",
  "    return rotateLeft(root)    # RR",
  "  if bf > 1 and v > root.left.value:",
  "    root.left <- rotateLeft(root.left); return rotateRight(root)  # LR",
  "  if bf < -1 and v < root.right.value:",
  "    root.right <- rotateRight(root.right); return rotateLeft(root)  # RL",
  "  return root",
];

function insertAvl(t: Avl, rootId: string | null, v: number, frames: Frame[]): string {
  function rec(nodeId: string | null): string {
    if (nodeId === null) {
      const n = mk(v);
      t[n.id] = n;
      frames.push({
        line: 1,
        tree: cloneAvl(t),
        rootId: rootId ?? n.id,
        nodeStates: { [n.id]: "done" },
        message: `Insert ${v} as new leaf.`,
        vars: { insert: v },
      });
      return n.id;
    }
    const nd = t[nodeId];
    frames.push({
      line: 1,
      tree: cloneAvl(t),
      rootId,
      nodeStates: { [nodeId]: "compare" },
      message: `At ${nd.value}: comparing with ${v}.`,
      vars: { insert: v, at: nd.value },
    });
    if (v < nd.value) nd.left = rec(nd.left);
    else if (v > nd.value) nd.right = rec(nd.right);
    else {
      frames.push({
        line: 1,
        tree: cloneAvl(t),
        rootId,
        nodeStates: { [nodeId]: "mismatch" },
        message: `${v} duplicate, ignored.`,
        vars: { insert: v, duplicate: "yes" },
      });
      return nodeId;
    }
    updateH(t, nodeId);
    const b = avlBF(t, nodeId);
    frames.push({
      line: 2,
      tree: cloneAvl(t),
      rootId,
      nodeStates: { [nodeId]: "active" },
      message: `Update height(${nd.value})=${nd.height}, BF=${b}.`,
      vars: { node: nd.value, height: nd.height, BF: b },
    });
    if (b > 1 && nd.left && v < t[nd.left].value) {
      frames.push({
        line: 5,
        tree: cloneAvl(t),
        rootId,
        nodeStates: { [nodeId]: "mismatch" },
        message: `Imbalance at ${nd.value} (BF=${b}), LL case -> rotate right.`,
        vars: { node: nd.value, BF: b, case: "LL" },
        rotation: "LL",
      });
      const newRoot = rotateRight(t, nodeId);
      frames.push({
        line: 6,
        tree: cloneAvl(t),
        rootId: rootId === nodeId ? newRoot : rootId,
        nodeStates: { [newRoot]: "done" },
        message: `Rotated right. ${t[newRoot].value} is new subtree root.`,
        vars: { node: t[newRoot].value },
      });
      return newRoot;
    }
    if (b < -1 && nd.right && v > t[nd.right].value) {
      frames.push({
        line: 7,
        tree: cloneAvl(t),
        rootId,
        nodeStates: { [nodeId]: "mismatch" },
        message: `Imbalance at ${nd.value} (BF=${b}), RR case -> rotate left.`,
        vars: { node: nd.value, BF: b, case: "RR" },
        rotation: "RR",
      });
      const newRoot = rotateLeft(t, nodeId);
      frames.push({
        line: 8,
        tree: cloneAvl(t),
        rootId: rootId === nodeId ? newRoot : rootId,
        nodeStates: { [newRoot]: "done" },
        message: `Rotated left. ${t[newRoot].value} is new subtree root.`,
        vars: { node: t[newRoot].value },
      });
      return newRoot;
    }
    if (b > 1 && nd.left && v > t[nd.left].value) {
      frames.push({
        line: 9,
        tree: cloneAvl(t),
        rootId,
        nodeStates: { [nodeId]: "mismatch" },
        message: `LR case at ${nd.value}, left-rotate child, then right-rotate ${nd.value}.`,
        vars: { node: nd.value, BF: b, case: "LR" },
        rotation: "LR",
      });
      nd.left = rotateLeft(t, nd.left!);
      frames.push({
        line: 10,
        tree: cloneAvl(t),
        rootId,
        nodeStates: { [nd.left]: "active" },
        message: `Inner rotation done. Now rotate right at ${nd.value}.`,
        vars: { case: "LR" },
      });
      const newRoot = rotateRight(t, nodeId);
      frames.push({
        line: 10,
        tree: cloneAvl(t),
        rootId: rootId === nodeId ? newRoot : rootId,
        nodeStates: { [newRoot]: "done" },
        message: `LR rotation complete. New subtree root: ${t[newRoot].value}.`,
        vars: { node: t[newRoot].value },
      });
      return newRoot;
    }
    if (b < -1 && nd.right && v < t[nd.right].value) {
      frames.push({
        line: 11,
        tree: cloneAvl(t),
        rootId,
        nodeStates: { [nodeId]: "mismatch" },
        message: `RL case at ${nd.value}, right-rotate child, then left-rotate ${nd.value}.`,
        vars: { node: nd.value, BF: b, case: "RL" },
        rotation: "RL",
      });
      nd.right = rotateRight(t, nd.right!);
      frames.push({
        line: 12,
        tree: cloneAvl(t),
        rootId,
        nodeStates: { [nd.right]: "active" },
        message: `Inner rotation done. Now rotate left at ${nd.value}.`,
        vars: { case: "RL" },
      });
      const newRoot = rotateLeft(t, nodeId);
      frames.push({
        line: 12,
        tree: cloneAvl(t),
        rootId: rootId === nodeId ? newRoot : rootId,
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
  const p = s
    .split(/[,\s]+/)
    .map((x) => x.trim())
    .filter(Boolean)
    .map(Number);
  if (p.some((n) => Number.isNaN(n))) return null;
  return p;
}

function buildFrames(values: number[]): Frame[] {
  NEXT = 1;
  const t: Avl = {};
  let rootId: string | null = null;
  const frames: Frame[] = [];
  frames.push({
    line: 0,
    tree: {},
    rootId: null,
    nodeStates: {},
    message: `Empty AVL. Inserting: [${values.join(", ")}].`,
    vars: { pending: values.length },
  });
  for (const v of values) {
    rootId = insertAvl(t, rootId, v, frames);
    frames.push({
      line: 13,
      tree: cloneAvl(t),
      rootId,
      nodeStates: Object.fromEntries(
        Object.keys(t).map((k) => [k, "done" as CellState]),
      ),
      message: `After inserting ${v}. Height=${rootId ? t[rootId].height : 0}.`,
      vars: { inserted: v, height: rootId ? t[rootId].height : 0 },
    });
  }
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Local AVL SVG visualizer with BF labels                            */
/* ------------------------------------------------------------------ */

function computeAvlLayout(
  t: Avl,
  root: string | null,
): Record<string, { x: number; y: number }> {
  const pos: Record<string, { x: number; y: number }> = {};
  let col = 0;
  function walk(id: string | null, depth: number) {
    if (!id || !t[id]) return;
    walk(t[id].left, depth + 1);
    pos[id] = { x: col++, y: depth };
    walk(t[id].right, depth + 1);
  }
  walk(root, 0);
  return pos;
}

function AvlTreeViz({
  tree,
  rootId,
  nodeStates,
  width = 600,
  height = 320,
}: {
  tree: Avl;
  rootId: string | null;
  nodeStates: Record<string, CellState>;
  width?: number;
  height?: number;
}) {
  const pos = useMemo(() => computeAvlLayout(tree, rootId), [tree, rootId]);
  const n = Object.keys(pos).length;
  if (n === 0) {
    return (
      <svg width={width} height={60} viewBox={`0 0 ${width} 60`}>
        <text
          x={width / 2}
          y={35}
          textAnchor="middle"
          fontSize={13}
          fill={THEME.textMuted}
          fontFamily={THEME.heading}
        >
          (empty tree)
        </text>
      </svg>
    );
  }
  const PAD = 36;
  const xScale = n > 1 ? (width - PAD * 2) / (n - 1) : 0;
  const maxD = Math.max(0, ...Object.values(pos).map((p) => p.y));
  const yScale = maxD > 0 ? (height - PAD * 2 - 30) / maxD : 0;
  const R = 18;
  const px = (id: string) => PAD + pos[id].x * xScale;
  const py = (id: string) => PAD + pos[id].y * yScale;
  const ids = Object.keys(tree).filter((id) => pos[id]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      style={{ height: "auto", maxHeight: height }}
    >
      {ids.map((id) =>
        ([tree[id].left, tree[id].right].filter(Boolean) as string[])
          .filter((cid) => pos[cid])
          .map((cid) => (
            <line
              key={`${id}-${cid}`}
              x1={px(id)}
              y1={py(id)}
              x2={px(cid)}
              y2={py(cid)}
              stroke={THEME.border}
              strokeWidth={1.8}
            />
          )),
      )}
      {ids.map((id) => {
        const state = nodeStates[id] ?? "idle";
        const bf = avlBF(tree, id);
        return (
          <g key={id}>
            <circle
              cx={px(id)}
              cy={py(id)}
              r={R}
              fill={NODE_FILL[state]}
              stroke={state === "active" || state === "done" ? THEME.accentDark : THEME.border}
              strokeWidth={state === "active" || state === "done" ? 2.5 : 1.5}
            />
            <text
              x={px(id)}
              y={py(id) + 4}
              textAnchor="middle"
              fontSize={11}
              fontWeight={700}
              fill={NODE_TEXT[state]}
              fontFamily={THEME.mono}
            >
              {tree[id].value}
            </text>
            <text
              x={px(id)}
              y={py(id) + R + 11}
              textAnchor="middle"
              fontSize={9}
              fill={Math.abs(bf) > 1 ? "#dc2626" : THEME.textMuted}
              fontFamily={THEME.mono}
            >
              BF={bf}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                       */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [input, setInput] = useState("30, 20, 40, 10, 25, 35, 50, 5");
  const parsed = useMemo(
    () => parseArr(input) ?? [30, 20, 40, 10, 25, 35, 50, 5],
    [input],
  );
  const frames = useMemo(() => buildFrames(parsed), [parsed]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="AVL Insertion with Rotations"
      player={player}
      input={
        <InputEditor
          label="Insert sequence"
          value={input}
          placeholder="e.g. 10, 20, 30 -> triggers LL"
          helper="Each insert shows BF update and any rotation. BF shown under each node."
          presets={[
            { label: "LL rotation", value: "30, 20, 10" },
            { label: "RR rotation", value: "10, 20, 30" },
            { label: "LR rotation", value: "30, 10, 20" },
            { label: "RL rotation", value: "10, 30, 20" },
            { label: "Mixed", value: "30, 20, 40, 10, 25, 35, 50, 5" },
          ]}
          onApply={(v) => {
            if (parseArr(v)) setInput(v);
          }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} />}
    >
      <div className="flex flex-col items-center gap-3">
        <AvlTreeViz
          tree={frame?.tree ?? {}}
          rootId={frame?.rootId ?? null}
          nodeStates={frame?.nodeStates ?? {}}
          width={600}
          height={320}
        />
        {frame?.rotation && (
          <div className="px-4 py-2 border-2 border-rose-400 bg-rose-50 dark:bg-rose-500/10 rounded-md font-mono text-sm font-bold text-rose-700 dark:text-rose-300">
            {frame.rotation} rotation
          </div>
        )}
        <div className="text-xs text-stone-500 font-mono">
          BF &gt; 1 = left-heavy · BF &lt; -1 = right-heavy · |BF| &le; 1 = balanced · each node shows BF
        </div>
        <Callout className="w-full">
          {frame?.message ?? "Press play to step through."}
        </Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                           */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const items = [
    {
      title: "Balance factor (BF)",
      body: "BF(node) = height(left) - height(right). An AVL tree keeps |BF| <= 1 at every node. If an insertion breaks that, we rotate.",
    },
    {
      title: "Four rotation cases",
      body: "LL, RR, LR, RL, named after where the new value went. LL and RR are single rotations. LR and RL are double (two single rotations stacked).",
    },
    {
      title: "Why O(log n) is guaranteed",
      body: "Height of an AVL with n nodes is O(log n), formally h <= 1.44 * log2(n+2). So insert/delete/search are all strictly O(log n) unlike plain BST.",
    },
    {
      title: "Insert cost",
      body: "Standard BST insert (O(log n)) + possibly one rotation fix walk up (O(log n)). Delete may trigger O(log n) rotations along the path.",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>why AVL exists</SectionEyebrow>
        <SectionTitle>Self-balancing through local rotations</SectionTitle>
        <Lede>
          A plain BST can degenerate to a chain. AVL repairs imbalance immediately using local
          rotations, small O(1) pointer surgeries that preserve the BST invariant while keeping
          height logarithmic.
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
    { q: "Insert 10,20,30 into empty AVL. Which rotation?", a: "RR" },
    { q: "Insert 30,20,10 into empty AVL. Which rotation?", a: "LL" },
    { q: "Insert 30,10,20 into empty AVL. Which rotation?", a: "LR" },
    { q: "Final root after inserting 10,20,30?", a: "20" },
  ];
  const [g, setG] = useState<(string | null)[]>(problems.map(() => null));
  const [s, setS] = useState<boolean[]>(problems.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Figure out the rotation type by looking at the path to the new value.</Callout>
      {problems.map((p, i) => {
        const gv = (g[i] ?? "").trim().toUpperCase();
        const correct = gv === p.a.toUpperCase();
        return (
          <Card key={i}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono font-bold text-sm text-stone-400 dark:text-stone-500">
                #{i + 1}
              </span>
              <span className="text-sm text-stone-900 dark:text-stone-100 flex-1">{p.q}</span>
              <input
                type="text"
                placeholder="e.g. LL"
                value={g[i] ?? ""}
                onChange={(e) => {
                  const v = [...g];
                  v[i] = e.target.value;
                  setG(v);
                }}
                className="w-24 px-2 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 font-mono text-xs outline-none focus:border-lime-400"
              />
              <button
                type="button"
                onClick={() => {
                  const v = [...s];
                  v[i] = true;
                  setS(v);
                }}
                className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 text-xs font-medium cursor-pointer hover:border-stone-400 dark:hover:border-white/30 transition-colors"
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
        <SubHeading>Rotations preserve inorder</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Key insight: left and right rotations <em>never change the inorder sequence</em>. That is
          why they preserve the BST invariant for free. The same idea powers AVL, Red-Black trees,
          and splay trees.
        </p>
      </Card>
      <Card>
        <SubHeading>AVL vs Red-Black</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          AVL is stricter (|BF| &le; 1) so lookups are a hair faster. Red-Black is looser so it does
          fewer rotations on insert/delete. Result: RB dominates language std-libs (C++{" "}
          <code className="font-mono text-xs bg-stone-100 dark:bg-stone-800 px-1 rounded">map</code>
          , Java{" "}
          <code className="font-mono text-xs bg-stone-100 dark:bg-stone-800 px-1 rounded">TreeMap</code>
          ) while AVL appears in databases where reads dominate.
        </p>
      </Card>
      <Card>
        <SubHeading>Minimum nodes for height h</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          N(h) = N(h-1) + N(h-2) + 1, this is the Fibonacci-like recursion behind the tight
          1.44 * log bound. Interviewers love this derivation.
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

export default function L3_AVL({ onQuizComplete }: Props) {
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
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "An AVL tree requires |BF| <= 1 at every node. BF is defined as:",
      options: [
        "height(right) - height(left)",
        "height(left) - height(right)",
        "number of leaves",
        "depth of the node",
      ],
      correctIndex: 1,
      explanation:
        "Standard convention: BF(n) = h(left) - h(right). Positive -> left-heavy, negative -> right-heavy.",
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
      explanation:
        "LR: first rotate the left child left (converts to LL shape), then rotate the root right.",
    },
    {
      question: "Maximum height of an AVL tree with 7 nodes?",
      options: ["2", "3", "4", "6"],
      correctIndex: 1,
      explanation:
        "Minimum nodes for height 3 is N(3) = N(2)+N(1)+1 = 4+2+1 = 7. So 7 nodes can fit in an AVL of height 3.",
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
      explanation:
        "A rotation swaps 3 pointers locally. The height fix-up is also constant-work per node on the path.",
    },
  ];

  return (
    <LessonShell
      title="AVL Trees"
      level={3}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Balanced trees power std::map, TreeMap and DB indexes"
      nextLessonHint="Red-Black Trees"
      onQuizComplete={onQuizComplete}
    />
  );
}
