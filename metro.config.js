// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('@expo/metro-config');

// eslint-disable-next-line fp/no-mutation
module.exports = getDefaultConfig(__dirname, {
  // Disable CSS support.
  isCSSEnabled: false
});
