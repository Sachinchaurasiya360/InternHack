import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, GitBranch, Network, Pause, Play, RotateCcw } from "lucide-react";
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

/* ================================================================== */
/*  TAB 1 - Definition                                                 */
/* ================================================================== */

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>One business action. Many services. How do you keep it atomic?</h3>
      <p style={sectionDesc}>
        Booking a flight + hotel touches two services. Charging a card + reserving inventory
        touches two databases. Either both succeed or both undo — that&rsquo;s a <b>distributed
        transaction</b>. Two patterns dominate: <b>Two-Phase Commit (2PC)</b> and <b>Sagas</b>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          {
            name: "Two-Phase Commit (2PC)",
            color: SD,
            tagline: "Synchronous · blocking · strong",
            how: "A coordinator asks every participant 'can you commit?' (prepare). If everyone says yes, it tells everyone to commit. If anyone says no, everyone aborts.",
            pro: "Atomic across all participants. Hard to get wrong from the app's view.",
            con: "Blocks until every participant responds. If the coordinator dies after prepare, participants are stuck holding locks.",
            ex: "Postgres prepared transactions. XA across multiple JDBC databases.",
          },
          {
            name: "Sagas",
            color: PURPLE,
            tagline: "Asynchronous · non-blocking · eventually consistent",
            how: "Run each step independently. If a step fails, run a compensating action for every previous step (refund, release inventory, cancel booking). No global lock.",
            pro: "No blocking, scales horizontally. Survives long-running flows (hours, days).",
            con: "Each step must be idempotent and have a compensating action. App developer holds the consistency contract.",
            ex: "Uber trip lifecycle, e-commerce checkout, AWS Step Functions, Temporal workflows.",
          },
        ].map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: "18px 20px",
              border: `1.5px solid ${p.color}55`,
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              background: `${p.color}08`,
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "1rem", marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: p.color, fontWeight: 700, letterSpacing: "0.06em" }}>
                {p.tagline}
              </div>
            </div>
            <div style={{ fontSize: "0.86rem", color: "var(--eng-text-muted)", lineHeight: 1.6 }}>{p.how}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <span style={{ fontFamily: MONO, fontSize: "0.62rem", fontWeight: 800, color: SD, letterSpacing: "0.1em", marginTop: 2, flexShrink: 0 }}>PRO</span>
                <span style={{ fontSize: "0.82rem", color: "var(--eng-text)", lineHeight: 1.55 }}>{p.pro}</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <span style={{ fontFamily: MONO, fontSize: "0.62rem", fontWeight: 800, color: WARN, letterSpacing: "0.1em", marginTop: 2, flexShrink: 0 }}>CON</span>
                <span style={{ fontSize: "0.82rem", color: "var(--eng-text)", lineHeight: 1.55 }}>{p.con}</span>
              </div>
            </div>
            <div style={{ paddingTop: 8, borderTop: `1px dashed ${p.color}33`, fontFamily: MONO, fontSize: "0.74rem", color: p.color }}>
              <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>EX ·</span>
              <span style={{ color: "var(--eng-text)" }}>{p.ex}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - 2PC animation                                              */
/* ================================================================== */

type TwoPCStage = "idle" | "prepare" | "voted" | "commit" | "committed" | "aborted";

