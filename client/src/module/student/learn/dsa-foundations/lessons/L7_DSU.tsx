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

const PRACTICE_TOPIC_SLUG: string | null = "union-find";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  parent: number[];
  rank: number[];
  components: number;
  highlighted: number[];
  compressed: number[];
  highlightKey?: string;
}

/* ------------------------------------------------------------------ */
/*  DSU simulator                                                       */
/* ------------------------------------------------------------------ */

const PSEUDO = [
  "function find(x):",
  "  if parent[x] != x:",
  "    parent[x] <- find(parent[x])   # path compression",
  "  return parent[x]",
  "",
  "function union(x, y):",
  "  rx <- find(x); ry <- find(y)",
  "  if rx = ry: return",
  "  if rank[rx] < rank[ry]: swap(rx, ry)",
  "  parent[ry] <- rx",
  "  if rank[rx] = rank[ry]: rank[rx] += 1",
  "  components -= 1",
];

function cloneArr(a: number[]): number[] { return a.slice(); }

function traceFind(parent: number[], x: number, frames: Frame[], rank: number[], components: number): number {
  const path: number[] = [];
  let cur = x;
  while (parent[cur] !== cur) { path.push(cur); cur = parent[cur]; }
  const root = cur;
  path.push(root);
  frames.push({
    line: 0,
    vars: { x, path: path.join("->"), root, components },
    message: `find(${x}) - walk the parent chain to the root.`,
    parent: cloneArr(parent), rank: cloneArr(rank), components,
    highlighted: path.slice(),
    compressed: [],
  });
  const toCompress: number[] = [];
  for (let i = 0; i < path.length - 1; i++) {
    if (parent[path[i]] !== root) toCompress.push(path[i]);
    parent[path[i]] = root;
  }
  if (toCompress.length > 0) {
    frames.push({
      line: 2,
      vars: { x, root, components },
      message: `Path compression - re-attach ${toCompress.join(", ")} directly to root ${root}.`,
      parent: cloneArr(parent), rank: cloneArr(rank), components,
      highlighted: [root],
      compressed: toCompress,
    });
  }
  return root;
}

