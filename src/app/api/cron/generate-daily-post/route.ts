import { NextResponse } from 'next/server';
import { fetchTechNews } from '@/lib/newsAggregator';
import { generateBlogPost } from '@/lib/aiEditor';
import { publishToGitHub } from '@/lib/githubPublisher';

export async function GET(request: Request) {
    // 1. Security Check (Cron Secret)
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
        // 2. Fetch News
        const articles = await fetchTechNews();
        if (articles.length === 0) {
            return NextResponse.json({ message: "No news found" }, { status: 200 });
        }

        // 3. Select Top Article (First one for MVP)
        const topArticle = articles[0];

        // 4. Generate Content
        const content = await generateBlogPost(topArticle);
        if (!content) {
            return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
        }

        // 5. Extract Title for Slug
        // Simple regex to extract title from frontmatter (assumes format: title: "Title")
        const titleMatch = content.match(/title:\s*"(.*?)"/);
        const slug = titleMatch ? titleMatch[1] : `daily-update-${Date.now()}`;

        // 6. Publish
        const success = await publishToGitHub(content, slug);

        if (success) {
            return NextResponse.json({ success: true, slug }, { status: 200 });
        } else {
            return NextResponse.json({ error: "Failed to publish to GitHub" }, { status: 500 });
        }

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
