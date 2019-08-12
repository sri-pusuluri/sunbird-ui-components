/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, ComponentFactoryResolver } from '@angular/core';
import { NgbModalConfig } from './modal-config';
import { NgbModalStack } from './modal-stack';
import * as i0 from "@angular/core";
import * as i1 from "./modal-stack";
import * as i2 from "./modal-config";
/**
 * A service for opening modal windows.
 *
 * Creating a modal is straightforward: create a component or a template and pass it as an argument to
 * the `.open()` method.
 */
export class NgbModal {
    /**
     * @param {?} _moduleCFR
     * @param {?} _injector
     * @param {?} _modalStack
     * @param {?} _config
     */
    constructor(_moduleCFR, _injector, _modalStack, _config) {
        this._moduleCFR = _moduleCFR;
        this._injector = _injector;
        this._modalStack = _modalStack;
        this._config = _config;
    }
    /**
     * Opens a new modal window with the specified content and supplied options.
     *
     * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
     * then instances of those components can be injected with an instance of the `NgbActiveModal` class. You can then
     * use `NgbActiveModal` methods to close / dismiss modals from "inside" of your component.
     *
     * Also see the [`NgbModalOptions`](#/components/modal/api#NgbModalOptions) for the list of supported options.
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    open(content, options = {}) {
        /** @type {?} */
        const combinedOptions = Object.assign({}, this._config, options);
        return this._modalStack.open(this._moduleCFR, this._injector, content, combinedOptions);
    }
    /**
     * Dismisses all currently displayed modal windows with the supplied reason.
     *
     * \@since 3.1.0
     * @param {?=} reason
     * @return {?}
     */
    dismissAll(reason) { this._modalStack.dismissAll(reason); }
    /**
     * Indicates if there are currently any open modal windows in the application.
     *
     * \@since 3.3.0
     * @return {?}
     */
    hasOpenModals() { return this._modalStack.hasOpenModals(); }
}
NgbModal.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
NgbModal.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: NgbModalStack },
    { type: NgbModalConfig }
];
/** @nocollapse */ NgbModal.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgbModal_Factory() { return new NgbModal(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NgbModalStack), i0.ɵɵinject(i2.NgbModalConfig)); }, token: NgbModal, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgbModal.prototype._moduleCFR;
    /**
     * @type {?}
     * @private
     */
    NgbModal.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    NgbModal.prototype._modalStack;
    /**
     * @type {?}
     * @private
     */
    NgbModal.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJtb2RhbC9tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0UsT0FBTyxFQUFrQixjQUFjLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0FBUzVDLE1BQU0sT0FBTyxRQUFROzs7Ozs7O0lBQ25CLFlBQ1ksVUFBb0MsRUFBVSxTQUFtQixFQUFVLFdBQTBCLEVBQ3JHLE9BQXVCO1FBRHZCLGVBQVUsR0FBVixVQUFVLENBQTBCO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQ3JHLFlBQU8sR0FBUCxPQUFPLENBQWdCO0lBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztJQVd2QyxJQUFJLENBQUMsT0FBWSxFQUFFLFVBQTJCLEVBQUU7O2NBQ3hDLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUNoRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Ozs7Ozs7SUFPRCxVQUFVLENBQUMsTUFBWSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztJQU9qRSxhQUFhLEtBQWMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O1lBaEN0RSxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O1lBWkYsd0JBQXdCO1lBQWxDLFFBQVE7WUFJcEIsYUFBYTtZQUZJLGNBQWM7Ozs7Ozs7O0lBYWpDLDhCQUE0Qzs7Ozs7SUFBRSw2QkFBMkI7Ozs7O0lBQUUsK0JBQWtDOzs7OztJQUM3RywyQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdG9yLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge05nYk1vZGFsT3B0aW9ucywgTmdiTW9kYWxDb25maWd9IGZyb20gJy4vbW9kYWwtY29uZmlnJztcbmltcG9ydCB7TmdiTW9kYWxSZWZ9IGZyb20gJy4vbW9kYWwtcmVmJztcbmltcG9ydCB7TmdiTW9kYWxTdGFja30gZnJvbSAnLi9tb2RhbC1zdGFjayc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIGZvciBvcGVuaW5nIG1vZGFsIHdpbmRvd3MuXG4gKlxuICogQ3JlYXRpbmcgYSBtb2RhbCBpcyBzdHJhaWdodGZvcndhcmQ6IGNyZWF0ZSBhIGNvbXBvbmVudCBvciBhIHRlbXBsYXRlIGFuZCBwYXNzIGl0IGFzIGFuIGFyZ3VtZW50IHRvXG4gKiB0aGUgYC5vcGVuKClgIG1ldGhvZC5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTmdiTW9kYWwge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX21vZHVsZUNGUjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgX21vZGFsU3RhY2s6IE5nYk1vZGFsU3RhY2ssXG4gICAgICBwcml2YXRlIF9jb25maWc6IE5nYk1vZGFsQ29uZmlnKSB7fVxuXG4gIC8qKlxuICAgKiBPcGVucyBhIG5ldyBtb2RhbCB3aW5kb3cgd2l0aCB0aGUgc3BlY2lmaWVkIGNvbnRlbnQgYW5kIHN1cHBsaWVkIG9wdGlvbnMuXG4gICAqXG4gICAqIENvbnRlbnQgY2FuIGJlIHByb3ZpZGVkIGFzIGEgYFRlbXBsYXRlUmVmYCBvciBhIGNvbXBvbmVudCB0eXBlLiBJZiB5b3UgcGFzcyBhIGNvbXBvbmVudCB0eXBlIGFzIGNvbnRlbnQsXG4gICAqIHRoZW4gaW5zdGFuY2VzIG9mIHRob3NlIGNvbXBvbmVudHMgY2FuIGJlIGluamVjdGVkIHdpdGggYW4gaW5zdGFuY2Ugb2YgdGhlIGBOZ2JBY3RpdmVNb2RhbGAgY2xhc3MuIFlvdSBjYW4gdGhlblxuICAgKiB1c2UgYE5nYkFjdGl2ZU1vZGFsYCBtZXRob2RzIHRvIGNsb3NlIC8gZGlzbWlzcyBtb2RhbHMgZnJvbSBcImluc2lkZVwiIG9mIHlvdXIgY29tcG9uZW50LlxuICAgKlxuICAgKiBBbHNvIHNlZSB0aGUgW2BOZ2JNb2RhbE9wdGlvbnNgXSgjL2NvbXBvbmVudHMvbW9kYWwvYXBpI05nYk1vZGFsT3B0aW9ucykgZm9yIHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBvcHRpb25zLlxuICAgKi9cbiAgb3Blbihjb250ZW50OiBhbnksIG9wdGlvbnM6IE5nYk1vZGFsT3B0aW9ucyA9IHt9KTogTmdiTW9kYWxSZWYge1xuICAgIGNvbnN0IGNvbWJpbmVkT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuX21vZGFsU3RhY2sub3Blbih0aGlzLl9tb2R1bGVDRlIsIHRoaXMuX2luamVjdG9yLCBjb250ZW50LCBjb21iaW5lZE9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc21pc3NlcyBhbGwgY3VycmVudGx5IGRpc3BsYXllZCBtb2RhbCB3aW5kb3dzIHdpdGggdGhlIHN1cHBsaWVkIHJlYXNvbi5cbiAgICpcbiAgICogQHNpbmNlIDMuMS4wXG4gICAqL1xuICBkaXNtaXNzQWxsKHJlYXNvbj86IGFueSkgeyB0aGlzLl9tb2RhbFN0YWNrLmRpc21pc3NBbGwocmVhc29uKTsgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlcmUgYXJlIGN1cnJlbnRseSBhbnkgb3BlbiBtb2RhbCB3aW5kb3dzIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAgICpcbiAgICogQHNpbmNlIDMuMy4wXG4gICAqL1xuICBoYXNPcGVuTW9kYWxzKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fbW9kYWxTdGFjay5oYXNPcGVuTW9kYWxzKCk7IH1cbn1cbiJdfQ==