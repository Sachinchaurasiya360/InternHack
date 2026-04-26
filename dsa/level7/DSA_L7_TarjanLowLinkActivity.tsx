"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, GraphCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer,
} from "@/components/engineering/algo";
import type { GraphNodeData, GraphEdgeData, CellState } from "@/components/engineering/algo";
import {
  C,
  DSA_ACCENT as A,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  Lede,
  Card,
  PillButton,
  Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Parser - directed for SCC, undirected for bridges                  */
/* ------------------------------------------------------------------ */

function parseEdges(input: string, directed: boolean): { ids: string[]; edges: { from: string; to: string }[] } | null {
  const sep = directed ? ">" : "-";
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string }[] = [];
  const ids = new Set<string>();
  for (const tok of tokens) {
    const re = directed ? /^([A-Za-z0-9_]+)>([A-Za-z0-9_]+)$/ : /^([A-Za-z0-9_]+)-([A-Za-z0-9_]+)$/;
    const m = tok.match(re);
    if (!m) return null;
    edges.push({ from: m[1], to: m[2] });
    ids.add(m[1]); ids.add(m[2]);
    void sep;
  }
  return { ids: [...ids].sort(), edges };
}

function autoLayout(ids: string[], cx = 320, cy = 170, r = 130) {
  const out: Record<string, { x: number; y: number }> = {};
  const n = ids.length;
  ids.forEach((id, i) => {
    const ang = (2 * Math.PI * i) / Math.max(1, n) - Math.PI / 2;
    out[id] = { x: cx + r * Math.cos(ang), y: cy + r * Math.sin(ang) };
  });
  return out;
}

/* ------------------------------------------------------------------ */
/*  Tarjan SCC (directed)                                              */
/* ------------------------------------------------------------------ */

const SCC_COLORS = ["#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#14b8a6", "#f97316"];

interface TarjanFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  disc: Record<string, number | undefined>;
  low: Record<string, number | undefined>;
  onStack: Record<string, boolean>;
  stack: string[];
  sccOf: Record<string, number | undefined>;  // SCC id once finalized
  nodeStates: Record<string, CellState>;
  edgeStates: Record<string, CellState>;
  flashKey?: string;
  edgeKind?: Record<string, "tree" | "back" | "cross" | "fwd">;
}

const TARJAN_PSEUDO = [
  "Tarjan-SCC(G):",
  "  for each v in V: if disc[v] = ∅: DFS(v)",
  "DFS(u):",
  "  disc[u] ← low[u] ← time++",
  "  push u onto stack; onStack[u] ← true",
  "  for each edge (u, v):",
  "    if disc[v] = ∅: DFS(v); low[u] ← min(low[u], low[v])",
  "    elif onStack[v]: low[u] ← min(low[u], disc[v])  # BACK edge",
  "  if low[u] == disc[u]:",
  "    pop stack down to u → that's an SCC",
];

