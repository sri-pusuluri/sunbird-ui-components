/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A configuration service for the [`NgbPagination`](#/components/pagination/api#NgbPagination) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
export class NgbPaginationConfig {
    constructor() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = 10;
        this.rotate = false;
    }
}
NgbPaginationConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ NgbPaginationConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgbPaginationConfig_Factory() { return new NgbPaginationConfig(); }, token: NgbPaginationConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgbPaginationConfig.prototype.disabled;
    /** @type {?} */
    NgbPaginationConfig.prototype.boundaryLinks;
    /** @type {?} */
    NgbPaginationConfig.prototype.directionLinks;
    /** @type {?} */
    NgbPaginationConfig.prototype.ellipses;
    /** @type {?} */
    NgbPaginationConfig.prototype.maxSize;
    /** @type {?} */
    NgbPaginationConfig.prototype.pageSize;
    /** @type {?} */
    NgbPaginationConfig.prototype.rotate;
    /** @type {?} */
    NgbPaginationConfig.prototype.size;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJwYWdpbmF0aW9uL3BhZ2luYXRpb24tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVN6QyxNQUFNLE9BQU8sbUJBQW1CO0lBRGhDO1FBRUUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsV0FBTSxHQUFHLEtBQUssQ0FBQztLQUVoQjs7O1lBVkEsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7Ozs7SUFFOUIsdUNBQWlCOztJQUNqQiw0Q0FBc0I7O0lBQ3RCLDZDQUFzQjs7SUFDdEIsdUNBQWdCOztJQUNoQixzQ0FBWTs7SUFDWix1Q0FBYzs7SUFDZCxxQ0FBZTs7SUFDZixtQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEEgY29uZmlndXJhdGlvbiBzZXJ2aWNlIGZvciB0aGUgW2BOZ2JQYWdpbmF0aW9uYF0oIy9jb21wb25lbnRzL3BhZ2luYXRpb24vYXBpI05nYlBhZ2luYXRpb24pIGNvbXBvbmVudC5cbiAqXG4gKiBZb3UgY2FuIGluamVjdCB0aGlzIHNlcnZpY2UsIHR5cGljYWxseSBpbiB5b3VyIHJvb3QgY29tcG9uZW50LCBhbmQgY3VzdG9taXplIHRoZSB2YWx1ZXMgb2YgaXRzIHByb3BlcnRpZXMgaW5cbiAqIG9yZGVyIHRvIHByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIGFsbCB0aGUgcGFnaW5hdGlvbnMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE5nYlBhZ2luYXRpb25Db25maWcge1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICBib3VuZGFyeUxpbmtzID0gZmFsc2U7XG4gIGRpcmVjdGlvbkxpbmtzID0gdHJ1ZTtcbiAgZWxsaXBzZXMgPSB0cnVlO1xuICBtYXhTaXplID0gMDtcbiAgcGFnZVNpemUgPSAxMDtcbiAgcm90YXRlID0gZmFsc2U7XG4gIHNpemU6ICdzbScgfCAnbGcnO1xufVxuIl19