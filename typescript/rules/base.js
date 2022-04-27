const baseRules = {
  /** Just a convention to keep styles consistent */ 'arrow-body-style': ['error', 'as-needed'],
  /** Follows ES5 conventions.
   * Adds commas to final line of object properties but not function arguments */
  'comma-dangle': ['error', 'only-multiline'],
  /** Allowing functions to return different types based on branching */
  'consistent-return': 'off',
  'func-names': ['error', 'as-needed'],
  indent: 'off', // Let prettier handle this
  /** Allow for comments and svg attributes to be longer than code max-len */
  'max-len': [
    'error',
    {
      code: 100,
      tabWidth: 2,
      ignorePattern:
        /** Ignores `class=""`, `className=""`, import statements, and svg attributes */
        '(d="([\\s\\S]*?))|(class="([\\s\\S]*?))"|(className="([\\s\\S]*?)")|(^import\\s.+\\sfrom\\s.+;$)',
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
    },
  ],
  'no-alert': 'off',
  'no-await-in-loop': 'off',
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  'no-debugger': 'off',
  'no-param-reassign': [
    'error',
    {
      props: false,
    },
  ],
  'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
  'no-return-assign': ['error', 'except-parens'],
  'no-shadow': [
    'error',
    {
      hoist: 'all',
      allow: ['res', 'response', 'resolve', 'reject', 'done', 'next', 'err', 'error'],
    },
  ],
  'no-unused-expressions': [
    'error',
    {
      allowTaggedTemplates: true,
    },
  ],
  'no-underscore-dangle': 'off',
  /** No unused vars except for certain keywords */
  'no-unused-vars': [
    'warn',
    {
      ignoreRestSiblings: true,
      argsIgnorePattern: 'res|response|resolve|reject|done|next|err|error|^_',
      varsIgnorePattern: '^_',
    },
  ],
  /** Prefer const keyword if no reassignment. Better for scoping and perf */
  'prefer-const': [
    'error',
    {
      destructuring: 'all',
    },
  ],
  /** Keep quotes consistent */
  quotes: [
    'error',
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: true,
    },
  ],
  /** Most Int casting is set to Base 10. No need to provide Radix in these instances  */
  radix: ['error', 'as-needed'],
  /** Consistent semicolons for entire codebase */
  semi: ['error', 'never'],
  /** Provides more readable func names with space before parens */
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'ignore',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
}

export default baseRules
