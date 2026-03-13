"use client";

import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 section-gradient">
            <div className="section-transition max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                    Trabajemos Juntos
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    ¿Buscas un profesional en Prompt Engineering o desarrollo de IA?
                    Combino experiencia técnica con habilidades de comunicación para crear soluciones efectivas.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <a href="mailto:nicopache1997@gmail.com">
                            <Mail className="w-5 h-5 mr-2" />
                            Envíame un Email
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <a href="https://linkedin.com/in/nico-pacheco" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-5 h-5 mr-2" />
                            Conectar en LinkedIn
                        </a>
                    </Button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        La Plata, Buenos Aires, Argentina
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        (+54) 9 221 3643760
                    </div>
                </div>
            </div>
        </section>
    );
}
