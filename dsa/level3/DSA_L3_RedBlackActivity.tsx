"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer,
} from "@/components/engineering/algo";
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
/*  Red-Black tree model                                                */
/* ------------------------------------------------------------------ */

type Color = "R" | "B";
interface RBNode {
  id: string;
  key: number;
  color: Color;
  parent?: string;
  left?: string;
  right?: string;
}

interface RBFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodes: Record<string, RBNode>;
  rootId?: string;
  activeId?: string;
  caseTag?: "C1" | "C2" | "C3" | "BST" | "ROOT" | "DONE";
}

const PSEUDO_RB = [
  "# Red-Black insert (new nodes start RED)",
  "function insert(key):",
  "  perform standard BST insert; new node z = RED",
  "  while z != root and parent(z).color == RED:",
  "    let g = grandparent(z), u = uncle of z",
  "    Case 1: u is RED → recolor parent+uncle BLACK,",
  "            g RED; z ← g; continue",
  "    Case 2 (zig-zag): rotate parent to make line",
  "    Case 3 (line):    rotate g, swap colors of",
  "            old parent and old g",
  "  root.color = BLACK   # invariant 2 always holds",
];

function cloneRB(n: Record<string, RBNode>): Record<string, RBNode> {
  const r: Record<string, RBNode> = {};
  for (const k in n) r[k] = { ...n[k] };
  return r;
}

function buildRBFrames(keys: number[]): RBFrame[] {
  const frames: RBFrame[] = [];
  const nodes: Record<string, RBNode> = {};
  let rootId: string | undefined;
  let counter = 0;
  const mkId = () => `r${counter++}`;

  function snap(line: number, message: string, activeId?: string, caseTag?: RBFrame["caseTag"]) {
    frames.push({
      line,
      vars: { nodes: Object.keys(nodes).length, root: rootId ?? "-", case: caseTag ?? "" },
      message,
      nodes: cloneRB(nodes),
      rootId,
      activeId,
      caseTag,
    });
  }

  function rotateLeft(xId: string) {
    const x = nodes[xId];
    const yId = x.right!;
    const y = nodes[yId];
    x.right = y.left;
    if (y.left) nodes[y.left].parent = xId;
    y.parent = x.parent;
    if (!x.parent) rootId = yId;
    else {
      const p = nodes[x.parent];
      if (p.left === xId) p.left = yId;
      else p.right = yId;
    }
    y.left = xId;
    x.parent = yId;
  }

  function rotateRight(xId: string) {
    const x = nodes[xId];
    const yId = x.left!;
    const y = nodes[yId];
    x.left = y.right;
    if (y.right) nodes[y.right].parent = xId;
    y.parent = x.parent;
    if (!x.parent) rootId = yId;
    else {
      const p = nodes[x.parent];
      if (p.left === xId) p.left = yId;
      else p.right = yId;
    }
    y.right = xId;
    x.parent = yId;
  }

  function fixUp(zId: string) {
    while (zId && nodes[zId].parent && nodes[nodes[zId].parent!].color === "R") {
      const pId = nodes[zId].parent!;
      const gId = nodes[pId].parent!;
      if (!gId) break;
      const g = nodes[gId];
      if (pId === g.left) {
        const uncleId = g.right;
        if (uncleId && nodes[uncleId].color === "R") {
          nodes[pId].color = "B";
          nodes[uncleId].color = "B";
          g.color = "R";
          snap(6, `Case 1: uncle is RED → recolor parent+uncle BLACK, grandparent RED. Continue from grandparent.`, gId, "C1");
          zId = gId;
        } else {
          if (zId === nodes[pId].right) {
            zId = pId;
            rotateLeft(zId);
            snap(8, `Case 2 (zig-zag): rotate left around parent to make a line.`, zId, "C2");
          }
          nodes[nodes[zId].parent!].color = "B";
          nodes[nodes[nodes[zId].parent!].parent!].color = "R";
          rotateRight(nodes[nodes[zId].parent!].parent!);
          snap(9, `Case 3 (line): rotate right around grandparent + recolor (old-parent BLACK, old-grandparent RED).`, zId, "C3");
        }
      } else {
        const uncleId = g.left;
        if (uncleId && nodes[uncleId].color === "R") {
          nodes[pId].color = "B";
          nodes[uncleId].color = "B";
          g.color = "R";
          snap(6, `Case 1 (mirror): uncle is RED → recolor.`, gId, "C1");
          zId = gId;
        } else {
          if (zId === nodes[pId].left) {
            zId = pId;
            rotateRight(zId);
            snap(8, `Case 2 (mirror): rotate right around parent to make a line.`, zId, "C2");
          }
          nodes[nodes[zId].parent!].color = "B";
          nodes[nodes[nodes[zId].parent!].parent!].color = "R";
          rotateLeft(nodes[nodes[zId].parent!].parent!);
          snap(9, `Case 3 (mirror): rotate left around grandparent + recolor.`, zId, "C3");
        }
      }
    }
    if (rootId) nodes[rootId].color = "B";
  }

  snap(0, "Empty Red-Black tree.");
  for (const key of keys) {
    const id = mkId();
    nodes[id] = { id, key, color: "R" };
    if (!rootId) {
      rootId = id;
      nodes[id].color = "B";
      snap(2, `Insert ${key} as root. Root is always BLACK (invariant 2).`, id, "ROOT");
      continue;
    }
    let cur = rootId;
    while (true) {
      if (key < nodes[cur].key) {
        if (!nodes[cur].left) {
          nodes[cur].left = id;
          nodes[id].parent = cur;
          break;
        }
        cur = nodes[cur].left!;
      } else if (key > nodes[cur].key) {
        if (!nodes[cur].right) {
          nodes[cur].right = id;
          nodes[id].parent = cur;
          break;
        }
        cur = nodes[cur].right!;
      } else {
        delete nodes[id];
        snap(2, `Insert ${key}: duplicate (BSTs disallow). Skipping.`, undefined, undefined);
        return frames;
      }
    }
    snap(2, `BST insert ${key} (RED) as ${key < nodes[nodes[id].parent!].key ? "left" : "right"} child of ${nodes[nodes[id].parent!].key}.`, id, "BST");
    fixUp(id);
    snap(11, `Fix-up complete. All 5 invariants hold.`, id, "DONE");
  }
  return frames;
}

