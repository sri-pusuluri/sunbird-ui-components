import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ModalComponent , ModalHeaderComponent, ModalContentComponent, ModalActionsComponent } from './modal/modal.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [CardComponent, ModalComponent, ModalHeaderComponent, ModalContentComponent, ModalActionsComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [CardComponent, ModalComponent, ModalHeaderComponent, ModalContentComponent, ModalActionsComponent, ButtonComponent]
})
export class SbUiComponentsModule { }
