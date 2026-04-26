"use client";

import { useMemo, useState } from "react";
import { BookOpen, Play, Target, Lightbulb } from "lucide-react";
import EngineeringLessonShell, { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  AlgoCanvas, PseudocodePanel, VariablesPanel, InputEditor, useStepPlayer, QueueTube,
} from "@/components/engineering/algo";
import {
  C, DSA_ACCENT as A,
  SectionEyebrow, SectionTitle, SubHeading, Lede,
  Card, PillButton, Callout,
} from "@/components/engineering/lessonPrimitives";

/* ------------------------------------------------------------------ */
/*  Frames                                                              */
/* ------------------------------------------------------------------ */

type Mode = "linear" | "circular";
type OpKind = "E" | "D"; // enqueue, dequeue

interface Op { kind: OpKind; value?: number; }

interface Frame {
  line: number;
  vars: Record<string, string | number | undefined>;
  message: string;
  highlightKey?: string;
  // linear queue representation (just a list)
  linear: number[];
  // circular ring buffer
  ring: (number | null)[];
  front: number;
  rear: number;
  size: number;
  capacity: number;
  justTouched?: number; // index flashed in ring
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
    <div style={{ display: "flex", gap: 30, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
      <svg width={360} height={320}>
        {/* ring outline */}
        <circle cx={CX} cy={CY} r={R + 30} fill="none" stroke={C.border} strokeWidth={1} strokeDasharray="4 3" />
        {ring.map((v, i) => {
          const a = (i / n) * 2 * Math.PI - Math.PI / 2;
          const x = CX + R * Math.cos(a);
          const y = CY + R * Math.sin(a);
          const isFront = i === front && size > 0;
          const isRear = i === (rear - 1 + n) % n && size > 0;
          const flashed = frame.justTouched === i;
          const hasVal = v !== null;
          const color = hasVal ? (isFront ? "#3b82f6" : isRear ? "#10b981" : A) : C.border;
          const bg = flashed ? "#fbbf24" : hasVal ? `${color}22` : C.bgSoft;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={24}
                fill={bg} stroke={color} strokeWidth={2.2}
                style={{ transition: "all 0.3s" }} />
              <text x={x} y={y + 4} textAnchor="middle"
                style={{ fontSize: 13, fontWeight: 700, fill: hasVal ? C.text : C.textMuted, fontFamily: C.mono }}>
                {v ?? "∅"}
              </text>
              <text x={x + (Math.cos(a) * 34)} y={y + (Math.sin(a) * 34) + 3} textAnchor="middle"
                style={{ fontSize: 9, fill: C.textMuted, fontFamily: C.mono }}>
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
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3b82f6" strokeWidth={2.5} markerEnd="url(#ar-q)" />
              <text x={CX + (R - 66) * Math.cos(a)} y={CY + (R - 66) * Math.sin(a) + 4} textAnchor="middle"
                style={{ fontSize: 11, fontWeight: 700, fill: "#3b82f6", fontFamily: C.heading }}>front</text>
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
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#10b981" strokeWidth={2.5} markerEnd="url(#ar-q)" />
              <text x={CX + (R + 66) * Math.cos(a)} y={CY + (R + 66) * Math.sin(a) + 4} textAnchor="middle"
                style={{ fontSize: 11, fontWeight: 700, fill: "#10b981", fontFamily: C.heading }}>rear</text>
            </g>
          );
        })()}
        <defs>
          <marker id="ar-q" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>
      </svg>

      {/* Utilization meter */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: C.heading }}>Utilization</div>
        <div style={{
          width: 44, height: 180,
          background: C.bgSoft, border: `2px solid ${C.border}`, borderRadius: 8,
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: `${util}%`,
            background: util > 80 ? "#ef4444" : util > 50 ? "#f59e0b" : "#10b981",
            transition: "height 0.4s ease, background 0.3s",
          }} />
        </div>
        <div style={{ fontSize: "0.85rem", fontWeight: 700, color: C.text, fontFamily: C.mono }}>
          {size}/{capacity}
        </div>
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
  const frames = useMemo(() => mode === "linear" ? buildLinear(ops) : buildCircular(ops, Math.max(1, cap)), [mode, opsStr, cap]);
  const player = useStepPlayer(frames);
  const frame = player.current!;
  const pseudo = mode === "linear" ? PSEUDO_LINEAR : PSEUDO_CIRC;

  return (
    <AlgoCanvas
      title={mode === "linear" ? "Queue (FIFO)" : "Circular Queue - Ring Buffer"}
      player={player}
      input={
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {(["linear", "circular"] as Mode[]).map((m) => (
              <PillButton key={m} onClick={() => setMode(m)} active={mode === m} color={A}>
                <span style={{ fontSize: "0.78rem", textTransform: "capitalize" }}>{m}</span>
              </PillButton>
            ))}
          </div>
          <InputEditor
            label="Operations"
            value={opsStr}
            placeholder="e.g. E5, E10, D, E15"
            helper="E<n> = enqueue n; D = dequeue. Comma/space separated."
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
            <label style={{ fontSize: "0.78rem", color: C.textMuted, fontWeight: 600, display: "flex", alignItems: "center", gap: 6, fontFamily: C.heading }}>
              Capacity:
              <input type="number" value={cap} onChange={(e) => setCap(Math.max(1, Number(e.target.value) || 1))}
                min={1} max={12}
                style={{ width: 60, padding: "4px 8px", border: `1px solid ${C.border}`, borderRadius: 5, fontFamily: C.mono, background: C.bg, color: C.text }} />
            </label>
          )}
        </div>
      }
      pseudocode={<PseudocodePanel lines={pseudo} activeLine={frame.line} />}
      variables={<VariablesPanel vars={frame.vars} flashKeys={frame.highlightKey ? [frame.highlightKey] : []} />}
    >
      {mode === "linear" ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <QueueTube items={frame.linear.map((v) => ({ value: v }))} title="Queue" />
          {frame.status === "underflow" && (
            <div style={{ padding: "6px 14px", borderRadius: 6, background: `${C.danger}14`, border: `1.5px solid ${C.danger}`, color: C.dangerDark, fontSize: "0.82rem", fontWeight: 700, fontFamily: C.heading }}>
              UNDERFLOW
            </div>
          )}
          <Callout accent={A}>{frame.message}</Callout>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <RingViz frame={frame} />
          {frame.status === "overflow" && (
            <div style={{ textAlign: "center", padding: "6px 14px", borderRadius: 6, background: `${C.danger}14`, border: `1.5px solid ${C.danger}`, color: C.dangerDark, fontSize: "0.82rem", fontWeight: 700, fontFamily: C.heading, display: "inline-block" }}>
              OVERFLOW
            </div>
          )}
          {frame.status === "underflow" && (
            <div style={{ textAlign: "center", padding: "6px 14px", borderRadius: 6, background: `${C.danger}14`, border: `1.5px solid ${C.danger}`, color: C.dangerDark, fontSize: "0.82rem", fontWeight: 700, fontFamily: C.heading, display: "inline-block" }}>
              UNDERFLOW
            </div>
          )}
          <Callout accent={A}>{frame.message}</Callout>
        </div>
      )}
    </AlgoCanvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Learn / Try / Insight                                               */
