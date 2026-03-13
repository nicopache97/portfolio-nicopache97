"use client";

import { Button } from "@/components/ui/button";
import { Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function Navigation() {
    const { theme, toggleTheme } = useTheme();

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
                    <div className="flex items-center gap-3">
                        {/* Dark mode toggle */}
                        <button
                            onClick={toggleTheme}
                            aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
                            className="relative flex items-center w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                            style={{
                                background: theme === "dark"
                                    ? "hsl(189 94% 43% / 0.25)"
                                    : "hsl(220 15% 90%)",
                            }}
                        >
                            {/* Icons behind the thumb */}
                            <Sun
                                className="absolute left-1.5 w-3.5 h-3.5 transition-opacity duration-300"
                                style={{
                                    color: "hsl(43 74% 60%)",
                                    opacity: theme === "dark" ? 0 : 1,
                                }}
                            />
                            <Moon
                                className="absolute right-1.5 w-3.5 h-3.5 transition-opacity duration-300"
                                style={{
                                    color: "hsl(189 94% 53%)",
                                    opacity: theme === "dark" ? 1 : 0,
                                }}
                            />
                            {/* Sliding thumb */}
                            <span
                                className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center"
                                style={{
                                    background: theme === "dark"
                                        ? "hsl(189 94% 43%)"
                                        : "hsl(0 0% 100%)",
                                    transform: theme === "dark"
                                        ? "translateX(28px)"
                                        : "translateX(0px)",
                                }}
                            >
                                {theme === "dark" ? (
                                    <Moon className="w-3 h-3 text-white" />
                                ) : (
                                    <Sun className="w-3 h-3" style={{ color: "hsl(43 74% 55%)" }} />
                                )}
                            </span>
                        </button>

                        <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                            <a href="#contact">
                                <Mail className="w-4 h-4 mr-2" />
                                Contacto
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
