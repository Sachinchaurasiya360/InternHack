import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Blocks, Play, Pause, RotateCcw, Server, Users, Globe, Layers } from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  SD,
  SD_SOFT,
  SD_BORDER,
  MONO,
  sectionTitle,
  sectionDesc,
  staggerContainer,
  cardEntrance,
  cardHover,
} from "./_shared/styles";

/* ================================================================== */
/*  TAB 1 - Zoom Out: from function to full system                     */
/* ================================================================== */

const ZOOM_STAGES = [
  {
    key: "function",
    label: "Function",
    badge: "DSA",
    badgeColor: "#3b82f6",
    caption: "One function. One input, one output. This is algorithms.",
    users: 0,
  },
  {
    key: "class",
    label: "Class",
    badge: "OOP / LLD",
    badgeColor: "#14b8a6",
    caption: "A class with methods and state. Designing this shape is what LLD rounds test.",
    users: 0,
  },
  {
    key: "server",
    label: "Single Server",
    badge: "Deployment",
    badgeColor: "#8b5cf6",
    caption: "One machine, a few classes inside. Still no system design yet.",
    users: 1,
  },
  {
    key: "traffic",
    label: "1 Million Users",
    badge: "Breaks",
    badgeColor: "#84cc16",
    caption: "One server cannot reliably serve a million concurrent users. Load, blast radius, and geography all break it.",
    users: 1_000_000,
    broken: true,
  },
  {
    key: "system",
    label: "Distributed System",
    badge: "HLD",
    badgeColor: SD,
    caption: "Load balancer, replicas, cache, DB, queue. Designed so it does not explode. This is System Design.",
    users: 1_000_000,
  },
];

function ZoomOut() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % ZOOM_STAGES.length);
    }, 2800);
    return () => clearInterval(t);
  }, [playing]);

  const stage = ZOOM_STAGES[idx];

  return (
    <div>
      <h3 style={sectionTitle}>Where does System Design live?</h3>
      <p style={sectionDesc}>
        Every piece of software fits somewhere on a ladder - from a single function to a system
        serving millions. Watch the camera pull back stage by stage. System Design is what happens
        when one machine is no longer enough.
      </p>

      <div
        style={{
          background: "#0b1220", borderRadius: 12, overflow: "hidden",
          border: "1px solid rgba(148,163,184,0.15)",
        }}
      >
        {/* Stage indicator row */}
        <div style={{ display: "flex", padding: "14px 18px 0", gap: 6, flexWrap: "wrap" }}>
          {ZOOM_STAGES.map((s, i) => (
            <button
              key={s.key}
              onClick={() => { setIdx(i); setPlaying(false); }}
              style={{
                fontFamily: MONO, fontSize: "0.62rem", fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "5px 10px", borderRadius: 4, cursor: "pointer",
                border: `1px solid ${i === idx ? s.badgeColor : "rgba(148,163,184,0.2)"}`,
                background: i === idx ? `${s.badgeColor}22` : "transparent",
                color: i === idx ? s.badgeColor : "#64748b",
                transition: "all 0.2s",
              }}
            >
              {String(i + 1).padStart(2, "0")} · {s.label}
            </button>
          ))}
        </div>

        {/* Main stage */}
        <div style={{ padding: "20px 18px 18px", minHeight: 340, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <StageArt stage={stage} idx={idx} />
        </div>

        {/* Caption */}
        <div
          style={{
            padding: "14px 20px", background: "rgba(15,23,42,0.6)",
            borderTop: "1px solid rgba(148,163,184,0.12)",
            display: "flex", alignItems: "center", gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: MONO, fontSize: "0.62rem", fontWeight: 800,
              letterSpacing: "0.1em", padding: "3px 8px", borderRadius: 4,
              background: `${stage.badgeColor}22`, color: stage.badgeColor,
              border: `1px solid ${stage.badgeColor}55`, flexShrink: 0,
            }}
          >
            {stage.badge}
          </span>
          <span style={{ fontSize: "0.88rem", color: "#e5e7eb", lineHeight: 1.5 }}>
            {stage.caption}
          </span>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", gap: 8, padding: "12px 18px 14px", borderTop: "1px solid rgba(148,163,184,0.12)" }}>
          <button
            onClick={() => setPlaying((p) => !p)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "6px 12px", borderRadius: 6, cursor: "pointer",
              border: "1px solid rgba(148,163,184,0.25)",
              background: "transparent", color: "#e5e7eb",
              fontFamily: MONO, fontSize: "0.72rem", fontWeight: 600,
            }}
          >
            {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {playing ? "Pause" : "Play"}
          </button>
          <button
            onClick={() => { setIdx(0); setPlaying(true); }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "6px 12px", borderRadius: 6, cursor: "pointer",
              border: "1px solid rgba(148,163,184,0.25)",
              background: "transparent", color: "#e5e7eb",
              fontFamily: MONO, fontSize: "0.72rem", fontWeight: 600,
            }}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Replay
          </button>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: "#64748b", alignSelf: "center" }}>
            Stage {idx + 1} / {ZOOM_STAGES.length}
          </span>
        </div>
      </div>
    </div>
  );
}

