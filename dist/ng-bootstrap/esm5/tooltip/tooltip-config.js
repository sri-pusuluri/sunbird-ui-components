/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A configuration service for the [`NgbTooltip`](#/components/tooltip/api#NgbTooltip) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */
var NgbTooltipConfig = /** @class */ (function () {
    function NgbTooltipConfig() {
        this.autoClose = true;
        this.placement = 'auto';
        this.triggers = 'hover focus';
        this.disableTooltip = false;
        this.openDelay = 0;
        this.closeDelay = 0;
    }
    NgbTooltipConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgbTooltipConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgbTooltipConfig_Factory() { return new NgbTooltipConfig(); }, token: NgbTooltipConfig, providedIn: "root" });
    return NgbTooltipConfig;
}());
export { NgbTooltipConfig };
if (false) {
    /** @type {?} */
    NgbTooltipConfig.prototype.autoClose;
    /** @type {?} */
    NgbTooltipConfig.prototype.placement;
    /** @type {?} */
    NgbTooltipConfig.prototype.triggers;
    /** @type {?} */
    NgbTooltipConfig.prototype.container;
    /** @type {?} */
    NgbTooltipConfig.prototype.disableTooltip;
    /** @type {?} */
    NgbTooltipConfig.prototype.tooltipClass;
    /** @type {?} */
    NgbTooltipConfig.prototype.openDelay;
    /** @type {?} */
    NgbTooltipConfig.prototype.closeDelay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJ0b29sdGlwL3Rvb2x0aXAtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVN6QztJQUFBO1FBRUUsY0FBUyxHQUFtQyxJQUFJLENBQUM7UUFDakQsY0FBUyxHQUFtQixNQUFNLENBQUM7UUFDbkMsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQUV6QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZUFBVSxHQUFHLENBQUMsQ0FBQztLQUNoQjs7Z0JBVkEsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OzJCQVRoQztDQW1CQyxBQVZELElBVUM7U0FUWSxnQkFBZ0I7OztJQUMzQixxQ0FBaUQ7O0lBQ2pELHFDQUFtQzs7SUFDbkMsb0NBQXlCOztJQUN6QixxQ0FBa0I7O0lBQ2xCLDBDQUF1Qjs7SUFDdkIsd0NBQXFCOztJQUNyQixxQ0FBYzs7SUFDZCxzQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BsYWNlbWVudEFycmF5fSBmcm9tICcuLi91dGlsL3Bvc2l0aW9uaW5nJztcblxuLyoqXG4gKiBBIGNvbmZpZ3VyYXRpb24gc2VydmljZSBmb3IgdGhlIFtgTmdiVG9vbHRpcGBdKCMvY29tcG9uZW50cy90b29sdGlwL2FwaSNOZ2JUb29sdGlwKSBjb21wb25lbnQuXG4gKlxuICogWW91IGNhbiBpbmplY3QgdGhpcyBzZXJ2aWNlLCB0eXBpY2FsbHkgaW4geW91ciByb290IGNvbXBvbmVudCwgYW5kIGN1c3RvbWl6ZSB0aGUgdmFsdWVzIG9mIGl0cyBwcm9wZXJ0aWVzIGluXG4gKiBvcmRlciB0byBwcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciBhbGwgdGhlIHRvb2x0aXBzIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBOZ2JUb29sdGlwQ29uZmlnIHtcbiAgYXV0b0Nsb3NlOiBib29sZWFuIHwgJ2luc2lkZScgfCAnb3V0c2lkZScgPSB0cnVlO1xuICBwbGFjZW1lbnQ6IFBsYWNlbWVudEFycmF5ID0gJ2F1dG8nO1xuICB0cmlnZ2VycyA9ICdob3ZlciBmb2N1cyc7XG4gIGNvbnRhaW5lcjogc3RyaW5nO1xuICBkaXNhYmxlVG9vbHRpcCA9IGZhbHNlO1xuICB0b29sdGlwQ2xhc3M6IHN0cmluZztcbiAgb3BlbkRlbGF5ID0gMDtcbiAgY2xvc2VEZWxheSA9IDA7XG59XG4iXX0=