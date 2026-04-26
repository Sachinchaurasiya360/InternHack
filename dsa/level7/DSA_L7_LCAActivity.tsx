"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer, TreeCanvas,
} from "@/components/engineering/algo";
import type { TreeNodeData, CellState } from "@/components/engineering/algo";

/* ------------------------------------------------------------------ */
/*  Tree model                                                          */
/* ------------------------------------------------------------------ */

interface TNode {
  id: string;
  parent?: string;
  children: string[];
  depth: number;
}

/* Parse a tree as a list of edges "P>C, P>C2, ..." with the first ID seen as root */
function parseTree(input: string): { rootId: string; nodes: Record<string, TNode> } | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const nodes: Record<string, TNode> = {};
  let root: string | undefined;
  for (const tok of tokens) {
    const m = tok.match(/^([A-Za-z0-9_]+)>([A-Za-z0-9_]+)$/);
    if (!m) return null;
    const [, p, c] = m;
    if (root === undefined) root = p;
    if (!nodes[p]) nodes[p] = { id: p, children: [], depth: 0 };
    if (!nodes[c]) nodes[c] = { id: c, children: [], depth: 0 };
    if (nodes[c].parent !== undefined) return null;     // a child can't have two parents
    nodes[c].parent = p;
    nodes[p].children.push(c);
  }
  if (!root) return null;
  // BFS depth assignment from the root
  const Q = [root];
  nodes[root].depth = 0;
  while (Q.length) {
    const u = Q.shift()!;
    for (const c of nodes[u].children) {
      nodes[c].depth = nodes[u].depth + 1;
      Q.push(c);
    }
  }
  return { rootId: root, nodes };
}

/* ------------------------------------------------------------------ */
/*  Binary lifting precompute                                           */
/* ------------------------------------------------------------------ */

interface LiftTable {
  up: Record<string, (string | undefined)[]>;  // up[v][k] = 2^k-th ancestor of v
  LOG: number;
}

function buildLifting(rootId: string, nodes: Record<string, TNode>): LiftTable {
  const ids = Object.keys(nodes);
  let maxDepth = 0;
  for (const id of ids) maxDepth = Math.max(maxDepth, nodes[id].depth);
  const LOG = Math.max(1, Math.ceil(Math.log2(maxDepth + 1)));
  const up: Record<string, (string | undefined)[]> = {};
  // BFS so parents are processed first
  const Q = [rootId];
  while (Q.length) {
    const u = Q.shift()!;
    up[u] = new Array(LOG).fill(undefined);
    up[u][0] = nodes[u].parent;
    for (let k = 1; k < LOG; k++) {
      const mid = up[u][k - 1];
      up[u][k] = mid !== undefined ? up[mid]?.[k - 1] : undefined;
    }
    for (const c of nodes[u].children) Q.push(c);
  }
  return { up, LOG };
}

/* ------------------------------------------------------------------ */
/*  LCA query frame builder                                             */
/* ------------------------------------------------------------------ */

interface LCAFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  uId: string;
  vId: string;
  uHighlight?: string;        // currently highlighted ancestor of u
  vHighlight?: string;
  jump?: { from: string; to: string; k: number };
  table: LiftTable;
  highlightCell?: { node: string; k: number };
  result?: string;
  flashKey?: string;
}

const PSEUDO_LCA = [
  "# Binary lifting LCA query",
  "function LCA(u, v):",
  "  # 1. Lift the deeper one up to v's depth",
  "  if depth[u] < depth[v]: swap(u, v)",
  "  diff ← depth[u] − depth[v]",
  "  for k in 0..LOG:",
  "    if (diff >> k) & 1: u ← up[u][k]",
  "  if u == v: return u",
  "  # 2. Lift both together as far as possible WITHOUT meeting",
  "  for k from LOG down to 0:",
  "    if up[u][k] ≠ up[v][k]:",
  "      u ← up[u][k]; v ← up[v][k]",
  "  # 3. The parent is the LCA",
  "  return up[u][0]",
];

