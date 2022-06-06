module.exports = {
  extends: [
    './rules/eslint-core',
    './rules/eslint-formatting',
    './rules/eslint-problems',
    './rules/eslint-suggestions',
    './rules/typescript-plugin',
    './rules/import-plugin',
    './rules/react-plugin',
    './rules/jest-plugin',
  ]
    .map(require.resolve)
    .concat(['prettier']),
};
