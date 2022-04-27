const jsxRules = {
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
}

export default jsxRules
