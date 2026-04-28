import { useMemo, useState } from "react";
import { BookOpen, Code2, Lightbulb, Play, Target } from "lucide-react";
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
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "binary-tree";

/* ------------------------------------------------------------------ */
/*  Tree model                                                           */
/* ------------------------------------------------------------------ */

interface TNode {
  id: string;
  parent?: string;
  children: string[];
  depth: number;
}

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
    if (nodes[c].parent !== undefined) return null;
    nodes[c].parent = p;
    nodes[p].children.push(c);
  }
  if (!root) return null;
  const Q = [root];
  nodes[root].depth = 0;
  while (Q.length) {
    const u = Q.shift()!;
    for (const child of nodes[u].children) {
      nodes[child].depth = nodes[u].depth + 1;
      Q.push(child);
    }
  }
  return { rootId: root, nodes };
}

/* ------------------------------------------------------------------ */
/*  Binary lifting table                                                 */
/* ------------------------------------------------------------------ */

interface LiftTable {
  up: Record<string, (string | undefined)[]>;
  LOG: number;
}

function buildLifting(rootId: string, nodes: Record<string, TNode>): LiftTable {
  const ids = Object.keys(nodes);
  let maxDepth = 0;
  for (const id of ids) maxDepth = Math.max(maxDepth, nodes[id].depth);
  const LOG = Math.max(1, Math.ceil(Math.log2(maxDepth + 2)));
  const up: Record<string, (string | undefined)[]> = {};
  const Q = [rootId];
  while (Q.length) {
    const u = Q.shift()!;
    up[u] = new Array(LOG).fill(undefined);
    up[u][0] = nodes[u].parent;
    for (let k = 1; k < LOG; k++) {
      const mid = up[u][k - 1];
      up[u][k] = mid !== undefined ? up[mid]?.[k - 1] : undefined;
    }
    for (const child of nodes[u].children) Q.push(child);
  }
  return { up, LOG };
}

/* ------------------------------------------------------------------ */
/*  LCA frame builder                                                    */
/* ------------------------------------------------------------------ */

interface LCAFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  uId: string;
  vId: string;
  uHighlight?: string;
  vHighlight?: string;
  highlightCell?: { node: string; k: number };
  result?: string;
  flashKey?: string;
  table: LiftTable;
}

const PSEUDO_LCA = [
  "# Binary lifting LCA query",
  "function LCA(u, v):",
  "  # Phase 1: lift deeper node to match depth",
  "  if depth[u] < depth[v]: swap(u, v)",
  "  diff ← depth[u] − depth[v]",
  "  for k in 0..LOG:",
  "    if (diff >> k) & 1: u ← up[u][k]",
  "  if u == v: return u",
  "  # Phase 2: lift both without meeting",
  "  for k from LOG-1 down to 0:",
  "    if up[u][k] ≠ up[v][k]:",
  "      u ← up[u][k]; v ← up[v][k]",
  "  # LCA is parent of current u",
  "  return up[u][0]",
];

