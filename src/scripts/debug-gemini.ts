
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function checkAccess() {
    const apiKey = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    console.log("Checking API Access...");
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            console.log("✅ API Success! Available Models:");
            console.log(data.models?.map((m: any) => m.name).join('\n'));
        } else {
            console.error("❌ API Error:");
            console.error(JSON.stringify(data, null, 2));
        }
    } catch (error) {
        console.error("Network Error:", error);
    }
}

checkAccess();
