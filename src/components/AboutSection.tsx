"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Brain, Server, Sparkles, Zap } from "lucide-react";

export function AboutSection() {
    return (
        <section id="sobre-mi" className="section-transition py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 section-gradient">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-sm text-primary uppercase tracking-wider font-medium">Perfil Profesional</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-8">
                    Conectando <span className="text-gradient italic">Tecnología</span> con{" "}
                    <span className="text-gradient italic">Soluciones Reales</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                            Joven profesional apasionado por la tecnología y el trabajo colaborativo para desarrollar
                            soluciones creativas y automatizadas para la industria.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Con formación en <strong className="text-foreground">Ingeniería en Computación</strong>, combino
                            experiencia técnica en IA, sistemas embebidos y desarrollo full-stack con habilidades
                            comunicacionales para traducir necesidades de clientes en soluciones efectivas.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {[
                            { icon: Brain, title: "Prompt Engineering", desc: "Creación y optimización de prompts para sistemas de IA conversacional." },
                            { icon: Zap, title: "Desarrollo Agentic AI", desc: "Arquitecturas multi-agente y workflows automatizados." },
                            { icon: Server, title: "Sistemas Embebidos", desc: "Programación de microcontroladores y sistemas de control." },
                        ].map((item) => (
                            <Card key={item.title} className="bg-card/50 backdrop-blur-sm border-border/50">
                                <CardContent className="flex items-start gap-4 p-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
