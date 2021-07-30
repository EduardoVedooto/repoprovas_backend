module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@services': './src/services',
          '@controllers': './src/controllers',
        },
      },
    ],
    'babel-plugin-transform-typescript-metadata',
  ],
  ignore: ['**/*.test.ts'],
};
