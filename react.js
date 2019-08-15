module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier/react',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['react', 'react-hooks', 'jsx-a11y'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
};
