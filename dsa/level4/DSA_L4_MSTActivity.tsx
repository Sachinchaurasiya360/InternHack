"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import { AlgoCanvas, GraphCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer } from "@/components/engineering/algo";
import type { GraphNodeData, GraphEdgeData, CellState } from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, PillButton, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */

function parseWeighted(input: string): { ids: string[]; edges: { from: string; to: string; w: number }[] } | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string; w: number }[] = [];
  const ids = new Set<string>();
  for (const tok of tokens) {
    const m = tok.match(/^([A-Za-z0-9_]+)-([A-Za-z0-9_]+):(-?\d+)$/);
    if (!m) return null;
    edges.push({ from: m[1], to: m[2], w: Number(m[3]) });
    ids.add(m[1]); ids.add(m[2]);
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
/*  Kruskal                                                            */
/* ------------------------------------------------------------------ */

interface KFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodeStates: Record<string, CellState>;
  edgeStates: Record<string, CellState>;
  considered: number;
  sortedEdges: { from: string; to: string; w: number; status: "pending" | "accepted" | "rejected" }[];
  cost: number;
  dsuParent?: Record<string, string>;
}

const KRUSKAL_PSEUDO = [
  "Kruskal(G):",
  "  sort edges by weight ascending",
  "  for each v: make-set(v)",
  "  MST ← ∅",
  "  for each edge (u, v, w) in sorted order:",
  "    if find(u) ≠ find(v):",
  "      union(u, v)",
  "      MST ← MST ∪ {(u,v)}",
  "  return MST",
];

function buildKruskalFrames(ids: string[], edges: { from: string; to: string; w: number }[]): KFrame[] {
  const f: KFrame[] = [];
  const parent: Record<string, string> = {};
  for (const id of ids) parent[id] = id;
  const find = (x: string): string => (parent[x] === x ? x : (parent[x] = find(parent[x])));
  const union = (a: string, b: string) => { const ra = find(a), rb = find(b); if (ra !== rb) parent[ra] = rb; };

  type SortedEdge = { from: string; to: string; w: number; status: "pending" | "accepted" | "rejected" };
  const sorted: SortedEdge[] = [...edges].sort((a, b) => a.w - b.w).map((e) => ({ ...e, status: "pending" }));
  const nodeStates: Record<string, CellState> = Object.fromEntries(ids.map((id) => [id, "default" as CellState]));
  const edgeStates: Record<string, CellState> = {};
  let cost = 0;

  const clone = (patch: Partial<KFrame>, considered = 0): KFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    nodeStates: { ...nodeStates },
    edgeStates: { ...edgeStates },
    considered,
    sortedEdges: sorted.map((e) => ({ ...e })),
    cost,
    dsuParent: { ...parent },
  });

  f.push(clone({ line: 1, message: `Sort all edges by weight ascending.` }));
  f.push(clone({ line: 2, message: `Make-set: each vertex is its own component.` }));

  for (let i = 0; i < sorted.length; i++) {
    const e = sorted[i];
    const k = `${e.from}-${e.to}`;
    edgeStates[k] = "compare";
    f.push(clone({ line: 4, message: `Consider edge ${e.from}-${e.to} (w=${e.w}).`, vars: { i: i + 1, u: e.from, v: e.to, w: e.w } }, i + 1));
    const ra = find(e.from), rb = find(e.to);
    if (ra !== rb) {
      union(e.from, e.to);
      sorted[i].status = "accepted";
      edgeStates[k] = "done";
      nodeStates[e.from] = "done"; nodeStates[e.to] = "done";
      cost += e.w;
      f.push(clone({ line: 6, message: `Different components (${ra} vs ${rb}) - union. Add edge to MST. Running cost = ${cost}.`, vars: { i: i + 1, u: e.from, v: e.to, cost } }, i + 1));
    } else {
      sorted[i].status = "rejected";
      edgeStates[k] = "swap";
      f.push(clone({ line: 5, message: `Same component (${ra}) - would create cycle. Reject.`, vars: { i: i + 1, u: e.from, v: e.to } }, i + 1));
      edgeStates[k] = "default";
    }
  }
  f.push(clone({ line: 8, message: `Kruskal complete. MST cost = ${cost}.`, vars: { cost } }, sorted.length));
  return f;
}

/* ------------------------------------------------------------------ */
/*  Prim                                                               */
/* ------------------------------------------------------------------ */

interface PFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodeStates: Record<string, CellState>;
  edgeStates: Record<string, CellState>;
  inTree: string[];
  candidates: { from: string; to: string; w: number }[];
  cost: number;
  flashKey?: string;
}

