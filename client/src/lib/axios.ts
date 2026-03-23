import axios from "axios";
import { useAuthStore } from "./auth.store";

const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) ?? "http://localhost:3000/api";
export const SERVER_URL = API_BASE.replace(/\/api\/?$/, "");

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // sends httpOnly cookie automatically
  timeout: 30_000,       // 30-second timeout to avoid hanging requests
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      // Dispatch a custom event so the router can handle navigation
      // without a full-page reload that wipes in-memory state.
      window.dispatchEvent(new CustomEvent("auth:expired"));
    }
    return Promise.reject(error);
  }
);

export default api;
