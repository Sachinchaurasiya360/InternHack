import { useEffect, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { BookOpen, Database, Globe, Pause, Play, RotateCcw } from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";

const SD = "#84cc16";
const NEUTRAL = "#64748b";
const WARN = "#f59e0b";
const PURPLE = "#8b5cf6";
const MONO = '"JetBrains Mono", Menlo, Consolas, monospace';

const sectionTitle: CSSProperties = {
  fontFamily: "var(--eng-font)", fontWeight: 700, fontSize: "1.15rem",
  color: "var(--eng-text)", margin: "0 0 12px",
};
const sectionDesc: CSSProperties = {
  fontFamily: "var(--eng-font)", fontSize: "0.92rem",
  color: "var(--eng-text-muted)", margin: "0 0 20px", lineHeight: 1.65,
};

/* ================================================================== */
/*  TAB 1 - Definition                                                 */
/* ================================================================== */

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>Stream every database change to anyone who wants it</h3>
      <p style={sectionDesc}>
        <b>Change Data Capture (CDC)</b> tails your database&rsquo;s write-ahead log and emits each
        committed change as an event. Downstream consumers (search index, cache, analytics
        warehouse) subscribe to those events and stay in sync — without your application code
        ever knowing they exist.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
      >
        {[
          { k: "Capture", v: "A connector reads the DB's WAL / binlog. Postgres logical replication, MySQL binlog, MongoDB oplog. No app code changes." },
          { k: "Transform", v: "Convert raw row events into domain events. Filter, enrich, denormalize. Often a Kafka Streams or Flink job." },
          { k: "Apply", v: "Downstream consumers index into Elasticsearch, refill caches, write to a data warehouse, fire alerts." },
        ].map((c) => (
          <motion.div
            key={c.k}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
              {c.k.toUpperCase()}
            </div>
            <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.55 }}>{c.v}</div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ padding: "16px 18px", borderRadius: 10, border: `1.5px solid ${SD}55`, background: `${SD}10`, marginBottom: 16 }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 8 }}>
          WHY NOT JUST DUAL-WRITE?
        </div>
        <div style={{ fontSize: "0.92rem", color: "var(--eng-text)", lineHeight: 1.65 }}>
          Tempting solution: when the app writes to the DB, also write to the search index. The
          problem: <b>two writes to two systems can&rsquo;t be atomic without a distributed
          transaction</b>. Crash between them and the systems silently diverge. CDC fixes this by
          treating the DB&rsquo;s log as the source of truth — replays guarantee eventual
          convergence.
        </div>
      </div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>Debezium</b> is the canonical open-source CDC connector — taps Postgres / MySQL /
          MongoDB / SQL Server WAL and pushes to Kafka. <b>AWS DMS</b> for cross-cloud
          replication. <b>Fivetran / Airbyte</b> for managed CDC into warehouses. <b>Linkedin</b>{" "}
          built Kafka partly for this. Every &ldquo;the search index is X seconds behind the
          database&rdquo; quote is a CDC pipeline lag.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Animated pipeline                                          */
/* ================================================================== */

interface ChangeEvent { id: number; row: string; tDb: number; tCdc: number | null; tTopic: number | null; tIndex: number | null; tClient: number | null; }

