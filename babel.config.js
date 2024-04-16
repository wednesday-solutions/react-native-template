/**
 * Configure Babel for Expo project with module resolution aliases.
 * This function sets up Babel presets and plugins, including module resolution with aliases.
 * @param {object} api - The Babel API object (optional, used for caching).
 * @param {Function} api.cache - Function used for caching Babel configuration.
 * @returns {object} Babel configuration object with presets and plugins.
 */
// eslint-disable-next-line fp/no-mutation
module.exports = (api = { cache: () => {} }) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          cwd: 'babelrc',
          root: ['./src'],
          extensions: ['.js', '.ios.js', '.android.js'],
          alias: {
            '@app': './app',
            '@assets': './app/assets',
            '@components': './app/components',
            '@atoms': './app/components/atoms',
            '@molecules': './app/components/molecules',
            '@organisms': './app/components/organisms',
            '@config': './app/config',
            '@navigators': './app/navigators',
            '@scenes': './app/scenes',
            '@services': './app/services',
            '@themes': './app/themes',
            '@utils': './app/utils'
          }
        }
      ]
    ]
  };
};