function buildFrames(n: number, ops: { kind: "union" | "find"; a: number; b?: number }[]): Frame[] {
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = new Array(n).fill(0);
  let components = n;
  const frames: Frame[] = [];

  frames.push({
    line: 0, vars: { n, components },
    message: `Start - ${n} isolated nodes. components = ${n}.`,
    parent: cloneArr(parent), rank: cloneArr(rank), components,
    highlighted: [], compressed: [],
  });

  for (const op of ops) {
    if (op.kind === "find") {
      if (op.a < 0 || op.a >= n) continue;
      traceFind(parent, op.a, frames, rank, components);
      continue;
    }
    const a = op.a, b = op.b!;
    if (a < 0 || a >= n || b < 0 || b >= n) continue;
    frames.push({
      line: 5, vars: { x: a, y: b, components },
      message: `union(${a}, ${b}) - find roots of each.`,
      parent: cloneArr(parent), rank: cloneArr(rank), components,
      highlighted: [a, b], compressed: [],
    });
    const rx0 = traceFind(parent, a, frames, rank, components);
    const ry0 = traceFind(parent, b, frames, rank, components);
    let rx = rx0, ry = ry0;
    if (rx === ry) {
      frames.push({
        line: 7, vars: { x: a, y: b, rx, ry, components },
        message: `Roots identical (${rx}) - already in same component.`,
        parent: cloneArr(parent), rank: cloneArr(rank), components,
        highlighted: [rx], compressed: [],
      });
      continue;
    }
    if (rank[rx] < rank[ry]) { const t = rx; rx = ry; ry = t; }
    frames.push({
      line: 8, vars: { rx, ry, "rank[rx]": rank[rx], "rank[ry]": rank[ry], components },
      message: `Attach smaller tree (root ${ry}, rank ${rank[ry]}) under larger (root ${rx}, rank ${rank[rx]}).`,
      parent: cloneArr(parent), rank: cloneArr(rank), components,
      highlighted: [rx, ry], compressed: [],
    });
    parent[ry] = rx;
    if (rank[rx] === rank[ry]) rank[rx] += 1;
    components -= 1;
    frames.push({
      line: 11, vars: { rx, ry, components },
      message: `Merged. components = ${components}.`,
      parent: cloneArr(parent), rank: cloneArr(rank), components,
      highlighted: [rx], compressed: [], highlightKey: "components",
    });
  }

  frames.push({
    line: 0, vars: { components },
    message: `Done - ${components} component(s) remain.`,
    parent: cloneArr(parent), rank: cloneArr(rank), components,
    highlighted: [], compressed: [],
  });
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Forest renderer (local SVG-based)                                  */
/* ------------------------------------------------------------------ */

const ROOT_COLORS = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#06b6d4", "#f97316"];

interface TreeLayout {
  id: number;
  x: number;
  y: number;
  parentId?: number;
}

function layoutTree(root: number, children: Record<number, number[]>, depth = 0, xOffset = { val: 0 }): TreeLayout[] {
  const nodes: TreeLayout[] = [];
  const kids = children[root] ?? [];
  if (kids.length === 0) {
    nodes.push({ id: root, x: xOffset.val, y: depth });
    xOffset.val++;
  } else {
    const startX = xOffset.val;
    for (const child of kids) {
      layoutTree(child, children, depth + 1, xOffset).forEach((n) => nodes.push({ ...n, parentId: n.id === child ? root : n.parentId }));
    }
    const endX = xOffset.val - 1;
    nodes.push({ id: root, x: (startX + endX) / 2, y: depth });
  }
  return nodes;
}

function Forest({ frame }: { frame: Frame }) {
  const { parent, rank, highlighted, compressed } = frame;
  const n = parent.length;

  const roots: number[] = [];
  for (let i = 0; i < n; i++) if (parent[i] === i) roots.push(i);

  const colorByRoot: Record<number, string> = {};
  roots.forEach((r, i) => { colorByRoot[r] = ROOT_COLORS[i % ROOT_COLORS.length]; });

  const getRoot = (x: number): number => {
    while (parent[x] !== x) x = parent[x];
    return x;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 flex-wrap justify-center">
        {roots.map((r) => {
          const children: Record<number, number[]> = {};
          for (let i = 0; i < n; i++) children[i] = [];
          for (let i = 0; i < n; i++) {
            if (parent[i] !== i && getRoot(i) === r) {
              (children[parent[i]] ||= []).push(i);
            }
          }

          const xOff = { val: 0 };
          const layout = layoutTree(r, children, 0, xOff);
          const nodeMap: Record<number, TreeLayout> = {};
          layout.forEach((l) => { nodeMap[l.id] = l; });

          const maxX = Math.max(...layout.map((l) => l.x), 0);
          const maxY = Math.max(...layout.map((l) => l.y), 0);
          const cellW = 52;
          const cellH = 60;
          const W = Math.max(100, (maxX + 1) * cellW);
          const H = Math.max(80, (maxY + 1) * cellH);
          const color = colorByRoot[r];

          const px = (x: number) => x * cellW + cellW / 2;
          const py = (y: number) => y * cellH + 28;

          return (
            <div
              key={r}
              className="rounded-lg p-2"
              style={{ border: `2px solid ${color}`, background: `${color}11` }}
            >
              <div
                className="text-[10px] font-bold uppercase tracking-wider text-center mb-1 font-sans"
                style={{ color }}
              >
                root {r}
              </div>
              <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: "block" }}>
                {layout.map((node) => {
                  if (node.parentId === undefined) return null;
                  const p2 = nodeMap[node.parentId];
                  if (!p2) return null;
                  return (
                    <line
                      key={`e-${node.id}`}
                      x1={px(p2.x)} y1={py(p2.y)}
                      x2={px(node.x)} y2={py(node.y)}
                      stroke="#94a3b8"
                      strokeWidth={1.5}
                    />
                  );
                })}
                {layout.map((node) => {
                  const isHighlighted = highlighted.includes(node.id);
                  const isCompressed = compressed.includes(node.id);
                  const fill = isCompressed ? "#fbbf24" : isHighlighted ? "#3b82f6" : "#f5f5f4";
                  const textColor = (isCompressed || isHighlighted) ? "#fff" : THEME.text;
                  return (
                    <g key={`n-${node.id}`}>
                      <circle
                        cx={px(node.x)} cy={py(node.y)} r={16}
                        fill={fill}
                        stroke={node.id === r ? color : THEME.border}
                        strokeWidth={node.id === r ? 2.5 : 1.5}
                      />
                      <text
                        x={px(node.x)} y={py(node.y) + 4}
                        textAnchor="middle"
                        fontSize={12}
                        fontWeight={700}
                        fill={textColor}
                        fontFamily="ui-monospace, monospace"
                      >
                        {node.id}
                      </text>
                      {node.id === r && rank[node.id] > 0 && (
                        <text
                          x={px(node.x) + 18} y={py(node.y) - 12}
                          fontSize={9}
                          fill={color}
                          fontFamily="ui-monospace, monospace"
                          fontWeight={700}
                        >
                          r={rank[node.id]}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <span
          className="font-bold px-3 py-1 rounded-md text-sm font-sans"
          style={{ background: `${THEME.accent}10`, color: THEME.accent }}
        >
          components: {frame.components}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Input parsing                                                       */
/* ------------------------------------------------------------------ */

function parseOps(s: string): { n: number; ops: { kind: "union" | "find"; a: number; b?: number }[] } | null {
  const lines = s.split(/[;\n]+/).map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return null;
  const n = Number(lines[0]);
  if (!Number.isFinite(n) || n < 1 || n > 12) return null;
  const ops: { kind: "union" | "find"; a: number; b?: number }[] = [];
  for (let i = 1; i < lines.length; i++) {
    const ln = lines[i].toLowerCase();
    const mu = ln.match(/^union\s*\(?\s*(\d+)\s*[,\s]\s*(\d+)\s*\)?$/);
    const mf = ln.match(/^find\s*\(?\s*(\d+)\s*\)?$/);
    if (mu) ops.push({ kind: "union", a: Number(mu[1]), b: Number(mu[2]) });
    else if (mf) ops.push({ kind: "find", a: Number(mf[1]) });
    else return null;
  }
  return { n, ops };
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                           */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [src, setSrc] = useState("7\nunion(0, 1)\nunion(2, 3)\nunion(0, 2)\nunion(4, 5)\nunion(6, 4)\nfind(3)\nfind(6)");
  const parsed = parseOps(src);
  const { n, ops } = parsed ?? { n: 6, ops: [] };
  const frames = useMemo(() => buildFrames(n, ops), [n, ops]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="Disjoint Set Union - Union by Rank + Path Compression"
      player={player}
      input={
        <InputEditor
          label="Operations (first line: n; then union/find)"
          value={src}
          placeholder="n\nunion(a,b)\nfind(x)"
          helper="Semicolon or newline separated. 1 <= n <= 12."
          presets={[
            { label: "Chain", value: "6\nunion(0,1)\nunion(1,2)\nunion(2,3)\nunion(3,4)\nfind(0)" },
            { label: "Compress", value: "5\nunion(0,1)\nunion(2,3)\nunion(1,3)\nfind(0)" },
            { label: "Disjoint", value: "8\nunion(0,1)\nunion(2,3)\nunion(4,5)\nunion(6,7)" },
            { label: "Same root", value: "4\nunion(0,1)\nunion(1,2)\nunion(0,2)" },
          ]}
          onApply={(v) => { if (parseOps(v)) setSrc(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div className="flex flex-col gap-3.5">
        {frame && <Forest frame={frame} />}
        <div className="flex gap-3.5 flex-wrap text-xs text-stone-500">
          <span><strong className="text-blue-500">active</strong> - node being visited</span>
          <span><strong className="text-amber-400">path</strong> - just re-pointed (path compression)</span>
          <span>colored border = distinct component</span>
        </div>
        <Callout>{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "The problem", body: "Given n items, support two operations fast: union(x, y) merges the groups of x and y; find(x) returns a canonical representative (root) of x's group. Two elements are in the same set iff find(x) = find(y)." },
    { title: "Trees in disguise", body: "Each set is stored as a tree. Every element points to its parent; the root points to itself. Elements never move; only the parent pointer changes. Two optimisations keep trees near-flat." },
    { title: "Union by rank", body: "Rank is approximately tree height. Attach the shorter tree under the taller one so height grows at most by 1 when ranks tie. Prevents pathological chains." },
    { title: "Path compression", body: "During find(x), after we reach the root r, re-point every node on the walked path directly to r. Next find on any of them is O(1)." },
    { title: "Amortized complexity", body: "With both tricks, m operations on n elements run in O(m x alpha(n)), where alpha is the inverse Ackermann function, effectively <= 4 for any n in the universe. Treat it as O(1) per op." },
    { title: "Where it appears", body: "Kruskal's MST (detect cycles when adding edges), connected components in a dynamic graph, offline LCA, Union-Find on grids, and many interview questions on equivalence classes." },
  ];
  return (
    <div className="flex flex-col gap-3.5">
      <div>
        <SectionEyebrow>Forest of trees</SectionEyebrow>
        <SectionTitle>Mental model: each set is a tree, root is the name tag</SectionTitle>
        <Lede>
          A DSU is a forest. Each tree is a set. The root is the set&rsquo;s name tag. Union glues two
          trees by attaching the shorter root under the taller. Find walks up to the root, then
          flattens the path for future queries.
        </Lede>
      </div>
      <div className="grid gap-2.5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {sections.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-600 dark:text-lime-400 mb-1.5 tracking-widest">
              0{i + 1}
            </div>
            <div className="font-bold text-sm text-stone-900 dark:text-stone-50 mb-1">{s.title}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                              */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Start with n = 5. After union(0,1), union(2,3), union(0,3). How many components?", answer: "2" },
    { q: "n = 4, all ranks 0. After union(0,1) then union(2,3) then union(0,2), what is rank of the final root?", answer: "2" },
    { q: "After calling find(x) with path compression on a chain 4->3->2->1->0, what is parent[3]?", answer: "0" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>
        Work out each scenario on paper (draw the forest!) then reveal. These are classic interview-style questions.
      </Callout>
      {problems.map((p, i) => {
        const correct = guesses[i].trim() === p.answer;
        return (
          <Card key={i}>
            <div className="text-sm text-stone-900 dark:text-stone-50 mb-2.5 leading-relaxed">{p.q}</div>
            <div className="flex gap-2 items-center flex-wrap">
              <input
                value={guesses[i]}
                onChange={(e) => { const g = [...guesses]; g[i] = e.target.value; setGuesses(g); }}
                placeholder="your answer"
                className="px-2.5 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 font-mono text-sm w-28 outline-none focus:border-lime-400"
              />
              <button
                type="button"
                onClick={() => { const s = [...shown]; s[i] = true; setShown(s); }}
                className="px-3 py-1.5 rounded-md text-xs font-bold border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 cursor-pointer hover:border-stone-400 dark:hover:border-white/30 transition-colors"
              >
                Reveal
              </button>
              {shown[i] && (
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-md"
                  style={{
                    color: correct ? THEME.successDark : THEME.danger,
                    background: correct ? `${THEME.success}14` : `${THEME.danger}14`,
                  }}
                >
                  {correct ? `Correct: ${p.answer}` : `Answer: ${p.answer}`}
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
/*  Insight                                                             */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-3">
      <Card>
        <SubHeading>Why two tricks, not one</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Union-by-rank alone gives O(log n) per operation. Path compression alone gives O(log n) amortized.
          Together the proved bound is O(alpha(n)), which is a slowly growing function <= 4 for n below
          the number of atoms in the observable universe. Effectively constant.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview traps</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed pl-5 list-disc space-y-1">
          <li>Rank is NOT size. Rank only changes when both trees being unioned had equal rank.</li>
          <li>After union, the smaller tree&rsquo;s root&rsquo;s rank is unchanged. Only the winning root&rsquo;s rank may increment.</li>
          <li>Path compression modifies parent pointers but never rank.</li>
          <li>Components count decreases by 1 per successful union, not per call.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity export                                                     */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L7_DSU({ onQuizComplete }: Props) {
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
      question: "With union-by-rank + path compression, the amortized cost of m operations on n elements is:",
      options: ["O(m log n)", "O(m · α(n))", "O(m √n)", "O(m)"],
      correctIndex: 1,
      explanation: "Tarjan's classic result: O(m · α(n)) where α is the inverse Ackermann function, effectively <= 4.",
    },
    {
      question: "In union-by-rank, when is the rank of the combined root incremented?",
      options: ["Always", "When both roots had equal rank", "When one rank was 0", "Never, only path compression changes rank"],
      correctIndex: 1,
      explanation: "Rank only grows when two equal-rank trees merge. Otherwise the taller absorbs the shorter without changing height.",
    },
    {
      question: "Start with parent = [0,1,2,3,4]. After union(0,1), union(2,3), union(0,2) (all ranks start 0, union-by-rank), what is parent[3]?",
      options: ["0", "2", "3", "1"],
      correctIndex: 1,
      explanation: "union(0,1): rank[0]=1, parent[1]=0. union(2,3): rank[2]=1, parent[3]=2. union(0,2): ranks equal (1,1) - attach root 2 under 0; parent[2]=0. parent[3] was set to 2 earlier and unchanged until a find; it is 2.",
    },
    {
      question: "What does path compression modify?",
      options: ["Only the rank array", "The parent array, pointing every node on the find path to the root", "Both rank and parent", "The component count"],
      correctIndex: 1,
      explanation: "Path compression re-points parent pointers along the traversed path directly to the root; rank is unaffected.",
    },
  ];

  return (
    <LessonShell
      title="Disjoint Set Union (Union-Find)"
      level={7}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Medium - Kruskal's MST, connectivity, equivalence grouping"
      nextLessonHint="Advanced Data Structures"
      onQuizComplete={onQuizComplete}
    />
  );
}