function buildLCAFrames(
  _rootId: string,
  nodes: Record<string, TNode>,
  table: LiftTable,
  uOrig: string,
  vOrig: string,
): LCAFrame[] {
  const frames: LCAFrame[] = [];
  if (!nodes[uOrig] || !nodes[vOrig]) {
    frames.push({ line: 0, vars: { error: "node missing" }, message: "Vertex not in tree.", uId: uOrig, vId: vOrig, table });
    return frames;
  }
  let u = uOrig, v = vOrig;
  const snap = (
    line: number,
    message: string,
    vars: Record<string, string | number | undefined> = {},
    extra: Partial<LCAFrame> = {},
  ) => frames.push({ line, vars, message, uId: u, vId: v, table, ...extra });

  snap(1, `Start LCA(${u}, ${v}). depth[${u}]=${nodes[u].depth}, depth[${v}]=${nodes[v].depth}.`,
    { u, v, "depth[u]": nodes[u].depth, "depth[v]": nodes[v].depth });

  if (nodes[u].depth < nodes[v].depth) {
    [u, v] = [v, u];
    snap(3, `Swap so u is deeper: u=${u} (depth ${nodes[u].depth}), v=${v} (depth ${nodes[v].depth}).`,
      { u, v }, { flashKey: "u" });
  }

  const diff = nodes[u].depth - nodes[v].depth;
  snap(4, `diff = ${nodes[u].depth} − ${nodes[v].depth} = ${diff}  (binary: ${diff.toString(2)}).`,
    { diff, bits: diff.toString(2) }, { flashKey: "diff" });

  for (let k = 0; k < table.LOG; k++) {
    if ((diff >> k) & 1) {
      const target = table.up[u]?.[k];
      snap(6, `Bit k=${k} set → jump 2^${k}=${1 << k} levels: ${u} → ${target ?? "?"}.`,
        { k, "2^k": 1 << k, "up[u][k]": target ?? "−" },
        { highlightCell: { node: u, k }, uHighlight: target });
      if (target) u = target;
    }
  }

  if (u === v) {
    snap(7, `After lift, u == v == ${u}  → LCA found immediately.`,
      { lca: u }, { result: u, uHighlight: u, vHighlight: v, flashKey: "lca" });
    return frames;
  }

  snap(7, `After lift: u=${u}, v=${v} (same depth ${nodes[u].depth}, not equal yet).`, { u, v });

  for (let k = table.LOG - 1; k >= 0; k--) {
    const upU = table.up[u]?.[k];
    const upV = table.up[v]?.[k];
    snap(9, `k=${k}: up[${u}][${k}]=${upU ?? "−"}, up[${v}][${k}]=${upV ?? "−"}.`,
      { k, "up[u]": upU ?? "−", "up[v]": upV ?? "−" },
      { highlightCell: { node: u, k }, uHighlight: u, vHighlight: v });
    if (upU !== undefined && upV !== undefined && upU !== upV) {
      u = upU; v = upV;
      snap(11, `Different ancestors → jump both: u→${u}, v→${v}.`,
        { u, v }, { uHighlight: u, vHighlight: v });
    } else {
      snap(9, `Same ancestor at k=${k} → skip (would overshoot LCA).`,
        { k }, { uHighlight: u, vHighlight: v });
    }
  }

  const lca = table.up[u]?.[0];
  snap(13, `LCA = up[${u}][0] = ${lca ?? "−"}.`,
    { lca: lca ?? "−" }, { result: lca, flashKey: "lca", uHighlight: lca, vHighlight: lca });
  return frames;
}

/* ------------------------------------------------------------------ */
/*  SVG tree renderer                                                    */
/* ------------------------------------------------------------------ */

interface NodePos { x: number; y: number }

function layoutTree(
  rootId: string,
  nodes: Record<string, TNode>,
  W: number,
  H: number,
): Record<string, NodePos> {
  // Compute subtree widths bottom-up
  const subW: Record<string, number> = {};
  const postOrder: string[] = [];
  const stack = [rootId];
  while (stack.length) {
    const id = stack.pop()!;
    postOrder.push(id);
    for (const c of nodes[id].children) stack.push(c);
  }
  for (const id of postOrder.reverse()) {
    const ch = nodes[id].children;
    subW[id] = ch.length === 0 ? 1 : ch.reduce((s, c) => s + subW[c], 0);
  }

  const maxDepth = Math.max(...Object.values(nodes).map((n) => n.depth));
  const PAD_X = 24;
  const PAD_Y = 36;
  const usableW = W - PAD_X * 2;
  const usableH = H - PAD_Y * 2;
  const pos: Record<string, NodePos> = {};

  const assign = (id: string, xLeft: number, xRight: number) => {
    const mid = (xLeft + xRight) / 2;
    const y = PAD_Y + (nodes[id].depth / Math.max(1, maxDepth)) * usableH;
    pos[id] = { x: PAD_X + mid * usableW, y };
    const ch = nodes[id].children;
    if (ch.length === 0) return;
    const total = subW[id];
    let cur = xLeft;
    for (const c of ch) {
      const frac = subW[c] / total;
      assign(c, cur, cur + frac * (xRight - xLeft));
      cur += frac * (xRight - xLeft);
    }
  };
  assign(rootId, 0, 1);
  return pos;
}

