import radipulsePowerScreenshot from "../assets/radipulsepower_screenshot_1.webp";

export interface Project {
    title: string;
    description: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    year: string | number;
    longDescription?: string;
    highlights?: string[];
    screenshots?: string[];
}

const projects: Project[] = [
    {
        title: "Portfolio",
        description:
            "This portfolio — built with React, Vite, and Tailwind CSS v4. Features dark/light theme switching with Context API and localStorage persistence.",
        tags: ["Personal", "React", "TypeScript", "Tailwind CSS", "Vite"],
        year: "2026",
        longDescription:
            "A minimalist personal portfolio designed to showcase my projects and skills. Built entirely from scratch, relying on Tailwind CSS v4 and CSS custom properties for theming.",
        highlights: [
            "Dark/light theme with localStorage persistence and no flash on load",
            "Project detail modals with smooth Framer Motion animations",
            "Fully responsive layout with scroll-based navigation highlighting",
        ],
    },
    {
        title: "RadiPulse Power",
        description:
            "Marketing and product website for the RadiPulse VPP-15 — a modular LiFePO4 virtual power pack with real-time IoT monitoring. A division of Katz Water Technologies.",
        tags: ["React", "Tailwind CSS", "TypeScript", "Vite"],
        liveUrl: "https://www.radipulsepower.com/",
        year: "2025",
        longDescription:
            "A marketing and product website for RadiPulse Power, a division of Katz Water Technologies. The site presents the VPP-15, a modular LiFePO4 virtual power pack designed for off-grid and hybrid energy applications with real-time IoT monitoring capabilities.",
        highlights: [
            "Clean, conversion-focused marketing layout with product feature sections",
            "Built with React, TypeScript, Vite, and Tailwind CSS",
            "Responsive design optimized for all screen sizes",
        ],
        screenshots: [radipulsePowerScreenshot],
    },
    {
        title: "KMonit",
        description:
            "IoT water tank monitoring platform with ESP32 hardware, edge processing, MQTT alerts, and web & mobile dashboards. A division of Katz Water Technologies.",
        tags: ["ESP32", "IoT", "React", "Mobile", "Vite"],
        liveUrl: "https://kmonit.org/",
        year: "2026",
        longDescription:
            "KMonit is an industrial IoT water tank monitoring platform developed for Katz Water Technologies. It combines ESP32-based hardware with cloud infrastructure to provide real-time tank level monitoring, predictive alerts, and multi-site management.",
        highlights: [
            "ESP32 hardware with edge processing for low-latency local decisions",
            "Supports LoRaWAN, NB-IoT, and LTE connectivity for remote deployments",
            "MQTT-based alert system for threshold breaches and anomaly detection",
            "Web and mobile dashboards for multi-tank, multi-site management",
        ],
    },
    {
        title: "Parkour Game",
        description:
            "A 2.5D side-scrolling parkour game in early development. Built with Godot, using 3D models and animations from Mixamo.",
        tags: ["Personal", "WIP", "Godot", "GDScript", "Blender", "Game Dev"],
        year: "2024",
        longDescription:
            "A personal game development project — a 2.5D side-scrolling parkour game built in Godot 4. The game features fluid movement mechanics with wall-running, vaulting, and sliding. Character models and animations sourced from Mixamo and modified in Blender.",
        highlights: [
            "Godot 4 with GDScript for game logic and physics-based movement",
            "Character models and animations from Mixamo, modified in Blender",
            "2.5D perspective combining 3D visuals with 2D gameplay",
            "Work in progress — movement system and first level in development",
        ],
    },
    {
        title: "SmartPlug",
        description:
            "React Native Android app paired with an ESP-01 smart plug for remote power control and scheduling.",
        tags: ["Thesis", "React Native", "Android", "ESP-01", "IoT"],
        year: "2024",
        longDescription:
            "Thesis project — a smart plug system built around the ESP-01 (ESP8266) Wi-Fi module, paired with a React Native Android app for remote control. Enables remote power toggling and automated scheduling via a mobile interface.",
        highlights: [
            "ESP-01 (ESP8266) firmware for Wi-Fi communication and relay control",
            "React Native Android app for remote power toggling",
            "Automated scheduling with time-based triggers",
            "Presented and defended as undergraduate thesis project",
        ],
    },
    {
        title: "Pangasinan Treasure",
        description:
            "E-commerce platform showcasing and selling local Pangasinan products with a clean, accessible storefront. Built with vanilla JavaScript, HTML, and CSS.",
        tags: ["Commissioned", "E-commerce", "JavaScript", "HTML", "CSS"],
        year: "2024",
        longDescription:
            "A commissioned e-commerce web application built to promote and sell locally sourced products from Pangasinan, Philippines. Implemented using plain (vanilla) JavaScript, semantic HTML, and modern CSS without front-end frameworks, focusing on accessibility and performance.",
        highlights: [
            "Product catalog with filtering and search",
            "Built with vanilla JavaScript, HTML, and CSS for a fast, accessible experience",
            "Cart and checkout flow with order management",
        ],
    },
    {
        title: "EggQI",
        description:
            "Egg quality inspection system using an ESP32 camera and candling technique, with an Android companion app for viewing results.",
        tags: ["Commissioned", "ESP32", "Arduino", "C++", "IoT"],
        year: "2024",
        longDescription:
            "A commissioned egg quality inspection system that replicates the candling process — using a light source beneath the eggs and an ESP32 camera to capture and analyze the images. Results are classified by grade and displayed on an Android app built with MIT App Inventor.",
        highlights: [
            "ESP32 camera module captures candled egg images for quality analysis",
            "Light-based candling setup for non-destructive freshness detection",
            "Android companion app built with MIT App Inventor",
        ],
    },
];

projects.sort((a, b) => Number(b.year) - Number(a.year));

export default projects;