function buildTarjanFrames(ids: string[], edges: { from: string; to: string }[]): TarjanFrame[] {
  const f: TarjanFrame[] = [];
  const adj: Record<string, string[]> = Object.fromEntries(ids.map((id) => [id, []]));
  for (const e of edges) adj[e.from].push(e.to);
  for (const id of ids) adj[id].sort();

  const disc: Record<string, number | undefined> = {};
  const low: Record<string, number | undefined> = {};
  const onStack: Record<string, boolean> = {};
  const stack: string[] = [];
  const sccOf: Record<string, number | undefined> = {};
  const state: Record<string, CellState> = Object.fromEntries(ids.map((id) => [id, "default" as CellState]));
  const edgeState: Record<string, CellState> = {};
  const edgeKind: Record<string, "tree" | "back" | "cross" | "fwd"> = {};
  let time = 0;
  let sccCount = 0;

  const snap = (line: number, message: string, vars: Record<string, string | number | undefined> = {}, flashKey?: string) => {
    f.push({
      line, vars, message,
      disc: { ...disc }, low: { ...low }, onStack: { ...onStack },
      stack: [...stack], sccOf: { ...sccOf },
      nodeStates: { ...state }, edgeStates: { ...edgeState },
      flashKey, edgeKind: { ...edgeKind },
    });
  };

  function dfs(u: string) {
    disc[u] = low[u] = time++;
    stack.push(u);
    onStack[u] = true;
    state[u] = "frontier";
    snap(3, `DFS(${u}): disc[${u}] = low[${u}] = ${disc[u]}. Push to stack.`, { u, "disc[u]": disc[u]!, "low[u]": low[u]! }, u);

    for (const v of adj[u]) {
      const k = `${u}-${v}`;
      if (disc[v] === undefined) {
        edgeState[k] = "path";
        edgeKind[k] = "tree";
        snap(6, `Edge ${u}→${v}: tree edge (v unvisited). Recurse.`, { u, v });
        dfs(v);
        const newLow = Math.min(low[u]!, low[v]!);
        if (newLow !== low[u]) {
          low[u] = newLow;
          snap(6, `Back from DFS(${v}). low[${u}] = min(${low[u]}, ${low[v]}) = ${low[u]}.`, { u, v, "low[u]": low[u]!, "low[v]": low[v]! }, "low[u]");
        }
      } else if (onStack[v]) {
        edgeState[k] = "compare";
        edgeKind[k] = "back";
        const newLow = Math.min(low[u]!, disc[v]!);
        snap(7, `Edge ${u}→${v}: BACK edge (v on stack). low[${u}] = min(${low[u]}, disc[${v}]=${disc[v]}) = ${newLow}.`, { u, v, "disc[v]": disc[v]!, "low[u] new": newLow }, "low[u]");
        low[u] = newLow;
      } else {
        edgeState[k] = "default";
        edgeKind[k] = "cross";
        snap(7, `Edge ${u}→${v}: cross/forward edge to a finalized SCC — ignore.`, { u, v });
      }
    }
    if (low[u] === disc[u]) {
      // pop SCC
      const scc: string[] = [];
      while (true) {
        const w = stack.pop()!;
        onStack[w] = false;
        sccOf[w] = sccCount;
        scc.push(w);
        if (w === u) break;
      }
      const color = SCC_COLORS[sccCount % SCC_COLORS.length];
      for (const w of scc) state[w] = "done";
      snap(9, `low[${u}] == disc[${u}] = ${disc[u]} → SCC root. Pop stack → SCC #${sccCount + 1}: {${scc.join(", ")}} (colored ${color}).`, { sccId: sccCount + 1, members: scc.length });
      sccCount++;
    }
  }

  snap(0, `Initialize disc[v] = ∅ for all v. Time = 0.`);
  for (const id of ids) {
    if (disc[id] === undefined) {
      snap(1, `Outer loop: ${id} unvisited → call DFS(${id}).`, { startVertex: id });
      dfs(id);
    }
  }
  snap(0, `Done. ${sccCount} strongly-connected component${sccCount === 1 ? "" : "s"} found.`, { totalSCCs: sccCount });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Bridges + Articulation points (undirected)                         */
/* ------------------------------------------------------------------ */

interface BridgeFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  disc: Record<string, number | undefined>;
  low: Record<string, number | undefined>;
  parent: Record<string, string | undefined>;
  bridges: { u: string; v: string }[];
  artPoints: Set<string>;
  nodeStates: Record<string, CellState>;
  edgeStates: Record<string, CellState>;
  flashKey?: string;
}

const BRIDGE_PSEUDO = [
  "Bridges-AP(G):  # G undirected",
  "  for each v in V: if disc[v] = ∅: DFS(v, parent=null)",
  "DFS(u, p):",
  "  disc[u] ← low[u] ← time++",
  "  childCount ← 0   # for AP root check",
  "  for each neighbor v of u:",
  "    if disc[v] = ∅:",
  "      DFS(v, u); childCount++",
  "      low[u] ← min(low[u], low[v])",
  "      if low[v] > disc[u]:  edge (u,v) is BRIDGE",
  "      if (p ≠ null) and (low[v] ≥ disc[u]): u is ARTICULATION",
  "    elif v ≠ p:  low[u] ← min(low[u], disc[v])  # back edge",
  "  if (p == null) and childCount ≥ 2: u (root) is ARTICULATION",
];

