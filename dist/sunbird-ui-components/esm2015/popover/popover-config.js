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
export class NgbPopoverConfig {
    constructor() {
        this.autoClose = true;
        this.placement = 'auto';
        this.triggers = 'click';
        this.disablePopover = false;
        this.openDelay = 0;
        this.closeDelay = 0;
    }
}
NgbPopoverConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ NgbPopoverConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgbPopoverConfig_Factory() { return new NgbPopoverConfig(); }, token: NgbPopoverConfig, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJwb3BvdmVyL3BvcG92ZXItY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVV6QyxNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCO1FBRUUsY0FBUyxHQUFtQyxJQUFJLENBQUM7UUFDakQsY0FBUyxHQUFtQixNQUFNLENBQUM7UUFDbkMsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUVuQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZUFBVSxHQUFHLENBQUMsQ0FBQztLQUNoQjs7O1lBVkEsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7Ozs7SUFFOUIscUNBQWlEOztJQUNqRCxxQ0FBbUM7O0lBQ25DLG9DQUFtQjs7SUFDbkIscUNBQWtCOztJQUNsQiwwQ0FBdUI7O0lBQ3ZCLHdDQUFxQjs7SUFDckIscUNBQWM7O0lBQ2Qsc0NBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQbGFjZW1lbnRBcnJheX0gZnJvbSAnLi4vdXRpbC9wb3NpdGlvbmluZyc7XG5cbi8qKlxuICogQSBjb25maWd1cmF0aW9uIHNlcnZpY2UgZm9yIHRoZSBbYE5nYlBvcG92ZXJgXSgjL2NvbXBvbmVudHMvcG9wb3Zlci9hcGkjTmdiUG9wb3ZlcikgY29tcG9uZW50LlxuICpcbiAqIFlvdSBjYW4gaW5qZWN0IHRoaXMgc2VydmljZSwgdHlwaWNhbGx5IGluIHlvdXIgcm9vdCBjb21wb25lbnQsIGFuZCBjdXN0b21pemUgdGhlIHZhbHVlcyBvZiBpdHMgcHJvcGVydGllcyBpblxuICogb3JkZXIgdG8gcHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBmb3IgYWxsIHRoZSBwb3BvdmVycyB1c2VkIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTmdiUG9wb3ZlckNvbmZpZyB7XG4gIGF1dG9DbG9zZTogYm9vbGVhbiB8ICdpbnNpZGUnIHwgJ291dHNpZGUnID0gdHJ1ZTtcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnRBcnJheSA9ICdhdXRvJztcbiAgdHJpZ2dlcnMgPSAnY2xpY2snO1xuICBjb250YWluZXI6IHN0cmluZztcbiAgZGlzYWJsZVBvcG92ZXIgPSBmYWxzZTtcbiAgcG9wb3ZlckNsYXNzOiBzdHJpbmc7XG4gIG9wZW5EZWxheSA9IDA7XG4gIGNsb3NlRGVsYXkgPSAwO1xufVxuIl19