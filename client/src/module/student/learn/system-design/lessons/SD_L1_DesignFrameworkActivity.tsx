import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass, MessageCircleQuestion, Calculator, Layers, Microscope,
  Check, X, Play, Pause, RotateCcw, AlertTriangle,
} from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  SD,
  SD_SOFT,
  MONO,
  sectionTitle,
  sectionDesc,
  staggerContainer,
  cardEntrance,
  cardHover,
} from "./_shared/styles";

const GOOD = "#10b981";
const BAD = "#f97316";

/* ================================================================== */
/*  TAB 1 - Animated 4-step whiteboard                                 */
/* ================================================================== */

interface Step {
  id: string;
  num: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  minutes: string;
  what: string;
  example: string;
  mistake: string;
}

const STEPS: Step[] = [
  {
    id: "clarify",
    num: 1,
    title: "Clarify",
    subtitle: "What are we actually building?",
    icon: <MessageCircleQuestion className="w-5 h-5" />,
    minutes: "5 min",
    what: "Pin down scope, users, and the 2–3 core features. Resolve ambiguity now, not at minute 35.",
    example: "\"Design Twitter\" → Who posts? Who reads? Do we need DMs? Media? Follow graph? Only tweets + timeline for now.",
    mistake: "Silently assuming scope. Interviewer expects you to ask.",
  },
  {
    id: "estimate",
    num: 2,
    title: "Estimate",
    subtitle: "How big is this, in numbers?",
    icon: <Calculator className="w-5 h-5" />,
    minutes: "5 min",
    what: "Quick back-of-envelope: DAU, QPS read/write, storage/day, peak vs average. These numbers drive every later decision.",
    example: "200M DAU × 2 tweets/day = 400M writes/day ≈ 5K writes/s. Reads ≈ 100× writes → 500K reads/s.",
    mistake: "Picking a database before you know the read/write ratio.",
  },
  {
    id: "high",
    num: 3,
    title: "High-Level",
    subtitle: "Draw the boxes and arrows.",
    icon: <Layers className="w-5 h-5" />,
    minutes: "15 min",
    what: "Client → LB → App servers → DB/Cache. Sketch the main data flows. Name one write path, one read path. Do not optimize yet.",
    example: "Client → API gateway → Tweet service → (Cassandra for tweets, Redis for timelines). Fan-out-on-write for celebrities? Note it, defer.",
    mistake: "Spending 20 minutes on a caching layer before the basic flow is drawn.",
  },
  {
    id: "deep",
    num: 4,
    title: "Deep-Dive",
    subtitle: "Zoom into the scariest box.",
    icon: <Microscope className="w-5 h-5" />,
    minutes: "15 min",
    what: "Interviewer picks one component. Trade-offs, failure modes, scaling bottlenecks. Name the actual database/queue. Discuss consistency.",
    example: "Deep-dive on timeline: fan-out-on-write for normal users, fan-out-on-read for celebrities with >1M followers. Justify with math.",
    mistake: "Giving generic answers (\"we can cache it\") instead of naming specifics and tradeoffs.",
  },
];

