module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    semi: 'error',

    // Note: you must disable the base rule as it can report incorrect errors
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single'],

    '@typescript-eslint/no-explicit-any': 'warn',

    'no-debugger': 'off',
  },
};