const PRIM_PSEUDO = [
  "Prim(G, start):",
  "  inTree ← {start}; cost ← 0",
  "  candidates ← edges incident to start",
  "  while inTree ≠ V:",
  "    pick min-weight edge (u, v) with u ∈ T, v ∉ T",
  "    add v to inTree; cost += w",
  "    add v's edges to candidates",
];

function buildPrimFrames(ids: string[], edges: { from: string; to: string; w: number }[], start: string): PFrame[] {
  const f: PFrame[] = [];
  if (!ids.includes(start)) {
    f.push({ line: 0, vars: {}, message: `Start '${start}' not in graph`, nodeStates: {}, edgeStates: {}, inTree: [], candidates: [], cost: 0 });
    return f;
  }
  const adj: Record<string, { to: string; w: number }[]> = Object.fromEntries(ids.map((id) => [id, []]));
  for (const e of edges) { adj[e.from].push({ to: e.to, w: e.w }); adj[e.to].push({ to: e.from, w: e.w }); }

  const nodeStates: Record<string, CellState> = Object.fromEntries(ids.map((id) => [id, "default" as CellState]));
  const edgeStates: Record<string, CellState> = {};
  const inTree = new Set<string>([start]);
  nodeStates[start] = "done";
  let cost = 0;
  const cands: { from: string; to: string; w: number }[] = adj[start].map((e) => ({ from: start, to: e.to, w: e.w }));

  const clone = (patch: Partial<PFrame>): PFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    nodeStates: { ...nodeStates },
    edgeStates: { ...edgeStates },
    inTree: [...inTree],
    candidates: [...cands].sort((a, b) => a.w - b.w),
    cost,
    flashKey: patch.flashKey,
  });

  f.push(clone({ line: 1, message: `Start from ${start}. inTree = {${start}}, cost = 0.`, flashKey: start, vars: { start, cost } }));
  f.push(clone({ line: 2, message: `Collect edges incident to ${start}: ${cands.length} candidate(s).`, vars: { candidates: cands.length } }));

  while (inTree.size < ids.length) {
    // pick min-weight candidate with exactly one endpoint in tree
    cands.sort((a, b) => a.w - b.w);
    let chosenIdx = -1;
    for (let i = 0; i < cands.length; i++) {
      const c = cands[i];
      const inU = inTree.has(c.from), inV = inTree.has(c.to);
      if (inU !== inV) { chosenIdx = i; break; }
    }
    if (chosenIdx === -1) {
      f.push(clone({ line: 3, message: `No cross-cut edge remaining - graph disconnected.` }));
      break;
    }
    const chosen = cands.splice(chosenIdx, 1)[0];
    const newV = inTree.has(chosen.from) ? chosen.to : chosen.from;
    const k = `${chosen.from}-${chosen.to}`;
    edgeStates[k] = "done";
    cost += chosen.w;
    inTree.add(newV);
    nodeStates[newV] = "done";
    f.push(clone({ line: 4, message: `Cheapest cross-edge: ${chosen.from}-${chosen.to} (w=${chosen.w}). Add ${newV} to tree. Cost = ${cost}.`, flashKey: newV, vars: { newVertex: newV, edgeW: chosen.w, cost } }));
    // add new candidates
    for (const e of adj[newV]) {
      if (!inTree.has(e.to)) cands.push({ from: newV, to: e.to, w: e.w });
    }
    f.push(clone({ line: 6, message: `Added ${adj[newV].filter((x) => !inTree.has(x.to)).length} new candidate edge(s).`, vars: { "|inTree|": inTree.size, cost } }));
  }

  f.push(clone({ line: 3, message: `Prim complete. MST cost = ${cost}.`, vars: { cost } }));
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [mode, setMode] = useState<"kruskal" | "prim">("kruskal");
  const [inputStr, setInputStr] = useState("A-B:4, A-C:3, B-C:1, B-D:2, C-D:4, C-E:5, D-E:6");
  const [start, setStart] = useState("A");
  const parsed = parseWeighted(inputStr);
  const ids = parsed?.ids ?? [];
  const edges = parsed?.edges ?? [];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <PillButton color={A} active={mode === "kruskal"} onClick={() => setMode("kruskal")}>
          <span style={{ fontSize: "0.82rem" }}>Kruskal&apos;s</span>
        </PillButton>
        <PillButton color={A} active={mode === "prim"} onClick={() => setMode("prim")}>
          <span style={{ fontSize: "0.82rem" }}>Prim&apos;s</span>
        </PillButton>
      </div>
      {mode === "kruskal"
        ? <KruskalViz ids={ids} edges={edges} inputStr={inputStr} setInputStr={setInputStr} />
        : <PrimViz ids={ids} edges={edges} inputStr={inputStr} setInputStr={setInputStr} start={start} setStart={setStart} />}
    </div>
  );
}

