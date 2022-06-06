module.exports = {
  plugins: ['import'],
  extends: ['plugin:import/recommended'],
  rules: {
    // Forbid import of modules using absolute paths
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',

    // Forbid require() calls with expressions
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'warn',

    // Forbid a module from importing itself
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
    'import/no-self-import': 'error',

    // Forbid a module from importing a module with a dependency path back to itself
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
    'import/no-cycle': 'error',

    // Prevent unnecessary path segments in import and require statements
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': 'error',

    // Report imported names marked with @deprecated documentation tag
    // https://github.com/import-js/eslint-plugin-import#:~:text=deprecated%20documentation%20tag%20(-,no%2Ddeprecated,-)
    'import/no-deprecated': 'warn',

    // Forbid the use of mutable exports with var or let
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'warn',

    // Ensure all imports appear before other statements
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
    'import/first': 'error',

    // Ensure all exports appear after other statements
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
    'import/exports-last': 'error',

    // Forbid namespace (a.k.a. "wildcard" *) imports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
    'import/no-namespace': 'error',

    // Enforce a newline after import statements
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    // Forbid named default exports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
    'import/no-named-default': 'error',

    // Forbid default exports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
    'import/no-default-export': 'error',
  },
};
