/* eslint-disable security/detect-non-literal-fs-filename */
import path from "path";
import { describe, it, expect } from "bun:test";

import ESLint from "eslint";

describe("react config tests", () => {
  let savedResult: ESLint.ESLint.LintResult[] = [];

  const linter = new ESLint.ESLint({
    useEslintrc: false,
    overrideConfig: {
      parserOptions: {
        project: path.resolve(__dirname, "../tsconfig.json"),
      },
      extends: [
        path.resolve(__dirname, "../index.js"),
        path.resolve(__dirname, "../typescript.js"),
        path.resolve(__dirname, "../react.js"),
        path.resolve(__dirname, "../react-typescript.js"),
      ],
    },
  });

  it("should pass react checks", async () => {
    const result = await linter.lintFiles(
      path.resolve(__dirname, "./fixtures/react/react.tsx")
    );

    expect(result[0].errorCount).toBe(15);
    expect(result[0].warningCount).toBe(2);

    savedResult = result;
  });

  it.each([
    ["warning", "ban-types", 1],
    ["error", "no-useless-fragment", 2],
    ["error", "click-events-have-key-events", 2],
    ["error", "interactive-supports-focus", 2],
    ["error", "role-supports-aria-props", 2],
    ["error", "jsx-boolean-value", 2],
    ["error", "no-duplicate-props", 2],
  ])("should contain the %s '%s'", (_, ruleName, severity) => {
    expect(savedResult[0].messages).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          severity,
          ruleId: expect.stringContaining(ruleName),
        }),
      ])
    );
  });
});
