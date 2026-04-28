import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe, Network } from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";

const SD = "#84cc16";
const NEUTRAL = "#64748b";
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
      <h3 style={sectionTitle}>Services don&rsquo;t call each other. They emit events.</h3>
      <p style={sectionDesc}>
        In <b>event-driven architecture (EDA)</b>, services communicate by publishing facts about
        what just happened (&ldquo;OrderPlaced&rdquo;, &ldquo;PaymentSucceeded&rdquo;). Other services subscribe to
        the facts they care about. The publisher doesn&rsquo;t know who&rsquo;s listening — it just records
        what happened and moves on.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {[
          {
            name: "Request-driven (REST)",
            color: NEUTRAL,
            tagline: "Service A calls service B and waits",
            pros: "Easy to reason about. Synchronous. Direct.",
            cons: "Tight coupling. A's latency depends on B's. Adding a new consumer means changing A.",
          },
          {
            name: "Event-driven (EDA)",
            color: SD,
            tagline: "Service A publishes; B, C, D subscribe",
            pros: "Loose coupling. New consumers are added without touching A. Naturally async.",
            cons: "Harder debugging. Eventual consistency. Schema evolution requires care.",
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
              background: `${p.color}08`,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "1rem", marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: p.color, fontWeight: 700, letterSpacing: "0.06em" }}>
                {p.tagline}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: MONO, fontSize: "0.62rem", fontWeight: 800, color: SD, letterSpacing: "0.1em", marginBottom: 4 }}>
                PROS
              </div>
              <div style={{ fontSize: "0.84rem", color: "var(--eng-text)", lineHeight: 1.55, marginBottom: 8 }}>{p.pros}</div>
              <div style={{ fontFamily: MONO, fontSize: "0.62rem", fontWeight: 800, color: NEUTRAL, letterSpacing: "0.1em", marginBottom: 4 }}>
                CONS
              </div>
              <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{p.cons}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>Uber</b> trip lifecycle is event-driven: trip-requested, driver-matched, pickup-arrived,
          trip-ended each fan out to billing, ratings, surge-pricing, fraud. <b>Stripe</b> exposes
          webhooks (events) for everything: charge.succeeded, payment_intent.processing. <b>AWS
          EventBridge</b> + <b>Kafka</b> + <b>NATS</b> are common backbones. Same pattern under the
          hood: append a fact, let listeners react.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Interactive service graph                                  */
/* ================================================================== */

interface Service {
  id: string;
  label: string;
  x: number;
  y: number;
  emits: string[];
  consumes: string[];
}

const SERVICES: Service[] = [
  {
    id: "order",
    label: "Order Service",
    x: 60,
    y: 140,
    emits: ["OrderPlaced", "OrderCanceled"],
    consumes: ["PaymentSucceeded", "PaymentFailed", "InventoryReserved"],
  },
  {
    id: "payment",
    label: "Payment Service",
    x: 280,
    y: 50,
    emits: ["PaymentSucceeded", "PaymentFailed"],
    consumes: ["OrderPlaced"],
  },
  {
    id: "inventory",
    label: "Inventory Service",
    x: 280,
    y: 230,
    emits: ["InventoryReserved", "InventoryReleased"],
    consumes: ["OrderPlaced", "OrderCanceled"],
  },
  {
    id: "shipping",
    label: "Shipping Service",
    x: 500,
    y: 50,
    emits: ["ShipmentDispatched"],
    consumes: ["PaymentSucceeded", "InventoryReserved"],
  },
  {
    id: "email",
    label: "Email Service",
    x: 500,
    y: 230,
    emits: [],
    consumes: ["OrderPlaced", "PaymentSucceeded", "ShipmentDispatched"],
  },
  {
    id: "analytics",
    label: "Analytics",
    x: 660,
    y: 140,
    emits: [],
    consumes: ["OrderPlaced", "PaymentSucceeded", "InventoryReserved", "ShipmentDispatched"],
  },
];

