import { GoogleGenerativeAI } from '@google/generative-ai';
import { NewsArticle } from './newsAggregator';

export async function generateBlogPost(article: NewsArticle): Promise<string | null> {
    if (!process.env.GEMINI_API_KEY) {
        console.error("GEMINI_API_KEY is missing");
        return null;
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let promptContext = "";

    // Specialized Prompts based on Track/Category
    if (article.category === 'Research') {
        promptContext = `
      **Track**: RESEARCH FRONTIER.
      **Goal**: Deconstruct this complex research paper/announcement for a Product & Engineering audience.
      **Structure**:
      1. **The Breakthrough**: Simple explanation of the core innovation.
      2. **Why It Matters**: The gap it fills in current AI capabilities.
      3. **Strategic Application**: How startups could build products on this.
    `;
    } else if (article.category === 'Engineering') {
        promptContext = `
      **Track**: ENGINEERING DEEP DIVE.
      **Goal**: Analyze this engineering blog post from a System Design perspective.
      **Structure**:
      1. **The Challenge**: What scale/performance problem were they solving?
      2. **The Architecture**: Key patterns used (e.g., Sharding, Caching, Event-Driven).
      3. **Takeaway**: A lesson for building scalable systems today.
    `;
    } else {
        promptContext = `
      **Track**: PRODUCT STRATEGY.
      **Goal**: Analyze this industry news for business leverage.
      **Structure**:
      1. **The Shift**: What market dynamic just changed?
      2. **Winner/Losers**: Who benefits from this?
      3. **The Product Angle**: How PMs should react.
    `;
    }

    const prompt = `
    You are Eswar Ajay, a Product Strategist and Engineer. 
    Write a blog post about this [${article.category}] article:
    
    Title: ${article.title}
    Source: ${article.source}
    Context: ${article.description}
    Link: ${article.url}

    ${promptContext}

    **Format Requirements:**
    - Return ONLY the content in MDX/Markdown.
    - Frontmatter MUST include:
        ---
        title: "Your Title"
        date: "${new Date().toISOString().split('T')[0]}"
        description: "Your description."
        tags: ["${article.category}", "AI", "Strategy"]
        category: "${article.category}"
        ---
    - Keep it under 600 words. Intelligent, concise, professional.
  `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return text.replace(/^```markdown\n/, '').replace(/^```\n/, '').replace(/```$/, '');
    } catch (error) {
        console.error("Error generating blog post:", error);
        return null;
    }
}
