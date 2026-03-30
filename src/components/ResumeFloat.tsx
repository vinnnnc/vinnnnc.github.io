import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeFloat() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show FAB exactly when the hero resume link scrolls out of view
        const heroLink = document.getElementById("hero-resume-link");
        if (!heroLink) return;
        // If header covers the hero link (sticky header), treat it as out-of-view
        const header = document.querySelector("header");
        const headerHeight = header ? header.getBoundingClientRect().height : 64; // fallback to 64px
        const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
            threshold: 0,
            rootMargin: `-${headerHeight}px 0px 0px 0px`,
        });
        observer.observe(heroLink);
        return () => observer.disconnect();
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.a
                    href="/Vincent-Bautista-Resume.pdf"
                    download
                    aria-label="Download Resume"
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 80, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    className="group fixed bottom-6 fab z-50 flex items-center bg-heading text-page rounded-full py-3 px-3 shadow-lg cursor-pointer"
                >
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
                        className="shrink-0"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span className="font-mono text-sm leading-none overflow-hidden max-w-0 group-hover:max-w-20 opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap ml-0 group-hover:ml-2">
                        Resume
                    </span>
                </motion.a>
            )}
        </AnimatePresence>
    );
}
