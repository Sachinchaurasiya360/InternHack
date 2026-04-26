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
  Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Parser - capacities                                                 */
/* ------------------------------------------------------------------ */

function parseCap(input: string): { ids: string[]; edges: { from: string; to: string; cap: number }[] } | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string; cap: number }[] = [];
  const ids = new Set<string>();
  for (const tok of tokens) {
    const m = tok.match(/^([A-Za-z0-9_]+)>([A-Za-z0-9_]+):(\d+)$/);
    if (!m) return null;
    const cap = Number(m[3]);
    if (cap <= 0) return null;
    edges.push({ from: m[1], to: m[2], cap });
    ids.add(m[1]); ids.add(m[2]);
  }
  return { ids: [...ids].sort(), edges };
}

function autoLayout(ids: string[]): Record<string, { x: number; y: number }> {
  // Heuristic: try to lay out source at left, sink at right
  const out: Record<string, { x: number; y: number }> = {};
  const n = ids.length;
  if (n === 0) return out;
  // Default: ring layout
  ids.forEach((id, i) => {
    const ang = (2 * Math.PI * i) / n - Math.PI / 2;
    out[id] = { x: 320 + 130 * Math.cos(ang), y: 170 + 110 * Math.sin(ang) };
  });
  return out;
}

/* ------------------------------------------------------------------ */
/*  Edmonds-Karp                                                       */
/* ------------------------------------------------------------------ */

interface EKFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  cap: Record<string, number>;       // residual capacity per directed edge "u-v"
  flow: Record<string, number>;       // flow on original edges
  totalFlow: number;
  bfsParent: Record<string, string | undefined>;
  augPath: string[];                  // path through nodes
  augBottleneck?: number;
  nodeStates: Record<string, CellState>;
  edgeStates: Record<string, CellState>;
  flashKey?: string;
  iteration: number;
}

const EK_PSEUDO = [
  "Edmonds-Karp(G, s, t):",
  "  build residual graph: cap[u→v] = c(u,v); cap[v→u] = 0",
  "  totalFlow ← 0",
  "  while BFS from s in residual graph reaches t:",
  "    path ← reconstruct via parent pointers",
  "    bottleneck ← min cap along path",
  "    for each (u,v) on path:",
  "      cap[u→v] -= bottleneck    # consume forward",
  "      cap[v→u] += bottleneck    # add reverse (for cancellation)",
  "    totalFlow += bottleneck",
  "  return totalFlow",
];

