"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import { AlgoCanvas, GraphCanvas, PseudocodePanel, VariablesPanel, InputEditor, StackColumn, QueueTube, useStepPlayer } from "@/components/engineering/algo";
import type { GraphNodeData, GraphEdgeData, CellState } from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, PillButton, Callout,
} from "@/components/engineering/lessonPrimitives";

function parseDirected(input: string): { ids: string[]; edges: { from: string; to: string }[] } | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string }[] = [];
  const ids = new Set<string>();
  for (const tok of tokens) {
    const m = tok.match(/^([A-Za-z0-9_]+)>([A-Za-z0-9_]+)$/);
    if (!m) return null;
    edges.push({ from: m[1], to: m[2] });
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
/*  Kahn's algorithm                                                   */
/* ------------------------------------------------------------------ */

interface KahnFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodeStates: Record<string, CellState>;
  edgeStates: Record<string, CellState>;
  inDeg: Record<string, number>;
  queue: string[];
  output: string[];
  cycle?: boolean;
  flashKey?: string;
}

const KAHN_PSEUDO = [
  "Kahn(G):",
  "  compute in-degree of every vertex",
  "  Q ← all vertices with in-degree = 0",
  "  output ← []",
  "  while Q not empty:",
  "    u ← dequeue(Q); output.append(u)",
  "    for each neighbor v of u:",
  "      inDeg[v] -= 1",
  "      if inDeg[v] = 0: enqueue(Q, v)",
  "  if |output| < |V|: CYCLE (not a DAG)",
];

function buildKahnFrames(ids: string[], edges: { from: string; to: string }[]): KahnFrame[] {
  const f: KahnFrame[] = [];
  const adj: Record<string, string[]> = Object.fromEntries(ids.map((id) => [id, []]));
  const inDeg: Record<string, number> = Object.fromEntries(ids.map((id) => [id, 0]));
  for (const e of edges) { adj[e.from].push(e.to); inDeg[e.to] = (inDeg[e.to] ?? 0) + 1; }
  for (const id of ids) adj[id].sort();

  const state: Record<string, CellState> = Object.fromEntries(ids.map((id) => [id, "default" as CellState]));
  const edgeState: Record<string, CellState> = {};
  const output: string[] = [];

  const Q: string[] = ids.filter((id) => inDeg[id] === 0).sort();
  for (const id of Q) state[id] = "frontier";

  const clone = (patch: Partial<KahnFrame>): KahnFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    nodeStates: { ...state },
    edgeStates: { ...edgeState },
    inDeg: { ...inDeg },
    queue: [...Q],
    output: [...output],
    cycle: patch.cycle,
    flashKey: patch.flashKey,
  });

  f.push(clone({ line: 1, message: `Compute in-degrees. Each node shows its in-degree as meta.` }));
  f.push(clone({ line: 2, message: `Initial queue = ${Q.length ? Q.join(", ") : "(none)"} (all nodes with in-degree 0).` }));

  while (Q.length) {
    const u = Q.shift()!;
    state[u] = "done";
    output.push(u);
    f.push(clone({ line: 5, message: `Dequeue ${u}. Append to output.`, vars: { u, "|output|": output.length }, flashKey: u }));

    for (const v of adj[u]) {
      inDeg[v] -= 1;
      const k = `${u}-${v}`;
      edgeState[k] = "path";
      f.push(clone({ line: 7, message: `Decrement in-degree of ${v}: now ${inDeg[v]}.`, vars: { u, v, "inDeg[v]": inDeg[v] } }));
      if (inDeg[v] === 0) {
        Q.push(v);
        state[v] = "frontier";
        f.push(clone({ line: 8, message: `in-degree[${v}] hit 0 - enqueue.`, flashKey: v, vars: { u, v } }));
      }
    }
  }

  const isCycle = output.length < ids.length;
  f.push(clone({ line: 9, message: isCycle ? `|output| = ${output.length} < |V| = ${ids.length} - CYCLE detected, not a DAG.` : `All ${ids.length} vertices output. Topological order: ${output.join(" → ")}.`, cycle: isCycle }));
  return f;
}

/* ------------------------------------------------------------------ */
/*  DFS-based topological sort                                         */
/* ------------------------------------------------------------------ */

interface DFSTopoFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodeStates: Record<string, CellState>;
  edgeStates: Record<string, CellState>;
  stack: string[];
  output: string[];
  cycle?: boolean;
  flashKey?: string;
}

