import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Check, X, Zap, Shield, Activity, Clock, Gauge, RotateCcw, ListChecks } from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  SD,
  MONO,
  sectionTitle,
  sectionDesc,
  staggerContainer,
  cardEntrance,
  cardHover,
} from "./_shared/styles";

const FR = "#3b82f6";
const NFR = "#8b5cf6";

/* ================================================================== */
/*  TAB 1 - The definitions + examples                                 */
/* ================================================================== */

function Definitions() {
  return (
    <div>
      <h3 style={sectionTitle}>Two kinds of requirements, two kinds of tradeoffs</h3>
      <p style={sectionDesc}>
        Before you design anything, you need two lists. Functional = <em>what the system does</em>.
        Non-functional = <em>how well it does it</em>. Every senior engineer starts a design
        interview by writing these on the board.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
      >
        {/* Functional */}
        <motion.div
          variants={cardEntrance}
          whileHover={cardHover}
          style={{
            border: `1.5px solid ${FR}`, borderRadius: 10, background: `${FR}08`,
            padding: "16px 18px",
          }}
        >
          <div
            style={{
              fontFamily: MONO, fontSize: "0.68rem", fontWeight: 800,
              letterSpacing: "0.1em", color: FR, marginBottom: 8,
            }}
          >
            FUNCTIONAL · WHAT IT DOES
          </div>
          <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--eng-text)", marginBottom: 10 }}>
            Features. Capabilities. Verbs.
          </div>
          <div style={{ fontSize: "0.85rem", color: "var(--eng-text-muted)", marginBottom: 10, lineHeight: 1.55 }}>
            Can be stated as &ldquo;The system shall [verb phrase]&rdquo;. If it doesn&rsquo;t work, the feature is
            broken - the app literally cannot do the thing.
          </div>
          <ul style={{ margin: 0, paddingLeft: 16, fontSize: "0.84rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
            <li>Users can send messages to any other user.</li>
            <li>Users can upload photos up to 10MB.</li>
            <li>Drivers see ride requests within 500m.</li>
            <li>Admins can ban abusive accounts.</li>
          </ul>
        </motion.div>

        {/* Non-Functional */}
        <motion.div
          variants={cardEntrance}
          whileHover={cardHover}
          style={{
            border: `1.5px solid ${NFR}`, borderRadius: 10, background: `${NFR}08`,
            padding: "16px 18px",
          }}
        >
          <div
            style={{
              fontFamily: MONO, fontSize: "0.68rem", fontWeight: 800,
              letterSpacing: "0.1em", color: NFR, marginBottom: 8,
            }}
          >
            NON-FUNCTIONAL · HOW WELL
          </div>
          <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--eng-text)", marginBottom: 10 }}>
            Quality attributes. Numbers. Adjectives.
          </div>
          <div style={{ fontSize: "0.85rem", color: "var(--eng-text-muted)", marginBottom: 10, lineHeight: 1.55 }}>
            Expressed with units - milliseconds, nines, RPS, dollars. Often called the &ldquo;-ilities&rdquo;:
            scalability, availability, reliability, security, maintainability.
          </div>
          <ul style={{ margin: 0, paddingLeft: 16, fontSize: "0.84rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
            <li>99.9% uptime (43 min downtime / month).</li>
            <li>Message delivery under 200ms p99.</li>
            <li>Support 10M concurrent connections.</li>
            <li>All PII encrypted at rest.</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* The five NFRs senior engineers always check */}
      <div style={{ marginTop: 22 }}>
        <div
          style={{
            fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800,
            letterSpacing: "0.1em", color: SD, marginBottom: 10,
          }}
        >
          THE FIVE NFRS SENIOR ENGINEERS CHECK EVERY TIME
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10 }}
        >
          <NFRChip icon={<Zap className="w-4 h-4" />} label="Scalability" unit="RPS / users / GB" example="Handle 10x next-year traffic" />
          <NFRChip icon={<Activity className="w-4 h-4" />} label="Availability" unit="9s (99.9%, 99.99%)" example="43 min / 4 min monthly downtime" />
          <NFRChip icon={<Clock className="w-4 h-4" />} label="Latency" unit="ms (p50, p99)" example="p99 &lt; 200ms" />
          <NFRChip icon={<Shield className="w-4 h-4" />} label="Durability" unit="9s of durability" example="99.999999999% - 11 nines" />
          <NFRChip icon={<Gauge className="w-4 h-4" />} label="Consistency" unit="strong / eventual" example="Reads see last write?" />
        </motion.div>
      </div>
    </div>
  );
}

