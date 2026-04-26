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
/*  Parse directed edges  A>B                                          */
/* ------------------------------------------------------------------ */

function parseDirected(input: string): { ids: string[]; edges: { from: string; to: string }[] } | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string }[] = [];
  const ids = new Set<string>();
  for (const tok of tokens) {
    const m = tok.match(/^([A-Za-z0-9_]+)>([A-Za-z0-9_]+)$/);
    if (!m) return null;
    edges.push({ from: m[1], to: m[2] });
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
/*  Kahn frame builder                                                 */
/* ------------------------------------------------------------------ */

type NodeState = "default" | "frontier" | "done";

interface KahnFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodeStates: Record<string, NodeState>;
  edgeTree: Set<string>;
  inDeg: Record<string, number>;
  queue: string[];
  output: string[];
  cycle?: boolean;
  flashKey?: string;
}

const KAHN_PSEUDO = [
  "Kahn(G):",
  "  compute in-degree of every vertex",
  "  Q ← all vertices with in-degree = 0",
  "  output ← []",
  "  while Q not empty:",
  "    u ← dequeue(Q); output.append(u)",
  "    for each neighbor v of u:",
  "      inDeg[v] -= 1",
  "      if inDeg[v] = 0: enqueue(Q, v)",
  "  if |output| < |V|: CYCLE (not a DAG)",
];

function buildKahnFrames(ids: string[], edges: { from: string; to: string }[]): KahnFrame[] {
  const f: KahnFrame[] = [];
  const adj: Record<string, string[]> = Object.fromEntries(ids.map((id) => [id, []]));
  const inDeg: Record<string, number> = Object.fromEntries(ids.map((id) => [id, 0]));
  for (const e of edges) { adj[e.from].push(e.to); inDeg[e.to] = (inDeg[e.to] ?? 0) + 1; }
  for (const id of ids) adj[id].sort();

  const state: Record<string, NodeState> = Object.fromEntries(ids.map((id) => [id, "default"]));
  const edgeTree = new Set<string>();
  const output: string[] = [];
  const Q: string[] = ids.filter((id) => inDeg[id] === 0).sort();
  for (const id of Q) state[id] = "frontier";

  const clone = (patch: Partial<KahnFrame>): KahnFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    nodeStates: { ...state },
    edgeTree: new Set(edgeTree),
    inDeg: { ...inDeg },
    queue: [...Q],
    output: [...output],
    cycle: patch.cycle,
    flashKey: patch.flashKey,
  });

  f.push(clone({ line: 1, message: "Compute in-degrees." }));
  f.push(clone({ line: 2, message: `Initial queue = ${Q.length ? Q.join(", ") : "(none)"} (all nodes with in-degree 0).` }));

  while (Q.length) {
    const u = Q.shift()!;
    state[u] = "done";
    output.push(u);
    f.push(clone({ line: 5, message: `Dequeue ${u}. Append to output.`, vars: { u, "|output|": output.length }, flashKey: u }));

    for (const v of adj[u]) {
      inDeg[v] -= 1;
      edgeTree.add(`${u}-${v}`);
      f.push(clone({ line: 7, message: `Decrement in-degree of ${v}: now ${inDeg[v]}.`, vars: { u, v, "inDeg[v]": inDeg[v] } }));
      if (inDeg[v] === 0) {
        Q.push(v);
        state[v] = "frontier";
        f.push(clone({ line: 8, message: `in-degree[${v}] hit 0 — enqueue.`, flashKey: v, vars: { u, v } }));
      }
    }
  }

  const isCycle = output.length < ids.length;
  f.push(clone({
    line: 9,
    message: isCycle
      ? `|output| = ${output.length} < |V| = ${ids.length} — CYCLE detected, not a DAG.`
      : `All ${ids.length} vertices output. Topological order: ${output.join(" → ")}.`,
    cycle: isCycle,
  }));
  return f;
}

/* ------------------------------------------------------------------ */
/*  DFS topo frame builder                                             */
/* ------------------------------------------------------------------ */

type DFSColor = "W" | "G" | "B";

