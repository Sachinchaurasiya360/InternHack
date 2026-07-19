import { useState, useRef, useId } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send } from "lucide-react"

type Phase = "idle" | "to-router" | "at-router" | "to-dest" | "done"

interface Packet { id: string; payload: string }

// ── device icons ──────────────────────────────────────────────────────────────
function Laptop({ label, ip, active }: { label: string; ip: string; active: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <motion.div
        animate={active ? { scale: [1, 1.06, 1] } : {}}
        transition={{ duration: 0.3 }}
        className={`w-16 h-16 rounded-xl flex items-center justify-center border-2 transition-colors ${
          active ? "border-lime-400 bg-lime-950" : "border-[#1E293B] bg-[#0F172A]"
        }`}
      >
        <svg viewBox="0 0 48 40" width={38} height={32}>
          <rect x={4} y={2} width={40} height={26} rx={3} fill="#E2E8F0" stroke="#94A3B8" strokeWidth={1.5} />
          <rect x={7} y={5} width={34} height={20} rx={1} fill="#84CC16" opacity={active ? 0.7 : 0.15} />
          <rect x={1} y={29} width={46} height={3} rx={1.5} fill="#94A3B8" />
          <rect x={18} y={28} width={12} height={2} rx={1} fill="#CBD5E1" />
        </svg>
      </motion.div>
      <span className="text-xs font-semibold text-stone-300">{label}</span>
      <span className="text-[10px] text-stone-500 font-mono">{ip}</span>
    </div>
  )
}

function Router({ active }: { active: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <motion.div
        animate={active ? { scale: [1, 1.1, 1], borderColor: ["#334155", "#84CC16", "#334155"] } : {}}
        transition={{ duration: 0.4 }}
        className="w-14 h-14 rounded-xl flex items-center justify-center border-2 border-[#1E293B] bg-[#0F172A]"
        style={{ borderColor: active ? "#84CC16" : "#1E293B" }}
      >
        <svg viewBox="0 0 40 36" width={34} height={30}>
          {/* router body */}
          <rect x={2} y={10} width={36} height={16} rx={3} fill="#1E293B" stroke="#475569" strokeWidth={1.2} />
          {/* status LEDs */}
          <circle cx={9}  cy={18} r={2.5} fill={active ? "#10B981" : "#334155"} />
          <circle cx={16} cy={18} r={2.5} fill={active ? "#84CC16" : "#334155"} />
          <circle cx={23} cy={18} r={2.5} fill={active ? "#F59E0B" : "#334155"} />
          {/* antenna */}
          <line x1={32} y1={10} x2={32} y2={2} stroke="#475569" strokeWidth={1.5} strokeLinecap="round" />
          <circle cx={32} cy={2} r={1.5} fill="#475569" />
          {/* ports */}
          <rect x={6}  y={26} width={6} height={3} rx={1} fill="#334155" />
          <rect x={17} y={26} width={6} height={3} rx={1} fill="#334155" />
          <rect x={28} y={26} width={6} height={3} rx={1} fill="#334155" />
        </svg>
      </motion.div>
      <span className="text-xs font-semibold text-stone-400">Router</span>
      <span className="text-[10px] text-stone-500 font-mono">192.168.1.1</span>
    </div>
  )
}

