import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitCompare, Shuffle, Check, X, Boxes } from "lucide-react";
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

const HLD = "#84cc16";
const LLD = "#14b8a6";
const HLD_SOFT = "rgba(132,204,22,0.1)";

/* ================================================================== */
/*  TAB 1 - Split Canvas: HLD view vs LLD view of same app             */
/* ================================================================== */

function SplitCanvas() {
  const [hoverSide, setHoverSide] = useState<"hld" | "lld" | null>(null);

  return (
    <div>
      <h3 style={sectionTitle}>Same app, two lenses</h3>
      <p style={sectionDesc}>
        Below is a chat app, shown from two different zoom levels. Top half is HLD - the architecture.
        Bottom half is LLD - the classes that run inside those boxes. Same app, two views. Hover to
        see which interview round tests which.
      </p>

      <div
        style={{
          border: "1px solid var(--eng-border)", borderRadius: 12,
          overflow: "hidden", background: "#fafafa",
        }}
      >
        {/* HLD half */}
        <div
          onMouseEnter={() => setHoverSide("hld")}
          onMouseLeave={() => setHoverSide(null)}
          style={{
            padding: "22px 24px 24px", background: "#fff",
            borderBottom: "2px dashed var(--eng-border)",
            position: "relative",
            boxShadow: hoverSide === "hld" ? `inset 0 0 0 2px ${HLD}` : "none",
            transition: "box-shadow 0.2s",
          }}
        >
          <LensLabel color={HLD} text="HLD - HIGH LEVEL DESIGN" detail="System architecture. Boxes, arrows, data flow." />
          <HLDChatDiagram />
        </div>

        {/* LLD half */}
        <div
          onMouseEnter={() => setHoverSide("lld")}
          onMouseLeave={() => setHoverSide(null)}
          style={{
            padding: "22px 24px 24px", background: "#fff",
            position: "relative",
            boxShadow: hoverSide === "lld" ? `inset 0 0 0 2px ${LLD}` : "none",
            transition: "box-shadow 0.2s",
          }}
        >
          <LensLabel color={LLD} text="LLD - LOW LEVEL DESIGN" detail="Class-level design. Methods, fields, relationships." />
          <LLDChatDiagram />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 14 }}>
        <InterviewerBubble
          color={HLD}
          tag="HLD ROUND"
          quote="How would you store 1 billion chat messages and serve them under 50ms?"
        />
        <InterviewerBubble
          color={LLD}
          tag="LLD ROUND"
          quote="Show me the Message class. What fields, what methods, how does it serialize?"
        />
      </div>
    </div>
  );
}

function LensLabel({ color, text, detail }: { color: string; text: string; detail: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 14 }}>
      <span
        style={{
          fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em",
          color, background: `${color}16`, border: `1px solid ${color}55`,
          padding: "3px 10px", borderRadius: 4,
        }}
      >
        {text}
      </span>
      <span style={{ fontSize: "0.78rem", color: "var(--eng-text-muted)" }}>{detail}</span>
    </div>
  );
}

function HLDChatDiagram() {
  return (
    <svg viewBox="0 0 640 190" width="100%" style={{ display: "block" }}>
      <defs>
        <marker id="hld-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
        </marker>
      </defs>

      {/* Edges */}
      <path d="M 70 100 L 150 100" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#hld-arrow)" />
      <path d="M 220 100 L 300 100" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#hld-arrow)" />
      <path d="M 370 100 L 450 100" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#hld-arrow)" />
      <path d="M 370 100 L 450 160" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#hld-arrow)" />
      <path d="M 520 100 L 600 100" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#hld-arrow)" />

      {/* Animated dot (the message) */}
      <circle r="4" fill={HLD}>
        <animateMotion dur="3.5s" repeatCount="indefinite" path="M 70 100 L 150 100 L 220 100 L 300 100 L 370 100 L 450 100 L 520 100 L 600 100" />
      </circle>

      {/* Nodes */}
      <HLDNode x={20} y={80} w={50} label="Phone" sub="user" />
      <HLDNode x={150} y={80} w={70} label="LB" sub="load balancer" />
      <HLDNode x={300} y={80} w={70} label="chat-svc" sub="service" />
      <HLDNode x={450} y={80} w={70} label="queue" sub="Kafka" />
      <HLDNode x={450} y={140} w={70} label="DB" sub="Cassandra" />
      <HLDNode x={600} y={80} w={30} label="Fanout" sub="worker" small />
    </svg>
  );
}

