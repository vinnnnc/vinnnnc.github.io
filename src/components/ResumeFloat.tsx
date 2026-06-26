import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FileDescriptionIcon from "./ui/file-description-icon";

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

    const iconRef = useRef<any>(null);

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
                    onMouseEnter={() => iconRef.current?.startAnimation?.()}
                    onMouseLeave={() => iconRef.current?.stopAnimation?.()}
                >
                    <FileDescriptionIcon
                        ref={iconRef}
                        size={16}
                        className="shrink-0 text-current transform transition-transform duration-200 group-hover:rotate-6"
                    />
                    <span className="font-mono text-sm leading-none overflow-hidden max-w-0 group-hover:max-w-20 opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap ml-0 group-hover:ml-2">
                        Resume
                    </span>
                </motion.a>
            )}
        </AnimatePresence>
    );
}
