"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    Mail,
    Github,
    Linkedin,
    MapPin,
    Phone,
    Download,
    ExternalLink,
    Code2,
    Cpu,
    Brain,
    Settings,
    GraduationCap,
    Briefcase,
    ChevronRight,
    Sparkles,
    Zap,
    Server,
    Database,
} from "lucide-react";

// Data
const stats = [
    { value: "3+", label: "Años Exp" },
    { value: "10+", label: "Proyectos" },
    { value: "68+", label: "Clientes IA" },
    { value: "5+", label: "Equipos" },
];

const skills = {
    languages: ["C", "Python", "NodeJS", "NextJS", "SQL", "Ruby On Rails"],
    devops: ["Docker", "Vercel", "Linux", "Bash Script", "GitHub Actions"],
    ai: ["Prompt Engineering", "Autonomous Agents", "LangChain", "MCP", "N8N", "OpenAI API", "Whisper IA", "Data Analysis"],
    embedded: ["IoT", "ESP32", "Wemos D1", "Edu-CIAA-NXP", "PLC Logo", "PID", "Sistemas de Control"],
};

const expertiseCards = [
    {
        icon: Brain,
        title: "Inteligencia Artificial & Prompt Engineering",
        description: "Desarrollo de agentes autónomos y sistemas de IA conversacional con arquitecturas multi-agente.",
        items: [
            "Creación y optimización de prompts para clientes",
            "Desarrollo de workflows agentic con LangChain",
            "Integración de APIs de OpenAI y Whisper",
            "Análisis de conversaciones y métricas de calidad",
        ],
        tags: ["Prompt Engineering", "LangChain", "OpenAI API", "MCP", "N8N", "Whisper IA"],
        badge: "ESPECIALIDAD",
    },
    {
        icon: Code2,
        title: "Desarrollo Full-Stack",
        description: "Construcción de aplicaciones web completas con tecnologías modernas y arquitecturas escalables.",
        items: [
            "Backend: Python, NodeJS, FastAPI",
            "Frontend: NextJS, React",
            "Bases de datos SQL y NoSQL",
            "APIs RESTful y WebSockets",
        ],
        tags: ["Python", "NodeJS", "NextJS", "FastAPI", "SQL", "Ruby on Rails"],
    },
    {
        icon: Cpu,
        title: "Sistemas Embebidos & IoT",
        description: "Programación de bajo nivel para microcontroladores y sistemas de control industrial.",
        items: [
            "Microcontroladores ESP32, Wemos D1, Edu-CIAA",
            "Comunicación TCP/UDP y WebSocket",
            "Sistemas de control PID",
            "Integración con sensores y actuadores",
        ],
        tags: ["ESP32", "IoT", "C", "PID", "Microcontroladores"],
    },
    {
        icon: Settings,
        title: "DevOps & Automatización",
        description: "Infraestructura dockerizada y pipelines de CI/CD para despliegue continuo.",
        items: [
            "Contenedores Docker y orquestación",
            "CI/CD con GitHub Actions",
            "Despliegue en Vercel y servidores Linux",
            "Automatización con Bash scripting",
        ],
        tags: ["Docker", "GitHub Actions", "Vercel", "Linux", "Bash"],
        badge: "INFRAESTRUCTURA",
    },
];

const experience = [
    {
        role: "Prompt Engineer",
        company: "Tecnom",
        period: "Oct 2025 - Actualidad",
        current: true,
        description: "Responsable de la creación y optimización de prompts para sistemas de IA conversacional.",
        items: [
            "Creación completa de prompts de OB para nuevos clientes",
            "Estandarización del proceso de creación de prompts",
            "Desarrollo y gestión de base de conocimiento para 17 clientes",
            "Participación en reuniones con clientes para asesoramiento técnico",
        ],
    },
    {
        role: "Desarrollador Jr. Agentic AI",
        company: "Tecnom",
        period: "May 2025 - Oct 2025",
        current: false,
        description: "Desarrollo de herramientas y arquitecturas para sistemas de agentes autónomos.",
        items: [
            "Desarrollo de herramientas de envío de imágenes",
            "Robustecimiento de arquitectura multi-agente",
            "Implementación de parámetros placeholders para enriquecer contexto",
            "Desarrollo de herramientas de análisis de feedback y métricas",
        ],
    },
    {
        role: "Prácticas Profesionalizantes en IA",
        company: "Tecnom",
        period: "2025",
        current: false,
        description: "Clasificación y análisis de datos con inteligencia artificial.",
        items: [
            "Clasificación y análisis de imágenes",
            "Análisis de conversaciones con IA",
            "Desarrollo de indicadores sobre chats reales",
        ],
    },
];

const education = [
    {
        degree: "Ingeniería en Computación",
        institution: "Universidad Nacional de La Plata (UNLP)",
        period: "2017 - 2025",
    },
    {
        degree: "Técnico Electrónico",
        institution: "Albert Thomas",
        period: "2009 - 2016",
    },
];