function HLDNode({ x, y, w, label, sub, small }: { x: number; y: number; w: number; label: string; sub: string; small?: boolean }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect width={w} height="40" rx="6" fill={HLD_SOFT} stroke={HLD} strokeWidth="1.5" />
      <text x={w / 2} y="18" textAnchor="middle" fill="var(--eng-text)" fontSize={small ? "9" : "11"} fontWeight="700" fontFamily='"JetBrains Mono", monospace'>
        {label}
      </text>
      <text x={w / 2} y="32" textAnchor="middle" fill="var(--eng-text-muted)" fontSize="8" fontFamily='"JetBrains Mono", monospace'>
        {sub}
      </text>
    </g>
  );
}

function LLDChatDiagram() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}
    >
      <ClassBox
        name="User"
        color={LLD}
        fields={["id: string", "name: string", "avatar: string"]}
        methods={["sendMessage(chat, text)"]}
      />
      <ClassBox
        name="Chat"
        color={LLD}
        fields={["id: string", "participants: User[]", "createdAt: Date"]}
        methods={["addParticipant(u)", "history(): Message[]"]}
      />
      <ClassBox
        name="Message"
        color={LLD}
        fields={["id: string", "sender: User", "text: string", "sentAt: Date"]}
        methods={["serialize(): bytes"]}
      />
      <ClassBox
        name="MessageRepo"
        color="#94a3b8"
        fields={["db: Database"]}
        methods={["save(m)", "findByChat(id)"]}
      />
    </motion.div>
  );
}

