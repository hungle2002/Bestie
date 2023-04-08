module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:react/recommended',
        'standard'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        'simple-import-sort'
    ],
    rules: {
        indent: ['error', 4],
        'no-unused-vars': ['warn'],
        'react/react-in-jsx-scope': 'off',
        semi: ['error', 'always'],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'max-len': ['error', 100]
    }
};
