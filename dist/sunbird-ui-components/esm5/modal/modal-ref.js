/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A reference to the currently opened (active) modal.
 *
 * Instances of this class can be injected into your component passed as modal content.
 * So you can `.close()` or `.dismiss()` the modal window from your component.
 */
var /**
 * A reference to the currently opened (active) modal.
 *
 * Instances of this class can be injected into your component passed as modal content.
 * So you can `.close()` or `.dismiss()` the modal window from your component.
 */
NgbActiveModal = /** @class */ (function () {
    function NgbActiveModal() {
    }
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     */
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     * @param {?=} result
     * @return {?}
     */
    NgbActiveModal.prototype.close = /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     * @param {?=} result
     * @return {?}
     */
    function (result) { };
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     */
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     * @param {?=} reason
     * @return {?}
     */
    NgbActiveModal.prototype.dismiss = /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     * @param {?=} reason
     * @return {?}
     */
    function (reason) { };
    return NgbActiveModal;
}());
/**
 * A reference to the currently opened (active) modal.
 *
 * Instances of this class can be injected into your component passed as modal content.
 * So you can `.close()` or `.dismiss()` the modal window from your component.
 */
export { NgbActiveModal };
/**
 * A reference to the newly opened modal returned by the `NgbModal.open()` method.
 */
var /**
 * A reference to the newly opened modal returned by the `NgbModal.open()` method.
 */
