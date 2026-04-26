"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import { GraphCanvas, InputEditor } from "@/components/engineering/algo";
import type { GraphNodeData, GraphEdgeData } from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, PillButton, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Graph parsing - edge list format: "A-B:5, B-C:3, A-C:10"           */
/* ------------------------------------------------------------------ */

interface ParsedGraph {
  nodeIds: string[];
  edges: { from: string; to: string; weight?: number }[];
}

function parseEdgeList(input: string): ParsedGraph | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string; weight?: number }[] = [];
  const ids = new Set<string>();
  for (const tok of tokens) {
    const m = tok.match(/^([A-Za-z0-9_]+)[-:]([A-Za-z0-9_]+)(?::(-?\d+))?$/);
    if (!m) return null;
    const [, a, b, w] = m;
    edges.push({ from: a, to: b, weight: w !== undefined ? Number(w) : undefined });
    ids.add(a); ids.add(b);
  }
  return { nodeIds: [...ids].sort(), edges };
}

function autoLayout(ids: string[], cx = 340, cy = 170, r = 120): Record<string, { x: number; y: number }> {
  const n = ids.length;
  const out: Record<string, { x: number; y: number }> = {};
  ids.forEach((id, i) => {
    const ang = (2 * Math.PI * i) / Math.max(1, n) - Math.PI / 2;
    out[id] = { x: cx + r * Math.cos(ang), y: cy + r * Math.sin(ang) };
  });
  return out;
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("A-B:4, A-C:2, B-C:3, B-D:5, C-D:1, D-E:6");
  const [directed, setDirected] = useState(false);
  const parsed = parseEdgeList(inputStr);

  const { nodes, edges, adj, matrix, ids } = useMemo(() => {
    const p = parsed ?? { nodeIds: [], edges: [] };
    const pos = autoLayout(p.nodeIds);
    const nodes: GraphNodeData[] = p.nodeIds.map((id) => ({ id, x: pos[id].x, y: pos[id].y, label: id }));
    const edges: GraphEdgeData[] = p.edges.map((e) => ({ from: e.from, to: e.to, weight: e.weight, directed }));
    const adj: Record<string, { to: string; w?: number }[]> = Object.fromEntries(p.nodeIds.map((id) => [id, []]));
    const matrix: (number | null)[][] = p.nodeIds.map(() => p.nodeIds.map(() => null));
    const idx: Record<string, number> = {};
    p.nodeIds.forEach((id, i) => (idx[id] = i));
    for (const e of p.edges) {
      adj[e.from].push({ to: e.to, w: e.weight });
      matrix[idx[e.from]][idx[e.to]] = e.weight ?? 1;
      if (!directed) {
        adj[e.to].push({ to: e.from, w: e.weight });
        matrix[idx[e.to]][idx[e.from]] = e.weight ?? 1;
      }
    }
    return { nodes, edges, adj, matrix, ids: p.nodeIds };
  }, [parsed, directed]);

  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <Card padded={false}>
        <div style={{ padding: "14px 16px", borderBottom: `1px solid ${C.border}`, background: C.bgSoft }}>
          <InputEditor
            label="Edge list (A-B:weight - weight optional)"
            value={inputStr}
            placeholder="e.g. A-B:4, B-C:3, A-C:10"
            helper="Comma-separated edges. Toggle directed/undirected below."
            presets={[
              { label: "Triangle", value: "A-B:2, B-C:3, A-C:4" },
              { label: "Path", value: "A-B:1, B-C:2, C-D:3, D-E:4" },
              { label: "Star", value: "A-B, A-C, A-D, A-E" },
              { label: "Dense", value: "A-B:4, A-C:2, B-C:3, B-D:5, C-D:1, D-E:6, A-E:7" },
            ]}
            onApply={(v) => { if (parseEdgeList(v)) setInputStr(v); }}
          />
          <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: C.heading }}>
              Graph type
            </span>
            <PillButton color={A} active={!directed} onClick={() => setDirected(false)}>
              <span style={{ fontSize: "0.78rem" }}>Undirected</span>
            </PillButton>
            <PillButton color={A} active={directed} onClick={() => setDirected(true)}>
              <span style={{ fontSize: "0.78rem" }}>Directed</span>
            </PillButton>
          </div>
        </div>

        <div style={{ padding: 16, background: C.bg }}>
          <GraphCanvas nodes={nodes} edges={edges} />
        </div>
      </Card>

      {/* Side-by-side: Matrix + List */}
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 14 }}>
        <Card>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, fontFamily: C.heading }}>
            Adjacency Matrix
          </div>
          {ids.length > 0 ? (
            <div style={{ overflowX: "auto" }}>
              <table style={{ borderCollapse: "collapse", fontFamily: C.mono, fontSize: "0.78rem" }}>
                <thead>
                  <tr>
                    <th style={{ padding: 4 }}></th>
                    {ids.map((id) => (
                      <th key={id} style={{ padding: "4px 8px", fontWeight: 700, color: C.textMuted, fontSize: "0.72rem" }}>{id}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ids.map((rowId, i) => (
                    <tr key={rowId}>
                      <td style={{ padding: "4px 8px", fontWeight: 700, color: C.textMuted, fontSize: "0.72rem" }}>{rowId}</td>
                      {ids.map((_, j) => {
                        const v = matrix[i][j];
                        const has = v !== null;
                        return (
                          <td key={j} style={{
                            width: 34, height: 34, textAlign: "center",
                            border: `1px solid ${C.border}`,
                            background: has ? `${A}1A` : C.bgSoft,
                            color: has ? A : C.textMuted,
                            fontWeight: 700,
                            transition: "all 0.3s",
                          }}>
                            {has ? v : "0"}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : <div style={{ fontSize: "0.78rem", color: C.textMuted }}>Add edges to see matrix.</div>}
          <div style={{ fontSize: "0.7rem", color: C.textMuted, marginTop: 8 }}>
            Space: O(V²). Edge check: O(1).
          </div>
        </Card>

        <Card>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, fontFamily: C.heading }}>
            Adjacency List
          </div>
          {ids.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {ids.map((id) => (
                <div key={id} style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={{
                    minWidth: 28, padding: "4px 8px", textAlign: "center",
                    borderRadius: 6, background: A, color: "#fff",
                    fontFamily: C.mono, fontSize: "0.78rem", fontWeight: 700,
                  }}>{id}</span>
                  <span style={{ color: C.textMuted, fontSize: "0.8rem" }}>→</span>
                  {adj[id].length === 0 ? (
                    <span style={{ fontSize: "0.75rem", color: C.textMuted, fontStyle: "italic" }}>∅</span>
                  ) : adj[id].map((nb, i) => (
                    <span key={i} style={{
                      padding: "3px 8px", borderRadius: 6,
                      background: `${A}14`, color: A,
                      fontFamily: C.mono, fontSize: "0.75rem", fontWeight: 700,
                      border: `1px solid ${A}40`,
                    }}>
                      {nb.to}{nb.w !== undefined ? `:${nb.w}` : ""}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ) : <div style={{ fontSize: "0.78rem", color: C.textMuted }}>Add edges to see list.</div>}
          <div style={{ fontSize: "0.7rem", color: C.textMuted, marginTop: 8 }}>
            Space: O(V+E). Edge check: O(deg(v)).
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                          */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "What is a graph?", body: "A graph G = (V, E) is a pair: V is a set of vertices (nodes), E is a set of edges (connections between pairs of vertices). Edges can be directed or undirected, weighted or unweighted." },
    { title: "Adjacency matrix", body: "An n×n boolean or integer matrix M where M[u][v] = 1 (or weight) if edge u→v exists. Space O(V²). Checking 'is there an edge?' is O(1) - but iterating neighbors of v takes O(V)." },
    { title: "Adjacency list", body: "Each vertex stores a list of its neighbors. Space O(V + E) - much smaller for sparse graphs. Iterating neighbors is O(deg(v)). Checking a specific edge is O(deg(v)). BFS/DFS love this layout." },
    { title: "When to use which?", body: "Dense graph (|E| ≈ V²) or frequent edge queries → matrix. Sparse graph (|E| ≪ V²) or traversal-heavy → list. Real-world graphs (social, web, road) are sparse - lists dominate." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Mental model</SectionEyebrow>
        <SectionTitle>Two layouts. Same graph. Wildly different speed.</SectionTitle>
        <Lede>
          A graph is the most general data structure in CS. Trees are graphs, linked lists are graphs, the road network is a graph, the internet is a graph. How you represent it in memory determines whether an algorithm runs in O(V+E) or O(V²).
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

/* ------------------------------------------------------------------ */
/*  Try tab                                                            */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Graph has 5 vertices. Adjacency matrix uses how much space (cells)?", a: "25" },
    { q: "Graph with V=6, E=8 as adjacency list. Total space order (V + 2E for undirected)?", a: "22" },
    { q: "Given edges A-B, B-C, A-C, how many rows in the adjacency list?", a: "3" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));

  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        Work each out on paper, then reveal. Space accounting matters in interviews.
      </Callout>
      {problems.map((p, i) => {
        const correct = guesses[i].trim() === p.a;
        return (
          <Card key={i}>
            <div style={{ fontSize: "0.9rem", color: C.text, marginBottom: 10, lineHeight: 1.5 }}>
              <strong style={{ color: A }}>#{i + 1}.</strong> {p.q}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              <input
                type="text" value={guesses[i]}
                onChange={(e) => { const v = [...guesses]; v[i] = e.target.value; setGuesses(v); }}
                placeholder="your answer"
                style={{
                  width: 100, padding: "7px 10px", borderRadius: 8,
                  border: `1px solid ${C.border}`, fontFamily: C.mono, fontSize: "0.85rem",
                  outline: "none", background: C.bg, color: C.text,
                }}
              />
              <button
                onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
                style={{
                  padding: "6px 14px", borderRadius: 8, fontSize: "0.78rem", fontWeight: 700,
                  border: `1px solid ${C.border}`, background: C.bg, color: C.textSecondary,
                  cursor: "pointer", fontFamily: C.heading,
                }}
              >
                Reveal
              </button>
              {shown[i] && (
                <span style={{
                  fontSize: "0.82rem", fontWeight: 700,
                  color: correct ? C.successDark : C.dangerDark,
                  padding: "4px 12px", borderRadius: 8,
                  background: correct ? `${C.success}14` : `${C.danger}14`,
                  fontFamily: C.heading,
                }}>
                  {correct ? `✓ Correct - ${p.a}` : `Answer: ${p.a}`}
                </span>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Insight tab                                                        */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>Why representation matters</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          BFS/DFS on adjacency list run in O(V+E). On adjacency matrix they run in O(V²) regardless of how few edges exist - the matrix forces you to scan a whole row for each vertex. For a social graph with a billion users and only a few hundred friends each, that&apos;s the difference between seconds and years.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview-style quick reference</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>Matrix: space O(V²), add-edge O(1), has-edge O(1), neighbors O(V).</li>
          <li>List: space O(V+E), add-edge O(1), has-edge O(deg), neighbors O(deg).</li>
          <li>For undirected graphs each edge appears twice in the list.</li>
          <li>Handshaking lemma: Σ deg(v) = 2|E|.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                           */
/* ------------------------------------------------------------------ */

export default function DSA_L4_GraphRepresentationActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Which representation uses Θ(V²) space regardless of the number of edges?",
      options: ["Adjacency list", "Edge list", "Adjacency matrix", "Incidence matrix"],
      correctIndex: 2,
      explanation: "Adjacency matrix is fixed V×V cells. Even a graph with 0 edges still uses V² cells.",
    },
    {
      question: "For a sparse graph with V=10⁴ and E=2·10⁴, which representation is more memory-efficient?",
      options: ["Matrix (faster anyway)", "List - O(V+E) ≈ 5·10⁴ vs 10⁸ cells", "They are equal", "Neither - use hash"],
      correctIndex: 1,
      explanation: "Matrix would need 10⁸ cells. List uses O(V+E) ≈ 3·10⁴ entries. Huge difference for sparse graphs.",
    },
    {
      question: "In an undirected adjacency list, how many total entries across all lists does an edge {u,v} create?",
      options: ["1", "2", "V", "deg(u)"],
      correctIndex: 1,
      explanation: "The edge appears in u's list (pointing to v) and in v's list (pointing to u). Hence Σ deg = 2|E|.",
    },
    {
      question: "Which operation is O(1) on an adjacency matrix but O(deg(v)) on an adjacency list?",
      options: ["Iterate all neighbors of v", "Check whether edge (u,v) exists", "Add a new vertex", "Count total edges"],
      correctIndex: 1,
      explanation: "M[u][v] is a direct lookup - constant time. In a list you must scan u's neighbor list to confirm v is there.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Graph Representation"
      level={4}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High - every graph problem starts here"
      nextLessonHint="Breadth-First Search (BFS)"
    />
  );
}
