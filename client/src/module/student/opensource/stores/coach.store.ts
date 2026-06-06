import { create } from "zustand";
import type { CoachTrigger, CoachSuggestPayload } from "../api/coach.api";

interface CoachState {
  /** Whether the sidebar panel is open */
  isOpen: boolean;
  /** Loading state while fetching AI suggestion */
  isLoading: boolean;
  /** The generated advice markdown */
  advice: string;
  /** Error message, if any */
  error: string | null;
  /** The trigger that generated the current advice */
  currentTrigger: CoachTrigger | null;
  /** The pending payload waiting to be sent */
  pendingPayload: CoachSuggestPayload | null;

  open: () => void;
  close: () => void;
  toggle: () => void;

  /** Queue a trigger — opens the panel and stores the payload for fetching */
  triggerCoach: (payload: CoachSuggestPayload) => void;

  /** Set fetching state */
  setLoading: (loading: boolean) => void;

  /** Set the advice result */
  setAdvice: (advice: string) => void;

  /** Set an error */
  setError: (error: string | null) => void;

  /** Clear the payload after it's been consumed */
  consumePayload: () => void;

  /** Reset advice state (keeps panel open) */
  clearAdvice: () => void;

  /** Comprehensive fetch action with integrated error handling */
  fetchSuggestion: (payload: CoachSuggestPayload) => Promise<void>;
}

export const useCoachStore = create<CoachState>((set, get) => ({
  isOpen: false,
  isLoading: false,
  advice: "",
  error: null,
  currentTrigger: null,
  pendingPayload: null,

  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),

  triggerCoach: (payload) =>
    set((state) => {
      // Guard: Don't trigger if already loading or has pending payload
      if (state.isLoading || state.pendingPayload) return state;

      return {
        isOpen: true,
        pendingPayload: payload,
        advice: "",
        error: null,
        currentTrigger: payload.trigger,
        isLoading: true,
      };
    }),

  setLoading: (loading) => set({ isLoading: loading }),
  setAdvice: (advice) => set({ advice, isLoading: false, error: null }),
  setError: (error) => set({ error, isLoading: false }),
  consumePayload: () => set({ pendingPayload: null }),
  clearAdvice: () => set({ advice: "", error: null, currentTrigger: null }),

  fetchSuggestion: async (payload) => {
    const { setAdvice, setError, setLoading } = get();
    setLoading(true);
    setError(null);
    try {
      // Import dynamically or use the one from api.ts
      const { fetchCoachSuggestion } = await import("../api/coach.api");
      const result = await fetchCoachSuggestion(payload);
      setAdvice(result);
    } catch (err: unknown) {
      console.error("[coach] fetch failed:", err);
      const axiosErr = err as { response?: { data?: { message?: string } } };
      const msg = axiosErr.response?.data?.message || "Failed to get coaching advice. Please check your connection.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  },
}));
