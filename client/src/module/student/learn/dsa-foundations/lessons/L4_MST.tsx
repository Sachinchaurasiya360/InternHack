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
  Lede,
  PillButton,
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "graph";

/* ------------------------------------------------------------------ */
/*  Parse weighted undirected edges  A-B:w                            */
/* ------------------------------------------------------------------ */

function parseWeighted(input: string): { ids: string[]; edges: { from: string; to: string; w: number }[] } | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string; w: number }[] = [];
  const ids = new Set<string>();
  for (const tok of tokens) {
    const m = tok.match(/^([A-Za-z0-9_]+)-([A-Za-z0-9_]+):(-?\d+)$/);
    if (!m) return null;
    edges.push({ from: m[1], to: m[2], w: Number(m[3]) });
    ids.add(m[1]);
    ids.add(m[2]);
  }
  return { ids: [...ids].sort(), edges };
}

function autoLayout(ids: string[], cx = 300, cy = 150, r = 110): Record<string, { x: number; y: number }> {
  const out: Record<string, { x: number; y: number }> = {};
  const n = ids.length;
  ids.forEach((id, i) => {
    const ang = (2 * Math.PI * i) / Math.max(1, n) - Math.PI / 2;
    out[id] = { x: cx + r * Math.cos(ang), y: cy + r * Math.sin(ang) };
  });
  return out;
}

/* ------------------------------------------------------------------ */
/*  Kruskal                                                            */
/* ------------------------------------------------------------------ */

type EdgeStatus = "pending" | "accepted" | "rejected" | "considering";
type NodeState = "default" | "done";

interface KFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodeStates: Record<string, NodeState>;
  mstEdges: Set<string>;
  rejectedEdges: Set<string>;
  consideringEdge: string | null;
  sortedEdges: { from: string; to: string; w: number; status: EdgeStatus }[];
  cost: number;
}

const KRUSKAL_PSEUDO = [
  "Kruskal(G):",
  "  sort edges by weight ascending",
  "  for each v: make-set(v)",
  "  MST ← ∅",
  "  for each edge (u, v, w) in sorted order:",
  "    if find(u) ≠ find(v):",
  "      union(u, v)",
  "      MST ← MST ∪ {(u,v)}",
  "  return MST",
];

function buildKruskalFrames(ids: string[], edges: { from: string; to: string; w: number }[]): KFrame[] {
  const f: KFrame[] = [];
  const parent: Record<string, string> = {};
  for (const id of ids) parent[id] = id;
  const find = (x: string): string => (parent[x] === x ? x : (parent[x] = find(parent[x])));
  const union = (a: string, b: string) => { const ra = find(a), rb = find(b); if (ra !== rb) parent[ra] = rb; };

  const sorted: { from: string; to: string; w: number; status: EdgeStatus }[] = [...edges].sort((a, b) => a.w - b.w).map((e) => ({ ...e, status: "pending" as EdgeStatus }));
  const nodeStates: Record<string, NodeState> = Object.fromEntries(ids.map((id) => [id, "default"]));
  const mstEdges = new Set<string>();
  const rejectedEdges = new Set<string>();
  let cost = 0;
  let consideringEdge: string | null = null;

  const clone = (patch: Partial<KFrame>): KFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    nodeStates: { ...nodeStates },
    mstEdges: new Set(mstEdges),
    rejectedEdges: new Set(rejectedEdges),
    consideringEdge: patch.consideringEdge !== undefined ? patch.consideringEdge : consideringEdge,
    sortedEdges: sorted.map((e) => ({ ...e })),
    cost,
  });

  f.push(clone({ line: 1, message: "Sort all edges by weight ascending." }));
  f.push(clone({ line: 2, message: "Make-set: each vertex is its own component." }));

  for (let i = 0; i < sorted.length; i++) {
    const e = sorted[i];
    const k = `${e.from}-${e.to}`;
    consideringEdge = k;
    f.push(clone({ line: 4, message: `Consider edge ${e.from}-${e.to} (w=${e.w}).`, vars: { i: i + 1, u: e.from, v: e.to, w: e.w }, consideringEdge: k }));
    const ra = find(e.from), rb = find(e.to);
    if (ra !== rb) {
      union(e.from, e.to);
      sorted[i].status = "accepted";
      mstEdges.add(k);
      nodeStates[e.from] = "done";
      nodeStates[e.to] = "done";
      cost += e.w;
      f.push(clone({ line: 6, message: `Different components, union. Add to MST. Running cost = ${cost}.`, vars: { i: i + 1, cost } }));
    } else {
      sorted[i].status = "rejected";
      rejectedEdges.add(k);
      f.push(clone({ line: 5, message: `Same component, would create cycle. Reject.`, vars: { i: i + 1 } }));
    }
    consideringEdge = null;
  }
  f.push(clone({ line: 8, message: `Kruskal complete. MST cost = ${cost}.`, vars: { cost }, consideringEdge: null }));
  return f;
}

