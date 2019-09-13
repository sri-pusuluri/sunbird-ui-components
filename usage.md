# Sunbird UI Components NPM Package

- [NPM Package](https://www.npmjs.com/package/sb-ui-components){:target="_blank"}
- [Demo Site](https://sunbird-ed.github.io/sunbird-ui-components/site/){:target="_blank"}
- [NPM Package usage](https://github.com/Sunbird-Ed/sunbird-ui-components/blob/master/usage.md){:target="_blank"}
- [Library Developer Docs](https://github.com/Sunbird-Ed/sunbird-ui-components/blob/master/developer.md){:target="_blank"}

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
