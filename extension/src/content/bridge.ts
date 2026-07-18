// Site bridge — runs only on the InternHack web app.
//
// The web app is same-site with the API, so its page can obtain a session token
// (the auth cookie is sent). It hands that token to this content script over a
// same-origin postMessage, and we forward it to the background worker. The
// extension then authenticates with a Bearer token, so the user never pastes
// anything: while signed in to InternHack, the extension just works.

const WEB_SOURCE = "internhack-web";
const EXT_SOURCE = "internhack-extension";

function announce() {
  window.postMessage({ source: EXT_SOURCE, type: "READY" }, location.origin);
}

// Synchronous marker so the web app can detect the extension without waiting.
document.documentElement.dataset.internhackExtension = "1";

window.addEventListener("message", (event) => {
  if (event.source !== window) return;
  if (event.origin !== location.origin) return;
  const data = event.data as
    | { source?: string; type?: string; token?: unknown; apiBase?: unknown }
    | null;
  if (!data || typeof data !== "object" || data.source !== WEB_SOURCE) return;

  // Page came up after us and is asking whether the extension is present.
  if (data.type === "WEB_READY") {
    announce();
    return;
  }

  if (data.type === "INTERNHACK_CONNECT" && typeof data.token === "string") {
    chrome.runtime.sendMessage(
      {
        type: "SET_SESSION",
        token: data.token,
        apiBase: typeof data.apiBase === "string" ? data.apiBase : undefined,
      },
      () => {
        // Swallow lastError (service worker races) and let the page know.
        void chrome.runtime.lastError;
        window.postMessage({ source: EXT_SOURCE, type: "CONNECTED" }, location.origin);
      },
    );
  }
});

announce();
