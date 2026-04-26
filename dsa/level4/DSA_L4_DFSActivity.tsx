"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import { AlgoCanvas, GraphCanvas, PseudocodePanel, VariablesPanel, InputEditor, StackColumn, useStepPlayer } from "@/components/engineering/algo";
import type { GraphNodeData, GraphEdgeData, CellState } from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Parse                                                              */
/* ------------------------------------------------------------------ */

function parseEdgeList(input: string): { nodeIds: string[]; edges: { from: string; to: string; directed: boolean }[] } | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string; directed: boolean }[] = [];
  const ids = new Set<string>();
  for (const tok of tokens) {
    // support "A>B" for directed, "A-B" undirected
    const dir = tok.match(/^([A-Za-z0-9_]+)>([A-Za-z0-9_]+)$/);
    const und = tok.match(/^([A-Za-z0-9_]+)-([A-Za-z0-9_]+)$/);
    if (dir) { edges.push({ from: dir[1], to: dir[2], directed: true }); ids.add(dir[1]); ids.add(dir[2]); }
    else if (und) { edges.push({ from: und[1], to: und[2], directed: false }); ids.add(und[1]); ids.add(und[2]); }
    else return null;
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
/*  DFS Frame builder - iterative with explicit stack                  */
/* ------------------------------------------------------------------ */

interface DFSFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodeStates: Record<string, CellState>;
  nodeMeta: Record<string, Record<string, string | number>>;
  edgeStates: Record<string, CellState>;
  edgeLabels: Record<string, string>;
  stack: string[];
  flashKey?: string;
}

const PSEUDO = [
  "DFS(G):",
  "  time ← 0",
  "  for each v in V: color[v] ← WHITE",
  "  for each s in V:",
  "    if color[s] = WHITE: DFS-Visit(s)",
  "DFS-Visit(u):",
  "  color[u] ← GRAY; d[u] ← ++time",
  "  for each neighbor v of u:",
  "    if color[v] = WHITE:    // Tree edge",
  "      DFS-Visit(v)",
  "    elif color[v] = GRAY:   // Back edge",
  "      record back edge",
  "    else:                    // Forward or Cross",
  "      record F/C edge",
  "  color[u] ← BLACK; f[u] ← ++time",
];

