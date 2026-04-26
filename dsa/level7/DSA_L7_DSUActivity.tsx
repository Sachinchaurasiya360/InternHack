"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer, TreeCanvas,
} from "@/components/engineering/algo";
import type { TreeNodeData, CellState } from "@/components/engineering/algo";
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
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  parent: number[];
  rank: number[];
  components: number;
  highlighted: number[];           // nodes to mark
  compressed: number[];             // nodes whose parent was just re-pointed to root
  highlightKey?: string;
}

/* ------------------------------------------------------------------ */
/*  DSU simulator                                                      */
/* ------------------------------------------------------------------ */

const PSEUDO = [
  "function find(x):",
  "  if parent[x] ≠ x:",
  "    parent[x] ← find(parent[x])   # path compression",
  "  return parent[x]",
  "",
  "function union(x, y):",
  "  rx ← find(x); ry ← find(y)",
  "  if rx = ry: return",
  "  if rank[rx] < rank[ry]: swap(rx, ry)",
  "  parent[ry] ← rx",
  "  if rank[rx] = rank[ry]: rank[rx] += 1",
  "  components -= 1",
];

function cloneArr(a: number[]): number[] { return a.slice(); }

function traceFind(parent: number[], x: number, frames: Frame[], rank: number[], components: number): number {
  // Collect path
  const path: number[] = [];
  let cur = x;
  while (parent[cur] !== cur) { path.push(cur); cur = parent[cur]; }
  const root = cur;
  path.push(root);
  // Highlight each step along the path
  frames.push({
    line: 0,
    vars: { x, path: path.join("→"), root, components },
    message: `find(${x}) - walk the parent chain to the root.`,
    parent: cloneArr(parent), rank: cloneArr(rank), components,
    highlighted: path.slice(),
    compressed: [],
  });
  // path compression: everyone except the root re-points to root
  const toCompress: number[] = [];
  for (let i = 0; i < path.length - 1; i++) {
    if (parent[path[i]] !== root) toCompress.push(path[i]);
    parent[path[i]] = root;
  }
  if (toCompress.length > 0) {
    frames.push({
      line: 2,
      vars: { x, root, components },
      message: `Path compression - re-attach ${toCompress.join(", ")} directly to root ${root}.`,
      parent: cloneArr(parent), rank: cloneArr(rank), components,
      highlighted: [root],
      compressed: toCompress,
    });
  }
  return root;
}

