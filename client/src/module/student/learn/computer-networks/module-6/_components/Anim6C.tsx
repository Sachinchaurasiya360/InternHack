
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, RotateCcw } from "lucide-react"

type Phase = "idle" | "discover" | "offer" | "request" | "ack" | "done"

const PHASE_LABELS: Record<Phase, string> = {
  idle:     "Idle",
  discover: "D  Discover",
  offer:    "O  Offer",
  request:  "R  Request",
  ack:      "A  Acknowledge",
  done:     "Assigned!",
}

const PHASE_COLORS: Record<Phase, string> = {
  idle:     "#475569",
  discover: "#F59E0B",
  offer:    "#7C3AED",
  request:  "#F59E0B",
  ack:      "#10B981",
  done:     "#10B981",
}

const PHASE_DESC: Record<Phase, string> = {
  idle:     "New device joins the network. It has no IP address yet  shown as dashed.",
  discover: "Client broadcasts: 'Is there a DHCP server?' (src: 0.0.0.0, dst: 255.255.255.255). All devices hear it.",
  offer:    "DHCP server responds: 'I offer you 192.168.1.50 for 24 hours.' Unicast to client MAC.",
  request:  "Client broadcasts: 'I would like 192.168.1.50 please.' Broadcast lets other DHCP servers know too.",
  ack:      "Server sends ACK with: IP=192.168.1.50, Gateway=192.168.1.1, DNS=8.8.8.8, Lease=86400s.",
  done:     "Client is fully configured. IP assigned, solid border. Lease renews at T1=43200s (50%), expires at T2=75600s (87.5%).",
}

const PHASES: Phase[] = ["idle", "discover", "offer", "request", "ack", "done"]