function buildBridgeFrames(ids: string[], edges: { from: string; to: string }[]): BridgeFrame[] {
  const f: BridgeFrame[] = [];
  const adj: Record<string, string[]> = Object.fromEntries(ids.map((id) => [id, []]));
  for (const e of edges) {
    adj[e.from].push(e.to);
    adj[e.to].push(e.from);
  }
  for (const id of ids) adj[id].sort();

  const disc: Record<string, number | undefined> = {};
  const low: Record<string, number | undefined> = {};
  const parent: Record<string, string | undefined> = {};
  const bridges: { u: string; v: string }[] = [];
  const artPoints = new Set<string>();
  const state: Record<string, CellState> = Object.fromEntries(ids.map((id) => [id, "default" as CellState]));
  const edgeState: Record<string, CellState> = {};
  let time = 0;

  const edgeKey = (a: string, b: string) => a < b ? `${a}-${b}` : `${b}-${a}`;

  const snap = (line: number, message: string, vars: Record<string, string | number | undefined> = {}, flashKey?: string) => {
    f.push({
      line, vars, message,
      disc: { ...disc }, low: { ...low }, parent: { ...parent },
      bridges: bridges.map((b) => ({ ...b })),
      artPoints: new Set(artPoints),
      nodeStates: { ...state }, edgeStates: { ...edgeState },
      flashKey,
    });
  };

  function dfs(u: string, p: string | undefined) {
    disc[u] = low[u] = time++;
    state[u] = "frontier";
    parent[u] = p;
    let childCount = 0;
    snap(3, `DFS(${u}, parent=${p ?? "null"}): disc=${disc[u]}, low=${low[u]}.`, { u, p: p ?? "null", "disc[u]": disc[u]!, "low[u]": low[u]! }, u);
    for (const v of adj[u]) {
      const k = edgeKey(u, v);
      if (disc[v] === undefined) {
        edgeState[k] = "path";
        snap(6, `${u}—${v}: tree edge. Recurse.`, { u, v });
        dfs(v, u);
        childCount++;
        low[u] = Math.min(low[u]!, low[v]!);
        snap(8, `Back from DFS(${v}). low[${u}] = min(prev, low[${v}] = ${low[v]}) = ${low[u]}.`, { u, v, "low[u]": low[u]!, "low[v]": low[v]! }, "low[u]");
        if (low[v]! > disc[u]!) {
          bridges.push({ u, v });
          edgeState[k] = "swap";
          snap(9, `low[${v}] = ${low[v]} > disc[${u}] = ${disc[u]} → BRIDGE: ${u}—${v}.`, { bridge: `${u}-${v}` }, "bridges");
        }
        if (p !== undefined && low[v]! >= disc[u]!) {
          artPoints.add(u);
          state[u] = "match";
          snap(10, `low[${v}] = ${low[v]} ≥ disc[${u}] = ${disc[u]} (and ${u} not root) → ARTICULATION: ${u}.`, { ap: u }, "artPoints");
        }
      } else if (v !== p) {
        const newLow = Math.min(low[u]!, disc[v]!);
        if (newLow !== low[u]) {
          low[u] = newLow;
          snap(11, `${u}—${v}: back edge (v already visited, v ≠ parent). low[${u}] = min(prev, disc[${v}] = ${disc[v]}) = ${low[u]}.`, { u, v, "low[u]": low[u]! }, "low[u]");
        }
      }
    }
    if (p === undefined && childCount >= 2) {
      artPoints.add(u);
      state[u] = "match";
      snap(12, `Root ${u} has ${childCount} DFS children → ARTICULATION (removing it disconnects them).`, { ap: u, children: childCount }, "artPoints");
    }
    if (state[u] !== "match") state[u] = "done";
  }

  snap(0, `Initialize disc[v] = ∅, time = 0.`);
  for (const id of ids) {
    if (disc[id] === undefined) {
      snap(1, `Component start: DFS(${id}, null).`, { start: id });
      dfs(id, undefined);
    }
  }
  snap(0, `Done. ${bridges.length} bridge(s), ${artPoints.size} articulation point(s).`, { bridges: bridges.length, artPoints: artPoints.size });
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                           */
/* ------------------------------------------------------------------ */

type Mode = "scc" | "bridges";

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("scc");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
        <PillButton color={A} active={mode === "scc"} onClick={() => setMode("scc")}>
          <span style={{ fontSize: "0.78rem" }}>Tarjan SCC (directed)</span>
        </PillButton>
        <PillButton color={A} active={mode === "bridges"} onClick={() => setMode("bridges")}>
          <span style={{ fontSize: "0.78rem" }}>Bridges &amp; Articulation Points (undirected)</span>
        </PillButton>
      </div>
      {mode === "scc" ? <SCCSection /> : <BridgeSection />}
    </div>
  );
}