function buildDFSFrames(ids: string[], rawEdges: { from: string; to: string; directed: boolean }[], source: string): DFSFrame[] {
  const f: DFSFrame[] = [];
  if (!ids.includes(source)) {
    f.push({ line: 0, vars: {}, message: `Source '${source}' not in graph`, nodeStates: {}, nodeMeta: {}, edgeStates: {}, edgeLabels: {}, stack: [] });
    return f;
  }

  // Build adjacency. For undirected edges, include both directions.
  const adj: Record<string, { to: string; key: string }[]> = Object.fromEntries(ids.map((id) => [id, []]));
  const edgeKey = (a: string, b: string) => `${a}-${b}`;
  for (const e of rawEdges) {
    adj[e.from].push({ to: e.to, key: edgeKey(e.from, e.to) });
    if (!e.directed) adj[e.to].push({ to: e.from, key: edgeKey(e.to, e.from) });
  }
  for (const id of ids) adj[id].sort((a, b) => a.to.localeCompare(b.to));

  const color: Record<string, "W" | "G" | "B"> = {};
  const d: Record<string, number> = {};
  const fin: Record<string, number> = {};
  for (const id of ids) color[id] = "W";
  const state: Record<string, CellState> = Object.fromEntries(ids.map((id) => [id, "default" as CellState]));
  const meta: Record<string, Record<string, string | number>> = Object.fromEntries(ids.map((id) => [id, {}]));
  const edgeState: Record<string, CellState> = {};
  const edgeLab: Record<string, string> = {};

  let time = 0;
  const stack: { u: string; ni: number }[] = [];

  const clone = (patch: Partial<DFSFrame>): DFSFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    nodeStates: { ...state },
    nodeMeta: Object.fromEntries(Object.entries(meta).map(([k, v]) => [k, { ...v }])),
    edgeStates: { ...edgeState },
    edgeLabels: { ...edgeLab },
    stack: stack.map((s) => s.u),
    flashKey: patch.flashKey,
  });

  f.push(clone({ line: 1, message: "Initialize time = 0, every vertex WHITE.", vars: { time } }));

  // Start from source
  time++;
  color[source] = "G"; state[source] = "active"; d[source] = time;
  meta[source] = { d: time };
  stack.push({ u: source, ni: 0 });
  f.push(clone({ line: 6, message: `Visit ${source}: color GRAY, discovery time d[${source}] = ${time}.`, vars: { time, u: source }, flashKey: source }));

  while (stack.length) {
    const top = stack[stack.length - 1];
    const { u } = top;
    if (top.ni >= adj[u].length) {
      // finish u
      time++; color[u] = "B"; state[u] = "done"; fin[u] = time;
      meta[u] = { ...meta[u], f: time };
      stack.pop();
      f.push(clone({ line: 15, message: `Finish ${u}: color BLACK, f[${u}] = ${time}. Pop from stack.`, vars: { time, u } }));
      continue;
    }
    const edge = adj[u][top.ni++];
    const v = edge.to;
    const k = edge.key;
    f.push(clone({ line: 7, message: `Look at edge ${u}→${v}.`, vars: { time, u, v } }));
    if (color[v] === "W") {
      edgeState[k] = "path"; edgeLab[k] = "T";
      time++;
      color[v] = "G"; state[v] = "active"; d[v] = time; meta[v] = { d: time };
      stack.push({ u: v, ni: 0 });
      f.push(clone({ line: 9, message: `${v} is WHITE - Tree edge. Recurse into ${v}. d[${v}] = ${time}.`, vars: { time, u, v }, flashKey: v }));
    } else if (color[v] === "G") {
      edgeState[k] = "swap"; edgeLab[k] = "B";
      f.push(clone({ line: 11, message: `${v} is GRAY (ancestor on stack) - Back edge. Cycle detected.`, vars: { time, u, v } }));
    } else {
      // BLACK
      const isF = (d[u] < d[v]);
      edgeState[k] = "compare";
      edgeLab[k] = isF ? "F" : "C";
      f.push(clone({ line: 13, message: `${v} is BLACK - ${isF ? "Forward" : "Cross"} edge.`, vars: { time, u, v } }));
    }
  }

  f.push(clone({ line: 4, message: `DFS from ${source} complete. Timestamps shown as d=..., f=...`, vars: { time } }));
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("A>B, A>C, B>D, C>D, D>E, E>B, C>E");
  const [source, setSource] = useState("A");
  const parsed = parseEdgeList(inputStr);
  const ids = parsed?.nodeIds ?? [];
  const rawEdges = parsed?.edges ?? [];
  const frames = useMemo(() => buildDFSFrames(ids, rawEdges, source), [ids, rawEdges, source]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  const nodes: GraphNodeData[] = ids.map((id) => ({
    id, x: pos[id].x, y: pos[id].y, label: id,
    state: frame.nodeStates[id],
    meta: Object.keys(frame.nodeMeta[id] ?? {}).length ? frame.nodeMeta[id] : undefined,
  }));
  const gEdges: GraphEdgeData[] = rawEdges.map((e) => {
    const k = `${e.from}-${e.to}`;
    return {
      from: e.from, to: e.to, directed: e.directed,
      state: frame.edgeStates[k],
      weight: undefined,
    };
  });

  const labeledEdges = Object.entries(frame.edgeLabels);

  return (
    <AlgoCanvas
      title={`DFS from ${source}`}
      player={player}
      input={
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-end" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <InputEditor
              label="Edges (A>B directed or A-B undirected)"
              value={inputStr}
              placeholder="A>B, B>C, C>A, ..."
              helper="Use '>' for directed, '-' for undirected."
              presets={[
                { label: "Tree", value: "A>B, A>C, B>D, B>E, C>F" },
                { label: "With back edge", value: "A>B, B>C, C>A, C>D" },
                { label: "DAG diamond", value: "A>B, A>C, B>D, C>D" },
                { label: "Cross edge", value: "A>B, A>C, B>D, C>D, C>B" },
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
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [`d`, "u", "v"] : []} />}
      legend={
        <span>
          <Swatch c="#3b82f6" label="GRAY (on stack)" />
          <Swatch c="#10b981" label="BLACK (done)" />
          <Swatch c="#fbbf24" label="T tree edge" />
          <Swatch c="#ef4444" label="B back edge" />
          <Swatch c="#f59e0b" label="F / C edge" />
        </span>
      }
    >
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 150px", gap: 14, alignItems: "start" }}>
        <div>
          <GraphCanvas nodes={nodes} edges={gEdges} />
          {labeledEdges.length > 0 && (
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8, fontSize: "0.72rem" }}>
              {labeledEdges.map(([k, lab]) => {
                const color = lab === "T" ? "#fbbf24" : lab === "B" ? "#ef4444" : "#f59e0b";
                return (
                  <span key={k} style={{
                    padding: "2px 8px", borderRadius: 10, background: `${color}22`, color,
                    border: `1px solid ${color}`, fontFamily: C.mono, fontWeight: 700,
                  }}>
                    {k} [{lab}]
                  </span>
                );
              })}
            </div>
          )}
        </div>
        <StackColumn
          items={frame.stack.map((v) => ({ value: v }))}
          title="DFS Stack"
          width={130}
          topLabel="top"
          maxHeight={260}
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

function LearnTab() {
  const sections = [
    { title: "DFS in one line", body: "Go as deep as possible, then backtrack. Uses a stack (implicit via recursion, or explicit). Each vertex gets a discovery time d[] and finish time f[]." },
    { title: "Edge classification (directed)", body: "Tree edge - discovers a WHITE vertex. Back edge - reaches a GRAY ancestor (implies cycle). Forward edge - reaches a BLACK descendant. Cross edge - reaches a BLACK non-descendant." },
    { title: "Parenthesis theorem", body: "For any two vertices u, v: intervals [d[u], f[u]] and [d[v], f[v]] are either disjoint or nested. This is what makes DFS timestamps so useful." },
    { title: "Complexity", body: "O(V + E) with adjacency list - same as BFS. DFS is the workhorse for topological sort, SCC, bridge finding, and many more." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Mental model</SectionEyebrow>
        <SectionTitle>Walk a maze. Take every corridor. Backtrack at dead ends.</SectionTitle>
        <Lede>
          Imagine exploring a maze by always walking into the next unexplored corridor. When you hit a dead end, back up to the last junction and try another exit. That is DFS.
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
        Open the Visualize tab and check these traces.
      </Callout>
      {[
        "On preset 'With back edge' (A>B, B>C, C>A, C>D) from A, which edge is the back edge?  (Expected: C>A)",
        "On preset 'DAG diamond' from A, list the finish order.  (Expected: D, B, C, A - typical left-first)",
        "Can DFS on an undirected graph produce a forward edge?  (Expected: No - only tree and back edges)",
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
        <SubHeading>Why timestamps?</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Discovery/finish times unlock topological sort (reverse order of finish), SCC (Tarjan&apos;s / Kosaraju&apos;s), bridge detection (compare d and low). Memorize one rule: <em>sort by decreasing finish time to get a topological order of a DAG</em>.
        </p>
      </Card>
      <Card>
        <SubHeading>Back edge ⇔ cycle</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          A DFS on a directed graph finds a back edge if and only if the graph has a cycle. This is the cleanest cycle-detection algorithm you can memorize for interviews.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function DSA_L4_DFSActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "In DFS on a directed graph, which edge type implies the graph has a cycle?",
      options: ["Tree", "Forward", "Cross", "Back"],
      correctIndex: 3,
      explanation: "A back edge connects a descendant to an ancestor still on the recursion stack - definitive proof of a cycle.",
    },
    {
      question: "Time complexity of DFS using adjacency list?",
      options: ["O(V log V)", "O(V²)", "O(V + E)", "O(V·E)"],
      correctIndex: 2,
      explanation: "Each vertex visited once, each edge examined O(1) times. Total O(V + E).",
    },
    {
      question: "During DFS a vertex is colored GRAY while…",
      options: ["Unvisited", "On the recursion stack (discovered but not finished)", "Fully processed", "Never"],
      correctIndex: 1,
      explanation: "WHITE = unvisited, GRAY = discovered & active, BLACK = finished. GRAY means it is still on the stack.",
    },
    {
      question: "In DFS on an UNDIRECTED graph, which edge types can appear?",
      options: ["Tree and Forward only", "Tree and Back only", "All four", "Cross and Forward only"],
      correctIndex: 1,
      explanation: "In undirected DFS, every non-tree edge must be a back edge - forward and cross edges cannot occur.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Depth-First Search (DFS)"
      level={4}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very high - foundation of topo sort, SCC, cycle detection"
      nextLessonHint="Dijkstra's Shortest Path"
    />
  );
}
