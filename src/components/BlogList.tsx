'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Tag, Layers, Microscope, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Post = {
    slug: string;
    meta: {
        title: string;
        date: string;
        excerpt: string;
        tags?: string[];
        category?: string;
        [key: string]: any;
    };
};

export default function BlogList({ posts }: { posts: Post[] }) {
    const [filter, setFilter] = useState('All');

    const categories = [
        { name: 'All', icon: Layers },
        { name: 'Strategy', icon: Briefcase },
        { name: 'Engineering', icon: CodeIcon }, // defined below
        { name: 'Research', icon: Microscope },
    ];

    const filteredPosts = filter === 'All'
        ? posts
        : posts.filter(post => post.meta.category === filter || post.meta.tags?.includes(filter));

    return (
        <>
            {/* Filter Tabs */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
                {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                        <button
                            key={cat.name}
                            onClick={() => setFilter(cat.name)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 border ${filter === cat.name
                                    ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-lg scale-105'
                                    : 'bg-white dark:bg-slate-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-slate-800 hover:border-[var(--primary)]'
                                }`}
                        >
                            <Icon size={16} />
                            {cat.name}
                        </button>
                    );
                })}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredPosts.map((post) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            key={post.slug}
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="block group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800 hover:shadow-2xl hover:border-[var(--primary)]/30 transition-all relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <CategoryIcon category={post.meta.category} className="w-24 h-24 text-[var(--primary)]" />
                                </div>

                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getCategoryColor(post.meta.category)}`}>
                                            {post.meta.category || 'General'}
                                        </span>
                                        <div className="flex items-center text-sm text-gray-400">
                                            <Calendar size={14} className="mr-1" />
                                            {post.meta.date}
                                        </div>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[var(--primary)] transition-colors">
                                        {post.meta.title}
                                    </h2>

                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-2">
                                        {post.meta.excerpt}
                                    </p>

                                    <div className="flex items-center text-[var(--primary)] font-semibold text-sm">
                                        Read Analysis <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </>
    );
}

function CodeIcon(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    )
}

function CategoryIcon({ category, className }: { category?: string, className?: string }) {
    if (category === 'Research') return <Microscope className={className} />;
    if (category === 'Engineering') return <CodeIcon className={className} />;
    return <Briefcase className={className} />;
}

function getCategoryColor(category?: string) {
    if (category === 'Research') return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
    if (category === 'Engineering') return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
    return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
}
