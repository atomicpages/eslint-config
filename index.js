module.exports = {
  plugins: ["prettier", "security"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:security/recommended",
  ],
  rules: {
    "prettier/prettier": "warn",
    eqeqeq: ["error", "always"],
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-constructor-return": "error",
    "no-extend-native": "error",
    "no-loop-func": "error",
    "no-else-return": "error",
    "no-return-assign": "error",
    "no-throw-literal": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    curly: "error",
    "default-case-last": "error",
    "no-alert": "error",
    "no-lone-blocks": "error",
    "no-multi-spaces": "error",
    "no-self-compare": "error",
    "no-return-await": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "object-curly-spacing": ["error", "always"],
    "one-var": ["error", "never"],
    "no-var": "error",
    "prefer-const": "error",
    "no-lonely-if": "error",
    "no-nested-ternary": "error",
    "id-denylist": ["error", "module"],
    "detect-object-injection": "off",
    "guard-for-in": "error",
    "no-useless-computed-key": "error",
    "prefer-rest-params": "error",
    "no-useless-backreference": "warn",
    "default-param-last": "error",
  },
};
