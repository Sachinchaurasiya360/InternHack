import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Globe, Layers, Pause, Play, RewindIcon, RotateCcw } from "lucide-react";
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
      <h3 style={sectionTitle}>A queue that doesn&rsquo;t throw messages away</h3>
      <p style={sectionDesc}>
        Kafka is an <b>append-only log</b>: producers write to the end, consumers read from any
        offset. Messages aren&rsquo;t deleted on consumption — they sit on disk for a configurable
        retention period (hours, days, forever). Each consumer tracks its own offset.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {[
          { k: "Topic", v: "A named stream (orders, page-views). Logically infinite, append-only." },
          { k: "Partition", v: "A topic is split into N partitions. Each partition is its own log. Order is guaranteed within a partition, not across." },
          { k: "Offset", v: "Position in a partition. Consumers track this; the broker doesn't manage it for them." },
        ].map((c, i) => (
          <motion.div
            key={c.k}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
              {c.k.toUpperCase()}
            </div>
            <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.55 }}>{c.v}</div>
          </motion.div>
        ))}
      </div>

      <div style={{ padding: "16px 18px", borderRadius: 10, border: `1.5px solid ${SD}55`, background: `${SD}10`, marginBottom: 16 }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 8 }}>
          THE BIG IDEA
        </div>
        <div style={{ fontSize: "0.92rem", color: "var(--eng-text)", lineHeight: 1.65 }}>
          Because messages aren&rsquo;t consumed-and-destroyed, Kafka is both a queue AND a database
          of recent history. Replay a buggy consumer from yesterday&rsquo;s offset. Add a brand-new
          analytics service that reads the last 7 days. Two consumer groups read in parallel
          without affecting each other.
        </div>
      </div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>LinkedIn</b> built it; runs trillions of messages/day. <b>Uber</b> uses it for trip
          events, surge pricing, fraud. <b>Netflix</b> for clickstream and metrics. <b>Confluent</b>{" "}
          is the managed offering. Open-source equivalents: <b>Redpanda</b>, <b>Pulsar</b>{" "}
          (slightly different model). The pattern is the standard log-based-streaming
          interview answer.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Animated partitioned log + 2 consumer groups               */
/* ================================================================== */

const TOPIC_LEN = 16;

interface LogMsg {
  offset: number;
  payload: string;
}

