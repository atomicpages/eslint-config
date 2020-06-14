module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'warn',
    },
    overrides: [
        {
            files: ['**/*.tsx', '**/*.ts'],
            rules: {
                'react/prop-types': 'off',
            },
        },
    ],
};
