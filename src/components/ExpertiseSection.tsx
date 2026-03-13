"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { expertiseCards } from "@/data/portfolio";

export function ExpertiseSection() {
    return (
        <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="section-transition max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Áreas de Expertise</h2>
                <p className="text-muted-foreground mb-12 max-w-2xl">
                    Desde sistemas de IA hasta microcontroladores, aporto experiencia diversa para arquitectar,
                    construir y desplegar software de producción.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {expertiseCards.map((card) => (
                        <Card key={card.title} className="card-hover border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader className="pb-4">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 rounded-xl bg-primary/10">
                                        <card.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    {card.badge && (
                                        <Badge variant="outline" className="text-xs text-primary border-primary/30">
                                            {card.badge}
                                        </Badge>
                                    )}
                                </div>
                                <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
                                <p className="text-sm text-muted-foreground">{card.description}</p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    {card.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {card.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
