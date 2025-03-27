import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin'
import unocss from '@unocss/eslint-config/flat'
import prettier from 'eslint-config-prettier';
import packageJson from "eslint-plugin-package-json";
import perfectionist from 'eslint-plugin-perfectionist'
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';

import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

/** @type {import('eslint').Linter.Config[]} */
export default [
  packageJson.configs.recommended,
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...svelte.configs.recommended,
  prettier,
  ...svelte.configs.prettier,
  unocss,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ['**/*.svelte', '**/*.svelte.js'],
    languageOptions: {
      parserOptions: {
        svelteConfig
      }
    }
  },
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/space-before-function-paren': [2, 'always']
    },
  },
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': [
        2,
        {
          internalPattern: ['^\\$.*']
        }
      ],
    },
  },
];
