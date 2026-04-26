"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer, GraphCanvas,
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

/* ================================================================== */
/*  Shared helpers                                                     */
/* ================================================================== */

function parseDirectedEdges(s: string): { ids: string[]; edges: [string, string, number?][] } | null {
  const toks = s.split(/[,\s;]+/).map((t) => t.trim()).filter(Boolean);
  if (toks.length === 0) return null;
  const edges: [string, string, number?][] = [];
  const ids = new Set<string>();
  for (const t of toks) {
    const m = t.match(/^([A-Za-z0-9_]+)->([A-Za-z0-9_]+)(?::(-?\d+))?$/);
    if (!m) return null;
    edges.push([m[1], m[2], m[3] !== undefined ? Number(m[3]) : undefined]);
    ids.add(m[1]); ids.add(m[2]);
  }
  return { ids: [...ids].sort(), edges };
}

function circleLayout(ids: string[], cx = 300, cy = 170, r = 120): Record<string, { x: number; y: number }> {
  const n = ids.length;
  const pos: Record<string, { x: number; y: number }> = {};
  ids.forEach((id, i) => {
    const a = (2 * Math.PI * i) / Math.max(1, n) - Math.PI / 2;
    pos[id] = { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  });
  return pos;
}

const SCC_COLORS = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#06b6d4"];

/* ================================================================== */
/*  KOSARAJU                                                           */
/* ================================================================== */

interface KFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  phase: "dfs1" | "reverse" | "dfs2" | "done";
  nodeStates: Record<string, CellState>;
  nodeSccColor?: Record<string, string>;
  reversed: boolean;
  finishOrder: string[];
  sccList: string[][];
  activeNode?: string;
  highlightEdges: Record<string, CellState>;
}

const PSEUDO_K = [
  "function kosaraju(G):",
  "  # Phase 1 - DFS on G, record finish order",
  "  finish ← []",
  "  for v in V: if v unvisited: dfs1(v)",
  "  # Phase 2 - reverse all edges → G^T",
  "  # Phase 3 - DFS on G^T in reverse finish order",
  "  for v in reversed(finish):",
  "    if v unvisited in G^T:",
  "      newComponent = dfs2(v)",
  "      sccs.append(newComponent)",
];

function buildKosarajuFrames(ids: string[], edges: [string, string][]): KFrame[] {
  const frames: KFrame[] = [];
  const adj: Record<string, string[]> = {}, rev: Record<string, string[]> = {};
  ids.forEach((id) => { adj[id] = []; rev[id] = []; });
  for (const [u, v] of edges) { adj[u].push(v); rev[v].push(u); }

  const visited: Record<string, boolean> = {};
  const finish: string[] = [];
  const nodeStates: Record<string, CellState> = Object.fromEntries(ids.map((id) => [id, "default"]));

  frames.push({
    line: 0, vars: { V: ids.length, E: edges.length, phase: "start" },
    message: "Begin Kosaraju's - Phase 1: DFS on original graph, record finish times.",
    phase: "dfs1", nodeStates: { ...nodeStates }, reversed: false,
    finishOrder: [], sccList: [], highlightEdges: {},
  });

  function dfs1(u: string) {
    visited[u] = true;
    nodeStates[u] = "active";
    frames.push({
      line: 3, vars: { visit: u, stackSize: finish.length },
      message: `DFS1: visit ${u}.`,
      phase: "dfs1", nodeStates: { ...nodeStates }, reversed: false,
      finishOrder: [...finish], sccList: [], highlightEdges: {}, activeNode: u,
    });
    for (const w of adj[u]) {
      if (!visited[w]) {
        frames.push({
          line: 3, vars: { from: u, to: w },
          message: `Descend ${u} → ${w}.`,
          phase: "dfs1", nodeStates: { ...nodeStates }, reversed: false,
          finishOrder: [...finish], sccList: [], highlightEdges: { [`${u}->${w}`]: "active" }, activeNode: u,
        });
        dfs1(w);
      }
    }
    nodeStates[u] = "done";
    finish.push(u);
    frames.push({
      line: 3, vars: { finished: u, order: finish.length },
      message: `Finish ${u} → push onto stack. finish = [${finish.join(",")}].`,
      phase: "dfs1", nodeStates: { ...nodeStates }, reversed: false,
      finishOrder: [...finish], sccList: [], highlightEdges: {},
    });
  }
  for (const v of ids) if (!visited[v]) dfs1(v);

  // phase 2: reverse
  frames.push({
    line: 4, vars: { reversed: "edges flipped" },
    message: `Phase 2: reverse every edge to get G^T. Arrows flip.`,
    phase: "reverse", nodeStates: Object.fromEntries(ids.map((id) => [id, "default"])),
    reversed: true, finishOrder: [...finish], sccList: [], highlightEdges: {},
  });

  // phase 3: dfs2
  const visited2: Record<string, boolean> = {};
  const sccList: string[][] = [];
  const sccColor: Record<string, string> = {};
  for (let k = finish.length - 1; k >= 0; k--) {
    const seed = finish[k];
    if (visited2[seed]) continue;
    const comp: string[] = [];
    const color = SCC_COLORS[sccList.length % SCC_COLORS.length];
    function dfs2(u: string) {
      visited2[u] = true;
      comp.push(u);
      sccColor[u] = color;
      for (const w of rev[u]) if (!visited2[w]) dfs2(w);
    }
    dfs2(seed);
    sccList.push(comp);
    frames.push({
      line: 8, vars: { seed, scc: `{${comp.join(",")}}` },
      message: `DFS2 from ${seed} in G^T → SCC = {${comp.join(",")}}.`,
      phase: "dfs2",
      nodeStates: Object.fromEntries(ids.map((id) => [id, sccColor[id] ? "done" : "default"])),
      nodeSccColor: { ...sccColor },
      reversed: true, finishOrder: [...finish], sccList: sccList.map((c) => [...c]),
      highlightEdges: {}, activeNode: seed,
    });
  }

  frames.push({
    line: 0, vars: { sccs: sccList.length },
    message: `Done - ${sccList.length} strongly connected component(s).`,
    phase: "done",
    nodeStates: Object.fromEntries(ids.map((id) => [id, "done"])),
    nodeSccColor: { ...sccColor },
    reversed: true, finishOrder: [...finish], sccList, highlightEdges: {},
  });
  return frames;
}

