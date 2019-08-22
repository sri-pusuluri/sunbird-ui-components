import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from 'sunbird-ui-component';

import { SbdCardConfig } from './card-config';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [SbdCardConfig],
  exports: [SbdCardConfig],
  bootstrap: [SbdCardConfig]
})
export class SbdCardConfigModule {}