function SCCSection() {
  const [input, setInput] = useState("A>B, B>C, C>A, B>D, D>E, E>F, F>D, G>F, G>H, H>G");
  const parsed = parseEdges(input, true);
  const ids = parsed?.ids ?? [];
  const edges = parsed?.edges ?? [];
  const frames = useMemo(() => buildTarjanFrames(ids, edges), [ids, edges]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  const pos = useMemo(() => autoLayout(ids), [ids]);
  const presets = [
    { label: "3 SCCs", value: "A>B, B>C, C>A, B>D, D>E, E>F, F>D, G>F, G>H, H>G" },
    { label: "All one SCC", value: "A>B, B>C, C>A" },
    { label: "DAG (n SCCs)", value: "A>B, B>C, C>D" },
    { label: "CLRS-22.5", value: "A>B, B>C, C>D, D>C, E>A, B>E, B>F, E>F, F>G, G>F, G>H, H>H" },
  ];
  return <SCCViz ids={ids} edges={edges} pos={pos} frame={frame} player={player} input={input} setInput={setInput} presets={presets} />;
}

function BridgeSection() {
  const [input, setInput] = useState("A-B, B-C, C-A, C-D, D-E, E-F, F-D, D-G");
  const parsed = parseEdges(input, false);
  const ids = parsed?.ids ?? [];
  const edges = parsed?.edges ?? [];
  const frames = useMemo(() => buildBridgeFrames(ids, edges), [ids, edges]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  const pos = useMemo(() => autoLayout(ids), [ids]);
  const presets = [
    { label: "1 bridge + 1 AP", value: "A-B, B-C, C-A, C-D, D-E, E-F, F-D, D-G" },
    { label: "Path (all bridges)", value: "A-B, B-C, C-D, D-E" },
    { label: "Cycle (no bridges)", value: "A-B, B-C, C-D, D-A" },
    { label: "Two components", value: "A-B, B-C, D-E, E-F" },
  ];
  return <BridgeViz ids={ids} edges={edges} pos={pos} frame={frame} player={player} input={input} setInput={setInput} presets={presets} />;
}

function SCCViz({ ids, edges, pos, frame, player, input, setInput, presets }: {
  ids: string[];
  edges: { from: string; to: string }[];
  pos: Record<string, { x: number; y: number }>;
  frame: TarjanFrame;
  player: ReturnType<typeof useStepPlayer<TarjanFrame>>;
  input: string;
  setInput: (s: string) => void;
  presets: { label: string; value: string }[];
}) {
  const nodes: GraphNodeData[] = ids.map((id) => {
    const sccId = frame.sccOf[id];
    return {
      id, x: pos[id].x, y: pos[id].y, label: id,
      state: frame.nodeStates[id],
      meta: {
        d: frame.disc[id] ?? "−",
        l: frame.low[id] ?? "−",
        ...(sccId !== undefined ? { scc: sccId + 1 } : {}),
      },
    };
  });
  const gEdges: GraphEdgeData[] = edges.map((e) => ({
    from: e.from, to: e.to, directed: true,
    state: frame.edgeStates[`${e.from}-${e.to}`],
  }));
  return (
    <AlgoCanvas
      title="Tarjan's SCC — low-link technique"
      player={player}
      input={
        <InputEditor
          label="Directed edges (A>B)"
          value={input}
          helper="Each node shows {d: discovery, l: low}. Once low == disc, the algorithm pops an SCC."
          presets={presets}
          onApply={setInput}
        />
      }
      pseudocode={<PseudocodePanel lines={TARJAN_PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [frame.flashKey] : []} />}
    >
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 200px", gap: 14, alignItems: "start" }}>
        <GraphCanvas nodes={nodes} edges={gEdges} />
        <Card>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8, fontFamily: C.heading }}>
            DFS stack (on-stack vertices)
          </div>
          {frame.stack.length === 0 ? (
            <div style={{ fontSize: "0.78rem", color: C.textMuted, fontStyle: "italic" }}>empty</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column-reverse", gap: 4 }}>
              {frame.stack.map((v, i) => (
                <div key={i} style={{
                  padding: "5px 9px", borderRadius: 5,
                  background: i === frame.stack.length - 1 ? A : "rgba(6,182,212,0.10)",
                  color: i === frame.stack.length - 1 ? "#fff" : "#0e7490",
                  fontFamily: C.mono, fontWeight: 700, fontSize: "0.82rem",
                  border: i === frame.stack.length - 1 ? "none" : "1px solid rgba(6,182,212,0.3)",
                  display: "flex", justifyContent: "space-between",
                }}>
                  <span>{v}</span>
                  <span style={{ opacity: 0.85 }}>
                    d={frame.disc[v]} l={frame.low[v]}
                  </span>
                </div>
              ))}
            </div>
          )}
          <div style={{ marginTop: 10, paddingTop: 8, borderTop: `1px dashed ${C.border}`, fontSize: "0.72rem", color: C.textSecondary, lineHeight: 1.5 }}>
            <div><b>Total SCCs found:</b> {Object.values(frame.sccOf).filter((x) => x !== undefined).length > 0 ? new Set(Object.values(frame.sccOf).filter((x) => x !== undefined)).size : 0}</div>
            <div style={{ marginTop: 4, fontStyle: "italic" }}>
              SCC root = vertex with low == disc. Stack pops down to it.
            </div>
          </div>
        </Card>
      </div>
    </AlgoCanvas>
  );
}

