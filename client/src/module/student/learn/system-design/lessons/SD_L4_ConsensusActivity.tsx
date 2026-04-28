import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Crown, Database, Pause, Play, RotateCcw, Skull, Vote } from "lucide-react";
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
      <h3 style={sectionTitle}>Consensus: getting a group to agree on one value</h3>
      <p style={sectionDesc}>
        Consensus is the problem of getting <b>N independent nodes</b> to agree on a single
        decision (the next entry in a log, the new leader, the value of a config). It must
        survive node crashes, network delays, and message reordering.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
      >
        {[
          { k: "Safety", v: "Two nodes never decide on different values for the same slot." },
          { k: "Liveness", v: "Eventually a value is decided, given a stable enough network." },
          { k: "Fault tolerance", v: "Tolerates up to ⌊(N-1)/2⌋ node failures (e.g. 5 nodes survives 2 down)." },
        ].map((c) => (
          <motion.div
            key={c.k}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
              {c.k.toUpperCase()}
            </div>
            <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.55 }}>{c.v}</div>
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
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>etcd</b> (used by Kubernetes for cluster state) and <b>Consul</b> use Raft. <b>ZooKeeper</b>{" "}
          uses ZAB (a Paxos cousin). <b>CockroachDB</b> shards your DB and runs Raft per shard.
          Whenever a system says &ldquo;survives N/2 failures,&rdquo; that&rsquo;s consensus under the hood.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Election animation                                         */
/* ================================================================== */

type NodeState = "follower" | "candidate" | "leader" | "down";
type Phase = "stable" | "leader-down" | "election" | "elected";

interface RaftNode {
  id: number;
  state: NodeState;
  term: number;
  votedFor: number | null;
}

const NODE_POSITIONS = [
  { x: 360, y: 50 },
  { x: 580, y: 130 },
  { x: 510, y: 290 },
  { x: 210, y: 290 },
  { x: 140, y: 130 },
];

function ElectionAnimation() {
  const [nodes, setNodes] = useState<RaftNode[]>([
    { id: 0, state: "leader", term: 1, votedFor: 0 },
    { id: 1, state: "follower", term: 1, votedFor: 0 },
    { id: 2, state: "follower", term: 1, votedFor: 0 },
    { id: 3, state: "follower", term: 1, votedFor: 0 },
    { id: 4, state: "follower", term: 1, votedFor: 0 },
  ]);
  const [phase, setPhase] = useState<Phase>("stable");

  const killLeader = () => {
    if (phase !== "stable") return;
    setNodes((ns) => ns.map((n) => (n.state === "leader" ? { ...n, state: "down" } : n)));
    setPhase("leader-down");
  };

  const reset = () => {
    setNodes([
      { id: 0, state: "leader", term: 1, votedFor: 0 },
      { id: 1, state: "follower", term: 1, votedFor: 0 },
      { id: 2, state: "follower", term: 1, votedFor: 0 },
      { id: 3, state: "follower", term: 1, votedFor: 0 },
      { id: 4, state: "follower", term: 1, votedFor: 0 },
    ]);
    setPhase("stable");
  };

  // Drive the election sequence
  useEffect(() => {
    if (phase === "leader-down") {
      const t = setTimeout(() => {
        // pick the next non-down node as the candidate
        const candidate = nodes.find((n) => n.state !== "down");
        if (!candidate) return;
        setNodes((ns) =>
          ns.map((n) =>
            n.id === candidate.id
              ? { ...n, state: "candidate" as NodeState, term: n.term + 1, votedFor: n.id }
              : n.state === "down"
                ? n
                : { ...n, state: "follower" as NodeState, votedFor: null },
          ),
        );
        setPhase("election");
      }, 1400);
      return () => clearTimeout(t);
    }
    if (phase === "election") {
      const t = setTimeout(() => {
        // candidate gathers votes from live followers
        setNodes((ns) => {
          const candidate = ns.find((n) => n.state === "candidate");
          if (!candidate) return ns;
          return ns.map((n) =>
            n.state === "down"
              ? n
              : n.state === "candidate"
                ? { ...n, state: "leader" as NodeState }
                : { ...n, state: "follower" as NodeState, term: candidate.term, votedFor: candidate.id },
          );
        });
        setPhase("elected");
      }, 1800);
      return () => clearTimeout(t);
    }
    if (phase === "elected") {
      const t = setTimeout(() => setPhase("stable"), 1200);
      return () => clearTimeout(t);
    }
  }, [phase, nodes]);

  const candidate = nodes.find((n) => n.state === "candidate");
  const currentLeader = nodes.find((n) => n.state === "leader");

  return (
    <div>
      <h3 style={sectionTitle}>Five nodes. One leader. Kill the leader.</h3>
      <p style={sectionDesc}>
        Raft keeps one elected leader at a time. Followers wait for the leader&rsquo;s heartbeat. If
        the heartbeat stops, a follower becomes a <b>candidate</b>, increments the term, and asks
        others for votes. Whoever gets a majority wins the new term.
      </p>

      <div
        style={{
          background: "#0b1220",
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.15)",
          padding: 22,
          minHeight: 420,
          position: "relative",
        }}
      >
        <svg viewBox="0 0 720 360" width="100%" style={{ maxWidth: 760, display: "block", margin: "0 auto" }}>
          {/* heartbeats from leader to followers when stable */}
          {phase === "stable" && currentLeader && nodes.map((n) => {
            if (n.state !== "follower") return null;
            const lp = NODE_POSITIONS[currentLeader.id];
            const np = NODE_POSITIONS[n.id];
            return (
              <motion.line
                key={`hb-${n.id}`}
                x1={lp.x}
                y1={lp.y}
                x2={np.x}
                y2={np.y}
                stroke={SD}
                strokeOpacity={0.35}
                strokeWidth={1}
                strokeDasharray="2 4"
              />
            );
          })}

          {/* heartbeat packets */}
          {phase === "stable" && currentLeader && nodes.filter((n) => n.state === "follower").map((n) => {
            const lp = NODE_POSITIONS[currentLeader.id];
            const np = NODE_POSITIONS[n.id];
            return (
              <motion.circle
                key={`hbp-${n.id}`}
                r={3}
                fill={SD}
                animate={{ cx: [lp.x, np.x], cy: [lp.y, np.y] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: n.id * 0.2 }}
              />
            );
          })}

          {/* vote requests during election */}
          {phase === "election" && candidate && nodes.filter((n) => n.state !== "down" && n.state !== "candidate").map((n) => {
            const cp = NODE_POSITIONS[candidate.id];
            const np = NODE_POSITIONS[n.id];
            return (
              <g key={`vr-${n.id}`}>
                <motion.line
                  x1={cp.x}
                  y1={cp.y}
                  x2={np.x}
                  y2={np.y}
                  stroke={WARN}
                  strokeWidth={1.5}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.circle
                  r={4}
                  fill={WARN}
                  initial={{ cx: cp.x, cy: cp.y }}
                  animate={{ cx: np.x, cy: np.y }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                />
              </g>
            );
          })}

          {/* nodes */}
          {nodes.map((n) => {
            const p = NODE_POSITIONS[n.id];
            return <RaftNodeBox key={n.id} x={p.x} y={p.y} node={n} />;
          })}
        </svg>

        {/* status strip */}
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            style={{
              padding: "12px 14px",
              background: "rgba(15,23,42,0.6)",
              borderRadius: 6,
              fontSize: "0.86rem",
              color: "#e5e7eb",
              lineHeight: 1.55,
              marginBottom: 12,
            }}
          >
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
              PHASE
            </span>
            {phase === "stable" && `Leader N${currentLeader?.id} sends heartbeats every ~150ms. Term ${currentLeader?.term}.`}
            {phase === "leader-down" && "Leader is unreachable. Followers wait for an election timeout (randomized 150-300ms)."}
            {phase === "election" && `Candidate N${candidate?.id} requests votes for term ${candidate?.term}. Each live node votes at most once per term.`}
            {phase === "elected" && `N${currentLeader?.id} wins majority. New leader for term ${currentLeader?.term}.`}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-2 flex-wrap">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={killLeader}
            disabled={phase !== "stable"}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 6,
              cursor: phase === "stable" ? "pointer" : "not-allowed",
              border: `1.5px solid ${phase === "stable" ? WARN : "rgba(148,163,184,0.25)"}`,
              background: phase === "stable" ? `${WARN}18` : "transparent",
              color: phase === "stable" ? WARN : NEUTRAL,
              fontFamily: MONO,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <Skull className="w-3.5 h-3.5" />
            kill leader
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
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function RaftNodeBox({ x, y, node }: { x: number; y: number; node: RaftNode }) {
  const color =
    node.state === "leader"
      ? SD
      : node.state === "candidate"
        ? WARN
        : node.state === "down"
          ? "#475569"
          : NEUTRAL;
  const Icon =
    node.state === "leader" ? Crown : node.state === "candidate" ? Vote : node.state === "down" ? Skull : Database;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {node.state === "leader" && (
        <motion.circle
          r={36}
          fill={color}
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{ opacity: 0, scale: 1.4 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <motion.circle
        r={28}
        animate={{ fill: `${color}22`, stroke: color }}
        transition={{ duration: 0.3 }}
        strokeWidth={1.5}
      />
      <foreignObject x={-12} y={-22} width={24} height={24}>
        <div style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon width={16} height={16} style={{ color }} />
        </div>
      </foreignObject>
      <text x={0} y={10} textAnchor="middle" fill={color} fontSize={11} fontWeight={700} fontFamily={MONO}>
        N{node.id}
      </text>
      <text x={0} y={22} textAnchor="middle" fill={NEUTRAL} fontSize={9} fontFamily={MONO}>
        t{node.term}
      </text>
    </g>
  );
}

/* ================================================================== */
/*  TAB 3 - Log replication                                            */
/* ================================================================== */

interface LogEntry {
  term: number;
  cmd: string;
}

const SAMPLE_LOG: LogEntry[] = [
  { term: 1, cmd: "x = 1" },
  { term: 1, cmd: "y = 2" },
  { term: 2, cmd: "x = 3" },
  { term: 2, cmd: "z = 9" },
];

function LogReplication() {
  const [committed, setCommitted] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    if (committed >= SAMPLE_LOG.length) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setCommitted((c) => Math.min(SAMPLE_LOG.length, c + 1)), 1200);
    return () => clearTimeout(t);
  }, [playing, committed]);

  return (
    <div>
      <h3 style={sectionTitle}>The leader appends. Followers catch up. Quorum commits.</h3>
      <p style={sectionDesc}>
        Once a leader is elected, every client write goes to the leader, gets appended to its log,
        and is replicated to followers. An entry is <b>committed</b> only after a majority of
        nodes (incl. the leader) have it. Then it&rsquo;s safe to apply to the state machine.
      </p>

      <div
        style={{
          background: "#0b1220",
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.15)",
          padding: 22,
        }}
      >
        <div style={{ display: "grid", gap: 10 }}>
          {[0, 1, 2].map((nodeIdx) => {
            const isLeader = nodeIdx === 0;
            // followers lag a bit behind for visual interest
            const lag = nodeIdx === 0 ? 0 : nodeIdx === 1 ? 0 : 1;
            const visibleEntries = Math.max(0, committed - lag);
            return (
              <div key={nodeIdx} style={{ display: "grid", gridTemplateColumns: "120px 1fr", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {isLeader ? <Crown className="w-3.5 h-3.5" style={{ color: SD }} /> : <Database className="w-3.5 h-3.5" style={{ color: NEUTRAL }} />}
                  <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 700, color: isLeader ? SD : "#e5e7eb" }}>
                    {isLeader ? "Leader" : `Replica ${nodeIdx}`}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {SAMPLE_LOG.map((e, i) => {
                    const present = i < visibleEntries;
                    const isCommitted = i < committed - 1;
                    return (
                      <AnimatePresence key={i}>
                        {present && (
                          <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.8, y: -6 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 400, damping: 22 }}
                            style={{
                              padding: "6px 10px",
                              borderRadius: 4,
                              fontFamily: MONO,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              border: `1px solid ${isCommitted ? `${SD}55` : "rgba(148,163,184,0.3)"}`,
                              background: isCommitted ? `${SD}22` : "transparent",
                              color: isCommitted ? SD : "#e5e7eb",
                            }}
                          >
                            <span style={{ color: NEUTRAL, marginRight: 4 }}>t{e.term}</span>
                            {e.cmd}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (committed >= SAMPLE_LOG.length) setCommitted(0);
              setPlaying((p) => !p);
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 6,
              cursor: "pointer",
              border: `1.5px solid ${SD}`,
              background: `${SD}18`,
              color: SD,
              fontFamily: MONO,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {committed >= SAMPLE_LOG.length ? "replay" : playing ? "pause" : "play"}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setPlaying(false);
              setCommitted(0);
            }}
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
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
          <span style={{ flex: 1 }} />
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
            committed: <span style={{ color: SD, fontWeight: 700 }}>{Math.max(0, committed - 1)}</span> / {SAMPLE_LOG.length}
          </span>
        </div>

        <div style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.84rem", color: "#e5e7eb", lineHeight: 1.55 }}>
          <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
            COMMIT RULE
          </span>
          An entry is committed once it&rsquo;s on a majority of nodes. The lime-filled boxes above
          are committed; the bordered ones are replicated but not yet committed.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L4_ConsensusActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "election", label: "Election", icon: <Vote className="w-4 h-4" />, content: <ElectionAnimation /> },
    { id: "log", label: "Log Replication", icon: <Database className="w-4 h-4" />, content: <LogReplication /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Your Raft cluster has 5 nodes. How many can fail at once and still accept writes?",
      options: ["1", "2", "3", "4"],
      correctIndex: 1,
      explanation: "Raft needs a majority quorum (3 of 5). With 2 nodes down, 3 are still up — that's the majority. With 3 down, no majority is reachable, so writes stop.",
    },
    {
      question: "Why is the term number incremented every time a new election starts?",
      options: [
        "To make terms easier to read in logs.",
        "To prevent stale leaders from continuing to act after a network partition. Followers reject any RPC with an older term.",
        "To match the Raft paper.",
        "To trigger garbage collection.",
      ],
      correctIndex: 1,
      explanation: "Terms are monotonic. If an old leader returns from a partition, its messages have a lower term and are rejected. This is what guarantees safety: at most one leader is recognized per term.",
    },
    {
      question: "An entry is replicated to 2 of 3 nodes (the leader and one follower). Is it committed?",
      options: [
        "No, it needs all 3 nodes.",
        "Yes — 2 of 3 is a majority quorum, so the entry is committed and safe to apply.",
        "Only if the leader is in DC-1.",
        "Only after 100ms.",
      ],
      correctIndex: 1,
      explanation: "Quorum in a 3-node cluster is 2. Once 2 nodes have the entry (leader + 1 follower), it's committed and can be applied. The 3rd node will catch up via the next AppendEntries.",
    },
    {
      question: "Which real-world system is built on Raft consensus?",
      options: ["Redis", "etcd (the Kubernetes datastore)", "Memcached", "S3"],
      correctIndex: 1,
      explanation: "etcd uses Raft to keep the Kubernetes cluster state consistent across control-plane nodes. CockroachDB, Consul, and TiKV are other well-known Raft consumers.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Consensus & Leader Election"
      level={4}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The mechanism behind every CP database's leader election"
      onQuizComplete={onQuizComplete}
    />
  );
}
