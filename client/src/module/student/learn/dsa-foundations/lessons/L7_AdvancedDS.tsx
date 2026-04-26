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
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";

const PRACTICE_TOPIC_SLUG: string | null = null;

/* ------------------------------------------------------------------ */
/*  Common helpers                                                      */
/* ------------------------------------------------------------------ */

interface BaseFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
}

function parseInts(s: string, maxN = 14): number[] | null {
  const nums = s.split(/[,\s]+/).map(Number).filter((x) => !Number.isNaN(x));
  if (nums.length === 0 || nums.length > maxN) return null;
  return nums;
}

/* ================================================================== */
/*  B-TREE (order t=2, max 3 keys per node)                            */
/* ================================================================== */

interface BNode { id: string; keys: number[]; children: string[]; }
interface BFrame extends BaseFrame {
  nodes: Record<string, BNode>;
  rootId: string;
  activeId?: string;
  splittingId?: string;
}

const PSEUDO_B = [
  "# B-Tree insert (order t=2, max 3 keys)",
  "function insert(key):",
  "  if root is full: split root (new root created)",
  "  insertNonFull(root, key)",
  "function insertNonFull(x, k):",
  "  if x is leaf: insert k in sorted position",
  "  else: descend to child; split if child full",
];

function cloneBNodes(n: Record<string, BNode>): Record<string, BNode> {
  const r: Record<string, BNode> = {};
  for (const k in n) r[k] = { ...n[k], keys: [...n[k].keys], children: [...n[k].children] };
  return r;
}

function buildBFrames(keysToInsert: number[]): BFrame[] {
  const frames: BFrame[] = [];
  let idCounter = 0;
  const mkId = () => `b${idCounter++}`;
  const MAX_KEYS = 3;
  const nodes: Record<string, BNode> = {};
  let rootId = mkId();
  nodes[rootId] = { id: rootId, keys: [], children: [] };

  function snapshot(msg: string, line: number, activeId?: string, extra: Partial<BFrame> = {}) {
    frames.push({ line, vars: { keys: keysToInsert.join(","), nodes: Object.keys(nodes).length, root: rootId }, message: msg, nodes: cloneBNodes(nodes), rootId, activeId, ...extra });
  }

  function splitChild(parent: BNode, idx: number) {
    const child = nodes[parent.children[idx]];
    const midKey = child.keys[1];
    const right: BNode = { id: mkId(), keys: child.keys.slice(2), children: child.children.slice(2) };
    child.keys = child.keys.slice(0, 1);
    child.children = child.children.slice(0, 2);
    nodes[right.id] = right;
    parent.keys.splice(idx, 0, midKey);
    parent.children.splice(idx + 1, 0, right.id);
    snapshot(`Split child: lift ${midKey} up, create new right node.`, 2, parent.id, { splittingId: right.id });
  }

  function insertNonFull(x: BNode, k: number) {
    if (x.children.length === 0) {
      let i = x.keys.length - 1;
      while (i >= 0 && x.keys[i] > k) i--;
      x.keys.splice(i + 1, 0, k);
      snapshot(`Inserted ${k} into leaf node.`, 5, x.id);
    } else {
      let i = x.keys.length - 1;
      while (i >= 0 && x.keys[i] > k) i--;
      i++;
      const child = nodes[x.children[i]];
      snapshot(`Descend into child for ${k}.`, 6, child.id);
      if (child.keys.length === MAX_KEYS) {
        splitChild(x, i);
        if (k > x.keys[i]) i++;
      }
      insertNonFull(nodes[x.children[i]], k);
    }
  }

  snapshot("Empty B-Tree. Start inserting keys.", 0);
  for (const k of keysToInsert) {
    snapshot(`Insert ${k}.`, 1);
    const root = nodes[rootId];
    if (root.keys.length === MAX_KEYS) {
      const newRoot: BNode = { id: mkId(), keys: [], children: [rootId] };
      nodes[newRoot.id] = newRoot;
      rootId = newRoot.id;
      splitChild(newRoot, 0);
    }
    insertNonFull(nodes[rootId], k);
  }
  snapshot("Done.", 0);
  return frames;
}

function BTreeNode({ node, activeId, splittingId }: { node: BNode; activeId?: string; splittingId?: string }) {
  const isActive = node.id === activeId;
  const isSplit = node.id === splittingId;
  return (
    <div
      className="flex rounded-lg transition-all"
      style={{
        border: isSplit ? "2px solid #f59e0b" : isActive ? `2px solid ${THEME.accent}` : `1.5px solid ${THEME.border}`,
        background: isActive ? `${THEME.accent}10` : isSplit ? "rgba(245,158,11,0.1)" : THEME.bg,
        padding: "4px 2px",
      }}
    >
      {node.keys.map((k, i) => (
        <div
          key={i}
          className="px-2.5 py-1 font-mono font-extrabold text-sm"
          style={{
            borderRight: i < node.keys.length - 1 ? `1px solid ${THEME.border}` : "none",
            color: THEME.text,
          }}
        >
          {k}
        </div>
      ))}
      {node.keys.length === 0 && (
        <div className="px-2.5 py-1 text-stone-400 italic text-xs">empty</div>
      )}
    </div>
  );
}

