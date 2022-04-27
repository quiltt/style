const reactRules = {
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
}

export default reactRules