function buildLCAQueryFrames(
  rootId: string,
  nodes: Record<string, TNode>,
  table: LiftTable,
  uOrig: string,
  vOrig: string,
): LCAFrame[] {
  const frames: LCAFrame[] = [];
  if (!nodes[uOrig] || !nodes[vOrig]) {
    frames.push({
      line: 0, vars: { error: "u or v missing" }, message: `Vertex not in tree.`,
      uId: uOrig, vId: vOrig, table,
    });
    return frames;
  }
  let u = uOrig, v = vOrig;
  const snap = (line: number, message: string, vars: Record<string, string | number | undefined> = {}, extra: Partial<LCAFrame> = {}) => {
    frames.push({
      line, vars, message,
      uId: u, vId: v, table,
      ...extra,
    });
  };
  snap(0, `Query LCA(${u}, ${v}). Depths: depth[${u}] = ${nodes[u].depth}, depth[${v}] = ${nodes[v].depth}.`,
    { u, v, "depth[u]": nodes[u].depth, "depth[v]": nodes[v].depth });

  if (nodes[u].depth < nodes[v].depth) {
    [u, v] = [v, u];
    snap(2, `Swap so u (deeper) = ${u}, v = ${v}.`, { u, v }, { flashKey: "u" });
  }
  const diff = nodes[u].depth - nodes[v].depth;
  snap(3, `diff = depth[${u}] − depth[${v}] = ${diff}. Bits of ${diff} = ${diff.toString(2)}.`, { diff, bits: diff.toString(2) }, { flashKey: "diff" });

  for (let k = 0; k < table.LOG; k++) {
    if ((diff >> k) & 1) {
      const before = u;
      const target = table.up[u]?.[k];
      snap(5, `Bit k=${k} is set → jump 2^${k} = ${1 << k} levels: ${u} → ${target ?? "?"}.`,
        { k, "2^k": 1 << k, "up[u][k]": target ?? "−" },
        { highlightCell: { node: u, k }, jump: { from: before, to: target ?? before, k }, uHighlight: target });
      if (target) u = target;
    }
  }

  if (u === v) {
    snap(6, `After lift, u == v == ${u} → that's the LCA.`, { lca: u }, { result: u, uHighlight: u, vHighlight: v });
    return frames;
  }

  snap(6, `After lift, u = ${u}, v = ${v} (same depth, not equal yet).`, { u, v });

  for (let k = table.LOG - 1; k >= 0; k--) {
    const upU = table.up[u]?.[k];
    const upV = table.up[v]?.[k];
    snap(9, `k=${k}: up[${u}][${k}] = ${upU ?? "−"}, up[${v}][${k}] = ${upV ?? "−"}.`,
      { k, "up[u]": upU ?? "−", "up[v]": upV ?? "−" },
      { highlightCell: { node: u, k }, uHighlight: u, vHighlight: v });
    if (upU !== undefined && upV !== undefined && upU !== upV) {
      u = upU; v = upV;
      snap(11, `Different ancestors → jump both: u → ${u}, v → ${v}.`, { u, v }, { uHighlight: u, vHighlight: v });
    } else {
      snap(9, `Same (or undefined) ancestors at k=${k} → skip (we'd overshoot).`);
    }
  }

  const lca = table.up[u]?.[0];
  snap(13, `Stop. LCA = parent of u = up[${u}][0] = ${lca ?? "−"}.`, { lca: lca ?? "−" }, { result: lca, flashKey: "lca", uHighlight: lca, vHighlight: lca });
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Visualization                                                       */
/* ------------------------------------------------------------------ */

function treeToTreeData(rootId: string, nodes: Record<string, TNode>, frame: LCAFrame): { data: Record<string, TreeNodeData>; root: string } {
  // Convert to TreeCanvas format - it wants left/right, but we have arbitrary children.
  // Use first child as left, second as right. (Limitation of the primitive — tolerable for small demos.)
  const data: Record<string, TreeNodeData> = {};
  for (const id in nodes) {
    let state: CellState | undefined;
    if (id === frame.result) state = "match";
    else if (id === frame.uHighlight) state = "active";
    else if (id === frame.vHighlight) state = "frontier";
    else if (id === frame.uId) state = "active";
    else if (id === frame.vId) state = "frontier";
    data[id] = {
      id, value: id,
      left: nodes[id].children[0],
      right: nodes[id].children[1],
      state,
      meta: { d: nodes[id].depth },
    };
  }
  return { data, root: rootId };
}

function VisualizeTab() {
  const [treeStr, setTreeStr] = useState("A>B, A>C, B>D, B>E, C>F, C>G, E>H, E>I, G>J");
  const [u, setU] = useState("H");
  const [v, setV] = useState("J");
  const parsed = useMemo(() => parseTree(treeStr), [treeStr]);
  const ids = parsed ? Object.keys(parsed.nodes) : [];
  const table = useMemo(() => parsed ? buildLifting(parsed.rootId, parsed.nodes) : null, [parsed]);
  const frames = useMemo(() => {
    if (!parsed || !table) return [{ line: 0, vars: {}, message: "Parse a valid tree first.", uId: "", vId: "", table: { up: {}, LOG: 1 } }] as LCAFrame[];
    return buildLCAQueryFrames(parsed.rootId, parsed.nodes, table, u, v);
  }, [parsed, table, u, v]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  const treeData = parsed ? treeToTreeData(parsed.rootId, parsed.nodes, frame) : null;

  return (
    <AlgoCanvas
      title={`LCA via Binary Lifting — query LCA(${u}, ${v})`}
      player={player}
      input={
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-end" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <InputEditor
              label="Tree edges (Parent>Child)"
              value={treeStr}
              helper="Edges listed as parent>child. The first parent seen becomes root. Each node uses ≤ 2 children for visualization."
              presets={[
                { label: "Balanced", value: "A>B, A>C, B>D, B>E, C>F, C>G, E>H, E>I, G>J" },
                { label: "Skewed (path)", value: "A>B, B>C, C>D, D>E, E>F" },
                { label: "Wide", value: "A>B, A>C, A>D, B>E, B>F, C>G" },
                { label: "Deep tree", value: "R>A, A>B, B>C, C>D, D>E, R>X, X>Y, Y>Z" },
              ]}
              onApply={(s) => { if (parseTree(s)) setTreeStr(s); }}
            />
          </div>
          <div>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--eng-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: 4 }}>u</span>
            <select value={u} onChange={(e) => setU(e.target.value)} style={selectStyle}>
              {ids.map((id) => <option key={id} value={id}>{id}</option>)}
            </select>
          </div>
          <div>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--eng-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: 4 }}>v</span>
            <select value={v} onChange={(e) => setV(e.target.value)} style={selectStyle}>
              {ids.map((id) => <option key={id} value={id}>{id}</option>)}
            </select>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_LCA} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [frame.flashKey] : []} />}
      legend={
        <div style={{ display: "flex", gap: 14, fontSize: "0.78rem" }}>
          <span><b style={{ color: "#3b82f6" }}>blue</b> = u position (deeper)</span>
          <span><b style={{ color: "#06b6d4" }}>cyan</b> = v position</span>
          <span><b style={{ color: "#10b981" }}>green</b> = LCA (when found)</span>
        </div>
      }
    >
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 240px", gap: 14, alignItems: "start" }}>
        {treeData ? (
          <TreeCanvas nodes={treeData.data} root={treeData.root} width={580} height={340} />
        ) : (
          <div style={{ padding: 20, color: "var(--eng-text-muted)" }}>Parse error.</div>
        )}
        <BinaryLiftTable frame={frame} ids={ids} />
      </div>
    </AlgoCanvas>
  );
}

