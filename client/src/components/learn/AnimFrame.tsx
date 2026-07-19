import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react"
import { RotateCcw, Gauge } from "lucide-react"

/**
 * Shared animation context. Stepped animations (those that visualise a sequence
 * of frames) read `step` / `setStep` to drive their current frame and `speed` to
 * pace their own timers. `totalSteps` mirrors the `totalSteps` prop so children
 * can wrap around. Animations that manage their own internal state can ignore it.
 */
interface AnimContextValue {
  speed: number
  step: number
  setStep: Dispatch<SetStateAction<number>>
  totalSteps: number
}

const AnimContext = createContext<AnimContextValue | null>(null)

export function useAnim(): AnimContextValue {
  const ctx = useContext(AnimContext)
  if (!ctx) {
    throw new Error("useAnim must be used within an <AnimFrame>")
  }
  return ctx
}

const SPEEDS = [0.5, 1, 1.5, 2] as const

interface AnimFrameProps {
  /** Stable id, used for the reset key so children remount on reset. */
  id: string
  title: string
  description: string
  /** Number of discrete frames the stepped animation cycles through. */
  totalSteps: number
  /** Show the playback-speed selector (only useful for auto-advancing anims). */
  showSpeed?: boolean
  children: ReactNode
}

/**
 * Framed container for an interactive lesson animation. Renders a labelled header
 * (title + description, optional speed control + reset) and hosts the animation in
 * an AnimContext so stepped animations can share step/speed state. Resetting
 * remounts the children via a changing key so any internal animation state clears.
 */
export default function AnimFrame({
  id,
  title,
  description,
  totalSteps,
  showSpeed = false,
  children,
}: AnimFrameProps) {
  const [step, setStep] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [resetKey, setResetKey] = useState(0)

  function reset() {
    setStep(0)
    setResetKey((k) => k + 1)
  }

  return (
    <div
      id={id}
      className="overflow-hidden rounded-md border border-stone-200 bg-white dark:border-white/10 dark:bg-stone-900"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 bg-stone-50 px-4 py-3 dark:border-white/10 dark:bg-stone-900/60">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-sm font-bold text-stone-900 dark:text-stone-50">
            <span className="h-1 w-1 shrink-0 bg-lime-400" aria-hidden />
            {title}
          </p>
          <p className="mt-0.5 text-xs text-stone-500">{description}</p>
        </div>

        <div className="flex items-center gap-2">
          {showSpeed && (
            <div className="flex items-center gap-1 rounded-md border border-stone-200 bg-white p-0.5 dark:border-white/10 dark:bg-stone-800">
              <Gauge className="ml-1 mr-0.5 h-3.5 w-3.5 text-stone-400" aria-hidden />
              {SPEEDS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSpeed(s)}
                  className={`rounded px-1.5 py-0.5 text-xs font-semibold transition-colors ${
                    speed === s
                      ? "bg-lime-400 text-stone-900"
                      : "text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
                  }`}
                >
                  {s}×
                </button>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-stone-600 transition-colors hover:border-stone-400 hover:text-stone-900 dark:border-white/10 dark:bg-stone-800 dark:text-stone-300 dark:hover:border-white/30 dark:hover:text-stone-50"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            Reset
          </button>
        </div>
      </div>

      {/* Animation body */}
      <AnimContext.Provider value={{ speed, step, setStep, totalSteps }}>
        <div key={resetKey}>{children}</div>
      </AnimContext.Provider>
    </div>
  )
}
