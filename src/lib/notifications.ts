
/**
 * Simple Notification Service
 * Pings a Slack or Discord webhook when a new blog draft is ready for review.
 */
export async function sendNotification(message: string) {
    const webhookUrl = process.env.NOTIFICATION_WEBHOOK_URL;

    if (!webhookUrl) {
        console.warn("NOTIFICATION_WEBHOOK_URL not set, skipping notification.");
        return;
    }

    try {
        await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: message, // Slack format
                content: message // Discord format (fallback)
            })
        });
        console.log("✅ Notification sent successfully.");
    } catch (error) {
        console.error("Failed to send notification:", error);
    }
}