interface DFSTopoFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodeStates: Record<string, NodeState>;
  edgeTree: Set<string>;
  edgeBack: Set<string>;
  stack: string[];
  output: string[];
  cycle?: boolean;
  flashKey?: string;
}

const DFS_PSEUDO = [
  "DFS-Topo(G):",
  "  stack ← empty",
  "  for each v: color[v] ← WHITE",
  "  for each v in V:",
  "    if color[v] = WHITE: DFS-Visit(v)",
  "DFS-Visit(u):",
  "  color[u] ← GRAY",
  "  for each neighbor v of u:",
  "    if color[v] = GRAY: report CYCLE",
  "    elif color[v] = WHITE: DFS-Visit(v)",
  "  color[u] ← BLACK",
  "  push u onto stack",
  "// Topo order = stack popped top-to-bottom",
];

function buildDFSTopoFrames(ids: string[], edges: { from: string; to: string }[]): DFSTopoFrame[] {
  const f: DFSTopoFrame[] = [];
  const adj: Record<string, string[]> = Object.fromEntries(ids.map((id) => [id, []]));
  for (const e of edges) adj[e.from].push(e.to);
  for (const id of ids) adj[id].sort();

  const color: Record<string, DFSColor> = Object.fromEntries(ids.map((id) => [id, "W"]));
  const state: Record<string, NodeState> = Object.fromEntries(ids.map((id) => [id, "default"]));
  const edgeTree = new Set<string>();
  const edgeBack = new Set<string>();
  const finishStack: string[] = [];
  let hasCycle = false;

  const clone = (patch: Partial<DFSTopoFrame>): DFSTopoFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    nodeStates: { ...state },
    edgeTree: new Set(edgeTree),
    edgeBack: new Set(edgeBack),
    stack: [...finishStack],
    output: patch.output ?? [],
    cycle: patch.cycle ?? hasCycle,
    flashKey: patch.flashKey,
  });

  f.push(clone({ line: 1, message: "Initialize stack = [], all vertices WHITE." }));

  function visit(u: string) {
    color[u] = "G";
    state[u] = "frontier" as NodeState;
    f.push(clone({ line: 6, message: `DFS-Visit(${u}). Color GRAY.`, flashKey: u, vars: { u } }));
    for (const v of adj[u]) {
      const k = `${u}-${v}`;
      f.push(clone({ line: 7, message: `Look at edge ${u}→${v}.`, vars: { u, v } }));
      if (color[v] === "G") {
        hasCycle = true;
        edgeBack.add(k);
        f.push(clone({ line: 8, message: `${v} is GRAY — back edge → CYCLE. Graph is NOT a DAG.`, cycle: true, vars: { u, v } }));
        return;
      } else if (color[v] === "W") {
        edgeTree.add(k);
        visit(v);
        if (hasCycle) return;
      } else {
        f.push(clone({ line: 7, message: `${v} is BLACK — already finished, skip.`, vars: { u, v } }));
      }
    }
    color[u] = "B";
    state[u] = "done";
    finishStack.push(u);
    f.push(clone({ line: 11, message: `Finish ${u}. Push onto stack.`, flashKey: u, vars: { u } }));
  }

  for (const v of ids) {
    if (color[v] === "W") {
      visit(v);
      if (hasCycle) break;
    }
  }

  if (!hasCycle) {
    const topo = [...finishStack].reverse();
    f.push(clone({ line: 12, message: `All done. Topological order = ${topo.join(" → ")}.`, output: topo }));
  }
  return f;
}

/* ------------------------------------------------------------------ */
/*  Inline graph SVG                                                   */
/* ------------------------------------------------------------------ */

const NODE_STATE_COLOR: Record<NodeState, string> = {
  default: THEME.textMuted,
  frontier: "#3b82f6",
  done: "#10b981",
};