function CDCDemo() {
  const [events, setEvents] = useState<ChangeEvent[]>([]);
  const [tNow, setTNow] = useState(0);
  const [running, setRunning] = useState(true);
  const [idCounter, setIdCounter] = useState(0);

  // Lag profile (ms) per hop
  const LAG_CDC = 60;
  const LAG_KAFKA = 80;
  const LAG_INDEX = 240;
  const LAG_CLIENT = 120;

  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      setTNow((t) => t + 80);
    }, 80);
    return () => clearInterval(handle);
  }, [running]);

  // emit a write every ~1500ms
  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      setIdCounter((id) => {
        const newId = id + 1;
        setEvents((es) => {
          const newEvent: ChangeEvent = {
            id: newId,
            row: `users[${100 + newId}]`,
            tDb: tNow,
            tCdc: null,
            tTopic: null,
            tIndex: null,
            tClient: null,
          };
          // Schedule the propagation
          setTimeout(() => setEvents((qs) => qs.map((q) => (q.id === newId ? { ...q, tCdc: tNow + LAG_CDC } : q))), LAG_CDC);
          setTimeout(() => setEvents((qs) => qs.map((q) => (q.id === newId ? { ...q, tTopic: tNow + LAG_CDC + LAG_KAFKA } : q))), LAG_CDC + LAG_KAFKA);
          setTimeout(() => setEvents((qs) => qs.map((q) => (q.id === newId ? { ...q, tIndex: tNow + LAG_CDC + LAG_KAFKA + LAG_INDEX } : q))), LAG_CDC + LAG_KAFKA + LAG_INDEX);
          setTimeout(() => setEvents((qs) => qs.map((q) => (q.id === newId ? { ...q, tClient: tNow + LAG_CDC + LAG_KAFKA + LAG_INDEX + LAG_CLIENT } : q))), LAG_CDC + LAG_KAFKA + LAG_INDEX + LAG_CLIENT);
          // Limit kept events
          const limited = [...es, newEvent];
          return limited.length > 5 ? limited.slice(limited.length - 5) : limited;
        });
        return newId;
      });
    }, 1500);
    return () => clearInterval(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, tNow]);

  const reset = () => {
    setEvents([]);
    setTNow(0);
    setIdCounter(0);
    setRunning(true);
  };

  const stages = [
    { key: "tDb", label: "DB Write", x: 60, color: SD },
    { key: "tCdc", label: "CDC Connector", x: 220, color: PURPLE },
    { key: "tTopic", label: "Kafka Topic", x: 380, color: WARN },
    { key: "tIndex", label: "Search Index", x: 540, color: SD },
    { key: "tClient", label: "Client", x: 680, color: SD },
  ] as const;

  return (
    <div>
      <h3 style={sectionTitle}>One write becomes five hops</h3>
      <p style={sectionDesc}>
        Every 1.5s a row is written to the database. The change ripples through the CDC
        connector, Kafka, the search index, and finally the client&rsquo;s browser. Each hop adds
        latency — that aggregate is the propagation lag your users actually see.
      </p>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22 }}>
        <svg viewBox="0 0 720 280" width="100%" style={{ maxWidth: 760, display: "block", margin: "0 auto" }}>
          {/* Stage boxes + labels */}
          {stages.map((s) => (
            <g key={s.key} transform={`translate(${s.x}, 110)`}>
              <rect width={120} height={60} rx={8} fill={`${s.color}22`} stroke={s.color} strokeWidth={1.5} />
              <text x={60} y={28} textAnchor="middle" fill="#e5e7eb" fontSize={12} fontWeight={700} fontFamily={MONO}>
                {s.label}
              </text>
              <text x={60} y={44} textAnchor="middle" fill={s.color} fontSize={10} fontFamily={MONO}>
                stage
              </text>
            </g>
          ))}

          {/* edges */}
          {stages.slice(0, -1).map((s, i) => {
            const next = stages[i + 1];
            return <line key={i} x1={s.x + 120} y1={140} x2={next.x} y2={140} stroke={NEUTRAL} strokeWidth={1.5} strokeDasharray="3 4" />;
          })}

          {/* Animated event dots */}
          {events.map((e) => {
            // figure current x position based on which stages have been reached
            let cx = stages[0].x + 60;
            let visible = true;
            if (e.tClient !== null && tNow >= e.tClient + 600) visible = false;
            if (e.tClient !== null && tNow >= e.tClient) cx = stages[4].x + 60;
            else if (e.tIndex !== null && tNow >= e.tIndex) cx = stages[3].x + 60;
            else if (e.tTopic !== null && tNow >= e.tTopic) cx = stages[2].x + 60;
            else if (e.tCdc !== null && tNow >= e.tCdc) cx = stages[1].x + 60;

            if (!visible) return null;

            return (
              <motion.circle
                key={e.id}
                animate={{ cx, cy: 140 }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                r={6}
                fill={SD}
                stroke="#0b1220"
                strokeWidth={1.5}
              />
            );
          })}
        </svg>

        {/* Hop-by-hop lag */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          <Stat label="DB → CDC" value={`${LAG_CDC}ms`} color={SD} />
          <Stat label="CDC → Topic" value={`${LAG_KAFKA}ms`} color={PURPLE} />
          <Stat label="Topic → Index" value={`${LAG_INDEX}ms`} color={WARN} />
          <Stat label="Index → Client" value={`${LAG_CLIENT}ms`} color={SD} />
        </div>

        <div style={{ marginTop: 8, padding: "10px 14px", background: `${SD}10`, border: `1.5px solid ${SD}55`, borderRadius: 6, textAlign: "center" }}>
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL, marginRight: 8 }}>end-to-end propagation lag:</span>
          <span style={{ fontFamily: MONO, fontSize: "0.95rem", fontWeight: 800, color: SD }}>
            {LAG_CDC + LAG_KAFKA + LAG_INDEX + LAG_CLIENT} ms
          </span>
        </div>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setRunning((r) => !r)} style={btn(SD)}>
            {running ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {running ? "pause" : "resume"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
            writes processed: <span style={{ color: SD, fontWeight: 700 }}>{idCounter}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${color}33`, background: `${color}10`, textAlign: "center" }}>
      <div style={{ fontFamily: MONO, fontSize: "0.62rem", color, letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase" }}>
        {label}
      </div>
      <div style={{ fontFamily: MONO, fontSize: "0.9rem", fontWeight: 800, color: "var(--eng-text)" }}>
        {value}
      </div>
    </div>
  );
}

function btn(color: string): CSSProperties {
  return {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "8px 14px", borderRadius: 6, cursor: "pointer",
    border: `1.5px solid ${color}`, background: `${color}18`, color,
    fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700,
    letterSpacing: "0.08em", textTransform: "uppercase",
  };
}

/* ================================================================== */
/*  TAB 3 - Common pipelines                                           */
/* ================================================================== */

const PIPELINES = [
  { name: "DB → Search Index", what: "Postgres → Debezium → Kafka → Elasticsearch consumer. Keeps full-text search in sync within seconds of the write.", ex: "GitHub code search, Algolia ingestion." },
  { name: "DB → Cache", what: "MySQL → Maxwell / Debezium → Kafka → Redis cache. Auto-invalidate on every write; never stale.", ex: "Shopify product catalog, Razorpay merchant cache." },
  { name: "DB → Data Warehouse", what: "Postgres → Fivetran → BigQuery / Snowflake. Near-real-time analytics on operational data.", ex: "Standard analytics ETL replacement." },
  { name: "DB → Webhooks", what: "Operational table → CDC → topic → webhook fanout. Customers subscribe to changes via your public API.", ex: "Stripe events, Shopify webhooks." },
  { name: "DB → AI Embedding Store", what: "Postgres → CDC → embedding model → vector DB. Keeps RAG knowledge bases fresh as source data evolves.", ex: "ChatGPT-on-your-docs, internal AI search." },
];

function Pipelines() {
  return (
    <div>
      <h3 style={sectionTitle}>Common CDC pipelines you&rsquo;ll see in production</h3>
      <p style={sectionDesc}>
        Once you have CDC, every &ldquo;keep this other system in sync with the DB&rdquo; problem
        becomes a one-line consumer. Five pipelines that show up in nearly every modern stack.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {PIPELINES.map((p) => (
          <motion.div
            key={p.name}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.92rem", marginBottom: 8 }}>{p.name}</div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55, marginBottom: 8 }}>{p.what}</div>
            <div style={{ fontFamily: MONO, fontSize: "0.74rem", color: SD }}>
              <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>EX ·</span>
              <span style={{ color: "var(--eng-text)" }}>{p.ex}</span>
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

export default function SD_L7_CDCActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "demo", label: "Watch It Flow", icon: <Database className="w-4 h-4" />, content: <CDCDemo /> },
    { id: "pipelines", label: "Real Pipelines", icon: <Globe className="w-4 h-4" />, content: <Pipelines /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Why is CDC strictly better than dual-writing from the application?",
      options: [
        "It uses less code.",
        "Dual-write isn't atomic across the two systems. CDC treats the DB log as the single source of truth — replays guarantee eventual consistency.",
        "CDC is faster.",
        "It's required by Postgres.",
      ],
      correctIndex: 1,
      explanation: "If the app writes to DB, then to the search index, a crash between the two leaves them divergent. CDC consumes the DB's already-committed log; replay or retry always converges.",
    },
    {
      question: "Which DB feature does Debezium typically read?",
      options: [
        "SQL queries.",
        "The write-ahead log / binlog (Postgres logical replication slot, MySQL binlog, Mongo oplog).",
        "Trigger functions only.",
        "Backups.",
      ],
      correctIndex: 1,
      explanation: "CDC connectors tap the DB's own replication mechanism, so the events captured are the same ones replicas use. No application code changes needed.",
    },
    {
      question: "Search index lag is 800ms. A user posts then immediately searches and doesn't see their post. Best fix?",
      options: [
        "Make CDC sync.",
        "Read-your-writes for the writer: serve their post-search reads from the primary DB for a short window, while everyone else still hits the search index.",
        "Disable CDC.",
        "Add more replicas.",
      ],
      correctIndex: 1,
      explanation: "CDC will always lag a bit. Read-your-writes routes the writer's reads to fresh state for a brief window. Other users tolerate eventual consistency cheaply.",
    },
    {
      question: "What's a common pitfall when adding a CDC consumer to an existing Kafka topic?",
      options: [
        "Disk fills up.",
        "Forgetting that the new consumer will start from the latest offset and miss historical state — you typically need a backfill from a snapshot first, then attach to the live stream.",
        "It's faster than expected.",
        "Encryption breaks.",
      ],
      correctIndex: 1,
      explanation: "New consumer + 'latest' offset = it knows nothing about pre-existing rows. Standard pattern: snapshot the table, ingest the snapshot, then attach to CDC at the snapshot's WAL position. Debezium does this automatically.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Change Data Capture"
      level={7}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The 'how do you keep search/cache/warehouse in sync with the DB' answer"
      onQuizComplete={onQuizComplete}
    />
  );
}