function TwoPCAnimation() {
  const [stage, setStage] = useState<TwoPCStage>("idle");
  const [failNode, setFailNode] = useState<number | null>(null);
  const [participantsReady, setParticipantsReady] = useState<boolean[]>([false, false, false]);

  const start = () => {
    setStage("prepare");
    setParticipantsReady([false, false, false]);
  };

  useEffect(() => {
    if (stage === "prepare") {
      const timer = setTimeout(() => {
        const ready = [true, true, true];
        if (failNode !== null) ready[failNode] = false;
        setParticipantsReady(ready);
        setStage("voted");
      }, 1100);
      return () => clearTimeout(timer);
    }
    if (stage === "voted") {
      const allReady = participantsReady.every(Boolean);
      const timer = setTimeout(() => setStage(allReady ? "commit" : "aborted"), 900);
      return () => clearTimeout(timer);
    }
    if (stage === "commit") {
      const timer = setTimeout(() => setStage("committed"), 1000);
      return () => clearTimeout(timer);
    }
  }, [stage, failNode, participantsReady]);

  const reset = () => {
    setStage("idle");
    setFailNode(null);
    setParticipantsReady([false, false, false]);
  };

  return (
    <div>
      <h3 style={sectionTitle}>2PC: prepare, then commit</h3>
      <p style={sectionDesc}>
        A coordinator asks all 3 participants &ldquo;can you commit?&rdquo; (phase 1). If everyone says yes,
        it tells them all to commit (phase 2). If anyone refuses or fails, everyone aborts. Toggle
        the &ldquo;fail node&rdquo; to inject a failure during prepare.
      </p>

      <div
        style={{
          background: "#0b1220",
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.15)",
          padding: 22,
        }}
      >
        <svg viewBox="0 0 720 280" width="100%" style={{ maxWidth: 760, display: "block", margin: "0 auto" }}>
          {/* coordinator */}
          <NodeBox x={310} y={20} w={100} h={50} label="Coordinator" sub={stage} color={SD} pulse={stage !== "idle" && stage !== "committed" && stage !== "aborted"} />

          {/* participants */}
          {[0, 1, 2].map((i) => {
            const x = 100 + i * 220;
            const y = 180;
            const ready = participantsReady[i];
            const isFailing = failNode === i && stage !== "idle";
            let nodeColor = NEUTRAL;
            if (stage === "voted" || stage === "commit" || stage === "committed") {
              nodeColor = ready ? SD : WARN;
            }
            if (stage === "aborted" && !ready) nodeColor = WARN;
            if (stage === "committed" && ready) nodeColor = SD;

            return (
              <g key={i}>
                {/* edge coordinator -> participant */}
                <line x1={360} y1={70} x2={x + 50} y2={180} stroke="#475569" strokeWidth={1.5} strokeDasharray="3 4" />

                {/* prepare arrow / vote arrow / commit arrow */}
                {stage === "prepare" && (
                  <motion.circle
                    r={5}
                    fill={SD}
                    initial={{ cx: 360, cy: 70 }}
                    animate={{ cx: x + 50, cy: 180 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  />
                )}
                {stage === "voted" && (
                  <motion.circle
                    r={5}
                    fill={ready ? SD : WARN}
                    initial={{ cx: x + 50, cy: 180 }}
                    animate={{ cx: 360, cy: 70 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  />
                )}
                {(stage === "commit" || stage === "committed") && participantsReady.every(Boolean) && (
                  <motion.circle
                    r={5}
                    fill={SD}
                    initial={{ cx: 360, cy: 70 }}
                    animate={{ cx: x + 50, cy: 180 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  />
                )}
                {stage === "aborted" && (
                  <motion.circle
                    r={5}
                    fill={WARN}
                    initial={{ cx: 360, cy: 70 }}
                    animate={{ cx: x + 50, cy: 180 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  />
                )}

                <NodeBox
                  x={x}
                  y={y}
                  w={100}
                  h={50}
                  label={`Participant ${i + 1}`}
                  sub={
                    stage === "idle"
                      ? "ready"
                      : stage === "prepare"
                        ? "received…"
                        : isFailing && (stage === "voted" || stage === "aborted")
                          ? "✕ refused"
                          : ready && stage === "committed"
                            ? "✓ committed"
                            : ready && stage === "voted"
                              ? "voted yes"
                              : ready && stage === "commit"
                                ? "committing…"
                                : stage === "aborted"
                                  ? "aborted"
                                  : "…"
                  }
                  color={isFailing ? WARN : nodeColor}
                  crashed={isFailing}
                />
              </g>
            );
          })}
        </svg>

        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
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
              minHeight: 56,
            }}
          >
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
              STAGE
            </span>
            {stage === "idle" && "Pick whether to inject a failure, then start the transaction."}
            {stage === "prepare" && "Phase 1 (PREPARE): coordinator asks every participant if they can commit."}
            {stage === "voted" && (failNode !== null ? `Participant ${failNode + 1} refused. Coordinator will tell everyone to abort.` : "All voted yes. Coordinator will broadcast COMMIT.")}
            {stage === "commit" && "Phase 2 (COMMIT): coordinator broadcasts commit. Participants apply and release locks."}
            {stage === "committed" && "✓ All participants committed. Transaction durable across the system."}
            {stage === "aborted" && "✕ One participant refused. Coordinator broadcasts ABORT. Everyone rolls back."}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-2 flex-wrap">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={start}
            disabled={stage !== "idle" && stage !== "committed" && stage !== "aborted"}
            style={btn(SD, stage !== "idle" && stage !== "committed" && stage !== "aborted")}
          >
            <Play className="w-3.5 h-3.5" />
            start txn
          </motion.button>
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL, marginLeft: 4 }}>fail node:</span>
          {[null, 0, 1, 2].map((i) => {
            const active = failNode === i;
            return (
              <button
                key={i ?? "none"}
                type="button"
                onClick={() => setFailNode(i)}
                disabled={stage !== "idle" && stage !== "committed" && stage !== "aborted"}
                style={{
                  padding: "5px 10px",
                  borderRadius: 4,
                  cursor: "pointer",
                  border: `1px solid ${active ? WARN : "rgba(148,163,184,0.3)"}`,
                  background: active ? `${WARN}22` : "transparent",
                  color: active ? WARN : "#94a3b8",
                  fontFamily: MONO,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                {i === null ? "none" : `P${i + 1}`}
              </button>
            );
          })}
          <div style={{ flex: 1 }} />
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL, false)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function NodeBox({ x, y, w, h, label, sub, color, pulse, crashed }: { x: number; y: number; w: number; h: number; label: string; sub: string; color: string; pulse?: boolean; crashed?: boolean }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {pulse && (
        <motion.rect
          width={w}
          height={h}
          rx={8}
          fill={color}
          initial={{ opacity: 0.25, scale: 1 }}
          animate={{ opacity: 0, scale: 1.15 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <rect width={w} height={h} rx={8} fill={`${color}22`} stroke={color} strokeWidth={1.5} strokeDasharray={crashed ? "5 4" : "0"} opacity={crashed ? 0.6 : 1} />
      <text x={w / 2} y={20} textAnchor="middle" fill="#e5e7eb" fontSize={11} fontWeight={700} fontFamily={MONO}>
        {label}
      </text>
      <text x={w / 2} y={36} textAnchor="middle" fill={color} fontSize={9.5} fontFamily={MONO}>
        {sub}
      </text>
    </g>
  );
}

function btn(color: string, disabled: boolean): CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 12px",
    borderRadius: 6,
    cursor: disabled ? "not-allowed" : "pointer",
    border: `1.5px solid ${disabled ? "rgba(148,163,184,0.25)" : color}`,
    background: disabled ? "transparent" : `${color}18`,
    color: disabled ? NEUTRAL : color,
    fontFamily: MONO,
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    opacity: disabled ? 0.5 : 1,
  };
}

/* ================================================================== */
/*  TAB 3 - Saga animation                                             */
/* ================================================================== */

interface SagaStep {
  label: string;
  compensate: string;
}

const STEPS: SagaStep[] = [
  { label: "Reserve flight", compensate: "Cancel flight" },
  { label: "Reserve hotel", compensate: "Cancel hotel" },
  { label: "Charge card", compensate: "Refund card" },
  { label: "Issue ticket", compensate: "(no compensation)" },
];

type SagaPhase = "idle" | "running" | "compensating" | "done" | "rolled-back";

function SagaAnimation() {
  const [phase, setPhase] = useState<SagaPhase>("idle");
  const [progress, setProgress] = useState(-1);
  const [failAt, setFailAt] = useState<number | null>(2);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    if (phase === "running") {
      if (progress >= STEPS.length - 1) {
        setPhase("done");
        setPlaying(false);
        return;
      }
      const nextStep = progress + 1;
      const timer = setTimeout(() => {
        if (nextStep === failAt) {
          setProgress(nextStep);
          setPhase("compensating");
        } else {
          setProgress(nextStep);
        }
      }, 900);
      return () => clearTimeout(timer);
    }
    if (phase === "compensating") {
      if (progress < 0) {
        setPhase("rolled-back");
        setPlaying(false);
        return;
      }
      const timer = setTimeout(() => setProgress((p) => p - 1), 900);
      return () => clearTimeout(timer);
    }
  }, [phase, progress, playing, failAt]);

  const start = () => {
    setProgress(-1);
    setPhase("running");
    setPlaying(true);
  };

  const reset = () => {
    setProgress(-1);
    setPhase("idle");
    setPlaying(false);
  };

  return (
    <div>
      <h3 style={sectionTitle}>Saga: walk forward, undo on failure</h3>
      <p style={sectionDesc}>
        Each step runs independently. If a step fails, the saga walks back through the completed
        steps in reverse, running each one&rsquo;s <b>compensating action</b>. There is no global lock
        and no coordinator phase, so this scales to long-running, multi-service flows.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>fail step:</span>
        {[null, 0, 1, 2, 3].map((i) => {
          const active = failAt === i;
          return (
            <button
              key={i ?? "none"}
              type="button"
              onClick={() => failAt !== i && setFailAt(i)}
              disabled={phase !== "idle" && phase !== "done" && phase !== "rolled-back"}
              style={{
                padding: "5px 10px",
                borderRadius: 4,
                cursor: "pointer",
                border: `1px solid ${active ? WARN : "rgba(148,163,184,0.3)"}`,
                background: active ? `${WARN}22` : "transparent",
                color: active ? WARN : "#94a3b8",
                fontFamily: MONO,
                fontSize: "0.7rem",
                fontWeight: 700,
              }}
            >
              {i === null ? "none" : `S${i + 1}`}
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
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {STEPS.map((s, i) => {
            const isCurrent = i === progress && phase !== "idle";
            const isComplete = i <= progress && phase === "done";
            const isCompensated = phase === "rolled-back" && i <= (failAt ?? -1);
            const isFailing = i === failAt && phase === "compensating" && i === progress;
            const isCompensating = phase === "compensating" && i < progress + 1 && i >= 0;

            let color = NEUTRAL;
            let label = s.label;
            let badge = "pending";

            if (isComplete || (i < progress && phase === "running")) { color = SD; badge = "✓ done"; }
            if (isCurrent && phase === "running") { color = WARN; badge = "running…"; }
            if (isFailing) { color = WARN; badge = "✕ failed"; label = `${s.label} → ${s.compensate}`; }
            if (isCompensating) { color = PURPLE; badge = "↶ compensating…"; label = s.compensate; }
            if (isCompensated && !isFailing && !isCompensating) { color = PURPLE; badge = "↶ compensated"; label = s.compensate; }

            return (
              <motion.div
                key={i}
                animate={{ borderColor: color, backgroundColor: `${color}10` }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: "12px 14px",
                  borderRadius: 8,
                  border: `1.5px solid ${color}`,
                  display: "grid",
                  gridTemplateColumns: "40px 1fr 130px",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div style={{ width: 28, height: 28, borderRadius: 6, background: `${color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MONO, fontWeight: 800, color, fontSize: "0.78rem" }}>
                  S{i + 1}
                </div>
                <span style={{ fontFamily: MONO, fontSize: "0.84rem", fontWeight: 700, color: "#e5e7eb" }}>
                  {label}
                </span>
                <span style={{ fontFamily: MONO, fontSize: "0.7rem", fontWeight: 700, color, letterSpacing: "0.06em", textAlign: "right" }}>
                  {badge}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button whileTap={{ scale: 0.95 }} onClick={start} disabled={phase === "running" || phase === "compensating"} style={btn(SD, phase === "running" || phase === "compensating")}>
            <Play className="w-3.5 h-3.5" />
            run saga
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setPlaying((p) => !p)}
            disabled={phase === "idle" || phase === "done" || phase === "rolled-back"}
            style={btn(NEUTRAL, phase === "idle" || phase === "done" || phase === "rolled-back")}
          >
            {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {playing ? "pause" : "resume"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL, false)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
            phase: <span style={{ color: SD, fontWeight: 700 }}>{phase}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L4_DistributedTxActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "2pc", label: "2PC", icon: <Network className="w-4 h-4" />, content: <TwoPCAnimation /> },
    { id: "saga", label: "Saga", icon: <GitBranch className="w-4 h-4" />, content: <SagaAnimation /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "In 2PC, the coordinator dies between phase 1 and phase 2. What's the worst-case behavior of participants?",
      options: [
        "They all commit immediately.",
        "They block holding locks, waiting for the coordinator's decision (this is the classic 2PC blocking problem).",
        "They abort automatically.",
        "They elect a new coordinator instantly.",
      ],
      correctIndex: 1,
      explanation: "After voting yes in phase 1, participants hold locks until the coordinator returns. This is why 2PC isn't used for long flows — a stuck coordinator stalls everyone.",
    },
    {
      question: "A saga has 4 steps. Step 3 fails. What does the saga do?",
      options: [
        "Retry step 3 forever.",
        "Run the compensating actions for steps 2 and 1 in reverse order.",
        "Continue with step 4.",
        "Throw an exception to the user and leave state inconsistent.",
      ],
      correctIndex: 1,
      explanation: "When a step fails, the saga walks back through completed steps and runs each one's compensation. State ends up logically rolled back, even though the database transactions were committed independently.",
    },
    {
      question: "Why is 2PC unsuitable for an Uber-style trip lifecycle (request → match → drive → pay)?",
      options: [
        "Uber doesn't use databases.",
        "The flow can take 30+ minutes; holding 2PC locks for that long is impossible at scale.",
        "2PC doesn't work with mobile apps.",
        "Drivers can't run 2PC.",
      ],
      correctIndex: 1,
      explanation: "2PC requires participants to hold locks until phase 2 commits. A trip taking 30 minutes would lock the driver, rider, payment service for the entire ride. Sagas (or workflows like Temporal) handle long-running flows without locks.",
    },
    {
      question: "Which property must each saga step have?",
      options: [
        "Atomicity across services.",
        "An idempotent compensating action so retries don't double-undo.",
        "Constant time complexity.",
        "Linearizability.",
      ],
      correctIndex: 1,
      explanation: "Compensating actions can be retried (network blips). They must be idempotent — refunding ₹100 twice should still result in one ₹100 refund. The forward action should also be idempotent for the same reason.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="2PC vs Sagas"
      level={4}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The classic 'how do you do checkout across services' answer"
      onQuizComplete={onQuizComplete}
    />
  );
}

