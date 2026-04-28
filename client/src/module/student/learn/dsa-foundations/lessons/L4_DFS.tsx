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
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";
import { PracticeTab } from "../PracticeTab";

const PRACTICE_TOPIC_SLUG: string | null = "graph";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type NodeColor = "W" | "G" | "B";
type NodeState = "default" | "active" | "done";

interface DFSFrame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  nodeStates: Record<string, NodeState>;
  nodeMeta: Record<string, Record<string, string | number>>;
  edgeLabels: Record<string, string>;
  edgeTree: Set<string>;
  edgeBack: Set<string>;
  stack: string[];
  flashKey?: string;
}

/* ------------------------------------------------------------------ */
/*  Parse                                                              */
/* ------------------------------------------------------------------ */

function parseEdgeList(input: string): { nodeIds: string[]; edges: { from: string; to: string; directed: boolean }[] } | null {
  const tokens = input.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const edges: { from: string; to: string; directed: boolean }[] = [];
  const ids = new Set<string>();
  for (const tok of tokens) {
    const dir = tok.match(/^([A-Za-z0-9_]+)>([A-Za-z0-9_]+)$/);
    const und = tok.match(/^([A-Za-z0-9_]+)-([A-Za-z0-9_]+)$/);
    if (dir) { edges.push({ from: dir[1], to: dir[2], directed: true }); ids.add(dir[1]); ids.add(dir[2]); }
    else if (und) { edges.push({ from: und[1], to: und[2], directed: false }); ids.add(und[1]); ids.add(und[2]); }
    else return null;
  }
  return { nodeIds: [...ids].sort(), edges };
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
/*  DFS Frame builder                                                  */
/* ------------------------------------------------------------------ */

const PSEUDO = [
  "DFS(G):",
  "  time ← 0",
  "  for each v in V: color[v] ← WHITE",
  "  for each s in V:",
  "    if color[s] = WHITE: DFS-Visit(s)",
  "DFS-Visit(u):",
  "  color[u] ← GRAY; d[u] ← ++time",
  "  for each neighbor v of u:",
  "    if color[v] = WHITE:    // Tree edge",
  "      DFS-Visit(v)",
  "    elif color[v] = GRAY:   // Back edge",
  "      record back edge",
  "    else:                    // Forward or Cross",
  "      record F/C edge",
  "  color[u] ← BLACK; f[u] ← ++time",
];

function buildDFSFrames(
  ids: string[],
  rawEdges: { from: string; to: string; directed: boolean }[],
  source: string,
): DFSFrame[] {
  const f: DFSFrame[] = [];
  if (!ids.includes(source)) {
    f.push({ line: 0, vars: {}, message: `Source '${source}' not in graph`, nodeStates: {}, nodeMeta: {}, edgeLabels: {}, edgeTree: new Set(), edgeBack: new Set(), stack: [] });
    return f;
  }

  const adj: Record<string, { to: string; key: string }[]> = Object.fromEntries(ids.map((id) => [id, []]));
  for (const e of rawEdges) {
    adj[e.from].push({ to: e.to, key: `${e.from}-${e.to}` });
    if (!e.directed) adj[e.to].push({ to: e.from, key: `${e.to}-${e.from}` });
  }
  for (const id of ids) adj[id].sort((a, b) => a.to.localeCompare(b.to));

  const color: Record<string, NodeColor> = Object.fromEntries(ids.map((id) => [id, "W"]));
  const d: Record<string, number> = {};
  const meta: Record<string, Record<string, string | number>> = Object.fromEntries(ids.map((id) => [id, {}]));
  const state: Record<string, NodeState> = Object.fromEntries(ids.map((id) => [id, "default"]));
  const edgeLabels: Record<string, string> = {};
  const edgeTree = new Set<string>();
  const edgeBack = new Set<string>();

  let time = 0;
  const recStack: { u: string; ni: number }[] = [];

  const clone = (patch: Partial<DFSFrame>): DFSFrame => ({
    line: patch.line ?? 0,
    vars: patch.vars ?? {},
    message: patch.message ?? "",
    nodeStates: { ...state },
    nodeMeta: Object.fromEntries(Object.entries(meta).map(([k, v]) => [k, { ...v }])),
    edgeLabels: { ...edgeLabels },
    edgeTree: new Set(edgeTree),
    edgeBack: new Set(edgeBack),
    stack: recStack.map((s) => s.u),
    flashKey: patch.flashKey,
  });

  f.push(clone({ line: 1, message: "Initialize time = 0, every vertex WHITE.", vars: { time } }));

  time++;
  color[source] = "G";
  state[source] = "active";
  d[source] = time;
  meta[source] = { d: time };
  recStack.push({ u: source, ni: 0 });
  f.push(clone({ line: 6, message: `Visit ${source}: color GRAY, d[${source}] = ${time}.`, vars: { time, u: source }, flashKey: source }));

  while (recStack.length) {
    const top = recStack[recStack.length - 1];
    const { u } = top;
    if (top.ni >= adj[u].length) {
      time++;
      color[u] = "B";
      state[u] = "done";
      meta[u] = { ...meta[u], f: time };
      recStack.pop();
      f.push(clone({ line: 14, message: `Finish ${u}: color BLACK, f[${u}] = ${time}. Pop from stack.`, vars: { time, u } }));
      continue;
    }
    const edge = adj[u][top.ni++];
    const v = edge.to;
    const k = edge.key;
    f.push(clone({ line: 7, message: `Look at edge ${u}→${v}.`, vars: { time, u, v } }));
    if (color[v] === "W") {
      edgeLabels[k] = "T";
      edgeTree.add(k);
      time++;
      color[v] = "G";
      state[v] = "active";
      d[v] = time;
      meta[v] = { d: time };
      recStack.push({ u: v, ni: 0 });
      f.push(clone({ line: 9, message: `${v} is WHITE, Tree edge. Recurse into ${v}. d[${v}] = ${time}.`, vars: { time, u, v }, flashKey: v }));
    } else if (color[v] === "G") {
      edgeLabels[k] = "B";
      edgeBack.add(k);
      f.push(clone({ line: 11, message: `${v} is GRAY (ancestor on stack), Back edge. Cycle detected.`, vars: { time, u, v } }));
    } else {
      const isF = d[u] < d[v];
      edgeLabels[k] = isF ? "F" : "C";
      f.push(clone({ line: 13, message: `${v} is BLACK, ${isF ? "Forward" : "Cross"} edge.`, vars: { time, u, v } }));
    }
  }

  f.push(clone({ line: 4, message: `DFS from ${source} complete. Timestamps shown as d/f.`, vars: { time } }));
  return f;
}

/* ------------------------------------------------------------------ */
/*  Inline graph SVG                                                   */
/* ------------------------------------------------------------------ */

const NODE_STATE_COLOR: Record<NodeState, string> = {
  default: THEME.textMuted,
  active: "#3b82f6",
  done: "#10b981",
};

function GraphSVG({
  ids,
  rawEdges,
  pos,
  frame,
}: {
  ids: string[];
  rawEdges: { from: string; to: string; directed: boolean }[];
  pos: Record<string, { x: number; y: number }>;
  frame: DFSFrame;
}) {
  const W = 600;
  const H = 300;
  return (
    <div className="w-full overflow-x-auto rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="block mx-auto">
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={THEME.border} />
          </marker>
          <marker id="arr-tree" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#fbbf24" />
          </marker>
          <marker id="arr-back" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#ef4444" />
          </marker>
        </defs>
        {rawEdges.map((e) => {
          const p1 = pos[e.from];
          const p2 = pos[e.to];
          if (!p1 || !p2) return null;
          const k = `${e.from}-${e.to}`;
          const isTree = frame.edgeTree.has(k);
          const isBack = frame.edgeBack.has(k);
          const stroke = isTree ? "#fbbf24" : isBack ? "#ef4444" : THEME.border;
          const markerId = isTree ? "url(#arr-tree)" : isBack ? "url(#arr-back)" : "url(#arr)";
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const len = Math.sqrt(dx * dx + dy * dy) || 1;
          const ex = p2.x - (22 / len) * dx;
          const ey = p2.y - (22 / len) * dy;
          const sx = p1.x + (22 / len) * dx;
          const sy = p1.y + (22 / len) * dy;
          return (
            <line
              key={k}
              x1={sx} y1={sy} x2={ex} y2={ey}
              stroke={stroke}
              strokeWidth={isTree || isBack ? 2.5 : 1.5}
              markerEnd={e.directed ? markerId : undefined}
            />
          );
        })}
        {ids.map((id) => {
          const p = pos[id];
          if (!p) return null;
          const ns = frame.nodeStates[id] ?? "default";
          const fill = NODE_STATE_COLOR[ns];
          const m = frame.nodeMeta[id] ?? {};
          return (
            <g key={id}>
              <circle cx={p.x} cy={p.y} r={20} fill={fill} stroke={THEME.border} strokeWidth={1.5} />
              <text x={p.x} y={p.y + 1} textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="#fff" fontWeight="700" fontFamily={THEME.heading}>
                {id}
              </text>
              {m.d !== undefined && (
                <text x={p.x - 14} y={p.y - 16} fontSize="10" fill={THEME.accent} fontWeight="700" fontFamily={THEME.mono}>
                  d={m.d}
                </text>
              )}
              {m.f !== undefined && (
                <text x={p.x + 4} y={p.y - 16} fontSize="10" fill={THEME.textMuted} fontWeight="700" fontFamily={THEME.mono}>
                  f={m.f}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Inline StackViz                                                    */
/* ------------------------------------------------------------------ */

function StackViz({ items }: { items: string[] }) {
  const reversed = [...items].reverse();
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1">/ dfs stack (top first)</div>
      <div className="flex flex-col gap-1 min-h-8 p-2 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-900">
        {reversed.length === 0 ? (
          <span className="text-xs text-stone-400 italic">empty</span>
        ) : (
          reversed.map((v, i) => (
            <span
              key={i}
              className={`inline-block px-2.5 py-1 rounded-md text-xs font-mono font-bold border ${i === 0 ? "bg-blue-500 text-white border-blue-500" : "border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300"}`}
            >
              {v}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize tab                                                      */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [inputStr, setInputStr] = useState("A>B, A>C, B>D, C>D, D>E, E>B, C>E");
  const [source, setSource] = useState("A");
  const parsed = parseEdgeList(inputStr);
  const ids = parsed?.nodeIds ?? [];
  const rawEdges = parsed?.edges ?? [];

  const frames = useMemo(() => buildDFSFrames(ids, rawEdges, source), [ids, rawEdges, source]);
  const player = useStepPlayer(frames);
  const frame = player.current;
  const pos = useMemo(() => autoLayout(ids), [ids]);

  const labeledEdges = frame ? Object.entries(frame.edgeLabels) : [];

  return (
    <AlgoCanvas
      title={`DFS from ${source}`}
      player={player}
      input={
        <div className="flex gap-3 flex-wrap items-end">
          <div className="flex-1 min-w-64">
            <InputEditor
              label="Edges (A>B directed or A-B undirected)"
              value={inputStr}
              placeholder="A>B, B>C, C>A, ..."
              helper="Use '>' for directed, '-' for undirected."
              presets={[
                { label: "Tree", value: "A>B, A>C, B>D, B>E, C>F" },
                { label: "With back edge", value: "A>B, B>C, C>A, C>D" },
                { label: "DAG diamond", value: "A>B, A>C, B>D, C>D" },
                { label: "Cross edge", value: "A>B, A>C, B>D, C>D, C>B" },
              ]}
              onApply={(v) => { if (parseEdgeList(v)) setInputStr(v); }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500">/ source</label>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="px-3 py-1.5 rounded-md border border-stone-300 dark:border-white/10 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-mono text-sm"
            >
              {ids.map((id) => <option key={id} value={id}>{id}</option>)}
            </select>
          </div>
        </div>
      }
      pseudocode={<PseudocodePanel lines={PSEUDO} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={["d", "u", "v"]} />}
    >
      <div className="flex flex-col gap-3">
        {frame && <GraphSVG ids={ids} rawEdges={rawEdges} pos={pos} frame={frame} />}
        {frame && labeledEdges.length > 0 && (
          <div className="flex gap-1.5 flex-wrap">
            {labeledEdges.map(([k, lab]) => {
              const c = lab === "T" ? "#fbbf24" : lab === "B" ? "#ef4444" : "#f59e0b";
              return (
                <span key={k} className="px-2 py-0.5 rounded-md text-xs font-mono font-bold border" style={{ color: c, borderColor: c, background: `${c}22` }}>
                  {k} [{lab}]
                </span>
              );
            })}
          </div>
        )}
        {frame && <StackViz items={frame.stack} />}
        <div className="flex gap-2 flex-wrap text-xs text-stone-500">
          {[["#3b82f6", "GRAY (on stack)"], ["#10b981", "BLACK (done)"], ["#fbbf24", "T tree edge"], ["#ef4444", "B back edge"]].map(([c, l]) => (
            <span key={l} className="inline-flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: c }} />
              {l}
            </span>
          ))}
        </div>
        <Callout className="w-full">{frame?.message ?? "Press play to step through DFS."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                              */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const sections = [
    { title: "DFS in one line", body: "Go as deep as possible, then backtrack. Uses a stack (implicit via recursion, or explicit). Each vertex gets a discovery time d[] and finish time f[]." },
    { title: "Edge classification (directed)", body: "Tree edge, discovers a WHITE vertex. Back edge, reaches a GRAY ancestor (implies cycle). Forward edge, reaches a BLACK descendant. Cross edge, reaches a Black non-descendant." },
    { title: "Parenthesis theorem", body: "For any two vertices u, v: intervals [d[u], f[u]] and [d[v], f[v]] are either disjoint or nested. This is what makes DFS timestamps so useful." },
    { title: "Complexity", body: "O(V + E) with adjacency list, same as BFS. DFS is the workhorse for topological sort, SCC, bridge finding, and many more." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>mental model</SectionEyebrow>
        <SectionTitle>Walk a maze. Take every corridor. Backtrack at dead ends.</SectionTitle>
        <Lede>
          Imagine exploring a maze by always walking into the next unexplored corridor. When you hit
          a dead end, back up to the last junction and try another exit. That is DFS.
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
      <Callout>Open the Visualize tab and check these traces.</Callout>
      {[
        "On preset 'With back edge' (A>B, B>C, C>A, C>D) from A, which edge is the back edge?  (Expected: C>A)",
        "On preset 'DAG diamond' from A, list the finish order.  (Expected: D, B, C, A, typical left-first)",
        "Can DFS on an undirected graph produce a forward edge?  (Expected: No, only tree and back edges)",
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
        <SubHeading>Why timestamps?</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Discovery/finish times unlock topological sort (reverse order of finish), SCC (Tarjan's /
          Kosaraju's), bridge detection (compare d and low). Memorize one rule: sort by decreasing
          finish time to get a topological order of a DAG.
        </p>
      </Card>
      <Card>
        <SubHeading>Back edge implies cycle</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          A DFS on a directed graph finds a back edge if and only if the graph has a cycle. This is
          the cleanest cycle-detection algorithm you can memorize for interviews.
        </p>
      </Card>
      <Card>
        <SubHeading>Edge types in undirected vs directed</SubHeading>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>Undirected DFS: only tree edges and back edges. Forward and cross cannot appear.</li>
          <li>Directed DFS: all four types (tree, back, forward, cross) are possible.</li>
          <li>Back edge in undirected = ancestor edge, which still reveals a cycle.</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L4_DFS({ onQuizComplete }: Props) {
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
      question: "In DFS on a directed graph, which edge type implies the graph has a cycle?",
      options: ["Tree", "Forward", "Cross", "Back"],
      correctIndex: 3,
      explanation:
        "A back edge connects a descendant to an ancestor still on the recursion stack, definitive proof of a cycle.",
    },
    {
      question: "Time complexity of DFS using adjacency list?",
      options: ["O(V log V)", "O(V²)", "O(V + E)", "O(V·E)"],
      correctIndex: 2,
      explanation: "Each vertex visited once, each edge examined O(1) times. Total O(V + E).",
    },
    {
      question: "During DFS a vertex is colored GRAY while…",
      options: [
        "Unvisited",
        "On the recursion stack (discovered but not finished)",
        "Fully processed",
        "Never",
      ],
      correctIndex: 1,
      explanation:
        "WHITE = unvisited, GRAY = discovered & active, BLACK = finished. GRAY means it is still on the stack.",
    },
    {
      question: "In DFS on an UNDIRECTED graph, which edge types can appear?",
      options: [
        "Tree and Forward only",
        "Tree and Back only",
        "All four",
        "Cross and Forward only",
      ],
      correctIndex: 1,
      explanation:
        "In undirected DFS, every non-tree edge must be a back edge, forward and cross edges cannot occur.",
    },
  ];

  return (
    <LessonShell
      title="Depth-First Search (DFS)"
      level={4}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Very high, foundation of topo sort, SCC, cycle detection."
      nextLessonHint="Topological Sort"
      onQuizComplete={onQuizComplete}
    />
  );
}