function FourStepCanvas() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => {
      setActive((a) => {
        if (a >= STEPS.length - 1) { setPlaying(false); return a; }
        return a + 1;
      });
    }, 2600);
    return () => clearTimeout(t);
  }, [playing, active]);

  const step = STEPS[active];

  return (
    <div>
      <h3 style={sectionTitle}>The 4 steps every senior engineer runs - in order</h3>
      <p style={sectionDesc}>
        An HLD interview is 45 minutes. A good candidate spends roughly 5 → 5 → 15 → 15 minutes on the
        four steps below. Skip step 1 and you will design the wrong thing. Skip step 2 and step 3 is
        guessing. The order is not optional.
      </p>

      {/* Playback controls */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
        <button
          onClick={() => { setActive(0); setPlaying(true); }}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "8px 14px", borderRadius: 8, border: `1.5px solid ${SD}`,
            background: playing ? SD : "transparent", color: playing ? "#fff" : SD,
            fontFamily: "var(--eng-font)", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
          }}
        >
          {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          {playing ? "Playing…" : "Play walkthrough"}
        </button>
        <button
          onClick={() => { setActive(0); setPlaying(false); }}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "8px 12px", borderRadius: 8, border: "1.5px solid var(--eng-border)",
            background: "transparent", color: "var(--eng-text-muted)",
            fontFamily: "var(--eng-font)", fontSize: "0.8rem", cursor: "pointer",
          }}
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {/* 4 step chips on a timeline */}
      <div
        style={{
          position: "relative", display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: 10, marginBottom: 22,
        }}
      >
        {/* connecting line */}
        <div
          style={{
            position: "absolute", top: 28, left: "10%", right: "10%", height: 2,
            background: "var(--eng-border)", zIndex: 0,
          }}
        />
        {STEPS.map((s, i) => {
          const done = i < active;
          const cur = i === active;
          return (
            <button
              key={s.id}
              onClick={() => { setActive(i); setPlaying(false); }}
              style={{
                position: "relative", zIndex: 1, display: "flex", flexDirection: "column",
                alignItems: "center", gap: 6, padding: "10px 6px 12px", borderRadius: 10,
                border: cur ? `1.5px solid ${SD}` : "1.5px solid transparent",
                background: cur ? SD_SOFT : "transparent",
                cursor: "pointer", fontFamily: "var(--eng-font)",
                transition: "all 200ms",
              }}
            >
              <div
                style={{
                  width: 36, height: 36, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: done || cur ? SD : "var(--eng-bg-subtle)",
                  color: done || cur ? "#fff" : "var(--eng-text-muted)",
                  border: done || cur ? "none" : "1.5px solid var(--eng-border)",
                  fontWeight: 700, fontSize: "0.85rem",
                }}
              >
                {done ? <Check className="w-4 h-4" /> : s.num}
              </div>
              <div
                style={{
                  fontSize: "0.78rem", fontWeight: 700, color: cur ? SD : "var(--eng-text)",
                }}
              >
                {s.title}
              </div>
              <div style={{ fontFamily: MONO, fontSize: "0.65rem", color: "var(--eng-text-muted)" }}>
                {s.minutes}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active step detail card */}
      <AnimatePresence mode="wait">
      <motion.div
        key={step.id}
        initial={{ opacity: 0, y: 14, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        style={{
          border: `1.5px solid ${SD}`, borderRadius: 12, padding: "18px 20px",
          background: SD_SOFT,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <div
            style={{
              width: 32, height: 32, borderRadius: 8, background: SD, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {step.icon}
          </div>
          <div>
            <div style={{ fontSize: "0.68rem", fontFamily: MONO, color: SD, letterSpacing: "0.08em", fontWeight: 700 }}>
              STEP {step.num} · {step.minutes.toUpperCase()}
            </div>
            <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--eng-text)" }}>
              {step.title} - {step.subtitle}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
          <div>
            <div style={{ fontSize: "0.7rem", fontFamily: MONO, color: "var(--eng-text-muted)", letterSpacing: "0.08em", fontWeight: 700, marginBottom: 6 }}>
              WHAT YOU DO
            </div>
            <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.6 }}>
              {step.what}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "0.7rem", fontFamily: MONO, color: "var(--eng-text-muted)", letterSpacing: "0.08em", fontWeight: 700, marginBottom: 6 }}>
              CONCRETE EXAMPLE
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--eng-text)", lineHeight: 1.55, fontFamily: mono }}>
              {step.example}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 14, padding: "10px 12px", borderRadius: 8,
            background: "rgba(249,115,22,0.08)", border: `1px solid ${BAD}`,
            display: "flex", alignItems: "flex-start", gap: 8,
          }}
        >
          <AlertTriangle className="w-4 h-4 shrink-0" style={{ color: BAD, marginTop: 2 }} />
          <div style={{ fontSize: "0.82rem", color: "var(--eng-text)", lineHeight: 1.5 }}>
            <span style={{ fontWeight: 700, color: BAD }}>Classic mistake: </span>
            {step.mistake}
          </div>
        </div>
      </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Good run vs Bad run side-by-side                           */
/* ================================================================== */

interface Line {
  t: string;   // timestamp e.g. "0:02"
  who: "I" | "C"; // interviewer / candidate
  text: string;
  tag?: string; // optional label like "Step 1"
  tagGood?: boolean;
}

const GOOD_RUN: Line[] = [
  { t: "0:00", who: "I", text: "Design Twitter for me." },
  { t: "0:30", who: "C", text: "Quick questions - scope is posts + home timeline, not DMs or search? And we target mobile clients?", tag: "Step 1", tagGood: true },
  { t: "1:00", who: "I", text: "Correct. 200M DAU, global." },
  { t: "2:00", who: "C", text: "OK - 200M DAU × 2 posts/day = 400M writes/day ≈ 5K QPS. Reads dominate, call it 500K QPS. 280 bytes/tweet → ~115 GB/day.", tag: "Step 2", tagGood: true },
  { t: "8:00", who: "C", text: "High-level: client → LB → API gateway → tweet service → Cassandra (writes) + Redis (timelines). Fan-out-on-write for normal users.", tag: "Step 3", tagGood: true },
  { t: "18:00", who: "C", text: "That's the full read and write path end-to-end. I'm going to pause - any component you'd like me to go deep on?", tag: "hand-off", tagGood: true },
  { t: "22:00", who: "I", text: "What happens with a user who has 10M followers?" },
  { t: "22:15", who: "C", text: "Good catch - fan-out-on-write blows up. I'd switch to fan-out-on-read for celebrities above 1M followers. Tradeoff: slower reads for those, saves 99% of the write storm.", tag: "Step 4", tagGood: true },
  { t: "40:00", who: "I", text: "Great walkthrough." },
];

const BAD_RUN: Line[] = [
  { t: "0:00", who: "I", text: "Design Twitter for me." },
  { t: "0:05", who: "C", text: "OK so we'll use MongoDB and add Redis caching." },
  { t: "0:10", who: "I", text: "…why MongoDB?", tagGood: false },
  { t: "0:15", who: "C", text: "It scales well. Let me draw the microservices." },
  { t: "5:00", who: "C", text: "We have 12 services: auth, tweet, timeline, follow, notification…", tag: "no estimates yet", tagGood: false },
  { t: "15:00", who: "I", text: "How many writes per second?" },
  { t: "15:10", who: "C", text: "Uh… a lot? Maybe a million?", tagGood: false },
  { t: "25:00", who: "I", text: "What about celebrity users with 10M followers?" },
  { t: "25:20", who: "C", text: "We can add more caching.", tag: "no tradeoff", tagGood: false },
  { t: "40:00", who: "I", text: "…We're out of time." },
];

function Transcript({ lines, color, label }: { lines: Line[]; color: string; label: string }) {
  return (
    <div
      style={{
        border: `1.5px solid ${color}`, borderRadius: 12, background: "var(--eng-bg-subtle)",
        overflow: "hidden", display: "flex", flexDirection: "column", minHeight: 480,
      }}
    >
      <div style={{ padding: "10px 14px", borderBottom: `1.5px solid ${color}`, background: `${color}15` }}>
        <div style={{ fontFamily: MONO, fontSize: "0.7rem", letterSpacing: "0.1em", color, fontWeight: 800 }}>
          {label}
        </div>
      </div>
      <div style={{ flex: 1, padding: "14px 14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ display: "flex", gap: 10 }}>
            <div
              style={{
                fontFamily: MONO, fontSize: "0.7rem", color: "var(--eng-text-muted)",
                width: 38, flexShrink: 0, paddingTop: 3,
              }}
            >
              {l.t}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  background: l.who === "C" ? `${color}10` : "var(--eng-bg)",
                  border: `1px solid ${l.who === "C" ? color : "var(--eng-border)"}`,
                  borderRadius: 8, padding: "8px 12px",
                  fontSize: "0.84rem", color: "var(--eng-text)", lineHeight: 1.5,
                }}
              >
                <div style={{ fontFamily: MONO, fontSize: "0.65rem", color: "var(--eng-text-muted)", marginBottom: 3, letterSpacing: "0.08em" }}>
                  {l.who === "I" ? "INTERVIEWER" : "CANDIDATE"}
                </div>
                {l.text}
              </div>
              {l.tag && (
                <div
                  style={{
                    marginTop: 4, display: "inline-flex", alignItems: "center", gap: 4,
                    padding: "2px 8px", borderRadius: 999,
                    background: l.tagGood ? `${GOOD}15` : `${BAD}15`,
                    color: l.tagGood ? GOOD : BAD,
                    fontFamily: MONO, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.05em",
                  }}
                >
                  {l.tagGood ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                  {l.tag}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GoodVsBad() {
  return (
    <div>
      <h3 style={sectionTitle}>Same question. Two very different 40 minutes.</h3>
      <p style={sectionDesc}>
        Both candidates got &ldquo;Design Twitter.&rdquo; The good one hit all four steps. The bad one
        jumped straight to technology names. Read both transcripts - notice where time was spent.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <Transcript lines={GOOD_RUN} color={GOOD} label="GOOD RUN · OFFER" />
        <Transcript lines={BAD_RUN} color={BAD} label="BAD RUN · NO OFFER" />
      </div>

      <div
        style={{
          marginTop: 18, padding: "14px 18px", borderRadius: 10,
          border: `1.5px solid ${SD}`, background: SD_SOFT,
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, color: SD, letterSpacing: "0.08em", marginBottom: 6 }}>
          THE DIFFERENCE
        </div>
        <div style={{ fontSize: "0.9rem", color: "var(--eng-text)", lineHeight: 1.6 }}>
          The good candidate said <b>no technology names</b> for the first 2 minutes. Scope first,
          numbers second. The bad candidate named MongoDB in line 2 - before they knew if reads or
          writes dominated. Framework isn&rsquo;t bureaucracy. It&rsquo;s how you <em>avoid</em> designing
          the wrong thing.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 3 - Cheat sheet                                                */
/* ================================================================== */

function CheatSheet() {
  const rules = [
    { n: 1, text: "Never name a database in the first 5 minutes.", why: "You haven't earned the right to pick one yet." },
    { n: 2, text: "Always write DAU, QPS, and storage on the board.", why: "These three numbers constrain every later choice." },
    { n: 3, text: "Draw one write path and one read path - separately.", why: "Reads and writes usually have different bottlenecks." },
    { n: 4, text: "Defer optimizations. Say: 'I'll come back to this.'", why: "Getting a basic working design beats a half-finished fancy one." },
    { n: 5, text: "When stuck in deep-dive, name the tradeoff out loud.", why: "Senior engineers are judged on tradeoff reasoning, not answers." },
  ];

  return (
    <div>
      <h3 style={sectionTitle}>The 5 rules you say out loud in the interview</h3>
      <p style={sectionDesc}>
        Print this. Memorize it. These are the exact phrases that separate a junior run from a senior
        run. Use them verbatim in your next mock.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}
      >
        {rules.map((r) => (
          <motion.div
            key={r.n}
            variants={cardEntrance}
            whileHover={cardHover}
            style={{
              display: "flex", gap: 14, padding: "14px 16px",
              border: "1.5px solid var(--eng-border)", borderRadius: 10,
              background: "var(--eng-bg-subtle)",
            }}
          >
            <div
              style={{
                width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                background: SD, color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: MONO, fontSize: "0.85rem", fontWeight: 800,
              }}
            >
              {r.n}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--eng-text)", marginBottom: 3 }}>
                {r.text}
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--eng-text-muted)", lineHeight: 1.5 }}>
                <span style={{ fontFamily: MONO, fontSize: "0.68rem", letterSpacing: "0.08em", fontWeight: 700, color: SD }}>WHY · </span>
                {r.why}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Time budget table */}
      <div
        style={{
          border: "1.5px solid var(--eng-border)", borderRadius: 10, overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "10px 14px", background: SD_SOFT, borderBottom: `1.5px solid ${SD}`,
            fontFamily: MONO, fontSize: "0.7rem", letterSpacing: "0.1em", color: SD, fontWeight: 800,
          }}
        >
          TIME BUDGET · A TYPICAL 45-MIN HLD ROUND
        </div>
        <div>
          {STEPS.map((s, i) => {
            const pct = s.id === "high" || s.id === "deep" ? 33.3 : 11.1;
            return (
              <div
                key={s.id}
                style={{
                  display: "grid", gridTemplateColumns: "40px 1fr 80px 1fr",
                  gap: 12, padding: "10px 14px", alignItems: "center",
                  borderBottom: i < STEPS.length - 1 ? "1px solid var(--eng-border)" : "none",
                  background: "var(--eng-bg)",
                }}
              >
                <div style={{ fontFamily: MONO, fontSize: "0.8rem", fontWeight: 700, color: SD }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--eng-text)" }}>
                  {s.title}
                </div>
                <div style={{ fontFamily: MONO, fontSize: "0.78rem", color: "var(--eng-text-muted)" }}>
                  {s.minutes}
                </div>
                <div style={{ height: 8, background: "var(--eng-bg-subtle)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ width: `${pct * 2.5}%`, height: "100%", background: SD }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MAIN                                                                */
/* ================================================================== */

export default function SD_L1_DesignFrameworkActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "steps", label: "The 4 Steps", icon: <Compass className="w-4 h-4" />, content: <FourStepCanvas /> },
    { id: "compare", label: "Good vs Bad Run", icon: <Layers className="w-4 h-4" />, content: <GoodVsBad /> },
    { id: "cheat", label: "Cheat Sheet", icon: <Microscope className="w-4 h-4" />, content: <CheatSheet /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "You have 45 minutes. Roughly how long should you spend on clarifying scope?",
      options: ["0 minutes - dive in.", "About 5 minutes.", "15 minutes.", "Half the interview."],
      correctIndex: 1,
      explanation: "Clarify is short but non-negotiable - around 5 minutes. Long enough to pin scope, short enough to leave time for design.",
    },
    {
      question: "Which step immediately follows Clarify?",
      options: ["Deep-Dive", "High-Level Design", "Estimate (back-of-envelope)", "Pick a database"],
      correctIndex: 2,
      explanation: "Estimate comes second. Numbers constrain architecture - picking tech before estimating is backwards.",
    },
    {
      question: "A candidate says &ldquo;We'll use MongoDB and Redis&rdquo; in the first 30 seconds. What&rsquo;s wrong?",
      options: [
        "MongoDB is a bad choice here.",
        "They named tech before clarifying scope or estimating load.",
        "They should have said PostgreSQL.",
        "Nothing - that's decisive.",
      ],
      correctIndex: 1,
      explanation: "Tech choice without scope or numbers is guessing. You haven't earned the right to pick a DB yet.",
    },
    {
      question: "In Deep-Dive, the interviewer asks about celebrity users with 10M followers. Best response?",
      options: [
        "&ldquo;We'll just add more caching.&rdquo;",
        "&ldquo;Let&rsquo;s migrate to GraphQL.&rdquo;",
        "Name the tradeoff: fan-out-on-write breaks; switch to fan-out-on-read for >1M followers, accepting slower reads.",
        "&ldquo;Good question, moving on.&rdquo;",
      ],
      correctIndex: 2,
      explanation: "Senior-level answers name the tradeoff and the threshold. Generic answers (&ldquo;add caching&rdquo;) are the #1 reason people fail the deep-dive.",
    },
    {
      question: "Why is Estimate before High-Level, not after?",
      options: [
        "It looks more impressive.",
        "Because the numbers (QPS, storage, read/write ratio) decide what architecture is even viable.",
        "It wastes time.",
        "It doesn't matter - order is flexible.",
      ],
      correctIndex: 1,
      explanation: "5K vs 5M QPS are entirely different architectures. Without the number, you're drawing a random diagram.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="The 4-Step Design Framework"
      level={1}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The literal structure of a 45-min HLD round"
      onQuizComplete={onQuizComplete}
    />
  );
}
