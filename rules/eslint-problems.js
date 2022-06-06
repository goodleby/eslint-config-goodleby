module.exports = {
  rules: {
    // Enforce `return` statements in callbacks of array methods
    // NOTE: checks even if the object which has the method is not an array.
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'warn',

    // Disallow `await` inside of loops
    // NOTE: in rare cases await is usable in loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'warn',

    // Disallow assignment operators in conditional expressions
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // Disallow returning value from constructor
    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': 'error',

    // Disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // Disallow duplicate module imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': ['error', { includeExports: true }],

    // Disallow literal numbers that lose precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    'no-loss-of-precision': 'error',

    // Disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'warn',

    // Disallow unmodified loop conditions
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'error',

    // Disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/rules/no-unreachable-loop
    'no-unreachable-loop': 'error',

    // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true },
    ],

    // Disallow unused private class members
    // https://eslint.org/docs/rules/no-unused-private-class-members
    'no-unused-private-class-members': 'error',

    // Disallow unused variables
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': 'error',

    // Disallow the use of variables before they are defined
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 'error',

    // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
    // https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': 'error',

    // Require calls to `isNaN()` when checking for `NaN`
    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': [
      'warn',
      { enforceForSwitchCase: true, enforceForIndexOf: true },
    ],
  },
};
