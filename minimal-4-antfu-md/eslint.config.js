import antfu from '@antfu/eslint-config'

export default antfu(
  {
    svelte: true,
  },
  {
    rules: {
      'style/space-before-function-paren': [
        2,
        {
          anonymous: 'always',
          named: 'always',
          asyncArrow: 'always',
        },
      ],
    },
  },
)
