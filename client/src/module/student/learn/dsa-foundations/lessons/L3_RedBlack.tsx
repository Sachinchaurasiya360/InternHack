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
  SectionEyebrow,
  SectionTitle,
  SubHeading,
  THEME,
} from "../../../../../components/dsa-theory/primitives";

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
  "    Case 1: u is RED -> recolor parent+uncle BLACK,",
  "            g RED; z <- g; continue",
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

  function snap(
    line: number,
    message: string,
    activeId?: string,
    caseTag?: RBFrame["caseTag"],
  ) {
    frames.push({
      line,
      vars: {
        nodes: Object.keys(nodes).length,
        root: rootId ?? "-",
        case: caseTag ?? "",
      },
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
          snap(
            6,
            `Case 1: uncle is RED -> recolor parent+uncle BLACK, grandparent RED. Continue from grandparent.`,
            gId,
            "C1",
          );
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
          snap(
            9,
            `Case 3 (line): rotate right around grandparent + recolor (old-parent BLACK, old-grandparent RED).`,
            zId,
            "C3",
          );
        }
      } else {
        const uncleId = g.left;
        if (uncleId && nodes[uncleId].color === "R") {
          nodes[pId].color = "B";
          nodes[uncleId].color = "B";
          g.color = "R";
          snap(6, `Case 1 (mirror): uncle is RED -> recolor.`, gId, "C1");
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
    snap(
      2,
      `BST insert ${key} (RED) as ${
        key < nodes[nodes[id].parent!].key ? "left" : "right"
      } child of ${nodes[nodes[id].parent!].key}.`,
      id,
      "BST",
    );
    fixUp(id);
    snap(11, `Fix-up complete. All 5 invariants hold.`, id, "DONE");
  }
  return frames;
}

/* ------------------------------------------------------------------ */
/*  RB tree SVG renderer                                               */
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
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: "auto", maxHeight: H }}>
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
            stroke={THEME.textMuted}
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
              fill={node.color === "R" ? "#dc2626" : "#1F2937"}
              stroke={isActive ? THEME.accent : "#FFFFFF"}
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
              fontFamily={THEME.mono}
            >
              {node.key}
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

