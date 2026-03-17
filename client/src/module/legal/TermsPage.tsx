import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <SEO
        title="Terms and Conditions"
        description="Terms and Conditions for using InternHack — your all-in-one career platform."
      />
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: March 17, 2026</p>

        <div className="space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to InternHack ("we", "our", "us"). By accessing or using our website at internhack.xyz
              and any related services (collectively, the "Platform"), you agree to be bound by these Terms
              and Conditions. If you do not agree, please do not use the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2. Eligibility</h2>
            <p>
              You must be at least 16 years of age to use the Platform. By creating an account, you represent
              that you meet this requirement and that the information you provide is accurate and complete.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials. You agree to
              notify us immediately of any unauthorised use of your account. We reserve the right to suspend or
              terminate accounts that violate these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Use the Platform for any unlawful or fraudulent purpose</li>
              <li>Post misleading, defamatory, or harmful content</li>
              <li>Attempt to gain unauthorised access to any part of the Platform</li>
              <li>Scrape, crawl, or collect data from the Platform without prior written consent</li>
              <li>Impersonate another person or entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">5. Subscriptions and Payments</h2>
            <p>
              Certain features of the Platform are available only to paid subscribers. Payments are processed
              securely through Dodo Payments. By purchasing a subscription, you agree to the pricing and billing
              terms presented at checkout. All prices are listed in Indian Rupees (INR) unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">6. Intellectual Property</h2>
            <p>
              All content on the Platform — including text, graphics, logos, code, and AI-generated outputs — is
              the property of InternHack or its licensors and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">7. AI-Generated Content</h2>
            <p>
              The Platform uses AI tools (including Google Gemini) to generate resumes, cover letters, interview
              responses, and other content. AI-generated content is provided "as is" and may contain errors. You
              are responsible for reviewing and verifying all AI outputs before use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, InternHack shall not be liable for any indirect, incidental,
              special, or consequential damages arising from your use of the Platform. Our total liability for any
              claim shall not exceed the amount paid by you in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">9. Termination</h2>
            <p>
              We may suspend or terminate your access to the Platform at our sole discretion, with or without
              notice, for conduct that we believe violates these Terms or is harmful to the Platform or other users.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
              shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an
              updated "Last updated" date. Continued use of the Platform after changes constitutes acceptance of
              the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">12. Contact</h2>
            <p>
              If you have questions about these Terms, contact us at{" "}
              <a href="mailto:internhack.xyz@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                internhack.xyz@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