const DFS_PSEUDO = [
  "DFS-Topo(G):",
  "  stack ← empty",
  "  for each v: color[v] ← WHITE",
  "  for each v in V:",
  "    if color[v] = WHITE: DFS-Visit(v)",
  "DFS-Visit(u):",
  "  color[u] ← GRAY",
  "  for each neighbor v of u:",
  "    if color[v] = GRAY: report CYCLE",
  "    elif color[v] = WHITE: DFS-Visit(v)",
  "  color[u] ← BLACK",
  "  push u onto stack",
  "// Topo order = stack popped top-to-bottom",
];

function buildDFSTopoFrames(ids: string[], edges: { from: string; to: string }[]): DFSTopoFrame[] {
  const f: DFSTopoFrame[] = [];
  const adj: Record<string, string[]> = Object.fromEntries(ids.map((id) => [id, []]));
  for (const e of edges) adj[e.from].push(e.to);
  for (const id of ids) adj[id].sort();

  const color: Record<string, "W" | "G" | "B"> = Object.fromEntries(ids.map((id) => [id, "W"]));
  const state: Record<string, CellState> = Object.fromEntries(ids.map((id) => [id, "default" as CellState]));
  const edgeState: Record<string, CellState> = {};
  const finishStack: string[] = [];
  let hasCycle = false;

  const clone = (patch: Partial<DFSTopoFrame>, recStack: string[]): DFSTopoFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    nodeStates: { ...state },
    edgeStates: { ...edgeState },
    stack: [...finishStack],
    output: patch.output ?? [],
    cycle: patch.cycle ?? hasCycle,
    flashKey: patch.flashKey,
  });

  f.push(clone({ line: 1, message: `Initialize stack = [], all vertices WHITE.` }, []));

  function visit(u: string, recStack: string[]) {
    color[u] = "G"; state[u] = "active";
    f.push(clone({ line: 6, message: `DFS-Visit(${u}). Color GRAY.`, flashKey: u, vars: { u } }, recStack));

    for (const v of adj[u]) {
      const k = `${u}-${v}`;
      f.push(clone({ line: 7, message: `Look at edge ${u}→${v}.`, vars: { u, v } }, recStack));
      if (color[v] === "G") {
        hasCycle = true;
        edgeState[k] = "swap";
        f.push(clone({ line: 8, message: `${v} is GRAY - back edge → CYCLE. Graph is NOT a DAG.`, cycle: true, vars: { u, v } }, recStack));
        return;
      } else if (color[v] === "W") {
        edgeState[k] = "path";
        visit(v, [...recStack, u]);
        if (hasCycle) return;
      } else {
        f.push(clone({ line: 7, message: `${v} is BLACK - already finished, skip.`, vars: { u, v } }, recStack));
      }
    }
    color[u] = "B"; state[u] = "done";
    finishStack.push(u);
    f.push(clone({ line: 11, message: `Finish ${u}. Push onto stack.`, flashKey: u, vars: { u } }, recStack));
  }

  for (const v of ids) {
    if (color[v] === "W") {
      visit(v, []);
      if (hasCycle) break;
    }
  }

  if (!hasCycle) {
    const topo = [...finishStack].reverse();
    f.push(clone({ line: 12, message: `All done. Topological order = stack top-to-bottom = ${topo.join(" → ")}.`, output: topo }, []));
  }
  return f;
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [mode, setMode] = useState<"kahn" | "dfs">("kahn");
  const [inputStr, setInputStr] = useState("A>B, A>C, B>D, C>D, D>E, C>E");
  const parsed = parseDirected(inputStr);
  const ids = parsed?.ids ?? [];
  const edges = parsed?.edges ?? [];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <PillButton color={A} active={mode === "kahn"} onClick={() => setMode("kahn")}>
          <span style={{ fontSize: "0.82rem" }}>Kahn&apos;s (BFS)</span>
        </PillButton>
        <PillButton color={A} active={mode === "dfs"} onClick={() => setMode("dfs")}>
          <span style={{ fontSize: "0.82rem" }}>DFS-based</span>
        </PillButton>
      </div>
      {mode === "kahn"
        ? <KahnViz ids={ids} edges={edges} inputStr={inputStr} setInputStr={setInputStr} />
        : <DFSTopoViz ids={ids} edges={edges} inputStr={inputStr} setInputStr={setInputStr} />}
    </div>
  );
}

