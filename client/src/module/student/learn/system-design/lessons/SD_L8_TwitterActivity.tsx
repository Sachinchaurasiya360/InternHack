import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Globe, Megaphone, RotateCcw, Send } from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";

const SD = "#84cc16";
const NEUTRAL = "#64748b";
const WARN = "#f59e0b";
const PURPLE = "#8b5cf6";
const MONO = '"JetBrains Mono", Menlo, Consolas, monospace';

const sectionTitle: CSSProperties = {
  fontFamily: "var(--eng-font)", fontWeight: 700, fontSize: "1.15rem",
  color: "var(--eng-text)", margin: "0 0 12px",
};
const sectionDesc: CSSProperties = {
  fontFamily: "var(--eng-font)", fontSize: "0.92rem",
  color: "var(--eng-text-muted)", margin: "0 0 20px", lineHeight: 1.65,
};

/* ================================================================== */
/*  TAB 1 - The 4-step framework applied                               */
/* ================================================================== */

const STEPS = [
  {
    k: "1. Requirements",
    color: SD,
    items: [
      "Functional: post tweet, follow, view home timeline (chronological merge of followees' tweets).",
      "Non-functional: timeline read p99 < 200ms, 95%+ availability, can survive viral / celebrity posts.",
      "Out of scope (interview-version): ranking, ads, search, DMs.",
    ],
  },
  {
    k: "2. Estimation",
    color: WARN,
    items: [
      "500M tweets/day → ~6k writes/sec average, peak ~30k.",
      "200M daily active users × 50 timeline opens/day → ~115k timeline reads/sec.",
      "Avg follower count: ~200. Top 0.1% have 1M+ (the celebrity tail).",
      "Tweet ~280 chars + metadata ~1 KB. Storage: 500M × 365 × 5y × 1KB ≈ 900 TB / 5 yrs.",
    ],
  },
  {
    k: "3. API + Data Model",
    color: PURPLE,
    items: [
      "POST /tweets { text } · GET /timeline → list of tweets · POST /follow { user_id }",
      "tweets(id, author_id, text, created_at) — sharded by author_id",
      "follows(follower_id, followee_id) — bidirectional indexes",
      "timeline_cache(user_id, list of tweet_ids) in Redis",
    ],
  },
  {
    k: "4. High-level Diagram",
    color: SD,
    items: [
      "Write path: client → write API → tweet store → fan-out service → timeline cache (Redis) of each follower.",
      "Read path: client → timeline API → Redis lookup → hydrate tweet bodies from tweet store.",
      "Hybrid fan-out: push for normal users, pull for celebrities at read time.",
    ],
  },
];

