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
  PillButton,
  Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  B+ tree model                                                       */
/*    - order M = 4 (max 3 keys per node, max 4 children for internals) */
/*    - leaves hold sorted keys + pointer to next leaf                 */
/*    - internal nodes hold ROUTING keys only; data lives in leaves    */
/* ------------------------------------------------------------------ */

const M = 4;                  // order
const MAX_KEYS = M - 1;       // 3 keys max per node before split
const MIN_KEYS_LEAF = Math.ceil((M - 1) / 2);  // 2 — not enforced by insert, only relevant for delete

interface BPNode {
  id: string;
  isLeaf: boolean;
  keys: number[];
  children: string[];      // internals only
  next?: string;           // leaves only — pointer to next leaf in scan order
  parent?: string;
  highlight?: "active" | "split" | "scan" | "match" | "compare";
}

interface BPFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodes: Record<string, BPNode>;
  rootId?: string;
  scanPath?: string[];      // leaf chain visited during range scan
  scanResult?: number[];    // keys collected
  flashKey?: string;
}

const PSEUDO_INSERT = [
  "# B+ tree insert (order M = 4)",
  "function insert(key):",
  "  leaf ← descend from root using routing keys",
  "  insert key into leaf in sorted position",
  "  if leaf.keys.length > M-1:",
  "    split leaf into L, R",
  "    promote first key of R into parent",
  "    relink leaves: L.next = R; R.next = old next",
  "    if parent overflows, recurse upward",
  "    if root overflows, create new root",
];

const PSEUDO_RANGE = [
  "# Range scan [lo, hi] — the B+ tree advantage",
  "function rangeScan(lo, hi):",
  "  leaf ← descend from root looking for lo",
  "  scan keys in this leaf ≥ lo",
  "  while leaf.next exists and leaf.last < hi:",
  "    leaf ← leaf.next       # FOLLOW THE LEAF CHAIN",
  "    collect keys in [lo, hi]",
  "  return collected   # O(log n + k) — k = matches",
];

let nextId = 0;
const mkId = () => `b${nextId++}`;
function resetIds() { nextId = 0; }

function cloneNodes(ns: Record<string, BPNode>): Record<string, BPNode> {
  const out: Record<string, BPNode> = {};
  for (const k in ns) out[k] = { ...ns[k], keys: [...ns[k].keys], children: [...ns[k].children], highlight: undefined };
  return out;
}

function leafChain(nodes: Record<string, BPNode>, rootId: string | undefined): string[] {
  if (!rootId) return [];
  // Find leftmost leaf
  let cur: string = rootId;
  while (!nodes[cur].isLeaf) {
    cur = nodes[cur].children[0];
  }
  const chain: string[] = [];
  let id: string | undefined = cur;
  while (id) {
    chain.push(id);
    id = nodes[id].next;
  }
  return chain;
}

