import type { ESLint } from "eslint";

export function checkViolations(
  result: ESLint.LintResult,
  violations: Set<string>,
) {
  const missing: string[] = [];

  result.messages.every((message) => {
    const has = violations.has(message.ruleId!);

    if (!has) {
      missing.push(message.ruleId!);
    }

    return has;
  });

  return missing;
}
