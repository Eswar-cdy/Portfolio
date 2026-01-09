
import NewsAPI from 'newsapi';
import Parser from 'rss-parser';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Ignore SVG/Canvas errors in test environment
const parser = new Parser({
    requestOptions: {
        rejectUnauthorized: false,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    }
});

export interface NewsArticle {
    title: string;
    description: string;
    url: string;
    source: string;
    publishedAt: string;
    category: 'Strategy' | 'Engineering' | 'Research';
    score?: number; // Added score field
    reason?: string; // Added reason for score
}

// Prestigious Feed Sources
const RESEARCH_FEEDS = [
    { url: 'https://openai.com/index/rss.xml', name: 'OpenAI Research', category: 'Research' },
    { url: 'https://research.google/blog/rss/', name: 'Google DeepMind', category: 'Research' },
    { url: 'http://export.arxiv.org/rss/cs.AI', name: 'arXiv (AI)', category: 'Research' },
];

const ENGINEERING_FEEDS = [
    { url: 'https://stackoverflow.blog/feed/', name: 'Stack Overflow Blog', category: 'Engineering' },
    { url: 'https://dev.to/feed/tag/engineering', name: 'Dev.to Engineering', category: 'Engineering' },
    { url: 'https://feeds.feedburner.com/AmazonWebServicesBlog', name: 'AWS Architecture', category: 'Engineering' },
];

/**
 * ⚡️ Batch Scorer using Gemini Flash
 * Filters out "noise" and finds high-impact engineering/strategy topics.
 */
async function rankArticles(candidates: NewsArticle[]): Promise<NewsArticle[]> {
    if (candidates.length === 0) return [];
    if (!process.env.GEMINI_API_KEY) {
        console.warn("No GEMINI_API_KEY, skipping relevance ranking.");
        return candidates.slice(0, 3);
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        // Use Gemini 3 Flash Preview for high speed and low cost batch processing
        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

        // Create a batch prompt
        const candidatesList = candidates.map((c, i) =>
            `ID ${i}: [${c.category}] ${c.title} (Source: ${c.source})`
        ).join('\n');

        const prompt = `
        You are an Editor-in-Chief for a high-signal Engineering Blog.
        Score these articles (1-10) based on their value for a Senior Product Engineer.

        Criteria for High Score (>7):
        - Architectural shifts (e.g., "Moving from Microservices to Monolith")
        - Major AI breakthroughs (e.g., "GPT-5 Architecture")
        - Strategic industry moves (e.g., "Nvidia acquiring Arm")
        
        Criteria for Low Score (<5):
        - Minor bug fixes or patch notes
        - Generic "Top 10 tools" lists
        - Marketing fluff

        Articles:
        ${candidatesList}

        Return a JSON array of objects with { "id": number, "score": number, "reason": "short string" }.
        Return JSON ONLY. No markdown formatting.
        `;

        const result = await model.generateContent(prompt);
        const text = result.response.text().replace(/```json/g, '').replace(/```/g, '').trim();
        const scores = JSON.parse(text);

        // Map scores back to articles
        const scoredArticles = candidates.map((article, index) => {
            const grade = scores.find((s: any) => s.id === index);
            return {
                ...article,
                score: grade ? grade.score : 0,
                reason: grade ? grade.reason : 'No score returned'
            };
        });

        // Sort by score descending and return Top 3
        console.log("💎 Relevance Ranking Complete. Top picks:");
        const topPicks = scoredArticles
            .sort((a, b) => (b.score || 0) - (a.score || 0))
            .filter(a => (a.score || 0) >= 6) // Minimum quality bar
            .slice(0, 3);

        topPicks.forEach(a => console.log(`[${a.score}/10] ${a.title}`));

        return topPicks.length > 0 ? topPicks : candidates.slice(0, 3); // Fallback if all low quality

    } catch (error) {
        console.error("Scoring failed:", error);
        return candidates.slice(0, 3); // Fallback
    }
}

export async function fetchTechNews(): Promise<NewsArticle[]> {
    let candidates: NewsArticle[] = [];

    // 1. Fetch from RSS Feeds
    console.log("Fetching RSS Feeds...");
    const allFeeds = [...RESEARCH_FEEDS, ...ENGINEERING_FEEDS];

    for (const feed of allFeeds) {
        try {
            const feedResult = await parser.parseURL(feed.url);
            // Fetch MORE candidates (top 2) to give the Ranker more options
            const recentItems = feedResult.items.slice(0, 2).filter(item => {
                const pubDate = item.pubDate ? new Date(item.pubDate) : new Date();
                const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
                return pubDate > lastWeek;
            });

            recentItems.forEach(item => {
                candidates.push({
                    title: item.title || 'Untitled',
                    description: item.contentSnippet || item.content || '',
                    url: item.link || '',
                    source: feed.name,
                    publishedAt: item.pubDate || new Date().toISOString(),
                    category: feed.category as any
                });
            });
        } catch (e) {
            console.warn(`Failed to fetch RSS ${feed.name}:`, e);
        }
    }

    // 2. Fetch from NewsAPI
    if (process.env.NEWS_API_KEY) {
        try {
            const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
            const response = await newsapi.v2.everything({
                q: '(product strategy OR "system design" OR "AI architecture")', // More specific queries
                language: 'en',
                sortBy: 'popularity',
                from: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(), // 48 hours
                pageSize: 5, // Get 5 candidates
            });

            if (response.status === 'ok') {
                response.articles.forEach((article: any) => {
                    candidates.push({
                        title: article.title,
                        description: article.description,
                        url: article.url,
                        source: article.source.name,
                        publishedAt: article.publishedAt,
                        category: 'Strategy'
                    });
                });
            }
        } catch (error) {
            console.error("NewsAPI Error:", error);
        }
    }

    // Deduplicate by URL or Title
    candidates = candidates.filter((v, i, a) => a.findIndex(t => (t.url === v.url || t.title === v.title)) === i);

    console.log(`Found ${candidates.length} candidates. Ranking...`);

    // 3. Apply Batch Scoring
    return await rankArticles(candidates);
}
