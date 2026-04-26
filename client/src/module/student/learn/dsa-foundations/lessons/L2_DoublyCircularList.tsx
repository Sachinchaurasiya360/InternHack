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

const PRACTICE_TOPIC_SLUG: string | null = "linked-list";

/* ------------------------------------------------------------------ */
/*  Types / Frame                                                        */
/* ------------------------------------------------------------------ */

type Mode = "doubly" | "circular" | "floyd";

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  highlightKey?: string;
  values: number[];
  slow?: number;
  fast?: number;
  hasCycle?: boolean;
  cycleStart?: number;
  met?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Pseudocode                                                          */
/* ------------------------------------------------------------------ */

const PSEUDO_FLOYD = [
  "function hasCycle(head):",
  "  slow ← head; fast ← head",
  "  while fast != null and fast.next != null:",
  "    slow ← slow.next",
  "    fast ← fast.next.next",
  "    if slow == fast:",
  "      return true",
  "  return false",
];

const PSEUDO_DOUBLY_INSERT = [
  "function insertAfter(node, value):",
  "  new ← Node(value)",
  "  new.prev ← node",
  "  new.next ← node.next",
  "  if node.next != null:",
  "    node.next.prev ← new",
  "  node.next ← new",
];

/* ------------------------------------------------------------------ */
/*  Frame builders                                                       */
/* ------------------------------------------------------------------ */

function buildDoublyDemo(values: number[], afterIdx: number, newVal: number): Frame[] {
  const f: Frame[] = [];
  f.push({ line: 0, vars: { after: values[afterIdx], value: newVal }, message: `Insert ${newVal} after node at position ${afterIdx}`, values, slow: afterIdx });
  f.push({ line: 1, vars: { new: newVal }, highlightKey: "new", message: `Allocate new node with value ${newVal}`, values, slow: afterIdx });
  f.push({ line: 2, vars: { "new.prev": values[afterIdx] }, message: `new.prev ← node (${values[afterIdx]})`, values, slow: afterIdx });
  const nxt = values[afterIdx + 1];
  f.push({ line: 3, vars: { "new.next": nxt ?? "null" }, message: `new.next ← node.next (${nxt ?? "null"})`, values, slow: afterIdx });
  if (nxt !== undefined) {
    f.push({ line: 4, vars: { "node.next.prev": newVal }, message: "Rewire node.next.prev ← new", values, slow: afterIdx });
  } else {
    f.push({ line: 4, vars: {}, message: "node.next is null — skip backward rewire", values, slow: afterIdx });
  }
  const values2 = [...values.slice(0, afterIdx + 1), newVal, ...values.slice(afterIdx + 1)];
  f.push({ line: 6, vars: {}, message: "node.next ← new — insertion complete", values: values2, slow: afterIdx + 1 });
  return f;
}

function buildFloyd(values: number[], cycleStart: number): Frame[] {
  const f: Frame[] = [];
  const n = values.length;
  if (n === 0) {
    f.push({ line: 0, vars: {}, message: "Empty list", values });
    return f;
  }
  const nextIdx = (i: number): number | null => {
    if (i === n - 1) return cycleStart >= 0 ? cycleStart : null;
    return i + 1;
  };
  f.push({ line: 0, vars: { head: values[0] }, message: cycleStart >= 0 ? `Suspect cycle starting at index ${cycleStart}` : "No cycle expected", values, cycleStart: cycleStart >= 0 ? cycleStart : undefined, hasCycle: cycleStart >= 0 });
  let slow = 0, fast = 0;
  f.push({ line: 1, vars: { slow: values[slow], fast: values[fast] }, highlightKey: "slow", message: "Both pointers start at head", values, slow, fast, cycleStart: cycleStart >= 0 ? cycleStart : undefined, hasCycle: cycleStart >= 0 });
  let safety = 0;
  while (safety++ < 40) {
    f.push({ line: 2, vars: { slow: values[slow], fast: values[fast] }, message: "Check: fast and fast.next not null?", values, slow, fast, cycleStart: cycleStart >= 0 ? cycleStart : undefined, hasCycle: cycleStart >= 0 });
    const s1 = nextIdx(slow);
    const fa = nextIdx(fast);
    const fb = fa === null ? null : nextIdx(fa);
    if (fa === null || fb === null) {
      f.push({ line: 7, vars: { result: "false" }, message: "fast reached null — no cycle exists", values, slow, fast, cycleStart: cycleStart >= 0 ? cycleStart : undefined, hasCycle: false });
      return f;
    }
    slow = s1 ?? slow;
    f.push({ line: 3, vars: { slow: values[slow] }, highlightKey: "slow", message: `slow moves one step → ${values[slow]}`, values, slow, fast, cycleStart: cycleStart >= 0 ? cycleStart : undefined, hasCycle: cycleStart >= 0 });
    fast = fb;
    f.push({ line: 4, vars: { fast: values[fast] }, highlightKey: "fast", message: `fast moves two steps → ${values[fast]}`, values, slow, fast, cycleStart: cycleStart >= 0 ? cycleStart : undefined, hasCycle: cycleStart >= 0 });
    f.push({ line: 5, vars: { slow: values[slow], fast: values[fast] }, message: `Compare pointers: ${values[slow]} vs ${values[fast]}`, values, slow, fast, cycleStart: cycleStart >= 0 ? cycleStart : undefined, hasCycle: cycleStart >= 0 });
    if (slow === fast) {
      f.push({ line: 6, vars: { result: "true" }, message: `Pointers meet at ${values[slow]} — cycle confirmed`, values, slow, fast, met: true, cycleStart: cycleStart >= 0 ? cycleStart : undefined, hasCycle: true });
      return f;
    }
  }
  return f;
}