function TreeSVG({ nodes, rootId, frame, W = 560, H = 310 }: {
  nodes: Record<string, TNode>;
  rootId: string;
  frame: LCAFrame;
  W?: number;
  H?: number;
}) {
  const pos = useMemo(() => layoutTree(rootId, nodes, W, H), [rootId, nodes, W, H]);
  const R = 16;

  const nodeColor = (id: string): string => {
    if (id === frame.result) return THEME.accent;
    if (id === frame.uHighlight) return "#3b82f6";
    if (id === frame.vHighlight) return "#06b6d4";
    if (id === frame.uId) return "#3b82f6";
    if (id === frame.vId) return "#06b6d4";
    return THEME.bg;
  };
  const nodeTextColor = (id: string): string => {
    if (id === frame.result) return "#1c1917";
    if (id === frame.uHighlight || id === frame.uId) return "#fff";
    if (id === frame.vHighlight || id === frame.vId) return "#fff";
    return THEME.text;
  };
  const strokeColor = (id: string): string => {
    if (id === frame.result) return THEME.accentDark;
    if (id === frame.uHighlight || id === frame.uId) return "#1d4ed8";
    if (id === frame.vHighlight || id === frame.vId) return "#0e7490";
    return THEME.border;
  };

  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      className="block w-full"
      style={{ maxHeight: H }}
    >
      {Object.values(nodes).map((n) => {
        const p = pos[n.id];
        return n.children.map((cId) => {
          const cp = pos[cId];
          if (!p || !cp) return null;
          return (
            <line
              key={`${n.id}-${cId}`}
              x1={p.x} y1={p.y}
              x2={cp.x} y2={cp.y}
              stroke={THEME.border}
              strokeWidth={1.5}
            />
          );
        });
      })}
      {Object.values(nodes).map((n) => {
        const p = pos[n.id];
        if (!p) return null;
        const fill = nodeColor(n.id);
        const tc = nodeTextColor(n.id);
        const sc = strokeColor(n.id);
        return (
          <g key={n.id}>
            <circle cx={p.x} cy={p.y} r={R} fill={fill} stroke={sc} strokeWidth={2} />
            <text
              x={p.x} y={p.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={11}
              fontWeight="bold"
              fontFamily={THEME.heading}
              fill={tc}
            >
              {n.id}
            </text>
            <text
              x={p.x} y={p.y + R + 10}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={9}
              fontFamily={THEME.mono}
              fill={THEME.textMuted}
            >
              d={n.depth}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Lift table panel                                                     */
/* ------------------------------------------------------------------ */

function LiftTablePanel({ frame, ids }: { frame: LCAFrame; ids: string[] }) {
  const { up, LOG } = frame.table;
  return (
    <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950/50 overflow-auto">
      <div className="px-3 pt-3 pb-1 text-[10px] font-mono uppercase tracking-widest text-stone-500">
        up[v][k] = 2^k-th ancestor
      </div>
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr>
            <th className="px-2 py-1 text-left font-mono text-stone-500 border-b border-stone-200 dark:border-white/10">v</th>
            {Array.from({ length: LOG }, (_, k) => (
              <th key={k} className="px-2 py-1 text-center font-mono text-stone-500 border-b border-stone-200 dark:border-white/10">
                k={k}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ids.map((id) => (
            <tr key={id} className="border-t border-stone-100 dark:border-white/5">
              <td className="px-2 py-1 font-bold text-stone-900 dark:text-stone-100 font-mono">{id}</td>
              {Array.from({ length: LOG }, (_, k) => {
                const cell = up[id]?.[k];
                const isHL = frame.highlightCell?.node === id && frame.highlightCell.k === k;
                return (
                  <td
                    key={k}
                    className="px-2 py-1 text-center font-mono"
                    style={{
                      background: isHL ? "rgba(59,130,246,0.18)" : "transparent",
                      color: cell === undefined ? THEME.textMuted : THEME.text,
                      borderRadius: 3,
                    }}
                  >
                    {cell ?? "−"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-3 py-2 text-[10px] font-mono text-stone-500">
        Build: O(n log n) · Query: O(log n)
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                            */
/* ------------------------------------------------------------------ */

const TREE_PRESETS = [
  { label: "Balanced", value: "A>B, A>C, B>D, B>E, C>F, C>G, E>H, E>I, G>J" },
  { label: "Skewed", value: "A>B, B>C, C>D, D>E, E>F" },
  { label: "Wide", value: "A>B, A>C, A>D, B>E, B>F, C>G" },
  { label: "Deep", value: "R>A, A>B, B>C, C>D, D>E, R>X, X>Y, Y>Z" },
];

function VisualizeTab() {
  const [treeStr, setTreeStr] = useState("A>B, A>C, B>D, B>E, C>F, C>G, E>H, E>I, G>J");
  const [inputStr, setInputStr] = useState("A>B, A>C, B>D, B>E, C>F, C>G, E>H, E>I, G>J");
  const [u, setU] = useState("H");
  const [v, setV] = useState("J");

  const parsed = useMemo(() => parseTree(treeStr), [treeStr]);
  const ids = parsed ? Object.keys(parsed.nodes) : [];
  const table = useMemo(() => parsed ? buildLifting(parsed.rootId, parsed.nodes) : null, [parsed]);

  const frames = useMemo((): LCAFrame[] => {
    if (!parsed || !table) {
      return [{
        line: 0, vars: { error: "parse error" }, message: "Enter a valid tree (e.g. A>B, A>C).",
        uId: "", vId: "", table: { up: {}, LOG: 1 },
      }];
    }
    const safeU = parsed.nodes[u] ? u : ids[0] ?? "";
    const safeV = parsed.nodes[v] ? v : ids[1] ?? ids[0] ?? "";
    return buildLCAFrames(parsed.rootId, parsed.nodes, table, safeU, safeV);
  }, [parsed, table, u, v, ids]);

  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title={`LCA via Binary Lifting, query LCA(${u}, ${v})`}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <InputEditor
            label="Tree edges (Parent>Child)"
            value={inputStr}
            placeholder="e.g. A>B, A>C, B>D"
            helper="List edges as Parent>Child. First parent seen becomes root."
            presets={TREE_PRESETS}
            onApply={(s) => {
              const p = parseTree(s);
              if (p) {
                setInputStr(s);
                setTreeStr(s);
                const newIds = Object.keys(p.nodes);
                if (!p.nodes[u]) setU(newIds[newIds.length - 1] ?? "");
                if (!p.nodes[v]) setV(newIds[Math.max(0, newIds.length - 2)] ?? "");
              }
            }}
            onRandom={() => {
              const idx = Math.floor(Math.random() * TREE_PRESETS.length);
              const s = TREE_PRESETS[idx].value;
              const p = parseTree(s);
              if (p) {
                setInputStr(s);
                setTreeStr(s);
                const newIds = Object.keys(p.nodes);
                setU(newIds[newIds.length - 1] ?? "");
                setV(newIds[Math.max(0, newIds.length - 2)] ?? "");
              }
            }}
          />
          <div className="flex gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">u</label>
              <select
                value={u}
                onChange={(e) => setU(e.target.value)}
                className="px-2 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-sm font-mono text-stone-900 dark:text-stone-100 outline-none focus:border-stone-400"
              >
                {ids.map((id) => <option key={id} value={id}>{id}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">v</label>
              <select
                value={v}
                onChange={(e) => setV(e.target.value)}
                className="px-2 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-sm font-mono text-stone-900 dark:text-stone-100 outline-none focus:border-stone-400"
              >
                {ids.map((id) => <option key={id} value={id}>{id}</option>)}
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {TREE_PRESETS.map((p) => (
              <PillButton
                key={p.label}
                active={treeStr === p.value}
                onClick={() => {
                  const parsed2 = parseTree(p.value);
                  if (parsed2) {
                    setInputStr(p.value);
                    setTreeStr(p.value);
                    const newIds = Object.keys(parsed2.nodes);
                    setU(newIds[newIds.length - 1] ?? "");
                    setV(newIds[Math.max(0, newIds.length - 2)] ?? "");
                  }
                }}
              >
                {p.label}
              </PillButton>
            ))}
          </div>
          <div className="flex gap-2 text-[11px] font-mono">
            <span className="inline-flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded-sm" style={{ background: "#3b82f6" }} />
              <span className="text-stone-600 dark:text-stone-400">u</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded-sm" style={{ background: "#06b6d4" }} />
              <span className="text-stone-600 dark:text-stone-400">v</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded-sm" style={{ background: THEME.accent }} />
              <span className="text-stone-600 dark:text-stone-400">LCA</span>
            </span>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={PSEUDO_LCA} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? [frame.flashKey] : []} />}
    >
      <div className="flex flex-col gap-4">
        {parsed ? (
          <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950/40 overflow-hidden">
            <TreeSVG
              nodes={parsed.nodes}
              rootId={parsed.rootId}
              frame={frame ?? { line: 0, vars: {}, message: "", uId: "", vId: "", table: { up: {}, LOG: 1 } }}
            />
          </div>
        ) : (
          <Callout>Parse error, enter valid edges like A&gt;B, A&gt;C.</Callout>
        )}
        {parsed && table && (
          <LiftTablePanel
            frame={frame ?? { line: 0, vars: {}, message: "", uId: "", vId: "", table }}
            ids={ids}
          />
        )}
        <Callout className="w-full">
          {frame?.message ?? "Press play to step through the binary lifting LCA algorithm."}
        </Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "What is LCA?", b: "The Lowest Common Ancestor of nodes u and v in a rooted tree is the deepest node that is an ancestor of both. Equivalent: the unique node where the paths from root-to-u and root-to-v diverge. Shows up everywhere: tree distance, range queries on Euler tour, network routing, version control merge bases." },
    { t: "Why binary lifting?", b: "Naive: walk u up one step at a time until depths match, then walk both up together. O(n) per query. Binary lifting: precompute, for each node v and each k, the 2^k-th ancestor of v. Then any ancestor distance d can be expressed as d = sum of powers of 2, so we jump in O(log n) per query." },
    { t: "Precompute (O(n log n))", b: "up[v][0] = parent[v]. up[v][k] = up[up[v][k-1]][k-1] (the 2^k-th ancestor = the 2^(k-1)-th ancestor of the 2^(k-1)-th ancestor). LOG = ceil(log2 n) levels. Build via BFS so parent-cells exist when child-cells need them." },
    { t: "Query: 2 phases", b: "(1) Lift the deeper node up to match the other's depth, set bits of the depth difference tell you which 2^k jumps to take. (2) Lift BOTH nodes up in parallel as far as possible WITHOUT meeting. The single step further is the LCA. Both phases take at most O(log n) jumps." },
    { t: "Why 'as far as possible without meeting'?", b: "If you lift both to a common ancestor too eagerly, you might overshoot the LCA. Instead, scan k = LOG-1 down to 0; whenever up[u][k] is not equal to up[v][k], jump (we know the LCA is still strictly above). When you cannot jump anywhere without meeting, LCA = parent of where you stopped." },
    { t: "Distance via LCA", b: "dist(u, v) = depth[u] + depth[v] - 2*depth[LCA(u,v)]. With LCA in O(log n) and depths precomputed, you get tree-distance queries in O(log n). Foundation for tree-based DP, kth-ancestor queries, and centroid-decomposition-style techniques." },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>tree ancestor queries</SectionEyebrow>
        <SectionTitle>Binary lifting: teleporting up the tree in log n jumps</SectionTitle>
        <Lede>
          Climbing a tree one step at a time is slow. Binary lifting precomputes teleporters: from any node you can jump 1, 2, 4, 8, ... steps up in O(1). Any height difference is a sum of these powers, so any ancestor query takes only O(log n) jumps. The same trick generalizes (sparse table) to range-min/max queries on arrays.
        </Lede>
      </div>

      <Card>
        <SubHeading>Mental model</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Precompute <InlineCode>up[v][k]</InlineCode> = the 2^k-th ancestor of v for all v and k from 0 to LOG-1. This table has O(n log n) entries and can be built bottom-up in O(n log n). Any ancestor distance d decomposes into set bits, so you hop through at most LOG jumps per query.
        </p>
      </Card>

      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {cards.map((c, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-700 dark:text-lime-400 mb-2 tracking-widest uppercase">
              0{i + 1}
            </div>
            <SubHeading>{c.t}</SubHeading>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{c.b}</p>
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
  const probs = [
    { q: "On a balanced tree A>B, A>C, B>D, B>E, C>F, C>G, E>H, E>I, G>J, LCA(H, J) = ?", a: "A" },
    { q: "Same tree, LCA(D, I) = ?", a: "B" },
    { q: "On the path A>B>C>D>E>F, LCA(C, F) = ?", a: "C" },
    { q: "Tree distance formula given depths and LCA?", a: "depth[u] + depth[v] - 2*depth[LCA]" },
  ];
  const [guesses, setGuesses] = useState<(string | null)[]>(probs.map(() => null));
  const [shown, setShown] = useState<boolean[]>(probs.map(() => false));

  return (
    <div className="flex flex-col gap-3">
      <Callout>Work each problem by hand using binary lifting, then verify.</Callout>
      {probs.map((p, i) => (
        <Card key={i}>
          <p className="text-sm text-stone-800 dark:text-stone-200 mb-3">
            <span className="font-mono font-bold text-stone-500 mr-2">#{i + 1}</span>
            {p.q}
          </p>
          <div className="flex gap-2 items-center flex-wrap">
            <input
              value={guesses[i] ?? ""}
              onChange={(e) => {
                const v = [...guesses]; v[i] = e.target.value; setGuesses(v);
              }}
              placeholder="your answer"
              className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-sm font-mono text-stone-900 dark:text-stone-100 outline-none focus:border-stone-400 dark:focus:border-white/30"
              style={{ minWidth: 240 }}
            />
            <button
              type="button"
              onClick={() => { const v = [...shown]; v[i] = true; setShown(v); }}
              className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 text-xs font-mono text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30 transition-colors cursor-pointer bg-white dark:bg-stone-900"
            >
              Reveal
            </button>
            {shown[i] && (
              <span className="px-3 py-1 rounded-md text-xs font-bold bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-300 dark:border-lime-400/30">
                {p.a}
              </span>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Insight                                                             */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card padded={false} className="overflow-hidden">
        <div className="px-5 pt-5 pb-2">
          <SubHeading>Three classical LCA techniques</SubHeading>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-stone-50 dark:bg-stone-950/50">
            <tr>
              {["Method", "Precompute", "Query", "Best for"].map((h) => (
                <th key={h} className="text-left px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 border-b border-stone-200 dark:border-white/10">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Binary lifting", "O(n log n)", "O(log n)", "Online queries; kth-ancestor for free"],
              ["Euler tour + RMQ (sparse table)", "O(n log n)", "O(1)", "Tons of online queries"],
              ["Tarjan offline", "O(n α(n))", "O(α(n)) amortized", "All queries known up front; uses DSU"],
            ].map((r, i) => (
              <tr key={i} className="border-t border-stone-100 dark:border-white/5">
                <td className="px-4 py-2 font-semibold text-stone-900 dark:text-stone-100">{r[0]}</td>
                <td className="px-4 py-2 font-mono text-lime-700 dark:text-lime-400">{r[1]}</td>
                <td className="px-4 py-2 font-mono font-bold text-lime-700 dark:text-lime-400">{r[2]}</td>
                <td className="px-4 py-2 text-stone-600 dark:text-stone-400">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card>
        <SubHeading>kth-ancestor for free</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          The same lift table gives <InlineCode>kthAncestor(v, k)</InlineCode> in O(log n): for each set bit of k, jump 2^bit levels using <InlineCode>up[v][bit]</InlineCode>. This is exactly Phase 1 of the LCA query, repackaged. LeetCode 1483 (Kth Ancestor of a Tree Node) is the canonical interview problem.
        </p>
      </Card>

      <Card>
        <SubHeading>Where this lands</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed space-y-1.5 pl-4 list-disc">
          <li><strong className="text-stone-900 dark:text-stone-100">Tree distance queries</strong>: dist(u, v) = depth[u] + depth[v] - 2*depth[LCA].</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Path sum / max on tree</strong>: precompute prefix-from-root, then use LCA to cancel the common prefix.</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Heavy-Light Decomposition</strong>: the natural index for path queries to segment trees.</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Git merge base</strong>: the LCA of two commit nodes in the DAG (Git uses bidirectional BFS because the commit graph is a DAG, not a tree).</li>
          <li><strong className="text-stone-900 dark:text-stone-100">Online phylogenetic tree queries</strong>: most recent common ancestor of two species.</li>
        </ul>
      </Card>

      <Card>
        <SubHeading>Sparse table, same trick on arrays</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Binary lifting's array cousin is the sparse table: for an immutable array, precompute <InlineCode>st[i][k]</InlineCode> = min of A[i..i+2^k - 1]. Range-min query [l, r] in O(1) by overlapping two power-of-two ranges. O(n log n) precompute, O(1) per query, the standard for read-only RMQ. Used in the Euler-tour LCA reduction.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L7_LCA({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
    ...(PRACTICE_TOPIC_SLUG
      ? [
          {
            id: "practice",
            label: "Practice",
            icon: <Code2 className="w-4 h-4" />,
            content: <PracticeTab topicSlug={PRACTICE_TOPIC_SLUG} />,
          },
        ]
      : []),
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "Time and space for the binary-lifting LCA precompute?",
      options: ["O(n) / O(n)", "O(n log n) / O(n log n)", "O(n²) / O(n)", "O(n α(n)) / O(n)"],
      correctIndex: 1,
      explanation: "up[v][k] is filled for every node x every level (LOG = ceil(log2 n)). Both time and space are O(n log n).",
    },
    {
      question: "How many jumps does an LCA query take in the worst case?",
      options: ["O(1)", "O(log n)", "O(sqrt n)", "O(n)"],
      correctIndex: 1,
      explanation: "Phase 1 (depth match) is at most LOG jumps; Phase 2 (parallel lift without meeting) is also at most LOG jumps. Total is at most 2*log2 n.",
    },
    {
      question: "In Phase 2, why do we lift BOTH u and v together as far as possible WITHOUT meeting?",
      options: [
        "It is faster than other orderings",
        "If we ever met above the true LCA we would overshoot, by stopping just before meeting, the parent of where we stopped is exactly the LCA",
        "It saves memory",
        "It is required by the binary-lifting invariant",
      ],
      correctIndex: 1,
      explanation: "Greedily jumping until they meet could land us at a strict ancestor of the LCA (overshoot). Jumping while still distinct, then taking parent of the stop position, hits the LCA exactly.",
    },
    {
      question: "Tree distance formula using LCA?",
      options: [
        "depth[u] - depth[v]",
        "depth[u] + depth[v]",
        "depth[u] + depth[v] - 2*depth[LCA(u, v)]",
        "max(depth[u], depth[v]) - depth[LCA]",
      ],
      correctIndex: 2,
      explanation: "u-to-LCA edges + v-to-LCA edges = (depth[u] - depth[LCA]) + (depth[v] - depth[LCA]) = depth[u] + depth[v] - 2*depth[LCA].",
    },
    {
      question: "What is the array analogue of binary lifting for range-min queries?",
      options: ["Fenwick tree", "Segment tree", "Sparse table", "Treap"],
      correctIndex: 2,
      explanation: "Sparse table: st[i][k] = min of A[i..i+2^k-1]. O(n log n) precompute, O(1) query (overlap two power-of-two ranges). Same precompute pattern as binary lifting's up[v][k].",
    },
  ];

  return (
    <LessonShell
      title="Lowest Common Ancestor"
      level={7}
      lessonNumber={7}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High, LC1483 (Kth Ancestor), tree-distance queries, HLD foundation."
      nextLessonHint="Advanced Graph Algorithms"
      onQuizComplete={onQuizComplete}
    />
  );
}