/* ------------------------------------------------------------------ */
/*  Prim                                                               */
/* ------------------------------------------------------------------ */

interface PFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodeStates: Record<string, NodeState>;
  mstEdges: Set<string>;
  inTree: string[];
  candidates: { from: string; to: string; w: number }[];
  cost: number;
  flashKey?: string;
}

const PRIM_PSEUDO = [
  "Prim(G, start):",
  "  inTree ← {start}; cost ← 0",
  "  candidates ← edges incident to start",
  "  while inTree ≠ V:",
  "    pick min-weight edge (u, v) with u ∈ T, v ∉ T",
  "    add v to inTree; cost += w",
  "    add v's edges to candidates",
];

function buildPrimFrames(ids: string[], edges: { from: string; to: string; w: number }[], start: string): PFrame[] {
  const f: PFrame[] = [];
  if (!ids.includes(start)) {
    f.push({ line: 0, vars: {}, message: `Start '${start}' not in graph`, nodeStates: {}, mstEdges: new Set(), inTree: [], candidates: [], cost: 0 });
    return f;
  }

  const adj: Record<string, { to: string; w: number }[]> = Object.fromEntries(ids.map((id) => [id, []]));
  for (const e of edges) { adj[e.from].push({ to: e.to, w: e.w }); adj[e.to].push({ to: e.from, w: e.w }); }

  const nodeStates: Record<string, NodeState> = Object.fromEntries(ids.map((id) => [id, "default"]));
  const mstEdges = new Set<string>();
  const inTree = new Set<string>([start]);
  nodeStates[start] = "done";
  let cost = 0;
  const cands: { from: string; to: string; w: number }[] = adj[start].map((e) => ({ from: start, to: e.to, w: e.w }));

  const clone = (patch: Partial<PFrame>): PFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    nodeStates: { ...nodeStates },
    mstEdges: new Set(mstEdges),
    inTree: [...inTree],
    candidates: [...cands].sort((a, b) => a.w - b.w),
    cost,
    flashKey: patch.flashKey,
  });

  f.push(clone({ line: 1, message: `Start from ${start}. inTree = {${start}}, cost = 0.`, flashKey: start, vars: { start, cost } }));
  f.push(clone({ line: 2, message: `Collect ${cands.length} candidate edge(s) from ${start}.`, vars: { candidates: cands.length } }));

  while (inTree.size < ids.length) {
    cands.sort((a, b) => a.w - b.w);
    let chosenIdx = -1;
    for (let i = 0; i < cands.length; i++) {
      const c = cands[i];
      const inU = inTree.has(c.from), inV = inTree.has(c.to);
      if (inU !== inV) { chosenIdx = i; break; }
    }
    if (chosenIdx === -1) {
      f.push(clone({ line: 3, message: "No cross-cut edge remaining, graph disconnected." }));
      break;
    }
    const chosen = cands.splice(chosenIdx, 1)[0];
    const newV = inTree.has(chosen.from) ? chosen.to : chosen.from;
    const k = `${chosen.from}-${chosen.to}`;
    const kRev = `${chosen.to}-${chosen.from}`;
    mstEdges.add(k);
    mstEdges.add(kRev);
    cost += chosen.w;
    inTree.add(newV);
    nodeStates[newV] = "done";
    f.push(clone({ line: 4, message: `Cheapest cross-edge: ${chosen.from}-${chosen.to} (w=${chosen.w}). Add ${newV} to tree. Cost = ${cost}.`, flashKey: newV, vars: { newVertex: newV, edgeW: chosen.w, cost } }));
    for (const e of adj[newV]) {
      if (!inTree.has(e.to)) cands.push({ from: newV, to: e.to, w: e.w });
    }
    f.push(clone({ line: 6, message: `Added new candidate edges. Tree size = ${inTree.size}.`, vars: { "|inTree|": inTree.size, cost } }));
  }

  f.push(clone({ line: 3, message: `Prim complete. MST cost = ${cost}.`, vars: { cost } }));
  return f;
}