const selectStyle: React.CSSProperties = {
  padding: "7px 10px", borderRadius: 6, border: "1px solid var(--eng-border)",
  fontFamily: '"SF Mono", monospace', fontSize: "0.82rem",
  background: "var(--eng-surface)", color: "var(--eng-text)",
};

function BinaryLiftTable({ frame, ids }: { frame: LCAFrame; ids: string[] }) {
  const { up, LOG } = frame.table;
  return (
    <div className="card-eng" style={{ padding: 10, fontFamily: "var(--eng-font)" }}>
      <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--eng-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
        Binary lift table (up[v][k] = 2^k-th ancestor)
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.72rem", fontFamily: '"SF Mono", monospace' }}>
          <thead>
            <tr>
              <th style={{ padding: "3px 6px", textAlign: "left", color: "var(--eng-text-muted)", fontWeight: 700 }}>v</th>
              {Array.from({ length: LOG }, (_, k) => (
                <th key={k} style={{ padding: "3px 6px", textAlign: "center", color: "var(--eng-text-muted)", fontWeight: 700 }}>
                  k={k}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ids.map((id) => (
              <tr key={id} style={{ borderTop: "1px solid var(--eng-border)" }}>
                <td style={{ padding: "3px 6px", fontWeight: 700, color: "var(--eng-text)" }}>{id}</td>
                {Array.from({ length: LOG }, (_, k) => {
                  const cell = up[id]?.[k];
                  const isHL = frame.highlightCell?.node === id && frame.highlightCell.k === k;
                  return (
                    <td key={k} style={{
                      padding: "3px 6px", textAlign: "center",
                      background: isHL ? "rgba(59,130,246,0.18)" : "transparent",
                      color: cell === undefined ? "var(--eng-text-muted)" : "var(--eng-text)",
                      borderRadius: 3,
                    }}>
                      {cell ?? "−"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: 8, paddingTop: 8, borderTop: "1px dashed var(--eng-border)", fontSize: "0.72rem", color: "var(--eng-text-muted)", lineHeight: 1.5 }}>
        Build: <b>O(n log n)</b> time/space. Query: <b>O(log n)</b>.
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn / Try / Insight                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "What is LCA?", b: "The Lowest Common Ancestor of nodes u and v in a rooted tree is the deepest node that is an ancestor of both. Equivalent: the unique node where the paths from root-to-u and root-to-v diverge. Show up everywhere: tree distance, range queries on Euler tour, network routing, version control merge bases." },
    { t: "Why binary lifting?", b: "Naive: walk u up one step at a time until depths match, then walk both up together. O(n) per query. Binary lifting: precompute, for each node v and each k, the 2^k-th ancestor of v. Then any ancestor distance d can be expressed as d = sum of powers of 2 (binary representation), so we jump in O(log n) per query." },
    { t: "Precompute (O(n log n))", b: "up[v][0] = parent[v]. up[v][k] = up[up[v][k−1]][k−1] (the 2^k-th ancestor = the 2^(k−1)-th ancestor of the 2^(k−1)-th ancestor). LOG = ⌈log₂ n⌉ levels. Build via BFS so parent-cells exist when child-cells need them." },
    { t: "Query: 2 phases", b: "(1) Lift the deeper node up to match the other's depth — set bits of the depth difference tell you which 2^k jumps to take. (2) Lift BOTH nodes up in parallel as far as possible WITHOUT meeting. The single step further is the LCA. Both phases ≤ O(log n) jumps." },
    { t: "Why 'as far as possible without meeting'?", b: "If you lift both to a common ancestor too eagerly, you might overshoot the LCA. Instead, scan k = LOG-1 down to 0; whenever up[u][k] ≠ up[v][k], jump (we know the LCA is still strictly above). When you can't jump anywhere without meeting, LCA = parent of where you stopped." },
    { t: "Distance via LCA", b: "dist(u, v) = depth[u] + depth[v] − 2·depth[LCA(u,v)]. With LCA in O(log n) and depths precomputed, you get tree-distance queries in O(log n). Foundation for tree-based DP, kth-ancestor queries, and centroid-decomposition-style techniques." },
  ];
  return (
    <div style={{ fontFamily: "var(--eng-font)", display: "flex", flexDirection: "column", gap: 14 }}>
      <div className="card-eng" style={{ padding: 18 }}>
        <h3 style={{ fontWeight: 700, fontSize: "1.05rem", margin: "0 0 6px" }}>Mental model</h3>
        <p style={{ fontSize: "0.9rem", color: "var(--eng-text-muted)", lineHeight: 1.6, margin: 0 }}>
          Climbing a tree one step at a time is slow. Binary lifting precomputes &quot;teleporters&quot;: from any node you can jump 1, 2, 4, 8, … steps up in O(1). Any height difference is a sum of these powers — so any ancestor query takes only O(log n) jumps. The same trick generalizes (&quot;sparse table&quot;) to range-min/max queries on arrays.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10 }}>
        {cards.map((s, i) => (
          <div key={i} className="card-eng" style={{ padding: 14 }}>
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--eng-primary)", marginBottom: 4 }}>0{i + 1}</div>
            <div style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: 4 }}>{s.t}</div>
            <div style={{ fontSize: "0.82rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{s.b}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TryTab() {
  const probs = [
    { q: "On the Balanced preset, LCA(H, J) = ?", a: "A" },
    { q: "On the Balanced preset, LCA(D, I) = ?", a: "B" },
    { q: "On the Skewed preset (A>B>C>D>E>F), LCA(C, F) = ?", a: "C" },
    { q: "Tree distance formula given depths and LCA?", a: "depth[u] + depth[v] − 2·depth[LCA]" },
  ];
  const [g, setG] = useState<(string | null)[]>(probs.map(() => null));
  const [s, setS] = useState<boolean[]>(probs.map(() => false));
  return (
    <div style={{ fontFamily: "var(--eng-font)", display: "flex", flexDirection: "column", gap: 12 }}>
      <div className="info-eng" style={{ fontSize: "0.85rem" }}>Verify each in the visualizer.</div>
      {probs.map((p, i) => (
        <div key={i} className="card-eng" style={{ padding: 14 }}>
          <div style={{ fontSize: "0.9rem", marginBottom: 8 }}><b style={{ color: "var(--eng-text-muted)" }}>#{i + 1}</b> {p.q}</div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <input value={g[i] ?? ""} onChange={(e) => { const v = [...g]; v[i] = e.target.value; setG(v); }}
              placeholder="answer"
              style={{ padding: "6px 10px", border: "1px solid var(--eng-border)", borderRadius: 6, fontFamily: "monospace", fontSize: "0.85rem", minWidth: 240 }} />
            <button className="btn-eng-outline" style={{ fontSize: "0.78rem", padding: "5px 12px" }}
              onClick={() => { const v = [...s]; v[i] = true; setS(v); }}>Reveal</button>
            {s[i] && (
              <span style={{
                fontSize: "0.82rem", fontWeight: 700, padding: "3px 10px", borderRadius: 6,
                color: "var(--eng-success)", background: "rgba(16,185,129,0.1)",
              }}>
                {p.a}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function InsightTab() {
  return (
    <div style={{ fontFamily: "var(--eng-font)", display: "flex", flexDirection: "column", gap: 12 }}>
      <div className="card-eng" style={{ padding: 16 }}>
        <h3 style={{ fontWeight: 700, fontSize: "1rem", margin: "0 0 6px" }}>Three classical LCA techniques — pick by need</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
          <thead>
            <tr style={{ background: "var(--eng-bg)" }}>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: "var(--eng-text-muted)", fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: "1px solid var(--eng-border)" }}>Method</th>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: "var(--eng-text-muted)", fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: "1px solid var(--eng-border)" }}>Precompute</th>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: "var(--eng-text-muted)", fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: "1px solid var(--eng-border)" }}>Query</th>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: "var(--eng-text-muted)", fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: "1px solid var(--eng-border)" }}>Best for</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Binary lifting", "O(n log n)", "O(log n)", "Online queries; also gives kth-ancestor for free"],
              ["Euler tour + RMQ (sparse table)", "O(n log n)", "O(1)", "Tons of online queries; need fast point-LCA"],
              ["Tarjan offline", "O(n α(n))", "O(α(n)) amortized", "All queries known up front; uses DSU"],
            ].map((r, i) => (
              <tr key={i} style={{ borderTop: "1px solid var(--eng-border)" }}>
                <td style={{ padding: "5px 10px", fontWeight: 600, color: "var(--eng-text)" }}>{r[0]}</td>
                <td style={{ padding: "5px 10px", color: "var(--eng-primary)", fontFamily: '"SF Mono", monospace' }}>{r[1]}</td>
                <td style={{ padding: "5px 10px", color: "var(--eng-success)", fontFamily: '"SF Mono", monospace', fontWeight: 700 }}>{r[2]}</td>
                <td style={{ padding: "5px 10px", color: "var(--eng-text-muted)" }}>{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-eng" style={{ padding: 16 }}>
        <h3 style={{ fontWeight: 700, fontSize: "1rem", margin: "0 0 6px" }}>kth-ancestor for free</h3>
        <p style={{ fontSize: "0.88rem", color: "var(--eng-text-muted)", lineHeight: 1.6, margin: 0 }}>
          The same lift table gives <code>kthAncestor(v, k)</code> in O(log n): for each set bit of k, jump 2^bit levels using <code>up[v][bit]</code>. This is exactly Phase 1 of the LCA query, repackaged. LeetCode 1483 (Kth Ancestor of a Tree Node) is the canonical interview problem.
        </p>
      </div>
      <div className="card-eng" style={{ padding: 16 }}>
        <h3 style={{ fontWeight: 700, fontSize: "1rem", margin: "0 0 6px" }}>Where this lands</h3>
        <ul style={{ fontSize: "0.86rem", color: "var(--eng-text-muted)", lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
          <li><strong>Tree distance queries</strong>: dist(u, v) = depth[u] + depth[v] − 2·depth[LCA].</li>
          <li><strong>Path sum / max on tree</strong>: precompute prefix-from-root, then path(u, v) = sum[u] + sum[v] − 2·sum[LCA] + value[LCA].</li>
          <li><strong>Heavy-Light Decomposition</strong>: the natural index for path queries to segment trees.</li>
          <li><strong>Git merge base</strong>: the LCA of two commit nodes in the DAG (Git uses a different algorithm — bidirectional BFS — because the commit graph is a DAG, not a tree).</li>
          <li><strong>Online phylogenetic tree queries</strong>: &quot;most recent common ancestor of these two species&quot;.</li>
        </ul>
      </div>
      <div className="card-eng" style={{ padding: 16 }}>
        <h3 style={{ fontWeight: 700, fontSize: "1rem", margin: "0 0 6px" }}>Sparse table — same trick on arrays</h3>
        <p style={{ fontSize: "0.88rem", color: "var(--eng-text-muted)", lineHeight: 1.6, margin: 0 }}>
          Binary lifting&apos;s array cousin is the <strong>sparse table</strong>: for an immutable array, precompute <code>st[i][k]</code> = min of A[i..i+2^k − 1]. Range-min query [l, r] in O(1) by overlapping two power-of-two ranges. O(n log n) precompute, O(1) per query — the standard for read-only RMQ. Used in the Euler-tour LCA reduction.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                            */
/* ------------------------------------------------------------------ */

export default function DSA_L7_LCAActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "Time and space for the binary-lifting LCA precompute?",
      options: ["O(n) / O(n)", "O(n log n) / O(n log n)", "O(n²) / O(n)", "O(n α(n)) / O(n)"],
      correctIndex: 1,
      explanation: "up[v][k] is filled for every node × every level (LOG = ⌈log₂ n⌉). Both time and space are O(n log n).",
    },
    {
      question: "How many jumps does an LCA query take in the worst case?",
      options: ["O(1)", "O(log n)", "O(√n)", "O(n)"],
      correctIndex: 1,
      explanation: "Phase 1 (depth match) is at most LOG jumps; Phase 2 (parallel lift without meeting) is also at most LOG jumps. Total ≤ 2·log₂ n.",
    },
    {
      question: "In Phase 2, why do we lift BOTH u and v together as far as possible WITHOUT meeting?",
      options: [
        "It's faster than other orderings",
        "If we ever met above the true LCA we'd overshoot — by stopping just before meeting, the parent of where we stopped is exactly the LCA",
        "It saves memory",
        "It's required by the binary-lifting invariant",
      ],
      correctIndex: 1,
      explanation: "Greedily jumping until they meet could land us at a strict ancestor of the LCA (overshoot). Jumping while still distinct, then taking parent of the stop position, hits the LCA exactly.",
    },
    {
      question: "Tree distance formula using LCA?",
      options: [
        "depth[u] − depth[v]",
        "depth[u] + depth[v]",
        "depth[u] + depth[v] − 2·depth[LCA(u, v)]",
        "max(depth[u], depth[v]) − depth[LCA]",
      ],
      correctIndex: 2,
      explanation: "u-to-LCA edges + v-to-LCA edges = (depth[u] − depth[LCA]) + (depth[v] − depth[LCA]) = depth[u] + depth[v] − 2·depth[LCA].",
    },
    {
      question: "What's the array analogue of binary lifting for range-min queries?",
      options: ["Fenwick tree", "Segment tree", "Sparse table", "Treap"],
      correctIndex: 2,
      explanation: "Sparse table: st[i][k] = min of A[i..i+2^k−1]. O(n log n) precompute, O(1) query (overlap two power-of-two ranges). Same precompute pattern as binary lifting's up[v][k].",
    },
  ];
  return (
    <EngineeringLessonShell
      title="LCA via Binary Lifting"
      level={7}
      lessonNumber={7}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High - LC1483 (Kth Ancestor), tree-distance queries, HLD foundation"
      nextLessonHint="Advanced Data Structures"
    />
  );
}
