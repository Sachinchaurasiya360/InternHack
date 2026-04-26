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

/* Parse directed weighted edges - negative weights allowed */
function parseBF(input: string): { ids: string[]; edges: { from: string; to: string; w: number }[] } | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string; w: number }[] = [];
  const ids = new Set<string>();
  for (const tok of tokens) {
    const m = tok.match(/^([A-Za-z0-9_]+)>([A-Za-z0-9_]+):(-?\d+)$/);
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

type EdgeRowStatus = "pending" | "examining" | "relaxed" | "skipped";

interface BFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  dist: Record<string, number | undefined>;
  nodeStates: Record<string, CellState>;
  edgeStates: Record<string, CellState>;
  negCycle?: boolean;
  flashKey?: string;
  pass: number;                                // 0 = init, 1..V-1 = main, V = neg-check
  totalPasses: number;                         // V-1
  edgeRowStates: EdgeRowStatus[];              // parallel to the input edges array
  relaxationsThisPass: number;
  totalRelaxations: number;
}

const PSEUDO = [
  "BellmanFord(G, s):",
  "  for each v: dist[v] ← ∞",
  "  dist[s] ← 0",
  "  repeat V − 1 times:",
  "    for each edge (u, v, w):",
  "      if dist[u] + w < dist[v]:",
  "        dist[v] ← dist[u] + w",
  "  // Negative-cycle check:",
  "  for each edge (u, v, w):",
  "    if dist[u] + w < dist[v]:",
  "      report NEGATIVE CYCLE",
];

function buildBFFrames(ids: string[], edges: { from: string; to: string; w: number }[], source: string): BFrame[] {
  const f: BFrame[] = [];
  const V = ids.length;
  const totalPasses = Math.max(0, V - 1);
  const emptyRows = (): EdgeRowStatus[] => edges.map(() => "pending");

  if (!ids.includes(source)) {
    f.push({
      line: 0, vars: {}, message: `Source '${source}' not in graph`,
      dist: {}, nodeStates: {}, edgeStates: {},
      pass: 0, totalPasses, edgeRowStates: emptyRows(), relaxationsThisPass: 0, totalRelaxations: 0,
    });
    return f;
  }

  const dist: Record<string, number | undefined> = {};
  const state: Record<string, CellState> = Object.fromEntries(ids.map((id) => [id, "default" as CellState]));
  const edgeState: Record<string, CellState> = {};
  for (const id of ids) dist[id] = undefined;

  let pass = 0;
  let edgeRowStates: EdgeRowStatus[] = emptyRows();
  let relaxationsThisPass = 0;
  let totalRelaxations = 0;

  const clone = (patch: Partial<BFrame>): BFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    dist: { ...dist },
    nodeStates: { ...state },
    edgeStates: { ...edgeState },
    negCycle: patch.negCycle,
    flashKey: patch.flashKey,
    pass: patch.pass ?? pass,
    totalPasses,
    edgeRowStates: patch.edgeRowStates ? [...patch.edgeRowStates] : [...edgeRowStates],
    relaxationsThisPass: patch.relaxationsThisPass ?? relaxationsThisPass,
    totalRelaxations: patch.totalRelaxations ?? totalRelaxations,
  });

  f.push(clone({ line: 1, message: `Initialize dist[v] = ∞ for every vertex.` }));
  dist[source] = 0;
  state[source] = "active";
  f.push(clone({ line: 2, message: `Set dist[${source}] = 0.`, flashKey: source }));

  for (pass = 1; pass <= totalPasses; pass++) {
    edgeRowStates = emptyRows();
    relaxationsThisPass = 0;
    f.push(clone({
      line: 3,
      message: `Pass ${pass} of ${totalPasses}. Reset all ${edges.length} edge rows to pending; scan once.`,
      vars: { pass, "V-1": totalPasses, edges: edges.length },
    }));
    let updatedAny = false;
    for (let ei = 0; ei < edges.length; ei++) {
      const e = edges[ei];
      const k = `${e.from}-${e.to}`;
      edgeState[k] = "compare";
      edgeRowStates[ei] = "examining";
      f.push(clone({
        line: 4,
        message: `Examine edge #${ei + 1}: ${e.from}→${e.to} (w=${e.w}).`,
        vars: { pass, edge: `${e.from}→${e.to}`, w: e.w, "d[u]": dist[e.from] ?? "∞", "d[v]": dist[e.to] ?? "∞" },
      }));
      const du = dist[e.from];
      if (du !== undefined && du + e.w < (dist[e.to] ?? Infinity)) {
        dist[e.to] = du + e.w;
        edgeState[k] = "path";
        edgeRowStates[ei] = "relaxed";
        relaxationsThisPass++;
        totalRelaxations++;
        updatedAny = true;
        f.push(clone({
          line: 6,
          message: `Relax - dist[${e.to}] = ${du} + ${e.w} = ${dist[e.to]}. (relaxations this pass: ${relaxationsThisPass})`,
          vars: { pass, "d[v]": dist[e.to], relaxedThisPass: relaxationsThisPass },
          flashKey: e.to,
        }));
      } else {
        edgeState[k] = "default";
        edgeRowStates[ei] = "skipped";
      }
    }
    f.push(clone({
      line: 3,
      message: `Pass ${pass} complete. Relaxations this pass: ${relaxationsThisPass}. Total so far: ${totalRelaxations}.`,
      vars: { pass, relaxedThisPass: relaxationsThisPass, totalRelaxations },
    }));
    if (!updatedAny) {
      f.push(clone({
        line: 3,
        message: `Pass ${pass}: zero relaxations → early-terminate (saves ${totalPasses - pass} passes).`,
        vars: { pass, savedPasses: totalPasses - pass },
      }));
      break;
    }
  }

  // negative cycle check
  pass = totalPasses + 1;
  edgeRowStates = emptyRows();
  relaxationsThisPass = 0;
  f.push(clone({
    line: 8,
    message: `Negative-cycle check: run a V-th pass. ANY further relaxation = negative cycle reachable from source.`,
    vars: { pass: "V (check)", reason: "V-1 passes suffice for any acyclic shortest path" },
  }));
  let neg = false;
  for (let ei = 0; ei < edges.length; ei++) {
    const e = edges[ei];
    const k = `${e.from}-${e.to}`;
    edgeState[k] = "compare";
    edgeRowStates[ei] = "examining";
    f.push(clone({
      line: 9,
      message: `Re-examine edge #${ei + 1}: ${e.from}→${e.to}.`,
      vars: { edge: `${e.from}→${e.to}`, w: e.w, "d[u]": dist[e.from] ?? "∞", "d[v]": dist[e.to] ?? "∞" },
    }));
    const du = dist[e.from];
    if (du !== undefined && du + e.w < (dist[e.to] ?? Infinity)) {
      neg = true;
      edgeState[k] = "swap";
      edgeRowStates[ei] = "relaxed";
      f.push(clone({
        line: 10,
        message: `RELAXATION ON V-TH PASS → NEGATIVE CYCLE detected on ${e.from}→${e.to}.`,
        negCycle: true,
        vars: { u: e.from, v: e.to, w: e.w },
      }));
      break;
    } else {
      edgeState[k] = "default";
      edgeRowStates[ei] = "skipped";
    }
  }
  if (!neg) {
    f.push(clone({
      line: 8,
      message: `V-th pass: no relaxations. All ${ids.length} distances are final.`,
    }));
  }

  return f;
}

