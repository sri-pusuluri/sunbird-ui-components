import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from 'sunbird-ui-component';
import { SbdCardBasic } from './card-basic';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [SbdCardBasic],
  exports: [SbdCardBasic],
  bootstrap: [SbdCardBasic]
})
export class SbdCardBasicModule {}
