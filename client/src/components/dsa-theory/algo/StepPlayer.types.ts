
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