module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/ignore": ["\\.svg$", "\\.png$", "\\.jpe?g$"],
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "import"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/no-onchange": "off",
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: true,
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "@mui/icons-material",
            message:
              "Please import from the 2nd level - ex: import AddIcon from '@mui/icons-material/Add' instead of: import { Add as AddIcon } from '@mui/icons-material'",
          },
        ],
        patterns: ["@mui/*/*/*", "@mui/material/*", "!@mui/material/styles"],
      },
    ],
    // Sorts by react, external, alias, local
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react*",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
