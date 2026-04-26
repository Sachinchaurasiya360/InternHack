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
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "graph";

/* ------------------------------------------------------------------ */
/*  Parse weighted undirected edges  A-B:5                             */
/* ------------------------------------------------------------------ */

function parseWeighted(input: string): { ids: string[]; edges: { from: string; to: string; w: number }[] } | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string; w: number }[] = [];
  const idSet = new Set<string>();
  for (const tok of tokens) {
    const m = tok.match(/^([A-Za-z0-9_]+)[-:]([A-Za-z0-9_]+):(-?\d+)$/);
    if (!m) return null;
    const weight = Number(m[3]);
    if (weight < 0) return null;
    edges.push({ from: m[1], to: m[2], w: weight });
    idSet.add(m[1]);
    idSet.add(m[2]);
  }
  return { ids: [...idSet].sort(), edges };
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
/*  Dijkstra Frame builder                                             */
/* ------------------------------------------------------------------ */

type NodeState = "default" | "frontier" | "done";

interface DFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  dist: Record<string, number | undefined>;
  nodeStates: Record<string, NodeState>;
  relaxEdges: Set<string>;
  pq: { id: string; d: number }[];
  flashKey?: string;
}

const PSEUDO = [
  "Dijkstra(G, s):",
  "  for each v: dist[v] ← ∞",
  "  dist[s] ← 0",
  "  PQ ← {(s, 0)}",
  "  while PQ not empty:",
  "    u ← extract-min(PQ)",
  "    if u already finalized: skip",
  "    mark u finalized",
  "    for each (v, w) in adj[u]:",
  "      if dist[u] + w < dist[v]:",
  "        dist[v] ← dist[u] + w",
  "        parent[v] ← u",
  "        insert (v, dist[v]) into PQ",
];

function buildDijkstraFrames(
  ids: string[],
  edges: { from: string; to: string; w: number }[],
  source: string,
): DFrame[] {
  const f: DFrame[] = [];
  if (!ids.includes(source)) {
    f.push({ line: 0, vars: {}, message: `Source '${source}' not in graph`, dist: {}, nodeStates: {}, relaxEdges: new Set(), pq: [] });
    return f;
  }

  const adj: Record<string, { to: string; w: number }[]> = Object.fromEntries(ids.map((id) => [id, []]));
  for (const e of edges) { adj[e.from].push({ to: e.to, w: e.w }); adj[e.to].push({ to: e.from, w: e.w }); }

  const dist: Record<string, number | undefined> = Object.fromEntries(ids.map((id) => [id, undefined]));
  const done: Record<string, boolean> = {};
  const state: Record<string, NodeState> = Object.fromEntries(ids.map((id) => [id, "default"]));
  const relaxEdges = new Set<string>();
  const pq: { id: string; d: number }[] = [];

  const clone = (patch: Partial<DFrame>): DFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    dist: { ...dist },
    nodeStates: { ...state },
    relaxEdges: new Set(relaxEdges),
    pq: [...pq].sort((a, b) => a.d - b.d),
    flashKey: patch.flashKey,
  });

  f.push(clone({ line: 1, message: "Initialize dist[v] = ∞ for all v." }));

  dist[source] = 0;
  pq.push({ id: source, d: 0 });
  state[source] = "frontier";
  f.push(clone({ line: 2, message: `dist[${source}] = 0. Push into PQ.`, flashKey: source, vars: { source } }));

  while (pq.length) {
    pq.sort((a, b) => a.d - b.d);
    const { id: u, d: du } = pq.shift()!;
    f.push(clone({ line: 5, message: `Extract-min: u = ${u}, d = ${du}.`, vars: { u, "d[u]": du } }));
    if (done[u]) {
      f.push(clone({ line: 6, message: `${u} already finalized — skip.`, vars: { u } }));
      continue;
    }
    done[u] = true;
    state[u] = "done";
    f.push(clone({ line: 7, message: `Finalize ${u}. dist[${u}] = ${dist[u]}.`, vars: { u, "dist[u]": dist[u] }, flashKey: u }));

    for (const { to: v, w } of adj[u]) {
      if (done[v]) continue;
      const alt = (dist[u] ?? Infinity) + w;
      f.push(clone({ line: 8, message: `Relax edge ${u}→${v} (w=${w}). Compare ${dist[u]} + ${w} = ${alt} vs dist[${v}] = ${dist[v] ?? "∞"}.`, vars: { u, v, w, alt, "dist[v]": dist[v] ?? "∞" } }));
      if (alt < (dist[v] ?? Infinity)) {
        dist[v] = alt;
        if (state[v] !== "done") state[v] = "frontier";
        relaxEdges.add(`${u}-${v}`);
        relaxEdges.add(`${v}-${u}`);
        pq.push({ id: v, d: alt });
        f.push(clone({ line: 10, message: `Shorter — dist[${v}] = ${alt}. Push into PQ.`, flashKey: v, vars: { u, v, "dist[v]": alt } }));
      } else {
        f.push(clone({ line: 8, message: `Not shorter — keep dist[${v}] = ${dist[v]}.`, vars: { u, v, "dist[v]": dist[v] } }));
      }
    }
  }

  f.push(clone({ line: 4, message: "PQ empty — Dijkstra complete. All reachable distances finalized." }));
  return f;
}

