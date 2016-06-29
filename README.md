# Angular2 Component Starter

This is a component starter for Angular 2.
This starter has all the needed packages and configuration to create a redistributable component for Angular 2 projects.

### What the repo provides
- Webpack configuration to build a standalone component (without all the rest of the packages)
- Webpack configuration to build the demo app with which you can play with your components
- `Karma/Jasmine` configuration with a basic test to get started (with `Coverage` included)
- Typescript configuration comes with `tslint.json` and `tsconfig.json` already set up.
- `travis.yml` already set up to build your packages with TravisCI
- `SCSS/Autoprefixer` loaders for compiling style assets

## Quick start. Install the component from NPM by running:

    npm install ng2-component-starter --save
    
## Installing and using the package in Angular 2 projects.

Let's say your package is called ng2-my-great-component. You will need to install it with NPM and then you will be able
to import it in your project without the need to install any other package you used to build it as this comes compiled
with Webpack.
    
    // install package
    npm install ng2-my-great-component --save
    
    // use it in your project
    
    import { MyGreatComponent } from 'ng2-my-great-component';
    
## If you want to run the tests, run the command:

    npm test
    
## Publish your component on NPM
Publishing on NPM is extremely easy. The `prepublish` command in the package.json ensures that NPM packages will contain the dist
folder needed to distribute our component without the need of installing the development dependendies needed to build this.

Assuming you already have an account on NPM, run the command:

    npm publish

**You will need to overwrite the name of you components in various parts of the app. But the heavy is already done :).**

Thanks to [Angular2 Seed](https://github.com/angular/angular2-seed) and [Angular Class Starter](https://github.com/AngularClass/angular2-webpack-starter/) for the great inputs in creating this.