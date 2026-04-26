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

const PRACTICE_TOPIC_SLUG: string | null = "queue";

/* ------------------------------------------------------------------ */
/*  Types / Frame                                                        */
/* ------------------------------------------------------------------ */

type Mode = "linear" | "circular";
type OpKind = "E" | "D";
interface Op { kind: OpKind; value?: number; }

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  highlightKey?: string;
  linear: number[];
  ring: (number | null)[];
  front: number;
  rear: number;
  size: number;
  capacity: number;
  justTouched?: number;
  status?: "overflow" | "underflow" | "ok";
}

const PSEUDO_LINEAR = [
  "function enqueue(q, x):",
  "  q.items.append(x)   // rear grows",
  "",
  "function dequeue(q):",
  "  if q.empty: error",
  "  return q.items.removeFirst()",
];

const PSEUDO_CIRC = [
  "class CircularQueue(capacity):",
  "  buf[capacity], front=0, rear=0, size=0",
  "function enqueue(x):",
  "  if size == capacity: overflow",
  "  buf[rear] ← x",
  "  rear ← (rear + 1) mod capacity",
  "  size ← size + 1",
  "function dequeue():",
  "  if size == 0: underflow",
  "  x ← buf[front]",
  "  front ← (front + 1) mod capacity",
  "  size ← size - 1",
  "  return x",
];

/* ------------------------------------------------------------------ */
/*  Frame builders                                                       */
/* ------------------------------------------------------------------ */

function parseOps(s: string): Op[] {
  return s.split(/[,\s]+/).map((tok) => tok.trim()).filter(Boolean).map((tok) => {
    if (tok.startsWith("E")) return { kind: "E" as OpKind, value: Number(tok.slice(1)) };
    if (tok === "D") return { kind: "D" as OpKind };
    return null;
  }).filter((x): x is Op => x !== null);
}

function buildLinear(ops: Op[]): Frame[] {
  const f: Frame[] = [];
  const q: number[] = [];
  f.push({ line: 0, vars: { size: 0 }, message: "Start with empty queue", linear: [], ring: [], front: 0, rear: 0, size: 0, capacity: 0 });
  for (const op of ops) {
    if (op.kind === "E") {
      f.push({ line: 0, vars: { x: op.value }, message: `enqueue(${op.value}) - append at rear`, linear: [...q], ring: [], front: 0, rear: q.length, size: q.length, capacity: 0 });
      q.push(op.value!);
      f.push({ line: 1, vars: { rear: op.value, size: q.length }, highlightKey: "rear", message: `${op.value} inserted at rear`, linear: [...q], ring: [], front: 0, rear: q.length, size: q.length, capacity: 0 });
    } else {
      if (q.length === 0) {
        f.push({ line: 4, vars: { error: "underflow" }, message: "Cannot dequeue - queue empty", linear: [], ring: [], front: 0, rear: 0, size: 0, capacity: 0, status: "underflow" });
        continue;
      }
      f.push({ line: 3, vars: { size: q.length }, message: "dequeue() - remove from front", linear: [...q], ring: [], front: 0, rear: q.length, size: q.length, capacity: 0 });
      const v = q.shift()!;
      f.push({ line: 5, vars: { removed: v, size: q.length }, highlightKey: "removed", message: `Removed ${v} from front`, linear: [...q], ring: [], front: 0, rear: q.length, size: q.length, capacity: 0 });
    }
  }
  return f;
}

