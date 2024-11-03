/** @import { Linter } from "eslint" */
/** @import { CreateConfig } from "." */

import eslint from "@eslint/js";
import tslint from "typescript-eslint";

/** @type {CreateConfig} */
export const createConfig = ({ base = "all", typescript = true }) => [
  eslint.configs[base],
  ({
    rules: {
      // possible problems
      "array-callback-return": ["error", { checkForEach: true }],
      "no-cond-assign": ["error", "always"],

      // suggestions
      "capitalized-comments": ["error", "never"], // style
      "complexity": "off",
      "func-style": ["error", "declaration"], // consistent
      "grouped-accessor-pairs": ["error", "getBeforeSet"], // consistent
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
      "max-lines-per-function": "off",
      "max-nested-callbacks": ["error", { max: 3 + 1 }], // clear
      "max-params": ["error", { max: 2 }], // clear, consistent (should always use options)
      "max-statements": "off",
      "no-else-return": ["error", { allowElseIf: false }], // consistent
      "no-implicit-coercion": ["error", { allow: ["!!"] }], // clear
      "no-inline-comments": "off",
      "no-plusplus": ["error", { allowForLoopAfterthoughts: true }], // clear
      "no-ternary": "off",
      "no-warning-comments": ["error", {
        location: "anywhere",
        // these types of comments should be documented in an issue tracker
        terms: ["todo", "fixme"],
      }], // documented
      "one-var": ["error", "never"], // clear
      "sort-imports": ["error", { memberSyntaxSortOrder: ["multiple", "single", "all", "none"] }], // consistent
      "sort-keys": ["error", "asc", { natural: true }], // consistent
      "sort-vars": "error", // consistent
      "yoda": ["error", "never", { exceptRange: true }], // clear
    },
  }),
  ...(typescript
    ? // the typescript-eslint configs use more strict types than eslint
      /** @type {Linter.Config[]} */ (tslint.configs.strict)
    : []),
];
