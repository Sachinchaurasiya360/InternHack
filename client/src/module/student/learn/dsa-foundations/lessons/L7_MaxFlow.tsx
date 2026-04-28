import { useMemo, useState } from "react";
import { BookOpen, Lightbulb, Play, Target } from "lucide-react";
import {
  LessonShell,
  type LessonQuizQuestion,
  type LessonTabDef,
} from "../../../../../components/dsa-theory/LessonShell";
import {
  AlgoCanvas,
  PseudocodePanel,
  useStepPlayer,
  VariablesPanel,
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

/* No practice slug for this lesson (set to null per the task table) */

/* ------------------------------------------------------------------ */
/*  Types and helpers                                                    */
/* ------------------------------------------------------------------ */

interface EdgeDef {
  from: string;
  to: string;
  cap: number;
}

interface NodePos {
  x: number;
  y: number;
}

type NodeState = "default" | "source" | "sink" | "path";
type EdgeState = "default" | "path" | "saturated" | "reverse";

interface EKFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  residual: Record<string, number>;
  flowMap: Record<string, number>;
  totalFlow: number;
  augPath: string[];
  augBottleneck?: number;
  nodeStates: Record<string, NodeState>;
  edgeStates: Record<string, EdgeState>;
  iteration: number;
}

/* ------------------------------------------------------------------ */
/*  Graph presets with fixed positions                                   */
/* ------------------------------------------------------------------ */

interface Preset {
  id: string;
  label: string;
  edges: EdgeDef[];
  source: string;
  sink: string;
  pos: Record<string, NodePos>;
}

