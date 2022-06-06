module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  ignorePatterns: ['/build', '/tmp', '/node_modules', '/types', '/coverage'],
};
