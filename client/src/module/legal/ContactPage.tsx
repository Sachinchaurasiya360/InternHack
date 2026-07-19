import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock3, Bug, Loader2, Send, CheckCircle, AlertCircle, User, Tag, MessageSquare, Github, Linkedin } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import { Button } from "../../components/ui/button";
import api from "../../lib/axios";
import { SOCIAL_LINKS } from "../../lib/social-links";

const inputClass =
  "w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 px-3 py-2.5 text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 transition-colors";

const CONNECT_LINKS = [
  {
    label: "X (Twitter)",
    handle: "@sachindev69",
    href: SOCIAL_LINKS.twitter,
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "InternHack",
    href: SOCIAL_LINKS.linkedin,
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    label: "GitHub",
    handle: "Source code",
    href: SOCIAL_LINKS.github,
    icon: <Github className="h-4 w-4" />,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      await api.post("/contact", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950">
      <SEO
        title="Contact Us"
        description="Get in touch with the InternHack team for support, feedback, or business enquiries."
      />
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 pt-28 pb-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Contact{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Us.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                aria-hidden
                className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
              />
            </span>
          </h1>
          <p className="mt-4 text-base text-stone-500 dark:text-stone-400 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for support, feedback,
            partnerships, or general enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 space-y-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/40 p-6 sm:p-8 shadow-sm"
          >
            <div>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50">Send us a message</h2>
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">We typically reply within 24-48 hours.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-stone-600 dark:text-stone-400">
                  <User className="h-3.5 w-3.5" />
                  Name
                </label>
                <input
                  id="name" name="name" value={formData.name} onChange={handleChange} required
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-stone-600 dark:text-stone-400">
                  <Mail className="h-3.5 w-3.5" />
                  Email
                </label>
                <input
                  id="email" name="email" type="email" value={formData.email} onChange={handleChange} required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-stone-600 dark:text-stone-400">
                <Tag className="h-3.5 w-3.5" />
                Subject
              </label>
              <input
                id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                placeholder="What's this about?"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-stone-600 dark:text-stone-400">
                <MessageSquare className="h-3.5 w-3.5" />
                Message
              </label>
              <textarea
                id="message" name="message" rows={6} value={formData.message} onChange={handleChange} required
                placeholder="Tell us what's on your mind..."
                className={`${inputClass} resize-y`}
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 rounded-lg bg-red-50 dark:bg-red-900/20 px-3 py-2 text-xs text-red-600 dark:text-red-400">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                {error}
              </div>
            )}

            {success && (
              <div className="flex items-center gap-2 rounded-lg bg-lime-50 dark:bg-lime-500/10 px-3 py-2 text-xs text-lime-700 dark:text-lime-400">
                <CheckCircle className="h-3.5 w-3.5 shrink-0" />
                Message sent! We'll get back to you within 24-48 hours.
              </div>
            )}

            <Button type="submit" variant="mono" size="lg" disabled={loading} className="w-full">
              {loading ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
              ) : (
                <><Send className="h-4 w-4" /> Send Message</>
              )}
            </Button>
          </form>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <section className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/40 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4 text-lime-600 dark:text-lime-400" />
                <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-50">Email us directly</h2>
              </div>
              <a
                href={SOCIAL_LINKS.email}
                className="inline-flex items-center gap-2 text-sm text-lime-600 dark:text-lime-400 hover:underline break-all"
              >
                mrsachinchaurasiya@gmail.com
              </a>

              <div className="mt-5 pt-5 border-t border-stone-200 dark:border-stone-800">
                <div className="flex items-center gap-2 mb-2">
                  <Clock3 className="w-4 h-4 text-lime-600 dark:text-lime-400" />
                  <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-50">Support hours</h2>
                </div>
                <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                  Monday to Saturday, 10:00 AM - 7:00 PM IST.
                </p>
              </div>

              <div className="mt-5 pt-5 border-t border-stone-200 dark:border-stone-800">
                <div className="flex items-center gap-2 mb-2">
                  <Bug className="w-4 h-4 text-lime-600 dark:text-lime-400" />
                  <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-50">Report an issue</h2>
                </div>
                <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                  Found a bug or security vulnerability? Email us with details
                  and steps to reproduce, we take every report seriously.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/40 p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-4">Connect with us</h2>
              <ul className="space-y-2">
                {CONNECT_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-stone-200 dark:border-stone-800 px-3 py-2.5 text-stone-700 dark:text-stone-300 hover:border-lime-400 dark:hover:border-lime-500 hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline"
                    >
                      <span className="text-lime-600 dark:text-lime-400">{link.icon}</span>
                      <span className="flex-1 text-sm font-medium">{link.label}</span>
                      <span className="text-xs font-mono text-stone-400 dark:text-stone-600">{link.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
