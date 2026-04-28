import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Globe, Pause, Play, Radio, RotateCcw } from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";

const SD = "#84cc16";
const NEUTRAL = "#64748b";
const PURPLE = "#8b5cf6";
const MONO = '"JetBrains Mono", Menlo, Consolas, monospace';

const sectionTitle: CSSProperties = {
  fontFamily: "var(--eng-font)",
  fontWeight: 700,
  fontSize: "1.15rem",
  color: "var(--eng-text)",
  margin: "0 0 12px",
};
const sectionDesc: CSSProperties = {
  fontFamily: "var(--eng-font)",
  fontSize: "0.92rem",
  color: "var(--eng-text-muted)",
  margin: "0 0 20px",
  lineHeight: 1.65,
};

/* ================================================================== */
/*  TAB 1 - Definition                                                 */
/* ================================================================== */

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>Same broker. Different routing semantics.</h3>
      <p style={sectionDesc}>
        Both patterns receive a message and forward it to consumers. The difference is{" "}
        <b>who gets the message</b>. In a queue, exactly one consumer wins. In pub/sub, every
        subscriber gets a copy.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {[
          {
            name: "Queue (work distribution)",
            color: SD,
            tagline: "One message → one consumer",
            who: "Workers competing for tasks",
            ex: "Image resizing job, email send, order processing",
            note: "Adding more consumers spreads work. Each message is processed exactly once across the consumer pool.",
          },
          {
            name: "Pub/Sub (broadcast)",
            color: PURPLE,
            tagline: "One message → all subscribers",
            who: "Independent services reacting to events",
            ex: "Order placed → email service + analytics + inventory all react",
            note: "Adding more subscribers adds more reactions. Each subscriber gets its own copy and tracks its own progress.",
          },
        ].map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: "18px 20px",
              border: `1.5px solid ${p.color}55`,
              borderRadius: 10,
              background: `${p.color}08`,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "1rem", marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: p.color, fontWeight: 700, letterSpacing: "0.06em" }}>
                {p.tagline}
              </div>
            </div>
            <div style={{ fontSize: "0.86rem", color: "var(--eng-text-muted)", lineHeight: 1.6 }}>
              <b style={{ color: "var(--eng-text)" }}>{p.who}.</b> {p.note}
            </div>
            <div style={{ paddingTop: 8, borderTop: `1px dashed ${p.color}33`, fontFamily: MONO, fontSize: "0.74rem", color: p.color }}>
              <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>EX ·</span>
              <span style={{ color: "var(--eng-text)" }}>{p.ex}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>Kafka consumer groups</b> are the elegant unification: messages within a partition
          are queued across the group (work distribution); different consumer groups each get
          their own copy (pub/sub). <b>SNS + SQS</b> on AWS pairs broadcast topic + per-service
          queue for the same effect. <b>Redis Pub/Sub</b> is fire-and-forget pub/sub; <b>Redis
          Streams</b> are the queue equivalent.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Animated mode toggle                                       */
/* ================================================================== */

type Mode = "queue" | "pubsub";

interface Packet {
  id: number;
  to: number; // consumer index, -1 means all
  from: number; // 0 producer
}

const CONSUMERS = 3;

