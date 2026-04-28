import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Boxes, Globe, Pause, Play, RotateCcw, Send } from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";

const SD = "#84cc16";
const NEUTRAL = "#64748b";
const WARN = "#f59e0b";
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
      <h3 style={sectionTitle}>A buffer between fast producers and slow consumers</h3>
      <p style={sectionDesc}>
        A message queue stores messages from producers until consumers process them. It
        decouples timing: producers can fire and forget, consumers pull at their own pace, and
        the queue absorbs bursts. Three guarantees come for free: <b>durability</b>{" "}
        (messages survive crashes), <b>order</b> (within a partition), and <b>backpressure</b>{" "}
        (slow consumers don&rsquo;t crash producers).
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
      >
        {[
          { k: "Producer", v: "Sends messages. Doesn't wait for the consumer. Doesn't even know who the consumer is." },
          { k: "Broker", v: "Stores messages durably (often disk + replication). Tracks who's read what. Handles delivery." },
          { k: "Consumer", v: "Pulls messages, processes them, acks. If it crashes mid-process, the broker re-delivers." },
        ].map((c) => (
          <motion.div
            key={c.k}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
            }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
              {c.k.toUpperCase()}
            </div>
            <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.55 }}>{c.v}</div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>RabbitMQ</b> for classic AMQP queues. <b>SQS</b> as a managed AWS queue. <b>Kafka</b>{" "}
          for high-throughput partitioned logs (technically a log, behaves like a queue per
          partition). <b>NATS</b> for lightweight pub/sub. Inside a Swiggy delivery flow:
          order placed → queued → picked by a kitchen worker → moved through stations → finally
          dispatched. Each transition is a queue.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Live queue animation                                       */
/* ================================================================== */

interface Msg {
  id: number;
  state: "in-queue" | "processing" | "done";
}

const QUEUE_CAPACITY = 12;

