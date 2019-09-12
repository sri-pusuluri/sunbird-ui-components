import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ModalComponent , ModalHeaderComponent, ModalContentComponent, ModalActionsComponent } from './modal/modal.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [CardComponent, ModalComponent, ModalHeaderComponent, ModalContentComponent, ModalActionsComponent, ButtonComponent],
  imports: [
  ],
  exports: [CardComponent, ModalComponent, ModalHeaderComponent, ModalContentComponent, ModalActionsComponent, ButtonComponent]
})
export class SbUiComponentsModule { }
