import { useState, useRef, useCallback, useMemo, useEffect } from "react";

/* ------------------------------------------------------------------ */
/*  Types — the public API is fully typed; browser SpeechRecognition   */
/*  internals are cast to `any` inside the hook so `any` never leaks  */
/*  out to consumers.                                                 */
/* ------------------------------------------------------------------ */

interface UseSpeechRecognitionOptions {
  onInterim: (text: string) => void;
  onFinal: (text: string) => void;
}

interface SpeechRecognitionResult {
  supported: boolean;
  isListening: boolean;
  error: string | null;
  start: () => void;
  stop: () => void;
}

export function useSpeechRecognition({
  onInterim,
  onFinal,
}: UseSpeechRecognitionOptions): SpeechRecognitionResult {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Stable callback refs so the recognition instance always calls the latest
  const onInterimRef = useRef(onInterim);
  const onFinalRef = useRef(onFinal);
  useEffect(() => {
    onInterimRef.current = onInterim;
    onFinalRef.current = onFinal;
  }, [onInterim, onFinal]);

  const supported = useMemo(() => {
    if (typeof window === "undefined") return false;
    return "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
  }, []);

  const start = useCallback(() => {
    if (!supported) return;

    // Abort any existing instance before creating a new one
    recognitionRef.current?.abort();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    const SpeechRecognitionCtor = w.SpeechRecognition || w.webkitSpeechRecognition;

    if (!SpeechRecognitionCtor) return;

    const recognition = new SpeechRecognitionCtor();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = navigator.language || "en-US";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      let interim = "";
      let final = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          final += transcript;
        } else {
          interim += transcript;
        }
      }
      if (interim) onInterimRef.current(interim);
      if (final) onFinalRef.current(final);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onerror = (event: any) => {
      setError(event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    setError(null);
    recognition.start();
    setIsListening(true);
  }, [supported]);

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  // Abort on unmount — use abort (not stop) so onresult doesn't fire with stale data
  useEffect(() => {
    return () => {
      recognitionRef.current?.abort();
    };
  }, []);

  return { supported, isListening, error, start, stop };
}
