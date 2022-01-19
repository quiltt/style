module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: '@babel/eslint-parser',
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
    // Base Rules
    'arrow-body-style': ['error', 'as-needed'],
    'comma-dangle': ['error', 'only-multiline'],
    'consistent-return': 'off',
    'func-names': ['error', 'as-needed'],
    indent: 'off', // Let prettier handle this
    'max-len': [
      'error',
      { code: 100, tabWidth: 2, ignorePattern: 'd="([\\s\\S]*?)"', ignoreComments: true },
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
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err|^_"',
        varsIgnorePattern: '^_',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    radix: ['error', 'as-needed'],
    semi: ['error', 'never'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    // Import Rules
    import: 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    // JSX Rules
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
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
    'react/function-component-definition': 'off',
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
  },
}
