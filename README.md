# Moov2 Pattern Library

Starting point for developing a pattern library using [Fractal](https://fractal.build/).

## Prerequisites

To setup and run Fractal you'll need to have [NodeJS](https://nodejs.org/en/) installed. Fractal requires Node.js v4.4.7+ to run.

## Getting started

- Install [Fractal](https://fractal.build/guide/installation) via NPM
	- Install Fractal in your project: `npm install --save @frctl/fractal`
	- Install Fractal CLI (optional): `npm i -g @frctl/fractal`
- Run `npm install --save @frctl/mandelbrot` within the project directory to add [Fractal theme customisation](https://fractal.build/guide/web/default-theme#configuration) which can be tweaked in the `fractal.js` config file
- Run `yarn install` from the root of the project
- Run `develop.bat` file to start development

**Note:** In order for `develop.bat` to work on new projects, ensure that the following folder structure exists: `styles/styles.scss`