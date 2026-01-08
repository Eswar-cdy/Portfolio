import { fetchTechNews } from '../lib/newsAggregator';
import { generateBlogPost } from '../lib/aiEditor';
import dotenv from 'dotenv';
import path from 'path';

// Load env vars from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function runTest() {
    console.log("🧪 Starting Manual Test for Blog Automation...\n");

    // 1. Check Env Vars
    console.log("Checking API Keys...");
    if (!process.env.NEWS_API_KEY) console.error("❌ Missing NEWS_API_KEY");
    else console.log("✅ NEWS_API_KEY found");

    if (!process.env.GEMINI_API_KEY) console.error("❌ Missing GEMINI_API_KEY");
    else console.log("✅ GEMINI_API_KEY found");

    if (!process.env.NEWS_API_KEY || !process.env.GEMINI_API_KEY) {
        console.error("\nPlease create a .env.local file with these keys to run the test.");
        return;
    }

    // 2. Fetch News
    console.log("\n📰 Fetching News...");
    const articles = await fetchTechNews();
    console.log(`Found ${articles.length} articles.`);

    if (articles.length > 0) {
        console.log(`Top Article: "${articles[0].title}"`);

        // 3. Generate Content
        console.log("\n🤖 Generating Blog Post (Gemini)...");
        const content = await generateBlogPost(articles[0]);

        if (content) {
            console.log("\n✅ Content Generated Successfully!");
            console.log("-----------------------------------");
            console.log(content.slice(0, 300) + "...\n(truncated)");
            console.log("-----------------------------------");
            console.log("\n🎉 Test Passed! The agents are working correctly.");
            console.log("Note: This test DID NOT push to GitHub (safety first).");
        } else {
            console.error("❌ Failed to generate content.");
        }
    } else {
        console.warn("⚠️ No articles found. Check NewsAPI key or quotas.");
    }
}

runTest();
