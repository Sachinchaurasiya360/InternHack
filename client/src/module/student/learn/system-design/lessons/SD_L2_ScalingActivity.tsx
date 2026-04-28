import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers, ArrowUp, Server, TrendingUp, GitCompare, AlertTriangle, Check, X,
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

const UP_COLOR = "#8b5cf6";
const OUT_COLOR = "#10b981";

/* ================================================================== */
/*  TAB 1 - Interactive compare                                        */
/* ================================================================== */

function Compare() {
  const [load, setLoad] = useState(50);

  const capV = 100;          // big single box capacity
  const capH = 30;           // each small box capacity
  const minServersH = Math.max(1, Math.ceil(load / capH));

  return (
    <div>
      <h3 style={sectionTitle}>Same load. Two very different answers.</h3>
      <p style={sectionDesc}>
        When a server is overloaded, you have two choices: make the <em>one</em> server bigger
        (vertical / scale up) or run <em>more</em> servers in parallel (horizontal / scale out).
        Both work. Real systems do both. But the tradeoffs are wildly different.
      </p>

      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: "0.85rem", color: "var(--eng-text)", fontWeight: 600 }}>Traffic load</span>
          <span style={{ fontFamily: MONO, fontSize: "0.88rem", color: SD, fontWeight: 700 }}>{load} QPS</span>
        </div>
        <input
          type="range" min={10} max={200} step={5} value={load}
          onChange={(e) => setLoad(Number(e.target.value))}
          style={{ width: "100%", accentColor: SD }}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {/* Vertical */}
        <div
          style={{
            border: `1.5px solid ${UP_COLOR}`, borderRadius: 12, padding: "18px 20px",
            background: `${UP_COLOR}10`, minHeight: 320,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <ArrowUp className="w-5 h-5" style={{ color: UP_COLOR }} />
            <span style={{ fontSize: "1.05rem", fontWeight: 800, color: UP_COLOR }}>Vertical (Scale Up)</span>
          </div>
          <div style={{ fontSize: "0.85rem", color: "var(--eng-text-muted)", marginBottom: 14, lineHeight: 1.5 }}>
            Keep one server. Give it more CPU, more RAM, faster disk.
          </div>

          <svg viewBox="0 0 300 140" style={{ width: "100%", height: 140 }}>
            {/* Big server */}
            <rect x="80" y="10" width="140" height={20 + Math.min(110, load * 0.9)} rx="8"
              fill={`${UP_COLOR}25`} stroke={UP_COLOR} strokeWidth="2" />
            <text x="150" y={30 + Math.min(55, load * 0.45)} textAnchor="middle" fontFamily={MONO} fontSize="12" fontWeight="700" fill={UP_COLOR}>
              {load} / {capV} QPS
            </text>
            {load > capV && (
              <text x="150" y={130} textAnchor="middle" fontFamily="var(--eng-font)" fontSize="12" fontWeight="700" fill={SD}>
                ⚠ OVERLOADED - hardware ceiling
              </text>
            )}
          </svg>

          <div style={{ fontFamily: MONO, fontSize: "0.72rem", color: UP_COLOR, marginTop: 10, fontWeight: 700 }}>
            Server count: 1 · Capacity: {capV} QPS
          </div>
        </div>

        {/* Horizontal */}
        <div
          style={{
            border: `1.5px solid ${OUT_COLOR}`, borderRadius: 12, padding: "18px 20px",
            background: `${OUT_COLOR}10`, minHeight: 320,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <Server className="w-5 h-5" style={{ color: OUT_COLOR }} />
            <span style={{ fontSize: "1.05rem", fontWeight: 800, color: OUT_COLOR }}>Horizontal (Scale Out)</span>
          </div>
          <div style={{ fontSize: "0.85rem", color: "var(--eng-text-muted)", marginBottom: 14, lineHeight: 1.5 }}>
            Keep one server small. Run more copies of it. Put a load balancer in front.
          </div>

          <svg viewBox="0 0 300 140" style={{ width: "100%", height: 140 }}>
            {Array.from({ length: Math.min(6, minServersH) }).map((_, i) => {
              const x = 30 + i * 42;
              return (
                <g key={i}>
                  <rect x={x} y="30" width="34" height="80" rx="5"
                    fill={`${OUT_COLOR}25`} stroke={OUT_COLOR} strokeWidth="1.5" />
                  <text x={x + 17} y="75" textAnchor="middle" fontFamily={MONO} fontSize="10" fontWeight="700" fill={OUT_COLOR}>
                    {Math.min(capH, Math.ceil(load / minServersH))}
                  </text>
                </g>
              );
            })}
            {minServersH > 6 && (
              <text x="260" y="75" textAnchor="start" fontFamily={MONO} fontSize="12" fontWeight="700" fill={OUT_COLOR}>
                +{minServersH - 6} more
              </text>
            )}
          </svg>

          <div style={{ fontFamily: MONO, fontSize: "0.72rem", color: OUT_COLOR, marginTop: 10, fontWeight: 700 }}>
            Server count: {minServersH} · Each @ {capH} QPS
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 18, padding: "14px 18px", borderRadius: 10,
          border: `1.5px solid ${SD}`, background: SD_SOFT,
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: "0.68rem", fontWeight: 800, color: SD, letterSpacing: "0.08em", marginBottom: 4 }}>
          THE UNCOMFORTABLE TRUTH
        </div>
        <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.6 }}>
          Vertical scaling has a <b>hard ceiling</b> - the biggest machine you can buy. Horizontal
          has (almost) no ceiling - you just keep adding boxes. That&rsquo;s why every hyperscale
          system on Earth is horizontal. But horizontal is harder: it forces you to think about
          coordination, sharding, and <em>statelessness</em> (next lesson).
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Tradeoff table                                             */
/* ================================================================== */