function parseList(s: string): number[] {
  return s.split(/[,\s]+/).map((x) => Number(x.trim())).filter((x) => !Number.isNaN(x));
}

/* ------------------------------------------------------------------ */
/*  List viz                                                             */
/* ------------------------------------------------------------------ */

function ListViz({ frame, mode }: { frame: Frame; mode: Mode }) {
  const NODE_W = 96, NODE_H = 54, GAP = 40;
  const n = frame.values.length;
  if (n === 0) return <div className="text-center text-stone-400 text-sm">Empty list</div>;

  if (mode === "circular" || (mode === "floyd" && frame.hasCycle)) {
    const RAD_X = Math.max(150, n * 22);
    const RAD_Y = 110;
    const cx = RAD_X + 40, cy = RAD_Y + 40;
    const width = 2 * RAD_X + 120;
    const height = 2 * RAD_Y + 120;
    return (
      <div className="overflow-x-auto">
        <svg width={width} height={height} style={{ display: "block", margin: "0 auto", minWidth: width }}>
          <defs>
            <marker id="arr-c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill={THEME.textMuted} />
            </marker>
          </defs>
          {frame.values.map((_v, i) => {
            const next = (i + 1) % n;
            const target = frame.cycleStart !== undefined && i === n - 1 ? frame.cycleStart : next;
            const a1 = (i / n) * 2 * Math.PI - Math.PI / 2;
            const a2 = (target / n) * 2 * Math.PI - Math.PI / 2;
            const x1 = cx + (RAD_X - 20) * Math.cos(a1);
            const y1 = cy + (RAD_Y - 20) * Math.sin(a1);
            const x2 = cx + (RAD_X - 20) * Math.cos(a2);
            const y2 = cy + (RAD_Y - 20) * Math.sin(a2);
            if (mode === "floyd" && !frame.hasCycle && i === n - 1) return null;
            return (
              <path key={`e${i}`}
                d={`M${x1},${y1} Q${cx},${cy} ${x2},${y2}`}
                stroke={THEME.textMuted} strokeWidth={1.8} fill="none" markerEnd="url(#arr-c)" />
            );
          })}
          {frame.values.map((v, i) => {
            const a = (i / n) * 2 * Math.PI - Math.PI / 2;
            const x = cx + RAD_X * Math.cos(a) - NODE_W / 2;
            const y = cy + RAD_Y * Math.sin(a) - NODE_H / 2;
            const isSlow = frame.slow === i;
            const isFast = frame.fast === i;
            const met = frame.met && isSlow && isFast;
            const c = met ? "#10b981" : isSlow && isFast ? "#10b981" : isSlow ? "#3b82f6" : isFast ? "#ef4444" : THEME.accent;
            const bg = met ? "rgba(16,185,129,0.18)" : isSlow || isFast ? `${c}22` : THEME.bg;
            return (
              <g key={String(v) + "_" + i}>
                <rect x={x} y={y} width={NODE_W} height={NODE_H} rx={8} fill={bg} stroke={c} strokeWidth={2.2} style={{ transition: "all 0.3s" }} />
                <text x={x + NODE_W / 2} y={y + NODE_H / 2 + 5} textAnchor="middle"
                  style={{ fontSize: 15, fontWeight: 700, fill: THEME.text, fontFamily: THEME.mono }}>{v}</text>
                {(isSlow || isFast) && (
                  <text x={x + NODE_W / 2} y={y - 6} textAnchor="middle"
                    style={{ fontSize: 11, fontWeight: 700, fill: c, fontFamily: THEME.heading }}>
                    {isSlow && isFast ? "slow=fast" : isSlow ? "slow" : "fast"}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    );
  }

  // Linear doubly layout
  const width = Math.max(500, 60 + n * (NODE_W + GAP));
  return (
    <div className="overflow-x-auto">
      <svg width={width} height={140} style={{ display: "block", margin: "0 auto", minWidth: width }}>
        <defs>
          <marker id="arr-d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill={THEME.textMuted} />
          </marker>
        </defs>
        {frame.values.map((v, i) => {
          const x = 30 + i * (NODE_W + GAP);
          const y = 40;
          const isSlow = frame.slow === i;
          const c = isSlow ? "#3b82f6" : THEME.accent;
          const bg = isSlow ? "rgba(59,130,246,0.12)" : THEME.bg;
          return (
            <g key={i} style={{ transition: "transform 0.3s" }}>
              <rect x={x} y={y} width={NODE_W} height={NODE_H} rx={8} fill={bg} stroke={c} strokeWidth={2.2} />
              <line x1={x + 22} y1={y} x2={x + 22} y2={y + NODE_H} stroke={c} strokeWidth={1} opacity={0.4} />
              <line x1={x + NODE_W - 22} y1={y} x2={x + NODE_W - 22} y2={y + NODE_H} stroke={c} strokeWidth={1} opacity={0.4} />
              <text x={x + 11} y={y + NODE_H / 2 + 4} textAnchor="middle" style={{ fontSize: 10, fontWeight: 700, fill: THEME.textMuted }}>•</text>
              <text x={x + NODE_W / 2} y={y + NODE_H / 2 + 5} textAnchor="middle"
                style={{ fontSize: 15, fontWeight: 700, fill: THEME.text, fontFamily: THEME.mono }}>{v}</text>
              <text x={x + NODE_W - 11} y={y + NODE_H / 2 + 4} textAnchor="middle" style={{ fontSize: 10, fontWeight: 700, fill: THEME.textMuted }}>•</text>
              <text x={x + 11} y={y - 4} textAnchor="middle" style={{ fontSize: 8, fill: THEME.textMuted, fontWeight: 700 }}>prev</text>
              <text x={x + NODE_W - 11} y={y - 4} textAnchor="middle" style={{ fontSize: 8, fill: THEME.textMuted, fontWeight: 700 }}>next</text>
              {i < frame.values.length - 1 && (
                <line x1={x + NODE_W - 2} y1={y + NODE_H / 2 - 5} x2={x + NODE_W + GAP - 4} y2={y + NODE_H / 2 - 5}
                  stroke={THEME.textMuted} strokeWidth={1.8} markerEnd="url(#arr-d)" />
              )}
              {i > 0 && (
                <line x1={x + 2} y1={y + NODE_H / 2 + 8} x2={x - GAP + 4} y2={y + NODE_H / 2 + 8}
                  stroke={THEME.textMuted} strokeWidth={1.8} markerEnd="url(#arr-d)" />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                           */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("doubly");
  const [listStr, setListStr] = useState("10, 20, 30, 40");
  const [afterIdx, setAfterIdx] = useState(1);
  const [newVal, setNewVal] = useState(77);
  const [cycleStart, setCycleStart] = useState(1);

  const values = parseList(listStr);
  const frames = useMemo(() => {
    if (mode === "floyd") return buildFloyd(values, Math.min(cycleStart, values.length - 1));
    if (mode === "circular") {
      return [{ line: 0, vars: { head: values[0], tail: values[values.length - 1] }, message: "Circular list — last node's next wraps to head", values, hasCycle: true } as Frame];
    }
    return buildDoublyDemo(values, Math.min(afterIdx, values.length - 1), newVal);
  }, [mode, listStr, afterIdx, newVal, cycleStart]);

  const player = useStepPlayer(frames);
  const frame = player.current;
  const pseudo = mode === "floyd" ? PSEUDO_FLOYD : mode === "doubly" ? PSEUDO_DOUBLY_INSERT : ["// Circular list:", "// last.next points to first", "// No null terminator", "// Traversal stops when you see head again"];

  return (
    <AlgoCanvas
      title={mode === "floyd" ? "Floyd's Cycle Detection" : mode === "circular" ? "Circular Linked List" : "Doubly Linked List — Insert After"}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <div className="flex gap-1.5 flex-wrap">
            {(["doubly", "circular", "floyd"] as Mode[]).map((m) => (
              <PillButton key={m} onClick={() => setMode(m)} active={mode === m}>
                <span className="text-xs">
                  {m === "floyd" ? "Floyd's Cycle" : m === "doubly" ? "Doubly" : "Circular"}
                </span>
              </PillButton>
            ))}
          </div>
          <InputEditor
            label="List values"
            value={listStr}
            helper="Comma or space separated"
            presets={[
              { label: "Small", value: "1, 2, 3, 4" },
              { label: "Long", value: "5, 10, 15, 20, 25, 30" },
            ]}
            onApply={setListStr}
            onRandom={() => {
              const n = 4 + Math.floor(Math.random() * 4);
              setListStr(Array.from({ length: n }, () => Math.floor(Math.random() * 90) + 10).join(", "));
            }}
          />
          {mode === "doubly" && (
            <div className="flex gap-3 flex-wrap items-center">
              <label className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                Insert after index:
                <input type="number" value={afterIdx} onChange={(e) => setAfterIdx(Number(e.target.value) || 0)}
                  min={0} max={values.length - 1}
                  className="w-16 px-2 py-1 border border-stone-200 dark:border-white/10 rounded-md font-mono text-sm bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50" />
              </label>
              <label className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                New value:
                <input type="number" value={newVal} onChange={(e) => setNewVal(Number(e.target.value) || 0)}
                  className="w-20 px-2 py-1 border border-stone-200 dark:border-white/10 rounded-md font-mono text-sm bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50" />
              </label>
            </div>
          )}
          {mode === "floyd" && (
            <label className="flex items-center gap-2 text-xs text-stone-500 font-medium">
              Cycle starts at index (-1 = no cycle):
              <input type="number" value={cycleStart} onChange={(e) => setCycleStart(Number(e.target.value))}
                min={-1} max={values.length - 1}
                className="w-16 px-2 py-1 border border-stone-200 dark:border-white/10 rounded-md font-mono text-sm bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50" />
            </label>
          )}
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div className="flex flex-col items-center gap-4">
        {frame && <ListViz frame={frame} mode={mode} />}
        <Callout className="w-full">{frame?.message ?? "Press play to step through."}</Callout>
      </div>
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn                                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "Doubly linked list", b: "Each node stores prev and next pointers. You can walk either direction. Delete-by-node is O(1) (no need to find predecessor). Extra memory per node." },
    { t: "Circular linked list", b: "The last node's next pointer wraps back to the head. No null terminator. Useful for round-robin scheduling and circular buffers." },
    { t: "Doubly + circular", b: "Combine both: bidirectional traversal with wraparound. Linux's task-scheduler runqueue uses this pattern." },
    { t: "Floyd's cycle detection", b: "Two pointers, slow (one step) and fast (two steps). If there's a cycle, fast laps slow — they MUST meet. If fast reaches null, no cycle. O(n) time, O(1) space." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>why add a second pointer?</SectionEyebrow>
        <SectionTitle>Bidirectional walks unlock O(1) deletes</SectionTitle>
        <Lede>
          A singly list can only tell you where to go next. A doubly list can also tell you where you
          came from. That tiny addition turns "delete this node" from O(n) into O(1) — a huge win
          for LRU caches and editor undo stacks.
        </Lede>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cards.map((c, i) => (
          <Card key={i}>
            <div className="text-[10px] font-mono font-bold text-lime-600 dark:text-lime-400 mb-2 tracking-widest">0{i + 1}</div>
            <div className="text-sm font-bold text-stone-900 dark:text-stone-50 mb-1">{c.t}</div>
            <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{c.b}</div>
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
    { q: "In a doubly linked list with nodes A↔B↔C, after deleteNode(B), the resulting structure?", a: "A ↔ C" },
    { q: "Floyd's algorithm on list 1→2→3→4→2 (4 loops to 2). How many steps until slow meets fast?", a: "3 iterations (slow at 4, fast at 4)" },
    { q: "Space complexity of Floyd's vs using a HashSet?", a: "Floyd = O(1), HashSet = O(n)" },
  ];
  const [guess, setGuess] = useState<(string | null)[]>(probs.map(() => null));
  const [show, setShow] = useState<boolean[]>(probs.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Work each problem on paper, then reveal.</Callout>
      {probs.map((p, i) => (
        <Card key={i}>
          <div className="text-sm text-stone-800 dark:text-stone-200 mb-3">#{i + 1} {p.q}</div>
          <div className="flex gap-2 items-center flex-wrap">
            <input
              value={guess[i] ?? ""}
              onChange={(e) => { const v = [...guess]; v[i] = e.target.value; setGuess(v); }}
              placeholder="your answer"
              className="px-3 py-1.5 border border-stone-200 dark:border-white/10 rounded-md font-mono text-sm bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 min-w-48"
            />
            <button
              type="button"
              onClick={() => { const v = [...show]; v[i] = true; setShow(v); }}
              className="px-3 py-1.5 border border-stone-200 dark:border-white/10 rounded-md text-xs font-medium bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 cursor-pointer hover:border-stone-400 dark:hover:border-white/30 transition-colors"
            >
              Reveal
            </button>
            {show[i] && (
              <span className="text-xs font-bold px-3 py-1.5 rounded-md bg-lime-50 dark:bg-lime-400/10 text-lime-800 dark:text-lime-200 border border-lime-400">
                Answer: {p.a}
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
      <Card>
        <SubHeading>Why Floyd works (the proof)</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Once both pointers enter the cycle, each iteration fast gains 1 step of distance on slow
          (fast moves 2, slow moves 1). That distance cycles modulo the cycle length L — eventually
          it hits 0, meaning they collide. Because fast can never "skip over" slow by exactly L while
          entering the cycle, the collision is guaranteed.
        </p>
      </Card>
      <Card>
        <SubHeading>Real-world uses</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed space-y-1 pl-4 list-disc">
          <li>LRU cache: doubly-linked list + hash map (O(1) move-to-front)</li>
          <li>Browser tab carousel: circular doubly list</li>
          <li>Music playlist on repeat: circular list</li>
          <li>Detecting infinite loops in state machines: Floyd's</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Root                                                                */
/* ------------------------------------------------------------------ */

interface Props {
  onQuizComplete?: (score: number) => void;
}

export default function L2_DoublyCircularList({ onQuizComplete }: Props) {
  const tabs: LessonTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
    ...(PRACTICE_TOPIC_SLUG
      ? [{ id: "practice", label: "Practice", icon: <Code2 className="w-4 h-4" />, content: <PracticeTab topicSlug={PRACTICE_TOPIC_SLUG} /> }]
      : []),
  ];

  const quiz: LessonQuizQuestion[] = [
    {
      question: "Which operation becomes O(1) in a doubly linked list but is O(n) in a singly linked list (given a pointer to the node)?",
      options: ["Insert at head", "Delete a given node", "Search for a value", "Compute length"],
      correctIndex: 1,
      explanation: "With prev pointer available, you can rewire neighbours without scanning. Singly-linked needs an O(n) walk to find the predecessor.",
    },
    {
      question: "In Floyd's cycle detection, if fast moves 2 steps and slow moves 1 step per iteration, and a cycle exists, why are they guaranteed to meet?",
      options: [
        "Fast catches slow by exactly L steps once both are inside the cycle",
        "Fast closes the gap by 1 each step once both are in the cycle",
        "They always start at the same node",
        "Slow speeds up inside cycles",
      ],
      correctIndex: 1,
      explanation: "Relative speed is (2−1) = 1. The gap shrinks by 1 per iteration and wraps modulo L, hitting 0.",
    },
    {
      question: "A circular singly linked list has no ___?",
      options: ["Head pointer", "Cycles", "Null terminator", "Values"],
      correctIndex: 2,
      explanation: "The last node's next loops back to head. There is no null — you must stop based on some other condition (e.g., returning to head).",
    },
    {
      question: "Space complexity of Floyd's cycle detection?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctIndex: 0,
      explanation: "Only two pointers — constant extra space. That's why it beats the HashSet approach (O(n) memory).",
    },
  ];

  return (
    <LessonShell
      title="Doubly & Circular Linked Lists"
      level={2}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="LRU cache design, cycle detection are frequent interview problems."
      nextLessonHint="Deques & Special Queues"
      onQuizComplete={onQuizComplete}
    />
  );
}
