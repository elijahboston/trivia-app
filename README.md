# Trivia App
A ten question trivia game.

**Live App:** https://reverent-brahmagupta-578276.netlify.com/

## Quick Start
To install required packages and run a local development server:
```
# install packages
npm i
# run webpack dev server
npm run dev
```

## NPM Commands
Run any of these with `npm run <command>`
|command|description|
|---|---|
|dev|Launch webpack dev server|
|storybook|Launch Storybook|
|test|Lint and run integration tests|
|build|Run webpack in production mode|
|build-docs|Generate Typedoc documentation|
|reset-test-cache|Clear Ava's test cache|

## Stack Overview
- Written in **Typescript** (transpiled through Babel)
- **Typedoc** support
- Bundled using **Webpack**
- State Management using **Redux** and **Thunks**
- Styling with **Styled JSX**
- Tests are run using **Ava**, with **Enzyme** to handle rendering and interaction.
- Linting handled by **xo**, with **Prettier** formatting enabled
- **Storybook** integration
- **Netlify** integration