
import Navbar from '@/components/Navbar';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
                <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-[var(--primary)] mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Articles
                </Link>

                <header className="mb-10 text-center">
                    <div className="flex justify-center gap-2 mb-6">
                        {post.meta.tags?.map((tag: string) => (
                            <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 text-xs font-medium rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        {post.meta.title}
                    </h1>
                    <div className="flex items-center justify-center text-gray-500">
                        <Calendar size={18} className="mr-2" />
                        {post.meta.date}
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert mx-auto prose-a:text-blue-600 hover:prose-a:underline prose-img:rounded-xl">

                    <MDXRemote source={post.content} />
                </div>
            </article>
        </main>
    );
}
