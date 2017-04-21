# Homeui2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Installation, configure and usage
### Preconditions
First of all you have to install `npm` and `node.js` to your box - note that `NodeJS 7+` is required. See following links to help you with installation:
* [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/)
* [Node Version Manager](https://github.com/creationix/nvm#installation)

### Installation
First of all you have to install ```npm``` and ```node.js``` to your box. Installation instructions can
be found [here](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager). 

Note that ```node.js 7.x``` is required.

```bash
$ git clone https://github.com/jjtainio/homeui2
$ cd homeui2

# install the project's dependencies
$ npm install

# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn
```

### Configuration
See ```/src/env_example.js``` file and copy it to ```/src/env.js``` file and make
necessary changes to it.

## Development server
To start developing in the project run:

```bash
$ npm start
# OR
$ ng serve
```

Then head to `http://localhost:4200` in your browser. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