function PartitionedLog() {
  const [log, setLog] = useState<LogMsg[]>([]);
  const [groupA, setGroupA] = useState(0);
  const [groupB, setGroupB] = useState(0);
  const [running, setRunning] = useState(true);
  const idRef = useRef(0);

  // Append messages on a tick
  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      setLog((l) => {
        const offset = idRef.current++;
        const next = [...l, { offset, payload: payloadFor(offset) }];
        if (next.length > TOPIC_LEN) return next.slice(next.length - TOPIC_LEN);
        return next;
      });
    }, 1300);
    return () => clearInterval(handle);
  }, [running]);

  // Group A consumes faster than B
  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      const head = log.length > 0 ? log[log.length - 1].offset : -1;
      setGroupA((g) => (g <= head ? g + 1 : g));
    }, 1100);
    return () => clearInterval(handle);
  }, [running, log]);

  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      const head = log.length > 0 ? log[log.length - 1].offset : -1;
      setGroupB((g) => (g <= head ? g + 1 : g));
    }, 1900);
    return () => clearInterval(handle);
  }, [running, log]);

  const reset = () => {
    setLog([]);
    setGroupA(0);
    setGroupB(0);
    idRef.current = 0;
  };

  const rewindA = () => setGroupA(Math.max(0, groupA - 5));
  const rewindB = () => setGroupB(Math.max(0, groupB - 5));

  const minOffset = log.length ? log[0].offset : 0;
  const maxOffset = log.length ? log[log.length - 1].offset : 0;

  return (
    <div>
      <h3 style={sectionTitle}>One log. Two consumer groups. Independent offsets.</h3>
      <p style={sectionDesc}>
        Producers append to the end of the partition. Consumer Group A reads fast (1.1s/msg).
        Consumer Group B reads slowly (1.9s/msg). Both see every message; neither blocks the
        other. Rewind either to replay history.
      </p>

      <div
        style={{
          background: "#0b1220",
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.15)",
          padding: 22,
        }}
      >
        {/* Log */}
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: NEUTRAL, letterSpacing: "0.12em", marginBottom: 8 }}>
          PARTITION 0 · TOPIC: orders
        </div>
        <div style={{ display: "flex", gap: 4, overflowX: "auto", paddingBottom: 12, paddingTop: 12, position: "relative" }}>
          <AnimatePresence initial={false}>
            {log.map((m) => {
              const visited = m.offset < groupA || m.offset < groupB;
              const isHead = m.offset === maxOffset;
              return (
                <motion.div
                  key={m.offset}
                  layout
                  initial={{ opacity: 0, x: 20, scale: 0.85 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  style={{
                    flexShrink: 0,
                    width: 64,
                    padding: "8px 4px",
                    borderRadius: 6,
                    border: `1.5px solid ${isHead ? SD : visited ? `${SD}55` : "rgba(148,163,184,0.3)"}`,
                    background: isHead ? `${SD}33` : visited ? `${SD}10` : "rgba(15,23,42,0.6)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontFamily: MONO, fontSize: "0.62rem", color: NEUTRAL, letterSpacing: "0.08em" }}>
                    #{m.offset}
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: "0.7rem", fontWeight: 700, color: "#e5e7eb", marginTop: 2 }}>
                    {m.payload}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Cursors */}
        <div style={{ position: "relative", height: 60, marginTop: 4 }}>
          <CursorRail color={SD} label="Group A · email-service" offset={groupA} min={minOffset} max={maxOffset} top={0} />
          <CursorRail color={PURPLE} label="Group B · analytics" offset={groupB} min={minOffset} max={maxOffset} top={28} />
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setRunning((r) => !r)} style={btn(SD)}>
            {running ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {running ? "pause" : "resume"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={rewindA} style={btn(SD)}>
            <RewindIcon className="w-3.5 h-3.5" />
            rewind A
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={rewindB} style={btn(PURPLE)}>
            <RewindIcon className="w-3.5 h-3.5" />
            rewind B
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
            head: <span style={{ color: SD, fontWeight: 700 }}>{maxOffset}</span>
            {" · "}
            A lag: <span style={{ color: SD, fontWeight: 700 }}>{Math.max(0, maxOffset - groupA + 1)}</span>
            {" · "}
            B lag: <span style={{ color: PURPLE, fontWeight: 700 }}>{Math.max(0, maxOffset - groupB + 1)}</span>
          </span>
        </div>

        <div style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}>
          <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
            KEY INSIGHT
          </span>
          The log is the source of truth. Consumers are stateless — their progress IS the
          offset. Crash a consumer, restart it from its last committed offset; nothing lost. New
          consumer joins? Start it from offset 0 to backfill, or from latest to skip history.
        </div>
      </div>
    </div>
  );
}

function CursorRail({ color, label, offset, min, max, top }: { color: string; label: string; offset: number; min: number; max: number; top: number }) {
  const range = Math.max(1, max - min + 1);
  const pct = ((offset - min) / range) * 100;
  return (
    <div style={{ position: "absolute", top, left: 0, right: 0, height: 24 }}>
      <div style={{ position: "absolute", top: 8, left: 0, right: 0, height: 2, background: `${color}33` }} />
      <motion.div
        animate={{ left: `${Math.min(100, Math.max(0, pct))}%` }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        style={{
          position: "absolute",
          top: 0,
          width: 2,
          height: 24,
          background: color,
          transformOrigin: "center",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: -2,
            left: -2,
            width: 6,
            height: 6,
            borderRadius: 999,
            background: color,
          }}
        />
        <span
          style={{
            position: "absolute",
            top: -22,
            left: 8,
            fontFamily: MONO,
            fontSize: "0.66rem",
            fontWeight: 700,
            color,
            whiteSpace: "nowrap",
          }}
        >
          {label} · #{offset}
        </span>
      </motion.div>
    </div>
  );
}

function payloadFor(o: number): string {
  const verbs = ["place", "ship", "pay", "view", "click"];
  return `${verbs[o % verbs.length]}-${(o * 7) % 1000}`;
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
/*  TAB 3 - Where Kafka shines vs alternatives                         */
/* ================================================================== */

const COMP = [
  {
    k: "Kafka",
    storage: "Disk · long retention",
    delivery: "At-least-once (or exactly-once with txns)",
    fit: "Event sourcing, analytics pipelines, anything where replay is valuable",
  },
  {
    k: "RabbitMQ",
    storage: "Memory + disk · short-lived",
    delivery: "At-least-once with manual acks",
    fit: "Classic work queue, request routing, RPC over messages",
  },
  {
    k: "SQS",
    storage: "Managed · 14-day max",
    delivery: "At-least-once, FIFO option",
    fit: "AWS-native serverless workloads, simple queue needs",
  },
  {
    k: "Redis Streams",
    storage: "Memory (with persistence)",
    delivery: "At-least-once with consumer groups",
    fit: "Low-latency in-process streaming, real-time dashboards",
  },
];

function Compare() {
  return (
    <div>
      <h3 style={sectionTitle}>Kafka vs the alternatives</h3>
      <p style={sectionDesc}>
        Kafka isn&rsquo;t always the right answer. Here&rsquo;s how it stacks up against the queues you&rsquo;ll
        also see in production.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {COMP.map((c) => {
          const isKafka = c.k === "Kafka";
          const color = isKafka ? SD : NEUTRAL;
          return (
            <motion.div
              key={c.k}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              style={{
                padding: "16px 18px",
                border: `1.5px solid ${color}55`,
                borderRadius: 10,
                background: `${color}08`,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ fontWeight: 800, color: "var(--eng-text)", fontSize: "1.05rem" }}>{c.k}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <Row label="storage" value={c.storage} color={color} />
                <Row label="delivery" value={c.delivery} color={color} />
                <Row label="best fit" value={c.fit} color={color} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

function Row({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 8, alignItems: "baseline" }}>
      <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {label}
      </span>
      <span style={{ fontSize: "0.84rem", color: "var(--eng-text)", lineHeight: 1.5 }}>{value}</span>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L5_KafkaActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "log", label: "Log + Offsets", icon: <Layers className="w-4 h-4" />, content: <PartitionedLog /> },
    { id: "compare", label: "vs Alternatives", icon: <Globe className="w-4 h-4" />, content: <Compare /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "A consumer crashed for 4 hours. When it restarts, what does it process?",
      options: [
        "Nothing — those messages are gone.",
        "All the messages from its last committed offset onwards (assuming retention covers 4h).",
        "Only the latest message.",
        "It must request a re-send from the producer.",
      ],
      correctIndex: 1,
      explanation: "Kafka's killer feature. Messages persist on disk regardless of consumption. The consumer's offset is its bookmark. Restart from there and you'll catch up.",
    },
    {
      question: "You add an analytics consumer that needs to count orders for the last 7 days. What's the cleanest approach?",
      options: [
        "Replay the order topic from offset 0 (or the timestamp of 7 days ago).",
        "Build a separate batch pipeline.",
        "Read the database directly.",
        "Email the data team.",
      ],
      correctIndex: 0,
      explanation: "Kafka's retention IS the historical record. Your new consumer subscribes to the topic, seeks to the timestamp 7 days ago, and processes everything since. Zero impact on existing consumers.",
    },
    {
      question: "Why is order guaranteed within a partition but NOT across partitions?",
      options: [
        "Random.",
        "Each partition is its own log on its own broker. Cross-partition order would require cross-broker coordination, defeating the parallelism.",
        "Kafka has a bug.",
        "It depends on the OS.",
      ],
      correctIndex: 1,
      explanation: "Partitions are independent for parallelism. Within one partition, append order is enforced. Across partitions you'd need a global sequencer, which would serialize all writes — exactly what Kafka avoids.",
    },
    {
      question: "Two consumers in the SAME consumer group. The topic has 4 partitions. How does Kafka assign work?",
      options: [
        "Each consumer reads all 4 partitions.",
        "Each consumer reads 2 partitions; partitions are split across consumers within a group.",
        "Both consumers compete for every message.",
        "They take turns.",
      ],
      correctIndex: 1,
      explanation: "Within a consumer group, partitions are distributed across consumers (work distribution). Two consumers + four partitions = each handles two. Across groups, both groups see every message (pub/sub).",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Kafka Partitioned Log"
      level={5}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The streaming-system answer in any data-platform interview"
      onQuizComplete={onQuizComplete}
    />
  );
}

