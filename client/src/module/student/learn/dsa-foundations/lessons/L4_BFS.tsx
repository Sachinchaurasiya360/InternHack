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
  InlineCode,
  Lede,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "graph";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type NodeState = "default" | "frontier" | "active" | "done";

interface BFSFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodeStates: Record<string, NodeState>;
  nodeDist: Record<string, number | undefined>;
  treeEdges: Set<string>;
  queue: string[];
  flashKey?: string;
}

/* ------------------------------------------------------------------ */
/*  Parse                                                              */
/* ------------------------------------------------------------------ */

function parseEdgeList(input: string): { nodeIds: string[]; edges: { from: string; to: string }[] } | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string }[] = [];
  const ids = new Set<string>();
  for (const tok of tokens) {
    const m = tok.match(/^([A-Za-z0-9_]+)[-:]([A-Za-z0-9_]+)$/);
    if (!m) return null;
    edges.push({ from: m[1], to: m[2] });
    ids.add(m[1]);
    ids.add(m[2]);
  }
  return { nodeIds: [...ids].sort(), edges };
}

function autoLayout(ids: string[], cx = 300, cy = 150, r = 110): Record<string, { x: number; y: number }> {
  const out: Record<string, { x: number; y: number }> = {};
  const n = ids.length;
  ids.forEach((id, i) => {
    const ang = (2 * Math.PI * i) / Math.max(1, n) - Math.PI / 2;
    out[id] = { x: cx + r * Math.cos(ang), y: cy + r * Math.sin(ang) };
  });
  return out;
}

/* ------------------------------------------------------------------ */
/*  BFS Frame builder                                                  */
/* ------------------------------------------------------------------ */

const PSEUDO = [
  "BFS(G, s):",
  "  for each v in V: dist[v] ← ∞",
  "  dist[s] ← 0",
  "  Q ← empty queue",
  "  enqueue(Q, s)",
  "  while Q not empty:",
  "    u ← dequeue(Q)",
  "    for each neighbor v of u:",
  "      if dist[v] = ∞:",
  "        dist[v] ← dist[u] + 1",
  "        parent[v] ← u",
  "        enqueue(Q, v)",
];

function buildBFSFrames(
  ids: string[],
  edges: { from: string; to: string }[],
  source: string,
): BFSFrame[] {
  const f: BFSFrame[] = [];
  if (!ids.includes(source)) {
    f.push({ line: 0, vars: {}, message: `Source '${source}' not in graph`, nodeStates: {}, nodeDist: {}, treeEdges: new Set(), queue: [] });
    return f;
  }
  const adj: Record<string, string[]> = Object.fromEntries(ids.map((id) => [id, []]));
  for (const e of edges) { adj[e.from].push(e.to); adj[e.to].push(e.from); }
  for (const id of ids) adj[id].sort();

  const dist: Record<string, number | undefined> = Object.fromEntries(ids.map((id) => [id, undefined]));
  const state: Record<string, NodeState> = Object.fromEntries(ids.map((id) => [id, "default"]));
  const treeEdges = new Set<string>();

  const cloneF = (patch: Partial<BFSFrame>, q: string[]): BFSFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    nodeStates: { ...state },
    nodeDist: { ...dist },
    treeEdges: new Set(treeEdges),
    queue: [...q],
    flashKey: patch.flashKey,
  });

  f.push(cloneF({ line: 1, message: "Set dist[v] = ∞ for every vertex." }, []));
  dist[source] = 0;
  f.push(cloneF({ line: 2, message: `Set dist[source=${source}] = 0.`, flashKey: source }, []));

  const Q: string[] = [source];
  state[source] = "frontier";
  f.push(cloneF({ line: 4, message: `Enqueue source ${source}.`, vars: { u: "-", "|Q|": Q.length } }, [...Q]));

  while (Q.length) {
    f.push(cloneF({ line: 5, message: "Queue not empty, continue.", vars: { "|Q|": Q.length } }, [...Q]));
    const u = Q.shift()!;
    state[u] = "active";
    f.push(cloneF({ line: 6, message: `Dequeue u = ${u}. Mark active.`, vars: { u, "|Q|": Q.length, [`dist[${u}]`]: dist[u] ?? "∞" } }, [...Q]));

    for (const v of adj[u]) {
      f.push(cloneF({ line: 7, message: `Look at neighbor ${v} of ${u}.`, vars: { u, v, [`dist[${v}]`]: dist[v] ?? "∞" } }, [...Q]));
      if (dist[v] === undefined) {
        dist[v] = (dist[u] ?? 0) + 1;
        state[v] = "frontier";
        treeEdges.add(`${u}-${v}`);
        Q.push(v);
        f.push(cloneF({ line: 9, message: `dist[${v}] was ∞, set dist[${v}] = ${dist[v]}.`, flashKey: v, vars: { u, v, [`dist[${v}]`]: dist[v] } }, [...Q]));
        f.push(cloneF({ line: 11, message: `Enqueue ${v}.`, vars: { u, v, "|Q|": Q.length } }, [...Q]));
      } else {
        f.push(cloneF({ line: 8, message: `dist[${v}] already set (${dist[v]}). Skip.`, vars: { u, v, [`dist[${v}]`]: dist[v] } }, [...Q]));
      }
    }

    state[u] = "done";
    f.push(cloneF({ line: 5, message: `Finished processing ${u}.`, vars: { u, "|Q|": Q.length } }, [...Q]));
  }

  f.push(cloneF({ line: 5, message: "Queue empty, BFS complete. Distances labeled on every reachable vertex.", vars: {} }, []));
  return f;
}

