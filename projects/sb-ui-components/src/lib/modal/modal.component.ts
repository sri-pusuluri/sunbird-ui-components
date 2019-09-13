import { Component, OnInit, Input, ViewEncapsulation, ElementRef, OnDestroy } from '@angular/core';

/************************
 *    Modal Wapper
 ************************
 * size: sm,md,lg and full
 * theme: primary, warning, tertiary, success, secondary and error
 * isClosable: true and false
 * customClass: Add custom classes to modal wrapper
 * Note: Syles do not apply to Child components like header, content and actions
 *       because the css selector gets modified for default angular encapsulation mode
 *       hence encapsulation: ViewEncapsulation.None is added
 * https://stackblitz.com/edit/angular-6-custom-modal-dialog
 * *********************/

@Component({
  selector: 'sb-modal',
  template: `
  <div
    *ngIf="!showmodal"
    (click)="showmodal = showmodal"
    class="sbmodalWrapper {{customClass}}"
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
 *    Modal Header
 ************************
 * hideCloseButton is an optional boolean config.
 * If set true then close button wont be shown on modal header.
 * *********************/

@Component({
  selector: 'sb-modal-header',
  template: `
  <div class="sbmodal__header">
    <h4><ng-content></ng-content></h4>
    <a
      *ngIf="!hideCloseButton"
      title="Close"
      class="i-link sbbtn-close">
        <svg class="sbicon sbicon--close sbicon--xs sbicon--white">
          <use xlink:href="images/sprite.svg#close"></use>
        </svg>
    </a>
  </div>`,
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalHeaderComponent implements OnInit {
  @Input() hideCloseButton: boolean;

  constructor() { }

  ngOnInit() {}

}

/************************
 *    Modal Content
 ************************
 * isScrollable is an optional boolean config.
 * If set true then content box will have scrollbar
 * otherwise it will be lengthy as per the content.
 * *********************/

@Component({
  selector: 'sb-modal-content',
  template: `
  <div
    class="sbmodal__content"
    [ngClass]="{
      'sbmodal__content-scroll': isScrollable == true
    }"
    >
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalContentComponent implements OnInit {
  @Input() isScrollable: boolean;

  constructor() { }

  ngOnInit() {}

}

/************************
 *   Modal Actions
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
