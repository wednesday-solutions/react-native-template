// Learn more https://docs.expo.io/guides/customizing-metro
const { getSentryExpoConfig } = require('@sentry/react-native/metro');

// eslint-disable-next-line fp/no-mutation
module.exports = getSentryExpoConfig(__dirname);
