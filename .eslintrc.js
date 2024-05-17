module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020
    },
    plugins: [
        'vue',
        '@typescript-eslint'
    ],
    rules: {
        'indent': ['error', 4]
    }
}