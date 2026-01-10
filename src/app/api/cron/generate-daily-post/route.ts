import { NextResponse } from 'next/server';
import { fetchTechNews } from '@/lib/newsAggregator';
import { generateBlogPost } from '@/lib/aiEditor';
import { publishToGitHub } from '@/lib/githubPublisher';
import { sendNotification } from '@/lib/notifications';

export async function GET(request: Request) {
    // 1. Security Check (Cron Secret)
    const { searchParams } = new URL(request.url);
    const cronKey = searchParams.get('cron_api_key');
    const authHeader = request.headers.get('authorization');

    // Support both Bearer token and query param for easier manual testing
    const isValid = authHeader === `Bearer ${process.env.CRON_SECRET}` || cronKey === process.env.CRON_SECRET;

    if (!isValid) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
        // 2. Fetch News (Now with V3 Ranking)
        console.log("🤖 Cron Agent Waking Up...");
        const articles = await fetchTechNews();
        if (articles.length === 0) {
            return NextResponse.json({ message: "No suitable high-signal news found today." }, { status: 200 });
        }

        // 3. Process up to 2 most relevant articles
        const results = [];
        const topArticles = articles.slice(0, 2);

        for (const article of topArticles) {
            console.log(`📝 Processing: ${article.title}`);

            // 4. Generate Content (Context-Aware)
            const content = await generateBlogPost(article);
            if (!content) continue;

            // 5. Extract Title for Slug
            const titleMatch = content.match(/title:\s*"(.*?)"/);
            const slug = titleMatch ? titleMatch[1] : `daily-update-${Date.now()}`;

            // 6. Publish to Branch + Create PR (Safety Workflow)
            const success = await publishToGitHub(content, slug);

            if (success) {
                // 7. Notify User
                await sendNotification(`🚀 **New Blog Draft Ready!**\n\nTitle: *${article.title}*\nBranch: \`post/${slug.toLowerCase().replace(/[^a-z0-9]+/g, '-')}\`\n\nReview it in your GitHub Pull Requests!`);
                results.push({ slug, status: 'PR Created' });
            }
        }

        return NextResponse.json({
            success: true,
            posts_processed: results.length,
            details: results
        }, { status: 200 });

    } catch (error: any) {
        console.error("Cron Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
