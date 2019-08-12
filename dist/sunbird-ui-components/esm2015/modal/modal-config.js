/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Options available when opening new modal windows with `NgbModal.open()` method.
 * @record
 */
export function NgbModalOptions() { }
if (false) {
    /**
     * `aria-labelledby` attribute value to set on the modal window.
     *
     * \@since 2.2.0
     * @type {?|undefined}
     */
    NgbModalOptions.prototype.ariaLabelledBy;
    /**
     * If `true`, the backdrop element will be created for a given modal.
     *
     * Alternatively, specify `'static'` for a backdrop which doesn't close the modal on click.
     *
     * Default value is `true`.
     * @type {?|undefined}
     */
    NgbModalOptions.prototype.backdrop;
    /**
     * Callback right before the modal will be dismissed.
     *
     * If this function returns:
     * * `false`
     * * a promise resolved with `false`
     * * a promise that is rejected
     *
     * then the modal won't be dismissed.
     * @type {?|undefined}
     */
    NgbModalOptions.prototype.beforeDismiss;
    /**
     * If `true`, the modal will be centered vertically.
     *
     * Default value is `false`.
     *
     * \@since 1.1.0
     * @type {?|undefined}
     */
    NgbModalOptions.prototype.centered;
    /**
     * A selector specifying the element all new modal windows should be appended to.
     *
     * If not specified, will be `body`.
     * @type {?|undefined}
     */
    NgbModalOptions.prototype.container;
    /**
     * The `Injector` to use for modal content.
     * @type {?|undefined}
     */
    NgbModalOptions.prototype.injector;
    /**
     * If `true`, the modal will be closed when `Escape` key is pressed
     *
     * Default value is `true`.
     * @type {?|undefined}
     */
    NgbModalOptions.prototype.keyboard;
    /**
     * Scrollable modal content (false by default).
     *
     * \@since 5.0.0
     * @type {?|undefined}
     */
    NgbModalOptions.prototype.scrollable;
    /**
     * Size of a new modal window.
     * @type {?|undefined}
     */
    NgbModalOptions.prototype.size;
    /**
     * A custom class to append to the modal window.
     * @type {?|undefined}
     */
    NgbModalOptions.prototype.windowClass;
    /**
     * A custom class to append to the modal backdrop.
     *
     * \@since 1.1.0
     * @type {?|undefined}
     */
    NgbModalOptions.prototype.backdropClass;
}
/**
 * A configuration service for the [`NgbModal`](#/components/modal/api#NgbModal) service.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all modals used in the application.
 *
 * \@since 3.1.0
 */
