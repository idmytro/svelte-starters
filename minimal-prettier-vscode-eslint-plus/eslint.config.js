import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';

import svelteConfig from './svelte.config.js';
const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));
import stylistic from '@stylistic/eslint-plugin'
import packageJson from "eslint-plugin-package-json";
import perfectionist from 'eslint-plugin-perfectionist'

export default ts.config(
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  prettier,
  ...svelte.configs.prettier,
  packageJson.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
    ignores: ['eslint.config.js', 'svelte.config.js'],

    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        parser: ts.parser,
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
);