function QueueDemo() {
  const [producerRate, setProducerRate] = useState(2); // msgs per second
  const [consumerRate, setConsumerRate] = useState(1.5);
  const [running, setRunning] = useState(true);
  const [queue, setQueue] = useState<Msg[]>([]);
  const [processed, setProcessed] = useState(0);
  const [dropped, setDropped] = useState(0);
  const idRef = useRef(0);

  useEffect(() => {
    if (!running) return;
    const producerHandle = setInterval(() => {
      setQueue((q) => {
        if (q.length >= QUEUE_CAPACITY) {
          setDropped((d) => d + 1);
          return q;
        }
        const id = ++idRef.current;
        return [...q, { id, state: "in-queue" }];
      });
    }, 1000 / producerRate);

    const consumerHandle = setInterval(() => {
      setQueue((q) => {
        if (q.length === 0) return q;
        const [head, ...rest] = q;
        if (head.state === "in-queue") {
          // start processing
          return [{ ...head, state: "processing" }, ...rest];
        }
        if (head.state === "processing") {
          // finish processing
          setProcessed((p) => p + 1);
          return rest;
        }
        return q;
      });
    }, 500 / consumerRate);

    return () => {
      clearInterval(producerHandle);
      clearInterval(consumerHandle);
    };
  }, [running, producerRate, consumerRate]);

  const reset = () => {
    setQueue([]);
    setProcessed(0);
    setDropped(0);
    idRef.current = 0;
  };

  const fillPct = (queue.length / QUEUE_CAPACITY) * 100;
  const isFull = queue.length === QUEUE_CAPACITY;

  return (
    <div>
      <h3 style={sectionTitle}>Speed up the producer. Watch the queue fill.</h3>
      <p style={sectionDesc}>
        Drag the rates. When producer &gt; consumer, the queue grows. At capacity, new messages
        are dropped (or trigger backpressure to the producer in real systems). When consumer ≥
        producer, the queue stays drained.
      </p>

      <div
        style={{
          background: "#0b1220",
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.15)",
          padding: 22,
        }}
      >
        {/* Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Slider label="Producer rate (msg/s)" value={producerRate} setValue={setProducerRate} max={6} />
          <Slider label="Consumer rate (msg/s)" value={consumerRate} setValue={setConsumerRate} max={6} />
        </div>

        {/* Pipeline visualization */}
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 120px", gap: 12, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "12px 8px", border: `1.5px solid ${SD}`, borderRadius: 8, background: `${SD}10` }}>
            <Send className="w-5 h-5" style={{ color: SD }} />
            <span style={{ fontFamily: MONO, fontSize: "0.74rem", fontWeight: 700, color: "#e5e7eb" }}>Producer</span>
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", color: SD }}>{producerRate.toFixed(1)} msg/s</span>
          </div>

          {/* Queue: visual cells */}
          <div style={{ position: "relative" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: `repeat(${QUEUE_CAPACITY}, 1fr)`,
              gap: 4,
              padding: 8,
              borderRadius: 8,
              background: "rgba(15,23,42,0.6)",
              border: `1.5px solid ${isFull ? WARN : "rgba(148,163,184,0.25)"}`,
            }}>
              {Array.from({ length: QUEUE_CAPACITY }).map((_, i) => {
                const msg = queue[i];
                const isFilled = !!msg;
                const isProcessing = msg?.state === "processing";
                return (
                  <motion.div
                    key={i}
                    animate={{
                      backgroundColor: isProcessing ? `${WARN}33` : isFilled ? `${SD}33` : "rgba(148,163,184,0.08)",
                      borderColor: isProcessing ? WARN : isFilled ? SD : "rgba(148,163,184,0.15)",
                    }}
                    transition={{ duration: 0.25 }}
                    style={{
                      height: 32,
                      borderRadius: 4,
                      border: "1px solid",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: MONO,
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      color: isProcessing ? WARN : isFilled ? SD : NEUTRAL,
                    }}
                  >
                    {isFilled ? `#${msg.id}` : ""}
                  </motion.div>
                );
              })}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontFamily: MONO, fontSize: "0.66rem", color: NEUTRAL }}>
              <span>queue depth: <span style={{ color: isFull ? WARN : SD, fontWeight: 700 }}>{queue.length}</span> / {QUEUE_CAPACITY}</span>
              <span>{fillPct.toFixed(0)}% full</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "12px 8px", border: `1.5px solid ${WARN}`, borderRadius: 8, background: `${WARN}10` }}>
            <Boxes className="w-5 h-5" style={{ color: WARN }} />
            <span style={{ fontFamily: MONO, fontSize: "0.74rem", fontWeight: 700, color: "#e5e7eb" }}>Consumer</span>
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", color: WARN }}>{consumerRate.toFixed(1)} msg/s</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mt-5">
          <Stat label="processed" value={processed} color={SD} />
          <Stat label="in queue" value={queue.length} color={isFull ? WARN : SD} />
          <Stat label="dropped" value={dropped} color={dropped > 0 ? WARN : NEUTRAL} />
        </div>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setRunning((r) => !r)}
            style={btn(SD, false)}
          >
            {running ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {running ? "pause" : "resume"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL, false)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {(isFull || dropped > 0) && (
            <motion.div
              key="warn"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                marginTop: 14,
                padding: "12px 14px",
                background: `${WARN}14`,
                border: `1.5px solid ${WARN}55`,
                borderRadius: 8,
                fontSize: "0.86rem",
                color: "#e5e7eb",
                lineHeight: 1.55,
              }}
            >
              <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: WARN, letterSpacing: "0.12em", marginRight: 8 }}>
                BACKPRESSURE
              </span>
              The queue is at capacity and dropping {dropped} messages. In production this signal
              propagates back to the producer (HTTP 503, broker NACK, slow ack) so it stops or
              throttles instead of overwhelming the buffer.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Slider({ label, value, setValue, max }: { label: string; value: number; setValue: (v: number) => void; max: number }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700, color: "#e5e7eb" }}>{label}</span>
        <span style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 800, color: SD }}>= {value.toFixed(1)}</span>
      </div>
      <input
        type="range"
        min={0.5}
        max={max}
        step={0.5}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{
          width: "100%",
          accentColor: SD,
        }}
      />
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <motion.div
      animate={{ borderColor: color }}
      transition={{ duration: 0.2 }}
      style={{
        padding: "10px 12px",
        borderRadius: 8,
        border: `1.5px solid ${color}55`,
        background: `${color}10`,
        textAlign: "center",
      }}
    >
      <div style={{ fontFamily: MONO, fontSize: "0.66rem", color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
        {label}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          style={{ fontFamily: MONO, fontSize: "1.4rem", fontWeight: 800, color: "var(--eng-text)" }}
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function btn(color: string, disabled: boolean): CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 14px",
    borderRadius: 6,
    cursor: disabled ? "not-allowed" : "pointer",
    border: `1.5px solid ${color}`,
    background: `${color}18`,
    color,
    fontFamily: MONO,
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    opacity: disabled ? 0.5 : 1,
  };
}

