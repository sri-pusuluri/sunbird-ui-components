/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A configuration service for the [`NgbTimepicker`](#/components/timepicker/api#NgbTimepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the timepickers used in the application.
 */
export class NgbTimepickerConfig {
    constructor() {
        this.meridian = false;
        this.spinners = true;
        this.seconds = false;
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.disabled = false;
        this.readonlyInputs = false;
        this.size = 'medium';
    }
}
NgbTimepickerConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ NgbTimepickerConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgbTimepickerConfig_Factory() { return new NgbTimepickerConfig(); }, token: NgbTimepickerConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgbTimepickerConfig.prototype.meridian;
    /** @type {?} */
    NgbTimepickerConfig.prototype.spinners;
    /** @type {?} */
    NgbTimepickerConfig.prototype.seconds;
    /** @type {?} */
    NgbTimepickerConfig.prototype.hourStep;
    /** @type {?} */
    NgbTimepickerConfig.prototype.minuteStep;
    /** @type {?} */
    NgbTimepickerConfig.prototype.secondStep;
    /** @type {?} */
    NgbTimepickerConfig.prototype.disabled;
    /** @type {?} */
    NgbTimepickerConfig.prototype.readonlyInputs;
    /** @type {?} */
    NgbTimepickerConfig.prototype.size;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3VuYmlyZC1lZC9zdW5iaXJkLXVpLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJ0aW1lcGlja2VyL3RpbWVwaWNrZXItY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVN6QyxNQUFNLE9BQU8sbUJBQW1CO0lBRGhDO1FBRUUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixTQUFJLEdBQWlDLFFBQVEsQ0FBQztLQUMvQzs7O1lBWEEsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7Ozs7SUFFOUIsdUNBQWlCOztJQUNqQix1Q0FBZ0I7O0lBQ2hCLHNDQUFnQjs7SUFDaEIsdUNBQWE7O0lBQ2IseUNBQWU7O0lBQ2YseUNBQWU7O0lBQ2YsdUNBQWlCOztJQUNqQiw2Q0FBdUI7O0lBQ3ZCLG1DQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSBjb25maWd1cmF0aW9uIHNlcnZpY2UgZm9yIHRoZSBbYE5nYlRpbWVwaWNrZXJgXSgjL2NvbXBvbmVudHMvdGltZXBpY2tlci9hcGkjTmdiVGltZXBpY2tlcikgY29tcG9uZW50LlxuICpcbiAqIFlvdSBjYW4gaW5qZWN0IHRoaXMgc2VydmljZSwgdHlwaWNhbGx5IGluIHlvdXIgcm9vdCBjb21wb25lbnQsIGFuZCBjdXN0b21pemUgdGhlIHZhbHVlcyBvZiBpdHMgcHJvcGVydGllcyBpblxuICogb3JkZXIgdG8gcHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBmb3IgYWxsIHRoZSB0aW1lcGlja2VycyB1c2VkIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTmdiVGltZXBpY2tlckNvbmZpZyB7XG4gIG1lcmlkaWFuID0gZmFsc2U7XG4gIHNwaW5uZXJzID0gdHJ1ZTtcbiAgc2Vjb25kcyA9IGZhbHNlO1xuICBob3VyU3RlcCA9IDE7XG4gIG1pbnV0ZVN0ZXAgPSAxO1xuICBzZWNvbmRTdGVwID0gMTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgcmVhZG9ubHlJbnB1dHMgPSBmYWxzZTtcbiAgc2l6ZTogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJyA9ICdtZWRpdW0nO1xufVxuIl19