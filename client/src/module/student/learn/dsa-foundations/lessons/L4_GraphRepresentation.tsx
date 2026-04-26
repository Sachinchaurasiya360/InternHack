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
  useStepPlayer,
} from "../../../../../components/dsa-theory/algo";
import {
  Callout,
  Card,
  InlineCode,
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "graph";

/* ------------------------------------------------------------------ */
/*  Parse  (used by TryTab only — no GraphCanvas needed)               */
/* ------------------------------------------------------------------ */

interface ParsedGraph {
  nodeIds: string[];
  edges: { from: string; to: string; weight?: number }[];
}

function parseEdgeList(input: string): ParsedGraph | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string; weight?: number }[] = [];
  const ids = new Set<string>();
  for (const tok of tokens) {
    const m = tok.match(/^([A-Za-z0-9_]+)[-:]([A-Za-z0-9_]+)(?::(-?\d+))?$/);
    if (!m) return null;
    const [, a, b, w] = m;
    edges.push({ from: a, to: b, weight: w !== undefined ? Number(w) : undefined });
    ids.add(a);
    ids.add(b);
  }
  return { nodeIds: [...ids].sort(), edges };
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

const DEFAULT_GRAPH = "A-B:4, A-C:2, B-C:3, B-D:5, C-D:1, D-E:6";

function autoLayout(
  ids: string[],
  cx = 200,
  cy = 140,
  r = 100,
): Record<string, { x: number; y: number }> {
  const n = ids.length;
  const out: Record<string, { x: number; y: number }> = {};
  ids.forEach((id, i) => {
    const ang = (2 * Math.PI * i) / Math.max(1, n) - Math.PI / 2;
    out[id] = { x: cx + r * Math.cos(ang), y: cy + r * Math.sin(ang) };
  });
  return out;
}

interface GraphFrame {
  edgeIdx: number | null;
  message: string;
}

function buildFrames(
  edges: { from: string; to: string; weight?: number }[],
): GraphFrame[] {
  const frames: GraphFrame[] = [
    { edgeIdx: null, message: "The full graph — no edge highlighted yet. Press play to walk each edge." },
  ];
  edges.forEach((e, i) => {
    const label = e.weight !== undefined ? `${e.from}↔${e.to} (weight ${e.weight})` : `${e.from}↔${e.to}`;
    frames.push({
      edgeIdx: i,
      message: `Edge ${label} — highlighted in the diagram, matrix cell, and adjacency list entry.`,
    });
  });
  frames.push({ edgeIdx: null, message: "All edges walked. Every non-zero cell in the matrix maps to an entry in the adjacency list." });
  return frames;
}

