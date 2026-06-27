import axios from "axios";
import { useAuthStore } from "./auth.store";

export const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) ?? "http://localhost:3000/api";
export const SERVER_URL = API_BASE.replace(/\/api\/?$/, "");

let authExpiredFired = false;

export function resetAuthExpiredFlag() {
  authExpiredFired = false;
}

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
  timeout: 30_000,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      if (!authExpiredFired) {
        authExpiredFired = true;
        window.dispatchEvent(new CustomEvent("auth:expired"));
      }
    }
    return Promise.reject(error);
  }
);

export default api;
