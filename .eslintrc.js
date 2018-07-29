module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parser: 'babel-eslint',

  plugins: ['react'],
  extends: ['airbnb'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
};