function GraphDiagram({
  ids,
  pos,
  edges,
  directed,
  activeEdgeIdx,
}: {
  ids: string[];
  pos: Record<string, { x: number; y: number }>;
  edges: { from: string; to: string; weight?: number }[];
  directed: boolean;
  activeEdgeIdx: number | null;
}) {
  const W = 400;
  const H = 280;

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid meet"
      style={{ display: "block" }}
    >
      <defs>
        <marker
          id="arrow-default"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L8,3 z" fill={THEME.border} />
        </marker>
        <marker
          id="arrow-active"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L8,3 z" fill={THEME.accent} />
        </marker>
      </defs>

      {edges.map((e, i) => {
        const p1 = pos[e.from];
        const p2 = pos[e.to];
        if (!p1 || !p2) return null;
        const isActive = activeEdgeIdx === i;
        const mx = (p1.x + p2.x) / 2;
        const my = (p1.y + p2.y) / 2;
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;
        const curve = 0.18;
        const cx = mx + nx * len * curve;
        const cy = my + ny * len * curve;
        const NODE_R = 18;
        // Adjust end point so arrow tip doesn't overlap node circle
        const ex2 = p2.x - (dx / len) * NODE_R;
        const ey2 = p2.y - (dy / len) * NODE_R;

        return (
          <g key={i}>
            <path
              d={`M${p1.x},${p1.y} Q${cx},${cy} ${ex2},${ey2}`}
              fill="none"
              stroke={isActive ? THEME.accent : THEME.border}
              strokeWidth={isActive ? 2.5 : 1.5}
              strokeDasharray={isActive ? undefined : undefined}
              markerEnd={directed ? (isActive ? "url(#arrow-active)" : "url(#arrow-default)") : undefined}
              style={{ transition: "stroke 0.25s, stroke-width 0.25s" }}
            />
            {e.weight !== undefined && (
              <text
                x={cx}
                y={cy - 5}
                textAnchor="middle"
                fontSize="10"
                fontFamily={THEME.mono}
                fill={isActive ? THEME.accent : THEME.textMuted}
                style={{ transition: "fill 0.25s" }}
              >
                {e.weight}
              </text>
            )}
          </g>
        );
      })}

      {ids.map((id) => {
        const p = pos[id];
        if (!p) return null;
        const isActive =
          activeEdgeIdx !== null &&
          (edges[activeEdgeIdx]?.from === id || edges[activeEdgeIdx]?.to === id);
        return (
          <g key={id}>
            <circle
              cx={p.x}
              cy={p.y}
              r={18}
              fill={isActive ? THEME.accent : THEME.bgPanel}
              stroke={isActive ? THEME.accent : THEME.border}
              strokeWidth={isActive ? 2 : 1.5}
              style={{ transition: "fill 0.25s, stroke 0.25s" }}
            />
            <text
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="13"
              fontWeight="700"
              fontFamily={THEME.mono}
              fill={isActive ? THEME.text : THEME.text}
            >
              {id}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function VisualizeTab() {
  const [inputStr, setInputStr] = useState(DEFAULT_GRAPH);
  const [directed, setDirected] = useState(false);
  const parsed = parseEdgeList(inputStr);

  const { ids, edges, pos, adj, matrix } = useMemo(() => {
    const p = parsed ?? { nodeIds: [], edges: [] };
    const pos = autoLayout(p.nodeIds);
    const adj: Record<string, { to: string; w?: number }[]> = Object.fromEntries(
      p.nodeIds.map((id) => [id, []]),
    );
    const n = p.nodeIds.length;
    const matrix: (number | null)[][] = Array.from({ length: n }, () =>
      Array(n).fill(null),
    );
    const idx: Record<string, number> = {};
    p.nodeIds.forEach((id, i) => (idx[id] = i));
    for (const e of p.edges) {
      adj[e.from].push({ to: e.to, w: e.weight });
      matrix[idx[e.from]][idx[e.to]] = e.weight ?? 1;
      if (!directed) {
        adj[e.to].push({ to: e.from, w: e.weight });
        matrix[idx[e.to]][idx[e.from]] = e.weight ?? 1;
      }
    }
    return { ids: p.nodeIds, edges: p.edges, pos, adj, matrix };
  }, [parsed, directed]);

  const frames = useMemo(() => buildFrames(edges), [edges]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const activeEdgeIdx = frame?.edgeIdx ?? null;

  // Which matrix cells are highlighted for the active edge
  const activeEdge = activeEdgeIdx !== null ? edges[activeEdgeIdx] : null;
  const nodeIdx: Record<string, number> = {};
  ids.forEach((id, i) => (nodeIdx[id] = i));

  return (
    <AlgoCanvas
      title="Graph Representation — Adjacency Matrix vs Adjacency List"
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <InputEditor
            label="Edge list (A-B:weight — weight optional)"
            value={inputStr}
            placeholder="e.g. A-B:4, B-C:3, A-C:10"
            helper="Comma-separated edges. Toggle directed/undirected below."
            presets={[
              { label: "Triangle", value: "A-B:2, B-C:3, A-C:4" },
              { label: "Path", value: "A-B:1, B-C:2, C-D:3, D-E:4" },
              { label: "Star", value: "A-B, A-C, A-D, A-E" },
              { label: "Dense", value: "A-B:4, A-C:2, B-C:3, B-D:5, C-D:1, D-E:6, A-E:7" },
            ]}
            onApply={(v) => {
              if (parseEdgeList(v)) setInputStr(v);
            }}
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              / graph type
            </label>
            <div className="flex gap-2">
              <PillButton active={!directed} onClick={() => setDirected(false)}>
                Undirected
              </PillButton>
              <PillButton active={directed} onClick={() => setDirected(true)}>
                Directed
              </PillButton>
            </div>
          </div>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        {/* Three-panel layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Graph diagram */}
          <Card className="md:col-span-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
              graph diagram
            </div>
            {ids.length === 0 ? (
              <div className="text-sm text-stone-400 italic">Enter edges above.</div>
            ) : (
              <GraphDiagram
                ids={ids}
                pos={pos}
                edges={edges}
                directed={directed}
                activeEdgeIdx={activeEdgeIdx}
              />
            )}
          </Card>

          {/* Adjacency matrix */}
          <Card className="md:col-span-1 overflow-x-auto">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
              adjacency matrix
            </div>
            {ids.length === 0 ? (
              <div className="text-sm text-stone-400 italic">Add edges to see matrix.</div>
            ) : (
              <>
                <table style={{ borderCollapse: "collapse", fontFamily: THEME.mono, fontSize: "0.75rem" }}>
                  <thead>
                    <tr>
                      <th style={{ padding: "2px 6px" }} />
                      {ids.map((id) => (
                        <th
                          key={id}
                          style={{
                            padding: "2px 6px",
                            fontWeight: 700,
                            color:
                              activeEdge && (activeEdge.from === id || activeEdge.to === id)
                                ? THEME.accent
                                : THEME.textMuted,
                            fontSize: "0.7rem",
                            transition: "color 0.25s",
                          }}
                        >
                          {id}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ids.map((rowId, i) => (
                      <tr key={rowId}>
                        <td
                          style={{
                            padding: "2px 6px",
                            fontWeight: 700,
                            color:
                              activeEdge && (activeEdge.from === rowId || activeEdge.to === rowId)
                                ? THEME.accent
                                : THEME.textMuted,
                            fontSize: "0.7rem",
                            transition: "color 0.25s",
                          }}
                        >
                          {rowId}
                        </td>
                        {ids.map((colId, j) => {
                          const v = matrix[i][j];
                          const has = v !== null;
                          const isActiveCell =
                            activeEdge !== null &&
                            ((activeEdge.from === rowId && activeEdge.to === colId) ||
                              (!directed &&
                                activeEdge.from === colId &&
                                activeEdge.to === rowId));
                          return (
                            <td
                              key={j}
                              style={{
                                width: 30,
                                height: 30,
                                textAlign: "center",
                                border: `1px solid ${THEME.border}`,
                                background: isActiveCell
                                  ? THEME.accent
                                  : has
                                    ? `${THEME.accent}22`
                                    : THEME.bg,
                                color: isActiveCell
                                  ? THEME.text
                                  : has
                                    ? THEME.accent
                                    : THEME.textMuted,
                                fontWeight: 700,
                                transition: "background 0.25s, color 0.25s",
                              }}
                            >
                              {has ? v : "0"}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="text-[10px] text-stone-400 mt-2">Space: O(V²). Edge check: O(1).</div>
              </>
            )}
          </Card>

          {/* Adjacency list */}
          <Card className="md:col-span-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
              adjacency list
            </div>
            {ids.length === 0 ? (
              <div className="text-sm text-stone-400 italic">Add edges to see list.</div>
            ) : (
              <>
                <div className="flex flex-col gap-2">
                  {ids.map((id) => (
                    <div key={id} className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className="text-xs font-mono font-bold px-2 py-0.5 rounded-sm"
                        style={{
                          minWidth: 26,
                          textAlign: "center",
                          background:
                            activeEdge && (activeEdge.from === id || activeEdge.to === id)
                              ? THEME.accent
                              : THEME.border,
                          color:
                            activeEdge && (activeEdge.from === id || activeEdge.to === id)
                              ? THEME.text
                              : THEME.textMuted,
                          transition: "background 0.25s, color 0.25s",
                        }}
                      >
                        {id}
                      </span>
                      <span className="text-stone-400 text-xs">→</span>
                      {adj[id].length === 0 ? (
                        <span className="text-xs text-stone-400 italic">∅</span>
                      ) : (
                        adj[id].map((nb, k) => {
                          const isActiveEntry =
                            activeEdge !== null &&
                            ((activeEdge.from === id && activeEdge.to === nb.to) ||
                              (!directed &&
                                activeEdge.from === nb.to &&
                                activeEdge.to === id));
                          return (
                            <span
                              key={k}
                              className="text-xs font-mono font-bold px-2 py-0.5 rounded-sm"
                              style={{
                                background: isActiveEntry ? `${THEME.accent}30` : `${THEME.accent}14`,
                                color: isActiveEntry ? THEME.accent : THEME.textMuted,
                                border: `1px solid ${isActiveEntry ? THEME.accent : "transparent"}`,
                                transition: "background 0.25s, color 0.25s, border-color 0.25s",
                              }}
                            >
                              {nb.to}{nb.w !== undefined ? `:${nb.w}` : ""}
                            </span>
                          );
                        })
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-[10px] text-stone-400 mt-2">Space: O(V+E). Edge check: O(deg(v)).</div>
              </>
            )}
          </Card>
        </div>

        <Callout>
          {frame?.message ?? "Press play to step through each edge."}
        </Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    {
      title: "What is a graph?",
      body: "A graph G = (V, E) is a pair: V is a set of vertices (nodes), E is a set of edges (connections between pairs of vertices). Edges can be directed or undirected, weighted or unweighted.",
    },
    {
      title: "Adjacency matrix",
      body: "An n×n boolean or integer matrix M where M[u][v] = 1 (or weight) if edge u→v exists. Space O(V²). Checking 'is there an edge?' is O(1) — but iterating neighbors of v takes O(V).",
    },
    {
      title: "Adjacency list",
      body: "Each vertex stores a list of its neighbors. Space O(V + E) — much smaller for sparse graphs. Iterating neighbors is O(deg(v)). Checking a specific edge is O(deg(v)). BFS/DFS love this layout.",
    },
    {
      title: "When to use which?",
      body: "Dense graph (|E| ≈ V²) or frequent edge queries → matrix. Sparse graph (|E| ≪ V²) or traversal-heavy → list. Real-world graphs (social, web, road) are sparse — lists dominate.",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>mental model</SectionEyebrow>
        <SectionTitle>Two layouts. Same graph. Wildly different speed.</SectionTitle>
        <Lede>
          A graph is the most general data structure in CS. Trees are graphs, linked lists are
          graphs, the road network is a graph, the internet is a graph. How you represent it in
          memory determines whether an algorithm runs in O(V+E) or O(V²).
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

      <Card padded={false} className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-stone-50 dark:bg-stone-950/50">
            <tr>
              {["Representation", "Space", "Edge check", "Iterate neighbors"].map((h) => (
                <th
                  key={h}
                  className="text-left px-4 py-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 border-b border-stone-200 dark:border-white/10"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { rep: "Adjacency matrix", space: "O(V²)", edge: "O(1)", nb: "O(V)" },
              { rep: "Adjacency list", space: "O(V + E)", edge: "O(deg(v))", nb: "O(deg(v))" },
            ].map((r, i) => (
              <tr key={i} className={i === 0 ? "" : "border-t border-stone-100 dark:border-white/5"}>
                <td className="px-4 py-2 font-medium text-stone-900 dark:text-stone-100">{r.rep}</td>
                <td className="px-4 py-2 font-mono text-lime-700 dark:text-lime-400">{r.space}</td>
                <td className="px-4 py-2 font-mono text-stone-600 dark:text-stone-400">{r.edge}</td>
                <td className="px-4 py-2 font-mono text-stone-600 dark:text-stone-400">{r.nb}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                             */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Graph has 5 vertices. Adjacency matrix uses how much space (cells)?", a: "25" },
    { q: "Graph with V=6, E=8 as adjacency list. Total space order (V + 2E for undirected)?", a: "22" },
    { q: "Given edges A-B, B-C, A-C, how many rows in the adjacency list?", a: "3" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>
        Work each out on paper, then reveal. Space accounting matters in interviews.
      </Callout>
      {problems.map((p, i) => {
        const correct = guesses[i].trim() === p.a;
        return (
          <Card key={i}>
            <div className="text-sm text-stone-800 dark:text-stone-200 mb-3 leading-relaxed">
              <span className="font-bold text-lime-700 dark:text-lime-400">#{i + 1}.</span> {p.q}
            </div>
            <div className="flex gap-2 flex-wrap items-center">
              <input
                type="text"
                value={guesses[i]}
                onChange={(e) => {
                  const v = [...guesses];
                  v[i] = e.target.value;
                  setGuesses(v);
                }}
                placeholder="your answer"
                className="w-24 px-3 py-1.5 rounded-md border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-mono text-sm outline-none focus:border-lime-400"
              />
              <button
                type="button"
                onClick={() => {
                  const v = [...shown];
                  v[i] = true;
                  setShown(v);
                }}
                className="px-3 py-1.5 rounded-md border border-stone-300 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 text-xs font-medium hover:border-stone-500 dark:hover:border-white/30 transition-colors cursor-pointer"
              >
                Reveal
              </button>
              {shown[i] && (
                <span
                  className={`text-xs font-bold px-3 py-1.5 rounded-md ${correct ? "bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-400" : "bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200 border border-rose-500"}`}
                >
                  {correct ? `Correct: ${p.a}` : `Answer: ${p.a}`}
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
/*  Insight                                                            */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>Why representation matters</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          BFS/DFS on adjacency list run in O(V+E). On adjacency matrix they run in O(V²) regardless
          of how few edges exist — the matrix forces you to scan a whole row for each vertex. For a
          social graph with a billion users and only a few hundred friends each, that is the
          difference between seconds and years.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview-style quick reference</SubHeading>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Matrix: space O(V²), add-edge O(1), has-edge O(1), neighbors O(V).</li>
          <li>List: space O(V+E), add-edge O(1), has-edge O(deg), neighbors O(deg).</li>
          <li>For undirected graphs each edge appears twice in the list.</li>
          <li>
            Handshaking lemma: <InlineCode>Σ deg(v) = 2|E|</InlineCode>.
          </li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L4_GraphRepresentation({ onQuizComplete }: Props) {
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
      question: "Which representation uses Θ(V²) space regardless of the number of edges?",
      options: ["Adjacency list", "Edge list", "Adjacency matrix", "Incidence matrix"],
      correctIndex: 2,
      explanation:
        "Adjacency matrix is fixed V×V cells. Even a graph with 0 edges still uses V² cells.",
    },
    {
      question:
        "For a sparse graph with V=10⁴ and E=2·10⁴, which representation is more memory-efficient?",
      options: [
        "Matrix (faster anyway)",
        "List - O(V+E) ≈ 5·10⁴ vs 10⁸ cells",
        "They are equal",
        "Neither - use hash",
      ],
      correctIndex: 1,
      explanation:
        "Matrix would need 10⁸ cells. List uses O(V+E) ≈ 3·10⁴ entries. Huge difference for sparse graphs.",
    },
    {
      question:
        "In an undirected adjacency list, how many total entries across all lists does an edge {u,v} create?",
      options: ["1", "2", "V", "deg(u)"],
      correctIndex: 1,
      explanation:
        "The edge appears in u's list (pointing to v) and in v's list (pointing to u). Hence Σ deg = 2|E|.",
    },
    {
      question:
        "Which operation is O(1) on an adjacency matrix but O(deg(v)) on an adjacency list?",
      options: [
        "Iterate all neighbors of v",
        "Check whether edge (u,v) exists",
        "Add a new vertex",
        "Count total edges",
      ],
      correctIndex: 1,
      explanation:
        "M[u][v] is a direct lookup — constant time. In a list you must scan u's neighbor list to confirm v is there.",
    },
  ];

  return (
    <LessonShell
      title="Graph Representation"
      level={4}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High — every graph problem starts here."
      nextLessonHint="Breadth-First Search"
      onQuizComplete={onQuizComplete}
    />
  );
}
