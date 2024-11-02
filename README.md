# @lewxdev/eslint-config

An opinionated, shareable ESLint configuration for my projects.

## Installation

To install this ESLint configuration, run:

```sh
npm install @lewxdev/eslint-config --save-dev
```

## Usage

To use this ESLint configuration, add the following to your `eslint.config.js` file:

```js
import { createConfig } from "@lewxdev/eslint-config";

export default createConfig({
  typescript: true,
});
```
