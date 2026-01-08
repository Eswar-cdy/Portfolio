
import Navbar from '@/components/Navbar';
import { getAllPosts } from '@/lib/mdx';
import BlogList from '@/components/BlogList';

export default async function BlogIndex() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Thinking & Engineering</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A curated feed of Industry Shifts, Engineering Deep Dives, and Research Frontiers.
                    </p>
                </div>

                <BlogList posts={posts} />
            </section>
        </main>
    );
}
