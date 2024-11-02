// @ts-check
/** @import { Linter } from "eslint" */
/** @import { ESLintRules } from "eslint/rules" */

export const createConfig = () => {
  /** @type {Linter.Config<ESLintRules>} */
  const eslint = {
    rules: {
      // possible problems
      "array-callback-return": ["error", { checkForEach: true }],
      "constructor-super": "error",
      "for-direction": "error",
      "getter-return": "error",
      "no-async-promise-executor": "error",
      "no-await-in-loop": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": ["error", "always"],
      "no-const-assign": "error",
      "no-constant-binary-expression": "error",
      "no-constant-condition": "error",
      "no-constructor-return": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "error",
      "no-empty-character-class": "error",
      "no-empty-pattern": "error",
      "no-ex-assign": "error",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-import-assign": "error",
      // "no-inner-declarations": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-loss-of-precision": "error",
      "no-misleading-character-class": "error",
      "no-new-native-nonconstructor": "error",
      "no-obj-calls": "error",
      "no-promise-executor-return": "error",
      "no-prototype-builtins": "error",
      "no-self-assign": "error",
      "no-self-compare": "error",
      "no-setter-return": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-this-before-super": "error",
      "no-undef": "error",
      "no-unexpected-multiline": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable": "error",
      "no-unreachable-loop": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unsafe-optional-chaining": "error",
      "no-unused-private-class-members": "error",
      "no-unused-vars": "error",
      // "no-use-before-define": "error",
      "no-useless-assignment": "error",
      "no-useless-backreference": "error",
      "require-atomic-updates": "error",
      "use-isnan": "error",
      "valid-typeof": "error",

      // suggestions
      "accessor-pairs": "error", // consistent
      "arrow-body-style": "error", // consistent
      "block-scoped-var": "off", // see: no-var
      "camelcase": "error", // style
      "capitalized-comments": ["error", "never"], // style
      "class-methods-use-this": "error", // optimized
      "complexity": "off",
      "consistent-return": "error", // consistent
      "consistent-this": "off",
      "curly": "error", // consistent
      "default-case-last": "error", // consistent
      "default-case": "error", // consistent
      "default-param-last": "error", // consistent
      "dot-notation": "error", // consistent (may conflict with ts)
      "eqeqeq": "error", // consistent
      "func-name-matching": "error", // consistent
      "func-names": "error", // consistent
      "func-style": ["error", "declaration"], // consistent
      "grouped-accessor-pairs": ["error", "getBeforeSet"], // consistent
      "guard-for-in": "error", // consistent
      "id-denylist": [
        "error",
        // abbreviations
        "ctx", "err", "evt", "msg", "obj", "opt", "opts", "req", "res", "str", "val",
        // non-descriptive
        "callback", "data", "item", "items", "result", "results",
        // placeholders
        "foo", "bar", "baz", "qux",
      ], // clear
      "id-length": ["error", { min: 3, max: 30, exceptions: ["n", "x", "y", "z"] }], // clear
      "id-match": "off",
      "init-declarations": "error", // consistent
      "logical-assignment-operators": ["error", "never"], // clear
      "max-classes-per-file": "error", // clear
      "max-depth": ["error", { max: 3 + 1 }], // clear
      "max-lines-per-function": "off",
      "max-lines": ["error", { max: 300 }], // clear
      "max-nested-callbacks": ["error", { max: 3 + 1 }], // clear
      "max-params": ["error", { max: 2 }], // clear, consistent (should always use options)
      "max-statements": "off",
      "new-cap": "error", // consistent
      "no-alert": "error", // prod [browser]
      "no-array-constructor": "error", // consistent
      "no-bitwise": "error", // safe
      "no-caller": "error", // modern
      "no-case-declarations": "error", // consistent
      "no-console": "error",  // prod [browser]
      "no-continue": "off",
      "no-delete-var": "error", // consistent
      "no-div-regex": "off", // see: logical-assignment-operators
      "no-else-return": ["error", { allowElseIf: false }], // consistent
      "no-empty-function": "error", // clear (no noop!)
      "no-empty-static-block": "error", // optimized
      "no-empty": "error", // optimized
      "no-eq-null": "off", // see: eqeqeq
      "no-eval": "error", // safe
      "no-extend-native": "error", // expected
      "no-extra-bind": "error", // optimized
      "no-extra-boolean-cast": "error", // optimized
      "no-extra-label": "off", // see: no-labels
      "no-global-assign": "error", // expected
      "no-implicit-coercion": ["error", { allow: ["!!"] }], // clear
      "no-implicit-globals": "error", // clear
      "no-implied-eval": "error", // safe
      "no-inline-comments": "off",
      "no-invalid-this": "error", // consistent
      "no-iterator": "error", // modern
      "no-label-var": "off", // see: no-labels
      "no-labels": "error", // clear
      "no-lone-blocks": "error", // clear
      "no-lonely-if": "error", // clear
      "no-loop-func": "error", // expected
      "no-magic-numbers": "error", // clear
      "no-multi-assign": "error", // safe
      "no-multi-str": "error", // clear
      "no-negated-condition": "error", // clear
      "no-nested-ternary": "error", // clear
      "no-new-func": "error", // safe
      "no-new-wrappers": "error", // clear
      "no-new": "error", // consistent
      "no-nonoctal-decimal-escape": "error", // modern
      "no-object-constructor": "error", // consistent
      "no-octal-escape": "error", // modern
      "no-octal": "error", // safe
      "no-param-reassign": "error", // clear
      "no-plusplus": ["error", { allowForLoopAfterthoughts: true }], // clear
      "no-proto": "error", // modern
      "no-redeclare": "off", // see: no-var
      "no-regex-spaces": "error", // clear
      "no-restricted-exports": "off",
      "no-restricted-globals": "off",
      "no-restricted-imports": "off",
      "no-restricted-properties": "off",
      "no-restricted-syntax": "off",
      "no-return-assign": "error", // clear
      "no-script-url": "error", // safe
      "no-sequences": "error", // clear
      "no-shadow": "error", // clear
      "no-shadow-restricted-names": "error", // expected
      "no-ternary": "off",
      "no-throw-literal": "error", // consistent
      "no-undef-init": "error", // consistent
      "no-undefined": "off", // see: no-shadow-restricted-names
      "no-underscore-dangle": "error", // clear [ES2022+]
      "no-unneeded-ternary": "error", // clear
      "no-unused-expressions": "error", // consistent
      "no-unused-labels": "off", // see: no-labels
      "no-useless-call": "error", // consistent
      "no-useless-catch": "error", // consistent
      "no-useless-computed-key": "error", // consistent
      "no-useless-concat": "error", // consistent
      "no-useless-constructor": "error", // consistent [ES2015+]
      "no-useless-escape": "error", // consistent
      "no-useless-rename": "error", // consistent
      "no-useless-return": "error", // consistent
      "no-var": "error", // consistent [ES2015+]
      "no-void": "error", // clear
      "no-warning-comments": ["error", {
        location: "anywhere",
        // these types of comments should be documented in an issue tracker
        terms: ["todo", "fixme"],
      }], // documented
      "no-with": "error",
      "object-shorthand": "error", // clear
      "one-var": ["error", "never"], // clear
      "operator-assignment": ["error", "never"], // clear
      "prefer-arrow-callback": "error", // consistent
      "prefer-const": "error", // consistent [ES2015+]
      "prefer-destructuring": "error", // clear [ES2015+]
      "prefer-exponentiation-operator": "error", // clear [ES2016+]
      "prefer-named-capture-group": "error", // clear [ES2018+]
      "prefer-numeric-literals": "error", // clear [ES2015+]
      "prefer-object-has-own": "error", // clear [ES2022+]
      "prefer-object-spread": "error", // clear [ES2018+]
      "prefer-promise-reject-errors": "error", // consistent [ES2017+]
      "prefer-regex-literals": "error", // clear
      "prefer-rest-params": "error", // clear [ES2015+]
      "prefer-spread": "error", // clear [ES2015+]
      "prefer-template": "error", // clear [ES2015+]
      "radix": "error", // consistent
      "require-await": "error", // consistent
      "require-unicode-regexp": "error", // consistent
      "require-yield": "error", // consistent
      "sort-imports": ["error", { memberSyntaxSortOrder: ["multiple", "single", "all", "none"] }], // consistent
      "sort-keys": ["error", "asc", { natural: true }], // consistent
      "sort-vars": "error", // consistent
      "strict": "error",
      "symbol-description": "error", // clear [ES2015+]
      "vars-on-top": "off", // see: no-var
      "yoda": ["error", "never", { exceptRange: true }], // clear
    },
  };
}