function VisualizeTab() {
  const [src, setSrc] = useState("10, 20, 30, 15, 25, 5, 35");
  const keys = useMemo(() => {
    const arr = src
      .split(/[,\s]+/)
      .map((s) => Number(s.trim()))
      .filter((n) => !Number.isNaN(n));
    return arr.length === 0 ? [10, 20, 30, 15, 25, 5, 35] : arr.slice(0, 12);
  }, [src]);
  const frames = useMemo(() => buildRBFrames(keys), [keys]);
  const player = useStepPlayer(frames);
  const frame = player.current;

  return (
    <AlgoCanvas
      title="Red-Black Tree, Insertion"
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
      pseudocode={<PseudocodePanel lines={PSEUDO_RB} activeLine={frame?.line} />}
      variables={
        <VariablesPanel
          vars={frame?.vars ?? {}}
          flashKeys={frame?.caseTag ? ["case"] : []}
        />
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-4 items-start">
        {frame && <RBTreeViz frame={frame} />}
        <Card>
          <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">
            5 invariants (always)
          </div>
          <ol className="list-decimal pl-4 space-y-1.5 text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            <li>Every node is RED or BLACK.</li>
            <li>Root is BLACK.</li>
            <li>All NIL leaves are BLACK.</li>
            <li>RED nodes have BLACK children (no two reds adjacent).</li>
            <li>
              Every root-to-leaf path has the same number of BLACK nodes (the
              &ldquo;black-height&rdquo;).
            </li>
          </ol>
          <div className="mt-3 pt-3 border-t border-dashed border-stone-200 dark:border-white/10 text-xs text-stone-500 space-y-1">
            <div>
              <span className="font-medium text-stone-700 dark:text-stone-300">
                Current case:
              </span>{" "}
              {frame?.caseTag ?? ","}
            </div>
            <div className="italic">
              Height bound:{" "}
              <span className="font-bold text-stone-700 dark:text-stone-300">
                h &le; 2&middot;log&#8322;(n + 1)
              </span>
            </div>
          </div>
        </Card>
      </div>
      <div className="mt-3 flex gap-4 flex-wrap text-xs text-stone-600 dark:text-stone-400 items-center">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-rose-600 inline-block" />
          RED
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-[#1F2937] inline-block" />
          BLACK
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span
            className="w-3 h-3 rounded-sm inline-block"
            style={{ background: THEME.accent }}
          />
          focus node (lime ring)
        </span>
      </div>
      <Callout className="mt-3">
        {frame?.message ?? "Press play to step through."}
      </Callout>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn tab                                                           */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    {
      t: "What is a Red-Black tree?",
      b: "A self-balancing BST where every node is colored RED or BLACK, and 5 invariants force the tree's height to stay within 2 * log2(n+1). Insert, search, delete: all O(log n) worst case.",
    },
    {
      t: "Why two colors and not heights?",
      b: "AVL stores height per node and rebalances aggressively (height difference <= 1). RB stores 1 bit (color) and tolerates up to a 2x imbalance, looser, but cheaper to maintain. RB does fewer rotations on insert/delete.",
    },
    {
      t: "RB vs AVL, when each wins",
      b: "Read-heavy workloads -> AVL (tighter balance, faster lookup). Write-heavy / mixed -> RB (fewer rotations on update). Most language stdlibs choose RB: std::map (C++), TreeMap (Java), Linux kernel rb_node (CFS scheduler, EPOLL, virtual memory).",
    },
    {
      t: "Insertion = BST insert + fix-up",
      b: "New node colored RED; standard BST descent. The only invariant a RED insert can violate is invariant 4 (no two reds adjacent). The fix-up walks up the tree handling 3 cases until invariants are restored.",
    },
    {
      t: "The 3 fix-up cases",
      b: "Case 1: uncle is RED, recolor parent+uncle BLACK, grandparent RED, continue at grandparent. Case 2: zig-zag, rotate parent to straighten. Case 3: line, rotate grandparent + swap colors. Case 1 is recursive (climbs); Cases 2/3 terminate after at most one rotation pair.",
    },
    {
      t: "Production code uses RB, even when AVL would be fine",
      b: "RB's dominance comes from: simpler delete (5 cases vs AVL's deeper rebalancing), 1 color bit (vs full height), and historical inertia (Sedgewick's Left-Leaning RB simplified the implementation in the 2000s).",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>mental model</SectionEyebrow>
        <SectionTitle>The pragmatist&rsquo;s balanced BST</SectionTitle>
        <Lede>
          AVL is a perfectionist, every imbalance triggers an immediate rotation. RB is a pragmatist,
          it allows mild imbalance (up to 2x) but uses cheap recoloring before falling back to
          rotation. Production code chose pragmatism:{" "}
          <code className="font-mono text-xs bg-stone-100 dark:bg-stone-800 px-1 rounded">
            std::map
          </code>
          ,{" "}
          <code className="font-mono text-xs bg-stone-100 dark:bg-stone-800 px-1 rounded">
            TreeMap
          </code>
          , and the Linux scheduler all run on RB-trees.
        </Lede>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cards.map((s, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-600 dark:text-lime-400 tracking-widest mb-2">
              0{i + 1}
            </div>
            <SubHeading>{s.t}</SubHeading>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{s.b}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Try tab                                                             */
/* ------------------------------------------------------------------ */

function TryTab() {
  const probs = [
    {
      q: "Insert 1,2,3 in order into an empty RB-tree. What is the root key after all 3 inserts?",
      a: "2",
    },
    {
      q: "How many BLACK nodes are on every root-to-NIL path in a 7-key full RB-tree (perfectly balanced, all internal nodes BLACK)?",
      a: "3",
    },
    {
      q: "If a RED node has 2 children, what color must they be? (R or B)",
      a: "B",
    },
    {
      q: "True/False: Inserting an ascending sequence into RB makes it linear (skewed) like plain BST.",
      a: "False",
    },
  ];
  const [g, setG] = useState<(string | null)[]>(probs.map(() => null));
  const [s, setS] = useState<boolean[]>(probs.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Trace mentally; verify in the visualizer.</Callout>
      {probs.map((p, i) => {
        const correct = (g[i] ?? "").trim().toLowerCase() === p.a.toLowerCase();
        return (
          <Card key={i}>
            <p className="text-sm text-stone-900 dark:text-stone-100 mb-3">
              <span className="font-mono font-bold text-lime-600 dark:text-lime-400 mr-2">
                #{i + 1}
              </span>
              {p.q}
            </p>
            <div className="flex gap-2 items-center flex-wrap">
              <input
                value={g[i] ?? ""}
                onChange={(e) => {
                  const v = [...g];
                  v[i] = e.target.value;
                  setG(v);
                }}
                placeholder="answer"
                className="px-2 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 font-mono text-xs w-36 outline-none focus:border-lime-400"
              />
              <button
                type="button"
                onClick={() => {
                  const v = [...s];
                  v[i] = true;
                  setS(v);
                }}
                className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 text-xs font-medium cursor-pointer hover:border-stone-400 dark:hover:border-white/30 transition-colors"
              >
                Reveal
              </button>
              {s[i] && (
                <span
                  className={`text-xs font-bold px-3 py-1.5 rounded-md ${
                    correct
                      ? "bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-400"
                      : "bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200 border border-rose-400"
                  }`}
                >
                  {correct ? `Correct, ${p.a}` : `Answer: ${p.a}`}
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
/*  Insight tab                                                         */
/* ------------------------------------------------------------------ */

function InsightTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SubHeading>Why height &le; 2&middot;log&#8322;(n + 1)</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Let <em>bh(x)</em> = black-height of node x (count of BLACK on any root-to-NIL path
          through x). By invariant 5 it is well-defined. By invariant 4 (no adjacent reds), at most
          half the nodes on any path are RED. So total height &le; 2&middot;bh(root). It can also be
          shown that the subtree at a node with black-height bh contains at least 2^bh - 1 internal
          nodes, which gives bh(root) &le; log&#8322;(n + 1). Combining:{" "}
          <strong className="text-stone-900 dark:text-stone-50">
            height &le; 2&middot;log&#8322;(n + 1)
          </strong>
          .
        </p>
      </Card>
      <Card padded={false} className="overflow-hidden">
        <div className="p-5 pb-3">
          <SubHeading>RB vs AVL, head-to-head</SubHeading>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-stone-50 dark:bg-stone-950/50">
              <tr>
                {["Property", "AVL", "Red-Black"].map((h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 border-b border-stone-200 dark:border-white/10"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Height bound", "1.44 * log2(n+2)", "2 * log2(n+1)"],
                ["Per-node overhead", "height (8-32 bits)", "color (1 bit)"],
                ["Rotations per insert", "O(1) amortized", "O(1) amortized"],
                ["Rotations per delete", "Up to log n", "at most 3"],
                ["Lookup speed", "Faster (tighter)", "Slightly slower"],
                ["Best for", "Read-heavy / databases", "Mixed / language stdlibs"],
                [
                  "Used by",
                  "Some DB indexes",
                  "std::map, TreeMap, Linux CFS, Java HashMap (post-treeify)",
                ],
              ].map((r, i) => (
                <tr
                  key={i}
                  className={i === 0 ? "" : "border-t border-stone-100 dark:border-white/5"}
                >
                  <td className="px-4 py-2 font-semibold text-stone-900 dark:text-stone-50">
                    {r[0]}
                  </td>
                  <td className="px-4 py-2 text-stone-600 dark:text-stone-400">{r[1]}</td>
                  <td className="px-4 py-2 text-stone-600 dark:text-stone-400">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Card>
        <SubHeading>Where you actually meet RB-trees</SubHeading>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <li>
            <strong className="text-stone-900 dark:text-stone-50">
              C++{" "}
              <code className="font-mono text-xs bg-stone-100 dark:bg-stone-800 px-1 rounded">
                std::map / std::set / std::multimap
              </code>
            </strong>{" "}
           , RB.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">
              Java{" "}
              <code className="font-mono text-xs bg-stone-100 dark:bg-stone-800 px-1 rounded">
                TreeMap / TreeSet
              </code>
            </strong>{" "}
           , RB.{" "}
            <code className="font-mono text-xs bg-stone-100 dark:bg-stone-800 px-1 rounded">
              HashMap
            </code>{" "}
            treeifies long chains into RB-trees once chain length &ge; 8.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">
              Linux kernel{" "}
              <code className="font-mono text-xs bg-stone-100 dark:bg-stone-800 px-1 rounded">
                rb_node
              </code>
            </strong>{" "}
           , CFS process scheduler, virtual-memory area lookup, EPOLL ready-list, EXT4 directory
            indexing.
          </li>
          <li>
            <strong className="text-stone-900 dark:text-stone-50">Nginx</strong> uses RB-trees for
            timer queues and upstream lookups.
          </li>
        </ul>
      </Card>
      <Card>
        <SubHeading>Left-Leaning Red-Black trees (Sedgewick, 2008)</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          A simplified RB variant where the only RED links allowed are LEFT links. Cuts the
          implementation roughly in half. Sedgewick&rsquo;s teaching code is under 200 lines for
          full insert/delete. Used in some Java teaching libraries and in Princeton&rsquo;s
          textbooks. Same O(log n) complexity, marginally more rotations in practice.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Lesson export                                                       */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L3_RedBlack({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    {
      id: "visualize",
      label: "Visualize",
      icon: <Play className="w-4 h-4" />,
      content: <VisualizeTab />,
    },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    {
      id: "insight",
      label: "Insight",
      icon: <Lightbulb className="w-4 h-4" />,
      content: <InsightTab />,
    },
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "Which color must a newly inserted node be (before fix-up)?",
      options: ["BLACK", "RED", "Either, depending on parent", "BLUE"],
      correctIndex: 1,
      explanation:
        "Inserting RED can only violate invariant 4 (no two reds). Inserting BLACK would violate invariant 5 (equal black-height) almost always, much harder to fix. So new nodes are RED.",
    },
    {
      question: "After insert fix-up, what color is the root always set to?",
      options: ["RED", "BLACK", "Same as parent", "Same as new node"],
      correctIndex: 1,
      explanation:
        "Invariant 2 requires the root to be BLACK. The fix-up's last step unconditionally recolors the root BLACK, which never violates any other invariant.",
    },
    {
      question: "Maximum height of a Red-Black tree with n internal nodes:",
      options: ["log2 n", "1.44 * log2(n+2)", "2 * log2(n+1)", "n / 2"],
      correctIndex: 2,
      explanation:
        "By the black-height argument: bh(root) <= log2(n+1), and at most half the nodes on a path can be red, giving height <= 2 * log2(n+1). Slightly looser than AVL's 1.44 * log2(n+2).",
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
      explanation:
        "AVL has slightly tighter balance and faster lookups. RB does fewer rotations per insert/delete (delete bounded by 3 rotations, vs AVL's O(log n)), that's why language stdlibs and the Linux kernel choose RB.",
    },
    {
      question:
        "Java's HashMap converts a chained bucket to a tree once the chain reaches length 8. What kind of tree?",
      options: ["AVL", "Splay tree", "Red-Black", "Skip list"],
      correctIndex: 2,
      explanation:
        "Java picks RB for the same reason most stdlibs do: simpler delete + lower rotation overhead. The treeified HashMap caps worst-case bucket lookup at O(log k), useful against adversarial hash-collision attacks.",
    },
  ];

  return (
    <LessonShell
      title="Red-Black Trees"
      level={3}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="High, the production balanced BST. std::map, TreeMap, Linux kernel, all RB."
      nextLessonHint="Heaps & Priority Queues"
      onQuizComplete={onQuizComplete}
    />
  );
}