function NFRChip({ icon, label, unit, example }: { icon: React.ReactNode; label: string; unit: string; example: string }) {
  return (
    <motion.div
      variants={cardEntrance}
      whileHover={cardHover}
      className="card-eng"
      style={{ padding: "12px 14px" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, color: NFR }}>
        {icon}
        <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--eng-text)" }}>{label}</span>
      </div>
      <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: "var(--eng-text-muted)", marginBottom: 4 }}>
        units: {unit}
      </div>
      <div style={{ fontSize: "0.78rem", color: "var(--eng-text)", lineHeight: 1.4 }}>
        e.g. {example}
      </div>
    </motion.div>
  );
}

/* ================================================================== */
/*  TAB 2 - Sorter: drop cards into FR vs NFR buckets                  */
/* ================================================================== */

interface ReqCard {
  id: number;
  text: string;
  correct: "FR" | "NFR";
  explain: string;
}

const CARDS: ReqCard[] = [
  { id: 1, text: "Users can like and comment on a post.", correct: "FR", explain: "It's a feature the system shall do." },
  { id: 2, text: "99.95% uptime measured monthly.", correct: "NFR", explain: "Quality attribute (availability), stated with a number." },
  { id: 3, text: "Search returns results in under 100ms at p95.", correct: "NFR", explain: "Latency - a how-well metric. Has units (ms) and a percentile." },
  { id: 4, text: "The app supports login via Google and email.", correct: "FR", explain: "Feature / capability. System shall support these auth methods." },
  { id: 5, text: "All payment data must be encrypted in transit and at rest.", correct: "NFR", explain: "Security is a quality attribute. Classic NFR." },
  { id: 6, text: "Admin can export user data as CSV.", correct: "FR", explain: "A feature the system provides." },
  { id: 7, text: "The system should handle 10,000 concurrent users.", correct: "NFR", explain: "Scalability target - how well the system scales." },
  { id: 8, text: "Videos auto-play when they come into view.", correct: "FR", explain: "A behavioural feature." },
  { id: 9, text: "No more than 1 hour of data may be lost in a disaster (RPO ≤ 1h).", correct: "NFR", explain: "Reliability / DR objective - a quality attribute (not durability, which is about committed-write loss probability)." },
  { id: 10, text: "Students can submit assignments up to 1 minute after deadline with a penalty.", correct: "FR", explain: "Business rule expressed as feature behavior." },
];

function Sorter() {
  const [placed, setPlaced] = useState<Record<number, "FR" | "NFR" | null>>({});

  function assign(id: number, side: "FR" | "NFR") {
    setPlaced((p) => ({ ...p, [id]: side }));
  }
  function reset() { setPlaced({}); }

  const score = Object.entries(placed).filter(([id, side]) => {
    const c = CARDS.find((c) => c.id === Number(id));
    return c && side === c.correct;
  }).length;
  const answered = Object.values(placed).filter((v) => v !== null && v !== undefined).length;

  return (
    <div>
      <h3 style={sectionTitle}>Sort the requirement</h3>
      <p style={sectionDesc}>
        Real statements from real product specs. Click <strong>FR</strong> or <strong>NFR</strong> for each. Wrong
        answers show you why.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "grid", gap: 8 }}
      >
        {CARDS.map((c) => {
          const choice = placed[c.id];
          const correct = choice === c.correct;
          return (
            <motion.div
              key={c.id}
              variants={cardEntrance}
              layout
              className="card-eng"
              style={{
                padding: "11px 14px", display: "flex", gap: 12, alignItems: "center",
                borderLeft: choice ? `3px solid ${correct ? "#22c55e" : "#84cc16"}` : undefined,
              }}
            >
              <span
                style={{
                  fontFamily: MONO, fontSize: "0.7rem",
                  fontWeight: 800, color: "var(--eng-text-muted)", flexShrink: 0, width: 20, textAlign: "right",
                }}
              >
                {String(c.id).padStart(2, "0")}
              </span>
              <span style={{ flex: 1, fontSize: "0.88rem", color: "var(--eng-text)" }}>
                {c.text}
                <AnimatePresence>
                  {choice && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{
                        fontSize: "0.76rem", marginTop: 3, overflow: "hidden",
                        color: correct ? "#16a34a" : "#dc2626",
                      }}
                    >
                      {correct ? <Check className="w-3 h-3 inline" /> : <X className="w-3 h-3 inline" />} {c.explain}
                    </motion.div>
                  )}
                </AnimatePresence>
              </span>
              <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                <BucketBtn label="FR" color={FR} active={choice === "FR"} onClick={() => assign(c.id, "FR")} />
                <BucketBtn label="NFR" color={NFR} active={choice === "NFR"} onClick={() => assign(c.id, "NFR")} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {answered > 0 && (
        <div
          style={{
            marginTop: 16, padding: "12px 14px", borderRadius: 8,
            background: "var(--eng-surface)", border: "1px solid var(--eng-border)",
            display: "flex", alignItems: "center", gap: 12,
          }}
        >
          <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", flex: 1 }}>
            <strong>{score}</strong> / <strong>{answered}</strong> correct.
            {score === CARDS.length && <span style={{ color: "#16a34a", fontWeight: 700, marginLeft: 8 }}>All correct!</span>}
          </div>
          <button onClick={reset} className="btn-eng" style={{ padding: "6px 14px", fontSize: "0.8rem" }}>
            <RotateCcw className="w-3.5 h-3.5 inline" /> Reset
          </button>
        </div>
      )}
    </div>
  );
}