function buildCircular(ops: Op[], cap: number): Frame[] {
  const f: Frame[] = [];
  const ring: (number | null)[] = Array(cap).fill(null);
  let front = 0, rear = 0, size = 0;
  f.push({ line: 1, vars: { capacity: cap, front, rear, size }, message: `Create circular queue of capacity ${cap}`, linear: [], ring: [...ring], front, rear, size, capacity: cap });
  for (const op of ops) {
    if (op.kind === "E") {
      f.push({ line: 2, vars: { x: op.value, size, capacity: cap }, message: `enqueue(${op.value})`, linear: [], ring: [...ring], front, rear, size, capacity: cap });
      if (size === cap) {
        f.push({ line: 3, vars: { error: "overflow" }, message: "Queue full - overflow", linear: [], ring: [...ring], front, rear, size, capacity: cap, status: "overflow" });
        continue;
      }
      ring[rear] = op.value!;
      const pos = rear;
      f.push({ line: 4, vars: { "buf[rear]": op.value, rear }, highlightKey: "rear", message: `Write ${op.value} at buf[${rear}]`, linear: [], ring: [...ring], front, rear, size, capacity: cap, justTouched: pos });
      rear = (rear + 1) % cap;
      f.push({ line: 5, vars: { rear }, highlightKey: "rear", message: `Advance rear → (${(rear - 1 + cap) % cap} + 1) mod ${cap} = ${rear}`, linear: [], ring: [...ring], front, rear, size, capacity: cap });
      size++;
      f.push({ line: 6, vars: { size }, highlightKey: "size", message: `Size now ${size}`, linear: [], ring: [...ring], front, rear, size, capacity: cap });
    } else {
      f.push({ line: 7, vars: { size }, message: `dequeue()`, linear: [], ring: [...ring], front, rear, size, capacity: cap });
      if (size === 0) {
        f.push({ line: 8, vars: { error: "underflow" }, message: "Empty - underflow", linear: [], ring: [...ring], front, rear, size, capacity: cap, status: "underflow" });
        continue;
      }
      const v = ring[front]!;
      const pos = front;
      f.push({ line: 9, vars: { "buf[front]": v, front }, highlightKey: "front", message: `Read ${v} from buf[${front}]`, linear: [], ring: [...ring], front, rear, size, capacity: cap, justTouched: pos });
      ring[front] = null;
      front = (front + 1) % cap;
      f.push({ line: 10, vars: { front }, highlightKey: "front", message: `Advance front → (${(front - 1 + cap) % cap} + 1) mod ${cap} = ${front}`, linear: [], ring: [...ring], front, rear, size, capacity: cap });
      size--;
      f.push({ line: 11, vars: { size, returned: v }, highlightKey: "size", message: `Dequeued ${v}, size now ${size}`, linear: [], ring: [...ring], front, rear, size, capacity: cap });
    }
  }
  return f;
}

/* ------------------------------------------------------------------ */
/*  Circular ring viz                                                   */
/* ------------------------------------------------------------------ */

