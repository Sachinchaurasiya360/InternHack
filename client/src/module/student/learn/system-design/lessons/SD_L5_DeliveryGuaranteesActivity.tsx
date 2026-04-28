import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, CheckCircle2, Globe, Send, ShieldCheck } from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";

const SD = "#84cc16";
const NEUTRAL = "#64748b";
const WARN = "#f59e0b";
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

type Mode = "at-most-once" | "at-least-once" | "exactly-once";

/* ================================================================== */
/*  TAB 1 - Definition                                                 */
/* ================================================================== */

const GUARANTEES = [
  {
    k: "at-most-once",
    color: NEUTRAL,
    short: "fire and forget",
    long: "Producer sends, doesn't retry. If the network drops the message, it's gone.",
    pro: "Lowest latency. Zero overhead.",
    con: "Data loss is acceptable.",
    ex: "Real-time metrics, ephemeral logs, fire-and-forget telemetry.",
  },
  {
    k: "at-least-once",
    color: WARN,
    short: "retry until ack",
    long: "Producer retries until the broker acks. The same message may be delivered multiple times.",
    pro: "No data loss.",
    con: "Duplicates downstream. Consumer must be idempotent or it'll act on the same fact twice.",
    ex: "Most production message systems default to this.",
  },
  {
    k: "exactly-once",
    color: SD,
    short: "no loss, no dups",
    long: "Producer + broker + consumer cooperate so each message is processed exactly once. Built on at-least-once + dedupe.",
    pro: "Cleanest semantics for the consumer.",
    con: "Higher overhead, requires idempotent producer + transactional writes.",
    ex: "Kafka with idempotent producer + transactions; Stripe charges with idempotency keys.",
  },
];

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>Three guarantees. None of them are free.</h3>
      <p style={sectionDesc}>
        When a message bus delivers a message, it makes a promise about how reliably. The three
        canonical promises trade latency for reliability. Most production systems are
        <b> at-least-once with idempotent consumers</b>, which is the practical equivalent of
        exactly-once.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
      >
        {GUARANTEES.map((g) => (
          <motion.div
            key={g.k}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
            style={{
              padding: "16px 18px",
              border: `1.5px solid ${g.color}55`,
              borderRadius: 10,
              background: `${g.color}08`,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div>
              <div style={{ fontFamily: MONO, fontSize: "0.9rem", fontWeight: 800, color: g.color, letterSpacing: "0.04em", marginBottom: 4 }}>
                {g.k}
              </div>
              <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL, fontStyle: "italic" }}>
                {g.short}
              </div>
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{g.long}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 8, borderTop: `1px dashed ${g.color}33` }}>
              <div style={{ fontSize: "0.78rem", color: "var(--eng-text)" }}>
                <span style={{ fontFamily: MONO, fontSize: "0.62rem", fontWeight: 800, color: SD, letterSpacing: "0.1em", marginRight: 6 }}>PRO</span>
                {g.pro}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--eng-text)" }}>
                <span style={{ fontFamily: MONO, fontSize: "0.62rem", fontWeight: 800, color: WARN, letterSpacing: "0.1em", marginRight: 6 }}>CON</span>
                {g.con}
              </div>
            </div>
            <div style={{ fontFamily: MONO, fontSize: "0.72rem", color: g.color }}>
              <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>EX ·</span>
              <span style={{ color: "var(--eng-text)" }}>{g.ex}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Failure-injection sandbox                                  */
/* ================================================================== */

type EventKind = "delivered" | "duplicate" | "dropped";

interface DeliveryEvent {
  id: number;
  kind: EventKind;
}

