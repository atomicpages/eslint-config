module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2020: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/unified-signatures': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
  },
};
