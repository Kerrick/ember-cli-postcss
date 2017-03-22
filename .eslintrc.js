module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'ember-suave',
    'promise',
    'standard'
  ],
  extends: [
    'plugin:ember-suave/recommended',
    'standard'
  ],
  env: {
    node: true
  },
  rules: {
  }
}
