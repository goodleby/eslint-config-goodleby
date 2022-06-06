module.exports = {
  rules: {
    // Enforce the use of variables within the scope they are defined
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // Enforce camelcase naming convention
    // https://eslint.org/docs/rules/camelcase
    camelcase: 'error',

    // Enforce that class methods utilize `this`
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'error',

    // Require `return` statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',

    // Enforce consistent naming when capturing the current execution context
    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': ['error', 'self'],

    // Enforce consistent brace style for all control statements
    // https://eslint.org/docs/rules/curly
    curly: ['error', 'multi-line', 'consistent'],

    // Enforce default clauses in switch statements to be last
    // https://eslint.org/docs/rules/default-case-last
    'default-case-last': 'error',

    // Enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'error',

    // Enforce dot notation whenever possible
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': 'error',

    // Require the use of `===` and `!==`
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: 'error',

    // Require function names to match the name of the variable or property to which they are assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': ['error', { considerPropertyDescriptor: true }],

    // Require or disallow named `function` expressions
    // https://eslint.org/docs/rules/func-names
    'func-names': ['error', 'as-needed'],

    // Enforce the consistent use of either `function` declarations or expressions
    // https://eslint.org/docs/rules/func-style
    'func-style': ['error', 'expression'],

    // Require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': 'error',

    // Require `for-in` loops to include an `if` statement
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',

    // Require constructor names to begin with a capital letter
    // https://eslint.org/docs/rules/new-cap
    'new-cap': 'error',

    // Disallow `Array` constructors
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // Disallow bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'warn',

    // Disallow the use of `arguments.caller` or `arguments.callee`
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // Disallow `continue` statements
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // Disallow `else` blocks after `return` statements in `if` statements
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': 'error',

    // Disallow the use of `eval()`
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // Disallow extending native types
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // Disallow unnecessary calls to `.bind()`
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // Disallow unnecessary boolean casts
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],

    // Disallow unnecessary labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // Disallow unnecessary semicolons
    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'off',

    // Disallow leading or trailing decimal points in numeric literals
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // Disallow shorthand type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['error', { allow: ['!!'] }],

    // Disallow the use of `eval()`-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // Disallow `this` keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'error',

    // Disallow the use of the `__iterator__` property
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // Disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // Disallow `if` statements as the only statement in `else` blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // Disallow `if` statements as the only statement in `else` blocks
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // Disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': ['error', { ignoreNonDeclaration: true }],

    // Disallow nested ternary expressions
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // Disallow `new` operators outside of assignments or comparisons
    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // Disallow `new` operators with the `Function` object
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // Disallow `Object` constructors
    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // Disallow octal literals
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // Disallow reassigning `function` parameters
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'error',

    // Disallow the use of the `__proto__` property
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // Disallow assignment operators in `return` statements
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'error',

    // Disallow `javascript:` urls
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // Disallow comma operators
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': ['error', { allowInParentheses: false }],

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // Disallow throwing literals as exceptions
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // Disallow initializing variables to `undefined`
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // Disallow ternary operators when simpler alternatives exist
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // Disallow unused expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: true,
      },
    ],

    // Disallow unnecessary calls to `.call()` and `.apply()`
    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'error',

    // Disallow unnecessary computed property keys in objects and classes
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],

    // Disallow unnecessary concatenation of literals or template literals
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // Disallow unnecessary constructors
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': 'error',

    // Disallow redundant return statements
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // Require `let` or `const` instead of `var`
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // Disallow `void` operators
    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // Require or disallow method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': 'error',

    // Require or disallow assignment operator shorthand where possible
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': 'error',

    // Require using arrow functions for callbacks
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': 'error',

    // Require `const` declarations for variables that are never reassigned after declared
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 'error',

    // Require destructuring from arrays and/or objects
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': 'error',

    // Disallow the use of `Math.pow` in favor of the `**` operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'error',

    // Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
    // NOTE: supported since ES2022
    // https://eslint.org/docs/rules/prefer-object-has-own
    // 'prefer-object-has-own': 'warn',

    // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // Require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'error',

    // Disallow use of the `RegExp` constructor in favor of regular expression literals
    // https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    // Require rest parameters instead of `arguments`
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // Require spread operators instead of `.apply()`
    // NOTE: will flag even if apply changes `this` context for the call
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'warn',

    // Require template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // Enforce the consistent use of the radix argument when using `parseInt()`
    // https://eslint.org/docs/rules/radix
    radix: 'error',

    // Disallow async functions which have no `await` expression
    // https://eslint.org/docs/rules/require-await
    'require-await': 'error',

    // Enforce the use of `u` flag on RegExp
    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'error',

    // Enforce consistent spacing after the `//` or `/*` in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always'],

    // Require symbol descriptions
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // Require or disallow "Yoda" conditions
    // https://eslint.org/docs/rules/yoda
    yoda: 'error',
  },
};
