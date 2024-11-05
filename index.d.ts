import type eslint from "@eslint/js"
import type { Linter } from "eslint";
import type { ESLintRules } from "eslint/rules";
import type globals from "globals";

type ConfigOptions = {
  /**
   * @description If `true`, typescript-eslint will be included
   * @default true
   */
  typescript?: boolean;

  /**
   * @description Additional configs to include, with optional environments
   * @default []
   */
  configs?: (Linter.Config<ESLintRules> & {
    /**
     * @description An optional list of environments to include
     * @see {@link https://eslint.org/docs/v9.x/use/configure/language-options#predefined-global-variables}
     */
    env?: (keyof typeof globals)[]
  })[];
};

type CreateConfig = typeof createConfig;

export const createConfig: (options?: ConfigOptions) => Linter.Config<ESLintRules>[];
