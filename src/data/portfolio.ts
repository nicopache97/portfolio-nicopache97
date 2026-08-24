import { Brain, Code2, Cpu, Settings, LucideIcon, Zap, Server } from "lucide-react";

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

export interface PortfolioData {
    hero: {
        title: string[];
        description: string;
        location: string;
        specialties: string[];
        status: string;
    };
    about: {
        title: string[];
        description: string[];
        highlights: { icon: LucideIcon; title: string; desc: string }[];
    };
    stats: Stat[];
    skills: Skills;
    expertiseCards: ExpertiseCard[];
    projects: Project[];
}

// --- DATA SETS ---

export const defaultPortfolio: PortfolioData = {
    hero: {
        title: ["Prompt Engineer", "& AI Developer"],
        description: "Desarrollo soluciones creativas y automatizadas para la industria, especializándome en Prompt Engineering, Agentic AI y sistemas embebidos.",
        location: "Neuquen, Argentina",
        specialties: ["Prompt Engineering", "Agentic AI", "Sistemas Embebidos", "Full-Stack Dev"],
        status: "Disponible para consultorías",
    },
    about: {
        title: ["Conectando", "Tecnología", "con", "Soluciones Reales"],
        description: [
            "Joven profesional apasionado por la tecnología y el trabajo colaborativo para desarrollar soluciones creativas y automatizadas para la industria.",
            "Con formación en Ingeniería en Computación, combino experiencia técnica en IA, sistemas embebidos y desarrollo full-stack con habilidades comunicacionales para traducir necesidades de clientes en soluciones efectivas."
        ],
        highlights: [
            { icon: Brain, title: "Prompt Engineering", desc: "Creación y optimización de prompts para sistemas de IA conversacional." },
            { icon: Zap, title: "Desarrollo Agentic AI", desc: "Arquitecturas multi-agente y workflows automatizados." },
            { icon: Server, title: "Sistemas Embebidos", desc: "Programación de microcontroladores y sistemas de control." },
        ]
    },
    stats: [
        { value: "3+", label: "Años Exp" },
        { value: "10+", label: "Proyectos" },
        { value: "99+", label: "Clientes IA" },
        { value: "5+", label: "Equipos" },
    ],
    skills: {
        languages: ["C", "Python", "NodeJS", "NextJS", "SQL", "Ruby On Rails"],
        devops: ["Docker", "Vercel", "Linux", "Bash Script", "GitHub Actions"],
        ai: ["Prompt Engineering", "Autonomous Agents", "LangChain", "MCP", "N8N", "OpenAI API", "Whisper IA", "Data Analysis"],
        embedded: ["IoT", "ESP32", "Wemos D1", "Edu-CIAA-NXP", "PLC Logo", "PID", "Sistemas de Control"],
    },
    expertiseCards: [
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
    ],
    projects: [
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
        },
        {
            title: "AlquilApp",
            description: "WebApp Ruby on Rails desarrollada con metodología Scrum y rotación de Scrum Master.",
            role: "Ingeniería de Software - UNLP",
            year: "2022",
            tags: ["Ruby on Rails", "JS", "HTML5", "SCSS"],
            teamSize: "3 integrantes",
        },
    ]
};

