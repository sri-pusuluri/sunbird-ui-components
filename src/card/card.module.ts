import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SbCard} from './card';

export {SbCard} from './card';
export {SbCardConfig} from './card-config';

@NgModule({declarations: [SbCard], exports: [SbCard], imports: [CommonModule], entryComponents: [SbCard]})
export class SbCardModule {
}