function buildFrames(n: number, ops: { kind: "union" | "find"; a: number; b?: number }[]): Frame[] {
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = new Array(n).fill(0);
  let components = n;
  const frames: Frame[] = [];

  frames.push({
    line: 0, vars: { n, components },
    message: `Start - ${n} isolated nodes. components = ${n}.`,
    parent: cloneArr(parent), rank: cloneArr(rank), components,
    highlighted: [], compressed: [],
  });

  for (const op of ops) {
    if (op.kind === "find") {
      if (op.a < 0 || op.a >= n) continue;
      traceFind(parent, op.a, frames, rank, components);
      continue;
    }
    // union
    const a = op.a, b = op.b!;
    if (a < 0 || a >= n || b < 0 || b >= n) continue;
    frames.push({
      line: 5, vars: { x: a, y: b, components },
      message: `union(${a}, ${b}) - find roots of each.`,
      parent: cloneArr(parent), rank: cloneArr(rank), components,
      highlighted: [a, b], compressed: [],
    });
    const rx0 = traceFind(parent, a, frames, rank, components);
    const ry0 = traceFind(parent, b, frames, rank, components);
    let rx = rx0, ry = ry0;
    if (rx === ry) {
      frames.push({
        line: 7, vars: { x: a, y: b, rx, ry, components },
        message: `Roots identical (${rx}) - already in same component.`,
        parent: cloneArr(parent), rank: cloneArr(rank), components,
        highlighted: [rx], compressed: [],
      });
      continue;
    }
    if (rank[rx] < rank[ry]) { const t = rx; rx = ry; ry = t; }
    frames.push({
      line: 8, vars: { rx, ry, "rank[rx]": rank[rx], "rank[ry]": rank[ry], components },
      message: `Attach smaller tree (root ${ry}, rank ${rank[ry]}) under larger (root ${rx}, rank ${rank[rx]}).`,
      parent: cloneArr(parent), rank: cloneArr(rank), components,
      highlighted: [rx, ry], compressed: [],
    });
    parent[ry] = rx;
    if (rank[rx] === rank[ry]) rank[rx] += 1;
    components -= 1;
    frames.push({
      line: 11, vars: { rx, ry, components },
      message: `Merged. components = ${components}.`,
      parent: cloneArr(parent), rank: cloneArr(rank), components,
      highlighted: [rx], compressed: [], highlightKey: "components",
    });
  }

  frames.push({
    line: 0, vars: { components },
    message: `Done - ${components} component(s) remain.`,
    parent: cloneArr(parent), rank: cloneArr(rank), components,
    highlighted: [], compressed: [],
  });
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Forest renderer (multi-root trees)                                 */
/* ------------------------------------------------------------------ */

const ROOT_COLORS = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#06b6d4", "#f97316"];

function Forest({ frame }: { frame: Frame }) {
  const { parent, rank, highlighted, compressed } = frame;
  const n = parent.length;

  // Group by root
  const roots: number[] = [];
  for (let i = 0; i < n; i++) if (parent[i] === i) roots.push(i);
  const colorByRoot: Record<number, string> = {};
  roots.forEach((r, i) => (colorByRoot[r] = ROOT_COLORS[i % ROOT_COLORS.length]));

  // Build TreeCanvas inputs (each root becomes its own tree - render side by side)
  // Simpler: compute x positions per root and draw inline using SVG-style flex of TreeCanvas.
  // Group children of each node
  const children: Record<number, number[]> = {};
  for (let i = 0; i < n; i++) (children[i] ||= []);
  for (let i = 0; i < n; i++) {
    if (parent[i] !== i) (children[parent[i]] ||= []).push(i);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
        {roots.map((r) => {
          // Build TreeNode map (using left/right approximation: fan out children)
          const nodes: Record<string, TreeNodeData> = {};
          function addSubtree(id: number) {
            const state: CellState | undefined =
              compressed.includes(id) ? "path" :
              highlighted.includes(id) ? "active" :
              undefined;
            const kids = children[id] ?? [];
            nodes[String(id)] = {
              id: String(id),
              value: id,
              left: kids[0] !== undefined ? String(kids[0]) : undefined,
              right: kids[1] !== undefined ? String(kids[1]) : undefined,
              state,
              meta: id === r ? { rank: rank[id] } : undefined,
            };
            kids.slice(0, 2).forEach(addSubtree);
            // extra children chain off the right-most (simple approximation)
            if (kids.length > 2) {
              let prev = String(kids[1]);
              for (let k = 2; k < kids.length; k++) {
                const ch = kids[k];
                if (nodes[prev]) nodes[prev].right = String(ch);
                addSubtree(ch);
                prev = String(ch);
              }
            } else {
              kids.slice(0, 2).forEach(addSubtree);
            }
          }
          addSubtree(r);
          const size = Object.keys(nodes).length;
          const width = Math.max(140, Math.min(260, 70 * size));
          return (
            <div key={r} style={{
              border: `2px solid ${colorByRoot[r]}`,
              borderRadius: 10,
              background: `${colorByRoot[r]}11`,
              padding: "6px 8px 4px",
              transition: "all 0.3s ease",
            }}>
              <div style={{
                fontSize: "0.68rem", fontWeight: 700,
                color: colorByRoot[r], textAlign: "center",
                textTransform: "uppercase", letterSpacing: "0.05em",
                marginBottom: 2,
                fontFamily: C.heading,
              }}>
                root {r}
              </div>
              <TreeCanvas nodes={nodes} root={String(r)} width={width} height={Math.max(140, 80 + 50 * Math.log2(size + 1))} nodeRadius={16} />
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 10, fontSize: "0.78rem" }}>
        <span style={{
          fontWeight: 700, padding: "4px 12px", borderRadius: 6,
          background: `${A}10`, color: A,
          fontFamily: C.heading,
        }}>
          components: {frame.components}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Input parsing                                                      */
/* ------------------------------------------------------------------ */

function parseOps(s: string): { n: number; ops: { kind: "union" | "find"; a: number; b?: number }[] } | null {
  const lines = s.split(/[;\n]+/).map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return null;
  // first line is n
  const n = Number(lines[0]);
  if (!Number.isFinite(n) || n < 1 || n > 12) return null;
  const ops: { kind: "union" | "find"; a: number; b?: number }[] = [];
  for (let i = 1; i < lines.length; i++) {
    const ln = lines[i].toLowerCase();
    const mu = ln.match(/^union\s*\(?\s*(\d+)\s*[,\s]\s*(\d+)\s*\)?$/);
    const mf = ln.match(/^find\s*\(?\s*(\d+)\s*\)?$/);
    if (mu) ops.push({ kind: "union", a: Number(mu[1]), b: Number(mu[2]) });
    else if (mf) ops.push({ kind: "find", a: Number(mf[1]) });
    else return null;
  }
  return { n, ops };
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                          */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [src, setSrc] = useState("7\nunion(0, 1)\nunion(2, 3)\nunion(0, 2)\nunion(4, 5)\nunion(6, 4)\nfind(3)\nfind(6)");
  const parsed = parseOps(src);
  const { n, ops } = parsed ?? { n: 6, ops: [] };
  const frames = useMemo(() => buildFrames(n, ops), [n, ops]);
  const player = useStepPlayer(frames);
  const frame = player.current!;

  return (
    <AlgoCanvas
      title="Disjoint Set Union - Union by Rank + Path Compression"
      player={player}
      input={
        <InputEditor
          label="Operations (first line: n; then union/find)"
          value={src}
          placeholder="n\nunion(a,b)\nfind(x)"
          helper="Semicolon or newline separated. 1 ≤ n ≤ 12."
          presets={[
            { label: "Chain", value: "6\nunion(0,1)\nunion(1,2)\nunion(2,3)\nunion(3,4)\nfind(0)" },
            { label: "Compress", value: "5\nunion(0,1)\nunion(2,3)\nunion(1,3)\nfind(0)" },
            { label: "Disjoint", value: "8\nunion(0,1)\nunion(2,3)\nunion(4,5)\nunion(6,7)" },
            { label: "Same root", value: "4\nunion(0,1)\nunion(1,2)\nunion(0,2)" },
          ]}
          onApply={(v) => { if (parseOps(v)) setSrc(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.highlightKey ? [frame.highlightKey] : []} />}
      legend={
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <span><b style={{ color: "#3b82f6" }}>active</b> - node being visited</span>
          <span><b style={{ color: "#fbbf24" }}>path</b> - just re-pointed (path compression)</span>
          <span>colored border = distinct component</span>
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <Forest frame={frame} />
        <Callout accent={A}>{frame.message}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "The problem", body: "Given n items, support two operations fast: union(x, y) merges the groups of x and y; find(x) returns a canonical representative (root) of x's group. Two elements are in the same set iff find(x) = find(y)." },
    { title: "Trees in disguise", body: "Each set is stored as a tree - every element points to its parent; the root points to itself. Elements never move; only the 'parent' pointer changes. Two optimisations keep trees near-flat." },
    { title: "Union by rank", body: "Rank ≈ tree height. Attach the shorter tree under the taller one so height grows at most by 1 when ranks tie. Prevents pathological chains." },
    { title: "Path compression", body: "During find(x), after we reach the root r, re-point every node on the walked path directly to r. Next find on any of them is O(1)." },
    { title: "Amortized complexity", body: "With both tricks, m operations on n elements run in O(m · α(n)) - α is the inverse Ackermann function, effectively ≤ 4 for any n in the universe. Treat it as O(1) per op." },
    { title: "Where it appears", body: "Kruskal's MST (detect cycles when adding edges), connected components in a dynamic graph, offline LCA, Union-Find on grids, and many interview questions on equivalence classes." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Forest of trees</SectionEyebrow>
        <SectionTitle>Mental model: each set is a tree, root is the name tag</SectionTitle>
        <Lede>
          A DSU is a forest. Each tree is a set. The root is the set&rsquo;s name tag. Union glues two
          trees by attaching the shorter root under the taller. Find walks up to the root, then
          (optionally) flattens the path for future queries.
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

/* ------------------------------------------------------------------ */
/*  Try It                                                              */
/* ------------------------------------------------------------------ */

function TryTab() {
  const problems = [
    { q: "Start with n = 5. After union(0,1), union(2,3), union(0,3). How many components?", answer: "2" },
    { q: "n = 4, all ranks 0. After union(0,1) then union(2,3) then union(0,2), what is rank of the final root?", answer: "2" },
    { q: "After calling find(x) with path compression on a chain 4→3→2→1→0, what is parent[3]?", answer: "0" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>
        Work out each scenario on paper (draw the forest!) then reveal. These are classic Interview-style questions.
      </Callout>
      {problems.map((p, i) => {
        const correct = guesses[i].trim() === p.answer;
        return (
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
                  fontFamily: C.mono, width: 120,
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
                  color: correct ? C.successDark : C.dangerDark,
                  padding: "4px 12px", borderRadius: 8,
                  background: correct ? `${C.success}14` : `${C.danger}14`,
                  fontFamily: C.heading,
                }}>
                  {correct ? `✓ Correct - ${p.answer}` : `Answer: ${p.answer}`}
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
/*  Insight                                                             */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>Why two tricks, not one</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Union-by-rank alone gives O(log n) per operation - trees stay shallow (≤ log n). Path compression alone gives O(log n) amortized. Together the proved bound is O(α(n)) which is a slowly growing function ≤ 4 for n below the number of atoms in the observable universe. Effectively constant.
        </p>
      </Card>
      <Card>
        <SubHeading>Interview traps</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>Rank is NOT size. Rank only changes when both trees being unioned had equal rank.</li>
          <li>After union, the smaller tree&rsquo;s root&rsquo;s rank is unchanged - only the winning root&rsquo;s rank may increment.</li>
          <li>Path compression modifies parent pointers but never rank.</li>
          <li>Components count decreases by 1 per successful union, not per call.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                            */
/* ------------------------------------------------------------------ */

export default function DSA_L7_DSUActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "With union-by-rank + path compression, the amortized cost of m operations on n elements is:",
      options: ["O(m log n)", "O(m · α(n))", "O(m √n)", "O(m)"],
      correctIndex: 1,
      explanation: "Tarjan's classic result: O(m · α(n)) where α is the inverse Ackermann function, effectively ≤ 4.",
    },
    {
      question: "In union-by-rank, when is the rank of the combined root incremented?",
      options: ["Always", "When both roots had equal rank", "When one rank was 0", "Never, only path compression changes rank"],
      correctIndex: 1,
      explanation: "Rank only grows when two equal-rank trees merge - otherwise the taller absorbs the shorter without changing height.",
    },
    {
      question: "Start with parent = [0,1,2,3,4]. After union(0,1), union(2,3), union(0,2) (all ranks start 0, union-by-rank), what is parent[3]?",
      options: ["0", "2", "3", "1"],
      correctIndex: 1,
      explanation: "union(0,1): rank[0]=1, parent[1]=0. union(2,3): rank[2]=1, parent[3]=2. union(0,2): ranks equal (1,1) - attach root 2 under 0; parent[2]=0. parent[3] was set to 2 earlier and unchanged until a find; it is 2.",
    },
    {
      question: "What does path compression modify?",
      options: ["Only the rank array", "The parent array, pointing every node on the find path to the root", "Both rank and parent", "The component count"],
      correctIndex: 1,
      explanation: "Path compression re-points parent pointers along the traversed path directly to the root; rank is unaffected.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Disjoint Set Union (Union-Find)"
      level={7}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Medium - Kruskal's MST, connectivity, equivalence grouping"
      nextLessonHint="KMP - Pattern Matching in Linear Time"
    />
  );
}
