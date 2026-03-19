"use client";

import { useEffect } from "react";
import { usePortfolio } from "@/components/PortfolioContext";
import { SectionTransitions } from "@/components/SectionTransitions";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { JourneySection } from "@/components/JourneySection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function PortfolioPage({ mode }: { mode: "default" | "oil" }) {
    const { setMode } = usePortfolio();

    useEffect(() => {
        setMode(mode);
    }, [mode, setMode]);

    return (
        <main className="min-h-screen">
            <SectionTransitions />
            <Navigation />
            <HeroSection />
            <AboutSection />
            <ExpertiseSection />
            <JourneySection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