/* ------------------------------------------------------------------ */
/*  Inline graph SVG                                                   */
/* ------------------------------------------------------------------ */

const NODE_STATE_COLOR: Record<NodeState, string> = {
  default: THEME.textMuted,
  frontier: "#06b6d4",
  done: "#10b981",
};

function GraphSVG({
  ids,
  edges,
  pos,
  frame,
}: {
  ids: string[];
  edges: { from: string; to: string; w: number }[];
  pos: Record<string, { x: number; y: number }>;
  frame: DFrame;
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
          const isRelax = frame.relaxEdges.has(`${e.from}-${e.to}`);
          const mx = (p1.x + p2.x) / 2;
          const my = (p1.y + p2.y) / 2;
          return (
            <g key={`${e.from}-${e.to}`}>
              <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={isRelax ? "#fbbf24" : THEME.border} strokeWidth={isRelax ? 2.5 : 1.5} />
              <text x={mx} y={my - 5} textAnchor="middle" fontSize="10" fill={THEME.accent} fontWeight="700" fontFamily={THEME.mono}>{e.w}</text>
            </g>
          );
        })}
        {ids.map((id) => {
          const p = pos[id];
          if (!p) return null;
          const ns = frame.nodeStates[id] ?? "default";
          const fill = NODE_STATE_COLOR[ns];
          const d = frame.dist[id];
          return (
            <g key={id}>
              <circle cx={p.x} cy={p.y} r={20} fill={fill} stroke={THEME.border} strokeWidth={1.5} />
              <text x={p.x} y={p.y + 1} textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="#fff" fontWeight="700" fontFamily={THEME.heading}>{id}</text>
              {d !== undefined && (
                <text x={p.x + 14} y={p.y - 14} fontSize="11" fill={THEME.accent} fontWeight="700" fontFamily={THEME.mono}>{d}</text>
              )}
              {d === undefined && (
                <text x={p.x + 14} y={p.y - 14} fontSize="10" fill={THEME.textMuted} fontFamily={THEME.mono}>∞</text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PQ panel                                                           */
/* ------------------------------------------------------------------ */

function PQPanel({ items }: { items: { id: string; d: number }[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">/ priority queue (min-heap)</div>
      <div className="flex flex-col gap-1 p-2 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-900 min-h-8">
        {items.length === 0 ? (
          <span className="text-xs text-stone-400 italic">empty</span>
        ) : (
          items.map((it, i) => (
            <div key={i} className={`flex justify-between items-center px-2.5 py-1 rounded-md text-xs font-mono font-bold border ${i === 0 ? "bg-lime-400 text-stone-900 border-lime-400" : "border-lime-300 dark:border-lime-700 text-lime-700 dark:text-lime-300"}`}>
              <span>{it.id}</span>
              <span>{it.d}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("A-B:4, A-C:2, B-C:1, B-D:5, C-D:8, C-E:10, D-E:2");
  const [source, setSource] = useState("A");
  const parsed = parseWeighted(inputStr);
  const ids = parsed?.ids ?? [];
  const edges = parsed?.edges ?? [];

  const frames = useMemo(() => buildDijkstraFrames(ids, edges, source), [ids, edges, source]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  return (
    <AlgoCanvas
      title={`Dijkstra from ${source}`}
      player={player}
      input={
        <div className="flex gap-3 flex-wrap items-end">
          <div className="flex-1 min-w-64">
            <InputEditor
              label="Weighted edges (A-B:w, non-negative)"
              value={inputStr}
              placeholder="A-B:4, B-C:1, ..."
              helper="Non-negative weights only."
              presets={[
                { label: "Classic", value: "A-B:4, A-C:2, B-C:1, B-D:5, C-D:8, C-E:10, D-E:2" },
                { label: "Shortcut", value: "A-B:10, A-C:1, C-B:1, B-D:1" },
                { label: "Chain", value: "A-B:1, B-C:2, C-D:3, D-E:4" },
                { label: "Triangle", value: "A-B:3, B-C:4, A-C:6" },
              ]}
              onApply={(v) => { if (parseWeighted(v)) setInputStr(v); }}
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
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? ["dist[v]", "alt"] : []} />}
    >
      <div className="flex flex-col gap-3">
        {frame && <GraphSVG ids={ids} edges={edges} pos={pos} frame={frame} />}
        {frame && <PQPanel items={frame.pq} />}
        <div className="flex gap-2 flex-wrap text-xs text-stone-500">
          {[["#06b6d4", "frontier"], ["#10b981", "finalized"], ["#fbbf24", "relaxation tree edge"]].map(([c, l]) => (
            <span key={l} className="inline-flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: c }} />
              {l}
            </span>
          ))}
        </div>
        <Callout className="w-full">{frame?.message ?? "Press play to run Dijkstra."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "The problem", body: "Given a weighted graph with non-negative edge weights and a source s, find the shortest-path distance from s to every other vertex." },
    { title: "Greedy insight", body: "Repeatedly pick the unfinalized vertex with the smallest tentative distance, finalize it, and relax its outgoing edges. This works because once a vertex is extracted with dist = d, no shorter path can exist (all weights ≥ 0)." },
    { title: "Relaxation", body: "For edge (u,v) with weight w: if dist[u] + w < dist[v], update dist[v] = dist[u] + w. This is the only operation that ever decreases a distance." },
    { title: "Complexity", body: "With a binary heap PQ: O((V + E) log V). With a simple array: O(V²). For dense graphs the array wins; for sparse, the heap." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>mental model</SectionEyebrow>
        <SectionTitle>Water flowing through pipes. Cheapest first.</SectionTitle>
        <Lede>
          Imagine you are dropping water at the source and letting it flow through pipes of
          different lengths. The water reaches each junction at the earliest possible time — that
          time is the shortest-path distance.
        </Lede>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {sections.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono tracking-widest text-lime-700 dark:text-lime-400 mb-2">0{i + 1}</div>
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
      <Callout>Run these in the Visualize tab and check the final distances.</Callout>
      {[
        "Classic preset from A: what is dist[D]?  (Verify by stepping through!)",
        "Shortcut preset from A: what is dist[B]?  (Expected: 2 — via A→C→B, not the direct A-B:10)",
        "Why can't Dijkstra handle negative weights? Explain in one line.",
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
        <SubHeading>Why non-negative weights?</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          The correctness argument relies on "once extracted, dist[u] is final." If a negative edge
          existed, a later-extracted vertex could offer a shorter route back through u — breaking
          the invariant. Use Bellman-Ford for graphs with negative edges.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview nuance</SubHeading>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>For unweighted graphs, BFS does the same job in O(V+E) — don't over-engineer.</li>
          <li>"Lazy" Dijkstra reinserts on relax and skips stale entries — simpler to code than decrease-key.</li>
          <li>A* = Dijkstra + heuristic; fall back to Dijkstra when h(n) = 0.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L4_Dijkstra({ onQuizComplete }: Props) {
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
      question: "Dijkstra's algorithm is guaranteed correct only when…",
      options: [
        "The graph is a DAG",
        "All edge weights are non-negative",
        "The graph is connected",
        "The graph is undirected",
      ],
      correctIndex: 1,
      explanation:
        "Negative weights can invalidate the finalization invariant. Bellman-Ford handles them instead.",
    },
    {
      question: "Best-case runtime using a binary heap priority queue?",
      options: ["O(V²)", "O((V + E) log V)", "O(V + E)", "O(V · E)"],
      correctIndex: 1,
      explanation:
        "Each vertex is extracted once (V log V), each edge possibly triggers a decrease-key (E log V). Total O((V+E) log V).",
    },
    {
      question: "After extract-min returns u, we…",
      options: [
        "Update dist[u]",
        "Mark u finalized — its distance won't change again",
        "Add u's edges to MST",
        "Remove u from the graph",
      ],
      correctIndex: 1,
      explanation:
        "Extract-min guarantees the path to u is optimal under non-negative weights. No further relaxation can improve dist[u].",
    },
    {
      question: "Run Dijkstra from A on A-B:10, A-C:1, C-B:1, B-D:1. dist[D] = ?",
      options: ["1", "3", "11", "12"],
      correctIndex: 1,
      explanation:
        "A→C (1) → B (2) → D (3). Direct A→B would cost 10; the shortcut via C is much cheaper.",
    },
  ];

  return (
    <LessonShell
      title="Dijkstra's Shortest Path"
      level={4}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very high — routing, maps, network protocols."
      nextLessonHint="Bellman-Ford"
      onQuizComplete={onQuizComplete}
    />
  );
}
