module.exports = {
  env: {
    'jest/globals': true,
  },
  plugins: ['jest'],
  rules: {
    // Disallow alias methods
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-alias-methods.md
    'jest/no-alias-methods': 'error',

    // Disallow duplicate setup and teardown hooks
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
    'jest/no-duplicate-hooks': 'error',

    // Disallow specific matchers & modifiers
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md
    'jest/no-restricted-matchers': 'error',

    // Disallow explicitly returning from tests
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
    'jest/no-test-return-statement': 'error',

    // Suggest using the built-in comparison matchers
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md
    'jest/prefer-comparison-matcher': 'error',

    // Suggest using the built-in equality matchers
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
    'jest/prefer-equality-matcher': 'error',

    // Suggest having hooks before any test cases
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
    'jest/prefer-hooks-on-top': 'error',

    // Enforce lowercase test names
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
    'jest/prefer-lowercase-title': 'warn',

    // Suggest using jest.spyOn()
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-spy-on.md
    'jest/prefer-spy-on': 'error',

    // Suggest using toStrictEqual()
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md
    'jest/prefer-strict-equal': 'error',

    // Suggest using toBe() for primitive literals
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
    'jest/prefer-to-be': 'error',

    // Suggest using toContain()
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md
    'jest/prefer-to-contain': 'error',

    // Suggest using toHaveLength()
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
    'jest/prefer-to-have-length': 'error',

    // Suggest using test.todo
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
    'jest/prefer-todo': 'warn',

    // Require test cases and hooks to be inside a describe block
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
    'jest/require-top-level-describe': 'error',
  },
};