function buildInsertFrames(keys: number[]): BPFrame[] {
  resetIds();
  const frames: BPFrame[] = [];
  const nodes: Record<string, BPNode> = {};
  let rootId: string | undefined;

  const snap = (line: number, message: string, highlightId?: string, hl?: BPNode["highlight"], flashKey?: string) => {
    const cloned = cloneNodes(nodes);
    if (highlightId && cloned[highlightId]) cloned[highlightId].highlight = hl ?? "active";
    frames.push({
      line,
      vars: { nodes: Object.keys(nodes).length, root: rootId ?? "-", M },
      message,
      nodes: cloned,
      rootId,
      flashKey,
    });
  };

  function descendToLeaf(key: number): string {
    let cur: string = rootId!;
    while (!nodes[cur].isLeaf) {
      const k = nodes[cur].keys;
      let i = 0;
      while (i < k.length && key >= k[i]) i++;
      cur = nodes[cur].children[i];
    }
    return cur;
  }

  function insertIntoNode(node: BPNode, key: number, leftChild?: string, rightChild?: string) {
    let i = 0;
    while (i < node.keys.length && node.keys[i] < key) i++;
    node.keys.splice(i, 0, key);
    if (!node.isLeaf && leftChild && rightChild) {
      // routing key promoted from below: replace child[i] with leftChild then insert rightChild after
      // Actually the old child at position i is replaced by leftChild, rightChild goes at i+1.
      // But our split keeps L at the original position, so we just insert R at i+1.
      node.children.splice(i + 1, 0, rightChild);
    }
  }

  function splitLeaf(leafId: string): { promoteKey: number; rightId: string } {
    const leaf = nodes[leafId];
    const mid = Math.ceil(leaf.keys.length / 2);
    const rightKeys = leaf.keys.splice(mid);
    const rightId = mkId();
    nodes[rightId] = {
      id: rightId,
      isLeaf: true,
      keys: rightKeys,
      children: [],
      next: leaf.next,
      parent: leaf.parent,
    };
    leaf.next = rightId;
    return { promoteKey: rightKeys[0], rightId };
  }

  function splitInternal(nodeId: string): { promoteKey: number; rightId: string } {
    const n = nodes[nodeId];
    const mid = Math.floor(n.keys.length / 2);
    const promoteKey = n.keys[mid];
    const rightKeys = n.keys.splice(mid + 1);
    const rightChildren = n.children.splice(mid + 1);
    n.keys.pop();   // remove the promoted key
    const rightId = mkId();
    nodes[rightId] = {
      id: rightId,
      isLeaf: false,
      keys: rightKeys,
      children: rightChildren,
      parent: n.parent,
    };
    for (const cid of rightChildren) nodes[cid].parent = rightId;
    return { promoteKey, rightId };
  }

  function insertWithFixup(targetId: string, promoteKey: number, leftChildId: string, rightChildId: string) {
    if (!nodes[targetId].parent) {
      // create new root
      const newRootId = mkId();
      nodes[newRootId] = {
        id: newRootId,
        isLeaf: false,
        keys: [promoteKey],
        children: [leftChildId, rightChildId],
      };
      nodes[leftChildId].parent = newRootId;
      nodes[rightChildId].parent = newRootId;
      rootId = newRootId;
      snap(8, `Root overflowed — create new root holding routing key ${promoteKey}.`, newRootId, "active", "newRoot");
      return;
    }
    const parentId = nodes[targetId].parent!;
    insertIntoNode(nodes[parentId], promoteKey, leftChildId, rightChildId);
    nodes[rightChildId].parent = parentId;
    snap(7, `Promote ${promoteKey} into parent. Parent now has keys [${nodes[parentId].keys.join(",")}].`, parentId, "active", "promote");
    if (nodes[parentId].keys.length > MAX_KEYS) {
      const { promoteKey: pk, rightId: rid } = splitInternal(parentId);
      snap(6, `Internal overflow — split. New internal sibling holds keys [${nodes[rid].keys.join(",")}]. Promote ${pk}.`, rid, "split");
      insertWithFixup(parentId, pk, parentId, rid);
    }
  }

  snap(0, `Empty B+ tree (order M = ${M}, max ${MAX_KEYS} keys per node).`);

  for (const key of keys) {
    if (!rootId) {
      const leafId = mkId();
      nodes[leafId] = { id: leafId, isLeaf: true, keys: [key], children: [] };
      rootId = leafId;
      snap(2, `Insert ${key} as the only key in the root leaf.`, leafId, "active", "insert");
      continue;
    }
    snap(2, `Insert ${key}: descend from root to find target leaf.`, rootId, "active");
    const leafId = descendToLeaf(key);
    if (nodes[leafId].keys.includes(key)) {
      snap(3, `Key ${key} already in leaf — duplicate, skipping.`, leafId, "compare");
      continue;
    }
    insertIntoNode(nodes[leafId], key);
    snap(3, `Inserted ${key} into leaf. Leaf keys: [${nodes[leafId].keys.join(",")}].`, leafId, "active", "insert");
    if (nodes[leafId].keys.length > MAX_KEYS) {
      const { promoteKey, rightId } = splitLeaf(leafId);
      snap(5, `Leaf overflowed (${MAX_KEYS + 1} > ${MAX_KEYS}). Split: left = [${nodes[leafId].keys.join(",")}], right = [${nodes[rightId].keys.join(",")}]. Relink: ${leafId}.next = ${rightId}.`, rightId, "split");
      insertWithFixup(leafId, promoteKey, leafId, rightId);
    }
  }
  snap(0, `Done. ${Object.keys(nodes).length} nodes total. Try the range-scan mode to see the leaf chain in action.`);
  return frames;
}

