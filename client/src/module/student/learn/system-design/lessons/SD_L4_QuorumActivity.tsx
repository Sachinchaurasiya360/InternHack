import { useMemo, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, CheckCircle2, Database, Globe, Sliders, XCircle } from "lucide-react";
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
      <h3 style={sectionTitle}>The N, W, R contract</h3>
      <p style={sectionDesc}>
        In a replicated system, a write doesn&rsquo;t go to one node — it goes to as many as you
        require before the write is acknowledged. Same for reads. The three numbers that govern
        this are <b>N</b>, <b>W</b>, and <b>R</b>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {[
          { k: "N", name: "Replication factor", v: "How many copies of each row exist. Typically 3." },
          { k: "W", name: "Write quorum", v: "How many copies must ack a write before the client gets a success response." },
          { k: "R", name: "Read quorum", v: "How many copies must respond before a read is considered successful." },
        ].map((c, i) => (
          <motion.div
            key={c.k}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: "16px 18px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${SD}18`,
                  border: `1.5px solid ${SD}55`,
                  fontFamily: MONO,
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: SD,
                }}
              >
                {c.k}
              </div>
              <span style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.9rem" }}>{c.name}</span>
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{c.v}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ padding: "16px 18px", borderRadius: 10, border: `1.5px solid ${SD}55`, background: `${SD}10` }}
      >
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          THE GOLDEN RULE
        </div>
        <div style={{ fontSize: "1rem", color: "var(--eng-text)", fontWeight: 700, marginBottom: 8 }}>
          W + R &gt; N &nbsp; ⇒ &nbsp; reads see the latest write
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text-muted)", lineHeight: 1.6 }}>
          If the read quorum overlaps the write quorum by at least one node, that overlapping node
          is guaranteed to have the latest write. Pick a high W for write durability; a high R for
          fresh reads; balance the two for latency.
        </div>
      </motion.div>

      <div
        style={{
          marginTop: 16,
          padding: "14px 16px",
          borderRadius: 8,
          border: "1px solid var(--eng-border)",
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.65 }}>
          <b>Cassandra</b> exposes consistency levels per query (ONE, QUORUM, ALL). <b>DynamoDB</b>
          {" "}defaults to eventual reads (R=1) but lets you opt into strongly-consistent reads
          (effectively R=N). <b>Riak</b> made N/W/R the literal API knobs. <b>Quorum=ceil((N+1)/2)</b>
          {" "}for both reads and writes is the default safe choice.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Interactive quorum slider                                  */
/* ================================================================== */

const N = 5;
type NodeVer = { id: number; version: number };

