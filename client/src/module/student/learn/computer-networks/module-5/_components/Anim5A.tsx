import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, RotateCcw, Zap } from "lucide-react"

type State = "CLOSED" | "SYN_SENT" | "SYN_RECEIVED" | "ESTABLISHED" | "LISTEN"

interface Arrow {
  id: string
  dir: "right" | "left"
  label: string
  sublabel: string
  color: string
  dropped?: boolean
}

interface Step {
  clientState: State
  serverState: State
  arrow: Arrow | null
  note: string
}

const STEPS_NORMAL: Step[] = [
  { clientState: "CLOSED",       serverState: "LISTEN",       arrow: null, note: "Server is waiting for connections. Client is idle." },
  { clientState: "SYN_SENT",     serverState: "LISTEN",       arrow: { id:"s1", dir:"right", label:"SYN", sublabel:"seq=1000, flags=SYN", color:"#7C3AED" }, note: "Client sends SYN  initiates a connection request with an initial sequence number." },
  { clientState: "SYN_SENT",     serverState: "SYN_RECEIVED", arrow: { id:"s2", dir:"left",  label:"SYN-ACK", sublabel:"seq=5000, ack=1001, flags=SYN+ACK", color:"#F59E0B" }, note: "Server replies with SYN-ACK  acknowledges the client's SYN and sends its own sequence number." },
  { clientState: "ESTABLISHED",  serverState: "ESTABLISHED",  arrow: { id:"s3", dir:"right", label:"ACK", sublabel:"ack=5001, flags=ACK", color:"#10B981" }, note: "Client ACKs the server's SYN. Both sides are now ESTABLISHED  data transfer can begin." },
  { clientState: "ESTABLISHED",  serverState: "ESTABLISHED",  arrow: { id:"s4", dir:"right", label:"DATA", sublabel:"seq=1001, 500 bytes", color:"#2563EB" }, note: "Data flows. Segments are numbered by byte position so the receiver can reorder and detect gaps." },
  { clientState: "ESTABLISHED",  serverState: "ESTABLISHED",  arrow: { id:"s5", dir:"left",  label:"ACK", sublabel:"ack=1501", color:"#10B981" }, note: "Receiver ACKs the data  'I got everything up to byte 1500, send 1501 next.'" },
]

const STEPS_DROPPED: Step[] = [
  { clientState: "CLOSED",      serverState: "LISTEN",   arrow: null, note: "Simulating a dropped SYN scenario." },
  { clientState: "SYN_SENT",    serverState: "LISTEN",   arrow: { id:"d1", dir:"right", label:"SYN", sublabel:"seq=1000, flags=SYN", color:"#7C3AED", dropped:true }, note: "Client sends SYN  but it is dropped mid-transit." },
  { clientState: "SYN_SENT",    serverState: "LISTEN",   arrow: null, note: "Retransmission timer running… server never received the SYN." },
  { clientState: "SYN_SENT",    serverState: "LISTEN",   arrow: { id:"d2", dir:"right", label:"SYN (retransmit)", sublabel:"seq=1000, flags=SYN", color:"#7C3AED" }, note: "RTO expires  client retransmits the SYN automatically. TCP doubles the timeout (exponential backoff)." },
  { clientState: "SYN_SENT",    serverState: "SYN_RECEIVED", arrow: { id:"d3", dir:"left", label:"SYN-ACK", sublabel:"seq=5000, ack=1001", color:"#F59E0B" }, note: "Server receives the retransmitted SYN and replies. Handshake continues normally." },
  { clientState: "ESTABLISHED", serverState: "ESTABLISHED", arrow: { id:"d4", dir:"right", label:"ACK", sublabel:"ack=5001", color:"#10B981" }, note: "Connection established after the retransmit. Total added latency: one RTO (typically 200 ms–1 s)." },
]

const STATE_COLORS: Record<State, string> = {
  CLOSED:       "#475569",
  LISTEN:       "#2563EB",
  SYN_SENT:     "#F59E0B",
  SYN_RECEIVED: "#8B5CF6",
  ESTABLISHED:  "#10B981",
}