function Sandbox() {
  const [mode, setMode] = useState<Mode>("at-least-once");
  const [running, setRunning] = useState(false);
  const [events, setEvents] = useState<DeliveryEvent[]>([]);
  const [delivered, setDelivered] = useState(0);
  const [duplicates, setDuplicates] = useState(0);
  const [dropped, setDropped] = useState(0);

  const reset = () => {
    setEvents([]);
    setDelivered(0);
    setDuplicates(0);
    setDropped(0);
    setRunning(false);
  };

  const send5 = () => {
    setEvents([]);
    setDelivered(0);
    setDuplicates(0);
    setDropped(0);
    setRunning(true);

    // Scripted 5 sends with 2 induced failures
    const script: { id: number; networkDrop: boolean }[] = [
      { id: 1, networkDrop: false },
      { id: 2, networkDrop: true }, // ack drops on the way back
      { id: 3, networkDrop: false },
      { id: 4, networkDrop: true }, // ack drops
      { id: 5, networkDrop: false },
    ];

    script.forEach((step, i) => {
      setTimeout(() => {
        if (mode === "at-most-once") {
          // Producer fires, no retry; broker may or may not deliver
          const drop = step.networkDrop;
          setEvents((es) => [...es, { id: step.id, kind: drop ? "dropped" : "delivered" }]);
          if (drop) setDropped((d) => d + 1);
          else setDelivered((d) => d + 1);
        } else if (mode === "at-least-once") {
          // First attempt; if ack dropped, retry → duplicate
          setEvents((es) => [...es, { id: step.id, kind: "delivered" }]);
          setDelivered((d) => d + 1);
          if (step.networkDrop) {
            setTimeout(() => {
              setEvents((es) => [...es, { id: step.id, kind: "duplicate" }]);
              setDuplicates((d) => d + 1);
            }, 250);
          }
        } else {
          // exactly-once: idempotent producer dedupes by sequence number
          setEvents((es) => [...es, { id: step.id, kind: "delivered" }]);
          setDelivered((d) => d + 1);
          if (step.networkDrop) {
            // retry happens but is deduped by broker via producer ID + seq
            setTimeout(() => {
              setEvents((es) => [...es, { id: step.id, kind: "duplicate" }]);
              // duplicate is detected and dropped at the broker
              setTimeout(() => {
                setEvents((es) => es.filter((ev) => !(ev.id === step.id && ev.kind === "duplicate")));
              }, 600);
            }, 250);
          }
        }

        if (i === script.length - 1) {
          setTimeout(() => setRunning(false), 1200);
        }
      }, i * 700);
    });
  };

  return (
    <div>
      <h3 style={sectionTitle}>Send 5 messages. Two of them lose their ack.</h3>
      <p style={sectionDesc}>
        Pick a guarantee, hit send. The first and third sends ack cleanly; sends 2 and 4 lose
        the ack on the way back. Watch how each guarantee responds: lose the message, deliver
        twice, or detect-and-dedupe.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        {(GUARANTEES as { k: Mode; color: string }[]).map((g) => {
          const active = mode === g.k;
          return (
            <button
              key={g.k}
              type="button"
              onClick={() => { setMode(g.k); reset(); }}
              disabled={running}
              style={{
                padding: "8px 14px",
                borderRadius: 6,
                cursor: running ? "not-allowed" : "pointer",
                border: `1.5px solid ${active ? g.color : "var(--eng-border)"}`,
                background: active ? `${g.color}18` : "transparent",
                color: active ? g.color : "var(--eng-text-muted)",
                fontFamily: MONO,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                opacity: running ? 0.5 : 1,
              }}
            >
              {g.k}
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
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <Stat label="delivered" value={delivered} color={SD} />
          <Stat label="duplicates" value={duplicates} color={WARN} />
          <Stat label="dropped" value={dropped} color={PURPLE} />
        </div>

        {/* Event log */}
        <div style={{ minHeight: 240, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 8, border: "1px solid rgba(148,163,184,0.15)" }}>
          <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: NEUTRAL, letterSpacing: "0.12em", marginBottom: 8 }}>
            CONSUMER LOG
          </div>
          {events.length === 0 ? (
            <div style={{ fontFamily: MONO, fontSize: "0.78rem", color: NEUTRAL, fontStyle: "italic" }}>
              press &ldquo;send 5 messages&rdquo; to see the consumer&rsquo;s view
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <AnimatePresence>
                {events.map((e, i) => {
                  const c = e.kind === "delivered" ? SD : e.kind === "duplicate" ? WARN : PURPLE;
                  return (
                    <motion.div
                      key={`${e.id}-${i}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "60px 1fr 130px",
                        gap: 12,
                        padding: "6px 10px",
                        borderRadius: 4,
                        background: `${c}10`,
                        border: `1px solid ${c}33`,
                        fontFamily: MONO,
                        fontSize: "0.74rem",
                      }}
                    >
                      <span style={{ color: c, fontWeight: 800, letterSpacing: "0.06em" }}>MSG #{e.id}</span>
                      <span style={{ color: "#e5e7eb" }}>
                        {e.kind === "delivered" ? "→ processed" : e.kind === "duplicate" ? "↻ duplicate received" : "✕ never arrived"}
                      </span>
                      <span style={{ color: c, textAlign: "right", fontWeight: 700 }}>{e.kind}</span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={send5}
            disabled={running}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 6,
              cursor: running ? "not-allowed" : "pointer",
              border: `1.5px solid ${running ? "rgba(148,163,184,0.25)" : SD}`,
              background: running ? "transparent" : `${SD}18`,
              color: running ? NEUTRAL : SD,
              fontFamily: MONO,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: running ? 0.5 : 1,
            }}
          >
            <Send className="w-3.5 h-3.5" />
            send 5 messages
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 6,
              cursor: "pointer",
              border: "1.5px solid rgba(148,163,184,0.25)",
              background: "transparent",
              color: "#e5e7eb",
              fontFamily: MONO,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            reset
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {!running && events.length > 0 && (
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                marginTop: 14,
                padding: "12px 14px",
                background: `${SD}14`,
                border: `1.5px solid ${SD}55`,
                borderRadius: 8,
                fontSize: "0.86rem",
                color: "#e5e7eb",
                lineHeight: 1.55,
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
              }}
            >
              {mode === "exactly-once" ? (
                <CheckCircle2 className="w-5 h-5" style={{ color: SD, flexShrink: 0, marginTop: 2 }} />
              ) : (
                <ShieldCheck className="w-5 h-5" style={{ color: WARN, flexShrink: 0, marginTop: 2 }} />
              )}
              <div>
                <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em" }}>
                  RESULT
                </span>
                <div style={{ marginTop: 4 }}>
                  {mode === "at-most-once" && `${dropped} messages were silently lost. The consumer never saw them.`}
                  {mode === "at-least-once" && `Every message arrived, but ${duplicates} were delivered twice. The consumer must dedupe (e.g., by message ID).`}
                  {mode === "exactly-once" && "Idempotent producer detected the retry attempts and the broker dropped the duplicates. Consumer saw each message exactly once."}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <motion.div
      animate={{ borderColor: `${color}55` }}
      style={{
        padding: "10px 12px",
        borderRadius: 8,
        border: `1.5px solid`,
        background: `${color}10`,
        textAlign: "center",
      }}
    >
      <div style={{ fontFamily: MONO, fontSize: "0.66rem", color, letterSpacing: "0.1em", marginBottom: 4 }}>
        {label.toUpperCase()}
      </div>
      <div style={{ fontFamily: MONO, fontSize: "1.4rem", fontWeight: 800, color: "var(--eng-text)" }}>
        {value}
      </div>
    </motion.div>
  );
}

/* ================================================================== */
/*  TAB 3 - How exactly-once is actually built                         */
/* ================================================================== */

const HOW_EO = [
  {
    title: "Idempotent producer",
    body: "Each producer gets a unique ID. Each message gets a per-partition sequence number. The broker rejects duplicates by (producer-id, seq).",
    where: "Kafka enable.idempotence=true (default in 3.x). Effectively dedupes producer retries.",
  },
  {
    title: "Transactional writes",
    body: "Multiple writes (across partitions) committed atomically. Consumer either sees all of them or none.",
    where: "Kafka transactions (begin → write → write → commit). Used for stream processing read-process-write loops.",
  },
  {
    title: "Idempotent consumer",
    body: "Consumer dedupes by message ID or sequence in its own state store, OR by writing in the same transaction as it acks the input.",
    where: "Kafka Streams handles this via 'exactly-once.v2' processing guarantee. Hand-rolled consumers store the message ID + result.",
  },
];

function HowExactlyOnce() {
  return (
    <div>
      <h3 style={sectionTitle}>Exactly-once isn&rsquo;t magic. It&rsquo;s three boring layers.</h3>
      <p style={sectionDesc}>
        At-least-once + dedupe = exactly-once in practice. You need cooperation from producer,
        broker, and consumer. Skip any of the three layers and you&rsquo;re back to at-least-once.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 gap-3"
      >
        {HOW_EO.map((h, i) => (
          <motion.div
            key={h.title}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
            }}
            style={{
              padding: "16px 18px",
              border: "1px solid var(--eng-border)",
              borderRadius: 10,
              display: "grid",
              gridTemplateColumns: "60px 1fr",
              gap: 16,
            }}
          >
            <div style={{ width: 48, height: 48, borderRadius: 10, background: `${SD}18`, border: `1.5px solid ${SD}55`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MONO, fontSize: "1.2rem", fontWeight: 800, color: SD }}>
              {i + 1}
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.95rem", marginBottom: 6 }}>{h.title}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--eng-text-muted)", lineHeight: 1.55, marginBottom: 8 }}>{h.body}</div>
              <div style={{ fontFamily: MONO, fontSize: "0.74rem", color: SD }}>
                <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>EX ·</span>
                <span style={{ color: "var(--eng-text)" }}>{h.where}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L5_DeliveryGuaranteesActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "demo", label: "Inject Failures", icon: <Send className="w-4 h-4" />, content: <Sandbox /> },
    { id: "how", label: "How EO Works", icon: <Globe className="w-4 h-4" />, content: <HowExactlyOnce /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Why does at-least-once produce duplicates?",
      options: [
        "The producer is buggy.",
        "When the producer doesn't receive an ack, it retries — but the broker may have already received and processed the original.",
        "Brokers always duplicate.",
        "Consumers run twice.",
      ],
      correctIndex: 1,
      explanation: "The producer can't tell the difference between a lost request and a lost ack. To not lose data, it must retry on missing ack. Sometimes the original made it but the ack was dropped — duplicate is the safe outcome.",
    },
    {
      question: "A team says 'we have exactly-once delivery'. What's almost always actually going on under the hood?",
      options: [
        "The broker dedupes magically.",
        "At-least-once delivery + idempotent processing in the consumer (or transactional writes).",
        "Network never drops anything.",
        "Custom hardware.",
      ],
      correctIndex: 1,
      explanation: "Pure exactly-once-on-the-wire is impossible (Two Generals Problem). What people mean is that the EFFECT of each message is applied exactly once — the consumer dedupes or the system uses transactions.",
    },
    {
      question: "Telemetry from a mobile app needs lowest latency, can tolerate some loss. Which guarantee?",
      options: ["at-most-once", "at-least-once", "exactly-once", "doesn't matter"],
      correctIndex: 0,
      explanation: "Telemetry that loses a metric tick is fine. The lower latency and zero retry overhead of at-most-once fits the workload. Exactly-once would be wasted complexity.",
    },
    {
      question: "Kafka's exactly-once requires both 'idempotent producer' AND 'transactions'. Why isn't idempotent producer enough?",
      options: [
        "Idempotent producer dedupes within one partition. Transactions extend that to multi-partition writes plus consumer offset commits, so a stream-processing read-process-write loop is atomic.",
        "Transactions speed it up.",
        "Idempotent producer is older.",
        "It's a marketing requirement.",
      ],
      correctIndex: 0,
      explanation: "Idempotent producer alone solves single-partition dedup. Real exactly-once stream processing reads from input, processes, writes to output, AND commits the input offset — all atomically. That requires transactions.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Delivery Guarantees"
      level={5}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The reliability discussion in every messaging-system design"
      onQuizComplete={onQuizComplete}
    />
  );
}
