# SbUiComponentsApp

## Creating Components in Sunbird UI Components NPM Library

Run `ng generate component component-name --project sb-ui-components` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project sb-ui-components`.
> Note: Don't forget to add `--project sb-ui-components` or else it will be added to the default project in your `angular.json` file. 

## Building Library

Run `ng build sb-ui-components` to build the project. The build artifacts will be stored in the `dist/sb-ui-components` directory.

## Publishing NPM Package

After building your library with `ng build sb-ui-components`, go to the dist folder `cd dist/sb-ui-components` and run `npm publish`.

## Running unit tests

Run `ng test sb-ui-components` to execute the unit tests via [Karma](https://karma-runner.github.io).