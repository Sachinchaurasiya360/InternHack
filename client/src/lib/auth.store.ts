import { create } from "zustand";
import { QueryClient } from "@tanstack/react-query";
import { API_BASE } from "./axios";
import type { User } from "./types";

// Shared query client reference for cache invalidation on auth changes
let _queryClient: QueryClient | null = null;
export function setAuthQueryClient(qc: QueryClient) {
  _queryClient = qc;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>((set) => {
  const storedUser = localStorage.getItem("user");

  return {
    user: storedUser ? (() => { try { return JSON.parse(storedUser) as User; } catch { localStorage.removeItem("user"); return null; } })() : null,
    isAuthenticated: !!storedUser && (() => { try { return !!JSON.parse(storedUser); } catch { return false; } })(),

    login: (user) => {
      try { localStorage.setItem("user", JSON.stringify(user)); } catch { console.warn("Failed to persist to localStorage: user"); }
      set({ user, isAuthenticated: true });
      _queryClient?.clear();
    },

    logout: () => {
      localStorage.removeItem("user");
      localStorage.removeItem("interview-progress-migrated");
      localStorage.removeItem("interview-progress");

      set({ user: null, isAuthenticated: false });
      _queryClient?.clear();
      // Clear httpOnly cookie server-side (fire-and-forget)
      fetch(`${API_BASE}/auth/logout`, { method: "POST", credentials: "include" }).catch(() => {});
    },

    setUser: (user) => {
      try { localStorage.setItem("user", JSON.stringify(user)); } catch { console.warn("Failed to persist to localStorage: user"); }
      set({ user });
    },
  };
});
