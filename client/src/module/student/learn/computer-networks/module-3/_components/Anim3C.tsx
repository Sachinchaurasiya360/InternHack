
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RotateCcw, Zap } from "lucide-react"

const FRAME_FIELDS = [
  {
    key: "preamble",
    name: "Preamble",
    bytes: "7B",
    hex: "AA AA AA AA AA AA AA",
    color: "#475569",
    desc: "Alternating 1s and 0s that synchronise the receiver's clock before the frame arrives.",
  },
  {
    key: "sfd",
    name: "SFD",
    bytes: "1B",
    hex: "AB",
    color: "#64748B",
    desc: "Start Frame Delimiter  the byte 10101011 signals the end of the preamble and the start of the actual frame.",
  },
  {
    key: "dst",
    name: "Dest MAC",
    bytes: "6B",
    hex: "FF:FF:FF:FF:FF:FF",
    color: "#F59E0B",
    desc: "Destination MAC address. FF:FF:FF:FF:FF:FF is the broadcast address  every device on the LAN receives this frame.",
  },
  {
    key: "src",
    name: "Src MAC",
    bytes: "6B",
    hex: "AA:BB:CC:11:22:33",
    color: "#7C3AED",
    desc: "Source MAC address  the hardware address of the NIC that sent this frame. Burned in by the manufacturer (first 24 bits = OUI).",
  },
  {
    key: "ethertype",
    name: "EtherType",
    bytes: "2B",
    hex: "0x0800",
    color: "#8B5CF6",
    desc: "Identifies the Layer 3 protocol inside the payload. 0x0800 = IPv4, 0x86DD = IPv6, 0x0806 = ARP.",
  },
  {
    key: "payload",
    name: "Payload",
    bytes: "46–1500B",
    hex: "45 00 00 3C 1A 2B … (IP packet)",
    color: "#2563EB",
    desc: "The encapsulated data  usually an IP packet. Minimum 46 bytes (padded if shorter). Maximum 1500 bytes = MTU.",
  },
  {
    key: "fcs",
    name: "FCS",
    bytes: "4B",
    hex: "A3 4F 2E 91",
    color: "#10B981",
    desc: "Frame Check Sequence  a 32-bit CRC checksum computed over the frame. Receiver recomputes and compares; mismatch = frame dropped.",
  },
]