export default function Anim5A() {
  const [mode,    setMode]    = useState<"normal"|"dropped">("normal")
  const [stepIdx, setStepIdx] = useState(0)
  const [running, setRunning] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const steps = mode === "normal" ? STEPS_NORMAL : STEPS_DROPPED
  const cur   = steps[stepIdx]

  function clearT() { if (timerRef.current) clearTimeout(timerRef.current) }

  function play() {
    clearT()
    setRunning(true)
    function advance(i: number) {
      if (i >= steps.length) { setRunning(false); return }
      setStepIdx(i)
      timerRef.current = setTimeout(() => advance(i + 1), 1400)
    }
    advance(stepIdx + 1 < steps.length ? stepIdx + 1 : 0)
  }

  function reset() {
    clearT()
    setRunning(false)
    setStepIdx(0)
  }

  function switchMode(m: "normal" | "dropped") {
    clearT()
    setMode(m)
    setRunning(false)
    setStepIdx(0)
  }

  return (
    <div className="bg-[#0F172A] min-h-[440px] p-5 flex flex-col gap-4">

      {/* mode tabs + controls */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex rounded-lg overflow-hidden border border-[#334155]">
          {(["normal", "dropped"] as const).map(m => (
            <button
              key={m}
              onClick={() => switchMode(m)}
              className="px-3 py-1.5 text-xs font-semibold transition-colors"
              style={{
                backgroundColor: mode === m ? "#A3E635" : "transparent",
                color: mode === m ? "#1C1917" : "#64748B",
              }}
            >
              {m === "normal" ? "Normal" : "Dropped SYN"}
            </button>
          ))}
        </div>
        <button
          disabled={running}
          onClick={play}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-lime-400 hover:bg-lime-300 disabled:opacity-40 text-stone-900 rounded-lg text-xs font-semibold transition-colors"
        >
          <Play size={10} /> {stepIdx === 0 ? "Play" : "Continue"}
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-stone-400 rounded-lg text-xs border border-[#334155] transition-colors"
        >
          <RotateCcw size={10} /> Reset
        </button>
        <span className="ml-auto text-[10px] text-stone-500">
          Step {stepIdx + 1} / {steps.length}
        </span>
      </div>

      {/* diagram */}
      <div className="flex gap-4 flex-1">

        {/* main area */}
        <div className="flex-1 flex flex-col">
          {/* column headers */}
          <div className="flex justify-between px-8 mb-3">
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center">
                <span className="text-[10px] font-bold text-stone-300">CLI</span>
              </div>
              <span className="text-[9px] text-stone-500 font-bold uppercase tracking-wider">Client</span>
              <StatePill state={cur.clientState} />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center">
                <span className="text-[10px] font-bold text-stone-300">SRV</span>
              </div>
              <span className="text-[9px] text-stone-500 font-bold uppercase tracking-wider">Server</span>
              <StatePill state={cur.serverState} />
            </div>
          </div>

          {/* arrow area */}
          <div className="flex-1 flex flex-col justify-center gap-3 px-2 min-h-[160px]">
            <AnimatePresence mode="wait">
              {cur.arrow ? (
                <motion.div
                  key={cur.arrow.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-1"
                >
                  <div className="flex items-center gap-2">
                    {cur.arrow.dir === "left" && (
                      <motion.div
                        className="flex-1 h-px"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: cur.arrow.dropped ? 0.45 : 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{ transformOrigin: "right", backgroundColor: cur.arrow.color }}
                      />
                    )}
                    <div className="flex items-center gap-1">
                      {cur.arrow.dropped && <Zap size={10} className="text-red-400" />}
                      <span
                        className="text-[9px] font-bold px-2 py-0.5 rounded text-white whitespace-nowrap"
                        style={{ backgroundColor: cur.arrow.dropped ? "#7F1D1D" : cur.arrow.color }}
                      >
                        {cur.arrow.dir === "left" && "← "}{cur.arrow.label}{cur.arrow.dir === "right" && " →"}
                      </span>
                      {cur.arrow.dropped && <span className="text-[8px] text-red-400">DROPPED</span>}
                    </div>
                    {cur.arrow.dir === "right" && (
                      <motion.div
                        className="flex-1 h-px"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: cur.arrow.dropped ? 0.45 : 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{ transformOrigin: "left", backgroundColor: cur.arrow.color }}
                      />
                    )}
                  </div>
                  <div className="text-center">
                    <span
                      className="text-[8px] font-mono px-1.5 py-0.5 rounded border"
                      style={{ color: cur.arrow.color, borderColor: cur.arrow.color + "44", backgroundColor: cur.arrow.color + "15" }}
                    >
                      {cur.arrow.sublabel}
                    </span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center"
                >
                  {mode === "dropped" && stepIdx === 2 && (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-900/30 border border-amber-700/40 rounded-lg">
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-amber-400"
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                      <span className="text-[9px] text-amber-300">RTO timer running…</span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* info panel */}
        <div className="w-48 shrink-0 bg-[#1E293B] rounded-xl border border-[#334155] p-4 flex flex-col gap-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={stepIdx}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3 flex-1"
            >
              <p className="text-[10px] font-bold text-lime-300 uppercase tracking-wider">
                Step {stepIdx + 1}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed">{cur.note}</p>
            </motion.div>
          </AnimatePresence>

          {/* step dots */}
          <div className="flex flex-wrap gap-1 pt-2 border-t border-[#334155]">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => { clearT(); setRunning(false); setStepIdx(i) }}
                className="rounded-full transition-all"
                style={{
                  width: i === stepIdx ? 8 : 5,
                  height: i === stepIdx ? 8 : 5,
                  marginTop: i === stepIdx ? 0 : 1.5,
                  backgroundColor: i === stepIdx ? "#A3E635" : "#334155",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function StatePill({ state }: { state: State }) {
  return (
    <motion.span
      key={state}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-[8px] font-bold px-2 py-0.5 rounded-md border"
      style={{
        color: STATE_COLORS[state],
        borderColor: STATE_COLORS[state] + "55",
        backgroundColor: STATE_COLORS[state] + "15",
      }}
    >
      {state}
    </motion.span>
  )
}
