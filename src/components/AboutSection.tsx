import { usePortfolio } from "@/components/PortfolioContext";
import { Sparkles, Brain, Zap, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
    const { data } = usePortfolio();
    const { about } = data;

    return (
        <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 section-gradient">
            <div className="section-transition max-w-6xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-sm text-primary uppercase tracking-wider font-medium">Perfil Profesional</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-8">
                    {about.title[0]} <span className="text-gradient italic">{about.title[1]}</span> {about.title[2]}{" "}
                    <span className="text-gradient italic">{about.title[3]}</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                            {about.description[0]}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            {about.description[1]}
                        </p>
                    </div>
                    <div className="space-y-4">
                        {about.highlights.map((item) => (
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
