export async function sendTelegramNotification(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn(
      "⚠️ Telegram Notification skipped: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID missing in .env",
    );
    return;
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Telegram API Error:", errorData);
    } else {
      console.log("📨 Telegram notification sent.");
    }
  } catch (error) {
    console.error("❌ Failed to send Telegram notification:", error);
  }
}
