module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
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
