import { Component, OnInit, Input, ViewEncapsulation, ElementRef, OnDestroy } from '@angular/core';

/************************
 * Modal Wapper
 * Syles do not apply to Child components like header, content and actions
 * because the css selector gets modified for default angular encapsulation mode
 * hence encapsulation: ViewEncapsulation.None is added
 * https://stackblitz.com/edit/angular-6-custom-modal-dialog
 * *********************/

@Component({
  selector: 'sb-modal',
  template: `
  <div
    *ngIf="!showmodal"
    (click)="showmodal = showmodal"
    class="sbmodalWrapper"
    [ngClass]="{
      'sbmodal--isNotClosable': isClosable == false,
      'sbmodal--isClosable': isClosable == true,
      'sbmodal--primary': theme == 'primary',
      'sbmodal--warning': theme == 'warning',
      'sbmodal--tertiary': theme == 'tertiary',
      'sbmodal--success': theme == 'success',
      'sbmodal--secondary': theme == 'secondary',
      'sbmodal--error': theme == 'error',
      'sbmodal--sm': size == 'sm',
      'sbmodal--md': size == 'md',
      'sbmodal--lg': size == 'lg',
      'sbmodal--full': size == 'full'
    }"
    >
    <div class="sbmodal">
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ModalComponent implements OnInit, OnDestroy {
  private element: any;
  showmodal: boolean;
  modal;
  @Input() isClosable: boolean;
  @Input() size: string;
  @Input() theme: string;
  @Input() customClass: string;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {}

  ngOnDestroy() {}

}

/************************
 * Modal Header
 * *********************/

@Component({
  selector: 'sb-modal-header',
  template: `
  <div class="sbmodal__header">
    <h4><ng-content></ng-content></h4>
    <button
      title="Close"
      class="i-link sbbtn-close">
        <svg class="sbicon sbicon--close sbicon--xs sbicon--white">
          <use xlink:href="../../images/sprite.svg#close"></use>
        </svg>
    </button>
  </div>`,
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalHeaderComponent implements OnInit {
  @Input() showCloseButton: boolean;

  constructor() { }

  ngOnInit() {
  }

}

/************************
 * Modal Content
 * *********************/

@Component({
  selector: 'sb-modal-content',
  template: `
  <div class="sbmodal__content sbmodal__content-scroll">
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalContentComponent implements OnInit {
  @Input() showScroll: boolean;
  constructor() { }

  ngOnInit() {
  }

}

/************************
 * Modal Actions
 * *********************/

@Component({
  selector: 'sb-modal-actions',
  template: `
  <div class="sbmodal__actions">
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalActionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
