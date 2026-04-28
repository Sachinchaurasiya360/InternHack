import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Check, Globe, MessageSquare, RotateCcw, Send } from "lucide-react";
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
/*  TAB 1 - Framework                                                  */
/* ================================================================== */

const STEPS = [
  {
    k: "1. Requirements",
    color: SD,
    items: [
      "Functional: 1:1 message, group message, delivery & read receipts, online presence.",
      "Non-functional: end-to-end latency p99 < 1s when both online, durable when offline (deliver on reconnect).",
      "Out of scope: voice/video calls, end-to-end encryption details, media compression.",
    ],
  },
  {
    k: "2. Estimation",
    color: WARN,
    items: [
      "2 billion users, ~1 billion daily active. 100 billion messages/day → ~1.2M sends/sec average, peak ~5M.",
      "Concurrent connected users: ~500M. Per-user connection ~10KB → 5 TB total RAM across connection servers.",
      "Avg message + metadata: ~200 bytes. Storage: 100B × 365 × 200B ≈ 7 PB/year (with retention policy).",
    ],
  },
  {
    k: "3. API + Data Model",
    color: PURPLE,
    items: [
      "WS /chat (persistent) · POST /messages · GET /messages?since=<offset>",
      "messages(id, sender, recipient, text, sent_at, delivered_at?, read_at?) — sharded by conversation",
      "presence(user_id, last_seen, is_online) in Redis with short TTL",
      "device sessions(user_id, device_id, server_id) so we know which connection server holds each device",
    ],
  },
  {
    k: "4. High-level Diagram",
    color: SD,
    items: [
      "Client → WebSocket → Connection server (sticky) → Message router (Kafka) → recipient's connection server.",
      "If recipient offline: message queued in their inbox, delivered on reconnect.",
      "Receipt path: recipient acks delivery → sender's connection server gets back the second tick.",
    ],
  },
];

