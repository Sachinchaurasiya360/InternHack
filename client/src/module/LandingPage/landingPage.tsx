import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { HeroSection } from "../../components/HeroSection"
import { StatsSection } from "../../components/StatsSection"
import { FeaturesSection } from "../../components/FeaturesSection"
import { HowItWorksSection } from "../../components/HowItWorksSection"
import { PricingSection } from "../../components/PricingSection"
import { GrantsSection } from "../../components/GrantsSection"
import { CTASection } from "../../components/CTASection"
import { SEO } from "../../components/SEO"

export default function LandingPage(){
    return(
        <div className="font-sans">
            <SEO
              title="Home"
              description="InternHack is an AI-powered career platform for students. Browse curated internships, score your resume with ATS AI, follow career roadmaps, and connect with recruiters."
              keywords="internship, jobs, career platform, resume ATS score, career roadmap, student jobs, campus placement, AI resume checker, recruiter dashboard"
            />
            <Navbar/>
            <HeroSection/>
            <StatsSection/>
            <FeaturesSection/>
            <HowItWorksSection/>
            <PricingSection/>
            <GrantsSection/>
            <CTASection/>
            <Footer/>
        </div>
    )
}
