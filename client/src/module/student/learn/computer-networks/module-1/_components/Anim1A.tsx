import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useAnim } from "@/components/learn/AnimFrame"

const LEVELS = [
  {
    key:   "wan",
    type:  "WAN",
    label: "Wide Area Network",
    range: "Country / Global",
    example: "The Internet",
    bw:    "10 Mbps – 100 Gbps",
    color: "#7C3AED",
    bg:    "#EDE9FE",
    r:     170,
  },
  {
    key:   "man",
    type:  "MAN",
    label: "Metropolitan Area Network",
    range: "City-wide",
    example: "Cable TV backbone",
    bw:    "10 Mbps – 10 Gbps",
    color: "#2563EB",
    bg:    "#DBEAFE",
    r:     130,
  },
  {
    key:   "lan",
    type:  "LAN",
    label: "Local Area Network",
    range: "Building / Campus",
    example: "Office Wi-Fi",
    bw:    "100 Mbps – 10 Gbps",
    color: "#059669",
    bg:    "#D1FAE5",
    r:     90,
  },
  {
    key:   "pan",
    type:  "PAN",
    label: "Personal Area Network",
    range: "~10 metres",
    example: "Bluetooth headphones",
    bw:    "1 – 24 Mbps",
    color: "#D97706",
    bg:    "#FEF3C7",
    r:     50,
  },
]

export default function Anim1A() {
  const { speed, step, setStep, totalSteps } = useAnim()
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Always auto-advance
  useEffect(() => {
    timerRef.current = setInterval(
      () => setStep(prev => (prev + 1) % totalSteps),
      2200 / speed,
    )
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [speed, setStep, totalSteps])

  const active = LEVELS[step]

  return (
    <div className="grid md:grid-cols-2 gap-0 min-h-95">

      {/* ── SVG visualizer ── */}
      <div className="relative flex items-center justify-center bg-[#0F172A] p-4 min-h-80">
        {/* subtle dot grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#475569" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        <svg viewBox="0 0 360 320" className="relative z-10 w-full max-w-[320px]">
          {/* rings from outer to inner */}
          {[...LEVELS].reverse().map((lvl, ri) => {
            const isActive = lvl.key === active.key
            return (
              <g key={lvl.key} style={{ cursor: "pointer" }} onClick={() => setStep(LEVELS.indexOf(lvl))}>
                <motion.circle
                  cx={180} cy={160} r={lvl.r}
                  fill="none"
                  stroke={lvl.color}
                  strokeWidth={isActive ? 3 : 1.5}
                  strokeDasharray={isActive ? "none" : "6 4"}
                  opacity={isActive ? 1 : 0.35}
                  animate={{
                    r: isActive ? lvl.r + 4 : lvl.r,
                    opacity: isActive ? 1 : 0.25 + ri * 0.08,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* label on ring */}
                <motion.text
                  x={180 + lvl.r + 8}
                  y={160}
                  fill={lvl.color}
                  fontSize={isActive ? 11 : 9}
                  fontWeight={isActive ? "bold" : "normal"}
                  opacity={isActive ? 1 : 0.4}
                  dominantBaseline="middle"
                  transition={{ duration: 0.4 }}
                >
                  {lvl.type}
                </motion.text>

                {/* pulsing dot on active ring */}
                {isActive && (
                  <motion.circle
                    cx={180} cy={160 - lvl.r - 4}
                    r={5}
                    fill={lvl.color}
                    animate={{ r: [5, 8, 5], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </g>
            )
          })}

          {/* center dot */}
          <circle cx={180} cy={160} r={4} fill="#F97316" />
          <text x={190} y={163} fill="#F97316" fontSize={9} dominantBaseline="middle">You</text>
        </svg>

        {/* level selector dots (bottom of panel) */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {LEVELS.map((lvl, i) => (
            <button
              key={lvl.key}
              onClick={() => setStep(i)}
              className="w-2.5 h-2.5 rounded-full transition-all"
              style={{
                backgroundColor: lvl.color,
                opacity: step === i ? 1 : 0.3,
                transform: step === i ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── info panel ── */}
      <div className="relative overflow-hidden flex flex-col justify-center p-6 bg-white dark:bg-stone-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold mb-4"
              style={{ backgroundColor: active.bg, color: active.color }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: active.color }}
              />
              {active.type}
            </div>

            <h3 className="font-display text-xl font-bold text-stone-900 dark:text-stone-50 mb-1">{active.label}</h3>
            <p className="text-sm text-stone-500 mb-4">{active.range}</p>

            <div className="space-y-2.5">
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold text-stone-400 w-20 shrink-0 mt-0.5">Example</span>
                <span className="text-sm text-stone-700 dark:text-stone-300">{active.example}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-semibold text-stone-400 w-20 shrink-0 mt-0.5">Bandwidth</span>
                <span className="text-sm text-stone-700 dark:text-stone-300 font-mono">{active.bw}</span>
              </div>
            </div>

            {/* nav buttons */}
            <div className="mt-6 flex gap-2">
              {LEVELS.map((lvl, i) => (
                <button
                  key={lvl.key}
                  onClick={() => setStep(i)}
                  className="flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all border"
                  style={
                    step === i
                      ? { backgroundColor: lvl.color, color: "#fff", borderColor: lvl.color }
                      : { backgroundColor: "#fff", color: "#9CA3AF", borderColor: "#E5E7EB" }
                  }
                >
                  {lvl.type}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