NgbModalRef = /** @class */ (function () {
    function NgbModalRef(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
        var _this = this;
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        this._beforeDismiss = _beforeDismiss;
        _windowCmptRef.instance.dismissEvent.subscribe((/**
         * @param {?} reason
         * @return {?}
         */
        function (reason) { _this.dismiss(reason); }));
        this.result = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        }));
        this.result.then(null, (/**
         * @return {?}
         */
        function () { }));
    }
    Object.defineProperty(NgbModalRef.prototype, "componentInstance", {
        /**
         * The instance of a component used for the modal content.
         *
         * When a `TemplateRef` is used as the content, will return `undefined`.
         */
        get: /**
         * The instance of a component used for the modal content.
         *
         * When a `TemplateRef` is used as the content, will return `undefined`.
         * @return {?}
         */
        function () {
            if (this._contentRef.componentRef) {
                return this._contentRef.componentRef.instance;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     */
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     * @param {?=} result
     * @return {?}
     */
    NgbModalRef.prototype.close = /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    };
    /**
     * @private
     * @param {?=} reason
     * @return {?}
     */
    NgbModalRef.prototype._dismiss = /**
     * @private
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        this._reject(reason);
        this._removeModalElements();
    };
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     */
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     * @param {?=} reason
     * @return {?}
     */
    NgbModalRef.prototype.dismiss = /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        var _this = this;
        if (this._windowCmptRef) {
            if (!this._beforeDismiss) {
                this._dismiss(reason);
            }
            else {
                /** @type {?} */
                var dismiss = this._beforeDismiss();
                if (dismiss && dismiss.then) {
                    dismiss.then((/**
                     * @param {?} result
                     * @return {?}
                     */
                    function (result) {
                        if (result !== false) {
                            _this._dismiss(reason);
                        }
                    }), (/**
                     * @return {?}
                     */
                    function () { }));
                }
                else if (dismiss !== false) {
                    this._dismiss(reason);
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgbModalRef.prototype._removeModalElements = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var windowNativeEl = this._windowCmptRef.location.nativeElement;
        windowNativeEl.parentNode.removeChild(windowNativeEl);
        this._windowCmptRef.destroy();
        if (this._backdropCmptRef) {
            /** @type {?} */
            var backdropNativeEl = this._backdropCmptRef.location.nativeElement;
            backdropNativeEl.parentNode.removeChild(backdropNativeEl);
            this._backdropCmptRef.destroy();
        }
        if (this._contentRef && this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._windowCmptRef = null;
        this._backdropCmptRef = null;
        this._contentRef = null;
    };
    return NgbModalRef;
}());
/**
 * A reference to the newly opened modal returned by the `NgbModal.open()` method.
 */
export { NgbModalRef };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgbModalRef.prototype._resolve;
    /**
     * @type {?}
     * @private
     */
    NgbModalRef.prototype._reject;
    /**
     * The promise that is resolved when the modal is closed and rejected when the modal is dismissed.
     * @type {?}
     */
    NgbModalRef.prototype.result;
    /**
     * @type {?}
     * @private
     */
    NgbModalRef.prototype._windowCmptRef;
    /**
     * @type {?}
     * @private
     */
    NgbModalRef.prototype._contentRef;
    /**
     * @type {?}
     * @private
     */
    NgbModalRef.prototype._backdropCmptRef;
    /**
     * @type {?}
     * @private
     */
    NgbModalRef.prototype._beforeDismiss;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtcmVmLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN1bmJpcmQtZWQvc3VuYmlyZC11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibW9kYWwvbW9kYWwtcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFhQTs7Ozs7OztJQUFBO0lBY0EsQ0FBQztJQWJDOzs7O09BSUc7Ozs7Ozs7O0lBQ0gsOEJBQUs7Ozs7Ozs7SUFBTCxVQUFNLE1BQVksSUFBUyxDQUFDO0lBRTVCOzs7O09BSUc7Ozs7Ozs7O0lBQ0gsZ0NBQU87Ozs7Ozs7SUFBUCxVQUFRLE1BQVksSUFBUyxDQUFDO0lBQ2hDLHFCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7Ozs7Ozs7Ozs7O0FBS0Q7Ozs7SUFvQkUscUJBQ1ksY0FBNEMsRUFBVSxXQUF1QixFQUM3RSxnQkFBaUQsRUFBVSxjQUF5QjtRQUZoRyxpQkFVQztRQVRXLG1CQUFjLEdBQWQsY0FBYyxDQUE4QjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQzdFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUM7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBVztRQUM5RixjQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxNQUFXLElBQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBRTNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPOzs7OztRQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDeEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDeEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7UUFBRSxjQUFPLENBQUMsRUFBQyxDQUFDO0lBQ25DLENBQUM7SUFyQkQsc0JBQUksMENBQWlCO1FBTHJCOzs7O1dBSUc7Ozs7Ozs7UUFDSDtZQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUU7Z0JBQ2pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO2FBQy9DO1FBQ0gsQ0FBQzs7O09BQUE7SUFtQkQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCwyQkFBSzs7Ozs7OztJQUFMLFVBQU0sTUFBWTtRQUNoQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7OztJQUVPLDhCQUFROzs7OztJQUFoQixVQUFpQixNQUFZO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7O0lBQ0gsNkJBQU87Ozs7Ozs7SUFBUCxVQUFRLE1BQVk7UUFBcEIsaUJBbUJDO1FBbEJDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN2QjtpQkFBTTs7b0JBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3JDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7b0JBQzNCLE9BQU8sQ0FBQyxJQUFJOzs7O29CQUNSLFVBQUEsTUFBTTt3QkFDSixJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7NEJBQ3BCLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQ3ZCO29CQUNILENBQUM7OztvQkFDRCxjQUFPLENBQUMsRUFBQyxDQUFDO2lCQUNmO3FCQUFNLElBQUksT0FBTyxLQUFLLEtBQUssRUFBRTtvQkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdkI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFTywwQ0FBb0I7Ozs7SUFBNUI7O1lBQ1EsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLGFBQWE7UUFDakUsY0FBYyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU5QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTs7Z0JBQ25CLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsYUFBYTtZQUNyRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBOUZELElBOEZDOzs7Ozs7Ozs7O0lBN0ZDLCtCQUF5Qzs7Ozs7SUFDekMsOEJBQXdDOzs7OztJQWdCeEMsNkJBQXFCOzs7OztJQUdqQixxQ0FBb0Q7Ozs7O0lBQUUsa0NBQStCOzs7OztJQUNyRix1Q0FBeUQ7Ozs7O0lBQUUscUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge05nYk1vZGFsQmFja2Ryb3B9IGZyb20gJy4vbW9kYWwtYmFja2Ryb3AnO1xuaW1wb3J0IHtOZ2JNb2RhbFdpbmRvd30gZnJvbSAnLi9tb2RhbC13aW5kb3cnO1xuXG5pbXBvcnQge0NvbnRlbnRSZWZ9IGZyb20gJy4uL3V0aWwvcG9wdXAnO1xuXG4vKipcbiAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgb3BlbmVkIChhY3RpdmUpIG1vZGFsLlxuICpcbiAqIEluc3RhbmNlcyBvZiB0aGlzIGNsYXNzIGNhbiBiZSBpbmplY3RlZCBpbnRvIHlvdXIgY29tcG9uZW50IHBhc3NlZCBhcyBtb2RhbCBjb250ZW50LlxuICogU28geW91IGNhbiBgLmNsb3NlKClgIG9yIGAuZGlzbWlzcygpYCB0aGUgbW9kYWwgd2luZG93IGZyb20geW91ciBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ2JBY3RpdmVNb2RhbCB7XG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIG1vZGFsIHdpdGggYW4gb3B0aW9uYWwgYHJlc3VsdGAgdmFsdWUuXG4gICAqXG4gICAqIFRoZSBgTmdiTW9iYWxSZWYucmVzdWx0YCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gICAqL1xuICBjbG9zZShyZXN1bHQ/OiBhbnkpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc21pc3NlcyB0aGUgbW9kYWwgd2l0aCBhbiBvcHRpb25hbCBgcmVhc29uYCB2YWx1ZS5cbiAgICpcbiAgICogVGhlIGBOZ2JNb2RhbFJlZi5yZXN1bHRgIHByb21pc2Ugd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAgICovXG4gIGRpc21pc3MocmVhc29uPzogYW55KTogdm9pZCB7fVxufVxuXG4vKipcbiAqIEEgcmVmZXJlbmNlIHRvIHRoZSBuZXdseSBvcGVuZWQgbW9kYWwgcmV0dXJuZWQgYnkgdGhlIGBOZ2JNb2RhbC5vcGVuKClgIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGNsYXNzIE5nYk1vZGFsUmVmIHtcbiAgcHJpdmF0ZSBfcmVzb2x2ZTogKHJlc3VsdD86IGFueSkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfcmVqZWN0OiAocmVhc29uPzogYW55KSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5zdGFuY2Ugb2YgYSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIG1vZGFsIGNvbnRlbnQuXG4gICAqXG4gICAqIFdoZW4gYSBgVGVtcGxhdGVSZWZgIGlzIHVzZWQgYXMgdGhlIGNvbnRlbnQsIHdpbGwgcmV0dXJuIGB1bmRlZmluZWRgLlxuICAgKi9cbiAgZ2V0IGNvbXBvbmVudEluc3RhbmNlKCk6IGFueSB7XG4gICAgaWYgKHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2hlbiB0aGUgbW9kYWwgaXMgY2xvc2VkIGFuZCByZWplY3RlZCB3aGVuIHRoZSBtb2RhbCBpcyBkaXNtaXNzZWQuXG4gICAqL1xuICByZXN1bHQ6IFByb21pc2U8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX3dpbmRvd0NtcHRSZWY6IENvbXBvbmVudFJlZjxOZ2JNb2RhbFdpbmRvdz4sIHByaXZhdGUgX2NvbnRlbnRSZWY6IENvbnRlbnRSZWYsXG4gICAgICBwcml2YXRlIF9iYWNrZHJvcENtcHRSZWY/OiBDb21wb25lbnRSZWY8TmdiTW9kYWxCYWNrZHJvcD4sIHByaXZhdGUgX2JlZm9yZURpc21pc3M/OiBGdW5jdGlvbikge1xuICAgIF93aW5kb3dDbXB0UmVmLmluc3RhbmNlLmRpc21pc3NFdmVudC5zdWJzY3JpYmUoKHJlYXNvbjogYW55KSA9PiB7IHRoaXMuZGlzbWlzcyhyZWFzb24pOyB9KTtcblxuICAgIHRoaXMucmVzdWx0ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB0aGlzLl9yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG4gICAgdGhpcy5yZXN1bHQudGhlbihudWxsLCAoKSA9PiB7fSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBtb2RhbCB3aXRoIGFuIG9wdGlvbmFsIGByZXN1bHRgIHZhbHVlLlxuICAgKlxuICAgKiBUaGUgYE5nYk1vYmFsUmVmLnJlc3VsdGAgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlLlxuICAgKi9cbiAgY2xvc2UocmVzdWx0PzogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3dpbmRvd0NtcHRSZWYpIHtcbiAgICAgIHRoaXMuX3Jlc29sdmUocmVzdWx0KTtcbiAgICAgIHRoaXMuX3JlbW92ZU1vZGFsRWxlbWVudHMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kaXNtaXNzKHJlYXNvbj86IGFueSkge1xuICAgIHRoaXMuX3JlamVjdChyZWFzb24pO1xuICAgIHRoaXMuX3JlbW92ZU1vZGFsRWxlbWVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNtaXNzZXMgdGhlIG1vZGFsIHdpdGggYW4gb3B0aW9uYWwgYHJlYXNvbmAgdmFsdWUuXG4gICAqXG4gICAqIFRoZSBgTmdiTW9kYWxSZWYucmVzdWx0YCBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gICAqL1xuICBkaXNtaXNzKHJlYXNvbj86IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl93aW5kb3dDbXB0UmVmKSB7XG4gICAgICBpZiAoIXRoaXMuX2JlZm9yZURpc21pc3MpIHtcbiAgICAgICAgdGhpcy5fZGlzbWlzcyhyZWFzb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGlzbWlzcyA9IHRoaXMuX2JlZm9yZURpc21pc3MoKTtcbiAgICAgICAgaWYgKGRpc21pc3MgJiYgZGlzbWlzcy50aGVuKSB7XG4gICAgICAgICAgZGlzbWlzcy50aGVuKFxuICAgICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9kaXNtaXNzKHJlYXNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoKSA9PiB7fSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlzbWlzcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLl9kaXNtaXNzKHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVNb2RhbEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHdpbmRvd05hdGl2ZUVsID0gdGhpcy5fd2luZG93Q21wdFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgIHdpbmRvd05hdGl2ZUVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod2luZG93TmF0aXZlRWwpO1xuICAgIHRoaXMuX3dpbmRvd0NtcHRSZWYuZGVzdHJveSgpO1xuXG4gICAgaWYgKHRoaXMuX2JhY2tkcm9wQ21wdFJlZikge1xuICAgICAgY29uc3QgYmFja2Ryb3BOYXRpdmVFbCA9IHRoaXMuX2JhY2tkcm9wQ21wdFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgYmFja2Ryb3BOYXRpdmVFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJhY2tkcm9wTmF0aXZlRWwpO1xuICAgICAgdGhpcy5fYmFja2Ryb3BDbXB0UmVmLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29udGVudFJlZiAmJiB0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2NvbnRlbnRSZWYudmlld1JlZi5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fd2luZG93Q21wdFJlZiA9IG51bGw7XG4gICAgdGhpcy5fYmFja2Ryb3BDbXB0UmVmID0gbnVsbDtcbiAgICB0aGlzLl9jb250ZW50UmVmID0gbnVsbDtcbiAgfVxufVxuIl19