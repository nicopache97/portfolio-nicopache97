"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import { stats } from "@/data/portfolio";

export function HeroSection() {
    return (
        <section id="hero" className="section-transition pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-3">
                            <Avatar className="w-16 h-16 border-2 border-primary/20">
                                <AvatarImage src="/profile.webp" alt="Nicolás Pacheco" />
                                <AvatarFallback className="bg-gradient-to-br from-primary to-cyan-600 text-white text-xl font-bold">
                                    NP
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-1">
                                <Badge variant="secondary" className="text-xs w-fit">
                                    Ing. en Computación
                                </Badge>
                                <Badge variant="outline" className="text-xs w-fit border-primary/30 text-primary">
                                    Disponible
                                </Badge>
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                            <span className="text-gradient">Prompt Engineer</span>
                            <br />
                            <span className="text-foreground">&amp; AI Developer</span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-xl">
                            Desarrollo soluciones <strong className="text-foreground">creativas y automatizadas</strong> para la industria,
                            especializándome en Prompt Engineering, Agentic AI y sistemas embebidos.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                                <a href="#proyectos">
                                    Ver Proyectos
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <a href="https://linkedin.com/in/nico-pacheco" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-4 h-4 mr-2" />
                                    LinkedIn
                                </a>
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <a
                                href="mailto:nicopache1997@gmail.com"
                                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                                title="Email"
                            >
                                <Mail className="w-5 h-5 text-muted-foreground" />
                            </a>
                            <a
                                href="https://github.com/nicopache97"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                                title="GitHub"
                            >
                                <Github className="w-5 h-5 text-muted-foreground" />
                            </a>
                            <a
                                href="https://linkedin.com/in/nico-pacheco"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                                title="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 text-muted-foreground" />
                            </a>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center sm:text-left">
                                    <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Code block decoration */}
                    <div className="hidden lg:block w-full max-w-md">
                        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <span className="ml-2 text-xs text-muted-foreground">perfil_config.json</span>
                            </div>
                            <pre className="text-sm font-mono text-muted-foreground overflow-x-auto">
                                <code>{`{
  "nombre": "Nicolás Pacheco",
  "rol": "Prompt Engineer",
  "ubicacion": "La Plata, Argentina",
  "especialidades": [
    "Prompt Engineering",
    "Agentic AI",
    "Sistemas Embebidos",
    "Full-Stack Dev"
  ],
  "titulos": [ 
    "Ingeniería en Computación @ UNLP",
    "Tecnico Electronico @ Albert Thomas"
  ],
  "estado": "Disponible para consultorías"
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