function StageArt({ stage, idx }: { stage: typeof ZOOM_STAGES[number]; idx: number }) {

  if (idx === 0) {
    return (
      <pre
        style={{
          fontFamily: MONO, color: "#e5e7eb", background: "transparent",
          fontSize: "0.95rem", margin: 0, lineHeight: 1.7, textAlign: "left",
        }}
      >
{`function add(a, b) {
  return a + b;
}`}
      </pre>
    );
  }

  if (idx === 1) {
    return (
      <div
        style={{
          border: `2px solid ${stage.badgeColor}`, borderRadius: 8,
          padding: "14px 18px", background: `${stage.badgeColor}15`,
          fontFamily: MONO, color: "#e5e7eb", fontSize: "0.82rem",
          minWidth: 260, lineHeight: 1.7,
        }}
      >
        <div style={{ fontWeight: 700, color: stage.badgeColor, marginBottom: 8 }}>
          class Calculator
        </div>
        <div style={{ color: "#94a3b8" }}>+ add(a, b)</div>
        <div style={{ color: "#94a3b8" }}>+ sub(a, b)</div>
        <div style={{ color: "#94a3b8" }}>+ mul(a, b)</div>
        <div style={{ color: "#94a3b8" }}>+ div(a, b)</div>
        <div style={{ color: "#64748b", marginTop: 8, fontSize: "0.72rem", fontStyle: "italic" }}>
          - history: number[]
        </div>
      </div>
    );
  }

  if (idx === 2) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Users className="w-5 h-5" style={{ color: "#94a3b8" }} />
          <span style={{ fontFamily: MONO, fontSize: "0.78rem", color: "#94a3b8" }}>1 user</span>
        </div>
        <svg width="2" height="30"><line x1="1" y1="0" x2="1" y2="30" stroke="#475569" strokeDasharray="4 4" /></svg>
        <div
          style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            border: `2px solid ${stage.badgeColor}`, borderRadius: 10,
            padding: "16px 22px", background: `${stage.badgeColor}15`, minWidth: 180,
          }}
        >
          <Server className="w-7 h-7" style={{ color: stage.badgeColor }} />
          <div style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 700, color: "#e5e7eb" }}>
            server
          </div>
          <div style={{ fontFamily: MONO, fontSize: "0.66rem", color: "#94a3b8" }}>
            Calculator class inside
          </div>
        </div>
      </div>
    );
  }

  if (idx === 3) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Users className="w-6 h-6" style={{ color: stage.badgeColor }} />
          <div
            style={{
              fontFamily: MONO, fontSize: "1.1rem", fontWeight: 800,
              color: stage.badgeColor, letterSpacing: "-0.02em",
            }}
          >
            1,000,000 users
          </div>
          <Users className="w-6 h-6" style={{ color: stage.badgeColor }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 3 }}>
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 2, height: 10, borderRadius: 1,
                background: stage.badgeColor, opacity: 0.6 + Math.random() * 0.4,
                animation: `sd-flicker-${i % 5} 0.6s infinite`,
              }}
            />
          ))}
        </div>
        <svg width="2" height="30"><line x1="1" y1="0" x2="1" y2="30" stroke={stage.badgeColor} strokeWidth="2" /></svg>
        <div
          style={{
            position: "relative",
            border: `2px solid ${stage.badgeColor}`, borderRadius: 10,
            padding: "18px 26px", minWidth: 220,
            background: `${stage.badgeColor}22`, animation: "sd-shake 0.18s infinite",
          }}
        >
          <Server className="w-8 h-8 mx-auto" style={{ color: stage.badgeColor }} />
          <div style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 700, color: stage.badgeColor, textAlign: "center", marginTop: 6 }}>
            OVERLOADED
          </div>
          <div style={{ fontFamily: MONO, fontSize: "0.66rem", color: stage.badgeColor, textAlign: "center", opacity: 0.8 }}>
            dropping requests
          </div>
        </div>
        <style>{`
          @keyframes sd-shake { 0% { transform: translate(0,0); } 25% { transform: translate(-1px,1px); } 50% { transform: translate(1px,-1px); } 75% { transform: translate(-1px,-1px); } 100% { transform: translate(0,0); } }
          @keyframes sd-flicker-0 { 0%,100%{ opacity: 0.4; } 50%{ opacity: 1; } }
          @keyframes sd-flicker-1 { 0%,100%{ opacity: 0.7; } 50%{ opacity: 0.3; } }
          @keyframes sd-flicker-2 { 0%,100%{ opacity: 0.5; } 50%{ opacity: 0.9; } }
          @keyframes sd-flicker-3 { 0%,100%{ opacity: 0.3; } 50%{ opacity: 1; } }
          @keyframes sd-flicker-4 { 0%,100%{ opacity: 0.9; } 50%{ opacity: 0.5; } }
        `}</style>
      </div>
    );
  }

  // idx === 4: full distributed system
  return (
    <SystemDiagram />
  );
}

