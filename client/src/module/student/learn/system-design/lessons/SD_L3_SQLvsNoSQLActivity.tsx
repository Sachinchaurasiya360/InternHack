import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Database,
  FileJson,
  Layers,
  Workflow,
  ArrowRight,
} from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";

const SD = "#84cc16";
const NEUTRAL = "#64748b";
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
/*  TAB 1 - Shape of the data (the killer animation)                   */
/* ================================================================== */

type Shape = "sql" | "nosql";

const USER = {
  id: 42,
  name: "Asha Rao",
  email: "asha@example.com",
  city: "Pune",
};
const ORDERS = [
  { id: 901, item: "OnePlus Buds 3", total: 5499 },
  { id: 902, item: "Logitech MX Master", total: 8999 },
];

function ShapeMorph() {
  const [shape, setShape] = useState<Shape>("sql");

  return (
    <div>
      <h3 style={sectionTitle}>Same data. Two shapes.</h3>
      <p style={sectionDesc}>
        A user with two orders, expressed as <b>relational rows</b> on the left, and as a <b>single
        document</b> on the right. Toggle between them and watch the data morph. Both store the
        same facts, just stitched differently.
      </p>

      <div className="flex items-center gap-2 mb-5">
        {(["sql", "nosql"] as Shape[]).map((s) => {
          const active = shape === s;
          return (
            <button
              key={s}
              type="button"
              onClick={() => setShape(s)}
              style={{
                fontFamily: MONO,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "8px 14px",
                borderRadius: 6,
                cursor: "pointer",
                border: `1.5px solid ${active ? SD : "var(--eng-border)"}`,
                background: active ? `${SD}18` : "transparent",
                color: active ? SD : "var(--eng-text-muted)",
                transition: "all 0.18s ease",
              }}
            >
              {s === "sql" ? "Relational (SQL)" : "Document (NoSQL)"}
            </button>
          );
        })}
        <div style={{ flex: 1 }} />
        <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: "var(--eng-text-muted)" }}>
          1 user · 2 orders
        </span>
      </div>

      <div
        style={{
          background: "#0b1220",
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.15)",
          padding: "22px 22px 18px",
          minHeight: 360,
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait">
          {shape === "sql" ? (
            <motion.div
              key="sql"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <SqlView />
            </motion.div>
          ) : (
            <motion.div
              key="nosql"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <NoSqlView />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
        {[
          {
            heading: "Reading the user",
            sql: "JOIN users + orders, may hit 2 indexes.",
            nosql: "Single fetch by user id. One round trip.",
          },
          {
            heading: "Adding a new field",
            sql: "ALTER TABLE; sometimes blocking on large tables.",
            nosql: "Just write it. Schema lives in app code.",
          },
        ].map((row) => (
          <motion.div
            key={row.heading}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              border: "1px solid var(--eng-border)",
              borderRadius: 10,
              padding: "12px 14px",
            }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.65rem", fontWeight: 800, color: "var(--eng-text-muted)", letterSpacing: "0.1em", marginBottom: 8 }}>
              {row.heading.toUpperCase()}
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text)", marginBottom: 6 }}>
              <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, marginRight: 6 }}>
                SQL
              </span>
              {row.sql}
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text)" }}>
              <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: NEUTRAL, marginRight: 6 }}>
                NoSQL
              </span>
              {row.nosql}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SqlView() {
  const tableHeader = (cols: string[]) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols.length}, 1fr)`,
        padding: "8px 12px",
        background: "rgba(132,204,22,0.08)",
        borderBottom: `1px solid ${SD}33`,
        fontFamily: MONO,
        fontSize: "0.66rem",
        fontWeight: 800,
        color: SD,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      {cols.map((c) => <span key={c}>{c}</span>)}
    </div>
  );

  const cell: CSSProperties = {
    fontFamily: MONO,
    fontSize: "0.78rem",
    color: "#e5e7eb",
    padding: "8px 12px",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* users table */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: "#0f172a", border: "1px solid rgba(148,163,184,0.15)", borderRadius: 8, overflow: "hidden" }}
      >
        <div style={{ padding: "10px 14px", borderBottom: "1px solid rgba(148,163,184,0.12)", display: "flex", alignItems: "center", gap: 8 }}>
          <Database className="w-3.5 h-3.5" style={{ color: SD }} />
          <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800, color: "#e5e7eb", letterSpacing: "0.04em" }}>
            users
          </span>
        </div>
        {tableHeader(["id", "name", "email", "city"])}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          <span style={cell}>{USER.id}</span>
          <span style={cell}>{USER.name}</span>
          <span style={cell}>{USER.email}</span>
          <span style={cell}>{USER.city}</span>
        </motion.div>
      </motion.div>

      {/* orders table */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: "#0f172a", border: "1px solid rgba(148,163,184,0.15)", borderRadius: 8, overflow: "hidden" }}
      >
        <div style={{ padding: "10px 14px", borderBottom: "1px solid rgba(148,163,184,0.12)", display: "flex", alignItems: "center", gap: 8 }}>
          <Database className="w-3.5 h-3.5" style={{ color: SD }} />
          <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800, color: "#e5e7eb", letterSpacing: "0.04em" }}>
            orders
          </span>
        </div>
        {tableHeader(["id", "user_id", "item", "total"])}
        {ORDERS.map((o, i) => (
          <motion.div
            key={o.id}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.25 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid rgba(148,163,184,0.08)" }}
          >
            <span style={cell}>{o.id}</span>
            <span style={{ ...cell, color: SD }}>{USER.id}</span>
            <span style={cell}>{o.item}</span>
            <span style={cell}>₹ {o.total.toLocaleString()}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* JOIN visual */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="md:col-span-2"
        style={{
          fontFamily: MONO,
          fontSize: "0.78rem",
          color: "#e5e7eb",
          background: "#0f172a",
          border: "1px solid rgba(148,163,184,0.15)",
          borderRadius: 8,
          padding: "12px 14px",
          lineHeight: 1.7,
        }}
      >
        <span style={{ color: NEUTRAL }}>-- to fetch a user with orders</span>
        <br />
        <span style={{ color: SD, fontWeight: 700 }}>SELECT</span> u.*, o.id, o.item, o.total
        <br />
        <span style={{ color: SD, fontWeight: 700 }}>FROM</span> users u
        <br />
        <span style={{ color: SD, fontWeight: 700 }}>JOIN</span> orders o <span style={{ color: SD, fontWeight: 700 }}>ON</span> o.user_id = u.id
        <br />
        <span style={{ color: SD, fontWeight: 700 }}>WHERE</span> u.id = 42;
      </motion.div>
    </div>
  );
}

function NoSqlView() {
  const json = `{
  "_id": ${USER.id},
  "name": "${USER.name}",
  "email": "${USER.email}",
  "city": "${USER.city}",
  "orders": [
    { "id": ${ORDERS[0].id}, "item": "${ORDERS[0].item}", "total": ${ORDERS[0].total} },
    { "id": ${ORDERS[1].id}, "item": "${ORDERS[1].item}", "total": ${ORDERS[1].total} }
  ]
}`;
  const lines = json.split("\n");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="md:col-span-2"
        style={{ background: "#0f172a", border: "1px solid rgba(148,163,184,0.15)", borderRadius: 8, overflow: "hidden" }}
      >
        <div style={{ padding: "10px 14px", borderBottom: "1px solid rgba(148,163,184,0.12)", display: "flex", alignItems: "center", gap: 8 }}>
          <FileJson className="w-3.5 h-3.5" style={{ color: SD }} />
          <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800, color: "#e5e7eb", letterSpacing: "0.04em" }}>
            users / 42
          </span>
        </div>
        <pre
          style={{
            margin: 0,
            padding: "14px 16px",
            fontFamily: MONO,
            fontSize: "0.82rem",
            color: "#e5e7eb",
            lineHeight: 1.7,
          }}
        >
          {lines.map((ln, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.15 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            >
              {colorJson(ln)}
            </motion.div>
          ))}
        </pre>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        style={{
          fontFamily: MONO,
          fontSize: "0.78rem",
          background: "#0f172a",
          border: "1px solid rgba(148,163,184,0.15)",
          borderRadius: 8,
          padding: "12px 14px",
          color: "#e5e7eb",
          lineHeight: 1.7,
          alignSelf: "start",
        }}
      >
        <span style={{ color: NEUTRAL }}>// fetch user + orders</span>
        <br />
        <span style={{ color: SD, fontWeight: 700 }}>db.users</span>
        <br />
        &nbsp;&nbsp;.findOne(
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{`{ _id: 42 }`}
        <br />
        &nbsp;&nbsp;);
        <br />
        <br />
        <span style={{ color: NEUTRAL }}>// 1 round trip · 1 doc</span>
      </motion.div>
    </div>
  );
}

function colorJson(line: string): React.ReactNode {
  // very small syntax tinter, just enough to make the JSON readable
  const trimmed = line;
  return (
    <span>
      {trimmed.split(/("[^"]*")/g).map((seg, i) => {
        if (seg.startsWith('"')) {
          return (
            <span key={i} style={{ color: "#fbbf24" }}>
              {seg}
            </span>
          );
        }
        return (
          <span key={i}>
            {seg.split(/(\b\d+\b)/g).map((s, j) =>
              /^\d+$/.test(s) ? (
                <span key={j} style={{ color: SD }}>{s}</span>
              ) : (
                s
              ),
            )}
          </span>
        );
      })}
    </span>
  );
}

/* ================================================================== */
/*  TAB 2 - When to choose which                                       */
/* ================================================================== */

const ROWS: { axis: string; sql: string; nosql: string; lean: "sql" | "nosql" | "tie" }[] = [
  { axis: "Schema", sql: "Strict, enforced by DB", nosql: "Flexible, lives in app", lean: "tie" },
  { axis: "Joins / multi-entity reads", sql: "First-class, fast with indexes", nosql: "App stitches, often expensive", lean: "sql" },
  { axis: "Single-entity reads at scale", sql: "Fine, but JOINs cost extra hops", nosql: "Single key lookup, very fast", lean: "nosql" },
  { axis: "Transactions", sql: "ACID across rows / tables", nosql: "Limited, often per-document only", lean: "sql" },
  { axis: "Horizontal scale-out", sql: "Possible (Vitess, Citus) but hard", nosql: "Built in (sharding by key)", lean: "nosql" },
  { axis: "Evolving data shape", sql: "Migration per change", nosql: "Just write the new field", lean: "nosql" },
];

function WhenToChoose() {
  return (
    <div>
      <h3 style={sectionTitle}>When does each one win?</h3>
      <p style={sectionDesc}>
        The honest answer is rarely &ldquo;NoSQL is web scale.&rdquo; It&rsquo;s a per-axis trade. Hover any
        row to see which side of the trade leans where, and why.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.07 } },
        }}
        style={{
          border: "1px solid var(--eng-border)",
          borderRadius: 10,
          overflow: "hidden",
          background: "var(--eng-surface)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1.3fr 1.3fr 0.6fr",
            padding: "10px 14px",
            background: "var(--eng-bg-subtle)",
            borderBottom: "1px solid var(--eng-border)",
            fontFamily: MONO,
            fontSize: "0.66rem",
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--eng-text-muted)",
          }}
        >
          <div>Axis</div>
          <div>Relational (SQL)</div>
          <div>Document (NoSQL)</div>
          <div>Lean</div>
        </div>

        {ROWS.map((r, i) => (
          <motion.div
            key={r.axis}
            variants={{
              hidden: { opacity: 0, y: 6 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
            }}
            whileHover={{ background: "rgba(132,204,22,0.04)" }}
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1.3fr 1.3fr 0.6fr",
              padding: "12px 14px",
              borderBottom: i < ROWS.length - 1 ? "1px solid var(--eng-border)" : "none",
              fontSize: "0.84rem",
              color: "var(--eng-text)",
              alignItems: "center",
            }}
          >
            <div style={{ fontWeight: 700 }}>{r.axis}</div>
            <div style={{ color: "var(--eng-text-muted)" }}>{r.sql}</div>
            <div style={{ color: "var(--eng-text-muted)" }}>{r.nosql}</div>
            <LeanBadge lean={r.lean} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function LeanBadge({ lean }: { lean: "sql" | "nosql" | "tie" }) {
  const label = lean === "tie" ? "Tie" : lean.toUpperCase();
  const color = lean === "tie" ? NEUTRAL : SD;
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      style={{
        fontFamily: MONO,
        fontSize: "0.66rem",
        fontWeight: 800,
        letterSpacing: "0.1em",
        padding: "4px 8px",
        borderRadius: 4,
        color,
        background: lean === "tie" ? "transparent" : `${color}14`,
        border: `1px solid ${color}55`,
        textAlign: "center",
        display: "inline-block",
      }}
    >
      {label}
    </motion.span>
  );
}

/* ================================================================== */
/*  TAB 3 - In the wild                                                */
/* ================================================================== */

const SYSTEMS = [
  { who: "Razorpay payments ledger", pick: "SQL", reason: "Money. Multi-row transactions. Auditable schema." },
  { who: "Instagram feed cache", pick: "NoSQL", reason: "Each user fetches their own document. No cross-user joins on the read path." },
  { who: "Swiggy order history", pick: "SQL", reason: "Reports across users, restaurants, dates. JOINs and aggregates everywhere." },
  { who: "Flipkart product catalog", pick: "NoSQL", reason: "Each product has different attributes (size, voltage, ISBN…). Schema flexibility wins." },
  { who: "Uber driver location", pick: "NoSQL", reason: "Heavy writes, simple key, geographic sharding. Cassandra / DynamoDB territory." },
  { who: "GitHub repo metadata", pick: "SQL", reason: "Repos relate to users, orgs, issues, PRs. Graph-like joins everywhere." },
];

function InTheWild() {
  return (
    <div>
      <h3 style={sectionTitle}>How real systems actually pick</h3>
      <p style={sectionDesc}>
        Six product systems and what they reach for. Notice that the choice is dictated by the
        <i> read pattern</i>, not the size of the company.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {SYSTEMS.map((s) => (
          <motion.div
            key={s.who}
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
              background: "var(--eng-surface)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <span style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.9rem" }}>{s.who}</span>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: "0.66rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  padding: "3px 8px",
                  borderRadius: 4,
                  color: SD,
                  background: `${SD}14`,
                  border: `1px solid ${SD}55`,
                }}
              >
                {s.pick}
              </span>
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>
              {s.reason}
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

export default function SD_L3_SQLvsNoSQLActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "shape", label: "Shape", icon: <Layers className="w-4 h-4" />, content: <ShapeMorph /> },
    { id: "choose", label: "When to Choose", icon: <Workflow className="w-4 h-4" />, content: <WhenToChoose /> },
    { id: "wild", label: "In the Wild", icon: <ArrowRight className="w-4 h-4" />, content: <InTheWild /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "You're designing a payments ledger. Reads need to roll up by date and merchant, and writes must be atomic across two tables. What do you reach for first?",
      options: ["A document store like MongoDB", "A relational DB (Postgres / MySQL)", "A pure key-value store like Redis", "An object store like S3"],
      correctIndex: 1,
      explanation: "Atomic writes across multiple entities + cross-entity reads are exactly what relational databases optimize for. Document stores struggle with cross-document transactions; key-value stores can't roll up by arbitrary dimensions.",
    },
    {
      question: "Which of these is genuinely easier with a document store than with a relational DB?",
      options: [
        "Adding a new optional field to one user without a migration",
        "Running an analytical query that joins five tables",
        "Enforcing a unique constraint across two columns",
        "Foreign keys with cascade deletes",
      ],
      correctIndex: 0,
      explanation: "Schema flexibility is a real document-store strength. The other three are SQL territory.",
    },
    {
      question: "An interviewer asks: 'Why is reading a user with their orders one round trip in a document model but two in a relational one?'",
      options: [
        "Document stores are written in faster languages.",
        "Document stores embed related data inside one document; relational ones store related rows in separate tables and need a JOIN.",
        "Relational databases don't support indexes.",
        "Document stores cache more aggressively.",
      ],
      correctIndex: 1,
      explanation: "Embedding vs normalizing is the heart of the trade. The price of embedding is duplication and harder cross-entity queries; the price of normalizing is the JOIN.",
    },
    {
      question: "Which statement is closest to the truth?",
      options: [
        "NoSQL scales; SQL doesn't.",
        "SQL is always more reliable than NoSQL.",
        "The choice depends mostly on the read pattern and consistency needs, not on traffic volume.",
        "Big companies use NoSQL; small ones use SQL.",
      ],
      correctIndex: 2,
      explanation: "Both can scale. Both can be reliable. The honest answer is the trade is per-workload, driven by access patterns and how strict you need consistency.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="SQL vs NoSQL"
      level={3}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The classic 'which DB do you pick' follow-up in every HLD round"
      onQuizComplete={onQuizComplete}
    />
  );
}
