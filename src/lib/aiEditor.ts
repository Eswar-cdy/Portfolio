
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NewsArticle } from './newsAggregator';
import fs from 'fs';
import path from 'path';

export async function generateBlogPost(article: NewsArticle): Promise<string | null> {
  if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is missing");
    return null;
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  // Using gemini-3-flash-preview for the latest inference capabilities
  const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

  // 1. Load Personal Context (Voice)
  let personalContext = "";
  try {
    const contextPath = path.join(process.cwd(), 'src/lib/config/context.md');
    if (fs.existsSync(contextPath)) {
      personalContext = fs.readFileSync(contextPath, 'utf-8');
    }
  } catch (e) {
    console.warn("Could not load context.md:", e);
  }

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
    You are Eswar Ajay. Below is your PERSONAL CONTEXT (Voice, Bio, Opinions).
    You MUST adopt this persona, voice, and philosophy.
    
    === PERSONAL CONTEXT ===
    ${personalContext}
    ========================

    Write a blog post about this [${article.category}] article:
    
    Title: ${article.title}
    Source: ${article.source}
    Context: ${article.description}
    Link: ${article.url}
    Evaluation Score: ${article.score || 'N/A'}/10
    Evaluation Reason: ${article.reason || 'N/A'}

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
        image_prompt: "A detailed DALL-E 3 prompt to generate a geometric, minimalist header image for this post. Dark aesthetic."
        ---
    - Keep it under 600 words. Intelligent, concise, professional.
    - Reference "Green Engine" or "Collaborative Ecosystem" ONLY if truly relevant to the tech stack (IoT/Platform) being discussed.
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
