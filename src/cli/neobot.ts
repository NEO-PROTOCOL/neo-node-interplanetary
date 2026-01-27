import { runShellSkill } from "../infra/runner/run-shell-skill.js";
import { getLedgerFilePath } from "../infra/ledger/ledger.js";

function usage() {
  console.log(
    `
neobot CLI (MVP)

Usage:
  neobot run ops-status
  neobot ledger path

Examples:
  pnpm neobot run ops-status
  pnpm neobot ledger path
`.trim(),
  );
}

async function main() {
  const [, , cmd, subcmd, ...rest] = process.argv;

  if (!cmd) {
    usage();
    process.exit(1);
  }

  if (cmd === "ledger") {
    if (subcmd === "path") {
      console.log(getLedgerFilePath());
      process.exit(0);
    }
    usage();
    process.exit(1);
  }

  if (cmd === "run") {
    const skill = subcmd;
    if (!skill) {
      usage();
      process.exit(1);
    }

    if (skill === "ops-status") {
      const { assertChannelEnabled, assertExecutorEnabled, requiresConfirmation } =
        await import("../config/runtime-config.js");
      const readline = await import("readline-sync");

      const argsArray = rest;
      if (argsArray.includes("--confirm-required")) {
        const answer = readline.question("⚠️  Confirmation required. Type 'CONFIRM' to proceed: ");
        if (answer !== "CONFIRM") {
          console.error("❌ Aborted by user.");
          process.exit(1);
        }
      }

      const res = await runShellSkill({
        skill: "ops-status",
        scriptPath: "skills/ops-status/scripts/report.sh",
        args: rest,
        risk: "low",
        channel: "cli",
        actor: "user",
      });

      console.log(res.stdout.trim());
      if (!res.ok) {
        console.error(res.stderr.trim());
        console.error(`\n[ledger event] ${res.eventId}`);
        process.exit(1);
      }

      console.log(`\n[ledger event] ${res.eventId}`);
      process.exit(0);
    }

    if (skill === "social-test") {
      const { assertSocialEnabled, requiresConfirmation } =
        await import("../config/runtime-config.js");
      const { appendLedgerEvent, createEventId } = await import("../infra/ledger/ledger.js");
      const readline = await import("readline-sync");

      try {
        // 1. Policy Gate: Check if enabled
        assertSocialEnabled("x");

        // 2. Policy Gate: Check confirmation
        if (requiresConfirmation("social")) {
          if (!rest.includes("--yes")) {
            // In a real CLI we might prompt. For this test automation we error if flag missing.
            // We can simulate the user interaction if running interactively, but here:
            console.error("⚠️  Confirmation required by policy. Use --yes to proceed.");
            process.exit(1);
          }
        }

        // 3. Execution (Simulated)
        const eventId = createEventId("evt");
        console.log("🚀 Executing Social Test Action on X...");

        appendLedgerEvent({
          id: eventId,
          ts: new Date().toISOString(),
          actor: "user",
          channel: "cli",
          skill: "social-test",
          intent: "post to x",
          status: "success",
          duration_ms: 10,
          risk: "high",
        });

        console.log(`✅ Success. [ledger event] ${eventId}`);
        process.exit(0);
      } catch (err: any) {
        console.error(`❌ ${err.message}`);
        // Log blocked attempt?
        process.exit(1);
      }
    }

    console.error(`Unknown skill: ${skill}`);
    console.error(`(MVP only supports: ops-status)`);
    process.exit(1);
  }

  usage();
  process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