/* ------------------------------------------------------------------ */

function LearnTab() {
  const cards = [
    { t: "FIFO - First In, First Out", b: "The element that has been waiting the longest is served first. Like a line at a coffee shop: join the back, leave the front." },
    { t: "Two pointers: front & rear", b: "Front is where you dequeue; rear is where you enqueue. Both operations are O(1) when implemented correctly." },
    { t: "The circular (ring) buffer trick", b: "Array-backed queue with a wraparound: when rear reaches capacity, it wraps to 0. Fixed size, no shifting, O(1) ops. Used in audio drivers, network packet buffers, and producer-consumer pipelines." },
    { t: "When is it full vs empty?", b: "Both can make size==0. Solution: keep a separate size counter (what we do here), or sacrifice one slot so 'full' means rear == (front-1) mod cap." },
  ];
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <SectionEyebrow color={A}>Stack vs queue</SectionEyebrow>
        <SectionTitle>Same O(1) ops — opposite ends</SectionTitle>
        <Lede>
          Stack = newest goes out first (LIFO). Queue = oldest goes out first (FIFO). Both have O(1)
          insert and remove, but from opposite ends.
        </Lede>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
        {cards.map((s, i) => (
          <Card key={i}>
            <div
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: A,
                marginBottom: 6,
                fontFamily: C.mono,
                letterSpacing: "0.08em",
              }}
            >
              0{i + 1}
            </div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: C.text, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.t}</div>
            <div style={{ fontSize: "0.85rem", color: C.textSecondary, lineHeight: 1.55 }}>{s.b}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function TryTab() {
  const probs = [
    { q: "Trace: E1, E2, E3, D, E4, D. Final queue contents (front → rear)?", a: "3, 4" },
    { q: "Circular queue, cap=4. After E1,E2,E3,E4,D,E5 - what's at buf[0]?", a: "5 (wrapped around)" },
    { q: "BFS uses which linear structure?", a: "Queue" },
    { q: "After E7 twice and D once on an empty queue, size?", a: "1" },
  ];
  const [g, setG] = useState<(string | null)[]>(probs.map(() => null));
  const [s, setS] = useState<boolean[]>(probs.map(() => false));
  return (
    <div style={{ fontFamily: C.heading, display: "flex", flexDirection: "column", gap: 12 }}>
      <Callout accent={A}>Trace each, then reveal.</Callout>
      {probs.map((p, i) => (
        <Card key={i}>
          <div style={{ fontSize: "0.9rem", marginBottom: 8, color: C.text }}>#{i + 1} {p.q}</div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <input value={g[i] ?? ""} onChange={(e) => { const v = [...g]; v[i] = e.target.value; setG(v); }}
              placeholder="your answer"
              style={{ padding: "6px 10px", border: `1px solid ${C.border}`, borderRadius: 6, fontFamily: C.mono, fontSize: "0.85rem", minWidth: 200, background: C.bg, color: C.text }} />
            <button
              onClick={() => { const v = [...s]; v[i] = true; setS(v); }}
              style={{
                padding: "6px 14px",
                borderRadius: 8,
                fontSize: "0.78rem",
                fontWeight: 700,
                border: `1px solid ${C.border}`,
                background: C.bg,
                color: C.textSecondary,
                cursor: "pointer",
                fontFamily: C.heading,
              }}
            >
              Reveal
            </button>
            {s[i] && (
              <span style={{ fontSize: "0.82rem", fontWeight: 700, padding: "4px 12px", borderRadius: 8,
                color: C.successDark, background: `${C.success}14`, fontFamily: C.heading }}>
                Answer: {p.a}
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
        <SubHeading>Why circular beats naive array-queue</SubHeading>
        <p style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.6, margin: 0 }}>
          A naive array queue shifts every element left on dequeue → O(n). A circular queue just advances the front index → O(1). Same memory, one line of modulo arithmetic, massive speedup. This is the data structure behind your keyboard&apos;s typeahead buffer.
        </p>
      </Card>
      <Card>
        <SubHeading>Queues in systems</SubHeading>
        <ul style={{ fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.7, paddingLeft: 22, margin: 0 }}>
          <li>CPU scheduling (round-robin process queue)</li>
          <li>Printer job spool</li>
          <li>BFS traversal in graphs (next lesson&apos;s Graph module)</li>
          <li>Kafka / RabbitMQ message brokers (persistent queues)</li>
          <li>Web server request queues under load</li>
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity                                                             */
/* ------------------------------------------------------------------ */

export default function DSA_L2_QueuesActivity() {
  const tabs: EngTabDef[] = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" />, content: <LearnTab /> },
    { id: "visualize", label: "Visualize", icon: <Play className="w-4 h-4" />, content: <VisualizeTab /> },
    { id: "try", label: "Try It", icon: <Target className="w-4 h-4" />, content: <TryTab /> },
    { id: "insight", label: "Insight", icon: <Lightbulb className="w-4 h-4" />, content: <InsightTab /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "A queue removes elements in which order?",
      options: ["Last-in first-out", "First-in first-out", "Random", "Priority-based"],
      correctIndex: 1,
      explanation: "FIFO - elements leave in arrival order. Contrast with a stack (LIFO) or a priority queue (min/max first).",
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
    <EngineeringLessonShell
      title="Queues - FIFO"
      level={2}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="BFS, scheduling, producer-consumer patterns all use queues"
      nextLessonHint="Hashing & Collision Resolution"
    />
  );
}
