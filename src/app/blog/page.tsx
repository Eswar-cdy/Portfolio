
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { getAllPosts } from '@/lib/mdx';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Thinking</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Insights on bridging the gap between engineering and product strategy.
                    </p>
                </div>

                <div className="space-y-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all"
                        >
                            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                                <h2 className="text-2xl font-bold group-hover:text-[var(--primary)] transition-colors">
                                    {post.meta.title}
                                </h2>
                                <div className="flex items-center text-sm text-gray-500 whitespace-nowrap">
                                    <Calendar size={16} className="mr-2" />
                                    {post.meta.date}
                                </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                {post.meta.excerpt}
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    {post.meta.tags?.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-xs font-medium rounded-full text-gray-600 dark:text-gray-300 flex items-center">
                                            <Tag size={12} className="mr-1" /> {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-[var(--primary)] font-semibold inline-flex items-center">
                                    Read Article <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