const PRESETS: Preset[] = [
  {
    id: "clrs",
    label: "CLRS 26.1",
    source: "S",
    sink: "T",
    edges: [
      { from: "S", to: "A", cap: 10 },
      { from: "S", to: "C", cap: 10 },
      { from: "A", to: "B", cap: 4 },
      { from: "A", to: "C", cap: 2 },
      { from: "A", to: "D", cap: 8 },
      { from: "B", to: "T", cap: 10 },
      { from: "C", to: "D", cap: 9 },
      { from: "D", to: "B", cap: 6 },
      { from: "D", to: "T", cap: 10 },
    ],
    pos: {
      S: { x: 60, y: 150 },
      A: { x: 200, y: 70 },
      B: { x: 340, y: 70 },
      C: { x: 200, y: 230 },
      D: { x: 340, y: 230 },
      T: { x: 480, y: 150 },
    },
  },
  {
    id: "twopaths",
    label: "Two paths",
    source: "S",
    sink: "T",
    edges: [
      { from: "S", to: "A", cap: 5 },
      { from: "S", to: "B", cap: 5 },
      { from: "A", to: "T", cap: 5 },
      { from: "B", to: "T", cap: 5 },
    ],
    pos: {
      S: { x: 60, y: 150 },
      A: { x: 240, y: 80 },
      B: { x: 240, y: 220 },
      T: { x: 420, y: 150 },
    },
  },
  {
    id: "bottleneck",
    label: "Bottleneck",
    source: "S",
    sink: "T",
    edges: [
      { from: "S", to: "A", cap: 100 },
      { from: "A", to: "B", cap: 1 },
      { from: "B", to: "T", cap: 100 },
    ],
    pos: {
      S: { x: 60, y: 150 },
      A: { x: 200, y: 150 },
      B: { x: 340, y: 150 },
      T: { x: 480, y: 150 },
    },
  },
  {
    id: "cancel",
    label: "Cancel trick",
    source: "S",
    sink: "T",
    edges: [
      { from: "S", to: "A", cap: 3 },
      { from: "S", to: "B", cap: 3 },
      { from: "A", to: "B", cap: 3 },
      { from: "A", to: "T", cap: 3 },
      { from: "B", to: "T", cap: 3 },
    ],
    pos: {
      S: { x: 60, y: 150 },
      A: { x: 240, y: 70 },
      B: { x: 240, y: 230 },
      T: { x: 420, y: 150 },
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Edmonds-Karp frame builder                                           */
/* ------------------------------------------------------------------ */

const EK_PSEUDO = [
  "Edmonds-Karp(G, s, t):",
  "  residual[u→v] = cap(u,v); residual[v→u] = 0",
  "  totalFlow = 0",
  "  while BFS(s → t) in residual finds path:",
  "    path = reconstruct via parent pointers",
  "    bottleneck = min residual along path",
  "    for each (u,v) on path:",
  "      residual[u→v] -= bottleneck",
  "      residual[v→u] += bottleneck",
  "    totalFlow += bottleneck",
  "  return totalFlow",
];

function buildEKFrames(preset: Preset): EKFrame[] {
  const { edges, source, sink } = preset;
  const ids = Array.from(
    new Set(edges.flatMap((e) => [e.from, e.to]))
  );

  const frames: EKFrame[] = [];
  const residual: Record<string, number> = {};
  const flowMap: Record<string, number> = {};
  const adj: Record<string, Set<string>> = Object.fromEntries(
    ids.map((id) => [id, new Set<string>()])
  );

  for (const e of edges) {
    const k = `${e.from}-${e.to}`;
    const rk = `${e.to}-${e.from}`;
    residual[k] = (residual[k] ?? 0) + e.cap;
    if (residual[rk] === undefined) residual[rk] = 0;
    flowMap[k] = 0;
    adj[e.from].add(e.to);
    adj[e.to].add(e.from);
  }

  let totalFlow = 0;
  let iteration = 0;

  const nodeStates = (path: string[]): Record<string, NodeState> => {
    const ns: Record<string, NodeState> = Object.fromEntries(
      ids.map((id) => [id, "default" as NodeState])
    );
    ns[source] = "source";
    ns[sink] = "sink";
    for (const v of path) {
      if (v !== source && v !== sink) ns[v] = "path";
    }
    return ns;
  };

  const edgeStates = (path: string[]): Record<string, EdgeState> => {
    const es: Record<string, EdgeState> = {};
    for (let i = 0; i + 1 < path.length; i++) {
      es[`${path[i]}-${path[i + 1]}`] = "path";
    }
    for (const e of edges) {
      const k = `${e.from}-${e.to}`;
      if (residual[k] === 0 && !es[k]) es[k] = "saturated";
    }
    return es;
  };

  const snap = (
    line: number,
    message: string,
    vars: Record<string, string | number | undefined> = {},
    path: string[] = [],
    bottleneck?: number,
  ) => {
    frames.push({
      line,
      vars,
      message,
      residual: { ...residual },
      flowMap: { ...flowMap },
      totalFlow,
      augPath: [...path],
      augBottleneck: bottleneck,
      nodeStates: nodeStates(path),
      edgeStates: edgeStates(path),
      iteration,
    });
  };

  snap(1, `Initialize residual graph. Each edge gets its capacity; each reverse edge starts at 0.`);

  while (true) {
    iteration++;
    const parent: Record<string, string | undefined> = {};
    parent[source] = undefined;
    const visited = new Set<string>([source]);
    const Q: string[] = [source];
    snap(3, `Iteration ${iteration}: BFS from ${source} to find an augmenting path in the residual graph.`, { iter: iteration });

    let found = false;
    while (Q.length) {
      const u = Q.shift()!;
      for (const v of adj[u]) {
        if (!visited.has(v) && (residual[`${u}-${v}`] ?? 0) > 0) {
          visited.add(v);
          parent[v] = u;
          Q.push(v);
          if (v === sink) { found = true; break; }
        }
      }
      if (found) break;
    }

    if (!found) {
      snap(3, `BFS could not reach ${sink} in the residual graph. No augmenting path exists. DONE, max flow = ${totalFlow}.`, { totalFlow, iter: iteration }, [], undefined);
      break;
    }

    const path: string[] = [];
    let cur: string | undefined = sink;
    while (cur !== undefined) { path.unshift(cur); cur = parent[cur]; }

    snap(4, `Augmenting path found: ${path.join(" → ")}.`, { path: path.join("→"), iter: iteration }, path);

    let bottleneck = Infinity;
    for (let i = 0; i + 1 < path.length; i++) {
      const c = residual[`${path[i]}-${path[i + 1]}`] ?? 0;
      if (c < bottleneck) bottleneck = c;
    }
    snap(5, `Bottleneck = min residual along path = ${bottleneck}.`, { bottleneck, iter: iteration }, path, bottleneck);

    for (let i = 0; i + 1 < path.length; i++) {
      const u = path[i], v = path[i + 1];
      residual[`${u}-${v}`] -= bottleneck;
      residual[`${v}-${u}`] = (residual[`${v}-${u}`] ?? 0) + bottleneck;
      if (flowMap[`${u}-${v}`] !== undefined) {
        flowMap[`${u}-${v}`] += bottleneck;
      } else if (flowMap[`${v}-${u}`] !== undefined) {
        flowMap[`${v}-${u}`] -= bottleneck;
      }
    }
    totalFlow += bottleneck;

    snap(9, `Pushed ${bottleneck} units. Forward residuals decrease; reverse residuals increase. Total flow = ${totalFlow}.`, { pushed: bottleneck, totalFlow, iter: iteration }, path, bottleneck);
  }

  return frames;
}

/* ------------------------------------------------------------------ */
/*  Flow network SVG renderer                                           */
/* ------------------------------------------------------------------ */

const NODE_R = 20;
const SVG_W = 560;
const SVG_H = 300;

function arrowPath(
  x1: number, y1: number,
  x2: number, y2: number,
  r: number,
): { dx1: number; dy1: number; dx2: number; dy2: number; mx: number; my: number } {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = dx / len;
  const ny = dy / len;
  return {
    dx1: x1 + nx * r,
    dy1: y1 + ny * r,
    dx2: x2 - nx * (r + 8),
    dy2: y2 - ny * (r + 8),
    mx: (x1 + x2) / 2,
    my: (y1 + y2) / 2,
  };
}

interface FlowNetworkSVGProps {
  preset: Preset;
  frame: EKFrame;
}

function FlowNetworkSVG({ preset, frame }: FlowNetworkSVGProps) {
  const { edges, pos } = preset;

  const nodeColor = (state: NodeState) => {
    if (state === "source") return THEME.accent;
    if (state === "sink") return "#38bdf8"; // sky-400
    if (state === "path") return "#fb923c"; // orange-400
    return THEME.border;
  };

  const nodeTextColor = (state: NodeState) => {
    if (state === "source" || state === "path" || state === "sink") return THEME.text;
    return THEME.textMuted;
  };

  const edgeColor = (state: EdgeState | undefined) => {
    if (state === "path") return "#fb923c";
    if (state === "saturated") return "#fbbf24";
    return "#a8a29e"; // stone-400
  };

  const edgeWidth = (state: EdgeState | undefined) => {
    if (state === "path") return 3;
    return 1.5;
  };

  return (
    <svg
      width={SVG_W}
      height={SVG_H}
      viewBox={`0 0 ${SVG_W} ${SVG_H}`}
      className="w-full block"
      style={{ maxHeight: SVG_H }}
    >
      <defs>
        <marker id="arrow-default" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#a8a29e" />
        </marker>
        <marker id="arrow-path" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#fb923c" />
        </marker>
        <marker id="arrow-saturated" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#fbbf24" />
        </marker>
      </defs>

      {edges.map((e, i) => {
        const p1 = pos[e.from];
        const p2 = pos[e.to];
        if (!p1 || !p2) return null;
        const { dx1, dy1, dx2, dy2, mx, my } = arrowPath(p1.x, p1.y, p2.x, p2.y, NODE_R);
        const key = `${e.from}-${e.to}`;
        const state = frame.edgeStates[key];
        const col = edgeColor(state);
        const w = edgeWidth(state);
        const f = frame.flowMap[key] ?? 0;
        const markerId =
          state === "path"
            ? "arrow-path"
            : state === "saturated"
            ? "arrow-saturated"
            : "arrow-default";

        return (
          <g key={i}>
            <line
              x1={dx1} y1={dy1} x2={dx2} y2={dy2}
              stroke={col}
              strokeWidth={w}
              markerEnd={`url(#${markerId})`}
              style={{ transition: "stroke 0.25s, stroke-width 0.25s" }}
            />
            <rect
              x={mx - 18} y={my - 9}
              width={36} height={17}
              rx={3}
              fill={state === "path" ? "#fff7ed" : "#fafaf9"}
              stroke={state === "path" ? "#fb923c" : THEME.border}
              strokeWidth={state === "path" ? 1.5 : 1}
            />
            <text
              x={mx} y={my + 4}
              textAnchor="middle"
              fontSize="9"
              fontFamily={THEME.mono}
              fontWeight="700"
              fill={state === "path" ? "#c2410c" : THEME.textMuted}
            >
              {f}/{e.cap}
            </text>
          </g>
        );
      })}

      {Object.entries(pos).map(([id, p]) => {
        const state = frame.nodeStates[id] ?? "default";
        const fill = nodeColor(state);
        const textCol = nodeTextColor(state);
        return (
          <g key={id} style={{ transition: "all 0.25s" }}>
            <circle
              cx={p.x} cy={p.y} r={NODE_R}
              fill={fill}
              stroke={state === "path" ? "#ea580c" : state === "source" ? THEME.accentDark : state === "sink" ? "#0284c7" : THEME.textMuted}
              strokeWidth={state !== "default" ? 2.5 : 1.5}
              style={{ transition: "fill 0.25s, stroke 0.25s" }}
            />
            <text
              x={p.x} y={p.y + 4}
              textAnchor="middle"
              fontSize="12"
              fontFamily={THEME.heading}
              fontWeight="800"
              fill={textCol}
            >
              {id}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Edge flow side panel                                                 */
/* ------------------------------------------------------------------ */

function EdgeFlowPanel({ preset, frame }: { preset: Preset; frame: EKFrame }) {
  const { edges } = preset;
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1">
        total flow
      </div>
      <div className="text-3xl font-black font-mono text-lime-700 dark:text-lime-400 leading-none mb-3 tabular-nums">
        {frame.totalFlow}
      </div>
      {frame.augBottleneck !== undefined && (
        <div className="text-xs text-stone-500 mb-2">
          Last bottleneck: <span className="font-bold text-amber-600">{frame.augBottleneck}</span>
        </div>
      )}
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1">
        edge flows (f / cap)
      </div>
      <div className="flex flex-col gap-1 max-h-48 overflow-y-auto">
        {edges.map((e, i) => {
          const k = `${e.from}-${e.to}`;
          const f = frame.flowMap[k] ?? 0;
          const ratio = f / e.cap;
          const onPath = frame.augPath.some(
            (_, idx) => frame.augPath[idx] === e.from && frame.augPath[idx + 1] === e.to
          );
          return (
            <div
              key={i}
              className="flex justify-between items-center px-2 py-1 rounded-md border text-xs font-mono transition-colors"
              style={{
                background: onPath
                  ? "rgba(251,146,60,0.12)"
                  : ratio >= 1
                  ? "rgba(251,191,36,0.12)"
                  : ratio > 0
                  ? "rgba(163,230,53,0.10)"
                  : undefined,
                borderColor: onPath
                  ? "rgba(251,146,60,0.5)"
                  : ratio >= 1
                  ? "rgba(251,191,36,0.5)"
                  : THEME.border,
              }}
            >
              <span className="font-bold text-stone-900 dark:text-stone-100">
                {e.from}→{e.to}
              </span>
              <span
                className="tabular-nums"
                style={{
                  color: ratio >= 1 ? "#92400e" : THEME.textMuted,
                }}
              >
                <strong style={{ color: THEME.text }}>{f}</strong>/{e.cap}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-2 pt-2 border-t border-stone-200 dark:border-white/10 text-[10px] text-stone-500 leading-relaxed">
        Iteration: <strong className="text-stone-700 dark:text-stone-300">{frame.iteration}</strong>
        <br />
        <span className="italic">Saturated edges reveal the min-cut.</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                            */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [presetId, setPresetId] = useState("clrs");
  const preset = PRESETS.find((p) => p.id === presetId) ?? PRESETS[0];
  const frames = useMemo(() => buildEKFrames(preset), [preset]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title={`Max-Flow (Edmonds-Karp), ${preset.source} → ${preset.sink}`}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              / graph preset
            </label>
            <div className="flex flex-wrap gap-1.5">
              {PRESETS.map((p) => (
                <PillButton
                  key={p.id}
                  active={presetId === p.id}
                  onClick={() => setPresetId(p.id)}
                >
                  {p.label}
                </PillButton>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <EdgeFlowPanel preset={preset} frame={frame ?? { totalFlow: 0, flowMap: {}, augPath: [], augBottleneck: undefined, nodeStates: {}, edgeStates: {}, iteration: 0, line: 0, vars: {}, message: "", residual: {} }} />
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={EK_PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["totalFlow", "bottleneck", "pushed"]} />}
    >
      <div className="flex flex-col gap-3">
        <FlowNetworkSVG preset={preset} frame={frame ?? { totalFlow: 0, flowMap: {}, augPath: [], augBottleneck: undefined, nodeStates: {}, edgeStates: {}, iteration: 0, line: 0, vars: {}, message: "", residual: {} }} />
        <div className="flex flex-wrap gap-3 text-xs text-stone-600 dark:text-stone-400 items-center">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-sm" style={{ background: THEME.accent }} />
            source
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-sm" style={{ background: "#38bdf8" }} />
            sink
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-sm" style={{ background: "#fb923c" }} />
            augmenting path
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-sm" style={{ background: "#fbbf24" }} />
            saturated edge
          </span>
          <span className="font-mono text-[10px] text-stone-500">edge label = flow / capacity</span>
        </div>
        <Callout>{frame?.message ?? "Press play to step through Edmonds-Karp."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "What is max-flow?", b: "Given a directed graph with edge capacities, a source s, and a sink t, find the maximum amount of flow that can be sent from s to t such that (1) every edge's flow is at most its capacity and (2) flow conservation holds at every interior node (in equals out). The classical model for pipes, traffic, bandwidth, supply networks." },
    { t: "Ford-Fulkerson method", b: "While there exists an augmenting path from s to t in the RESIDUAL graph: find the bottleneck capacity along it, push that much flow, update the residual graph (forward decreases, reverse increases for cancellation). Stop when no augmenting path exists. Returns optimal max-flow." },
    { t: "Why reverse edges?", b: "The reverse residual capacity lets the algorithm cancel a previous wrong choice. Without it, a greedy first augmenting path could lock you out of the optimum. Reverse edges let the algorithm undo decisions in future iterations." },
    { t: "Edmonds-Karp = FF + BFS", b: "Pick the augmenting path using BFS (shortest in number of edges, not bottleneck). This bounds the number of augmentations to O(V*E), giving total O(V*E^2). Critical: BFS guarantees termination on irrational capacities, where naive Ford-Fulkerson can spin forever." },
    { t: "Min-Cut = Max-Flow (the duality)", b: "A CUT is a partition of vertices into S (containing source) and T (containing sink). Cut capacity = sum of capacities of edges crossing S to T. Theorem (Ford-Fulkerson 1956): max flow value = min cut capacity. The saturated edges in your final residual graph ARE the min cut." },
    { t: "Bipartite matching as max-flow", b: "Maximum matching in a bipartite graph (left set L, right set R) reduces to max-flow: add a source connected to all of L (cap 1), all of R connected to a sink (cap 1), every original edge has cap 1. Max flow = max matching size. This is why max-flow is everywhere in scheduling, assignment, and optimization." },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>pipes, residuals, and cuts</SectionEyebrow>
        <SectionTitle>Mental model: pipes from reservoir to sink</SectionTitle>
        <Lede>
          Imagine pipes from a reservoir (source) to a sink. Each pipe has a flow capacity. Max-flow asks: what is the most you can push through? The clever trick is the residual graph, at any moment you can send flow backward against any pipe that is already carrying flow, which is mathematically a way of cancelling and rerouting. Edmonds-Karp finds the right augmentations in BFS order.
        </Lede>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {cards.map((c, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-700 dark:text-lime-400 mb-2 tracking-widest uppercase">
              0{i + 1}
            </div>
            <SubHeading>{c.t}</SubHeading>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{c.b}</p>
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
  const probs = [
    { q: "On the CLRS preset S>A:10, S>C:10, A>B:4, A>C:2, A>D:8, B>T:10, C>D:9, D>B:6, D>T:10, what is the max flow S to T?", a: "19" },
    { q: "On 'Two paths' S>A:5, S>B:5, A>T:5, B>T:5, max flow?", a: "10" },
    { q: "On 'Bottleneck' S>A:100, A>B:1, B>T:100, max flow?", a: "1" },
    { q: "Why does max-flow equal min-cut intuitively?", a: "Every flow path crosses the cut, so flow is at most cut capacity. The augmenting-path algorithm's stopping condition gives equality." },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(probs.map(() => null));
  const [shown, setShown] = useState<boolean[]>(probs.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>Run each preset in the Visualize tab to verify once the animation is ready.</Callout>
      {probs.map((p, i) => (
        <Card key={i}>
          <p className="text-sm text-stone-800 dark:text-stone-200 mb-3">
            <span className="font-mono font-bold text-stone-500 mr-2">#{i + 1}</span>
            {p.q}
          </p>
          <div className="flex gap-2 items-center flex-wrap">
            <input
              value={guesses[i] ?? ""}
              onChange={(e) => {
                const v = [...guesses]; v[i] = e.target.value; setGuesses(v);
              }}
              placeholder="your answer"
              className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-sm font-mono text-stone-900 dark:text-stone-100 outline-none focus:border-stone-400 dark:focus:border-white/30"
              style={{ minWidth: 240 }}
            />
            <button
              type="button"
              onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
              className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 text-xs font-mono text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30 transition-colors cursor-pointer bg-white dark:bg-stone-900"
            >
              Reveal
            </button>
            {shown[i] && (
              <span className="px-3 py-1 rounded-md text-xs font-bold bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-300 dark:border-lime-400/30">
                {p.a}
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
      <Card padded={false} className="overflow-hidden">
        <div className="px-5 pt-5 pb-2">
          <SubHeading>Algorithm zoo, when to use which</SubHeading>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-stone-50 dark:bg-stone-950/50">
            <tr>
              {["Algorithm", "Complexity", "Notes"].map((h) => (
                <th key={h} className="text-left px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 border-b border-stone-200 dark:border-white/10">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Ford-Fulkerson (DFS)", "O(E * max_flow)", "Can fail to terminate on irrational capacities. Do not use in production."],
              ["Edmonds-Karp (BFS)", "O(V * E^2)", "Guaranteed termination. Easy to code. Good for general graphs."],
              ["Dinic's", "O(V^2 * E)", "Level graph + blocking flow. O(E * sqrt V) on unit-capacity / bipartite graphs."],
              ["Push-Relabel (Goldberg-Tarjan)", "O(V^2 * sqrt E)", "Faster in practice. Push preflow through nodes; relabel heights."],
              ["Hopcroft-Karp", "O(E * sqrt V)", "SPECIFICALLY for bipartite matching. Beats Dinic's general bound on this case."],
            ].map((r, i) => (
              <tr key={i} className="border-t border-stone-100 dark:border-white/5">
                <td className="px-4 py-2 font-semibold text-stone-900 dark:text-stone-100">{r[0]}</td>
                <td className="px-4 py-2 font-mono font-bold text-lime-700 dark:text-lime-400">{r[1]}</td>
                <td className="px-4 py-2 text-stone-600 dark:text-stone-400">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card>
        <SubHeading>Min-cut from saturated edges</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          After max-flow finishes, do one more BFS from the source in the residual graph. Let S = vertices reachable from source. Then T = V minus S (and t is in T). The min cut is exactly the set of original edges (u, v) with u in S and v in T, and they are ALL saturated in the final flow. This gives you both the max-flow value AND the witnessing min cut for free.
        </p>
      </Card>

      <Card>
        <SubHeading>Real applications</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed space-y-1.5 pl-4 list-disc">
          <li><strong className="text-stone-900 dark:text-stone-100">Bipartite matching</strong>: assign workers to jobs, students to schools, organs to patients (Roth's 2012 Nobel work).</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Image segmentation</strong>: foreground/background separation as min-cut on a pixel grid (Boykov-Kolmogorov).</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Network reliability</strong>: max-flow equals how much traffic can survive between two routers.</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Project selection</strong>: which projects to fund to maximize profit (max-flow on a bipartite project/resource graph).</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Sports elimination</strong>: can team X still win the league? Reduces to max-flow on a remaining-games network.</li>
        </ul>
      </Card>

      <Card>
        <SubHeading>Stdlib, almost no language has it built in</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Max-flow is rare in stdlibs because the right choice depends on the graph. <strong className="text-stone-900 dark:text-stone-100">NetworkX</strong> has <InlineCode>nx.maximum_flow(G, s, t)</InlineCode> (default = preflow-push) and <InlineCode>nx.minimum_cut</InlineCode>. <strong className="text-stone-900 dark:text-stone-100">SciPy</strong>: <InlineCode>scipy.sparse.csgraph.maximum_flow</InlineCode>. <strong className="text-stone-900 dark:text-stone-100">Boost Graph Library</strong>: full menu (Edmonds-Karp, push-relabel, boykov-kolmogorov). For competitive programming, always carry a Dinic's template, Edmonds-Karp is easier to debug but Dinic's is faster on dense unit-capacity graphs.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L7_MaxFlow({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "Why does Ford-Fulkerson maintain reverse edges in the residual graph?",
      options: [
        "To save memory",
        "Required by directed graph storage",
        "So the algorithm can cancel a previous augmentation if a later iteration needs to reroute flow",
        "They make the BFS faster",
      ],
      correctIndex: 2,
      explanation: "Reverse residuals encode the option to undo. Without them, a greedy early augmentation could prevent reaching the optimum max-flow.",
    },
    {
      question: "Time complexity of Edmonds-Karp?",
      options: ["O(V + E)", "O(V * E)", "O(V * E^2)", "O(V^2 * E)"],
      correctIndex: 2,
      explanation: "Each BFS is O(E). The number of augmenting paths is bounded by O(V*E) thanks to the BFS shortest-path argument. Total: O(V * E^2).",
    },
    {
      question: "The Max-Flow Min-Cut theorem says:",
      options: [
        "Max flow = min cut value",
        "Max flow >= min cut value",
        "Max flow <= min cut value",
        "They are unrelated",
      ],
      correctIndex: 0,
      explanation: "Strong duality: max-flow value equals min-cut capacity. The proof uses the residual-graph reachability after the algorithm terminates.",
    },
    {
      question: "Bipartite matching can be solved as max-flow by:",
      options: [
        "Replacing every edge weight with infinity",
        "Adding a source S connected to left vertices (cap 1), and right vertices to a sink T (cap 1); original edges have cap 1",
        "Computing the spanning tree",
        "Running Dijkstra from each left vertex",
      ],
      correctIndex: 1,
      explanation: "Max integral flow on this construction equals maximum matching size. Each augmenting path corresponds to an alternating path in matching theory.",
    },
    {
      question: "After max-flow terminates, the min cut is:",
      options: [
        "The set of vertices in the augmenting paths",
        "Edges (u,v) where u is reachable from source in the final residual graph and v is not",
        "The first edge of the longest augmenting path",
        "Cannot be computed in polynomial time",
      ],
      correctIndex: 1,
      explanation: "Run BFS from source in the FINAL residual graph. Reachable vertices = S, the rest = T. The min cut = edges crossing S to T in the original graph (all saturated).",
    },
  ];

  return (
    <LessonShell
      title="Maximum Flow"
      level={7}
      lessonNumber={10}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High, bipartite matching, image segmentation, scheduling, system design."
      nextLessonHint="Monotonic Stack"
      onQuizComplete={onQuizComplete}
    />
  );
}
