import antfu from '@antfu/eslint-config'

export default antfu(
  {
    svelte: true,
  },
  {
    rules: {
      'svelte/html-quotes': [2, {
        prefer: 'double', // or "single"
        dynamic: {
          quoted: false,
          avoidInvalidUnquotedInHTML: false,
        },
      }],
    },
  },
)