function SystemDiagram() {
  return (
    <svg viewBox="0 0 560 280" width="100%" style={{ maxWidth: 620 }}>
      <defs>
        <marker id="sd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
        </marker>
        <style>{`
          @keyframes sd-dot { from { offset-distance: 0%; } to { offset-distance: 100%; } }
          .sd-flow { animation: sd-dot 2.2s linear infinite; offset-rotate: 0deg; }
        `}</style>
      </defs>

      {/* Edges */}
      <path d="M 70 140 L 160 140" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#sd-arrow)" />
      <path d="M 230 140 L 320 80" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#sd-arrow)" />
      <path d="M 230 140 L 320 140" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#sd-arrow)" />
      <path d="M 230 140 L 320 200" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#sd-arrow)" />
      <path d="M 390 80 L 480 140" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#sd-arrow)" />
      <path d="M 390 140 L 480 140" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#sd-arrow)" />
      <path d="M 390 200 L 480 140" stroke="#94a3b8" strokeWidth="1.5" fill="none" markerEnd="url(#sd-arrow)" />

      {/* Animated flowing dots */}
      <circle r="4" fill="#84cc16">
        <animateMotion dur="2.2s" repeatCount="indefinite" path="M 70 140 L 160 140 L 160 140" />
      </circle>
      <circle r="3.5" fill="#84cc16">
        <animateMotion dur="1.8s" repeatCount="indefinite" path="M 230 140 L 320 80" />
      </circle>
      <circle r="3.5" fill="#84cc16">
        <animateMotion dur="1.8s" begin="0.6s" repeatCount="indefinite" path="M 230 140 L 320 140" />
      </circle>
      <circle r="3.5" fill="#84cc16">
        <animateMotion dur="1.8s" begin="1.2s" repeatCount="indefinite" path="M 230 140 L 320 200" />
      </circle>
      <circle r="3" fill="#22c55e">
        <animateMotion dur="2s" repeatCount="indefinite" path="M 390 140 L 480 140" />
      </circle>

      {/* Nodes */}
      <NodeBox x={20} y={115} label="Clients" sub="millions" color="#94a3b8" />
      <NodeBox x={160} y={115} label="LB" sub="load balancer" color="#3b82f6" />
      <NodeBox x={320} y={55} label="Server 1" sub="" color="#84cc16" />
      <NodeBox x={320} y={115} label="Server 2" sub="" color="#84cc16" />
      <NodeBox x={320} y={175} label="Server 3" sub="" color="#84cc16" />
      <NodeBox x={480} y={115} label="Database" sub="+ cache" color="#14b8a6" />
    </svg>
  );
}