function Tradeoffs() {
  const rows = [
    { aspect: "Complexity",          v: "Low - one box", vGood: true,  h: "High - coordination, LB, deploys", hGood: false },
    { aspect: "Cost curve",          v: "Non-linear (big boxes get expensive fast)", vGood: false, h: "Roughly linear with load", hGood: true },
    { aspect: "Ceiling",             v: "Hard (biggest available CPU)", vGood: false, h: "Practically unbounded", hGood: true },
    { aspect: "Failure blast radius",v: "One box down = everything down", vGood: false, h: "One box down = small fraction affected", hGood: true },
    { aspect: "Deployment",          v: "Usually requires downtime", vGood: false, h: "Rolling deploys, zero downtime possible", hGood: true },
    { aspect: "State management",    v: "Easy - it's all in one place", vGood: true,  h: "Hard - needs Redis / sticky sessions / external store", hGood: false },
    { aspect: "Dev environment",     v: "Runs on your laptop", vGood: true, h: "Needs docker-compose or more", hGood: false },
  ];

  return (
    <div>
      <h3 style={sectionTitle}>The tradeoff table you draw on the whiteboard</h3>
      <p style={sectionDesc}>
        Interviewers love this table. If you can reproduce it from memory and pick the right side
        for a given scenario, you&rsquo;ve already shown senior-level judgment.
      </p>

      <div
        style={{
          border: "1.5px solid var(--eng-border)", borderRadius: 12, overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid", gridTemplateColumns: "1.2fr 1.5fr 1.5fr",
            background: SD_SOFT, borderBottom: `1.5px solid ${SD}`,
            padding: "10px 14px", gap: 10,
          }}
        >
          <span style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 800, color: SD, letterSpacing: "0.08em" }}>ASPECT</span>
          <span style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 800, color: UP_COLOR, letterSpacing: "0.08em" }}>VERTICAL</span>
          <span style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 800, color: OUT_COLOR, letterSpacing: "0.08em" }}>HORIZONTAL</span>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.aspect}
            style={{
              display: "grid", gridTemplateColumns: "1.2fr 1.5fr 1.5fr",
              padding: "10px 14px", gap: 10, alignItems: "center",
              borderBottom: i < rows.length - 1 ? "1px solid var(--eng-border)" : "none",
              background: i % 2 === 0 ? "var(--eng-bg)" : "var(--eng-bg-subtle)",
            }}
          >
            <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--eng-text)" }}>{r.aspect}</span>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
              {r.vGood ? <Check className="w-4 h-4 shrink-0" style={{ color: OUT_COLOR, marginTop: 2 }} /> : <X className="w-4 h-4 shrink-0" style={{ color: SD, marginTop: 2 }} />}
              <span style={{ fontSize: "0.82rem", color: "var(--eng-text)", lineHeight: 1.45 }}>{r.v}</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
              {r.hGood ? <Check className="w-4 h-4 shrink-0" style={{ color: OUT_COLOR, marginTop: 2 }} /> : <X className="w-4 h-4 shrink-0" style={{ color: SD, marginTop: 2 }} />}
              <span style={{ fontSize: "0.82rem", color: "var(--eng-text)", lineHeight: 1.45 }}>{r.h}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 3 - When to pick which                                         */
/* ================================================================== */

