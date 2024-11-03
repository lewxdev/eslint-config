import type eslint from "@eslint/js"
import type { Linter } from "eslint";
import type { ESLintRules } from "eslint/rules";

type ConfigOptions = {
  /**
   * The base configuration to extend
   * @default "all"
   */
  base?: keyof typeof eslint.configs;
  /**
   * If `true`, typescript-eslint will be included and eslint rules already
   * handled by typescript will be disabled
   * @default true
   */
  typescript?: boolean;
};

type CreateConfig = typeof createConfig;

export const createConfig: (config: ConfigOptions) => Linter.Config<ESLintRules>[];