function BridgeViz({ ids, edges, pos, frame, player, input, setInput, presets }: {
  ids: string[];
  edges: { from: string; to: string }[];
  pos: Record<string, { x: number; y: number }>;
  frame: BridgeFrame;
  player: ReturnType<typeof useStepPlayer<BridgeFrame>>;
  input: string;
  setInput: (s: string) => void;
  presets: { label: string; value: string }[];
}) {
  const edgeKey = (a: string, b: string) => a < b ? `${a}-${b}` : `${b}-${a}`;
  const nodes: GraphNodeData[] = ids.map((id) => ({
    id, x: pos[id].x, y: pos[id].y, label: id,
    state: frame.nodeStates[id],
    meta: { d: frame.disc[id] ?? "−", l: frame.low[id] ?? "−" },
  }));
  const gEdges: GraphEdgeData[] = edges.map((e) => ({
    from: e.from, to: e.to,
    state: frame.edgeStates[edgeKey(e.from, e.to)],
  }));
  return (
    <AlgoCanvas
      title="Bridges & Articulation Points — low-link technique"
      player={player}
      input={
        <InputEditor
          label="Undirected edges (A-B)"
          value={input}
          helper="Bridges turn red. Articulation points get a green ring. Each node shows {d, l} live."
          presets={presets}
          onApply={setInput}
        />
      }
      pseudocode={<PseudocodePanel lines={BRIDGE_PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [frame.flashKey] : []} />}
      legend={
        <div style={{ display: "flex", gap: 14, fontSize: "0.78rem" }}>
          <span><b style={{ color: "#ef4444" }}>red edge</b> = bridge (removal disconnects graph)</span>
          <span><b style={{ color: "#10b981" }}>green node</b> = articulation point</span>
        </div>
      }
    >
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 220px", gap: 14, alignItems: "start" }}>
        <GraphCanvas nodes={nodes} edges={gEdges} />
        <Card>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6, fontFamily: C.heading }}>
            Bridges
          </div>
          {frame.bridges.length === 0 ? (
            <div style={{ fontSize: "0.78rem", color: C.textMuted, fontStyle: "italic", marginBottom: 8 }}>none yet</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 3, marginBottom: 8 }}>
              {frame.bridges.map((b, i) => (
                <div key={i} style={{
                  padding: "4px 8px", borderRadius: 5,
                  background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.5)",
                  fontFamily: C.mono, fontSize: "0.78rem", fontWeight: 700, color: "#7f1d1d",
                }}>
                  {b.u} — {b.v}
                </div>
              ))}
            </div>
          )}
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6, fontFamily: C.heading }}>
            Articulation points
          </div>
          {frame.artPoints.size === 0 ? (
            <div style={{ fontSize: "0.78rem", color: C.textMuted, fontStyle: "italic" }}>none yet</div>
          ) : (
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
              {[...frame.artPoints].map((v) => (
                <span key={v} style={{
                  padding: "3px 8px", borderRadius: 5,
                  background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.5)",
                  fontFamily: C.mono, fontSize: "0.78rem", fontWeight: 700, color: "#065f46",
                }}>
                  {v}
                </span>
              ))}
            </div>
          )}
          <div style={{ marginTop: 10, paddingTop: 8, borderTop: `1px dashed ${C.border}`, fontSize: "0.72rem", color: C.textSecondary, lineHeight: 1.5 }}>
            <div><b>Bridge test:</b> low[v] &gt; disc[u] for tree edge u→v</div>
            <div><b>AP test:</b> low[v] ≥ disc[u] AND u not root, OR u is root with ≥ 2 DFS children.</div>
          </div>
        </Card>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn / Try / Insight                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "The low-link insight", b: "DFS gives every vertex a discovery time disc[u]. The low-link low[u] = the smallest disc reachable from u's DFS subtree using AT MOST ONE back edge. This single number captures whether u's subtree can 'climb back up' the DFS tree — and that's what tells us about cycles, SCCs, bridges, and articulation points." },
    { t: "Why one structure solves four problems", b: "Tarjan's 1972 paper showed that disc + low let you compute (1) Strongly Connected Components in O(V+E), (2) Bridges in O(V+E), (3) Articulation points in O(V+E), (4) Biconnected components in O(V+E). All from one DFS — same code skeleton, different post-processing." },
    { t: "Tarjan SCC vs Kosaraju", b: "Both find SCCs in O(V+E). Kosaraju does TWO DFS passes (one on G, one on Gᵀ in finish-time order). Tarjan does ONE pass. Both give the same SCCs (modulo order). Tarjan is more cache-friendly; Kosaraju is conceptually simpler to teach." },
    { t: "Bridge", b: "An edge whose removal increases the number of connected components. In a road network, a bridge is a road whose closure splits two regions. Test: tree edge u→v is a bridge iff low[v] > disc[u] — meaning v's subtree has NO back edge skipping over u." },
    { t: "Articulation point (cut vertex)", b: "A vertex whose removal disconnects the graph. Two cases: (a) non-root u is AP iff some child v has low[v] ≥ disc[u]; (b) root is AP iff it has ≥ 2 DFS children. Used in network reliability, biconnected component decomposition, social-network influence." },
    { t: "Why directed needs SCC, undirected needs bridges/AP", b: "In a directed graph, mutual reachability defines equivalence classes — those are SCCs. In an undirected graph, every traversable pair is mutually reachable, so the question shifts to FRAGILITY: which edges or vertices are critical to keeping the graph connected." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>One DFS, four problems</SectionEyebrow>
        <SectionTitle>Mental model: the swiss-army DFS</SectionTitle>
        <Lede>
          Tarjan&apos;s low-link is the &quot;swiss army DFS&quot;: a single recursive walk over the graph that, by tracking <code style={{ fontFamily: C.mono }}>disc</code> and <code style={{ fontFamily: C.mono }}>low</code> per vertex, simultaneously answers questions about cycles, components, and structural fragility. The technique is one of the most-reused ideas in graph algorithms — once you internalize <code style={{ fontFamily: C.mono }}>low</code>, four classical problems become trivial.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10 }}>
        {cards.map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: A, marginBottom: 6, fontFamily: C.mono, letterSpacing: "0.08em" }}>0{i + 1}</div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.t}</div>
            <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }}>{s.b}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function TryTab() {
  const probs = [
    { q: "On the SCC preset 'CLRS-22.5', how many SCCs are there?", a: "4" },
    { q: "Removing a bridge always increases the connected-component count by how many?", a: "1" },
    { q: "True/False: A graph with NO bridges has a Eulerian circuit.", a: "False (need all even degrees too)" },
    { q: "The 'Path A-B, B-C, C-D, D-E' has how many bridges? How many APs?", a: "4 bridges, 3 APs (B, C, D)" },
  ];
  const [g, setG] = useState<(string | null)[]>(probs.map(() => null));
  const [s, setS] = useState<boolean[]>(probs.map(() => false));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Verify each in the visualizer.</Callout>
      {probs.map((p, i) => (
        <Card key={i}>
          <div style={{ fontSize: "0.9rem", marginBottom: 8, color: C.text }}><b style={{ color: C.textMuted, fontFamily: C.mono }}>#{i + 1}</b> {p.q}</div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <input value={g[i] ?? ""} onChange={(e) => { const v = [...g]; v[i] = e.target.value; setG(v); }}
              placeholder="answer"
              style={{ padding: "7px 10px", border: `1px solid ${C.border}`, borderRadius: 8, fontFamily: C.mono, fontSize: "0.85rem", minWidth: 240, outline: "none", background: C.bg, color: C.text }} />
            <button
              onClick={() => { const v = [...s]; v[i] = true; setS(v); }}
              style={{
                padding: "6px 14px", borderRadius: 8, fontSize: "0.78rem", fontWeight: 700,
                border: `1px solid ${C.border}`, background: C.bg, color: C.textSecondary,
                cursor: "pointer", fontFamily: C.heading,
              }}
            >
              Reveal
            </button>
            {s[i] && (
              <span style={{
                fontSize: "0.82rem", fontWeight: 700, padding: "4px 12px", borderRadius: 8,
                color: C.successDark, background: `${C.success}14`, fontFamily: C.heading,
              }}>
                {p.a}
              </span>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

function InsightTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>Why the bridge test is low[v] &gt; disc[u]</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          For a tree edge u→v, low[v] is the smallest disc reachable from v&apos;s subtree via at most one back edge. If low[v] &gt; disc[u], then v&apos;s subtree has NO back edge that skips over u — meaning the only path from v&apos;s subtree to anywhere &quot;above&quot; u is THROUGH the edge (u, v) itself. Removing it disconnects the subtree. Hence: bridge.
        </p>
      </Card>
      <Card>
        <SubHeading>SCC vs Kosaraju vs Tarjan vs Path-based</SubHeading>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
          <thead>
            <tr style={{ background: C.bgSoft }}>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: C.textMuted, fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>Algorithm</th>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: C.textMuted, fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>DFS passes</th>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: C.textMuted, fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>Year</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Kosaraju", "2 (G and Gᵀ)", "1978"],
              ["Tarjan", "1 (low-link)", "1972"],
              ["Path-based (Gabow)", "1 (two stacks)", "2000"],
            ].map((r, i) => (
              <tr key={i} style={{ borderTop: `1px solid ${C.border}` }}>
                <td style={{ padding: "5px 10px", fontWeight: 600, color: C.text }}>{r[0]}</td>
                <td style={{ padding: "5px 10px", color: C.textSecondary }}>{r[1]}</td>
                <td style={{ padding: "5px 10px", color: C.textSecondary }}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: "0.82rem", color: C.textSecondary, lineHeight: 1.55, marginTop: 8, marginBottom: 0 }}>
          All three are O(V + E). Production code (NetworkX <code style={{ fontFamily: C.mono }}>nx.strongly_connected_components</code>, BoostGraph) typically uses Tarjan.
        </p>
      </Card>
      <Card>
        <SubHeading>Where this lands in interviews / production</SubHeading>
        <ul style={{ fontSize: "0.86rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
          <li><strong>SCC condensation</strong>: collapse each SCC into a single node → DAG. Used in 2-SAT, dataflow analysis, deadlock detection.</li>
          <li><strong>Critical Connections in a Network</strong> (LeetCode 1192): literally &quot;find all bridges&quot; — Tarjan&apos;s low-link is the intended solution.</li>
          <li><strong>Network reliability</strong>: ISP backbone analysis. Bridges are single points of failure.</li>
          <li><strong>Compiler dataflow</strong>: SCCs of a call graph identify mutual recursion sets that must be analyzed together.</li>
          <li><strong>Strongly connected = mutually reachable</strong>: in a social network, an SCC of the &quot;follows&quot; graph is a friend-clique where everyone (transitively) follows everyone.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                            */
/* ------------------------------------------------------------------ */

export default function DSA_L7_TarjanLowLinkActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "What does low[u] represent in Tarjan's algorithm?",
      options: [
        "The lowest neighbor index of u",
        "The smallest discovery time reachable from u's DFS subtree using at most one back edge",
        "The number of children of u in the DFS tree",
        "The depth of u from the root",
      ],
      correctIndex: 1,
      explanation: "low[u] is the cycle-detection signal: if low[u] equals disc[u], u's subtree has no path to an ancestor — so u is the root of an SCC (in directed) or a 'fragile' joint (in undirected).",
    },
    {
      question: "An edge (u, v) in an undirected DFS is a BRIDGE iff:",
      options: ["low[v] = disc[v]", "low[v] > disc[u]", "low[v] = disc[u]", "v is the parent of u"],
      correctIndex: 1,
      explanation: "If low[v] > disc[u], v's subtree has no back edge skipping over u → the only escape is through the (u,v) edge → removing it disconnects the subtree.",
    },
    {
      question: "How many DFS passes does Kosaraju's SCC algorithm need vs Tarjan's?",
      options: ["1 vs 1", "2 vs 1", "1 vs 2", "Both need 3"],
      correctIndex: 1,
      explanation: "Kosaraju runs DFS on G to get a finish-time order, then DFS on the transpose Gᵀ in reverse-finish order. Tarjan does a single DFS using disc/low — same O(V+E), one pass.",
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
      explanation: "If the DFS root has just one child subtree, removing it leaves that subtree connected (just rooted at its child). With ≥ 2 child subtrees, removing the root splits them — articulation.",
    },
    {
      question: "After SCC condensation (collapse each SCC to one node), the resulting graph is always:",
      options: ["A tree", "A DAG", "Disconnected", "Strongly connected"],
      correctIndex: 1,
      explanation: "By definition of SCC, no two SCCs are mutually reachable. So the condensation has no directed cycle — it's a DAG. This is foundational for 2-SAT, dataflow analysis, and topological reasoning over cyclic graphs.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Tarjan SCC + Bridges (Low-Link DFS)"
      level={7}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High - LC1192 (Critical Connections), 2-SAT, network-reliability questions"
      nextLessonHint="Max-Flow & Bipartite Matching"
    />
  );
}
