import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { CheckCircle2, ExternalLink, LogOut, PlugZap, Save, UserCircle } from "lucide-react";
import type { ExtensionProfile } from "../lib/types";
import "./styles.css";

function sendMessage<T>(message: Record<string, unknown>): Promise<T> {
  return chrome.runtime.sendMessage(message) as Promise<T>;
}

function Popup() {
  const [token, setToken] = useState("");
  const [profile, setProfile] = useState<ExtensionProfile | null>(null);
  const [status, setStatus] = useState("Checking connection...");
  const [saving, setSaving] = useState(false);

  const loadProfile = async () => {
    setStatus("Checking connection...");
    const result = await sendMessage<ExtensionProfile & { error?: string }>({ type: "GET_PROFILE" });
    if ("error" in result && result.error) {
      setProfile(null);
      setStatus(result.error);
      return;
    }
    setProfile(result);
    setStatus("Connected");
  };

  useEffect(() => {
    void loadProfile();
  }, []);

  const saveToken = async () => {
    if (!token.trim()) return;
    setSaving(true);
    try {
      await sendMessage({ type: "SET_TOKEN", token: token.trim() });
      setToken("");
      await loadProfile();
    } finally {
      setSaving(false);
    }
  };

  const disconnect = async () => {
    await sendMessage({ type: "CLEAR_TOKEN" });
    setProfile(null);
    setStatus("Disconnected");
  };

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
        <div>
          <p>InternHack</p>
          <h1>Autofill</h1>
        </div>
      </header>

      {profile ? (
        <section className="card">
          <div className="status">
            <CheckCircle2 size={16} />
            <span>{status}</span>
          </div>
          <div className="profile">
            <UserCircle size={18} />
            <div>
              <strong>{profile.user.name}</strong>
              <span>{profile.user.email}</span>
            </div>
          </div>
          <div className="grid">
            <span>{profile.user.skills.length} skills</span>
            <span>{profile.user.resumes.length} resumes</span>
          </div>
          <button type="button" onClick={disconnect} className="secondary">
            <LogOut size={14} />
            Disconnect
          </button>
        </section>
      ) : (
        <section className="card">
          <div className="status muted">
            <PlugZap size={16} />
            <span>{status}</span>
          </div>
          <p className="hint">
            Create an extension session from InternHack, then paste the token here.
          </p>
          <textarea
            value={token}
            onChange={(event) => setToken(event.target.value)}
            placeholder="Paste extension token"
          />
          <button type="button" onClick={saveToken} disabled={saving || !token.trim()}>
            <Save size={14} />
            {saving ? "Saving..." : "Save token"}
          </button>
        </section>
      )}

      <a className="link" href="http://localhost:5173/student/job-hub" target="_blank" rel="noreferrer">
        Open Job Hub
        <ExternalLink size={13} />
      </a>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<Popup />);

