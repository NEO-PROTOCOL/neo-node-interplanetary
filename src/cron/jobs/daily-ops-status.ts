import { runShellSkill } from "../../infra/runner/run-shell-skill.js";
import { sendTelegramNotification } from "../../infra/notifiers/telegram.js";

export const dailyOpsStatusJob = {
  name: "daily-ops-status",
  schedule: "0 9 * * *", // 9:00 AM daily
  run: async () => {
    console.log("⏰ Starting Daily Ops Status Job...");
    const result = await runShellSkill({
      skill: "ops-status",
      scriptPath: "skills/ops-status/scripts/report.sh",
      args: ["full"],
      risk: "low",
      channel: "unknown",
      actor: "cron", // Critical: Identifying as system-driven
    });

    if (result.ok) {
      console.log("✅ Daily Ops Status recorded in Ledger.");

      // Notify via Telegram
      const reportDate = new Date().toLocaleDateString();
      const telegramMessage = `📊 *Daily Ops Report - ${reportDate}*\n\n${result.stdout.trim()}`;
      await sendTelegramNotification(telegramMessage);
    } else {
      console.error("❌ Daily Ops Status Job failed.");
      await sendTelegramNotification("🚨 *Daily Ops Status Job FAILED*");
    }
  },
};
