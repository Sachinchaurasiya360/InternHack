import { useMemo, useState } from "react";
import { BookOpen, Code2, Lightbulb, Play, Target } from "lucide-react";
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
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "graph";

/* ------------------------------------------------------------------ */
/*  SCC color palette (distinct hues for up to 6 SCCs)                 */
/* ------------------------------------------------------------------ */

const SCC_COLORS = [
  "#a3e635", // lime-400 (accent)
  "#06b6d4", // cyan-500
  "#f59e0b", // amber-400
  "#8b5cf6", // violet-500
  "#f97316", // orange-500
  "#10b981", // emerald-500
];

/* ------------------------------------------------------------------ */
/*  Graph layout helpers                                                */
/* ------------------------------------------------------------------ */

function circleLayout(
  ids: string[],
  cx: number,
  cy: number,
  r: number,
): Record<string, { x: number; y: number }> {
  const out: Record<string, { x: number; y: number }> = {};
  const n = ids.length;
  ids.forEach((id, i) => {
    const ang = (2 * Math.PI * i) / Math.max(1, n) - Math.PI / 2;
    out[id] = { x: cx + r * Math.cos(ang), y: cy + r * Math.sin(ang) };
  });
  return out;
}

/* ------------------------------------------------------------------ */
/*  Tarjan SCC frame types + pseudocode                                 */
/* ------------------------------------------------------------------ */

type NodeState = "default" | "frontier" | "done" | "match";

interface TarjanFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  disc: Record<string, number | undefined>;
  low: Record<string, number | undefined>;
  onStack: Record<string, boolean>;
  stack: string[];
  sccOf: Record<string, number | undefined>;
  nodeStates: Record<string, NodeState>;
  edgeStates: Record<string, "default" | "tree" | "back" | "cross">;
  flashKey?: string;
}

const TARJAN_PSEUDO = [
  "Tarjan-SCC(G):",
  "  for each v: if disc[v] = ∅: DFS(v)",
  "DFS(u):",
  "  disc[u] ← low[u] ← time++",
  "  push u; onStack[u] ← true",
  "  for each edge (u → v):",
  "    if disc[v] = ∅: DFS(v)",
  "      low[u] ← min(low[u], low[v])",
  "    elif onStack[v]: low[u] ← min(low[u], disc[v])",
  "  if low[u] == disc[u]: pop SCC",
];

/* ------------------------------------------------------------------ */
/*  Tarjan SCC frame builder                                            */
/* ------------------------------------------------------------------ */

const FIXED_SCC_GRAPH = {
  ids: ["A", "B", "C", "D", "E", "F"],
  edges: [
    { from: "A", to: "B" },
    { from: "B", to: "C" },
    { from: "C", to: "A" },
    { from: "B", to: "D" },
    { from: "D", to: "E" },
    { from: "E", to: "F" },
    { from: "F", to: "D" },
  ],
};

