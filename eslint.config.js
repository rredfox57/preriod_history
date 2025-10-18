import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: ['eslint.config.js', 'webpack.config.js', 'node_modules/**', 'dist/**'],
  },

  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },

    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      '@typescript-eslint': eslintPluginTs,
      import: eslintPluginImport,
      'jsx-a11y': eslintPluginJsxA11y,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': ['error'],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/no-unresolved': 'off',
      'import/named': 'error',
      'import/default': 'error',
      'import/no-duplicates': 'error',
    },
  },
];
