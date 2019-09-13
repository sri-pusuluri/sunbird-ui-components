import { OnInit, ElementRef, OnDestroy } from '@angular/core';
/************************
 * Modal Wapper
 * Syles do not apply to Child components like header, content and actions
 * because the css selector gets modified for default angular encapsulation mode
 * hence encapsulation: ViewEncapsulation.None is added
 * https://stackblitz.com/edit/angular-6-custom-modal-dialog
 * *********************/
export declare class ModalComponent implements OnInit, OnDestroy {
    private el;
    private element;
    showmodal: boolean;
    modal: any;
    isClosable: boolean;
    size: string;
    theme: string;
    customClass: string;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
/************************
 * Modal Header
 * *********************/
export declare class ModalHeaderComponent implements OnInit {
    showCloseButton: boolean;
    constructor();
    ngOnInit(): void;
}
/************************
 * Modal Content
 * *********************/
export declare class ModalContentComponent implements OnInit {
    showScroll: boolean;
    constructor();
    ngOnInit(): void;
}
/************************
 * Modal Actions
 * *********************/
export declare class ModalActionsComponent implements OnInit {
    constructor();
    ngOnInit(): void;
}
