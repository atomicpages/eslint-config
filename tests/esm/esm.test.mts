import { ESLint } from "eslint";
import { describe, it } from "node:test";
import { checkViolations } from "../utils.mjs";

const eslint = new ESLint({
  useEslintrc: true,
  cwd: import.meta.dirname,
  cache: false,
});

describe("ESM ESLint Config", () => {
  it("should check for CJS files", async (t) => {
    const violations = new Set(["unicorn/prefer-module", "no-console", "prettier/prettier"])
    const results = await eslint.lintFiles(["common.js"]);
    const missing = checkViolations(results[0], violations);
    t.assert.ok(missing.length === 0, `Missing violation checks for: ${missing.join(', ')}`,);
  });

  it("should check ESM files", async (t) => {
    const violations = new Set(["no-unused-vars", "unicorn/prefer-top-level-await", "no-console", "unicorn/prefer-module"])
    const results = await eslint.lintFiles(["esm.mjs"]);
    const missing = checkViolations(results[0], violations);
    t.assert.ok(missing.length === 0, `Missing violation checks for: ${missing.join(', ')}`,);
  });
});
