module.exports = {
  overrides: [
    {
      files: ["**/*.tsx", "**/*.ts"],
      rules: {
        "react/prop-types": "off",
        "react/no-array-index-key": "warn",
        "react/no-danger": "error",
        "react/jsx-boolean-value": ["error", "never"],
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-props-no-multi-spaces": "error",
        "react/jsx-curly-brace-presence": [
          "error",
          { props: "never", children: "never" },
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-types": [
          "warn",
          {
            types: {
              "JSX.Element": "If possible, use React.FC instead",
            },
            extendDefaults: true,
          },
        ],
      },
    },
  ],
};