/* ================================================================== */
/*  TAB 3 - When and where                                             */
/* ================================================================== */

const USE_CASES = [
  { who: "Order checkout (Flipkart)", why: "Place order → queue → fulfillment workers pick up. Spike-friendly, retries free.", ex: "SQS, Kafka" },
  { who: "Email sending (any SaaS)", why: "User clicks signup → enqueue welcome email. Don't make the user wait for SMTP.", ex: "RabbitMQ, SES" },
  { who: "Video transcoding (YouTube)", why: "Upload completes → job queued → worker fleet processes. Scales independently of upload traffic.", ex: "Kafka, internal queues" },
  { who: "Audit log (banks)", why: "Every transaction emits an event. Consumers index, alert, archive. Producer never blocks.", ex: "Kafka with retention" },
  { who: "Push notifications (Whatsapp)", why: "Single send → fan-out to many devices. Queue smooths the burst.", ex: "FCM, custom brokers" },
  { who: "Mobile sync queues", why: "Phone offline → buffer locally → drain to server when reconnected.", ex: "On-device SQLite + retry queue" },
];

function UseCases() {
  return (
    <div>
      <h3 style={sectionTitle}>Where queues actually live in real systems</h3>
      <p style={sectionDesc}>
        Anywhere that has a fast event source and slower-than-real-time work to do. The queue is
        the seam between them.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {USE_CASES.map((u) => (
          <motion.div
            key={u.who}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
            }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              padding: "14px 16px",
              border: "1px solid var(--eng-border)",
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <span style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.9rem" }}>{u.who}</span>
              <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.08em", padding: "3px 8px", borderRadius: 4, border: `1px solid ${SD}55`, background: `${SD}14` }}>
                {u.ex}
              </span>
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{u.why}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L5_MessageQueuesActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "demo", label: "Live Queue", icon: <Boxes className="w-4 h-4" />, content: <QueueDemo /> },
    { id: "real", label: "Real Use Cases", icon: <Globe className="w-4 h-4" />, content: <UseCases /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Producer rate is 1000 msg/s. Consumer rate is 200 msg/s. The queue can hold 60s of buffered work. After how many seconds does the system start dropping (or applying backpressure)?",
      options: ["Immediately", "About 75s — buffer fills at 800 msg/s net", "30s", "10 min"],
      correctIndex: 1,
      explanation: "Net inflow = 800 msg/s. Capacity = 60s × 1000 = 60,000 msg. Time to fill = 60,000 / 800 = 75s. After that, the broker either drops, returns 503, or signals the producer to slow down.",
    },
    {
      question: "What's the cleanest way for a queue to handle a permanent slowdown of the consumer?",
      options: [
        "Drop messages silently.",
        "Apply backpressure to the producer (HTTP 503, slow ack) so it slows down or sheds load.",
        "Crash the broker.",
        "Send everything to a single consumer.",
      ],
      correctIndex: 1,
      explanation: "Backpressure is the signal that the downstream can't keep up. Producers either retry with backoff, queue locally, or shed load. Silent drops cause data loss and lost trust.",
    },
    {
      question: "Why does an email-sending pipeline use a queue between 'user clicks signup' and 'SMTP send'?",
      options: [
        "SMTP requires queues by spec.",
        "SMTP is slow and unreliable; doing it inline blocks the signup response. The queue lets the API return instantly and retry on failure.",
        "Queues compress emails.",
        "Email cannot be sent without a queue.",
      ],
      correctIndex: 1,
      explanation: "The queue decouples user-facing latency from the SMTP operation. The HTTP signup returns in milliseconds; email send happens later, with built-in retries on transient failures.",
    },
    {
      question: "RabbitMQ guarantees order WITHIN which boundary?",
      options: ["The whole cluster", "A single queue (or partition)", "Across all consumers", "Across all producers"],
      correctIndex: 1,
      explanation: "Total cluster-wide ordering is not provided. Within a single queue (and a single consumer reading sequentially), messages are ordered. Kafka similarly orders within a partition, not across partitions.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Message Queues 101"
      level={5}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Standard 'how do you decouple X from Y' answer in any HLD round"
      onQuizComplete={onQuizComplete}
    />
  );
}
