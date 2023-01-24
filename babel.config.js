module.exports = function(api = { cache: () => {} }) {
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
