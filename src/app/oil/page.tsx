import PortfolioPage from "@/components/PortfolioPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Oil & Gas Tech",
    description: "Soluciones de IA y Automatización para la industria del petróleo y gas en Cipolletti, Río Negro, Argentina.",
};

export default function OilPage() {
    return <PortfolioPage mode="oil" />;
}
