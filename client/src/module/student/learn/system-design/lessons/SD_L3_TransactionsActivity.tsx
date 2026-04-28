import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Globe, Sliders } from "lucide-react";
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

const ACID = [
  { k: "A · Atomicity", v: "All-or-nothing. If any step fails, the whole transaction rolls back. No half-committed state." },
  { k: "C · Consistency", v: "Constraints (foreign keys, NOT NULL, CHECK) hold before AND after the transaction. The DB never sees an invalid state." },
  { k: "I · Isolation", v: "Concurrent transactions can't see each other's uncommitted intermediate state. The level (READ COMMITTED, REPEATABLE READ, SERIALIZABLE) sets how strict." },
  { k: "D · Durability", v: "Once committed, the data survives crashes. WAL flush to disk before returning success." },
];

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>Four guarantees that keep your data sane</h3>
      <p style={sectionDesc}>
        A <b>transaction</b> wraps several SQL statements so they execute as one logical unit.
        ACID is the four-letter promise the database makes about that unit.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6"
      >
        {ACID.map((c) => (
          <motion.div
            key={c.k}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "16px 18px", border: "1px solid var(--eng-border)", borderRadius: 10, display: "flex", gap: 14, alignItems: "flex-start" }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 10, background: `${SD}18`, border: `1.5px solid ${SD}55`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MONO, fontSize: "1.2rem", fontWeight: 800, color: SD, flexShrink: 0 }}>
              {c.k.charAt(0)}
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.92rem", marginBottom: 6 }}>{c.k}</div>
              <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{c.v}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLE
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          A bank transfer: <code style={{ fontFamily: MONO }}>BEGIN; debit A; credit B; COMMIT;</code>
          {" "}If the credit fails, atomicity rolls back the debit. If two transfers run at once,
          isolation prevents A from being debited twice. After commit, durability ensures the
          balance survives a crash. Postgres, MySQL InnoDB, SQL Server, Oracle all give you ACID.
          Most NoSQL databases give you ACID per document/row but limited or no multi-document
          transactions.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Concurrent transaction timeline + isolation slider        */
/* ================================================================== */

type IsolationLevel = "read-uncommitted" | "read-committed" | "repeatable-read" | "serializable";

const LEVELS: { id: IsolationLevel; name: string; allows: { dirty: boolean; nonRepeatable: boolean; phantom: boolean } }[] = [
  { id: "read-uncommitted", name: "Read Uncommitted", allows: { dirty: true, nonRepeatable: true, phantom: true } },
  { id: "read-committed", name: "Read Committed", allows: { dirty: false, nonRepeatable: true, phantom: true } },
  { id: "repeatable-read", name: "Repeatable Read", allows: { dirty: false, nonRepeatable: false, phantom: true } },
  { id: "serializable", name: "Serializable", allows: { dirty: false, nonRepeatable: false, phantom: false } },
];

