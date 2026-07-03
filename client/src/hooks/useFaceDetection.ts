import { useRef, useState, useCallback, useEffect } from "react";
import type { FaceViolation } from "./useProctoring";

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */
interface FaceDetectionConfig {
  detectionIntervalMs?: number;   // default 1000
  consecutiveThreshold?: number;  // frames before reporting (default 3)
  snapshotIntervalMs?: number;    // default 60000
  onViolation: (v: FaceViolation) => void;
  onSnapshot: () => void;
  onReady: () => void;
  onError: (err: string) => void;
  onTrackDrop?: (type: "camera_track_ended" | "camera_track_muted") => void;
}

/* ------------------------------------------------------------------ */
/*  Hook                                                               */
/* ------------------------------------------------------------------ */
export function useFaceDetection(config: FaceDetectionConfig) {
  const {
    detectionIntervalMs = 1000,
    consecutiveThreshold = 3,
    snapshotIntervalMs = 60000,
    onViolation,
    onSnapshot,
    onReady,
    onError,
    onTrackDrop,
  } = config;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const detectorRef = useRef<{ detectForVideo: (video: HTMLVideoElement, ts: number) => { detections: unknown[] }; close: () => void } | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const detectionTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const snapshotTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const consecutiveNoFaceRef = useRef(0);
  const consecutiveMultiFaceRef = useRef(0);

  // Stable refs for callbacks
  const onViolationRef = useRef(onViolation);
  const onSnapshotRef = useRef(onSnapshot);
  const onReadyRef = useRef(onReady);
  const onErrorRef = useRef(onError);
  const onTrackDropRef = useRef(onTrackDrop);

  useEffect(() => {
    onViolationRef.current = onViolation;
    onSnapshotRef.current = onSnapshot;
    onReadyRef.current = onReady;
    onErrorRef.current = onError;
    onTrackDropRef.current = onTrackDrop;
  }, [onViolation, onSnapshot, onReady, onError, onTrackDrop]);

  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentFaceCount, setCurrentFaceCount] = useState(0);

  /* ---- Start ------------------------------------------------------ */
  const start = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    // 1. Request camera
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 240, facingMode: "user" },
      });
      streamRef.current = stream;

      // Listen for camera track drops
      stream.getVideoTracks().forEach((track) => {
        track.onended = () => {
          onTrackDropRef.current?.("camera_track_ended");
        };
        track.onmute = () => {
          onTrackDropRef.current?.("camera_track_muted");
        };
      });
    } catch (err: unknown) {
      const e = err as { name?: string; message?: string };
      let msg: string;
      if (e?.name === "NotAllowedError") {
        const isPolicy =
          e?.message?.toLowerCase().includes("permissions policy") ||
          e?.message?.toLowerCase().includes("feature policy");
        msg = isPolicy
          ? "Camera blocked by site security policy. Please contact support."
          : "Camera permission denied. Please allow camera access in your browser settings and try again.";
      } else if (e?.name === "NotFoundError") {
        msg = "No camera found. Please connect a camera and try again.";
      } else if (e?.name === "NotReadableError") {
        msg = "Camera is in use by another application. Please close it and try again.";
      } else {
        msg = "Camera not available. Please check your device and try again.";
      }
      setError(msg);
      setIsLoading(false);
      onErrorRef.current(msg);
      return;
    }

    // Attach to video element
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      await videoRef.current.play().catch(() => {});
    }

    // 2. Load MediaPipe Face Detector
    try {
      const { FaceDetector, FilesetResolver } = await import("@mediapipe/tasks-vision");
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );
      detectorRef.current = await FaceDetector.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite",
          delegate: "GPU",
        },
        runningMode: "VIDEO",
        minDetectionConfidence: 0.5,
      });
    } catch {
      // MediaPipe failed - camera still works as deterrent
      setIsLoading(false);
      setIsActive(true);
      onReadyRef.current();
      return;
    }

    setIsLoading(false);
    setIsActive(true);
    onReadyRef.current();

    // 3. Start detection loop
    detectionTimerRef.current = setInterval(() => {
      if (!videoRef.current || !detectorRef.current) return;
      if (videoRef.current.readyState < 2) return;

      try {
        const result = detectorRef.current.detectForVideo(
          videoRef.current,
          performance.now()
        );
        const count = result.detections.length;
        setCurrentFaceCount(count);

        if (count === 0) {
          consecutiveMultiFaceRef.current = 0;
          consecutiveNoFaceRef.current += 1;
          if (consecutiveNoFaceRef.current >= consecutiveThreshold) {
            onViolationRef.current({
              type: "NO_FACE",
              timestamp: new Date().toISOString(),
              duration: consecutiveNoFaceRef.current,
            });
            consecutiveNoFaceRef.current = 0; // reset after reporting
          }
        } else if (count > 1) {
          consecutiveNoFaceRef.current = 0;
          consecutiveMultiFaceRef.current += 1;
          if (consecutiveMultiFaceRef.current >= consecutiveThreshold) {
            onViolationRef.current({
              type: "MULTIPLE_FACES",
              timestamp: new Date().toISOString(),
              duration: consecutiveMultiFaceRef.current,
            });
            consecutiveMultiFaceRef.current = 0;
          }
        } else {
          // Exactly 1 face - happy path
          consecutiveNoFaceRef.current = 0;
          consecutiveMultiFaceRef.current = 0;
        }
      } catch {
        // Detection error - ignore single frames
      }
    }, detectionIntervalMs);

    // 4. Snapshot timer
    snapshotTimerRef.current = setInterval(() => {
      onSnapshotRef.current();
    }, snapshotIntervalMs);
  }, [detectionIntervalMs, consecutiveThreshold, snapshotIntervalMs]);

  /* ---- Stop ------------------------------------------------------- */
  const stop = useCallback(() => {
    if (detectionTimerRef.current) {
      clearInterval(detectionTimerRef.current);
      detectionTimerRef.current = null;
    }
    if (snapshotTimerRef.current) {
      clearInterval(snapshotTimerRef.current);
      snapshotTimerRef.current = null;
    }
    if (detectorRef.current) {
      try { detectorRef.current.close(); } catch { /* ignore */ }
      detectorRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => {
        t.onended = null;
        t.onmute = null;
        t.stop();
      });
      streamRef.current = null;
    }
    setIsActive(false);
    setCurrentFaceCount(0);
  }, []);

  // Cleanup on unmount
  useEffect(() => stop, [stop]);

  return { videoRef, isLoading, isActive, error, currentFaceCount, start, stop };
}
