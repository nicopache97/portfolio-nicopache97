import { SectionTransitions } from "@/components/SectionTransitions";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { JourneySection } from "@/components/JourneySection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Inicio",
    description: "Portfolio profesional de Nicolás Pacheco, especializado en Inteligencia Artificial, Prompt Engineering y Sistemas Embebidos.",
};

export default function Home() {
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
