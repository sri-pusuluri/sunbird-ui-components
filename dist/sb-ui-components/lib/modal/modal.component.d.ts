import { OnInit } from '@angular/core';
/************************
 * Modal Wapper
 * *********************/
export declare class ModalComponent implements OnInit {
    isClosable: boolean;
    size: string;
    type: string;
    constructor();
    ngOnInit(): void;
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
