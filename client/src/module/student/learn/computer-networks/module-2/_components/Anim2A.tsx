
import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useAnim } from "@/components/learn/AnimFrame"

// ── OSI layer definitions ─────────────────────────────────────────────────────
const OSI = [
  { n: 7, name: "Application",  color: "#7C3AED" },
  { n: 6, name: "Presentation", color: "#8B5CF6" },
  { n: 5, name: "Session",      color: "#A78BFA" },
  { n: 4, name: "Transport",    color: "#F59E0B" },
  { n: 3, name: "Network",      color: "#2563EB" },
  { n: 2, name: "Data Link",    color: "#10B981" },
  { n: 1, name: "Physical",     color: "#64748B" },
]

// ── Header strip definitions ──────────────────────────────────────────────────
const HDRS = {
  eth:  { label: "Eth Hdr",  color: "#10B981" },
  ip:   { label: "IP Hdr",   color: "#2563EB" },
  tcp:  { label: "TCP Hdr",  color: "#F59E0B" },
  data: { label: "App Data", color: "#7C3AED" },
} as const
type HdrKey = keyof typeof HDRS

// ── Step definitions (15 steps, index 0–14) ───────────────────────────────────
// side: "S" sender | "R" receiver | "T" transit
const STEPS: {
  side: "S" | "R" | "T"
  layer: number
  pdu: string
  hdrs: HdrKey[]
  title: string
  desc: string
}[] = [
  { side:"S", layer:7, pdu:"Message",  hdrs:["data"],                    title:"Application Layer (Sender)",  desc:"Browser creates the HTTP request: GET /api/modules HTTP/1.1 Host: internhack.xyz" },
  { side:"S", layer:6, pdu:"Data",     hdrs:["data"],                    title:"Presentation Layer (Sender)", desc:"TLS encrypts the payload. Text encoding (UTF-8) and compression applied." },
  { side:"S", layer:5, pdu:"Data",     hdrs:["data"],                    title:"Session Layer (Sender)",      desc:"A session is established and tracked. Session IDs allow resuming connections." },
  { side:"S", layer:4, pdu:"Segment",  hdrs:["tcp","data"],              title:"Transport Layer (Sender)",    desc:"TCP prepends its header  source port 50234, destination port 443, sequence number, window size." },
  { side:"S", layer:3, pdu:"Packet",   hdrs:["ip","tcp","data"],         title:"Network Layer (Sender)",      desc:"IP prepends source address 192.168.1.10 and destination 203.0.113.42." },
  { side:"S", layer:2, pdu:"Frame",    hdrs:["eth","ip","tcp","data"],   title:"Data Link Layer (Sender)",    desc:"Ethernet wraps the packet with source & destination MAC addresses. FCS checksum appended." },
  { side:"S", layer:1, pdu:"Bits",     hdrs:["eth","ip","tcp","data"],   title:"Physical Layer (Sender)",     desc:"The complete frame is converted to electrical/optical signals and placed on the medium." },
  { side:"T", layer:0, pdu:"Bits",     hdrs:["eth","ip","tcp","data"],   title:"In Transit",                  desc:"Bits travel as electrical, optical, or radio signals across the physical medium to the destination." },
  { side:"R", layer:1, pdu:"Bits",     hdrs:["eth","ip","tcp","data"],   title:"Physical Layer (Receiver)",   desc:"Electrical signals received and converted back into bits. Clock synchronisation applied." },
  { side:"R", layer:2, pdu:"Frame",    hdrs:["ip","tcp","data"],         title:"Data Link Layer (Receiver)",  desc:"Ethernet header removed. FCS checksum verified  frame intact. Passed to Layer 3." },
  { side:"R", layer:3, pdu:"Packet",   hdrs:["tcp","data"],              title:"Network Layer (Receiver)",    desc:"IP header removed. Destination address confirmed as this host. Routing complete." },
  { side:"R", layer:4, pdu:"Segment",  hdrs:["data"],                   title:"Transport Layer (Receiver)",  desc:"TCP header removed. Segments reordered by sequence number. ACK sent back to sender." },
  { side:"R", layer:5, pdu:"Data",     hdrs:["data"],                   title:"Session Layer (Receiver)",    desc:"Session record updated. Idle timeout reset." },
  { side:"R", layer:6, pdu:"Data",     hdrs:["data"],                   title:"Presentation Layer (Receiver)", desc:"TLS decrypts the payload. Data decoded from transfer format to application format." },
  { side:"R", layer:7, pdu:"Message",  hdrs:["data"],                   title:"Application Layer (Receiver)", desc:"HTTP response delivered to the web server application. Request processing begins." },
]

// ── helpers ───────────────────────────────────────────────────────────────────
function layerColor(side: "S"|"R"|"T", layer: number) {
  if (side === "T") return "#64748B"
  return OSI.find(l => l.n === layer)?.color ?? "#6B7280"
}