/* ------------------------------------------------------------------ */
/*  Inline graph SVG                                                   */
/* ------------------------------------------------------------------ */

const NODE_STATE_COLOR: Record<NodeState, string> = {
  default: THEME.textMuted,
  frontier: "#06b6d4",
  active: "#3b82f6",
  done: "#64748b",
};

function GraphSVG({
  ids,
  edges,
  pos,
  frame,
}: {
  ids: string[];
  edges: { from: string; to: string }[];
  pos: Record<string, { x: number; y: number }>;
  frame: BFSFrame;
}) {
  const W = 600;
  const H = 300;
  return (
    <div className="w-full overflow-x-auto rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="block mx-auto">
        {edges.map((e) => {
          const p1 = pos[e.from];
          const p2 = pos[e.to];
          if (!p1 || !p2) return null;
          const isTree = frame.treeEdges.has(`${e.from}-${e.to}`) || frame.treeEdges.has(`${e.to}-${e.from}`);
          return (
            <line
              key={`${e.from}-${e.to}`}
              x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
              stroke={isTree ? "#fbbf24" : THEME.border}
              strokeWidth={isTree ? 2.5 : 1.5}
            />
          );
        })}
        {ids.map((id) => {
          const p = pos[id];
          if (!p) return null;
          const ns = frame.nodeStates[id] ?? "default";
          const fill = NODE_STATE_COLOR[ns];
          const d = frame.nodeDist[id];
          return (
            <g key={id}>
              <circle cx={p.x} cy={p.y} r={20} fill={fill} stroke={THEME.border} strokeWidth={1.5} />
              <text x={p.x} y={p.y + 1} textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="#fff" fontWeight="700" fontFamily={THEME.heading}>
                {id}
              </text>
              {d !== undefined && (
                <text x={p.x + 14} y={p.y - 14} textAnchor="middle" fontSize="11" fill={THEME.accent} fontWeight="700" fontFamily={THEME.mono}>
                  {d}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Inline QueueViz                                                    */
/* ------------------------------------------------------------------ */

function QueueViz({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1">
        / bfs queue
      </div>
      <div className="flex gap-1.5 flex-wrap items-center min-h-8 p-2 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-900">
        {items.length === 0 ? (
          <span className="text-xs text-stone-400 italic">empty</span>
        ) : (
          items.map((v, i) => (
            <span
              key={i}
              className={`inline-block px-2.5 py-1 rounded-md text-xs font-mono font-bold border ${i === 0 ? "bg-cyan-500 text-white border-cyan-500" : "border-cyan-300 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300"}`}
            >
              {v}
            </span>
          ))
        )}
      </div>
      {items.length > 0 && (
        <div className="flex justify-between text-[10px] font-mono text-stone-400">
          <span>dequeue ↑</span>
          <span>↑ enqueue</span>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("A-B, A-C, B-D, C-D, C-E, D-F, E-F, F-G");
  const [source, setSource] = useState("A");
  const parsed = useMemo(() => parseEdgeList(inputStr), [inputStr]);
  const ids = parsed?.nodeIds ?? [];
  const edges = parsed?.edges ?? [];

  const frames = useMemo(() => buildBFSFrames(ids, edges, source), [ids, edges, source]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  return (
    <AlgoCanvas
      title={`BFS from ${source}`}
      player={player}
      input={
        <div className="flex gap-3 flex-wrap items-end">
          <div className="flex-1 min-w-64">
            <InputEditor
              label="Edges (A-B, B-C, ...)"
              value={inputStr}
              placeholder="A-B, A-C, B-D, ..."
              helper="Undirected edges. Use a letter/id on each side."
              presets={[
                { label: "Chain", value: "A-B, B-C, C-D, D-E" },
                { label: "Grid", value: "A-B, A-C, B-D, C-D, C-E, D-F, E-F, F-G" },
                { label: "Tree", value: "A-B, A-C, B-D, B-E, C-F, C-G" },
                { label: "Cycle", value: "A-B, B-C, C-D, D-A" },
              ]}
              onApply={(v) => { if (parseEdgeList(v)) setInputStr(v); }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">/ source</label>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="px-3 py-1.5 rounded-md border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-mono text-sm"
            >
              {ids.map((id) => <option key={id} value={id}>{id}</option>)}
            </select>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? [`dist[${frame.flashKey}]`, "v"] : []} />}
    >
      <div className="flex flex-col gap-3">
        {frame && <GraphSVG ids={ids} edges={edges} pos={pos} frame={frame} />}
        {frame && <QueueViz items={frame.queue} />}
        <div className="flex gap-2 flex-wrap text-xs text-stone-500">
          {[["#3b82f6", "active"], ["#06b6d4", "frontier (in queue)"], ["#64748b", "visited (done)"], ["#fbbf24", "BFS tree edge"]].map(([c, l]) => (
            <span key={l} className="inline-flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: c }} />
              {l}
            </span>
          ))}
        </div>
        <Callout className="w-full">{frame?.message ?? "Press play to step through BFS."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "BFS in one line", body: "Explore the graph in wavefront order: first all vertices at distance 1 from the source, then distance 2, then distance 3, using a FIFO queue to hold the next frontier." },
    { title: "Correctness invariant", body: "When a vertex is dequeued, its dist[v] equals the true shortest distance (in number of edges) from the source. Reason: we enqueue in non-decreasing order of distance." },
    { title: "Complexity", body: "Each vertex is enqueued and dequeued once, O(V). We scan each adjacency list once, total work O(E). Overall O(V + E) with adjacency list." },
    { title: "Classic uses", body: "Shortest path in unweighted graphs, level-order tree traversal, finding connected components, bipartiteness test, web crawling." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>mental model</SectionEyebrow>
        <SectionTitle>Drop a pebble. Watch the ripples spread layer by layer.</SectionTitle>
        <Lede>
          Drop a pebble into water at the source. The ripples spread outwards in rings. Each ring is
          a "layer", every node in ring k is exactly k edges from the source. That is BFS.
        </Lede>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {sections.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono tracking-widest text-lime-700 dark:text-lime-400 mb-2">
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
/*  Try It                                                             */
/* ------------------------------------------------------------------ */

function TryTab() {
  return (
    <div className="flex flex-col gap-3">
      <Callout>
        For each prompt, trace BFS by hand in the Visualize tab with the given source to verify.
      </Callout>
      {[
        "On the Chain preset (A-B, B-C, C-D, D-E) from A, what is dist[E]?  (Expected: 4)",
        "On the Grid preset from A, which vertex has the largest dist?  (Expected: G, dist 4)",
        "On a cycle of 4 from A, the max dist is?  (Expected: 2)",
      ].map((q, i) => (
        <Card key={i}>
          <div className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
            <span className="font-bold text-lime-700 dark:text-lime-400">#{i + 1}</span> {q}
          </div>
        </Card>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Insight                                                            */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>Why a queue (not a stack)?</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          FIFO preserves the layer order. The first time a vertex is discovered is always via the
          shortest path, because the queue always holds a mix of layer k and layer k+1 nodes, with
          all layer-k nodes in front. Replace the queue with a stack and you get DFS, where shortest
          paths are not guaranteed.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview pitfalls</SubHeading>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>BFS shortest path works only for <strong className="text-stone-800 dark:text-stone-200">unweighted</strong> graphs (or all-equal weights). For weighted, use Dijkstra.</li>
          <li>Always mark a vertex "visited" at enqueue time, not dequeue, else it enters the queue multiple times.</li>
          <li>Number of BFS tree edges = V − 1 (for connected graph).</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Stdlib queue choice and the Python <InlineCode>list.pop(0)</InlineCode> trap</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
          Python: <InlineCode>collections.deque</InlineCode> with <InlineCode>append</InlineCode> + <InlineCode>popleft</InlineCode>, both O(1). Never use <InlineCode>list.pop(0)</InlineCode>: it shifts every other element down, making BFS O(V·E).
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Java: <InlineCode>ArrayDeque</InlineCode>. C++: <InlineCode>std::queue</InlineCode>.
        </p>
      </Card>
      <Card>
        <SubHeading>0-1 BFS, Dijkstra shortcut for binary weights</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          When edge weights are restricted to {"{0, 1}"}, use a deque: pushFront on weight-0 edges,
          pushBack on weight-1 edges. Same correctness as Dijkstra at O(V+E) instead of O(E log V).
          Common on grids where some moves are free.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L4_BFS({ onQuizComplete }: Props) {
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
      question: "BFS finds shortest paths in which kind of graph?",
      options: [
        "Weighted with non-negative edges",
        "Unweighted (or uniform-weight)",
        "DAGs only",
        "Any graph",
      ],
      correctIndex: 1,
      explanation:
        "BFS treats every edge as having cost 1. For weighted graphs, distance in edges ≠ true shortest distance.",
    },
    {
      question: "Time complexity of BFS on a graph with V vertices and E edges using adjacency list?",
      options: ["O(V log V)", "O(V²)", "O(V + E)", "O(E log V)"],
      correctIndex: 2,
      explanation:
        "Each vertex enqueued/dequeued once (V work); each edge scanned once (E work). Total O(V + E).",
    },
    {
      question: "To avoid a vertex being enqueued multiple times, we should mark it visited when…",
      options: [
        "Dequeuing it",
        "Enqueuing it",
        "Starting the algorithm",
        "After processing all neighbors",
      ],
      correctIndex: 1,
      explanation:
        "Mark at enqueue time. Otherwise, between enqueue and dequeue, a sibling could re-enqueue the same node.",
    },
    {
      question: "Run BFS from A on A-B, B-C, C-D, D-E, E-A (a 5-cycle). dist[C] = ?",
      options: ["1", "2", "3", "4"],
      correctIndex: 1,
      explanation: "A→B→C is length 2, A→E→D→C is length 3. BFS picks the shorter: 2.",
    },
  ];

  return (
    <LessonShell
      title="Breadth-First Search (BFS)"
      level={4}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very high, asked in almost every graph interview."
      nextLessonHint="Depth-First Search"
      onQuizComplete={onQuizComplete}
    />
  );
}