function KruskalViz({ ids, edges, inputStr, setInputStr }: {
  ids: string[]; edges: { from: string; to: string; w: number }[];
  inputStr: string; setInputStr: (s: string) => void;
}) {
  const frames = useMemo(() => buildKruskalFrames(ids, edges), [ids, edges]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  const nodes: GraphNodeData[] = ids.map((id) => ({
    id, x: pos[id].x, y: pos[id].y, label: id, state: frame.nodeStates[id],
  }));
  const gEdges: GraphEdgeData[] = edges.map((e) => ({
    from: e.from, to: e.to, weight: e.w, state: frame.edgeStates[`${e.from}-${e.to}`],
  }));

  return (
    <AlgoCanvas
      title={`Kruskal's - Running cost: ${frame.cost}`}
      player={player}
      input={
        <InputEditor
          label="Weighted undirected edges (A-B:w)"
          value={inputStr}
          placeholder="A-B:4, B-C:1, ..."
          helper="Edges sort by weight ascending. Disjoint-set union for cycle detection."
          presets={[
            { label: "Small", value: "A-B:4, A-C:3, B-C:1, B-D:2, C-D:4, C-E:5, D-E:6" },
            { label: "Linear", value: "A-B:1, B-C:2, C-D:3, D-E:4" },
            { label: "Dense", value: "A-B:2, A-C:3, A-D:4, B-C:1, B-D:5, C-D:6" },
          ]}
          onApply={(v) => { if (parseWeighted(v)) setInputStr(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={KRUSKAL_PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} />}
      legend={<span><Swatch c="#f59e0b" label="considering" /> <Swatch c="#10b981" label="in MST" /> <Swatch c="#ef4444" label="rejected (cycle)" /></span>}
    >
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 220px", gap: 14 }}>
        <GraphCanvas nodes={nodes} edges={gEdges} />
        <Card style={{ padding: 12 }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8, fontFamily: C.heading }}>
            Sorted Edges
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {frame.sortedEdges.map((e, i) => {
              const isCurrent = i + 1 === frame.considered;
              const color = e.status === "accepted" ? C.success : e.status === "rejected" ? C.danger : isCurrent ? "#f59e0b" : C.textMuted;
              const bg = e.status === "accepted" ? `${C.success}1A` : e.status === "rejected" ? `${C.danger}1A` : isCurrent ? "#f59e0b1F" : C.bgSoft;
              return (
                <div key={i} style={{
                  padding: "4px 8px", borderRadius: 5, fontFamily: C.mono,
                  fontSize: "0.76rem", fontWeight: 700, color, background: bg,
                  border: `1px solid ${color}`,
                  display: "flex", justifyContent: "space-between",
                  transition: "all 0.3s",
                }}>
                  <span>{e.from}-{e.to}</span><span>{e.w}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
      <div style={{ marginTop: 12 }}>
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function PrimViz({ ids, edges, inputStr, setInputStr, start, setStart }: {
  ids: string[]; edges: { from: string; to: string; w: number }[];
  inputStr: string; setInputStr: (s: string) => void;
  start: string; setStart: (s: string) => void;
}) {
  const frames = useMemo(() => buildPrimFrames(ids, edges, start), [ids, edges, start]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  const nodes: GraphNodeData[] = ids.map((id) => ({
    id, x: pos[id].x, y: pos[id].y, label: id, state: frame.nodeStates[id],
  }));
  const gEdges: GraphEdgeData[] = edges.map((e) => ({
    from: e.from, to: e.to, weight: e.w, state: frame.edgeStates[`${e.from}-${e.to}`] ?? frame.edgeStates[`${e.to}-${e.from}`],
  }));

  return (
    <AlgoCanvas
      title={`Prim's from ${start} - Running cost: ${frame.cost}`}
      player={player}
      input={
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-end" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <InputEditor
              label="Weighted undirected edges (A-B:w)"
              value={inputStr}
              onApply={(v) => { if (parseWeighted(v)) setInputStr(v); }}
              presets={[
                { label: "Small", value: "A-B:4, A-C:3, B-C:1, B-D:2, C-D:4, C-E:5, D-E:6" },
                { label: "Dense", value: "A-B:2, A-C:3, A-D:4, B-C:1, B-D:5, C-D:6" },
              ]}
            />
          </div>
          <div>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: 4, fontFamily: C.heading }}>Start</span>
            <select value={start} onChange={(e) => setStart(e.target.value)} style={{
              padding: "7px 10px", borderRadius: 8, border: `1px solid ${C.border}`,
              fontFamily: C.mono, fontSize: "0.82rem",
              background: C.bg, color: C.text,
            }}>
              {ids.map((id) => <option key={id} value={id}>{id}</option>)}
            </select>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={PRIM_PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? ["newVertex"] : []} />}
      legend={<span><Swatch c="#10b981" label="in tree" /> <Swatch c="#cbd5e1" label="outside" /></span>}
    >
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 220px", gap: 14 }}>
        <GraphCanvas nodes={nodes} edges={gEdges} />
        <Card style={{ padding: 12 }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8, fontFamily: C.heading }}>
            Candidate Edges (sorted)
          </div>
          {frame.candidates.length === 0 ? (
            <div style={{ fontSize: "0.78rem", color: C.textMuted, fontStyle: "italic" }}>empty</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {frame.candidates.slice(0, 8).map((c, i) => (
                <div key={i} style={{
                  padding: "4px 8px", borderRadius: 5, fontFamily: C.mono,
                  fontSize: "0.76rem", fontWeight: 700,
                  color: i === 0 ? "#fff" : A,
                  background: i === 0 ? A : `${A}14`,
                  border: i === 0 ? "none" : `1px solid ${A}40`,
                  display: "flex", justifyContent: "space-between",
                }}>
                  <span>{c.from}-{c.to}</span><span>{c.w}</span>
                </div>
              ))}
            </div>
          )}
          <div style={{ fontSize: "0.7rem", color: C.textMuted, marginTop: 8 }}>
            In tree: <strong>{frame.inTree.join(", ") || "-"}</strong>
          </div>
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
    { title: "What is an MST?", body: "A minimum spanning tree of a connected, undirected, weighted graph is a subset of edges connecting all vertices with minimum total weight - and no cycles. It has V − 1 edges." },
    { title: "Kruskal's idea", body: "Greedy by edge: sort all edges ascending, take each if it doesn't create a cycle (check with Union-Find). Works great for sparse graphs. O(E log E)." },
    { title: "Prim's idea", body: "Greedy by vertex: grow a tree starting from any vertex, always adding the cheapest edge that crosses from tree to outside. Works great for dense graphs. O(E log V) with heap." },
    { title: "Cut property", body: "For any cut (partition of vertices), the minimum-weight edge crossing it belongs to some MST. Both Kruskal and Prim are applications of this single theorem." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Mental model</SectionEyebrow>
        <SectionTitle>Wire up every house. Use the least cable.</SectionTitle>
        <Lede>
          You&apos;re wiring up houses in a neighborhood with cable. Every house must be connected, but the total cable length must be minimum. That minimum tree is the MST. Kruskal picks the cheapest wires globally; Prim grows outward from one house.
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
        Run both Kruskal and Prim on the same preset - they may pick different edges but the total cost is identical.
      </Callout>
      {[
        "On the 'Small' preset, what is the MST cost? (Expected: 10)",
        "Run Prim from C - is the set of MST edges the same as from A? (Expected: cost same, edges may differ only if multiple MSTs exist)",
        "If all edge weights are distinct, is the MST unique? (Expected: Yes)",
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
        <SubHeading>Kruskal vs Prim - which and when?</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>Sparse graph (E ≈ V): Kruskal with Union-Find is simpler and fast - O(E log E).</li>
          <li>Dense graph (E ≈ V²): Prim with adjacency matrix is O(V²) - often better.</li>
          <li>Both are optimal. Pick based on code simplicity.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>MST is not shortest paths!</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          A common mistake: the MST might <em>not</em> contain the shortest path between two specific vertices. MST minimizes total weight across all vertices; Dijkstra minimizes distance from a single source.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function DSA_L4_MSTActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "A spanning tree of a graph with V vertices has exactly how many edges?",
      options: ["V", "V − 1", "V + 1", "E − V"],
      correctIndex: 1,
      explanation: "A tree on V nodes has V − 1 edges. Adding any more would create a cycle.",
    },
    {
      question: "Kruskal's algorithm uses Union-Find for what purpose?",
      options: ["Sort edges", "Compute weights", "Detect cycles efficiently (nearly O(1) per op)", "Store the MST"],
      correctIndex: 2,
      explanation: "Find tells us if two endpoints are already connected. Union merges components when an edge is added.",
    },
    {
      question: "Prim's algorithm with a binary heap has complexity…",
      options: ["O(V²)", "O(E log V)", "O(V + E)", "O(V·E)"],
      correctIndex: 1,
      explanation: "Each edge triggers at most one decrease-key; V extract-mins. Total O((V + E) log V) ≈ O(E log V).",
    },
    {
      question: "If all edge weights are distinct, the MST is…",
      options: ["Not guaranteed to exist", "Unique", "Empty", "The same as the graph"],
      correctIndex: 1,
      explanation: "With distinct weights, every cut has a unique minimum edge - and the MST is determined uniquely by the cut property.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="MST - Kruskal's & Prim's"
      level={4}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High - networking, clustering, approximation algorithms"
      nextLessonHint="Topological Sort"
    />
  );
}
