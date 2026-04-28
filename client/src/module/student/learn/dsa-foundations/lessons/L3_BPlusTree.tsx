import { useMemo, useState } from "react";
import { BookOpen, Lightbulb, Play, Target } from "lucide-react";
import {
  LessonShell,
  type LessonQuizQuestion,
  type LessonTabDef,
} from "../../../../../components/dsa-theory/LessonShell";
import {
  AlgoCanvas,
  InputEditor,
  PseudocodePanel,
  useStepPlayer,
  VariablesPanel,
} from "../../../../../components/dsa-theory/algo";
import {
  Callout,
  Card,
  InlineCode,
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";

/* ------------------------------------------------------------------ */
/*  B+ tree model (order M = 4)                                         */
/* ------------------------------------------------------------------ */

const M = 4;
const MAX_KEYS = M - 1;

interface BPNode {
  id: string;
  isLeaf: boolean;
  keys: number[];
  children: string[];
  next?: string;
  parent?: string;
  highlight?: "active" | "split" | "scan" | "match" | "compare";
}

interface BPFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodes: Record<string, BPNode>;
  rootId?: string;
  scanPath?: string[];
  scanResult?: number[];
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
  "# Range scan [lo, hi], the B+ tree advantage",
  "function rangeScan(lo, hi):",
  "  leaf ← descend from root looking for lo",
  "  scan keys in this leaf ≥ lo",
  "  while leaf.next exists and leaf.last < hi:",
  "    leaf ← leaf.next       # FOLLOW THE LEAF CHAIN",
  "    collect keys in [lo, hi]",
  "  return collected   # O(log n + k), k = matches",
];

let nextId = 0;
const mkId = () => `b${nextId++}`;
function resetIds() { nextId = 0; }

function cloneNodes(ns: Record<string, BPNode>): Record<string, BPNode> {
  const out: Record<string, BPNode> = {};
  for (const k in ns) out[k] = { ...ns[k], keys: [...ns[k].keys], children: [...ns[k].children], highlight: undefined };
  return out;
}

