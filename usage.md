# Sunbird UI Components NPM Package

### Using in Angular project

Here are the steps to use this library.


1) Install Sunbird Components Library
  ```
    npm i --save sb-ui-components
  ```

2) Add Global CSS in `angular.json` -
  ```
    "styles": [
      ...,
      "node_modules/sb-ui-components/assets/scss/styles.scss",
      ...
    ],
  ```

3) Import Library in `app.module.ts` -
   ```
      import { SbUiComponentsModule } from 'sb-ui-components';
      @NgModule({
        ...
        imports: [SbUiComponentsModule, ...],
        ...
      })
      export class YourAppModule {
      }
   ```