function ClassBox({ name, color, fields, methods }: { name: string; color: string; fields: string[]; methods: string[] }) {
  return (
    <motion.div
      variants={cardEntrance}
      whileHover={cardHover}
      style={{
        border: `1.5px solid ${color}`, borderRadius: 6,
        background: "#fff", minWidth: 170,
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          padding: "6px 10px", background: `${color}22`,
          borderBottom: `1px solid ${color}55`,
          fontFamily: MONO, fontSize: "0.8rem", fontWeight: 800,
          color: "var(--eng-text)", textAlign: "center",
        }}
      >
        {name}
      </div>
      <div style={{ padding: "6px 10px", borderBottom: `1px dashed ${color}55`, fontFamily: MONO, fontSize: "0.68rem", color: "var(--eng-text-muted)", lineHeight: 1.7 }}>
        {fields.map((f) => (<div key={f}>{f}</div>))}
      </div>
      <div style={{ padding: "6px 10px", fontFamily: MONO, fontSize: "0.68rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
        {methods.map((m) => (<div key={m}>{m}</div>))}
      </div>
    </motion.div>
  );
}

function InterviewerBubble({ color, tag, quote }: { color: string; tag: string; quote: string }) {
  return (
    <div
      style={{
        border: `1px solid ${color}55`, background: `${color}0c`,
        borderRadius: 8, padding: "10px 12px",
      }}
    >
      <div
        style={{
          fontFamily: MONO, fontSize: "0.62rem", fontWeight: 800,
          color, letterSpacing: "0.1em", marginBottom: 6,
        }}
      >
        {tag}
      </div>
      <div style={{ fontSize: "0.85rem", fontStyle: "italic", color: "var(--eng-text)", lineHeight: 1.5 }}>
        &ldquo;{quote}&rdquo;
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Sort the question: drag-to-bucket                          */
/* ================================================================== */

interface Question {
  id: number;
  text: string;
  correct: "HLD" | "LLD";
  explain: string;
}

const QUESTIONS: Question[] = [
  { id: 1, text: "Design a parking lot.", correct: "LLD", explain: "Classic machine-coding round. You write the Vehicle, Slot, Ticket classes." },
  { id: 2, text: "How would you store 1 billion Uber rides?", correct: "HLD", explain: "Sharding strategy, storage engine choice. Pure architecture question." },
  { id: 3, text: "Write the User class for an auth system.", correct: "LLD", explain: "Class-level - fields, methods, invariants. LLD." },
  { id: 4, text: "How do you prevent message loss if a chat server crashes?", correct: "HLD", explain: "Durable queue, replication, acknowledgements. HLD territory." },
  { id: 5, text: "Implement an LRU cache from scratch.", correct: "LLD", explain: "Yes, really - LRU is almost always asked as machine coding. You implement the class." },
  { id: 6, text: "Design the data flow for a news feed that fans out to 10M followers.", correct: "HLD", explain: "Push vs pull, materialized views, fanout queues. HLD." },
  { id: 7, text: "Model the relationships between Order, Product, and User in an e-commerce LLD round.", correct: "LLD", explain: "Class diagram, cardinality, methods. LLD." },
  { id: 8, text: "Which database do you pick for a ride-location-every-4-seconds write pattern?", correct: "HLD", explain: "Write-optimized storage choice. HLD tradeoff question." },
];

function DragSorter() {
  const [placements, setPlacements] = useState<Record<number, "HLD" | "LLD" | null>>({});

  function place(id: number, side: "HLD" | "LLD") {
    setPlacements((p) => ({ ...p, [id]: side }));
  }

  function reset() { setPlacements({}); }

  const correct = Object.entries(placements).filter(([id, side]) => QUESTIONS.find((q) => q.id === Number(id))?.correct === side).length;
  const total = Object.values(placements).filter(Boolean).length;

  return (
    <div>
      <h3 style={sectionTitle}>Sort the interview question</h3>
      <p style={sectionDesc}>
        Real questions from real rounds. Click <strong>HLD</strong> or <strong>LLD</strong> on each.
        Some are deliberately tricky - keep the rule of thumb in mind:
        <em> If the answer fits in one process, it is LLD. If it spans multiple machines, it is HLD.</em>
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "grid", gap: 10 }}
      >
        {QUESTIONS.map((q) => {
          const placed = placements[q.id];
          const isCorrect = placed ? placed === q.correct : null;
          return (
            <motion.div
              key={q.id}
              variants={cardEntrance}
              layout
              className="card-eng"
              style={{
                padding: "12px 14px", display: "flex", alignItems: "center", gap: 12,
                borderLeft: isCorrect === null ? undefined : `3px solid ${isCorrect ? "#22c55e" : "#84cc16"}`,
              }}
            >
              <div
                style={{
                  width: 28, height: 28, borderRadius: 6, flexShrink: 0,
                  display: "grid", placeItems: "center",
                  background: "#f1f5f9", color: "var(--eng-text-muted)",
                  fontFamily: MONO, fontSize: "0.72rem", fontWeight: 800,
                }}
              >
                {q.id}
              </div>
              <div style={{ flex: 1, fontSize: "0.9rem", color: "var(--eng-text)" }}>
                &ldquo;{q.text}&rdquo;
                <AnimatePresence>
                  {placed !== undefined && placed !== null && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{
                        fontSize: "0.78rem", marginTop: 4, overflow: "hidden",
                        color: isCorrect ? "#16a34a" : "#dc2626",
                      }}
                    >
                      {isCorrect ? <Check className="w-3.5 h-3.5 inline" /> : <X className="w-3.5 h-3.5 inline" />} {q.explain}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                <BucketBtn
                  label="HLD"
                  color={HLD}
                  active={placed === "HLD"}
                  onClick={() => place(q.id, "HLD")}
                />
                <BucketBtn
                  label="LLD"
                  color={LLD}
                  active={placed === "LLD"}
                  onClick={() => place(q.id, "LLD")}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {total > 0 && (
        <div
          style={{
            marginTop: 16, padding: "12px 14px", borderRadius: 8,
            background: "var(--eng-surface)", border: "1px solid var(--eng-border)",
            display: "flex", alignItems: "center", gap: 12,
          }}
        >
          <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", flex: 1 }}>
            <strong>{correct}</strong> correct out of <strong>{total}</strong> answered.
            {correct === QUESTIONS.length && <span style={{ color: "#16a34a", fontWeight: 700, marginLeft: 8 }}>Perfect!</span>}
          </div>
          <button
            onClick={reset}
            className="btn-eng"
            style={{ padding: "6px 14px", fontSize: "0.8rem" }}
          >
            Reset
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
        fontFamily: MONO, fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.05em",
        padding: "6px 12px", borderRadius: 6, cursor: "pointer",
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
/*  TAB 3 - Rules of thumb + cheatsheet                                */
/* ================================================================== */

function Cheatsheet() {
  const rules = [
    {
      title: "If the answer fits in one process, it is LLD.",
      body: "LLD questions have a compile target - you could actually write the code from your whiteboard. HLD questions do not; you cannot compile &ldquo;a CDN.&rdquo;",
    },
    {
      title: "If you are drawing boxes connected by arrows, it is HLD.",
      body: "If you are drawing rectangles with field names and method signatures, it is LLD.",
    },
    {
      title: "HLD is about what to choose; LLD is about how to structure.",
      body: "HLD: Postgres or DynamoDB? LLD: how should the Repository class expose find() - by ID, by filter, both?",
    },
    {
      title: "Same problem can be asked both ways.",
      body: "&ldquo;Design a chat app&rdquo; at Google = HLD. &ldquo;Design the message model for a chat app&rdquo; at Flipkart = LLD. Read the room.",
    },
    {
      title: "LLD rounds test OOP fluency. HLD rounds test distributed-systems fluency.",
      body: "That is why this track has separate level-groups for each - the skills really do differ.",
    },
  ];

  return (
    <div>
      <h3 style={sectionTitle}>Rules of thumb</h3>
      <p style={sectionDesc}>
        Before any exam, keep these five rules in your head. They will correctly classify the vast
        majority of questions.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "grid", gap: 10 }}
      >
        {rules.map((r, i) => (
          <motion.div
            key={i}
            variants={cardEntrance}
            whileHover={cardHover}
            className="card-eng"
            style={{ padding: "14px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}
          >
            <div
              style={{
                flexShrink: 0, width: 28, height: 28, borderRadius: 6,
                background: SD, color: "#fff",
                display: "grid", placeItems: "center",
                fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800,
              }}
            >
              {i + 1}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--eng-text)", marginBottom: 4, lineHeight: 1.35 }}>
                {r.title}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }} dangerouslySetInnerHTML={{ __html: r.body }} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 18 }}
      >
        <CompareCard color={HLD} title="HLD asks">
          <li>What services exist?</li>
          <li>How do they communicate?</li>
          <li>Where does data live?</li>
          <li>How do you scale when traffic 10x's?</li>
          <li>What happens when a component fails?</li>
        </CompareCard>
        <CompareCard color={LLD} title="LLD asks">
          <li>What classes do you need?</li>
          <li>What are the fields and methods?</li>
          <li>What are the relationships?</li>
          <li>How do you enforce invariants?</li>
          <li>Which design patterns apply?</li>
        </CompareCard>
      </motion.div>
    </div>
  );
}

function CompareCard({ color, title, children }: { color: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      variants={cardEntrance}
      whileHover={cardHover}
      style={{
        border: `1px solid ${color}55`, background: `${color}08`,
        borderRadius: 10, padding: "14px 16px",
      }}
    >
      <div
        style={{
          fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em",
          color, marginBottom: 8,
        }}
      >
        {title.toUpperCase()}
      </div>
      <ul style={{ margin: 0, paddingLeft: 18, fontSize: "0.85rem", color: "var(--eng-text)", lineHeight: 1.6 }}>
        {children}
      </ul>
    </motion.div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L1_HLDvsLLDActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "split", label: "Two Lenses", icon: <GitCompare className="w-4 h-4" />, content: <SplitCanvas /> },
    { id: "sort", label: "Sort Questions", icon: <Shuffle className="w-4 h-4" />, content: <DragSorter /> },
    { id: "rules", label: "Rules of Thumb", icon: <Boxes className="w-4 h-4" />, content: <Cheatsheet /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Interviewer: &ldquo;Implement a thread-safe in-memory LRU cache class with get(key) and put(key, value).&rdquo; What kind of round is this?",
      options: ["HLD", "LLD", "Coding / DSA", "Behavioral"],
      correctIndex: 1,
      explanation: "Single-process class design with methods and invariants - pure LLD. Even though it feels algorithmic, the interviewer is testing class structure, concurrency guards, and interface design.",
    },
    {
      question: "Interviewer: &ldquo;Design WhatsApp's message delivery so nothing is lost when a phone is offline for 3 days.&rdquo; This is...",
      options: ["LLD", "Coding", "HLD", "Database round"],
      correctIndex: 2,
      explanation: "Durable queues, retention, offline delivery - all cross-service concerns. HLD.",
    },
    {
      question: "Which statement is TRUE about HLD vs LLD?",
      options: [
        "HLD is harder than LLD.",
        "LLD is harder than HLD.",
        "They test genuinely different skills and most product companies test both in separate rounds.",
        "HLD is for seniors, LLD is for juniors.",
      ],
      correctIndex: 2,
      explanation: "Both rounds are standard at most product companies. They probe different muscle groups: distributed-systems reasoning vs OOP fluency.",
    },
    {
      question: "Rule of thumb: if the answer fits in ________, it is LLD.",
      options: ["one file", "one process", "one week", "one sprint"],
      correctIndex: 1,
      explanation: "One process = one machine, one runtime - so the whole design is inside one JVM/V8/Python interpreter. That is the defining property of an LLD problem.",
    },
    {
      question: "Which of these is an HLD concern, not an LLD concern?",
      options: [
        "Should User hold a reference to Cart, or Cart to User?",
        "Should getOrder() return an Order or an Optional<Order>?",
        "Should we shard the Orders table by user_id or by order_id?",
        "Should OrderService expose placeOrder() or createOrder()?",
      ],
      correctIndex: 2,
      explanation: "Sharding strategy is a cross-machine storage decision - pure HLD. The other three are inside-one-process class API decisions.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="HLD vs LLD - The Two Lenses"
      level={1}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Every product-company interview tests both"
      onQuizComplete={onQuizComplete}
    />
  );
}