function NodeBox({ x, y, label, sub, color }: { x: number; y: number; label: string; sub: string; color: string }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect width="70" height="50" rx="6" fill={`${color}22`} stroke={color} strokeWidth="1.5" />
      <text x="35" y="22" textAnchor="middle" fill="#e5e7eb" fontSize="11" fontWeight="700" fontFamily={MONO}>
        {label}
      </text>
      {sub && (
        <text x="35" y="36" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontFamily={MONO}>
          {sub}
        </text>
      )}
    </g>
  );
}

/* ================================================================== */
/*  TAB 2 - What System Design Actually Is                             */
/* ================================================================== */

function WhatItIs() {
  const points = [
    {
      title: "It is the discipline of designing systems under constraint.",
      body: "Scale, latency, availability, cost, team size, deadline. Every design decision trades one constraint against another. System Design is the craft of making those trades deliberately.",
    },
    {
      title: "It is not diagrams with boxes.",
      body: "Anyone can draw boxes. The diagram is just the output. The work is the thinking: what breaks first, what happens at 10x load, which component becomes the bottleneck.",
    },
    {
      title: "It is a senior-engineer skill, not a separate role.",
      body: "Junior engineers write code that passes tests. Senior engineers write systems that survive production. The transition is the ability to reason about what you cannot directly run.",
    },
    {
      title: "It is tested in two distinct interview rounds.",
      body: "HLD (architecture, scaling, distributed components) and LLD (class design, machine coding). Both rounds gate offers at Indian and global tech companies. Level 1, Lesson 2 covers the split.",
    },
  ];

  return (
    <div>
      <h3 style={sectionTitle}>What System Design actually is</h3>
      <p style={sectionDesc}>
        Before we get to any technique, four claims about the discipline itself. Read these as the frame
        you will put every later lesson inside.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "grid", gap: 12 }}
      >
        {points.map((p, i) => (
          <motion.div
            key={i}
            variants={cardEntrance}
            whileHover={cardHover}
            className="card-eng"
            style={{ padding: "16px 18px" }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: "0.65rem", fontWeight: 700,
                color: SD, letterSpacing: "0.12em", marginBottom: 6,
              }}
            >
              CLAIM {String(i + 1).padStart(2, "0")}
            </div>
            <div
              style={{
                fontFamily: "var(--eng-font)", fontSize: "1rem", fontWeight: 700,
                color: "var(--eng-text)", marginBottom: 6, lineHeight: 1.4,
              }}
            >
              {p.title}
            </div>
            <div
              style={{
                fontFamily: "var(--eng-font)", fontSize: "0.88rem",
                color: "var(--eng-text-muted)", lineHeight: 1.6,
              }}
            >
              {p.body}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 3 - Where it shows up in interviews                            */
/* ================================================================== */

function WhereItShowsUp() {
  const rows: { company: string; round: string; style: "HLD" | "LLD" | "Both"; example: string }[] = [
    { company: "Google", round: "Systems Design (45 min)", style: "HLD", example: "Design YouTube video upload." },
    { company: "Amazon", round: "System Design (with Bar Raiser)", style: "HLD", example: "Design an e-commerce checkout." },
    { company: "Flipkart", round: "Machine Coding (90 min)", style: "LLD", example: "Implement a parking lot system in Java." },
    { company: "Meta", round: "Product Architecture", style: "HLD", example: "Design the news feed ranking pipeline." },
    { company: "Atlassian", round: "Craft & Design", style: "LLD", example: "Design the classes for a Jira issue tracker." },
    { company: "Swiggy", round: "System Design + Machine Coding", style: "Both", example: "Design Swiggy delivery dispatch (HLD) + Implement cart service (LLD)." },
    { company: "Microsoft", round: "Design Round", style: "HLD", example: "Design a URL shortener at Bing scale." },
    { company: "Uber", round: "System Design", style: "HLD", example: "Design driver-rider matching." },
  ];

  return (
    <div>
      <h3 style={sectionTitle}>Where System Design shows up in interviews</h3>
      <p style={sectionDesc}>
        Real rounds from companies that hire in India. Notice: HLD and LLD are
        genuinely separate rounds at most places. You must prepare for both.
      </p>

      <div
        style={{
          overflow: "hidden", borderRadius: 10,
          border: "1px solid var(--eng-border)", background: "var(--eng-surface)",
        }}
      >
        <div
          style={{
            display: "grid", gridTemplateColumns: "130px 1fr 90px 1.2fr",
            padding: "10px 14px", background: "#f8fafc",
            borderBottom: "1px solid var(--eng-border)",
            fontFamily: MONO, fontSize: "0.66rem",
            fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--eng-text-muted)",
          }}
        >
          <div>Company</div>
          <div>Round Name</div>
          <div>Style</div>
          <div>Example Prompt</div>
        </div>
        {rows.map((r, i) => {
          const styleColor = r.style === "HLD" ? SD : r.style === "LLD" ? "#14b8a6" : "#8b5cf6";
          return (
            <div
              key={i}
              style={{
                display: "grid", gridTemplateColumns: "130px 1fr 90px 1.2fr",
                padding: "12px 14px",
                borderBottom: i < rows.length - 1 ? "1px solid var(--eng-border)" : "none",
                fontSize: "0.85rem", color: "var(--eng-text)", alignItems: "center",
              }}
            >
              <div style={{ fontWeight: 700 }}>{r.company}</div>
              <div style={{ color: "var(--eng-text-muted)" }}>{r.round}</div>
              <div>
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.7rem", fontWeight: 800, padding: "2px 8px",
                    borderRadius: 4, color: styleColor,
                    background: `${styleColor}16`, border: `1px solid ${styleColor}55`,
                  }}
                >
                  {r.style}
                </span>
              </div>
              <div style={{ color: "var(--eng-text-muted)", fontSize: "0.82rem" }}>{r.example}</div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 18, padding: "14px 16px", borderRadius: 8,
          background: SD_SOFT, border: `1px solid ${SD_BORDER}`,
        }}
      >
        <div
          style={{
            fontFamily: MONO,
            fontSize: "0.62rem", fontWeight: 800, color: SD,
            letterSpacing: "0.12em", marginBottom: 6,
          }}
        >
          SENIOR NOTE
        </div>
        <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
          Indian service companies (TCS, Infosys) rarely ask a full system design round. Product
          companies (FAANG, Flipkart, Swiggy, Zomato, Razorpay, CRED) always do. If you are targeting
          product companies, System Design is not optional.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L1_WhatIsSystemDesignActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "zoom", label: "Zoom Out", icon: <Layers className="w-4 h-4" />, content: <ZoomOut /> },
    { id: "what", label: "What It Is", icon: <Blocks className="w-4 h-4" />, content: <WhatItIs /> },
    { id: "where", label: "Where It Shows Up", icon: <Globe className="w-4 h-4" />, content: <WhereItShowsUp /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "You are writing a function that sorts a list of numbers. Which discipline handles this?",
      options: [
        "System Design",
        "Data Structures & Algorithms",
        "HLD",
        "LLD",
      ],
      correctIndex: 1,
      explanation: "Single function, one input, one output, runs on one machine. That is DSA-land. System Design begins when a single machine is no longer enough.",
    },
    {
      question: "Your service is at 500 requests per second and a single box is handling it fine. You then learn that next month marketing will push you to 500,000 RPS. What you do next is primarily...",
      options: [
        "Algorithm optimization",
        "Clean code refactoring",
        "System Design",
        "Data structure selection",
      ],
      correctIndex: 2,
      explanation: "A 1000x traffic increase is not solved by a faster function. You need load balancers, horizontal scaling, caching, and possibly sharding. This is exactly what System Design covers.",
    },
    {
      question: "Which statement best captures what System Design is?",
      options: [
        "Drawing architecture diagrams with boxes and arrows.",
        "Memorizing famous system designs like Twitter and Uber.",
        "The discipline of making engineering decisions under constraints like scale, latency, cost, and failure.",
        "Learning AWS and Kubernetes.",
      ],
      correctIndex: 2,
      explanation: "Diagrams are the output; tools are the implementation. The work itself is the reasoning about constraints and tradeoffs.",
    },
    {
      question: "Which pair of interview rounds most commonly test System Design at Indian product companies?",
      options: [
        "Coding round + HR round",
        "HLD (architecture) round + LLD (machine coding) round",
        "DSA round + Behavioral round",
        "Systems programming + Leadership round",
      ],
      correctIndex: 1,
      explanation: "HLD and LLD are tested as distinct rounds. Level 1 Lesson 2 covers the exact split.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="What is System Design?"
      level={1}
      lessonNumber={1}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Foundation for every HLD and LLD round"
      onQuizComplete={onQuizComplete}
    />
  );
}
