import {Component} from '@angular/core';
import {Snippet} from '../../shared/code/snippet';

@Component({
  templateUrl: './getting-started.component.html'
})
export class GettingStartedPage {
  codeInstall = Snippet({
    lang: 'bash',
    code: `npm install --save sunbird-ui-components`,
  });

  codeRoot = Snippet({
    lang: 'typescript',
    code: `
      import {SbModule} from 'sunbird-ui-components';

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
      import {NgbPaginationModule,NgbAlertModule} from 'sunbird-ui-components';

      @NgModule({
        ...
        imports: [NgbPaginationModule, NgbAlertModule, ...],
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
        'sunbird-ui-components': 'node_modules/sunbird-ui-components/bundles/sb.js',
      }
    `,
  });
}
