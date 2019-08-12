import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SbCardConfig } from './card-config';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [SbCardConfig],
  exports: [SbCardConfig],
  bootstrap: [SbCardConfig]
})
export class SbCardConfigModule {}
