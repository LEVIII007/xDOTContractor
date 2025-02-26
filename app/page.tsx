"use client";

import HeroSection from "@/components/hero";
// import FeaturesSection from "@/components/features";
// import StatsSection from "@/components/stats";
import PricingSection from "@/components/pricing";
import RevolvingSection from "@/components/revolving-stuff";
import ContactSection from "@/components/contact-section";
import FinalCTA from "@/components/final-ctf";
import AIConstructionFeatures from "@/components/fancy-ai-card";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col relative">
      <main className="flex-1 pt-14 sm:pt-16">
        <HeroSection />
        <AIConstructionFeatures />
        {/* <FeaturesSection />
        <StatsSection /> */}
        {/* <PricingSection /> */}
        {/* <RevolvingSection /> */}
        <FinalCTA />
        <ContactSection />
        
      </main>
    </div>
  );
}
