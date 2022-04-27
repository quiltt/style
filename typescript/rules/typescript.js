module.exports = {
  /** Allow rules to be turned off/on individually within code */
  '@typescript-eslint/ban-ts-comment': 'off',
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
  /** Try to find unique var names as opposed to redeclaring vars */
  '@typescript-eslint/no-redeclare': [
    'warn',
    {
      ignoreDeclarationMerge: true,
    },
  ],
  '@typescript-eslint/no-floating-promises': 'off',
  /** Set warn on all "unsafe" rules.
   * It's usually not a good idea to accept/return types of "any",
   * But setting this to warn since sometimes we actually don't know what
   * types come from a 3rd party library, or Promises.
   */
  '@typescript-eslint/no-unsafe-argument': 'warn',
  '@typescript-eslint/no-unsafe-assignment': 'warn',
  '@typescript-eslint/no-unsafe-call': 'warn',
  '@typescript-eslint/no-unsafe-member-access': 'warn',
  '@typescript-eslint/no-unsafe-return': 'warn',
  /** When we write code, despite having some methods running asynchronously,
   * we want to make sure our code is as clean as possible.
   * Making it look as synchronous as possible helps with making it more readable.
   */
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': ['error'],
  /** No unused vars except for certain keywords */
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      ignoreRestSiblings: true,
      argsIgnorePattern: 'res|next|^err|^_',
      varsIgnorePattern: '^_',
    },
  ],
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': [
    'error',
    {
      hoist: 'all',
      allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
    },
  ],
  /** Allowing all naming conventions for different use cases.
   * camelCase for vars
   * PascalCase for classes, interfaces, enums, and function components
   * UPPER_CASE for constants (Usually global)
   * snake_case is generally never used, unless required by certain libs or destructured from separate source
   */
  '@typescript-eslint/naming-convention': [
    'error',
    {
      format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
      selector: 'variable',
      leadingUnderscore: 'allowSingleOrDouble',
      trailingUnderscore: 'allowSingleOrDouble',
    },
  ],
  /** Follows ES5 conventions.
   * Adds commas to final line of object properties but not function arguments */
  'comma-dangle': 'off',
  '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
  indent: 'off',
  '@typescript-eslint/indent': 'off', // Let prettier handle this
  semi: 'off',
  '@typescript-eslint/semi': ['error', 'never'],
}
