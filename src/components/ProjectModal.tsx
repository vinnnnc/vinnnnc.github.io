import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import Badge from "./Badge";
import type { Project } from "../data/projects";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    return (
        <Dialog.Root open={!!project} onOpenChange={(open) => !open && onClose()}>
            <AnimatePresence>
                {project && (
                    <Dialog.Portal forceMount>
                        {/* Backdrop */}
                        <Dialog.Overlay asChild>
                            <motion.div
                                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            />
                        </Dialog.Overlay>

                        {/* Panel */}
                        <Dialog.Content asChild>
                            <motion.div
                                className="fixed z-50 inset-x-4 top-[50%] translate-y-[-50%] mx-auto
                                           max-w-160 max-h-[85vh] overflow-y-auto
                                           bg-card border border-line rounded-lg p-8 outline-none"
                                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 16, scale: 0.97 }}
                                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4 mb-6">
                                    <div>
                                        <Dialog.Title className="text-lg font-semibold text-heading m-0">
                                            {project.title}
                                        </Dialog.Title>
                                        <span className="text-xs text-muted tabular-nums mt-1 block">
                                            {project.year}
                                        </span>
                                    </div>
                                    <Dialog.Close
                                        className="text-muted hover:text-heading transition-colors shrink-0 mt-0.5"
                                        aria-label="Close"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </Dialog.Close>
                                </div>

                                {/* Screenshots */}
                                {project.screenshots && project.screenshots.length > 0 && (
                                    <div className="flex gap-3 overflow-x-auto pb-2 mb-6 custom-scrollbar">
                                        {project.screenshots.map((src, i) => (
                                            <img
                                                key={i}
                                                src={src}
                                                alt={`${project.title} screenshot ${i + 1}`}
                                                className="h-40 rounded-md border border-line object-cover shrink-0"
                                                loading="lazy"
                                            />
                                        ))}
                                    </div>
                                )}

                                {/* Long description */}
                                <p className="text-[0.9rem] text-muted leading-[1.75] mb-6">
                                    {project.longDescription ?? project.description}
                                </p>

                                {/* Highlights */}
                                {project.highlights && project.highlights.length > 0 && (
                                    <div className="mb-6">
                                        <p className="text-[0.75rem] font-medium tracking-widest uppercase text-muted mb-3">
                                            Highlights
                                        </p>
                                        <ul className="flex flex-col gap-2 p-0 list-none">
                                            {project.highlights.map((point, i) => (
                                                <li
                                                    key={i}
                                                    className="text-[0.875rem] text-muted leading-relaxed flex gap-2.5"
                                                >
                                                    <span className="text-line-hover mt-0.75 shrink-0">—</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Tags */}
                                <ul className="flex flex-wrap gap-1.5 mb-6 p-0 list-none">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} label={tag} />
                                    ))}
                                </ul>

                                {/* Links */}
                                {(project.githubUrl || project.liveUrl) && (
                                    <div className="flex gap-4 pt-4 border-t border-line">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-muted pb-0.5 border-b border-transparent hover:text-heading hover:border-heading transition-[color,border-color]"
                                            >
                                                GitHub →
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-muted pb-0.5 border-b border-transparent hover:text-heading hover:border-heading transition-[color,border-color]"
                                            >
                                                Live Site →
                                            </a>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    );
}
