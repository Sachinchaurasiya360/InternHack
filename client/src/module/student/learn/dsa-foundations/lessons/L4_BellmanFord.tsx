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

/* No practice tab, practiceSlug is null */

/* ------------------------------------------------------------------ */
/*  Parse directed weighted edges  A>B:w  (negative allowed)          */
/* ------------------------------------------------------------------ */

function parseBF(input: string): { ids: string[]; edges: { from: string; to: string; w: number }[] } | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string; w: number }[] = [];
  const ids = new Set<string>();
  for (const tok of tokens) {
    const m = tok.match(/^([A-Za-z0-9_]+)>([A-Za-z0-9_]+):(-?\d+)$/);
    if (!m) return null;
    edges.push({ from: m[1], to: m[2], w: Number(m[3]) });
    ids.add(m[1]);
    ids.add(m[2]);
  }
  return { ids: [...ids].sort(), edges };
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
/*  Bellman-Ford Frame builder                                         */
/* ------------------------------------------------------------------ */

type EdgeRowStatus = "pending" | "examining" | "relaxed" | "skipped";
type NodeState = "default" | "active" | "done";

interface BFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  dist: Record<string, number | undefined>;
  nodeStates: Record<string, NodeState>;
  relaxEdges: Set<string>;
  negCycle?: boolean;
  flashKey?: string;
  pass: number;
  totalPasses: number;
  edgeRowStates: EdgeRowStatus[];
}

const PSEUDO = [
  "BellmanFord(G, s):",
  "  for each v: dist[v] ← ∞",
  "  dist[s] ← 0",
  "  repeat V − 1 times:",
  "    for each edge (u, v, w):",
  "      if dist[u] + w < dist[v]:",
  "        dist[v] ← dist[u] + w",
  "  // Negative-cycle check:",
  "  for each edge (u, v, w):",
  "    if dist[u] + w < dist[v]:",
  "      report NEGATIVE CYCLE",
];