function buildTarjanFrames(
  ids: string[],
  edges: { from: string; to: string }[],
): TarjanFrame[] {
  const frames: TarjanFrame[] = [];
  const adj: Record<string, string[]> = Object.fromEntries(
    ids.map((id) => [id, [] as string[]]),
  );
  for (const e of edges) adj[e.from].push(e.to);
  for (const id of ids) adj[id].sort();

  const disc: Record<string, number | undefined> = {};
  const low: Record<string, number | undefined> = {};
  const onStack: Record<string, boolean> = {};
  const stack: string[] = [];
  const sccOf: Record<string, number | undefined> = {};
  const nodeStates: Record<string, NodeState> = Object.fromEntries(
    ids.map((id) => [id, "default" as NodeState]),
  );
  const edgeStates: Record<string, "default" | "tree" | "back" | "cross"> = {};
  let time = 0;
  let sccCount = 0;

  const snap = (
    line: number,
    message: string,
    vars: Record<string, string | number | undefined> = {},
    flashKey?: string,
  ) => {
    frames.push({
      line,
      vars,
      message,
      disc: { ...disc },
      low: { ...low },
      onStack: { ...onStack },
      stack: [...stack],
      sccOf: { ...sccOf },
      nodeStates: { ...nodeStates },
      edgeStates: { ...edgeStates },
      flashKey,
    });
  };

  function dfs(u: string) {
    disc[u] = low[u] = time++;
    stack.push(u);
    onStack[u] = true;
    nodeStates[u] = "frontier";
    snap(
      3,
      `DFS(${u}): disc[${u}] = low[${u}] = ${disc[u]}. Pushed to stack.`,
      { u, "disc[u]": disc[u]!, "low[u]": low[u]! },
      u,
    );

    for (const v of adj[u]) {
      const k = `${u}-${v}`;
      if (disc[v] === undefined) {
        edgeStates[k] = "tree";
        snap(6, `Edge ${u} → ${v}: tree edge. Recurse into ${v}.`, { u, v });
        dfs(v);
        const newLow = Math.min(low[u]!, low[v]!);
        if (newLow !== low[u]) {
          low[u] = newLow;
          snap(
            7,
            `Back from DFS(${v}). low[${u}] = min(prev, low[${v}]=${low[v]}) = ${low[u]}.`,
            { u, v, "low[u]": low[u]!, "low[v]": low[v]! },
            "low[u]",
          );
        }
      } else if (onStack[v]) {
        edgeStates[k] = "back";
        const newLow = Math.min(low[u]!, disc[v]!);
        snap(
          8,
          `Edge ${u} → ${v}: BACK edge (v on stack). low[${u}] = min(${low[u]}, disc[${v}]=${disc[v]}) = ${newLow}.`,
          { u, v, "disc[v]": disc[v]!, "low[u] new": newLow },
          "low[u]",
        );
        low[u] = newLow;
      } else {
        edgeStates[k] = "cross";
        snap(
          8,
          `Edge ${u} → ${v}: cross edge (v already in a finalized SCC). Ignore.`,
          { u, v },
        );
      }
    }

    if (low[u] === disc[u]) {
      const scc: string[] = [];
      while (true) {
        const w = stack.pop()!;
        onStack[w] = false;
        sccOf[w] = sccCount;
        nodeStates[w] = "done";
        scc.push(w);
        if (w === u) break;
      }
      snap(
        9,
        `low[${u}] == disc[${u}] = ${disc[u]} → SCC root! SCC #${sccCount + 1}: {${scc.join(", ")}}.`,
        { sccId: sccCount + 1, members: scc.join(", ") },
        "sccId",
      );
      sccCount++;
    }
  }

  snap(0, "Initialize: disc[v] = ∅ for all v. time = 0.");
  for (const id of ids) {
    if (disc[id] === undefined) {
      snap(1, `Outer loop: ${id} unvisited → call DFS(${id}).`, {
        startVertex: id,
      });
      dfs(id);
    }
  }
  snap(0, `Done. ${sccCount} SCC${sccCount === 1 ? "" : "s"} found.`, {
    totalSCCs: sccCount,
  });
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Bridge frame types + pseudocode                                     */
/* ------------------------------------------------------------------ */

interface BridgeFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  disc: Record<string, number | undefined>;
  low: Record<string, number | undefined>;
  bridges: string[];
  artPoints: string[];
  nodeStates: Record<string, NodeState>;
  edgeStates: Record<string, "default" | "tree" | "back" | "bridge">;
  flashKey?: string;
}

const BRIDGE_PSEUDO = [
  "Bridges-AP(G):  # undirected G",
  "  for each v: if disc[v] = ∅: DFS(v, null)",
  "DFS(u, parent):",
  "  disc[u] ← low[u] ← time++",
  "  childCount ← 0",
  "  for each neighbor v of u:",
  "    if disc[v] = ∅: DFS(v, u); childCount++",
  "      low[u] ← min(low[u], low[v])",
  "      if low[v] > disc[u]: (u,v) is BRIDGE",
  "      if parent≠null and low[v]≥disc[u]: u is AP",
  "    elif v ≠ parent: low[u] ← min(low[u], disc[v])",
  "  if parent==null and childCount≥2: u (root) is AP",
];

const FIXED_BRIDGE_GRAPH = {
  ids: ["A", "B", "C", "D", "E"],
  edges: [
    { from: "A", to: "B" },
    { from: "B", to: "C" },
    { from: "C", to: "A" },
    { from: "C", to: "D" },
    { from: "D", to: "E" },
  ],
};

