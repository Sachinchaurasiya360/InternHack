import axios from "axios";
import { useAuthStore } from "./auth.store";
import { toast } from "react-hot-toast";

export const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) ?? "http://localhost:3000/api";
export const SERVER_URL = API_BASE.replace(/\/api\/?$/, "");

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // sends httpOnly cookie automatically
  timeout: 30_000,       // 30-second timeout to avoid hanging requests
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      // Dispatch a custom event so the router can handle navigation
      // without a full-page reload that wipes in-memory state.
      window.dispatchEvent(new CustomEvent("auth:expired"));
    }

    // Handle 429 Too Many Requests (Rate Limited)
    // We cast to 'any' to safely attach our custom retry flag
    if (error.response?.status === 429 && !(originalRequest as any)._retry) {
      (originalRequest as any)._retry = true;

      // Extract Retry-After header (in seconds), fallback to 5 seconds if missing
      const retryAfterHeader = error.response.headers["retry-after"];
      const delaySeconds = retryAfterHeader && !isNaN(Number(retryAfterHeader))
        ? parseInt(retryAfterHeader, 10)
        : 5;

      toast.error(`You're doing that too fast, try again in ${delaySeconds}s`);

      // Backoff: Wait for the requested delay
      await new Promise((resolve) => setTimeout(resolve, delaySeconds * 1000));

      // Retry the original request
      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default api;