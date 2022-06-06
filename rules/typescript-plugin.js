module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
  ],
  rules: {
    // Typescript extension rules

    // Enforce default parameters to be last
    // https://typescript-eslint.io/rules/default-param-last
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    // Enforce dot notation whenever possible
    // https://typescript-eslint.io/rules/dot-notation
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',

    // Require or disallow an empty line between class members
    // https://typescript-eslint.io/rules/lines-between-class-members
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],

    // Disallow `Array` constructors
    // https://typescript-eslint.io/rules/no-array-constructor
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    // Disallow duplicate class members
    // https://typescript-eslint.io/rules/no-dupe-class-members
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    // Disallow literal numbers that lose precision
    // https://typescript-eslint.io/rules/no-loss-of-precision
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',

    // Disallow the use of `eval()`-like methods
    // https://typescript-eslint.io/rules/no-implied-eval
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',

    // Disallow `this` keywords outside of classes or class-like objects
    // https://typescript-eslint.io/rules/no-invalid-this
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://typescript-eslint.io/rules/no-shadow
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // Disallow throwing literals as exceptions
    // https://typescript-eslint.io/rules/no-throw-literal
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',

    // Disallow unused expressions
    // https://typescript-eslint.io/rules/no-unused-expressions
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: true,
      },
    ],

    // Disallow unused variables
    // https://typescript-eslint.io/rules/no-unused-vars
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    // Disallow the use of variables before they are defined
    // https://typescript-eslint.io/rules/no-use-before-define
    '@typescript-eslint/no-use-before-define': 'error',

    // Disallow unnecessary constructors
    // https://typescript-eslint.io/rules/no-useless-constructor
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // Disallow async functions which have no `await` expression
    // https://typescript-eslint.io/rules/require-await
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',

    // Disallow duplicate module imports
    // NOTE: this rule is deprecated
    // https://typescript-eslint.io/rules/no-duplicate-imports
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': [
      'error',
      { includeExports: true },
    ],

    // Typescript support rules

    // Requires using either T[] or Array<T> for arrays
    // https://typescript-eslint.io/rules/array-type
    '@typescript-eslint/array-type': 'error',

    // Consistent with type definition either interface or type
    // https://typescript-eslint.io/rules/consistent-type-definitions
    '@typescript-eslint/consistent-type-definitions': 'error',

    // Enforces consistent usage of type exports
    // https://typescript-eslint.io/rules/consistent-type-exports
    '@typescript-eslint/consistent-type-exports': 'error',

    // Enforces consistent usage of type imports
    // https://typescript-eslint.io/rules/consistent-type-imports
    '@typescript-eslint/consistent-type-imports': 'error',

    // Require explicit accessibility modifiers on class properties and methods
    // https://typescript-eslint.io/rules/explicit-member-accessibility
    '@typescript-eslint/explicit-member-accessibility': 'error',

    // Require explicit return and argument types on exported functions' and classes' public class methods
    // https://typescript-eslint.io/rules/explicit-module-boundary-types
    '@typescript-eslint/explicit-module-boundary-types': 'error',

    // Require a consistent member declaration order
    // https://typescript-eslint.io/rules/member-ordering
    '@typescript-eslint/member-ordering': 'warn',

    // Enforces using a particular method signature syntax
    // https://typescript-eslint.io/rules/method-signature-style
    '@typescript-eslint/method-signature-style': 'error',

    // Requires that .toString() is only called on objects which provide useful information when stringified
    // https://typescript-eslint.io/rules/no-base-to-string
    '@typescript-eslint/no-base-to-string': 'error',

    // Requires expressions of type void to appear in statement position
    // https://typescript-eslint.io/rules/no-confusing-void-expression
    '@typescript-eslint/no-confusing-void-expression': 'error',

    // Forbids the use of classes as namespaces
    // https://typescript-eslint.io/rules/no-extraneous-class
    '@typescript-eslint/no-extraneous-class': 'error',

    // Disallow the use of parameter properties in class constructors
    // https://typescript-eslint.io/rules/no-parameter-properties
    '@typescript-eslint/no-parameter-properties': 'error',

    // Flags unnecessary equality comparisons against boolean literals
    // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    // Warns when a namespace qualifier is unnecessary
    // https://typescript-eslint.io/rules/no-unnecessary-qualifier
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    // Enforces that type arguments will not be used if not required
    // https://typescript-eslint.io/rules/no-unnecessary-type-arguments
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
    // https://typescript-eslint.io/rules/prefer-for-of
    '@typescript-eslint/prefer-for-of': 'error',

    // Use function types instead of interfaces with call signatures
    // https://typescript-eslint.io/rules/prefer-function-type
    '@typescript-eslint/prefer-function-type': 'error',

    // Enforce includes method over indexOf method
    // https://typescript-eslint.io/rules/prefer-includes
    '@typescript-eslint/prefer-includes': 'error',

    // Require that all enum members be literal values to prevent unintended enum member name shadow issues
    // https://typescript-eslint.io/rules/prefer-literal-enum-member
    '@typescript-eslint/prefer-literal-enum-member': 'error',

    // Enforce the usage of the nullish coalescing operator instead of logical chaining
    // https://typescript-eslint.io/rules/prefer-nullish-coalescing
    '@typescript-eslint/prefer-nullish-coalescing': 'error',

    // Prefer using concise optional chain expressions instead of chained logical ands
    // https://typescript-eslint.io/rules/prefer-optional-chain
    '@typescript-eslint/prefer-optional-chain': 'error',

    // Prefer using type parameter when calling Array#reduce instead of casting
    // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',

    // Enforce that this is used when only this type is returned
    // https://typescript-eslint.io/rules/prefer-return-this-type
    '@typescript-eslint/prefer-return-this-type': 'error',

    // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
    // https://typescript-eslint.io/rules/prefer-string-starts-ends-with
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    // Recommends using @ts-expect-error over @ts-ignore
    // https://typescript-eslint.io/rules/prefer-ts-expect-error
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // Requires any function or method that returns a Promise to be marked async
    // https://typescript-eslint.io/rules/promise-function-async
    '@typescript-eslint/promise-function-async': 'error',

    // Requires Array#sort calls to always provide a compareFunction
    // https://typescript-eslint.io/rules/require-array-sort-compare
    '@typescript-eslint/require-array-sort-compare': 'error',

    // Enforce template literal expressions to be of string type
    // https://typescript-eslint.io/rules/restrict-template-expressions
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowAny: true },
    ],

    // Exhaustiveness checking in switch with union type
    // https://typescript-eslint.io/rules/switch-exhaustiveness-check
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',

    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
    // https://typescript-eslint.io/rules/unified-signatures
    '@typescript-eslint/unified-signatures': 'error',
  },
};