export class NgbModalConfig {
    constructor() {
        this.backdrop = true;
        this.keyboard = true;
    }
}
NgbModalConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ NgbModalConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgbModalConfig_Factory() { return new NgbModalConfig(); }, token: NgbModalConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgbModalConfig.prototype.backdrop;
    /** @type {?} */
    NgbModalConfig.prototype.keyboard;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN1bmJpcmQtZWQvc3VuYmlyZC11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibW9kYWwvbW9kYWwtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFXLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFLbkQscUNBZ0ZDOzs7Ozs7OztJQTFFQyx5Q0FBd0I7Ozs7Ozs7OztJQVN4QixtQ0FBOEI7Ozs7Ozs7Ozs7OztJQVk5Qix3Q0FBaUQ7Ozs7Ozs7OztJQVNqRCxtQ0FBbUI7Ozs7Ozs7SUFPbkIsb0NBQW1COzs7OztJQUtuQixtQ0FBb0I7Ozs7Ozs7SUFPcEIsbUNBQW1COzs7Ozs7O0lBT25CLHFDQUFxQjs7Ozs7SUFLckIsK0JBQTBCOzs7OztJQUsxQixzQ0FBcUI7Ozs7Ozs7SUFPckIsd0NBQXVCOzs7Ozs7Ozs7O0FBWXpCLE1BQU0sT0FBTyxjQUFjO0lBRDNCO1FBRUUsYUFBUSxHQUF1QixJQUFJLENBQUM7UUFDcEMsYUFBUSxHQUFHLElBQUksQ0FBQztLQUNqQjs7O1lBSkEsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7Ozs7SUFFOUIsa0NBQW9DOztJQUNwQyxrQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdG9yfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBPcHRpb25zIGF2YWlsYWJsZSB3aGVuIG9wZW5pbmcgbmV3IG1vZGFsIHdpbmRvd3Mgd2l0aCBgTmdiTW9kYWwub3BlbigpYCBtZXRob2QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiTW9kYWxPcHRpb25zIHtcbiAgLyoqXG4gICAqIGBhcmlhLWxhYmVsbGVkYnlgIGF0dHJpYnV0ZSB2YWx1ZSB0byBzZXQgb24gdGhlIG1vZGFsIHdpbmRvdy5cbiAgICpcbiAgICogQHNpbmNlIDIuMi4wXG4gICAqL1xuICBhcmlhTGFiZWxsZWRCeT86IHN0cmluZztcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3AgZWxlbWVudCB3aWxsIGJlIGNyZWF0ZWQgZm9yIGEgZ2l2ZW4gbW9kYWwuXG4gICAqXG4gICAqIEFsdGVybmF0aXZlbHksIHNwZWNpZnkgYCdzdGF0aWMnYCBmb3IgYSBiYWNrZHJvcCB3aGljaCBkb2Vzbid0IGNsb3NlIHRoZSBtb2RhbCBvbiBjbGljay5cbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWAuXG4gICAqL1xuICBiYWNrZHJvcD86IGJvb2xlYW4gfCAnc3RhdGljJztcblxuICAvKipcbiAgICogQ2FsbGJhY2sgcmlnaHQgYmVmb3JlIHRoZSBtb2RhbCB3aWxsIGJlIGRpc21pc3NlZC5cbiAgICpcbiAgICogSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zOlxuICAgKiAqIGBmYWxzZWBcbiAgICogKiBhIHByb21pc2UgcmVzb2x2ZWQgd2l0aCBgZmFsc2VgXG4gICAqICogYSBwcm9taXNlIHRoYXQgaXMgcmVqZWN0ZWRcbiAgICpcbiAgICogdGhlbiB0aGUgbW9kYWwgd29uJ3QgYmUgZGlzbWlzc2VkLlxuICAgKi9cbiAgYmVmb3JlRGlzbWlzcz86ICgpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+O1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIGJlIGNlbnRlcmVkIHZlcnRpY2FsbHkuXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICpcbiAgICogQHNpbmNlIDEuMS4wXG4gICAqL1xuICBjZW50ZXJlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCBhbGwgbmV3IG1vZGFsIHdpbmRvd3Mgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCB3aWxsIGJlIGBib2R5YC5cbiAgICovXG4gIGNvbnRhaW5lcj86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGBJbmplY3RvcmAgdG8gdXNlIGZvciBtb2RhbCBjb250ZW50LlxuICAgKi9cbiAgaW5qZWN0b3I/OiBJbmplY3RvcjtcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbW9kYWwgd2lsbCBiZSBjbG9zZWQgd2hlbiBgRXNjYXBlYCBrZXkgaXMgcHJlc3NlZFxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlIGlzIGB0cnVlYC5cbiAgICovXG4gIGtleWJvYXJkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2Nyb2xsYWJsZSBtb2RhbCBjb250ZW50IChmYWxzZSBieSBkZWZhdWx0KS5cbiAgICpcbiAgICogQHNpbmNlIDUuMC4wXG4gICAqL1xuICBzY3JvbGxhYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2l6ZSBvZiBhIG5ldyBtb2RhbCB3aW5kb3cuXG4gICAqL1xuICBzaXplPzogJ3NtJyB8ICdsZycgfCAneGwnO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSBjbGFzcyB0byBhcHBlbmQgdG8gdGhlIG1vZGFsIHdpbmRvdy5cbiAgICovXG4gIHdpbmRvd0NsYXNzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSBjbGFzcyB0byBhcHBlbmQgdG8gdGhlIG1vZGFsIGJhY2tkcm9wLlxuICAgKlxuICAgKiBAc2luY2UgMS4xLjBcbiAgICovXG4gIGJhY2tkcm9wQ2xhc3M/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBjb25maWd1cmF0aW9uIHNlcnZpY2UgZm9yIHRoZSBbYE5nYk1vZGFsYF0oIy9jb21wb25lbnRzL21vZGFsL2FwaSNOZ2JNb2RhbCkgc2VydmljZS5cbiAqXG4gKiBZb3UgY2FuIGluamVjdCB0aGlzIHNlcnZpY2UsIHR5cGljYWxseSBpbiB5b3VyIHJvb3QgY29tcG9uZW50LCBhbmQgY3VzdG9taXplIHRoZSB2YWx1ZXMgb2YgaXRzIHByb3BlcnRpZXMgaW5cbiAqIG9yZGVyIHRvIHByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIGFsbCBtb2RhbHMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24uXG4qXG4qIEBzaW5jZSAzLjEuMFxuKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE5nYk1vZGFsQ29uZmlnIGltcGxlbWVudHMgTmdiTW9kYWxPcHRpb25zIHtcbiAgYmFja2Ryb3A6IGJvb2xlYW4gfCAnc3RhdGljJyA9IHRydWU7XG4gIGtleWJvYXJkID0gdHJ1ZTtcbn1cbiJdfQ==