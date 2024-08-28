const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);
module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended-legacy',
    'plugin:fp/recommended'
  ],
  plugins: [
    'github',
    'immutable',
    'sonarjs',
    'prettier',
    'redux-saga',
    'react-native',
    'react',
    'react-hooks',
    'jsx-a11y',
    'fp'
  ],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    camelcase: ['error', { properties: 'always', ignoreImports: false }],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input']
      }
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-closing-tag-location': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-vars': 2,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'redux-saga/no-yield-in-race': 2,
    'redux-saga/yield-effects': 2,
    'require-yield': 0,
    'react/no-array-index-key': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-unused-prop-types': 0,
    'max-lines-per-function': ['error', 250],
    'no-else-return': 'error',
    'max-params': ['error', 3],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false
        }
      }
    ],
    'no-shadow': 'error',
    complexity: ['error', 2],
    'no-empty': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
        ]
      }
    ],
    'immutable/no-let': 2,
    'immutable/no-this': 2,
    'max-lines': ['error', 350],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'fp/no-mutation': [
      'error',
      {
        exceptions: [{ property: 'propTypes' }, { property: 'defaultProps' }]
      }
    ],
    'fp/no-nil': 0,
    'fp/no-unused-expression': 0,
    'fp/no-throw': 0
  },
  settings: {
    'import/resolver': {
      node: {
        app: './app',
        context: 'app',
        resolve: {
          alias: {
            '@assets': './app/assets',
            '@components': './app/components',
            '@containers': './app/containers',
            '@config': './app/config',
            '@navigators': './app/navigators',
            '@services': './app/services',
            '@themes': './app/themes',
            '@utils': './app/utils'
          },
          paths: ['app'],
          modules: ['app', 'node_modules'],
          extensions: ['.js', '.jsx', '.json', '.coffee', '.cjsx']
        }
      }
    }
  }
};
