import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { SEO } from "../../../components/SEO";
import OpenSourceLandingPage from "./OpenSourceLandingPage";

export default function PublicOpenSourcePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <SEO
        title="Open Source Discovery"
        description="Discover beginner-friendly open-source repositories, explore GSoC organizations, track programs like LFX, Outreachy, and Hacktoberfest, and make your first contribution — all for free."
        keywords="open source, GSoC, Google Summer of Code, LFX mentorship, Outreachy, MLH fellowship, Hacktoberfest, open source programs, beginner open source, first pull request, good first issues"
      />
      <Navbar />
      <OpenSourceLandingPage />
      <Footer />
    </div>
  );
}