function BucketBtn({ label, color, active, onClick }: { label: string; color: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.05em",
        padding: "6px 10px", borderRadius: 6, cursor: "pointer",
        background: active ? color : "transparent",
        color: active ? "#fff" : color,
        border: `1.5px solid ${color}`,
        transition: "all 0.15s",
      }}
    >
      {label}
    </button>
  );
}

/* ================================================================== */
/*  TAB 3 - The "nines" cheat table + senior notes                     */
/* ================================================================== */

function NinesTable() {
  const rows = [
    { pct: "90%", daily: "2h 24m", monthly: "3 days", yearly: "36.5 days", comment: "Toy project. Unacceptable." },
    { pct: "99%", daily: "14m 24s", monthly: "7h 18m", yearly: "3.65 days", comment: "Still bad for most SaaS." },
    { pct: "99.9%", daily: "1m 26s", monthly: "43m 49s", yearly: "8h 45m", comment: "'Three nines.' Typical SLA for paid B2C." },
    { pct: "99.99%", daily: "8.6s", monthly: "4m 22s", yearly: "52m 35s", comment: "'Four nines.' Premium cloud services." },
    { pct: "99.999%", daily: "0.86s", monthly: "26s", yearly: "5m 15s", comment: "'Five nines.' Telco, critical infra." },
  ];

  return (
    <div>
      <h3 style={sectionTitle}>Know the nines</h3>
      <p style={sectionDesc}>
        Availability targets are written as percentages but spent as downtime. If you cannot recite what 99.9%
        costs per month in outage minutes, you are not ready for an HLD round.
      </p>

      <div
        style={{
          overflow: "hidden", borderRadius: 10,
          border: "1px solid var(--eng-border)", background: "#fff",
        }}
      >
        <div
          style={{
            display: "grid", gridTemplateColumns: "100px 110px 140px 110px 1fr",
            padding: "10px 14px", background: "#f8fafc",
            fontFamily: MONO, fontSize: "0.66rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--eng-text-muted)", borderBottom: "1px solid var(--eng-border)",
          }}
        >
          <div>Uptime</div>
          <div>/ day</div>
          <div>/ month</div>
          <div>/ year</div>
          <div>What it means</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.pct}
            style={{
              display: "grid", gridTemplateColumns: "100px 110px 140px 110px 1fr",
              padding: "12px 14px", alignItems: "center", fontSize: "0.85rem",
              color: "var(--eng-text)",
              borderBottom: i < rows.length - 1 ? "1px solid var(--eng-border)" : "none",
              background: i >= 2 ? "rgba(59,130,246,0.04)" : "transparent",
            }}
          >
            <div style={{ fontFamily: MONO, fontWeight: 800, color: NFR }}>{r.pct}</div>
            <div style={{ fontFamily: MONO, color: "var(--eng-text-muted)" }}>{r.daily}</div>
            <div style={{ fontFamily: MONO, color: "var(--eng-text-muted)" }}>{r.monthly}</div>
            <div style={{ fontFamily: MONO, color: "var(--eng-text-muted)" }}>{r.yearly}</div>
            <div style={{ color: "var(--eng-text-muted)", fontSize: "0.82rem" }}>{r.comment}</div>
          </div>
        ))}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "grid", gap: 10, marginTop: 18 }}
      >
        <SeniorNote>
          Every extra <strong>9</strong> costs roughly <strong>10x more</strong> engineering effort. 99.9% is
          achievable by a careful monolith with good monitoring. 99.99% forces you into redundancy,
          multi-zone, and on-call rotations. 99.999% is a full-time SRE org.
        </SeniorNote>
        <SeniorNote>
          In an interview, always <strong>ask</strong> the availability target before proposing a design.
          &ldquo;Do we need 99.9% or 99.99%?&rdquo; - that one question rules out half the architectures.
        </SeniorNote>
        <SeniorNote>
          Latency is usually quoted as <strong>p50 / p95 / p99</strong>. &ldquo;Average&rdquo; hides the tail.
          A service with p50=50ms and p99=5s is broken for 1 in 100 users.
        </SeniorNote>
      </motion.div>
    </div>
  );
}