function buildInsertFrames(keys: number[]): BPFrame[] {
  resetIds();
  const frames: BPFrame[] = [];
  const nodes: Record<string, BPNode> = {};
  let rootId: string | undefined;

  const snap = (
    line: number,
    message: string,
    highlightId?: string,
    hl?: BPNode["highlight"],
    flashKey?: string,
  ) => {
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

  function insertIntoNode(node: BPNode, key: number, _leftChild?: string, rightChild?: string) {
    let i = 0;
    while (i < node.keys.length && node.keys[i] < key) i++;
    node.keys.splice(i, 0, key);
    if (!node.isLeaf && rightChild) {
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
    n.keys.pop();
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

  function insertWithFixup(
    targetId: string,
    promoteKey: number,
    leftChildId: string,
    rightChildId: string,
  ) {
    if (!nodes[targetId].parent) {
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
      snap(8, `Root overflowed, create new root holding routing key ${promoteKey}.`, newRootId, "active", "newRoot");
      return;
    }
    const parentId = nodes[targetId].parent!;
    insertIntoNode(nodes[parentId], promoteKey, leftChildId, rightChildId);
    nodes[rightChildId].parent = parentId;
    snap(7, `Promote ${promoteKey} into parent. Parent now has keys [${nodes[parentId].keys.join(",")}].`, parentId, "active", "promote");
    if (nodes[parentId].keys.length > MAX_KEYS) {
      const { promoteKey: pk, rightId: rid } = splitInternal(parentId);
      snap(6, `Internal overflow, split. New internal sibling holds keys [${nodes[rid].keys.join(",")}]. Promote ${pk}.`, rid, "split");
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
      snap(3, `Key ${key} already in leaf, duplicate, skipping.`, leafId, "compare");
      continue;
    }
    insertIntoNode(nodes[leafId], key);
    snap(3, `Inserted ${key} into leaf. Leaf keys: [${nodes[leafId].keys.join(",")}].`, leafId, "active", "insert");
    if (nodes[leafId].keys.length > MAX_KEYS) {
      const { promoteKey, rightId } = splitLeaf(leafId);
      snap(
        5,
        `Leaf overflowed (${MAX_KEYS + 1} > ${MAX_KEYS}). Split: left = [${nodes[leafId].keys.join(",")}], right = [${nodes[rightId].keys.join(",")}]. Relink.`,
        rightId,
        "split",
      );
      insertWithFixup(leafId, promoteKey, leafId, rightId);
    }
  }
  snap(0, `Done. ${Object.keys(nodes).length} nodes total. Try the range-scan mode to see the leaf chain in action.`);
  return frames;
}

function buildRangeScanFrames(keys: number[], lo: number, hi: number): BPFrame[] {
  const insertHistory = buildInsertFrames(keys);
  const finalNodes = insertHistory[insertHistory.length - 1].nodes;
  const finalRoot = insertHistory[insertHistory.length - 1].rootId;
  const out: BPFrame[] = [];

  const cloneCurr = (highlights: Record<string, BPNode["highlight"]>): Record<string, BPNode> => {
    const c = cloneNodes(finalNodes);
    for (const id in highlights) if (c[id]) c[id].highlight = highlights[id];
    return c;
  };

  const collected: number[] = [];
  const scanPath: string[] = [];

  const push = (
    line: number,
    message: string,
    highlights: Record<string, BPNode["highlight"]> = {},
    flashKey?: string,
  ) => {
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

  let cur: string = finalRoot;
  while (!finalNodes[cur].isLeaf) {
    const ks = finalNodes[cur].keys;
    let i = 0;
    while (i < ks.length && lo >= ks[i]) i++;
    push(2, `At internal node [${ks.join(",")}]. Child[${i}] (lo=${lo}).`, { [cur]: "compare" });
    cur = finalNodes[cur].children[i];
  }

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
        push(5, `${k} is in [${lo}, ${hi}], collect. Result: [${collected.join(",")}].`, { [leafId]: "match" }, "result");
      }
    }
    const last = leafKeys[leafKeys.length - 1];
    if (last !== undefined && last >= hi) {
      push(7, `Last key (${last}) ≥ hi (${hi}), stop. ${foundAny ? "" : "(No matches in this leaf.)"}`, { [leafId]: "match" });
      break;
    }
    if (!finalNodes[leafId].next) {
      push(7, `End of leaf chain reached. Done.`, { [leafId]: "match" });
      break;
    }
    push(6, `Last key (${last}) < hi (${hi}), follow leaf.next pointer.`, { [leafId]: "scan" });
    leafId = finalNodes[leafId].next;
  }
  push(8, `Range scan complete. ${collected.length} key(s) found in [${lo}, ${hi}]: [${collected.join(", ")}]. Cost: O(log n) descent + O(k) leaf hops.`);
  return out;
}

/* ------------------------------------------------------------------ */
/*  BPTree SVG Visualization                                            */
/* ------------------------------------------------------------------ */

interface NodeLayout { x: number; y: number; w: number; h: number; }

function layoutTree(
  nodes: Record<string, BPNode>,
  rootId: string | undefined,
  viewW: number,
): { layout: Record<string, NodeLayout>; height: number } {
  if (!rootId) return { layout: {}, height: 60 };
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

function colorForNode(n: BPNode): { fill: string; border: string; fg: string } {
  if (n.highlight === "split") return { fill: "rgba(239,68,68,0.18)", border: "#ef4444", fg: "#7f1d1d" };
  if (n.highlight === "match") return { fill: "rgba(16,185,129,0.18)", border: "#10b981", fg: "#065f46" };
  if (n.highlight === "scan") return { fill: "rgba(6,182,212,0.18)", border: "#06b6d4", fg: "#0e7490" };
  if (n.highlight === "compare") return { fill: "rgba(245,158,11,0.18)", border: "#f59e0b", fg: "#92400e" };
  if (n.highlight === "active") return { fill: "rgba(163,230,53,0.18)", border: "#a3e635", fg: "#1a2e05" };
  return n.isLeaf
    ? { fill: "rgba(139,92,246,0.10)", border: "#8b5cf6", fg: "#5b21b6" }
    : { fill: THEME.bg, border: THEME.border, fg: THEME.text };
}

function BPTreeViz({ frame }: { frame: BPFrame }) {
  const W = 720;
  const { layout, height } = useMemo(
    () => layoutTree(frame.nodes, frame.rootId, W),
    [frame.nodes, frame.rootId],
  );
  const ids = Object.keys(frame.nodes);

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
      {ids.map((id) => {
        const n = frame.nodes[id];
        if (n.isLeaf) return null;
        const a = layout[id];
        if (!a) return null;
        return n.children.map((cid, i) => {
          const b = layout[cid];
          if (!b) return null;
          const slots = n.children.length;
          const ax = a.x + ((i + 0.5) / slots) * a.w;
          return (
            <line
              key={`${id}-${cid}`}
              x1={ax} y1={a.y + a.h}
              x2={b.x + b.w / 2} y2={b.y}
              stroke="#94a3b8" strokeWidth={1.5}
              markerEnd="url(#bp-arrow)"
            />
          );
        });
      })}
      {ids.map((id) => {
        const n = frame.nodes[id];
        if (!n.isLeaf || !n.next) return null;
        const a = layout[id], b = layout[n.next];
        if (!a || !b) return null;
        return (
          <line
            key={`${id}-next`}
            x1={a.x + a.w} y1={a.y + a.h / 2}
            x2={b.x} y2={b.y + b.h / 2}
            stroke="#8b5cf6" strokeWidth={2} strokeDasharray="4 3"
            markerEnd="url(#bp-leaf)"
          />
        );
      })}
      {ids.map((id) => {
        const n = frame.nodes[id];
        const a = layout[id];
        if (!a) return null;
        const c = colorForNode(n);
        return (
          <g key={id}>
            <rect
              x={a.x} y={a.y} width={a.w} height={a.h} rx={6}
              fill={c.fill} stroke={c.border} strokeWidth={2}
              style={{ transition: "all 0.3s" }}
            />
            {n.keys.map((k, i) => {
              const segW = a.w / Math.max(1, n.keys.length);
              return (
                <text
                  key={i}
                  x={a.x + (i + 0.5) * segW} y={a.y + a.h / 2 + 4}
                  textAnchor="middle"
                  fontSize={13} fontWeight={700} fill={c.fg}
                  fontFamily={THEME.mono}
                >
                  {k}
                </text>
              );
            })}
            {n.keys.slice(0, -1).map((_, i) => {
              const segW = a.w / Math.max(1, n.keys.length);
              return (
                <line
                  key={`d${i}`}
                  x1={a.x + (i + 1) * segW} y1={a.y + 4}
                  x2={a.x + (i + 1) * segW} y2={a.y + a.h - 4}
                  stroke={c.border} strokeWidth={1} opacity={0.5}
                />
              );
            })}
            <text
              x={a.x + a.w / 2} y={a.y - 4}
              textAnchor="middle" fontSize={9} fontWeight={700}
              fill={THEME.textMuted} fontFamily={THEME.heading}
              letterSpacing="0.06em"
            >
              {n.isLeaf ? "LEAF" : "INTERNAL"}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                       */
/* ------------------------------------------------------------------ */

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
  const frame = player.current;

  const presets = [
    { label: "Classic 11 keys", value: "10, 20, 30, 5, 15, 25, 35, 12, 18, 22, 28" },
    { label: "Ascending (cascade splits)", value: "1, 2, 3, 4, 5, 6, 7, 8, 9" },
    { label: "Reverse", value: "9, 8, 7, 6, 5, 4, 3, 2, 1" },
    { label: "Sparse", value: "5, 50, 100" },
  ];

  return (
    <AlgoCanvas
      title={mode === "insert" ? "B+ Tree, Insert with Split (M = 4)" : `B+ Tree, Range Scan [${lo}, ${hi}]`}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <InputEditor
            label="Keys (insert in order)"
            value={keysStr}
            helper={
              mode === "insert"
                ? "Order M = 4. Each node holds up to 3 keys; on overflow it splits and promotes the middle key."
                : "Tree is built from these keys, then a range scan walks the leaf chain to collect [lo, hi]."
            }
            presets={presets}
            onApply={(v) => setKeysStr(v)}
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">/ mode</label>
            <div className="flex flex-wrap gap-1.5">
              <PillButton active={mode === "insert"} onClick={() => setMode("insert")}>
                <span className="text-[11px] font-semibold">Insert (with split)</span>
              </PillButton>
              <PillButton active={mode === "range"} onClick={() => setMode("range")}>
                <span className="text-[11px] font-semibold">Range scan (leaf chain)</span>
              </PillButton>
            </div>
          </div>
          {mode === "range" && (
            <div className="flex items-center gap-2 flex-wrap">
              <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">lo:</label>
              <input
                type="number" value={lo} onChange={(e) => setLo(Number(e.target.value))}
                className="w-16 px-2 py-1 border border-stone-300 dark:border-white/10 rounded-md text-sm font-mono bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 outline-none"
              />
              <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">hi:</label>
              <input
                type="number" value={hi} onChange={(e) => setHi(Number(e.target.value))}
                className="w-16 px-2 py-1 border border-stone-300 dark:border-white/10 rounded-md text-sm font-mono bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 outline-none"
              />
            </div>
          )}
        </div>
      }
      pseudocode={
        <PseudocodePanel
          lines={mode === "insert" ? PSEUDO_INSERT : PSEUDO_RANGE}
          activeLine={frame?.line}
        />
      }
      variables={
        <VariablesPanel
          vars={frame?.vars ?? {}}
          flashKeys={frame?.flashKey ? [frame.flashKey, "found"] : []}
        />
      }
    >
      <div className="flex flex-col gap-4">
        <div className="overflow-x-auto rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 p-2">
          {frame && <BPTreeViz frame={frame} />}
        </div>
        {mode === "range" && frame && (
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
              / range scan result
            </div>
            <div className="font-mono text-sm font-bold text-lime-700 dark:text-lime-400 mb-2">
              {frame.scanResult && frame.scanResult.length > 0
                ? `[${frame.scanResult.join(", ")}]`
                : "(none yet)"}
            </div>
            <div className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed space-y-0.5">
              <div>Leaves visited: <strong className="text-stone-900 dark:text-stone-50">{frame.scanPath?.length ?? 0}</strong></div>
              <div>Keys collected: <strong className="text-stone-900 dark:text-stone-50">{frame.scanResult?.length ?? 0}</strong></div>
              <div className="italic mt-1">Total cost: <strong>O(log n)</strong> descent + <strong>O(k)</strong> leaf hops.</div>
            </div>
          </div>
        )}
        {mode === "insert" && (
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
              / B+ tree invariants
            </div>
            <ul className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed list-disc pl-4 space-y-1">
              <li>Order M = {M}: each node holds 1–{MAX_KEYS} keys.</li>
              <li>Internal nodes hold <strong>routing keys only</strong>.</li>
              <li>All <strong>data lives in leaves</strong>.</li>
              <li>All leaves at the <strong>same depth</strong>.</li>
              <li>Leaves form a <strong>linked list</strong> (left-to-right).</li>
            </ul>
            <p className="text-xs text-stone-500 italic mt-2 leading-relaxed">
              Real DB indexes use M = 100–1000, a 4-level tree indexes ~10⁹ rows in 4 disk reads.
            </p>
          </div>
        )}
        <div className="flex flex-wrap gap-3 text-xs text-stone-500">
          <span><strong className="text-purple-600 dark:text-purple-400">purple dashed</strong> = leaf-chain pointer</span>
          <span><strong className="text-cyan-600 dark:text-cyan-400">cyan</strong> = leaf being scanned</span>
          <span><strong className="text-emerald-600 dark:text-emerald-400">green</strong> = key in range</span>
          <span><strong className="text-red-600 dark:text-red-400">red</strong> = node split</span>
        </div>
        <Callout className="w-full">{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                           */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "What is a B+ tree?", b: "A multi-way search tree of order M where each node holds up to M-1 keys and (for internal nodes) up to M children. Keys live ONLY in the leaves; internal nodes hold routing keys. Leaves form a sorted linked list." },
    { t: 'Why "+"?', b: "B-tree has data in BOTH internal and leaf nodes. B+ tree concentrates data in leaves only, internal nodes shrink, fanout grows, scans become a leaf-chain walk. The plus is the leaf chain." },
    { t: "Built for disks", b: "Each node = one disk page (typically 4 KB or 16 KB). With M approximately 256–1000, even 10⁹ rows fit in a 4-level tree, 4 disk seeks per lookup. Internal-node fanout is the whole game when bytes-per-seek is the limiting factor." },
    { t: "Range queries are the killer feature", b: "SELECT * WHERE id BETWEEN 100 AND 500: descend once (O(log n)), then walk leaf.next pointers collecting matches (O(k)). Plain B-trees would need a tree traversal between every match, orders of magnitude slower for range workloads." },
    { t: "Insert: descend, place, split if overflow", b: "Find the target leaf via routing keys. Insert in sorted position. If the leaf overflows (more than M-1 keys), split into two halves, promote the first key of the right half into the parent, and relink leaf-chain pointers. Splits cascade up; the root may split too, growing the tree by one level." },
    { t: "Delete is harder", b: "Symmetric to insert: if a node underflows (fewer than ceil(M/2) keys), borrow from a sibling or merge with one. Production code uses lazy delete (mark tombstone) and bulk-rebuild instead, the worst-case rebalance cascade is rarely worth animating." },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>database index foundation</SectionEyebrow>
        <SectionTitle>Mental model: balanced index + sorted linked list</SectionTitle>
        <Lede>
          B+ tree = balanced index on top + sorted linked list at the bottom. The tree gets you to
          the right leaf in O(log n); the linked list lets you scan ranges at memory-throughput speed.
          Every database index you have ever queried, Postgres, MySQL, SQLite, Oracle, MongoDB, is
          some flavor of B+ tree.
        </Lede>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cards.map((s, i) => (
          <div
            key={i}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5"
          >
            <div className="text-[10px] font-mono font-bold text-lime-600 dark:text-lime-400 mb-2 tracking-widest uppercase">
              0{i + 1}
            </div>
            <div className="font-bold text-sm text-stone-900 dark:text-stone-50 mb-1.5">{s.t}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.b}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It tab                                                          */
/* ------------------------------------------------------------------ */

function TryTab() {
  const probs = [
    { q: "B+ tree of order M = 100. How many keys (max) can you index in 4 levels?", a: "100^4 = 10^8" },
    { q: "Why are internal nodes stripped of data values in a B+ tree (vs a B-tree)?", a: "Higher fanout → shallower tree → fewer disk seeks" },
    { q: "Range query [10, 50] on a B+ tree of 1M keys with M=100. Expected disk seeks?", a: "~3 (descent) + a few leaf hops" },
    { q: "Insert sequence 1..16 into an empty B+ tree of order 4. After inserting 16, how many splits happened in total?", a: "More than one, try it in the visualizer" },
  ];
  const [g, setG] = useState<(string | null)[]>(probs.map(() => null));
  const [s, setS] = useState<boolean[]>(probs.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>Reason on paper, then verify in the visualizer.</Callout>
      {probs.map((p, i) => (
        <div
          key={i}
          className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4"
        >
          <div className="text-sm text-stone-900 dark:text-stone-50 mb-3">
            <span className="font-bold font-mono text-stone-500 mr-2">#{i + 1}</span>
            {p.q}
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            <input
              type="text"
              value={g[i] ?? ""}
              onChange={(e) => { const v = [...g]; v[i] = e.target.value; setG(v); }}
              placeholder="answer"
              className="px-3 py-1.5 border border-stone-300 dark:border-white/10 rounded-md text-sm font-mono min-w-60 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 outline-none"
            />
            <button
              type="button"
              onClick={() => { const v = [...s]; v[i] = true; setS(v); }}
              className="px-3 py-1.5 rounded-md border border-stone-300 dark:border-white/10 text-xs font-bold bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400 cursor-pointer hover:border-stone-500 dark:hover:border-white/30 transition-colors"
            >
              Reveal
            </button>
            {s[i] && (
              <span className="text-xs font-bold px-3 py-1.5 rounded-md bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-400">
                {p.a}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Insight tab                                                         */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>The disk-page math (why fanout dominates)</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
          One SSD seek is approximately 50–100 µs. RAM access is approximately 100 ns. Ratio: about
          1000x. So the binding constraint on database lookups is "how many disk pages must I touch?"
          A B+ tree with order M and N rows has height <InlineCode>ceil(log_M(N))</InlineCode>. With
          M = 256:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-stone-50 dark:bg-stone-950/50">
              <tr>
                {["Rows", "B+ tree height (M=256)", "Plain BST height"].map((h) => (
                  <th
                    key={h}
                    className="text-left px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 border-b border-stone-200 dark:border-white/10"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["10⁴", "~2", "~14"],
                ["10⁶", "~3", "~20"],
                ["10⁸", "~4", "~27"],
                ["10¹⁰", "~5", "~33"],
              ].map((r, i) => (
                <tr key={i} className="border-t border-stone-100 dark:border-white/5">
                  <td className="px-3 py-2 font-mono text-stone-900 dark:text-stone-50">{r[0]}</td>
                  <td className="px-3 py-2 font-bold text-lime-700 dark:text-lime-400">{r[1]}</td>
                  <td className="px-3 py-2 text-rose-700 dark:text-rose-400">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 mt-3 leading-relaxed">
          A 5-level B+ tree is essentially universal, even very large indexes fit inside 5–6 levels.
        </p>
      </Card>
      <Card>
        <SubHeading>B-tree vs B+ tree, when each wins</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed list-disc pl-5 space-y-2">
          <li>
            <strong className="text-stone-900 dark:text-stone-50">B-tree:</strong> data inline at
            internal nodes too. Random point-lookup can finish higher in the tree. Used in some
            legacy NoSQL stores.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">B+ tree:</strong> ALL data in
            leaves; internal nodes are just routing, higher fanout, shallower tree. Range queries
            cost O(log n + k) via the leaf chain. The default for almost every modern DB index.
          </li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Where B+ trees power your day</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed list-disc pl-5 space-y-2">
          <li><strong className="text-stone-900 dark:text-stone-50">PostgreSQL:</strong> default index is a B+ tree (page size 8 KB).</li>
          <li><strong className="text-stone-900 dark:text-stone-50">MySQL InnoDB:</strong> clustered index = B+ tree on the primary key; secondary indexes point back to the primary.</li>
          <li><strong className="text-stone-900 dark:text-stone-50">SQLite:</strong> every table and index is a B+ tree.</li>
          <li><strong className="text-stone-900 dark:text-stone-50">Filesystems:</strong> NTFS, ext4, APFS, XFS, all use B+ tree variants for directory lookup.</li>
          <li><strong className="text-stone-900 dark:text-stone-50">MongoDB:</strong> WiredTiger storage engine uses B+ trees.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>The LSM-tree alternative (write-heavy workloads)</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          B+ trees update in place, every write is potentially a random write. Log-Structured Merge
          trees (LSM) buffer writes in a memtable, periodically flush sorted runs to disk, and merge
          them in the background. Writes become sequential (great for SSDs), reads are slower (must
          check multiple levels). Used in RocksDB, LevelDB, Cassandra, HBase, ScyllaDB. The B+ tree
          vs LSM tradeoff is one of the biggest design decisions in modern data systems.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Root export                                                         */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L3_BPlusTree({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "In a B+ tree, where does the actual data (key→value mapping) live?",
      options: ["In the root", "In internal nodes", "In leaf nodes only", "In a separate hash table"],
      correctIndex: 2,
      explanation: "Internal nodes hold ROUTING keys only, the data lives exclusively in the leaves. This is the defining 'plus' that distinguishes B+ from B-tree.",
    },
    {
      question: "What is the height of a B+ tree of order M = 100 indexing 10⁸ rows?",
      options: ["~7", "~4", "~26", "~14"],
      correctIndex: 1,
      explanation: "log₁₀₀(10⁸) = 4. So 4 levels suffice, meaning ~4 disk reads per lookup, vs ~26 for a binary tree.",
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
      explanation: "Cassandra (and RocksDB, LevelDB) uses Log-Structured Merge trees, not B+ trees, optimized for write-heavy workloads. The other three are all B+ trees.",
    },
  ];

  return (
    <LessonShell
      title="B+ Trees"
      level={3}
      lessonNumber={8}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Critical, every database index you've ever queried uses one. System-design must-know."
      nextLessonHint="Graph Representation"
      onQuizComplete={onQuizComplete}
    />
  );
}
