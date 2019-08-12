/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A configuration service for the [`NgbPopover`](#/components/popover/api#NgbPopover) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
var NgbPopoverConfig = /** @class */ (function () {
    function NgbPopoverConfig() {
        this.autoClose = true;
        this.placement = 'auto';
        this.triggers = 'click';
        this.disablePopover = false;
        this.openDelay = 0;
        this.closeDelay = 0;
    }
    NgbPopoverConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbPopoverConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgbPopoverConfig_Factory() { return new NgbPopoverConfig(); }, token: NgbPopoverConfig, providedIn: "root" });
    return NgbPopoverConfig;
}());
export { NgbPopoverConfig };
if (false) {
    /** @type {?} */
    NgbPopoverConfig.prototype.autoClose;
    /** @type {?} */
    NgbPopoverConfig.prototype.placement;
    /** @type {?} */
    NgbPopoverConfig.prototype.triggers;
    /** @type {?} */
    NgbPopoverConfig.prototype.container;
    /** @type {?} */
    NgbPopoverConfig.prototype.disablePopover;
    /** @type {?} */
    NgbPopoverConfig.prototype.popoverClass;
    /** @type {?} */
    NgbPopoverConfig.prototype.openDelay;
    /** @type {?} */
    NgbPopoverConfig.prototype.closeDelay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJwb3BvdmVyL3BvcG92ZXItY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVN6QztJQUFBO1FBRUUsY0FBUyxHQUFtQyxJQUFJLENBQUM7UUFDakQsY0FBUyxHQUFtQixNQUFNLENBQUM7UUFDbkMsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUVuQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZUFBVSxHQUFHLENBQUMsQ0FBQztLQUNoQjs7Z0JBVkEsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OzJCQVRoQztDQW1CQyxBQVZELElBVUM7U0FUWSxnQkFBZ0I7OztJQUMzQixxQ0FBaUQ7O0lBQ2pELHFDQUFtQzs7SUFDbkMsb0NBQW1COztJQUNuQixxQ0FBa0I7O0lBQ2xCLDBDQUF1Qjs7SUFDdkIsd0NBQXFCOztJQUNyQixxQ0FBYzs7SUFDZCxzQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BsYWNlbWVudEFycmF5fSBmcm9tICcuLi91dGlsL3Bvc2l0aW9uaW5nJztcblxuLyoqXG4gKiBBIGNvbmZpZ3VyYXRpb24gc2VydmljZSBmb3IgdGhlIFtgTmdiUG9wb3ZlcmBdKCMvY29tcG9uZW50cy9wb3BvdmVyL2FwaSNOZ2JQb3BvdmVyKSBjb21wb25lbnQuXG4gKlxuICogWW91IGNhbiBpbmplY3QgdGhpcyBzZXJ2aWNlLCB0eXBpY2FsbHkgaW4geW91ciByb290IGNvbXBvbmVudCwgYW5kIGN1c3RvbWl6ZSB0aGUgdmFsdWVzIG9mIGl0cyBwcm9wZXJ0aWVzIGluXG4gKiBvcmRlciB0byBwcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciBhbGwgdGhlIHBvcG92ZXJzIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBOZ2JQb3BvdmVyQ29uZmlnIHtcbiAgYXV0b0Nsb3NlOiBib29sZWFuIHwgJ2luc2lkZScgfCAnb3V0c2lkZScgPSB0cnVlO1xuICBwbGFjZW1lbnQ6IFBsYWNlbWVudEFycmF5ID0gJ2F1dG8nO1xuICB0cmlnZ2VycyA9ICdjbGljayc7XG4gIGNvbnRhaW5lcjogc3RyaW5nO1xuICBkaXNhYmxlUG9wb3ZlciA9IGZhbHNlO1xuICBwb3BvdmVyQ2xhc3M6IHN0cmluZztcbiAgb3BlbkRlbGF5ID0gMDtcbiAgY2xvc2VEZWxheSA9IDA7XG59XG4iXX0=