/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("A>B:6, A>C:7, B>C:8, B>D:5, B>E:-4, C>D:-3, C>E:9, D>B:-2, E>D:7, E>A:2");
  const [source, setSource] = useState("A");
  const parsed = parseBF(inputStr);
  const ids = parsed?.ids ?? [];
  const edges = parsed?.edges ?? [];
  const frames = useMemo(() => buildBFFrames(ids, edges, source), [ids, edges, source]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  const nodes: GraphNodeData[] = ids.map((id) => ({
    id, x: pos[id].x, y: pos[id].y, label: id,
    state: frame.nodeStates[id],
    meta: { d: frame.dist[id] !== undefined ? frame.dist[id]! : "∞" },
  }));
  const gEdges: GraphEdgeData[] = edges.map((e) => ({
    from: e.from, to: e.to, weight: e.w, directed: true,
    state: frame.edgeStates[`${e.from}-${e.to}`],
  }));

  return (
    <AlgoCanvas
      title={`Bellman-Ford from ${source}`}
      player={player}
      input={
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-end" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <InputEditor
              label="Directed weighted edges (A>B:w, negative allowed)"
              value={inputStr}
              placeholder="A>B:6, B>C:-2, ..."
              helper="Use '>' for directed. Negative weights allowed."
              presets={[
                { label: "Classic CLRS", value: "A>B:6, A>C:7, B>C:8, B>D:5, B>E:-4, C>D:-3, C>E:9, D>B:-2, E>D:7, E>A:2" },
                { label: "Simple neg", value: "A>B:4, A>C:5, B>C:-3, C>D:2" },
                { label: "Neg cycle", value: "A>B:1, B>C:-1, C>A:-1, A>D:2" },
                { label: "No cycle", value: "A>B:1, B>C:2, C>D:-5, A>D:100" },
              ]}
              onApply={(v) => { if (parseBF(v)) setInputStr(v); }}
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
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? ["d[v]"] : []} />}
      legend={
        <span>
          <Swatch c="#f59e0b" label="examining edge" />
          <Swatch c="#fbbf24" label="just relaxed" />
          <Swatch c="#ef4444" label="negative cycle" />
        </span>
      }
    >
      <GraphCanvas nodes={nodes} edges={gEdges} />
      <div style={{ marginTop: 12 }}>
        <Callout accent={A}>{frame.message}</Callout>
      </div>
      {frame.negCycle && (
        <div style={{
          marginTop: 12, padding: "10px 14px", borderRadius: 8,
          background: `${C.danger}1F`, border: `1.5px solid ${C.danger}`,
          color: C.dangerDark, fontWeight: 700, fontSize: "0.9rem", textAlign: "center",
          fontFamily: C.heading,
        }}>
          NEGATIVE CYCLE DETECTED - shortest paths are undefined for vertices reachable from the cycle.
        </div>
      )}
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
    { title: "Why not just Dijkstra?", body: "Dijkstra fails on negative-weight edges. Bellman-Ford works for any weights, including negative, and even detects negative-weight cycles reachable from the source." },
    { title: "The V−1 trick", body: "Any shortest path has at most V−1 edges (otherwise it visits a vertex twice, which can be shortened unless there's a negative cycle). So V−1 relaxation passes are enough." },
    { title: "Relaxation pass", body: "In each pass, examine every edge once. Each pass extends the distance of shortest paths by at least one more edge. Slow but exhaustive - O(V·E)." },
    { title: "Negative-cycle detection", body: "After V−1 passes, distances are final - unless a negative cycle lets us keep improving. A V-th pass that still relaxes any edge proves a negative cycle exists." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Mental model</SectionEyebrow>
        <SectionTitle>Brute force every edge V−1 times. Survive negatives.</SectionTitle>
        <Lede>
          Instead of being clever about which vertex to relax next (Dijkstra), Bellman-Ford just sweeps all edges V−1 times. Brute force - but it handles every weight sign and detects currency-arbitrage-style cycles.
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
        Try the &quot;Neg cycle&quot; preset - the algorithm will report it on the final pass.
      </Callout>
      {[
        "Complexity of Bellman-Ford? (Expected: O(V·E))",
        "On the 'No cycle' preset from A, what's dist[D]? (Expected: -2, via A→B→C→D = 1+2-5)",
        "If a negative cycle is reachable, what do we say about shortest paths to nodes past it? (Expected: undefined / -∞)",
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
        <SubHeading>When to use Bellman-Ford</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>Currency arbitrage detection (negative log-weights).</li>
          <li>Distance-vector routing protocols (RIP).</li>
          <li>Preprocessing for Johnson&apos;s all-pairs shortest paths.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Edge order matters (for speed)</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          A lucky edge ordering can converge in far fewer than V−1 passes. Ordering by topological sort order on a DAG finishes in one pass - the basis of the O(V+E) DAG shortest-path algorithm.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function DSA_L4_BellmanFordActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Time complexity of Bellman-Ford?",
      options: ["O(V + E)", "O(V log V)", "O(V · E)", "O(E log V)"],
      correctIndex: 2,
      explanation: "V−1 passes × O(E) per pass = O(V·E). Much slower than Dijkstra - but handles negative weights.",
    },
    {
      question: "After V−1 passes, if a V-th pass still relaxes some edge, we conclude…",
      options: ["Algorithm has a bug", "Graph is disconnected", "A negative cycle is reachable from the source", "Run more passes"],
      correctIndex: 2,
      explanation: "V−1 passes suffice for any acyclic shortest path. Further improvement implies a cycle whose total weight is negative.",
    },
    {
      question: "Why does Dijkstra fail with negative weights but Bellman-Ford succeeds?",
      options: ["Dijkstra is buggy", "Bellman-Ford tries all edges in every pass; Dijkstra commits to a min too early", "They both succeed", "Dijkstra is only for DAGs"],
      correctIndex: 1,
      explanation: "Dijkstra finalizes vertices greedily. A later negative edge could have improved an already-finalized distance. Bellman-Ford never finalizes early.",
    },
    {
      question: "If no negative cycle exists, how many passes are sufficient in the worst case?",
      options: ["log V", "V − 1", "V", "E"],
      correctIndex: 1,
      explanation: "A simple shortest path has at most V−1 edges. One pass extends correct distances by one edge; V−1 passes suffice.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Bellman-Ford & Negative Cycles"
      level={4}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Medium - arbitrage, routing protocols"
      nextLessonHint="MST - Kruskal's & Prim's"
    />
  );
}