function buildBridgeFrames(
  ids: string[],
  edges: { from: string; to: string }[],
): BridgeFrame[] {
  const frames: BridgeFrame[] = [];
  const adj: Record<string, string[]> = Object.fromEntries(
    ids.map((id) => [id, [] as string[]]),
  );
  for (const e of edges) {
    adj[e.from].push(e.to);
    adj[e.to].push(e.from);
  }
  for (const id of ids) adj[id].sort();

  const disc: Record<string, number | undefined> = {};
  const low: Record<string, number | undefined> = {};
  const bridges: string[] = [];
  const artPoints: string[] = [];
  const nodeStates: Record<string, NodeState> = Object.fromEntries(
    ids.map((id) => [id, "default" as NodeState]),
  );
  const edgeStates: Record<string, "default" | "tree" | "back" | "bridge"> =
    {};
  let time = 0;

  const edgeKey = (a: string, b: string) =>
    a < b ? `${a}-${b}` : `${b}-${a}`;

  const snap = (
    line: number,
    message: string,
    vars: Record<string, string | number | undefined> = {},
    flashKey?: string,
  ) => {
    frames.push({
      line,
      vars,
      message,
      disc: { ...disc },
      low: { ...low },
      bridges: [...bridges],
      artPoints: [...artPoints],
      nodeStates: { ...nodeStates },
      edgeStates: { ...edgeStates },
      flashKey,
    });
  };

  function dfs(u: string, parent: string | undefined) {
    disc[u] = low[u] = time++;
    nodeStates[u] = "frontier";
    let childCount = 0;
    snap(
      3,
      `DFS(${u}, parent=${parent ?? "null"}): disc=${disc[u]}, low=${low[u]}.`,
      { u, parent: parent ?? "null", "disc[u]": disc[u]!, "low[u]": low[u]! },
      u,
    );
    for (const v of adj[u]) {
      const k = edgeKey(u, v);
      if (disc[v] === undefined) {
        edgeStates[k] = "tree";
        snap(6, `${u}, ${v}: tree edge. Recurse.`, { u, v });
        dfs(v, u);
        childCount++;
        low[u] = Math.min(low[u]!, low[v]!);
        snap(
          7,
          `Back from DFS(${v}). low[${u}] = min(prev, low[${v}]=${low[v]}) = ${low[u]}.`,
          { u, v, "low[u]": low[u]!, "low[v]": low[v]! },
          "low[u]",
        );
        if (low[v]! > disc[u]!) {
          bridges.push(`${u}-${v}`);
          edgeStates[k] = "bridge";
          snap(
            8,
            `low[${v}]=${low[v]} > disc[${u}]=${disc[u]} → BRIDGE: ${u}, ${v}.`,
            { bridge: `${u}-${v}` },
            "bridge",
          );
        }
        if (parent !== undefined && low[v]! >= disc[u]!) {
          if (!artPoints.includes(u)) {
            artPoints.push(u);
            nodeStates[u] = "match";
            snap(
              9,
              `low[${v}]=${low[v]} >= disc[${u}]=${disc[u]} (${u} not root) → ARTICULATION: ${u}.`,
              { ap: u },
              "ap",
            );
          }
        }
      } else if (v !== parent) {
        const newLow = Math.min(low[u]!, disc[v]!);
        if (newLow !== low[u]) {
          low[u] = newLow;
          snap(
            10,
            `${u}, ${v}: back edge (v already visited). low[${u}] = min(prev, disc[${v}]=${disc[v]}) = ${low[u]}.`,
            { u, v, "low[u]": low[u]! },
            "low[u]",
          );
        }
      }
    }
    if (parent === undefined && childCount >= 2) {
      if (!artPoints.includes(u)) {
        artPoints.push(u);
        nodeStates[u] = "match";
        snap(
          11,
          `Root ${u} has ${childCount} DFS children → ARTICULATION.`,
          { ap: u, children: childCount },
          "ap",
        );
      }
    }
    if (nodeStates[u] !== "match") nodeStates[u] = "done";
  }

  snap(0, "Initialize: disc[v] = ∅ for all v. time = 0.");
  for (const id of ids) {
    if (disc[id] === undefined) {
      snap(1, `Component start: DFS(${id}, null).`, { start: id });
      dfs(id, undefined);
    }
  }
  snap(
    0,
    `Done. ${bridges.length} bridge(s), ${artPoints.length} articulation point(s).`,
    { bridges: bridges.length, artPoints: artPoints.length },
  );
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Graph SVG renderer (inline, directed)                              */
/* ------------------------------------------------------------------ */

const NODE_R = 22;
const SVG_W = 520;
const SVG_H = 300;

function nodeColor(state: NodeState, sccId?: number): string {
  if (state === "done" && sccId !== undefined)
    return SCC_COLORS[sccId % SCC_COLORS.length];
  if (state === "frontier") return THEME.accent;
  if (state === "match") return "#10b981"; // emerald for AP
  return THEME.bg;
}

function nodeBorder(state: NodeState): string {
  if (state === "frontier") return THEME.accentDark;
  if (state === "match") return "#065f46";
  if (state === "done") return THEME.border;
  return THEME.border;
}

function nodeTextColor(state: NodeState, sccId?: number): string {
  if (state === "done" && sccId !== undefined) return "#1c1917";
  if (state === "frontier") return "#1c1917";
  if (state === "match") return "#fff";
  return THEME.text;
}

type EdgeDisplayState = "default" | "tree" | "back" | "cross" | "bridge";

function edgeColor(state: EdgeDisplayState): string {
  if (state === "tree") return THEME.accentDark;
  if (state === "back") return "#f59e0b";
  if (state === "bridge") return "#dc2626";
  if (state === "cross") return THEME.textMuted;
  return THEME.border;
}

function edgeWidth(state: EdgeDisplayState): number {
  if (state === "tree" || state === "bridge") return 2.5;
  if (state === "back") return 2;
  return 1.5;
}

interface DirectedGraphSVGProps {
  ids: string[];
  edges: { from: string; to: string }[];
  pos: Record<string, { x: number; y: number }>;
  nodeStates: Record<string, NodeState>;
  edgeStates: Record<string, EdgeDisplayState>;
  sccOf?: Record<string, number | undefined>;
  disc: Record<string, number | undefined>;
  low: Record<string, number | undefined>;
  directed: boolean;
}

function GraphSVG({
  ids,
  edges,
  pos,
  nodeStates,
  edgeStates,
  sccOf,
  disc,
  low,
  directed,
}: DirectedGraphSVGProps) {
  const edgeKey = (a: string, b: string) =>
    directed ? `${a}-${b}` : a < b ? `${a}-${b}` : `${b}-${a}`;

  return (
    <svg
      width={SVG_W}
      height={SVG_H}
      viewBox={`0 0 ${SVG_W} ${SVG_H}`}
      className="w-full max-w-full rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950"
      style={{ display: "block" }}
    >
      <defs>
        <marker
          id="arrow-default"
          markerWidth="8"
          markerHeight="6"
          refX="7"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 8 3, 0 6" fill={THEME.border} />
        </marker>
        <marker
          id="arrow-tree"
          markerWidth="8"
          markerHeight="6"
          refX="7"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 8 3, 0 6" fill={THEME.accentDark} />
        </marker>
        <marker
          id="arrow-back"
          markerWidth="8"
          markerHeight="6"
          refX="7"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 8 3, 0 6" fill="#f59e0b" />
        </marker>
        <marker
          id="arrow-cross"
          markerWidth="8"
          markerHeight="6"
          refX="7"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 8 3, 0 6" fill={THEME.textMuted} />
        </marker>
      </defs>

      {edges.map((e) => {
        const from = pos[e.from];
        const to = pos[e.to];
        if (!from || !to) return null;
        const k = edgeKey(e.from, e.to);
        const st = (edgeStates[k] ?? "default") as EdgeDisplayState;
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        if (len < 1) return null;
        const ux = dx / len;
        const uy = dy / len;
        const x1 = from.x + ux * NODE_R;
        const y1 = from.y + uy * NODE_R;
        const x2 = to.x - ux * (NODE_R + (directed ? 6 : 0));
        const y2 = to.y - uy * (NODE_R + (directed ? 6 : 0));
        const markerId = directed
          ? `arrow-${st === "bridge" || st === "default" ? "default" : st}`
          : undefined;
        return (
          <line
            key={k}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={edgeColor(st)}
            strokeWidth={edgeWidth(st)}
            strokeDasharray={st === "cross" ? "4 3" : undefined}
            markerEnd={markerId ? `url(#${markerId})` : undefined}
          />
        );
      })}

      {ids.map((id) => {
        const p = pos[id];
        if (!p) return null;
        const sccId = sccOf?.[id];
        const st = nodeStates[id] ?? "default";
        const fill = nodeColor(st, sccId);
        const stroke = nodeBorder(st);
        const textCol = nodeTextColor(st, sccId);
        const d = disc[id];
        const l = low[id];
        return (
          <g key={id}>
            <circle
              cx={p.x}
              cy={p.y}
              r={NODE_R}
              fill={fill}
              stroke={stroke}
              strokeWidth={st === "frontier" ? 2.5 : 1.5}
            />
            <text
              x={p.x}
              y={p.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={13}
              fontWeight={700}
              fontFamily={THEME.mono}
              fill={textCol}
            >
              {id}
            </text>
            {d !== undefined && (
              <text
                x={p.x}
                y={p.y + NODE_R + 12}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={9}
                fontFamily={THEME.mono}
                fill={THEME.textMuted}
              >
                d:{d} l:{l ?? "?"}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  SCC section                                                         */
/* ------------------------------------------------------------------ */

function SCCSection() {
  const { ids, edges } = FIXED_SCC_GRAPH;
  const frames = useMemo(() => buildTarjanFrames(ids, edges), []);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const pos = useMemo(
    () => circleLayout(ids, SVG_W / 2, SVG_H / 2 - 10, 100),
    [],
  );

  const sccColors = frame
    ? ids
        .filter((id) => frame.sccOf[id] !== undefined)
        .reduce<Record<number, string[]>>((acc, id) => {
          const s = frame.sccOf[id]!;
          if (!acc[s]) acc[s] = [];
          acc[s].push(id);
          return acc;
        }, {})
    : {};

  return (
    <AlgoCanvas
      title="Tarjan SCC, low-link technique (directed graph)"
      player={player}
      pseudocode={
        <PseudocodePanel lines={TARJAN_PSEUDO} activeLine={frame?.line} />
      }
      variables={
        <VariablesPanel
          vars={frame?.vars ?? {}}
          flashKeys={frame?.flashKey ? [frame.flashKey] : []}
        />
      }
    >
      <div className="flex flex-col gap-4">
        <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">
          Graph: A→B→C→A (SCC1) | B→D→E→F→D (SCC2) | each node shows d:disc l:low
        </p>
        <GraphSVG
          ids={ids}
          edges={edges}
          pos={pos}
          nodeStates={frame?.nodeStates ?? {}}
          edgeStates={
            frame?.edgeStates as Record<string, EdgeDisplayState> ?? {}
          }
          sccOf={frame?.sccOf}
          disc={frame?.disc ?? {}}
          low={frame?.low ?? {}}
          directed={true}
        />
        <div className="flex flex-col gap-2">
          <p className="text-xs font-mono text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-stone-950/60 border border-stone-200 dark:border-white/10 rounded-md px-3 py-2">
            {frame?.message ?? ""}
          </p>
          <div className="flex gap-3 flex-wrap items-start">
            <div className="border border-stone-200 dark:border-white/10 rounded-md px-3 py-2 bg-white dark:bg-stone-900 min-w-36">
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
                DFS Stack
              </div>
              {(frame?.stack.length ?? 0) === 0 ? (
                <span className="text-xs font-mono text-stone-400 italic">
                  empty
                </span>
              ) : (
                <div className="flex flex-col-reverse gap-1">
                  {(frame?.stack ?? []).map((v, i, arr) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-3 px-2 py-1 rounded text-xs font-mono font-bold"
                      style={{
                        background:
                          i === arr.length - 1
                            ? THEME.accent
                            : "rgba(163,230,53,0.12)",
                        color:
                          i === arr.length - 1 ? "#1c1917" : THEME.accentDark,
                      }}
                    >
                      <span>{v}</span>
                      <span className="opacity-75 text-[10px]">
                        d:{frame?.disc[v]} l:{frame?.low[v]}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="border border-stone-200 dark:border-white/10 rounded-md px-3 py-2 bg-white dark:bg-stone-900 flex-1 min-w-48">
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
                SCCs Found
              </div>
              {Object.keys(sccColors).length === 0 ? (
                <span className="text-xs font-mono text-stone-400 italic">
                  none yet
                </span>
              ) : (
                <div className="flex flex-col gap-1">
                  {Object.entries(sccColors).map(([sid, members]) => (
                    <div
                      key={sid}
                      className="flex items-center gap-2 text-xs font-mono font-bold px-2 py-1 rounded"
                      style={{
                        background:
                          SCC_COLORS[Number(sid) % SCC_COLORS.length] + "22",
                        color:
                          SCC_COLORS[Number(sid) % SCC_COLORS.length],
                      }}
                    >
                      <span className="opacity-60">SCC #{Number(sid) + 1}</span>
                      <span>{"{" + members.join(", ") + "}"}</span>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-[10px] text-stone-400 mt-2 leading-relaxed">
                SCC root: vertex where low[u] == disc[u]. Stack pops to that vertex.
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap text-[11px] font-mono text-stone-500">
            <span>
              <span
                className="inline-block w-3 h-1 rounded mr-1 align-middle"
                style={{ background: THEME.accentDark }}
              />
              tree edge
            </span>
            <span>
              <span
                className="inline-block w-3 h-1 rounded mr-1 align-middle"
                style={{ background: "#f59e0b" }}
              />
              back edge
            </span>
            <span>
              <span
                className="inline-block w-3 h-1 rounded mr-1 align-middle"
                style={{ background: THEME.textMuted }}
              />
              cross edge
            </span>
            <span>
              <span
                className="inline-block w-3 h-3 rounded mr-1 align-middle"
                style={{ background: THEME.accent }}
              />
              active node
            </span>
            <span>
              <span
                className="inline-block w-3 h-3 rounded mr-1 align-middle"
                style={{ background: SCC_COLORS[0] }}
              />
              SCC colored
            </span>
          </div>
        </div>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Bridge section                                                      */
/* ------------------------------------------------------------------ */

function BridgeSection() {
  const { ids, edges } = FIXED_BRIDGE_GRAPH;
  const frames = useMemo(() => buildBridgeFrames(ids, edges), []);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const pos = useMemo(
    () => circleLayout(ids, SVG_W / 2, SVG_H / 2, 100),
    [],
  );

  return (
    <AlgoCanvas
      title="Bridges and Articulation Points, low-link technique (undirected)"
      player={player}
      pseudocode={
        <PseudocodePanel lines={BRIDGE_PSEUDO} activeLine={frame?.line} />
      }
      variables={
        <VariablesPanel
          vars={frame?.vars ?? {}}
          flashKeys={frame?.flashKey ? [frame.flashKey] : []}
        />
      }
    >
      <div className="flex flex-col gap-4">
        <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">
          Graph: A-B-C-A (cycle, no bridges) + C-D-E (path, bridges C-D and D-E)
        </p>
        <GraphSVG
          ids={ids}
          edges={edges}
          pos={pos}
          nodeStates={frame?.nodeStates ?? {}}
          edgeStates={
            frame?.edgeStates as Record<string, EdgeDisplayState> ?? {}
          }
          sccOf={undefined}
          disc={frame?.disc ?? {}}
          low={frame?.low ?? {}}
          directed={false}
        />
        <div className="flex flex-col gap-2">
          <p className="text-xs font-mono text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-stone-950/60 border border-stone-200 dark:border-white/10 rounded-md px-3 py-2">
            {frame?.message ?? ""}
          </p>
          <div className="flex gap-3 flex-wrap">
            <div className="border border-stone-200 dark:border-white/10 rounded-md px-3 py-2 bg-white dark:bg-stone-900 min-w-36">
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
                Bridges
              </div>
              {(frame?.bridges.length ?? 0) === 0 ? (
                <span className="text-xs font-mono text-stone-400 italic">
                  none yet
                </span>
              ) : (
                <div className="flex flex-col gap-1">
                  {(frame?.bridges ?? []).map((b, i) => (
                    <div
                      key={i}
                      className="px-2 py-1 rounded text-xs font-mono font-bold"
                      style={{
                        background: "rgba(220,38,38,0.10)",
                        color: THEME.danger,
                      }}
                    >
                      {b}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="border border-stone-200 dark:border-white/10 rounded-md px-3 py-2 bg-white dark:bg-stone-900 min-w-36">
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
                Articulation Points
              </div>
              {(frame?.artPoints.length ?? 0) === 0 ? (
                <span className="text-xs font-mono text-stone-400 italic">
                  none yet
                </span>
              ) : (
                <div className="flex gap-1.5 flex-wrap">
                  {(frame?.artPoints ?? []).map((v) => (
                    <span
                      key={v}
                      className="px-2 py-1 rounded text-xs font-mono font-bold"
                      style={{
                        background: "rgba(16,185,129,0.12)",
                        color: "#065f46",
                      }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="border border-stone-200 dark:border-white/10 rounded-md px-3 py-2 bg-white dark:bg-stone-900 flex-1 min-w-48">
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1">
                Tests
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                Bridge: low[v] &gt; disc[u] for tree edge u, v
              </p>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                AP (non-root): low[v] ≥ disc[u]
              </p>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                AP (root): ≥ 2 DFS children
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap text-[11px] font-mono text-stone-500">
            <span>
              <span
                className="inline-block w-3 h-1 rounded mr-1 align-middle"
                style={{ background: THEME.accentDark }}
              />
              tree edge
            </span>
            <span>
              <span
                className="inline-block w-3 h-1 rounded mr-1 align-middle"
                style={{ background: "#f59e0b" }}
              />
              back edge
            </span>
            <span>
              <span
                className="inline-block w-3 h-1 rounded mr-1 align-middle"
                style={{ background: THEME.danger }}
              />
              bridge
            </span>
            <span>
              <span
                className="inline-block w-3 h-3 rounded mr-1 align-middle"
                style={{ background: "#10b981" }}
              />
              articulation point
            </span>
          </div>
        </div>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                        */
/* ------------------------------------------------------------------ */

type VisMode = "scc" | "bridges";

function VisualizeTab() {
  const [mode, setMode] = useState<VisMode>("scc");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <PillButton active={mode === "scc"} onClick={() => setMode("scc")}>
          Tarjan SCC (directed)
        </PillButton>
        <PillButton
          active={mode === "bridges"}
          onClick={() => setMode("bridges")}
        >
          Bridges &amp; Articulation Points (undirected)
        </PillButton>
      </div>
      {mode === "scc" ? <SCCSection /> : <BridgeSection />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "The low-link insight", b: "DFS gives every vertex a discovery time disc[u]. The low-link low[u] = the smallest disc reachable from u's DFS subtree using AT MOST ONE back edge. This single number captures whether u's subtree can 'climb back up' the DFS tree, and that's what tells us about cycles, SCCs, bridges, and articulation points." },
    { t: "Why one structure solves four problems", b: "Tarjan's 1972 paper showed that disc + low let you compute (1) Strongly Connected Components in O(V+E), (2) Bridges in O(V+E), (3) Articulation points in O(V+E), (4) Biconnected components in O(V+E). All from one DFS, same code skeleton, different post-processing." },
    { t: "Tarjan SCC vs Kosaraju", b: "Both find SCCs in O(V+E). Kosaraju does TWO DFS passes (one on G, one on its transpose in finish-time order). Tarjan does ONE pass. Both give the same SCCs. Tarjan is more cache-friendly; Kosaraju is conceptually simpler to teach." },
    { t: "Bridge", b: "An edge whose removal increases the number of connected components. In a road network, a bridge is a road whose closure splits two regions. Test: tree edge u to v is a bridge iff low[v] > disc[u], meaning v's subtree has NO back edge skipping over u." },
    { t: "Articulation point (cut vertex)", b: "A vertex whose removal disconnects the graph. Two cases: (a) non-root u is AP iff some child v has low[v] >= disc[u]; (b) root is AP iff it has 2 or more DFS children. Used in network reliability, biconnected component decomposition, social-network influence." },
    { t: "Why directed needs SCC, undirected needs bridges/AP", b: "In a directed graph, mutual reachability defines equivalence classes, those are SCCs. In an undirected graph, every traversable pair is mutually reachable, so the question shifts to FRAGILITY: which edges or vertices are critical to keeping the graph connected." },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>one dfs, four problems</SectionEyebrow>
        <SectionTitle>Mental model: the swiss-army DFS</SectionTitle>
        <Lede>
          Tarjan's low-link is the swiss-army DFS: a single recursive walk over the graph that, by tracking <InlineCode>disc</InlineCode> and <InlineCode>low</InlineCode> per vertex, simultaneously answers questions about cycles, components, and structural fragility. The technique is one of the most-reused ideas in graph algorithms, once you internalize <InlineCode>low</InlineCode>, four classical problems become trivial.
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
    { q: "On the SCC directed graph A>B, B>C, C>A, B>D, D>E, E>F, F>D, G>F, G>H, H>G, how many SCCs are there?", a: "3" },
    { q: "Removing a bridge always increases the connected-component count by how many?", a: "1" },
    { q: "True/False: A graph with NO bridges has a Eulerian circuit.", a: "False (need all even degrees too)" },
    { q: "The path A-B, B-C, C-D, D-E has how many bridges? How many APs?", a: "4 bridges, 3 APs (B, C, D)" },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(probs.map(() => null));
  const [shown, setShown] = useState<boolean[]>(probs.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>Verify each in the Visualize tab when the animation is available.</Callout>
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
      <Card>
        <SubHeading>Why the bridge test is low[v] &gt; disc[u]</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          For a tree edge u to v, <InlineCode>low[v]</InlineCode> is the smallest disc reachable from v's subtree via at most one back edge. If <InlineCode>low[v] &gt; disc[u]</InlineCode>, then v's subtree has NO back edge that skips over u, meaning the only path from v's subtree to anywhere above u is THROUGH the edge (u, v) itself. Removing it disconnects the subtree. Hence: bridge.
        </p>
      </Card>

      <Card padded={false} className="overflow-hidden">
        <div className="px-5 pt-5 pb-2">
          <SubHeading>SCC algorithm comparison</SubHeading>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-stone-50 dark:bg-stone-950/50">
            <tr>
              {["Algorithm", "DFS passes", "Year"].map((h) => (
                <th key={h} className="text-left px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 border-b border-stone-200 dark:border-white/10">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Kosaraju", "2 (G and its transpose)", "1978"],
              ["Tarjan", "1 (low-link)", "1972"],
              ["Path-based (Gabow)", "1 (two stacks)", "2000"],
            ].map((r, i) => (
              <tr key={i} className="border-t border-stone-100 dark:border-white/5">
                <td className="px-4 py-2 font-semibold text-stone-900 dark:text-stone-100">{r[0]}</td>
                <td className="px-4 py-2 text-stone-600 dark:text-stone-400">{r[1]}</td>
                <td className="px-4 py-2 text-stone-600 dark:text-stone-400">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="px-5 py-3 text-xs text-stone-500">
          All three are O(V + E). Production code (NetworkX <InlineCode>nx.strongly_connected_components</InlineCode>, BoostGraph) typically uses Tarjan.
        </p>
      </Card>

      <Card>
        <SubHeading>Where this lands in interviews and production</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed space-y-1.5 pl-4 list-disc">
          <li><strong className="text-stone-900 dark:text-stone-100">SCC condensation</strong>: collapse each SCC into a single node to get a DAG. Used in 2-SAT, dataflow analysis, deadlock detection.</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Critical Connections in a Network</strong> (LeetCode 1192): literally find all bridges, Tarjan's low-link is the intended solution.</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Network reliability</strong>: ISP backbone analysis. Bridges are single points of failure.</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Compiler dataflow</strong>: SCCs of a call graph identify mutual recursion sets that must be analyzed together.</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Social networks</strong>: an SCC of the follows graph is a friend-clique where everyone transitively follows everyone.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L7_TarjanLowLink({ onQuizComplete }: Props) {
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
      question: "What does low[u] represent in Tarjan's algorithm?",
      options: [
        "The lowest neighbor index of u",
        "The smallest discovery time reachable from u's DFS subtree using at most one back edge",
        "The number of children of u in the DFS tree",
        "The depth of u from the root",
      ],
      correctIndex: 1,
      explanation: "low[u] is the cycle-detection signal: if low[u] equals disc[u], u's subtree has no path to an ancestor, so u is the root of an SCC (in directed) or a fragile joint (in undirected).",
    },
    {
      question: "An edge (u, v) in an undirected DFS is a BRIDGE iff:",
      options: ["low[v] = disc[v]", "low[v] > disc[u]", "low[v] = disc[u]", "v is the parent of u"],
      correctIndex: 1,
      explanation: "If low[v] > disc[u], v's subtree has no back edge skipping over u, so the only escape is through the (u,v) edge, removing it disconnects the subtree.",
    },
    {
      question: "How many DFS passes does Kosaraju's SCC algorithm need vs Tarjan's?",
      options: ["1 vs 1", "2 vs 1", "1 vs 2", "Both need 3"],
      correctIndex: 1,
      explanation: "Kosaraju runs DFS on G to get a finish-time order, then DFS on the transpose in reverse-finish order. Tarjan does a single DFS using disc/low, same O(V+E), one pass.",
    },
    {
      question: "A root vertex of a DFS tree is an articulation point iff:",
      options: [
        "It has at least one child",
        "It has at least two children in the DFS tree",
        "low[root] > 0",
        "It has back edges",
      ],
      correctIndex: 1,
      explanation: "If the DFS root has just one child subtree, removing it leaves that subtree connected (just rooted at its child). With 2 or more child subtrees, removing the root splits them, articulation.",
    },
    {
      question: "After SCC condensation (collapse each SCC to one node), the resulting graph is always:",
      options: ["A tree", "A DAG", "Disconnected", "Strongly connected"],
      correctIndex: 1,
      explanation: "By definition of SCC, no two SCCs are mutually reachable. So the condensation has no directed cycle, it is a DAG. This is foundational for 2-SAT, dataflow analysis, and topological reasoning over cyclic graphs.",
    },
  ];

  return (
    <LessonShell
      title="Tarjan's Low-Link (SCC, Bridges)"
      level={7}
      lessonNumber={9}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High, LC1192 (Critical Connections), 2-SAT, network-reliability questions."
      nextLessonHint="Maximum Flow"
      onQuizComplete={onQuizComplete}
    />
  );
}