function RingViz({ frame }: { frame: Frame }) {
  const { ring, front, rear, size, capacity } = frame;
  const n = capacity;
  const R = 120, CX = 180, CY = 160;
  const util = (size / Math.max(1, capacity)) * 100;

  return (
    <div className="flex gap-6 items-center flex-wrap justify-center">
      <svg width={360} height={320}>
        <circle cx={CX} cy={CY} r={R + 30} fill="none" stroke={THEME.border} strokeWidth={1} strokeDasharray="4 3" />
        {ring.map((v, i) => {
          const a = (i / n) * 2 * Math.PI - Math.PI / 2;
          const x = CX + R * Math.cos(a);
          const y = CY + R * Math.sin(a);
          const isFront = i === front && size > 0;
          const isRear = i === (rear - 1 + n) % n && size > 0;
          const flashed = frame.justTouched === i;
          const hasVal = v !== null;
          const color = hasVal ? (isFront ? "#3b82f6" : isRear ? "#10b981" : THEME.accent) : THEME.border;
          const bg = flashed ? "#fbbf24" : hasVal ? `${color}22` : THEME.bg;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={24} fill={bg} stroke={color} strokeWidth={2.2} style={{ transition: "all 0.3s" }} />
              <text x={x} y={y + 4} textAnchor="middle"
                style={{ fontSize: 13, fontWeight: 700, fill: hasVal ? THEME.text : THEME.textMuted, fontFamily: THEME.mono }}>
                {v ?? "∅"}
              </text>
              <text x={x + Math.cos(a) * 34} y={y + Math.sin(a) * 34 + 3} textAnchor="middle"
                style={{ fontSize: 9, fill: THEME.textMuted, fontFamily: THEME.mono }}>
                [{i}]
              </text>
            </g>
          );
        })}
        {/* front pointer */}
        {(() => {
          const a = (front / n) * 2 * Math.PI - Math.PI / 2;
          const x1 = CX + (R - 50) * Math.cos(a), y1 = CY + (R - 50) * Math.sin(a);
          const x2 = CX + (R - 26) * Math.cos(a), y2 = CY + (R - 26) * Math.sin(a);
          return (
            <g>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3b82f6" strokeWidth={2.5} markerEnd="url(#ar-q-front)" />
              <text x={CX + (R - 66) * Math.cos(a)} y={CY + (R - 66) * Math.sin(a) + 4} textAnchor="middle"
                style={{ fontSize: 11, fontWeight: 700, fill: "#3b82f6", fontFamily: THEME.heading }}>front</text>
            </g>
          );
        })()}
        {/* rear pointer */}
        {(() => {
          const a = (rear / n) * 2 * Math.PI - Math.PI / 2;
          const x1 = CX + (R + 52) * Math.cos(a), y1 = CY + (R + 52) * Math.sin(a);
          const x2 = CX + (R + 28) * Math.cos(a), y2 = CY + (R + 28) * Math.sin(a);
          return (
            <g>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#10b981" strokeWidth={2.5} markerEnd="url(#ar-q-rear)" />
              <text x={CX + (R + 66) * Math.cos(a)} y={CY + (R + 66) * Math.sin(a) + 4} textAnchor="middle"
                style={{ fontSize: 11, fontWeight: 700, fill: "#10b981", fontFamily: THEME.heading }}>rear</text>
            </g>
          );
        })()}
        <defs>
          <marker id="ar-q-front" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#3b82f6" />
          </marker>
          <marker id="ar-q-rear" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#10b981" />
          </marker>
        </defs>
      </svg>

      <div className="flex flex-col items-center gap-2">
        <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">Utilization</div>
        <div className="relative overflow-hidden rounded-md border border-stone-200 dark:border-white/10" style={{ width: 44, height: 180 }}>
          <div
            className="absolute bottom-0 left-0 right-0 transition-all"
            style={{
              height: `${util}%`,
              background: util > 80 ? "#ef4444" : util > 50 ? "#f59e0b" : "#10b981",
            }}
          />
        </div>
        <div className="text-sm font-bold font-mono text-stone-900 dark:text-stone-50">{size}/{capacity}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Linear queue viz                                                     */
/* ------------------------------------------------------------------ */

function LinearQueueViz({ items }: { items: number[] }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1">Queue (front → rear)</div>
      <div className="flex gap-1.5 flex-wrap justify-center p-3 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 min-w-48 min-h-12">
        {items.length === 0 ? (
          <span className="text-xs text-stone-400 font-mono">empty</span>
        ) : items.map((v, i) => (
          <div
            key={i}
            className="flex items-center justify-center font-mono font-bold text-sm rounded-md px-3 py-1.5"
            style={{ background: `${THEME.accent}22`, border: `2px solid ${THEME.accent}`, color: THEME.text, minWidth: 36 }}
          >
            {v}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visualize                                                           */
/* ------------------------------------------------------------------ */

function VisualizeTab() {
  const [mode, setMode] = useState<Mode>("linear");
  const [opsStr, setOpsStr] = useState("E5, E10, E15, D, E20, D");
  const [cap, setCap] = useState(5);

  const ops = parseOps(opsStr);
  const frames = useMemo(
    () => mode === "linear" ? buildLinear(ops) : buildCircular(ops, Math.max(1, cap)),
    [mode, opsStr, cap],
  );
  const player = useStepPlayer(frames);
  const frame = player.current;
  const pseudo = mode === "linear" ? PSEUDO_LINEAR : PSEUDO_CIRC;

  return (
    <AlgoCanvas
      title={mode === "linear" ? "Queue (FIFO)" : "Circular Queue — Ring Buffer"}
      player={player}
      input={
        <div className="flex flex-col gap-3">
          <div className="flex gap-1.5 flex-wrap">
            {(["linear", "circular"] as Mode[]).map((m) => (
              <PillButton key={m} onClick={() => setMode(m)} active={mode === m}>
                <span className="text-xs capitalize">{m}</span>
              </PillButton>
            ))}
          </div>
          <InputEditor
            label="Operations"
            value={opsStr}
            placeholder="e.g. E5, E10, D, E15"
            helper="E<n> = enqueue n; D = dequeue. Comma or space separated."
            presets={[
              { label: "Enqueue only", value: "E1, E2, E3, E4, E5" },
              { label: "Mixed", value: "E5, E10, D, E15, D, E20" },
              { label: "Wrap-around", value: "E1, E2, E3, D, D, E4, E5, E6" },
              { label: "Underflow", value: "D, D" },
            ]}
            onApply={setOpsStr}
            onRandom={() => {
              const n = 6 + Math.floor(Math.random() * 4);
              const toks = Array.from({ length: n }, () => Math.random() < 0.65 ? `E${Math.floor(Math.random() * 90) + 10}` : "D");
              setOpsStr(toks.join(", "));
            }}
          />
          {mode === "circular" && (
            <label className="flex items-center gap-2 text-xs text-stone-500 font-medium">
              Capacity:
              <input
                type="number"
                value={cap}
                onChange={(e) => setCap(Math.max(1, Number(e.target.value) || 1))}
                min={1} max={12}
                className="w-16 px-2 py-1 border border-stone-200 dark:border-white/10 rounded-md font-mono text-sm bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50"
              />
            </label>
          )}
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame?.line} />}
      variables={<VariablesPanel vars={frame?.vars ?? {}} flashKeys={frame?.highlightKey ? [frame.highlightKey] : []} />}
    >
      <div className="flex flex-col items-center gap-4">
        {mode === "linear" ? (
          <>
            <LinearQueueViz items={frame?.linear ?? []} />
            {frame?.status === "underflow" && (
              <div className="px-4 py-2 rounded-md border border-rose-500 bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 text-sm font-bold">
                UNDERFLOW
              </div>
            )}
          </>
        ) : (
          <>
            {frame && <RingViz frame={frame} />}
            {frame?.status === "overflow" && (
              <div className="px-4 py-2 rounded-md border border-rose-500 bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 text-sm font-bold">
                OVERFLOW
              </div>
            )}
            {frame?.status === "underflow" && (
              <div className="px-4 py-2 rounded-md border border-rose-500 bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 text-sm font-bold">
                UNDERFLOW
              </div>
            )}
          </>
        )}
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
    { t: "FIFO — First In, First Out", b: "The element that has been waiting the longest is served first. Like a line at a coffee shop: join the back, leave the front." },
    { t: "Two pointers: front and rear", b: "Front is where you dequeue; rear is where you enqueue. Both operations are O(1) when implemented correctly." },
    { t: "The circular (ring) buffer trick", b: "Array-backed queue with a wraparound: when rear reaches capacity, it wraps to 0. Fixed size, no shifting, O(1) ops. Used in audio drivers, network packet buffers, and producer-consumer pipelines." },
    { t: "When is it full vs empty?", b: "Both can make size==0. Solution: keep a separate size counter (what we do here), or sacrifice one slot so 'full' means rear == (front-1) mod cap." },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionEyebrow>stack vs queue</SectionEyebrow>
        <SectionTitle>Same O(1) ops — opposite ends</SectionTitle>
        <Lede>
          Stack = newest goes out first (LIFO). Queue = oldest goes out first (FIFO). Both have O(1)
          insert and remove, but from opposite ends.
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
    { q: "Trace: E1, E2, E3, D, E4, D. Final queue contents (front to rear)?", a: "3, 4" },
    { q: "Circular queue, cap=4. After E1,E2,E3,E4,D,E5 — what's at buf[0]?", a: "5 (wrapped around)" },
    { q: "BFS uses which linear structure?", a: "Queue" },
    { q: "After E7 twice and D once on an empty queue, size?", a: "1" },
  ];
  const [guess, setGuess] = useState<(string | null)[]>(probs.map(() => null));
  const [show, setShow] = useState<boolean[]>(probs.map(() => false));
  return (
    <div className="flex flex-col gap-3">
      <Callout>Trace each, then reveal.</Callout>
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
        <SubHeading>Why circular beats naive array-queue</SubHeading>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          A naive array queue shifts every element left on dequeue — O(n). A circular queue just
          advances the front index — O(1). Same memory, one line of modulo arithmetic, massive
          speedup. This is the data structure behind your keyboard's typeahead buffer.
        </p>
      </Card>
      <Card>
        <SubHeading>Queues in systems</SubHeading>
        <ul className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed space-y-1 pl-4 list-disc">
          <li>CPU scheduling (round-robin process queue)</li>
          <li>Printer job spool</li>
          <li>BFS traversal in graphs</li>
          <li>Kafka / RabbitMQ message brokers (persistent queues)</li>
          <li>Web server request queues under load</li>
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

export default function L2_Queues({ onQuizComplete }: Props) {
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
      question: "A queue removes elements in which order?",
      options: ["Last-in first-out", "First-in first-out", "Random", "Priority-based"],
      correctIndex: 1,
      explanation: "FIFO — elements leave in arrival order. Contrast with a stack (LIFO) or a priority queue (min/max first).",
    },
    {
      question: "In a circular queue of capacity 5 with front=3 and size=4, what is rear?",
      options: ["2", "7", "4", "0"],
      correctIndex: 0,
      explanation: "rear = (front + size) mod capacity = (3 + 4) mod 5 = 2. Rear has wrapped around past index 4.",
    },
    {
      question: "Why is a circular array preferred over a linear array for a fixed-size queue?",
      options: [
        "Circular uses less memory",
        "Circular avoids the O(n) shift on dequeue",
        "Circular is easier to code",
        "Linear does not support enqueue",
      ],
      correctIndex: 1,
      explanation: "Advancing an index is O(1) vs shifting every element left (O(n)). Memory usage is identical.",
    },
    {
      question: "If a circular queue of capacity C has size == C, attempting another enqueue produces?",
      options: ["Silent no-op", "Overflow (error)", "Automatic resize", "Dequeue of front"],
      correctIndex: 1,
      explanation: "Fixed-capacity ring buffers report overflow. Growable queues (deque/linked list) would just allocate more space.",
    },
  ];

  return (
    <LessonShell
      title="Queues"
      level={2}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="BFS, scheduling, producer-consumer patterns all use queues."
      nextLessonHint="Singly Linked Lists"
      onQuizComplete={onQuizComplete}
    />
  );
}