function SeniorNote({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={cardEntrance}
      style={{
        padding: "12px 14px", borderRadius: 8,
        background: "rgba(132,204,22,0.06)",
        border: "1px solid rgba(132,204,22,0.25)",
      }}
    >
      <div
        style={{
          fontFamily: MONO, fontSize: "0.62rem", fontWeight: 800,
          color: SD, letterSpacing: "0.12em", marginBottom: 5,
        }}
      >
        SENIOR NOTE
      </div>
      <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
        {children}
      </div>
    </motion.div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L1_RequirementsActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definitions", icon: <Target className="w-4 h-4" />, content: <Definitions /> },
    { id: "sort", label: "Sort Requirements", icon: <ListChecks className="w-4 h-4" />, content: <Sorter /> },
    { id: "nines", label: "The Nines", icon: <Activity className="w-4 h-4" />, content: <NinesTable /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Which is a functional requirement?",
      options: [
        "The app handles 10,000 concurrent users.",
        "Users can reset their password via email.",
        "All API responses complete within 200ms at p95.",
        "User passwords are hashed with bcrypt.",
      ],
      correctIndex: 1,
      explanation: "Password reset is a feature. The other three are quality attributes (scalability, latency, security).",
    },
    {
      question: "Which is a non-functional requirement?",
      options: [
        "Users can upload a profile picture.",
        "Admins receive daily abuse reports.",
        "The system shall process 1M transactions per hour without failure.",
        "Orders can be cancelled within 30 minutes of placement.",
      ],
      correctIndex: 2,
      explanation: "Throughput under failure conditions is scalability + reliability - both NFRs. The others describe features.",
    },
    {
      question: "Your service promises 99.9% availability. Roughly how much downtime per month is acceptable?",
      options: [
        "4 minutes",
        "43 minutes",
        "7 hours",
        "3 days",
      ],
      correctIndex: 1,
      explanation: "99.9% = three nines ≈ 43 minutes/month. 99.99% ≈ 4 minutes. You must be able to cite these from memory in interviews.",
    },
    {
      question: "A PM says: &ldquo;The feed should feel snappy.&rdquo; What should you push back with?",
      options: [
        "Nothing - 'snappy' is a fine requirement.",
        "Ask for a specific latency number (e.g., p99 &lt; 200ms).",
        "Start coding immediately.",
        "Add caching everywhere.",
      ],
      correctIndex: 1,
      explanation: "NFRs without numbers are not requirements, they are vibes. Always ask for a quantified target - p99 latency in ms - before you design.",
    },
    {
      question: "Which NFR deals with 'does a read see the latest write'?",
      options: [
        "Availability",
        "Latency",
        "Consistency",
        "Durability",
      ],
      correctIndex: 2,
      explanation: "Consistency is about the ordering/visibility guarantees between reads and writes. CAP theorem lives in Level 3.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Functional vs Non-Functional Requirements"
      level={1}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Every HLD round starts here"
      onQuizComplete={onQuizComplete}
    />
  );
}
