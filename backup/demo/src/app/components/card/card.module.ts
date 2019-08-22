import { NgModule } from '@angular/core';

import { NgbdSharedModule } from '../../shared';
import { ComponentWrapper } from '../../shared/component-wrapper/component-wrapper.component';
import { NgbdComponentsSharedModule, NgbdDemoList } from '../shared';
import { NgbdApiPage } from '../shared/api-page/api.component';
import { NgbdExamplesPage } from '../shared/examples-page/examples.component';

import { SbdCardBasic } from './demos/basic/card-basic';
import { SbdCardBasicModule } from './demos/basic/card-basic.module';
import { SbdCardConfig } from './demos/config/card-config';
import { SbdCardConfigModule } from './demos/config/card-config.module';

const DEMOS = {
  basic: {
    title: 'Basic Card',
    type: SbdCardBasic,
    files: [
      {
        name: 'card-basic.html',
        source: require('!!raw-loader!./demos/basic/card-basic.html')
      },
      {
        name: 'card-basic.ts',
        source: require('!!raw-loader!./demos/basic/card-basic')
      }
    ]
  },
  config: {
    title: 'Global configuration of cards',
    type: SbdCardConfig,
    files: [
      {
        name: 'card-config.html',
        source: require('!!raw-loader!./demos/config/card-config.html')
      },
      {
        name: 'card-config.ts',
        source: require('!!raw-loader!./demos/config/card-config')
      }
    ]
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapper,
    children: [
      { path: 'examples', component: NgbdExamplesPage },
      { path: 'api', component: NgbdApiPage }
    ]
  }
];

@NgModule({
  imports: [
    NgbdSharedModule,
    NgbdComponentsSharedModule,
    SbdCardBasicModule,
    SbdCardConfigModule
  ]
})
export class SbCardModule {
  constructor(demoList: NgbdDemoList) {
    demoList.register('card', DEMOS);
  }
}
