module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Enforce consistent naming for boolean props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': [
      'error',
      { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' },
    ],

    // Prevent usage of button elements without an explicit type attribute
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': 'error',

    // Enforce all defaultProps have a corresponding non-required PropType
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    'react/default-props-match-prop-types': 'error',

    // Enforce consistent usage of destructuring assignment of props, state, and context
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': [
      'error',
      'always',
      { ignoreClassFields: true },
    ],

    // Forbid using another component's propTypes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    'react/forbid-foreign-prop-types': 'error',

    // Forbid certain propTypes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': 'error',

    // Ensure destructuring and symmetric naming of useState hook value and setter variables
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
    'react/hook-use-state': 'error',

    // Enforce sandbox attribute on iframe elements
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
    'react/iframe-missing-sandbox': 'error',

    // Prevent using this.state within a this.setState
    'react/no-access-state-in-setstate': 'error',

    // Prevent usage of Array index in keys
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'warn',

    // Lifecycle methods should be methods on the prototype, not class fields
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
    'react/no-arrow-function-lifecycle': 'error',

    // Prevent usage of dangerous JSX properties
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 'warn',

    // Prevent usage of setState in componentDidMount
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    'react/no-did-mount-set-state': 'error',

    // Prevent usage of setState in componentDidUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': 'error',

    // Prevent usage of invalid attributes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
    'react/no-invalid-html-attribute': 'error',

    // Prevent multiple component definition per file
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': 'error',

    // Enforce that namespaces are not used in React elements
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
    'react/no-namespace': 'error',

    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 'error',

    // Prevent using string references
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': ['error', { noTemplateLiterals: true }],

    // Prevents common typos
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': 'warn',

    // Prevent usage of unsafe lifecycle methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
    'react/no-unsafe': ['error', { checkAliases: true }],

    // Prevent creating unstable components inside components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
    'react/no-unstable-nested-components': 'error',

    // Prevent declaring unused methods of component class
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
    'react/no-unused-class-component-methods': 'error',

    // Prevent definitions of unused propTypes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': 'error',

    // Prevent definitions of unused state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
    'react/no-unused-state': 'error',

    // Prevent usage of setState in componentWillUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': 'error',

    // Enforce ES5 or ES6 class for React Components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': 'error',

    // Enforce stateless React Components to be written as a pure function
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 'error',

    // Prevent extra closing tags for components without children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 'error',

    // Enforce component methods order
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': 'error',

    // Enforce state initialization style
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    'react/state-in-constructor': 'error',

    // Enforces where React component static properties should be positioned
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': 'error',

    // Enforce style prop value being an object
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 'error',

    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': 'error',

    // Enforce boolean attributes notation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['error', 'always'],

    // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],

    // Enforce shorthand or standard form for React fragments
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': 'error',

    // No .bind() or Arrow Functions in JSX Props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': 'error',

    // Prevent react contexts from taking non-stable values
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
    'react/jsx-no-constructed-context-values': 'error',

    // Prevent usage of javascript: URLs
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
    'react/jsx-no-script-url': 'error',

    // Disallow unnecessary fragments
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    'react/jsx-no-useless-fragment': 'error',

    // Enforce PascalCase for user-defined JSX components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': 'error',

    // Disallow JSX props spreading
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': 'error',
  },
};