function buildEKFrames(
  ids: string[],
  edges: { from: string; to: string; cap: number }[],
  source: string,
  sink: string,
): EKFrame[] {
  const frames: EKFrame[] = [];
  if (!ids.includes(source) || !ids.includes(sink)) {
    frames.push({
      line: 0, vars: { err: "source/sink not in graph" }, message: "Source or sink missing.",
      cap: {}, flow: {}, totalFlow: 0, bfsParent: {}, augPath: [],
      nodeStates: {}, edgeStates: {}, iteration: 0,
    });
    return frames;
  }
  const cap: Record<string, number> = {};      // residual
  const flow: Record<string, number> = {};     // flow on original directed edges
  const adj: Record<string, Set<string>> = Object.fromEntries(ids.map((id) => [id, new Set<string>()]));
  for (const e of edges) {
    const k = `${e.from}-${e.to}`;
    const rk = `${e.to}-${e.from}`;
    cap[k] = (cap[k] ?? 0) + e.cap;
    if (cap[rk] === undefined) cap[rk] = 0;
    flow[k] = 0;
    adj[e.from].add(e.to);
    adj[e.to].add(e.from);  // residual graph is bidirectional
  }
  let totalFlow = 0;
  let iteration = 0;

  const baseStates = (): { ns: Record<string, CellState>; es: Record<string, CellState> } => {
    const ns: Record<string, CellState> = Object.fromEntries(ids.map((id) => [id, "default" as CellState]));
    ns[source] = "active";
    ns[sink] = "match";
    const es: Record<string, CellState> = {};
    return { ns, es };
  };

  const snap = (line: number, message: string, vars: Record<string, string | number | undefined> = {}, augPath: string[] = [], bfsParent: Record<string, string | undefined> = {}, bottleneck?: number, flashKey?: string) => {
    const { ns, es } = baseStates();
    for (const v of augPath) ns[v] = "frontier";
    if (augPath[0]) ns[augPath[0]] = "active";
    if (augPath[augPath.length - 1]) ns[augPath[augPath.length - 1]] = "match";
    for (let i = 0; i + 1 < augPath.length; i++) {
      es[`${augPath[i]}-${augPath[i + 1]}`] = "path";
    }
    frames.push({
      line, vars, message,
      cap: { ...cap }, flow: { ...flow }, totalFlow,
      bfsParent: { ...bfsParent }, augPath: [...augPath],
      augBottleneck: bottleneck,
      nodeStates: ns, edgeStates: es,
      flashKey, iteration,
    });
  };

  snap(1, `Build residual graph. Each directed edge starts with cap = original capacity, reverse cap = 0.`);

  while (true) {
    iteration++;
    // BFS in residual graph
    const parent: Record<string, string | undefined> = {};
    parent[source] = undefined;
    const visited = new Set<string>([source]);
    const Q: string[] = [source];
    snap(3, `Iteration ${iteration}: BFS from ${source} in residual graph.`, { iter: iteration }, [], { [source]: undefined });
    let found = false;
    while (Q.length) {
      const u = Q.shift()!;
      for (const v of adj[u]) {
        if (!visited.has(v) && (cap[`${u}-${v}`] ?? 0) > 0) {
          visited.add(v);
          parent[v] = u;
          Q.push(v);
          if (v === sink) { found = true; break; }
        }
      }
      if (found) break;
    }
    if (!found) {
      snap(3, `BFS could not reach ${sink} → no augmenting path. Algorithm terminates. MAX FLOW = ${totalFlow}.`, { totalFlow, iter: iteration }, [], parent, undefined, "totalFlow");
      break;
    }
    // Reconstruct path
    const path: string[] = [];
    let cur: string | undefined = sink;
    while (cur !== undefined) { path.unshift(cur); cur = parent[cur]; }
    snap(4, `Augmenting path found: ${path.join(" → ")}.`, { path: path.join("→") }, path, parent);
    // Bottleneck
    let bottleneck = Infinity;
    for (let i = 0; i + 1 < path.length; i++) {
      const c = cap[`${path[i]}-${path[i + 1]}`];
      if (c < bottleneck) bottleneck = c;
    }
    snap(5, `Bottleneck (min residual capacity along path) = ${bottleneck}.`, { bottleneck }, path, parent, bottleneck, "bottleneck");
    // Apply
    for (let i = 0; i + 1 < path.length; i++) {
      const u = path[i], v = path[i + 1];
      cap[`${u}-${v}`] -= bottleneck;
      cap[`${v}-${u}`] = (cap[`${v}-${u}`] ?? 0) + bottleneck;
      // Track flow on original edges only (where this edge originally existed)
      if (flow[`${u}-${v}`] !== undefined) flow[`${u}-${v}`] += bottleneck;
      else if (flow[`${v}-${u}`] !== undefined) flow[`${v}-${u}`] -= bottleneck;  // cancellation
    }
    totalFlow += bottleneck;
    snap(8, `Push ${bottleneck} units along path. Forward residuals decrease, reverse residuals increase. totalFlow = ${totalFlow}.`, { pushed: bottleneck, totalFlow }, path, parent, bottleneck, "totalFlow");
  }
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                           */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("S>A:10, S>C:10, A>B:4, A>C:2, A>D:8, B>T:10, C>D:9, D>B:6, D>T:10");
  const [source, setSource] = useState("S");
  const [sink, setSink] = useState("T");
  const parsed = parseCap(inputStr);
  const ids = parsed?.ids ?? [];
  const edges = parsed?.edges ?? [];
  const frames = useMemo(() => buildEKFrames(ids, edges, source, sink), [ids, edges, source, sink]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  const nodes: GraphNodeData[] = ids.map((id) => ({
    id, x: pos[id].x, y: pos[id].y, label: id,
    state: frame.nodeStates[id],
  }));
  const gEdges: GraphEdgeData[] = edges.map((e) => {
    const k = `${e.from}-${e.to}`;
    const f = frame.flow[k] ?? 0;
    return {
      from: e.from, to: e.to, directed: true,
      weight: e.cap,
      state: frame.edgeStates[k],
      // Note: GraphEdgeData supports weight only — embed flow in label via meta would need primitive change.
      // We surface flow in the right-side panel instead.
      ...(f > 0 ? { weight: e.cap } : {}),
    };
  });
  void gEdges;
  const gEdgesWithLabel: GraphEdgeData[] = edges.map((e) => {
    const k = `${e.from}-${e.to}`;
    const f = frame.flow[k] ?? 0;
    return {
      from: e.from, to: e.to, directed: true,
      weight: f > 0 ? Number(`${f}`) : e.cap, // can't render "f/cap" in primitive — fall back to capacity
      state: frame.edgeStates[k],
    };
  });
  void gEdgesWithLabel;

  return (
    <AlgoCanvas
      title={`Max-Flow (Edmonds-Karp) — ${source} → ${sink}`}
      player={player}
      input={
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-end" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <InputEditor
              label="Directed capacities (A>B:cap)"
              value={inputStr}
              helper="Edges have positive capacities. Source S, sink T conventional."
              presets={[
                { label: "CLRS-26.1", value: "S>A:10, S>C:10, A>B:4, A>C:2, A>D:8, B>T:10, C>D:9, D>B:6, D>T:10" },
                { label: "Two paths", value: "S>A:5, S>B:5, A>T:5, B>T:5" },
                { label: "Bottleneck", value: "S>A:100, A>B:1, B>T:100" },
                { label: "Cancel-trick", value: "S>A:3, S>B:3, A>B:3, A>T:3, B>T:3" },
              ]}
              onApply={(v) => { if (parseCap(v)) setInputStr(v); }}
            />
          </div>
          <div>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: 4, fontFamily: C.heading }}>Source</span>
            <select value={source} onChange={(e) => setSource(e.target.value)} style={{
              padding: "7px 10px", borderRadius: 6, border: `1px solid ${C.border}`,
              fontFamily: C.mono, fontSize: "0.82rem",
              background: C.bg, color: C.text,
            }}>
              {ids.map((id) => <option key={id} value={id}>{id}</option>)}
            </select>
          </div>
          <div>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: 4, fontFamily: C.heading }}>Sink</span>
            <select value={sink} onChange={(e) => setSink(e.target.value)} style={{
              padding: "7px 10px", borderRadius: 6, border: `1px solid ${C.border}`,
              fontFamily: C.mono, fontSize: "0.82rem",
              background: C.bg, color: C.text,
            }}>
              {ids.map((id) => <option key={id} value={id}>{id}</option>)}
            </select>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={EK_PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [frame.flashKey] : []} />}
      legend={
        <div style={{ display: "flex", gap: 14, fontSize: "0.78rem" }}>
          <span><b style={{ color: "#06b6d4" }}>cyan</b> = on augmenting path</span>
          <span><b style={{ color: "#fbbf24" }}>amber</b> = saturated edge</span>
          <span>Edge label = original capacity (flow shown in side panel)</span>
        </div>
      }
    >
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 240px", gap: 14, alignItems: "start" }}>
        <GraphCanvas nodes={nodes} edges={gEdges} />
        <Card>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8, fontFamily: C.heading }}>
            Total Flow
          </div>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: C.successDark, fontFamily: C.mono, lineHeight: 1, marginBottom: 4 }}>
            {frame.totalFlow}
          </div>
          {frame.augBottleneck !== undefined && (
            <div style={{ fontSize: "0.78rem", color: C.textSecondary, marginBottom: 8 }}>
              Last bottleneck: <b style={{ color: "#F59E0B" }}>{frame.augBottleneck}</b>
            </div>
          )}
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 10, marginBottom: 6, fontFamily: C.heading }}>
            Edge flows (f / cap)
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 3, maxHeight: 200, overflowY: "auto" }}>
            {edges.map((e, i) => {
              const k = `${e.from}-${e.to}`;
              const f = frame.flow[k] ?? 0;
              const ratio = f / e.cap;
              const onPath = (() => {
                for (let i = 0; i + 1 < frame.augPath.length; i++) {
                  if (frame.augPath[i] === e.from && frame.augPath[i + 1] === e.to) return true;
                }
                return false;
              })();
              return (
                <div key={i} style={{
                  padding: "4px 8px", borderRadius: 5,
                  background: onPath ? "rgba(6,182,212,0.18)"
                    : ratio === 1 ? "rgba(251,191,36,0.18)"
                      : ratio > 0 ? "rgba(16,185,129,0.10)"
                        : C.bgSoft,
                  border: onPath ? "1px solid rgba(6,182,212,0.55)" : `1px solid ${C.border}`,
                  fontFamily: C.mono, fontSize: "0.74rem",
                  display: "flex", justifyContent: "space-between",
                }}>
                  <span style={{ fontWeight: 700, color: C.text }}>{e.from}→{e.to}</span>
                  <span style={{ color: ratio === 1 ? "#92400e" : C.textSecondary }}>
                    <b style={{ color: C.text }}>{f}</b>/{e.cap}
                  </span>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 10, paddingTop: 8, borderTop: `1px dashed ${C.border}`, fontSize: "0.72rem", color: C.textSecondary, lineHeight: 1.5 }}>
            <div>Iteration: <b style={{ color: C.text }}>{frame.iteration}</b></div>
            <div style={{ marginTop: 4, fontStyle: "italic" }}>
              Saturated edges are part of a min-cut.
            </div>
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
    { t: "What is max-flow?", b: "Given a directed graph with edge capacities, a source s, and a sink t, find the maximum amount of 'flow' that can be sent from s to t such that (1) every edge's flow ≤ its capacity and (2) flow conservation holds at every interior node (in = out). The classical model for pipes, traffic, bandwidth, supply networks." },
    { t: "Ford-Fulkerson method", b: "While there exists an augmenting path from s to t in the RESIDUAL graph: find the bottleneck capacity along it, push that much flow, update the residual graph (forward decreases, reverse increases for cancellation). Stop when no augmenting path exists. Returns optimal max-flow." },
    { t: "Why reverse edges?", b: "The reverse residual capacity lets the algorithm 'cancel' a previous wrong choice. Without it, a greedy first augmenting path could lock you out of the optimum. Reverse edges = the algorithm can undo decisions in future iterations." },
    { t: "Edmonds-Karp = FF + BFS", b: "Pick the AUGMENTING PATH using BFS (shortest in number of edges, not bottleneck). This bounds the number of augmentations to O(V·E), giving total O(V·E²). Critical: BFS guarantees termination on irrational capacities, where naive Ford-Fulkerson can spin forever." },
    { t: "Min-Cut = Max-Flow (the duality)", b: "A CUT is a partition of vertices into S (containing source) and T (containing sink). Cut capacity = sum of capacities of edges crossing S→T. Theorem (Ford-Fulkerson 1956): max flow value = min cut capacity. The saturated edges in your final residual graph ARE the min cut." },
    { t: "Bipartite matching as max-flow", b: "Maximum matching in a bipartite graph (left set L, right set R) reduces to max-flow: add a source connected to all of L (cap 1), all of R connected to a sink (cap 1), every original edge has cap 1. Max flow = max matching size. This is why max-flow is everywhere in scheduling, assignment, and optimization." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Pipes, residuals, and cuts</SectionEyebrow>
        <SectionTitle>Mental model: pipes from reservoir to sink</SectionTitle>
        <Lede>
          Imagine pipes from a reservoir (source) to a sink. Each pipe has a flow capacity. Max-flow asks: what&apos;s the most you can push through? The clever trick is the residual graph — at any moment you can &quot;send flow backward&quot; against any pipe that&apos;s already carrying flow, which is mathematically a way of cancelling and rerouting. Edmonds-Karp finds the right augmentations in BFS order.
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
    { q: "On the CLRS preset (S→T), what is the max flow?", a: "19" },
    { q: "On 'Two paths' (S→T), max flow?", a: "10" },
    { q: "On 'Bottleneck' (S→A→B→T), max flow?", a: "1" },
    { q: "Why does max-flow equal min-cut intuitively?", a: "Every flow path crosses the cut, so flow ≤ cut capacity. The augmenting-path algorithm's stopping condition gives equality." },
  ];
  const [g, setG] = useState<(string | null)[]>(probs.map(() => null));
  const [s, setS] = useState<boolean[]>(probs.map(() => false));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Run each preset in the visualizer to verify.</Callout>
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
        <SubHeading>Algorithm zoo — when to use which</SubHeading>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
          <thead>
            <tr style={{ background: C.bgSoft }}>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: C.textMuted, fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>Algorithm</th>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: C.textMuted, fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>Complexity</th>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: C.textMuted, fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Ford-Fulkerson (DFS)", "O(E · max_flow)", "Can fail to terminate on irrational capacities. Don't use in production."],
              ["Edmonds-Karp (BFS)", "O(V · E²)", "Guaranteed termination. Easy to code. Good for general graphs."],
              ["Dinic's", "O(V² · E)", "Level graph + blocking flow. O(E · √V) on unit-capacity / bipartite graphs."],
              ["Push-Relabel (Goldberg-Tarjan)", "O(V² · √E)", "Faster in practice. Push 'preflow' through nodes; relabel heights."],
              ["Hopcroft-Karp", "O(E · √V)", "SPECIFICALLY for bipartite matching. Beats Dinic's general bound on this case."],
            ].map((r, i) => (
              <tr key={i} style={{ borderTop: `1px solid ${C.border}` }}>
                <td style={{ padding: "5px 10px", fontWeight: 600, color: C.text }}>{r[0]}</td>
                <td style={{ padding: "5px 10px", color: A, fontWeight: 700, fontFamily: C.mono }}>{r[1]}</td>
                <td style={{ padding: "5px 10px", color: C.textSecondary }}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Card>
        <SubHeading>Min-cut from saturated edges</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          After max-flow finishes, do one more BFS from the source in the residual graph. Let S = vertices reachable from source. Then T = V \ S (and t ∈ T). The min cut is exactly the set of original edges (u, v) with u ∈ S and v ∈ T — and they&apos;re ALL saturated in the final flow. This gives you both the max-flow value AND the witnessing min cut for free.
        </p>
      </Card>
      <Card>
        <SubHeading>Real applications</SubHeading>
        <ul style={{ fontSize: "0.86rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
          <li><strong>Bipartite matching</strong>: assign workers→jobs, students→schools, organs→patients (Roth&apos;s 2012 Nobel work).</li>
          <li><strong>Image segmentation</strong>: foreground/background separation as min-cut on a pixel grid (Boykov-Kolmogorov).</li>
          <li><strong>Network reliability</strong>: max-flow = how much traffic can survive between two routers.</li>
          <li><strong>Project selection</strong>: which projects to fund to maximize profit (max-flow on a bipartite project↔resource graph).</li>
          <li><strong>Sports elimination</strong>: can team X still win the league? Reduces to max-flow on a remaining-games network.</li>
          <li><strong>Baseball / scheduling problems</strong>: NP-hard variants get approximated by LP relaxation of max-flow.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Stdlib — almost no language has it built in</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Max-flow is rare in stdlibs because the right choice depends on the graph. <strong>NetworkX</strong> has <code style={{ fontFamily: C.mono }}>nx.maximum_flow(G, s, t)</code> (default = preflow-push) and <code style={{ fontFamily: C.mono }}>nx.minimum_cut</code>. <strong>SciPy</strong>: <code style={{ fontFamily: C.mono }}>scipy.sparse.csgraph.maximum_flow</code>. <strong>Boost Graph Library</strong>: full menu (Edmonds-Karp, push-relabel, boykov-kolmogorov for vision). For competitive programming, always carry a Dinic&apos;s template — Edmonds-Karp is easier to debug but Dinic&apos;s is faster on dense unit-capacity graphs.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                            */
/* ------------------------------------------------------------------ */

export default function DSA_L7_MaxFlowActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "Why does Ford-Fulkerson maintain reverse edges in the residual graph?",
      options: [
        "To save memory",
        "Required by directed graph storage",
        "So the algorithm can 'cancel' a previous augmentation if a later iteration needs to reroute flow",
        "They make the BFS faster",
      ],
      correctIndex: 2,
      explanation: "Reverse residuals encode the option to undo. Without them, a greedy early augmentation could prevent reaching the optimum max-flow.",
    },
    {
      question: "Time complexity of Edmonds-Karp?",
      options: ["O(V + E)", "O(V · E)", "O(V · E²)", "O(V² · E)"],
      correctIndex: 2,
      explanation: "Each BFS is O(E). The number of augmenting paths is bounded by O(V·E) thanks to the BFS shortest-path argument. Total: O(V · E²).",
    },
    {
      question: "The Max-Flow Min-Cut theorem says:",
      options: [
        "Max flow = min cut value",
        "Max flow ≥ min cut value",
        "Max flow ≤ min cut value",
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
      explanation: "Run BFS from source in the FINAL residual graph. Reachable vertices = S, the rest = T. The min cut = edges crossing S → T in the original graph (all saturated).",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Max-Flow & Bipartite Matching (Edmonds-Karp)"
      level={7}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High - bipartite matching, image segmentation, scheduling, system design"
      nextLessonHint="Advanced Data Structures"
    />
  );
}