function FrameworkApplied() {
  return (
    <div>
      <h3 style={sectionTitle}>The 4-step framework, applied to WhatsApp</h3>
      <p style={sectionDesc}>
        Chat is mostly about reliable persistent connections + a stateful delivery state machine
        per message. Encryption is layered on top.
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
/*  TAB 2 - Animated 3-tick state machine                              */
/* ================================================================== */

type Tick = "none" | "sent" | "delivered" | "read";

interface ChatMsg { id: number; text: string; tick: Tick; }

function TickDemo() {
  const [recipientOnline, setRecipientOnline] = useState(true);
  const [recipientOpened, setRecipientOpened] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [draft, setDraft] = useState("Hey, free tonight?");

  const send = () => {
    if (!draft.trim()) return;
    const id = Date.now();
    const msg: ChatMsg = { id, text: draft, tick: "none" };
    setMessages((ms) => [...ms, msg]);
    setDraft("");

    // sent immediately on send
    setTimeout(() => setMessages((ms) => ms.map((m) => (m.id === id ? { ...m, tick: "sent" as Tick } : m))), 200);

    // delivered: only if recipient online
    if (recipientOnline) {
      setTimeout(() => setMessages((ms) => ms.map((m) => (m.id === id ? { ...m, tick: "delivered" as Tick } : m))), 900);
      // read: only if recipient has chat open
      if (recipientOpened) {
        setTimeout(() => setMessages((ms) => ms.map((m) => (m.id === id ? { ...m, tick: "read" as Tick } : m))), 1800);
      }
    }
  };

  // when recipient comes online, deliver any pending messages
  useEffect(() => {
    if (recipientOnline) {
      setMessages((ms) => ms.map((m) => (m.tick === "sent" ? { ...m, tick: "delivered" as Tick } : m)));
      if (recipientOpened) {
        setTimeout(() => setMessages((ms) => ms.map((m) => (m.tick === "delivered" ? { ...m, tick: "read" as Tick } : m))), 600);
      }
    }
  }, [recipientOnline, recipientOpened]);

  // when recipient opens chat
  useEffect(() => {
    if (recipientOpened && recipientOnline) {
      setTimeout(() => setMessages((ms) => ms.map((m) => (m.tick === "delivered" ? { ...m, tick: "read" as Tick } : m))), 600);
    }
  }, [recipientOpened, recipientOnline]);

  const reset = () => { setMessages([]); setRecipientOnline(true); setRecipientOpened(false); setDraft("Hey, free tonight?"); };

  return (
    <div>
      <h3 style={sectionTitle}>The two-tick state machine</h3>
      <p style={sectionDesc}>
        Send a message. Toggle whether the recipient is online and whether they&rsquo;ve opened the
        chat. Watch the ticks transition: gray clock (sending) → single check (sent to server) →
        double gray (delivered to device) → double blue (read).
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>recipient:</span>
        <button
          type="button"
          onClick={() => setRecipientOnline((o) => !o)}
          style={{
            padding: "6px 12px",
            borderRadius: 6,
            cursor: "pointer",
            border: `1.5px solid ${recipientOnline ? SD : NEUTRAL}55`,
            background: recipientOnline ? `${SD}18` : `${NEUTRAL}18`,
            color: recipientOnline ? SD : NEUTRAL,
            fontFamily: MONO,
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {recipientOnline ? "ONLINE" : "OFFLINE"}
        </button>
        <button
          type="button"
          onClick={() => setRecipientOpened((o) => !o)}
          disabled={!recipientOnline}
          style={{
            padding: "6px 12px",
            borderRadius: 6,
            cursor: recipientOnline ? "pointer" : "not-allowed",
            border: `1.5px solid ${recipientOpened ? PURPLE : NEUTRAL}55`,
            background: recipientOpened ? `${PURPLE}18` : `${NEUTRAL}18`,
            color: recipientOpened ? PURPLE : NEUTRAL,
            fontFamily: MONO,
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            opacity: recipientOnline ? 1 : 0.5,
          }}
        >
          {recipientOpened ? "CHAT OPEN" : "CHAT CLOSED"}
        </button>
      </div>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 18 }}>
        {/* chat messages */}
        <div style={{ minHeight: 280, display: "flex", flexDirection: "column", gap: 8, padding: "16px 18px", background: "rgba(15,23,42,0.6)", borderRadius: 8, border: "1px solid rgba(148,163,184,0.15)" }}>
          {messages.length === 0 ? (
            <div style={{ fontFamily: MONO, fontSize: "0.78rem", color: NEUTRAL, fontStyle: "italic", textAlign: "center", paddingTop: 80 }}>
              type a message and press send
            </div>
          ) : (
            <AnimatePresence>
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  layout
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ alignSelf: "flex-end", maxWidth: "70%", display: "flex", flexDirection: "column", alignItems: "flex-end" }}
                >
                  <div style={{ background: `${SD}33`, border: `1px solid ${SD}55`, borderRadius: 10, padding: "8px 12px", fontFamily: "var(--eng-font)", fontSize: "0.88rem", color: "var(--eng-text)" }}>
                    {m.text}
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: "0.66rem", color: NEUTRAL, marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
                    <span>just now</span>
                    <TickIcon tick={m.tick} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* compose */}
        <div className="flex items-center gap-2 mt-4">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") send(); }}
            placeholder="message…"
            style={{ flex: 1, padding: "10px 14px", background: "var(--eng-surface)", border: "1.5px solid var(--eng-border)", borderRadius: 10, outline: "none", color: "var(--eng-text)", fontFamily: "var(--eng-font)", fontSize: "0.9rem" }}
          />
          <motion.button whileTap={{ scale: 0.95 }} onClick={send} disabled={!draft.trim()} style={btn(SD, !draft.trim())}>
            <Send className="w-3.5 h-3.5" />
            send
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL, false)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
        </div>

        <div style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.84rem", color: "#e5e7eb", lineHeight: 1.55 }}>
          <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
            STATE MACHINE
          </span>
          <span style={{ fontFamily: MONO, fontSize: "0.78rem" }}>
            ⏱ <span style={{ color: NEUTRAL }}>sending</span>
            {" → "}
            ✓ <span style={{ color: NEUTRAL }}>sent (server has it)</span>
            {" → "}
            ✓✓ <span style={{ color: NEUTRAL }}>delivered (device received)</span>
            {" → "}
            ✓✓ <span style={{ color: PURPLE }}>read (chat opened)</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function TickIcon({ tick }: { tick: Tick }) {
  if (tick === "none") return <span style={{ color: NEUTRAL }}>⏱</span>;
  if (tick === "sent") return <Check className="w-3.5 h-3.5" style={{ color: NEUTRAL }} />;
  if (tick === "delivered")
    return (
      <span style={{ display: "inline-flex" }}>
        <Check className="w-3.5 h-3.5" style={{ color: NEUTRAL, marginRight: -8 }} />
        <Check className="w-3.5 h-3.5" style={{ color: NEUTRAL }} />
      </span>
    );
  return (
    <span style={{ display: "inline-flex" }}>
      <Check className="w-3.5 h-3.5" style={{ color: PURPLE, marginRight: -8 }} />
      <Check className="w-3.5 h-3.5" style={{ color: PURPLE }} />
    </span>
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
    opacity: disabled ? 0.5 : 1,
  };
}

/* ================================================================== */
/*  TAB 3 - Connection servers and routing                             */
/* ================================================================== */

const PIECES = [
  { k: "Connection servers", v: "Each holds a chunk of WebSocket connections. 100k WS/server is comfortable; 5M users → 50+ servers." },
  { k: "Sticky sessions", v: "User reconnects must reach the same server (or the routing table updates so messages find the new one). Standard pattern: hash on user_id." },
  { k: "Session registry", v: "Redis map: user_id → connection_server. Updated on connect/disconnect. Used by every send to find the recipient's current server." },
  { k: "Message broker", v: "Kafka topic per shard, routed by recipient_id. Decouples sender's server from recipient's, allows server failover without losing messages." },
  { k: "Offline queue", v: "If recipient is offline, write to durable queue keyed by user_id. On reconnect, the connection server drains the queue first." },
  { k: "Group fan-out", v: "200-member group → write 200 inbox entries on send. Bounded because group sizes are capped (~1024)." },
];

function Pieces() {
  return (
    <div>
      <h3 style={sectionTitle}>The pieces behind a single message</h3>
      <p style={sectionDesc}>
        From &ldquo;send&rdquo; to a recipient&rsquo;s phone, a message touches at least 4 distinct
        services. Six pieces every WhatsApp-style design must address.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {PIECES.map((p) => (
          <motion.div
            key={p.k}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.1em", marginBottom: 6 }}>
              {p.k.toUpperCase()}
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{p.v}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L8_WhatsAppActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "framework", label: "Framework", icon: <BookOpen className="w-4 h-4" />, content: <FrameworkApplied /> },
    { id: "ticks", label: "Tick States", icon: <MessageSquare className="w-4 h-4" />, content: <TickDemo /> },
    { id: "pieces", label: "Behind the Scenes", icon: <Globe className="w-4 h-4" />, content: <Pieces /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Recipient is offline when you send. What happens?",
      options: [
        "Message is dropped.",
        "Server stores the message in the recipient's inbox queue. On reconnect, the queue drains to their device, ticks flip from sent → delivered.",
        "Message bounces.",
        "Sender retries forever.",
      ],
      correctIndex: 1,
      explanation: "Offline = single tick (sent to server). Server holds it durably. When recipient's device next connects, server pushes pending messages and the tick advances to delivered.",
    },
    {
      question: "How does the system find which connection server holds a given recipient?",
      options: [
        "Broadcasts to all servers.",
        "A session registry (Redis) maps user_id → connection_server. Sender's server looks up, routes the message there.",
        "DNS lookup.",
        "Random.",
      ],
      correctIndex: 1,
      explanation: "Direct broadcast wouldn't scale. The registry is the routing table. Updated on connect/disconnect. Combined with Kafka per-shard topics, gives reliable routing even during failover.",
    },
    {
      question: "Why is the third tick (read) blue / colored, while delivered is gray?",
      options: [
        "Decoration.",
        "Read is a privacy-sensitive signal that requires the recipient to actually open the chat — visually distinguishing it lets users know whether their message has been seen, not just received.",
        "Required by the spec.",
        "Faster to render.",
      ],
      correctIndex: 1,
      explanation: "Delivered = your message reached their device but they may not have looked. Read = they actually opened the chat. The visual difference (and toggleable read receipts in settings) is a deliberate UX choice.",
    },
    {
      question: "200-member group, you send a message. Roughly how many writes happen?",
      options: [
        "1.",
        "About 200 inbox entries (one per member) + 1 message body. Bounded because group size is capped at ~1024.",
        "Millions.",
        "Zero, it's pull.",
      ],
      correctIndex: 1,
      explanation: "Group fan-out scales with member count. WhatsApp caps groups (~1024) so worst-case fan-out is bounded. Channels (broadcast-style) use a different push-then-pull hybrid since they have many more subscribers.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Design WhatsApp"
      level={8}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The classic 'design a chat system' interview question, end-to-end"
      onQuizComplete={onQuizComplete}
    />
  );
}