function Decisions() {
  const cases = [
    {
      scenario: "Internal admin dashboard used by 50 employees",
      choice: "Vertical",
      color: UP_COLOR,
      why: "Load is small and bounded. Simpler wins. One bigger box = less ops complexity.",
    },
    {
      scenario: "Consumer app targeting 10M DAU with viral growth",
      choice: "Horizontal",
      color: OUT_COLOR,
      why: "Unbounded upside. The ceiling will bite within a year. Also: one box = single point of failure.",
    },
    {
      scenario: "Relational DB primary (writes)",
      choice: "Vertical first",
      color: UP_COLOR,
      why: "Writes are hard to shard correctly. Most teams scale primaries vertically and scale reads horizontally via replicas.",
    },
    {
      scenario: "Stateless API layer (auth, feed, search)",
      choice: "Horizontal",
      color: OUT_COLOR,
      why: "No local state = any box can serve any request. Classic horizontal win.",
    },
    {
      scenario: "Legacy monolith with in-memory session state",
      choice: "Vertical (temporarily)",
      color: UP_COLOR,
      why: "Until you externalize the session store, horizontal will break logins. Scale up while you fix stateless-ness.",
    },
  ];

  return (
    <div>
      <h3 style={sectionTitle}>When you&rsquo;d actually pick each</h3>
      <p style={sectionDesc}>
        The question is never &ldquo;which is better&rdquo; - it&rsquo;s &ldquo;which fits
        <em> this</em> problem.&rdquo; Here are 5 scenarios a senior engineer would decide in
        about 10 seconds.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        {cases.map((c, i) => (
          <motion.div
            key={i}
            variants={cardEntrance}
            whileHover={cardHover}
            style={{
              display: "grid", gridTemplateColumns: "1fr 140px",
              gap: 12, padding: "14px 16px",
              border: `1.5px solid ${c.color}`, borderRadius: 10,
              background: `${c.color}08`,
            }}
          >
            <div>
              <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--eng-text)", marginBottom: 4 }}>
                {c.scenario}
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--eng-text-muted)", lineHeight: 1.5 }}>
                <span style={{ fontFamily: MONO, fontSize: "0.68rem", fontWeight: 700, color: c.color, letterSpacing: "0.05em" }}>WHY · </span>
                {c.why}
              </div>
            </div>
            <div
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "10px 12px", borderRadius: 8,
                background: c.color, color: "#fff",
                fontFamily: MONO, fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.05em",
                textAlign: "center",
              }}
            >
              {c.choice.toUpperCase()}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div
        style={{
          marginTop: 18, padding: "12px 16px", borderRadius: 10,
          border: `1.5px solid ${SD}`, background: SD_SOFT,
          display: "flex", gap: 10, alignItems: "flex-start",
        }}
      >
        <AlertTriangle className="w-5 h-5 shrink-0" style={{ color: SD, marginTop: 2 }} />
        <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
          <b>Senior rule of thumb:</b> scale vertically until it hurts, then go horizontal. Why?
          Because horizontal adds complexity forever - the moment you commit, you now own
          deployments, coordination, and state externalization. Don&rsquo;t pay that price before
          you have to.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MAIN                                                                */
/* ================================================================== */

export default function SD_L2_ScalingActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "cmp",   label: "Same Load, Two Ways", icon: <Layers className="w-4 h-4" />, content: <Compare /> },
    { id: "trade", label: "Tradeoffs", icon: <GitCompare className="w-4 h-4" />, content: <Tradeoffs /> },
    { id: "pick",  label: "When to Pick Which", icon: <TrendingUp className="w-4 h-4" />, content: <Decisions /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "What is vertical scaling?",
      options: [
        "Adding more servers behind a load balancer",
        "Giving one server more CPU / RAM / disk",
        "Splitting the database into shards",
        "Moving to the cloud",
      ],
      correctIndex: 1,
      explanation: "Vertical = up. Horizontal = out. You upgrade the single box vs adding more boxes.",
    },
    {
      question: "Which scaling approach has a hard ceiling?",
      options: ["Horizontal", "Vertical", "Both, equally", "Neither"],
      correctIndex: 1,
      explanation: "Vertical is bounded by the biggest machine money can buy. Horizontal is practically unbounded - add more boxes.",
    },
    {
      question: "The #1 reason teams prefer horizontal at scale is:",
      options: [
        "It's cheaper for small apps.",
        "It's simpler to code.",
        "No single point of failure + near-linear cost curve.",
        "It doesn't need a load balancer.",
      ],
      correctIndex: 2,
      explanation: "High availability + predictable cost scaling. One box can die - the other N keep serving. And you pay roughly proportionally to load.",
    },
    {
      question: "Which service is hardest to scale horizontally without extra work?",
      options: [
        "A stateless REST API",
        "A static website on a CDN",
        "A relational database handling writes (primary)",
        "A worker consuming from a queue",
      ],
      correctIndex: 2,
      explanation: "Write-heavy primary databases are hard to shard correctly. Most teams scale primaries vertically and scale reads via replicas.",
    },
    {
      question: "Senior rule of thumb: when should you go horizontal?",
      options: [
        "Immediately - it's always better.",
        "Never - stay vertical forever.",
        "Scale vertically until it hurts; then go horizontal when you must.",
        "Only if the CEO asks.",
      ],
      correctIndex: 2,
      explanation: "Horizontal adds permanent complexity (deploys, coordination, statelessness). Don't pay that cost until you have to.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Vertical vs Horizontal Scaling"
      level={2}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Decides the shape of every capacity-planning discussion"
      onQuizComplete={onQuizComplete}
    />
  );
}
