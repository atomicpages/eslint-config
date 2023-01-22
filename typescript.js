module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2020: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/unified-signatures': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'warn',
    // https://typescript-eslint.io/rules/no-for-in-array
    '@typescript-eslint/no-for-in-array': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
      },
    ],
    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },
          '{}': {
            message: "Use 'object' instead",
            fixWith: 'object',
          },
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
