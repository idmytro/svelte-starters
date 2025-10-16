// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
// import storybook from "eslint-plugin-storybook";

import { fileURLToPath } from 'node:url';

import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import perfectionist from "eslint-plugin-perfectionist";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: { // typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
		// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
		"no-undef": 'off' }
	},
	{
		files: [
			'**/*.svelte',
			'**/*.svelte.ts',
			'**/*.svelte.js'
		],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	},
	/* perfectionist */
	{
		plugins: {
			perfectionist,
		},
		rules: {
			"perfectionist/sort-imports": ["off", { internalPattern: ["^\\$.*"] }],
			"perfectionist/sort-exports": [
				1,
				{
					ignoreCase: true,
					order: "asc",
					type: "alphabetical",
				},
			],
			"perfectionist/sort-named-exports": [
				1,
				{
					groupKind: "mixed",
					ignoreCase: true,
					order: "asc",
					type: "alphabetical",
				},
			],
		},
	},
	/* simple-import-sort */
	{
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			"simple-import-sort/imports": 1,
		},
	},
);
