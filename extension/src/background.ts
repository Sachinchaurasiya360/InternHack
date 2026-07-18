import {
  clearSession,
  detectPage,
  getProfile,
  logEvent,
  setSession,
  supportRequest,
  trackApplication,
} from "./lib/api";
import type { JobContext } from "./lib/types";

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  void (async () => {
    try {
      if (message.type === "GET_PROFILE") {
        sendResponse(await getProfile());
        return;
      }
      if (message.type === "SET_SESSION") {
        await setSession(
          String(message.token || ""),
          typeof message.apiBase === "string" ? message.apiBase : undefined,
        );
        sendResponse({ success: true });
        return;
      }
      if (message.type === "CLEAR_SESSION") {
        await clearSession();
        sendResponse({ success: true });
        return;
      }
      if (message.type === "LOG_EVENT") {
        sendResponse(await logEvent(message.payload || {}));
        return;
      }
      if (message.type === "DETECT_PAGE") {
        sendResponse(await detectPage(message.payload || {}));
        return;
      }
      if (message.type === "TRACK_APPLICATION") {
        const payload = message.payload as { context: JobContext; submitted: boolean };
        sendResponse(await trackApplication(payload.context, payload.submitted));
        return;
      }
      if (message.type === "SUPPORT_REQUEST") {
        const payload = message.payload as { context: JobContext; message?: string };
        sendResponse(await supportRequest(payload.context, payload.message));
        return;
      }
      sendResponse({ error: "Unknown message" });
    } catch (error) {
      sendResponse({ error: (error as Error).message || "Extension request failed" });
    }
  })();
  return true;
});