function QuorumDemo() {
  const [w, setW] = useState(3);
  const [r, setR] = useState(3);
  const [step, setStep] = useState<"idle" | "writing" | "written" | "reading" | "read">("idle");
  const [nodes, setNodes] = useState<NodeVer[]>(
    Array.from({ length: N }, (_, i) => ({ id: i, version: 0 })),
  );
  const [readQuorum, setReadQuorum] = useState<number[]>([]);

  const safe = w + r > N;
  const writeQuorum = useMemo(() => {
    // first w nodes get the new value (deterministic for clarity)
    return Array.from({ length: w }, (_, i) => i);
  }, [w]);

  const doWrite = () => {
    setStep("writing");
    setTimeout(() => {
      setNodes((ns) => ns.map((n) => (writeQuorum.includes(n.id) ? { ...n, version: n.version + 1 } : n)));
      setStep("written");
    }, 700);
  };

  const doRead = () => {
    // pick R nodes (skewed toward later nodes to make the overlap question interesting)
    const order = [N - 1, N - 2, N - 3, N - 4, N - 5].slice(0, r);
    setReadQuorum(order);
    setStep("reading");
    setTimeout(() => setStep("read"), 700);
  };

  const reset = () => {
    setStep("idle");
    setNodes(Array.from({ length: N }, (_, i) => ({ id: i, version: 0 })));
    setReadQuorum([]);
  };

  const seenLatest = useMemo(() => {
    if (step !== "read") return null;
    const versions = readQuorum.map((id) => nodes[id].version);
    return Math.max(...versions);
  }, [step, readQuorum, nodes]);

  const expectedLatest = nodes.reduce((m, n) => Math.max(m, n.version), 0);
  const readReturnsLatest = seenLatest === expectedLatest && expectedLatest > 0;

  return (
    <div>
      <h3 style={sectionTitle}>Drag W and R. Then write and read.</h3>
      <p style={sectionDesc}>
        Five replicas. Each slider picks how many copies must agree. Write a value, then read.
        If <code style={{ fontFamily: MONO }}>W + R &gt; N</code>, the read quorum is guaranteed
        to overlap the write quorum, so reads see the latest write.
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
          <SliderControl label="W (write quorum)" value={w} setValue={(v) => { setW(v); reset(); }} />
          <SliderControl label="R (read quorum)" value={r} setValue={(v) => { setR(v); reset(); }} />
        </div>

        {/* Status indicator */}
        <motion.div
          animate={{
            borderColor: safe ? `${SD}88` : `${WARN}88`,
            backgroundColor: safe ? `${SD}10` : `${WARN}10`,
          }}
          transition={{ duration: 0.3 }}
          style={{
            padding: "10px 14px",
            borderRadius: 8,
            border: `1.5px solid ${SD}88`,
            marginBottom: 18,
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontFamily: MONO, fontSize: "0.78rem", color: "#e5e7eb", fontWeight: 700 }}>
            W={w} · R={r} · N={N} &nbsp;&nbsp; W+R={w + r}
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={String(safe)}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: 0.25 }}
              style={{
                fontFamily: MONO,
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                padding: "3px 8px",
                borderRadius: 4,
                color: safe ? SD : WARN,
                background: safe ? `${SD}22` : `${WARN}22`,
                border: `1px solid ${safe ? SD : WARN}55`,
              }}
            >
              {safe ? "STRONGLY CONSISTENT" : "EVENTUALLY CONSISTENT"}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Five replica nodes */}
        <div className="grid grid-cols-5 gap-3 mb-5">
          {nodes.map((n) => {
            const inWrite = writeQuorum.includes(n.id);
            const inRead = readQuorum.includes(n.id);
            const stale = n.version === 0 && step !== "idle";
            const fresh = n.version > 0;
            const c = fresh ? SD : stale ? NEUTRAL : NEUTRAL;
            return (
              <motion.div
                key={n.id}
                animate={{
                  borderColor: inRead && step === "read" ? WARN : c,
                  backgroundColor: fresh ? `${SD}18` : "transparent",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: "12px 8px",
                  borderRadius: 8,
                  border: `1.5px solid ${c}`,
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Database className="w-4 h-4 mx-auto" style={{ color: c }} />
                <div style={{ fontFamily: MONO, fontSize: "0.74rem", fontWeight: 700, color: "#e5e7eb", marginTop: 4 }}>
                  N{n.id}
                </div>
                <div style={{ fontFamily: MONO, fontSize: "0.66rem", color: c, marginTop: 2 }}>
                  v{n.version}
                </div>
                <AnimatePresence>
                  {inWrite && step === "writing" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: "absolute",
                        top: -8,
                        right: -8,
                        background: SD,
                        borderRadius: 999,
                        padding: "2px 6px",
                        fontFamily: MONO,
                        fontSize: "0.6rem",
                        fontWeight: 800,
                        color: "#0b1220",
                      }}
                    >
                      W
                    </motion.div>
                  )}
                  {inRead && step === "reading" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: "absolute",
                        top: -8,
                        right: -8,
                        background: WARN,
                        borderRadius: 999,
                        padding: "2px 6px",
                        fontFamily: MONO,
                        fontSize: "0.6rem",
                        fontWeight: 800,
                        color: "#0b1220",
                      }}
                    >
                      R
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={doWrite}
            disabled={step === "writing" || step === "reading"}
            style={btnStyle(SD, step === "writing" || step === "reading")}
          >
            ① write x = "v{nodes[0].version + 1}"
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={doRead}
            disabled={step !== "written" && step !== "read"}
            style={btnStyle(WARN, step !== "written" && step !== "read")}
          >
            ② read x
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            style={btnStyle(NEUTRAL, false)}
          >
            reset
          </motion.button>
        </div>

        {/* Outcome */}
        <AnimatePresence mode="wait">
          {step === "read" && (
            <motion.div
              key="read-result"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                marginTop: 16,
                padding: "12px 14px",
                background: "rgba(15,23,42,0.6)",
                borderRadius: 6,
                fontSize: "0.86rem",
                color: "#e5e7eb",
                lineHeight: 1.55,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              {readReturnsLatest ? (
                <CheckCircle2 className="w-5 h-5" style={{ color: SD, flexShrink: 0 }} />
              ) : (
                <XCircle className="w-5 h-5" style={{ color: WARN, flexShrink: 0 }} />
              )}
              <span>
                {readReturnsLatest ? (
                  <>Read returned <b style={{ color: SD }}>v{seenLatest}</b> — the latest. The read quorum overlaps the write quorum.</>
                ) : (
                  <>Read returned <b style={{ color: WARN }}>v{seenLatest}</b> — but the latest write was v{expectedLatest}. The quorums don&rsquo;t overlap. <i>Eventual consistency.</i></>
                )}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function SliderControl({ label, value, setValue }: { label: string; value: number; setValue: (v: number) => void }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700, color: "#e5e7eb", letterSpacing: "0.06em" }}>
          {label}
        </span>
        <span style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 800, color: SD }}>
          = {value}
        </span>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {[1, 2, 3, 4, 5].map((v) => {
          const active = v === value;
          const filled = v <= value;
          return (
            <motion.button
              key={v}
              type="button"
              onClick={() => setValue(v)}
              whileTap={{ scale: 0.92 }}
              style={{
                flex: 1,
                padding: "10px 0",
                borderRadius: 6,
                cursor: "pointer",
                border: `1.5px solid ${active ? SD : filled ? `${SD}55` : "rgba(148,163,184,0.3)"}`,
                background: active ? `${SD}33` : filled ? `${SD}14` : "transparent",
                color: active ? SD : filled ? `${SD}` : "#94a3b8",
                fontFamily: MONO,
                fontSize: "0.78rem",
                fontWeight: 700,
                transition: "border-color 0.18s, background 0.18s",
              }}
            >
              {v}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function btnStyle(color: string, disabled: boolean): CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 14px",
    borderRadius: 6,
    cursor: disabled ? "not-allowed" : "pointer",
    border: `1.5px solid ${disabled ? "rgba(148,163,184,0.25)" : color}`,
    background: disabled ? "transparent" : `${color}18`,
    color: disabled ? NEUTRAL : color,
    fontFamily: MONO,
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    opacity: disabled ? 0.5 : 1,
    transition: "all 0.18s",
  };
}

/* ================================================================== */
/*  TAB 3 - Real configurations                                        */
/* ================================================================== */

const CONFIGS: { name: string; n: number; w: number; r: number; profile: string; reason: string }[] = [
  { name: "Default safe", n: 3, w: 2, r: 2, profile: "Strong reads · medium write/read latency", reason: "W+R=4 > N=3. Most production systems start here." },
  { name: "Read-heavy app", n: 3, w: 3, r: 1, profile: "Fast reads · slow writes", reason: "Every replica has the value. R=1 hits any node and gets the latest." },
  { name: "Write-heavy log", n: 3, w: 1, r: 3, profile: "Fast writes · slow reads", reason: "W=1 acks instantly. Reads must check all replicas to find the freshest." },
  { name: "Eventually consistent", n: 3, w: 1, r: 1, profile: "Lowest latency · stale reads possible", reason: "W+R=2, not greater than N. Cassandra ONE consistency, DynamoDB default." },
  { name: "Maximum durability", n: 5, w: 5, r: 1, profile: "Survives many node failures · slow writes", reason: "Every write hits all 5 replicas. Tolerates losing 4 of 5 for reads." },
];

function RealConfigs() {
  return (
    <div>
      <h3 style={sectionTitle}>Configurations you&rsquo;ll see in production</h3>
      <p style={sectionDesc}>
        The same database engine yields very different behaviors depending on N/W/R. Here are the
        five common shapes interviewers expect you to recognize.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {CONFIGS.map((c) => {
          const safe = c.w + c.r > c.n;
          return (
            <motion.div
              key={c.name}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              style={{
                padding: "16px 18px",
                border: "1px solid var(--eng-border)",
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                <span style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.95rem" }}>{c.name}</span>
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.66rem",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    padding: "3px 8px",
                    borderRadius: 4,
                    color: safe ? SD : WARN,
                    background: `${safe ? SD : WARN}14`,
                    border: `1px solid ${safe ? SD : WARN}55`,
                  }}
                >
                  {safe ? "STRONG" : "EVENTUAL"}
                </span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {(["N", "W", "R"] as const).map((k) => (
                  <div
                    key={k}
                    style={{
                      flex: 1,
                      padding: "8px 0",
                      textAlign: "center",
                      borderRadius: 6,
                      background: "var(--eng-bg-subtle)",
                      border: "1px solid var(--eng-border)",
                    }}
                  >
                    <div style={{ fontFamily: MONO, fontSize: "0.6rem", color: "var(--eng-text-muted)", letterSpacing: "0.1em" }}>
                      {k}
                    </div>
                    <div style={{ fontFamily: MONO, fontSize: "1rem", fontWeight: 800, color: "var(--eng-text)" }}>
                      {k === "N" ? c.n : k === "W" ? c.w : c.r}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: SD, fontWeight: 700, letterSpacing: "0.06em" }}>
                {c.profile}
              </div>
              <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{c.reason}</div>
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

export default function SD_L4_QuorumActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "demo", label: "Drag the Sliders", icon: <Sliders className="w-4 h-4" />, content: <QuorumDemo /> },
    { id: "real", label: "Configurations", icon: <Globe className="w-4 h-4" />, content: <RealConfigs /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "N=5, W=3, R=3. Is this strongly consistent?",
      options: ["No, only eventually consistent.", "Yes — W+R=6 > N=5, so quorums must overlap.", "Only on reads.", "Only if all nodes are in the same DC."],
      correctIndex: 1,
      explanation: "With W+R > N, the read quorum is guaranteed to overlap the write quorum by at least one node, so reads see the latest write.",
    },
    {
      question: "You want fast reads and don't mind slow writes. Best N/W/R for N=3?",
      options: ["W=1, R=3", "W=3, R=1", "W=1, R=1", "W=2, R=2"],
      correctIndex: 1,
      explanation: "W=3 forces every replica to have the value before ack, so any single node has it. R=1 then hits the closest node, served fastest.",
    },
    {
      question: "DynamoDB default reads. What's the rough N/W/R equivalent?",
      options: ["W=N, R=N (strong)", "W=quorum, R=1 (eventual)", "W=1, R=N (read-repair)", "W=1, R=1 (best effort)"],
      correctIndex: 1,
      explanation: "DynamoDB acknowledges writes after a quorum (or one node and async replicates), and default reads hit a single node. That's eventual consistency unless you opt into strongly-consistent reads (effectively R=N).",
    },
    {
      question: "Why is the W+R > N rule called 'strict' but real systems sometimes still see anomalies?",
      options: [
        "The rule is wrong.",
        "Network partitions can prevent the quorum from being reached, so the system stalls or returns errors instead of stale data.",
        "Quorums only work in 24-node clusters.",
        "Real systems don't replicate.",
      ],
      correctIndex: 1,
      explanation: "Quorum guarantees freshness ONLY when the quorum can be assembled. During a partition, the minority side either errors out (CP) or serves stale (AP). The rule is about correctness, not availability.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Quorum Reads & Writes"
      level={4}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The tunable consistency knob in every Dynamo-style database"
      onQuizComplete={onQuizComplete}
    />
  );
}
