/* eslint-disable */
module.exports = {
  collectCoverageFrom: [
    'app/**/*.{js,jsx}',
    '!app/**/*.test.{js,jsx}',
    '!app/*/RbGenerated*/*.{js,jsx}',
    '!app/app.js',
    '!app/global-styles.js',
    '!app/*/*/Loadable.{js,jsx}',
    '!**/coverage/**',
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
  preset: 'react-native',
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '@app(.*)$': '<rootDir>/app/$1',
    '@(atoms|molecules|organisms)(.*)$': '<rootDir>/app/components/$1/$2',
    '@(containers|components|services|utils|themes|scenes|navigators)(.*)$': '<rootDir>/app/$1/$2'
  },
  "setupFiles": [
    "./node_modules/react-native-gesture-handler/jestSetup.js"
  ],
  "setupFilesAfterEnv": [
    "./setupTests.js"
  ],
  "transformIgnorePatterns": [
    "/node_modules/(?!react-native)/.+"
  ]
};
