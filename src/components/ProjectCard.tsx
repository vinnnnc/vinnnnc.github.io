import { useRef, useState } from "react";
import Badge from "./Badge";
import type { Project } from "../data/projects";
import GithubIcon from "./ui/github-icon";
import ExternalLinkIcon from "./ui/external-link-icon";
import ExpandIcon from "./ui/expand-icon";

interface ProjectCardProps extends Project {
    onClick?: () => void;
}

const HOVER_DELAY_MS = 400;

export default function ProjectCard({
    title,
    description,
    tags,
    liveUrl,
    githubUrl,
    year,
    screenshots,
    onClick,
}: ProjectCardProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [hovered, setHovered] = useState(false);
    const [showBelow, setShowBelow] = useState(false);
    const githubRef = useRef<any>(null);
    const externalRef = useRef<any>(null);
    const expandRef = useRef<any>(null);

    function handleMouseEnter() {
        // trigger icon animations immediately when card is hovered
        githubRef.current?.startAnimation?.();
        externalRef.current?.startAnimation?.();
        expandRef.current?.startAnimation?.();
        hoverTimer.current = setTimeout(() => {
            const el = containerRef.current;
            if (el) {
                const rect = el.getBoundingClientRect();
                const previewHeight = rect.width * (9 / 16) + 10;
                setShowBelow(rect.top < previewHeight);
            }
            setHovered(true);
        }, HOVER_DELAY_MS);
    }

    function handleMouseLeave() {
        if (hoverTimer.current) {
            clearTimeout(hoverTimer.current);
            hoverTimer.current = null;
        }
        // stop icon animations when leaving
        githubRef.current?.stopAnimation?.();
        externalRef.current?.stopAnimation?.();
        expandRef.current?.stopAnimation?.();
        setHovered(false);
    }

    const previewStyle: React.CSSProperties = showBelow
        ? {
              top: "calc(100% + 10px)",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(-4px)",
          }
        : {
              bottom: "calc(100% + 10px)",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(4px)",
          };

    return (
        <div
            ref={containerRef}
            className="relative h-full group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Screenshot hover preview — desktop only */}
            <div
                className="hidden sm:block absolute left-0 right-0 z-40 pointer-events-none transition-[opacity,transform] duration-200 ease-out"
                style={previewStyle}
            >
                <div className="w-full aspect-video rounded-md border border-line bg-card overflow-hidden shadow-lg">
                    {screenshots?.[0] ? (
                        <img
                            src={screenshots[0]}
                            alt={`${title} screenshot`}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-muted opacity-30"
                            >
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                            <span className="font-mono text-xs text-muted opacity-30">preview coming soon</span>
                        </div>
                    )}
                </div>
            </div>

            <article
                className="bg-card border border-line rounded-md p-6 flex flex-col gap-2.5 transition-colors hover:border-line-hover cursor-pointer h-full"
                onClick={onClick}
                role={onClick ? "button" : undefined}
                tabIndex={onClick ? 0 : undefined}
                onKeyDown={onClick ? (e) => (e.key === "Enter" || e.key === " ") && onClick() : undefined}
            >
                <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted tabular-nums">{year}</span>
                    <div className="flex gap-3">
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View source on GitHub"
                                onClick={(e) => e.stopPropagation()}
                                className="text-muted hover:text-heading transition-colors flex items-center p-2 -m-2"
                            >
                                <GithubIcon ref={githubRef} size={15} className="text-current" />
                            </a>
                        )}
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View live project"
                                onClick={(e) => e.stopPropagation()}
                                className="text-muted hover:text-heading transition-colors flex items-center p-2 -m-2"
                            >
                                <ExternalLinkIcon ref={externalRef} size={15} className="text-current" />
                            </a>
                        )}
                    </div>
                </div>
                <h3 className="text-[0.9375rem] font-medium text-heading m-0">{title}</h3>
                <p className="text-[0.825rem] text-muted leading-relaxed grow m-0">{description}</p>
                <ul className="flex flex-wrap gap-1.5 mt-1 p-0 list-none">
                    {tags.map((tag) => (
                        <Badge key={tag} label={tag} />
                    ))}
                </ul>
                {/* Expand icon — appears on card hover, opens modal */}
                <button
                    aria-label="View project details"
                    className="absolute bottom-3 right-3 opacity-0 transition-opacity duration-300 ease-out pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto text-muted hover:text-heading flex items-center p-2 -m-2"
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick?.();
                    }}
                >
                    <ExpandIcon ref={expandRef} size={16} className="text-current" />
                </button>
            </article>
        </div>
    );
}
