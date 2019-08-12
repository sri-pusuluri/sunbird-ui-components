/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Attribute, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation, } from '@angular/core';
import { NgbToastConfig } from './toast-config';
/**
 * This directive allows the usage of HTML markup or other directives
 * inside of the toast's header.
 *
 * \@since 5.0.0
 */
var NgbToastHeader = /** @class */ (function () {
    function NgbToastHeader() {
    }
    NgbToastHeader.decorators = [
        { type: Directive, args: [{ selector: '[ngbToastHeader]' },] }
    ];
    return NgbToastHeader;
}());
export { NgbToastHeader };
/**
 * Toasts provide feedback messages as notifications to the user.
 * Goal is to mimic the push notifications available both on mobile and desktop operating systems.
 *
 * \@since 5.0.0
 */
var NgbToast = /** @class */ (function () {
    function NgbToast(ariaLive, config) {
        this.ariaLive = ariaLive;
        /**
         * A template like `<ng-template ngbToastHeader></ng-template>` can be
         * used in the projected content to allow markup usage.
         */
        this.contentHeaderTpl = null;
        /**
         * An event fired immediately when toast's `hide()` method has been called.
         * It can only occur in 2 different scenarios:
         * - `autohide` timeout fires
         * - user clicks on a closing cross (&times)
         *
         * Additionally this output is purely informative. The toast won't disappear. It's up to the user to take care of
         * that.
         */
        this.hideOutput = new EventEmitter();
        if (this.ariaLive == null) {
            this.ariaLive = config.ariaLive;
        }
        this.delay = config.delay;
        this.autohide = config.autohide;
    }
    /**
     * @return {?}
     */
    NgbToast.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () { this._init(); };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgbToast.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('autohide' in changes) {
            this._clearTimeout();
            this._init();
        }
    };
    /**
     * @return {?}
     */
    NgbToast.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._clearTimeout();
        this.hideOutput.emit();
    };
    /**
     * @private
     * @return {?}
     */
    NgbToast.prototype._init = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autohide && !this._timeoutID) {
            this._timeoutID = setTimeout((/**
             * @return {?}
             */
            function () { return _this.hide(); }), this.delay);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgbToast.prototype._clearTimeout = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._timeoutID) {
            clearTimeout(this._timeoutID);
            this._timeoutID = null;
        }
    };
    NgbToast.decorators = [
        { type: Component, args: [{
                    selector: 'ngb-toast',
                    exportAs: 'ngbToast',
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        'role': 'alert',
                        '[attr.aria-live]': 'ariaLive',
                        'aria-atomic': 'true',
                        '[class.toast]': 'true',
                        '[class.show]': 'true',
                        '[class.autohide]': 'autohide',
                    },
                    template: "\n    <ng-template #headerTpl>\n      <strong class=\"mr-auto\">{{header}}</strong>\n    </ng-template>\n    <ng-template [ngIf]=\"contentHeaderTpl || header\">\n      <div class=\"toast-header\">\n        <ng-template [ngTemplateOutlet]=\"contentHeaderTpl || headerTpl\"></ng-template>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" i18n-aria-label=\"@@ngb.toast.close-aria\" (click)=\"hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </ng-template>\n    <div class=\"toast-body\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: [".ngb-toasts{position:fixed;top:0;right:0;margin:.5em;z-index:1200}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}"]
                }] }
    ];
    /** @nocollapse */
    NgbToast.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['aria-live',] }] },
        { type: NgbToastConfig }
    ]; };
    NgbToast.propDecorators = {
        delay: [{ type: Input }],
        autohide: [{ type: Input }],
        header: [{ type: Input }],
        contentHeaderTpl: [{ type: ContentChild, args: [NgbToastHeader, { read: TemplateRef, static: true },] }],
        hideOutput: [{ type: Output, args: ['hide',] }]
    };
    return NgbToast;
}());
export { NgbToast };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgbToast.prototype._timeoutID;
    /**
     * Delay after which the toast will hide (ms).
     * default: `500` (ms) (inherited from NgbToastConfig)
     * @type {?}
     */
    NgbToast.prototype.delay;
    /**
     * Auto hide the toast after a delay in ms.
     * default: `true` (inherited from NgbToastConfig)
     * @type {?}
     */
    NgbToast.prototype.autohide;
    /**
     * Text to be used as toast's header.
     * Ignored if a ContentChild template is specified at the same time.
     * @type {?}
     */
    NgbToast.prototype.header;
    /**
     * A template like `<ng-template ngbToastHeader></ng-template>` can be
     * used in the projected content to allow markup usage.
     * @type {?}
     */
    NgbToast.prototype.contentHeaderTpl;
    /**
     * An event fired immediately when toast's `hide()` method has been called.
     * It can only occur in 2 different scenarios:
     * - `autohide` timeout fires
     * - user clicks on a closing cross (&times)
     *
     * Additionally this output is purely informative. The toast won't disappear. It's up to the user to take care of
     * that.
     * @type {?}
     */
    NgbToast.prototype.hideOutput;
    /** @type {?} */
    NgbToast.prototype.ariaLive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJ0b2FzdC90b2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixXQUFXLEVBQ1gsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQVE5QztJQUFBO0lBRUEsQ0FBQzs7Z0JBRkEsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFDOztJQUV6QyxxQkFBQztDQUFBLEFBRkQsSUFFQztTQURZLGNBQWM7Ozs7Ozs7QUFTM0I7SUFxRUUsa0JBQTJDLFFBQWdCLEVBQUUsTUFBc0I7UUFBeEMsYUFBUSxHQUFSLFFBQVEsQ0FBUTs7Ozs7UUFiTSxxQkFBZ0IsR0FBMkIsSUFBSSxDQUFDOzs7Ozs7Ozs7O1FBV2pHLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBR3BELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQscUNBQWtCOzs7SUFBbEIsY0FBdUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFFdEMsOEJBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksVUFBVSxJQUFJLE9BQU8sRUFBRTtZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7O0lBRUQsdUJBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTyx3QkFBSzs7OztJQUFiO1FBQUEsaUJBSUM7UUFIQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTs7O1lBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxnQ0FBYTs7OztJQUFyQjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Z0JBdEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osTUFBTSxFQUFFLE9BQU87d0JBQ2Ysa0JBQWtCLEVBQUUsVUFBVTt3QkFDOUIsYUFBYSxFQUFFLE1BQU07d0JBQ3JCLGVBQWUsRUFBRSxNQUFNO3dCQUN2QixjQUFjLEVBQUUsTUFBTTt3QkFDdEIsa0JBQWtCLEVBQUUsVUFBVTtxQkFDL0I7b0JBQ0QsUUFBUSxFQUFFLGdtQkFlVDs7aUJBRUY7Ozs7NkNBd0NjLFNBQVMsU0FBQyxXQUFXO2dCQXZGNUIsY0FBYzs7O3dCQXdEbkIsS0FBSzsyQkFNTCxLQUFLO3lCQU1MLEtBQUs7bUNBTUwsWUFBWSxTQUFDLGNBQWMsRUFBRSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQzs2QkFXOUQsTUFBTSxTQUFDLE1BQU07O0lBb0NoQixlQUFDO0NBQUEsQUF2R0QsSUF1R0M7U0F6RVksUUFBUTs7Ozs7O0lBRW5CLDhCQUFtQjs7Ozs7O0lBTW5CLHlCQUF1Qjs7Ozs7O0lBTXZCLDRCQUEyQjs7Ozs7O0lBTTNCLDBCQUF3Qjs7Ozs7O0lBTXhCLG9DQUFpSDs7Ozs7Ozs7Ozs7SUFXakgsOEJBQXNEOztJQUUxQyw0QkFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBdHRyaWJ1dGUsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge05nYlRvYXN0Q29uZmlnfSBmcm9tICcuL3RvYXN0LWNvbmZpZyc7XG5cbi8qKlxuICogVGhpcyBkaXJlY3RpdmUgYWxsb3dzIHRoZSB1c2FnZSBvZiBIVE1MIG1hcmt1cCBvciBvdGhlciBkaXJlY3RpdmVzXG4gKiBpbnNpZGUgb2YgdGhlIHRvYXN0J3MgaGVhZGVyLlxuICpcbiAqIEBzaW5jZSA1LjAuMFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tuZ2JUb2FzdEhlYWRlcl0nfSlcbmV4cG9ydCBjbGFzcyBOZ2JUb2FzdEhlYWRlciB7XG59XG5cbi8qKlxuICogVG9hc3RzIHByb3ZpZGUgZmVlZGJhY2sgbWVzc2FnZXMgYXMgbm90aWZpY2F0aW9ucyB0byB0aGUgdXNlci5cbiAqIEdvYWwgaXMgdG8gbWltaWMgdGhlIHB1c2ggbm90aWZpY2F0aW9ucyBhdmFpbGFibGUgYm90aCBvbiBtb2JpbGUgYW5kIGRlc2t0b3Agb3BlcmF0aW5nIHN5c3RlbXMuXG4gKlxuICogQHNpbmNlIDUuMC4wXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nYi10b2FzdCcsXG4gIGV4cG9ydEFzOiAnbmdiVG9hc3QnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgJ3JvbGUnOiAnYWxlcnQnLFxuICAgICdbYXR0ci5hcmlhLWxpdmVdJzogJ2FyaWFMaXZlJyxcbiAgICAnYXJpYS1hdG9taWMnOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy50b2FzdF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zaG93XSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmF1dG9oaWRlXSc6ICdhdXRvaGlkZScsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNoZWFkZXJUcGw+XG4gICAgICA8c3Ryb25nIGNsYXNzPVwibXItYXV0b1wiPnt7aGVhZGVyfX08L3N0cm9uZz5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJjb250ZW50SGVhZGVyVHBsIHx8IGhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRvYXN0LWhlYWRlclwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudEhlYWRlclRwbCB8fCBoZWFkZXJUcGxcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgaTE4bi1hcmlhLWxhYmVsPVwiQEBuZ2IudG9hc3QuY2xvc2UtYXJpYVwiIChjbGljayk9XCJoaWRlKClcIj5cbiAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInRvYXN0LWJvZHlcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vdG9hc3Quc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5nYlRvYXN0IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBPbkNoYW5nZXMge1xuICBwcml2YXRlIF90aW1lb3V0SUQ7XG5cbiAgLyoqXG4gICAqIERlbGF5IGFmdGVyIHdoaWNoIHRoZSB0b2FzdCB3aWxsIGhpZGUgKG1zKS5cbiAgICogZGVmYXVsdDogYDUwMGAgKG1zKSAoaW5oZXJpdGVkIGZyb20gTmdiVG9hc3RDb25maWcpXG4gICAqL1xuICBASW5wdXQoKSBkZWxheTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBdXRvIGhpZGUgdGhlIHRvYXN0IGFmdGVyIGEgZGVsYXkgaW4gbXMuXG4gICAqIGRlZmF1bHQ6IGB0cnVlYCAoaW5oZXJpdGVkIGZyb20gTmdiVG9hc3RDb25maWcpXG4gICAqL1xuICBASW5wdXQoKSBhdXRvaGlkZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGV4dCB0byBiZSB1c2VkIGFzIHRvYXN0J3MgaGVhZGVyLlxuICAgKiBJZ25vcmVkIGlmIGEgQ29udGVudENoaWxkIHRlbXBsYXRlIGlzIHNwZWNpZmllZCBhdCB0aGUgc2FtZSB0aW1lLlxuICAgKi9cbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgdGVtcGxhdGUgbGlrZSBgPG5nLXRlbXBsYXRlIG5nYlRvYXN0SGVhZGVyPjwvbmctdGVtcGxhdGU+YCBjYW4gYmVcbiAgICogdXNlZCBpbiB0aGUgcHJvamVjdGVkIGNvbnRlbnQgdG8gYWxsb3cgbWFya3VwIHVzYWdlLlxuICAgKi9cbiAgQENvbnRlbnRDaGlsZChOZ2JUb2FzdEhlYWRlciwge3JlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWV9KSBjb250ZW50SGVhZGVyVHBsOiBUZW1wbGF0ZVJlZjxhbnk+fCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogQW4gZXZlbnQgZmlyZWQgaW1tZWRpYXRlbHkgd2hlbiB0b2FzdCdzIGBoaWRlKClgIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQuXG4gICAqIEl0IGNhbiBvbmx5IG9jY3VyIGluIDIgZGlmZmVyZW50IHNjZW5hcmlvczpcbiAgICogLSBgYXV0b2hpZGVgIHRpbWVvdXQgZmlyZXNcbiAgICogLSB1c2VyIGNsaWNrcyBvbiBhIGNsb3NpbmcgY3Jvc3MgKCZ0aW1lcylcbiAgICpcbiAgICogQWRkaXRpb25hbGx5IHRoaXMgb3V0cHV0IGlzIHB1cmVseSBpbmZvcm1hdGl2ZS4gVGhlIHRvYXN0IHdvbid0IGRpc2FwcGVhci4gSXQncyB1cCB0byB0aGUgdXNlciB0byB0YWtlIGNhcmUgb2ZcbiAgICogdGhhdC5cbiAgICovXG4gIEBPdXRwdXQoJ2hpZGUnKSBoaWRlT3V0cHV0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKEBBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScpIHB1YmxpYyBhcmlhTGl2ZTogc3RyaW5nLCBjb25maWc6IE5nYlRvYXN0Q29uZmlnKSB7XG4gICAgaWYgKHRoaXMuYXJpYUxpdmUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5hcmlhTGl2ZSA9IGNvbmZpZy5hcmlhTGl2ZTtcbiAgICB9XG4gICAgdGhpcy5kZWxheSA9IGNvbmZpZy5kZWxheTtcbiAgICB0aGlzLmF1dG9oaWRlID0gY29uZmlnLmF1dG9oaWRlO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkgeyB0aGlzLl9pbml0KCk7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCdhdXRvaGlkZScgaW4gY2hhbmdlcykge1xuICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KCk7XG4gICAgICB0aGlzLl9pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKTtcbiAgICB0aGlzLmhpZGVPdXRwdXQuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdCgpIHtcbiAgICBpZiAodGhpcy5hdXRvaGlkZSAmJiAhdGhpcy5fdGltZW91dElEKSB7XG4gICAgICB0aGlzLl90aW1lb3V0SUQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGlkZSgpLCB0aGlzLmRlbGF5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbGVhclRpbWVvdXQoKSB7XG4gICAgaWYgKHRoaXMuX3RpbWVvdXRJRCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXRJRCk7XG4gICAgICB0aGlzLl90aW1lb3V0SUQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19