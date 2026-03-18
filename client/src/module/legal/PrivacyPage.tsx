import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for InternHack — how we collect, use, and protect your data."
      />
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: March 17, 2026</p>

        <div className="space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">1. Information We Collect</h2>
            <p className="mb-2">We collect the following categories of information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Account Information:</strong> Name, email address, password (hashed), role (Student/Recruiter), company name, designation</li>
              <li><strong>Profile Information:</strong> Bio, skills, education, LinkedIn/GitHub/portfolio URLs, projects, achievements, profile photo</li>
              <li><strong>Uploaded Content:</strong> Resumes (stored on AWS S3), cover letters, LaTeX documents</li>
              <li><strong>Usage Data:</strong> Pages visited, features used, AI tool interactions, application history</li>
              <li><strong>Payment Information:</strong> Processed securely by Dodo Payments — we do not store card details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide and maintain the Platform</li>
              <li>To personalise your experience (job recommendations, AI-generated content)</li>
              <li>To process payments and manage subscriptions</li>
              <li>To send transactional emails (verification, password reset, welcome)</li>
              <li>To send newsletters (only if you opt in)</li>
              <li>To improve our services through aggregated, anonymised analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">3. Third-Party Services</h2>
            <p className="mb-2">We use the following third-party services:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Google OAuth:</strong> For social login — receives your name, email, and profile picture</li>
              <li><strong>Google Gemini AI:</strong> For generating resumes, cover letters, and interview content</li>
              <li><strong>Dodo Payments:</strong> For payment processing — subject to Dodo Payments' privacy policy</li>
              <li><strong>AWS S3:</strong> For storing uploaded files (resumes, documents)</li>
              <li><strong>Email Service:</strong> For sending transactional and marketing emails</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">4. Data Storage and Security</h2>
            <p>
              Your data is stored on secure servers. Passwords are hashed using bcrypt. We use HTTPS for all
              communications. JWT tokens are used for authentication. While we implement industry-standard security
              measures, no system is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">5. Cookies</h2>
            <p>
              We use essential cookies to maintain your login session and preferences. We do not use third-party
              tracking cookies or advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">6. Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access and download your personal data</li>
              <li>Update or correct your information via your profile settings</li>
              <li>Request deletion of your account and associated data</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, contact us at{" "}
              <a href="mailto:mrsachinchaurasiya@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                mrsachinchaurasiya@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">7. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide services. If you
              delete your account, we will remove your personal data within 30 days, except where retention is
              required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">8. Children's Privacy</h2>
            <p>
              The Platform is not intended for users under 16 years of age. We do not knowingly collect personal
              information from children under 16.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an
              updated date. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">10. Contact</h2>
            <p>
              For privacy-related questions, contact us at{" "}
              <a href="mailto:mrsachinchaurasiya@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                mrsachinchaurasiya@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
