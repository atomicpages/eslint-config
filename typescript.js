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
    overrides: [
        {
            files: ['**/*.tsx', '**/*.ts'],
            rules: {
                'react/prop-types': 'off',
                'react/no-array-index-key': 'warn',
                'react/no-danger': 'error',
                'react/jsx-boolean-value': ['error', 'never'],
                'react/jsx-no-useless-fragment': 'error',
                'react/jsx-pascal-case': 'error',
                'react/jsx-props-no-multi-spaces': 'error',
                'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
            },
        },
    ],
};
