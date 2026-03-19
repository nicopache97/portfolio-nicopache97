import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { PortfolioProvider } from "@/components/PortfolioContext";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Nicolás Pacheco | Full-Stack Developer & AI Engineer",
        template: "%s | Nicolás Pacheco"
    },
    description: "Portfolio de Nicolás Pacheco - Ingeniero en Computación especializado en Sistemas Embebidos, Full-Stack Development, AI & Machine Learning",
    keywords: ["Nicolás Pacheco", "Portfolio", "Full-Stack Developer", "Software Engineer", "Ingeniero en Computación", "Sistemas Embebidos", "Arduino", "ESP32", "ESP8266", "Machine Learning", "Prompt Engineer"],
    authors: [{ name: "Nicolás Pacheco" }],
    creator: "Nicolás Pacheco",
    openGraph: {
        type: "website",
        locale: "es_AR",
        url: "https://portfolio-nicopache97.vercel.app/",
        title: "Nicolás Pacheco | Full-Stack Developer & AI Engineer",
        description: "Ingeniero en Computación especializado en Sistemas Embebidos, Full-Stack Development y Machine Learning.",
        siteName: "Nicolás Pacheco Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nicolás Pacheco | Full-Stack Developer & AI Engineer",
        description: "Ingeniero en Computación especializado en Sistemas Embebidos, Full-Stack Development y Machine Learning.",
    },
    icons: {
        icon: "/logo.svg",
        shortcut: "/logo.svg",
        apple: "/logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://portfolio-nicopache97.vercel.app/#person",
                "name": "Nicolás Pacheco",
                "jobTitle": "Prompt Engineer & Full-Stack Developer",
                "url": "https://portfolio-nicopache97.vercel.app/",
                "description": "Desarrollador Full-Stack, Prompt Engineer e Ingeniero en Computación especializado en Inteligencia Artificial y Sistemas Embebidos.",
                "knowsAbout": [
                    "Prompt Engineering",
                    "Inteligencia Artificial",
                    "Desarrollo Full-Stack",
                    "NextJS",
                    "NodeJS",
                    "Python",
                    "Sistemas Embebidos",
                    "Docker"
                ],
                "alumniOf": {
                    "@type": "CollegeOrUniversity",
                    "name": "Universidad Nacional de La Plata (UNLP)"
                },
                "worksFor": {
                    "@type": "Organization",
                    "name": "Tecnom"
                },
                "sameAs": [
                    "https://github.com/nicopache97",
                    "https://www.linkedin.com/in/nicopache97"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://portfolio-nicopache97.vercel.app/#website",
                "url": "https://portfolio-nicopache97.vercel.app/",
                "name": "Portfolio de Nicolás Pacheco",
                "description": "Portfolio profesional destacando proyectos de IA, Web y Sistemas Embebidos.",
                "publisher": {
                    "@id": "https://portfolio-nicopache97.vercel.app/#person"
                }
            }
        ]
    };

    return (
        <html lang="es" className={inter.variable}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </head>
            <body suppressHydrationWarning className="antialiased">
                <PortfolioProvider>
                    <ClientBody>{children}</ClientBody>
                </PortfolioProvider>
            </body>
        </html>
    );
}
