# React 2022 Boilerplate
Base boilerplate I'm using for my Frontend projects. On branch 'nav-and-data' you can find a version with `react-router` and `redux` configured.

---

## Includes:
- React
- Webpack:
  - Configuration for SVGs
- TypeScript
- Prettier :red_circle: **(WARNING: Opinionated configuration)** :red_circle:
- ESLint :red_circle: **(WARNING: Opinionated configuration)** :red_circle:
- Husky with lint-staged configured
- On branch `nav-and-data` version with `react-router` and `redux` configured.

---

## Local Setup
1. `yarn install`
2. `npx husky-init`
3. `npx storybook init`
4. `yarn start` to start the App

Everything is already preconfigured besides that

## Usage
- `yarn lint` to see ESLint output
- `yarn format` to automatically format all work files based on prettier and lint rules
- `yarn build:dev` to prepare a development build
- `yarn build:prod` to prepare a production build
- `yarn storybook` to start the Storybook server
- `yarn start` to start a local server with hot-reloading


## Our workflow
Check [this](https://www.componentdriven.org) out first.
Please remember that the components in `stories` are only the default Storybook examples. Use `styled-components` approach instead of CSS.

1. Prepare a component separately in Storybook
2. Write unit tests for each component
3. Prepare or use existing layout of a page
4. Implement the page and it's functionalities/widgets