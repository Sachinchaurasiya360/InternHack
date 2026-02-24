import { Zap, Send, Loader2, Mail, MessageSquarePlus } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import api from "../lib/axios";

const linkClass =
  "text-sm text-gray-400 hover:text-gray-200 transition-colors no-underline";

const SOCIAL_LINKS = {
  email: "mailto:internhack.xyz@gmail.com",
  twitter: "https://x.com/internhack_xyz",
  linkedin: "https://www.linkedin.com/company/internhack",
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    setError("");
    try {
      await api.post("/newsletter/subscribe", { email: email.trim() });
      setSubscribed(true);
      setEmail("");
    } catch {
      setError("Failed to subscribe. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Banner */}
        <div className="relative rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 mb-14 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold mb-1">
                Stay in the loop
              </h3>
              <p className="text-sm text-gray-400">
                Get the latest jobs, career tips, and platform updates delivered to your inbox.
              </p>
            </div>
            <div className="w-full md:w-auto">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-sm text-emerald-400 font-medium py-3 px-5 bg-emerald-500/10 rounded-xl border border-emerald-500/20"
                >
                  Thanks for subscribing!
                </motion.div>
              ) : (
                <div>
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(""); }}
                      placeholder="your@email.com"
                      required
                      className="px-4 py-2.5 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors w-60"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-5 py-2.5 bg-white text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2 disabled:opacity-50"
                    >
                      {submitting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                      Subscribe
                    </button>
                  </form>
                  {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 flex items-center justify-center rounded-xl">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-display text-lg font-bold">InternHack</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Prepare. Practice. Placed.
              <br />
              Your all-in-one career platform.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href={SOCIAL_LINKS.email} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" title="Email us">
                <Mail className="w-3.5 h-3.5" />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" title="Follow on X">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" title="LinkedIn">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              <li><Link to="/jobs" className={linkClass}>Jobs</Link></li>
              <li><Link to="/external-jobs" className={linkClass}>External Jobs</Link></li>
              <li><Link to="/careers" className={linkClass}>Career Roadmaps</Link></li>
              <li><Link to="/companies" className={linkClass}>Companies</Link></li>
            </ul>
          </div>

          {/* For Recruiters */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              For Recruiters
            </h4>
            <ul className="space-y-3">
              <li><Link to="/register" className={linkClass}>Post a Job</Link></li>
              <li><Link to="/recruiters" className={linkClass}>Dashboard</Link></li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Get Started
            </h4>
            <ul className="space-y-3">
              <li><Link to="/register" className={linkClass}>Sign Up</Link></li>
              <li><Link to="/login" className={linkClass}>Sign In</Link></li>
            </ul>
            {/* Request a Feature */}
            <div className="mt-6">
              <a
                href="mailto:internhack.xyz@gmail.com?subject=Feature%20Request%20at%20InternHack"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all no-underline"
              >
                <MessageSquarePlus className="w-4 h-4" />
                Request a Feature
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} InternHack. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href={SOCIAL_LINKS.email} className="text-xs text-gray-600 hover:text-gray-400 transition-colors no-underline">internhack.xyz@gmail.com</a>
            <span className="text-gray-800">·</span>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-gray-400 transition-colors no-underline">Twitter</a>
            <span className="text-gray-800">·</span>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-gray-400 transition-colors no-underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

