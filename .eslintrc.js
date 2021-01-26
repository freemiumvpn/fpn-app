const config = {
    parser: '@typescript-eslint/parser',
    rules: {
        /**
         * React
         */
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        "react/prop-types": "off", // we use TS for types

        /**
         * Imports
         */
        '@typescript-eslint/no-unused-vars': 'error',
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
            },
        ],
        'no-console': 'error',
    },
    extends: [
        'eslint:recommended',
        /**
         * Ts
         */
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        /**
         * Prettier
         */
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        /**
         * React
         */
        'plugin:react/recommended',
        /**
         * Imports
         */
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    plugins: ['@typescript-eslint', 'import', 'react-hooks'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}

module.exports = config