function IsolationDemo() {
  const [level, setLevel] = useState<IsolationLevel>("read-committed");
  const cur = LEVELS.find((l) => l.id === level)!;

  return (
    <div>
      <h3 style={sectionTitle}>Slide the isolation level. Watch anomalies appear and vanish.</h3>
      <p style={sectionDesc}>
        Two transactions running side-by-side. Pick an isolation level and watch which read
        anomalies are allowed under that level. Anomalies = real bugs you&rsquo;d see in production
        if you picked too loose a level.
      </p>

      {/* Slider */}
      <div style={{ background: "var(--eng-bg-subtle)", border: "1px solid var(--eng-border)", borderRadius: 12, padding: "16px 18px", marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, color: NEUTRAL, letterSpacing: "0.1em" }}>LOOSER</span>
          <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800, color: SD }}>{cur.name}</span>
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, color: NEUTRAL, letterSpacing: "0.1em" }}>STRICTER</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 }}>
          {LEVELS.map((l, i) => {
            const active = level === l.id;
            return (
              <motion.button
                key={l.id}
                whileTap={{ scale: 0.96 }}
                onClick={() => setLevel(l.id)}
                style={{
                  padding: "12px 6px",
                  borderRadius: 6,
                  cursor: "pointer",
                  border: `1.5px solid ${active ? SD : "rgba(148,163,184,0.3)"}`,
                  background: active ? `${SD}22` : "transparent",
                  color: active ? SD : "var(--eng-text-muted)",
                  fontFamily: MONO,
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  transition: "all 0.18s",
                }}
              >
                <div style={{ fontFamily: MONO, fontSize: "0.6rem", color: NEUTRAL, marginBottom: 2 }}>L{i + 1}</div>
                {l.name}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Three anomaly demos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <AnomalyCard
          title="Dirty Read"
          allowed={cur.allows.dirty}
          desc="T1 writes uncommitted value. T2 reads it. T1 then rolls back. T2 saw a value that never existed."
          example={[
            { who: "T1", op: "UPDATE accounts SET balance = 0 WHERE id = 1", ts: 1 },
            { who: "T2", op: "SELECT balance WHERE id = 1 → 0  (DIRTY)", ts: 2 },
            { who: "T1", op: "ROLLBACK", ts: 3 },
          ]}
          anomalyAt={1}
        />
        <AnomalyCard
          title="Non-Repeatable Read"
          allowed={cur.allows.nonRepeatable}
          desc="T1 reads X = 100. T2 commits X = 200. T1 reads X = 200. Same query, two different answers within one transaction."
          example={[
            { who: "T1", op: "SELECT balance WHERE id = 1 → 100", ts: 1 },
            { who: "T2", op: "UPDATE balance = 200 ... COMMIT", ts: 2 },
            { who: "T1", op: "SELECT balance WHERE id = 1 → 200  (CHANGED)", ts: 3 },
          ]}
          anomalyAt={2}
        />
        <AnomalyCard
          title="Phantom Read"
          allowed={cur.allows.phantom}
          desc="T1 counts active orders → 10. T2 inserts a new active order. T1 counts again → 11. New rows 'phantomed' into the result set."
          example={[
            { who: "T1", op: "SELECT COUNT(*) WHERE status = 'active' → 10", ts: 1 },
            { who: "T2", op: "INSERT order (status='active') ... COMMIT", ts: 2 },
            { who: "T1", op: "SELECT COUNT(*) WHERE status = 'active' → 11  (PHANTOM)", ts: 3 },
          ]}
          anomalyAt={2}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={level}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          style={{ marginTop: 16, padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}
        >
          <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
            UNDER {cur.name.toUpperCase()}
          </div>
          <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.6 }}>
            {level === "read-uncommitted" && "Anything goes. Almost no DB defaults to this — it exists mostly for theory. Even MySQL's default skips it."}
            {level === "read-committed" && "Postgres default. T2 only sees other transactions' committed state. Dirty reads can't happen, but the same query in T2 can return different rows on retry."}
            {level === "repeatable-read" && "MySQL InnoDB default. Snapshot taken at first read; T2 keeps seeing that snapshot for all later reads. Phantom reads still possible (depending on engine)."}
            {level === "serializable" && "As if transactions ran one at a time. No anomalies, but more aborts (T2 may need to retry) and slower under contention."}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

interface AnomalyEvent { who: "T1" | "T2"; op: string; ts: number; }

function AnomalyCard({ title, allowed, desc, example, anomalyAt }: { title: string; allowed: boolean; desc: string; example: AnomalyEvent[]; anomalyAt: number }) {
  return (
    <motion.div
      animate={{
        borderColor: allowed ? `${WARN}55` : `${SD}55`,
        backgroundColor: allowed ? `${WARN}08` : `${SD}08`,
      }}
      transition={{ duration: 0.3 }}
      style={{ padding: "14px 16px", borderRadius: 10, border: "1.5px solid", display: "flex", flexDirection: "column", gap: 10 }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <span style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.92rem" }}>{title}</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={String(allowed)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            style={{
              fontFamily: MONO,
              fontSize: "0.62rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              padding: "3px 8px",
              borderRadius: 4,
              color: allowed ? WARN : SD,
              background: `${allowed ? WARN : SD}14`,
              border: `1px solid ${(allowed ? WARN : SD)}55`,
            }}
          >
            {allowed ? "ALLOWED" : "PREVENTED"}
          </motion.span>
        </AnimatePresence>
      </div>
      <div style={{ fontSize: "0.82rem", color: "var(--eng-text-muted)", lineHeight: 1.5 }}>{desc}</div>
      <div style={{ background: "var(--eng-bg-subtle)", borderRadius: 6, padding: "10px 12px", fontFamily: MONO, fontSize: "0.7rem", color: "var(--eng-text)", lineHeight: 1.7, opacity: allowed ? 1 : 0.55 }}>
        {example.map((e, i) => {
          const isAnomaly = i === anomalyAt;
          return (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "30px 1fr", gap: 8 }}>
              <span style={{ color: e.who === "T1" ? SD : PURPLE, fontWeight: 800 }}>{e.who}</span>
              <span style={{ color: isAnomaly && allowed ? WARN : "var(--eng-text-muted)" }}>{e.op}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ================================================================== */
/*  TAB 3 - Real-world picks                                           */
/* ================================================================== */

const PICKS = [
  { workload: "Money / banking transfers", lvl: "Serializable", reason: "Anomalies = real money lost. Pay the latency cost." },
  { workload: "E-commerce order placement", lvl: "Repeatable Read", reason: "Reading cart twice should give the same answer; phantoms (new line items) are usually fine." },
  { workload: "Most CRUD apps", lvl: "Read Committed", reason: "Postgres default. Cheap, safe enough for routine UIs." },
  { workload: "Analytics rollups", lvl: "Read Committed (or Snapshot)", reason: "Consistent snapshot across many tables for one report. Read Uncommitted is rarely worth the speedup." },
  { workload: "Inventory decrement", lvl: "Serializable + SELECT FOR UPDATE", reason: "Two simultaneous purchases of the last item must not both succeed. Either lock or use Serializable." },
];

function RealPicks() {
  return (
    <div>
      <h3 style={sectionTitle}>Which level to actually use</h3>
      <p style={sectionDesc}>
        The rule: as loose as you can tolerate, as strict as your correctness requires. Real
        workloads with the level production teams actually pick.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {PICKS.map((p) => (
          <motion.div
            key={p.workload}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.9rem" }}>{p.workload}</span>
              <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.06em", padding: "3px 8px", borderRadius: 4, border: `1px solid ${SD}55`, background: `${SD}14` }}>
                {p.lvl}
              </span>
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{p.reason}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L3_TransactionsActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "ACID", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "iso", label: "Isolation Slider", icon: <Sliders className="w-4 h-4" />, content: <IsolationDemo /> },
    { id: "real", label: "Real Picks", icon: <Globe className="w-4 h-4" />, content: <RealPicks /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "T1 reads balance = 100. T2 updates balance = 200 and commits. T1 reads balance again, gets 200. What anomaly?",
      options: ["Dirty read", "Non-repeatable read", "Phantom read", "Lost update"],
      correctIndex: 1,
      explanation: "Same query, two different answers within one transaction. That's a non-repeatable read. Read Committed allows it; Repeatable Read prevents it.",
    },
    {
      question: "Why does Serializable cost more than Read Committed?",
      options: [
        "It uses more memory.",
        "It enforces a serial-equivalent ordering, so concurrent transactions either wait or get aborted-and-retried, increasing latency under contention.",
        "It logs more.",
        "It's encrypted.",
      ],
      correctIndex: 1,
      explanation: "Serializable can detect serialization conflicts and abort one of the transactions, which the app must retry. Under high contention this can produce a lot of aborts. The trade for the strongest correctness guarantee.",
    },
    {
      question: "MongoDB single-document writes are ACID. Multi-document transactions across replicas:",
      options: [
        "Don't exist.",
        "Are supported but slower; not all NoSQL databases offer them. The reason 'NoSQL is web scale' was historically a denial of multi-doc ACID.",
        "Are mandatory.",
        "Always faster than SQL.",
      ],
      correctIndex: 1,
      explanation: "Modern MongoDB (4.0+) supports multi-doc transactions with a real performance cost. Cassandra still doesn't. The historical NoSQL win was relaxing ACID for scale; SQL still wins on transactional clarity.",
    },
    {
      question: "The 'D' in ACID guarantees data survives a crash. What does it actually require under the hood?",
      options: [
        "RAID-1 mirrored disks.",
        "Write-ahead log (WAL) flushed to durable storage BEFORE the commit returns success.",
        "Replication.",
        "Backups.",
      ],
      correctIndex: 1,
      explanation: "Durability means the commit only acks after the change is on durable media (typically WAL fsynced to disk). Replication and backups help availability and disaster recovery; durability is the per-commit guarantee.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Transactions & ACID"
      level={3}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The 'how do you keep this consistent' answer in any DB design"
      onQuizComplete={onQuizComplete}
    />
  );
}

