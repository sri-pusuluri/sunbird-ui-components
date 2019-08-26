import { NgModule } from '@angular/core';
import { SbUiComponentsComponent } from './sb-ui-components.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [SbUiComponentsComponent, CardComponent],
  imports: [
  ],
  exports: [SbUiComponentsComponent, CardComponent]
})
export class SbUiComponentsModule { }
