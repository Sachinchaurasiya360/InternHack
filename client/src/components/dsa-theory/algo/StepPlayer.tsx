import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from "lucide-react";

export interface StepPlayer<T> {
  current: T | undefined;
  index: number;
  total: number;
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  step: () => void;
  back: () => void;
  reset: () => void;
  setIndex: (i: number) => void;
}

export function useStepPlayer<T>(frames: T[], speedMs = 700): StepPlayer<T> {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const total = frames.length;
  const framesRef = useRef(frames);
  framesRef.current = frames;

  // Reset when frames change
  useEffect(() => {
    setIndex(0);
    setIsPlaying(false);
  }, [frames]);

  useEffect(() => {
    if (!isPlaying) return;``
    const t = setInterval(() => {
      setIndex((i) => {
        const max = framesRef.current.length - 1;
        if (i >= max) {
          setIsPlaying(false);
          return i;
        }
        return i + 1;
      });
    }, speedMs);
    return () => clearInterval(t);
  }, [isPlaying, speedMs]);

  return {
    current: frames[index],
    index,
    total,
    isPlaying,
    play: () => setIsPlaying(true),
    pause: () => setIsPlaying(false),
    toggle: () => setIsPlaying((p) => !p),
    step: () => setIndex((i) => Math.min(total - 1, i + 1)),
    back: () => setIndex((i) => Math.max(0, i - 1)),
    reset: () => {
      setIndex(0);
      setIsPlaying(false);
    },
    setIndex: (i: number) => setIndex(Math.max(0, Math.min(total - 1, i))),
  };
}

interface PlayerControlsProps<T> {
  player: StepPlayer<T>;
}

export function PlayerControls<T>({ player }: PlayerControlsProps<T>) {
  const { index, total, isPlaying, toggle, step, back, reset, setIndex } = player;
  const atEnd = index >= total - 1;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex items-center gap-0.5 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
        <IconBtn onClick={reset} title="Reset to start">
          <RotateCcw className="w-3.5 h-3.5" />
        </IconBtn>
        <IconBtn onClick={back} title="Previous step" disabled={index === 0}>
          <ChevronLeft className="w-3.5 h-3.5" />
        </IconBtn>
        <IconBtn onClick={toggle} title={isPlaying ? "Pause" : "Play"} accent>
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </IconBtn>
        <IconBtn onClick={step} title="Next step" disabled={atEnd}>
          <ChevronRight className="w-3.5 h-3.5" />
        </IconBtn>
      </div>
      <div className="flex items-center gap-2 min-w-0">
        <input
          type="range"
          min={0}
          max={Math.max(0, total - 1)}
          value={index}
          onChange={(e) => setIndex(Number(e.target.value))}
          className="w-32 accent-lime-500"
          aria-label="Step position"
        />
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums whitespace-nowrap">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

interface IconBtnProps {
  children: React.ReactNode;
  onClick: () => void;
  title: string;
  disabled?: boolean;
  accent?: boolean;
}

function IconBtn({ children, onClick, title, disabled, accent }: IconBtnProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-label={title}
      disabled={disabled}
      className={`px-2 py-1.5 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
        accent
          ? "bg-lime-400 hover:bg-lime-500 text-stone-900"
          : "bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
      }`}
    >
      {children}
    </button>
  );
}
