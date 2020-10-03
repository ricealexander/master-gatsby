// eslint-config-wesbos is too tightly-integrated with Prettier.
// copy contents directly from Wes's .eslintrc.js, but omit the Prettier stuff
// https://github.com/wesbos/eslint-config-wesbos/blob/master/.eslintrc.js

module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2020,
    // Can I remove these now?
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },

  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },

  plugins: ['html', 'react-hooks'],

  rules: {
    'no-debugger': 'off',
    'no-alert': 'off',
    'no-await-in-loop': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': ['error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-unused-vars': ['warn', {
      ignoreRestSiblings: true,
      argsIgnorePattern: 'res|next|^err',
    }],
    'prefer-const': ['error', {
      destructuring: 'all',
    }],
    'arrow-body-style': ['error', 'as-needed'],
    'no-unused-expressions': ['error', {
      allowTaggedTemplates: true,
    }],
    'no-param-reassign': ['error', {
      props: false,
    }],
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    import: 'off',
    'func-names': 'off',
    semi: ['error', 'never'],
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'react/display-name': 'warn',
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prefer-stateless-function': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.js', '.jsx'],
    }],
    'react/jsx-one-expression-per-line': 'off',
    radix: 'off',
    'no-shadow': ['error', {
      hoist: 'all',
      allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
    }],
    quotes: ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', {
      aspects: ['invalidHref'],
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  }
}
