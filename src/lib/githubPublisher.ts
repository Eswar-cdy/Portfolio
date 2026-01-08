import { Octokit } from 'octokit';

export async function publishToGitHub(content: string, slug: string) {
    if (!process.env.GITHUB_TOKEN) {
        console.error("GITHUB_TOKEN is missing");
        return false;
    }

    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

    // Clean slug
    const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const path = `src/content/blog/${cleanSlug}.mdx`;
    const message = `feat(blog): auto-publish ${cleanSlug}`; // Commit message

    try {
        // 1. Get Repo Details (Hardcoded for now based on user context, ideally env vars)
        // NOTE: User needs to update owner/repo if they are different
        const owner = process.env.GITHUB_OWNER || "Eswar-cdy";
        const repo = process.env.GITHUB_REPO || "Portfolio";

        // 2. Create/Update File
        await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
            owner,
            repo,
            path,
            message,
            content: Buffer.from(content).toString('base64'),
            committer: {
                name: 'Antigravity AI Agent',
                email: 'agent@antigravity.ai'
            },
            author: {
                name: 'Antigravity AI Agent',
                email: 'agent@antigravity.ai'
            }
        });

        console.log(`Successfully published to ${path}`);
        return true;
    } catch (error) {
        console.error("Error publishing to GitHub:", error);
        return false;
    }
}
