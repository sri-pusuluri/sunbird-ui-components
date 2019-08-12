import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SbModule } from 'sunbird-ui-component';
import { SbCardBasic } from './card-basic';

@NgModule({
  imports: [BrowserModule, NgbModule, SbModule],
  declarations: [SbCardBasic],
  exports: [SbCardBasic],
  bootstrap: [SbCardBasic]
})
export class SbCardBasicModule {}
