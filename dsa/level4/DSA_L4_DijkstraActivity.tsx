"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import { AlgoCanvas, GraphCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer } from "@/components/engineering/algo";
import type { GraphNodeData, GraphEdgeData, CellState } from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Parse weighted edges: "A-B:5, B-C:3, A-C:10"                       */
/* ------------------------------------------------------------------ */

function parseWeighted(input: string): { ids: string[]; edges: { from: string; to: string; w: number }[] } | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string; w: number }[] = [];
  const idSet = new Set<string>();
  for (const tok of tokens) {
    const m = tok.match(/^([A-Za-z0-9_]+)[-:]([A-Za-z0-9_]+):(-?\d+)$/);
    if (!m) return null;
    const [, a, b, w] = m;
    const weight = Number(w);
    if (weight < 0) return null; // Dijkstra requires non-negative
    edges.push({ from: a, to: b, w: weight });
    idSet.add(a); idSet.add(b);
  }
  return { ids: [...idSet].sort(), edges };
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
/*  Dijkstra frame builder                                             */
/* ------------------------------------------------------------------ */

interface DFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  dist: Record<string, number | undefined>;
  parent: Record<string, string | undefined>;
  nodeStates: Record<string, CellState>;
  edgeStates: Record<string, CellState>;
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

function buildDijkstraFrames(ids: string[], edges: { from: string; to: string; w: number }[], source: string): DFrame[] {
  const f: DFrame[] = [];
  if (!ids.includes(source)) {
    f.push({ line: 0, vars: {}, message: `Source '${source}' not in graph`, dist: {}, parent: {}, nodeStates: {}, edgeStates: {}, pq: [] });
    return f;
  }
  const adj: Record<string, { to: string; w: number }[]> = Object.fromEntries(ids.map((id) => [id, []]));
  for (const e of edges) { adj[e.from].push({ to: e.to, w: e.w }); adj[e.to].push({ to: e.from, w: e.w }); }
  const dist: Record<string, number | undefined> = {};
  const parent: Record<string, string | undefined> = {};
  const done: Record<string, boolean> = {};
  const state: Record<string, CellState> = Object.fromEntries(ids.map((id) => [id, "default" as CellState]));
  const edgeState: Record<string, CellState> = {};
  for (const id of ids) dist[id] = undefined;

  const clone = (patch: Partial<DFrame>): DFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    dist: { ...dist },
    parent: { ...parent },
    nodeStates: { ...state },
    edgeStates: { ...edgeState },
    pq: [...pq].sort((a, b) => a.d - b.d),
    flashKey: patch.flashKey,
  });

  f.push({ ...clone({ line: 1, message: `Initialize dist[v] = ∞ for all v.` }) });

  dist[source] = 0;
  const pq: { id: string; d: number }[] = [{ id: source, d: 0 }];
  state[source] = "frontier";
  f.push(clone({ line: 2, message: `dist[${source}] = 0. Push into PQ.`, flashKey: source, vars: { source } }));

  while (pq.length) {
    pq.sort((a, b) => a.d - b.d);
    const { id: u, d: du } = pq.shift()!;
    f.push(clone({ line: 5, message: `Extract-min: u = ${u}, current d = ${du}.`, vars: { u, "d[u]": du } }));
    if (done[u]) {
      f.push(clone({ line: 6, message: `${u} already finalized - skip.`, vars: { u } }));
      continue;
    }
    done[u] = true;
    state[u] = "done";
    f.push(clone({ line: 7, message: `Finalize ${u}. dist[${u}] = ${dist[u]}.`, vars: { u, "dist[u]": dist[u] }, flashKey: u }));

    for (const { to: v, w } of adj[u]) {
      if (done[v]) continue;
      const alt = (dist[u] ?? Infinity) + w;
      const edgeK = `${u}-${v}`;
      f.push(clone({ line: 8, message: `Relax edge ${u}→${v} (weight ${w}). Compare ${dist[u]} + ${w} = ${alt} vs dist[${v}] = ${dist[v] ?? "∞"}.`, vars: { u, v, w, alt, "dist[v]": dist[v] ?? "∞" } }));
      if (alt < (dist[v] ?? Infinity)) {
        dist[v] = alt;
        parent[v] = u;
        if (state[v] !== "done") state[v] = "frontier";
        edgeState[edgeK] = "path"; edgeState[`${v}-${u}`] = "path";
        pq.push({ id: v, d: alt });
        f.push(clone({ line: 10, message: `Shorter - dist[${v}] = ${alt}. parent[${v}] = ${u}. Push into PQ.`, flashKey: v, vars: { u, v, "dist[v]": alt } }));
      } else {
        f.push(clone({ line: 8, message: `Not shorter - keep dist[${v}] = ${dist[v]}.`, vars: { u, v, "dist[v]": dist[v] } }));
      }
    }
  }

  f.push(clone({ line: 4, message: `PQ empty - Dijkstra complete. All reachable distances finalized.` }));
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("A-B:4, A-C:2, B-C:1, B-D:5, C-D:8, C-E:10, D-E:2");
  const [source, setSource] = useState("A");
  const parsed = parseWeighted(inputStr);
  const ids = parsed?.ids ?? [];
  const edges = parsed?.edges ?? [];
  const frames = useMemo(() => buildDijkstraFrames(ids, edges, source), [ids, edges, source]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  const nodes: GraphNodeData[] = ids.map((id) => ({
    id, x: pos[id].x, y: pos[id].y, label: id,
    state: frame.nodeStates[id],
    meta: frame.dist[id] !== undefined ? { d: frame.dist[id]! } : { d: "∞" },
  }));
  const gEdges: GraphEdgeData[] = edges.map((e) => {
    const k1 = `${e.from}-${e.to}`; const k2 = `${e.to}-${e.from}`;
    return { from: e.from, to: e.to, weight: e.w, state: frame.edgeStates[k1] ?? frame.edgeStates[k2] };
  });

  return (
    <AlgoCanvas
      title={`Dijkstra from ${source}`}
      player={player}
      input={
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-end" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <InputEditor
              label="Weighted edges (A-B:w)"
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
          <div>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: 4, fontFamily: C.heading }}>Source</span>
            <select value={source} onChange={(e) => setSource(e.target.value)} style={{
              padding: "7px 10px", borderRadius: 8, border: `1px solid ${C.border}`,
              fontFamily: C.mono, fontSize: "0.82rem",
              background: C.bg, color: C.text,
            }}>
              {ids.map((id) => <option key={id} value={id}>{id}</option>)}
            </select>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [`dist[v]`, "alt"] : []} />}
      legend={
        <span>
          <Swatch c="#06b6d4" label="frontier" />
          <Swatch c="#10b981" label="finalized" />
          <Swatch c="#fbbf24" label="relaxation tree" />
        </span>
      }
    >
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 220px", gap: 14, alignItems: "start" }}>
        <GraphCanvas nodes={nodes} edges={gEdges} />
        <Card style={{ padding: 12 }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8, fontFamily: C.heading }}>
            Priority Queue
          </div>
          {frame.pq.length === 0 ? (
            <div style={{ fontSize: "0.78rem", color: C.textMuted, fontStyle: "italic" }}>empty</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {frame.pq.map((it, i) => (
                <div key={i} style={{
                  padding: "6px 10px", borderRadius: 6,
                  background: i === 0 ? A : `${A}1F`,
                  color: i === 0 ? "#fff" : A,
                  fontFamily: C.mono,
                  fontWeight: 700, fontSize: "0.82rem",
                  display: "flex", justifyContent: "space-between",
                  border: i === 0 ? "none" : `1px solid ${A}40`,
                }}>
                  <span>{it.id}</span><span>{it.d}</span>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
      <div style={{ marginTop: 12 }}>
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function Swatch({ c, label }: { c: string; label: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, marginRight: 10 }}>
      <span style={{ width: 10, height: 10, background: c, borderRadius: 3, display: "inline-block" }} />
      {label}
    </span>
  );
}

/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "The problem", body: "Given a weighted graph with non-negative edge weights and a source s, find the shortest-path distance from s to every other vertex." },
    { title: "Greedy insight", body: "Repeatedly pick the unfinalized vertex with the smallest tentative distance, finalize it, and relax its outgoing edges. This works because once a vertex is extracted with dist = d, no shorter path can exist (all weights ≥ 0)." },
    { title: "Relaxation", body: "For edge (u,v) with weight w: if dist[u] + w < dist[v], update dist[v] = dist[u] + w. This is the only operation that ever decreases a distance." },
    { title: "Complexity", body: "With a binary heap PQ: O((V + E) log V). With a simple array: O(V²). For dense graphs the array wins; for sparse, the heap." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Mental model</SectionEyebrow>
        <SectionTitle>Water flowing through pipes. Cheapest first.</SectionTitle>
        <Lede>
          Imagine you&apos;re dropping water at the source and letting it flow through pipes of different lengths. The water reaches each junction at the earliest possible time - that time is the shortest-path distance.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
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
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        Run these in the Visualize tab and check the final distances.
      </Callout>
      {[
        "Classic preset from A: what is dist[D]?  (Expected: 9 - via A→C→B→D = 2+1+5 but ...; verify!)",
        "Shortcut preset from A: what is dist[B]?  (Expected: 2 - via A→C→B, not the direct A-B:10)",
        "Why can't Dijkstra handle negative weights? Explain in one line.",
      ].map((q, i) => (
        <Card key={i}>
          <div style={{ fontSize: "0.9rem", color: C.text, lineHeight: 1.55 }}>
            <strong style={{ color: A }}>#{i + 1}</strong> {q}
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
        <SubHeading>Why non-negative weights?</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          The correctness argument relies on &quot;once extracted, dist[u] is final.&quot; If a negative edge existed, a later-extracted vertex could offer a shorter route back through u - breaking the invariant. Use Bellman-Ford for graphs with negative edges.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview nuance</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>For unweighted graphs, BFS does the same job in O(V+E) - don&apos;t over-engineer.</li>
          <li>&quot;Lazy&quot; Dijkstra reinserts on relax and skips stale entries - simpler to code than decrease-key.</li>
          <li>A* = Dijkstra + heuristic; fall back to Dijkstra when h(n) = 0.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function DSA_L4_DijkstraActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Dijkstra's algorithm is guaranteed correct only when…",
      options: ["The graph is a DAG", "All edge weights are non-negative", "The graph is connected", "The graph is undirected"],
      correctIndex: 1,
      explanation: "Negative weights can invalidate the finalization invariant. Bellman-Ford handles them instead.",
    },
    {
      question: "Best-case runtime using a binary heap priority queue?",
      options: ["O(V²)", "O((V + E) log V)", "O(V + E)", "O(V · E)"],
      correctIndex: 1,
      explanation: "Each vertex is extracted once (V log V), each edge possibly triggers a decrease-key (E log V). Total O((V+E) log V).",
    },
    {
      question: "After extract-min returns u, we…",
      options: ["Update dist[u]", "Mark u finalized - its distance won't change again", "Add u's edges to MST", "Remove u from the graph"],
      correctIndex: 1,
      explanation: "Extract-min guarantees the path to u is optimal under non-negative weights. No further relaxation can improve dist[u].",
    },
    {
      question: "Run Dijkstra from A on A-B:10, A-C:1, C-B:1, B-D:1. dist[D] = ?",
      options: ["1", "3", "11", "12"],
      correctIndex: 1,
      explanation: "A→C (1) → B (2) → D (3). Direct A→B would cost 10; the shortcut via C is much cheaper.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Dijkstra's Shortest Path"
      level={4}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very high - routing, maps, network protocols"
      nextLessonHint="Bellman-Ford & Negative Cycles"
    />
  );
}
