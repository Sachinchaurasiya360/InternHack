import { getAdapter } from "./adapters";
import { fillFields } from "./fill-engine";
import { normalizeProfile } from "../lib/profile-normalizer";
import type { ExtensionProfile, JobContext } from "../lib/types";

function sendMessage<T>(message: Record<string, unknown>): Promise<T> {
  return chrome.runtime.sendMessage(message) as Promise<T>;
}

function createPanel(context: JobContext) {
  const existing = document.getElementById("internhack-autofill-panel");
  if (existing) existing.remove();

  const panel = document.createElement("div");
  panel.id = "internhack-autofill-panel";
  panel.style.cssText = [
    "position:fixed",
    "right:16px",
    "bottom:16px",
    "z-index:2147483647",
    "width:280px",
    "font-family:Inter,Arial,sans-serif",
    "background:#ffffff",
    "color:#1c1917",
    "border:1px solid #d6d3d1",
    "border-radius:8px",
    "box-shadow:0 16px 40px rgba(0,0,0,.18)",
    "overflow:hidden",
  ].join(";");

  panel.innerHTML = `
    <div style="padding:12px 14px;border-bottom:1px solid #e7e5e4">
      <div style="font-size:10px;text-transform:uppercase;letter-spacing:.14em;color:#78716c">InternHack / ${context.siteType}</div>
      <div style="font-size:14px;font-weight:700;margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${context.role}</div>
      <div style="font-size:12px;color:#78716c;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${context.company}</div>
    </div>
    <div style="display:grid;gap:8px;padding:12px">
      <button data-ih-action="fill" style="border:0;border-radius:6px;background:#a3e635;color:#1c1917;font-weight:700;padding:9px;cursor:pointer">Autofill page</button>
      <button data-ih-action="track" style="border:1px solid #d6d3d1;border-radius:6px;background:#fff;color:#1c1917;font-weight:700;padding:9px;cursor:pointer">Track application</button>
      <button data-ih-action="support" style="border:0;background:transparent;color:#57534e;font-size:12px;cursor:pointer">Request site support</button>
    </div>
    <div data-ih-status style="padding:0 12px 12px;font-size:12px;color:#78716c"></div>
  `;

  const status = panel.querySelector<HTMLElement>("[data-ih-status]")!;
  panel.querySelector<HTMLButtonElement>("[data-ih-action='fill']")?.addEventListener("click", async () => {
    status.textContent = "Fetching profile...";
    try {
      const profile = await sendMessage<ExtensionProfile>({ type: "GET_PROFILE" });
      const normalized = normalizeProfile(profile);
      const adapter = getAdapter();
      const fields = adapter.findFields();
      const result = fillFields(normalized, fields);
      status.textContent = `Filled ${result.filledCount} of ${result.fieldCount} fields.`;
      void sendMessage({
        type: "LOG_EVENT",
        payload: {
          host: location.hostname,
          siteType: context.siteType,
          url: location.href,
          eventType: "AUTOFILLED",
          fieldCount: result.fieldCount,
          filledCount: result.filledCount,
          failedCount: result.failedCount,
        },
      });
    } catch (error) {
      status.textContent = (error as Error).message || "Connect the extension first.";
    }
  });

  panel.querySelector<HTMLButtonElement>("[data-ih-action='track']")?.addEventListener("click", async () => {
    status.textContent = "Tracking application...";
    try {
      await sendMessage({ type: "TRACK_APPLICATION", payload: { context, submitted: window.confirm("Did you submit this application?") } });
      status.textContent = "Application tracked in InternHack.";
    } catch (error) {
      status.textContent = (error as Error).message || "Could not track application.";
    }
  });

  panel.querySelector<HTMLButtonElement>("[data-ih-action='support']")?.addEventListener("click", async () => {
    status.textContent = "Sending request...";
    await sendMessage({ type: "SUPPORT_REQUEST", payload: { context, message: "Please add a native adapter for this page." } });
    status.textContent = "Support request sent.";
  });

  document.documentElement.appendChild(panel);
}

function boot() {
  const adapter = getAdapter();
  if (!adapter.detect()) return;
  const context = adapter.extractJobContext();
  createPanel(context);
  void sendMessage({
    type: "LOG_EVENT",
    payload: {
      host: location.hostname,
      siteType: context.siteType,
      url: location.href,
      eventType: "DETECTED",
      metadata: { role: context.role, company: context.company },
    },
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}

