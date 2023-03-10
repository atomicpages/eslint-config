module.exports = {
  plugins: ["import", "solid", "jsx-a11y"],
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:solid/typescript",
    "plugin:jsx-a11y/recommended",
  ],
  settings: {
    "import/ignore": ["\\.svg$", "\\.png$", "\\.jpe?g$"],
  },
  rules: {
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
        pathGroupsExcludedImportTypes: ["solid-js"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
