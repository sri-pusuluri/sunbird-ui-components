import { NgModule } from '@angular/core';
import { SbUiComponentsComponent } from './sb-ui-components.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [SbUiComponentsComponent, CardComponent, ModalComponent],
  imports: [
  ],
  exports: [SbUiComponentsComponent, CardComponent, ModalComponent]
})
export class SbUiComponentsModule { }
