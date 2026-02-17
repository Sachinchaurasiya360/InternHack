import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { HeroSection } from "../../components/HeroSection"
import { StatsSection } from "../../components/StatsSection"
import { FeaturesSection } from "../../components/FeaturesSection"
import { HowItWorksSection } from "../../components/HowItWorksSection"
import { CTASection } from "../../components/CTASection"

export default function LandingPage(){
    return(
        <div className="font-sans">
            <Navbar/>
            <HeroSection/>
            <StatsSection/>
            <FeaturesSection/>
            <HowItWorksSection/>
            <CTASection/>
            <Footer/>
        </div>
    )
}
