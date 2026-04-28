import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  GitBranch,
  Pause,
  Play,
  RotateCcw,
  Send,
  ShieldAlert,
} from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";

const SD = "#84cc16";
const NEUTRAL = "#64748b";
const OK = "#22c55e";
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
/*  TAB 1 - Write fan-out animation                                    */
/* ================================================================== */

type ReplicaState = "idle" | "applying" | "synced";

interface Replica {
  id: string;
  label: string;
  state: ReplicaState;
  progress: number;
  lagMs: number;
}

const INITIAL_REPLICAS: Replica[] = [
  { id: "r1", label: "Replica 1", state: "idle", progress: 0, lagMs: 0 },
  { id: "r2", label: "Replica 2", state: "idle", progress: 0, lagMs: 0 },
  { id: "r3", label: "Replica 3", state: "idle", progress: 0, lagMs: 0 },
];

function WriteFanout() {
  const [replicas, setReplicas] = useState<Replica[]>(INITIAL_REPLICAS);
  const [writing, setWriting] = useState(false);
  const [writeCount, setWriteCount] = useState(0);

  const trigger = () => {
    if (writing) return;
    setWriting(true);
    setWriteCount((c) => c + 1);
    // Each replica gets a different lag profile to feel real
    const lagProfiles = [400, 800, 1600];
    setReplicas((rs) =>
      rs.map((r, i) => ({ ...r, state: "applying", progress: 0, lagMs: lagProfiles[i] })),
    );
  };

  // tick replica progress until each is synced
  useEffect(() => {
    if (!writing) return;
    let frame = 0;
    const handle = setInterval(() => {
      frame += 60;
      setReplicas((rs) => {
        let stillApplying = false;
        const next = rs.map((r) => {
          if (r.state !== "applying") return r;
          const pct = Math.min(100, Math.round((frame / r.lagMs) * 100));
          if (pct >= 100) return { ...r, state: "synced" as ReplicaState, progress: 100 };
          stillApplying = true;
          return { ...r, progress: pct };
        });
        if (!stillApplying) {
          setWriting(false);
        }
        return next;
      });
    }, 60);
    return () => clearInterval(handle);
  }, [writing]);

  const reset = () => {
    setReplicas(INITIAL_REPLICAS);
    setWriting(false);
    setWriteCount(0);
  };

  return (
    <div>
      <h3 style={sectionTitle}>One write, many copies</h3>
      <p style={sectionDesc}>
        The client sends a write to the <b>primary</b>. The primary acks immediately (synchronous
        replication is rarer in practice), then streams the change to each replica. Each replica
        applies it at its own pace. That gap is <b>replica lag</b>.
      </p>

      <div
        style={{
          background: "#0b1220",
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.15)",
          padding: 22,
          minHeight: 380,
        }}
      >
        <svg viewBox="0 0 720 320" width="100%" style={{ maxWidth: 760, display: "block", margin: "0 auto" }}>
          <defs>
            <marker id="rep-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
            </marker>
          </defs>

          {/* edges client -> primary */}
          <line x1="80" y1="160" x2="280" y2="160" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#rep-arrow)" />
          {/* edges primary -> replicas */}
          <line x1="380" y1="160" x2="560" y2="60" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#rep-arrow)" strokeDasharray="4 4" />
          <line x1="380" y1="160" x2="560" y2="160" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#rep-arrow)" strokeDasharray="4 4" />
          <line x1="380" y1="160" x2="560" y2="260" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#rep-arrow)" strokeDasharray="4 4" />

          {/* animated write packet client -> primary */}
          <AnimatePresence>
            {writing && (
              <motion.circle
                key={`pkt-c-${writeCount}`}
                r="6"
                fill={SD}
                initial={{ cx: 80, cy: 160, opacity: 0 }}
                animate={{ cx: 280, cy: 160, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </AnimatePresence>

          {/* animated replication packets primary -> each replica */}
          {replicas.map((r, i) => {
            const targetY = [60, 160, 260][i];
            const isApplying = r.state === "applying";
            return (
              <AnimatePresence key={r.id}>
                {isApplying && (
                  <motion.circle
                    key={`pkt-${r.id}-${writeCount}`}
                    r="5"
                    fill={SD}
                    initial={{ cx: 380, cy: 160, opacity: 0 }}
                    animate={{ cx: 560, cy: targetY, opacity: 1 }}
                    transition={{
                      duration: r.lagMs / 1000,
                      ease: "linear",
                      delay: 0.4,
                    }}
                  />
                )}
              </AnimatePresence>
            );
          })}

          {/* Client */}
          <NodeBox x={20} y={130} w={120} label="Client" sub={writing ? "writing…" : "idle"} color={writing ? SD : NEUTRAL} />

          {/* Primary */}
          <NodeBox
            x={280}
            y={130}
            w={100}
            label="Primary"
            sub="leader"
            color={SD}
            pulse={writing}
          />

          {/* Replicas */}
          {replicas.map((r, i) => {
            const y = [30, 130, 230][i];
            const color = r.state === "synced" ? OK : r.state === "applying" ? SD : NEUTRAL;
            return (
              <ReplicaNode key={r.id} x={560} y={y} replica={r} color={color} />
            );
          })}
        </svg>

        {/* Controls */}
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={trigger}
            disabled={writing}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 6,
              cursor: writing ? "not-allowed" : "pointer",
              border: `1.5px solid ${writing ? "rgba(148,163,184,0.3)" : SD}`,
              background: writing ? "transparent" : `${SD}18`,
              color: writing ? NEUTRAL : SD,
              fontFamily: MONO,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "all 0.18s",
            }}
          >
            <Send className="w-3.5 h-3.5" />
            {writing ? "in flight…" : "send write"}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.96 }}
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
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL, alignSelf: "center" }}>
            writes sent: <span style={{ color: "#e5e7eb" }}>{writeCount}</span>
          </span>
        </div>
      </div>

      {/* takeaway */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        style={{
          marginTop: 16,
          padding: "14px 16px",
          borderRadius: 8,
          border: "1px solid var(--eng-border)",
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          TAKEAWAY
        </div>
        <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
          The primary returned to the client almost immediately. Replica 1 caught up in 0.4s,
          Replica 2 in 0.8s, Replica 3 in 1.6s. A read against Replica 3 in that window would
          return the <i>old</i> value. That window is your replica lag, and it&rsquo;s the entire
          source of read-your-own-writes bugs.
        </div>
      </motion.div>
    </div>
  );
}

function NodeBox({
  x,
  y,
  w,
  label,
  sub,
  color,
  pulse,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
  sub: string;
  color: string;
  pulse?: boolean;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {pulse && (
        <motion.rect
          width={w}
          height={60}
          rx={8}
          fill={color}
          initial={{ opacity: 0.35, scale: 1 }}
          animate={{ opacity: 0, scale: 1.15 }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <rect width={w} height={60} rx={8} fill={`${color}22`} stroke={color} strokeWidth={1.5} />
      <text x={w / 2} y={26} textAnchor="middle" fill="#e5e7eb" fontSize="13" fontWeight={700} fontFamily={MONO}>
        {label}
      </text>
      <text x={w / 2} y={46} textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily={MONO}>
        {sub}
      </text>
    </g>
  );
}

function ReplicaNode({ x, y, replica, color }: { x: number; y: number; replica: Replica; color: string }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect width={130} height={60} rx={8} fill={`${color}22`} stroke={color} strokeWidth={1.5} />
      <text x={65} y={22} textAnchor="middle" fill="#e5e7eb" fontSize="12" fontWeight={700} fontFamily={MONO}>
        {replica.label}
      </text>
      {replica.state === "applying" && (
        <>
          <rect x={12} y={36} width={106} height={6} rx={3} fill="rgba(148,163,184,0.2)" />
          <motion.rect
            x={12}
            y={36}
            height={6}
            rx={3}
            fill={color}
            initial={{ width: 0 }}
            animate={{ width: (106 * replica.progress) / 100 }}
            transition={{ duration: 0.06, ease: "linear" }}
          />
          <text x={65} y={54} textAnchor="middle" fill={color} fontSize="9" fontFamily={MONO}>
            applying… {replica.progress}%
          </text>
        </>
      )}
      {replica.state === "synced" && (
        <text x={65} y={48} textAnchor="middle" fill={color} fontSize="10" fontWeight={700} fontFamily={MONO}>
          ✓ synced
        </text>
      )}
      {replica.state === "idle" && (
        <text x={65} y={48} textAnchor="middle" fill={color} fontSize="10" fontFamily={MONO}>
          waiting
        </text>
      )}
    </g>
  );
}

/* ================================================================== */
/*  TAB 2 - Replica lag & read paths                                   */
/* ================================================================== */

type ReadMode = "primary" | "replica";

function ReadPaths() {
  const [mode, setMode] = useState<ReadMode>("primary");
  const [tick, setTick] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const h = setInterval(() => setTick((t) => t + 1), 1600);
    return () => clearInterval(h);
  }, [playing]);

  const value = tick;
  const stale = Math.max(0, tick - 1);

  return (
    <div>
      <h3 style={sectionTitle}>Where do reads go?</h3>
      <p style={sectionDesc}>
        Routing reads to replicas takes load off the primary. The price is staleness. Toggle the
        read path and watch what the user sees as the counter ticks up every 1.6s.
      </p>

      <div className="flex items-center gap-2 mb-5">
        {(["primary", "replica"] as ReadMode[]).map((m) => {
          const active = mode === m;
          return (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
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
              read from {m}
            </button>
          );
        })}
        <div style={{ flex: 1 }} />
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 12px",
            borderRadius: 6,
            cursor: "pointer",
            border: "1.5px solid var(--eng-border)",
            background: "transparent",
            color: "var(--eng-text-muted)",
            fontFamily: MONO,
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          {playing ? "pause" : "play"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Sample
          label="Primary holds"
          subtitle="always fresh"
          value={value}
          highlight={mode === "primary"}
          color={SD}
        />
        <Sample
          label="Replica holds"
          subtitle="lagging by 1 tick"
          value={stale}
          highlight={mode === "replica"}
          color={NEUTRAL}
        />
      </div>

      <motion.div
        key={mode}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{
          marginTop: 16,
          padding: "14px 16px",
          borderRadius: 8,
          border: "1px solid var(--eng-border)",
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          USER SEES
        </div>
        <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
          {mode === "primary"
            ? "Latest value, every time. But the primary is doing every read and every write. That's a single bottleneck for the entire fleet."
            : "Old value sometimes. The user posted, then opened their feed, and didn't see their own post. Read-your-own-writes failed."}
        </div>
      </motion.div>
    </div>
  );
}

function Sample({ label, subtitle, value, highlight, color }: { label: string; subtitle: string; value: number; highlight: boolean; color: string }) {
  return (
    <motion.div
      animate={{ borderColor: highlight ? color : "var(--eng-border)" }}
      transition={{ duration: 0.25 }}
      style={{
        border: "1.5px solid var(--eng-border)",
        borderRadius: 10,
        padding: "18px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {highlight && (
        <motion.div
          layoutId="read-pointer"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: color,
          }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
        {label}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          style={{
            fontFamily: MONO,
            fontSize: "2rem",
            fontWeight: 800,
            color: "var(--eng-text)",
            lineHeight: 1.1,
          }}
        >
          v{value}
        </motion.div>
      </AnimatePresence>
      <div style={{ fontSize: "0.75rem", color: "var(--eng-text-muted)", marginTop: 4 }}>
        {subtitle}
      </div>
    </motion.div>
  );
}

/* ================================================================== */
/*  TAB 3 - Failover                                                   */
/* ================================================================== */

type FailoverStage = "healthy" | "primary-down" | "promoting" | "failed-over";

function Failover() {
  const [stage, setStage] = useState<FailoverStage>("healthy");

  const stages: { id: FailoverStage; label: string; desc: string }[] = [
    { id: "healthy", label: "Healthy", desc: "Primary serves writes. Replicas stream changes and serve reads." },
    { id: "primary-down", label: "Primary fails", desc: "Crash, network partition, hardware failure. Writes start to error out." },
    { id: "promoting", label: "Promoting replica", desc: "Coordinator picks the most up-to-date replica and promotes it." },
    { id: "failed-over", label: "Failed over", desc: "New primary accepts writes. Old primary, when it returns, becomes a replica." },
  ];

  return (
    <div>
      <h3 style={sectionTitle}>What happens when the primary dies</h3>
      <p style={sectionDesc}>
        Replication is also your failover plan. Watch the cluster recover. Each step has a real
        production cost in latency and lost writes.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        {stages.map((s, i) => {
          const active = s.id === stage;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setStage(s.id)}
              style={{
                fontFamily: MONO,
                fontSize: "0.66rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "6px 10px",
                borderRadius: 4,
                cursor: "pointer",
                border: `1px solid ${active ? SD : "rgba(148,163,184,0.25)"}`,
                background: active ? `${SD}22` : "transparent",
                color: active ? SD : NEUTRAL,
                transition: "all 0.18s",
              }}
            >
              {String(i + 1).padStart(2, "0")} · {s.label}
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
          minHeight: 280,
        }}
      >
        <svg viewBox="0 0 720 240" width="100%" style={{ maxWidth: 760, display: "block", margin: "0 auto" }}>
          {/* primary box */}
          <FailoverNode
            x={60}
            y={90}
            label="Primary"
            sub={stage === "primary-down" ? "DOWN" : stage === "failed-over" ? "demoted" : "leader"}
            color={
              stage === "healthy"
                ? SD
                : stage === "primary-down"
                  ? "#475569"
                  : stage === "promoting"
                    ? "#475569"
                    : NEUTRAL
            }
            crashed={stage === "primary-down" || stage === "promoting"}
            small={false}
          />

          {/* replicas */}
          {[0, 1, 2].map((i) => {
            const promoted = stage === "promoting" && i === 0;
            const isNewPrimary = stage === "failed-over" && i === 0;
            const color = isNewPrimary ? SD : promoted ? "#fbbf24" : NEUTRAL;
            const sub = isNewPrimary ? "leader" : promoted ? "promoting…" : "replica";
            return (
              <FailoverNode
                key={i}
                x={420}
                y={20 + i * 90}
                label={isNewPrimary ? "Primary" : `Replica ${i + 1}`}
                sub={sub}
                color={color}
                crashed={false}
                small
                pulse={promoted}
              />
            );
          })}

          {/* edges */}
          {stage !== "primary-down" && stage !== "promoting" && (
            <>
              <line x1={220} y1={120} x2={420} y2={50} stroke="#475569" strokeWidth={1.2} strokeDasharray="4 4" />
              <line x1={220} y1={120} x2={420} y2={140} stroke="#475569" strokeWidth={1.2} strokeDasharray="4 4" />
              <line x1={220} y1={120} x2={420} y2={230} stroke="#475569" strokeWidth={1.2} strokeDasharray="4 4" />
            </>
          )}

          {stage === "primary-down" && (
            <motion.text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              x={140}
              y={220}
              textAnchor="middle"
              fill={SD}
              fontSize={11}
              fontWeight={700}
              fontFamily={MONO}
            >
              writes failing · alerts firing
            </motion.text>
          )}
        </svg>

        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{
              marginTop: 16,
              padding: "12px 14px",
              background: "rgba(15,23,42,0.6)",
              borderTop: "1px solid rgba(148,163,184,0.12)",
              borderRadius: 6,
              fontSize: "0.86rem",
              color: "#e5e7eb",
              lineHeight: 1.55,
            }}
          >
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
              STEP {stages.findIndex((s) => s.id === stage) + 1}
            </span>
            {stages.find((s) => s.id === stage)?.desc}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function FailoverNode({
  x,
  y,
  label,
  sub,
  color,
  crashed,
  small,
  pulse,
}: {
  x: number;
  y: number;
  label: string;
  sub: string;
  color: string;
  crashed: boolean;
  small: boolean;
  pulse?: boolean;
}) {
  const w = small ? 160 : 160;
  const h = small ? 60 : 70;
  return (
    <g transform={`translate(${x}, ${y})`}>
      {pulse && (
        <motion.rect
          width={w}
          height={h}
          rx={8}
          fill={color}
          initial={{ opacity: 0.35, scale: 1 }}
          animate={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <rect
        width={w}
        height={h}
        rx={8}
        fill={`${color}22`}
        stroke={color}
        strokeWidth={1.5}
        strokeDasharray={crashed ? "5 4" : "0"}
        opacity={crashed ? 0.5 : 1}
      />
      <text x={w / 2} y={small ? 26 : 30} textAnchor="middle" fill="#e5e7eb" fontSize={13} fontWeight={700} fontFamily={MONO} opacity={crashed ? 0.55 : 1}>
        {crashed ? `✕ ${label}` : label}
      </text>
      <text x={w / 2} y={small ? 46 : 52} textAnchor="middle" fill={color} fontSize={10} fontFamily={MONO} opacity={crashed ? 0.7 : 1}>
        {sub}
      </text>
    </g>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L3_ReplicationActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "fanout", label: "Write Fan-out", icon: <GitBranch className="w-4 h-4" />, content: <WriteFanout /> },
    { id: "reads", label: "Read Paths", icon: <Activity className="w-4 h-4" />, content: <ReadPaths /> },
    { id: "failover", label: "Failover", icon: <ShieldAlert className="w-4 h-4" />, content: <Failover /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "A user posts a tweet, then refreshes their profile and doesn't see it. Reads are routed to async replicas. What's the cleanest fix that doesn't kill replica scale-out?",
      options: [
        "Move all reads back to the primary.",
        "Pin a user's reads to the primary for a short window after they write.",
        "Disable replication.",
        "Add more replicas.",
      ],
      correctIndex: 1,
      explanation: "Read-your-own-writes is satisfied by routing the writer's reads to the primary briefly, while everyone else still hits replicas. This preserves the read scale-out for the bulk of traffic.",
    },
    {
      question: "Why is async replication far more common than synchronous in production?",
      options: [
        "Synchronous is older.",
        "Synchronous makes every write wait for the slowest replica before returning to the client.",
        "Async never loses data.",
        "Async is required by SQL.",
      ],
      correctIndex: 1,
      explanation: "With sync replication, each write blocks on the slowest acknowledging replica. The latency cost is high and a slow replica can stall the whole cluster.",
    },
    {
      question: "Primary just died. Which replica should be promoted?",
      options: [
        "The oldest replica.",
        "The replica with the most recent applied write (smallest replication lag).",
        "Any replica, they're all identical.",
        "Whichever replica responds first to a ping.",
      ],
      correctIndex: 1,
      explanation: "Promoting the most up-to-date replica minimizes data loss. The other replicas then re-sync from the new primary's state.",
    },
    {
      question: "Adding 5 read replicas helps you scale ____ but not ____.",
      options: [
        "writes / reads",
        "reads / writes",
        "storage / latency",
        "consistency / availability",
      ],
      correctIndex: 1,
      explanation: "Replicas multiply read throughput (each one can answer queries) but every write still has to be applied on every replica, so write capacity is bounded by the primary.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Database Replication"
      level={3}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The standard 'how do you scale reads' answer in HLD rounds"
      onQuizComplete={onQuizComplete}
    />
  );
}

