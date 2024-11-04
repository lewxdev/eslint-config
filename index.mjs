/** @import { Linter } from "eslint" */
/** @import { CreateConfig } from "." */

import eslint from "@eslint/js";
import globals from "globals";
import tslint from "typescript-eslint";

/** @type {CreateConfig} */
export const createConfig = ({ typescript = true, configs = [] } = {}) => [
  eslint.configs.all,
  ({
    rules: {
      // possible problems
      "array-callback-return": ["error", { checkForEach: true }],
      "no-cond-assign": ["error", "always"],

      // suggestions
      "capitalized-comments": ["error", "never"],
      "complexity": "off",
      "func-style": ["error", "declaration"],
      "grouped-accessor-pairs": ["error", "getBeforeSet"],
      "id-denylist": [
        "error",
        // abbreviations
        "ctx", "err", "evt", "msg", "obj", "opt", "opts", "req", "res", "str", "val",
        // non-descriptive
        "callback", "data", "item", "items", "result", "results",
        // placeholders
        "foo", "bar", "baz", "qux",
      ],
      "id-length": ["error", { min: 3, max: 30 }],
      "max-lines-per-function": "off",
      "max-nested-callbacks": ["error", { max: 3 + 1 }],
      "max-params": ["error", {
        // prefer an options object to improve readability and refactoring
        max: 2,
      }],
      "max-statements": "off",
      "no-else-return": ["error", { allowElseIf: false }],
      "no-implicit-coercion": ["error", { allow: ["!!"] }],
      "no-inline-comments": "off",
      "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
      "no-ternary": "off",
      "no-warning-comments": ["error", {
        location: "anywhere",
        // these types of comments should be documented in an issue tracker
        terms: ["todo", "fixme"],
      }],
      "one-var": ["error", "never"],
      "sort-imports": ["error", { memberSyntaxSortOrder: ["multiple", "single", "all", "none"] }],
      "sort-keys": ["error", "asc", { natural: true }],
      "sort-vars": "error",
      "yoda": ["error", "never", { exceptRange: true }],
    },
  }),
  ...(typescript
    ? // the typescript-eslint configs use more strict types than eslint
      /** @type {Linter.Config[]} */ (tslint.configs.strict)
    : []),

  // extended configs
  ...configs.map(({ env, ...config }) => env
    ? {
        ...config,
        languageOptions: {
          ...config.languageOptions,
          globals: {
            ...Object.assign(
              config.languageOptions?.globals || {},
              ...env.map((key) => globals[key]),
            ),
          },
        },
      }
    : config),
];