function ModeDemo() {
  const [mode, setMode] = useState<Mode>("queue");
  const [running, setRunning] = useState(true);
  const [packets, setPackets] = useState<Packet[]>([]);
  const [counts, setCounts] = useState<number[]>(Array(CONSUMERS).fill(0));
  const [totalSent, setTotalSent] = useState(0);
  const idRef = useRef(0);
  const robinRef = useRef(0);

  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      const id = ++idRef.current;
      setTotalSent((t) => t + 1);
      if (mode === "queue") {
        const target = robinRef.current % CONSUMERS;
        robinRef.current += 1;
        setPackets((ps) => [...ps, { id, to: target, from: 0 }]);
        setCounts((c) => c.map((v, i) => (i === target ? v + 1 : v)));
      } else {
        // pub/sub: one packet per consumer
        for (let i = 0; i < CONSUMERS; i++) {
          setPackets((ps) => [...ps, { id: id * 100 + i, to: i, from: 0 }]);
        }
        setCounts((c) => c.map((v) => v + 1));
      }
    }, 1500);
    return () => clearInterval(handle);
  }, [running, mode]);

  // Clean up packets after they finish animating
  useEffect(() => {
    if (packets.length === 0) return;
    const handle = setTimeout(() => {
      setPackets((ps) => ps.slice(Math.max(0, ps.length - 12)));
    }, 1600);
    return () => clearTimeout(handle);
  }, [packets]);

  const reset = () => {
    setPackets([]);
    setCounts(Array(CONSUMERS).fill(0));
    setTotalSent(0);
    idRef.current = 0;
    robinRef.current = 0;
  };

  const switchMode = (m: Mode) => {
    setMode(m);
    reset();
  };

  return (
    <div>
      <h3 style={sectionTitle}>Toggle the routing mode. Watch the same producer behave differently.</h3>
      <p style={sectionDesc}>
        One producer fires a message every 1.5s. Three consumers wait. Switch between Queue and
        Pub/Sub and watch the routing change.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        {(["queue", "pubsub"] as Mode[]).map((m) => {
          const active = mode === m;
          return (
            <button
              key={m}
              type="button"
              onClick={() => switchMode(m)}
              style={{
                padding: "8px 14px",
                borderRadius: 6,
                cursor: "pointer",
                border: `1.5px solid ${active ? SD : "var(--eng-border)"}`,
                background: active ? `${SD}18` : "transparent",
                color: active ? SD : "var(--eng-text-muted)",
                fontFamily: MONO,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "all 0.18s",
              }}
            >
              {m === "queue" ? "Queue (work distribution)" : "Pub/Sub (broadcast)"}
            </button>
          );
        })}
      </div>

      <div
        style={{
          background: "#0b1220",
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.15)",
          padding: 22,
        }}
      >
        <svg viewBox="0 0 720 320" width="100%" style={{ maxWidth: 760, display: "block", margin: "0 auto" }}>
          {/* Producer */}
          <NodeRect x={20} y={130} w={120} h={60} label="Producer" sub="emits @1.5s" color={SD} pulse={running} />

          {/* Broker */}
          <NodeRect x={300} y={130} w={120} h={60} label="Broker" sub={mode === "queue" ? "queue" : "topic"} color={SD} />

          {/* Consumers */}
          {[0, 1, 2].map((i) => {
            const y = 30 + i * 100;
            const c = mode === "queue" ? SD : PURPLE;
            return <NodeRect key={i} x={580} y={y} w={120} h={50} label={`Consumer ${i + 1}`} sub={`${counts[i]} received`} color={c} />;
          })}

          {/* Edges */}
          <line x1={140} y1={160} x2={300} y2={160} stroke="#475569" strokeWidth={1.5} strokeDasharray="3 4" />
          {[0, 1, 2].map((i) => {
            const y = 55 + i * 100;
            return <line key={i} x1={420} y1={160} x2={580} y2={y} stroke="#475569" strokeWidth={1.5} strokeDasharray="3 4" />;
          })}

          {/* Producer -> Broker packet */}
          {packets.length > 0 && (
            <motion.circle
              key={`pp-${packets[packets.length - 1].id}`}
              r={5}
              fill={SD}
              initial={{ cx: 140, cy: 160 }}
              animate={{ cx: 300, cy: 160 }}
              transition={{ duration: 0.5, ease: "linear" }}
            />
          )}

          {/* Broker -> Consumer packets */}
          <AnimatePresence>
            {packets.map((p) => {
              const y = 55 + p.to * 100;
              return (
                <motion.circle
                  key={`bc-${p.id}`}
                  r={5}
                  fill={mode === "queue" ? SD : PURPLE}
                  initial={{ cx: 420, cy: 160, opacity: 0 }}
                  animate={{ cx: 580, cy: y, opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3, times: [0, 0.1, 0.9, 1] }}
                />
              );
            })}
          </AnimatePresence>
        </svg>

        {/* Counts */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ borderColor: mode === "queue" ? SD : PURPLE }}
              transition={{ duration: 0.2 }}
              style={{
                padding: "10px 12px",
                borderRadius: 8,
                border: `1.5px solid`,
                background: `${(mode === "queue" ? SD : PURPLE)}10`,
                textAlign: "center",
              }}
            >
              <div style={{ fontFamily: MONO, fontSize: "0.66rem", color: mode === "queue" ? SD : PURPLE, letterSpacing: "0.1em", marginBottom: 4 }}>
                CONSUMER {i + 1}
              </div>
              <div style={{ fontFamily: MONO, fontSize: "1.4rem", fontWeight: 800, color: "var(--eng-text)" }}>
                {counts[i]}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setRunning((r) => !r)}
            style={btn(SD)}
          >
            {running ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {running ? "pause" : "resume"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
            messages sent: <span style={{ color: SD, fontWeight: 700 }}>{totalSent}</span>
            {" · "}
            delivered: <span style={{ color: SD, fontWeight: 700 }}>{counts.reduce((a, b) => a + b, 0)}</span>
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            style={{
              marginTop: 14,
              padding: "12px 14px",
              background: "rgba(15,23,42,0.6)",
              borderRadius: 6,
              fontSize: "0.86rem",
              color: "#e5e7eb",
              lineHeight: 1.55,
            }}
          >
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: mode === "queue" ? SD : PURPLE, letterSpacing: "0.12em", marginRight: 8 }}>
              {mode === "queue" ? "QUEUE MODE" : "PUB/SUB MODE"}
            </span>
            {mode === "queue"
              ? "Each message goes to exactly one consumer (round-robin shown). Total deliveries = total sent. Add a 4th consumer and each one would get fewer messages — load distributes."
              : "Each message goes to ALL consumers. Total deliveries = total sent × N consumers. Add a 4th consumer and EVERY consumer still gets every message — fan-out grows."}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function NodeRect({ x, y, w, h, label, sub, color, pulse }: { x: number; y: number; w: number; h: number; label: string; sub: string; color: string; pulse?: boolean }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {pulse && (
        <motion.rect
          width={w}
          height={h}
          rx={8}
          fill={color}
          initial={{ opacity: 0.25, scale: 1 }}
          animate={{ opacity: 0, scale: 1.15 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <rect width={w} height={h} rx={8} fill={`${color}22`} stroke={color} strokeWidth={1.5} />
      <text x={w / 2} y={h / 2 - 2} textAnchor="middle" fill="#e5e7eb" fontSize={12} fontWeight={700} fontFamily={MONO}>
        {label}
      </text>
      <text x={w / 2} y={h / 2 + 14} textAnchor="middle" fill={color} fontSize={10} fontFamily={MONO}>
        {sub}
      </text>
    </g>
  );
}

function btn(color: string): CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer",
    border: `1.5px solid ${color}`,
    background: `${color}18`,
    color,
    fontFamily: MONO,
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  };
}

/* ================================================================== */
/*  TAB 3 - When to use which                                          */
/* ================================================================== */

const PICKS = [
  { task: "Process video uploads on a worker fleet", pick: "Queue", reason: "Each video should be processed once. Add workers to scale, the queue load-balances." },
  { task: "Notify email + analytics + audit when an order is placed", pick: "Pub/Sub", reason: "Three independent services react to the same event. Each gets its own copy and processes independently." },
  { task: "Send 1M push notifications", pick: "Queue", reason: "One push per device. Workers compete for tasks. Pub/sub here would mean every notification gets delivered N times." },
  { task: "Real-time stock price → 50k subscribed dashboards", pick: "Pub/Sub", reason: "Every dashboard wants every tick. This is the canonical broadcast." },
  { task: "Image resize jobs from photo upload", pick: "Queue", reason: "Each image needs to be resized once. Add workers if backlog grows." },
  { task: "Cross-team event log for analytics + ML + billing", pick: "Pub/Sub (Kafka topics)", reason: "Three independent consumer groups, each tracking its own offset on the same topic." },
];

function WhenToUse() {
  return (
    <div>
      <h3 style={sectionTitle}>Six real tasks. Which model fits?</h3>
      <p style={sectionDesc}>
        The decision rule: if each message should be processed <i>once</i>, use a queue. If each
        message should fan out to <i>multiple independent reactions</i>, use pub/sub.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {PICKS.map((p) => {
          const isPubSub = p.pick.startsWith("Pub");
          const c = isPubSub ? PURPLE : SD;
          return (
            <motion.div
              key={p.task}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
                <span style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.9rem", lineHeight: 1.4 }}>{p.task}</span>
                <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: c, letterSpacing: "0.08em", padding: "3px 8px", borderRadius: 4, border: `1px solid ${c}55`, background: `${c}14`, whiteSpace: "nowrap" }}>
                  {p.pick}
                </span>
              </div>
              <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{p.reason}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L5_PubSubActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "demo", label: "Watch It Route", icon: <Radio className="w-4 h-4" />, content: <ModeDemo /> },
    { id: "real", label: "When to Use Which", icon: <Globe className="w-4 h-4" />, content: <WhenToUse /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "You add a 4th consumer to a system processing 100 msg/s. The throughput per consumer drops from ~33 to ~25. Which mode is this?",
      options: ["Pub/Sub", "Queue", "Round-robin pub/sub", "Both"],
      correctIndex: 1,
      explanation: "In a queue, total work is divided across consumers. More consumers = each does less. In pub/sub, each consumer processes ALL messages regardless of count — so adding more wouldn't lower per-consumer throughput.",
    },
    {
      question: "Order placed event triggers email-send, inventory-decrement, and fraud-check. Best model?",
      options: [
        "One queue with 3 consumers competing.",
        "Pub/Sub topic with 3 subscribers (each its own queue/consumer group).",
        "REST calls in serial.",
        "A shared database table.",
      ],
      correctIndex: 1,
      explanation: "These are three independent reactions to the same event. Pub/sub gives each a separate copy and lets them scale and fail independently. A shared queue would let them race for who handles each order.",
    },
    {
      question: "Kafka consumer groups elegantly unify both models. How?",
      options: [
        "They don't.",
        "Within a single consumer group, partitions are queued; across consumer groups, the same messages are pub/sub-broadcast.",
        "Consumer groups only do pub/sub.",
        "Consumer groups only do queue.",
      ],
      correctIndex: 1,
      explanation: "Consumers within a group share partitions (work distribution = queue). Different consumer groups read independently with their own offsets (pub/sub broadcast). Same broker, both semantics.",
    },
    {
      question: "Why is fan-out pub/sub more expensive than a queue at scale?",
      options: [
        "Pub/Sub uses more memory.",
        "Total deliveries multiply by the number of subscribers, so a 1M msg/s topic with 5 subscribers actually moves 5M msg/s of network + processing.",
        "Subscribers are slower.",
        "Brokers need extra disks.",
      ],
      correctIndex: 1,
      explanation: "Linear fan-out is the cost. A topic with N subscribers turns each message into N deliveries. Capacity planning has to account for total deliveries, not just published messages.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Pub/Sub vs Queue"
      level={5}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Common 'how would you fan-out this event' interview question"
      onQuizComplete={onQuizComplete}
    />
  );
}