const projects = [
    {
        title: "Control por Voz con Home Assistant",
        description: "Sistema de control de iluminación por voz usando Whisper IA local y arquitectura IoT.",
        role: "Taller de Proyecto II - UNLP",
        year: "2024",
        tags: ["Whisper IA", "IoT", "Docker", "WebSocket", "UDP"],
        github: "https://github.com/tpII/2024-G3-CONTROL-VOZ-HOME-ASSISTANT",
        teamSize: "4 integrantes",
    },
    {
        title: "Sistema de Recomendación de Compañeros",
        description: "Aplicación fullstack dockerizada para recomendar compañeros de alquiler basado en 14 características de convivencia.",
        role: "Proyecto Personal",
        year: "2025",
        tags: ["Python", "SQL", "FastAPI", "Data Analysis"],
        github: "https://github.com/nicopache97/rental-recommendation-system",
        badge: "EN DESARROLLO",
    },
    {
        title: "Comparación de Grandes Vectores",
        description: "SpeedTest en C con MPI y Pthreads, análisis de speedup y escalabilidad en arquitectura cluster.",
        role: "Sistemas Distribuidos y Paralelos - UNLP",
        year: "2024",
        tags: ["C", "MPI", "Pthreads", "Bash", "Cluster"],
        github: "https://github.com/notBraii/SDP-TP-final",
        teamSize: "2 integrantes",
    },
    {
        title: "Sistema de Control PID con Monitoreo",
        description: "Control PID sobre sensor de luz con compensación LED y comunicación TCP con ESP32.",
        role: "Arquitectura Avanzada - UNLP",
        year: "2024",
        tags: ["Arduino", "ESP32", "NodeJS", "Control PID", "IoT"],
        github: "https://github.com/nicopache97/TCP-Monitoring-Sistem",
        teamSize: "2 integrantes",
    },
    {
        title: "Sable Láser - Edu-CIAA-NXP",
        description: "Programación en C sobre arquitectura Cortex M4/M0 con diseño de dos PCB personalizadas.",
        role: "Taller de Proyecto I - UNLP",
        year: "2023",
        tags: ["C", "Microcontroladores", "Sensores", "PCB"],
        github: "https://github.com/augustobor/Taller1-EDU-CIAA",
        teamSize: "5 integrantes",
    },
    {
        title: "Sistema de Indicadores en Conversaciones",
        description: "Clasificación de imágenes y análisis multimodal de conversaciones con generación de indicadores estadísticos.",
        role: "Tecnom",
        year: "2025",
        tags: ["NextJS", "OpenAI API", "Vercel"],
        badge: "PRIVADO",
    },
    {
        title: "Repositorio Deep Learning",
        description: "Notebooks Jupyter dockerizados con CI/CD y publicación automática en Docker Hub.",
        role: "UNLP",
        year: "2024",
        tags: ["Python", "Docker", "GitHub Actions", "Jupyter"],
        github: "https://github.com/nicopache97/UNLP-deepLerning",
    },
    {
        title: "AlquilApp",
        description: "WebApp Ruby on Rails desarrollada con metodología Scrum y rotación de Scrum Master.",
        role: "Ingeniería de Software - UNLP",
        year: "2022",
        tags: ["Ruby on Rails", "JS", "HTML5", "SCSS", "Scrum"],
        github: "https://github.com/nicopache97/UNLP-IS-Alquilapp",
        teamSize: "3 integrantes",
    },
];

const courses = [
    "Space Apps Challenge - NASA (2019)",
    "Python for Data Science, AI and Development - IBM/Coursera (2024)",
    "Seminario Blockchain Industria 3.0 - CPCIBA y UPCN (2018)",
    "Fundamentos de Power BI - Santander Open Academy (2025)",
    "Curso CNC Fresado y Torno - Albert Thomas (2014)",
];

const activities = [
    "Ayudantía Ad Honorem en Circuitos Digitales y Microcontroladores (UNLP 2024)",
    "Ayudantía Ad Honorem en Taller de Proyecto I (UNLP 2024)",
    "Clases particulares: Sistemas de Comunicaciones, Control, Electrónica (2023-2024)",
    "Desarrollo en 'Mapero con sensor láser SLAM' - Club de Robótica UNLP (2017)",
    "Participación en Usina de Ideas - Proyecto 'Roppi' (2024)",
];

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Navigation */}
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
                                    href={`#${["hero", "about", "expertise", "journey", "projects"][i]}`}
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

            {/* Hero Section */}
            <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="flex-1 space-y-6">
                            <div className="flex items-center gap-3">
                                <Avatar className="w-16 h-16 border-2 border-primary/20">
                                    <AvatarFallback className="bg-gradient-to-br from-primary to-purple-600 text-white text-xl font-bold">
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
                                    <a href="#projects">
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

            {/* About Section */}
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
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

            {/* Expertise Section */}
            <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
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

            {/* Journey Section */}
            <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
                <div className="max-w-6xl mx-auto">
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

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Proyectos Destacados</h2>
                    <p className="text-muted-foreground mb-12 max-w-2xl">
                        Desde sistemas IoT hasta plataformas de IA, estos son proyectos que he diseñado y desarrollado
                        en contextos académicos y profesionales.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
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

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
                <div className="max-w-4xl mx-auto text-center">
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
                            (2974) 055402
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
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
        </main>
    );
}
