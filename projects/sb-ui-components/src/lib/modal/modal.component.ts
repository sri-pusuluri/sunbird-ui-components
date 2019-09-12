import { Component, OnInit, Input } from '@angular/core';

/************************
 * Modal Wapper
 * *********************/

@Component({
  selector: 'sb-modal',
  template: `
  <div class="sbmodal--overlay"></div>
  <div class="sbmodal sbmodal--md sbmodal--primary sbmodal--isNotClosable">
    <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  @Input() isClosable: boolean;
  @Input() size: string;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}

/************************
 * Modal Header
 * *********************/

@Component({
  selector: 'sb-modal-header',
  template: `
  <div class="sbmodal__header">
    <h4><ng-content></ng-content></h4>
    <a
      href="javascript:void(0)"
      title="Close"
      class="i-link sbbtn-close">
        <svg class="sbicon sbicon--close sbicon--xs sbicon--white">
          <use xlink:href="../styles/images/sprite.svg#close"></use>
        </svg>
    </a>
  </div>`,
  styleUrls: ['./modal.component.scss']
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
  styleUrls: ['./modal.component.scss']
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
  styleUrls: ['./modal.component.scss']
})
export class ModalActionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