function KosarajuVisualizer() {
  const [src, setSrc] = useState("A->B, B->C, C->A, B->D, D->E, E->F, F->D, G->F, G->H, H->G");
  const parsed = parseDirectedEdges(src);
  const { ids, edges } = parsed ?? { ids: [], edges: [] };
  const plainEdges = edges.map(([u, v]) => [u, v] as [string, string]);
  const frames = useMemo(() => buildKosarajuFrames(ids, plainEdges), [ids, plainEdges]); // eslint-disable-line react-hooks/exhaustive-deps
  const player = useStepPlayer(frames);
  const frame = player.current!;
  const pos = useMemo(() => circleLayout(ids), [ids]);

  const gNodes: GraphNodeData[] = ids.map((id) => {
    const sccCol = frame.nodeSccColor?.[id];
    const st = frame.nodeStates[id];
    return {
      id, x: pos[id].x, y: pos[id].y, label: id,
      state: (sccCol ? undefined : st) as CellState | undefined,
    };
  });
  const sccIdx: Record<string, number> = {};
  frame.sccList.forEach((c, i) => c.forEach((n) => (sccIdx[n] = i + 1)));
  for (const n of gNodes) {
    if (sccIdx[n.id]) n.meta = { SCC: sccIdx[n.id] };
  }

  // edges: if reversed, swap from/to
  const gEdges: GraphEdgeData[] = edges.map(([u, v]) => {
    const fromId = frame.reversed ? v : u;
    const toId = frame.reversed ? u : v;
    const key = `${u}->${v}`;
    const st = frame.highlightEdges[key];
    return { from: fromId, to: toId, directed: true, state: st };
  });

  return (
    <AlgoCanvas
      title="Kosaraju's Strongly Connected Components"
      player={player}
      input={
        <InputEditor
          label="Directed edges (u->v)"
          value={src}
          placeholder="A->B, B->C, C->A"
          presets={[
            { label: "Two SCCs", value: "A->B, B->C, C->A, C->D, D->E, E->D" },
            { label: "Three SCCs", value: "A->B, B->C, C->A, B->D, D->E, E->F, F->D, G->F, G->H, H->G" },
            { label: "Singletons", value: "A->B, B->C, C->D" },
            { label: "Full cycle", value: "A->B, B->C, C->D, D->A" },
          ]}
          onApply={(v) => { if (parseDirectedEdges(v)) setSrc(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_K} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} />}
      legend={
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          <span>finish: <b style={{ fontFamily: C.mono }}>[{frame.finishOrder.join(",")}]</b></span>
          {frame.sccList.map((c, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: SCC_COLORS[i % SCC_COLORS.length] }} />
              SCC {i + 1}: {`{${c.join(",")}}`}
            </span>
          ))}
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <GraphCanvas nodes={gNodes} edges={gEdges} showWeights={false} />
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ================================================================== */
/*  FLOYD-WARSHALL                                                     */
/* ================================================================== */

interface FWFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  dist: (number | null)[][];
  k: number; i: number; j: number;
  updated?: boolean;
  ids: string[];
  highlightRowCol?: number;
}

const PSEUDO_FW = [
  "function floydWarshall(dist):",
  "  for k from 0 to n-1:",
  "    for i from 0 to n-1:",
  "      for j from 0 to n-1:",
  "        if dist[i][k] + dist[k][j] < dist[i][j]:",
  "          dist[i][j] ← dist[i][k] + dist[k][j]",
];

function buildFWFrames(ids: string[], edges: [string, string, number?][]): FWFrame[] {
  const n = ids.length;
  const idx: Record<string, number> = {};
  ids.forEach((id, i) => (idx[id] = i));
  const dist: (number | null)[][] = Array.from({ length: n }, () => new Array(n).fill(null));
  for (let i = 0; i < n; i++) dist[i][i] = 0;
  for (const [u, v, w] of edges) {
    const weight = w ?? 1;
    const ii = idx[u], jj = idx[v];
    dist[ii][jj] = Math.min(dist[ii][jj] ?? Infinity, weight);
  }

  const frames: FWFrame[] = [];
  frames.push({
    line: 0, vars: { n, step: "init" },
    message: "Initialize distance matrix. 0 on diagonal, direct edges elsewhere, ∞ for unreachable.",
    dist: dist.map((r) => [...r]), k: -1, i: -1, j: -1, ids,
  });

  for (let k = 0; k < n; k++) {
    frames.push({
      line: 1, vars: { k: ids[k] },
      message: `Consider intermediate vertex k=${ids[k]}. Try routes i → ${ids[k]} → j.`,
      dist: dist.map((r) => [...r]), k, i: -1, j: -1, ids, highlightRowCol: k,
    });
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === k || j === k) continue;
        const via = dist[i][k] != null && dist[k][j] != null ? dist[i][k]! + dist[k][j]! : null;
        const cur = dist[i][j];
        const better = via != null && (cur == null || via < cur);
        frames.push({
          line: 4, vars: {
            k: ids[k], i: ids[i], j: ids[j],
            "d[i][k]": dist[i][k] == null ? "∞" : dist[i][k]!,
            "d[k][j]": dist[k][j] == null ? "∞" : dist[k][j]!,
            via: via == null ? "∞" : via,
            "d[i][j]": cur == null ? "∞" : cur,
          },
          message: better
            ? `Better path ${ids[i]}→${ids[k]}→${ids[j]} = ${via} < current ${cur == null ? "∞" : cur}. Update!`
            : `No improvement for (${ids[i]}, ${ids[j]}).`,
          dist: dist.map((r) => [...r]), k, i, j, ids, highlightRowCol: k, updated: better,
        });
        if (better) {
          dist[i][j] = via!;
          frames.push({
            line: 5, vars: { [`d[${ids[i]}][${ids[j]}]`]: dist[i][j] as number },
            message: `Set d[${ids[i]}][${ids[j]}] = ${dist[i][j]}.`,
            dist: dist.map((r) => [...r]), k, i, j, ids, highlightRowCol: k, updated: true,
          });
        }
      }
    }
  }
  frames.push({
    line: 0, vars: { done: "yes" },
    message: "All shortest paths computed.",
    dist: dist.map((r) => [...r]), k: n - 1, i: -1, j: -1, ids,
  });
  return frames;
}

