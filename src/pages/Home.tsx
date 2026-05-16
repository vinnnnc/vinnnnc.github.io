import { useState, lazy, Suspense } from "react";
import { motion, type Variants } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
const ProjectModal = lazy(() => import("../components/ProjectModal"));
import Badge from "../components/Badge";
import projects, { type Project } from "../data/projects";

const skills = [
    "React",
    "React Native",
    "Next.js",
    "Vite",
    "TypeScript",
    "JavaScript",
    "Java",
    "Python",
    "C++",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "Arduino",
    "ESP",
    "Raspberry Pi",
];

const tools = [
    "Arduino IDE",
    "Android Studio",
    "GitHub",
    "Postman",
    "Figma",
    "Blender",
    "Godot",
    "Photoshop",
    "Audacity",
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <main>
            {/* Hero */}
            <section className="py-28 border-b border-line">
                <div className="max-w-240 mx-auto px-8">
                    <motion.div
                        className="flex items-start justify-between gap-10"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp}>
                            <p className="font-mono text-sm text-muted mb-2.5">Hi, I'm</p>
                            <h1 className="font-mono text-[clamp(2.75rem,7vw,5rem)] font-semibold tracking-tight leading-[1.05] mb-2 text-heading">
                                Vincent Bautista
                            </h1>
                            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-muted font-normal mb-6">
                                Front-End & Embedded Systems Developer
                            </p>
                            <p className="max-w-115 text-[0.9375rem] text-muted leading-[1.75] mb-8">
                                I build web interfaces and embedded systems — from IoT dashboards to
                                microcontroller-based hardware projects. I enjoy turning complex problems into clean,
                                functional experiences.
                            </p>
                            <div className="flex gap-7">
                                <a
                                    href="https://github.com/vinnnnc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted pb-0.5 border-b border-transparent hover:text-heading hover:border-heading transition-[color,border-color]"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vincent-bautista-6a46b3300/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted pb-0.5 border-b border-transparent hover:text-heading hover:border-heading transition-[color,border-color]"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="mailto:vincentbautista.008@gmail.com"
                                    className="text-sm text-muted pb-0.5 border-b border-transparent hover:text-heading hover:border-heading transition-[color,border-color]"
                                >
                                    Email
                                </a>
                                <a
                                    id="hero-resume-link"
                                    href="/Vincent-Bautista-Resume.pdf"
                                    download
                                    className="flex items-center gap-1 text-sm text-muted pb-0.5 border-b border-transparent hover:text-heading hover:border-heading transition-[color,border-color]"
                                >
                                    Resume
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                        {/* <motion.div variants={fadeUp} className="shrink-0 hidden sm:block pt-5">
                            <div className="w-28 h-28 rounded-[28%] border border-line bg-card overflow-hidden flex items-center justify-center">
                                <span className="text-2xl font-semibold text-muted select-none">VB</span>
                                <img
                                    src="/profile.jpg"
                                    alt="Vincent Bautista"
                                    className="absolute w-28 h-28 rounded-[28%] object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                />
                            </div>
                        </motion.div> */}
                    </motion.div>
                </div>
            </section>

            {/* Work */}
            <section id="projects" className="py-20 border-b border-line">
                <div className="max-w-240 mx-auto px-8">
                    <h2 className="font-mono text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-muted mb-10">
                        Projects
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3.5">
                        {projects.map((project) => (
                            <motion.div
                                key={project.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                                className="h-full"
                            >
                                <ProjectCard {...project} onClick={() => setSelectedProject(project)} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-20 border-b border-line">
                <motion.div
                    className="max-w-155 mx-auto px-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                >
                    <h2 className="font-mono text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-muted mb-10">
                        About
                    </h2>
                    <div className="flex flex-col gap-4 mb-10">
                        <p className="text-[0.9375rem] text-muted leading-[1.75]">
                            I'm a front-end and embedded systems developer with hands-on experience building web
                            interfaces for IoT products and industrial monitoring systems. I have a passion for both
                            software and hardware — Raspberry Pi and microcontrollers, and anything that bridges the
                            physical and digital world. Currently open to opportunities.
                        </p>
                        <p className="text-[0.9375rem] text-muted leading-[1.75]">
                            Outside of work, I explore game development, 3D modeling, and tinkering with
                            microcontrollers and embedded systems. I also enjoy electronics — repairing appliances,
                            building custom LED setups, basic phone and laptop hardware repairs, and PC building. I'm
                            always learning something at the intersection of code and the real world .
                        </p>
                    </div>
                    <p className="text-[0.8125rem] text-muted mb-3.5">Technologies I work with</p>
                    <ul className="flex flex-wrap gap-2 p-0 list-none">
                        {skills.map((skill) => (
                            <Badge key={skill} label={skill} variant="chip" />
                        ))}
                    </ul>
                    <p className="text-[0.8125rem] text-muted mb-3.5 mt-6">Other tools I use</p>
                    <ul className="flex flex-wrap gap-2 p-0 list-none">
                        {tools.map((tool) => (
                            <Badge key={tool} label={tool} variant="chip" />
                        ))}
                    </ul>
                </motion.div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 border-b border-line">
                <motion.div
                    className="max-w-155 mx-auto px-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                >
                    <h2 className="font-mono text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-muted mb-10">
                        Contact
                    </h2>
                    <p className="text-[0.9375rem] text-muted leading-[1.75] mb-8">
                        Have a project in mind or just want to chat? My inbox is always open.
                    </p>
                    <a
                        href="mailto:vincentbautista.008@gmail.com"
                        className="inline-block text-sm font-medium bg-heading text-page px-6 py-2.5 rounded-md hover:opacity-85 transition-opacity"
                    >
                        Say Hello
                    </a>
                </motion.div>
            </section>

            <footer className="py-10">
                <div className="max-w-240 mx-auto px-8">
                    <p className="text-[0.8125rem] text-muted text-center">
                        Designed &amp; built by <span className="text-heading">Vincent Bautista</span> &copy;{" "}
                        <span className="font-mono">{new Date().getFullYear()}</span>
                    </p>
                </div>
            </footer>
            <Suspense fallback={null}>
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            </Suspense>
        </main>
    );
}
