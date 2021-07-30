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
  ],
  ignore: ['**/*.test.ts']
};