/* ------------------------------------------------------------------ */
/*  Visualization                                                       */
/* ------------------------------------------------------------------ */

function RBTreeViz({ frame }: { frame: RBFrame }) {
  const x: Record<string, number> = {};
  const y: Record<string, number> = {};
  let c = 0;
  function walk(id: string | undefined, depth: number) {
    if (!id) return;
    walk(frame.nodes[id].left, depth + 1);
    x[id] = c++;
    y[id] = depth;
    walk(frame.nodes[id].right, depth + 1);
  }
  walk(frame.rootId, 0);
  const n = c;
  const W = 600;
  const H = 320;
  const xScale = n > 1 ? (W - 60) / (n - 1) : 0;
  const maxD = Math.max(0, ...Object.values(y));
  const yScale = maxD > 0 ? (H - 80) / maxD : 0;
  const ids = Object.keys(frame.nodes);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", maxHeight: H }}>
      {ids.map((id) => {
        const node = frame.nodes[id];
        const X = 30 + x[id] * xScale;
        const Y = 40 + y[id] * yScale;
        const children = [node.left, node.right].filter(Boolean) as string[];
        return children.map((cid) => (
          <line
            key={`${id}-${cid}`}
            x1={X}
            y1={Y}
            x2={30 + x[cid] * xScale}
            y2={40 + y[cid] * yScale}
            stroke={C.textMuted}
            strokeWidth={1.8}
          />
        ));
      })}
      {ids.map((id) => {
        const node = frame.nodes[id];
        const X = 30 + x[id] * xScale;
        const Y = 40 + y[id] * yScale;
        const isActive = id === frame.activeId;
        return (
          <g key={id}>
            <circle
              cx={X}
              cy={Y}
              r={17}
              fill={node.color === "R" ? C.danger : "#1F2937"}
              stroke={isActive ? A : "#FFFFFF"}
              strokeWidth={isActive ? 4 : 2.5}
              style={{ transition: "fill 0.3s, stroke 0.2s" }}
            />
            <text
              x={X}
              y={Y + 4}
              textAnchor="middle"
              fontSize={13}
              fontWeight={700}
              fill="#FFFFFF"
              fontFamily={C.mono}
            >
              {node.key}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function VisualizeTab() {
  const [src, setSrc] = useState("10, 20, 30, 15, 25, 5, 35");
  const keys = useMemo(() => {
    const arr = src.split(/[,\s]+/).map((s) => Number(s.trim())).filter((n) => !Number.isNaN(n));
    return arr.length === 0 ? [10, 20, 30, 15, 25, 5, 35] : arr.slice(0, 12);
  }, [src]);
  const frames = useMemo(() => buildRBFrames(keys), [keys]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  return (
    <AlgoCanvas
      title="Red-Black Tree — Insertion"
      player={player}
      input={
        <InputEditor
          label="Keys (insert in order)"
          value={src}
          helper="Up to 12 keys. Watch the case tags (C1/C2/C3) light up as the tree rebalances."
          presets={[
            { label: "Classic", value: "10, 20, 30, 15, 25, 5, 35" },
            { label: "Ascending (worst-skew test)", value: "1, 2, 3, 4, 5, 6, 7" },
            { label: "Mixed", value: "7, 3, 18, 10, 22, 8, 11, 26" },
            { label: "Many recolors", value: "5, 10, 15, 20, 25, 30, 35" },
          ]}
          onApply={(v) => setSrc(v)}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_RB} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.caseTag ? ["case"] : []} />}
      legend={
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: "0.78rem" }}>
          <span><span style={{ display: "inline-block", width: 10, height: 10, background: C.danger, borderRadius: "50%", marginRight: 4 }} />RED</span>
          <span><span style={{ display: "inline-block", width: 10, height: 10, background: "#1F2937", borderRadius: "50%", marginRight: 4 }} />BLACK</span>
          <span><b style={{ color: A }}>orange ring</b> = focus node</span>
        </div>
      }
    >
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 240px", gap: 14, alignItems: "start" }}>
        <RBTreeViz frame={frame} />
        <Card>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, fontFamily: C.heading }}>
            5 invariants (always)
          </div>
          <ol style={{ fontSize: "0.78rem", color: C.textSecondary, lineHeight: 1.55, paddingLeft: 18, margin: 0 }}>
            <li>Every node is RED or BLACK.</li>
            <li>Root is BLACK.</li>
            <li>All NIL leaves are BLACK.</li>
            <li>RED nodes have BLACK children (no two reds adjacent).</li>
            <li>Every root-to-leaf path has the same number of BLACK nodes (the &ldquo;black-height&rdquo;).</li>
          </ol>
          <div style={{ marginTop: 12, paddingTop: 10, borderTop: `1px dashed ${C.border}`, fontSize: "0.76rem", color: C.textSecondary, lineHeight: 1.5 }}>
            <div><b style={{ color: C.text }}>Current case:</b> {frame.caseTag ?? "—"}</div>
            <div style={{ marginTop: 4, fontStyle: "italic" }}>
              Height bound: <b style={{ color: C.text }}>h ≤ 2·log₂(n + 1)</b>
            </div>
          </div>
        </Card>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn / Try / Insight                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "What is a Red-Black tree?", b: "A self-balancing BST where every node is colored RED or BLACK, and 5 invariants force the tree's height to stay within 2·log₂(n+1). Insert, search, delete: all O(log n) worst case." },
    { t: "Why two colors and not heights?", b: "AVL stores height per node and rebalances aggressively (height difference ≤ 1). RB stores 1 bit (color) and tolerates up to a 2× imbalance — looser, but cheaper to maintain. RB does fewer rotations on insert/delete." },
    { t: "RB vs AVL — when each wins", b: "Read-heavy workloads → AVL (tighter balance, faster lookup). Write-heavy / mixed → RB (fewer rotations on update). Most language stdlibs choose RB: std::map (C++), TreeMap (Java), Linux kernel rb_node (CFS scheduler, EPOLL, virtual memory)." },
    { t: "Insertion = BST insert + fix-up", b: "New node colored RED; standard BST descent. The only invariant a RED insert can violate is invariant 4 (no two reds adjacent). The fix-up walks up the tree handling 3 cases until invariants are restored." },
    { t: "The 3 fix-up cases", b: "Case 1: uncle is RED — recolor parent+uncle BLACK, grandparent RED, continue at grandparent. Case 2: zig-zag — rotate parent to straighten. Case 3: line — rotate grandparent + swap colors. Case 1 is recursive (climbs); Cases 2/3 terminate after at most one rotation pair." },
    { t: "Production code uses RB — even when AVL would be fine", b: "Most real codebases use a single self-balancing BST and reach for it for ordered maps. RB's dominance comes from: simpler delete (5 cases vs AVL's deeper rebalancing), 1 color bit (vs full height), and historical inertia (Sedgewick's Left-Leaning RB simplified the implementation in the 2000s)." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Mental model</SectionEyebrow>
        <SectionTitle>The pragmatist&rsquo;s balanced BST</SectionTitle>
        <Lede>
          AVL is a perfectionist — every imbalance triggers an immediate rotation. RB is a
          pragmatist — it allows mild imbalance (up to 2×) but uses cheap recoloring before
          falling back to rotation. Production code chose pragmatism:{" "}
          <code style={{ fontFamily: C.mono }}>std::map</code>,{" "}
          <code style={{ fontFamily: C.mono }}>TreeMap</code>, and the Linux scheduler all run on
          RB-trees.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
        {cards.map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: A, marginBottom: 6, fontFamily: C.mono, letterSpacing: "0.08em" }}>0{i + 1}</div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.t}</div>
            <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }}>{s.b}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function TryTab() {
  const probs = [
    { q: "Insert 1,2,3 in order into an empty RB-tree. What is the root key after all 3 inserts?", a: "2" },
    { q: "How many BLACK nodes are on every root-to-NIL path in a 7-key full RB-tree (perfectly balanced, all internal nodes BLACK)?", a: "3" },
    { q: "If a RED node has 2 children, what color must they be? (R or B)", a: "B" },
    { q: "True/False: Inserting an ascending sequence into RB makes it linear (skewed) like plain BST.", a: "False" },
  ];
  const [g, setG] = useState<(string | null)[]>(probs.map(() => null));
  const [s, setS] = useState<boolean[]>(probs.map(() => false));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Trace mentally; verify in the visualizer.</Callout>
      {probs.map((p, i) => {
        const correct = (g[i] ?? "").trim().toLowerCase() === p.a.toLowerCase();
        return (
          <Card key={i}>
            <div style={{ fontSize: "0.92rem", marginBottom: 10, color: C.text }}>
              <b style={{ color: A, fontFamily: C.mono }}>#{i + 1}</b> {p.q}
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <input
                value={g[i] ?? ""}
                onChange={(e) => { const v = [...g]; v[i] = e.target.value; setG(v); }}
                placeholder="answer"
                style={{
                  padding: "7px 12px",
                  border: `1px solid ${C.border}`,
                  borderRadius: 8,
                  fontFamily: C.mono,
                  fontSize: "0.85rem",
                  minWidth: 140,
                  outline: "none",
                  background: C.bg,
                  color: C.text,
                }}
              />
              <button
                onClick={() => { const v = [...s]; v[i] = true; setS(v); }}
                style={{
                  padding: "6px 14px", borderRadius: 8, fontSize: "0.78rem", fontWeight: 700,
                  border: `1px solid ${C.border}`, background: C.bg, color: C.textSecondary,
                  cursor: "pointer", fontFamily: C.heading,
                }}
              >
                Reveal
              </button>
              {s[i] && (
                <span style={{
                  fontSize: "0.82rem", fontWeight: 700, padding: "4px 12px", borderRadius: 8,
                  color: correct ? C.successDark : C.dangerDark,
                  background: correct ? `${C.success}14` : `${C.danger}14`,
                  fontFamily: C.heading,
                }}>
                  {correct ? `✓ Correct — ${p.a}` : `Answer: ${p.a}`}
                </span>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

function InsightTab() {
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Card>
        <SubHeading>Why height ≤ 2·log₂(n + 1)</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Let <em>bh(x)</em> = black-height of node x (count of BLACK on any root-to-NIL path
          through x). By invariant 5 it&rsquo;s well-defined. By invariant 4 (no adjacent reds),
          at most half the nodes on any path are RED. So total height ≤ 2·bh(root). It can also
          be shown that the subtree at a node with black-height bh contains at least 2^bh − 1
          internal nodes, which gives bh(root) ≤ log₂(n + 1). Combining:{" "}
          <strong style={{ color: C.text }}>height ≤ 2·log₂(n + 1)</strong>.
        </p>
      </Card>
      <Card padded={false} style={{ overflow: "hidden" }}>
        <div style={{ padding: "16px 20px 12px" }}>
          <SubHeading>RB vs AVL — head-to-head</SubHeading>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.84rem", fontFamily: C.heading }}>
          <thead>
            <tr style={{ background: C.bgSoft }}>
              {["Property", "AVL", "Red-Black"].map((h) => (
                <th key={h} style={{
                  textAlign: "left", padding: "11px 16px",
                  color: C.textMuted, fontSize: "0.72rem", fontWeight: 700,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  borderBottom: `1px solid ${C.border}`,
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Height bound", "≤ 1.44·log₂(n+2)", "≤ 2·log₂(n+1)"],
              ["Per-node overhead", "height (8–32 bits)", "color (1 bit)"],
              ["Rotations per insert", "O(1) amortized", "O(1) amortized"],
              ["Rotations per delete", "Up to log n", "≤ 3"],
              ["Lookup speed", "Faster (tighter)", "Slightly slower"],
              ["Best for", "Read-heavy / databases", "Mixed / language stdlibs"],
              ["Used by", "Some DB indexes", "std::map, TreeMap, Linux CFS, Java HashMap (post-treeify)"],
            ].map((r, i) => (
              <tr key={i} style={{ borderTop: i === 0 ? "none" : `1px solid ${C.borderLight}` }}>
                <td style={{ padding: "9px 16px", fontWeight: 600, color: C.text }}>{r[0]}</td>
                <td style={{ padding: "9px 16px", color: C.textSecondary }}>{r[1]}</td>
                <td style={{ padding: "9px 16px", color: C.textSecondary }}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Card>
        <SubHeading>Where you actually meet RB-trees</SubHeading>
        <ul style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li><strong style={{ color: C.text }}>C++ <code style={{ fontFamily: C.mono }}>std::map / std::set / std::multimap</code></strong> — RB.</li>
          <li><strong style={{ color: C.text }}>Java <code style={{ fontFamily: C.mono }}>TreeMap / TreeSet</code></strong> — RB. <code style={{ fontFamily: C.mono }}>HashMap</code> treeifies long chains into RB-trees once chain length ≥ 8.</li>
          <li><strong style={{ color: C.text }}>Linux kernel <code style={{ fontFamily: C.mono }}>rb_node</code></strong> — CFS process scheduler, virtual-memory area lookup, EPOLL ready-list, EXT4 directory indexing.</li>
          <li><strong style={{ color: C.text }}>Glibc <code style={{ fontFamily: C.mono }}>tsearch / tdelete</code></strong> — POSIX&rsquo;s portable balanced-BST API.</li>
          <li><strong style={{ color: C.text }}>Nginx</strong> uses RB-trees for timer queues and upstream lookups.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Left-Leaning Red-Black trees (Sedgewick, 2008)</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          A simplified RB variant where the only RED links allowed are LEFT links. Cuts the
          implementation roughly in half — Sedgewick&rsquo;s teaching code is &lt; 200 lines for
          full insert/delete. Used in some Java teaching libraries and in Princeton&rsquo;s
          textbooks. Same O(log n) complexity, marginally more rotations in practice.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                            */
/* ------------------------------------------------------------------ */

export default function DSA_L3_RedBlackActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "Which color must a newly inserted node be (before fix-up)?",
      options: ["BLACK", "RED", "Either, depending on parent", "BLUE"],
      correctIndex: 1,
      explanation: "Inserting RED can only violate invariant 4 (no two reds). Inserting BLACK would violate invariant 5 (equal black-height) almost always — much harder to fix. So new nodes are RED.",
    },
    {
      question: "After insert fix-up, what color is the root always set to?",
      options: ["RED", "BLACK", "Same as parent", "Same as new node"],
      correctIndex: 1,
      explanation: "Invariant 2 requires the root to be BLACK. The fix-up's last step unconditionally recolors the root BLACK, which never violates any other invariant.",
    },
    {
      question: "Maximum height of a Red-Black tree with n internal nodes:",
      options: ["log₂ n", "1.44 · log₂(n+2)", "2 · log₂(n+1)", "n / 2"],
      correctIndex: 2,
      explanation: "By the black-height argument: bh(root) ≤ log₂(n+1), and at most half the nodes on a path can be red, giving height ≤ 2·log₂(n+1). Slightly looser than AVL's 1.44·log₂(n+2).",
    },
    {
      question: "RB-trees beat AVL on which workload?",
      options: [
        "Read-heavy lookups (because RB has tighter balance)",
        "Mixed insert/delete-heavy workloads (because RB does fewer rotations on update, especially fewer on delete)",
        "Worst-case memory (because RB has no per-node bookkeeping)",
        "All of the above",
      ],
      correctIndex: 1,
      explanation: "AVL has slightly tighter balance and faster lookups. RB does fewer rotations per insert/delete (delete bounded by 3 rotations, vs AVL's O(log n)) — that's why language stdlibs and the Linux kernel choose RB.",
    },
    {
      question: "Java's HashMap converts a chained bucket to a tree once the chain reaches length 8. What kind of tree?",
      options: ["AVL", "Splay tree", "Red-Black", "Skip list"],
      correctIndex: 2,
      explanation: "Java picks RB for the same reason most stdlibs do: simpler delete + lower rotation overhead. The treeified HashMap caps worst-case bucket lookup at O(log k) — useful against adversarial hash-collision attacks.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="Red-Black Tree"
      level={3}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High — the production balanced BST. std::map, TreeMap, Linux kernel — all RB."
      nextLessonHint="Heaps & Priority Queues"
    />
  );
}
