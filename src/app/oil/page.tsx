import PortfolioPage from "@/components/PortfolioPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "nicopache97.oil & Gas Tech | Vaca Muerta",
    description: "Soluciones de IA y Automatización para la industria del petróleo y gas en Neuquén, Argentina.",
};

export default function OilPage() {
    return <PortfolioPage mode="oil" />;
}
