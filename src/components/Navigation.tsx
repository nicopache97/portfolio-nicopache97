"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="font-serif text-xl font-semibold text-foreground">
                        Nicolás Pacheco
                    </a>
                    <div className="hidden md:flex items-center space-x-1">
                        {["Inicio", "Sobre mí", "Expertise", "Trayectoria", "Proyectos"].map((item, i) => (
                            <a
                                key={item}
                                href={`#${["hero", "sobre-mi", "expertise", "trayectoria", "proyectos"][i]}`}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                        <a href="#contact">
                            <Mail className="w-4 h-4 mr-2" />
                            Contacto
                        </a>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