export const oilPortfolio: PortfolioData = {
    hero: {
        title: ["Ingeniería & IA", "para la Industria"],
        description: "Soluciones tecnológicas de monitoreo, automatización e IA aplicadas al sector energético y procesos industriales.",
        location: "Cipolletti, Río Negro / Remoto",
        specialties: ["IA Industrial & Agentes", "IIoT & Monitoreo Remoto", "Sistemas de Control", "Data Analytics"],
        status: "listen to offers",
    },
    about: {
        title: ["Optimizando la", "Industria", "a través del", "Software & Datos"],
        description: [
            "Ingeniero en Computación enfocado en la aplicación de tecnologías de vanguardia para la resolución de problemas críticos en el sector energético e industrial.",
            "Con sólida formación técnica y experiencia en IA aplicada e IIoT, busco integrar soluciones inteligentes que optimicen la eficiencia operativa y el monitoreo en yacimientos como Vaca Muerta."
        ],
        highlights: [
            { icon: Brain, title: "IA & Data Analytics", desc: "Desarrollo de modelos y asistentes de IA para análisis de datos operativos y decisionales." },
            { icon: Zap, title: "Monitoreo en Tiempo Real", desc: "Implementación de dashboards y sistemas de telemetría para supervisión remota." },
            { icon: Server, title: "Sistemas Críticos", desc: "Programación robusta de microcontroladores y sistemas de control industrial." },
        ]
    },
    stats: [
        { value: "Ing.", label: "Computación" },
        { value: "10+", label: "Proyectos Tech" },
        { value: "Vaca Muerta", label: "Región" },
        { value: "IIoT", label: "Sensado/Control" },
    ],
    skills: {
        languages: ["Python", "SQL", "C", "NodeJS", "NextJS", "Bash Script"],
        devops: ["Docker", "Linux", "CI/CD", "Vercel", "GitHub Actions"],
        ai: ["Industrial AI", "Predictive Analytics", "Prompt Engineering", "Agentic AI", "LangChain", "Data Analysis", "Power BI"],
        embedded: ["IIoT", "ESP32", "Sistemas de Control PID", "PLC Logo", "Protocolos Industriales (TCP/UDP)", "Telemetría"],
    },
    expertiseCards: [
        {
            icon: Brain,
            title: "IA Aplicada a la Industria",
            description: "Desarrollo de asistentes inteligentes y sistemas multi-agente para optimización de procesos y análisis de grandes volúmenes de datos.",
            items: [
                "Optimización de workflows operativos con LLMs",
                "Sistemas RAG para bases de conocimiento técnicas",
                "Análisis predictivo sobre flujos de trabajo",
                "Integración de IA en sistemas de decisión en tiempo real",
            ],
            tags: ["Industrial AI", "Agentic Workflows", "LangChain", "Data Analytics"],
            badge: "VACA MUERTA READY",
        },
        {
            icon: Cpu,
            title: "Industrial IoT & Sistemas de Control",
            description: "Integración de hardware y software para el monitoreo remoto y control de variables en tiempo real.",
            items: [
                "Sistemas de monitoreo remoto (Telemetría)",
                "Control de procesos industriales (PID, PLCs)",
                "Conectividad robusta (TCP/UDP, MQTT, WebSockets)",
                "Diseño de firmware para nodos de sensado",
            ],
            tags: ["IIoT", "ESP32", "Sistemas de Control", "Telemetría"],
            badge: "CORE ENGINEERING",
        },
        {
            icon: Code2,
            title: "Desarrollo de Software Industrial",
            description: "Construcción de dashboards de monitoreo y herramientas de software robustas para entornos críticos.",
            items: [
                "Desarrollo Full-Stack (Python, NextJS, SQL)",
                "Visualización de datos en tiempo real",
                "Arquitecturas escalables y seguras",
                "Automatización de reportes (Power BI, Scripting)",
            ],
            tags: ["Python", "FastAPI", "SQL", "NextJS", "Power BI"],
        },
        {
            icon: Settings,
            title: "Infraestructura & Automatización",
            description: "Implementación de entornos dockerizados y despliegue continuo para alta disponibilidad.",
            items: [
                "Contenerización de servicios (Docker)",
                "Automatización de procesos con Bash & Python",
                " pipelines de CI/CD para software crítico",
                "Administración de servidores Linux",
            ],
            tags: ["Docker", "Linux", "CI/CD", "Bash"],
        },
    ],
    projects: [
        {
            title: "HMI Industrial con Control por Voz",
            description: "Interfaz humano-máquina para control de entornos críticos mediante voz, utilizando Whisper IA local y protocolos IoT.",
            role: "Taller de Proyecto II - UNLP",
            year: "2024",
            tags: ["Industrial HMI", "Whisper IA", "IoT", "Docker", "UDP"],
            github: "https://github.com/tpII/2024-G3-CONTROL-VOZ-HOME-ASSISTANT",
            teamSize: "4 integrantes",
        },
        {
            title: "Computación de Alto Rendimiento (HPC)",
            description: "Análisis de speedup y escalabilidad en arquitectura cluster con MPI/Pthreads para procesamiento masivo de datos.",
            role: "Sistemas Distribuidos y Paralelos - UNLP",
            year: "2024",
            tags: ["HPC", "C", "MPI", "Pthreads", "Cluster Computing"],
            github: "https://github.com/notBraii/SDP-TP-final",
            teamSize: "2 integrantes",
        },
        {
            title: "Monitoreo Remoto & Control PID Industrial",
            description: "Sistema de control de lazo cerrado con monitoreo vía TCP sobre ESP32, adaptable para sensado de variables de proceso.",
            role: "Arquitectura Avanzada - UNLP",
            year: "2024",
            tags: ["Control Industrial", "ESP32", "NodeJS", "Control PID", "IIoT"],
            github: "https://github.com/nicopache97/TCP-Monitoring-Sistem",
            teamSize: "2 integrantes",
        },
        {
            title: "Board de Análisis e Indicadores Conversacionales",
            description: "Clasificación de conversaciones agenticas e imágenes para generación de indicadores estadísticos para toma de decisiones y ajustes en los sistemas.",
            role: "Tecnom",
            year: "2025",
            tags: ["Industrial AI", "NextJS", "OpenAI API", "Data Analytics"],
            badge: "PRIVADO",
        },
    ]
};

// --- COMMON DATA ---

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
