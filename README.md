# @djthoms/eslint-config

My eslint config settings.

## Usage

```sh
npm i eslint prettier @djthoms/eslint-config --save-dev
```

## Plugins

- eslint-config-prettier
- eslint-plugin-flowtype
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-jest
- eslint-plugin-testing-library
- eslint-plugin-security

## Parsers

- @babel/eslint-parser
- @typescript-eslint/parser

## Sample usage with typescript + react

```js
module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    '@djthoms/eslint-config',
    '@djthoms/eslint-config/react',
    '@djthoms/eslint-config/react-typescript',
    '@djthoms/eslint-config/typescript',
  ],
};
```

Run through CLI:

```bash
npx eslint src/**/*.{ts,tsx}
```

### Sample usage using flow + react

```js
module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    '@djthoms/eslint-config',
    '@djthoms/eslint-config/esmodules',
    '@djthoms/eslint-config/react',
    '@djthoms/eslint-config/flow',
  ],
};
```

Run through CLI:

```sh
npx eslint 'src/**/*.{js,jsx}'
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