function buildRangeScanFrames(keys: number[], lo: number, hi: number): BPFrame[] {
  // Build the tree silently first, then animate range scan
  const buildFrames = buildInsertFrames(keys);
  const finalNodes = buildFrames[buildFrames.length - 1].nodes;
  const finalRoot = buildFrames[buildFrames.length - 1].rootId;
  const out: BPFrame[] = [];

  const cloneCurr = (highlights: Record<string, BPNode["highlight"]>): Record<string, BPNode> => {
    const c = cloneNodes(finalNodes);
    for (const id in highlights) if (c[id]) c[id].highlight = highlights[id];
    return c;
  };

  const collected: number[] = [];
  const scanPath: string[] = [];

  const push = (line: number, message: string, highlights: Record<string, BPNode["highlight"]> = {}, flashKey?: string) => {
    out.push({
      line,
      vars: { lo, hi, found: collected.length, scanned: scanPath.length },
      message,
      nodes: cloneCurr(highlights),
      rootId: finalRoot,
      scanPath: [...scanPath],
      scanResult: [...collected],
      flashKey,
    });
  };

  if (!finalRoot) {
    push(0, `Tree is empty.`);
    return out;
  }

  push(0, `Built tree from [${keys.join(",")}]. Range scan [${lo}, ${hi}] starts at root.`, { [finalRoot]: "active" });

  // Descend
  let cur: string = finalRoot;
  const descendPath: string[] = [];
  while (!finalNodes[cur].isLeaf) {
    descendPath.push(cur);
    const ks = finalNodes[cur].keys;
    let i = 0;
    while (i < ks.length && lo >= ks[i]) i++;
    push(2, `At internal node [${ks.join(",")}]. Routing key choice: child[${i}] (lo=${lo}).`, { [cur]: "compare" });
    cur = finalNodes[cur].children[i];
  }

  // Scan leaves
  let leafId: string | undefined = cur;
  while (leafId) {
    scanPath.push(leafId);
    const leafKeys = finalNodes[leafId].keys;
    push(3, `Arrived at leaf [${leafKeys.join(",")}]. Collect keys in [${lo}, ${hi}].`, { [leafId]: "scan" });
    let foundAny = false;
    for (const k of leafKeys) {
      if (k >= lo && k <= hi) {
        collected.push(k);
        foundAny = true;
        push(5, `${k} is in [${lo}, ${hi}] — collect. Result: [${collected.join(",")}].`, { [leafId]: "match" }, "result");
      }
    }
    const last = leafKeys[leafKeys.length - 1];
    if (last !== undefined && last >= hi) {
      push(7, `Last key in this leaf (${last}) ≥ hi (${hi}) — stop. ${foundAny ? "" : "(No matches in this leaf.)"}`, { [leafId]: "match" });
      break;
    }
    if (!finalNodes[leafId].next) {
      push(7, `End of leaf chain reached. Done.`, { [leafId]: "match" });
      break;
    }
    push(6, `Last key (${last}) < hi (${hi}) — follow leaf.next pointer.`, { [leafId]: "scan" });
    leafId = finalNodes[leafId].next;
  }
  push(8, `Range scan complete. ${collected.length} key(s) found in [${lo}, ${hi}]: [${collected.join(", ")}]. Cost: O(log n) descent + O(k) leaf hops.`);
  return out;
}

/* ------------------------------------------------------------------ */
/*  Visualization                                                       */
/* ------------------------------------------------------------------ */

interface NodeLayout { x: number; y: number; w: number; h: number; }

function layoutTree(nodes: Record<string, BPNode>, rootId: string | undefined, viewW: number): { layout: Record<string, NodeLayout>; height: number } {
  if (!rootId) return { layout: {}, height: 60 };
  // Assign depths
  const depth: Record<string, number> = {};
  function dfs(id: string, d: number) {
    depth[id] = d;
    if (!nodes[id].isLeaf) for (const c of nodes[id].children) dfs(c, d + 1);
  }
  dfs(rootId, 0);
  const maxDepth = Math.max(...Object.values(depth));
  const levels: string[][] = Array.from({ length: maxDepth + 1 }, () => []);
  for (const id in nodes) levels[depth[id]].push(id);

  const NODE_H = 38;
  const KEY_W = 28;
  const PADDING_X = 8;
  const ROW_GAP = 56;
  const layout: Record<string, NodeLayout> = {};

  for (let d = 0; d <= maxDepth; d++) {
    const row = levels[d];
    // Sort row by leftmost key (or by leaf-chain order for leaves)
    row.sort((a, b) => (nodes[a].keys[0] ?? 0) - (nodes[b].keys[0] ?? 0));
    const widths = row.map((id) => Math.max(KEY_W * Math.max(1, nodes[id].keys.length) + PADDING_X * 2, 60));
    const totalW = widths.reduce((s, w) => s + w, 0) + (row.length - 1) * 24;
    let x = (viewW - totalW) / 2;
    for (let i = 0; i < row.length; i++) {
      const id = row[i];
      layout[id] = { x, y: 18 + d * ROW_GAP, w: widths[i], h: NODE_H };
      x += widths[i] + 24;
    }
  }
  return { layout, height: 18 + (maxDepth + 1) * ROW_GAP + 40 };
}

