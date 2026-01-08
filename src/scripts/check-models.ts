
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function listModels() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error('No GEMINI_API_KEY found.');
        return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    try {
        // There isn't a direct listModels on genAI instance in some SDK versions,
        // but we can try to access the model manager if exposed, or just try a standard request.
        // Actually, newer SDKs expose it via the API.
        // Let's try to just run a simple prompt with a fallback list.

        console.log("Checking available models...");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Hello");
        console.log("Success with gemini-1.5-flash!");
        console.log(result.response.text());
    } catch (error: any) {
        console.error('Error with gemini-1.5-flash:', error.message);

        try {
            console.log("Trying gemini-pro...");
            const model2 = genAI.getGenerativeModel({ model: "gemini-pro" });
            const result2 = await model2.generateContent("Hello");
            console.log("Success with gemini-pro!");
        } catch (e: any) {
            console.error("Error with gemini-pro:", e.message);
        }
    }
}

listModels();
