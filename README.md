# @djthoms/eslint-config

My eslint config settings.

## Usage

```sh
npm i -D eslint prettier @djthoms/eslint-config
```

## Plugins

- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-jest
- eslint-plugin-testing-library
- eslint-plugin-security
- eslint-plugin-vitest
- eslint-plugin-solid

## Parsers

- @babel/eslint-parser
- @typescript-eslint/parser

## Legacy config with typescript + react

```js
module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    "@djthoms/eslint-config/legacy",
    "@djthoms/eslint-config/legacy/react",
    "@djthoms/eslint-config/legacy/react-typescript",
    "@djthoms/eslint-config/legacy/typescript",
  ],
};
```

## Flat config with typescript + react

```js
import config from "@djthoms/eslint-config";

export default [
  ...config
];
```

Run through CLI:

```bash
npx eslint src/**/*.{ts,tsx}
```

## Available Configurations

This package comes with several configurations. They're detailed below:

| Export                                    | Description                                                                                                                                                      |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@djthoms/eslint-config`                  | Main export form the package. This sets up eslint with the recommended config and prettier                                                                       |
| `@djthoms/eslint-config/esmodules`        | Sets @babel/eslint-parser as the parser, es6 env, modules, and the ecmaVersion to 2018                                                                           |
| `@djthoms/eslint-config/jest`             | A generic config for writing jest tests with testing-library                                                                                                     |
| `@djthoms/eslint-config/react`            | A generic config for react projects that combines multiple react eslint plugins for accessibility, JSX, and more. Use with esmodules or typescript, but not both |
| `@djthoms/eslint-config/react-typescript` | React `.tsx` overrides                                                                                                                                           |
| `@djthoms/eslint-config/flow`             | A generic flow config that can be used with or without React                                                                                                     |
| `@djthoms/eslint-config/typescript`       | A generic typescript config that sets up `@typescript-eslint/parser` as the parser and can be used with or without React                                         |
| `@djthoms/eslint-config/vitest`           | A generic vitest config                                                                                                                                          |
| `@djthoms/eslint-config/solid`            | A config that works with solid.js                                                                                                                                |
