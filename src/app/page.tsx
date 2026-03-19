import PortfolioPage from "@/components/PortfolioPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "nicopache97.dev",
    description: "Portfolio profesional de Nicolás Pacheco, especializado en Inteligencia Artificial, Prompt Engineering y Sistemas Embebidos.",
};

export default function Home() {
    return <PortfolioPage mode="default" />;
}
