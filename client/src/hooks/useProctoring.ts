import { useEffect, useRef, useCallback, useState } from "react";
import toast from "react-hot-toast";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
export interface FaceViolation {
  type: "NO_FACE" | "MULTIPLE_FACES";
  timestamp: string;
  duration?: number;
}

export interface ProctorWarning {
  type: string;
  message: string;
  timestamp: string;
}

export interface ProctorLog {
  tabSwitches: number;
  focusLosses: number;
  fullscreenExits: number;
  devtoolsAttempts: number;
  copyPasteAttempts: number;
  rightClickAttempts: number;
  faceViolations: FaceViolation[];
  warnings: ProctorWarning[];
  terminated: boolean;
  terminationReason: string | null;
  cameraEnabled: boolean;
  snapshotCount: number;
}

export interface ProctorState {
  tabSwitches: number;
  focusLosses: number;
  fullscreenExits: number;
  devtoolsAttempts: number;
  copyPasteAttempts: number;
  rightClickAttempts: number;
  faceViolations: FaceViolation[];
  isFullscreen: boolean;
  terminated: boolean;
  terminationReason: string | null;
  showFullscreenWarning: boolean;
  fullscreenGraceRemaining: number;
}

export interface ProctoringConfig {
  enabled: boolean;
  maxTabSwitches?: number;        // default 3
  maxFullscreenExits?: number;    // default 2
  maxDevtoolsAttempts?: number;   // default 2
  fullscreenGraceSecs?: number;   // default 10
  onTerminate: (reason: string) => void;
}

/* ------------------------------------------------------------------ */
/*  Violation point weights                                            */
/* ------------------------------------------------------------------ */
const WEIGHTS = {
  tabSwitch: 15,
  focusLoss: 5,
  fullscreenExit: 20,
  devtools: 25,
  copyPaste: 10,
  rightClick: 3,
  faceViolation: 10,
} as const;

const MAX_TOTAL_SCORE = 60;

