import NewsAPI from 'newsapi';
import Parser from 'rss-parser';

// Ignore SVG/Canvas errors in test environment if needed
// Configure parser to be more lenient with SSL if needed for scraping
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
    category: 'Strategy' | 'Engineering' | 'Research'; // New Category Field
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

export async function fetchTechNews(): Promise<NewsArticle[]> {
    const articles: NewsArticle[] = [];

    // 1. Fetch from RSS Feeds (High Quality / Prestigious)
    console.log("Fetching RSS Feeds...");
    const allFeeds = [...RESEARCH_FEEDS, ...ENGINEERING_FEEDS];

    for (const feed of allFeeds) {
        try {
            const feedResult = await parser.parseURL(feed.url);
            // Take top 1 recent item from each feed
            const recentItems = feedResult.items.slice(0, 1).filter(item => {
                const pubDate = item.pubDate ? new Date(item.pubDate) : new Date();
                const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
                // Relax filter for testing if no recent posts
                const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
                return pubDate > lastWeek;
            });

            recentItems.forEach(item => {
                articles.push({
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

    // 2. Fetch from NewsAPI (Broad Industry News) - fallback or supplementary
    if (process.env.NEWS_API_KEY) {
        try {
            const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
            const response = await newsapi.v2.everything({
                q: '(product strategy OR startup acquisition OR tech ipo)',
                language: 'en',
                sortBy: 'popularity',
                from: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
                pageSize: 3,
            });

            if (response.status === 'ok') {
                response.articles.forEach((article: any) => {
                    articles.push({
                        title: article.title,
                        description: article.description,
                        url: article.url,
                        source: article.source.name,
                        publishedAt: article.publishedAt,
                        category: 'Strategy' // NewsAPI usually maps to broad Strategy/Industry news
                    });
                });
            }
        } catch (error) {
            console.error("NewsAPI Error:", error);
        }
    }

    // Shuffle and return top 3 mixed items
    return articles.sort(() => 0.5 - Math.random()).slice(0, 3);
}
