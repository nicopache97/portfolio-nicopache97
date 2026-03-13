import { Brain, Code2, Cpu, Settings, LucideIcon } from "lucide-react";

export interface Stat {
    value: string;
    label: string;
}

export interface Skills {
    languages: string[];
    devops: string[];
    ai: string[];
    embedded: string[];
}

export interface ExpertiseCard {
    icon: LucideIcon;
    title: string;
    description: string;
    items: string[];
    tags: string[];
    badge?: string;
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    current: boolean;
    description: string;
    items: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
}

export interface Project {
    title: string;
    description: string;
    role: string;
    year: string;
    tags: string[];
    github?: string;
    badge?: string;
    teamSize?: string;
}

export const stats: Stat[] = [
    { value: "3+", label: "Años Exp" },
    { value: "10+", label: "Proyectos" },
    { value: "90+", label: "Clientes IA" },
    { value: "5+", label: "Equipos" },
];

export const skills: Skills = {
    languages: ["C", "Python", "NodeJS", "NextJS", "SQL", "Ruby On Rails"],
    devops: ["Docker", "Vercel", "Linux", "Bash Script", "GitHub Actions"],
    ai: ["Prompt Engineering", "Autonomous Agents", "LangChain", "MCP", "N8N", "OpenAI API", "Whisper IA", "Data Analysis"],
    embedded: ["IoT", "ESP32", "Wemos D1", "Edu-CIAA-NXP", "PLC Logo", "PID", "Sistemas de Control"],
};

export const expertiseCards: ExpertiseCard[] = [
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

export const experience: Experience[] = [
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

export const education: Education[] = [
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

export const projects: Project[] = [
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

export const courses: string[] = [
    "Space Apps Challenge - NASA (2019)",
    "Python for Data Science, AI and Development - IBM/Coursera (2024)",
    "Seminario Blockchain Industria 3.0 - CPCIBA y UPCN (2018)",
    "Fundamentos de Power BI - Santander Open Academy (2025)",
    "Curso CNC Fresado y Torno - Albert Thomas (2014)",
];

export const activities: string[] = [
    "Ayudantía Ad Honorem en Circuitos Digitales y Microcontroladores (UNLP 2024)",
    "Ayudantía Ad Honorem en Taller de Proyecto I (UNLP 2024)",
    "Clases particulares: Sistemas de Comunicaciones, Control, Electrónica (2023-2024)",
    "Desarrollo en 'Mapero con sensor láser SLAM' - Club de Robótica UNLP (2017)",
    "Participación en Usina de Ideas - Proyecto 'Roppi' (2024)",
];
