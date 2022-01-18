module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses rules from `@typescript-eslint/eslint-plugin`,
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // Layer in all the JS Rules
    './.eslintrc.js',
  ],
  // then add some extra good stuff for Typescript
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  // Then we add our own custom typescript rules
  rules: {
    // This allows us to use async function on addEventListener().
    // Discussion: https://twitter.com/wesbos/status/1337074242161172486
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [
      'warn',
      {
        ignoreDeclarationMerge: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
        selector: 'variable',
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble',
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err|^_"',
        varsIgnorePattern: '^_',
      },
    ],
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],
  },
}
