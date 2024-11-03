# @lewxdev/eslint-config

An opinionated, shareable ESLint configuration for my projects.

## Usage

1. To **install**, run one of the following commands using your preferred
   package manager:

   ### Install from npm

   ```sh
   npm add eslint @lewxdev/eslint-config --save-dev
   ```

   ### Install from GitHub

   ```sh
   npm add eslint github:lewxdev/eslint-config --save-dev
   ```

1. To **setup**, use the following in your `eslint.config.js` file:

   ```js
   import { createConfig } from "@lewxdev/eslint-config";

   export default createConfig();
   ```

The `createConfig` function accepts optional customization options based on your
project's needs. It's typed and self-documented, so feel free to explore what's
available!
