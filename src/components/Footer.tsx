"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/nicopache97"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                            <Github className="w-5 h-5 text-muted-foreground" />
                        </a>
                        <a
                            href="https://linkedin.com/in/nico-pacheco"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                            <Linkedin className="w-5 h-5 text-muted-foreground" />
                        </a>
                        <a
                            href="mailto:nicopache1997@gmail.com"
                            className="p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                            <Mail className="w-5 h-5 text-muted-foreground" />
                        </a>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        © 2026 Nicolás Pacheco. Desarrollado con Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