function Matrix({ frame }: { frame: FWFrame }) {
  const n = frame.ids.length;
  const cell = 44;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div style={{ display: "grid", gridTemplateColumns: `${cell}px repeat(${n}, ${cell}px)`, gap: 2 }}>
        <div />
        {frame.ids.map((id, j) => (
          <div key={`h-${id}`} style={{
            width: cell, height: 26, display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.78rem", fontWeight: 800, color: frame.highlightRowCol === j ? "#8b5cf6" : C.text,
            transition: "color 0.25s",
            fontFamily: C.heading,
          }}>{id}</div>
        ))}
        {frame.ids.map((rid, i) => (
          <>
            <div key={`r-${rid}`} style={{
              width: cell, height: cell, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.78rem", fontWeight: 800,
              color: frame.highlightRowCol === i ? "#8b5cf6" : C.text,
              fontFamily: C.heading,
            }}>{rid}</div>
            {frame.dist[i].map((v, j) => {
              const isActive = frame.i === i && frame.j === j;
              const isK = frame.highlightRowCol === j || frame.highlightRowCol === i;
              const updated = isActive && frame.updated;
              const bg = updated ? `${C.success}2E` :
                         isActive ? "rgba(245,158,11,0.18)" :
                         isK ? "rgba(139,92,246,0.08)" :
                         C.bg;
              const border = updated ? `2px solid ${C.success}` :
                             isActive ? "2px solid #f59e0b" :
                             `1px solid ${C.border}`;
              return (
                <div key={`${i}-${j}`} style={{
                  width: cell, height: cell, display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: C.mono, fontWeight: 700, fontSize: "0.85rem",
                  color: v == null ? C.textMuted : C.text,
                  background: bg, border, borderRadius: 4,
                  transition: "background 0.3s, border 0.3s",
                }}>
                  {v == null ? "∞" : v}
                </div>
              );
            })}
          </>
        ))}
      </div>
      {frame.k >= 0 && frame.k < n && (
        <div style={{ fontSize: "0.78rem", color: "#7c3aed", fontWeight: 600, fontFamily: C.heading }}>
          Current intermediate: k = <b>{frame.ids[frame.k]}</b>
        </div>
      )}
    </div>
  );
}