/* ------------------------------------------------------------------ */
/*  Inline graph SVG                                                   */
/* ------------------------------------------------------------------ */

const NODE_STATE_COLOR: Record<NodeState, string> = {
  default: THEME.textMuted,
  done: "#10b981",
};

function GraphSVG({
  ids,
  edges,
  pos,
  mstEdges,
  rejectedEdges,
  consideringEdge,
}: {
  ids: string[];
  edges: { from: string; to: string; w: number }[];
  pos: Record<string, { x: number; y: number }>;
  mstEdges: Set<string>;
  rejectedEdges?: Set<string>;
  consideringEdge?: string | null;
  nodeStates: Record<string, NodeState>;
}) {
  const W = 600;
  const H = 300;
  return (
    <div className="w-full overflow-x-auto rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="block mx-auto">
        {edges.map((e) => {
          const p1 = pos[e.from];
          const p2 = pos[e.to];
          if (!p1 || !p2) return null;
          const k1 = `${e.from}-${e.to}`;
          const k2 = `${e.to}-${e.from}`;
          const isConsidering = consideringEdge === k1 || consideringEdge === k2;
          const isAccepted = mstEdges.has(k1) || mstEdges.has(k2);
          const isRejected = rejectedEdges && (rejectedEdges.has(k1) || rejectedEdges.has(k2));
          const stroke = isConsidering ? "#f59e0b" : isRejected ? "#ef4444" : isAccepted ? "#10b981" : THEME.border;
          const strokeW = isConsidering || isAccepted || isRejected ? 2.5 : 1.5;
          const mx = (p1.x + p2.x) / 2;
          const my = (p1.y + p2.y) / 2;
          return (
            <g key={k1}>
              <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={stroke} strokeWidth={strokeW} />
              <text x={mx} y={my - 5} textAnchor="middle" fontSize="10" fill={THEME.accent} fontWeight="700" fontFamily={THEME.mono}>{e.w}</text>
            </g>
          );
        })}
        {ids.map((id) => {
          const p = pos[id];
          if (!p) return null;
          return (
            <g key={id}>
              <circle cx={p.x} cy={p.y} r={20} fill={NODE_STATE_COLOR["default"]} stroke={THEME.border} strokeWidth={1.5} />
              <text x={p.x} y={p.y + 1} textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="#fff" fontWeight="700" fontFamily={THEME.heading}>{id}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sorted edge table (Kruskal)                                        */
/* ------------------------------------------------------------------ */

function SortedEdgeTable({ sortedEdges, considered }: { sortedEdges: { from: string; to: string; w: number; status: EdgeStatus }[]; considered: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">/ sorted edges</div>
      <div className="flex flex-col gap-1">
        {sortedEdges.map((e, i) => {
          const isCur = i + 1 === considered;
          const colors: Record<EdgeStatus, string> = {
            pending: "text-stone-400 border-stone-200 dark:border-white/10",
            considering: "text-amber-600 dark:text-amber-400 border-amber-400",
            accepted: "text-lime-700 dark:text-lime-400 border-lime-500 bg-lime-50 dark:bg-lime-400/10",
            rejected: "text-rose-600 dark:text-rose-400 border-rose-400 bg-rose-50 dark:bg-rose-400/5",
          };
          const cls = isCur ? "text-amber-600 dark:text-amber-400 border-amber-400 bg-amber-50 dark:bg-amber-400/5" : colors[e.status];
          return (
            <div key={i} className={`flex justify-between items-center px-2.5 py-1 rounded-md border text-xs font-mono font-bold transition-colors ${cls}`}>
              <span>{e.from}-{e.to}</span>
              <span>{e.w}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Candidate panel (Prim)                                             */
/* ------------------------------------------------------------------ */

function CandidatePanel({ candidates, inTree }: { candidates: { from: string; to: string; w: number }[]; inTree: string[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">/ candidate edges (sorted)</div>
      <div className="flex flex-col gap-1 p-2 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-900 min-h-8">
        {candidates.length === 0 ? (
          <span className="text-xs text-stone-400 italic">empty</span>
        ) : (
          candidates.slice(0, 8).map((c, i) => (
            <div key={i} className={`flex justify-between items-center px-2.5 py-1 rounded-md border text-xs font-mono font-bold ${i === 0 ? "bg-lime-400 text-stone-900 border-lime-400" : "border-lime-300 dark:border-lime-700 text-lime-700 dark:text-lime-300"}`}>
              <span>{c.from}-{c.to}</span>
              <span>{c.w}</span>
            </div>
          ))
        )}
      </div>
      <div className="text-[10px] text-stone-500 font-mono">In tree: <strong className="text-stone-700 dark:text-stone-300">{inTree.join(", ") || "-"}</strong></div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-visualizers                                                    */
/* ------------------------------------------------------------------ */

function KruskalViz({ ids, edges, inputStr, setInputStr }: {
  ids: string[];
  edges: { from: string; to: string; w: number }[];
  inputStr: string;
  setInputStr: (s: string) => void;
}) {
  const frames = useMemo(() => buildKruskalFrames(ids, edges), [ids, edges]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  return (
    <AlgoCanvas
      title={`Kruskal's, Running cost: ${frame?.cost ?? 0}`}
      player={player}
      input={
        <InputEditor
          label="Weighted undirected edges (A-B:w)"
          value={inputStr}
          placeholder="A-B:4, B-C:1, ..."
          helper="Edges sort by weight ascending. Disjoint-set union for cycle detection."
          presets={[
            { label: "Small", value: "A-B:4, A-C:3, B-C:1, B-D:2, C-D:4, C-E:5, D-E:6" },
            { label: "Linear", value: "A-B:1, B-C:2, C-D:3, D-E:4" },
            { label: "Dense", value: "A-B:2, A-C:3, A-D:4, B-C:1, B-D:5, C-D:6" },
          ]}
          onApply={(v) => { if (parseWeighted(v)) setInputStr(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={KRUSKAL_PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} />}
    >
      <div className="flex flex-col gap-3">
        {frame && <GraphSVG ids={ids} edges={edges} pos={pos} mstEdges={frame.mstEdges} rejectedEdges={frame.rejectedEdges} consideringEdge={frame.consideringEdge} nodeStates={frame.nodeStates} />}
        <div className="grid grid-cols-2 gap-3">
          {frame && edges.length <= 10 && <SortedEdgeTable sortedEdges={frame.sortedEdges} considered={frame.vars?.i as number ?? 0} />}
        </div>
        <div className="flex gap-2 flex-wrap text-xs text-stone-500">
          {[["#f59e0b", "considering"], ["#10b981", "in MST"], ["#ef4444", "rejected (cycle)"]].map(([c, l]) => (
            <span key={l} className="inline-flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: c }} />
              {l}
            </span>
          ))}
        </div>
        <Callout className="w-full">{frame?.message ?? "Press play to run Kruskal's."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

function PrimViz({ ids, edges, inputStr, setInputStr, start, setStart }: {
  ids: string[];
  edges: { from: string; to: string; w: number }[];
  inputStr: string;
  setInputStr: (s: string) => void;
  start: string;
  setStart: (s: string) => void;
}) {
  const frames = useMemo(() => buildPrimFrames(ids, edges, start), [ids, edges, start]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  return (
    <AlgoCanvas
      title={`Prim's from ${start}, Running cost: ${frame?.cost ?? 0}`}
      player={player}
      input={
        <div className="flex gap-3 flex-wrap items-end">
          <div className="flex-1 min-w-64">
            <InputEditor
              label="Weighted undirected edges (A-B:w)"
              value={inputStr}
              onApply={(v) => { if (parseWeighted(v)) setInputStr(v); }}
              presets={[
                { label: "Small", value: "A-B:4, A-C:3, B-C:1, B-D:2, C-D:4, C-E:5, D-E:6" },
                { label: "Dense", value: "A-B:2, A-C:3, A-D:4, B-C:1, B-D:5, C-D:6" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">/ start</label>
            <select
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="px-3 py-1.5 rounded-md border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-mono text-sm"
            >
              {ids.map((id) => <option key={id} value={id}>{id}</option>)}
            </select>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={PRIM_PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? ["newVertex"] : []} />}
    >
      <div className="flex flex-col gap-3">
        {frame && <GraphSVG ids={ids} edges={edges} pos={pos} mstEdges={frame.mstEdges} nodeStates={frame.nodeStates} />}
        {frame && <CandidatePanel candidates={frame.candidates} inTree={frame.inTree} />}
        <div className="flex gap-2 flex-wrap text-xs text-stone-500">
          {[["#10b981", "in tree"], [THEME.textMuted, "outside tree"]].map(([c, l]) => (
            <span key={l} className="inline-flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: c }} />
              {l}
            </span>
          ))}
        </div>
        <Callout className="w-full">{frame?.message ?? "Press play to run Prim's."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [mode, setMode] = useState<"kruskal" | "prim">("kruskal");
  const [inputStr, setInputStr] = useState("A-B:4, A-C:3, B-C:1, B-D:2, C-D:4, C-E:5, D-E:6");
  const [start, setStart] = useState("A");
  const parsed = useMemo(() => parseWeighted(inputStr), [inputStr]);
  const ids = parsed?.ids ?? [];
  const edges = parsed?.edges ?? [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <PillButton active={mode === "kruskal"} onClick={() => setMode("kruskal")}>
          <span className="text-xs">Kruskal's</span>
        </PillButton>
        <PillButton active={mode === "prim"} onClick={() => setMode("prim")}>
          <span className="text-xs">Prim's</span>
        </PillButton>
      </div>
      {mode === "kruskal"
        ? <KruskalViz ids={ids} edges={edges} inputStr={inputStr} setInputStr={setInputStr} />
        : <PrimViz ids={ids} edges={edges} inputStr={inputStr} setInputStr={setInputStr} start={start} setStart={setStart} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "What is an MST?", body: "A minimum spanning tree of a connected, undirected, weighted graph is a subset of edges connecting all vertices with minimum total weight, and no cycles. It has V − 1 edges." },
    { title: "Kruskal's idea", body: "Greedy by edge: sort all edges ascending, take each if it doesn't create a cycle (check with Union-Find). Works great for sparse graphs. O(E log E)." },
    { title: "Prim's idea", body: "Greedy by vertex: grow a tree starting from any vertex, always adding the cheapest edge that crosses from tree to outside. Works great for dense graphs. O(E log V) with heap." },
    { title: "Cut property", body: "For any cut (partition of vertices), the minimum-weight edge crossing it belongs to some MST. Both Kruskal and Prim are applications of this single theorem." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>mental model</SectionEyebrow>
        <SectionTitle>Wire up every house. Use the least cable.</SectionTitle>
        <Lede>
          You are wiring up houses in a neighborhood with cable. Every house must be connected, but
          the total cable length must be minimum. That minimum tree is the MST. Kruskal picks the
          cheapest wires globally; Prim grows outward from one house.
        </Lede>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {sections.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono tracking-widest text-lime-700 dark:text-lime-400 mb-2">0{i + 1}</div>
            <div className="font-bold text-sm text-stone-900 dark:text-stone-50 mb-1">{s.title}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.body}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try It                                                             */
/* ------------------------------------------------------------------ */

function TryTab() {
  return (
    <div className="flex flex-col gap-3">
      <Callout>
        Run both Kruskal and Prim on the same preset, they may pick different edges but the total cost is identical.
      </Callout>
      {[
        "On the 'Small' preset, what is the MST cost? (Expected: 10)",
        "Run Prim from C, is the set of MST edges the same as from A? (Expected: cost same, edges may differ only if multiple MSTs exist)",
        "If all edge weights are distinct, is the MST unique? (Expected: Yes)",
      ].map((q, i) => (
        <Card key={i}>
          <div className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
            <span className="font-bold text-lime-700 dark:text-lime-400">#{i + 1}</span> {q}
          </div>
        </Card>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Insight                                                            */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>Kruskal vs Prim, which and when?</SubHeading>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Sparse graph (E ≈ V): Kruskal with Union-Find is simpler and fast, O(E log E).</li>
          <li>Dense graph (E ≈ V²): Prim with adjacency matrix is O(V²), often better.</li>
          <li>Both are optimal. Pick based on code simplicity.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>MST is not shortest paths!</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          A common mistake: the MST might not contain the shortest path between two specific
          vertices. MST minimizes total weight across all vertices; Dijkstra minimizes distance from
          a single source.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L4_MST({ onQuizComplete }: Props) {
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
      question: "A spanning tree of a graph with V vertices has exactly how many edges?",
      options: ["V", "V − 1", "V + 1", "E − V"],
      correctIndex: 1,
      explanation: "A tree on V nodes has V − 1 edges. Adding any more would create a cycle.",
    },
    {
      question: "Kruskal's algorithm uses Union-Find for what purpose?",
      options: [
        "Sort edges",
        "Compute weights",
        "Detect cycles efficiently (nearly O(1) per op)",
        "Store the MST",
      ],
      correctIndex: 2,
      explanation:
        "Find tells us if two endpoints are already connected. Union merges components when an edge is added.",
    },
    {
      question: "Prim's algorithm with a binary heap has complexity…",
      options: ["O(V²)", "O(E log V)", "O(V + E)", "O(V·E)"],
      correctIndex: 1,
      explanation:
        "Each edge triggers at most one decrease-key; V extract-mins. Total O((V + E) log V) ≈ O(E log V).",
    },
    {
      question: "If all edge weights are distinct, the MST is…",
      options: ["Not guaranteed to exist", "Unique", "Empty", "The same as the graph"],
      correctIndex: 1,
      explanation:
        "With distinct weights, every cut has a unique minimum edge, and the MST is determined uniquely by the cut property.",
    },
  ];

  return (
    <LessonShell
      title="Minimum Spanning Trees"
      level={4}
      lessonNumber={7}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High, networking, clustering, approximation algorithms."
      nextLessonHint="Bubble & Selection Sort"
      onQuizComplete={onQuizComplete}
    />
  );
}
