import type { Linter } from "eslint";
import a11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import globals from 'globals';

export default [
  a11y.flatConfigs.recommended,
  react.configs.flat["jsx-runtime"],
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: { react },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
  }
] satisfies Linter.Config[];
