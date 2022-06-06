module.exports = {
  extends: [
    './rules/eslint-core',
    './rules/eslint-formatting',
    './rules/eslint-problems',
    './rules/eslint-suggestions',
  ]
    .map(require.resolve)
    .concat(['prettier']),
};
