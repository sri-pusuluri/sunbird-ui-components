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
export class NgbActiveModal {
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     * @param {?=} result
     * @return {?}
     */
    close(result) { }
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     * @param {?=} reason
     * @return {?}
     */
    dismiss(reason) { }
}
/**
 * A reference to the newly opened modal returned by the `NgbModal.open()` method.
 */
export class NgbModalRef {
    /**
     * @param {?} _windowCmptRef
     * @param {?} _contentRef
     * @param {?=} _backdropCmptRef
     * @param {?=} _beforeDismiss
     */
    constructor(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        this._beforeDismiss = _beforeDismiss;
        _windowCmptRef.instance.dismissEvent.subscribe((/**
         * @param {?} reason
         * @return {?}
         */
        (reason) => { this.dismiss(reason); }));
        this.result = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        }));
        this.result.then(null, (/**
         * @return {?}
         */
        () => { }));
    }
    /**
     * The instance of a component used for the modal content.
     *
     * When a `TemplateRef` is used as the content, will return `undefined`.
     * @return {?}
     */
    get componentInstance() {
        if (this._contentRef.componentRef) {
            return this._contentRef.componentRef.instance;
        }
    }
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    }
    /**
     * @private
     * @param {?=} reason
     * @return {?}
     */
    _dismiss(reason) {
        this._reject(reason);
        this._removeModalElements();
    }
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     * @param {?=} reason
     * @return {?}
     */
    dismiss(reason) {
        if (this._windowCmptRef) {
            if (!this._beforeDismiss) {
                this._dismiss(reason);
            }
            else {
                /** @type {?} */
                const dismiss = this._beforeDismiss();
                if (dismiss && dismiss.then) {
                    dismiss.then((/**
                     * @param {?} result
                     * @return {?}
                     */
                    result => {
                        if (result !== false) {
                            this._dismiss(reason);
                        }
                    }), (/**
                     * @return {?}
                     */
                    () => { }));
                }
                else if (dismiss !== false) {
                    this._dismiss(reason);
                }
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _removeModalElements() {
        /** @type {?} */
        const windowNativeEl = this._windowCmptRef.location.nativeElement;
        windowNativeEl.parentNode.removeChild(windowNativeEl);
        this._windowCmptRef.destroy();
        if (this._backdropCmptRef) {
            /** @type {?} */
            const backdropNativeEl = this._backdropCmptRef.location.nativeElement;
            backdropNativeEl.parentNode.removeChild(backdropNativeEl);
            this._backdropCmptRef.destroy();
        }
        if (this._contentRef && this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._windowCmptRef = null;
        this._backdropCmptRef = null;
        this._contentRef = null;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtcmVmLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN1bmJpcmQtZWQvc3VuYmlyZC11aS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibW9kYWwvbW9kYWwtcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFhQSxNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7SUFNekIsS0FBSyxDQUFDLE1BQVksSUFBUyxDQUFDOzs7Ozs7OztJQU81QixPQUFPLENBQUMsTUFBWSxJQUFTLENBQUM7Q0FDL0I7Ozs7QUFLRCxNQUFNLE9BQU8sV0FBVzs7Ozs7OztJQW9CdEIsWUFDWSxjQUE0QyxFQUFVLFdBQXVCLEVBQzdFLGdCQUFpRCxFQUFVLGNBQXlCO1FBRHBGLG1CQUFjLEdBQWQsY0FBYyxDQUE4QjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQzdFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUM7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBVztRQUM5RixjQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUUzRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTzs7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7OztRQUFFLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQyxDQUFDO0lBQ25DLENBQUM7Ozs7Ozs7SUFyQkQsSUFBSSxpQkFBaUI7UUFDbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtZQUNqQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztTQUMvQztJQUNILENBQUM7Ozs7Ozs7O0lBd0JELEtBQUssQ0FBQyxNQUFZO1FBQ2hCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLE1BQVk7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7Ozs7OztJQU9ELE9BQU8sQ0FBQyxNQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN2QjtpQkFBTTs7c0JBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3JDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7b0JBQzNCLE9BQU8sQ0FBQyxJQUFJOzs7O29CQUNSLE1BQU0sQ0FBQyxFQUFFO3dCQUNQLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTs0QkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDdkI7b0JBQ0gsQ0FBQzs7O29CQUNELEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQyxDQUFDO2lCQUNmO3FCQUFNLElBQUksT0FBTyxLQUFLLEtBQUssRUFBRTtvQkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdkI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxvQkFBb0I7O2NBQ3BCLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxhQUFhO1FBQ2pFLGNBQWMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFOUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7O2tCQUNuQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGFBQWE7WUFDckUsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNqQztRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNwQztRQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztDQUNGOzs7Ozs7SUE3RkMsK0JBQXlDOzs7OztJQUN6Qyw4QkFBd0M7Ozs7O0lBZ0J4Qyw2QkFBcUI7Ozs7O0lBR2pCLHFDQUFvRDs7Ozs7SUFBRSxrQ0FBK0I7Ozs7O0lBQ3JGLHVDQUF5RDs7Ozs7SUFBRSxxQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7TmdiTW9kYWxCYWNrZHJvcH0gZnJvbSAnLi9tb2RhbC1iYWNrZHJvcCc7XG5pbXBvcnQge05nYk1vZGFsV2luZG93fSBmcm9tICcuL21vZGFsLXdpbmRvdyc7XG5cbmltcG9ydCB7Q29udGVudFJlZn0gZnJvbSAnLi4vdXRpbC9wb3B1cCc7XG5cbi8qKlxuICogQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBvcGVuZWQgKGFjdGl2ZSkgbW9kYWwuXG4gKlxuICogSW5zdGFuY2VzIG9mIHRoaXMgY2xhc3MgY2FuIGJlIGluamVjdGVkIGludG8geW91ciBjb21wb25lbnQgcGFzc2VkIGFzIG1vZGFsIGNvbnRlbnQuXG4gKiBTbyB5b3UgY2FuIGAuY2xvc2UoKWAgb3IgYC5kaXNtaXNzKClgIHRoZSBtb2RhbCB3aW5kb3cgZnJvbSB5b3VyIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIE5nYkFjdGl2ZU1vZGFsIHtcbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgbW9kYWwgd2l0aCBhbiBvcHRpb25hbCBgcmVzdWx0YCB2YWx1ZS5cbiAgICpcbiAgICogVGhlIGBOZ2JNb2JhbFJlZi5yZXN1bHRgIHByb21pc2Ugd2lsbCBiZSByZXNvbHZlZCB3aXRoIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAgICovXG4gIGNsb3NlKHJlc3VsdD86IGFueSk6IHZvaWQge31cblxuICAvKipcbiAgICogRGlzbWlzc2VzIHRoZSBtb2RhbCB3aXRoIGFuIG9wdGlvbmFsIGByZWFzb25gIHZhbHVlLlxuICAgKlxuICAgKiBUaGUgYE5nYk1vZGFsUmVmLnJlc3VsdGAgcHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlLlxuICAgKi9cbiAgZGlzbWlzcyhyZWFzb24/OiBhbnkpOiB2b2lkIHt9XG59XG5cbi8qKlxuICogQSByZWZlcmVuY2UgdG8gdGhlIG5ld2x5IG9wZW5lZCBtb2RhbCByZXR1cm5lZCBieSB0aGUgYE5nYk1vZGFsLm9wZW4oKWAgbWV0aG9kLlxuICovXG5leHBvcnQgY2xhc3MgTmdiTW9kYWxSZWYge1xuICBwcml2YXRlIF9yZXNvbHZlOiAocmVzdWx0PzogYW55KSA9PiB2b2lkO1xuICBwcml2YXRlIF9yZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRoZSBpbnN0YW5jZSBvZiBhIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgbW9kYWwgY29udGVudC5cbiAgICpcbiAgICogV2hlbiBhIGBUZW1wbGF0ZVJlZmAgaXMgdXNlZCBhcyB0aGUgY29udGVudCwgd2lsbCByZXR1cm4gYHVuZGVmaW5lZGAuXG4gICAqL1xuICBnZXQgY29tcG9uZW50SW5zdGFuY2UoKTogYW55IHtcbiAgICBpZiAodGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHRoZSBtb2RhbCBpcyBjbG9zZWQgYW5kIHJlamVjdGVkIHdoZW4gdGhlIG1vZGFsIGlzIGRpc21pc3NlZC5cbiAgICovXG4gIHJlc3VsdDogUHJvbWlzZTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfd2luZG93Q21wdFJlZjogQ29tcG9uZW50UmVmPE5nYk1vZGFsV2luZG93PiwgcHJpdmF0ZSBfY29udGVudFJlZjogQ29udGVudFJlZixcbiAgICAgIHByaXZhdGUgX2JhY2tkcm9wQ21wdFJlZj86IENvbXBvbmVudFJlZjxOZ2JNb2RhbEJhY2tkcm9wPiwgcHJpdmF0ZSBfYmVmb3JlRGlzbWlzcz86IEZ1bmN0aW9uKSB7XG4gICAgX3dpbmRvd0NtcHRSZWYuaW5zdGFuY2UuZGlzbWlzc0V2ZW50LnN1YnNjcmliZSgocmVhc29uOiBhbnkpID0+IHsgdGhpcy5kaXNtaXNzKHJlYXNvbik7IH0pO1xuXG4gICAgdGhpcy5yZXN1bHQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgICB0aGlzLnJlc3VsdC50aGVuKG51bGwsICgpID0+IHt9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIG1vZGFsIHdpdGggYW4gb3B0aW9uYWwgYHJlc3VsdGAgdmFsdWUuXG4gICAqXG4gICAqIFRoZSBgTmdiTW9iYWxSZWYucmVzdWx0YCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gICAqL1xuICBjbG9zZShyZXN1bHQ/OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fd2luZG93Q21wdFJlZikge1xuICAgICAgdGhpcy5fcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgdGhpcy5fcmVtb3ZlTW9kYWxFbGVtZW50cygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Rpc21pc3MocmVhc29uPzogYW55KSB7XG4gICAgdGhpcy5fcmVqZWN0KHJlYXNvbik7XG4gICAgdGhpcy5fcmVtb3ZlTW9kYWxFbGVtZW50cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc21pc3NlcyB0aGUgbW9kYWwgd2l0aCBhbiBvcHRpb25hbCBgcmVhc29uYCB2YWx1ZS5cbiAgICpcbiAgICogVGhlIGBOZ2JNb2RhbFJlZi5yZXN1bHRgIHByb21pc2Ugd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAgICovXG4gIGRpc21pc3MocmVhc29uPzogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3dpbmRvd0NtcHRSZWYpIHtcbiAgICAgIGlmICghdGhpcy5fYmVmb3JlRGlzbWlzcykge1xuICAgICAgICB0aGlzLl9kaXNtaXNzKHJlYXNvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkaXNtaXNzID0gdGhpcy5fYmVmb3JlRGlzbWlzcygpO1xuICAgICAgICBpZiAoZGlzbWlzcyAmJiBkaXNtaXNzLnRoZW4pIHtcbiAgICAgICAgICBkaXNtaXNzLnRoZW4oXG4gICAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc21pc3MocmVhc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICgpID0+IHt9KTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXNtaXNzICE9PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuX2Rpc21pc3MocmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU1vZGFsRWxlbWVudHMoKSB7XG4gICAgY29uc3Qgd2luZG93TmF0aXZlRWwgPSB0aGlzLl93aW5kb3dDbXB0UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgd2luZG93TmF0aXZlRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh3aW5kb3dOYXRpdmVFbCk7XG4gICAgdGhpcy5fd2luZG93Q21wdFJlZi5kZXN0cm95KCk7XG5cbiAgICBpZiAodGhpcy5fYmFja2Ryb3BDbXB0UmVmKSB7XG4gICAgICBjb25zdCBiYWNrZHJvcE5hdGl2ZUVsID0gdGhpcy5fYmFja2Ryb3BDbXB0UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBiYWNrZHJvcE5hdGl2ZUVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmFja2Ryb3BOYXRpdmVFbCk7XG4gICAgICB0aGlzLl9iYWNrZHJvcENtcHRSZWYuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb250ZW50UmVmICYmIHRoaXMuX2NvbnRlbnRSZWYudmlld1JlZikge1xuICAgICAgdGhpcy5fY29udGVudFJlZi52aWV3UmVmLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLl93aW5kb3dDbXB0UmVmID0gbnVsbDtcbiAgICB0aGlzLl9iYWNrZHJvcENtcHRSZWYgPSBudWxsO1xuICAgIHRoaXMuX2NvbnRlbnRSZWYgPSBudWxsO1xuICB9XG59XG4iXX0=