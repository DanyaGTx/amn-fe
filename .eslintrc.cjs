module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  plugins: [
    'vue'
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error'
  }
}
