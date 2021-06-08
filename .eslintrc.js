module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['@react-native-community'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 2,
    'no-unused-vars': 0,
    'no-undef': 0,
    'jsx-quotes': [2, 'prefer-single'],
    'no-console': 2,
  },
};
