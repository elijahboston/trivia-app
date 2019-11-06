module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
      },
      // Transform TSDoc comments into a format usable
      // by Storybook's "Info" addon
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      }
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};