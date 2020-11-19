# SetUp Zilla

![SetUpZilla](./src/assets/dinosaur.svg)

SetUp Zilla is a starter project to Next.Js projects.

## structure

The project follows the standard organization structure of Next.JS.

```
setup-zilla/
  cypress/                              // Cypress settings and tests
  public/                               // Public archives in general
  src/                                  // Main project files
      assets/                           // Assets used in the project
      components/                       // Components next
      pages/                            // Project pages / routes
      styles/                           // Project styles
  .editorconfig                         // Default editor configuration
  .eslintignore                         // Eslint ignore rules
  .eslintrc                             // Eslint configuration
  .gitignore                            // Git ignore rules
  .travis.yml                           // Travis config
  README.md                             // Project README file
  babel.config.js                       // Babel settings
  cyopress.json                         // Cypress configuration
  jest.config.js                        // Jest settings
  next-env.d.ts                         // File that ensures that Next.js types are selected by the TS compiler
  next.config.js                        // Next.js settings
  package.json                          // Central project configuration file
  tsconfig.json                         // Typescript configuration file
  yarn.lock                             // Yarn project management file for Yarn
```

## tests

  The test tools I chose to use jest + react test library for unit tests and cypress for e2e tests.

  The configuration used for [jest](https://jestjs.io/docs/en/configuration) was the default and cypres was adapted to use TS.

  To test files i preferred to keep the test standard with the ```__tests__``` folders for each component, page or whatever will be tested unitarily.

  Use of cypress base structure for e2e and interface tests.

## Automations

  Husky is used in the pre-commit, lint check, and pre-push, test check steps.

## Improvements:

  Add findRelatedTests to the pre-push.
  Add a commit pattern and use it in the pre-commit.

## Tools

  [Next.JS](https://nextjs.org/)

  [React](https://reactjs.org/)

  [Styled-components](https://styled-components.com/)

  [Typescript](https://www.typescriptlang.org/)

  [Babel](https://babeljs.io/)

  [EsLint](https://eslint.org/)

  [Jest](https://jestjs.io/en/)

  [Cypress](https://www.cypress.io/)

  [Husky](https://github.com/typicode/husky)

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install.

Create a ```.env.local``` file on the root level folowing the .env.example.

Install dependencies:

```sh

  yarn

```

Run in developer mode

```sh

yarn run dev

```
