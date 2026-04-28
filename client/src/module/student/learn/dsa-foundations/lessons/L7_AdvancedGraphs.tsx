import React, { useMemo, useState } from "react";
import { BookOpen, Code2, Lightbulb, Play, Target } from "lucide-react";
import {
  LessonShell,
  type LessonQuizQuestion,
  type LessonTabDef,
} from "../../../../../components/dsa-theory/LessonShell";
import {
  AlgoCanvas,
  PseudocodePanel,
  VariablesPanel,
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
/*  Kosaraju helpers                                                    */
/* ------------------------------------------------------------------ */

const SCC_PALETTE = [
  "#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#06b6d4",
];

type NodeState = "default" | "active" | "done";

interface KFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  phase: "dfs1" | "reverse" | "dfs2" | "done";
  nodeStates: Record<string, NodeState>;
  nodeSccColor?: Record<string, string>;
  reversed: boolean;
  finishOrder: string[];
  sccList: string[][];
  highlightEdges: Record<string, boolean>;
}

const PSEUDO_K = [
  "function kosaraju(G):",
  "  # Phase 1: DFS on G, record finish order",
  "  for v in V: if unvisited: dfs1(v)",
  "  dfs1: recurse neighbors, push on finish",
  "  # Phase 2: reverse all edges -> G^T",
  "  # Phase 3: DFS on G^T in rev-finish order",
  "  for v in reversed(finish):",
  "    if unvisited in G^T:",
  "      sccs.append( dfs2(v) )",
];

const KOSARAJU_IDS = ["A", "B", "C", "D", "E", "F"];
const KOSARAJU_EDGES: [string, string][] = [
  ["A", "B"], ["B", "C"], ["C", "A"],
  ["B", "D"], ["D", "E"], ["E", "F"], ["F", "D"],
];

function buildKosarajuFrames(
  ids: string[],
  edges: [string, string][],
): KFrame[] {
  const frames: KFrame[] = [];
  const adj: Record<string, string[]> = {};
  const rev: Record<string, string[]> = {};
  ids.forEach((id) => { adj[id] = []; rev[id] = []; });
  for (const [u, v] of edges) { adj[u].push(v); rev[v].push(u); }

  const visited: Record<string, boolean> = {};
  const finish: string[] = [];
  const ns: Record<string, NodeState> = Object.fromEntries(ids.map((id) => [id, "default"]));

  frames.push({
    line: 0,
    vars: { V: ids.length, E: edges.length },
    message: "Start Kosaraju. Phase 1: DFS on original graph to record finish times.",
    phase: "dfs1",
    nodeStates: { ...ns },
    reversed: false,
    finishOrder: [],
    sccList: [],
    highlightEdges: {},
  });

  function dfs1(u: string) {
    visited[u] = true;
    ns[u] = "active";
    frames.push({
      line: 3,
      vars: { visit: u, finishLen: finish.length },
      message: `DFS1: visiting ${u}.`,
      phase: "dfs1",
      nodeStates: { ...ns },
      reversed: false,
      finishOrder: [...finish],
      sccList: [],
      highlightEdges: {},
    });
    for (const w of adj[u]) {
      if (!visited[w]) {
        frames.push({
          line: 3,
          vars: { from: u, to: w },
          message: `Descend ${u} -> ${w}.`,
          phase: "dfs1",
          nodeStates: { ...ns },
          reversed: false,
          finishOrder: [...finish],
          sccList: [],
          highlightEdges: { [`${u}->${w}`]: true },
        });
        dfs1(w);
      }
    }
    ns[u] = "done";
    finish.push(u);
    frames.push({
      line: 3,
      vars: { finished: u, finishOrder: `[${finish.join(",")}]` },
      message: `Finish ${u}. finish = [${finish.join(",")}].`,
      phase: "dfs1",
      nodeStates: { ...ns },
      reversed: false,
      finishOrder: [...finish],
      sccList: [],
      highlightEdges: {},
    });
  }

  for (const v of ids) if (!visited[v]) dfs1(v);

  frames.push({
    line: 4,
    vars: { step: "reverse edges" },
    message: "Phase 2: reverse every edge to get G^T. Arrows now flip.",
    phase: "reverse",
    nodeStates: Object.fromEntries(ids.map((id) => [id, "default"])) as Record<string, NodeState>,
    reversed: true,
    finishOrder: [...finish],
    sccList: [],
    highlightEdges: {},
  });

  const visited2: Record<string, boolean> = {};
  const sccList: string[][] = [];
  const sccColor: Record<string, string> = {};

  for (let k = finish.length - 1; k >= 0; k--) {
    const seed = finish[k];
    if (visited2[seed]) continue;
    const comp: string[] = [];
    const color = SCC_PALETTE[sccList.length % SCC_PALETTE.length];

    function dfs2(u: string) {
      visited2[u] = true;
      comp.push(u);
      sccColor[u] = color;
      for (const w of rev[u]) if (!visited2[w]) dfs2(w);
    }
    dfs2(seed);
    sccList.push([...comp]);

    frames.push({
      line: 8,
      vars: { seed, scc: `{${comp.join(",")}}`, sccCount: sccList.length },
      message: `DFS2 from ${seed} in G^T -> SCC = {${comp.join(",")}}.`,
      phase: "dfs2",
      nodeStates: Object.fromEntries(
        ids.map((id) => [id, sccColor[id] ? "done" : "default"])
      ) as Record<string, NodeState>,
      nodeSccColor: { ...sccColor },
      reversed: true,
      finishOrder: [...finish],
      sccList: sccList.map((c) => [...c]),
      highlightEdges: {},
    });
  }

  frames.push({
    line: 0,
    vars: { sccs: sccList.length, done: "yes" },
    message: `Done. Found ${sccList.length} strongly connected component(s).`,
    phase: "done",
    nodeStates: Object.fromEntries(ids.map((id) => [id, "done"])) as Record<string, NodeState>,
    nodeSccColor: { ...sccColor },
    reversed: true,
    finishOrder: [...finish],
    sccList,
    highlightEdges: {},
  });

  return frames;
}

