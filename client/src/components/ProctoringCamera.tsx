import { useEffect, useState } from "react";
import { Camera, CameraOff, Loader2 } from "lucide-react";
import { useFaceDetection } from "../hooks/useFaceDetection";
import type { FaceViolation } from "../hooks/useProctoring";

interface Props {
  onViolation: (v: FaceViolation) => void;
  onSnapshot: () => void;
  onError: (err: string) => void;
  onReady: () => void;
}

export default function ProctoringCamera({ onViolation, onSnapshot, onError, onReady }: Props) {
  const [minimized, setMinimized] = useState(false);

  const {
    videoRef,
    isLoading,
    isActive,
    error,
    currentFaceCount,
    start,
    stop,
  } = useFaceDetection({
    onViolation,
    onSnapshot,
    onReady,
    onError,
  });

  // Auto-start camera on mount
  useEffect(() => {
    start();
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const statusColor =
    currentFaceCount === 1
      ? "bg-green-500"
      : currentFaceCount === 0
      ? "bg-red-500"
      : "bg-red-500";

  const statusText =
    currentFaceCount === 1
      ? "Face detected"
      : currentFaceCount === 0
      ? "No face"
      : `${currentFaceCount} faces`;

  // Minimized: show only a small indicator dot
  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-gray-900/90 border border-gray-700 shadow-lg backdrop-blur-sm"
      >
        <span className={`w-2.5 h-2.5 rounded-full ${statusColor} ${currentFaceCount !== 1 ? "animate-pulse" : ""}`} />
        <Camera className="w-3.5 h-3.5 text-gray-400" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-44 rounded-xl overflow-hidden bg-gray-900/90 border border-gray-700 shadow-lg backdrop-blur-sm">
      {/* Video area */}
      <div className="relative aspect-video bg-gray-950">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
            <CameraOff className="w-5 h-5 text-red-400 mb-1" />
            <p className="text-[10px] text-red-400 text-center">{error}</p>
          </div>
        )}

        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover scale-x-[-1]"
          style={{ display: isActive ? "block" : "none" }}
        />

        {/* Minimize button */}
        <button
          onClick={() => setMinimized(true)}
          className="absolute top-1 right-1 w-5 h-5 rounded bg-black/50 flex items-center justify-center text-gray-400 hover:text-white text-[10px]"
        >
          —
        </button>
      </div>

      {/* Status bar */}
      <div className="flex items-center gap-1.5 px-2.5 py-1.5">
        <span className={`w-2 h-2 rounded-full shrink-0 ${statusColor} ${currentFaceCount !== 1 ? "animate-pulse" : ""}`} />
        <span className="text-[10px] text-gray-400 truncate">{isActive ? statusText : "Starting..."}</span>
      </div>
    </div>
  );
}