// ── main component ─────────────────────────────────────────────────────────────
export default function Anim1C() {
  const [input,      setInput]      = useState("")
  const [phase,      setPhase]      = useState<Phase>("idle")
  const [packet,     setPacket]     = useState<Packet | null>(null)
  const [ttl,        setTtl]        = useState(64)
  const [messages,   setMessages]   = useState<string[]>([])
  const [inspecting, setInspecting] = useState(false)
  const uid      = useId()
  const inputRef = useRef<HTMLInputElement>(null)

  function send() {
    const text = input.trim()
    if (!text || phase !== "idle") return
    setPacket({ id: `${uid}-${Date.now()}`, payload: text })
    setTtl(64)
    setPhase("to-router")
    setInput("")
    setInspecting(false)
    inputRef.current?.focus()
  }

  function onRouterArrived() {
    setPhase("at-router")
    setTtl(63)
    setTimeout(() => setPhase("to-dest"), 450)
  }

  function onDestArrived() {
    if (!packet) return
    setMessages(m => [...m, packet.payload])
    setPhase("done")
    setTimeout(() => {
      setPhase("idle")
      setPacket(null)
      setInspecting(false)
    }, 600)
  }

  const traveling = phase === "to-router" || phase === "at-router" || phase === "to-dest"

  return (
    <div className="bg-[#0F172A] p-6 min-h-[360px] flex flex-col gap-6">

      {/* ── devices row ── */}
      <div className="flex items-start justify-between gap-2">

        {/* Laptop A + input */}
        <div className="flex flex-col items-center gap-3">
          <Laptop label="Laptop A" ip="192.168.1.10" active={phase === "to-router"} />
          <div className="flex gap-1">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              disabled={traveling}
              placeholder="Type a message…"
              className="w-28 text-xs px-2.5 py-1.5 rounded-lg bg-[#1E293B] border border-[#334155] text-white placeholder:text-stone-500 focus:outline-none focus:border-lime-500 disabled:opacity-50"
            />
            <button
              onClick={send}
              disabled={traveling || !input.trim()}
              className="w-7 h-7 rounded-lg bg-lime-400 hover:bg-lime-300 flex items-center justify-center disabled:opacity-40 transition-colors"
            >
              <Send size={11} className="text-stone-900" />
            </button>
          </div>
        </div>

        {/* wire A → Router */}
        <div className="flex-1 relative flex items-center mt-8">
          <div className="w-full h-px bg-[#334155]" />
          <div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-[#334155]" />
          <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-[#334155]" />

          <AnimatePresence>
            {phase === "to-router" && packet && (
              <PacketDot
                key={`to-router-${packet.id}`}
                payload={packet.payload}
                ttl={ttl}
                inspecting={inspecting}
                onInspect={() => setInspecting(v => !v)}
                onComplete={onRouterArrived}
                color="#84CC16"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Router */}
        <div className="flex flex-col items-center gap-1 mt-0">
          <Router active={phase === "at-router"} />
          {phase === "at-router" && (
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-[9px] text-amber-400 font-semibold whitespace-nowrap"
            >
              TTL 64→63
            </motion.span>
          )}
        </div>

        {/* wire Router → Laptop B */}
        <div className="flex-1 relative flex items-center mt-8">
          <div className="w-full h-px bg-[#334155]" />
          <div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-[#334155]" />
          <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-[#334155]" />

          <AnimatePresence>
            {phase === "to-dest" && packet && (
              <PacketDot
                key={`to-dest-${packet.id}`}
                payload={packet.payload}
                ttl={ttl}
                inspecting={inspecting}
                onInspect={() => setInspecting(v => !v)}
                onComplete={onDestArrived}
                color="#10B981"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Laptop B + messages */}
        <div className="flex flex-col items-center gap-3">
          <Laptop label="Laptop B" ip="192.168.1.20" active={phase === "done"} />
          <div className="w-28 min-h-[32px] max-h-24 overflow-y-auto space-y-1">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, x: 8 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  className="bg-emerald-900/50 border border-emerald-700/40 text-emerald-300 text-[10px] px-2 py-1.5 rounded-lg text-right"
                >
                  {msg}
                </motion.div>
              ))}
            </AnimatePresence>
            {messages.length === 0 && (
              <p className="text-stone-600 text-[10px] text-center">No messages yet</p>
            )}
          </div>
        </div>

      </div>

      {/* ── hint ── */}
      <p className="text-xs text-stone-500 text-center">
        {phase === "to-router" || phase === "to-dest"
          ? "Click the packet to inspect its headers"
          : phase === "at-router"
          ? "Router decrements TTL and forwards to destination"
          : "Type a message and press Enter  watch it hop through the router"
        }
      </p>
    </div>
  )
}

// ── travelling packet dot ─────────────────────────────────────────────────────
function PacketDot({
  payload, ttl, inspecting, onInspect, onComplete, color,
}: {
  payload:    string
  ttl:        number
  inspecting: boolean
  onInspect:  () => void
  onComplete: () => void
  color:      string
}) {
  return (
    <motion.div
      className="absolute -top-5 -translate-x-1/2 cursor-pointer z-10"
      style={{ left: "0%" }}
      animate={{ left: "100%" }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      onClick={e => { e.stopPropagation(); onInspect() }}
    >
      <motion.div
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div
          className="text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg whitespace-nowrap"
          style={{ backgroundColor: color }}
        >
          PKT
        </div>

        <AnimatePresence>
          {inspecting && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-[#1E293B] border border-[#334155] rounded-xl p-3 text-[10px] shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <p className="text-stone-400 font-bold uppercase tracking-wide mb-1.5">Packet Inspector</p>
              <div className="space-y-1">
                <Row label="Source"      value="192.168.1.10" valueClass="text-lime-300" />
                <Row label="Destination" value="192.168.1.20" valueClass="text-lime-300" />
                <Row label="Protocol"    value="TCP"          valueClass="text-emerald-400" />
                <Row label="TTL"         value={String(ttl)}  valueClass={ttl < 64 ? "text-amber-400" : "text-stone-300"} />
                <div className="mt-1.5 pt-1.5 border-t border-[#334155]">
                  <span className="text-stone-400">Payload</span>
                  <p className="text-white mt-0.5 break-words">"{payload}"</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

function Row({ label, value, valueClass }: { label: string; value: string; valueClass: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-stone-400">{label}</span>
      <span className={`font-mono ${valueClass}`}>{value}</span>
    </div>
  )
}