function FrameworkApplied() {
  return (
    <div>
      <h3 style={sectionTitle}>The 4-step framework, applied to Twitter feed</h3>
      <p style={sectionDesc}>
        The interesting part of Twitter isn&rsquo;t storing tweets — it&rsquo;s the timeline assembly.
        Here&rsquo;s the framework run end-to-end.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {STEPS.map((s) => (
          <motion.div
            key={s.k}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "16px 18px", border: `1.5px solid ${s.color}55`, borderRadius: 10, background: `${s.color}08`, display: "flex", flexDirection: "column", gap: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800, color: s.color, letterSpacing: "0.04em" }}>
              {s.k.toUpperCase()}
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
              {s.items.map((it, i) => (
                <li key={i} style={{ display: "flex", gap: 8, fontSize: "0.84rem", color: "var(--eng-text)", lineHeight: 1.5 }}>
                  <span style={{ color: s.color, fontWeight: 800 }}>·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Hybrid fan-out animation                                   */
/* ================================================================== */

type Author = { id: string; label: string; followers: number; isCeleb: boolean; color: string; };

const AUTHORS: Author[] = [
  { id: "asha", label: "Asha · 240 followers", followers: 240, isCeleb: false, color: SD },
  { id: "rahul", label: "Rahul · 8k followers", followers: 8000, isCeleb: false, color: SD },
  { id: "ishaan", label: "Ishaan · 2.5M followers", followers: 2_500_000, isCeleb: true, color: WARN },
];

function FanoutDemo() {
  const [author, setAuthor] = useState<Author>(AUTHORS[0]);
  const [posted, setPosted] = useState(false);
  const [stats, setStats] = useState({ writes: 0, pullPaths: 0 });

  const post = () => {
    setPosted(true);
    if (author.isCeleb) {
      setStats((s) => ({ ...s, pullPaths: s.pullPaths + 1 }));
    } else {
      setStats((s) => ({ ...s, writes: s.writes + author.followers }));
    }
    setTimeout(() => setPosted(false), 2500);
  };

  const reset = () => { setStats({ writes: 0, pullPaths: 0 }); setPosted(false); };

  return (
    <div>
      <h3 style={sectionTitle}>Watch hybrid fan-out behave for normal vs celebrity authors</h3>
      <p style={sectionDesc}>
        Pick an author and post. Below 1M followers, the system pre-fans-out — every follower&rsquo;s
        timeline cache gets the tweet ID written. At 1M+, the system skips the fan-out and lets
        followers&rsquo; timeline reads merge celebrity tweets at read time.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>author:</span>
        {AUTHORS.map((a) => {
          const active = author.id === a.id;
          return (
            <button
              key={a.id}
              type="button"
              onClick={() => setAuthor(a)}
              disabled={posted}
              style={{
                padding: "6px 12px",
                borderRadius: 6,
                cursor: posted ? "not-allowed" : "pointer",
                border: `1.5px solid ${active ? a.color : "var(--eng-border)"}`,
                background: active ? `${a.color}18` : "transparent",
                color: active ? a.color : "var(--eng-text-muted)",
                fontFamily: MONO,
                fontSize: "0.7rem",
                fontWeight: 700,
                opacity: posted ? 0.6 : 1,
              }}
            >
              {a.label}
            </button>
          );
        })}
      </div>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22 }}>
        <svg viewBox="0 0 720 320" width="100%" style={{ maxWidth: 760, display: "block", margin: "0 auto" }}>
          {/* author */}
          <g transform="translate(40, 130)">
            <motion.rect width={140} height={60} rx={10} fill={`${author.color}22`} stroke={author.color} strokeWidth={2} animate={{ scale: posted ? [1, 1.05, 1] : 1 }} transition={{ duration: 0.5 }} />
            <text x={70} y={26} textAnchor="middle" fill="#e5e7eb" fontSize={12} fontWeight={800} fontFamily={MONO}>
              {author.id.toUpperCase()}
            </text>
            <text x={70} y={44} textAnchor="middle" fill={author.color} fontSize={9.5} fontFamily={MONO}>
              {author.followers.toLocaleString()} followers
            </text>
          </g>

          {/* fan-out service */}
          <NodeBox x={250} y={50} w={140} h={50} label="Fan-out service" sub={author.isCeleb ? "skipped (celeb)" : "writes ids"} color={author.isCeleb ? NEUTRAL : SD} pulse={posted && !author.isCeleb} />

          {/* timeline cache */}
          <NodeBox x={500} y={50} w={180} h={50} label="Timeline caches (Redis)" sub={author.isCeleb ? "no celeb writes" : `${author.followers.toLocaleString()} updated`} color={author.isCeleb ? NEUTRAL : SD} />

          {/* tweet store */}
          <NodeBox x={250} y={210} w={140} h={50} label="Tweet store" sub="tweet body saved" color={SD} pulse={posted} />

          {/* read merge for celebs */}
          <NodeBox x={500} y={210} w={180} h={50} label={author.isCeleb ? "Read merges in celeb tweet" : "Read returns pre-built"} sub={author.isCeleb ? "extra hop on every read" : "O(1) cache lookup"} color={author.isCeleb ? PURPLE : SD} />

          {/* edges */}
          <line x1={180} y1={150} x2={250} y2={75} stroke={NEUTRAL} strokeWidth={1.3} strokeDasharray={author.isCeleb ? "3 4" : "0"} opacity={author.isCeleb ? 0.4 : 1} />
          <line x1={180} y1={170} x2={250} y2={235} stroke={NEUTRAL} strokeWidth={1.3} />
          <line x1={390} y1={75} x2={500} y2={75} stroke={NEUTRAL} strokeWidth={1.3} strokeDasharray={author.isCeleb ? "3 4" : "0"} opacity={author.isCeleb ? 0.4 : 1} />
          <line x1={390} y1={235} x2={500} y2={235} stroke={NEUTRAL} strokeWidth={1.3} />
          {author.isCeleb && <line x1={590} y1={210} x2={590} y2={100} stroke={PURPLE} strokeWidth={1.3} strokeDasharray="4 4" />}

          {/* packets */}
          <AnimatePresence>
            {posted && !author.isCeleb && (
              <motion.circle
                r={5}
                fill={SD}
                initial={{ cx: 180, cy: 150 }}
                animate={{ cx: [180, 320, 590], cy: [150, 75, 75] }}
                transition={{ duration: 1.6, ease: "linear" }}
              />
            )}
            {posted && (
              <motion.circle
                r={5}
                fill={SD}
                initial={{ cx: 180, cy: 170 }}
                animate={{ cx: [180, 320, 590], cy: [170, 235, 235] }}
                transition={{ duration: 1.4, ease: "linear", delay: 0.2 }}
              />
            )}
          </AnimatePresence>
        </svg>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <Stat label="cumulative fan-out writes" value={stats.writes.toLocaleString()} color={stats.writes > 1_000_000 ? WARN : SD} />
          <Stat label="celebrity pull paths" value={String(stats.pullPaths)} color={stats.pullPaths > 0 ? PURPLE : NEUTRAL} />
        </div>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button whileTap={{ scale: 0.95 }} onClick={post} disabled={posted} style={btn(SD, posted)}>
            <Send className="w-3.5 h-3.5" />
            {posted ? "delivering…" : "post tweet"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL, false)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={author.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}
          >
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: author.color, letterSpacing: "0.12em", marginRight: 8 }}>
              {author.isCeleb ? "CELEBRITY" : "NORMAL USER"}
            </span>
            {author.isCeleb
              ? "2.5M follower fan-out would saturate the write path. Skip it. Followers' timeline reads pull this celebrity's recent tweets at merge time and stitch them into the pre-built timeline."
              : `${author.followers.toLocaleString()} timeline cache writes — fast, parallel, complete in well under a second. Followers see the tweet immediately on next refresh.`}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function NodeBox({ x, y, w, h, label, sub, color, pulse }: { x: number; y: number; w: number; h: number; label: string; sub: string; color: string; pulse?: boolean }) {
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
      <rect width={w} height={h} rx={8} fill={`${color}22`} stroke={color} strokeWidth={1.5} />
      <text x={w / 2} y={20} textAnchor="middle" fill="#e5e7eb" fontSize={11} fontWeight={700} fontFamily={MONO}>
        {label}
      </text>
      <text x={w / 2} y={36} textAnchor="middle" fill={color} fontSize={9.5} fontFamily={MONO}>
        {sub}
      </text>
    </g>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${color}55`, background: `${color}10`, textAlign: "center" }}>
      <div style={{ fontFamily: MONO, fontSize: "0.66rem", color, letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase" }}>
        {label}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={value} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }} style={{ fontFamily: MONO, fontSize: "1.1rem", fontWeight: 800, color: "var(--eng-text)" }}>
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function btn(color: string, disabled: boolean): CSSProperties {
  return {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "8px 14px", borderRadius: 6,
    cursor: disabled ? "not-allowed" : "pointer",
    border: `1.5px solid ${color}`, background: `${color}18`, color,
    fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700,
    letterSpacing: "0.08em", textTransform: "uppercase",
    opacity: disabled ? 0.6 : 1,
  };
}

/* ================================================================== */
/*  TAB 3 - Tradeoffs and what we left out                             */
/* ================================================================== */

const TRADES = [
  { k: "Why hybrid?", v: "Pure push breaks for celebrities. Pure pull breaks for active users with thousands of followees. Hybrid combines the wins." },
  { k: "Storage cost of pre-built timelines", v: "200M users × 800 tweet IDs × 8 bytes ≈ 1.3 TB in Redis. Bounded; only IDs are stored, bodies fetched lazily." },
  { k: "What about ranking?", v: "This is the chronological 'feed' design. Real Twitter / Facebook layer ML rankers on top of the candidate set, which is itself produced by the merge above." },
  { k: "Missing: edits, retweets", v: "Retweets are typically just a pointer; edits are versioned tweet rows. Both fit the same fan-out path." },
  { k: "Missing: deletes", v: "Tweet delete = mark tweet as deleted; timeline reads filter out deleted IDs at hydrate time. Cleanup is async." },
  { k: "Missing: mentions / search", v: "Separate inverted-index pipeline (L7.1) consumed via CDC from the tweet store." },
];

function Tradeoffs() {
  return (
    <div>
      <h3 style={sectionTitle}>Tradeoffs and what an interview answer should mention</h3>
      <p style={sectionDesc}>
        Senior interviewers care less about getting the diagram right and more about whether you
        recognize what you simplified. Six things to mention out loud.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {TRADES.map((t) => (
          <motion.div
            key={t.k}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.1em", marginBottom: 6 }}>
              {t.k.toUpperCase()}
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{t.v}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L8_TwitterActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "framework", label: "Framework", icon: <BookOpen className="w-4 h-4" />, content: <FrameworkApplied /> },
    { id: "fanout", label: "Hybrid Fan-out", icon: <Megaphone className="w-4 h-4" />, content: <FanoutDemo /> },
    { id: "trades", label: "Tradeoffs", icon: <Globe className="w-4 h-4" />, content: <Tradeoffs /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Pure push fails for a 5M-follower celebrity. The hybrid fix is:",
      options: [
        "Skip the celebrity's tweets.",
        "Don't pre-fan-out for celebrities; have followers' timeline reads merge celebrity tweets at read time.",
        "Add more replicas.",
        "Switch to pull entirely.",
      ],
      correctIndex: 1,
      explanation: "5M timeline writes per celebrity tweet = backed-up fan-out service. Pull-on-read for celebrities adds a small extra hop per read but bounds the write amplification.",
    },
    {
      question: "Why store tweet IDs (not bodies) in Redis timeline caches?",
      options: [
        "Decoration.",
        "IDs are tiny (8 bytes vs ~1KB). 200M users × 800 IDs × 8 bytes ≈ 1.3 TB; bodies would be ~150x bigger.",
        "Required by Redis.",
        "Faster random.",
      ],
      correctIndex: 1,
      explanation: "Storing only the index keeps Redis lean. Tweet bodies are fetched in batch from the tweet store at hydrate time, so the read still completes in a single round trip per page.",
    },
    {
      question: "An active user follows 5,000 accounts. With pure pull, what's the read-time cost of opening their feed?",
      options: [
        "Free.",
        "Up to 5,000 queries (one per followee), then a merge — slow at scale.",
        "One query.",
        "Two queries.",
      ],
      correctIndex: 1,
      explanation: "Pull pushes the cost to read time. With many followees and frequent reads, this becomes prohibitive. Hybrid avoids this by pre-fanning-out for non-celeb followees.",
    },
    {
      question: "What's the rough read RPS for Twitter timelines based on the estimation?",
      options: ["1k", "115k average — 200M DAU × 50 opens/day / 86,400 sec ≈ 115k/sec", "1M", "10"],
      correctIndex: 1,
      explanation: "200M × 50 / 86,400 ≈ 115k RPS. Peak is 5x — ~575k. This is exactly why the timeline service must be backed by a fast cache (Redis), not the tweet DB.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Design Twitter Feed"
      level={8}
      lessonNumber={2}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The classic 'design a social feed' interview question, end-to-end"
      onQuizComplete={onQuizComplete}
    />
  );
}
