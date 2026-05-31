import { useState } from "react";
import { Mail, Globe, Clock3, Bug, Loader2, Send, CheckCircle, AlertCircle, User, Tag, MessageSquare } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import { Button } from "../../components/ui/button";
import api from "../../lib/axios";

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
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070707]">
      <SEO
        title="Contact Us"
        description="Get in touch with the InternHack team for support, feedback, or business enquiries."
      />
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 pt-28 pb-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Contact Us
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for support, feedback,
            partnerships, or general enquiries.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mb-10 space-y-4 rounded-2xl border border-gray-200 dark:border-gray-900 bg-white/70 dark:bg-[#070707] backdrop-blur-sm p-6 shadow-sm hover:border-lime-400/40 dark:hover:border-lime-500/40 hover:shadow-[0_0_16px_rgba(163,230,53,0.05)] transition-all">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Send us a message</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label htmlFor="name" className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400">Name</label>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 flex-shrink-0 text-lime-500 dark:text-lime-400" />
                <input
                  id="name" name="name" value={formData.name} onChange={handleChange} required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400">Email</label>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-lime-500 dark:text-lime-400" />
                <input
                  id="email" name="email" type="email" value={formData.email} onChange={handleChange} required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
                />
              </div>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400">Subject</label>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 flex-shrink-0 text-lime-500 dark:text-lime-400" />
              <input
                id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                placeholder="What's this about?"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400">Message</label>
            <div className="flex items-start gap-2">
              <MessageSquare className="mt-2 h-4 w-4 flex-shrink-0 text-lime-500 dark:text-lime-400" />
              <textarea
                id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required
                placeholder="Tell us what's on your mind..."
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 resize-y"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 dark:bg-red-900/20 px-3 py-2 text-xs text-red-600 dark:text-red-400">
              <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
              {error}
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2 text-xs text-emerald-600 dark:text-emerald-400">
              <CheckCircle className="h-3.5 w-3.5 flex-shrink-0" />
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

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Email */}
          <section className="rounded-2xl border border-gray-200 dark:border-gray-900 bg-white/70 dark:bg-[#070707] backdrop-blur-sm p-6 shadow-sm hover:border-lime-400/40 dark:hover:border-lime-500/40 hover:shadow-[0_0_16px_rgba(163,230,53,0.05)] transition-all">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-lime-500 dark:text-lime-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Email</h2>
            </div>
            <a
              href="mailto:mrsachinchaurasiya@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-900 rounded-xl text-lime-500 dark:text-lime-400 hover:border-lime-400/40 dark:hover:border-lime-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
              mrsachinchaurasiya@gmail.com
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              For general enquiries, support requests, feature suggestions, or
              business partnerships, drop us an email and we'll respond within
              24-48 hours.
            </p>
          </section>

          {/* Support Hours */}
          <section className="rounded-2xl border border-gray-200 dark:border-gray-900 bg-white/70 dark:bg-[#070707] backdrop-blur-sm p-6 shadow-sm hover:border-lime-400/40 dark:hover:border-lime-500/40 hover:shadow-[0_0_16px_rgba(163,230,53,0.05)] transition-all">
            <div className="flex items-center gap-2 mb-4">
              <Clock3 className="w-5 h-5 text-lime-500 dark:text-lime-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Support Hours</h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Our team operates Monday to Saturday, 10:00 AM - 7:00 PM IST. We
              aim to respond to all queries within 24-48 hours during business
              days.
            </p>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Report Issue */}
          <section className="rounded-2xl border border-gray-200 dark:border-gray-900 bg-white/70 dark:bg-[#070707] backdrop-blur-sm p-6 shadow-sm hover:border-lime-400/40 dark:hover:border-lime-500/40 hover:shadow-[0_0_16px_rgba(163,230,53,0.05)] transition-all">
            <div className="flex items-center gap-2 mb-4">
              <Bug className="w-5 h-5 text-lime-500 dark:text-lime-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Report an Issue</h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Found a bug or security vulnerability? Please email us at{" "}
              <a href="mailto:mrsachinchaurasiya@gmail.com" className="text-lime-500 dark:text-lime-400 hover:underline">
                mrsachinchaurasiya@gmail.com
              </a>{" "}
              with details and steps to reproduce. We take all reports seriously
              and will investigate promptly.
            </p>
          </section>

          {/* Social Media */}
          <section className="rounded-2xl border border-gray-200 dark:border-gray-900 bg-white/70 dark:bg-[#070707] backdrop-blur-sm p-6 shadow-sm hover:border-lime-400/40 dark:hover:border-lime-500/40 hover:shadow-[0_0_16px_rgba(163,230,53,0.05)] transition-all">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-lime-500 dark:text-lime-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Social Media</h2>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://x.com/internhack_xyz" target="_blank" rel="noopener noreferrer"
                  className="text-lime-500 dark:text-lime-400 hover:underline">Twitter / X, @internhack_xyz</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/internhack" target="_blank" rel="noopener noreferrer"
                  className="text-lime-500 dark:text-lime-400 hover:underline">LinkedIn, InternHack</a>
              </li>
            </ul>
          </section>
        </div>

        {/* Social Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="https://x.com/internhack_xyz" target="_blank" rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl border border-gray-200 dark:border-gray-900 bg-white/70 dark:bg-[#070707] backdrop-blur-sm text-sm font-medium text-lime-500 dark:text-lime-400 hover:border-lime-400/40 dark:hover:border-lime-500/40 hover:shadow-[0_0_16px_rgba(163,230,53,0.05)] hover:bg-lime-500/5 transition-all">
            Twitter / X
          </a>
          <a href="https://www.linkedin.com/company/internhack" target="_blank" rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl border border-gray-200 dark:border-gray-900 bg-white/70 dark:bg-[#070707] backdrop-blur-sm text-sm font-medium text-lime-500 dark:text-lime-400 hover:border-lime-400/40 dark:hover:border-lime-500/40 hover:shadow-[0_0_16px_rgba(163,230,53,0.05)] hover:bg-lime-500/5 transition-all">
            LinkedIn
          </a>
          <a href="mailto:mrsachinchaurasiya@gmail.com"
            className="px-5 py-3 rounded-2xl border border-gray-200 dark:border-gray-900 bg-white/70 dark:bg-[#070707] backdrop-blur-sm text-sm font-medium text-lime-500 dark:text-lime-400 hover:border-lime-400/40 dark:hover:border-lime-500/40 hover:shadow-[0_0_16px_rgba(163,230,53,0.05)] hover:bg-lime-500/5 transition-all">
            Email Support
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
