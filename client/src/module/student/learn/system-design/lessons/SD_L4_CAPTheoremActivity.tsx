import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Globe, Triangle } from "lucide-react";
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

const PROPS = [
  {
    letter: "C",
    name: "Consistency",
    short: "every read returns the most recent write",
    long:
      "After a write completes, every subsequent read on any node sees that write. There is no &ldquo;old&rdquo; copy. Strict consistency is closer to linearizability — the system behaves as if there is one true copy of the data.",
    example: "You transfer ₹1,000 from A to B. The very next read on any node shows the new balances.",
  },
  {
    letter: "A",
    name: "Availability",
    short: "every request gets a (non-error) response",
    long:
      "Every request to a non-failing node receives a response — not an error, not a timeout. The response may not be the latest data, but the system answers.",
    example: "Even when the network between datacenters is broken, your shopping cart still loads — possibly with slightly stale items.",
  },
  {
    letter: "P",
    name: "Partition Tolerance",
    short: "the system keeps working when the network splits",
    long:
      "Messages between nodes can be delayed or dropped (network partition). The system must continue to operate. In any real distributed system, partitions WILL happen — so P is not optional, it&rsquo;s a fact of life.",
    example: "An undersea cable cut splits Mumbai datacenters from Singapore ones. Each side continues to serve traffic.",
  },
];

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>Three properties. You can&rsquo;t have all three at once.</h3>
      <p style={sectionDesc}>
        The CAP theorem (Eric Brewer, 2000) says a distributed system can guarantee at most two of:
        <b> Consistency</b>, <b>Availability</b>, and <b>Partition tolerance</b>. Since partitions
        happen in any real network, the real choice is between <b>CP</b> and <b>AP</b>.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
      >
        {PROPS.map((p) => (
          <motion.div
            key={p.letter}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
            }}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 380, damping: 24 }}
            style={{
              border: "1px solid var(--eng-border)",
              borderRadius: 10,
              padding: "18px 18px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.15 }}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${SD}18`,
                  border: `1.5px solid ${SD}55`,
                  fontFamily: MONO,
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: SD,
                }}
              >
                {p.letter}
              </motion.div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--eng-text)" }}>{p.name}</div>
                <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: "var(--eng-text-muted)", marginTop: 2 }}>
                  {p.short}
                </div>
              </div>
            </div>
            <div
              style={{ fontSize: "0.85rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}
              dangerouslySetInnerHTML={{ __html: p.long }}
            />
            <div
              style={{
                marginTop: 4,
                paddingTop: 10,
                borderTop: "1px dashed var(--eng-border)",
                fontFamily: MONO,
                fontSize: "0.74rem",
                color: SD,
                lineHeight: 1.5,
              }}
            >
              <span style={{ fontWeight: 800, letterSpacing: "0.08em" }}>EX · </span>
              <span style={{ color: "var(--eng-text)" }}>{p.example}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div
        style={{
          padding: "14px 16px",
          borderRadius: 8,
          border: "1px solid var(--eng-border)",
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          THE REAL TAKE
        </div>
        <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
          P is not negotiable in a distributed system — networks will partition. So you&rsquo;re
          really choosing between <b style={{ color: SD }}>CP</b> (during a partition, refuse
          to answer rather than return stale data) and <b style={{ color: WARN }}>AP</b>{" "}
          (during a partition, keep answering, accept stale data, reconcile later).
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - The interactive triangle                                   */
/* ================================================================== */

type Mode = "normal" | "cp" | "ap";

function CapTriangle() {
  const [partition, setPartition] = useState(false);
  const [mode, setMode] = useState<Mode>("normal");

  const togglePartition = () => {
    if (!partition) {
      setPartition(true);
      // default to CP unless user picked AP earlier
      setMode((m) => (m === "ap" ? "ap" : "cp"));
    } else {
      setPartition(false);
      setMode("normal");
    }
  };

  return (
    <div>
      <h3 style={sectionTitle}>Click the partition. Then pick CP or AP.</h3>
      <p style={sectionDesc}>
        Two datacenters. Healthy network: every read sees every write. Now break the link between
        them. The system has to choose: keep both sides answering with stale data (AP) or freeze
        the minority side until the network heals (CP).
      </p>

      <div
        style={{
          background: "#0b1220",
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.15)",
          padding: 22,
        }}
      >
        <svg viewBox="0 0 720 320" width="100%" style={{ maxWidth: 760, display: "block", margin: "0 auto" }}>
          {/* DC labels */}
          <text x="120" y="40" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight={700} fontFamily={MONO} letterSpacing="0.1em">
            DATACENTER · MUMBAI
          </text>
          <text x="600" y="40" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight={700} fontFamily={MONO} letterSpacing="0.1em">
            DATACENTER · SINGAPORE
          </text>

          {/* nodes mumbai side */}
          <Node x={50} y={80} label="N1" status={mode === "cp" && partition ? "frozen" : "ok"} />
          <Node x={50} y={180} label="N2" status={mode === "cp" && partition ? "frozen" : "ok"} />
          <Node x={190} y={130} label="N3" status={mode === "cp" && partition ? "frozen" : "ok"} />

          {/* nodes singapore side */}
          <Node x={510} y={130} label="N4" status="ok" />
          <Node x={650} y={80} label="N5" status="ok" />
          <Node x={650} y={180} label="N6" status="ok" />

          {/* link */}
          {partition ? (
            <>
              <motion.line
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                x1="240"
                y1="150"
                x2="340"
                y2="150"
                stroke="#475569"
                strokeWidth={1.5}
                strokeDasharray="3 4"
              />
              <motion.line
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                x1="380"
                y1="150"
                x2="480"
                y2="150"
                stroke="#475569"
                strokeWidth={1.5}
                strokeDasharray="3 4"
              />
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
              >
                <text x="360" y="138" textAnchor="middle" fill={WARN} fontSize="22" fontWeight={800}>
                  ✕
                </text>
                <text x="360" y="172" textAnchor="middle" fill={WARN} fontSize="9" fontWeight={700} fontFamily={MONO} letterSpacing="0.1em">
                  PARTITION
                </text>
              </motion.g>
            </>
          ) : (
            <line x1="240" y1="150" x2="480" y2="150" stroke={SD} strokeWidth={2} strokeDasharray="0" />
          )}

          {/* writer animation: when not partitioned, dot flows across */}
          {!partition && (
            <motion.circle
              r={4}
              fill={SD}
              initial={{ cx: 240, cy: 150 }}
              animate={{ cx: 480, cy: 150 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
            />
          )}

          {/* AP mode: both sides answer */}
          {partition && mode === "ap" && (
            <>
              <motion.circle r={4} fill={WARN} initial={{ cx: 50, cy: 80 }} animate={{ cx: 50, cy: 80, scale: [1, 1.6, 1] }} transition={{ duration: 1, repeat: Infinity }} />
              <motion.circle r={4} fill={WARN} initial={{ cx: 650, cy: 80 }} animate={{ cx: 650, cy: 80, scale: [1, 1.6, 1] }} transition={{ duration: 1, repeat: Infinity }} />
              <text x="120" y="270" textAnchor="middle" fill={WARN} fontSize="11" fontWeight={700} fontFamily={MONO}>
                answers · maybe stale
              </text>
              <text x="600" y="270" textAnchor="middle" fill={WARN} fontSize="11" fontWeight={700} fontFamily={MONO}>
                answers · maybe stale
              </text>
            </>
          )}

          {/* CP mode: minority side frozen */}
          {partition && mode === "cp" && (
            <>
              <text x="120" y="270" textAnchor="middle" fill={NEUTRAL} fontSize="11" fontWeight={700} fontFamily={MONO}>
                503 · refuses to answer
              </text>
              <text x="600" y="270" textAnchor="middle" fill={SD} fontSize="11" fontWeight={700} fontFamily={MONO}>
                serves · always fresh
              </text>
            </>
          )}
        </svg>

        {/* Controls */}
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={togglePartition}
            style={{
              padding: "8px 14px",
              borderRadius: 6,
              cursor: "pointer",
              border: `1.5px solid ${partition ? WARN : SD}`,
              background: partition ? `${WARN}18` : `${SD}18`,
              color: partition ? WARN : SD,
              fontFamily: MONO,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "all 0.18s",
            }}
          >
            {partition ? "heal network" : "break network"}
          </motion.button>

          <AnimatePresence>
            {partition && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2"
              >
                <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>during partition:</span>
                {(["cp", "ap"] as const).map((m) => {
                  const active = mode === m;
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMode(m)}
                      style={{
                        padding: "6px 12px",
                        borderRadius: 6,
                        cursor: "pointer",
                        border: `1.5px solid ${active ? SD : "rgba(148,163,184,0.25)"}`,
                        background: active ? `${SD}18` : "transparent",
                        color: active ? SD : "#e5e7eb",
                        fontFamily: MONO,
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {m}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${partition}-${mode}`}
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
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
              STATE
            </span>
            {!partition &&
              "Network healthy. Writes propagate, every node has the latest. C, A, and P all hold (because P isn't being tested)."}
            {partition && mode === "cp" &&
              "CP choice: the minority side (Mumbai, fewer nodes) cannot reach quorum, so it returns 503 instead of risking stale data. Singapore continues with quorum and stays consistent."}
            {partition && mode === "ap" &&
              "AP choice: each side keeps serving, accepting that they may diverge. When the network heals, the system has to merge two histories (vector clocks, LWW, app-level merge)."}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Node({ x, y, label, status }: { x: number; y: number; label: string; status: "ok" | "frozen" }) {
  const color = status === "frozen" ? "#475569" : SD;
  return (
    <g transform={`translate(${x}, ${y})`}>
      {status === "ok" && (
        <motion.circle
          r={26}
          fill={color}
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{ opacity: 0, scale: 1.4 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <circle r={20} fill={`${color}22`} stroke={color} strokeWidth={1.5} />
      <text x={0} y={5} textAnchor="middle" fill={color} fontSize={11} fontWeight={700} fontFamily={MONO}>
        {label}
      </text>
    </g>
  );
}

/* ================================================================== */
/*  TAB 3 - Real systems                                               */
/* ================================================================== */

const SYSTEMS: { name: string; pick: "CP" | "AP"; reason: string }[] = [
  { name: "Postgres (single primary)", pick: "CP", reason: "Reads from a partitioned replica are stopped or stale-tagged. Correctness over uptime." },
  { name: "MongoDB (default)", pick: "CP", reason: "Primary loses quorum → step down, no writes accepted until a new primary is elected." },
  { name: "Spanner / CockroachDB", pick: "CP", reason: "Built on Paxos / Raft. Strongly consistent; loses availability on the minority side during partition." },
  { name: "Cassandra (default)", pick: "AP", reason: "Multi-master. Writes accepted on any partition side. Reconciles via last-write-wins after heal." },
  { name: "DynamoDB (default)", pick: "AP", reason: "Eventually consistent reads by default. Strong reads opt-in (and cost more)." },
  { name: "Riak", pick: "AP", reason: "Designed AP-first using vector clocks. Conflicts surface to the application." },
];

function RealSystems() {
  return (
    <div>
      <h3 style={sectionTitle}>Real databases land in CP or AP</h3>
      <p style={sectionDesc}>
        The same database engine can be tuned either way (Cassandra has CL=ALL, DynamoDB has
        strongly-consistent reads), but each has a default. Here is where the popular ones live.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {SYSTEMS.map((s) => {
          const c = s.pick === "CP" ? SD : WARN;
          return (
            <motion.div
              key={s.name}
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
                <span style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.9rem" }}>{s.name}</span>
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.66rem",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    padding: "3px 8px",
                    borderRadius: 4,
                    color: c,
                    background: `${c}14`,
                    border: `1px solid ${c}55`,
                  }}
                >
                  {s.pick}
                </span>
              </div>
              <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>
                {s.reason}
              </div>
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

export default function SD_L4_CAPTheoremActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "triangle", label: "Try It", icon: <Triangle className="w-4 h-4" />, content: <CapTriangle /> },
    { id: "real", label: "Real Systems", icon: <Globe className="w-4 h-4" />, content: <RealSystems /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "An undersea cable cut splits your cluster between Mumbai (3 nodes) and Singapore (3 nodes). You're CP. What happens?",
      options: [
        "Both sides keep accepting writes; the cluster reconciles when the cable is fixed.",
        "Neither side has quorum, so writes fail on both sides until the partition heals.",
        "Reads work on both sides; writes only on Singapore.",
        "All writes succeed but become read-only briefly.",
      ],
      correctIndex: 1,
      explanation: "With a 3-3 split and CP semantics, neither side reaches majority quorum (≥4 of 6). Both sides refuse writes. CP prioritizes correctness over uptime when a clean choice can't be made.",
    },
    {
      question: "Why does the CAP theorem say P is not really optional?",
      options: [
        "Partition tolerance is required by SQL.",
        "Real networks experience packet loss, latency spikes, and outages — partitions are inevitable.",
        "Most databases only support P.",
        "Partition tolerance is the default in cloud providers.",
      ],
      correctIndex: 1,
      explanation: "Any real distributed system must tolerate partitions, because they are guaranteed to happen. The real choice is between CP and AP — what the system does WHEN partitioned.",
    },
    {
      question: "Cassandra defaults to AP. A user writes to a node in DC-1, then immediately reads from a node in DC-2 during a partition. What can the read return?",
      options: [
        "Always the latest value.",
        "The previous value, because the write hasn't replicated across the partition yet.",
        "An error.",
        "Both values at once.",
      ],
      correctIndex: 1,
      explanation: "AP systems trade fresh-read for availability. The DC-2 node hasn't received the new write, but it stays available and answers with what it has. The user sees stale data temporarily.",
    },
    {
      question: "Which is the MOST honest summary of CAP for a real-world interview?",
      options: [
        "You always pick CA.",
        "Pick exactly two of three.",
        "Partitions happen, so you choose between CP and AP, often per-operation rather than per-system.",
        "Modern systems are immune to CAP.",
      ],
      correctIndex: 2,
      explanation: "The original 'two of three' framing is a teaching device. Production systems usually let you tune consistency vs availability per query (e.g., Cassandra consistency levels, Dynamo strong vs eventual reads).",
    },
  ];

  return (
    <EngineeringLessonShell
      title="The CAP Theorem"
      level={4}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The first concept every distributed-systems interview probes"
      onQuizComplete={onQuizComplete}
    />
  );
}