function KahnViz({ ids, edges, inputStr, setInputStr }: {
  ids: string[]; edges: { from: string; to: string }[];
  inputStr: string; setInputStr: (s: string) => void;
}) {
  const frames = useMemo(() => buildKahnFrames(ids, edges), [ids, edges]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  const nodes: GraphNodeData[] = ids.map((id) => ({
    id, x: pos[id].x, y: pos[id].y, label: id,
    state: frame.nodeStates[id],
    meta: { in: frame.inDeg[id] ?? 0 },
  }));
  const gEdges: GraphEdgeData[] = edges.map((e) => ({
    from: e.from, to: e.to, directed: true,
    state: frame.edgeStates[`${e.from}-${e.to}`],
  }));

  return (
    <AlgoCanvas
      title="Kahn's Topological Sort"
      player={player}
      input={presetInput(inputStr, setInputStr)}
      pseudocode={<PseudocodePanel lines={KAHN_PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? ["u", "v"] : []} />}
      legend={<span><Swatch c="#06b6d4" label="in queue (in-deg 0)" /> <Swatch c="#10b981" label="output" /></span>}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <GraphCanvas nodes={nodes} edges={gEdges} />
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 12 }}>
          <QueueTube items={frame.queue.map((v) => ({ value: v, color: "#06b6d4" }))} title="Queue (in-deg = 0)" maxWidth={420} />
          <OutputSequence items={frame.output} title="Output order" />
        </div>
        <Callout accent={A}>{frame.message}</Callout>
        {frame.cycle && <CycleBanner />}
      </div>
    </AlgoCanvas>
  );
}

