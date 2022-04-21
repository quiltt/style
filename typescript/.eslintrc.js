/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: '@babel/eslint-parser', // Uses babel parser for JS files, overridden by typescript for TS files
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    requireConfigFile: false,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['html', 'import', 'prettier', 'react-hooks'],
  rules: {
    // Adding prettier first so everything can be overridden later
    // Prettier Rules
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        printWidth: 100,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
      },
    ],
    // Base Rules
    /** Just a convention to keep styles consistent */
    'arrow-body-style': ['error', 'as-needed'],
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
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
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
        argsIgnorePattern: 'res|next|^err|^_',
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
    // Import Rules
    import: 'off',
    /** No need to specify import export type if not needed */
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    // JSX Rules
    'jsx-a11y/accessible-emoji': 'off',
    /** All anchors need to be valid. If not possible, perhaps the component should be a button instead */
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    /** No need for hashes in anchors. Use buttons instead */
    'jsx-a11y/href-no-hash': 'off',
    /** Form labels cannot be orphaned. Specify an input/control for it */
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    // React Rules
    'react/display-name': 'off',
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prefer-stateless-function': 'off',
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    /** Prefer arrow functions over function declarations */
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