function BPTreeViz({ frame }: { frame: BPFrame }) {
  const W = 720;
  const { layout, height } = useMemo(() => layoutTree(frame.nodes, frame.rootId, W), [frame.nodes, frame.rootId]);
  const ids = Object.keys(frame.nodes);
  const colorFor = (n: BPNode): { fill: string; border: string; fg: string } => {
    if (n.highlight === "split") return { fill: "rgba(239,68,68,0.18)", border: "#ef4444", fg: "#7f1d1d" };
    if (n.highlight === "match") return { fill: "rgba(16,185,129,0.18)", border: "#10b981", fg: "#065f46" };
    if (n.highlight === "scan") return { fill: "rgba(6,182,212,0.18)", border: "#06b6d4", fg: "#0e7490" };
    if (n.highlight === "compare") return { fill: "rgba(245,158,11,0.18)", border: "#f59e0b", fg: "#92400e" };
    if (n.highlight === "active") return { fill: "rgba(59,130,246,0.18)", border: "#3b82f6", fg: "#1e3a8a" };
    return n.isLeaf
      ? { fill: "rgba(139,92,246,0.10)", border: "#8b5cf6", fg: "#5b21b6" }
      : { fill: C.bg, border: C.border, fg: C.text };
  };
  return (
    <svg viewBox={`0 0 ${W} ${height}`} style={{ width: "100%", height: "auto", maxHeight: height }}>
      <defs>
        <marker id="bp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#94a3b8" />
        </marker>
        <marker id="bp-leaf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#8b5cf6" />
        </marker>
      </defs>
      {/* Internal->child edges */}
      {ids.map((id) => {
        const n = frame.nodes[id];
        if (n.isLeaf) return null;
        const a = layout[id]; if (!a) return null;
        return n.children.map((cid, i) => {
          const b = layout[cid]; if (!b) return null;
          // anchor x: spread along parent width per slot
          const slots = n.children.length;
          const ax = a.x + ((i + 0.5) / slots) * a.w;
          const ay = a.y + a.h;
          return (
            <line key={`${id}-${cid}`} x1={ax} y1={ay} x2={b.x + b.w / 2} y2={b.y} stroke="#94a3b8" strokeWidth={1.5} markerEnd="url(#bp-arrow)" />
          );
        });
      })}
      {/* Leaf-chain pointers */}
      {ids.map((id) => {
        const n = frame.nodes[id];
        if (!n.isLeaf || !n.next) return null;
        const a = layout[id]; const b = layout[n.next]; if (!a || !b) return null;
        return (
          <line key={`${id}-next`} x1={a.x + a.w} y1={a.y + a.h / 2} x2={b.x} y2={b.y + b.h / 2}
            stroke="#8b5cf6" strokeWidth={2} strokeDasharray="4 3" markerEnd="url(#bp-leaf)" />
        );
      })}
      {/* Nodes */}
      {ids.map((id) => {
        const n = frame.nodes[id];
        const a = layout[id]; if (!a) return null;
        const c = colorFor(n);
        return (
          <g key={id}>
            <rect x={a.x} y={a.y} width={a.w} height={a.h} rx={6} fill={c.fill} stroke={c.border} strokeWidth={2} style={{ transition: "all 0.3s" }} />
            {n.keys.map((k, i) => {
              const segW = a.w / Math.max(1, n.keys.length);
              return (
                <text key={i} x={a.x + (i + 0.5) * segW} y={a.y + a.h / 2 + 4} textAnchor="middle"
                  fontSize={13} fontWeight={700} fill={c.fg} fontFamily={C.mono}>
                  {k}
                </text>
              );
            })}
            {/* divider lines between keys */}
            {n.keys.slice(0, -1).map((_, i) => {
              const segW = a.w / Math.max(1, n.keys.length);
              return (
                <line key={`d${i}`} x1={a.x + (i + 1) * segW} y1={a.y + 4} x2={a.x + (i + 1) * segW} y2={a.y + a.h - 4}
                  stroke={c.border} strokeWidth={1} opacity={0.5} />
              );
            })}
            {/* node-type tag */}
            <text x={a.x + a.w / 2} y={a.y - 4} textAnchor="middle" fontSize={9} fontWeight={700}
              fill={C.textMuted} fontFamily={C.heading} letterSpacing="0.06em">
              {n.isLeaf ? "LEAF" : "INTERNAL"}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

type Mode = "insert" | "range";

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("insert");
  const [keysStr, setKeysStr] = useState("10, 20, 30, 5, 15, 25, 35, 12, 18, 22, 28");
  const [lo, setLo] = useState(15);
  const [hi, setHi] = useState(28);

  const parsedKeys = useMemo(() => {
    const arr = keysStr.split(/[,\s]+/).map((s) => Number(s.trim())).filter((n) => !Number.isNaN(n));
    return arr.length === 0 ? [10, 20, 30, 5, 15, 25, 35, 12, 18, 22, 28] : arr.slice(0, 14);
  }, [keysStr]);

  const frames = useMemo(
    () => mode === "insert" ? buildInsertFrames(parsedKeys) : buildRangeScanFrames(parsedKeys, lo, hi),
    [mode, parsedKeys, lo, hi],
  );
  const player = useStepPlayer(frames);
  const frame = player.current!;

  const presets = [
    { label: "Classic 11 keys", value: "10, 20, 30, 5, 15, 25, 35, 12, 18, 22, 28" },
    { label: "Ascending (cascade splits)", value: "1, 2, 3, 4, 5, 6, 7, 8, 9" },
    { label: "Reverse", value: "9, 8, 7, 6, 5, 4, 3, 2, 1" },
    { label: "Sparse", value: "5, 50, 100" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
        <PillButton color={A} active={mode === "insert"} onClick={() => setMode("insert")}>
          <span style={{ fontSize: "0.78rem" }}>Insert (with split)</span>
        </PillButton>
        <PillButton color={A} active={mode === "range"} onClick={() => setMode("range")}>
          <span style={{ fontSize: "0.78rem" }}>Range scan (leaf chain)</span>
        </PillButton>
        {mode === "range" && (
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: 8 }}>
            <span style={{ fontSize: "0.78rem", color: C.textMuted, fontWeight: 600, fontFamily: C.heading }}>lo:</span>
            <input type="number" value={lo} onChange={(e) => setLo(Number(e.target.value))}
              style={{ width: 70, padding: "4px 8px", borderRadius: 6, border: `1px solid ${C.border}`, fontFamily: C.mono, fontSize: "0.82rem", background: C.bg, color: C.text, outline: "none" }} />
            <span style={{ fontSize: "0.78rem", color: C.textMuted, fontWeight: 600, fontFamily: C.heading }}>hi:</span>
            <input type="number" value={hi} onChange={(e) => setHi(Number(e.target.value))}
              style={{ width: 70, padding: "4px 8px", borderRadius: 6, border: `1px solid ${C.border}`, fontFamily: C.mono, fontSize: "0.82rem", background: C.bg, color: C.text, outline: "none" }} />
          </div>
        )}
      </div>
      <AlgoCanvas
        title={mode === "insert" ? "B+ Tree — Insert with Split (M = 4)" : `B+ Tree — Range Scan [${lo}, ${hi}]`}
        player={player}
        input={
          <InputEditor
            label="Keys (insert in order)"
            value={keysStr}
            helper={mode === "insert"
              ? "Order M = 4. Each node holds up to 3 keys; on overflow it splits and promotes the middle key. Watch leaf overflow → split → leaf-chain relink."
              : "Tree is built from these keys, then a range scan walks the leaf chain to collect [lo, hi]. This is the operation databases use for SELECT WHERE x BETWEEN lo AND hi."}
            presets={presets}
            onApply={(v) => setKeysStr(v)}
          />
        }
        pseudocode={<PseudocodePanel lines={mode === "insert" ? PSEUDO_INSERT : PSEUDO_RANGE} activeLine={frame.line} />}
        variables={<VariablesPanel vars={frame.vars} flashKeys={frame.flashKey ? [frame.flashKey, "found"] : []} />}
        legend={
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", fontSize: "0.78rem" }}>
            <span><b style={{ color: "#8b5cf6" }}>purple dashed</b> = leaf-chain pointer (the B+ tree advantage)</span>
            <span><b style={{ color: "#06b6d4" }}>cyan</b> = leaf currently being scanned</span>
            <span><b style={{ color: "#10b981" }}>green</b> = key in range</span>
            <span><b style={{ color: "#ef4444" }}>red</b> = node split</span>
          </div>
        }
      >
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 220px", gap: 14, alignItems: "start" }}>
          <BPTreeViz frame={frame} />
          {mode === "range" ? (
            <Card>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8, fontFamily: C.heading }}>
                Range scan result
              </div>
              <div style={{
                fontFamily: C.mono, fontSize: "0.9rem", fontWeight: 700,
                color: C.successDark, marginBottom: 8,
              }}>
                {frame.scanResult && frame.scanResult.length > 0 ? `[${frame.scanResult.join(", ")}]` : "(none yet)"}
              </div>
              <div style={{ fontSize: "0.72rem", color: C.textSecondary, lineHeight: 1.5 }}>
                Leaves visited: <b style={{ color: C.text }}>{frame.scanPath?.length ?? 0}</b>
                <br />
                Keys collected: <b style={{ color: C.text }}>{frame.scanResult?.length ?? 0}</b>
                <br />
                <span style={{ fontStyle: "italic", marginTop: 6, display: "block" }}>
                  Total cost: <b>O(log n)</b> descent + <b>O(k)</b> leaf hops, where k = matches.
                </span>
              </div>
            </Card>
          ) : (
            <Card>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8, fontFamily: C.heading }}>
                B+ tree invariants
              </div>
              <ul style={{ fontSize: "0.74rem", color: C.textSecondary, lineHeight: 1.55, paddingLeft: 18, margin: 0 }}>
                <li>Order M = {M}: each node holds 1..{MAX_KEYS} keys.</li>
                <li>Internal nodes hold <b>routing keys only</b>.</li>
                <li>All <b>data lives in leaves</b>.</li>
                <li>All leaves at the <b>same depth</b>.</li>
                <li>Leaves form a <b>linked list</b> (left-to-right).</li>
              </ul>
              <div style={{ marginTop: 10, paddingTop: 8, borderTop: `1px dashed ${C.border}`, fontSize: "0.72rem", color: C.textSecondary, lineHeight: 1.5 }}>
                <span style={{ fontStyle: "italic" }}>
                  Real DB indexes use M = 100–1000 — a 4-level tree indexes ~10⁹ rows in 4 disk reads.
                </span>
              </div>
            </Card>
          )}
        </div>
      </AlgoCanvas>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn / Try / Insight                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "What is a B+ tree?", b: "A multi-way search tree of order M where each node holds up to M-1 keys and (for internal nodes) up to M children. Keys live ONLY in the leaves; internal nodes hold routing keys. Leaves form a sorted linked list." },
    { t: "Why &quot;+&quot;?", b: "B-tree has data in BOTH internal and leaf nodes. B+ tree concentrates data in leaves only — internal nodes shrink, fanout grows, scans become a leaf-chain walk. The plus is the leaf chain." },
    { t: "Built for disks", b: "Each node = one disk page (typically 4 KB or 16 KB). With M ≈ 256–1000, even 10⁹ rows fit in a 4-level tree → 4 disk seeks per lookup. Internal-node fanout is the whole game when bytes-per-seek is the limiting factor." },
    { t: "Range queries are the killer feature", b: "SELECT * WHERE id BETWEEN 100 AND 500: descend once (O(log n)), then walk leaf.next pointers collecting matches (O(k)). Plain B-trees would need a tree traversal between every match — orders of magnitude slower for range workloads." },
    { t: "Insert: descend → place → split if overflow", b: "Find the target leaf via routing keys. Insert in sorted position. If the leaf overflows (> M-1 keys), split into two halves, promote the first key of the right half into the parent, and relink leaf-chain pointers. Splits cascade up; the root may split too, growing the tree by one level." },
    { t: "Delete is harder", b: "Symmetric to insert: if a node underflows (< ⌈M/2⌉ keys), borrow from a sibling or merge with one. Production code uses lazy delete (mark tombstone) and bulk-rebuild instead — the worst-case rebalance cascade is rarely worth animating." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Database index foundation</SectionEyebrow>
        <SectionTitle>Mental model: balanced index + sorted linked list</SectionTitle>
        <Lede>
          B+ tree = balanced index on top + sorted linked list at the bottom. The tree gets you to the right leaf in O(log n); the linked list lets you scan ranges at memory-throughput speed. Every database index you&apos;ve ever queried — Postgres, MySQL, SQLite, Oracle, MongoDB — is some flavor of B+ tree.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10 }}>
        {cards.map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: A, marginBottom: 6, fontFamily: C.mono, letterSpacing: "0.08em" }}>0{i + 1}</div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 4, letterSpacing: "-0.01em" }} dangerouslySetInnerHTML={{ __html: s.t }} />
            <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }} dangerouslySetInnerHTML={{ __html: s.b }} />
          </Card>
        ))}
      </div>
    </div>
  );
}

