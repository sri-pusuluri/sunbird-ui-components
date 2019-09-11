# SB UI Components NPM Library

NPM Package - https://www.npmjs.com/package/sb-ui-components

## Creating Components in Sunbird UI Components NPM Library

Run `ng generate component component-name --project sb-ui-components` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project sb-ui-components`.
> Note: Don't forget to add `--project sb-ui-components` or else it will be added to the default project in your `angular.json` file. 

## Building Library

Run nodemon while in development mode. or else run `ng build sb-ui-components` to build the project. The build artifacts will be stored in the `dist/sb-ui-components` directory.

## Publishing NPM Package

After building your library with `ng build sb-ui-components`, run command `npm run publish`.

## Regenerate Github Site

Run command `npm run github`, and push changes to github.

## Running unit tests

Run `ng test sb-ui-components` to execute the unit tests via [Karma](https://karma-runner.github.io).
