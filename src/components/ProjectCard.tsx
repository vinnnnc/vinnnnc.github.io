import Badge from "./Badge";
import type { Project } from "../data/projects";

interface ProjectCardProps extends Project {
    onClick?: () => void;
}

export default function ProjectCard({ title, description, tags, liveUrl, githubUrl, year, onClick }: ProjectCardProps) {
    return (
        <article
            className="bg-card border border-line rounded-md p-6 flex flex-col gap-2.5 transition-colors hover:border-line-hover cursor-pointer"
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={onClick ? (e) => (e.key === "Enter" || e.key === " ") && onClick() : undefined}
        >
            <div className="flex items-center justify-between">
                <span className="text-xs text-muted tabular-nums">{year}</span>
                <div className="flex gap-3">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View source on GitHub"
                            className="text-muted hover:text-heading transition-colors flex items-center p-2 -m-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View live project"
                            className="text-muted hover:text-heading transition-colors flex items-center p-2 -m-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
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
        </article>
    );
}
