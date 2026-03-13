import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Nicolás Pacheco - Ingeniero en Computación",
    description: "Portfolio de Nicolás Pacheco - Ingeniero en Computación especializado en Sistemas Embebidos, Full-Stack Development, AI & Machine Learning",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <head>

            </head>
            <body suppressHydrationWarning className="antialiased">
                <ClientBody>{children}</ClientBody>
            </body>
        </html>
    );
}
