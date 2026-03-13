"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, ChevronRight, Download, GraduationCap, Sparkles, Zap } from "lucide-react";
import { activities, courses, education, experience } from "@/data/portfolio";

export function JourneySection() {
    return (
        <section id="trayectoria" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 section-gradient">
            <div className="section-transition max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Trayectoria Profesional</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Una línea de tiempo de mi desarrollo técnico y liderazgo en proyectos.
                    </p>
                    <Button asChild variant="default" className="mt-6 bg-primary hover:bg-primary/90">
                        <a href="mailto:nicopache1997@gmail.com">
                            <Download className="w-4 h-4 mr-2" />
                            Solicitar CV Completo
                        </a>
                    </Button>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Experience */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Briefcase className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-semibold">Experiencia</h3>
                        </div>
                        <div className="space-y-8">
                            {experience.map((exp, index) => (
                                <div key={exp.role} className="relative pl-8">
                                    {index < experience.length - 1 && <div className="timeline-line" />}
                                    <div className={`timeline-dot ${exp.current ? "timeline-dot-active" : ""}`} />
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                                        <div>
                                            <h4 className="font-semibold text-foreground">{exp.role}</h4>
                                            <p className="text-sm text-muted-foreground">{exp.company}</p>
                                        </div>
                                        <span className={`text-sm whitespace-nowrap ${exp.current ? "text-primary font-medium" : "text-muted-foreground"}`}>
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                                    <ul className="space-y-1">
                                        {exp.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <GraduationCap className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-semibold">Educación</h3>
                        </div>
                        <div className="space-y-6 mb-12">
                            {education.map((edu) => (
                                <Card key={edu.degree} className="bg-card/50 border-border/50">
                                    <CardContent className="p-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                                                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                                            </div>
                                            <span className="text-sm text-muted-foreground">{edu.period}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            Cursos y Certificaciones
                        </h4>
                        <ul className="space-y-2">
                            {courses.map((course) => (
                                <li key={course} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    {course}
                                </li>
                            ))}
                        </ul>

                        <h4 className="font-semibold mt-8 mb-4 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-primary" />
                            Actividades Académicas
                        </h4>
                        <ul className="space-y-2">
                            {activities.map((activity) => (
                                <li key={activity} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    {activity}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
