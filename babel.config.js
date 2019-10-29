module.exports = {
  presets: ['@babel/preset-react', '@emotion/babel-preset-css-prop', '@babel/preset-env'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-object-rest-spread'
  ],
  env: {
    development: {
      compact: true
    }
  }
};