/* ------------------------------------------------------------------ */
/*  Hook                                                               */
/* ------------------------------------------------------------------ */
export function useProctoring(config: ProctoringConfig) {
  const {
    enabled,
    maxTabSwitches = 3,
    maxFullscreenExits = 2,
    maxDevtoolsAttempts = 2,
    fullscreenGraceSecs = 10,
    onTerminate,
  } = config;

  // Mutable refs for event-handler access (avoids stale closures)
  const tabSwitchesRef = useRef(0);
  const focusLossesRef = useRef(0);
  const fullscreenExitsRef = useRef(0);
  const devtoolsAttemptsRef = useRef(0);
  const copyPasteAttemptsRef = useRef(0);
  const rightClickAttemptsRef = useRef(0);
  const faceViolationsRef = useRef<FaceViolation[]>([]);
  const warningsRef = useRef<ProctorWarning[]>([]);
  const terminatedRef = useRef(false);
  const terminationReasonRef = useRef<string | null>(null);
  const lastVisibilityTs = useRef(0);
  const graceTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const snapshotCountRef = useRef(0);
  const cameraEnabledRef = useRef(false);
  const onTerminateRef = useRef(onTerminate);
  onTerminateRef.current = onTerminate;

  // Reactive state for UI
  const [state, setState] = useState<ProctorState>({
    tabSwitches: 0,
    focusLosses: 0,
    fullscreenExits: 0,
    devtoolsAttempts: 0,
    copyPasteAttempts: 0,
    rightClickAttempts: 0,
    faceViolations: [],
    isFullscreen: false,
    terminated: false,
    terminationReason: null,
    showFullscreenWarning: false,
    fullscreenGraceRemaining: 0,
  });

  /* ---- helpers ---------------------------------------------------- */
  const pushWarning = useCallback((type: string, message: string) => {
    warningsRef.current.push({ type, message, timestamp: new Date().toISOString() });
  }, []);

  const syncState = useCallback(() => {
    setState((prev) => ({
      ...prev,
      tabSwitches: tabSwitchesRef.current,
      focusLosses: focusLossesRef.current,
      fullscreenExits: fullscreenExitsRef.current,
      devtoolsAttempts: devtoolsAttemptsRef.current,
      copyPasteAttempts: copyPasteAttemptsRef.current,
      rightClickAttempts: rightClickAttemptsRef.current,
      faceViolations: [...faceViolationsRef.current],
    }));
  }, []);

  const terminate = useCallback((reason: string) => {
    if (terminatedRef.current) return;
    terminatedRef.current = true;
    terminationReasonRef.current = reason;
    setState((prev) => ({ ...prev, terminated: true, terminationReason: reason }));
    toast.error("Test auto-submitted due to violations.", { duration: 5000 });
    onTerminateRef.current(reason);
  }, []);

  const checkThresholds = useCallback(() => {
    if (terminatedRef.current) return;
    if (tabSwitchesRef.current >= maxTabSwitches) {
      terminate("tab_switch_limit");
      return;
    }
    if (fullscreenExitsRef.current >= maxFullscreenExits) {
      terminate("fullscreen_exit_limit");
      return;
    }
    if (devtoolsAttemptsRef.current >= maxDevtoolsAttempts) {
      terminate("devtools_limit");
      return;
    }
    // Total score check
    const total =
      tabSwitchesRef.current * WEIGHTS.tabSwitch +
      focusLossesRef.current * WEIGHTS.focusLoss +
      fullscreenExitsRef.current * WEIGHTS.fullscreenExit +
      devtoolsAttemptsRef.current * WEIGHTS.devtools +
      copyPasteAttemptsRef.current * WEIGHTS.copyPaste +
      rightClickAttemptsRef.current * WEIGHTS.rightClick +
      faceViolationsRef.current.length * WEIGHTS.faceViolation;
    if (total >= MAX_TOTAL_SCORE) {
      terminate("total_violations_limit");
    }
  }, [maxTabSwitches, maxFullscreenExits, maxDevtoolsAttempts, terminate]);

  /* ---- Fullscreen grace period ------------------------------------ */
  const startGracePeriod = useCallback(() => {
    if (graceTimerRef.current) clearInterval(graceTimerRef.current);
    let remaining = fullscreenGraceSecs;
    setState((prev) => ({ ...prev, showFullscreenWarning: true, fullscreenGraceRemaining: remaining }));

    graceTimerRef.current = setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        if (graceTimerRef.current) clearInterval(graceTimerRef.current);
        graceTimerRef.current = null;
        setState((prev) => ({ ...prev, showFullscreenWarning: false, fullscreenGraceRemaining: 0 }));
        fullscreenExitsRef.current += 1;
        syncState();
        pushWarning("fullscreen_timeout", "Fullscreen grace period expired");
        checkThresholds();
      } else {
        setState((prev) => ({ ...prev, fullscreenGraceRemaining: remaining }));
      }
    }, 1000);
  }, [fullscreenGraceSecs, syncState, pushWarning, checkThresholds]);

  const clearGracePeriod = useCallback(() => {
    if (graceTimerRef.current) {
      clearInterval(graceTimerRef.current);
      graceTimerRef.current = null;
    }
    setState((prev) => ({ ...prev, showFullscreenWarning: false, fullscreenGraceRemaining: 0 }));
  }, []);

  /* ---- Event listeners -------------------------------------------- */
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (terminatedRef.current) return;

      // Block F12
      if (e.key === "F12") {
        e.preventDefault();
        e.stopPropagation();
        devtoolsAttemptsRef.current += 1;
        pushWarning("devtools", "F12 blocked");
        toast.error("DevTools are disabled during the test!", { id: "devtools", duration: 2000 });
        syncState();
        checkThresholds();
        return;
      }

      // Block Ctrl+Shift+I/J/C
      if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) {
        e.preventDefault();
        e.stopPropagation();
        devtoolsAttemptsRef.current += 1;
        pushWarning("devtools", `Ctrl+Shift+${e.key.toUpperCase()} blocked`);
        toast.error("DevTools are disabled during the test!", { id: "devtools", duration: 2000 });
        syncState();
        checkThresholds();
        return;
      }

      // Block Ctrl+U (view source)
      if (e.ctrlKey && !e.shiftKey && e.key.toUpperCase() === "U") {
        e.preventDefault();
        e.stopPropagation();
        devtoolsAttemptsRef.current += 1;
        pushWarning("devtools", "Ctrl+U blocked");
        syncState();
        checkThresholds();
        return;
      }

      // Block Ctrl+S (save), Ctrl+A (select all), Ctrl+P (print)
      if (e.ctrlKey && !e.shiftKey && ["S", "A", "P"].includes(e.key.toUpperCase())) {
        e.preventDefault();
        return;
      }
    };

    const handleContextMenu = (e: Event) => {
      e.preventDefault();
      if (terminatedRef.current) return;
      rightClickAttemptsRef.current += 1;
      pushWarning("right_click", "Right-click blocked");
      toast.error("Right-click is disabled!", { id: "rightclick", duration: 1500 });
      syncState();
    };

    const handleCopyPaste = (e: Event) => {
      e.preventDefault();
      if (terminatedRef.current) return;
      copyPasteAttemptsRef.current += 1;
      pushWarning("copy_paste", `${e.type} blocked`);
      toast.error("Copy/paste is disabled during the test!", { id: "copypaste", duration: 1500 });
      syncState();
    };

    const handleVisibility = () => {
      if (terminatedRef.current || !document.hidden) return;
      lastVisibilityTs.current = Date.now();
      tabSwitchesRef.current += 1;
      pushWarning("tab_switch", "Tab switch detected");
      toast.error(`Warning: Tab switch detected! (${tabSwitchesRef.current}/${maxTabSwitches})`, { duration: 3000 });
      syncState();
      checkThresholds();
    };

    const handleBlur = () => {
      if (terminatedRef.current) return;
      // Deduplicate: skip if visibility change fired within 500ms
      if (Date.now() - lastVisibilityTs.current < 500) return;
      focusLossesRef.current += 1;
      syncState();
    };

    const handleFullscreenChange = () => {
      const inFS = !!document.fullscreenElement;
      setState((prev) => ({ ...prev, isFullscreen: inFS }));
      if (!inFS && !terminatedRef.current) {
        pushWarning("fullscreen_exit", "Fullscreen exited");
        toast.error("You exited fullscreen! Return within 10 seconds.", { duration: 4000 });
        startGracePeriod();
      } else if (inFS) {
        clearGracePeriod();
      }
    };

    // Attach
    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("contextmenu", handleContextMenu, true);
    document.addEventListener("copy", handleCopyPaste, true);
    document.addEventListener("cut", handleCopyPaste, true);
    document.addEventListener("paste", handleCopyPaste, true);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // CSS: disable text selection
    document.body.classList.add("proctored-test");

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
      document.removeEventListener("contextmenu", handleContextMenu, true);
      document.removeEventListener("copy", handleCopyPaste, true);
      document.removeEventListener("cut", handleCopyPaste, true);
      document.removeEventListener("paste", handleCopyPaste, true);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.body.classList.remove("proctored-test");
      if (graceTimerRef.current) clearInterval(graceTimerRef.current);
    };
  }, [enabled, maxTabSwitches, syncState, pushWarning, checkThresholds, startGracePeriod, clearGracePeriod]);

  /* ---- Public API ------------------------------------------------- */
  const registerFaceViolation = useCallback((v: FaceViolation) => {
    if (terminatedRef.current) return;
    faceViolationsRef.current.push(v);
    pushWarning("face_violation", `${v.type} detected`);
    syncState();
    checkThresholds();
  }, [syncState, pushWarning, checkThresholds]);

  const setCameraEnabled = useCallback((val: boolean) => {
    cameraEnabledRef.current = val;
  }, []);

  const addSnapshot = useCallback(() => {
    snapshotCountRef.current += 1;
  }, []);

  const requestFullscreen = useCallback(async () => {
    try {
      await document.documentElement.requestFullscreen();
      setState((prev) => ({ ...prev, isFullscreen: true }));
    } catch {
      // Not supported or rejected
    }
  }, []);

  const getProctorLog = useCallback((): ProctorLog => ({
    tabSwitches: tabSwitchesRef.current,
    focusLosses: focusLossesRef.current,
    fullscreenExits: fullscreenExitsRef.current,
    devtoolsAttempts: devtoolsAttemptsRef.current,
    copyPasteAttempts: copyPasteAttemptsRef.current,
    rightClickAttempts: rightClickAttemptsRef.current,
    faceViolations: [...faceViolationsRef.current],
    warnings: [...warningsRef.current],
    terminated: terminatedRef.current,
    terminationReason: terminationReasonRef.current,
    cameraEnabled: cameraEnabledRef.current,
    snapshotCount: snapshotCountRef.current,
  }), []);

  return {
    state,
    registerFaceViolation,
    setCameraEnabled,
    addSnapshot,
    requestFullscreen,
    getProctorLog,
  };
}
