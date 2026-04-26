"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import { AlgoCanvas, GraphCanvas, PseudocodePanel, VariablesPanel, InputEditor, QueueTube, useStepPlayer } from "@/components/engineering/algo";
import type { GraphNodeData, GraphEdgeData, CellState } from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Parse input                                                        */
/* ------------------------------------------------------------------ */

interface ParsedGraph {
  nodeIds: string[];
  edges: { from: string; to: string }[];
}

function parseEdgeList(input: string): ParsedGraph | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string }[] = [];
  const ids = new Set<string>();
  for (const tok of tokens) {
    const m = tok.match(/^([A-Za-z0-9_]+)[-:]([A-Za-z0-9_]+)$/);
    if (!m) return null;
    const [, a, b] = m;
    edges.push({ from: a, to: b });
    ids.add(a); ids.add(b);
  }
  return { nodeIds: [...ids].sort(), edges };
}

function autoLayout(ids: string[], cx = 340, cy = 170, r = 130) {
  const out: Record<string, { x: number; y: number }> = {};
  const n = ids.length;
  ids.forEach((id, i) => {
    const ang = (2 * Math.PI * i) / Math.max(1, n) - Math.PI / 2;
    out[id] = { x: cx + r * Math.cos(ang), y: cy + r * Math.sin(ang) };
  });
  return out;
}

/* ------------------------------------------------------------------ */
/*  BFS Frame builder                                                  */
/* ------------------------------------------------------------------ */

interface BFSFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodeStates: Record<string, CellState>;
  nodeDist: Record<string, number | undefined>;
  edgeStates: Record<string, CellState>; // key: "from-to"
  queue: string[];
  current?: string;
  flashKey?: string;
}

const PSEUDO = [
  "BFS(G, s):",
  "  for each v in V: dist[v] ← ∞",
  "  dist[s] ← 0",
  "  Q ← empty queue",
  "  enqueue(Q, s)",
  "  while Q not empty:",
  "    u ← dequeue(Q)",
  "    for each neighbor v of u:",
  "      if dist[v] = ∞:",
  "        dist[v] ← dist[u] + 1",
  "        parent[v] ← u",
  "        enqueue(Q, v)",
];

