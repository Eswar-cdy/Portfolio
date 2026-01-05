import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string | React.ReactNode;
    tags: string[];
    link: string;
    color: string;
}

export default function ProjectCard({ title, description, tags, link, color }: ProjectCardProps) {
    return (
        <div className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 flex flex-col h-full">
            <div className={`h-2 w-full ${color}`} />
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-xs font-medium rounded-full text-gray-600 dark:text-gray-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <Link
                    href={link}
                    className="inline-flex items-center text-[var(--primary)] font-semibold hover:gap-2 transition-all"
                >
                    View Case Study <ArrowRight size={16} className="ml-1" />
                </Link>
            </div>
        </div>
    );
}