function DFSTopoViz({ ids, edges, inputStr, setInputStr }: {
  ids: string[]; edges: { from: string; to: string }[];
  inputStr: string; setInputStr: (s: string) => void;
}) {
  const frames = useMemo(() => buildDFSTopoFrames(ids, edges), [ids, edges]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  const nodes: GraphNodeData[] = ids.map((id) => ({
    id, x: pos[id].x, y: pos[id].y, label: id,
    state: frame.nodeStates[id],
  }));
  const gEdges: GraphEdgeData[] = edges.map((e) => ({
    from: e.from, to: e.to, directed: true,
    state: frame.edgeStates[`${e.from}-${e.to}`],
  }));
  const output = [...frame.stack].reverse();

  return (
    <AlgoCanvas
      title="DFS-based Topological Sort"
      player={player}
      input={presetInput(inputStr, setInputStr)}
      pseudocode={<PseudocodePanel lines={DFS_PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? ["u", "v"] : []} />}
      legend={<span><Swatch c="#3b82f6" label="GRAY (on stack)" /> <Swatch c="#10b981" label="BLACK (finished)" /> <Swatch c="#ef4444" label="back edge → cycle" /></span>}
    >
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 150px", gap: 14, alignItems: "start" }}>
        <div>
          <GraphCanvas nodes={nodes} edges={gEdges} />
          <div style={{ marginTop: 10 }}>
            <OutputSequence items={output} title="Topological order (stack top → bottom)" />
          </div>
          <div style={{ marginTop: 10 }}>
            <Callout accent={A}>{frame.message}</Callout>
          </div>
          {frame.cycle && <CycleBanner />}
        </div>
        <StackColumn items={frame.stack.map((v) => ({ value: v }))} title="Finish Stack" width={130} topLabel="pop first" maxHeight={260} />
      </div>
    </AlgoCanvas>
  );
}

function presetInput(inputStr: string, setInputStr: (s: string) => void) {
  return (
    <InputEditor
      label="Directed edges (A>B)"
      value={inputStr}
      placeholder="A>B, B>C, C>D, ..."
      helper="Add a cycle (e.g. 'C>A') to see the 'not a DAG' warning."
      presets={[
        { label: "Course DAG", value: "A>B, A>C, B>D, C>D, D>E, C>E" },
        { label: "Chain", value: "A>B, B>C, C>D, D>E" },
        { label: "Diamond", value: "A>B, A>C, B>D, C>D" },
        { label: "Has cycle", value: "A>B, B>C, C>D, D>B" },
      ]}
      onApply={(v) => { if (parseDirected(v)) setInputStr(v); }}
    />
  );
}

function OutputSequence({ items, title }: { items: string[]; title: string }) {
  return (
    <div style={{ fontFamily: C.heading }}>
      <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center", minHeight: 36, padding: "6px 10px", background: C.bgSoft, borderRadius: 8, border: `1px solid ${C.border}` }}>
        {items.length === 0 ? (
          <span style={{ fontSize: "0.78rem", color: C.textMuted, fontStyle: "italic" }}>-</span>
        ) : (
          items.map((id, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              <span style={{
                padding: "4px 10px", borderRadius: 6,
                background: C.success, color: "#fff",
                fontFamily: C.mono, fontWeight: 700, fontSize: "0.82rem",
              }}>{id}</span>
              {i < items.length - 1 && <span style={{ color: C.textMuted }}>→</span>}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

function CycleBanner() {
  return (
    <div style={{
      marginTop: 6, padding: "10px 14px", borderRadius: 8,
      background: `${C.danger}1F`, border: `1.5px solid ${C.danger}`,
      color: C.dangerDark, fontWeight: 700, fontSize: "0.9rem", textAlign: "center",
      fontFamily: C.heading,
    }}>
      NOT A DAG - topological order does not exist.
    </div>
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
    { title: "The promise", body: "For a DAG (directed acyclic graph), a topological order is a linear arrangement of vertices such that every edge u→v goes from earlier to later. Examples: course prerequisites, build systems, task schedulers." },
    { title: "Kahn's algorithm (BFS)", body: "Start with all in-degree-0 vertices in a queue. Dequeue one, append to output, and decrement in-degree of each neighbor. Any neighbor hitting 0 enters the queue. If |output| < |V|, a cycle prevented completion." },
    { title: "DFS-based", body: "Run DFS. As each vertex finishes (turns BLACK), push onto a stack. Reverse the stack at the end. Uses the parenthesis theorem - a vertex with an outgoing edge must finish after its descendants." },
    { title: "Uniqueness", body: "Topological order is not unique in general. It's unique iff the DAG has a Hamiltonian path (each step has exactly one in-degree-0 or one edge forward)." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Mental model</SectionEyebrow>
        <SectionTitle>Schedule classes. Respect every prerequisite.</SectionTitle>
        <Lede>
          Imagine your college&apos;s prerequisite graph. You can only take a course after its prereqs. A topological order is a valid semester-by-semester schedule - and only exists if there are no circular dependencies.
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
        Try the &quot;Has cycle&quot; preset - both algorithms should flag it.
      </Callout>
      {[
        "On the Course DAG preset, give one valid topo order. (Expected: A, B, C, D, E or A, C, B, D, E)",
        "Can a topological sort of a DAG be done in O(V+E)? (Expected: Yes - both Kahn and DFS run in O(V+E))",
        "What's the minimum number of edges we can remove to make 'Has cycle' preset a DAG? (Expected: 1)",
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
        <SubHeading>When to use which?</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>Kahn: natural if you need to detect cycles explicitly, or if you want lexicographically smallest order (use a priority queue).</li>
          <li>DFS: natural if you&apos;re already doing DFS (SCC, cycle finding). Elegant recursive code.</li>
          <li>Both O(V + E). Kahn is often easier to parallelize.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Downstream applications</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Shortest/longest path on a DAG in O(V+E) - just relax edges in topological order. Dependency resolution (Makefiles, npm install). Instruction scheduling in compilers. Spreadsheet cell recalculation.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function DSA_L4_TopologicalSortActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "A topological ordering is possible for…",
      options: ["Any directed graph", "Any undirected graph", "Only DAGs", "Any connected graph"],
      correctIndex: 2,
      explanation: "Topological order requires no cycles. If any cycle exists, no valid ordering can satisfy all edges.",
    },
    {
      question: "In Kahn's algorithm, the initial queue contains…",
      options: ["All vertices", "All vertices with in-degree 0", "All vertices with out-degree 0", "The start vertex only"],
      correctIndex: 1,
      explanation: "Vertices with in-degree 0 have no prerequisites - they can be first in any valid order.",
    },
    {
      question: "In DFS-based topo sort, the topological order is obtained by…",
      options: ["Reading discovery times", "Reading finish times in reverse order", "The order nodes are first visited", "Arbitrary"],
      correctIndex: 1,
      explanation: "Sort by decreasing finish time. Equivalent to popping a stack where each node is pushed upon finishing.",
    },
    {
      question: "How can Kahn's algorithm detect that the input graph has a cycle?",
      options: ["Negative in-degrees", "|output| < |V| at the end", "Queue overflows", "DFS returns false"],
      correctIndex: 1,
      explanation: "If cycles exist, some vertices never reach in-degree 0 and are never enqueued. The output sequence will be short.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Topological Sort"
      level={4}
      lessonNumber={7}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High - scheduling, dependency resolution, compiler IR"
      nextLessonHint="Level 5 - Sorting & Searching"
    />
  );
}