function TryTab() {
  const probs = [
    { q: "B+ tree of order M = 100. How many keys (max) can you index in 4 levels?", a: "100^4 = 10^8" },
    { q: "Why are internal nodes stripped of data values in a B+ tree (vs a B-tree)?", a: "Higher fanout → shallower tree → fewer disk seeks" },
    { q: "Range query [10, 50] on a B+ tree of 1M keys with M=100. Expected disk seeks?", a: "~3 (descent) + a few leaf hops" },
    { q: "Insert sequence 1..16 into an empty B+ tree of order 4. After inserting 16, how many splits happened in total?", a: "More than one — try it in the visualizer" },
  ];
  const [g, setG] = useState<(string | null)[]>(probs.map(() => null));
  const [s, setS] = useState<boolean[]>(probs.map(() => false));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Reason on paper, then verify in the visualizer.</Callout>
      {probs.map((p, i) => (
        <Card key={i}>
          <div style={{ fontSize: "0.9rem", marginBottom: 8, color: C.text }}><b style={{ color: C.textMuted, fontFamily: C.mono }}>#{i + 1}</b> {p.q}</div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <input value={g[i] ?? ""} onChange={(e) => { const v = [...g]; v[i] = e.target.value; setG(v); }}
              placeholder="answer"
              style={{ padding: "7px 10px", border: `1px solid ${C.border}`, borderRadius: 8, fontFamily: C.mono, fontSize: "0.85rem", minWidth: 240, outline: "none", background: C.bg, color: C.text }} />
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
                color: C.successDark, background: `${C.success}14`, fontFamily: C.heading,
              }}>
                {p.a}
              </span>
            )}
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
        <SubHeading>The disk-page math (why fanout dominates)</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: "0 0 8px" }}>
          One SSD seek ≈ 50–100 µs. RAM access ≈ 100 ns. Ratio: <strong>~1000×</strong>. So the binding constraint on database lookups is &quot;how many disk pages must I touch?&quot; A B+ tree with order M and N rows has height <code style={{ fontFamily: C.mono }}>⌈log_M(N)⌉</code>. With M = 256:
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.84rem" }}>
          <thead>
            <tr style={{ background: C.bgSoft }}>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: C.textMuted, fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>Rows</th>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: C.textMuted, fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>B+ tree height (M=256)</th>
              <th style={{ textAlign: "left", padding: "6px 10px", fontWeight: 700, color: C.textMuted, fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>Plain BST height</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["10⁴", "~2", "~14"],
              ["10⁶", "~3", "~20"],
              ["10⁸", "~4", "~27"],
              ["10¹⁰", "~5", "~33"],
            ].map((r, i) => (
              <tr key={i} style={{ borderTop: `1px solid ${C.border}` }}>
                <td style={{ padding: "5px 10px", fontFamily: C.mono, color: C.text }}>{r[0]}</td>
                <td style={{ padding: "5px 10px", color: C.successDark, fontWeight: 700 }}>{r[1]}</td>
                <td style={{ padding: "5px 10px", color: C.dangerDark }}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: "0.84rem", color: C.textSecondary, lineHeight: 1.55, marginTop: 8, marginBottom: 0 }}>
          A 5-level B+ tree is essentially universal — even Google&apos;s entire search index fits inside 5–6 levels.
        </p>
      </Card>
      <Card>
        <SubHeading>B-tree vs B+ tree — when each wins</SubHeading>
        <ul style={{ fontSize: "0.86rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
          <li><strong>B-tree</strong>: data inline at internal nodes too. Random point-lookup can finish higher in the tree (good if frequently accessed keys are near the root). Used in some legacy NoSQL stores.</li>
          <li><strong>B+ tree</strong>: ALL data in leaves; internal nodes are just routing → higher fanout, shallower tree. Range queries cost O(log n + k) via the leaf chain. <strong>The default for almost every modern DB index.</strong></li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Where B+ trees power your day</SubHeading>
        <ul style={{ fontSize: "0.86rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
          <li><strong>PostgreSQL</strong>: default index is a B+ tree (page size 8 KB).</li>
          <li><strong>MySQL InnoDB</strong>: clustered index = B+ tree on the primary key; secondary indexes = B+ trees pointing back to the primary.</li>
          <li><strong>SQLite</strong>: every table and index is a B+ tree (the entire database file is a tree of trees).</li>
          <li><strong>Filesystems</strong>: NTFS (B+ trees for $MFT), ext4 (h-tree directory index), APFS, XFS — all use B+ tree variants for directory lookup.</li>
          <li><strong>MongoDB</strong>: WiredTiger storage engine uses B+ trees (and LSM-trees as an option).</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>The LSM-tree alternative (write-heavy workloads)</SubHeading>
        <p style={{ fontSize: "0.88rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          B+ trees update in place — every write is potentially a random write. <strong>Log-Structured Merge trees</strong> (LSM) buffer writes in a memtable, periodically flush sorted runs to disk, and merge them in the background. Writes become sequential (great for SSDs), reads are slower (must check multiple levels). Used in <strong>RocksDB, LevelDB, Cassandra, HBase, ScyllaDB</strong>. The B+ tree vs LSM tradeoff is one of the biggest design decisions in modern data systems.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                            */
/* ------------------------------------------------------------------ */

export default function DSA_L3_BPlusTreeActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];
  const quiz: EngQuizQuestion[] = [
    {
      question: "In a B+ tree, where does the actual data (key→value mapping) live?",
      options: ["In the root", "In internal nodes", "In leaf nodes only", "In a separate hash table"],
      correctIndex: 2,
      explanation: "Internal nodes hold ROUTING keys only — the data lives exclusively in the leaves. This is the defining 'plus' that distinguishes B+ from B-tree.",
    },
    {
      question: "What is the height of a B+ tree of order M = 100 indexing 10⁸ rows?",
      options: ["~7", "~4", "~26", "~14"],
      correctIndex: 1,
      explanation: "log₁₀₀(10⁸) = 4. So 4 levels suffice — meaning ~4 disk reads per lookup, vs ~26 for a binary tree.",
    },
    {
      question: "Why are leaves in a B+ tree linked together?",
      options: [
        "To save memory",
        "To make in-order traversal cache-friendly",
        "So range queries can scan in O(log n + k) by descending once and following next-pointers",
        "Required by ACID compliance",
      ],
      correctIndex: 2,
      explanation: "The leaf chain turns range queries into a single O(log n) descent + O(k) sequential walk. Without it, range queries would need a full tree traversal between every match.",
    },
    {
      question: "When inserting into a B+ tree leaf that's already full, what happens?",
      options: [
        "The insertion is rejected",
        "The leaf is split in half; the first key of the new right leaf is promoted to the parent (and parent splits cascade upward if needed)",
        "The tree is rebuilt from scratch",
        "A new root is always created",
      ],
      correctIndex: 1,
      explanation: "The leaf splits, the smallest key of the right half is COPIED up as a routing key in the parent, and leaf-chain pointers are relinked (left.next = right; right.next = old next). If the parent overflows, it splits too, recursively up to the root.",
    },
    {
      question: "Which is NOT typically backed by a B+ tree?",
      options: ["PostgreSQL btree index", "MySQL InnoDB clustered index", "Cassandra's main storage (SSTables)", "SQLite tables and indexes"],
      correctIndex: 2,
      explanation: "Cassandra (and RocksDB, LevelDB) uses Log-Structured Merge trees, not B+ trees — optimized for write-heavy workloads. The other three are all B+ trees.",
    },
  ];
  return (
    <EngineeringLessonShell
      title="B+ Tree (Database Index)"
      level={3}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Critical - every database index you've ever queried uses one. System-design must-know."
      nextLessonHint="Heaps & Priority Queues"
    />
  );
}
