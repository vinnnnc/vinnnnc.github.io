import { useEffect, useState, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import MoonIcon from "./ui/moon-icon";
import BrightnessDownIcon from "./ui/brightness-down-icon";

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

export default function AppNav() {
    const { theme, toggleTheme } = useTheme();
    const activeSection = useActiveSection();
    const themeIconRef = useRef<any>(null);

    const handleThemeToggle = () => {
        themeIconRef.current?.startAnimation?.();
        toggleTheme();
    };

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
                    <button
                        className="flex items-center justify-center w-8 h-8 rounded-md border border-line bg-transparent text-muted hover:text-heading hover:border-muted transition-colors cursor-pointer shrink-0 group"
                        onClick={handleThemeToggle}
                        onMouseEnter={() => themeIconRef.current?.startAnimation?.()}
                        onMouseLeave={() => themeIconRef.current?.stopAnimation?.()}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    >
                        {theme === "dark" ? (
                            <BrightnessDownIcon ref={themeIconRef} size={16} className="text-current" />
                        ) : (
                            <MoonIcon ref={themeIconRef} size={16} className="text-current" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
