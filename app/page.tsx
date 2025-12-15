"use client";
import { Navbar } from "./_components/Navbar";
import { HeroSection } from "./_components/HeroSection";
import { RecentHackathons } from "./_components/RecentHackathons";
import { RecentJobs } from "./_components/RecentJobs";
import { InterviewPrep } from "./_components/InterviewPrep";
import { AIInterview } from "./_components/AIInterview";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <HeroSection />
      <RecentHackathons />
      <RecentJobs />
      <InterviewPrep />
      <AIInterview />
      <Footer />
    </div>
  );
}
