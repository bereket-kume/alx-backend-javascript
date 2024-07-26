module.exports = {
    env: {
      browser: false,
      es6: true,
      jest: true,
    },
    extends: [
      'airbnb-base',
      'plugin:jest/all',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      requireConfigFile: false,
      babelOptions: {
        presets: ['@babel/preset-env'],
      },
    },
    plugins: ['jest'],
    rules: {
      'max-classes-per-file': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
    overrides: [
      {
        files: ['*.js'],
        excludedFiles: 'babel.config.js',
      }
    ],
  };
  