function GraphSVG({
  ids,
  edges,
  pos,
  frame,
}: {
  ids: string[];
  edges: { from: string; to: string }[];
  pos: Record<string, { x: number; y: number }>;
  frame: KahnFrame | DFSTopoFrame;
  type?: "kahn" | "dfs";
}) {
  const W = 600;
  const H = 300;
  const treeEdges = "edgeTree" in frame ? frame.edgeTree : new Set<string>();
  const backEdges = "edgeBack" in frame ? frame.edgeBack : new Set<string>();
  return (
    <div className="w-full overflow-x-auto rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="block mx-auto">
        <defs>
          <marker id="arr-topo" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={THEME.border} />
          </marker>
          <marker id="arr-topo-tree" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#fbbf24" />
          </marker>
          <marker id="arr-topo-back" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#ef4444" />
          </marker>
        </defs>
        {edges.map((e) => {
          const p1 = pos[e.from];
          const p2 = pos[e.to];
          if (!p1 || !p2) return null;
          const k = `${e.from}-${e.to}`;
          const isTree = treeEdges.has(k);
          const isBack = backEdges.has(k);
          const stroke = isTree ? "#fbbf24" : isBack ? "#ef4444" : THEME.border;
          const markerRef = isTree ? "url(#arr-topo-tree)" : isBack ? "url(#arr-topo-back)" : "url(#arr-topo)";
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const len = Math.sqrt(dx * dx + dy * dy) || 1;
          const ex = p2.x - (22 / len) * dx;
          const ey = p2.y - (22 / len) * dy;
          const sx = p1.x + (22 / len) * dx;
          const sy = p1.y + (22 / len) * dy;
          return (
            <line key={k} x1={sx} y1={sy} x2={ex} y2={ey} stroke={stroke} strokeWidth={isTree || isBack ? 2.5 : 1.5} markerEnd={markerRef} />
          );
        })}
        {ids.map((id) => {
          const p = pos[id];
          if (!p) return null;
          const ns = frame.nodeStates[id] ?? "default";
          const fill = NODE_STATE_COLOR[ns];
          const inD = "inDeg" in frame ? (frame as KahnFrame).inDeg[id] : undefined;
          return (
            <g key={id}>
              <circle cx={p.x} cy={p.y} r={20} fill={fill} stroke={THEME.border} strokeWidth={1.5} />
              <text x={p.x} y={p.y + 1} textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="#fff" fontWeight="700" fontFamily={THEME.heading}>{id}</text>
              {inD !== undefined && (
                <text x={p.x + 14} y={p.y - 14} fontSize="11" fill={THEME.accent} fontWeight="700" fontFamily={THEME.mono}>{inD}</text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sequence display                                                   */
/* ------------------------------------------------------------------ */

function OutputSeq({ items, title }: { items: string[]; title: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">{title}</div>
      <div className="flex gap-1.5 flex-wrap items-center min-h-8 px-2 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-900">
        {items.length === 0 ? (
          <span className="text-xs text-stone-400 italic">-</span>
        ) : (
          items.map((id, i) => (
            <span key={i} className="inline-flex items-center gap-1">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-lime-600 text-white">{id}</span>
              {i < items.length - 1 && <span className="text-stone-400">→</span>}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

function QueueViz({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">/ queue (in-deg = 0)</div>
      <div className="flex gap-1.5 flex-wrap items-center min-h-8 px-2 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-900">
        {items.length === 0 ? <span className="text-xs text-stone-400 italic">empty</span> : items.map((v, i) => (
          <span key={i} className={`inline-block px-2.5 py-1 rounded-md text-xs font-mono font-bold border ${i === 0 ? "bg-cyan-500 text-white border-cyan-500" : "border-cyan-300 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300"}`}>{v}</span>
        ))}
      </div>
    </div>
  );
}

function StackViz({ items }: { items: string[] }) {
  const rev = [...items].reverse();
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">/ finish stack (top first)</div>
      <div className="flex flex-col gap-1 min-h-8 p-2 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-900">
        {rev.length === 0 ? <span className="text-xs text-stone-400 italic">empty</span> : rev.map((v, i) => (
          <span key={i} className={`inline-block px-2.5 py-1 rounded-md text-xs font-mono font-bold border ${i === 0 ? "bg-blue-500 text-white border-blue-500" : "border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300"}`}>{v}</span>
        ))}
      </div>
    </div>
  );
}

function CycleBanner() {
  return (
    <div className="mt-2 px-4 py-2.5 rounded-md border border-rose-500 bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200 text-sm font-bold text-center">
      NOT A DAG — topological order does not exist.
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-visualizers                                                    */
/* ------------------------------------------------------------------ */

function KahnViz({ ids, edges, inputStr, setInputStr }: {
  ids: string[];
  edges: { from: string; to: string }[];
  inputStr: string;
  setInputStr: (s: string) => void;
}) {
  const frames = useMemo(() => buildKahnFrames(ids, edges), [ids, edges]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  return (
    <AlgoCanvas
      title="Kahn's Topological Sort"
      player={player}
      input={
        <InputEditor
          label="Directed edges (A>B)"
          value={inputStr}
          placeholder="A>B, B>C, ..."
          helper="Add a cycle (e.g. 'C>A') to see the 'not a DAG' warning."
          presets={[
            { label: "Course DAG", value: "A>B, A>C, B>D, C>D, D>E, C>E" },
            { label: "Chain", value: "A>B, B>C, C>D, D>E" },
            { label: "Diamond", value: "A>B, A>C, B>D, C>D" },
            { label: "Has cycle", value: "A>B, B>C, C>D, D>B" },
          ]}
          onApply={(v) => { if (parseDirected(v)) setInputStr(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={KAHN_PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? ["u", "v"] : []} />}
    >
      <div className="flex flex-col gap-3">
        {frame && <GraphSVG ids={ids} edges={edges} pos={pos} frame={frame} />}
        <div className="grid grid-cols-2 gap-3">
          {frame && <QueueViz items={frame.queue} />}
          {frame && <OutputSeq items={frame.output} title="/ output order" />}
        </div>
        <Callout className="w-full">{frame?.message ?? "Press play."}</Callout>
        {frame?.cycle && <CycleBanner />}
      </div>
    </AlgoCanvas>
  );
}

function DFSTopoViz({ ids, edges, inputStr, setInputStr }: {
  ids: string[];
  edges: { from: string; to: string }[];
  inputStr: string;
  setInputStr: (s: string) => void;
}) {
  const frames = useMemo(() => buildDFSTopoFrames(ids, edges), [ids, edges]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const pos = useMemo(() => autoLayout(ids), [ids]);
  const output = frame ? [...frame.stack].reverse() : [];

  return (
    <AlgoCanvas
      title="DFS-based Topological Sort"
      player={player}
      input={
        <InputEditor
          label="Directed edges (A>B)"
          value={inputStr}
          placeholder="A>B, B>C, ..."
          helper="Add a cycle (e.g. 'C>A') to see the 'not a DAG' warning."
          presets={[
            { label: "Course DAG", value: "A>B, A>C, B>D, C>D, D>E, C>E" },
            { label: "Chain", value: "A>B, B>C, C>D, D>E" },
            { label: "Diamond", value: "A>B, A>C, B>D, C>D" },
            { label: "Has cycle", value: "A>B, B>C, C>D, D>B" },
          ]}
          onApply={(v) => { if (parseDirected(v)) setInputStr(v); }}
        />
      }
      pseudocode={<PseudocodePanel lines={DFS_PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.flashKey ? ["u", "v"] : []} />}
    >
      <div className="flex flex-col gap-3">
        {frame && <GraphSVG ids={ids} edges={edges} pos={pos} frame={frame} />}
        <div className="grid grid-cols-2 gap-3">
          {frame && <StackViz items={frame.stack} />}
          <OutputSeq items={output} title="/ topological order (stack top→bottom)" />
        </div>
        <Callout className="w-full">{frame?.message ?? "Press play."}</Callout>
        {frame?.cycle && <CycleBanner />}
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [mode, setMode] = useState<"kahn" | "dfs">("kahn");
  const [inputStr, setInputStr] = useState("A>B, A>C, B>D, C>D, D>E, C>E");
  const parsed = parseDirected(inputStr);
  const ids = parsed?.ids ?? [];
  const edges = parsed?.edges ?? [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <PillButton active={mode === "kahn"} onClick={() => setMode("kahn")}>
          <span className="text-xs">Kahn's (BFS)</span>
        </PillButton>
        <PillButton active={mode === "dfs"} onClick={() => setMode("dfs")}>
          <span className="text-xs">DFS-based</span>
        </PillButton>
      </div>
      {mode === "kahn"
        ? <KahnViz ids={ids} edges={edges} inputStr={inputStr} setInputStr={setInputStr} />
        : <DFSTopoViz ids={ids} edges={edges} inputStr={inputStr} setInputStr={setInputStr} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "The promise", body: "For a DAG (directed acyclic graph), a topological order is a linear arrangement of vertices such that every edge u→v goes from earlier to later. Examples: course prerequisites, build systems, task schedulers." },
    { title: "Kahn's algorithm (BFS)", body: "Start with all in-degree-0 vertices in a queue. Dequeue one, append to output, and decrement in-degree of each neighbor. Any neighbor hitting 0 enters the queue. If |output| < |V|, a cycle prevented completion." },
    { title: "DFS-based", body: "Run DFS. As each vertex finishes (turns BLACK), push onto a stack. Reverse the stack at the end. Uses the parenthesis theorem — a vertex with an outgoing edge must finish after its descendants." },
    { title: "Uniqueness", body: "Topological order is not unique in general. It is unique iff the DAG has a Hamiltonian path (each step has exactly one in-degree-0 or one edge forward)." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>mental model</SectionEyebrow>
        <SectionTitle>Schedule classes. Respect every prerequisite.</SectionTitle>
        <Lede>
          Imagine your college's prerequisite graph. You can only take a course after its prereqs. A
          topological order is a valid semester-by-semester schedule — and only exists if there are
          no circular dependencies.
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
      <Callout>Try the "Has cycle" preset — both algorithms should flag it.</Callout>
      {[
        "On the Course DAG preset, give one valid topo order. (Expected: A, B, C, D, E or A, C, B, D, E)",
        "Can a topological sort of a DAG be done in O(V+E)? (Expected: Yes — both Kahn and DFS run in O(V+E))",
        "What's the minimum number of edges we can remove to make 'Has cycle' preset a DAG? (Expected: 1)",
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
        <SubHeading>When to use which?</SubHeading>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Kahn: natural if you need to detect cycles explicitly, or if you want lexicographically smallest order (use a priority queue).</li>
          <li>DFS: natural if you are already doing DFS (SCC, cycle finding). Elegant recursive code.</li>
          <li>Both O(V + E). Kahn is often easier to parallelize.</li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Downstream applications</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Shortest/longest path on a DAG in O(V+E) — just relax edges in topological order.
          Dependency resolution (Makefiles, npm install). Instruction scheduling in compilers.
          Spreadsheet cell recalculation.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L4_TopologicalSort({ onQuizComplete }: Props) {
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
      question: "A topological ordering is possible for…",
      options: ["Any directed graph", "Any undirected graph", "Only DAGs", "Any connected graph"],
      correctIndex: 2,
      explanation:
        "Topological order requires no cycles. If any cycle exists, no valid ordering can satisfy all edges.",
    },
    {
      question: "In Kahn's algorithm, the initial queue contains…",
      options: [
        "All vertices",
        "All vertices with in-degree 0",
        "All vertices with out-degree 0",
        "The start vertex only",
      ],
      correctIndex: 1,
      explanation:
        "Vertices with in-degree 0 have no prerequisites — they can be first in any valid order.",
    },
    {
      question: "In DFS-based topo sort, the topological order is obtained by…",
      options: [
        "Reading discovery times",
        "Reading finish times in reverse order",
        "The order nodes are first visited",
        "Arbitrary",
      ],
      correctIndex: 1,
      explanation:
        "Sort by decreasing finish time. Equivalent to popping a stack where each node is pushed upon finishing.",
    },
    {
      question: "How can Kahn's algorithm detect that the input graph has a cycle?",
      options: ["Negative in-degrees", "|output| < |V| at the end", "Queue overflows", "DFS returns false"],
      correctIndex: 1,
      explanation:
        "If cycles exist, some vertices never reach in-degree 0 and are never enqueued. The output sequence will be short.",
    },
  ];

  return (
    <LessonShell
      title="Topological Sort"
      level={4}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High — scheduling, dependency resolution, compiler IR."
      nextLessonHint="Dijkstra's Shortest Path"
      onQuizComplete={onQuizComplete}
    />
  );
}