function BTreeViz({ frame }: { frame: BFrame }) {
  const levels: string[][] = [];
  const visit = (id: string, depth: number) => {
    (levels[depth] ||= []).push(id);
    for (const c of frame.nodes[id].children) visit(c, depth + 1);
  };
  if (frame.nodes[frame.rootId]) visit(frame.rootId, 0);
  return (
    <div className="flex flex-col gap-3.5 items-center">
      {levels.map((lv, i) => (
        <div key={i} className="flex gap-4 justify-center flex-wrap">
          {lv.map((id) => (
            <BTreeNode key={id} node={frame.nodes[id]} activeId={frame.activeId} splittingId={frame.splittingId} />
          ))}
        </div>
      ))}
    </div>
  );
}

function BTreeVisualizer() {
  const [src, setSrc] = useState("10, 20, 5, 6, 12, 30, 7, 17");
  const keys = parseInts(src) ?? [10, 20, 5, 6, 12, 30, 7, 17];
  const frames = useMemo(() => buildBFrames(keys), [keys]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  return (
    <AlgoCanvas
      title="B-Tree Insertion (order t=2, max 3 keys/node)"
      player={player}
      input={
        <InputEditor
          label="Keys to insert (comma-separated, up to 14)"
          value={src}
          presets={[
            { label: "Classic", value: "10, 20, 5, 6, 12, 30, 7, 17" },
            { label: "Ascending", value: "1, 2, 3, 4, 5, 6, 7, 8" },
            { label: "Random", value: "50, 30, 20, 70, 40, 10, 60" },
          ]}
          onApply={(v) => { if (parseInts(v)) setSrc(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_B} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} />}
    >
      <div className="flex flex-col gap-3.5">
        {frame && <BTreeViz frame={frame} />}
        <Callout>{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ================================================================== */
/*  RED-BLACK TREE                                                      */
/* ================================================================== */

type RBColor = "R" | "B";
interface RBNode { id: string; key: number; color: RBColor; left?: string; right?: string; parent?: string }
interface RBFrame extends BaseFrame {
  nodes: Record<string, RBNode>;
  rootId?: string;
  activeId?: string;
}

const PSEUDO_RB = [
  "# Red-Black insert (nodes start RED)",
  "function insert(key):",
  "  standard BST insert, new node = RED",
  "  fixUp() while parent is RED:",
  "    Case 1: uncle RED -> recolor parent, uncle BLACK",
  "    Case 2: zig-zag -> rotate parent",
  "    Case 3: straight line -> rotate grandparent + recolor",
  "  root.color = BLACK",
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

  function snap(msg: string, line: number, activeId?: string) {
    frames.push({ line, vars: { nodes: Object.keys(nodes).length, root: rootId ?? "-" }, message: msg, nodes: cloneRB(nodes), rootId, activeId });
  }

  function rotateLeft(xId: string) {
    const x = nodes[xId]; const yId = x.right!; const y = nodes[yId];
    x.right = y.left;
    if (y.left) nodes[y.left].parent = xId;
    y.parent = x.parent;
    if (!x.parent) rootId = yId;
    else { const p = nodes[x.parent]; if (p.left === xId) p.left = yId; else p.right = yId; }
    y.left = xId; x.parent = yId;
  }
  function rotateRight(xId: string) {
    const x = nodes[xId]; const yId = x.left!; const y = nodes[yId];
    x.left = y.right;
    if (y.right) nodes[y.right].parent = xId;
    y.parent = x.parent;
    if (!x.parent) rootId = yId;
    else { const p = nodes[x.parent]; if (p.left === xId) p.left = yId; else p.right = yId; }
    y.right = xId; x.parent = yId;
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
          nodes[pId].color = "B"; nodes[uncleId].color = "B"; g.color = "R";
          snap(`Case 1: uncle red -> recolor parent+uncle BLACK, grandparent RED.`, 4, gId);
          zId = gId;
        } else {
          if (zId === nodes[pId].right) { zId = pId; rotateLeft(zId); snap("Case 2: rotate left.", 5, zId); }
          nodes[nodes[zId].parent!].color = "B";
          nodes[nodes[nodes[zId].parent!].parent!].color = "R";
          rotateRight(nodes[nodes[zId].parent!].parent!);
          snap("Case 3: rotate right + recolor.", 6, zId);
        }
      } else {
        const uncleId = g.left;
        if (uncleId && nodes[uncleId].color === "R") {
          nodes[pId].color = "B"; nodes[uncleId].color = "B"; g.color = "R";
          snap(`Case 1 (mirror): recolor.`, 4, gId);
          zId = gId;
        } else {
          if (zId === nodes[pId].left) { zId = pId; rotateRight(zId); snap("Case 2 (mirror): rotate right.", 5, zId); }
          nodes[nodes[zId].parent!].color = "B";
          nodes[nodes[nodes[zId].parent!].parent!].color = "R";
          rotateLeft(nodes[nodes[zId].parent!].parent!);
          snap("Case 3 (mirror): rotate left + recolor.", 6, zId);
        }
      }
    }
    if (rootId) nodes[rootId].color = "B";
  }

  snap("Empty RB-Tree.", 0);
  for (const key of keys) {
    const id = mkId();
    nodes[id] = { id, key, color: "R" };
    if (!rootId) {
      rootId = id; nodes[id].color = "B";
      snap(`Insert ${key} - root, colored BLACK.`, 2, id);
      continue;
    }
    let cur = rootId;
    while (true) {
      if (key < nodes[cur].key) {
        if (!nodes[cur].left) { nodes[cur].left = id; nodes[id].parent = cur; break; }
        cur = nodes[cur].left!;
      } else {
        if (!nodes[cur].right) { nodes[cur].right = id; nodes[id].parent = cur; break; }
        cur = nodes[cur].right!;
      }
    }
    snap(`Insert ${key} (RED) as child of ${nodes[nodes[id].parent!].key}.`, 2, id);
    fixUp(id);
    snap("Fix-up complete.", 7);
  }
  return frames;
}

function RBTreeViz({ frame }: { frame: RBFrame }) {
  const x: Record<string, number> = {}; const y: Record<string, number> = {};
  let c = 0;
  function walk(id: string | undefined, depth: number) {
    if (!id) return;
    walk(frame.nodes[id].left, depth + 1);
    x[id] = c++; y[id] = depth;
    walk(frame.nodes[id].right, depth + 1);
  }
  walk(frame.rootId, 0);
  const n = c;
  const W = 560, H = 280;
  const xScale = n > 1 ? (W - 60) / (n - 1) : 0;
  const maxD = Math.max(0, ...Object.values(y));
  const yScale = maxD > 0 ? (H - 60) / maxD : 0;
  const ids = Object.keys(frame.nodes);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" style={{ maxHeight: H }}>
      {ids.map((id) => {
        const node = frame.nodes[id];
        const X = 30 + x[id] * xScale, Y = 30 + y[id] * yScale;
        const children = [node.left, node.right].filter(Boolean) as string[];
        return children.map((cid) => (
          <line key={`${id}-${cid}`} x1={X} y1={Y} x2={30 + x[cid] * xScale} y2={30 + y[cid] * yScale} stroke="#94a3b8" strokeWidth={1.8} />
        ));
      })}
      {ids.map((id) => {
        const node = frame.nodes[id];
        const X = 30 + x[id] * xScale, Y = 30 + y[id] * yScale;
        const isActive = id === frame.activeId;
        return (
          <g key={id}>
            <circle cx={X} cy={Y} r={16} fill={node.color === "R" ? "#ef4444" : "#1f2937"} stroke={isActive ? THEME.accent : "#fff"} strokeWidth={isActive ? 4 : 2.5} style={{ transition: "fill 0.3s, stroke 0.2s" }} />
            <text x={X} y={Y + 4} textAnchor="middle" fontSize={13} fontWeight={700} fill="#fff" fontFamily="ui-monospace, monospace">{node.key}</text>
          </g>
        );
      })}
    </svg>
  );
}

function RBTreeVisualizer() {
  const [src, setSrc] = useState("10, 20, 30, 15, 25, 5, 35");
  const keys = parseInts(src, 12) ?? [10, 20, 30, 15, 25, 5, 35];
  const frames = useMemo(() => buildRBFrames(keys), [keys]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  return (
    <AlgoCanvas
      title="Red-Black Tree Insertion"
      player={player}
      input={
        <InputEditor
          label="Keys (comma-separated)"
          value={src}
          presets={[
            { label: "Classic", value: "10, 20, 30, 15, 25, 5, 35" },
            { label: "Ascending", value: "1, 2, 3, 4, 5, 6, 7" },
            { label: "Mixed", value: "7, 3, 18, 10, 22, 8, 11, 26" },
          ]}
          onApply={(v) => { if (parseInts(v, 12)) setSrc(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_RB} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} />}
    >
      <div className="flex flex-col gap-3.5">
        <div className="flex gap-3.5 text-xs items-center">
          <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded-sm bg-red-500" />RED</span>
          <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded-sm bg-gray-900" />BLACK</span>
        </div>
        {frame && <RBTreeViz frame={frame} />}
        <Callout>{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ================================================================== */
/*  SKIP LIST                                                           */
/* ================================================================== */

interface SLFrame extends BaseFrame {
  layers: number[][];
  highlightedPath: { layer: number; idx: number }[];
  targetKey?: number;
  found?: boolean;
  promotionLog?: { value: number; height: number; flips: number }[];
}

const PSEUDO_SL = [
  "# Skip List - randomized levels (geometric, p=0.5)",
  "function insert(key):",
  "  lvl <- 0",
  "  while random() < p and lvl < maxLevel: lvl++",
  "  splice key into all levels 0..lvl",
  "function search(key):",
  "  x <- top level, leftmost",
  "  while level >= 0:",
  "    while next(x).key <= key: x <- next(x)",
  "    if x.key = key: return x",
  "    descend one level",
  "  return NOT FOUND",
];

function mulberry32(seed: number): () => number {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildSkipListRandom(values: number[], seed: number, p = 0.5, maxL = 4) {
  const sorted = [...values].sort((a, b) => a - b);
  const rng = mulberry32(seed);
  const heightOf = new Map<number, number>();
  const promotionLog: { value: number; height: number; flips: number }[] = [];
  for (const v of sorted) {
    let lvl = 0; let flips = 0;
    while (lvl < maxL - 1) { flips++; if (rng() < p) lvl++; else break; }
    heightOf.set(v, lvl);
    promotionLog.push({ value: v, height: lvl, flips });
  }
  let topLevel = 0;
  for (const h of heightOf.values()) if (h > topLevel) topLevel = h;
  const layers: number[][] = [];
  for (let L = topLevel; L >= 0; L--) {
    layers.push(sorted.filter((v) => (heightOf.get(v) ?? 0) >= L));
  }
  if (layers.length === 0) layers.push([]);
  return { layers, promotionLog };
}

function buildSLFrames(values: number[], target: number, seed: number): SLFrame[] {
  const { layers, promotionLog } = buildSkipListRandom(values, seed);
  const frames: SLFrame[] = [];
  if (layers[0].length === 0) {
    frames.push({ line: 5, vars: { target, layers: layers.length }, message: `Empty skip list.`, layers, highlightedPath: [], targetKey: target, found: false, promotionLog });
    return frames;
  }
  for (const p of promotionLog) {
    frames.push({ line: 3, vars: { value: p.value, flips: p.flips, height: p.height }, message: `Insert ${p.value}: ${p.flips} coin flip${p.flips === 1 ? "" : "s"} -> tower height ${p.height}.`, layers, highlightedPath: [], targetKey: target, promotionLog });
  }
  frames.push({ line: 5, vars: { target, layers: layers.length }, message: `Search ${target}: start at top-level, leftmost.`, layers, highlightedPath: [{ layer: 0, idx: 0 }], targetKey: target, promotionLog });
  let curLayer = 0, curIdx = 0;
  const path: { layer: number; idx: number }[] = [{ layer: 0, idx: 0 }];
  while (curLayer < layers.length) {
    while (curIdx + 1 < layers[curLayer].length && layers[curLayer][curIdx + 1] <= target) {
      curIdx++;
      path.push({ layer: curLayer, idx: curIdx });
      frames.push({ line: 7, vars: { layer: curLayer, at: layers[curLayer][curIdx] }, message: `Step right on layer ${curLayer} -> ${layers[curLayer][curIdx]}.`, layers, highlightedPath: [...path], targetKey: target, promotionLog });
    }
    if (layers[curLayer][curIdx] === target) {
      frames.push({ line: 8, vars: { target, found: "yes" }, message: `Found ${target} at layer ${curLayer}.`, layers, highlightedPath: [...path], targetKey: target, found: true, promotionLog });
      return frames;
    }
    if (curLayer + 1 < layers.length) {
      const cur = layers[curLayer][curIdx];
      const below = layers[curLayer + 1];
      let newIdx = 0;
      for (let i = 0; i < below.length; i++) if (below[i] <= cur) newIdx = i; else break;
      curLayer++; curIdx = newIdx;
      path.push({ layer: curLayer, idx: curIdx });
      frames.push({ line: 9, vars: { layer: curLayer, at: layers[curLayer][curIdx] }, message: `Descend to layer ${curLayer}.`, layers, highlightedPath: [...path], targetKey: target, promotionLog });
    } else {
      frames.push({ line: 10, vars: { target, found: "no" }, message: `Not found.`, layers, highlightedPath: [...path], targetKey: target, found: false, promotionLog });
      return frames;
    }
  }
  return frames;
}

function SkipListViz({ frame }: { frame: SLFrame }) {
  const cell = 40;
  return (
    <div className="flex flex-col gap-1">
      {frame.layers.map((lv, li) => (
        <div key={li} className="flex items-center gap-0">
          <span className="w-14 text-[10px] font-bold uppercase text-stone-400 font-sans">
            L{frame.layers.length - 1 - li}
          </span>
          <div className="flex gap-0.5">
            {lv.map((v, i) => {
              const visited = frame.highlightedPath.some((p) => p.layer === li && p.idx === i);
              const last = frame.highlightedPath[frame.highlightedPath.length - 1];
              const isFinal = frame.found && frame.targetKey === v && last?.layer === li && last?.idx === i;
              return (
                <div
                  key={i}
                  className="flex items-center justify-center font-mono font-bold text-sm rounded transition-all"
                  style={{
                    width: cell, height: 32,
                    border: isFinal ? `2px solid ${THEME.success}` : visited ? `2px solid ${THEME.accent}` : `1px solid ${THEME.border}`,
                    background: isFinal ? `${THEME.success}14` : visited ? `${THEME.accent}10` : THEME.bg,
                    color: THEME.text,
                    boxShadow: visited ? `0 0 0 2px ${THEME.accent}26` : "none",
                  }}
                >
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function SkipListVisualizer() {
  const [src, setSrc] = useState("1,3,5,7,9,11,13,15 | 11");
  const [seed, setSeed] = useState(7);
  const parts = src.split(/\s*\|\s*/);
  const values = parts[0] ? parts[0].split(/[,\s]+/).map(Number).filter((x) => !Number.isNaN(x)) : [];
  const target = parts[1] ? Number(parts[1]) : 11;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const frames = useMemo(() => buildSLFrames(values.length ? values : [1, 3, 5, 7, 9, 11, 13, 15], Number.isFinite(target) ? target : 11, seed), [src, seed]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  return (
    <AlgoCanvas
      title="Skip List - Randomized Levels (geometric, p=0.5)"
      player={player}
      input={
        <div className="flex gap-2.5 flex-wrap items-end">
          <div className="flex-1 min-w-64">
            <InputEditor
              label="Sorted values | target"
              value={src}
              helper="Each value gets a random tower height by repeated coin flips (p=0.5). Re-roll the seed to see the structure change."
              presets={[
                { label: "Find 11", value: "1,3,5,7,9,11,13,15 | 11" },
                { label: "Find 2", value: "2,4,6,8,10,12,14,16 | 2" },
                { label: "Not found", value: "1,3,5,7,9,11 | 8" },
                { label: "Sparse", value: "1,2,3,4,5 | 4" },
              ]}
              onApply={(v) => setSrc(v)}
            />
          </div>
          <div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 mb-1">RNG seed</div>
            <div className="flex gap-1.5 items-center">
              <input
                type="number"
                value={seed}
                onChange={(e) => setSeed(Number(e.target.value) || 0)}
                className="w-16 px-2 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 font-mono text-sm text-stone-900 dark:text-stone-50 outline-none"
              />
              <button
                type="button"
                onClick={() => setSeed(Math.floor(Math.random() * 1000))}
                className="px-3 py-1.5 rounded-md text-xs font-bold border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 cursor-pointer hover:border-stone-400 dark:hover:border-white/30 transition-colors"
              >
                Re-roll
              </button>
            </div>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_SL} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} />}
    >
      <div className="flex flex-col gap-3.5">
        <div className="grid gap-3.5 items-start" style={{ gridTemplateColumns: "minmax(0,1fr) 200px" }}>
          {frame && <SkipListViz frame={frame} />}
          <Card>
            <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">Tower heights</div>
            {!frame?.promotionLog || frame.promotionLog.length === 0 ? (
              <div className="text-xs text-stone-400 italic">empty</div>
            ) : (
              <div className="flex flex-col gap-1">
                {frame.promotionLog.map((p, i) => (
                  <div
                    key={i}
                    className="px-2 py-1 rounded-md font-mono text-xs flex justify-between items-center"
                    style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.25)" }}
                  >
                    <span className="font-bold" style={{ color: THEME.text }}>{p.value}</span>
                    <span className="text-stone-400">h={p.height} ({p.flips} flip{p.flips === 1 ? "" : "s"})</span>
                  </div>
                ))}
                <div className="mt-1.5 pt-1.5 text-[10px] text-stone-400 leading-relaxed" style={{ borderTop: `1px dashed ${THEME.border}` }}>
                  Expected total nodes ~2n. Expected max level ~log(n).
                </div>
              </div>
            )}
          </Card>
        </div>
        <Callout>{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ================================================================== */
/*  BLOOM FILTER                                                        */
/* ================================================================== */

interface BloomFrame extends BaseFrame {
  bits: number[];
  highlightBits: number[];
  op: "insert" | "query";
  item: string;
  verdict?: "probably yes" | "definitely no" | "inserted";
}

const PSEUDO_BL = [
  "# Bloom Filter",
  "function insert(item):",
  "  for each hash h_k:",
  "    bits[h_k(item) % m] = 1",
  "function query(item):",
  "  for each hash h_k:",
  "    if bits[h_k(item) % m] = 0: return 'definitely NO'",
  "  return 'probably YES'",
];

function hashItem(s: string, seed: number, m: number): number {
  let h = seed;
  for (let i = 0; i < s.length; i++) h = (h * 131 + s.charCodeAt(i)) % m;
  return ((h % m) + m) % m;
}

function buildBloomFrames(ops: { kind: "insert" | "query"; item: string }[], m = 16, k = 3): BloomFrame[] {
  const seeds = [7, 19, 37];
  const bits = new Array(m).fill(0);
  const frames: BloomFrame[] = [];
  frames.push({ line: 0, vars: { m, k, bitsSet: 0 }, message: `Fresh filter with m=${m} bits, k=${k} hashes.`, bits: [...bits], highlightBits: [], op: "insert", item: "" });
  for (const op of ops) {
    const positions = seeds.slice(0, k).map((s) => hashItem(op.item, s, m));
    if (op.kind === "insert") {
      frames.push({ line: 2, vars: { item: op.item, positions: positions.join(",") }, message: `Insert "${op.item}" - hash to bit positions ${positions.join(", ")}.`, bits: [...bits], highlightBits: positions, op: "insert", item: op.item });
      positions.forEach((p) => (bits[p] = 1));
      frames.push({ line: 3, vars: { bitsSet: bits.filter(Boolean).length }, message: `Set bits ${positions.join(", ")} to 1.`, bits: [...bits], highlightBits: positions, op: "insert", item: op.item, verdict: "inserted" });
    } else {
      frames.push({ line: 5, vars: { item: op.item, positions: positions.join(",") }, message: `Query "${op.item}" - check bit positions ${positions.join(", ")}.`, bits: [...bits], highlightBits: positions, op: "query", item: op.item });
      const allOne = positions.every((p) => bits[p] === 1);
      frames.push({ line: 7, vars: { verdict: allOne ? "probably YES" : "definitely NO" }, message: allOne ? `All bits set -> probably YES (could be false positive).` : `At least one bit is 0 -> definitely NO.`, bits: [...bits], highlightBits: positions, op: "query", item: op.item, verdict: allOne ? "probably yes" : "definitely no" });
    }
  }
  return frames;
}

function BloomViz({ frame }: { frame: BloomFrame }) {
  const cell = 32;
  const verdictColor = frame.verdict === "definitely no" ? THEME.danger : frame.verdict === "probably yes" ? "#f59e0b" : THEME.success;
  return (
    <div className="flex flex-col gap-3.5 items-center">
      <div className="flex gap-0.5 flex-wrap justify-center">
        {frame.bits.map((b, i) => {
          const hl = frame.highlightBits.includes(i);
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center font-mono font-extrabold rounded transition-all"
              style={{
                width: cell, height: cell,
                background: b ? (hl ? THEME.accent : "#64748b") : (hl ? "rgba(245,158,11,0.2)" : THEME.bg),
                color: b ? "#fff" : THEME.textMuted,
                border: hl ? "2px solid #f59e0b" : `1px solid ${THEME.border}`,
                fontSize: "0.9rem",
              }}
            >
              <div>{b}</div>
              <div className="text-[9px]" style={{ color: b ? "rgba(255,255,255,0.7)" : THEME.textMuted }}>{i}</div>
            </div>
          );
        })}
      </div>
      {frame.item && (
        <div className="flex items-center gap-2.5">
          <span className="text-sm text-stone-900 dark:text-stone-50">{frame.op} &quot;<strong>{frame.item}</strong>&quot;</span>
          {frame.verdict && (
            <span
              className="text-xs font-bold px-3 py-1 rounded-md"
              style={{ background: `${verdictColor}1a`, color: verdictColor, border: `1px solid ${verdictColor}66` }}
            >
              {frame.verdict}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

function parseBloomOps(s: string): { kind: "insert" | "query"; item: string }[] | null {
  const toks = s.split(/[;\n]+/).map((t) => t.trim()).filter(Boolean);
  const ops: { kind: "insert" | "query"; item: string }[] = [];
  for (const t of toks) {
    const m = t.match(/^(insert|query)\s*\(?\s*([A-Za-z0-9_]+)\s*\)?$/i);
    if (!m) return null;
    ops.push({ kind: m[1].toLowerCase() as "insert" | "query", item: m[2] });
  }
  return ops;
}

function BloomVisualizer() {
  const [src, setSrc] = useState("insert(apple); insert(banana); insert(cherry); query(apple); query(grape)");
  const parsed = parseBloomOps(src);
  const ops = parsed ?? [];
  const frames = useMemo(() => buildBloomFrames(ops.length ? ops : [{ kind: "insert", item: "apple" }]), [ops]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  return (
    <AlgoCanvas
      title="Bloom Filter - Probabilistic Membership"
      player={player}
      input={
        <InputEditor
          label="Ops (semicolon-separated). insert(x) / query(x)"
          value={src}
          presets={[
            { label: "Classic", value: "insert(apple); insert(banana); insert(cherry); query(apple); query(grape)" },
            { label: "False positive?", value: "insert(cat); insert(dog); query(bat); query(cat)" },
            { label: "Empty filter", value: "query(apple); insert(apple); query(apple)" },
          ]}
          onApply={(v) => { if (parseBloomOps(v)) setSrc(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_BL} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} />}
    >
      <div className="flex flex-col gap-3.5">
        <div className="text-xs text-stone-500 flex gap-3.5 flex-wrap">
          <span><strong>m=16 bits</strong>, <strong>k=3 hashes</strong></span>
          <span><strong className="text-emerald-600">definitely NO</strong> - any bit is 0</span>
          <span><strong className="text-amber-500">probably YES</strong> - all bits set (may be false positive)</span>
        </div>
        {frame && <BloomViz frame={frame} />}
        <Callout>{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ================================================================== */
/*  Visualize switcher                                                  */
/* ================================================================== */

function VisualizeTab() {
  const [which, setWhich] = useState<"btree" | "rb" | "skip" | "bloom">("btree");
  const opts: { k: typeof which; label: string }[] = [
    { k: "btree", label: "B-Tree" },
    { k: "rb", label: "Red-Black Tree" },
    { k: "skip", label: "Skip List" },
    { k: "bloom", label: "Bloom Filter" },
  ];
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex gap-2 flex-wrap">
        {opts.map((o) => (
          <PillButton key={o.k} onClick={() => setWhich(o.k)} active={which === o.k}>
            <span className="text-xs">{o.label}</span>
          </PillButton>
        ))}
      </div>
      {which === "btree" && <BTreeVisualizer />}
      {which === "rb" && <RBTreeVisualizer />}
      {which === "skip" && <SkipListVisualizer />}
      {which === "bloom" && <BloomVisualizer />}
    </div>
  );
}

/* ================================================================== */
/*  Learn / Try / Insight                                               */
/* ================================================================== */

function LearnTab() {
  const sections = [
    { title: "B-Tree", body: "Generalized BST where each node holds up to 2t-1 keys and has up to 2t children. Shallow (O(log_t n) height) and disk-friendly. Heart of databases and filesystems (MySQL InnoDB, NTFS)." },
    { title: "Red-Black Tree", body: "A BST with a color bit per node and 5 invariants that keep height <= 2 log(n+1). Insert / delete take O(log n). Used in Linux CFS scheduler, std::map, java.util.TreeMap." },
    { title: "Skip List", body: "Stacked sorted linked lists where each element is promoted to the next level with probability p. Search descends and steps right - O(log n) expected. Used in Redis sorted sets." },
    { title: "Bloom Filter", body: "Bit array of m bits + k independent hash functions. insert(x) sets k bits; query(x) returns 'no' if any bit is 0, else 'probably yes'. No false negatives, tunable false positives. Used in Bigtable, Cassandra." },
    { title: "When each wins", body: "B-Tree: huge datasets on disk. Red-Black: in-memory ordered map. Skip List: concurrent / simple code. Bloom Filter: membership screening before expensive lookups." },
    { title: "Bloom math", body: "With n insertions into m bits using k hashes, false positive probability ~ (1 - e^(-kn/m))^k. Optimal k ~ (m/n) * ln 2. Classic interview formula." },
  ];
  return (
    <div className="flex flex-col gap-3.5">
      <div>
        <SectionEyebrow>Specialized structures, four trade-offs</SectionEyebrow>
        <SectionTitle>Pick the tool to match the constraint</SectionTitle>
        <Lede>
          Four specialized structures, four trade-offs: disk-friendly, self-balancing in memory,
          probabilistic lanes for speed, and a tiny bit-array for approximate membership.
        </Lede>
      </div>
      <div className="grid gap-2.5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {sections.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-600 dark:text-lime-400 mb-1.5 tracking-widest">
              0{i + 1}
            </div>
            <div className="font-bold text-sm text-stone-900 dark:text-stone-50 mb-1">{s.title}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function TryTab() {
  const problems = [
    { q: "A B-Tree of order t=3 (min deg) has how many keys max per node?", answer: "5" },
    { q: "Insert 1,2,3,4,5,6,7 into an empty red-black tree. What is the root key?", answer: "4" },
    { q: "In a skip list, expected search time?", answer: "O(log n)" },
    { q: "A Bloom filter returns 'probably yes' - is a false positive possible? (yes/no)", answer: "yes" },
  ];
  const [guesses, setGuesses] = useState<string[]>(problems.map(() => ""));
  const [shown, setShown] = useState<boolean[]>(problems.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Short answers.</Callout>
      {problems.map((p, i) => (
        <Card key={i}>
          <div className="text-sm text-stone-900 dark:text-stone-50 mb-2.5 leading-relaxed">{p.q}</div>
          <div className="flex gap-2 items-center flex-wrap">
            <input
              value={guesses[i]}
              onChange={(e) => { const g = [...guesses]; g[i] = e.target.value; setGuesses(g); }}
              placeholder="your answer"
              className="px-2.5 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 font-mono text-sm w-36 outline-none focus:border-lime-400"
            />
            <button
              type="button"
              onClick={() => { const s = [...shown]; s[i] = true; setShown(s); }}
              className="px-3 py-1.5 rounded-md text-xs font-bold border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 cursor-pointer hover:border-stone-400 dark:hover:border-white/30 transition-colors"
            >
              Reveal
            </button>
            {shown[i] && (
              <span
                className="text-xs font-bold px-3 py-1.5 rounded-md"
                style={{ background: `${THEME.accent}10`, color: THEME.text }}
              >
                Answer: {p.answer}
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
    <div className="flex flex-col gap-3">
      <Card>
        <SubHeading>B-Tree vs BST: disk story</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          A BST storing 10^9 keys has height ~30. That&rsquo;s 30 disk seeks per query. A B-Tree with t = 256 has height ~4 - one twentieth the I/O. When your bottleneck is disk (or network), fat nodes win.
        </p>
      </Card>
      <Card>
        <SubHeading>Red-Black 5 invariants</SubHeading>
        <ol className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed pl-5 list-decimal space-y-1">
          <li>Every node is red or black.</li>
          <li>Root is black.</li>
          <li>All leaves (NIL) are black.</li>
          <li>Red node&rsquo;s children are black (no two reds adjacent).</li>
          <li>Every path from a node to descendant leaves contains the same number of black nodes.</li>
        </ol>
      </Card>
      <Card>
        <SubHeading>Bloom filter: no deletes!</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          You can&rsquo;t simply unset bits because multiple items may share them. Solution: Counting Bloom Filter (each cell is an integer counter). More memory, but delete() is O(k).
        </p>
      </Card>
    </div>
  );
}

/* ================================================================== */
/*  Activity export                                                     */
/* ================================================================== */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L7_AdvancedDS({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "A B-Tree of minimum degree t has how many keys per internal node?",
      options: ["exactly t", "between t-1 and 2t-1", "between t+1 and 2t", "exactly 2t"],
      correctIndex: 1,
      explanation: "Each non-root B-Tree node has at least t-1 keys and at most 2t-1 keys.",
    },
    {
      question: "What is the maximum height of a Red-Black tree with n nodes?",
      options: ["log2 n", "2 * log2(n + 1)", "n / 2", "sqrt(n)"],
      correctIndex: 1,
      explanation: "By the black-height invariant, height <= 2 * log(n+1). Slightly worse than AVL but still O(log n).",
    },
    {
      question: "A Bloom filter can return which kind of error?",
      options: ["False negatives only", "False positives only", "Both false positives and false negatives", "Neither"],
      correctIndex: 1,
      explanation: "If all k bits are set, membership is 'probably yes' (possible false positive). If any bit is 0, item is definitely not present - no false negatives.",
    },
    {
      question: "Expected time complexity for search in a randomized skip list with n elements:",
      options: ["O(1) worst case", "O(log n) expected", "O(sqrt(n))", "O(n)"],
      correctIndex: 1,
      explanation: "With geometric promotion probability p=1/2, skip lists achieve O(log n) expected search, insert, and delete.",
    },
  ];

  return (
    <LessonShell
      title="Advanced Data Structures"
      level={7}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Medium - databases, filesystems, caches, distributed systems"
      nextLessonHint="Rabin-Karp"
      onQuizComplete={onQuizComplete}
    />
  );
}
