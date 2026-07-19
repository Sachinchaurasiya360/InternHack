
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RotateCcw } from "lucide-react"

const TOTAL_BYTES = 20 // visualised byte slots

export default function Anim5B() {
  const [windowSize, setWindowSize] = useState(4)
  const [acked,      setAcked]      = useState(0)   // bytes ACK'd
  const [sent,       setSent]       = useState(0)   // bytes sent (unacked)
  const [bufferFull, setBufFull]    = useState(false)
  const [probing,    setProbing]    = useState(false)

  function sendWindow() {
    if (bufferFull) return
    setSent(Math.min(windowSize, TOTAL_BYTES - acked - sent))
  }

  function receiveAck() {
    if (sent === 0) return
    const newAcked = Math.min(acked + 1, TOTAL_BYTES)
    setAcked(newAcked)
    setSent(prev => Math.max(0, prev - 1))
    setBufFull(false)
    setProbing(false)
  }

  function fillBuffer() {
    setWindowSize(0)
    setBufFull(true)
    setProbing(false)
    // after 2s simulate zero-window probe
    setTimeout(() => setProbing(true), 2000)
  }

  function reset() {
    setWindowSize(4)
    setAcked(0)
    setSent(0)
    setBufFull(false)
    setProbing(false)
  }

  // slot categorisation
  const slots = Array.from({ length: TOTAL_BYTES }, (_, i) => {
    if (i < acked)                          return "acked"
    if (i < acked + sent)                   return "sent-unacked"
    if (i < acked + sent + windowSize)      return "can-send"
    return "cannot-send"
  })

  const SLOT_COLORS: Record<string, string> = {
    "acked":       "#64748B",
    "sent-unacked":"#7C3AED",
    "can-send":    "#2563EB",
    "cannot-send": "#1E293B",
  }

  return (
    <div className="bg-[#0F172A] p-5 flex flex-col gap-5 min-h-[380px]">

      {/* window size slider */}
      <div className="flex items-center gap-3">
        <span className="text-[10px] text-stone-400 w-24 shrink-0">Window size: {bufferFull ? "0 (zero)" : windowSize}</span>
        <input
          type="range" min={1} max={8} value={bufferFull ? 0 : windowSize}
          onChange={e => { setWindowSize(+e.target.value); setBufFull(false); setProbing(false) }}
          className="flex-1 accent-lime-500"
          disabled={bufferFull}
        />
        <span className="text-[10px] text-stone-500 w-16 text-right">{TOTAL_BYTES - acked - sent} bytes free</span>
      </div>

      {/* byte stream */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-0.5">
          {slots.map((s, i) => (
            <motion.div
              key={i}
              animate={{ backgroundColor: SLOT_COLORS[s] }}
              transition={{ duration: 0.2 }}
              className="flex-1 h-8 rounded-sm flex items-center justify-center"
              title={s}
            >
              <span className="text-[7px] text-white/50 font-mono">{i + 1}</span>
            </motion.div>
          ))}
        </div>

        {/* zone labels */}
        <div className="flex gap-4 flex-wrap">
          {[
            { color: "#64748B", label: "Sent & ACK'd" },
            { color: "#7C3AED", label: "Sent, unACK'd" },
            { color: "#2563EB", label: "Window (can send)" },
            { color: "#1E293B", label: "Beyond window" },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm border border-[#334155]" style={{ backgroundColor: color }} />
              <span className="text-[9px] text-stone-400">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* controls */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={sendWindow}
          disabled={bufferFull || windowSize === 0 || sent >= windowSize || acked + sent >= TOTAL_BYTES}
          className="px-3 py-1.5 bg-lime-600 hover:bg-lime-500 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors"
        >
          Send Window →
        </button>
        <button
          onClick={receiveAck}
          disabled={sent === 0}
          className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors"
        >
          Receive ACK ✓
        </button>
        <button
          onClick={fillBuffer}
          disabled={bufferFull}
          className="px-3 py-1.5 bg-amber-700 hover:bg-amber-600 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors"
        >
          Fill Receiver Buffer
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-1 px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-stone-400 rounded-lg text-xs border border-[#334155] transition-colors"
        >
          <RotateCcw size={10} /> Reset
        </button>
      </div>

      {/* status messages */}
      <AnimatePresence>
        {bufferFull && !probing && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 px-3 py-2 bg-amber-900/30 border border-amber-700/40 rounded-xl"
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 0.7, repeat: Infinity }}
            />
            <span className="text-[10px] text-amber-300">
              Receiver buffer full  window = 0. Sender paused.
            </span>
          </motion.div>
        )}
        {probing && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-3 py-2 bg-lime-900/30 border border-lime-700/40 rounded-xl"
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
            <span className="text-[10px] text-lime-300">
              Zero Window Probe sent  keeping connection alive until receiver signals window open.
            </span>
          </motion.div>
        )}
        {acked >= TOTAL_BYTES && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 px-3 py-2 bg-emerald-900/30 border border-emerald-700/40 rounded-xl"
          >
            <span className="text-[10px] text-emerald-300">✓ All {TOTAL_BYTES} bytes delivered and acknowledged.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* stats */}
      <div className="flex gap-4 text-[10px] text-stone-500 border-t border-[#334155] pt-3">
        <span>ACK'd: <span className="text-stone-300 font-mono">{acked}</span></span>
        <span>In-flight: <span className="text-lime-300 font-mono">{sent}</span></span>
        <span>Window: <span className="text-blue-300 font-mono">{bufferFull ? 0 : windowSize}</span></span>
        <span>Remaining: <span className="text-stone-300 font-mono">{TOTAL_BYTES - acked}</span></span>
      </div>
    </div>
  )
}
