import { ESLint } from "eslint";
import { describe, it } from "node:test";
import { checkViolations } from "../utils.mjs";

const eslint = new ESLint({
  useEslintrc: true,
  cwd: import.meta.dirname,
  cache: false,
});

describe("Base ESLint config", () => {
  it("should lint all files", async (t) => {
    const errors = 21;

    const violations = new Set([
      "no-constant-condition",
      "no-return-await",
      "object-curly-spacing",
      "prettier/prettier",
      "no-var",
      "no-else-return",
      "unicorn/no-nested-ternary",
      "unicorn/prefer-logical-operator-over-ternary",
      "prefer-const",
      "no-useless-escape",
      "security/detect-unsafe-regex",
      "unicorn/better-regex",
      "unicorn/new-for-builtins",
      "unicorn/prevent-abbreviations",
      "no-unused-vars"
    ]);

    const results = await eslint.lintFiles(["**/*.js"]);

    t.assert.ok(
      results.length === 1,
      `Expected 1 linting errors, but got ${results.length}`,
    );

    const [result] = results;

    t.assert.ok(
      result.errorCount === errors,
      `Expected ${errors} error, but got ${result.errorCount}`,
    );

    const missing = checkViolations(result, violations);

    t.assert.ok(
      missing.length === 0,
      `Missing violation checks for: ${missing.join(', ')}`,
    );
  });
});