function ServiceGraph() {
  const [selected, setSelected] = useState<string | null>("order");
  const sel = SERVICES.find((s) => s.id === selected);

  // Compute relationships for the highlighted service
  const inboundEvents = sel?.consumes ?? [];
  const outboundEvents = sel?.emits ?? [];
  const inboundFrom = inboundEvents.map((ev) => SERVICES.filter((s) => s.emits.includes(ev)).map((s) => s.id)).flat();
  const outboundTo = outboundEvents.flatMap((ev) => SERVICES.filter((s) => s.consumes.includes(ev)).map((s) => ({ to: s.id, ev })));

  return (
    <div>
      <h3 style={sectionTitle}>Click any service. See what flows in and out.</h3>
      <p style={sectionDesc}>
        An e-commerce platform with 6 services. Solid lime arrows are events emitted by the
        selected service; purple are events it subscribes to. The shape of these arrows is the
        service&rsquo;s contract with the rest of the system.
      </p>

      <div
        style={{
          background: "#0b1220",
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.15)",
          padding: 22,
        }}
      >
        <svg viewBox="0 0 760 360" width="100%" style={{ maxWidth: 800, display: "block", margin: "0 auto" }}>
          {/* outbound edges */}
          {sel && outboundTo.map(({ to, ev }, i) => {
            const target = SERVICES.find((s) => s.id === to)!;
            return (
              <motion.g key={`out-${ev}-${to}-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <line x1={sel.x + 70} y1={sel.y + 30} x2={target.x + 70} y2={target.y + 30} stroke={SD} strokeWidth={1.5} strokeOpacity={0.6} />
                <motion.circle
                  r={4}
                  fill={SD}
                  initial={{ cx: sel.x + 70, cy: sel.y + 30 }}
                  animate={{ cx: target.x + 70, cy: target.y + 30 }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                />
              </motion.g>
            );
          })}

          {/* inbound edges */}
          {sel && inboundFrom.map((from, i) => {
            const source = SERVICES.find((s) => s.id === from)!;
            return (
              <motion.g key={`in-${from}-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <line x1={source.x + 70} y1={source.y + 30} x2={sel.x + 70} y2={sel.y + 30} stroke={PURPLE} strokeWidth={1.5} strokeOpacity={0.4} strokeDasharray="3 4" />
              </motion.g>
            );
          })}

          {/* faint grey edges for non-selected paths */}
          {!sel &&
            SERVICES.flatMap((s) =>
              s.emits.flatMap((ev) =>
                SERVICES.filter((t) => t.consumes.includes(ev)).map((t) => ({ s, t, ev })),
              ),
            ).map(({ s, t, ev }, i) => (
              <line key={`${i}-${ev}`} x1={s.x + 70} y1={s.y + 30} x2={t.x + 70} y2={t.y + 30} stroke={NEUTRAL} strokeOpacity={0.2} strokeWidth={1} />
            ))}

          {/* services */}
          {SERVICES.map((s) => {
            const isSel = s.id === selected;
            const isInbound = sel ? inboundFrom.includes(s.id) : false;
            const isOutbound = sel ? outboundTo.some((o) => o.to === s.id) : false;
            const c = isSel ? SD : isOutbound ? SD : isInbound ? PURPLE : NEUTRAL;
            const dim = sel && !isSel && !isInbound && !isOutbound;
            return (
              <motion.g
                key={s.id}
                onClick={() => setSelected(s.id === selected ? null : s.id)}
                style={{ cursor: "pointer" }}
                animate={{ opacity: dim ? 0.35 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {isSel && (
                  <motion.rect
                    x={s.x - 4}
                    y={s.y - 4}
                    width={148}
                    height={68}
                    rx={10}
                    fill={c}
                    initial={{ opacity: 0.3, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.08 }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
                <rect x={s.x} y={s.y} width={140} height={60} rx={8} fill={`${c}22`} stroke={c} strokeWidth={isSel ? 2 : 1.5} />
                <text x={s.x + 70} y={s.y + 26} textAnchor="middle" fill="#e5e7eb" fontSize={12} fontWeight={700} fontFamily={MONO}>
                  {s.label}
                </text>
                <text x={s.x + 70} y={s.y + 44} textAnchor="middle" fill={c} fontSize={9.5} fontFamily={MONO}>
                  emits {s.emits.length} · subs {s.consumes.length}
                </text>
              </motion.g>
            );
          })}
        </svg>

        {sel && (
          <motion.div
            key={sel.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4"
          >
            <div style={{ padding: "14px 16px", borderRadius: 8, border: `1.5px solid ${SD}55`, background: `${SD}10` }}>
              <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.1em", marginBottom: 8 }}>
                EMITS ({sel.emits.length})
              </div>
              {sel.emits.length === 0 ? (
                <div style={{ fontFamily: MONO, fontSize: "0.78rem", color: NEUTRAL, fontStyle: "italic" }}>
                  pure consumer (no events emitted)
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {sel.emits.map((ev) => (
                    <span key={ev} style={{ fontFamily: MONO, fontSize: "0.78rem", color: "#e5e7eb" }}>
                      → <span style={{ color: SD }}>{ev}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div style={{ padding: "14px 16px", borderRadius: 8, border: `1.5px solid ${PURPLE}55`, background: `${PURPLE}10` }}>
              <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: PURPLE, letterSpacing: "0.1em", marginBottom: 8 }}>
                SUBSCRIBES TO ({sel.consumes.length})
              </div>
              {sel.consumes.length === 0 ? (
                <div style={{ fontFamily: MONO, fontSize: "0.78rem", color: NEUTRAL, fontStyle: "italic" }}>
                  pure publisher
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {sel.consumes.map((ev) => (
                    <span key={ev} style={{ fontFamily: MONO, fontSize: "0.78rem", color: "#e5e7eb" }}>
                      ← <span style={{ color: PURPLE }}>{ev}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 3 - When EDA wins, when it doesn't                             */
/* ================================================================== */

const RULES = [
  {
    when: "Multiple independent reactions to one fact",
    pick: "EDA",
    ex: "Order placed → email + analytics + warehouse + fraud check",
  },
  {
    when: "Single transactional unit, must be atomic",
    pick: "REST/RPC",
    ex: "Read user balance, write transfer, both must succeed together",
  },
  {
    when: "Audit trail / replay required",
    pick: "EDA",
    ex: "Every event in Kafka with retention. Replay analytics from any point in history.",
  },
  {
    when: "Synchronous user-facing query",
    pick: "REST/RPC",
    ex: "Search results, profile load, anything where the user is waiting",
  },
  {
    when: "Adding new consumers without touching producer",
    pick: "EDA",
    ex: "New analytics dashboard subscribes to existing events. Order service unaware.",
  },
  {
    when: "Strict ordering of cross-service operations",
    pick: "REST/RPC + saga",
    ex: "When sequence matters and you can't tolerate eventual consistency for that flow",
  },
];

function WhenEDA() {
  return (
    <div>
      <h3 style={sectionTitle}>When EDA actually wins (and when it doesn&rsquo;t)</h3>
      <p style={sectionDesc}>
        Event-driven is a strong default for cross-team integration, but synchronous calls are
        still the right call for tight transactional flows and user-facing queries.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {RULES.map((r) => {
          const isEDA = r.pick === "EDA";
          const c = isEDA ? SD : NEUTRAL;
          return (
            <motion.div
              key={r.when}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
                <span style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.9rem", lineHeight: 1.4 }}>{r.when}</span>
                <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: c, letterSpacing: "0.08em", padding: "3px 8px", borderRadius: 4, border: `1px solid ${c}55`, background: `${c}14`, whiteSpace: "nowrap" }}>
                  {r.pick}
                </span>
              </div>
              <div style={{ fontFamily: MONO, fontSize: "0.74rem", color: NEUTRAL, lineHeight: 1.5 }}>
                <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4, color: c }}>EX ·</span>
                <span style={{ color: "var(--eng-text)" }}>{r.ex}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L5_EventDrivenActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "graph", label: "Service Graph", icon: <Network className="w-4 h-4" />, content: <ServiceGraph /> },
    { id: "when", label: "When to Use", icon: <Globe className="w-4 h-4" />, content: <WhenEDA /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "A new analytics team wants to count daily orders. The order service is owned by another team. What's the lightest path?",
      options: [
        "Modify the order service to call analytics on every order.",
        "Subscribe to the existing OrderPlaced event. The order team isn't even aware.",
        "Read the order DB directly.",
        "Build a CRON that polls.",
      ],
      correctIndex: 1,
      explanation: "The biggest practical win of EDA: new consumers attach without changing the publisher. Direct DB access creates coupling; polling is wasteful; explicit calls require the publisher's team to ship a change.",
    },
    {
      question: "Order placed → reserve inventory → charge card. The user is waiting on the response. Best fit?",
      options: [
        "Pure EDA — emit events and trust eventual consistency.",
        "Synchronous REST/RPC chain (or a saga) so the API can return success/failure to the user.",
        "Polling.",
        "Email.",
      ],
      correctIndex: 1,
      explanation: "EDA shines for fan-out and async flows. Single user-facing flows that must complete before responding to the request are clearer with synchronous calls or a saga that the API awaits.",
    },
    {
      question: "Which is hardest to debug in an EDA system?",
      options: [
        "Adding a new consumer.",
        "Tracing a single business outcome across a chain of asynchronous events.",
        "Storage capacity.",
        "Local development.",
      ],
      correctIndex: 1,
      explanation: "Distributed tracing, correlation IDs, and good event schemas help, but the inherent challenge of EDA is following one logical flow across many services and event hops. Synchronous chains are easier to trace.",
    },
    {
      question: "Why should events name a fact in the past tense (e.g., 'OrderPlaced') rather than a command ('PlaceOrder')?",
      options: [
        "It looks nicer.",
        "Events represent something that already happened. Commands implicitly couple producer to a specific consumer that should execute the command.",
        "It's required by Kafka.",
        "Past tense is faster.",
      ],
      correctIndex: 1,
      explanation: "Past-tense events are stable facts. Anyone can subscribe and react. Commands ('do this') imply a specific responder, which leaks coupling back into the publisher's mental model.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Event-Driven Architecture"
      level={5}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The architectural pattern behind every modern microservices design"
      onQuizComplete={onQuizComplete}
    />
  );
}

