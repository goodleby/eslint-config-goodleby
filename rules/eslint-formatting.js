module.exports = {
  rules: {
    // Enforce the location of arrow function bodies
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': 'error',

    // Require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
  },
};