function FloydWarshallVisualizer() {
  const [src, setSrc] = useState("A->B:3, A->C:7, B->C:2, B->D:5, C->D:1, D->A:6");
  const parsed = parseDirectedEdges(src);
  const { ids, edges } = parsed ?? { ids: [], edges: [] };
  const frames = useMemo(() => buildFWFrames(ids, edges), [ids, edges]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  return (
    <AlgoCanvas
      title="Floyd-Warshall All-Pairs Shortest Paths"
      player={player}
      input={
        <InputEditor
          label="Directed weighted edges (u->v:w)"
          value={src}
          placeholder="A->B:3, B->C:2"
          presets={[
            { label: "4-node", value: "A->B:3, A->C:7, B->C:2, B->D:5, C->D:1, D->A:6" },
            { label: "Triangle", value: "A->B:2, B->C:3, A->C:10" },
            { label: "Cycle", value: "A->B:1, B->C:1, C->D:1, D->A:1" },
          ]}
          onApply={(v) => { if (parseDirectedEdges(v)) setSrc(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_FW} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} />}
      legend={
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <span><b style={{ color: "#8b5cf6" }}>purple row/col</b> - intermediate k</span>
          <span><b style={{ color: "#f59e0b" }}>amber</b> - current cell (i,j)</span>
          <span><b style={{ color: "#10b981" }}>green</b> - updated to shorter</span>
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <Matrix frame={frame} />
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ================================================================== */
/*  Visualize tab with sub-tabs                                        */
/* ================================================================== */

function VisualizeTab() {
  const [which, setWhich] = useState<"kosaraju" | "fw">("kosaraju");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <PillButton onClick={() => setWhich("kosaraju")} active={which === "kosaraju"} color={A}>
          <span style={{ fontSize: "0.78rem" }}>Kosaraju (SCC)</span>
        </PillButton>
        <PillButton onClick={() => setWhich("fw")} active={which === "fw"} color={A}>
          <span style={{ fontSize: "0.78rem" }}>Floyd-Warshall (APSP)</span>
        </PillButton>
      </div>
      {which === "kosaraju" ? <KosarajuVisualizer /> : <FloydWarshallVisualizer />}
    </div>
  );
}

/* ================================================================== */
/*  Learn / Try / Insight                                              */
/* ================================================================== */

function LearnTab() {
  const sections = [
    { title: "SCC definition", body: "A strongly connected component is a maximal subset of vertices where every pair (u, v) has a directed path u → v AND v → u. Equivalent: the induced subgraph on that set is strongly connected." },
    { title: "Kosaraju's idea", body: "Do DFS, note finish times. Reverse all edges. Do DFS again, starting from the vertex with the latest finish. Each DFS tree in the second pass is one SCC. Runs in O(V + E)." },
    { title: "Why finish order works", body: "In the condensation DAG (SCCs as nodes), a vertex with the latest finish time belongs to a 'source' SCC. On the reversed graph that becomes a 'sink' - DFS from it can only reach its own SCC." },
    { title: "Floyd-Warshall idea", body: "dp[k][i][j] = shortest path from i to j using only {0..k} as intermediates. Transition: dp[k][i][j] = min(dp[k-1][i][j], dp[k-1][i][k] + dp[k-1][k][j]). Flatten the k dimension by updating in place." },
    { title: "Floyd-Warshall complexity", body: "Θ(V³) time, Θ(V²) space. Handles negative weights (but not negative cycles - detect via dist[i][i] < 0 after the algorithm)." },
    { title: "When to use which", body: "Dijkstra for single-source non-negative weights. Bellman-Ford for single-source with negative edges. Floyd-Warshall when you need ALL pairs and V ≤ few hundred. Kosaraju/Tarjan for SCC decomposition (often as preprocessing for 2-SAT or implication graphs)." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Graph DP, condensation</SectionEyebrow>
        <SectionTitle>Two classics: structure, then all-pairs distances</SectionTitle>
        <Lede>
          Kosaraju sees the graph&rsquo;s condensation DAG by poking it in the right order.
          Floyd-Warshall is 3 nested loops doing a relaxation everywhere all at once - elegant
          dynamic programming on graph structure.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10 }}>
        {sections.map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: A, marginBottom: 6, fontFamily: C.mono, letterSpacing: "0.08em" }}>0{i + 1}</div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.title}</div>
            <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }}>{s.body}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function TryTab() {
  const problems = [
    { q: "Time complexity of Kosaraju's algorithm?", answer: "O(V+E)" },
    { q: "Floyd-Warshall time complexity?", answer: "O(V^3)" },
    { q: "How do we detect a negative cycle after running Floyd-Warshall?", answer: "dist[i][i]<0" },
    { q: "In Kosaraju's, after Phase 1, which vertex is processed FIRST in Phase 2?", answer: "latest finish" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Answer with key phrase or formula.</Callout>
      {problems.map((p, i) => (
        <Card key={i}>
          <div style={{ fontSize: "0.92rem", color: C.text, marginBottom: 10, lineHeight: 1.5 }}>{p.q}</div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <input
              value={guesses[i]}
              onChange={(e) => { const g = [...guesses]; g[i] = e.target.value; setGuesses(g); }}
              placeholder="your answer"
              style={{
                padding: "7px 10px", borderRadius: 8,
                border: `1px solid ${C.border}`,
                fontFamily: C.mono, width: 240,
                fontSize: "0.85rem", outline: "none",
                background: C.bg, color: C.text,
              }}
            />
            <button
              onClick={() => { const s = [...shown]; s[i] = true; setShown(s); }}
              style={{
                padding: "6px 14px", borderRadius: 8,
                fontSize: "0.78rem", fontWeight: 700,
                border: `1px solid ${C.border}`,
                background: C.bg, color: C.textSecondary,
                cursor: "pointer", fontFamily: C.heading,
              }}
            >Reveal</button>
            {shown[i] && (
              <span style={{
                fontSize: "0.82rem", fontWeight: 700,
                padding: "4px 12px", borderRadius: 8,
                background: `${A}10`, color: C.text,
                fontFamily: C.heading,
              }}>
                Answer: {p.answer}
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
        <SubHeading>Why Kosaraju processes reverse-finish order</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Intuition: the vertex with the latest finish in the first DFS lies in a source SCC of the condensation. After reversing, this source becomes a sink - a DFS from it cannot leave its own SCC. Peeling SCCs one at a time from highest finish downward yields all SCCs cleanly.
        </p>
      </Card>
      <Card>
        <SubHeading>Why Floyd-Warshall&rsquo;s loop order matters</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          k MUST be the outermost loop. Reading dist[i][k] and dist[k][j] gives the right values - even after in-place updates - because row k and column k are invariant once the k-th iteration begins. Swapping loop order breaks the DP.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview trap</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          A vertex is its own SCC if no back-path exists. Every DAG has V singleton SCCs. A graph has exactly 1 SCC iff it is strongly connected.
        </p>
      </Card>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function DSA_L7_AdvancedGraphsActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "Kosaraju's algorithm runs in:",
      options: ["O(V log V)", "O(V + E)", "O(V · E)", "O(V² + E)"],
      correctIndex: 1,
      explanation: "Two linear DFS passes plus a transpose step - all linear in V+E.",
    },
    {
      question: "Floyd-Warshall's time complexity is:",
      options: ["O(V²)", "O(V² log V)", "O(V³)", "O(V · E)"],
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
      explanation: "Latest finish ∈ source SCC of condensation. On the reversed graph, a source becomes a sink - DFS from there exactly captures one SCC.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Advanced Graph Algorithms - Kosaraju & Floyd-Warshall"
      level={7}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Medium - SCC, all-pairs shortest paths"
      nextLessonHint="Advanced Data Structures - B-Tree, RB-Tree, Skip List, Bloom"
    />
  );
}