export default function Anim6C() {
  const [phase,    setPhase]   = useState<Phase>("idle")
  const [running,  setRunning] = useState(false)
  const [leaseMs,  setLeaseMs] = useState(0) // 0-100 %
  const timerRef  = useRef<ReturnType<typeof setTimeout> | null>(null)
  const leaseTimer = useRef<ReturnType<typeof setInterval> | null>(null)

  function clearT() {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (leaseTimer.current) clearInterval(leaseTimer.current)
  }

  function start() {
    clearT()
    setPhase("idle")
    setLeaseMs(0)
    setRunning(true)

    const sequence: Phase[] = ["discover", "offer", "request", "ack", "done"]
    let i = 0
    function next() {
      if (i >= sequence.length) {
        setRunning(false)
        // animate lease clock
        let pct = 0
        leaseTimer.current = setInterval(() => {
          pct += 2
          setLeaseMs(pct)
          if (pct >= 100) clearInterval(leaseTimer.current!)
        }, 120)
        return
      }
      setPhase(sequence[i])
      i++
      timerRef.current = setTimeout(next, 1400)
    }
    timerRef.current = setTimeout(next, 600)
  }

  function reset() {
    clearT()
    setPhase("idle")
    setLeaseMs(0)
    setRunning(false)
  }

  const color = PHASE_COLORS[phase]
  const assigned = phase === "done"

  return (
    <div className="bg-[#0F172A] p-5 flex flex-col gap-5 min-h-[420px]">

      {/* controls */}
      <div className="flex items-center gap-2">
        <button
          disabled={running}
          onClick={start}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-lime-600 hover:bg-lime-500 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors"
        >
          <Play size={10} /> Start DORA
        </button>
        <button onClick={reset} className="flex items-center gap-1 px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-stone-400 rounded-lg text-xs border border-[#334155] transition-colors">
          <RotateCcw size={10} /> Reset
        </button>
      </div>

      {/* step indicator */}
      <div className="flex items-center gap-1.5">
        {PHASES.filter(p => p !== "idle").map((p, i) => {
          const idx = PHASES.indexOf(p)
          const curIdx = PHASES.indexOf(phase)
          const done = curIdx > idx
          const active = curIdx === idx
          return (
            <div key={p} className="flex items-center gap-1.5">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold border transition-all"
                style={{
                  backgroundColor: (done || active) ? PHASE_COLORS[p] + "33" : "transparent",
                  borderColor: (done || active) ? PHASE_COLORS[p] : "#334155",
                  color: (done || active) ? PHASE_COLORS[p] : "#475569",
                }}
              >
                {i + 1}
              </div>
              {i < 3 && <div className="w-6 h-px" style={{ backgroundColor: done ? "#334155" : "#1E293B" }} />}
            </div>
          )
        })}
        <span className="ml-2 text-[10px] font-bold" style={{ color }}>{PHASE_LABELS[phase]}</span>
      </div>

      {/* LAN diagram */}
      <div className="flex-1 relative">
        <svg viewBox="0 0 500 200" className="w-full" style={{ minHeight: 160 }}>

          {/* LAN bus */}
          <line x1={50} y1={120} x2={450} y2={120} stroke="#1E293B" strokeWidth="3" />

          {/* DHCP Server */}
          <rect x={380} y={80} width={60} height={40} rx={6} fill="#1E293B" stroke="#7C3AED" strokeWidth="1.5" />
          <text x={410} y={96} textAnchor="middle" fill="#7C3AED" fontSize="7" fontWeight="bold">DHCP</text>
          <text x={410} y={107} textAnchor="middle" fill="#7C3AED" fontSize="7">Server</text>
          <text x={410} y={118} textAnchor="middle" fill="#475569" fontSize="6">.1</text>
          <line x1={410} y1={120} x2={410} y2={120} stroke="#7C3AED" strokeWidth="2" />

          {/* Assigned host 1 */}
          <rect x={160} y={80} width={56} height={40} rx={6} fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
          <text x={188} y={96} textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="bold">Host A</text>
          <text x={188} y={107} textAnchor="middle" fill="#475569" fontSize="6">.10</text>
          <line x1={188} y1={120} x2={188} y2={120} stroke="#334155" strokeWidth="1.5" />

          {/* Assigned host 2 */}
          <rect x={260} y={80} width={56} height={40} rx={6} fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
          <text x={288} y={96} textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="bold">Host B</text>
          <text x={288} y={107} textAnchor="middle" fill="#475569" fontSize="6">.20</text>

          {/* New device */}
          <motion.rect
            x={60} y={80} width={60} height={40} rx={6}
            fill="#1E293B"
            stroke={assigned ? "#10B981" : color}
            strokeWidth={assigned ? 2 : 1.5}
            strokeDasharray={assigned ? "0" : "4 2"}
            animate={{ stroke: color, strokeDasharray: assigned ? "0" : "4 2" }}
            transition={{ duration: 0.3 }}
          />
          <text x={90} y={94} textAnchor="middle" fill={color} fontSize="7" fontWeight="bold">New</text>
          <text x={90} y={105} textAnchor="middle" fill={assigned ? "#10B981" : "#475569"} fontSize="6">
            {assigned ? ".50" : "No IP"}
          </text>
          <text x={90} y={116} textAnchor="middle" fill={assigned ? "#10B981" : "#334155"} fontSize="5">
            {assigned ? "192.168.1.50" : "0.0.0.0"}
          </text>

          {/* animated message arrow */}
          <AnimatePresence>
            {(phase === "discover" || phase === "request") && (
              <motion.g key={phase + "-fwd"}>
                {/* broadcast burst lines */}
                {[120, 188, 288, 410].map((x, i) => (
                  <motion.line key={i}
                    x1={90} y1={119} x2={x} y2={119}
                    stroke={PHASE_COLORS[phase]}
                    strokeWidth="2"
                    strokeDasharray="4 2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  />
                ))}
                <motion.text x={200} y={150} textAnchor="middle" fill={PHASE_COLORS[phase]} fontSize="8"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                >
                  broadcast 255.255.255.255
                </motion.text>
              </motion.g>
            )}
            {phase === "offer" && (
              <motion.g key="offer">
                <motion.line
                  x1={380} y1={119} x2={90} y2={119}
                  stroke="#7C3AED" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.text x={230} y={150} textAnchor="middle" fill="#7C3AED" fontSize="8"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                >
                  offer: 192.168.1.50 / 24h lease
                </motion.text>
              </motion.g>
            )}
            {phase === "ack" && (
              <motion.g key="ack">
                <motion.line
                  x1={380} y1={119} x2={90} y2={119}
                  stroke="#10B981" strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.text x={230} y={150} textAnchor="middle" fill="#10B981" fontSize="8"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                >
                  ACK: IP+GW+DNS+lease config
                </motion.text>
              </motion.g>
            )}
          </AnimatePresence>

          {/* labels below LAN */}
          <text x={410} y={135} textAnchor="middle" fill="#475569" fontSize="6">:68 server</text>
        </svg>
      </div>

      {/* description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={phase}
          initial={{ opacity: 0, x: 4 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="px-3 py-2 rounded-xl border text-[10px] text-stone-300 leading-relaxed"
          style={{ borderColor: color + "44", backgroundColor: color + "0a" }}
        >
          {PHASE_DESC[phase]}
        </motion.div>
      </AnimatePresence>

      {/* lease clock */}
      {leaseMs > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-1.5">
          <div className="flex justify-between text-[9px] text-stone-500">
            <span>Lease clock (24 h)</span>
            <span className="font-mono text-emerald-300">T1: renew at 12h · T2: expire at ~21h</span>
          </div>
          <div className="w-full h-3 bg-[#1E293B] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${leaseMs}%`,
                backgroundColor: leaseMs < 50 ? "#10B981" : leaseMs < 87 ? "#F59E0B" : "#EF4444",
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="flex justify-between text-[8px] font-mono text-stone-600">
            <span>0</span>
            <span className="text-amber-400">T1 (50%)</span>
            <span className="text-orange-400">T2 (87.5%)</span>
            <span className="text-red-400">Expired</span>
          </div>
        </motion.div>
      )}
    </div>
  )
}
