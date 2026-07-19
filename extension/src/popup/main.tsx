import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { CheckCircle2, ExternalLink, LogOut, PlugZap, UserCircle } from "lucide-react";
import type { ExtensionProfile } from "../lib/types";
import "./styles.css";

const APP_URL = "https://www.internhack.xyz/student/applications";

function sendMessage<T>(message: Record<string, unknown>): Promise<T> {
  return chrome.runtime.sendMessage(message) as Promise<T>;
}

function Popup() {
  const [profile, setProfile] = useState<ExtensionProfile | null>(null);
  const [status, setStatus] = useState("Checking connection...");

  const loadProfile = async () => {
    setStatus("Checking connection...");
    const result = await sendMessage<ExtensionProfile & { error?: string }>({ type: "GET_PROFILE" });
    if ("error" in result && result.error) {
      setProfile(null);
      setStatus("Not connected");
      return;
    }
    setProfile(result);
    setStatus("Connected");
  };

  useEffect(() => {
    void loadProfile();
  }, []);

  const disconnect = async () => {
    await sendMessage({ type: "CLEAR_SESSION" });
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
            Open InternHack while signed in and the extension connects
            automatically. No token to copy.
          </p>
        </section>
      )}

      <a className="link" href={APP_URL} target="_blank" rel="noreferrer">
        Open My Applications
        <ExternalLink size={13} />
      </a>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<Popup />);