function buildBFFrames(
  ids: string[],
  edges: { from: string; to: string; w: number }[],
  source: string,
): BFrame[] {
  const f: BFrame[] = [];
  const V = ids.length;
  const totalPasses = Math.max(0, V - 1);
  const emptyRows = (): EdgeRowStatus[] => edges.map(() => "pending");

  if (!ids.includes(source)) {
    f.push({ line: 0, vars: {}, message: `Source '${source}' not in graph`, dist: {}, nodeStates: {}, relaxEdges: new Set(), pass: 0, totalPasses, edgeRowStates: emptyRows() });
    return f;
  }

  const dist: Record<string, number | undefined> = Object.fromEntries(ids.map((id) => [id, undefined]));
  const state: Record<string, NodeState> = Object.fromEntries(ids.map((id) => [id, "default"]));
  const relaxEdges = new Set<string>();
  let pass = 0;
  let edgeRowStates: EdgeRowStatus[] = emptyRows();

  const clone = (patch: Partial<BFrame>): BFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    dist: { ...dist },
    nodeStates: { ...state },
    relaxEdges: new Set(relaxEdges),
    negCycle: patch.negCycle,
    flashKey: patch.flashKey,
    pass: patch.pass ?? pass,
    totalPasses,
    edgeRowStates: patch.edgeRowStates ? [...patch.edgeRowStates] : [...edgeRowStates],
  });

  f.push(clone({ line: 1, message: "Initialize dist[v] = ∞ for every vertex." }));
  dist[source] = 0;
  state[source] = "active";
  f.push(clone({ line: 2, message: `Set dist[${source}] = 0.`, flashKey: source }));

  for (pass = 1; pass <= totalPasses; pass++) {
    edgeRowStates = emptyRows();
    f.push(clone({ line: 3, message: `Pass ${pass} of ${totalPasses}.`, vars: { pass, "V-1": totalPasses } }));
    let updatedAny = false;
    for (let ei = 0; ei < edges.length; ei++) {
      const e = edges[ei];
      edgeRowStates[ei] = "examining";
      f.push(clone({ line: 4, message: `Examine edge #${ei + 1}: ${e.from}→${e.to} (w=${e.w}).`, vars: { pass, edge: `${e.from}→${e.to}`, w: e.w, "d[u]": dist[e.from] ?? "∞", "d[v]": dist[e.to] ?? "∞" } }));
      const du = dist[e.from];
      if (du !== undefined && du + e.w < (dist[e.to] ?? Infinity)) {
        dist[e.to] = du + e.w;
        edgeRowStates[ei] = "relaxed";
        relaxEdges.add(`${e.from}-${e.to}`);
        updatedAny = true;
        f.push(clone({ line: 6, message: `Relax, dist[${e.to}] = ${du} + ${e.w} = ${dist[e.to]}.`, flashKey: e.to, vars: { pass, "d[v]": dist[e.to] } }));
      } else {
        edgeRowStates[ei] = "skipped";
      }
    }
    f.push(clone({ line: 3, message: `Pass ${pass} complete.`, vars: { pass } }));
    if (!updatedAny) {
      f.push(clone({ line: 3, message: `Pass ${pass}: zero relaxations, early terminate (saves ${totalPasses - pass} passes).`, vars: { pass, savedPasses: totalPasses - pass } }));
      break;
    }
  }

  // negative cycle check
  pass = totalPasses + 1;
  edgeRowStates = emptyRows();
  f.push(clone({ line: 8, message: "Negative-cycle check: run a V-th pass. Any further relaxation = negative cycle.", vars: { pass: "V (check)" } }));
  let neg = false;
  for (let ei = 0; ei < edges.length; ei++) {
    const e = edges[ei];
    edgeRowStates[ei] = "examining";
    f.push(clone({ line: 9, message: `Re-examine edge #${ei + 1}: ${e.from}→${e.to}.`, vars: { edge: `${e.from}→${e.to}`, w: e.w } }));
    const du = dist[e.from];
    if (du !== undefined && du + e.w < (dist[e.to] ?? Infinity)) {
      neg = true;
      edgeRowStates[ei] = "relaxed";
      f.push(clone({ line: 10, message: `RELAXATION ON V-TH PASS, NEGATIVE CYCLE detected on ${e.from}→${e.to}.`, negCycle: true, vars: { u: e.from, v: e.to, w: e.w } }));
      break;
    } else {
      edgeRowStates[ei] = "skipped";
    }
  }
  if (!neg) {
    f.push(clone({ line: 8, message: `V-th pass: no relaxations. All ${ids.length} distances are final.` }));
  }

  return f;
}

/* ------------------------------------------------------------------ */
/*  Inline graph SVG                                                   */
/* ------------------------------------------------------------------ */

