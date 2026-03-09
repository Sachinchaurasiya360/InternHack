import { AlertTriangle, Maximize } from "lucide-react";

interface Props {
  secondsLeft: number;
  onReturnFullscreen: () => void;
}

export default function ProctorWarningOverlay({ secondsLeft, onReturnFullscreen }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="max-w-md w-full mx-4 bg-white dark:bg-gray-900 rounded-2xl border border-red-300 dark:border-red-800 p-8 text-center shadow-2xl">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center">
          <AlertTriangle className="w-7 h-7 text-red-600 dark:text-red-400" />
        </div>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Fullscreen Exited
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Return to fullscreen within{" "}
          <span className="font-mono font-bold text-red-600 dark:text-red-400 text-lg">
            {secondsLeft}s
          </span>{" "}
          or your test will be auto-submitted.
        </p>

        <button
          onClick={onReturnFullscreen}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-xl transition-colors"
        >
          <Maximize className="w-4 h-4" />
          Return to Fullscreen
        </button>
      </div>
    </div>
  );
}
