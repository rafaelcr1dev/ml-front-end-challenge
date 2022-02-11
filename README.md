![alt text](https://github.com/rafaelcr1dev/ml-front-end-challenge/blob/master/public/images/Logo_ML%402x.png?raw=true)


![Tests](https://github.com/rafaelcr1dev/ml-front-end-challenge/actions/workflows/ci.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/rafaelcr1dev/ml-front-end-challenge/badge.svg?branch=master)](https://coveralls.io/github/rafaelcr1dev/ml-front-end-challenge?branch=master)

# Front End Technical Challenge

![alt text](https://github.com/rafaelcr1dev/ml-front-end-challenge/blob/master/.github/images/preview.gif?raw=true)

## 🛠 Development tools

In this project I'm using [Next.js](https://nextjs.org/), created by Vercel which allows features such as server-side rendering and static site generation for [ReactJS](https://reactjs.org/) based web applications

  - [Fetch](https://www.npmjs.com/package/fetch): To fetch http requests and manage reponses.
  - [SCCS](https://sass-lang.com/guide): To allow nesting CSS and others.
 - [Typescript](https://www.typescriptlang.org/): Syntactic superset of JavaScript and adds optional static typing to the language.
  - [BEM Methology](http://getbem.com/introduction/): Style methodology (block, element, modifier).
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): To get utilities like getByTestId to get element with "data-testid". This turn the tests more easy in components.
  - [Jest](https://jestjs.io/docs/getting-started): To allow/run tests on other files with or without the need for react-testing-library.

## Folder structure

Below is the project folder structure which is located within the ./src directory

  - **📁 src/__ mocks__/** (Mocks for API or others)
  - **📁 src/api/** (API Client with endpoints and functions that return promises)
  - **📁 src/components/** (Application components with the base files in each component like styles and tests)
  - **📁 src/config/** (General project settings files)
  - **📁 src/helpers/** (Methods helpers)
  - **📁 src/interfaces/** (Typescript interfaces for responses)
  - **📁 src/pages/** (Pages and API Routes)
  - **📁 src/serializes/** (Methods for handling response data from APIs)
  - **📁 src/styles/** (Font styles, globals, mixins, normalize and theme settings)

## Requirements

  - [Node v14+ (LTS)](https://nodejs.org/en/)
  - [yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/)

## Install dependencies

Open your terminal and type

```bash
## If you use yarn:
yarn
## Else you use npm:
npm i
```

## Running

Open your terminal and type

```bash
## If you use yarn:
yarn dev
## Else you use npm:
npm run dev
```
Your application is running on http://localhost:3000/, open your browser to see.

## Tests

Run the command below to test your production code

```bash
yarn test ## or npm run test
```
Run the command below to see the production code testing coverage

```bash
yarn test:ci ## or npm run test:ci
```

## Code patterns

In this project, Prettier is being used to help format the code and Eslint to check and correct possible syntax errors.

```bash
yarn eslint:fix ## or npm run eslint:fix
```

## Conventional Commits

In this project it is being [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit patterns.

```bash
## Examples git commit -m
"feat: Add new feature"
"docs: Add new documentation"
"fix: Fix interface types"
"chore: Add new libs and configuration of development"
```

## Generate CHANGELOG.md


Corresponds to a list containing the record of all changes made to a system

```bash
yarn changelog  ## or npm run changelog
```

## Build application

Next will build to application.

```bash
yarn build ## or npm run build
```

## Deployed on Vercel

https://ml-front-end-challenge.vercel.app

## Observation

- It was not necessary to use Express because Next.js was used.
- I would have liked to have used Travis CI to do the continuous integration, but it was not possible because now Travis asks for Credit Cards even in its Free version and at the moment I don't have Credit Cards.

## Author

- **Rafael Cruz** - *Initial work* - [Linkedin](https://www.linkedin.com/in/rafaelcr1/)

### Thanks for the interview and technical test, I hope to be part of the [Mercado Livre](https://www.mercadolivre.com.br) team.
