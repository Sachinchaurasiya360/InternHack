import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { SEO } from "../../../components/SEO";
import AtsLandingPage from "./AtsLandingPage";

export default function PublicAtsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="ATS Resume Score"
        description="Score your resume with AI-powered ATS analysis. Get detailed feedback on formatting, keywords, experience, skills, education, and impact — completely free."
        keywords="ATS score, resume checker, AI resume analysis, ATS resume score, resume optimization, resume keywords, applicant tracking system"
      />
      <Navbar />
      <AtsLandingPage />
      <Footer />
    </div>
  );
}