/* ------------------------------------------------------------------ */
/*  Kosaraju SVG graph renderer                                        */
/* ------------------------------------------------------------------ */

function circleLayout(
  ids: string[],
  cx = 240,
  cy = 140,
  r = 100,
): Record<string, { x: number; y: number }> {
  const n = ids.length;
  const pos: Record<string, { x: number; y: number }> = {};
  ids.forEach((id, i) => {
    const angle = (2 * Math.PI * i) / Math.max(1, n) - Math.PI / 2;
    pos[id] = { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
  return pos;
}

function nodeColor(state: NodeState, sccCol?: string): string {
  if (sccCol) return sccCol;
  if (state === "active") return THEME.accent;
  if (state === "done") return THEME.accentDark;
  return THEME.border;
}

function KosarajuGraph({
  ids,
  edges,
  frame,
}: {
  ids: string[];
  edges: [string, string][];
  frame: KFrame;
}) {
  const pos = useMemo(() => circleLayout(ids), [ids]);
  const W = 480;
  const H = 280;
  const R = 18;

  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      className="block mx-auto"
      style={{ maxWidth: "100%", overflow: "visible" }}
    >
      {/* Edges */}
      {edges.map(([u, v]) => {
        const fromId = frame.reversed ? v : u;
        const toId = frame.reversed ? u : v;
        const fromPos = pos[fromId];
        const toPos = pos[toId];
        if (!fromPos || !toPos) return null;
        const key = `${u}->${v}`;
        const active = !!frame.highlightEdges[key];
        const dx = toPos.x - fromPos.x;
        const dy = toPos.y - fromPos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const ux = dx / dist;
        const uy = dy / dist;
        const x1 = fromPos.x + ux * (R + 2);
        const y1 = fromPos.y + uy * (R + 2);
        const x2 = toPos.x - ux * (R + 8);
        const y2 = toPos.y - uy * (R + 8);
        return (
          <g key={key}>
            <defs>
              <marker
                id={`arrow-${key.replace(/[^a-zA-Z0-9]/g, "_")}`}
                markerWidth="8"
                markerHeight="8"
                refX="4"
                refY="2"
                orient="auto"
              >
                <path
                  d="M0,0 L0,4 L6,2 z"
                  fill={active ? THEME.accent : THEME.textMuted}
                />
              </marker>
            </defs>
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={active ? THEME.accent : THEME.textMuted}
              strokeWidth={active ? 2.5 : 1.5}
              markerEnd={`url(#arrow-${key.replace(/[^a-zA-Z0-9]/g, "_")})`}
              opacity={active ? 1 : 0.5}
              style={{ transition: "stroke 0.2s, opacity 0.2s" }}
            />
          </g>
        );
      })}
      {/* Nodes */}
      {ids.map((id) => {
        const p = pos[id];
        if (!p) return null;
        const state = frame.nodeStates[id] ?? "default";
        const sccCol = frame.nodeSccColor?.[id];
        const fill = nodeColor(state, sccCol);
        const isActive = state === "active";
        return (
          <g key={id}>
            <circle
              cx={p.x}
              cy={p.y}
              r={R}
              fill={fill}
              stroke={isActive ? THEME.accent : THEME.border}
              strokeWidth={isActive ? 2.5 : 1.5}
              style={{ transition: "fill 0.3s, stroke 0.3s" }}
            />
            <text
              x={p.x}
              y={p.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="13"
              fontWeight="bold"
              fill={sccCol || state !== "default" ? "#fff" : THEME.text}
              fontFamily={THEME.heading}
              style={{ pointerEvents: "none" }}
            >
              {id}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function KosarajuVisualizer() {
  const ids = KOSARAJU_IDS;
  const edges = KOSARAJU_EDGES;
  const frames = useMemo(() => buildKosarajuFrames(ids, edges), []);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="Kosaraju's Strongly Connected Components"
      player={player}
      pseudocode={<PseudocodePanel lines={PSEUDO_K} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} />}
    >
      <div className="flex flex-col gap-4">
        <KosarajuGraph ids={ids} edges={edges} frame={frame ?? {
          line: 0, vars: {}, message: "", phase: "dfs1",
          nodeStates: Object.fromEntries(ids.map((id) => [id, "default"])) as Record<string, NodeState>,
          reversed: false, finishOrder: [], sccList: [], highlightEdges: {},
        }} />
        {/* SCC legend */}
        {(frame?.sccList?.length ?? 0) > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {frame!.sccList.map((c, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-stone-200 dark:border-white/10 text-xs font-mono font-bold text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-900"
              >
                <span
                  className="inline-block w-2.5 h-2.5 rounded-sm"
                  style={{ background: SCC_PALETTE[i % SCC_PALETTE.length] }}
                />
                SCC {i + 1}: {`{${c.join(",")}}`}
              </span>
            ))}
          </div>
        )}
        {frame?.finishOrder && frame.finishOrder.length > 0 && (
          <div className="text-xs font-mono text-stone-500 dark:text-stone-400 text-center">
            finish order: [{frame.finishOrder.join(", ")}]
          </div>
        )}
        <Callout>{frame?.message ?? "Press play to start."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Floyd-Warshall helpers                                             */
/* ------------------------------------------------------------------ */

interface FWFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  dist: (number | null)[][];
  k: number;
  i: number;
  j: number;
  updated?: boolean;
  ids: string[];
  highlightRowCol?: number;
}

const PSEUDO_FW = [
  "function floydWarshall(dist):",
  "  for k from 0 to n-1:",
  "    for i from 0 to n-1:",
  "      for j from 0 to n-1:",
  "        if d[i][k]+d[k][j] < d[i][j]:",
  "          d[i][j] = d[i][k] + d[k][j]",
];

const FW_IDS = ["A", "B", "C", "D"];
const FW_EDGES: [string, string, number][] = [
  ["A", "B", 3], ["A", "C", 7], ["B", "C", 2], ["B", "D", 5], ["C", "D", 1], ["D", "A", 6],
];

function buildFWFrames(
  ids: string[],
  edges: [string, string, number][],
): FWFrame[] {
  const n = ids.length;
  const idx: Record<string, number> = {};
  ids.forEach((id, i) => (idx[id] = i));
  const dist: (number | null)[][] = Array.from({ length: n }, () =>
    new Array<number | null>(n).fill(null),
  );
  for (let i = 0; i < n; i++) dist[i][i] = 0;
  for (const [u, v, w] of edges) {
    const ii = idx[u];
    const jj = idx[v];
    if (dist[ii][jj] === null || w < dist[ii][jj]!) dist[ii][jj] = w;
  }

  const frames: FWFrame[] = [];
  frames.push({
    line: 0,
    vars: { n, step: "init" },
    message:
      "Initialize distance matrix: 0 on diagonal, direct edge weights, null (infinity) otherwise.",
    dist: dist.map((r) => [...r]),
    k: -1,
    i: -1,
    j: -1,
    ids,
  });

  for (let k = 0; k < n; k++) {
    frames.push({
      line: 1,
      vars: { k: ids[k] },
      message: `Consider intermediate k=${ids[k]}. Try paths i -> ${ids[k]} -> j.`,
      dist: dist.map((r) => [...r]),
      k,
      i: -1,
      j: -1,
      ids,
      highlightRowCol: k,
    });
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === k || j === k) continue;
        const via =
          dist[i][k] !== null && dist[k][j] !== null
            ? dist[i][k]! + dist[k][j]!
            : null;
        const cur = dist[i][j];
        const better = via !== null && (cur === null || via < cur);
        frames.push({
          line: 4,
          vars: {
            k: ids[k],
            i: ids[i],
            j: ids[j],
            "d[i][k]": dist[i][k] === null ? "inf" : dist[i][k]!,
            "d[k][j]": dist[k][j] === null ? "inf" : dist[k][j]!,
            via: via === null ? "inf" : via,
            "d[i][j]": cur === null ? "inf" : cur,
          },
          message: better
            ? `Better path ${ids[i]}->${ids[k]}->${ids[j]} = ${via} < current ${cur === null ? "inf" : cur}. Update.`
            : `No improvement for (${ids[i]}, ${ids[j]}).`,
          dist: dist.map((r) => [...r]),
          k,
          i,
          j,
          ids,
          highlightRowCol: k,
          updated: better,
        });
        if (better) {
          dist[i][j] = via!;
          frames.push({
            line: 5,
            vars: { [`d[${ids[i]}][${ids[j]}]`]: dist[i][j]! },
            message: `Set d[${ids[i]}][${ids[j]}] = ${dist[i][j]}.`,
            dist: dist.map((r) => [...r]),
            k,
            i,
            j,
            ids,
            highlightRowCol: k,
            updated: true,
          });
        }
      }
    }
  }

  frames.push({
    line: 0,
    vars: { done: "yes" },
    message: "All-pairs shortest paths computed.",
    dist: dist.map((r) => [...r]),
    k: n - 1,
    i: -1,
    j: -1,
    ids,
  });

  return frames;
}

/* ------------------------------------------------------------------ */
/*  Floyd-Warshall matrix renderer                                     */
/* ------------------------------------------------------------------ */

function FWMatrix({ frame }: { frame: FWFrame }) {
  const n = frame.ids.length;
  const CELL = 44;

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `${CELL}px repeat(${n}, ${CELL}px)`,
          gap: 2,
        }}
      >
        {/* Header row */}
        <div />
        {frame.ids.map((id, j) => (
          <div
            key={`h-${id}`}
            style={{
              width: CELL,
              height: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.75rem",
              fontWeight: 800,
              color:
                frame.highlightRowCol === j ? "#8b5cf6" : THEME.text,
              fontFamily: THEME.heading,
              transition: "color 0.25s",
            }}
          >
            {id}
          </div>
        ))}

        {/* Data rows */}
        {frame.ids.map((rid, i) => (
          <React.Fragment key={`row-${rid}`}>
            <div
              style={{
                width: CELL,
                height: CELL,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontWeight: 800,
                color:
                  frame.highlightRowCol === i ? "#8b5cf6" : THEME.text,
                fontFamily: THEME.heading,
                transition: "color 0.25s",
              }}
            >
              {rid}
            </div>
            {frame.dist[i].map((v, j) => {
              const isActive = frame.i === i && frame.j === j;
              const isK =
                frame.highlightRowCol === j ||
                frame.highlightRowCol === i;
              const updated = isActive && !!frame.updated;
              const bg = updated
                ? "rgba(101,163,13,0.18)"
                : isActive
                  ? "rgba(245,158,11,0.18)"
                  : isK
                    ? "rgba(139,92,246,0.08)"
                    : THEME.bg;
              const border = updated
                ? `2px solid ${THEME.success}`
                : isActive
                  ? "2px solid #f59e0b"
                  : `1px solid ${THEME.border}`;
              return (
                <div
                  key={`${i}-${j}`}
                  style={{
                    width: CELL,
                    height: CELL,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: THEME.mono,
                    fontWeight: 700,
                    fontSize: "0.83rem",
                    color: v === null ? THEME.textMuted : THEME.text,
                    background: bg,
                    border,
                    borderRadius: 4,
                    transition: "background 0.3s, border 0.3s",
                  }}
                >
                  {v === null ? "inf" : v}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
      {frame.k >= 0 && frame.k < n && (
        <div
          className="text-xs font-semibold"
          style={{ color: "#7c3aed", fontFamily: THEME.heading }}
        >
          intermediate k = <strong>{frame.ids[frame.k]}</strong>
        </div>
      )}
    </div>
  );
}

function FloydWarshallVisualizer() {
  const ids = FW_IDS;
  const edges = FW_EDGES;
  const frames = useMemo(() => buildFWFrames(ids, edges), []);
  const player = useStepPlayer(frames, 600);
  const frame = player.current;

  const emptyFrame: FWFrame = {
    line: 0,
    vars: {},
    message: "",
    dist: Array.from({ length: ids.length }, () =>
      new Array<number | null>(ids.length).fill(null),
    ),
    k: -1,
    i: -1,
    j: -1,
    ids,
  };

  return (
    <AlgoCanvas
      title="Floyd-Warshall All-Pairs Shortest Paths"
      player={player}
      pseudocode={<PseudocodePanel lines={PSEUDO_FW} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["d[i][j]"]} />}
    >
      <div className="flex flex-col gap-4">
        <div className="overflow-x-auto">
          <FWMatrix frame={frame ?? emptyFrame} />
        </div>
        <div className="flex flex-wrap gap-3 justify-center text-xs text-stone-500 dark:text-stone-400 font-mono">
          <span>
            <span className="inline-block w-3 h-3 rounded-sm mr-1 align-middle" style={{ background: "#8b5cf6", opacity: 0.2 }} />
            intermediate k
          </span>
          <span>
            <span className="inline-block w-3 h-3 rounded-sm mr-1 align-middle" style={{ background: "#f59e0b", opacity: 0.4 }} />
            current cell
          </span>
          <span>
            <span className="inline-block w-3 h-3 rounded-sm mr-1 align-middle" style={{ background: THEME.success, opacity: 0.3 }} />
            updated
          </span>
        </div>
        <Callout>{frame?.message ?? "Press play to start."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab with sub-tabs                                        */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [which, setWhich] = useState<"kosaraju" | "fw">("kosaraju");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <PillButton active={which === "kosaraju"} onClick={() => setWhich("kosaraju")}>
          Kosaraju (SCC)
        </PillButton>
        <PillButton active={which === "fw"} onClick={() => setWhich("fw")}>
          Floyd-Warshall (APSP)
        </PillButton>
      </div>
      {which === "kosaraju" ? <KosarajuVisualizer /> : <FloydWarshallVisualizer />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "SCC definition", body: "A strongly connected component is a maximal subset of vertices where every pair (u, v) has a directed path u to v AND v to u. Equivalent: the induced subgraph on that set is strongly connected." },
    { title: "Kosaraju's idea", body: "Do DFS, note finish times. Reverse all edges. Do DFS again, starting from the vertex with the latest finish. Each DFS tree in the second pass is one SCC. Runs in O(V + E)." },
    { title: "Why finish order works", body: "In the condensation DAG (SCCs as nodes), a vertex with the latest finish time belongs to a source SCC. On the reversed graph that becomes a sink, DFS from it can only reach its own SCC." },
    { title: "Floyd-Warshall idea", body: "dp[k][i][j] = shortest path from i to j using only {0..k} as intermediates. Transition: dp[k][i][j] = min(dp[k-1][i][j], dp[k-1][i][k] + dp[k-1][k][j]). Flatten the k dimension by updating in place." },
    { title: "Floyd-Warshall complexity", body: "O(V^3) time, O(V^2) space. Handles negative weights (but not negative cycles, detect via dist[i][i] < 0 after the algorithm)." },
    { title: "When to use which", body: "Dijkstra for single-source non-negative weights. Bellman-Ford for single-source with negative edges. Floyd-Warshall when you need ALL pairs and V is at most a few hundred. Kosaraju/Tarjan for SCC decomposition (often as preprocessing for 2-SAT or implication graphs)." },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>graph dp, condensation</SectionEyebrow>
        <SectionTitle>Two classics: structure, then all-pairs distances</SectionTitle>
        <Lede>
          Kosaraju sees the graph's condensation DAG by poking it in the right order. Floyd-Warshall is three nested loops doing a relaxation everywhere all at once, elegant dynamic programming on graph structure.
        </Lede>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {sections.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-700 dark:text-lime-400 mb-2 tracking-widest uppercase">
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
/*  Try It                                                              */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Time complexity of Kosaraju's algorithm?", answer: "O(V+E)" },
    { q: "Floyd-Warshall time complexity?", answer: "O(V^3)" },
    { q: "How do we detect a negative cycle after running Floyd-Warshall?", answer: "dist[i][i] < 0" },
    { q: "In Kosaraju's, after Phase 1, which vertex is processed FIRST in Phase 2?", answer: "latest finish" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>Answer with a key phrase or formula.</Callout>
      {problems.map((p, i) => (
        <Card key={i}>
          <p className="text-sm text-stone-800 dark:text-stone-200 mb-3 leading-relaxed">{p.q}</p>
          <div className="flex gap-2 items-center flex-wrap">
            <input
              value={guesses[i]}
              onChange={(e) => { const g = [...guesses]; g[i] = e.target.value; setGuesses(g); }}
              placeholder="your answer"
              className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-sm font-mono text-stone-900 dark:text-stone-100 outline-none focus:border-stone-400 dark:focus:border-white/30"
              style={{ minWidth: 240 }}
            />
            <button
              type="button"
              onClick={() => { const s = [...shown]; s[i] = true; setShown(s); }}
              className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 text-xs font-mono text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30 transition-colors cursor-pointer bg-white dark:bg-stone-900"
            >
              Reveal
            </button>
            {shown[i] && (
              <span className="px-3 py-1 rounded-md text-xs font-bold bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-300 dark:border-lime-400/30">
                Answer: {p.answer}
              </span>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Insight                                                             */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>Why Kosaraju processes reverse-finish order</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          The vertex with the latest finish in the first DFS lies in a source SCC of the condensation. After reversing, this source becomes a sink, a DFS from it cannot leave its own SCC. Peeling SCCs one at a time from highest finish downward yields all SCCs cleanly.
        </p>
      </Card>

      <Card>
        <SubHeading>Why Floyd-Warshall's loop order matters</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          k MUST be the outermost loop. Reading <InlineCode>dist[i][k]</InlineCode> and <InlineCode>dist[k][j]</InlineCode> gives the right values, even after in-place updates, because row k and column k are invariant once the k-th iteration begins. Swapping loop order breaks the DP.
        </p>
      </Card>

      <Card>
        <SubHeading>Interview trap</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          A vertex is its own SCC if no back-path exists. Every DAG has V singleton SCCs. A graph has exactly 1 SCC iff it is strongly connected.
        </p>
      </Card>

      <Card>
        <SubHeading>Where this lands in interviews and production</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed space-y-1.5 pl-4 list-disc">
          <li><strong className="text-stone-900 dark:text-stone-100">SCC condensation</strong>: collapse each SCC into a single node to get a DAG. Used in 2-SAT, dataflow analysis, deadlock detection.</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Floyd-Warshall for small graphs</strong>: city-routing with up to a few hundred nodes, network reachability matrices.</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Transitive closure</strong>: replace "shorter path" with "reachability" in Floyd-Warshall, same O(V^3) approach.</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Social-network SCCs</strong>: in a directed follow graph, an SCC is a friend-clique where everyone transitively follows everyone.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L7_AdvancedGraphs({ onQuizComplete }: Props) {
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
      question: "Kosaraju's algorithm runs in:",
      options: ["O(V log V)", "O(V + E)", "O(V * E)", "O(V^2 + E)"],
      correctIndex: 1,
      explanation: "Two linear DFS passes plus a transpose step, all linear in V+E.",
    },
    {
      question: "Floyd-Warshall's time complexity is:",
      options: ["O(V^2)", "O(V^2 log V)", "O(V^3)", "O(V * E)"],
      correctIndex: 2,
      explanation: "Three nested loops over vertices, each doing constant work.",
    },
    {
      question: "Which of the following CAN Floyd-Warshall handle correctly?",
      options: ["Negative-weight edges without negative cycles", "Negative cycles", "Only non-negative weights", "Only DAGs"],
      correctIndex: 0,
      explanation: "Negative edges are fine as long as no negative-weight cycle exists. A negative cycle shows as dist[i][i] < 0.",
    },
    {
      question: "Why does Kosaraju process vertices in reverse finish order in Phase 2?",
      options: [
        "To visit high-degree vertices first",
        "Because the latest-finishing vertex is in a source SCC of the condensation",
        "To minimize stack depth",
        "To avoid revisiting vertices",
      ],
      correctIndex: 1,
      explanation: "Latest finish is in a source SCC of the condensation. On the reversed graph, a source becomes a sink, DFS from there exactly captures one SCC.",
    },
  ];

  return (
    <LessonShell
      title="Advanced Graph Algorithms"
      level={7}
      lessonNumber={8}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Medium, SCC, all-pairs shortest paths, 2-SAT preprocessing."
      nextLessonHint="Tarjan's Low-Link"
      onQuizComplete={onQuizComplete}
    />
  );
}
