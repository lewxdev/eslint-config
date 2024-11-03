import type eslint from "@eslint/js"
import type { Linter } from "eslint";
import type { ESLintRules } from "eslint/rules";

type ConfigOptions = {
  /**
   * @description If `true`, typescript-eslint will be included
   * @default true
   */
  typescript?: boolean;
};

type CreateConfig = typeof createConfig;

export const createConfig: (options?: ConfigOptions) => Linter.Config<ESLintRules>[];
