"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code2, ExternalLink, Github } from "lucide-react";
import { usePortfolio } from "@/components/PortfolioContext";

export function ProjectsSection() {
    const { data } = usePortfolio();
    const { projects: portfolioProjects } = data;

    return (
        <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="section-transition max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Proyectos Destacados</h2>
                <p className="text-muted-foreground mb-12 max-w-2xl">
                    Desde sistemas IoT hasta plataformas de IA, estos son proyectos que he diseñado y desarrollado
                    en contextos académicos y profesionales.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioProjects.map((project) => (
                        <Card key={project.title} className="card-hover border-border/50 bg-card/50 backdrop-blur-sm flex flex-col">
                            <CardHeader className="pb-4">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Code2 className="w-5 h-5 text-primary" />
                                    </div>
                                    {project.badge && (
                                        <Badge variant="outline" className="text-xs text-primary border-primary/30">
                                            {project.badge}
                                        </Badge>
                                    )}
                                </div>
                                <h3 className="font-semibold text-foreground leading-tight">{project.title}</h3>
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col justify-between">
                                <div>
                                    <Separator className="mb-4" />
                                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                                        <span>{project.role}</span>
                                        <span>{project.year}</span>
                                    </div>
                                    {project.teamSize && (
                                        <p className="text-xs text-muted-foreground mb-3">Trabajo grupal ({project.teamSize})</p>
                                    )}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 4).map((tag) => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                        {project.tags.length > 4 && (
                                            <Badge variant="secondary" className="text-xs">
                                                +{project.tags.length - 4}
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        <Github className="w-4 h-4" />
                                        Ver en GitHub
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
