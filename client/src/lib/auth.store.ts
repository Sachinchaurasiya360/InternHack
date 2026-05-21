import { create } from "zustand";
import { QueryClient } from "@tanstack/react-query";
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
    user: storedUser ? JSON.parse(storedUser) : null,
    isAuthenticated: !!storedUser,

    login: (user) => {
      localStorage.setItem("user", JSON.stringify(user));
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
      fetch(
        `${(import.meta.env.VITE_API_URL as string | undefined) ?? "http://localhost:3000/api"}/auth/logout`,
        { method: "POST", credentials: "include" },
      ).catch(() => {});
    },

    setUser: (user) => {
      localStorage.setItem("user", JSON.stringify(user));
      set({ user });
    },
  };
});
