module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      { useTransformReactJSXExperimental: true },
    ],
    '@babel/preset-typescript',
  ],
  sourceMaps: 'inline',
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/proposal-object-rest-spread',
    ['babel-plugin-styled-components'],
    'react-native-reanimated/plugin',
  ],
};
