import {Component} from '@angular/core';
import {Snippet} from '../../shared/code/snippet';

@Component({
  templateUrl: './getting-started.component.html'
})
export class GettingStartedPage {
  codeInstall = Snippet({
    lang: 'bash',
    code: `npm install --save @Sunbird-Ed/sunbird-ui-components`,
  });

  codeRoot = Snippet({
    lang: 'typescript',
    code: `
      import {SbModule} from '@Sunbird-Ed/sunbird-ui-components';

      @NgModule({
        ...
        imports: [SbModule, ...],
        ...
      })
      export class YourAppModule {
      }
    `,
  });

  codeOther = Snippet({
    lang: 'typescript',
    code: `
      import {SbPaginationModule, SbbAlertModule} from '@Sunbird-Ed/sunbird-ui-components';

      @NgModule({
        ...
        imports: [SbPaginationModule, SbAlertModule, ...],
        ...
      })
      export class YourAppModule {
      }
    `,
  });

  codeSystem = Snippet({
    lang: 'typescript',
    code: `
      map: {
        '@Sunbird-Ed/sunbird-ui-components': 'node_modules/@Sunbird-Ed/sunbird-ui-components/bundles/sb.js',
      }
    `,
  });
}
