import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const NAV_SECTIONS = ["projects", "about", "contact"] as const;
type Section = (typeof NAV_SECTIONS)[number];

function useActiveSection(): Section | null {
    const [active, setActive] = useState<Section | null>(null);

    useEffect(() => {
        function update() {
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
            if (atBottom) {
                setActive("contact");
                return;
            }
            const midpoint = window.scrollY + window.innerHeight * 0.4;
            let current: Section | null = null;
            for (const id of NAV_SECTIONS) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= midpoint) current = id;
            }
            setActive(current);
        }

        update();
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, []);

    return active;
}

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function SunIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    );
}

export default function AppNav() {
    const { theme, toggleTheme } = useTheme();
    const activeSection = useActiveSection();

    return (
        <header className="sticky top-0 z-50 bg-page border-b border-line h-16 flex items-center transition-[background-color,border-color] duration-200">
            <div className="w-full max-w-240 mx-auto px-8 flex items-center justify-between">
                <a
                    href="/#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`text-sm font-semibold tracking-[0.06em] transition-colors ${activeSection === null ? "text-heading" : "text-muted hover:text-heading"}`}
                >
                    VB
                </a>
                <div className="flex items-center gap-6">
                    <nav className="flex gap-8">
                        {NAV_SECTIONS.map((id) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo(id);
                                }}
                                className={`text-sm transition-colors capitalize ${
                                    activeSection === id ? "text-heading" : "text-muted hover:text-heading"
                                }`}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        ))}
                    </nav>
                    <a
                        href="/resume.pdf"
                        download
                        className="hidden sm:flex items-center gap-1 text-sm text-muted hover:text-heading transition-colors"
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
                    <button
                        className="flex items-center justify-center w-8 h-8 rounded-md border border-line bg-transparent text-muted hover:text-heading hover:border-muted transition-colors cursor-pointer shrink-0"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    >
                        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                    </button>
                </div>
            </div>
        </header>
    );
}
