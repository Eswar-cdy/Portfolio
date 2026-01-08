'use client';

import Link from 'next/link';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string | React.ReactNode;
    tags: string[];
    link?: string;      // Make optional
    githubLink?: string; // Add separate GitHub link
    color?: string;     // formatting color class
    image?: string;     // Optional image
}

export default function ProjectCard({ title, description, tags, link, githubLink, color = "bg-blue-500", image }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-800 flex flex-col h-full"
        >
            {/* Gradient Top Bar or Image Overlay */}
            <div className={`h-2 w-full ${color}`} />

            <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-[var(--primary)] transition-colors">
                        {title}
                    </h3>

                    {/* Access Links Top-Right */}
                    <div className="flex gap-3">
                        {githubLink && (
                            <Link href={githubLink} target="_blank" className="p-2 text-gray-500 hover:text-[var(--foreground)] hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-all" title="View Code">
                                <Github size={20} />
                            </Link>
                        )}
                        {link && (
                            <Link href={link} target="_blank" className="p-2 text-gray-500 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 rounded-full transition-all" title="View Live">
                                <ExternalLink size={20} />
                            </Link>
                        )}
                    </div>
                </div>

                <div className="text-gray-600 dark:text-gray-400 mb-6 flex-1 text-base leading-relaxed">
                    {description}
                </div>

                {/* Tech Stack Chips */}
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-xs font-semibold rounded-full text-gray-600 dark:text-gray-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Footer Action */}
                    <div className="pt-4 mt-auto border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-400">
                            {githubLink ? "Open Source" : "Proprietary"}
                        </span>
                        {githubLink ? (
                            <Link href={githubLink} target="_blank" className="inline-flex items-center text-sm font-bold text-[var(--foreground)] hover:gap-2 transition-all">
                                Check Repo <ArrowRight size={16} className="ml-1" />
                            </Link>
                        ) : link ? (
                            <Link href={link} target="_blank" className="inline-flex items-center text-sm font-bold text-[var(--primary)] hover:gap-2 transition-all">
                                View Project <ArrowRight size={16} className="ml-1" />
                            </Link>
                        ) :
                            (
                                <span className="text-sm italic text-gray-400">Case Study On Request</span>
                            )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