// ── component ─────────────────────────────────────────────────────────────────
export default function Anim2A() {
  const { speed, step, setStep, totalSteps } = useAnim()
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(
      () => setStep(prev => (prev + 1) % totalSteps),
      1800 / speed,
    )
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [speed, setStep, totalSteps])

  const cur = STEPS[step]

  return (
    <div className="grid md:grid-cols-[1fr_210px] min-h-95">

      {/* ── dark visualization area ── */}
      <div className="bg-[#0F172A] flex items-center gap-2 px-4 py-5 min-h-80 overflow-x-auto">

        {/* Sender stack */}
        <OsiStack
          label="Sender"
          activeSide="S"
          curSide={cur.side}
          curLayer={cur.layer}
          onClickLayer={n => {
            const idx = STEPS.findIndex(s => s.side === "S" && s.layer === n)
            if (idx >= 0) setStep(idx)
          }}
        />

        {/* Center: data block */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-2 min-w-0">
          <p className="text-[9px] text-stone-600 uppercase font-bold tracking-wider">
            {cur.side === "T" ? "Traveling" : "Encapsulated Data"}
          </p>

          {/* Header strips */}
          <div className="flex items-stretch h-9 rounded-lg overflow-hidden border border-[#1E293B]">
            <AnimatePresence initial={false}>
              {cur.hdrs.map(h => (
                <motion.div
                  key={h}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{ originX: "left" as const }}
                  className="overflow-hidden"
                >
                  <div
                    className="h-9 flex items-center justify-center text-[9px] font-bold text-white px-3 whitespace-nowrap"
                    style={{ backgroundColor: HDRS[h].color }}
                  >
                    {HDRS[h].label}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Transit dots */}
          {cur.side === "T" && (
            <div className="flex items-center gap-1">
              {[0, 0.2, 0.4].map(delay => (
                <motion.div
                  key={delay}
                  className="w-1.5 h-1.5 rounded-full bg-lime-500"
                  animate={{ x: [0, 16, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay, ease: "easeInOut" }}
                />
              ))}
            </div>
          )}

          {/* PDU pill */}
          <div className="px-2.5 py-0.5 rounded-full border text-[9px] font-mono font-bold"
            style={{
              borderColor: layerColor(cur.side, cur.layer) + "55",
              color: layerColor(cur.side, cur.layer),
              backgroundColor: layerColor(cur.side, cur.layer) + "11",
            }}
          >
            {cur.pdu}
          </div>
        </div>

        {/* Receiver stack */}
        <OsiStack
          label="Receiver"
          activeSide="R"
          curSide={cur.side}
          curLayer={cur.layer}
          onClickLayer={n => {
            const idx = STEPS.findIndex(s => s.side === "R" && s.layer === n)
            if (idx >= 0) setStep(idx)
          }}
        />
      </div>

      {/* ── info panel ── */}
      <div className="bg-white border-l border-stone-200 p-5 flex flex-col gap-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 flex-1"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1"
                style={{ color: layerColor(cur.side, cur.layer) }}>
                {cur.side === "S" ? "Sender" : cur.side === "R" ? "Receiver" : "In Transit"}
              </p>
              <h3 className="font-display font-bold text-stone-900 text-sm leading-snug">{cur.title}</h3>
            </div>

            <div>
              <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">PDU</p>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                style={{
                  backgroundColor: layerColor(cur.side, cur.layer) + "15",
                  color: layerColor(cur.side, cur.layer),
                }}
              >
                {cur.pdu}
              </span>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed flex-1">{cur.desc}</p>
          </motion.div>
        </AnimatePresence>

        {/* step dots */}
        <div className="flex flex-wrap gap-1 pt-2 border-t border-stone-100">
          {STEPS.map((s, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className="rounded-full transition-all"
              style={{
                width:   i === step ? 8 : 5,
                height:  i === step ? 8 : 5,
                marginTop: i === step ? 0 : 1.5,
                backgroundColor: i === step
                  ? layerColor(s.side, s.layer)
                  : "#E5E7EB",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ── OSI stack sub-component ───────────────────────────────────────────────────
function OsiStack({
  label, activeSide, curSide, curLayer, onClickLayer,
}: {
  label: string
  activeSide: "S" | "R"
  curSide: "S" | "R" | "T"
  curLayer: number
  onClickLayer: (n: number) => void
}) {
  return (
    <div className="flex flex-col gap-1 w-28 shrink-0">
      <p className="text-[9px] text-stone-500 font-bold uppercase tracking-widest text-center mb-1">
        {label}
      </p>
      {OSI.map(l => {
        const isActive = curSide === activeSide && curLayer === l.n
        return (
          <motion.button
            key={l.n}
            onClick={() => onClickLayer(l.n)}
            animate={{
              backgroundColor: isActive ? l.color + "22" : "transparent",
              borderColor:     isActive ? l.color        : "#1E293B",
            }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg border text-left"
          >
            <span
              className="w-4 h-4 rounded text-white text-[8px] font-bold flex items-center justify-center shrink-0 transition-colors"
              style={{ backgroundColor: isActive ? l.color : "#334155" }}
            >
              {l.n}
            </span>
            <span
              className="text-[9px] truncate transition-colors"
              style={{ color: isActive ? l.color : "#475569" }}
            >
              {l.name}
            </span>
          </motion.button>
        )
      })}
    </div>
  )
}