export default function Anim3C() {
  const [exploded, setExploded]  = useState(false)
  const [selected, setSelected]  = useState<string | null>(null)
  const [corrupted, setCorrupted] = useState(false)
  const [fcsState, setFcsState]  = useState<"ok" | "bad" | null>(null)
  const [traveling, setTraveling] = useState(false)
  const [arrived, setArrived]    = useState(false)

  function sendFrame() {
    setTraveling(true)
    setExploded(false)
    setSelected(null)
    setCorrupted(false)
    setFcsState(null)
    setArrived(false)
    setTimeout(() => {
      setTraveling(false)
      setArrived(true)
    }, 1800)
  }

  function corruptFCS() {
    setCorrupted(true)
    setFcsState("bad")
  }

  function checkFCS() {
    setFcsState(corrupted ? "bad" : "ok")
  }

  function reset() {
    setExploded(false)
    setSelected(null)
    setCorrupted(false)
    setFcsState(null)
    setTraveling(false)
    setArrived(false)
  }

  const selectedField = FRAME_FIELDS.find(f => f.key === selected)

  return (
    <div className="bg-[#0F172A] min-h-[420px] p-5 flex flex-col gap-4">

      {/* controls */}
      <div className="flex items-center gap-2 flex-wrap">
        {!arrived && !traveling && (
          <button
            onClick={sendFrame}
            className="px-3 py-1.5 bg-lime-600 hover:bg-lime-500 text-stone-900 rounded-lg text-xs font-semibold transition-colors"
          >
            Send Frame →
          </button>
        )}
        {arrived && !exploded && (
          <button
            onClick={() => setExploded(true)}
            className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Dissect Frame
          </button>
        )}
        {exploded && (
          <>
            <button
              onClick={corruptFCS}
              disabled={corrupted}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-700 hover:bg-red-600 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              <Zap size={10} /> Corrupt Frame
            </button>
            <button
              onClick={checkFCS}
              className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              Check FCS
            </button>
          </>
        )}
        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-stone-400 rounded-lg text-xs border border-[#334155] transition-colors"
        >
          <RotateCcw size={10} /> Reset
        </button>
      </div>

      {/* cable + traveling frame */}
      {!exploded && (
        <div className="relative flex items-center gap-3 px-2">
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center">
              <span className="text-[10px] text-stone-400 font-bold">NIC</span>
            </div>
            <span className="text-[8px] text-stone-500">Sender</span>
          </div>

          <div className="flex-1 relative h-6 flex items-center">
            {/* cable */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-[#334155] rounded-full" />

            {/* traveling packet */}
            {traveling && (
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 h-5 rounded flex items-center justify-center px-2"
                style={{ backgroundColor: "#7C3AED" }}
                initial={{ left: "0%" }}
                animate={{ left: "85%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              >
                <span className="text-[9px] text-white font-bold whitespace-nowrap">Frame</span>
              </motion.div>
            )}

            {!traveling && !arrived && (
              <div className="absolute left-1 top-1/2 -translate-y-1/2 h-5 rounded flex items-center justify-center px-2 bg-[#1E293B] border border-[#334155]">
                <span className="text-[9px] text-stone-500">Ready</span>
              </div>
            )}

            {arrived && (
              <motion.div
                className="absolute right-1 top-1/2 -translate-y-1/2 h-5 rounded flex items-center justify-center px-2"
                style={{ backgroundColor: "#064E3B", border: "1px solid #10B981" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="text-[9px] text-emerald-300 font-bold">Arrived</span>
              </motion.div>
            )}
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${arrived ? "bg-[#064E3B] border-emerald-700" : "bg-[#1E293B] border-[#334155]"}`}>
              <span className="text-[10px] text-stone-400 font-bold">NIC</span>
            </div>
            <span className="text-[8px] text-stone-500">Receiver</span>
          </div>
        </div>
      )}

      {/* exploded frame fields */}
      <AnimatePresence>
        {exploded && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2 flex-1"
          >
            <p className="text-[9px] text-stone-500 uppercase font-bold tracking-wider">Click any field to inspect</p>

            {/* field strip */}
            <div className="flex rounded-xl overflow-hidden border border-[#334155]">
              {FRAME_FIELDS.map(f => (
                <button
                  key={f.key}
                  onClick={() => setSelected(f.key === selected ? null : f.key)}
                  className="flex flex-col items-center justify-center gap-0.5 px-1 py-2 transition-all hover:brightness-110 flex-1 min-w-0"
                  style={{
                    backgroundColor: f.key === selected
                      ? f.color
                      : f.key === "fcs" && corrupted
                        ? "#7F1D1D"
                        : f.color + "33",
                    borderRight: "1px solid #0F172A",
                    outline: f.key === selected ? `2px solid ${f.color}` : "none",
                  }}
                >
                  <span
                    className="text-[7px] font-bold truncate w-full text-center"
                    style={{ color: f.key === selected ? "#fff" : f.color }}
                  >
                    {f.name}
                  </span>
                  <span className="text-[6px] text-stone-400">{f.bytes}</span>
                </button>
              ))}
            </div>

            {/* detail panel */}
            <div className="flex gap-3 flex-1">
              <div className="flex-1 bg-[#1E293B] rounded-xl p-4 border border-[#334155]">
                {selectedField ? (
                  <motion.div
                    key={selectedField.key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col gap-2 h-full"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: selectedField.color }}
                      />
                      <span className="font-display font-bold text-sm text-white">{selectedField.name}</span>
                      <span className="ml-auto text-[10px] text-stone-500 font-mono">{selectedField.bytes}</span>
                    </div>
                    <div className="font-mono text-[10px] text-amber-300 bg-[#0F172A] px-3 py-2 rounded-lg break-all">
                      {selectedField.key === "fcs" && corrupted ? "B4 D1 FF 00 (CORRUPTED)" : selectedField.hex}
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed flex-1">{selectedField.desc}</p>
                  </motion.div>
                ) : (
                  <p className="text-xs text-stone-600 text-center mt-4">Select a field above</p>
                )}
              </div>

              {/* FCS check result */}
              {fcsState && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`w-44 shrink-0 rounded-xl p-4 border flex flex-col items-center justify-center gap-2 ${
                    fcsState === "ok"
                      ? "bg-emerald-900/30 border-emerald-700/40"
                      : "bg-red-900/30 border-red-700/40"
                  }`}
                >
                  <span className="text-2xl">{fcsState === "ok" ? "✓" : "✕"}</span>
                  <p className={`text-xs font-bold ${fcsState === "ok" ? "text-emerald-300" : "text-red-300"}`}>
                    FCS {fcsState === "ok" ? "Valid" : "Mismatch"}
                  </p>
                  <p className="text-[9px] text-stone-400 text-center leading-relaxed">
                    {fcsState === "ok"
                      ? "CRC matches  frame delivered to Layer 3"
                      : "CRC mismatch  frame silently dropped. No retransmit at Layer 2."}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