function buildBFSFrames(ids: string[], edges: { from: string; to: string }[], source: string): BFSFrame[] {
  const f: BFSFrame[] = [];
  if (!ids.includes(source)) {
    f.push({ line: 0, vars: {}, message: `Source '${source}' not in graph`, nodeStates: {}, nodeDist: {}, edgeStates: {}, queue: [] });
    return f;
  }
  const adj: Record<string, string[]> = Object.fromEntries(ids.map((id) => [id, []]));
  for (const e of edges) { adj[e.from].push(e.to); adj[e.to].push(e.from); }
  for (const id of ids) adj[id].sort();

  const dist: Record<string, number | undefined> = {};
  const parent: Record<string, string | undefined> = {};
  const state: Record<string, CellState> = {};
  const edgeState: Record<string, CellState> = {};
  for (const id of ids) { dist[id] = undefined; state[id] = "default"; }

  const cloneF = (patch: Partial<BFSFrame>): BFSFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    nodeStates: { ...state },
    nodeDist: { ...dist },
    edgeStates: { ...edgeState },
    queue: patch.queue ?? [],
    current: patch.current,
    flashKey: patch.flashKey,
  });

  f.push(cloneF({ line: 1, message: `Set dist[v] = ∞ for every vertex.`, queue: [] }));
  dist[source] = 0;
  f.push(cloneF({ line: 2, message: `Set dist[source=${source}] = 0.`, queue: [], flashKey: source }));

  const Q: string[] = [source];
  state[source] = "frontier";
  f.push(cloneF({ line: 4, message: `Enqueue source ${source}.`, queue: [...Q], vars: { u: "-", "|Q|": Q.length } }));

  while (Q.length) {
    f.push(cloneF({ line: 5, message: `Queue not empty - continue.`, queue: [...Q], vars: { "|Q|": Q.length } }));
    const u = Q.shift()!;
    state[u] = "active";
    f.push(cloneF({ line: 6, message: `Dequeue u = ${u}. Mark active.`, queue: [...Q], current: u, vars: { u, "|Q|": Q.length, [`dist[${u}]`]: dist[u] ?? "∞" } }));

    for (const v of adj[u]) {
      f.push(cloneF({ line: 7, message: `Look at neighbor ${v} of ${u}.`, queue: [...Q], current: u, vars: { u, v, [`dist[${v}]`]: dist[v] ?? "∞" } }));
      const k1 = `${u}-${v}`;
      const k2 = `${v}-${u}`;
      if (dist[v] === undefined) {
        dist[v] = (dist[u] ?? 0) + 1;
        parent[v] = u;
        state[v] = "frontier";
        edgeState[k1] = "path"; edgeState[k2] = "path";
        Q.push(v);
        f.push(cloneF({ line: 9, message: `dist[${v}] was ∞ - set dist[${v}] = dist[${u}] + 1 = ${dist[v]}.`, queue: [...Q], current: u, flashKey: v, vars: { u, v, [`dist[${v}]`]: dist[v] } }));
        f.push(cloneF({ line: 11, message: `Enqueue ${v}.`, queue: [...Q], current: u, vars: { u, v, "|Q|": Q.length } }));
      } else {
        f.push(cloneF({ line: 8, message: `dist[${v}] already set (${dist[v]}). Skip.`, queue: [...Q], current: u, vars: { u, v, [`dist[${v}]`]: dist[v] } }));
      }
    }

    state[u] = "done";
    f.push(cloneF({ line: 5, message: `Finished processing ${u}.`, queue: [...Q], vars: { u, "|Q|": Q.length } }));
  }

  f.push(cloneF({ line: 5, message: `Queue empty - BFS complete. Distances labeled on every reachable vertex.`, queue: [] }));
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("A-B, A-C, B-D, C-D, C-E, D-F, E-F, F-G");
  const [source, setSource] = useState("A");
  const parsed = parseEdgeList(inputStr);
  const ids = parsed?.nodeIds ?? [];
  const edges = parsed?.edges ?? [];

  const frames = useMemo(() => buildBFSFrames(ids, edges, source), [ids, edges, source]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  const nodes: GraphNodeData[] = ids.map((id) => ({
    id, x: pos[id].x, y: pos[id].y, label: id,
    state: frame.nodeStates[id],
    meta: frame.nodeDist[id] !== undefined ? { d: frame.nodeDist[id]! } : undefined,
  }));
  const gEdges: GraphEdgeData[] = edges.map((e) => ({
    from: e.from, to: e.to,
    state: frame.edgeStates[`${e.from}-${e.to}`] ?? frame.edgeStates[`${e.to}-${e.from}`],
  }));

  return (
    <AlgoCanvas
      title={`BFS from ${source}`}
      player={player}
      input={
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-end" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <InputEditor
              label="Edges (A-B, B-C, ...)"
              value={inputStr}
              placeholder="A-B, A-C, B-D, ..."
              helper="Undirected edges. Use a letter/id on each side."
              presets={[
                { label: "Chain", value: "A-B, B-C, C-D, D-E" },
                { label: "Grid", value: "A-B, A-C, B-D, C-D, C-E, D-F, E-F, F-G" },
                { label: "Tree", value: "A-B, A-C, B-D, B-E, C-F, C-G" },
                { label: "Cycle", value: "A-B, B-C, C-D, D-A" },
              ]}
              onApply={(v) => { if (parseEdgeList(v)) setInputStr(v); }}
            />
          </div>
          <div>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: 4, fontFamily: C.heading }}>
              Source
            </span>
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
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [`dist[${frame.flashKey}]`, "v"] : []} />}
      legend={
        <span>
          <Swatch c="#3b82f6" label="active" /> <Swatch c="#06b6d4" label="frontier (in queue)" /> <Swatch c="#64748b" label="visited (done)" /> <Swatch c="#fbbf24" label="BFS tree edge" />
        </span>
      }
    >
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 220px", gap: 14, alignItems: "start" }}>
        <div>
          <GraphCanvas nodes={nodes} edges={gEdges} />
        </div>
        <QueueTube
          items={frame.queue.map((v) => ({ value: v, label: "d", color: "#06b6d4" }))}
          title="BFS Queue"
          maxWidth={220}
          frontLabel="dequeue"
          rearLabel="enqueue"
        />
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
/*  Learn / Try / Insight                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "BFS in one line", body: "Explore the graph in wavefront order: first all vertices at distance 1 from the source, then distance 2, then distance 3 - using a FIFO queue to hold the next frontier." },
    { title: "Correctness invariant", body: "When a vertex is dequeued, its dist[v] equals the true shortest distance (in number of edges) from the source. Reason: we enqueue in non-decreasing order of distance." },
    { title: "Complexity", body: "Each vertex is enqueued and dequeued once - O(V). We scan each adjacency list once - total work O(E). Overall O(V + E) with adjacency list." },
    { title: "Classic uses", body: "Shortest path in unweighted graphs, level-order tree traversal, finding connected components, bipartiteness test, web crawling." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Mental model</SectionEyebrow>
        <SectionTitle>Drop a pebble. Watch the ripples spread layer by layer.</SectionTitle>
        <Lede>
          Drop a pebble into water at the source. The ripples spread outwards in rings. Each ring is a &quot;layer&quot; - every node in ring k is exactly k edges from the source. That&apos;s BFS.
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
        For each prompt, trace BFS by hand in the Visualize tab with the given source to verify.
      </Callout>
      {[
        "On the Chain preset (A-B, B-C, C-D, D-E) from A, what is dist[E]?  (Expected: 4)",
        "On the Grid preset from A, which vertex has the largest dist?  (Expected: G, dist 4)",
        "On a cycle of 4 from A, the max dist is?  (Expected: 2)",
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
        <SubHeading>Why a queue (not a stack)?</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          FIFO preserves the layer order. The first time a vertex is discovered is always via the shortest path - because the queue always holds a mix of layer k and layer k+1 nodes, with all layer-k nodes in front. Replace the queue with a stack and you get DFS, where shortest paths are not guaranteed.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview pitfalls</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>BFS shortest path works only for <b>unweighted</b> graphs (or all-equal weights). For weighted, use Dijkstra.</li>
          <li>Always mark a vertex &quot;visited&quot; at enqueue time, not dequeue - else it enters the queue multiple times.</li>
          <li>Number of BFS tree edges = V − 1 (for connected graph).</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Stdlib queue choice — and the Python <code>list.pop(0)</code> trap</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: "0 0 6px" }}>
          Python: <code style={{ fontFamily: C.mono }}>collections.deque</code> with <code>append</code> + <code>popleft</code> — both O(1). <strong>Never use <code>list.pop(0)</code></strong>: it shifts every other element down → O(n) per dequeue → BFS becomes O(V·E). Same trap as a naive array-as-queue.
        </p>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: "0 0 6px" }}>
          Java: <code style={{ fontFamily: C.mono }}>ArrayDeque</code> (a circular buffer — what your Queues lesson literally implemented). Avoid the legacy synchronized <code>java.util.Stack</code> / <code>Vector</code>.
        </p>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          C++: <code style={{ fontFamily: C.mono }}>std::queue</code> (an adapter over <code>deque</code>). NetworkX has <code>nx.bfs_tree</code> / <code>nx.shortest_path_length(G, source, weight=None)</code> for read-only convenience.
        </p>
      </Card>
      <Card>
        <SubHeading>0-1 BFS — Dijkstra&apos;s shortcut for binary weights</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          When edge weights are restricted to {`{0, 1}`}, you don&apos;t need a priority queue. Use a <em>deque</em>: <code style={{ fontFamily: C.mono }}>pushFront</code> on weight-0 edges, <code>pushBack</code> on weight-1 edges. The deque automatically holds vertices in non-decreasing distance order — same correctness as Dijkstra at O(V+E) instead of O(E log V). Common on grids where some moves are free (sliding puzzles, conveyor belts).
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function DSA_L4_BFSActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "BFS finds shortest paths in which kind of graph?",
      options: ["Weighted with non-negative edges", "Unweighted (or uniform-weight)", "DAGs only", "Any graph"],
      correctIndex: 1,
      explanation: "BFS treats every edge as having cost 1. For weighted graphs, distance in edges ≠ true shortest distance.",
    },
    {
      question: "Time complexity of BFS on a graph with V vertices and E edges using adjacency list?",
      options: ["O(V log V)", "O(V²)", "O(V + E)", "O(E log V)"],
      correctIndex: 2,
      explanation: "Each vertex enqueued/dequeued once (V work); each edge scanned once (E work). Total O(V + E).",
    },
    {
      question: "To avoid a vertex being enqueued multiple times, we should mark it visited when…",
      options: ["Dequeuing it", "Enqueuing it", "Starting the algorithm", "After processing all neighbors"],
      correctIndex: 1,
      explanation: "Mark at enqueue time. Otherwise, between enqueue and dequeue, a sibling could re-enqueue the same node.",
    },
    {
      question: "Run BFS from A on A-B, B-C, C-D, D-E, E-A (a 5-cycle). dist[C] = ?",
      options: ["1", "2", "3", "4"],
      correctIndex: 1,
      explanation: "A→B→C is length 2, A→E→D→C is length 3. BFS picks the shorter: 2.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Breadth-First Search (BFS)"
      level={4}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very high - asked in almost every graph interview"
      nextLessonHint="Depth-First Search (DFS)"
    />
  );
}