const NODE_STATE_COLOR: Record<NodeState, string> = {
  default: THEME.textMuted,
  active: "#3b82f6",
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
  frame: BFrame;
}) {
  const W = 600;
  const H = 300;
  return (
    <div className="w-full overflow-x-auto rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="block mx-auto">
        <defs>
          <marker id="arr-bf" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={THEME.border} />
          </marker>
          <marker id="arr-bf-relax" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#fbbf24" />
          </marker>
          <marker id="arr-bf-neg" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#ef4444" />
          </marker>
        </defs>
        {edges.map((e) => {
          const p1 = pos[e.from];
          const p2 = pos[e.to];
          if (!p1 || !p2) return null;
          const k = `${e.from}-${e.to}`;
          const isRelax = frame.relaxEdges.has(k);
          const isNeg = frame.negCycle && isRelax;
          const stroke = isNeg ? "#ef4444" : isRelax ? "#fbbf24" : THEME.border;
          const markRef = isNeg ? "url(#arr-bf-neg)" : isRelax ? "url(#arr-bf-relax)" : "url(#arr-bf)";
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const len = Math.sqrt(dx * dx + dy * dy) || 1;
          const ex = p2.x - (22 / len) * dx;
          const ey = p2.y - (22 / len) * dy;
          const sx = p1.x + (22 / len) * dx;
          const sy = p1.y + (22 / len) * dy;
          const mx = (p1.x + p2.x) / 2;
          const my = (p1.y + p2.y) / 2;
          return (
            <g key={k}>
              <line x1={sx} y1={sy} x2={ex} y2={ey} stroke={stroke} strokeWidth={isRelax ? 2.5 : 1.5} markerEnd={markRef} />
              <text x={mx} y={my - 5} textAnchor="middle" fontSize="10" fill={e.w < 0 ? "#ef4444" : THEME.accent} fontWeight="700" fontFamily={THEME.mono}>{e.w}</text>
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
              <text x={p.x + 14} y={p.y - 14} fontSize="10" fill={THEME.accent} fontWeight="700" fontFamily={THEME.mono}>{d !== undefined ? d : "∞"}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Edge table                                                         */
/* ------------------------------------------------------------------ */

function EdgeTable({ edges, rowStates }: { edges: { from: string; to: string; w: number }[]; rowStates: EdgeRowStatus[] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-stone-200 dark:border-white/10">
      <table className="w-full text-xs font-mono">
        <thead className="bg-stone-50 dark:bg-stone-950/50">
          <tr>
            {["#", "Edge", "w", "Status"].map((h) => (
              <th key={h} className="text-left px-3 py-2 text-[10px] uppercase tracking-widest text-stone-500 border-b border-stone-200 dark:border-white/10">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {edges.map((e, i) => {
            const s = rowStates[i] ?? "pending";
            const colors: Record<EdgeRowStatus, string> = {
              pending: "text-stone-400",
              examining: "text-amber-600 dark:text-amber-400",
              relaxed: "text-lime-700 dark:text-lime-400 font-bold",
              skipped: "text-stone-400",
            };
            return (
              <tr key={i} className={`border-t border-stone-100 dark:border-white/5 ${s === "examining" ? "bg-amber-50 dark:bg-amber-400/5" : s === "relaxed" ? "bg-lime-50 dark:bg-lime-400/5" : ""}`}>
                <td className="px-3 py-1.5 text-stone-400">{i + 1}</td>
                <td className="px-3 py-1.5 text-stone-700 dark:text-stone-300">{e.from}→{e.to}</td>
                <td className={`px-3 py-1.5 ${e.w < 0 ? "text-rose-600 dark:text-rose-400" : "text-stone-600 dark:text-stone-400"}`}>{e.w}</td>
                <td className={`px-3 py-1.5 ${colors[s]}`}>{s}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("A>B:6, A>C:7, B>C:8, B>D:5, B>E:-4, C>D:-3, C>E:9, D>B:-2, E>D:7, E>A:2");
  const [source, setSource] = useState("A");
  const parsed = parseBF(inputStr);
  const ids = parsed?.ids ?? [];
  const edges = parsed?.edges ?? [];

  const frames = useMemo(() => buildBFFrames(ids, edges, source), [ids, edges, source]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  return (
    <AlgoCanvas
      title={`Bellman-Ford from ${source} (pass ${frame?.pass ?? 0} / ${frame?.totalPasses ?? 0})`}
      player={player}
      input={
        <div className="flex gap-3 flex-wrap items-end">
          <div className="flex-1 min-w-64">
            <InputEditor
              label="Directed weighted edges (A>B:w, negative allowed)"
              value={inputStr}
              placeholder="A>B:6, B>C:-2, ..."
              helper="Use '>' for directed. Negative weights allowed."
              presets={[
                { label: "Classic CLRS", value: "A>B:6, A>C:7, B>C:8, B>D:5, B>E:-4, C>D:-3, C>E:9, D>B:-2, E>D:7, E>A:2" },
                { label: "Simple neg", value: "A>B:4, A>C:5, B>C:-3, C>D:2" },
                { label: "Neg cycle", value: "A>B:1, B>C:-1, C>A:-1, A>D:2" },
                { label: "No cycle", value: "A>B:1, B>C:2, C>D:-5, A>D:100" },
              ]}
              onApply={(v) => { if (parseBF(v)) setInputStr(v); }}
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
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? ["d[v]"] : []} />}
    >
      <div className="flex flex-col gap-3">
        {frame && <GraphSVG ids={ids} edges={edges} pos={pos} frame={frame} />}
        {frame && edges.length <= 12 && <EdgeTable edges={edges} rowStates={frame.edgeRowStates} />}
        <div className="flex gap-2 flex-wrap text-xs text-stone-500">
          {[["#f59e0b", "examining edge"], ["#fbbf24", "just relaxed"], ["#ef4444", "negative cycle"]].map(([c, l]) => (
            <span key={l} className="inline-flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: c }} />
              {l}
            </span>
          ))}
        </div>
        <Callout className="w-full">{frame?.message ?? "Press play to run Bellman-Ford."}</Callout>
        {frame?.negCycle && (
          <div className="mt-1 px-4 py-2.5 rounded-md border border-rose-500 bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200 text-sm font-bold text-center">
            NEGATIVE CYCLE DETECTED, shortest paths are undefined for vertices reachable from the cycle.
          </div>
        )}
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "Why not just Dijkstra?", body: "Dijkstra fails on negative-weight edges. Bellman-Ford works for any weights, including negative, and even detects negative-weight cycles reachable from the source." },
    { title: "The V−1 trick", body: "Any shortest path has at most V−1 edges (otherwise it visits a vertex twice, which can be shortened unless there's a negative cycle). So V−1 relaxation passes are enough." },
    { title: "Relaxation pass", body: "In each pass, examine every edge once. Each pass extends the distance of shortest paths by at least one more edge. Slow but exhaustive, O(V·E)." },
    { title: "Negative-cycle detection", body: "After V−1 passes, distances are final, unless a negative cycle lets us keep improving. A V-th pass that still relaxes any edge proves a negative cycle exists." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>mental model</SectionEyebrow>
        <SectionTitle>Brute force every edge V−1 times. Survive negatives.</SectionTitle>
        <Lede>
          Instead of being clever about which vertex to relax next (Dijkstra), Bellman-Ford just
          sweeps all edges V−1 times. Brute force, but it handles every weight sign and detects
          currency-arbitrage-style cycles.
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
      <Callout>Try the "Neg cycle" preset, the algorithm will report it on the final pass.</Callout>
      {[
        "Complexity of Bellman-Ford? (Expected: O(V·E))",
        "On the 'No cycle' preset from A, what's dist[D]? (Expected: -2, via A→B→C→D = 1+2-5)",
        "If a negative cycle is reachable, what do we say about shortest paths to nodes past it? (Expected: undefined / -∞)",
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
        <SubHeading>When to use Bellman-Ford</SubHeading>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Currency arbitrage detection (negative log-weights).</li>
          <li>Distance-vector routing protocols (RIP).</li>
          <li>Preprocessing for Johnson's all-pairs shortest paths.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Edge order matters (for speed)</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          A lucky edge ordering can converge in far fewer than V−1 passes. Ordering by topological
          sort order on a DAG finishes in one pass, the basis of the O(V+E) DAG shortest-path
          algorithm.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L4_BellmanFord({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "Time complexity of Bellman-Ford?",
      options: ["O(V + E)", "O(V log V)", "O(V · E)", "O(E log V)"],
      correctIndex: 2,
      explanation:
        "V−1 passes × O(E) per pass = O(V·E). Much slower than Dijkstra, but handles negative weights.",
    },
    {
      question: "After V−1 passes, if a V-th pass still relaxes some edge, we conclude…",
      options: [
        "Algorithm has a bug",
        "Graph is disconnected",
        "A negative cycle is reachable from the source",
        "Run more passes",
      ],
      correctIndex: 2,
      explanation:
        "V−1 passes suffice for any acyclic shortest path. Further improvement implies a cycle whose total weight is negative.",
    },
    {
      question: "Why does Dijkstra fail with negative weights but Bellman-Ford succeeds?",
      options: [
        "Dijkstra is buggy",
        "Bellman-Ford tries all edges in every pass; Dijkstra commits to a min too early",
        "They both succeed",
        "Dijkstra is only for DAGs",
      ],
      correctIndex: 1,
      explanation:
        "Dijkstra finalizes vertices greedily. A later negative edge could have improved an already-finalized distance. Bellman-Ford never finalizes early.",
    },
    {
      question: "If no negative cycle exists, how many passes are sufficient in the worst case?",
      options: ["log V", "V − 1", "V", "E"],
      correctIndex: 1,
      explanation:
        "A simple shortest path has at most V−1 edges. One pass extends correct distances by one edge; V−1 passes suffice.",
    },
  ];

  return (
    <LessonShell
      title="Bellman-Ford"
      level={4}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Medium, arbitrage, routing protocols."
      nextLessonHint="Minimum Spanning Trees"
      onQuizComplete={onQuizComplete}
    />
  );
}
